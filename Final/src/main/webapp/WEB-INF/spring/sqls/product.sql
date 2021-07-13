DROP SEQUENCE PRODUCTSEQ;
DROP TABLE PRODUCT;

CREATE SEQUENCE PRODUCTSEQ;
CREATE TABLE PRODUCT(

	PRODUCTSEQ			NUMBER			PRIMARY KEY,
	CATEGORY			VARCHAR2(20)	NOT NULL,
	PRODUCTNAME			VARCHAR2(200)	NOT NULL,
	STARTDATE			VARCHAR2(20)	NOT	NULL,
	ENDDATE				VARCHAR2(20)	NOT	NULL,
	THUMBIMG			VARCHAR2(1000)  NOT	NULL,
	PRODUCTCONTENT		CLOB			NOT NULL,
	AREACODE			NUMBER			NOT	NULL,
	ADDRESS				VARCHAR2(200) 	NOT	NULL,
	TELLNUMBER			VARCHAR2(20)	NOT NULL,
	RUNTIME				VARCHAR2(20)	NOT	NULL,
	RATING				VARCHAR2(50)	NOT	NULL,
	SEATCOUNT			NUMBER			NOT NULL,
	PRICE				NUMBER			NOT	NULL,
	LIKECOUNT			NUMBER,
	WISHCOUNT			NUMBER,
	PRODUCTCOUNT		NUMBER		

);

SELECT * FROM PRODUCT;