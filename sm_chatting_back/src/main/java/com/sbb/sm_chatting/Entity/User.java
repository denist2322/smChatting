package com.sbb.sm_chatting.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Entity
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class)
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

    public List<String> getRoleList() {
        if(this.userRole.length() > 0) {
            return Arrays.asList(this.userRole.split(","));
        }
        return new ArrayList<>();
    }
    // 유저 기준으로 보낸 대화
    @OneToMany(mappedBy = "send", cascade = CascadeType.REMOVE)
    private List<Talk> sendTalkList;
    // 유저 기준으로 받은 대화
    @OneToMany(mappedBy = "receiver", cascade = CascadeType.REMOVE)
    private List<Talk> receiverTalkList;
}
