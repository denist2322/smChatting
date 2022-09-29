package com.sbb.sm_chatting.Controller;
/*
== Introduce ==

== Release ==
22.09.07 : 유저 회원가입 구현(공백 에러 구현)
         : 로그인 로직 컨트롤러 서비스 분리
*/

import com.sbb.sm_chatting.DTO.UserInfo;
import com.sbb.sm_chatting.Entity.User;
import com.sbb.sm_chatting.Service.TalkService;
import com.sbb.sm_chatting.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final TalkService talkService;

    @PostMapping("/login")
    public String login(@RequestBody Map<String, String> user) {
        // 로그인 성공시 토큰이 발급되며 그렇지 않다면 에러메시지가 return 된다.
        return userService.login(user);
    }

    @PostMapping("/join")
    public String join(@RequestBody Map<String, String> user) {
        // 회원가입에 따른 서비스로부터 받은 성공/오류메시지를 넘긴다.
        return userService.doJoin(user);
    }

    @PostMapping("/searchUser")
    public UserInfo searchUser(@RequestBody Map<String, String> user) {
        return userService.searchUser(user);
    }

    @PostMapping("/otherOneName")
    public String otherOneName(@RequestBody Map<String, String> user) {
        String otherOneId = talkService.splitChatroomId(user.get("myId"), user.get("chatRoomId"));
        User userInfo = userService.getUserById(Long.parseLong(otherOneId));
        return userInfo.getUsername();
    }

}
