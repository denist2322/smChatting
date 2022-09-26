package com.sbb.sm_chatting.Controller;

import com.sbb.sm_chatting.Service.TalkRoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
@RequiredArgsConstructor
public class TalkroomController {
    private final TalkRoomService talkRoomService;

    @PostMapping("/addTalkroom")
    @ResponseBody
    public String addTalkroom(@RequestBody Map<String, String> info){
        return talkRoomService.addTalkroom(info);
    }

}
