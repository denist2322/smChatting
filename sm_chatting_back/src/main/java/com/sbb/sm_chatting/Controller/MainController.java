package com.sbb.sm_chatting.Controller;

import com.sbb.sm_chatting.Repository.TalkRepository;
import com.sbb.sm_chatting.Repository.TalkRoomRepository;
import com.sbb.sm_chatting.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
public class MainController {

    @Autowired
    private TalkRepository talkRepository;
    @Autowired
    private TalkRoomRepository talkRoomRepository;
    @Autowired
    private UserRepository userRepository;


    @PostMapping("/user/test")
    @ResponseBody
    public Map userResponseTest() {
        Map<String, String> result = new HashMap<>();
        result.put("result", "user ok");
        return result;
    }

    @PostMapping("/admin/test")
    @ResponseBody
    public Map adminResponseTest() {
        Map<String, String> result = new HashMap<>();
        result.put("result", "admin ok");
        return result;
    }

}
