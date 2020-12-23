/*
Navicat MySQL Data Transfer

Source Server         : MYSQL
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : young

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2020-12-23 16:37:39
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tbl_cbpc_it_errlog
-- ----------------------------
DROP TABLE IF EXISTS `tbl_cbpc_it_errlog`;
CREATE TABLE `tbl_cbpc_it_errlog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(20) DEFAULT NULL,
  `log` longtext,
  `rec_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
DROP TRIGGER IF EXISTS `rec_time_errorlog`;
DELIMITER ;;
CREATE TRIGGER `rec_time_errorlog` BEFORE INSERT ON `tbl_cbpc_it_errlog` FOR EACH ROW SET new.rec_time = CURRENT_TIMESTAMP
;;
DELIMITER ;
