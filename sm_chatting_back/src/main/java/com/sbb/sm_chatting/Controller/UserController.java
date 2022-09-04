package com.sbb.sm_chatting.Controller;

import com.sbb.sm_chatting.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Map;

@Controller
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/login")
    public String login(@RequestBody Map<String, String> user){
        System.out.println("잘왔쩌염");
        System.out.println(user.get("userEmail"));
        System.out.println(user.get("userPassword"));

        return "잘왔쩌염";
    }

}
