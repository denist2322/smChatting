package com.sbb.sm_chatting.Service;

import com.sbb.sm_chatting.DTO.FriendSetting;
import com.sbb.sm_chatting.Entity.Friend;
import com.sbb.sm_chatting.Entity.User;
import com.sbb.sm_chatting.Repository.FriendRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class FriendService {
    private final FriendRepository friendRepository;
    private final UserService userService;

    public List<FriendSetting> getFriendList(Map<String, String> myid){
        Long id = Long.parseLong(myid.get("myid"));
        return friendRepository.findByMyid(id);
    }

    public void delFriend(Map<String, String> info) {
        Friend friend = friendRepository.findByMyidUserId(Long.parseLong(info.get("myid")), Long.parseLong(info.get("otherOne")));
        friendRepository.delete(friend);
    }

    // == 
    public String findFriend(Map<String, String> info) {
        if(friendRepository.existsByMyidAndUserId(Long.parseLong(info.get("myid")), Long.parseLong(info.get("otherOne")))){
            return "True";
        }
        return "False";
    }

    // == 친구 추가 진행하는 서비스 ==
    public void addFriend(Map<String, String> info) {
        Friend friend = new Friend();
        friend.setMyid(Long.parseLong(info.get("myid")));
        User user = userService.getUserById(Long.parseLong(info.get("otherOne")));
        friend.setUser(user);
        friendRepository.save(friend);
    }
}
