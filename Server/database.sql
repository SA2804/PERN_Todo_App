CREATE DATABASE PERN_TODO;

CREATE TABLE TODO(
    ID SERIAL PRIMARY KEY,
    DESC TEXT UNIQUE,
);