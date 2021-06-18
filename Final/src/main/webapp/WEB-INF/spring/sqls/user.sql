DROP SEQUENCE USERSEQ;
DROP TABLE PTSD_USER;

CREATE SEQUENCE USERSEQ;

CREATE TABLE PTSD_USER(
	USERSEQ NUMBER PRIMARY KEY,
	USERID VARCHAR2(50) NOT NULL UNIQUE,
	USERPW VARCHAR2(50) NOT NULL,
	EMAIL VARCHAR2(100) NOT NULL UNIQUE,
	ADDRESS VARCHAR2(200) NOT NULL,
	PHONE VARCHAR2(100) NOT NULL UNIQUE,
	USERROLE VARCHAR2(10) NOT NULL,
	NICKNAME VARCHAR2(100) UNIQUE,
	AVATAR VARCHAR2(100),
	PROOF CHAR(1) DEFAULT 'N'
);

INSERT INTO PTSD_USER
VALUES(USERSEQ.NEXTVAL, 'test', '1234', 'test1234@naver.com', '서울특별시 강남구 테헤란로14길 6 남도빌딩', '010-1234-5678', 'admin', null, NULL, DEFAULT);


SELECT * FROM PTSD_USER;