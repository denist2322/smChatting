package com.sbb.sm_chatting.Service;

import com.sbb.sm_chatting.DTO.ChatRoomSetting;
import com.sbb.sm_chatting.DTO.Message;
import com.sbb.sm_chatting.DTO.TalkSetting;
import com.sbb.sm_chatting.Entity.Talk;
import com.sbb.sm_chatting.Entity.Talkroom;
import com.sbb.sm_chatting.Repository.TalkRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TalkService {

    private final TalkRepository talkRepository;
    private final TalkRoomService talkRoomService;

    // 대화내용을 대화 방 기준으로 추출한다.
    public List<TalkSetting> talkList(String id) {
        return talkRepository.findByTalkroomId(id);
    }

    // 대화 내용을 저장한다.
    public Talk TalkSave(Message message, String roomId) {
        Talk talk = new Talk();
        talk.setTalkregdate(LocalDateTime.now());
        talk.setContent(message.getContent());
        try {
            Talkroom talkroom = talkRoomService.getChatroom(roomId);
            talk.setTalkroom(talkroom);
        }
        catch(NullPointerException e){
            return null;
        }
        // 현재는 입시로 1로 처리함.
        talk.setSenduserid(1);

        talkRepository.save(talk);
        return talk;
    }

    // WebSocket으로 메시지를 보낼 때 Message에 필요한 내용을 Talk 으로 부터 받아서 보낸다.
    public void convertMessage(Message message, Talk talk) {
        message.setRegdate(talk.getTalkregdate().toString());
        message.setSenduserid(talk.getSenduserid());
    }

    // 사이드바 이용을 위한 대화내용을 가져온다.
    public List<ChatRoomSetting> getChatroomList(String id) {
       return talkRepository.findByIdExsits(id);
    }


}
