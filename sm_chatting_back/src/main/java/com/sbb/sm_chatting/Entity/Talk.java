package com.sbb.sm_chatting.Entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
public class Talk {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long id;
    private LocalDateTime talkregdate;
    private String content;
    private long senduserid;
    private String files;
    @ManyToOne
    private Talkroom talkroom;

}
