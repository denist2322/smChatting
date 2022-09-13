package com.sbb.sm_chatting.Repository;

import com.sbb.sm_chatting.DAO.Talk;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TalkRepository extends JpaRepository<Talk, Long> {
}
