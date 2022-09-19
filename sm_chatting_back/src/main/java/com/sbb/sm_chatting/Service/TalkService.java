package com.sbb.sm_chatting.Service;

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

    public List<TalkSetting> talkList(String id) {
        return talkRepository.findByTalkroomId(id);
    }

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

    public void convertMessage(Message message, Talk talk) {
        message.setRegdate(talk.getTalkregdate().toString());
        message.setSenduserid(talk.getSenduserid());
    }
}
