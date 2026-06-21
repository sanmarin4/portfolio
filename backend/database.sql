CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

CREATE TABLE IF NOT EXISTS about (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS tech_stack (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type ENUM('mobile', 'web') NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS certifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    issuer VARCHAR(255),
    date_issued DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO about (name, title, description) VALUES 
('Rina Jean Mislang', 'Fullstack Developer', 'I''m Rina Jean Mislang, passionate fullstack developer dedicated to creating amazing web and mobile applications.');

INSERT INTO tech_stack (category, name) VALUES 
('frontend', 'React'),
('frontend', 'React Native'),
('frontend', 'JavaScript'),
('frontend', 'Tailwind CSS'),
('frontend', 'Bootstrap'),
('backend', 'Node.js'),
('backend', 'Laravel'),
('backend', 'PHP'),
('backend', 'MySQL'),
('database', 'Supabase'),
('uiux', 'Figma'),
('uiux', 'Canva'),
('uiux', 'WordPress'),
('tools', 'Figma'),
('tools', 'Canva'),
('tools', 'Trae.ai'),
('tools', 'Antigravity'),
('tools', 'Cursor'),
('tools', 'Visual Studio Code'),
('tools', 'Codex');

INSERT INTO projects (type, name, description) VALUES 
('mobile', 'LERA', 'Mobile application'),
('mobile', 'hilkvisual', 'Mobile application'),
('web', 'clarem', 'Web application'),
('web', 'cames and co', 'Web application'),
('web', 'dainty m''lang cafe', 'Web application');
