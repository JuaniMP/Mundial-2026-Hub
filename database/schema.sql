-- Database schema for FIFA World Cup 2026 Platform

CREATE TABLE IF NOT EXISTS stadiums (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    capacity INT NOT NULL,
    description TEXT,
    image_url VARCHAR(512),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS matches (
    id INT AUTO_INCREMENT PRIMARY KEY,
    stadium_id INT,
    team1 VARCHAR(100) NOT NULL,
    team2 VARCHAR(100) NOT NULL,
    match_date DATETIME NOT NULL,
    matchday INT NOT NULL,
    group_name VARCHAR(50),
    FOREIGN KEY (stadium_id) REFERENCES stadiums(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    profile_image VARCHAR(512),
    global_rank INT DEFAULT 0,
    points INT DEFAULT 0,
    favorite_team VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS predictions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    match_id INT,
    team1_score INT,
    team2_score INT,
    status ENUM('PENDING', 'CORRECT', 'INCORRECT') DEFAULT 'PENDING',
    points_earned INT DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (match_id) REFERENCES matches(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, match_id)
);

CREATE TABLE IF NOT EXISTS stickers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    rarity ENUM('COMMON', 'RARE', 'GOLD') DEFAULT 'COMMON',
    image_url VARCHAR(512),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_collections (
    user_id INT,
    sticker_id INT,
    quantity INT DEFAULT 1,
    obtained_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, sticker_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (sticker_id) REFERENCES stickers(id)
);

-- Audit Triggers
CREATE TABLE IF NOT EXISTS audit_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    table_name VARCHAR(100),
    action VARCHAR(50),
    record_id INT,
    old_value TEXT,
    new_value TEXT,
    action_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER //
CREATE TRIGGER stadiums_audit_update
AFTER UPDATE ON stadiums
FOR EACH ROW
BEGIN
    INSERT INTO audit_logs (table_name, action, record_id, old_value, new_value)
    VALUES ('stadiums', 'UPDATE', OLD.id, JSON_OBJECT('name', OLD.name), JSON_OBJECT('name', NEW.name));
END; //

-- Stored Procedure to process prediction points
CREATE PROCEDURE IF NOT EXISTS UpdateUserPoints(IN userId INT, IN pointsToAdd INT)
BEGIN
    UPDATE users SET points = points + pointsToAdd WHERE id = userId;
    -- Logic to update global rank could be added here
END; //

DELIMITER ;
