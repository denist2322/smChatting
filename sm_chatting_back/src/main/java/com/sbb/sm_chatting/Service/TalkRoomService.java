package com.sbb.sm_chatting.Service;

import com.sbb.sm_chatting.Entity.Talkroom;
import com.sbb.sm_chatting.Repository.TalkRoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class TalkRoomService {

    private final TalkRoomRepository talkRoomRepository;

    // 단일 채팅방을 가져온다 (대화내용 저장에 사용)
    public Talkroom getChatroom(String id) {
        return talkRoomRepository.findById(id).get();
    }

    public String addTalkroom(Map<String, String> info) {
        String myid = info.get("myid");
        String otherOne = info.get("otherOne");
        String newTalkroom = "";
        if(Long.parseLong(myid) > Long.parseLong(otherOne)){
            newTalkroom = "'" + otherOne + "'" + "과" + "'" + myid + "'";
        }
        else{
            newTalkroom = "'" + myid + "'" + "과" + "'" + otherOne + "'";
        }
        if (!talkRoomRepository.existsById(newTalkroom)){
            Talkroom talkroom = new Talkroom();
            talkroom.setId(newTalkroom);
            talkRoomRepository.save(talkroom);

        }
        return newTalkroom;
    }
}
