-- MariaDB dump 10.19  Distrib 10.4.26-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: be_master_videos
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `autores`
--

DROP TABLE IF EXISTS `autores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `autores` (
  `ID_autor` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_autor` varchar(255) NOT NULL,
  `Descripción_del_autor` text DEFAULT NULL,
  PRIMARY KEY (`ID_autor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autores`
--

LOCK TABLES `autores` WRITE;
/*!40000 ALTER TABLE `autores` DISABLE KEYS */;
/*!40000 ALTER TABLE `autores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colaboradores`
--

DROP TABLE IF EXISTS `colaboradores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colaboradores` (
  `ID_colaborador` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_colaborador` varchar(150) NOT NULL,
  PRIMARY KEY (`ID_colaborador`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colaboradores`
--

LOCK TABLES `colaboradores` WRITE;
/*!40000 ALTER TABLE `colaboradores` DISABLE KEYS */;
/*!40000 ALTER TABLE `colaboradores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comentarios` (
  `ID_comentario` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` int(11) NOT NULL,
  `Comentario` text DEFAULT NULL,
  PRIMARY KEY (`ID_comentario`),
  KEY `usuario_idx` (`usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentarios_video`
--

DROP TABLE IF EXISTS `comentarios_video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comentarios_video` (
  `Video` int(11) NOT NULL,
  `Comentario` int(11) NOT NULL,
  KEY `comentarios_idx` (`Comentario`),
  KEY `video_idx` (`Video`),
  CONSTRAINT `comentarios` FOREIGN KEY (`Comentario`) REFERENCES `comentarios` (`ID_comentario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `video` FOREIGN KEY (`Video`) REFERENCES `videos` (`ID_video`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios_video`
--

LOCK TABLES `comentarios_video` WRITE;
/*!40000 ALTER TABLE `comentarios_video` DISABLE KEYS */;
/*!40000 ALTER TABLE `comentarios_video` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `ID_review` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` int(11) NOT NULL,
  `Titulo_review` varchar(150) NOT NULL,
  `URI` varchar(255) NOT NULL,
  PRIMARY KEY (`ID_review`),
  KEY `usuario_idx` (`usuario`),
  CONSTRAINT `usuario` FOREIGN KEY (`usuario`) REFERENCES `usuarios` (`ID_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews_video`
--

DROP TABLE IF EXISTS `reviews_video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews_video` (
  `Review` int(11) NOT NULL,
  `Video` int(11) NOT NULL,
  KEY `reviews_idx_idx` (`Review`),
  KEY `videos_idx` (`Video`),
  CONSTRAINT `reviews` FOREIGN KEY (`Review`) REFERENCES `reviews` (`ID_review`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `videos` FOREIGN KEY (`Video`) REFERENCES `videos` (`ID_video`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews_video`
--

LOCK TABLES `reviews_video` WRITE;
/*!40000 ALTER TABLE `reviews_video` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews_video` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `ID_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_usuario` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Contraseña` varchar(15) NOT NULL,
  PRIMARY KEY (`ID_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video_colaborador`
--

DROP TABLE IF EXISTS `video_colaborador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `video_colaborador` (
  `Video` int(11) NOT NULL,
  `Colaborador` int(11) NOT NULL,
  KEY `videos_idx` (`Video`),
  KEY `colaborador_idx` (`Colaborador`),
  KEY `video_colaboradores_idx` (`Video`),
  KEY `colaborador_videos_idx` (`Colaborador`),
  CONSTRAINT `colaborador_videos` FOREIGN KEY (`Colaborador`) REFERENCES `colaboradores` (`ID_colaborador`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `video_colaboradores` FOREIGN KEY (`Video`) REFERENCES `videos` (`ID_video`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video_colaborador`
--

LOCK TABLES `video_colaborador` WRITE;
/*!40000 ALTER TABLE `video_colaborador` DISABLE KEYS */;
/*!40000 ALTER TABLE `video_colaborador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `videos`
--

DROP TABLE IF EXISTS `videos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `videos` (
  `ID_video` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_video` varchar(100) NOT NULL,
  `Titulo_video` varchar(150) NOT NULL,
  `URI` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID_video`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `videos`
--

LOCK TABLES `videos` WRITE;
/*!40000 ALTER TABLE `videos` DISABLE KEYS */;
/*!40000 ALTER TABLE `videos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `videos_autores`
--

DROP TABLE IF EXISTS `videos_autores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `videos_autores` (
  `Video` int(11) NOT NULL,
  `Autor` int(11) NOT NULL,
  KEY `video_idx_idx` (`Video`),
  KEY `autores_idx_idx` (`Autor`),
  CONSTRAINT `autores_idx` FOREIGN KEY (`Autor`) REFERENCES `autores` (`ID_autor`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `videos_idx` FOREIGN KEY (`Video`) REFERENCES `videos` (`ID_video`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `videos_autores`
--

LOCK TABLES `videos_autores` WRITE;
/*!40000 ALTER TABLE `videos_autores` DISABLE KEYS */;
/*!40000 ALTER TABLE `videos_autores` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-12 13:54:28
