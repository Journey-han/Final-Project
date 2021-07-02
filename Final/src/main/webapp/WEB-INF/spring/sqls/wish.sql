DROP TABLE WISH;

DROP SEQUENCE WISHNOSEQ;

CREATE TABLE WISH (
	
	WISHNO       	  NUMBER    PRIMARY KEY,
	WISHPRODUCTSEQ    NUMBER    NOT NULL,
	WISHUSERSEQ       NUMBER    NOT NULL
);

CREATE SEQUENCE WISHNOSEQ;

ALTER TABLE WISH ADD CONSTRAINT WISH_USERSEQ_FK FOREIGN KEY(USERSEQ) REFERENCES USER(USERSEQ);
ALTER TABLE WISH ADD CONSTRAINT WISH_PRODUCTSEQ_FK FOREIGN KEY(PRODUCTSEQ) REFERENCES PRODUCT(PRODUCTSEQ);