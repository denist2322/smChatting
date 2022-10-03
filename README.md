# ✉ 웹 소켓(Stomp) 기반 메신저
## 📝 개발환경
* IntelliJ
* Postman
* SQLyog
* GitHuB
* VScode
## 📝 사용 기술
### 📌BackEnd
#### Spring Boot
* JAVA 17
* Spring MVC
* Spring Boot Security
* Spring Boot Jpa
* Spring Boot Lombok
* Spring Boot Fileupload
* Spring Boot web
* Spring Boot jwt

#### Build tool
* Gradle

#### Database
* Xampp
* Mysql

### 📌FrontEnd
#### React
* axios
* useEffect
* useRef
* useState
* base64
* Taliwind

## 📝 키워드 
* SpringBoot FrameWork
* React
* Tailwind
* WebSocket
* Jwt

## 📝 Description
스프링부트(JPA)와 리액트를 이용한 웹소캣 기반 메신저

## 📝 Main Service
* 실시간 채팅 서비스
* 유저 검색
* Jwt 인증 서비스

## 📝 Prerequisite
### 📌BackEnd
#### Gradle
* implementation group: 'org.springframework.boot', name: 'spring-boot-starter-websocket', version: '2.7.3'
*	implementation group: 'io.jsonwebtoken', name: 'jjwt', version: '0.9.1'
*	implementation 'org.springframework.boot:spring-boot-starter-security'
*	implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
*	implementation 'org.springframework.boot:spring-boot-starter-web'
*	compileOnly 'org.projectlombok:lombok'
*	developmentOnly 'org.springframework.boot:spring-boot-devtools'
*	runtimeOnly 'mysql:mysql-connector-java'
*	annotationProcessor 'org.projectlombok:lombok'
*	testImplementation 'org.springframework.boot:spring-boot-starter-test'
*	testImplementation 'org.springframework.security:spring-security-test'

### 📌FrontEnd
#### npm
* npm i axios
* npm i -D tailwindcss postcss autoprefixer
* npm i daisyui
* npm i @fortawesome/fontawesome-svg-core
* npm i @fortawesome/react-fontawesome
* npm i -S @fortawesome/free-solid-svg-icons
* npm i sockjs-client react-stomp
* npm i base-64

## 📝 ERD 설계
![그림1](https://user-images.githubusercontent.com/105466435/193564515-f248fc68-68d8-4d41-b719-7b34ce7ebe98.png)

## 📝 Rest API
![Rest API](https://user-images.githubusercontent.com/105466435/193568348-4c090311-b60b-49b6-b659-2abaf5f6b066.png)


