package com.sbb.sm_chatting.Controller;

import com.sbb.sm_chatting.DTO.FriendSetting;
import com.sbb.sm_chatting.Service.FriendService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
@RequiredArgsConstructor
public class FriendController {

    private final FriendService friendService;

    @PostMapping("/friendList")
    @ResponseBody
    public List<FriendSetting> getFriendList(@RequestBody Map<String, String> myid){
        return friendService.getFriendList(myid);
    }
}
