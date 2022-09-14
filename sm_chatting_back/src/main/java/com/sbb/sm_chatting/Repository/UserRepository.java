package com.sbb.sm_chatting.Repository;

import com.sbb.sm_chatting.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUserEmail(String userEmail);

    Optional<User> findByUserName(String username);

    boolean existsByUserEmail(String userEmail);
}
