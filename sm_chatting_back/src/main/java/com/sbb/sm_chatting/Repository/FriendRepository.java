package com.sbb.sm_chatting.Repository;

import com.sbb.sm_chatting.DTO.FriendSetting;
import com.sbb.sm_chatting.Entity.Friend;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FriendRepository extends JpaRepository<Friend, Long> {
    List<FriendSetting> findByMyid(long id);

    @Query(value = "SELECT * FROM Friend f WHERE (f.myid = :myid AND f.user_id = :user_id);", nativeQuery = true)
    Friend findByMyidUserId(@Param("myid") Long myid, @Param("user_id") Long user_id);

    boolean existsByMyidAndUserId(long myid, long otherOne);
}
