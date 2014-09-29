<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;
use AuraIsHere\LaravelMultiTenant\TenantScope;

class ServicesTableSeeder extends Seeder {

	public function run()
	{
		$faker = Faker::create();
        TenantScope::setTenantId("afd93b22-5e47-3883-8820-f2ddaa366768");

		foreach(range(1, 10) as $index)
		{
			Service::create([
                'id' => $faker->uuid,
                'name' => $faker->sentence(),
                'preco' => $faker->randomNumber(3),
                'description' => $faker->paragraph(),

			]);
		}
	}

}