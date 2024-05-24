<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void{
//        Cabeza de boca colorada para Sopa
//La Cabeza de Boca Colorada es el regalo del mar que estabas esperando. Con su abundante carne y sabores concentrados, esta parte del pescado es perfecta para preparar caldos y sopas con un sabor excepcional.
//
//        $2.25lb
//Filete dorado
//Filete dorado
//Nuestro Filete Dorado es el tesoro más codiciado del océano. Este filete, con su color dorado y textura delicada, te llevará a un viaje de sabor único.
//
//        $4.50lb
//Boca colorada entera
//Boca colorada entera
//La Boca Colorada Entera es una deliciosa aventura marina en un solo plato. Con su carne jugosa y sabrosa, esta pieza completa es perfecta para los amantes de los mariscos.
//
//        $3.50lb
//Corvina robalo entero
//Corvina robalo entero
//Nuestra Corvina Robalo Entera es una elección magistral para quienes buscan la frescura y calidad en su plato.
//
//        $4.25lb
//Lonja de Corvina/Robalo
//Lonja de Corvina/Robalo
//La Lonja de Corvina/Robalo es una verdadera joya marina. Con su carne tierna y sabrosa, este pescado es perfecto para los amantes del marisco.
//
//        $4.50lb
//Lonja Boca colorada
//Lonja Boca colorada
//Deléitate con nuestra Lonja Boca Colorada, un auténtico tesoro del mar. Fresca, jugosa y llena de sabor.
//
//        $5.50lb

        DB::table('products')->insert([
            [
                'name' => 'Cabeza de boca colorada para Sopa',
                'description' => 'La Cabeza de Boca Colorada es el regalo del mar que estabas esperando. Con su abundante carne y sabores concentrados, esta parte del pescado es perfecta para preparar caldos y sopas con un sabor excepcional.',
                'image' => 'cabeza-de-boca-colorada.png',
                'price' => 2.25, 'status' => 'ACTIVE',
                'stock' => 100, 'category_id' => 1,
                'user_id' => 1, 'company_id' => 17
            ],
            [
                'name' => 'Filete dorado',
                'description' => 'Nuestro Filete Dorado es el tesoro más codiciado del océano. Este filete, con su color dorado y textura delicada, te llevará a un viaje de sabor único.',
                'image' => 'filete-dorado.jpg',
                'price' => 4.50, 'status' => 'ACTIVE',
                'stock' => 100, 'category_id' => 1,
                'user_id' => 1, 'company_id' => 17
            ],
            [
                'name' => 'Boca colorada entera',
                'description' => 'La Boca Colorada Entera es una deliciosa aventura marina en un solo plato. Con su carne jugosa y sabrosa, esta pieza completa es perfecta para los amantes de los mariscos.',
                'image' => 'boca-colorada-entero-1.jpg',
                'price' => 3.50, 'status' => 'ACTIVE',
                'stock' => 100, 'category_id' => 1,
                'user_id' => 1, 'company_id' => 17
            ],
            [
                'name' => 'Corvina robalo entero',
                'description' => 'Nuestra Corvina Robalo Entera es una elección magistral para quienes buscan la frescura y calidad en su plato.',
                'image' => 'corvina-robalo-entero.jpg',
                'price' => 4.25, 'status' => 'ACTIVE',
                'stock' => 100, 'category_id' => 1,
                'user_id' => 1, 'company_id' => 17
            ],
            [
                'name' => 'Lonja de Corvina/Robalo',
                'description' => 'La Lonja de Corvina/Robalo es una verdadera joya marina. Con su carne tierna y sabrosa, este pescado es perfecto para los amantes del marisco.',
                'image' => 'lonja-corvina-robalo.jpg',
                'price' => 4.50, 'status' => 'ACTIVE',
                'stock' => 100, 'category_id' => 1,
                'user_id' => 1, 'company_id' => 17
            ],
            [
                'name' => 'Lonja Boca colorada',
                'description' => 'Deléitate con nuestra Lonja Boca Colorada, un auténtico tesoro del mar. Fresca, jugosa y llena de sabor.',
                'image' => 'lonja-boca-colorada.png',
                'price' => 5.50, 'status' => 'ACTIVE',
                'stock' => 100, 'category_id' => 1,
                'user_id' => 1, 'company_id' => 17
            ],
        ]);

//        Camarón pequeño
//Los Camarones Pequeños son pequeñas delicias del mar. A pesar de su tamaño, estos camarones están llenos de sabor y versatilidad.
//
//        $7.00lb
//Camarón Mediano
//Camarón Mediano
//Nuestros Camarones Medianos son la elección perfecta para quienes buscan un equilibrio ideal entre tamaño y sabor. Con su frescura inigualable, estos camarones son versátiles y deliciosos en cualquier plato.
//
//        $7.50lb
//Camarón Jumbo
//Camarón Jumbo
//Los Camarones Jumbo son la realeza de los mariscos. Estos gigantes marinos son conocidos por su impresionante tamaño y su sabor excepcional.
//
//        $9.25lb

        DB::table('products')->insert([
            [
                'name' => 'Camarón pequeño',
                'description' => 'Los Camarones Pequeños son pequeñas delicias del mar. A pesar de su tamaño, estos camarones están llenos de sabor y versatilidad.',
                'image' => 'camaron-pequeno.png',
                'price' => 7.00, 'status' => 'ACTIVE',
                'stock' => 100, 'category_id' => 2,
                'user_id' => 1, 'company_id' => 17
            ],
            [
                'name' => 'Camarón Mediano',
                'description' => 'Nuestros Camarones Medianos son la elección perfecta para quienes buscan un equilibrio ideal entre tamaño y sabor. Con su frescura inigualable, estos camarones son versátiles y deliciosos en cualquier plato.',
                'image' => 'camaron-mediano.png',
                'price' => 7.50, 'status' => 'ACTIVE',
                'stock' => 100, 'category_id' => 2,
                'user_id' => 1, 'company_id' => 17
            ],
            [
                'name' => 'Camarón Jumbo',
                'description' => 'Los Camarones Jumbo son la realeza de los mariscos. Estos gigantes marinos son conocidos por su impresionante tamaño y su sabor excepcional.',
                'image' => 'camaron-jumbo.png',
                'price' => 9.25, 'status' => 'ACTIVE',
                'stock' => 100, 'category_id' => 2,
                'user_id' => 1, 'company_id' => 17
            ],
        ]);

//        Cola de camarón/Chacalín entero
//Cola de camarón/Chacalín entero
//Nuestras Colas de Camarón Chacalín Entero son la elección perfecta para quienes buscan la máxima autenticidad y sabor en sus platos de mariscos.
//
//        $5.25lb
//Cola de camarón/Chacalín pelado
//Cola de camarón/Chacalín pelado
//Preparadas y peladas para tu comodidad, estas colas de camarón te permiten disfrutar de la frescura y textura única de los camarones sin el trabajo extra.
//
//        $5.00lb

        DB::table('products')->insert([
            [
                'name' => 'Cola de camarón/Chacalín entero',
                'description' => 'Nuestras Colas de Camarón Chacalín Entero son la elección perfecta para quienes buscan la máxima autenticidad y sabor en sus platos de mariscos.',
                'image' => 'cola-de-camaron-sin-pelar.png',
                'price' => 5.25, 'status' => 'ACTIVE',
                'stock' => 100, 'category_id' => 3,
                'user_id' => 1, 'company_id' => 17
            ],
            [
                'name' => 'Cola de camarón/Chacalín pelado',
                'description' => 'Preparadas y peladas para tu comodidad, estas colas de camarón te permiten disfrutar de la frescura y textura única de los camarones sin el trabajo extra.',
                'image' => 'cola-de-camaron-pelado.png',
                'price' => 5.00, 'status' => 'ACTIVE',
                'stock' => 100, 'category_id' => 3,
                'user_id' => 1, 'company_id' => 17
            ],
        ]);

//        Caracol
//Caracol
//Los Caracoles son una joya marina escondida. Su carne tierna y sabrosa se presta a una amplia variedad de platos que deleitarán tu paladar. Desde sopas hasta guisos y platos de pasta, los caracoles son una elección deliciosa que te sorprenderá con su sabor único. Descubre la magia de los sabores del mar con los caracoles.
//
//        $3.00lb
//Jaiba
//Jaiba
//La Jaiba es una delicia costera con su carne jugosa y dulce. Con su sabor único, este marisco es una experiencia culinaria que te transportará a las playas soleadas. Ya sea en un ceviche refrescante o en un delicioso guiso, la jaiba es un verdadero regalo del mar que despierta tus papilas gustativas.
//
//        $3.00lb
//Pulpo
//Pulpo
//El Pulpo es una maravilla del mar que despierta los sentidos con su textura tierna y sabor inconfundible. Ya sea a la parrilla con aceite de oliva y limón, o en una fresca ensalada de pulpo, este delicioso cefalópodo es una experiencia gastronómica que te sumergirá en el auténtico sabor del océano. ¡Prepáralo y descubre por qué el pulpo es un manjar tan apreciado!
//
//        $7.00lb
//Calamar
//Calamar
//El Calamar es un tesoro del océano con una versatilidad sorprendente. Su carne tierna y su sabor suave hacen que sea una adición perfecta a una variedad de recetas. Desde calamares a la romana hasta una sabrosa paella, el calamar es una deliciosa opción para quienes buscan disfrutar de los sabores del mar en cada plato.
//
//        $3.75lb
//Langosta de mar
//Langosta de mar
//La Langosta de Mar es la reina de los mariscos, conocida por su carne tierna y exquisita. Cada bocado es una experiencia de lujo que te transportará a las aguas más cristalinas del océano. Su sabor inigualable y su textura delicada la convierten en un manjar codiciado. Prepárala a la parrilla o en una salsa de mantequilla y limón para disfrutar de una experiencia culinaria inolvidable.
//
//        $8.00lb

        DB::table('products')->insert([
            [
                'name' => 'Caracol',
                'description' => 'Los Caracoles son una joya marina escondida. Su carne tierna y sabrosa se presta a una amplia variedad de platos que deleitarán tu paladar. Desde sopas hasta guisos y platos de pasta, los caracoles son una elección deliciosa que te sorprenderá con su sabor único. Descubre la magia de los sabores del mar con los caracoles.',
                'image' => 'caracol.png',
                'price' => 3.00, 'status' => 'ACTIVE',
                'stock' => 100, 'category_id' => 4,
                'user_id' => 1, 'company_id' => 17
            ],
            [
                'name' => 'Jaiba',
                'description' => 'La Jaiba es una delicia costera con su carne jugosa y dulce. Con su sabor único, este marisco es una experiencia culinaria que te transportará a las playas soleadas. Ya sea en un ceviche refrescante o en un delicioso guiso, la jaiba es un verdadero regalo del mar que despierta tus papilas gustativas.',
                'image' => 'jaiba.png',
                'price' => 3.00, 'status' => 'ACTIVE',
                'stock' => 100, 'category_id' => 4,
                'user_id' => 1, 'company_id' => 17
            ],
            [
                'name' => 'Pulpo',
                'description' => 'El Pulpo es una maravilla del mar que despierta los sentidos con su textura tierna y sabor inconfundible. Ya sea a la parrilla con aceite de oliva y limón, o en una fresca ensalada de pulpo, este delicioso cefalópodo es una experiencia gastronómica que te sumergirá en el auténtico sabor del océano. ¡Prepáralo y descubre por qué el pulpo es un manjar tan apreciado!',
                'image' => 'pulpo.png',
                'price' => 7.00, 'status' => 'ACTIVE',
                'stock' => 100, 'category_id' => 4,
                'user_id' => 1, 'company_id' => 17
            ],
            [
                'name' => 'Calamar',
                'description' => 'El Calamar es un tesoro del océano con una versatilidad sorprendente. Su carne tierna y su sabor suave hacen que sea una adición perfecta a una variedad de recetas. Desde calamares a la romana hasta una sabrosa paella, el calamar es una deliciosa opción para quienes buscan disfrutar de los sabores del mar en cada plato.',
                'image' => 'calamar.png',
                'price' => 3.75, 'status' => 'ACTIVE',
                'stock' => 100, 'category_id' => 4,
                'user_id' => 1, 'company_id' => 17
            ],
            [
                'name' => 'Langosta de mar',
                'description' => 'La Langosta de Mar es la reina de los mariscos, conocida por su carne tierna y exquisita. Cada bocado es una experiencia de lujo que te transportará a las aguas más cristalinas del océano. Su sabor inigualable y su textura delicada la convierten en un manjar codiciado. Prepárala a la parrilla o en una salsa de mantequilla y limón para disfrutar de una experiencia culinaria inolvidable.',
                'image' => 'langosta-1.png',
                'price' => 8.00, 'status' => 'ACTIVE',
                'stock' => 100, 'category_id' => 4,
                'user_id' => 1, 'company_id' => 17
            ]
        ]);
    }
}
