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

    // 대화와 연결된 채팅방 id로 검색하여 채팅 목록을 추출하며, 각 채팅방 당 제일 최신 단건만을 조회한다.
    @Query(value = "SELECT * FROM (" +
            "    SELECT * FROM `talk`" +
            "    WHERE talkroom_id LIKE %:s%  ORDER BY id DESC" +
            "     LIMIT 18446744073709551615" +
            "    ) a" +
            "    GROUP BY talkroom_id" , nativeQuery=true)
    List<TalkSetting> findByIdExsits(@Param("s") String s);

}
