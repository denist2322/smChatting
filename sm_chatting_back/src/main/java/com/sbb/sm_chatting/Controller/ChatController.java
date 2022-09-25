package com.sbb.sm_chatting.Controller;

import com.sbb.sm_chatting.DTO.Message;
import com.sbb.sm_chatting.DTO.SideBarChat;
import com.sbb.sm_chatting.DTO.TalkSetting;
import com.sbb.sm_chatting.DTO.UserId;
import com.sbb.sm_chatting.Entity.Talk;
import com.sbb.sm_chatting.Service.TalkService;
import com.sbb.sm_chatting.Service.UserService;
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
    private final UserService userService;

    // 실시간 채팅에 대한 응답
    @MessageMapping("/chat/{id}")
    public void sendMessage(@Payload Message message, @Payload UserId userId, @DestinationVariable("id") String id) {
        Talk talk = talkService.TalkSave(message, id, userId);
        talkService.convertMessage(message, talk);
        this.simpMessagingTemplate.convertAndSend("/queue/addChatToClient/" + id, message);
        // 채팅방으로 해야지 두 유저 사이의 공유가 가능함.
        String[] s = id.split("과");
        for(String tmp : s){
            this.simpMessagingTemplate.convertAndSend("/queue/chatList/"+ tmp, message);
        }

    }

    // 채팅방에 처음 들어갔을 때 정보를 대화 내용을 가져옴
    @MessageMapping("/first/{id}")
    public void firstSetting(@DestinationVariable("id") String id) {
        List<TalkSetting> talkList = talkService.talkList(id);
        this.simpMessagingTemplate.convertAndSend("/queue/firstChat/" + id, talkList);
    }

    // 로그인한 유저가 소속된 각 채팅방의 제일 최신 채팅 한건씩을 가져옴
    @MessageMapping("/chatRoomSetting/{id}")
    public void chatRoomSetting(@DestinationVariable("id") String id){
        List<SideBarChat> sideBarChats = talkService.getSideBarChat(id);
        this.simpMessagingTemplate.convertAndSend("/queue/chatRoomSetting/" + id, sideBarChats);
    }

}
