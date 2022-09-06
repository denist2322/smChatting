package com.sbb.sm_chatting.Controller;

import com.sbb.sm_chatting.Config.JWT.JwtTokenProvider;
import com.sbb.sm_chatting.Entity.User;
import com.sbb.sm_chatting.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;
    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping("/login")
    @ResponseBody
    public String login(@RequestBody Map<String, String> user){
        // 유저 이메일로 유저를 찾는다.
        User _user = userRepository.findByUserEmail(user.get("userEmail")).get();
        // 유저 역할은 리스트로 선언했다.
        List<String> userRole = new ArrayList<>();
        userRole.add(_user.getUserRole());
        // 토큰을 생성함 -> 이메일, 이름, 역할 추가
        String Token = jwtTokenProvider.createToken(_user.getUserEmail(),_user.getUserName(), userRole);

        return Token;
    }

    @PostMapping("/join")
    @ResponseBody
    public String join(@RequestBody Map<String, String> user){
        User joinUser = new User();
        joinUser.setUserEmail(user.get("userEmail"));
        joinUser.setUserName(user.get("userName"));
        joinUser.setUserRegDate(LocalDateTime.now());
        joinUser.setUserUpdateDate(LocalDateTime.now());
        joinUser.setUserPassword(user.get("userPassword"));
        joinUser.setUserRole(user.get("userRole"));
        userRepository.save(joinUser);
        return "완료";
    }

}
