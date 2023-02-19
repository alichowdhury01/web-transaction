-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 19 fév. 2023 à 02:01
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bdboutique`
--

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

CREATE TABLE `articles` (
  `id` int(10) NOT NULL,
  `nom` varchar(40) NOT NULL,
  `categorie` varchar(40) NOT NULL,
  `description` varchar(512) NOT NULL,
  `prix` double NOT NULL,
  `quantiteInventaire` int(11) NOT NULL,
  `image` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `connexion`
--

CREATE TABLE `connexion` (
  `id` int(11) DEFAULT NULL,
  `courriel` varchar(30) DEFAULT NULL,
  `pass` varchar(30) DEFAULT NULL,
  `role` varchar(30) DEFAULT NULL,
  `statut` char(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `connexion`
--

INSERT INTO `connexion` (`id`, `courriel`, `pass`, `role`, `statut`) VALUES
(1, 'admin@turbomolotov.com', 'admin', 'A', 'A'),
(2, 'admin2@turbomolotov.com', 'admin', 'A', 'I'),
(3, 'doe.jack@gmail.com', '123456', 'M', 'A'),
(4, 'doe.jill@gmail.com', '123456', 'M', 'I'),
(5, 'doe.jace@gmail.com', '123456', 'E', 'I'),
(6, 'doe.june@gmail.com', '123456', 'E', 'A'),


-- --------------------------------------------------------

--
-- Structure de la table `membres`
--

CREATE TABLE `membres` (
  `id` int(11) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `courriel` varchar(80) NOT NULL,
  `sexe` varchar(10) NOT NULL,
  `dateNaissance` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `membres`
--

INSERT INTO `membres` (`id`, `nom`, `prenom`, `courriel`, `sexe`, `dateNaissance`) VALUES
(1, 'Doe', 'John', 'admin@turbomolotov.com', 'M', '1990-01-01'),
(2, 'Doe', 'Jane', 'admin2@turbomolotov.com', 'F', '1990-01-01'),
(3, 'Doe', 'Jack', 'doe.jack@gmail.com', 'M', '1990-01-01'),
(4, 'Doe', 'Jill', 'doe.jill@gmail.com', 'F', '1990-01-01'),
(5, 'Doe', 'jace', 'doe.jace@gmail.com', 'M', '1990-01-01'),
(6, 'Doe', 'june', 'doe.june@gmail.com', 'F', '1990-01-01'),

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `connexion`
--
ALTER TABLE `connexion`
  ADD KEY `id` (`id`);

--
-- Index pour la table `membres`
--
ALTER TABLE `membres`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `courriel` (`courriel`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `membres`
--
ALTER TABLE `membres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `connexion`
--
ALTER TABLE `connexion`
  ADD CONSTRAINT `connexion_ibfk_1` FOREIGN KEY (`id`) REFERENCES `membres` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
