CREATE SEQUENCE user_id_seq;
CREATE TABLE xl_user (
	id integer PRIMARY KEY DEFAULT nextval('user_id_seq'),
	user_name varchar(40) NOT NULL,
	password VARCHAR ( 20 ) NOT NULL,
	status boolean NOT NULL,
	created_date TIMESTAMP,
	created_by VARCHAR(40),
	updated_date TIMESTAMP,
	updated_by VARCHAR(40)
);

