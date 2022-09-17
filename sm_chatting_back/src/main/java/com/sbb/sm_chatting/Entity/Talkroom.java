package com.sbb.sm_chatting.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class)
public class Talkroom {
    @Id
    // roomid를 endpoint에 사용 할 것이다.
    private String id;

    @OneToMany (mappedBy = "talkroom", cascade = CascadeType.REMOVE)
    private List<Talk> talkList;

}
