<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class CompaniesTableSeeder extends Seeder {

	public function run()
	{
		$faker = Faker::create();

        Company::create([
            'id' => "afd93b22-5e47-3883-8820-f2ddaa366768",
            'company_name' => "Manutenção Express - Stella Maris",
            'is_parent' => true,
            'corporate_name' => "G. Luna Comércio e Prestação de Serviços LTDA.",
            'document' => "09137000000102",
            'site' => "http://www.manutencaoexpress.com.br",
            'email' => "sac@manutecaoexpress.com.br",
            'phone' => '8233251336',
            'logo' => 'resources/companyLogo/logoManu.jpg',
            'address_street' => 'Av. Emp. Carlos da Silva Nogueira',
            'address_number' => '620',
            'address_complement' => 'Quiosque 06',
            'address_neighborhood' => 'Stella Maris',
            'address_city' => 'Maceió',
            'address_state' => 'Alagoas',
            'address_zip' => '57036540'

        ]);

        Company::create([
            'id' => "afd93b22-5e47-3883-8820-f2ddaa366769",
            'company_name' => "Manutenção Express - Cruz das Almas",
            'is_parent' => true,
            'corporate_name' => "G. Luna Comércio e Prestação de Serviços LTDA.",
            'document' => "09137000000102",
            'site' => "http://www.manutencaoexpress.com.br",
            'email' => "sac@manutecaoexpress.com.br",
            'phone' => '8233256069',
            'logo' => 'resources/companyLogo/logoManu.jpg',
        ]);

/*		foreach(range(1, 15) as $index)
		{
			Company::create([
                'id' => $faker->uuid,
                'company_name' => $faker->company,
                'corporate_name' => $faker->company,
                'document' => $faker->randomNumber(),
                'site' => $faker->safeEmailDomain,
                'email' => $faker->companyEmail,
                'logo' => 'http://lorempixel.com/200/100/',
                'created_at' => $faker->dateTime,
                'updated_at' => $faker->dateTime,
			]);
		}*/
    }

}