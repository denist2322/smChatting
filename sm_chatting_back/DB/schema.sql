DROP DATABASE chatting;
CREATE DATABASE chatting;
USE chatting;

CREATE TABLE `user`(
   userid INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
   userregdate DATE NOT NULL,
   userupdatedate DATE NOT NULL,
   useremail VARCHAR(50) NOT NULL,
   userpassword VARCHAR(100) NOT NULL,
   userrole VARCHAR(10) NOT NULL DEFAULT "USER"
);

ALTER TABLE `user` MODIFY COLUMN userrole VARCHAR(10) NOT NULL DEFAULT "USER";
ALTER TABLE `user` ADD username VARCHAR(30) NOT NULL;
ALTER TABLE `user` MODIFY COLUMN username VARCHAR(30) NOT NULL AFTER useremail;

INSERT INTO `user` SET
   userregdate = NOW(),
   userupdatedate = NOW(),
   useremail = "admin@test.com",
   userpassword = "admin";

UPDATE `user` SET userrole = "ROLE_ADMIN" WHERE useremail = "admin@test.com";
UPDATE `user` SET username = "관리자" WHERE userrole = "ROLE_ADMIN";

CREATE TABLE `talk`(
   talkid BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
   talkregdate DATE NOT NULL,
   content TEXT NOT NULL
);

INSERT INTO `talk` SET
   talkregdate = NOW(),
   content = "야 프로필 사진 바꿨는데 어때?";


INSERT INTO `talk` SET
   talkregdate = NOW(),
   content = "별로다";


SELECT * FROM `user`;
SELECT * FROM `talk`;
SELECT t.content, t.talkregdate FROM talk t;
SELECT t.content AS content FROM talk t;
