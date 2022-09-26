package com.sbb.sm_chatting.Repository;

import com.sbb.sm_chatting.DTO.UserInfo;
import com.sbb.sm_chatting.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUseremail(String userEmail);

    Optional<User> findByUsername(String username);

    boolean existsByUseremail(String userEmail);
    @Query("select u from User u where id = :id")
    UserInfo findId(@Param("id")Long id);
    @Query("select u from User u where u.useremail = :email")
    UserInfo findUseremail(@Param("email") String search);
}
