package com.sbb.sm_chatting.DTO;

import lombok.Data;

// payload에서 유저의 아이디만 추출하고자 한다.
// Message에 한번에 담을 수 있지만 유저아이디를 계속 주고받고 싶지 않아서 사용했다.
@Data
public class UserId {
    private String userId;
    // 생성자
    public UserId(){
        
    }
    public UserId(String userId){
        this.userId = userId;
    }
}
