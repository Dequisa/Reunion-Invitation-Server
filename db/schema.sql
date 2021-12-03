DROP DATABASE IF EXISTS  reunion_dev;

CREATE DATABASE reunion_dev;

\c reunion_dev;

CREATE TABLE reunion(
    reunion_id SERIAL PRIMARY KEY,
    attending TEXT,
    name TEXT,
    email TEXT,
    phoneNumber INTEGER,
    socialMedia TEXT,
    noOfGuest INTEGER,
    contribution TEXT,
    follow_up TEXT
);