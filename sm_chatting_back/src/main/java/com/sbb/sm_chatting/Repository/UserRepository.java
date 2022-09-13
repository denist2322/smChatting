package com.sbb.sm_chatting.Repository;

import com.sbb.sm_chatting.DAO.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUserEmail(String userEmail);

    Optional<User> findByUserName(String username);

    boolean existsByUserEmail(String userEmail);
}
