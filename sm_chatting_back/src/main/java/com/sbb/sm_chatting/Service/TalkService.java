package com.sbb.sm_chatting.Service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.sbb.sm_chatting.DTO.*;
import com.sbb.sm_chatting.Entity.Talk;
import com.sbb.sm_chatting.Entity.Talkroom;
import com.sbb.sm_chatting.Repository.TalkRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.*;

@Service
@RequiredArgsConstructor
public class TalkService {

    private final TalkRepository talkRepository;
    private final TalkRoomService talkRoomService;
    private final UserService userService;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    private final AmazonS3 amazonS3;

    // 대화내용을 대화 방 기준으로 추출한다.
    public List<TalkSetting> talkList(String id) {
        return talkRepository.findByTalkroomId(id);
    }

    // 대화 내용을 저장한다.
    public Talk TalkSave(Message message, String roomId, UserId userId) {
        Talk talk = new Talk();
        talk.setTalkregdate(LocalDateTime.now());
        // 내용을 저장함 (파일이면 내용은 null로 들어감)
        try {
            talk.setContent(message.getContent());
        }
        catch (NullPointerException e){
            talk.setContent(null);
        }
        // 파일을 저장함 (내용이면 파일은 null로 들어감)
        try {
            talk.setFiles(message.getFiles());
        }
        catch (NullPointerException e){
            talk.setFiles(null);
        }

        try {
            Talkroom talkroom = talkRoomService.getChatroom(roomId);
            talk.setTalkroom(talkroom);
        } catch (NullPointerException e) {
            return null;
        }
        // userId는 문자열이다. => int형으로 바꾸기 가능.
        talk.setSenduserid(Long.parseLong(userId.getUserId()));

        talkRepository.save(talk);
        return talk;
    }

    public void TalkSave(Talk talk) {
        talkRepository.save(talk);
    }

    // WebSocket으로 메시지를 보낼 때 Message에 필요한 내용을 Talk 으로 부터 받아서 보낸다.
    public void convertMessage(Message message, Talk talk) {
        message.setRegdate(talk.getTalkregdate());
        message.setSenduserid(talk.getSenduserid());
        message.setTalkroom_id(talk.getTalkroom().getId());
    }

    // 최신 채팅 내역 및 방을 가져온다.
    public List<TalkChatSetting> getSideBarChat(String id) {
        // 요청한 유저가 포함된 채팅방의 데이터 가져온다.
        List<TalkSetting> talkSettings = talkRepository.findByIdExsits(id);
        // 그 채팅방에 상대 유저의 정보를 가져온다.
        List<UserInfo> userInfos = new ArrayList<>();

        for (int i = 0; i < talkSettings.size(); i++) {
            // 채팅방에는 당사자와 상대를 구분 할 수 있는 id로 만들었다.
            // 상대의 id로 추출하는 과정이다.
            String otherOneId = talkSettings.get(i).getTalkroom_id();
            otherOneId = splitChatroomId(id, otherOneId);

            UserInfo userInfo = userService.findId(Long.parseLong(otherOneId));
            userInfos.add(userInfo);
        }
        // talkSetting과 UserInfo를 보내기 위해 sideBarChats라는 객체를 만들었다.
        List<TalkChatSetting> talkChatSettings = new ArrayList<>();

        for (int i = 0; i < talkSettings.size(); i++) {
            TalkChatSetting talkChatSetting = new TalkChatSetting(talkSettings.get(i), userInfos.get(i));
            talkChatSettings.add(talkChatSetting);
        }

        return talkChatSettings;
    }

    // == 채팅방 ID 에서 필요한 정보(상대방 아이디, 본인아이디)를 뺀다.
    public String splitChatroomId(String myId, String roomId){
        String splitRoomId = roomId.replace(myId, "");
        splitRoomId = splitRoomId.replace("과", "");
        splitRoomId = splitRoomId.replace("'", "");
        return splitRoomId;
    }

    // == 파일 업로드를 진행한다. ==
    public List<String> fileUpload(List<MultipartFile> files, Long id) {
        String root = "C:\\upload_file";
        List<String> result = new ArrayList<>();

        // 파일 경로에 폴더가 존재하는지 체크
        File fileCheck = new File(root);
        if (!fileCheck.exists()) fileCheck.mkdirs();

        // 파일을 UUID를 사용하여 저장한다. (이름 중복을 방지함.)
        List<Map<String, String>> fileList = new ArrayList<>();

        for (int i = 0; i < files.size(); i++) {
            String originalFile = files.get(i).getOriginalFilename();
            String ext = originalFile.substring(originalFile.lastIndexOf("."));
            String changedFile = UUID.randomUUID().toString() + ext;

            Map<String, String> map = new HashMap<>();
            map.put("originalFile", originalFile);
            map.put("changeFile", changedFile);
            fileList.add(map);
        }

        // 파일 업로드를 시도한다. (에러 발생시 지금까지 넣었던 파일을 삭제한다.)
        try {
            for (int i = 0; i < files.size(); i++) {
                String filepath = root + "\\" + fileList.get(i).get("changeFile");
                File uploadFile = new File(filepath);
                files.get(i).transferTo(uploadFile);
                result.add(fileList.get(i).get("changeFile"));
            }
            System.out.println("파일 업로드 성공");
            return result;
        } catch (IllegalStateException | IOException e) {
            System.out.println("파일 업로드 실패");
            for (int i = 0; i < files.size(); i++) {
                new File(root + "\\" + fileList.get(i).get("changeFile")).delete();
            }
            e.printStackTrace();
            return null;
        }
    }

    public void awsFileUpload(List<MultipartFile> files) throws IOException {
        files.stream()
                .forEach(file-> {
                    String s3FileName = String.valueOf(UUID.randomUUID());
                    ObjectMetadata objectMetadata = new ObjectMetadata();
                    try{
                        objectMetadata.setContentLength(file.getInputStream().available());
                        amazonS3.putObject(bucket, s3FileName, file.getInputStream(), objectMetadata);
                    }catch (IOException e){
                        throw new RuntimeException(e);
                    }
                });

    }
}
