package com.sbb.sm_chatting.Repository;

import com.sbb.sm_chatting.Entity.Talk;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TalkRepository extends JpaRepository<Talk, Long> {
}
