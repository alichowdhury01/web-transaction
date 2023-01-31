CREATE DATABASE IF NOT EXISTS bdboutique;

USE bdboutique;

CREATE TABLE IF NOT EXISTS membres (
    id INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(30),
    prenom VARCHAR(30),
    courriel VARCHAR(80) UNIQUE,
    sexe VARCHAR(10),
    dateNaissance DATE,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS connexion (
    id INT,
    courriel VARCHAR(30),
    pass VARCHAR(30),
    role VARCHAR(30),
    statut CHAR(30),
    FOREIGN KEY (id) REFERENCES membres(id)
);

INSERT INTO membres (nom, prenom, courriel, sexe, dateNaissance) VALUES 
('Doe', 'John', 'admin@turbomolotov.com', 'M', '1990-01-01'),
('Doe', 'Jane', 'admin2@turbomolotov.com', 'F', '1990-01-01'),
('Doe', 'Jack', 'doe.jack@gmail.com', 'M', '1990-01-01'),
('Doe', 'Jill', 'doe.jill@gmail.com', 'F', '1990-01-01'),
('Doe', 'jace', 'doe.jace@gmail.com', 'M', '1990-01-01'),
('Doe', 'june', 'doe.june@gmail.com', 'F', '1990-01-01');



INSERT INTO connexion (id, courriel, pass, role, statut) VALUES 
((SELECT id FROM membres WHERE membres.courriel= 'admin@turbomolotov.com'), 'admin@turbomolotov.com', 'admin', 'A', 'A'),
((SELECT id FROM membres WHERE membres.courriel= 'admin2@turbomolotov.com'), 'admin2@turbomolotov.com', 'admin', 'A', 'I'),
((SELECT id FROM membres WHERE membres.courriel= 'doe.jack@gmail.com'), 'doe.jack@gmail.com', '123456', 'M', 'A'),
((SELECT id FROM membres WHERE membres.courriel= 'doe.jill@gmail.com'), 'doe.jill@gmail.com', '123456', 'M', 'I'),
((SELECT id FROM membres WHERE membres.courriel= 'doe.jace@gmail.com'), 'doe.jace@gmail.com', '123456', 'E', 'I'),
((SELECT id FROM membres WHERE membres.courriel= 'doe.june@gmail.com'), 'doe.june@gmail.com', '123456', 'E', 'A');