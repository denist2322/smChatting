package com.sbb.sm_chatting.Entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Friend {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long id;
    private long myid;
    @ManyToOne
    private User user;
}
