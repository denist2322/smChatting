CREATE DATABASE chatting;
USE chatting;

CREATE TABLE `user`(
   user_id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
   user_regDate DATE NOT NULL,
   user_updateDate DATE NOT NULL,
   user_email VARCHAR(50) NOT NULL,
   user_password VARCHAR(35) NOT NULL,
   user_role VARCHAR(10) NOT NULL DEFAULT "USER"
);

ALTER TABLE `user` MODIFY COLUMN user_role VARCHAR(10) NOT NULL DEFAULT "USER";
ALTER TABLE `user` ADD user_name VARCHAR(30) NOT NULL;
ALTER TABLE `user` MODIFY COLUMN user_name VARCHAR(30) NOT NULL AFTER user_email;

INSERT INTO `user` SET
   user_regDate = NOW(),
   user_updateDate = NOW(),
   user_email = "admin@test.com",
   user_password = "admin";

UPDATE `user` SET user_role = "ADMIN" WHERE user_email = "admin@test.com";
UPDATE `user` SET user_name = "관리자" WHERE user_role = "ADMIN";

SELECT * FROM `user`;
