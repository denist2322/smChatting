package com.sbb.sm_chatting.Service;

import com.sbb.sm_chatting.DTO.Message;
import com.sbb.sm_chatting.DTO.TalkSetting;
import com.sbb.sm_chatting.Entity.Talk;
import com.sbb.sm_chatting.Repository.TalkRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TalkService {

    private final TalkRepository talkRepository;
    public List<TalkSetting> talkList() {
        return talkRepository.findAllBy();
    }

    public void TalkSave(Message message) {
        Talk talk = new Talk();
        talk.setTalkregdate(LocalDateTime.now());
        talk.setContent(message.getContent());
        talkRepository.save(talk);
    }
}
