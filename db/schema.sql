DROP DATABASE IF EXISTS gatekey_dev;
CREATE DATABASE gatekey_dev;
\c gatekey_dev
DROP TABLE gatekey;
CREATE TABLE gatekey
(
id SERIAL PRIMARY KEY , 
name TEXT NOT NULL,
color TEXT NOT NULL,
address TEXT NOT NULL,
comment TEXT NOT NULL(500)
)

