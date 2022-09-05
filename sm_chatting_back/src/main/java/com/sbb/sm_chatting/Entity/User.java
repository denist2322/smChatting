package com.sbb.sm_chatting.Entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;
    private LocalDateTime userRegDate;
    private LocalDateTime userUpdateDate;
    private String userEmail;
    private String userName;
    private String userPassword;
    private String userRole;

}
