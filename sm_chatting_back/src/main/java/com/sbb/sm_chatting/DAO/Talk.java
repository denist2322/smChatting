package com.sbb.sm_chatting.DAO;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
public class Talk {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long talkId;
    private LocalDateTime talkRegDate;
    private String content;

    // 유저에 의해 대화가 보내짐
    @ManyToOne
    User send;
    // 보낸 대화를 받은 유저
    @ManyToOne
    User receiver;

}
