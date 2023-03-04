-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 22 fév. 2023 à 13:50
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

USE bdboutique;

CREATE TABLE `articles` (
  `id` int(10) NOT NULL,
  `nom` varchar(40) NOT NULL,
  `categorie` varchar(40) NOT NULL,
  `descriptions` varchar(512) NOT NULL,
  `prix` double NOT NULL,
  `quantiteInventaire` int(11) NOT NULL,
  `images` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`id`, `nom`, `categorie`, `descriptions`, `prix`, `quantiteInventaire`, `images`) VALUES
(1, 'APEX LEGENDS', 'Battle Royale games', 'Plongez dans l\'action de la Bataille Royale avec la meute du fondateur d\'Apex Legends', 38.19, 5, '../database/images/e80d69b503d3edaa3d6659b4354a33257735a535.jpg'),
(2, 'ARK 2', 'FPS', 'Ce produit comprend ARK 2 sur PC', 72.89, 5, '../database/images/bfe78b0644075fd5d07dc1f50ddbcd7369c53fcf.jpg'),
(3, 'DARK SOULS III', 'Action-RPG', 'Dark Souls III est un jeu de rôle-action à la troisième personne, apparenté aux jeux précédents de la série.', 72.99, 5, '../database/images/0f7a47bf1b3e8c6aef0ea75fdabba106a50aac46.jpg'),
(4, 'DAYZ', 'FPS', 'DayZ est un mod de jeu vidéo publié durant l\'été 2012 basé sur le jeu ARMA II, une simulation militaire développée par Bohemia Interactive.', 29.79, 5, '../database/images/c876b7958b1062e82be0c7039bb9039f02ee9592.jpeg'),
(5, 'DEADSIDE', 'FPS', 'Deadside est un jeu de tir multijoueur hardcore situé dans un vaste monde ouvert avec de nombreuses possibilités de jeu.', 29.79, 5, '../database/images/9afe6e467688b4d60a1578051456cdcead01eeae.jpg'),
(6, 'DEAD SPACE', 'TPS', 'Dead Space est un jeu vidéo de tir à la troisième personne de genre survival horror dans un univers de science-fiction, développé par Visceral Games,', 86.09, 5, '../database/images/1c6b0369fdf5af490b3f56e0502a9811caebdd64.jpg'),
(7, 'FALLOUT 76', 'Action-RPG', 'Fallout 76 est un jeu vidéo de rôle et d’action multijoueur développé par Bethesda Softworks', 15.09, 5, '../database/images/530c9e80640ab213c46deee8ba5126b8a7d48fde.jpg'),
(8, 'FIFA 23', 'Sport', 'Ce produit comprend FIFA 23', 47.99, 5, '../database/images/9ae73a04ad9f5e745a0a74c36756bd7e09799983.jpg'),
(9, 'HORIZON ZERO DAWN', 'Action-RPG', 'Horizon Zero Dawn prend place dans un univers post-apocalyptique dominé par des créatures mécanisées, en particulier des animaux robotiques', 14.99, 5, '../database/images/bd9d1b4bd20f7f922cdc5255b1554cde38c17348.jpg'),
(10, 'RED DEAD ONLINE', 'TPS', 'Red Dead Online, également abrégé RDO, est un jeu d\'action-aventure multijoueur et de western multiplateforme, développé par Rockstar Studios', 14.99, 5, '../database/images/5427e7988de146512ac1ba24864b55285a9da0e1.jpg'),
(11, 'RETURNAL', 'TPS', 'Returnal est un jeu de tir à la troisième personne avec des éléments roguelike. Le joueur contrôle un pilote spatial échoué sur un monde extraterrestre', 54.59, 5, '../database/images/18b127dd4efc4bd06905064cfd7a29d3680815a2.jpg'),
(12, 'THE ELDER SCROLLS V', 'Action-RPG', 'The Elder Scrolls V: Skyrim est un jeu vidéo de rôle et d\'action développé par Bethesda Game Studio', 18.19, 5, '../database/images/541a47f1a2aa0b51865732dde273616a752ef4b0.jpg'),
(13, 'SPONGEBOB SQUAREPANTS: THE COSMIC SHAKE', 'Jeu de plateforme', 'SpongeBob SquarePants: The Cosmic Shake est un jeu de plateforme basé sur la série animée de Nickelodeon, SpongeBob SquarePants. Développé par Purple Lamp Studios', 34.79, 5, '../database/images/037142ec0924bd987aec58be12848f36bc1c3b03.jpg'),
(14, 'SQUAD', 'FPS', 'Squad est un jeu vidéo de tir tactique à la première personne « se déroulant dans l\'environnement moderne actuel » développé par le studio canadien Offworld Industries.', 34.79, 5, '../database/images/5222cf34e9e0b9b1bc9e3c860b9410aff48af9f7.jpg'),
(15, 'SUPER MARIO BROS.', 'Plates-formes', 'Super Mario Bros est un jeu vidéo de plates-formes développé et édité par Nintendo, et sorti en 1985 sur Nintendo Entertainment System.', 34.79, 5, '../database/images/71b86363d38de7464bbdb86bdd9a8c13961ee9a8.jpg'),
(16, 'UNCHARTED: LEGACY OF THIEVES', 'TPS', 'Uncharted: Legacy of Thieves est un jeu vidéo de type action-aventure à la troisième personne mêlant des combats à armes à feu et des phases de plate-formes.', 33.89, 5, '../database/images/1ced1070675eed58ce7a64366972f60320a7abdf.jpg'),
(17, 'Wild West Dynasty', 'Action-RPG', 'L\'Amérique des années 1800 - les sentiers de l\'Ouest : Les colons s\'engagent à avancer de plus en plus loin vers le Pacifique américain ; à la recherche d\'une vie meilleure, pour le commerce ou l\'aventure. ', 28.09, 5, '../database/images/dd9be33a57572683a79edc5723df6f24a06df716.jpg');

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
(7, 'alichowdhury01@gmail.com', '11', 'M', 'A'),
(9, 'alichowdhury0w1@gmail.com', '1', 'M', 'A'),
(10, 'alichowdhury0kw1@gmail.com', '1', 'M', 'A'),
(11, 'alichowdhcry0kw1@gmail.com', '1', 'M', 'A'),
(12, 'alichowdhèry0klw1@gmail.com', '1', 'M', 'A'),
(14, 'alichowdhhu999ry01@gmail.com', '1', 'M', 'A'),
(15, 'alichowdhhu99h9ry01@gmail.com', '1', 'M', 'A');

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
(7, 'Ali', 'Chowdhury', 'alichowdhury01@gmail.com', 'F', '2022-04-07'),
(9, 'Ali', 'Chowdhury', 'alichowdhury0w1@gmail.com', 'F', '2022-04-07'),
(10, 'Ali', 'Chowdhury', 'alichowdhury0kw1@gmail.com', 'F', '2022-04-07'),
(11, 'Ali', 'Chowdhury', 'alichowdhcry0kw1@gmail.com', 'F', '2022-04-07'),
(12, 'Ali', 'Chowdhury', 'alichowdhèry0klw1@gmail.com', 'F', '2022-04-07'),
(14, 'Ali', 'Chowdhury', 'alichowdhhu999ry01@gmail.com', 'F', '2022-04-07'),
(15, 'Ali', 'Chowdhury', 'alichowdhhu99h9ry01@gmail.com', 'F', '2022-04-07');

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
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

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
