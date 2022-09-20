package com.sbb.sm_chatting.Repository;

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

    @Query(value = "SELECT * FROM (" +
            "    SELECT * FROM `talk`" +
            "    WHERE talkroom_id LIKE %:s%  ORDER BY id DESC" +
            "     LIMIT 18446744073709551615" +
            "    ) a" +
            "    GROUP BY talkroom_id" , nativeQuery=true)
    List<TalkSetting> findByIdExsits(@Param("s") String s);
}
