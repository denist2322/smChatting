package com.sbb.sm_chatting.Repository;

import com.sbb.sm_chatting.Entity.Talkroom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TalkRoomRepository extends JpaRepository<Talkroom, String> {
}
