package com.sbb.sm_chatting.DTO;

public interface FriendSetting {
    User getUser();
    interface User{
        Long getId();
        String getUseremail();
        String getUsername();
    }
}
