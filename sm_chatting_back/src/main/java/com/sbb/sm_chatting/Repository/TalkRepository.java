package com.sbb.sm_chatting.Repository;

import com.sbb.sm_chatting.DTO.ChatRoomSetting;
import com.sbb.sm_chatting.DTO.TalkSetting;
import com.sbb.sm_chatting.Entity.Talk;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TalkRepository extends JpaRepository<Talk, Long> {
    List<TalkSetting> findByTalkroomId(String id);

    @Query("select t from Talk t where t.talkroom.id = 1")
    List<ChatRoomSetting> findByIdExsits(@Param("s") String s);
}
