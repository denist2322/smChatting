package com.sbb.sm_chatting.DTO;

import lombok.Data;

import java.util.Date;

@Data
public class Message {
    private String roomId;
    private int senduserid;
    private String content;
    private String regdate;

    public Message() {

    }

    public Message(String content, Date createDate) {
        this.roomId = roomId;
        this.senduserid = senduserid;
        this.content = content;
        this.regdate = regdate;
    }
}
