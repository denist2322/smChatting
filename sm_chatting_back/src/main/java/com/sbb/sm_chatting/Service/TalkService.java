package com.sbb.sm_chatting.Service;

import com.sbb.sm_chatting.DTO.*;
import com.sbb.sm_chatting.Entity.Talk;
import com.sbb.sm_chatting.Entity.Talkroom;
import com.sbb.sm_chatting.Repository.TalkRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TalkService {

    private final TalkRepository talkRepository;
    private final TalkRoomService talkRoomService;
    private final UserService userService;

    // 대화내용을 대화 방 기준으로 추출한다.
    public List<TalkSetting> talkList(String id) {
        return talkRepository.findByTalkroomId(id);
    }

    // 대화 내용을 저장한다.
    public Talk TalkSave(Message message, String roomId, UserId userId) {
        Talk talk = new Talk();
        talk.setTalkregdate(LocalDateTime.now());
        talk.setContent(message.getContent());
        try {
            Talkroom talkroom = talkRoomService.getChatroom(roomId);
            talk.setTalkroom(talkroom);
        } catch (NullPointerException e) {
            return null;
        }
        // userId는 문자열이다. => int형으로 바꾸기 가능.
        talk.setSenduserid(Integer.parseInt(userId.getUserId()));

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
    public List<SideBarChat> getSideBarChat(String id) {
        // 요청한 유저가 포함된 채팅방의 데이터 가져온다.
        List<TalkSetting> talkSettings = talkRepository.findByIdExsits(id);
        // 그 채팅방에 상대 유저의 정보를 가져온다.
        List<UserInfo> userInfos = new ArrayList<>();

        for (int i = 0; i < talkSettings.size(); i++) {
            // 채팅방에는 당사자와 상대를 구분 할 수 있는 id로 만들었다.
            // 상대의 id로 추출하는 과정이다.
            String opponentId = talkSettings.get(i).getTalkroom_id();
            opponentId = opponentId.replace(id, "");
            opponentId = opponentId.replace("과", "");
            opponentId = opponentId.replace("'", "");
            UserInfo userInfo = userService.findId(Long.parseLong(opponentId));
            userInfos.add(userInfo);
        }
        // talkSetting과 UserInfo를 보내기 위해 sideBarChats라는 객체를 만들었다.
        List<SideBarChat> sideBarChats = new ArrayList<>();

        for (int i = 0; i < talkSettings.size(); i++) {
            SideBarChat sideBarChat = new SideBarChat(talkSettings.get(i), userInfos.get(i));
            sideBarChats.add(sideBarChat);
        }

        return sideBarChats;
    }


}
