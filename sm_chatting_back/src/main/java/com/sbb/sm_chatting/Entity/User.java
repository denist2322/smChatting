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
    private long UserId;
    private LocalDateTime UserRegDate;
    private LocalDateTime UserUpdateDate;
    private String UserEmail;
    private String UserName;
    private String UserPassword;
    private String UserRole;

}
