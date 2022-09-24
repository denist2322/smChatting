package com.sbb.sm_chatting.Repository;

import com.sbb.sm_chatting.DTO.FriendSetting;
import com.sbb.sm_chatting.Entity.Friend;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FriendRepository extends JpaRepository<Friend, Long> {
    List<FriendSetting> findByMyid(long id);
}
