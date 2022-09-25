package com.sbb.sm_chatting.DTO;

import lombok.Data;

@Data
public class SideBarChat {
    TalkSetting talkSetting;
    UserInfo userInfo;

    public SideBarChat() {

    }

    public SideBarChat(TalkSetting talkSetting, UserInfo userInfo) {
        this.talkSetting = talkSetting;
        this.userInfo = userInfo;
    }
}
