-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 25-10-2024 a las 00:05:47
-- Versión del servidor: 10.11.6-MariaDB-0+deb12u1
-- Versión de PHP: 8.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nautica`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `boats`
--

CREATE TABLE `boats` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `company_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `color` varchar(255) NOT NULL,
  `dif` varchar(255) DEFAULT NULL,
  `autoridad` varchar(255) DEFAULT NULL,
  `licencia` varchar(255) DEFAULT NULL,
  `dif_fecha` date DEFAULT NULL,
  `autoridad_fecha` date DEFAULT NULL,
  `licencia_fecha` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `boats`
--

INSERT INTO `boats` (`id`, `name`, `company_id`, `created_at`, `updated_at`, `color`, `dif`, `autoridad`, `licencia`, `dif_fecha`, `autoridad_fecha`, `licencia_fecha`) VALUES
(2, 'Estrella del Mar', 17, '2024-10-21 11:41:07', '2024-10-21 11:41:07', '#9C27B0', NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'Cesar Junior', 17, '2024-10-21 11:41:17', '2024-10-21 11:41:17', '#9C27B0', NULL, NULL, NULL, NULL, NULL, NULL),
(6, 'Dark Boat', 19, '2024-10-23 09:53:02', '2024-10-23 09:53:02', '#673AB7', NULL, NULL, NULL, NULL, NULL, NULL),
(7, 'Bote Test', 21, '2024-10-23 13:20:19', '2024-10-23 13:20:19', '#795548', NULL, NULL, NULL, NULL, NULL, NULL),
(9, 'prueba dependencia', 21, '2024-10-23 14:22:30', '2024-10-23 14:22:30', '#795548', NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bote_files`
--

CREATE TABLE `bote_files` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `documento` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL,
  `anio` varchar(255) NOT NULL,
  `fecha` date NOT NULL,
  `boat_id` bigint(20) UNSIGNED NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `bote_files`
--

INSERT INTO `bote_files` (`id`, `documento`, `file`, `anio`, `fecha`, `boat_id`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'DIF', '1729712080logo12.png', '2024', '2024-10-23', 7, NULL, '2024-10-23 13:34:40', '2024-10-23 13:34:40'),
(2, 'DIF', '1729712138logo12.png', '2024', '2024-10-24', 7, NULL, '2024-10-23 13:35:38', '2024-10-23 13:35:38'),
(3, 'Licencia', '1729712162logo12.png', '2024', '2024-10-31', 7, NULL, '2024-10-23 13:36:02', '2024-10-23 13:36:02'),
(4, 'Licencia', '1729712195logo12.png', '2025', '2025-10-23', 7, NULL, '2024-10-23 13:36:35', '2024-10-23 13:36:35'),
(5, 'Autoridad', '17297122698b.jpg', '2025', '2025-10-23', 7, NULL, '2024-10-23 13:37:49', '2024-10-23 13:37:49'),
(6, 'DIF', '1729714964logo12.png', '2024', '2024-10-23', 9, NULL, '2024-10-23 14:22:44', '2024-10-23 14:22:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('spatie.permission.cache', 'a:3:{s:5:\"alias\";a:5:{s:1:\"a\";s:2:\"id\";s:1:\"b\";s:4:\"name\";s:1:\"c\";s:10:\"guard_name\";s:1:\"d\";s:5:\"group\";s:1:\"r\";s:5:\"roles\";}s:11:\"permissions\";a:12:{i:0;a:5:{s:1:\"a\";i:1;s:1:\"b\";s:10:\"ver inicio\";s:1:\"c\";s:3:\"web\";s:1:\"d\";s:6:\"ventas\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:2;i:2;i:3;i:3;i:4;}}i:1;a:5:{s:1:\"a\";i:2;s:1:\"b\";s:12:\"ver usuarios\";s:1:\"c\";s:3:\"web\";s:1:\"d\";s:8:\"usuarios\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:2;i:2;i:4;}}i:2;a:5:{s:1:\"a\";i:3;s:1:\"b\";s:12:\"ver empresas\";s:1:\"c\";s:3:\"web\";s:1:\"d\";s:8:\"empresas\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:4;}}i:3;a:5:{s:1:\"a\";i:4;s:1:\"b\";s:9:\"ver botes\";s:1:\"c\";s:3:\"web\";s:1:\"d\";s:5:\"botes\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:4;}}i:4;a:5:{s:1:\"a\";i:5;s:1:\"b\";s:15:\"ver tripulantes\";s:1:\"c\";s:3:\"web\";s:1:\"d\";s:11:\"tripulantes\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:3;i:2;i:4;}}i:5;a:5:{s:1:\"a\";i:6;s:1:\"b\";s:12:\"ver clientes\";s:1:\"c\";s:3:\"web\";s:1:\"d\";s:8:\"clientes\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:2;i:2;i:4;}}i:6;a:5:{s:1:\"a\";i:7;s:1:\"b\";s:10:\"ver viajes\";s:1:\"c\";s:3:\"web\";s:1:\"d\";s:6:\"viajes\";s:1:\"r\";a:3:{i:0;i:1;i:1;i:3;i:2;i:4;}}i:7;a:5:{s:1:\"a\";i:8;s:1:\"b\";s:10:\"ver ventas\";s:1:\"c\";s:3:\"web\";s:1:\"d\";s:6:\"ventas\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:2;i:2;i:3;i:3;i:4;}}i:8;a:5:{s:1:\"a\";i:9;s:1:\"b\";s:12:\"ver deudores\";s:1:\"c\";s:3:\"web\";s:1:\"d\";s:8:\"deudores\";s:1:\"r\";a:4:{i:0;i:1;i:1;i:2;i:2;i:3;i:3;i:4;}}i:9;a:5:{s:1:\"a\";i:10;s:1:\"b\";s:13:\"ver productos\";s:1:\"c\";s:3:\"web\";s:1:\"d\";s:9:\"productos\";s:1:\"r\";a:2:{i:0;i:1;i:1;i:4;}}i:10;a:5:{s:1:\"a\";i:11;s:1:\"b\";s:14:\"ver categories\";s:1:\"c\";s:3:\"web\";s:1:\"d\";s:10:\"categories\";s:1:\"r\";a:1:{i:0;i:1;}}i:11;a:5:{s:1:\"a\";i:12;s:1:\"b\";s:12:\"ver reportes\";s:1:\"c\";s:3:\"web\";s:1:\"d\";s:8:\"reportes\";s:1:\"r\";a:1:{i:0;i:1;}}}s:5:\"roles\";a:4:{i:0;a:3:{s:1:\"a\";i:1;s:1:\"b\";s:5:\"ADMIN\";s:1:\"c\";s:3:\"web\";}i:1;a:3:{s:1:\"a\";i:2;s:1:\"b\";s:8:\"VENDEDOR\";s:1:\"c\";s:3:\"web\";}i:2;a:3:{s:1:\"a\";i:3;s:1:\"b\";s:6:\"PATRON\";s:1:\"c\";s:3:\"web\";}i:3;a:3:{s:1:\"a\";i:4;s:1:\"b\";s:10:\"SUPERADMIN\";s:1:\"c\";s:3:\"web\";}}}', 1729783617);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Pescado', NULL, NULL),
(2, 'Camaron', NULL, NULL),
(3, 'Cola decamaron', NULL, NULL),
(4, 'Langostas, pulpos, jaibas, otros', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clients`
--

CREATE TABLE `clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `nit` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `tipo` varchar(255) NOT NULL DEFAULT 'CLIENTE' COMMENT 'CLIENTE, PROVEEDOR',
  `company_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `clients`
--

INSERT INTO `clients` (`id`, `name`, `lastname`, `company`, `nit`, `phone`, `created_at`, `updated_at`, `tipo`, `company_id`) VALUES
(1, 'SN', NULL, NULL, '545878787sdfsdfsdfsdf', '789787sdasdasd879asd', '2024-10-21 17:26:26', '2024-10-21 17:26:26', 'CLIENTE', 17),
(2, 'Donaldo', NULL, NULL, '025898955', '2143171065', '2024-10-22 09:39:14', '2024-10-22 09:39:14', 'CLIENTE', 17),
(3, 'Donaldo', NULL, 'JDK', '123456', '2143171065', '2024-10-22 12:40:49', '2024-10-22 12:40:49', 'PROVEEDOR', 17),
(4, 'Francisco', NULL, NULL, '04546456465456564', '7777777777777', '2024-10-24 16:14:58', '2024-10-24 16:14:58', 'CLIENTE', 19),
(5, 'Juan', 'Pueblo', 'Freund', '045478787', '7778877878', '2024-10-24 16:16:46', '2024-10-24 16:16:46', 'PROVEEDOR', 19);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `companies`
--

CREATE TABLE `companies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `color` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `companies`
--

INSERT INTO `companies` (`id`, `name`, `address`, `phone`, `created_at`, `updated_at`, `color`) VALUES
(17, 'Mariscos Tevez', 'Direccion Sud', '5261545', '2024-05-17 08:55:14', '2024-05-17 09:23:35', '#9C27B0'),
(19, 'Mariscos 2', 'some address', '24242424', '2024-10-21 17:32:06', '2024-10-21 17:32:06', '#673AB7'),
(21, 'Empresa Test1', 'DirescciónTest1', '787985181', '2024-10-23 13:18:43', '2024-10-23 13:19:51', '#795548');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `crews`
--

CREATE TABLE `crews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `boat_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `nacionalidad` varchar(255) DEFAULT NULL,
  `tipoDocumento` varchar(255) DEFAULT NULL,
  `numeroIdentificacion` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `company_id` bigint(20) UNSIGNED DEFAULT NULL,
  `estado` varchar(255) NOT NULL DEFAULT 'Activo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `crews`
--

INSERT INTO `crews` (`id`, `name`, `role`, `boat_id`, `created_at`, `updated_at`, `nacionalidad`, `tipoDocumento`, `numeroIdentificacion`, `telefono`, `company_id`, `estado`) VALUES
(1, 'Pepito', 'CAPITAN', 3, '2024-10-22 10:49:52', '2024-10-22 10:50:08', 'SALVADOREÑO', 'DUI', '01245748585', '78787878', 17, 'Activo'),
(2, 'Pepito', 'MARINERO', 3, '2024-10-22 12:44:32', '2024-10-22 12:44:32', 'SALVADOREÑO', 'DUI', '02898284', '7585-2585', 17, 'Activo'),
(3, 'Pepito 3', 'MARINERO', 3, '2024-10-22 12:44:57', '2024-10-22 12:44:57', 'SALVADOREÑO', 'DUI', '02898585', '2525-8585', 17, 'Activo'),
(4, 'Pepito 4', 'MAQUINISTA', 3, '2024-10-22 12:45:19', '2024-10-22 12:45:19', 'SALVADOREÑO', 'DUI', '02989858', '2585-8585', 17, 'Activo'),
(5, 'Jose Perez', 'CAPITAN', 6, '2024-10-23 09:53:38', '2024-10-23 09:53:38', 'SALVADOREÑO', 'DUI', '012345678', '77777777', 19, 'Activo'),
(6, 'Carlos Martinez', 'MARINERO', 6, '2024-10-23 09:54:17', '2024-10-23 09:54:17', 'SALVADOREÑO', 'DUI', '012345678', '77777777', 19, 'Activo'),
(7, 'Edwin cruz', 'MAQUINISTA', 6, '2024-10-23 09:56:08', '2024-10-23 09:56:08', 'SALVADOREÑO', 'DUI', '012345678', '7777777', 19, 'Activo'),
(8, 'Melquisedec', 'CAPITAN', 7, '2024-10-23 14:05:45', '2024-10-23 14:20:43', 'SALVADOREÑO', 'DUI', '04127194-5', '75898584', 17, 'Inactivo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `crew_viajes`
--

CREATE TABLE `crew_viajes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `crew_id` bigint(20) UNSIGNED NOT NULL,
  `viaje_id` bigint(20) UNSIGNED NOT NULL,
  `role` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `crew_viajes`
--

INSERT INTO `crew_viajes` (`id`, `crew_id`, `viaje_id`, `role`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 'CAPITAN', NULL, NULL),
(2, 3, 2, 'MARINERO', NULL, NULL),
(3, 4, 2, 'MARINERO', NULL, NULL),
(4, 2, 2, 'MAQUINISTA', NULL, NULL),
(5, 7, 3, 'CAPITAN', NULL, NULL),
(6, 6, 3, 'MARINERO', NULL, NULL),
(7, 5, 3, 'MAQUINISTA', NULL, NULL),
(8, 7, 4, 'CAPITAN', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `descargas`
--

CREATE TABLE `descargas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `viaje_id` bigint(20) UNSIGNED NOT NULL,
  `descarga` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'ACTIVO',
  `dia` varchar(255) NOT NULL,
  `fecha` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `descargas`
--

INSERT INTO `descargas` (`id`, `user_id`, `viaje_id`, `descarga`, `status`, `dia`, `fecha`, `created_at`, `updated_at`) VALUES
(1, 1, 2, '1', 'ACTIVO', '1', '2024-10-22', '2024-10-22 12:54:03', '2024-10-22 12:54:03'),
(2, 24, 3, '1', 'ACTIVO', '1', '2024-10-23', '2024-10-23 10:06:35', '2024-10-23 10:06:35'),
(3, 24, 4, '1', 'ACTIVO', '1', '2024-10-23', '2024-10-23 10:50:29', '2024-10-23 10:50:29'),
(4, 24, 4, '2', 'ACTIVO', '1', '2024-10-23', '2024-10-23 10:51:24', '2024-10-23 10:51:24'),
(5, 24, 4, '3', 'ACTIVO', '1', '2024-10-23', '2024-10-23 10:51:37', '2024-10-23 10:51:37');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `details`
--

CREATE TABLE `details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sale_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` double NOT NULL,
  `total` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `details`
--

INSERT INTO `details` (`id`, `sale_id`, `product_id`, `user_id`, `product_name`, `quantity`, `price`, `total`, `created_at`, `updated_at`) VALUES
(1, 1, 6, 1, 'Camaron Grande', 1, 9, 9, '2024-10-21 17:26:26', '2024-10-21 17:26:26'),
(2, 1, 4, 1, 'Cola de Camaron', 1, 7, 7, '2024-10-21 17:26:26', '2024-10-21 17:26:26'),
(3, 1, 3, 1, 'Camaron', 10, 8.75, 87.5, '2024-10-21 17:26:26', '2024-10-21 17:26:26'),
(4, 2, 7, 1, 'Camaron Pequeño', 1, 7, 7, '2024-10-22 09:39:14', '2024-10-22 09:39:14'),
(5, 2, 6, 1, 'Camaron Grande', 1, 9, 9, '2024-10-22 09:39:14', '2024-10-22 09:39:14'),
(6, 2, 5, 1, 'Pescado', 1, 5, 5, '2024-10-22 09:39:14', '2024-10-22 09:39:14'),
(7, 2, 3, 1, 'Camaron', 1, 8.75, 8.75, '2024-10-22 09:39:14', '2024-10-22 09:39:14'),
(8, 3, 8, 24, 'Pescado Macarela', 1, 2.5, 2.5, '2024-10-24 16:14:58', '2024-10-24 16:14:58'),
(9, 3, 9, 24, 'Camaron jumbo', 1, 3, 3, '2024-10-24 16:14:58', '2024-10-24 16:14:58'),
(10, 3, 10, 24, 'Pulpo', 1, 4, 4, '2024-10-24 16:14:58', '2024-10-24 16:14:58');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lances`
--

CREATE TABLE `lances` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fecha` date NOT NULL,
  `numero` varchar(255) NOT NULL,
  `hora_inicio` time DEFAULT NULL,
  `hora_fin` time DEFAULT NULL,
  `latitud` double DEFAULT NULL,
  `longitud` double DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'ACTIVO',
  `observaciones` text DEFAULT NULL,
  `viaje_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `lances`
--

INSERT INTO `lances` (`id`, `fecha`, `numero`, `hora_inicio`, `hora_fin`, `latitud`, `longitud`, `status`, `observaciones`, `viaje_id`, `user_id`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, '2024-10-23', '1', '10:46:00', '10:46:00', NULL, NULL, 'ACTIVO', 'Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan rhoncus,', 4, 24, NULL, '2024-10-23 10:47:59', '2024-10-23 10:47:59'),
(2, '2024-10-23', '2', '10:48:00', '10:48:00', NULL, NULL, 'ACTIVO', 'Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan rhoncus,', 4, 24, NULL, '2024-10-23 10:48:23', '2024-10-23 10:48:23'),
(3, '2024-10-23', '3', '10:48:00', '10:48:00', NULL, NULL, 'ACTIVO', 'Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan rhoncus,', 4, 24, NULL, '2024-10-23 10:49:06', '2024-10-23 10:49:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lance_productos`
--

CREATE TABLE `lance_productos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `lance_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `cantidad` int(11) NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `lance_productos`
--

INSERT INTO `lance_productos` (`id`, `lance_id`, `product_id`, `cantidad`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, 10, 5, NULL, '2024-10-23 10:47:59', '2024-10-23 10:47:59'),
(2, 1, 9, 5, NULL, '2024-10-23 10:47:59', '2024-10-23 10:47:59'),
(3, 1, 8, 5, NULL, '2024-10-23 10:47:59', '2024-10-23 10:47:59'),
(4, 2, 10, 10, NULL, '2024-10-23 10:48:23', '2024-10-23 10:48:23'),
(5, 2, 8, 10, NULL, '2024-10-23 10:48:23', '2024-10-23 10:48:23'),
(6, 3, 8, 6, NULL, '2024-10-23 10:49:06', '2024-10-23 10:49:06'),
(7, 3, 10, 6, NULL, '2024-10-23 10:49:06', '2024-10-23 10:49:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lance_viajes`
--

CREATE TABLE `lance_viajes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fecha` date DEFAULT NULL,
  `numero` int(11) DEFAULT NULL,
  `hora_inicio` time DEFAULT NULL,
  `hora_fin` time DEFAULT NULL,
  `latitud` double DEFAULT NULL,
  `longitud` double DEFAULT NULL,
  `camaron_blanco` double DEFAULT NULL,
  `camaron_cafe` double DEFAULT NULL,
  `camaron_rojo` double DEFAULT NULL,
  `camaroncillo` double DEFAULT NULL,
  `calamar` double DEFAULT NULL,
  `caracol` double DEFAULT NULL,
  `corvina` double DEFAULT NULL,
  `babosa` double DEFAULT NULL,
  `guabina` double DEFAULT NULL,
  `jaiba` double DEFAULT NULL,
  `langosta` double DEFAULT NULL,
  `pulpo` double DEFAULT NULL,
  `jurel` double DEFAULT NULL,
  `anguila` double DEFAULT NULL,
  `pargo` double DEFAULT NULL,
  `robalo` double DEFAULT NULL,
  `cienero` double DEFAULT NULL,
  `otras_especies` double DEFAULT NULL,
  `observaciones` varchar(255) DEFAULT NULL,
  `viaje_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(9, '0001_01_01_000000_create_users_table', 1),
(10, '0001_01_01_000001_create_cache_table', 1),
(11, '0001_01_01_000002_create_jobs_table', 1),
(12, '2024_05_10_090151_create_personal_access_tokens_table', 1),
(13, '2024_05_17_035822_create_companies_table', 2),
(14, '2024_05_17_035900_create_boats_table', 2),
(15, '2024_05_17_040058_create_crews_table', 2),
(16, '2024_05_17_040103_create_clients_table', 2),
(18, '2024_05_17_041058_create_categories_table', 3),
(21, '2024_05_17_041059_create_products_table', 4),
(24, '2024_06_05_204328_create_viajes_table', 5),
(27, '2024_06_05_205315_create_producto_viajes_table', 6),
(28, '2024_06_11_060259_create_sales_table', 7),
(29, '2024_06_11_060640_create_details_table', 7),
(30, '2024_06_11_060746_create_payments_table', 7),
(33, '2024_06_20_044023_add_sales', 8),
(34, '2024_06_25_042346_add_clients', 9),
(35, '2024_07_02_030821_add_sale', 10),
(36, '2024_07_02_035456_add_crew', 11),
(37, '2024_07_02_041029_add_viajes', 12),
(44, '2024_07_02_060710_create_descargas_table', 13),
(45, '2024_07_02_060954_add_producto_viajes', 13),
(46, '2024_07_23_050734_add_sales', 14),
(47, '2024_07_23_052500_create_permission_tables', 14),
(48, '2024_07_23_063731_add_viajes', 14),
(49, '2024_07_26_041653_add_sale', 15),
(50, '2024_07_26_050758_add_boat', 15),
(51, '2024_08_06_194631_create_crew_viajes_table', 16),
(53, '2024_08_09_190553_create_lance_viajes_table', 17),
(54, '2024_08_30_023929_create_lance_productos_table', 17),
(55, '2024_08_30_062556_users_add', 17),
(56, '2024_10_01_195541_create_bote_files_table', 18),
(57, '2024_10_08_045233_add_sale', 19),
(58, '2024_10_08_050721_add_clients', 19),
(59, '2024_10_08_052008_add_crews', 19),
(60, '2024_10_08_052404_add_viajes', 19),
(61, '2024_10_21_001718_add_crew', 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `model_has_permissions`
--

INSERT INTO `model_has_permissions` (`permission_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1),
(1, 'App\\Models\\User', 5),
(1, 'App\\Models\\User', 11),
(1, 'App\\Models\\User', 19),
(1, 'App\\Models\\User', 20),
(1, 'App\\Models\\User', 21),
(1, 'App\\Models\\User', 22),
(1, 'App\\Models\\User', 23),
(1, 'App\\Models\\User', 24),
(1, 'App\\Models\\User', 25),
(1, 'App\\Models\\User', 26),
(1, 'App\\Models\\User', 27),
(2, 'App\\Models\\User', 1),
(2, 'App\\Models\\User', 11),
(2, 'App\\Models\\User', 21),
(2, 'App\\Models\\User', 22),
(2, 'App\\Models\\User', 24),
(2, 'App\\Models\\User', 25),
(2, 'App\\Models\\User', 26),
(3, 'App\\Models\\User', 1),
(3, 'App\\Models\\User', 11),
(3, 'App\\Models\\User', 24),
(3, 'App\\Models\\User', 26),
(4, 'App\\Models\\User', 1),
(4, 'App\\Models\\User', 11),
(4, 'App\\Models\\User', 18),
(4, 'App\\Models\\User', 24),
(4, 'App\\Models\\User', 26),
(5, 'App\\Models\\User', 1),
(5, 'App\\Models\\User', 4),
(5, 'App\\Models\\User', 11),
(5, 'App\\Models\\User', 20),
(5, 'App\\Models\\User', 24),
(5, 'App\\Models\\User', 26),
(5, 'App\\Models\\User', 27),
(6, 'App\\Models\\User', 1),
(6, 'App\\Models\\User', 11),
(6, 'App\\Models\\User', 12),
(6, 'App\\Models\\User', 21),
(6, 'App\\Models\\User', 22),
(6, 'App\\Models\\User', 23),
(6, 'App\\Models\\User', 24),
(6, 'App\\Models\\User', 25),
(6, 'App\\Models\\User', 26),
(7, 'App\\Models\\User', 1),
(7, 'App\\Models\\User', 4),
(7, 'App\\Models\\User', 5),
(7, 'App\\Models\\User', 9),
(7, 'App\\Models\\User', 11),
(7, 'App\\Models\\User', 12),
(7, 'App\\Models\\User', 18),
(7, 'App\\Models\\User', 20),
(7, 'App\\Models\\User', 23),
(7, 'App\\Models\\User', 24),
(7, 'App\\Models\\User', 26),
(7, 'App\\Models\\User', 27),
(8, 'App\\Models\\User', 1),
(8, 'App\\Models\\User', 4),
(8, 'App\\Models\\User', 5),
(8, 'App\\Models\\User', 11),
(8, 'App\\Models\\User', 12),
(8, 'App\\Models\\User', 19),
(8, 'App\\Models\\User', 20),
(8, 'App\\Models\\User', 21),
(8, 'App\\Models\\User', 22),
(8, 'App\\Models\\User', 23),
(8, 'App\\Models\\User', 24),
(8, 'App\\Models\\User', 25),
(8, 'App\\Models\\User', 26),
(8, 'App\\Models\\User', 27),
(9, 'App\\Models\\User', 1),
(9, 'App\\Models\\User', 4),
(9, 'App\\Models\\User', 5),
(9, 'App\\Models\\User', 11),
(9, 'App\\Models\\User', 19),
(9, 'App\\Models\\User', 20),
(9, 'App\\Models\\User', 21),
(9, 'App\\Models\\User', 22),
(9, 'App\\Models\\User', 23),
(9, 'App\\Models\\User', 24),
(9, 'App\\Models\\User', 25),
(9, 'App\\Models\\User', 26),
(9, 'App\\Models\\User', 27),
(10, 'App\\Models\\User', 1),
(10, 'App\\Models\\User', 11),
(10, 'App\\Models\\User', 12),
(10, 'App\\Models\\User', 24),
(10, 'App\\Models\\User', 26),
(11, 'App\\Models\\User', 1),
(11, 'App\\Models\\User', 24),
(12, 'App\\Models\\User', 1),
(12, 'App\\Models\\User', 24);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payments`
--

CREATE TABLE `payments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sale_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `amount` double NOT NULL,
  `date` datetime NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'PAGADO',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `group` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `group`, `created_at`, `updated_at`) VALUES
(1, 'ver inicio', 'web', 'ventas', '2024-07-23 05:16:54', '2024-07-23 05:16:54'),
(2, 'ver usuarios', 'web', 'usuarios', '2024-07-23 05:16:54', '2024-07-23 05:16:54'),
(3, 'ver empresas', 'web', 'empresas', '2024-07-23 05:16:54', '2024-07-23 05:16:54'),
(4, 'ver botes', 'web', 'botes', '2024-07-23 05:16:54', '2024-07-23 05:16:54'),
(5, 'ver tripulantes', 'web', 'tripulantes', '2024-07-23 05:16:54', '2024-07-23 05:16:54'),
(6, 'ver clientes', 'web', 'clientes', '2024-07-23 05:16:54', '2024-07-23 05:16:54'),
(7, 'ver viajes', 'web', 'viajes', '2024-07-23 05:16:54', '2024-07-23 05:16:54'),
(8, 'ver ventas', 'web', 'ventas', '2024-07-23 05:16:54', '2024-07-23 05:16:54'),
(9, 'ver deudores', 'web', 'deudores', '2024-07-23 05:16:54', '2024-07-23 05:16:54'),
(10, 'ver productos', 'web', 'productos', '2024-08-09 18:05:07', '2024-08-09 18:05:07'),
(11, 'ver categories', 'web', 'categories', '2024-10-20 20:25:08', '2024-10-20 20:25:08'),
(12, 'ver reportes', 'web', 'reportes', '2024-10-20 20:25:08', '2024-10-20 20:25:08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(5, 'App\\Models\\User', 1, 'auth_token', 'bd559a518662fadd6ab4544b1815c9bcff69449a4d7469d3a97f558eaf3b952b', '[\"*\"]', '2024-05-18 10:13:08', NULL, '2024-05-17 10:19:13', '2024-05-18 10:13:08'),
(6, 'App\\Models\\User', 1, 'auth_token', '5ee644d45a9565dcf1bcc0926880201bd546a63b3d1de1af50b326bae0b16769', '[\"*\"]', '2024-05-25 09:20:13', NULL, '2024-05-24 10:49:19', '2024-05-25 09:20:13'),
(7, 'App\\Models\\User', 1, 'auth_token', '21273f3223c1951a5311c905376ccf2568782e3febc076bcfc3703a169bcc319', '[\"*\"]', '2024-06-06 00:00:27', NULL, '2024-06-06 00:00:21', '2024-06-06 00:00:27'),
(8, 'App\\Models\\User', 1, 'auth_token', 'a66ad3c174c8b9c0cc59e6ea957b74cdf1cb998f9e3612e34096f6e225b6af77', '[\"*\"]', '2024-06-06 01:39:25', NULL, '2024-06-06 00:01:34', '2024-06-06 01:39:25'),
(9, 'App\\Models\\User', 1, 'auth_token', 'e555a4cbbdd35956a3cfce44caeba7b50025e9b7f624d1549f828214dd1e9787', '[\"*\"]', '2024-06-12 06:00:45', NULL, '2024-06-10 09:08:12', '2024-06-12 06:00:45'),
(10, 'App\\Models\\User', 1, 'auth_token', '64624a9231100bfe2b39fb48cfa0068d79442816ed4bff2c95f8fcb27b8107b5', '[\"*\"]', '2024-06-20 10:13:21', NULL, '2024-06-20 08:37:22', '2024-06-20 10:13:21'),
(11, 'App\\Models\\User', 1, 'auth_token', '79d05d2359478f96e456179215754264519d3486e695bf2a39f3f9e940b32548', '[\"*\"]', '2024-06-25 09:18:07', NULL, '2024-06-25 06:36:34', '2024-06-25 09:18:07'),
(12, 'App\\Models\\User', 1, 'auth_token', '207e55f36967d087b8b42496dd7f419a5dbbca157ec3e1e05af19411fd846644', '[\"*\"]', '2024-06-28 23:21:57', NULL, '2024-06-28 23:08:26', '2024-06-28 23:21:57'),
(13, 'App\\Models\\User', 1, 'auth_token', '1d28f7fb7c7d6509110da9edd9ca4fd6e37f48692fac6ff438a3c73bad93a668', '[\"*\"]', '2024-06-29 00:16:34', NULL, '2024-06-28 23:23:15', '2024-06-29 00:16:34'),
(14, 'App\\Models\\User', 1, 'auth_token', '57d46566c81daa82449859e45ca06955742a7c968f122625996ae0035aa4c005', '[\"*\"]', '2024-07-02 11:22:06', NULL, '2024-07-02 07:01:58', '2024-07-02 11:22:06'),
(15, 'App\\Models\\User', 1, 'auth_token', 'cbfb62e49ba5f49b553c805714a7f355904b338c9d65e095d68ae60ae61a544f', '[\"*\"]', '2024-07-02 11:41:00', NULL, '2024-07-02 11:22:57', '2024-07-02 11:41:00'),
(16, 'App\\Models\\User', 1, 'auth_token', 'f4233a7ab62a7acc69882395ab05068d485d2c349484b28eb9569fc3a714e80d', '[\"*\"]', '2024-07-23 05:13:16', NULL, '2024-07-02 05:42:36', '2024-07-23 05:13:16'),
(17, 'App\\Models\\User', 1, 'auth_token', '2bb3bd869b53e3d701045d6771a035c0c48a72a83ea0fa2be32713daa5990559', '[\"*\"]', '2024-07-16 10:09:18', NULL, '2024-07-02 18:40:18', '2024-07-16 10:09:18'),
(18, 'App\\Models\\User', 1, 'auth_token', '14206a2bcb0aa1b95606face20fb7fa435c02d321fd71348c619bc3a9b6c3d0d', '[\"*\"]', '2024-07-04 11:57:37', NULL, '2024-07-04 11:54:59', '2024-07-04 11:57:37'),
(19, 'App\\Models\\User', 1, 'auth_token', 'cc73d30889a1bab56633ea788c4bc2ad1901712186cdeba3a4559c506c8fae72', '[\"*\"]', '2024-07-09 19:29:48', NULL, '2024-07-09 19:29:41', '2024-07-09 19:29:48'),
(20, 'App\\Models\\User', 1, 'auth_token', 'c7bcda26ea135996986347546abe87e317b0f9e6d54cd16f64dd81cc8bed6e5f', '[\"*\"]', NULL, NULL, '2024-07-09 19:30:04', '2024-07-09 19:30:04'),
(21, 'App\\Models\\User', 1, 'auth_token', 'c98a988c0e49123fc905defb509402854729b4f587ac16eef0249b0f79e0554d', '[\"*\"]', '2024-07-09 19:30:14', NULL, '2024-07-09 19:30:07', '2024-07-09 19:30:14'),
(22, 'App\\Models\\User', 1, 'auth_token', '00417be9d2624950bc0ec8a8b2b8074a2e03d44b721dd362a8e2f97d40ba480d', '[\"*\"]', '2024-07-16 14:30:45', NULL, '2024-07-16 10:09:20', '2024-07-16 14:30:45'),
(23, 'App\\Models\\User', 1, 'auth_token', '36cb4164a6fa6203d796e46c8f8b7c11eb178974ecfb0e8939ae4094425fbcd9', '[\"*\"]', '2024-07-19 18:38:50', NULL, '2024-07-16 14:30:48', '2024-07-19 18:38:50'),
(24, 'App\\Models\\User', 1, 'auth_token', '951b905a9b1b2a8e41f1dab258446815a8c2c63b23079f09516658988ae2995b', '[\"*\"]', '2024-07-19 18:47:37', NULL, '2024-07-19 18:38:52', '2024-07-19 18:47:37'),
(25, 'App\\Models\\User', 1, 'auth_token', '68975fa17558dde2c79e23d365bcd70a182f083869882ff8a6e68da77b24c6d5', '[\"*\"]', '2024-07-20 01:51:27', NULL, '2024-07-20 01:51:17', '2024-07-20 01:51:27'),
(29, 'App\\Models\\User', 1, 'auth_token', 'aa0677fb2d8122e2910b9d7a9b8639fd91da54225fe9ab2957f11afa66f83ee0', '[\"*\"]', '2024-07-25 16:00:09', NULL, '2024-07-25 09:18:02', '2024-07-25 16:00:09'),
(30, 'App\\Models\\User', 1, 'auth_token', '3440c45fb67194e87895de92c0249a07dfde2dc0cfec68b6207039ada801502e', '[\"*\"]', '2024-07-26 17:05:05', NULL, '2024-07-26 17:03:44', '2024-07-26 17:05:05'),
(31, 'App\\Models\\User', 1, 'auth_token', 'b18dfbd8f58b6ab15a1ad4eaaa040636ae1b5dbb94c206b368f8e54a0cf5edd7', '[\"*\"]', '2024-07-29 07:44:14', NULL, '2024-07-29 07:43:51', '2024-07-29 07:44:14'),
(32, 'App\\Models\\User', 1, 'auth_token', 'bd6a170ceb4149167fea32daee54fd3ef9af747833e0e14e442c06b839a6b7f2', '[\"*\"]', '2024-07-29 22:58:32', NULL, '2024-07-29 07:48:16', '2024-07-29 22:58:32'),
(33, 'App\\Models\\User', 1, 'auth_token', '9bcb4b8b9c6b31872f4f84ca8a526804fa39689e0a9fa74281a1703543033317', '[\"*\"]', '2024-07-29 08:18:15', NULL, '2024-07-29 08:13:31', '2024-07-29 08:18:15'),
(34, 'App\\Models\\User', 1, 'auth_token', '86bf9f348dee57fd9ba7f080ddab2abfeda10761ff93ff86eb5e3631286d3716', '[\"*\"]', '2024-07-31 15:53:56', NULL, '2024-07-29 15:34:40', '2024-07-31 15:53:56'),
(35, 'App\\Models\\User', 1, 'auth_token', '4bc9d65e112a10edfb23e299d6c847745913e83a5b13fef3982f9fee957bc780', '[\"*\"]', '2024-08-01 13:28:51', NULL, '2024-07-31 15:37:16', '2024-08-01 13:28:51'),
(36, 'App\\Models\\User', 1, 'auth_token', '845128bc0b064811836f45670fdf72d3a5b953eafbf015b9fa00768e3a281160', '[\"*\"]', '2024-07-31 17:54:59', NULL, '2024-07-31 17:40:29', '2024-07-31 17:54:59'),
(37, 'App\\Models\\User', 1, 'auth_token', 'ac392d1c86cf66d256cacb4591e7c49c24e89f83c9408d723addac43c7de5b86', '[\"*\"]', '2024-08-01 19:41:43', NULL, '2024-08-01 14:18:33', '2024-08-01 19:41:43'),
(38, 'App\\Models\\User', 1, 'auth_token', '45acbee661061765fd0a94865b18112c01e7dc7e705c05af6d9b8427f011eb55', '[\"*\"]', '2024-08-06 20:52:18', NULL, '2024-08-03 20:43:29', '2024-08-06 20:52:18'),
(42, 'App\\Models\\User', 1, 'auth_token', 'abee3b67663649cbf5ec88df603a335735a26edb0a8d234e13e170de98e57e93', '[\"*\"]', '2024-08-16 17:59:09', NULL, '2024-08-06 18:35:28', '2024-08-16 17:59:09'),
(44, 'App\\Models\\User', 1, 'auth_token', '909e847def43dbb2b9f133a4defa417a34bdd513af00d93294161715b30f8607', '[\"*\"]', '2024-08-17 10:23:33', NULL, '2024-08-16 17:06:54', '2024-08-17 10:23:33'),
(45, 'App\\Models\\User', 1, 'auth_token', 'e201f40f971603213e3c314dd2cdc9a154347884fd72426caf1564d332499f7e', '[\"*\"]', '2024-08-19 15:25:10', NULL, '2024-08-19 15:25:07', '2024-08-19 15:25:10'),
(48, 'App\\Models\\User', 1, 'auth_token', '296f527bf4308840202dfd44f10bf0150318aea3619c5fb2460f33f632b330a8', '[\"*\"]', '2024-10-02 09:20:45', NULL, '2024-08-21 15:04:11', '2024-10-02 09:20:45'),
(49, 'App\\Models\\User', 1, 'auth_token', 'dd07b6ddb99830ce44ed60c552ee49fd04acd7f10a25f00dc6607e1017bc7f76', '[\"*\"]', '2024-08-21 17:15:00', NULL, '2024-08-21 15:04:43', '2024-08-21 17:15:00'),
(50, 'App\\Models\\User', 1, 'auth_token', 'a03298f80570dc90b2a08d1ad76bec05466632b32aeb392f5c5926918786a072', '[\"*\"]', '2024-08-22 21:28:16', NULL, '2024-08-21 15:57:04', '2024-08-22 21:28:16'),
(51, 'App\\Models\\User', 1, 'auth_token', '7614faf969ea4d4d20a267d9851af84a39f2210113424d1a0f1ad9a080f0f220', '[\"*\"]', '2024-08-22 20:29:30', NULL, '2024-08-22 20:29:30', '2024-08-22 20:29:30'),
(52, 'App\\Models\\User', 1, 'auth_token', '61f509cb2037ad0a1dcb12b49db867e2052e296711f99eec337685356ae378f6', '[\"*\"]', '2024-08-22 20:31:43', NULL, '2024-08-22 20:30:00', '2024-08-22 20:31:43'),
(53, 'App\\Models\\User', 1, 'auth_token', '05f561c8ea31af947d8251e672aef6e45924dafb80da1e1b9a321be296db8f51', '[\"*\"]', '2024-10-23 14:22:52', NULL, '2024-08-22 21:28:18', '2024-10-23 14:22:52'),
(54, 'App\\Models\\User', 1, 'auth_token', 'a09db16387e4c11610b017a2e5107b491200019f1c1ac11ac09145e47a5df0b3', '[\"*\"]', '2024-08-25 11:52:08', NULL, '2024-08-25 11:51:07', '2024-08-25 11:52:08'),
(55, 'App\\Models\\User', 1, 'auth_token', 'bc7cca3e2601c7d0c3fb3cc27c1bf9148f8d2cbe48302edc429a21dd03916fbe', '[\"*\"]', NULL, NULL, '2024-08-26 08:43:23', '2024-08-26 08:43:23'),
(56, 'App\\Models\\User', 1, 'auth_token', 'c531b275b507c8f70cd98db6cda42dec0a31614ef6dad50f54ef8450799e17a0', '[\"*\"]', NULL, NULL, '2024-08-26 08:43:27', '2024-08-26 08:43:27'),
(57, 'App\\Models\\User', 1, 'auth_token', '2bd75a42128d5836450ee2f3300fed55dcbde8183c460a63b2bed2cff82c06f3', '[\"*\"]', NULL, NULL, '2024-08-26 10:33:44', '2024-08-26 10:33:44'),
(58, 'App\\Models\\User', 7, 'auth_token', '7276b57fae1083de0d82e12b8df9d71ea5c8713704c3997227fae285a96ff4ed', '[\"*\"]', '2024-08-27 14:49:46', NULL, '2024-08-26 15:24:02', '2024-08-27 14:49:46'),
(60, 'App\\Models\\User', 1, 'auth_token', 'd13db19475baac7cc7cc04ec895e4217ad126c1176e668678007d00c248f9ea0', '[\"*\"]', '2024-08-29 14:35:38', NULL, '2024-08-29 14:34:49', '2024-08-29 14:35:38'),
(61, 'App\\Models\\User', 1, 'auth_token', 'cc6c7794d2b4c84eb5c563294b789b65ea84c0e189b6a9a8c2b508356bdc56d3', '[\"*\"]', '2024-08-29 18:30:16', NULL, '2024-08-29 18:29:28', '2024-08-29 18:30:16'),
(67, 'App\\Models\\User', 1, 'auth_token', '9cb746f4f3c7b8a30ac127eebebe2053951f46280ace1f4278e67159e9530b1f', '[\"*\"]', '2024-09-02 08:12:29', NULL, '2024-09-02 08:04:34', '2024-09-02 08:12:29'),
(73, 'App\\Models\\User', 1, 'auth_token', '55549dca2434e01d2f44a5a3ca923d782b5e188d1cf7e7fe2bae7dd13b5e98de', '[\"*\"]', '2024-09-12 09:37:31', NULL, '2024-09-03 18:12:54', '2024-09-12 09:37:31'),
(77, 'App\\Models\\User', 1, 'auth_token', '5cefc2cf0dee365a0e6d6a2178b73dc7e5e776dd4bfbd231cc3f03990906194c', '[\"*\"]', NULL, NULL, '2024-09-12 09:37:51', '2024-09-12 09:37:51'),
(78, 'App\\Models\\User', 1, 'auth_token', '7b00c1af1d3c5ef8cc23574815208b0713bd1b4556c9e070ce5f19670b1bc4d0', '[\"*\"]', '2024-10-02 09:18:09', NULL, '2024-09-12 09:37:56', '2024-10-02 09:18:09'),
(79, 'App\\Models\\User', 1, 'auth_token', '7053c9140cb34f0900aa19bc00028a1caa2d37ddb761b9bb86e2d25435230321', '[\"*\"]', '2024-09-29 17:52:02', NULL, '2024-09-29 17:51:54', '2024-09-29 17:52:02'),
(81, 'App\\Models\\User', 1, 'auth_token', '2cee0f5c0ce5e8ca64e00887eb82eef418385e3937ca1c00e9b6535512a1810f', '[\"*\"]', NULL, NULL, '2024-10-02 09:18:30', '2024-10-02 09:18:30'),
(82, 'App\\Models\\User', 1, 'auth_token', 'c23e68abffe5ec5eee54d54b91cebab6e42ff47d1a13008d6f9d70573164c9dc', '[\"*\"]', '2024-10-10 10:37:55', NULL, '2024-10-02 09:18:33', '2024-10-10 10:37:55'),
(83, 'App\\Models\\User', 1, 'auth_token', '4f29fa479637498ac6b896076b98a883bdeb79a0e4fb7d88bb6e9f29c5662c2e', '[\"*\"]', '2024-10-02 16:35:41', NULL, '2024-10-02 09:20:48', '2024-10-02 16:35:41'),
(86, 'App\\Models\\User', 1, 'auth_token', '861f02697d8335d03fc1f84a165e83c0bca465f27de102c3e6fedfe5afc12247', '[\"*\"]', '2024-10-02 09:42:59', NULL, '2024-10-02 09:39:36', '2024-10-02 09:42:59'),
(90, 'App\\Models\\User', 11, 'auth_token', '8cc4e90b845261f14fc41a7a64d74bbcfa72dbea95da5de1e7f1513738add275', '[\"*\"]', '2024-10-13 09:05:17', NULL, '2024-10-08 04:08:21', '2024-10-13 09:05:17'),
(91, 'App\\Models\\User', 1, 'auth_token', 'bc8a42f75f036e9f5ace2770ea86faf2a34fec518eced91443ba532e1250db0a', '[\"*\"]', NULL, NULL, '2024-10-10 10:38:15', '2024-10-10 10:38:15'),
(92, 'App\\Models\\User', 1, 'auth_token', '4d7f595db988adc1df3a28c5cb6b03563c650724b3045651e2613c3ac2d52607', '[\"*\"]', NULL, NULL, '2024-10-10 10:38:19', '2024-10-10 10:38:19'),
(111, 'App\\Models\\User', 1, 'auth_token', 'de7b7751116d8a94a72b96a7ecee77811e8270b340c4ea5c48316ad58182ff20', '[\"*\"]', '2024-10-10 11:15:11', NULL, '2024-10-10 11:15:06', '2024-10-10 11:15:11'),
(117, 'App\\Models\\User', 1, 'auth_token', 'c85cb1a6da0b9ab412b964f980009ae20ccab95ae570c748574ad83b5858de3e', '[\"*\"]', '2024-10-13 09:37:27', NULL, '2024-10-13 09:33:59', '2024-10-13 09:37:27'),
(124, 'App\\Models\\User', 1, 'auth_token', 'ba5e247962e260a8034a961d42ef87867dcf2baf407912285cf8b42988bae945', '[\"*\"]', '2024-10-20 20:38:55', NULL, '2024-10-15 04:28:49', '2024-10-20 20:38:55'),
(133, 'App\\Models\\User', 1, 'auth_token', '41eb1d0fd1833bcd3911d1cc8f40a43a3998fc1f3f7bd3498c9fcf007af0ff65', '[\"*\"]', '2024-10-17 09:58:24', NULL, '2024-10-16 10:57:11', '2024-10-17 09:58:24'),
(136, 'App\\Models\\User', 1, 'auth_token', 'a66fcca236dd7d140c844412554b9579c85599889cb68d8360c0b7ee13031ba6', '[\"*\"]', '2024-10-17 16:39:38', NULL, '2024-10-17 16:36:21', '2024-10-17 16:39:38'),
(149, 'App\\Models\\User', 11, 'auth_token', '1f142b635afa4e65cb301caf8f71925101fb8728f031589980d51e2c81b140f2', '[\"*\"]', '2024-10-18 11:39:18', NULL, '2024-10-18 11:34:49', '2024-10-18 11:39:18'),
(150, 'App\\Models\\User', 1, 'auth_token', 'c9c9a929123f84ec3667388f45d01c57dd5d97a3326d58a549051dfd99e6aa43', '[\"*\"]', '2024-10-21 09:12:22', NULL, '2024-10-18 11:37:58', '2024-10-21 09:12:22'),
(158, 'App\\Models\\User', 1, 'auth_token', '9887981b44798f927f09e1e66f3f4582be9f8f7881e6d050d35fe959ade26655', '[\"*\"]', '2024-10-22 10:13:55', NULL, '2024-10-21 17:41:22', '2024-10-22 10:13:55'),
(159, 'App\\Models\\User', 1, 'auth_token', '1a8209a171117144a7dbea611a1d56469d3d36beaf3afa74c8dcf3a8c9d9bf58', '[\"*\"]', '2024-10-22 12:54:03', NULL, '2024-10-22 09:34:35', '2024-10-22 12:54:03'),
(163, 'App\\Models\\User', 26, 'auth_token', 'a0e0b4ba446973d99e28a223ce92ac92e71b243e8ce207e6c5f2f1e08f58e56f', '[\"*\"]', '2024-10-23 08:55:37', NULL, '2024-10-23 08:54:28', '2024-10-23 08:55:37'),
(169, 'App\\Models\\User', 24, 'auth_token', '82af7007ca357da00c841fd09a448f1214f278e95d8d8e3f7434c76f4eceb42c', '[\"*\"]', '2024-10-24 16:18:05', NULL, '2024-10-24 09:34:28', '2024-10-24 16:18:05'),
(170, 'App\\Models\\User', 1, 'auth_token', '074f6f68f1dac0b75cf9eb3905295343ee00213eadda1803e82ac7140aecc25c', '[\"*\"]', '2024-10-24 14:07:03', NULL, '2024-10-24 13:44:12', '2024-10-24 14:07:03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto_viajes`
--

CREATE TABLE `producto_viajes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `viaje_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `cantidad` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'ACTIVO',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `descarga_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `producto_viajes`
--

INSERT INTO `producto_viajes` (`id`, `product_id`, `viaje_id`, `user_id`, `cantidad`, `fecha`, `status`, `created_at`, `updated_at`, `descarga_id`) VALUES
(1, 6, 2, 1, 250, '2024-10-22 12:54:03', 'ACTIVO', '2024-10-22 12:54:03', '2024-10-22 12:54:03', 1),
(2, 7, 2, 1, 500, '2024-10-22 12:54:03', 'ACTIVO', '2024-10-22 12:54:03', '2024-10-22 12:54:03', 1),
(3, 2, 2, 1, 150, '2024-10-22 12:54:03', 'ACTIVO', '2024-10-22 12:54:03', '2024-10-22 12:54:03', 1),
(4, 8, 3, 24, 10, '2024-10-23 10:06:35', 'ACTIVO', '2024-10-23 10:06:35', '2024-10-23 10:06:35', 2),
(5, 9, 3, 24, 10, '2024-10-23 10:06:35', 'ACTIVO', '2024-10-23 10:06:35', '2024-10-23 10:06:35', 2),
(6, 10, 3, 24, 10, '2024-10-23 10:06:35', 'ACTIVO', '2024-10-23 10:06:35', '2024-10-23 10:06:35', 2),
(7, 9, 4, 24, 55, '2024-10-23 10:50:29', 'ACTIVO', '2024-10-23 10:50:29', '2024-10-23 10:50:29', 3),
(8, 8, 4, 24, 100, '2024-10-23 10:51:24', 'ACTIVO', '2024-10-23 10:51:24', '2024-10-23 10:51:24', 4),
(9, 8, 4, 24, 100, '2024-10-23 10:51:37', 'ACTIVO', '2024-10-23 10:51:37', '2024-10-23 10:51:37', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` decimal(8,2) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `category_id` bigint(20) UNSIGNED DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `company_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `costo` decimal(8,2) DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `image`, `price`, `status`, `stock`, `category_id`, `user_id`, `company_id`, `created_at`, `updated_at`, `costo`) VALUES
(1, 'Caite', 'Sin descripción', 'default.png', 1.00, 'ACTIVE', 10, 1, 1, 17, '2024-10-21 11:44:53', '2024-10-21 11:44:53', 1.00),
(2, 'Chacalin', 'Sin descripción', 'default.png', 4.25, 'ACTIVE', 160, 4, 1, 17, '2024-10-21 11:45:29', '2024-10-22 12:54:03', 4.25),
(3, 'Camaron', 'Sin descripción', 'default.png', 8.75, 'ACTIVE', 9, 2, 1, 17, '2024-10-21 11:45:47', '2024-10-22 09:39:14', 9.00),
(4, 'Cola de Camaron', 'Sin descripción', 'default.png', 7.00, 'ACTIVE', 10, 3, 1, 17, '2024-10-21 11:46:03', '2024-10-21 17:28:52', 7.00),
(5, 'Pescado', 'Pescado', 'default.png', 5.00, 'ACTIVE', 9, 1, 1, 17, '2024-10-21 11:46:19', '2024-10-22 09:39:14', 5.00),
(6, 'Camaron Grande', 'Camaron Grande', 'default.png', 9.00, 'ACTIVE', 259, 2, 1, 17, '2024-10-21 11:46:59', '2024-10-22 12:54:03', 9.00),
(7, 'Camaron Pequeño', 'Camaron Pequeño', 'default.png', 7.00, 'ACTIVE', 509, 2, 1, 17, '2024-10-21 11:47:25', '2024-10-22 12:54:03', 7.00),
(8, 'Pescado Macarela', 'Lorem ipsum dolor sit amet consectetur adipiscing.', 'default.png', 2.50, 'ACTIVE', 210, 1, 24, 19, '2024-10-23 10:02:31', '2024-10-24 16:14:58', 2.50),
(9, 'Camaron jumbo', 'Lorem ipsum dolor sit amet consectetur adipiscing.', 'default.png', 3.00, 'ACTIVE', 63, 2, 24, 19, '2024-10-23 10:03:45', '2024-10-24 16:14:58', 3.00),
(10, 'Pulpo', 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sociis interdum sociosqu class at aptent facilisis enim.', 'default.png', 4.00, 'ACTIVE', 10, 4, 24, 19, '2024-10-23 10:04:22', '2024-10-24 16:14:58', 4.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'ADMIN', 'web', '2024-10-15 04:24:02', '2024-10-15 04:24:02'),
(2, 'VENDEDOR', 'web', '2024-10-15 04:24:02', '2024-10-15 04:24:02'),
(3, 'PATRON', 'web', '2024-10-15 04:24:02', '2024-10-15 04:24:02'),
(4, 'SUPERADMIN', 'web', '2024-10-15 04:24:02', '2024-10-15 04:24:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(2, 1),
(2, 2),
(2, 4),
(3, 1),
(3, 4),
(4, 1),
(4, 4),
(5, 1),
(5, 3),
(5, 4),
(6, 1),
(6, 2),
(6, 4),
(7, 1),
(7, 3),
(7, 4),
(8, 1),
(8, 2),
(8, 3),
(8, 4),
(9, 1),
(9, 2),
(9, 3),
(9, 4),
(10, 1),
(10, 4),
(11, 1),
(12, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

CREATE TABLE `sales` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `date` datetime NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `total` double NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'ACTIVO',
  `observacion` varchar(255) DEFAULT NULL,
  `pago` varchar(255) DEFAULT NULL COMMENT 'TRANSFERENCIA, EFECTIVO',
  `description` text DEFAULT NULL,
  `tipo_venta` varchar(255) NOT NULL DEFAULT 'INGRESO' COMMENT 'INGRESO, EGRESO',
  `numeroFactura` varchar(255) DEFAULT NULL,
  `motivo_anulacion` varchar(255) DEFAULT NULL,
  `viaje_id` bigint(20) UNSIGNED DEFAULT NULL,
  `boat_id` bigint(20) UNSIGNED DEFAULT NULL,
  `company_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `sales`
--

INSERT INTO `sales` (`id`, `date`, `client_id`, `total`, `tipo`, `user_id`, `created_at`, `updated_at`, `status`, `observacion`, `pago`, `description`, `tipo_venta`, `numeroFactura`, `motivo_anulacion`, `viaje_id`, `boat_id`, `company_id`) VALUES
(1, '2024-10-21 17:26:26', 1, 103.5, 'CONTADO', 1, '2024-10-21 17:26:26', '2024-10-21 17:28:52', 'ANULADO', 'sdasdasd', 'EFECTIVO', '1 Camaron Grande, 1 Cola de Camaron, 10 Camaron', 'INGRESO', NULL, 'el cliente no quizo el producto', NULL, NULL, 17),
(2, '2024-10-22 09:39:14', 2, 29.75, 'CONTADO', 1, '2024-10-22 09:39:14', '2024-10-22 09:39:14', 'ACTIVO', NULL, 'EFECTIVO', '1 Camaron Pequeño, 1 Camaron Grande, 1 Pescado, 1 Camaron', 'INGRESO', NULL, NULL, NULL, NULL, 17),
(3, '2024-10-24 16:14:58', 4, 9.5, 'CONTADO', 24, '2024-10-24 16:14:58', '2024-10-24 16:14:58', 'ACTIVO', 'sdasdasd', 'EFECTIVO', '1 Pescado Macarela, 1 Camaron jumbo, 1 Pulpo', 'INGRESO', NULL, NULL, NULL, NULL, 19),
(4, '2024-10-16 16:16:00', 5, 2.5, 'CONTADO', 24, '2024-10-24 16:16:50', '2024-10-24 16:16:50', 'ACTIVO', 'Pintura', 'EFECTIVO', 'Pintura', 'EGRESO', 'sasdasd5458564', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('12rdHMdUZq6GnRxI8h3L4hGRTAO1I5R05cWelOBG', NULL, '45.148.10.59', 'Mozilla/5.0 (X11; U; FreeBSD i386; en-US; rv:1.6) Gecko/20040406 Galeon/1.3.15', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMk1HM01kU2FlUkpQbWFLU094N0FzZWppSHZtUE1QMVdNMFdrQmtQNCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1729727576),
('DYNtAniB3vYAfpW928hymRAsEM89SrLI22J2H4nE', NULL, '167.94.145.105', 'Mozilla/5.0 (compatible; CensysInspect/1.1; +https://about.censys.io/)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoid0s3SUtUMmNSeHhTUWU2dU1Vem1lZ3J3RWJqcWdMZUJadFRScHJYayI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1729720389),
('KLNu7qbb1DAgStbda4AUlXx0RoHqJBQlyUcHuJ9h', NULL, '205.210.31.64', 'Expanse, a Palo Alto Networks company, searches across the global IPv4 space multiple times per day to identify customers&#39; presences on the Internet. If you would like to be excluded from our scans, please send IP addresses/domains to: scaninfo@paloaltonetworks.com', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUE1mTXpMZU1jR3dIazk0N3Rpdm9ialZBZXo0QlcwMlJNYmdBWmhabCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729798790),
('u4I9evLIpO8lBoWXMUawwlCd8wuq07rU6WTqa5oV', NULL, '162.142.125.214', 'Mozilla/5.0 (compatible; CensysInspect/1.1; +https://about.censys.io/)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYzNpZ2tnRXZ6NEJ5dEtPSzlSZ2dNUFNxZTlWZWI4QWFBMGtRRjhwVSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1729725445),
('ZeUiKN3Xxb4C0aFhzhpSN05F5exdmqsQzBqmfqiM', NULL, '134.209.147.232', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieE1LUU9JOXlDTjVtQWNnTGVtcG5hTkpHYUFtRDZOTEgxVkxNbHphUSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729773390);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'ADMIN' COMMENT 'ADMIN, ATTORNEY, TEACHER, DOCTOR',
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `company_id` bigint(20) UNSIGNED DEFAULT NULL,
  `bote_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `role`, `username`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `company_id`, `bote_id`) VALUES
(1, 'Administrador', 'SUPERADMIN', 'admin', 'admin@test.com', NULL, '$2y$12$hDG43BObhaGhvLbKSNgEkeTm8vAmw7yiuDaAS7JMJtwO7b.MGFUVa', NULL, NULL, '2024-10-08 04:01:24', 17, NULL),
(23, 'Ines', 'VENDEDOR', 'Ines', NULL, NULL, '$2y$12$dO.QMZccV0.v.SIrz5qOBOsS3nm.FUpwnnvivawWOxN2GoLXEa9Hi', NULL, '2024-10-21 11:42:01', '2024-10-21 11:42:01', 17, NULL),
(24, 'Francisco', 'SUPERADMIN', 'francisco', NULL, NULL, '$2y$12$p7JGoYT7Fb5e/fVYS4vwHu8Qk8yvRHXEq6jTG/HyWU0k5Lm9NGkMK', NULL, '2024-10-21 17:33:06', '2024-10-23 09:27:05', 19, NULL),
(25, 'javier', 'VENDEDOR', 'javier', NULL, NULL, '$2y$12$dODoqxUFbrvW2DClzW42D.9an9Z9nw7jhV5QgmcPr8E6L0XdDkPja', NULL, '2024-10-21 17:33:27', '2024-10-21 17:33:27', 19, NULL),
(26, 'Gloria García', 'SUPERADMIN', 'Qa1', NULL, NULL, '$2y$12$civzFxHW0Q2eQEUeGO.TA.EyW83MhAfv7XNuL9m/bj6MhbJuWFjB.', NULL, '2024-10-23 08:50:37', '2024-10-23 08:50:37', NULL, NULL),
(27, 'Patron', 'PATRON', 'Patron', NULL, NULL, '$2y$12$kRJkLmUQvXfsuiEykwgTZeXcocHrhThF0OVvK61/rhTZoAqFZEPVK', NULL, '2024-10-23 08:53:31', '2024-10-23 08:53:31', 17, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `viajes`
--

CREATE TABLE `viajes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fechaInicio` date NOT NULL,
  `fechaFin` date NOT NULL,
  `boat_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `observaciones` text DEFAULT NULL,
  `hora` varchar(255) DEFAULT NULL,
  `dias` varchar(255) DEFAULT NULL,
  `zarpe` varchar(255) DEFAULT NULL,
  `puertoSalida` varchar(255) DEFAULT NULL,
  `puertoLlegada` varchar(255) DEFAULT NULL,
  `bandera` varchar(255) DEFAULT NULL,
  `propietario` varchar(255) DEFAULT NULL,
  `estado` varchar(255) NOT NULL DEFAULT 'Activo',
  `company_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `viajes`
--

INSERT INTO `viajes` (`id`, `fechaInicio`, `fechaFin`, `boat_id`, `created_at`, `updated_at`, `observaciones`, `hora`, `dias`, `zarpe`, `puertoSalida`, `puertoLlegada`, `bandera`, `propietario`, `estado`, `company_id`) VALUES
(1, '2024-10-22', '2024-11-22', 3, '2024-10-22 09:37:16', '2024-10-22 12:45:51', NULL, '10:00', '31', '012345', 'USULUTAN, Puerto El Triunfo - Muelle Artesanal de Puerto el Triunfo', 'USULUTAN, Puerto El Triunfo - Muelle Artesanal de Puerto el Triunfo', 'SALVADOREÑA ESA-00283 (ARB 90.74 TM)', 'Mariscos Tevez', 'Cerrado', 17),
(2, '2024-10-22', '2024-11-22', 3, '2024-10-22 12:49:27', '2024-10-22 12:49:27', NULL, '13:00', '31', 'Octubre 1', 'USULUTAN, Puerto El Triunfo - Muelle Artesanal de Puerto el Triunfo', 'USULUTAN, Puerto El Triunfo - Muelle Artesanal de Puerto el Triunfo', 'SALVADOREÑA ESA-00283 (ARB 90.74 TM)', 'Mariscos Tevez', 'Activo', 17),
(3, '2024-10-23', '2024-11-23', 6, '2024-10-23 09:59:54', '2024-10-23 10:09:55', '<span style=\"color: rgba(0, 0, 0, 0.8); font-family: &quot;Source Sans Pro&quot;, sans-serif; font-size: 16.2px; letter-spacing: -0.0486px; text-align: justify;\">Lorem ipsum dolor sit amet consectetur adipiscing,&nbsp;</span>', '09:00', '31', 'zarpe 1', 'SONSONATE, Acajutla - Muelle Artesanal de Pesca', 'SONSONATE, Acajutla - Muelle Artesanal de Pesca', 'SALVADOREÑA ESA-00283 (ARB 90.74 TM)', 'Mariscos 2', 'Cerrado', 19),
(4, '2024-10-23', '2024-11-23', 6, '2024-10-23 10:42:41', '2024-10-23 10:51:47', '<span style=\"color: rgba(0, 0, 0, 0.8); font-family: &quot;Source Sans Pro&quot;, sans-serif; font-size: 16.2px; letter-spacing: -0.0486px; text-align: justify;\">Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan rhoncus,</span>', '10:00', '31', 'sample 2', 'SONSONATE, Acajutla - Muelle Artesanal de Pesca', 'LA PAZ, San Luis La Herradura - Oficinas de CENDEPESCA', 'SALVADOREÑA ESA-00283 (ARB 90.74 TM)', 'Mariscos 2', 'Cerrado', 19);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `boats`
--
ALTER TABLE `boats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `boats_company_id_foreign` (`company_id`);

--
-- Indices de la tabla `bote_files`
--
ALTER TABLE `bote_files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bote_files_boat_id_foreign` (`boat_id`);

--
-- Indices de la tabla `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indices de la tabla `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `clients_company_id_foreign` (`company_id`);

--
-- Indices de la tabla `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `crews`
--
ALTER TABLE `crews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `crews_boat_id_foreign` (`boat_id`),
  ADD KEY `crews_company_id_foreign` (`company_id`);

--
-- Indices de la tabla `crew_viajes`
--
ALTER TABLE `crew_viajes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `crew_viajes_crew_id_foreign` (`crew_id`),
  ADD KEY `crew_viajes_viaje_id_foreign` (`viaje_id`);

--
-- Indices de la tabla `descargas`
--
ALTER TABLE `descargas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `descargas_user_id_foreign` (`user_id`),
  ADD KEY `descargas_viaje_id_foreign` (`viaje_id`);

--
-- Indices de la tabla `details`
--
ALTER TABLE `details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `details_sale_id_foreign` (`sale_id`),
  ADD KEY `details_product_id_foreign` (`product_id`),
  ADD KEY `details_user_id_foreign` (`user_id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indices de la tabla `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `lances`
--
ALTER TABLE `lances`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lances_viaje_id_foreign` (`viaje_id`),
  ADD KEY `lances_user_id_foreign` (`user_id`);

--
-- Indices de la tabla `lance_productos`
--
ALTER TABLE `lance_productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lance_productos_lance_id_foreign` (`lance_id`),
  ADD KEY `lance_productos_product_id_foreign` (`product_id`);

--
-- Indices de la tabla `lance_viajes`
--
ALTER TABLE `lance_viajes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lance_viajes_viaje_id_foreign` (`viaje_id`),
  ADD KEY `lance_viajes_user_id_foreign` (`user_id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indices de la tabla `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `payments_sale_id_foreign` (`sale_id`),
  ADD KEY `payments_user_id_foreign` (`user_id`);

--
-- Indices de la tabla `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `producto_viajes`
--
ALTER TABLE `producto_viajes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `producto_viajes_product_id_foreign` (`product_id`),
  ADD KEY `producto_viajes_viaje_id_foreign` (`viaje_id`),
  ADD KEY `producto_viajes_user_id_foreign` (`user_id`),
  ADD KEY `producto_viajes_descarga_id_foreign` (`descarga_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_foreign` (`category_id`),
  ADD KEY `products_user_id_foreign` (`user_id`),
  ADD KEY `products_company_id_foreign` (`company_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indices de la tabla `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indices de la tabla `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sales_client_id_foreign` (`client_id`),
  ADD KEY `sales_user_id_foreign` (`user_id`),
  ADD KEY `sales_viaje_id_foreign` (`viaje_id`),
  ADD KEY `sales_boat_id_foreign` (`boat_id`),
  ADD KEY `sales_company_id_foreign` (`company_id`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_company_id_foreign` (`company_id`),
  ADD KEY `users_bote_id_foreign` (`bote_id`);

--
-- Indices de la tabla `viajes`
--
ALTER TABLE `viajes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `viajes_boat_id_foreign` (`boat_id`),
  ADD KEY `viajes_company_id_foreign` (`company_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `boats`
--
ALTER TABLE `boats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `bote_files`
--
ALTER TABLE `bote_files`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `clients`
--
ALTER TABLE `clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `companies`
--
ALTER TABLE `companies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `crews`
--
ALTER TABLE `crews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `crew_viajes`
--
ALTER TABLE `crew_viajes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `descargas`
--
ALTER TABLE `descargas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `details`
--
ALTER TABLE `details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lances`
--
ALTER TABLE `lances`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `lance_productos`
--
ALTER TABLE `lance_productos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `lance_viajes`
--
ALTER TABLE `lance_viajes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT de la tabla `payments`
--
ALTER TABLE `payments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=171;

--
-- AUTO_INCREMENT de la tabla `producto_viajes`
--
ALTER TABLE `producto_viajes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `sales`
--
ALTER TABLE `sales`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `viajes`
--
ALTER TABLE `viajes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `boats`
--
ALTER TABLE `boats`
  ADD CONSTRAINT `boats_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`);

--
-- Filtros para la tabla `bote_files`
--
ALTER TABLE `bote_files`
  ADD CONSTRAINT `bote_files_boat_id_foreign` FOREIGN KEY (`boat_id`) REFERENCES `boats` (`id`);

--
-- Filtros para la tabla `clients`
--
ALTER TABLE `clients`
  ADD CONSTRAINT `clients_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `crews`
--
ALTER TABLE `crews`
  ADD CONSTRAINT `crews_boat_id_foreign` FOREIGN KEY (`boat_id`) REFERENCES `boats` (`id`),
  ADD CONSTRAINT `crews_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`);

--
-- Filtros para la tabla `crew_viajes`
--
ALTER TABLE `crew_viajes`
  ADD CONSTRAINT `crew_viajes_crew_id_foreign` FOREIGN KEY (`crew_id`) REFERENCES `crews` (`id`),
  ADD CONSTRAINT `crew_viajes_viaje_id_foreign` FOREIGN KEY (`viaje_id`) REFERENCES `viajes` (`id`);

--
-- Filtros para la tabla `descargas`
--
ALTER TABLE `descargas`
  ADD CONSTRAINT `descargas_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `descargas_viaje_id_foreign` FOREIGN KEY (`viaje_id`) REFERENCES `viajes` (`id`);

--
-- Filtros para la tabla `details`
--
ALTER TABLE `details`
  ADD CONSTRAINT `details_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `details_sale_id_foreign` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`),
  ADD CONSTRAINT `details_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `lances`
--
ALTER TABLE `lances`
  ADD CONSTRAINT `lances_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `lances_viaje_id_foreign` FOREIGN KEY (`viaje_id`) REFERENCES `viajes` (`id`);

--
-- Filtros para la tabla `lance_productos`
--
ALTER TABLE `lance_productos`
  ADD CONSTRAINT `lance_productos_lance_id_foreign` FOREIGN KEY (`lance_id`) REFERENCES `lances` (`id`),
  ADD CONSTRAINT `lance_productos_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `lance_viajes`
--
ALTER TABLE `lance_viajes`
  ADD CONSTRAINT `lance_viajes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `lance_viajes_viaje_id_foreign` FOREIGN KEY (`viaje_id`) REFERENCES `viajes` (`id`);

--
-- Filtros para la tabla `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_sale_id_foreign` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`),
  ADD CONSTRAINT `payments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `producto_viajes`
--
ALTER TABLE `producto_viajes`
  ADD CONSTRAINT `producto_viajes_descarga_id_foreign` FOREIGN KEY (`descarga_id`) REFERENCES `descargas` (`id`),
  ADD CONSTRAINT `producto_viajes_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `producto_viajes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `producto_viajes_viaje_id_foreign` FOREIGN KEY (`viaje_id`) REFERENCES `viajes` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `products_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`),
  ADD CONSTRAINT `products_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_boat_id_foreign` FOREIGN KEY (`boat_id`) REFERENCES `boats` (`id`),
  ADD CONSTRAINT `sales_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`),
  ADD CONSTRAINT `sales_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`),
  ADD CONSTRAINT `sales_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `sales_viaje_id_foreign` FOREIGN KEY (`viaje_id`) REFERENCES `viajes` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_bote_id_foreign` FOREIGN KEY (`bote_id`) REFERENCES `boats` (`id`),
  ADD CONSTRAINT `users_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`);

--
-- Filtros para la tabla `viajes`
--
ALTER TABLE `viajes`
  ADD CONSTRAINT `viajes_boat_id_foreign` FOREIGN KEY (`boat_id`) REFERENCES `boats` (`id`),
  ADD CONSTRAINT `viajes_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
