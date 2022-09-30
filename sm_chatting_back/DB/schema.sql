DROP DATABASE chatting;
CREATE DATABASE chatting;
USE chatting;

CREATE TABLE `user`(
   id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
   userregdate DATE NOT NULL,
   userupdatedate DATE NOT NULL,
   useremail VARCHAR(50) NOT NULL,
   userpassword VARCHAR(100) NOT NULL,
   userrole VARCHAR(10) NOT NULL DEFAULT "ROLE_USER"
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

INSERT INTO `user` SET
   userregdate = NOW(),
   userupdatedate = NOW(),
   useremail = "test@test.com",
   userpassword = "1234",
   username = "테스트 유저1";

UPDATE `user` SET userrole = "ROLE_USER" WHERE useremail = "test@test.com";

INSERT INTO `user` SET
   userregdate = NOW(),
   userupdatedate = NOW(),
   useremail = "test2@test.com",
   userpassword = "12344",
   username = "테스트 유저2";

UPDATE `user` SET userrole = "ROLE_USER" WHERE useremail = "test2@test.com";


CREATE TABLE `talk`(
   id BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
   talkregdate DATE NOT NULL,
   content TEXT,
   talkroom_id VARCHAR(200) NOT NULL,
   `files` TEXT
);

ALTER TABLE `talk` ADD senduserid INT NOT NULL;

INSERT INTO `talk` SET
   talkregdate = NOW(),
   content = "야 프로필 사진 바꿨는데 어때?",
   talkroom_id = "'1'과'2'";


INSERT INTO `talk` SET
   talkregdate = NOW(),
   content = "별로다",
   talkroom_id = "'1'과'2'";


INSERT INTO `talk` SET
   talkregdate = NOW(),
   content = "미안 나 남자친구 생겼어",
   talkroom_id = "'1'과'3'";


UPDATE `talk` SET senduserid = 1 WHERE id = 1;
UPDATE `talk` SET senduserid = 2 WHERE id = 2;
UPDATE `talk` SET senduserid = 3 WHERE id = 3;

CREATE TABLE talkroom(
  id VARCHAR(200) NOT NULL PRIMARY KEY
);

INSERT INTO talkroom SET
 id = "'1'과'2'";

INSERT INTO talkroom SET
 id = "'1'과'3'";

CREATE TABLE `friend`(
   id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
   myid INT UNSIGNED NOT NULL,
   user_id INT UNSIGNED NOT NULL
);

INSERT INTO friend SET
myid = 1,
user_id = 2;

INSERT INTO friend SET
myid = 1,
user_id = 3;

SELECT * FROM talkroom;
SELECT * FROM `user`;
SELECT * FROM `talk`;
SELECT t.content, t.talkregdate FROM talk t;
SELECT t.content AS content FROM talk t;

SELECT * FROM talkroom;

SELECT * FROM talkroom WHERE id LIKE "%'3'%";

SELECT * FROM `talk` WHERE talkroom_id LIKE "%'1'%" GROUP BY talkroom_id;

SELECT * FROM friend;

SELECT * FROM talk;

SELECT * FROM (
    SELECT * FROM `talk`
    WHERE talkroom_id LIKE "%'1'%"  ORDER BY id DESC
     LIMIT 18446744073709551615
    ) a
    GROUP BY talkroom_id;

SELECT * FROM talk UNION SELECT * FROM `user`;

SELECT * FROM Friend f WHERE f.myid = 1 AND f.user_id = 2;






