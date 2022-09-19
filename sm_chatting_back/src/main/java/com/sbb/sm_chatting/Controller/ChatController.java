package com.sbb.sm_chatting.Controller;

import com.sbb.sm_chatting.DTO.Message;
import com.sbb.sm_chatting.DTO.TalkSetting;
import com.sbb.sm_chatting.Entity.Talk;
import com.sbb.sm_chatting.Service.TalkRoomService;
import com.sbb.sm_chatting.Service.TalkService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequiredArgsConstructor
public class ChatController {
    private static Set<String> userList = new HashSet<>();

    private final SimpMessagingTemplate simpMessagingTemplate;
    private final TalkService talkService;

    private final TalkRoomService talkRoomService;

    @MessageMapping("/chat/{id}")
    public void sendMessage(@Payload Message message, @DestinationVariable("id") String id) {
        Talk talk = talkService.TalkSave(message, id);
        talkService.convertMessage(message, talk);
        this.simpMessagingTemplate.convertAndSend("/queue/addChatToClient/" + id, message);
    }

    @MessageMapping("/first/{id}")
    public void firstSetting(@DestinationVariable("id") String id) {
        List<TalkSetting> talkList = talkService.talkList(id);
        this.simpMessagingTemplate.convertAndSend("/queue/firstChat/" + id, talkList);
    }

//    @MessageMapping("/chatRoomSetting/{userId}")
//    public  void
//    @MessageMapping("/join")
//    public void joinUser(@Payload String jwtToken){
//        userList.add(jwtToken);
//        userList.forEach(user-> System.out.println(user));
//    }
}
