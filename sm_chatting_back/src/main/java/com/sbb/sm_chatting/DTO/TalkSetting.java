package com.sbb.sm_chatting.DTO;

import java.util.Date;

public interface TalkSetting {
    Date getTalkregdate();
    String getContent();
    int getSenduserid();
    String getTalkroom_id();

//    TalkroomId getTalkroom();
//
//    interface TalkroomId {
//        String getId();
//    }
}
