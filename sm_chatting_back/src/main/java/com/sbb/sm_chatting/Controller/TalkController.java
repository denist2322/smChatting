package com.sbb.sm_chatting.Controller;

import com.sbb.sm_chatting.Entity.Talk;
import com.sbb.sm_chatting.Service.TalkService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class TalkController {

    private final TalkService talkService;

    @RequestMapping("/user/talk")
    @ResponseBody
    public List<Talk> talk(){
        return talkService.talkList();
    }

}
