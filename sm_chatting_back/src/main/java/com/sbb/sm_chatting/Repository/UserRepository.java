package com.sbb.sm_chatting.Repository;

import com.sbb.sm_chatting.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
