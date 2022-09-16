package com.sbb.sm_chatting.Entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
@Data
public class Talk {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long talkid;
    private LocalDateTime talkregdate;
    private String content;
}
