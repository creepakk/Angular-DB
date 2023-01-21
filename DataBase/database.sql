CREATE TABLE
    person(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        surname VARCHAR(100)
    );

CREATE TABLE
    post(
        id SERIAL PRIMARY KEY,
        title VARCHAR(255),
        content VARCHAR(255),
        user_id INTEGER,
        FOREIGN KEY (user_id) REFERENCES person(id)
    );