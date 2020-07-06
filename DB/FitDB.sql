-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: newtest
-- ------------------------------------------------------
-- Server version	8.0.17

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
-- Table structure for table `cartn`
--

DROP TABLE IF EXISTS `cartn`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cartn` (
  `pid` int(11) NOT NULL,
  `descri` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `productname` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartn`
--

LOCK TABLES `cartn` WRITE;
/*!40000 ALTER TABLE `cartn` DISABLE KEYS */;
INSERT INTO `cartn` VALUES (1,'Good quality whey ',4500,'Whey',3),(2,'Good quality bag',400,'Bag',1),(3,'Good quality shoes',800,'Shoes',1);
/*!40000 ALTER TABLE `cartn` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contactus`
--

DROP TABLE IF EXISTS `contactus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contactus` (
  `csid` int(11) NOT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`csid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contactus`
--

LOCK TABLES `contactus` WRITE;
/*!40000 ALTER TABLE `contactus` DISABLE KEYS */;
/*!40000 ALTER TABLE `contactus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `end` datetime DEFAULT NULL,
  `start` datetime DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `resource_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKclx5xnhdf2y3l1g3ae6ygsjmf` (`resource_id`),
  CONSTRAINT `FKclx5xnhdf2y3l1g3ae6ygsjmf` FOREIGN KEY (`resource_id`) REFERENCES `resource` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (1,'2019-10-05 18:30:00','2019-09-30 18:30:00','morning',3),(2,'2019-10-02 18:30:00','2019-09-30 18:30:00','Afternoon',1),(3,'2019-10-02 18:30:00','2019-09-30 18:30:00','On leave',4),(4,'2019-10-03 18:30:00','2019-09-30 18:30:00','Evening',2),(5,'2019-10-09 18:30:00','2019-10-05 18:30:00','Evening shift',1),(8,'2019-10-05 18:30:00','2019-10-03 18:30:00','Morning',1),(9,'2020-05-07 18:30:00','2020-04-30 18:30:00','Morning Shift',1),(10,'2020-05-06 18:30:00','2020-04-29 18:30:00','Afternoon Shift',2),(11,'2020-05-07 18:30:00','2020-04-30 18:30:00','Evening Shift',3),(14,'2020-05-07 18:30:00','2020-05-02 18:30:00','Morning-Evening',4),(15,'2020-05-02 18:30:00','2020-04-30 18:30:00','On leave',4),(18,'2020-05-16 18:30:00','2020-05-07 18:30:00','Afternoon',1),(19,'2020-05-14 18:30:00','2020-05-07 18:30:00','Morning Shift',2),(20,'2020-05-14 18:30:00','2020-05-07 18:30:00','On leave',3),(21,'2020-05-07 18:30:00','2020-05-06 18:30:00','holiday',2);
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (9),(9),(9);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hresults`
--

DROP TABLE IF EXISTS `hresults`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hresults` (
  `rid` int(11) NOT NULL,
  `bmi` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `health_problem` varchar(255) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `mid` int(11) unsigned DEFAULT NULL,
  `weight` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hresults`
--

LOCK TABLES `hresults` WRITE;
/*!40000 ALTER TABLE `hresults` DISABLE KEYS */;
INSERT INTO `hresults` VALUES (6,'21','2020-04-21','no',168,1,'60'),(7,'23','2020-04-27','no',165,2,'65');
/*!40000 ALTER TABLE `hresults` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `members` (
  `mid` int(11) NOT NULL,
  `addr` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `dob` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `mem_type` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (1,'Vishrantwadi, Pune','8793263647','1995-01-20','sachin@mail.com','male','Gold','Sachin Yawalkar','sachin','sachin'),(2,'Tenesse, US','0128585858','1992-06-24','tony@mail.com','male','Gold','Tony Stark','tonystark','tony'),(3,'Mohanwadi, Pune','9763902010','1993-03-24','deepesh@mail.com','male','Platinum','Deepesh Kamath','deepesh','deepesh'),(4,'Pandharpur, Pune','9832654750','1998-06-29','akshay@mail.com','male','Gold','Akshay Achlare','akshay','akshay'),(8,'Satara','7666929833','2003-02-11','anand@mail.com','male','Silver','Anand','anand1','anand');
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `oid` int(11) NOT NULL,
  `mid` int(11) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  `total` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`oid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `pid` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `e_date` varchar(255) DEFAULT NULL,
  `m_date` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `productname` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Good quality whey ','2020-12-30','2017-02-01',1500,'Whey',19),(2,'Good quality bag','2020-11-26','2019-10-08',400,'Bag',11),(3,'Good quality shoes','2020-06-13','2018-06-14',800,'Shoes',17),(4,'Good quality belt','2019-07-18','2019-07-24',500,'Belt',11);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resource`
--

DROP TABLE IF EXISTS `resource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resource` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resource`
--

LOCK TABLES `resource` WRITE;
/*!40000 ALTER TABLE `resource` DISABLE KEYS */;
INSERT INTO `resource` VALUES (1,'Trainer1'),(2,'Trainer2'),(3,'Trainer3'),(4,'Trainer4');
/*!40000 ALTER TABLE `resource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trainer`
--

DROP TABLE IF EXISTS `trainer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trainer` (
  `t_id` int(11) NOT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `addr` varchar(255) DEFAULT NULL,
  `dob` varchar(255) DEFAULT NULL,
  `experience` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `speciality` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`t_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trainer`
--

LOCK TABLES `trainer` WRITE;
/*!40000 ALTER TABLE `trainer` DISABLE KEYS */;
INSERT INTO `trainer` VALUES (1,'7666929833','apeksha@mail.com','Apeksha More','apeksha','apeksha','Shiroli, Junnar','1996-08-27','3.2','female','Yoga'),(2,'7897897987','akash@mail.com','Akash Sonawane','akash1','akash','Pratik nagar, Pune','1996-03-01','5','male','Weight Training'),(3,'9865321447','pratham@mail.com','Prathamesh Kulkarni','pratham','pratham','Sinhagad road, Pune','1997-07-12','4','male','Calesthetics'),(4,'8795642310','sagar@mail.com','Sagar Ghule','sagar1','sagar','Nagar','1994-06-14','2','male','Kick-Boxing');
/*!40000 ALTER TABLE `trainer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-27 13:11:52
