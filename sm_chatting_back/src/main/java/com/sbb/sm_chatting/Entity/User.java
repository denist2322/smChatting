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
    private long id;
    private LocalDateTime userregdate;
    private LocalDateTime userupdatedate;
    private String useremail;
    private String username;
    private String userpassword;
    private String userrole;

    public List<String> getRoleList() {
        if(this.userrole.length() > 0) {
            return Arrays.asList(this.userrole.split(","));
        }
        return new ArrayList<>();
    }
}
