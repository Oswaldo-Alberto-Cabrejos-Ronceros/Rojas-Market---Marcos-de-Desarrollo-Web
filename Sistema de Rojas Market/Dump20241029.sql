CREATE DATABASE  IF NOT EXISTS `rojas_market_marcos_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `rojas_market_marcos_db`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: rojas_market_marcos_db
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `estado` bit(1) NOT NULL,
  `fecha_creacion` datetime(6) DEFAULT NULL,
  `fecha_modificacion` datetime(6) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Productos abarrotes',_binary '',NULL,NULL,'Abarrotes'),(2,'Productos lacteos',_binary '',NULL,NULL,'Lácteos'),(3,'Productos de limpieza',_binary '',NULL,NULL,'Limpieza'),(4,'Productos para mascotas',_binary '',NULL,NULL,'Mascotas'),(5,'Productos dulces',_binary '',NULL,NULL,'Dulces'),(6,'Productos helados',_binary '',NULL,NULL,'Helados'),(7,'Bebidas de todos los sabores',_binary '',NULL,NULL,'Bebidas'),(8,'Licores: vinos, tequila, piscos, y más',_binary '',NULL,NULL,'Licores');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `id_producto` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `estado` bit(1) NOT NULL,
  `fecha_creacion` datetime(6) DEFAULT NULL,
  `fecha_modificacion` datetime(6) DEFAULT NULL,
  `fecha_venc` datetime(6) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `precio_compra` double NOT NULL,
  `precio_venta` double NOT NULL,
  `ruta_imagen` varchar(255) DEFAULT NULL,
  `stock` int NOT NULL,
  `id_categoria` int DEFAULT NULL,
  PRIMARY KEY (`id_producto`),
  KEY `FK9nyueixdsgbycfhf7allg8su` (`id_categoria`),
  CONSTRAINT `FK9nyueixdsgbycfhf7allg8su` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,'Quaker 90g',_binary '',NULL,NULL,'2024-10-21 19:00:00.000000','Quaker',1992,10,'https://plazavea.vteximg.com.br/arquivos/ids/2506037-450-450/20209713.jpg?v=637685192547970000',120,2),(2,'51c212e',_binary '',NULL,NULL,'2024-10-31 19:00:00.000000','Semola',12,13,'https://res.cloudinary.com/riqra/image/upload/v1696282383/sellers/13/ag0l6mkeqks5pgctew3a.jpg',122,2),(3,'Panes',_binary '',NULL,NULL,'2024-10-23 19:00:00.000000','Pan',12,12,'https://metroio.vtexassets.com/arquivos/ids/509545-800-auto?v=638416930279400000&width=800&height=auto&aspect=true',99,1),(4,'Agua San Luis 2L',_binary '',NULL,NULL,'2024-10-22 19:00:00.000000','Agua San Luis',10,16,'https://wongfood.vtexassets.com/arquivos/ids/678180-800-auto?v=638368869682570000&width=800&height=auto&aspect=true',123,2),(5,'Fideos Lavaggi',_binary '',NULL,NULL,'2024-10-22 19:00:00.000000','Fideos Lavaggi',19,16,'https://www.miamarket.pe/assets/uploads/938f27cab95a9c3ae6d47af480fcbb14.jpg',12,1),(6,'Gaseosa Inka Kola 1.5L',_binary '',NULL,NULL,'2024-10-24 19:00:00.000000','Gaseosa',7,44,'https://wongfood.vtexassets.com/arquivos/ids/678180-800-auto?v=638368869682570000&width=800&height=auto&aspect=true',100,1),(7,'678iujhn',_binary '',NULL,NULL,'2024-10-30 19:00:00.000000','Mantequilla',89,90,'https://metroio.vtexassets.com/arquivos/ids/509545-800-auto?v=638416930279400000&width=800&height=auto&aspect=true',809,1),(8,'Leche Gloria 1L',_binary '',NULL,NULL,'2024-11-07 19:00:00.000000','Leche Gloria',12,14,'https://miamarket.pe/assets/uploads/221b9e347e36d61ed6a9ebb525b94f0d.jpg',78,2),(9,'Fideo spaguetti',_binary '',NULL,NULL,'2024-10-24 19:00:00.000000','Fideo 250g',12,13,'https://vegaperu.vtexassets.com/arquivos/ids/156871/7754137000039.jpg?v=637618916001900000',122,1),(10,'Azucar 500mg',_binary '',NULL,NULL,'2024-11-08 19:00:00.000000','Azucar',13,100,'https://vegaperu.vtexassets.com/arquivos/ids/156871/7754137000039.jpg?v=637618916001900000',100,2),(11,'Papel Higienico',_binary '',NULL,NULL,NULL,'Papel Higienico',14,15,'https://plazachevere.com/3843-large_default/papel-higienico-doble-hoja-paracas-gold-negro-paquete-24unidades.jpg',1000,2),(12,'Papel Toalla Nova doble hoja',_binary '',NULL,NULL,NULL,'Papel Toalla',20,25,'https://corporacionliderperu.com/47325-large_default/nova-papel-toalla-mega-rollo-x-106h.jpg',100,2),(13,'Colgate 360',_binary '',NULL,NULL,'2024-11-28 19:00:00.000000','Pasta de Dientes Colgate',34,12,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTleFkyqKex2GYMZJDjiSCL_fxAtmfy5blCGQ&s',13,1),(14,'Lejia Clorox 1L',_binary '',NULL,NULL,NULL,'Lejía Clorox',12,17,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDSul15EL1bg9Thw_I9b2xLfXlgkCdqk7QQg&s',87,3),(15,'Lejia Clorox 4kg',_binary '',NULL,NULL,NULL,'Lejia Clorox',12,16,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfpAwN07ejH7B6yo3nsU8eY-JhOTevRB2k2g&s',22,3),(16,'Detergente Bolivar Cuidado Total',_binary '',NULL,NULL,'2024-10-30 19:00:00.000000','Detergente Bolivar',12,16,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0tIYqoLN-kmsqqNhrBjpqupIpfYZWZ02ng&s',100,3),(17,'Jabon Liquido Protex 100g',_binary '',NULL,NULL,NULL,'Jabon Liquido Protex',12,14,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9NHsL96cZB1u92Cayc5bXSPt5G38HHMDXvw&s',120,3),(18,'RicoCan para adultos raza pequeña',_binary '',NULL,NULL,'2024-11-08 19:00:00.000000','RicoCan para adultos',12,19,'https://plazavea.vteximg.com.br/arquivos/ids/26097781-184-184/20171975.jpg?v=638170257483030000',99,4),(19,'RicoCan en lata 900g',_binary '',NULL,NULL,'2024-11-06 19:00:00.000000','RicoCan en lata',10,25,'https://plazavea.vteximg.com.br/arquivos/ids/347639-184-184/20189058.jpg?v=637292454253470000',23,4),(20,'Bolsa de RicoCan 1kg',_binary '',NULL,NULL,'2024-12-11 19:00:00.000000','Bolsa de RicoCan',12,56,'https://plazavea.vteximg.com.br/arquivos/ids/26097800-184-184/20212136.jpg?v=638170257958100000',43,4),(21,'Galletas para perros RicoCan',_binary '',NULL,NULL,'2024-10-15 19:00:00.000000','Galletas para perros',34,37,'https://plazavea.vteximg.com.br/arquivos/ids/598002-184-184/20116585.jpg?v=637436674031530000',74,4),(22,'Comida para perro DogChow bolsa 200g',_binary '',NULL,NULL,'2024-10-30 19:00:00.000000','Comida para perro DogChow',23,28,'https://plazavea.vteximg.com.br/arquivos/ids/26507717-184-184/20355380.jpg?v=638212903167700000',33,4);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_documento`
