package com.sbb.sm_chatting.Service;

import com.sbb.sm_chatting.Config.JWT.JwtTokenProvider;
import com.sbb.sm_chatting.DTO.UserInfo;
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
        joinUser.setUseremail(user.get("userEmail"));
        joinUser.setUsername(user.get("userName"));
        joinUser.setUserregdate(LocalDateTime.now());
        joinUser.setUserupdatedate(LocalDateTime.now());
        joinUser.setUserpassword(passwordEncoder.encode(user.get("userPassword")));
        joinUser.setUserrole("ROLE_USER");
        userRepository.save(joinUser);
    }

    public String login(Map<String, String> user) {
        User _user = existEmail(user.get("userEmail"));

        // 이메일이 존재하지않거나 공백일때 false를 넘긴다.
        if (_user == null || user.get("userEmail") == "") {
            return "emailFalse";
        }

        // 비밀번호를 복호화 하여 비교한다.
        // 관리자의 경우 처음부터 DB에 저장하기 때문에 암호화 불가 => 조건을 걸어 주어 맞을 경우 로그인 진행
        if (passwordEncoder.matches(user.get("userPassword"), _user.getUserpassword()) ||
                (_user.getUseremail().equals("admin@test.com") && _user.getUserrole().equals("ROLE_ADMIN") && _user.getUserpassword().equals(user.get("userPassword")))) {

            // 역할은 리스트 형태로 저장한다
            List<String> userRole = new ArrayList<>();
            userRole.add(_user.getUserrole());

            // 로그인 완료되며 JWT을 생성하고 넘겨준다.
            return jwtTokenProvider.createToken(_user.getUseremail(), _user.getUsername(), userRole, _user.getId());
        }
        // 비밀번호가 같지 않다.
        return "pwFalse";

    }

    // == 이메일이 존재하는지 확인해주는 서비스  ==
    public User existEmail(String email) {
        // 이메일이 존재하면 유저 정보를 넘기고 존재하지 않으면 null을 넘긴다
        User user = userRepository.findByUseremail(email).orElse(null);
        return user;
    }

    // == 회원가입을 진행하는 서비스 ==
    public String doJoin(Map<String, String> user) {
        if (userRepository.existsByUseremail(user.get("userEmail"))) {
            return "existEmail";
        }
        join(user);

        return "success";
    }

    // == 상대방의 정보를 가져온다 (인터페이스에서 뽑아온 정보) ==
    public UserInfo findId(long otherOne) {
        return userRepository.findId(otherOne);
    }

    // == 상대방의 모든 정보를 가져온다. ==
    public User getUserById (long otherOne) {
        return userRepository.findById(otherOne).get();
    }

    // == 유저 정보를 찾고 정보를 뿌려준다. ==
    public UserInfo searchUser(Map<String, String> user) {
        return userRepository.findUseremail(user.get("search"));
    }
}
