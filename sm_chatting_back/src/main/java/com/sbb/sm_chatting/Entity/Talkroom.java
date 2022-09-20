package com.sbb.sm_chatting.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class)
public class Talkroom {
    @Id
    private String id;

    @OneToMany (mappedBy = "talkroom", cascade = CascadeType.REMOVE)
    private List<Talk> talk;
}
