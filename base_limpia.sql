-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 21-10-2024 a las 02:44:00
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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(17, 'Mariscos Tevez', 'Direccion Sud', '5261545', '2024-05-17 08:55:14', '2024-05-17 09:23:35', '#9C27B0');

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
(2, 'App\\Models\\User', 1),
(2, 'App\\Models\\User', 11),
(2, 'App\\Models\\User', 21),
(2, 'App\\Models\\User', 22),
(3, 'App\\Models\\User', 1),
(3, 'App\\Models\\User', 11),
(4, 'App\\Models\\User', 1),
(4, 'App\\Models\\User', 11),
(4, 'App\\Models\\User', 18),
(5, 'App\\Models\\User', 1),
(5, 'App\\Models\\User', 4),
(5, 'App\\Models\\User', 11),
(5, 'App\\Models\\User', 20),
(6, 'App\\Models\\User', 1),
(6, 'App\\Models\\User', 11),
(6, 'App\\Models\\User', 12),
(6, 'App\\Models\\User', 21),
(6, 'App\\Models\\User', 22),
(7, 'App\\Models\\User', 1),
(7, 'App\\Models\\User', 4),
(7, 'App\\Models\\User', 5),
(7, 'App\\Models\\User', 9),
(7, 'App\\Models\\User', 11),
(7, 'App\\Models\\User', 12),
(7, 'App\\Models\\User', 18),
(7, 'App\\Models\\User', 20),
(8, 'App\\Models\\User', 1),
(8, 'App\\Models\\User', 4),
(8, 'App\\Models\\User', 5),
(8, 'App\\Models\\User', 11),
(8, 'App\\Models\\User', 12),
(8, 'App\\Models\\User', 19),
(8, 'App\\Models\\User', 20),
(8, 'App\\Models\\User', 21),
(8, 'App\\Models\\User', 22),
(9, 'App\\Models\\User', 1),
(9, 'App\\Models\\User', 4),
(9, 'App\\Models\\User', 5),
(9, 'App\\Models\\User', 11),
(9, 'App\\Models\\User', 19),
(9, 'App\\Models\\User', 20),
(9, 'App\\Models\\User', 21),
(9, 'App\\Models\\User', 22),
(10, 'App\\Models\\User', 1),
(10, 'App\\Models\\User', 11),
(10, 'App\\Models\\User', 12),
(11, 'App\\Models\\User', 1),
(12, 'App\\Models\\User', 1);

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
(53, 'App\\Models\\User', 1, 'auth_token', '05f561c8ea31af947d8251e672aef6e45924dafb80da1e1b9a321be296db8f51', '[\"*\"]', '2024-10-18 11:29:24', NULL, '2024-08-22 21:28:18', '2024-10-18 11:29:24'),
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
(150, 'App\\Models\\User', 1, 'auth_token', 'c9c9a929123f84ec3667388f45d01c57dd5d97a3326d58a549051dfd99e6aa43', '[\"*\"]', '2024-10-18 11:37:59', NULL, '2024-10-18 11:37:58', '2024-10-18 11:37:59');

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
('0jeGrUvmXtMxDUACATJyedIECYCETberWXx7vrkH', NULL, '164.90.208.56', 'Mozilla/5.0 (Linux; Android 6.0; HTC One M9 Build/MRA139407) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2412.98 Mobile Safari/537.3', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidjVuUkdHeVVuZFloQURRbU52TUpXZVRkb1Fod2ZFODBTMGVGclBtVCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1729277825),
('0yyu6Tytfu8oUwy0nfLkNJSielWGWUxln5SlqLio', NULL, '181.115.172.57', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiR3diS2ZlWXlsZXJGQ2cxQWw1TE1VSm5idDgxeW1PbElhcjJNcWoxbSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1728981138),
('1PiLN2dZC7pzpGA6eeL6gYsQeVuWATx8891Kqw2k', NULL, '205.210.31.172', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRktMWnNveHF6YjZjanpEemtkamRRbVMwdWxsbnR0dnNTaEVORUxVWCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1728816836),
('1ratydTkpENcVsEfyXSPQaVVSStNbVhxD0F9Qbc8', NULL, '47.242.224.70', 'Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicVZjOHV4VjR6RkNHRUl5V2pybFdZZmM0NXpLalZBSW9VZkVDMmMzUCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1729352164),
('1YGDFW6MAbqyN6RkesbnGpGDt3w0bu7OZU3srRlT', NULL, '3.255.104.107', 'Mozilla/5.0 (compatible; NetcraftSurveyAgent/1.0; +info@netcraft.com)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiejAwcEVjUXc5WHA3aHNQWVgxekJwTnFySFpyUFV1MGtYb1AxWHBNbSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1728329660),
('4gDnMUri1pS4E7vzmeMEJFbScV5DPSXgDFbExnUf', NULL, '54.88.179.33', 'Mozilla/5.0 \\(Windows NT 10.0\\; Win64\\; x64\\) AppleWebKit/537.36 \\(KHTML, like Gecko\\) Chrome/100.0.4896.60 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWDRlMWc1TmJXMld3NUllNEZJUzF4dzB5ejZKVzBhQVJsSEozb05oQyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729295470),
('4l2qCdPWD9KngUvE8TAnt63BPoy4vWZIs4WewZxI', NULL, '162.142.125.216', 'Mozilla/5.0 (compatible; CensysInspect/1.1; +https://about.censys.io/)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiendXTElOMVZVcXN5TVZVS2Y3UEdxNmVrQWZaY1hxOGZ1anpDTUdySCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1729379582),
('87an1xbYajZK702xi905AECNzQon7Bn0QIquuC7R', NULL, '91.90.123.16', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSVN2NExHMHVOUmx1dFdGYTI0V0swcTNTSmc4OGl0aGFQZkhEckpCSSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1729298852),
('9zEFtelCpJ9TYatmWhFZ26h9F4MPeBrXCH0E7TMi', NULL, '147.182.200.94', 'Mozilla/5.0 (Linux; Android 6.0; HTC One M9 Build/MRA139407) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2412.98 Mobile Safari/537.3', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieElwdjdpaFY1c0NJVldqZnY5TGZuZ09WdTA4YndxcTY0dk5QWmE5RiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729277821),
('BvcohMYWAC00VPGPuHaN6nn6MSKh7ha6MQcGTw3H', NULL, '146.70.128.222', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSFVqMkxXcGhWc1RCSVpIaFJ2NEJKQjV5ZEIwR2RYbTVwaUpOSUNPaiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729293566),
('Cep9WOblkMUxNXX8D5ScDIlPsn5TNYfUemG6bXhg', NULL, '199.45.155.110', 'Mozilla/5.0 (compatible; CensysInspect/1.1; +https://about.censys.io/)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiY2ZQQ3N1VHRmY0ptRlZ5Y1N5MGptbXRadlNKRUQ4TU8zamlEQ3ZjOSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729209520),
('eUoXK6c6rICFrlPv3Z07rlUqeZoYIvoxS5vAskxl', NULL, '198.235.24.77', 'Expanse, a Palo Alto Networks company, searches across the global IPv4 space multiple times per day to identify customers&#39; presences on the Internet. If you would like to be excluded from our scans, please send IP addresses/domains to: scaninfo@paloaltonetworks.com', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiT2M5MGxXdTQ2bE1LSmQzanBVbWNqc1BERDJOeG5xcDVOWHNoaUJQQiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1728688034),
('Fh4Wc2L9kN2V1bGntbIZCkiIgfm2WTLqtfRw2YdR', NULL, '34.250.97.0', 'Mozilla/5.0 (compatible; NetcraftSurveyAgent/1.0; +info@netcraft.com)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVkJsZlk2aTgzWmRDWFNOdDliNTFZSVVid01ydXFtS1ZCZWk4SEdMdiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1728280262),
('FIZltRMIXKTk8pBhLa5nWaZ46IErnbABUEGOXjXN', NULL, '205.210.31.242', 'Expanse, a Palo Alto Networks company, searches across the global IPv4 space multiple times per day to identify customers&#39; presences on the Internet. If you would like to be excluded from our scans, please send IP addresses/domains to: scaninfo@paloaltonetworks.com', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoib3VSdVBiOWc4R29LTkkzQ0xQREhvb1lWb0hnUVNCZkxkaEV5bTJCMyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1728365346),
('fjjz2YQkwpzdsO7uR7uclwhErEw7FRh6I4AEW6bD', NULL, '205.210.31.162', 'Expanse, a Palo Alto Networks company, searches across the global IPv4 space multiple times per day to identify customers&#39; presences on the Internet. If you would like to be excluded from our scans, please send IP addresses/domains to: scaninfo@paloaltonetworks.com', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoic3ZmZEZMYlV0S0Y3RXpNdGR5aGxkZ0Jrd0dMQjY3Y2ZYUjVpS1lWRSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729062519),
('FqpAllWxSm5fQHdNtdQMz1oZkIkzS9cVNvaPMuwK', NULL, '205.169.39.96', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidGZ1ZjUzcmJ3blVTMjBiSk12QWRYam5hT2syR1luOFNONDFWcEc3UyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729277914),
('gLsDUja3KvBHtWfuxq7ipGBZ1zBkvb9WmlQ33xym', NULL, '35.171.144.152', 'Mozilla/5.0 \\(Windows NT 10.0\\; Win64\\; x64\\) AppleWebKit/537.36 \\(KHTML, like Gecko\\) Chrome/100.0.4896.60 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieDF6ZnU0d1I0bVpEcjYwSVdLeFl2SWVaWlpHNDU1Z3FUdldvbVZUZCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1728206309),
('HJW2s6kpcvcYhk2LIu2H1QebCTFV3JqsGwVStE4r', NULL, '205.210.31.36', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidEMyUVg0VlJNTWxWVEVNUkI4RmJLY0lneEkzMUtsY2hSSDdHcnhhUSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1728670574),
('HnM7cbJ1sojyCMRZKV9BZae5NNVPbj8GODBcAzOA', NULL, '195.211.77.142', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRjVMdjRySEJPMXpkYzJrUUcwenc4Vk93YlUybHZHZlFnejA1ZGdDNyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729320592),
('HUpPLZLLMH2uRxoAYOnxdqpqcISgzjKPyVpRmJMR', NULL, '213.232.87.230', 'Go-http-client/1.1', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSzByOWhJRlRGeTE0WGpzd0E5R0tDcDZ2eXcycm9vSUZUNUlqbG5mSSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729377480),
('i6dj9IsIAG26FWtPDT6zqNewPNWMjAc4SvqLiqIR', NULL, '205.210.31.97', 'Expanse, a Palo Alto Networks company, searches across the global IPv4 space multiple times per day to identify customers&#39; presences on the Internet. If you would like to be excluded from our scans, please send IP addresses/domains to: scaninfo@paloaltonetworks.com', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibFhGMmdvaFd1NG1hUmZja3lrZlhmWXc2OXVOQVE5dVFsNEVDT2tsVSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729219334),
('ICurpn7qSuSYbtH0mYbsl5hvBy7w9DQRE9Ju7uPP', NULL, '35.171.144.152', 'Mozilla/5.0 \\(Windows NT 10.0\\; Win64\\; x64\\) AppleWebKit/537.36 \\(KHTML, like Gecko\\) Chrome/100.0.4896.60 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTnlNQUplTE1ObTBGeDJhc1BHcEdTNnlrQ2R5NFZidEJmelZqWU5ENSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1728206310),
('jQhBiJTQQJeaKuWBEFld4MtuOxgNvrnSiXXRM7a0', NULL, '123.160.223.73', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidUthM2h2dGJ0TTNWRm5jakp2N2FtdzgxSjM4UUxEV2pMQUIzSldTUiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729432508),
('kOi7LHTZbH0bbBaqiWQD1VnrDy0CT4EVSgVpLLI8', NULL, '35.171.144.152', 'Mozilla/5.0 \\(Windows NT 10.0\\; Win64\\; x64\\) AppleWebKit/537.36 \\(KHTML, like Gecko\\) Chrome/100.0.4896.60 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQ3FaSGpIb3VJRkJWMW00WHZhcDVqVEUybFR0N2tYUHlZc3UxYXpLVCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1729295470),
('kvboYZubrHCqX6eohCxknzQpbUPV84qWIqEPsReu', NULL, '54.88.179.33', 'Mozilla/5.0 \\(Windows NT 10.0\\; Win64\\; x64\\) AppleWebKit/537.36 \\(KHTML, like Gecko\\) Chrome/100.0.4896.60 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibFhmcFlhMVZuTlBxTVRIdHRRT0ZwSmhxVlNrRG8xZk9GZjJKMWFyNCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729295470),
('LJGZ1k0FQ4iVmBWAQhduhbQCvf2gbRZWBZVW8cwL', NULL, '88.99.26.177', 'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.5993.80 Mobile Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMVlQOHV3MlBVSzRzaThpcWN3c2R0QzhlN0VmbE0yZWZmdmhQTzNsbCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729282055),
('lnSDKbU7t2MaEcIqHQsvVg9YpAAAAKWdUv8EzI3x', NULL, '205.210.31.170', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiU1doRFlFb1A3cGZVRU4zVWR6M0plaWxnUDVmbXh2bEpYWXlsMlZtZSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1728802795),
('MBRwGWWhuegifFtNefB4Tw9miFnXvZj4Mv72TySz', NULL, '35.226.145.6', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTkxWM0cyUkp6NmxPdkcycm9tN1BSUHlRblNvR2ZEdE51dThoQkU3YyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1728974931),
('mqNoxSdzO8gDA1H72A6yY1mdv0gAd4yvKZc5l4Y7', NULL, '147.182.200.94', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZjlORkxvd3ZmVWxVUllENUd0ZURPMTdQNGo3dTFzVHhoQnVER0JwaCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729277821),
('oF3fs7sPRIMKtoR68u0dI9oCjCpDPDRiay899ypA', NULL, '135.148.100.196', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZjRpOFFKWFZnUmhrS2pKWkdieWNWc3lRamROazRJdW0xUVVubFF1ZSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1728372842),
('OJ6YrTunxcEltNf1l2bgV7gPC8vCC07AJepEclJr', NULL, '164.90.208.56', 'Go-http-client/1.1', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidWtqUUpiOTdETlk2a0R5Zm40MTJuZmpOZnBmNHlYOGNLeFpCU3NvMSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Njc6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbS8/cmVzdF9yb3V0ZT0lMkZ3cCUyRnYyJTJGdXNlcnMlMkYiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1729277833),
('OxxeRfCnQMgRDEdEZzK9RciYamm4zzXNdxFCfKmm', NULL, '34.38.48.249', 'python-requests/2.32.3', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSzFYT3hsaWNoV3NocXZKcEZ6OUxFeVFKZkU1d21Bb0YzZmxKVGtqSCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729420367),
('ptqDjlobhjZ2neDwL2hZe2DmwZgSXylol92pb49W', NULL, '195.211.77.142', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNWdzcXhPS09KM1VSdE10OXZENXpDVVJSdnBzWXQ2NWdsdjBaMEJZVyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729277864),
('pTTXDYR6niTYZmozom5BT4XXBOiX8K5G5YOsUSAQ', NULL, '206.168.34.197', 'Mozilla/5.0 (compatible; CensysInspect/1.1; +https://about.censys.io/)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTm81WlgycUk1WjI0N2YySEFrQ2xrdGRwckZjcFZYV3oyUHJmYWNaaiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1729379500),
('qChhQzQ8bDNAFdetHzKZ05CtvAhwWLkAPOf93SLZ', NULL, '209.38.99.128', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieUw0WU5rM0tiTzRzalloamNLeU1HWjZ4YWs2ZHB5S3Q3ZnV4NFV3NSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729257987),
('QCXdoui2aFrvTF5F28rGs0kwfQzSNWAUAWrk2Mty', NULL, '205.210.31.60', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiN3RDWE5tUko0c2ZoakR1dElPb2t4cWZUbEhUTE5GWkVwOGticFlkaCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1728741695),
('rBWIg2X8WC1zAc0fwrYfL1SR771ClxwoU7TvBbdZ', NULL, '35.226.145.6', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiakJic01jWHdhWXBjZlNYRzZtdnhjd1pZREREY1p6Y0FvdG9sQVd1VyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1728974932),
('Rmn2riGraLsVIsJNjOG9IgW3rtl0LxHQpzd7gRVs', NULL, '195.211.77.140', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiRmR6N05PY2NSOUFQdENNOVhlVFZoczlHbG5VTThkamxGV20zekhIWCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729320567),
('S2emLh6GFOEeiBqBC2sxwH63lSpwiLr5jv56CgZl', NULL, '209.38.98.145', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQkhzSW9aV2VRbVl3dXF3ZWtmeldab0xEWER0cWlycEZ6bm1zRlJuRiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1729475148),
('SQnhPzg2G5Bce1qvza5Axw1b9GgLoORQNCHwvqHP', NULL, '198.235.24.16', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMm84YnJyWGhyb3hBTnNHQUxabFB2YndNbFU0QUN3eW55cHVwaENZUSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729315018),
('szcbppVtUEk5YO2yAP85fW8um1CabS7H2e3CfHgN', NULL, '205.169.39.96', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicGFGVVlualpUTGJlR3l4T09XOGZNNGVmZkM3ZXJpcXdZak1GWUJUbSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729277919),
('U1Dof1enaaHNIRMRcHn6XwawQfUQYf8kOBmImNTe', NULL, '47.242.224.70', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2224.3 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieUFEYjNPMFU4MHB1NmltN0dYRUNmRTF5ZW9SOGVXdWQzRVp4azNwdyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1729306709),
('UAY00gr9F68FdYsgQF5eAUo8D3ew9Ov6J78Pv9Fk', NULL, '3.255.136.223', 'Mozilla/5.0 (compatible; NetcraftSurveyAgent/1.0; +info@netcraft.com)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVWszVXJXeXl5WmRKZjFVU0tsYXkwZXRYSDFLTFE5WW9QdHlvcDY5NSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1728292062),
('UpCr7RKEElJEItrkDbyjoCjebFZ4QCx7Fk9m5CV6', NULL, '35.171.144.152', 'Mozilla/5.0 \\(Windows NT 10.0\\; Win64\\; x64\\) AppleWebKit/537.36 \\(KHTML, like Gecko\\) Chrome/100.0.4896.60 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidEtsOEJJMDlXUGpZeVdnQTFMN1MxSmFEbVVEM0RhNE5YSVB2WmVNOCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1729295471),
('Ve00aFXbzoa7KJV1KjlAUnbM613P88x1NINKtO22', NULL, '198.235.24.184', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMjhXMkMwWlU4YXRzdVp6ZVRldENEVGxwZVF6enBWUDZGeWxMYklobSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729329059),
('vUY2msYBWN4fWQkJeNQMpDqzr6piaxaHyfjDSqoU', NULL, '54.88.179.33', 'Mozilla/5.0 \\(Windows NT 10.0\\; Win64\\; x64\\) AppleWebKit/537.36 \\(KHTML, like Gecko\\) Chrome/100.0.4896.60 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaVFCMENYdEhGYnF5Vk01b09DQUlYdDU5WDM1cnpXMGxOWDFiT2Q5cyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1729318019),
('vy98wlRW7f2CG4DRdY2eSxNvqKxglulHQH3hLtbu', NULL, '205.210.31.12', 'Expanse, a Palo Alto Networks company, searches across the global IPv4 space multiple times per day to identify customers&#39; presences on the Internet. If you would like to be excluded from our scans, please send IP addresses/domains to: scaninfo@paloaltonetworks.com', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaTlDMkJSbnNmWnVadVRSempDSlJvQ0p0bHZRaHBneDJFOFFNbmU3VCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1728714146),
('whVk4UOqKFiUwPZpLMVwBQrhmp2TbIH2dLV0Ik9L', NULL, '162.142.125.210', 'Mozilla/5.0 (compatible; CensysInspect/1.1; +https://about.censys.io/)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiazZ3ZkxWZkhTeWtFZFN4c2lKTUVWOWIyNE44MXR3NnE2UlJzNFB6SCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729201651),
('XaYU09nr00itjUpMhr9GgFNDTgJb3eWkSFnWvK5h', NULL, '134.122.39.26', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRjdJVjZiVEhWU29ZVDl6UWdJZjlwQXVvOFFnUnpWb0lWMDF6WElRMyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1729404654),
('XgVwMgoXiHJaFmVOwUsvXStHG9XV0cOaqvJtqIn7', NULL, '195.211.77.140', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiYU5IVlZYZlIxWnRTZEIyb2xtSU13ZkZBN0VGZGpGMlJHR0lpd2Q0WSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729277846),
('Xio3WsBvpggTDk8MxzjVuUdLq7TQipwMPvm4FMmB', NULL, '35.171.144.152', 'Mozilla/5.0 \\(Windows NT 10.0\\; Win64\\; x64\\) AppleWebKit/537.36 \\(KHTML, like Gecko\\) Chrome/100.0.4896.60 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYkx4T3JnNGIxT0pOWHdBQ3ZuZEp5WkpKUnlSQTZCcFpYOEFkbWJsciI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1728206310),
('XJvq5uVGU3dJzEByNmiF4FoDBPmjTx4Pp4zn50lo', NULL, '147.182.200.94', 'Go-http-client/1.1', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYWJPZ1VOTzVpZ2R2RlFCdXFxVGpaekFCUTFsMmNMc1I1blBKeWhqUSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjM6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tLz9yZXN0X3JvdXRlPSUyRndwJTJGdjIlMkZ1c2VycyUyRiI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1729277821),
('XMkyG2TcAN05F5s0WxL5H6zxCYwBo6SDkW1rO3AI', NULL, '135.148.100.196', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiczVHYUQ1dHQ4ZkxtSFprZDAwcjZZU1JMNkZkMnM1WWhkUWp2cTFRNyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1728796356),
('Y9Q9uNLGwVTTVlIviubA6rdjmYwzQV3fdmTvAJKv', NULL, '34.123.170.104', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/92.0.4515.159 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZ2RrWEdFQVNFSUtOTzlqNVY5SXdQNkp0cHZJTmZmSUdiZGtoZnN0TCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729277909),
('YHHsMvvNiswzb39OfziXRrCYFARuAZyMFX0KKycp', NULL, '104.164.173.53', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYzk1VVVjeklsN1VSY29TRGoyczZraG1aZllsdWJNN3lVdThCd1BKeCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729284135),
('YJmBBM8ZtD792y3OGJSdH9ckQMCwDpsPZ05MN5dC', NULL, '143.244.143.210', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZzJCWHBlOTh5cmFjNkUwa3dxaEpBTkp3Z2FPNlNTM0RsQzRwTnB0QyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729429045),
('yo16vdR9ujUnnj8ZMqPX3mA5FUxjsIVqI9tWSGMH', NULL, '205.169.39.21', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.5938.132 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQWMxY2ZoZ0xLSDMzZkVqYlZQT0h3Q1ZUekVGQWpOQTRLV2x3SW44NCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729278879),
('yYiYVXvEzecoRxux26O7IOVYQDclZzvJKtpDOMkB', NULL, '164.90.208.56', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVnJ2QWV1bk9lVGpXbENyWVVvY25SeWlmU1BoblJaZHExaGlGOTl5RCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1729277821),
('zfm9ZzliZHMq6dyGKkRWZVwUWW39lOCexgUNEKqE', NULL, '123.160.223.72', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoid2NpTWxINEdsUHNlRnk4WEtFbzVoZlNEeXpxMTZuMElsNHRHRzJCciI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHBzOi8vYm5hdXRpY2EudHVwcm9nYW0uY29tIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1729432502),
('zpakVl6ZoGbRMZPM0jInrJv7hNOBvJeFlM1lXaPF', NULL, '54.88.179.33', 'Mozilla/5.0 \\(Windows NT 10.0\\; Win64\\; x64\\) AppleWebKit/537.36 \\(KHTML, like Gecko\\) Chrome/100.0.4896.60 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTlRFY25yR2QwdG5OYUpsRExnSzdSbmFydXkxQlRNeG90RHdIeUJGbCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHBzOi8vd3d3LmJuYXV0aWNhLnR1cHJvZ2FtLmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1729318018);

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
(1, 'Administrador', 'SUPERADMIN', 'admin', 'admin@test.com', NULL, '$2y$12$hDG43BObhaGhvLbKSNgEkeTm8vAmw7yiuDaAS7JMJtwO7b.MGFUVa', NULL, NULL, '2024-10-08 04:01:24', 17, NULL);

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `bote_files`
--
ALTER TABLE `bote_files`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `clients`
--
ALTER TABLE `clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `companies`
--
ALTER TABLE `companies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `crews`
--
ALTER TABLE `crews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `crew_viajes`
--
ALTER TABLE `crew_viajes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `descargas`
--
ALTER TABLE `descargas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `details`
--
ALTER TABLE `details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lance_productos`
--
ALTER TABLE `lance_productos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

--
-- AUTO_INCREMENT de la tabla `producto_viajes`
--
ALTER TABLE `producto_viajes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `sales`
--
ALTER TABLE `sales`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `viajes`
--
ALTER TABLE `viajes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

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
