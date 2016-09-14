-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 14, 2016 at 08:12 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `edubits`
--

-- --------------------------------------------------------

--
-- Table structure for table `bits`
--

CREATE TABLE IF NOT EXISTS `bits` (
  `bitid` int(11) NOT NULL AUTO_INCREMENT,
  `bitcat` int(11) NOT NULL,
  `bittitle` varchar(256) NOT NULL,
  `bitdesc` varchar(300) DEFAULT NULL,
  `imagurl` varchar(256) DEFAULT NULL,
  `more` varchar(256) DEFAULT NULL,
  `biten` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`bitid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=23 ;

--
-- Dumping data for table `bits`
--

INSERT INTO `bits` (`bitid`, `bitcat`, `bittitle`, `bitdesc`, `imagurl`, `more`, `biten`) VALUES
(1, 0, 'Laptop', 'Laptop is a personal computer that can be used on a person''s lap. It is  created for portability.', NULL, NULL, 1),
(2, 1, 'Desktop', 'Desktop is a computer that usually placed on the table, used for both home and office use.', NULL, NULL, 1),
(3, 2, 'Cells', 'Cells are the smallest unit of life in the living organisms.', NULL, NULL, 1),
(4, 3, 'Celsius', 'Celsius is the unit of temperature.', NULL, NULL, 1),
(5, 4, 'Hydrogen', 'It is a type of gas which is weightless. Its atomic number is 1.', NULL, NULL, 1),
(6, 5, 'Software engineering', 'Field of engineering which deals with the creation and maintaining of computer software.', NULL, NULL, 1),
(7, 6, 'Geometry', 'Study of shapes is called geometry.', NULL, NULL, 1),
(8, 7, 'Sagittarius', 'A star and a zodiac sign.', NULL, NULL, 1),
(9, 1, 'Bluetooth', 'It is a low energy data tranfer technology used to send files between devices.', NULL, NULL, 1),
(12, 1, 'Mouse', 'Mouse is an important pointing device used in computers', NULL, NULL, 1),
(13, 2, 'Nose', 'It is an organ to smell.', NULL, NULL, 1),
(14, 5, 'Mechanical engineering', 'Field of engineering which deals with the machines', NULL, NULL, 1),
(15, 2, 'Heart', 'An organ which pumps and purifies blood', NULL, NULL, 1),
(16, 3, 'Kinteics', 'Study of body in motion', NULL, NULL, 1),
(17, 4, 'Periodic table', 'A tabe which contains all the elements and its basic properties\n\nIt contain atomic mass etc', NULL, NULL, 1),
(18, 6, 'Algebra', 'Study of X,Y,Z', NULL, NULL, 1),
(19, 7, 'Astronomy', 'Study of stars', NULL, NULL, 1),
(21, 2, 'Apple', 'It is a fruit that is grown mostly in apple trees', NULL, 'http://bullymon', 1),
(22, 1, 'Notepad', 'It is a text editing software.', NULL, '0', 1);

-- --------------------------------------------------------

--
-- Table structure for table `cats`
--

CREATE TABLE IF NOT EXISTS `cats` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `sname` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `cats`
--

INSERT INTO `cats` (`sid`, `sname`) VALUES
(1, 'Computers'),
(2, 'Biology'),
(3, 'Physics'),
(4, 'Chemistry'),
(5, 'Engineering'),
(6, 'Maths'),
(7, 'Astronomy');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(160) DEFAULT NULL,
  `uname` varchar(50) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `email` varchar(120) DEFAULT NULL,
  `flag` int(11) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`uid`, `name`, `uname`, `password`, `email`, `flag`) VALUES
(1, 'Gautam krishna R', 'gkr', 'gkr', 'r.gautamkrishna@gmail.com', NULL),
(2, 'Test user', 'test', 'test', 'test', NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
