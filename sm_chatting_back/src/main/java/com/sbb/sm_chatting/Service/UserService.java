package com.sbb.sm_chatting.Service;

import com.sbb.sm_chatting.Entity.User;
import com.sbb.sm_chatting.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public void join(Map<String, String> user) {
        User joinUser = new User();
        joinUser.setUserEmail(user.get("userEmail"));
        joinUser.setUserName(user.get("userName"));
        joinUser.setUserRegDate(LocalDateTime.now());
        joinUser.setUserUpdateDate(LocalDateTime.now());
        joinUser.setUserPassword(user.get("userPassword"));
        joinUser.setUserRole("ROLE_USER");
        userRepository.save(joinUser);
    }
}
