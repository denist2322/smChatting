package com.sbb.sm_chatting.Service;

import com.sbb.sm_chatting.Entity.Talkroom;
import com.sbb.sm_chatting.Repository.TalkRoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TalkRoomService {

    private final TalkRoomRepository talkRoomRepository;

    // 단일 채팅방을 가져온다 (대화내용 저장에 사용)
    public Talkroom getChatroom(String id) {
        return talkRoomRepository.findById(id).get();
    }
}
