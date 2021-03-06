CREATE DATABASE idunno;

CREATE TABLE users(
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

CREATE TABLE sessions(
  id SERIAL PRIMARY KEY ,
  code VARCHAR(255) NOT NULL,
  date TIMESTAMP DEFAULT NOW() NOT NULL,
  time_limit INTEGER NOT NULL,
  final_result VARCHAR(255)
);

CREATE TABLE matches(
  user_id INT REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  session_id INT REFERENCES sessions(id) ON DELETE CASCADE NOT NULL 
);