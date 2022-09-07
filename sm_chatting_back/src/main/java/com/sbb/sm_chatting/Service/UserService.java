package com.sbb.sm_chatting.Service;

import com.sbb.sm_chatting.Config.JWT.JwtTokenProvider;
import com.sbb.sm_chatting.Entity.User;
import com.sbb.sm_chatting.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

    public void join(Map<String, String> user) {
        // 회원가입 진행
        User joinUser = new User();
        joinUser.setUserEmail(user.get("userEmail"));
        joinUser.setUserName(user.get("userName"));
        joinUser.setUserRegDate(LocalDateTime.now());
        joinUser.setUserUpdateDate(LocalDateTime.now());
        joinUser.setUserPassword(passwordEncoder.encode(user.get("userPassword")));
        joinUser.setUserRole("ROLE_USER");
        userRepository.save(joinUser);
    }

    public String login(Map<String, String> user) {
        User _user = existEmail(user.get("userEmail"));

        // 이메일이 존재하지않거나 공백일때 false를 넘긴다.
        if(_user == null || user.get("userEmail") == ""){
            return "emailFalse";
        }

        // 비밀번호를 복호화 하여 비교한다.
        // 관리자의 경우 처음부터 DB에 저장하기 때문에 암호화 불가 => 조건을 걸어 주어 맞을 경우 로그인 진행
        if(passwordEncoder.matches(user.get("userPassword"),_user.getUserPassword()) ||
                (_user.getUserEmail().equals("admin@test.com") && _user.getUserRole().equals("ROLE_ADMIN") && _user.getUserPassword().equals(user.get("userPassword")))){

            // 역할은 리스트 형태로 저장한다
            List<String> userRole = new ArrayList<>();
            userRole.add(_user.getUserRole());

            // 로그인 완료되며 JWT을 생성하고 넘겨준다.
            return jwtTokenProvider.createToken(_user.getUserEmail(),_user.getUserName(), userRole);
        }
        // 비밀번호가 같지 않다.
        return "pwFalse";

    }

    // == 이메일이 존재하는지 확인해주는 서비스  ==
    public User existEmail(String email){
        // 이메일이 존재하면 유저 정보를 넘기고 존재하지 않으면 null을 넘긴다
        User user = userRepository.findByUserEmail(email).orElse(null);
        return user;
    }


    public String doJoin(Map<String, String> user) {
        // 회원가입 진행시 값이 공백일 경우 (입력값이 없을경우 각 if문에 들어가게 된다.)
        if(user.get("userEmail") == "") {
            return "noEmail";
        }

        if(userRepository.existsByUserEmail(user.get("userEmail"))){
            return "existEmail";
        }

        if(user.get("userName") == ""){
            return "noName";
        }

        if(user.get("userPassword") == "" || user.get("passwordComfirm") == ""){
            return "noPassword";
        }

        if(!user.get("userPassword").equals(user.get("passwordComfirm"))){
            return "notMatch";
        }

        join(user);

        return "success";
    }
}
