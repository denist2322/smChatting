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

//    @GetMapping("/talk/test")
//    @ResponseBody
//    public List<SideBarChat> talkTest() {
//        List<TalkSetting> talkSettings = talkRepository.findByIdExsits("'1'");
//        List<UserInfo> userInfos = new ArrayList<>();
//
//        for (int i = 0; i < talkSettings.size(); i++) {
//            String opponentId = talkSettings.get(i).getTalkroom_id();
//            opponentId = opponentId.replace("'1'", "");
//            opponentId = opponentId.replace("과", "");
//            opponentId = opponentId.replace("'", "");
//            System.out.println(opponentId);
//            UserInfo userInfo = userRepository.findId(Long.parseLong(opponentId));
//            userInfos.add(userInfo);
//        }
//
//        List<SideBarChat> sideBarChats = new ArrayList<>();
//
//        for(int i =0; i < talkSettings.size(); i++){
//            SideBarChat sideBarChat = new SideBarChat(talkSettings.get(i), userInfos.get(i));
//            sideBarChats.add(sideBarChat);
//        }
//
//        return sideBarChats;
//    }
}
