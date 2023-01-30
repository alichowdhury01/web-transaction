CREATE DATABASE bdBoutique;

CREATE TABLE [dbo].[membres] (
    [Id] INT IDENTITY(1,1) PRIMARY KEY,
    [nom] VARCHAR(30),
    [prenom] VARCHAR(30),
    [courriel] VARCHAR(80) UNIQUE,
    [sexe] VARCHAR(10),
    [dateNaissance] DATE,
    PK courriel PRIMARY KEY (courriel)
);

CREATE TABLE [dbo].[connexion] (
    [Id] INT IDENTITY(1,1) PRIMARY KEY,
    [courriel] VARCHAR(30),
    [motdepasse] VARCHAR(30),
    [role] VARCHAR(30),
    [statut] CHAR(30),
    FK courriel FOREIGN KEY (courriel) REFERENCES membres(courriel)
);

INSERT INTO [dbo].[membres] ([nom], [prenom], [courriel], [sexe], [dateNaissance]) VALUES 
('Doe', 'John', 'doe.john@gmail.com', 'M', '1990-01-01'),
('Doe', 'Jane', 'doe.jane@gmail.com', 'F', '1990-01-01'),
('Doe', 'Jack', 'doe.jack@gmail.com', 'M', '1990-01-01'),
('Doe', 'Jill', 'doe.jill@gmail.com', 'F', '1990-01-01'),
('Doe', 'jace', 'doe.jace@gmail.com', 'M', '1990-01-01'),
('Doe', 'june', 'doe.june@gmail.com', 'F', '1990-01-01');



INSERT INTO [dbo].[connexion] ([courriel], [motdepasse], [role], [statut]) VALUES 
('doe.john@gmail.com', '123456', 'A', 'A'),
('doe.jane@gmail.com', '123456', 'A', 'I'),
('doe.jack@gmail.com', '123456', 'M', 'A'),
('doe.jill@gmail.com', '123456', 'M', 'I'),
('doe.jace@gmail.com', '123456', 'E', 'I'),
('doe.june@gmail.com', '123456', 'E', 'A');



