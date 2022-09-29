package com.sbb.sm_chatting.Controller;

import com.sbb.sm_chatting.DTO.FriendSetting;
import com.sbb.sm_chatting.Service.FriendService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class FriendController {

    private final FriendService friendService;

    @PostMapping("/friendList")
    public List<FriendSetting> getFriendList(@RequestBody Map<String, String> myid){
        return friendService.getFriendList(myid);
    }

    @PostMapping("delFriend")
    public String delFriend(@RequestBody Map<String, String> info){
        friendService.delFriend(info);
        return "success";
    }

    @PostMapping("isFriend")
    public String isFriend(@RequestBody Map<String, String> info){
        return friendService.findFriend(info);
    }

    @PostMapping("addFriend")
    public String addFriend(@RequestBody Map<String, String> info){
        friendService.addFriend(info);
        return "success";
    }
}
