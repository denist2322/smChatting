package com.sbb.sm_chatting.Controller;

import com.sbb.sm_chatting.DTO.TalkSetting;
import com.sbb.sm_chatting.Repository.TalkRepository;
import com.sbb.sm_chatting.Repository.TalkRoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class MainController {

    @Autowired
    private TalkRepository talkRepository;
    @Autowired
    private TalkRoomRepository talkRoomRepository;


    @PostMapping("/user/test")
    @ResponseBody
    public Map userResponseTest() {
        Map<String, String> result = new HashMap<>();
        result.put("result","user ok");
        return result;
    }

    @PostMapping("/admin/test")
    @ResponseBody
    public Map adminResponseTest() {
        Map<String, String> result = new HashMap<>();
        result.put("result","admin ok");
        return result;
    }

    @GetMapping("/talk/test")
    @ResponseBody
    public List<TalkSetting> talkTest(){
        return talkRepository.findByTalkroomId("1과2");
    }
}
