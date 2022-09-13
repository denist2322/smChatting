package com.sbb.sm_chatting.Service;

import com.sbb.sm_chatting.DAO.Talk;
import com.sbb.sm_chatting.Repository.TalkRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TalkService {

    private final TalkRepository talkRepository;
    public List<Talk> talkList() {
        return talkRepository.findAll();
    }
}
