package com.sbb.sm_chatting.DTO;

import lombok.Data;

@Data
public class TalkChatSetting {
    TalkSetting talkSetting;
    UserInfo userInfo;

    public TalkChatSetting() {

    }

    public TalkChatSetting(TalkSetting talkSetting, UserInfo userInfo) {
        this.talkSetting = talkSetting;
        this.userInfo = userInfo;
    }
}