--

DROP TABLE IF EXISTS `tipo_documento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_documento` (
  `id_tipo_documento` int NOT NULL AUTO_INCREMENT,
  `acronico` varchar(255) DEFAULT NULL,
  `informacion` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_tipo_documento`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_documento`
--

LOCK TABLES `tipo_documento` WRITE;
/*!40000 ALTER TABLE `tipo_documento` DISABLE KEYS */;
INSERT INTO `tipo_documento` VALUES (1,'DNI','Documento Nacional de Identidad','DNI'),(2,'CARNET EXT.','Carnet de extranjeria','CARNET EXT.');
/*!40000 ALTER TABLE `tipo_documento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `apellido_materno` varchar(255) DEFAULT NULL,
  `apellido_paterno` varchar(255) DEFAULT NULL,
  `contrasena` varchar(255) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `estado` bit(1) NOT NULL,
  `fecha_creacion` datetime(6) DEFAULT NULL,
  `fecha_modificacion` datetime(6) DEFAULT NULL,
  `fecha_nacimiento` datetime(6) DEFAULT NULL,
  `nombres` varchar(255) DEFAULT NULL,
  `rol` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `val_doc` varchar(255) DEFAULT NULL,
  `id_tipo_documento` int DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  KEY `FKi84twx6f7o0pu9mbi856hhp7s` (`id_tipo_documento`),
  CONSTRAINT `FKi84twx6f7o0pu9mbi856hhp7s` FOREIGN KEY (`id_tipo_documento`) REFERENCES `tipo_documento` (`id_tipo_documento`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (7,'Morales','Garay','12345mdacaed','matiadgaray@gmail.com',NULL,_binary '',NULL,NULL,'2005-08-03 19:00:00.000000','Matias','administrador','123456781','12345678',1),(8,'Melgar','Aguilar','125meqdacaed','aguilarmelgar@gmail.com',NULL,_binary '',NULL,NULL,'2002-04-19 19:00:00.000000','Diego','administrador','183578234','12345678',2),(9,'Ronceros','Cabrejos','198njdwedj92','oswaldocabrejos@gmail.com',NULL,_binary '',NULL,NULL,'2004-02-17 19:00:00.000000','Oswaldo','administrador','183578234','12345678',1),(10,'Felices','Vega','198njd7duaksj92','adrianvega@gmail.com',NULL,_binary '',NULL,NULL,'2005-01-11 19:00:00.000000','Adrian','administrador','1835672212','12345678',1),(11,'usuario1','usuario1','198njcdd7duaksj92','usuario1@gmail.com',NULL,_binary '',NULL,NULL,'2005-01-11 19:00:00.000000','usuario','usuario','183567ewwef2','12345678',1),(12,'123123','12312','1231231','12312312','',_binary '',NULL,NULL,'2024-10-29 19:00:00.000000','123123','usuario','123123','123123123',1),(13,'Cáceres','Roca','12edrf34t5ge','davidroca@gmail.com','',_binary '',NULL,NULL,'2024-11-06 19:00:00.000000','David Andre','usuario','975712686','1238172812',2),(14,'456ytfghjm','werfvbhuk','qwertyu','123456','',_binary '',NULL,NULL,'2024-11-04 19:00:00.000000','1234tg','usuario','5cr6tyvb','67uyghj',2),(15,'99999','9999','99','9999','',_binary '',NULL,NULL,'2018-09-08 19:00:00.000000','99999','usuario','99999','9999999',1),(16,'Parian','Loo','loo1234qwerty','luisloo@utp.edu.pe','',_binary '',NULL,NULL,'1989-06-05 19:00:00.000000','Luis Alberto','usuario','124531','123456ygb',2),(17,'Balcon','Ticona','123454556','edwinticona@gmail.com','',_binary '',NULL,NULL,'2024-11-07 19:00:00.000000','Edwin','usuario','928374657','56372846272',1),(18,'Ario','Usu','user123','usuario2@gmail.com','',_binary '',NULL,NULL,'2024-10-30 19:00:00.000000','Usuariooo','usuario','1234516','2345162345',1);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-29 21:42:10
