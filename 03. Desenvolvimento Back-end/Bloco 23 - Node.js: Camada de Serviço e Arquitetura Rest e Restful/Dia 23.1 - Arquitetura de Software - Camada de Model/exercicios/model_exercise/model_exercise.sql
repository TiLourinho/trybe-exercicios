DROP DATABASE IF EXISTS model_exercise;

CREATE DATABASE IF NOT EXISTS model_exercise;

CREATE TABLE model_exercise.user (
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    password VARCHAR(90) NOT NULL
);