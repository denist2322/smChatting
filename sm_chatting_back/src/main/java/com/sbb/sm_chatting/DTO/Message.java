package com.sbb.sm_chatting.DTO;

import lombok.Data;

import java.util.Date;

@Data
public class Message {
    private String talkroom_id;
    private int senduserid;
    private String content;
    private String regdate;

    public Message() {

    }

    public Message(String talkroom_id, int senduserid, String content, Date createDate) {
        this.talkroom_id = talkroom_id;
        this.senduserid = senduserid;
        this.content = content;
        this.regdate = regdate;
    }
}
