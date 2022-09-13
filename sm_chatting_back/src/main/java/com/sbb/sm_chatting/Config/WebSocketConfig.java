package com.sbb.sm_chatting.Config;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configurable
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        // enableSimpleBroker()
        // 스프링에서 제공하는 내장프로커로 /sub로 들어오는 메시지를 브로커가 처리한다. (구독)
        registry.enableSimpleBroker("/sub");

        // setApplicationDestinationPrefixes()
        // 바로 메시지를 뿌리는 것이 아닌 처리를 하고 보내기 위해 메시지 핸들러로 라우팅됨.
        registry.setApplicationDestinationPrefixes("/pub");
    }
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // 채팅 클라이언트가 서버와 연결하웹소켓 셋팅 부분 ->웹소켓 연결 주소 -> /url/chatting
        registry.addEndpoint("/chat/chatting").setAllowedOriginPatterns("*").withSockJS();
    }
}
