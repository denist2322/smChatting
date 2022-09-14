package com.sbb.sm_chatting.Controller;

import com.sbb.sm_chatting.DTO.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ChatController {
    private final SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping(value = "/chat/chatting") //클라이언트에서 수신되는 곳
    public void chatController(Message message) {
        simpMessagingTemplate.convertAndSend("/sub/chatting/room/" + message.getChannelId(), message); // 클이언트로 전송
    }
}
