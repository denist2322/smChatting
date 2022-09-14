package com.sbb.sm_chatting.DTO;

import lombok.Data;

@Data
public class Message {
    private Integer channelId;
    private Integer writerId;
    private String chat;
}
