package com.sbb.sm_chatting.Service;

import com.sbb.sm_chatting.Entity.Talkroom;
import com.sbb.sm_chatting.Repository.TalkRoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TalkRoomService {

    private final TalkRoomRepository talkRoomRepository;

    public Talkroom getChatroom(String id) {
        return talkRoomRepository.findById(id).get();
    }

//    public List<TalkSetting> talkList(String id) {
//        Talkroom talkroom = talkRoomRepository.findById(id).get();
//
//    }
}
