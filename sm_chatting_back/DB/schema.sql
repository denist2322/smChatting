DROP DATABASE chatting;
CREATE DATABASE chatting;
USE chatting;

CREATE TABLE `user`(
   user_id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
   user_reg_date DATE NOT NULL,
   user_update_date DATE NOT NULL,
   user_email VARCHAR(50) NOT NULL,
   user_password VARCHAR(100) NOT NULL,
   user_role VARCHAR(10) NOT NULL DEFAULT "USER"
);

ALTER TABLE `user` MODIFY COLUMN user_role VARCHAR(10) NOT NULL DEFAULT "USER";
ALTER TABLE `user` ADD user_name VARCHAR(30) NOT NULL;
ALTER TABLE `user` MODIFY COLUMN user_name VARCHAR(30) NOT NULL AFTER user_email;

INSERT INTO `user` SET
   user_reg_date = NOW(),
   user_update_date = NOW(),
   user_email = "admin@test.com",
   user_password = "admin";

UPDATE `user` SET user_role = "ROLE_ADMIN" WHERE user_email = "admin@test.com";
UPDATE `user` SET user_name = "관리자" WHERE user_role = "ROLE_ADMIN";


CREATE TABLE `talk`(
   talk_reg_date DATE NOT NULL,
   content TEXT NOT NULL,
   send_user_id INT UNSIGNED NOT NULL,
   receiver_user_id INT UNSIGNED NOT NULL
);

INSERT INTO `talk` SET
   talk_reg_date = NOW(),
   content = "야 프로필 사진 바꿨는데 어때?",
   send_user_id = 1,
   receiver_user_id = 2;


INSERT INTO `talk` SET
   talk_reg_date = NOW(),
   content = "별로다",
   send_user_id = 2,
   receiver_user_id = 1;

SELECT * FROM `user`;
SELECT * FROM `talk`;
