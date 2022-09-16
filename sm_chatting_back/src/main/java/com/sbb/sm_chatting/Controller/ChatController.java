package com.sbb.sm_chatting.Controller;

import com.sbb.sm_chatting.DTO.Message;
import com.sbb.sm_chatting.DTO.TalkSetting;
import com.sbb.sm_chatting.Service.TalkService;
import lombok.RequiredArgsConstructor;
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
    @MessageMapping("/chat")
    public void sendMessage(@Payload Message message){
        talkService.TalkSave(message);
        this.simpMessagingTemplate.convertAndSend("/queue/addChatToClient",message);
    }

    @MessageMapping("/first")
    public void firstSetting(){
        List<TalkSetting> talkList = talkService.talkList();
        this.simpMessagingTemplate.convertAndSend("/queue/firstChat",talkList);
    }
//    @MessageMapping("/join")
//    public void joinUser(@Payload String jwtToken){
//        userList.add(jwtToken);
//        userList.forEach(user-> System.out.println(user));
//    }
}
