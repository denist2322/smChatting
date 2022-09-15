package com.sbb.sm_chatting.Controller;

import com.sbb.sm_chatting.DTO.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;
import java.util.Set;

@RestController
public class ChatController {
    private static Set<String> userList = new HashSet<>();

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/chat")
    public void sendMessage(@Payload Message message){
        this.simpMessagingTemplate.convertAndSend("/queue/addChatToClient",message);
    }

//    @MessageMapping("/join")
//    public void joinUser(@Payload String jwtToken){
//        userList.add(jwtToken);
//        userList.forEach(user-> System.out.println(user));
//    }
}
