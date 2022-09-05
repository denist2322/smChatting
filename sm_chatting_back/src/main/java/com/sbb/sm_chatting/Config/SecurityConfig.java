package com.sbb.sm_chatting.Config;

import com.sbb.sm_chatting.Config.JWT.JwtAuthenticationFilter;
import com.sbb.sm_chatting.Config.JWT.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtTokenProvider jwtTokenProvider;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
                 http
                         .csrf().disable()
                         .httpBasic().disable()
                         .cors()
                         .and()
                         .sessionManagement()
                         .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // 세션을 사용하지 않는다.
                         .and()
                         .authorizeRequests()
                         .antMatchers("/admin/**").hasRole("ADMIN")
                         .antMatchers("/user/**").hasAnyRole("USER","ADMIN")
                         .antMatchers("/**").permitAll()
                         .and()
                         .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider),
                                 UsernamePasswordAuthenticationFilter.class)
                         .authorizeRequests();


        return http.build();
    }
}
