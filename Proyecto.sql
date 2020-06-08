-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 08-06-2020 a las 23:02:19
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Proyecto`
--
CREATE DATABASE IF NOT EXISTS `Proyecto` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `Proyecto`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reviews`
--

CREATE TABLE `reviews` (
  `id` int(10) NOT NULL,
  `content` varchar(200) CHARACTER SET utf8mb4 NOT NULL,
  `user_id` int(10) NOT NULL,
  `movie_id` int(10) NOT NULL,
  `rating` int(11) NOT NULL DEFAULT 0,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `reviews`
--

INSERT INTO `reviews` (`id`, `content`, `user_id`, `movie_id`, `rating`, `updatedAt`, `createdAt`) VALUES
(44, 'malisima', 27, 456, 5, '2020-06-08 20:15:50', '2020-06-08 20:15:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) NOT NULL,
  `email` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `dateofbirth` datetime NOT NULL,
  `favoriteGenre` varchar(100) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `pass`, `username`, `dateofbirth`, `favoriteGenre`) VALUES
(24, 'candela@gmail.com', '$2a$10$BsUp/xbi43kcb46Ugaekge5M1C3wA3Nue06bgIl2rvkkhIDMIcoki', 'Candela', '2020-06-19 00:00:00', 'Drama'),
(25, 'hola@gmail.com', '$2a$10$iJNntNv6Bio64suwGFoWzeFjbS/YYoVWRtnjXwsJY2SmHLCqDbRUe', 'facundo', '2020-06-18 00:00:00', 'Acción y Aventura'),
(26, 'hola@gmail.com', '$2a$10$hglPOtTG//v/biVSD8CnNe94Nli.6Rad3Mg07i8MiikWafojUMuPW', 'Hola', '2020-06-18 00:00:00', 'Noticias'),
(27, 'rocio@gmail.com', '$2a$10$s0N9FuCuKCC.6tNeK3fWiePqCVjYCiCOkeM037bllkp.JSamiS05C', 'Rocio', '2020-06-17 00:00:00', 'Romance'),
(28, 'dh@dh.com', '$2a$10$c2PZgttM94kopDaXTZOjmetGPwmNjGWYaajjr2Nxu/t3cays5gXCi', 'DH', '2020-06-26 00:00:00', 'Misterio'),
(29, 'udesa@udesa.com', '$2a$10$A1j3.TnqJ7G2C11ew8h4R.D6.LuBK06EGw7CbE72egKKWPEyBeVkO', 'udesa', '2020-06-24 00:00:00', 'Infantiles'),
(30, 'cande@gmail.com', '$2a$10$G/ofkGbUjVKZZWQ9sGv/Ou30vL8FTJFoGWwX.OjMLGePXpyr.Z.eu', 'candeflores', '2020-06-25 00:00:00', 'Documental');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
