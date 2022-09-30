package com.sbb.sm_chatting.DTO;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Message {
    private String talkroom_id;
    private long senduserid;
    private String content;
    private LocalDateTime regdate;
    private String files;

    // 생성자
    public Message() {

    }

    // 생성자 작성으로 payload가 들어오자마자 Message 셋팅이 가능하다.
    public Message(String talkroom_id, long senduserid, String content, LocalDateTime regdate, String files) {
        this.talkroom_id = talkroom_id;
        this.senduserid = senduserid;
        this.content = content;
        this.regdate = regdate;
        this.files = files;
    }
}
