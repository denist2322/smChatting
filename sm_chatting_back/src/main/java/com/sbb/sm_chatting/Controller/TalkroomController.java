package com.sbb.sm_chatting.Controller;

import com.sbb.sm_chatting.DTO.Message;
import com.sbb.sm_chatting.DTO.TalkSetting;
import com.sbb.sm_chatting.DTO.UserId;
import com.sbb.sm_chatting.Service.TalkRoomService;
import com.sbb.sm_chatting.Service.TalkService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class TalkroomController {
    private final TalkRoomService talkRoomService;
    private final TalkService talkServicel;

    // 1:1 채팅을 눌렀을 때 진행됩니다.
    @PostMapping("/addTalkroom")
    public String addTalkroom(@RequestBody Map<String, String> info){
        String talkroomId = talkRoomService.addTalkroom(info);
        List<TalkSetting> talkSettings = talkServicel.talkList(talkroomId);
        // 대화방이 존재하지 않는다면 새로운 대화방을 생성합니다.
        if(talkSettings.size() == 0){
            Message message = new Message(talkroomId, 0, "대화방이 생성되었습니다.", LocalDateTime.now(), null);
            UserId userId = new UserId("0");
            talkServicel.TalkSave(message, talkroomId, userId);
        }
        return talkroomId;
    }

}
