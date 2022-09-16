package com.sbb.sm_chatting.Repository;

import com.sbb.sm_chatting.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUseremail(String userEmail);

    Optional<User> findByUsername(String username);

    boolean existsByUseremail(String userEmail);
}
