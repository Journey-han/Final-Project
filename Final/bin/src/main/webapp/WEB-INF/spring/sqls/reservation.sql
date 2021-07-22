DROP SEQUENCE RESERVATIONSEQ;
DROP TABLE RESERVATION;

CREATE SEQUENCE RESERVATIONSEQ;

CREATE TABLE RESERVATION(
	RESERVATIONSEQ NUMBER PRIMARY KEY,
	USERSEQ VARCHAR2(200) NOT NULL,
	PRODUCTNAME VARCHAR2(100) NOT NULL,
	PRICE VARCHAR2(1000) NOT NULL,
	PLAYDATE VARCHAR2(4000) NOT NULL, --관람일자
	PEOPLE VARCHAR2(1000) NOT NULL, --관람인원
	PAYDATE DATE NOT NULL
);

INSERT INTO RESERVATION 
VALUES(RESERVATIONSEQ.NEXTVAL,1000,'맘마미아',70000,'21-07-30',2,SYSDATE);

SELECT * FROM RESERVATION;