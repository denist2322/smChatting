package com.sbb.sm_chatting.auth;

import com.sbb.sm_chatting.Entity.User;
import com.sbb.sm_chatting.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class PrincipalDetailService implements UserDetailsService {
    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        User userEntity = userRepository.findByUsername(userName).orElseThrow(() -> new UsernameNotFoundException("사용자를 찾을 수 없습니다."));;
        return new PrincipalDetails(userEntity);
    }
}
