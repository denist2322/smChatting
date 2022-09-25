package com.sbb.sm_chatting.Service;

import com.sbb.sm_chatting.DTO.FriendSetting;
import com.sbb.sm_chatting.Entity.Friend;
import com.sbb.sm_chatting.Repository.FriendRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class FriendService {
    private final FriendRepository friendRepository;

    public List<FriendSetting> getFriendList(Map<String, String> myid) {
        Long id = Long.parseLong(myid.get("myid"));
        return friendRepository.findByMyid(id);
    }

    public void delFriend(Map<String, String> info) {
        System.out.println("서비스 왔음");
        Friend friend = friendRepository.findByMyidUserId(Long.parseLong(info.get("myid")), Long.parseLong(info.get("opponentId")));
        friendRepository.delete(friend);
    }
}
