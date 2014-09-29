<?php

class RolesTableSeeder extends Seeder {

	public function run()
	{
		// Uncomment the below to wipe the table clean before populating
		//DB::table('roles')->truncate();

		$roles_sm = array(
			['name' => 'Admin', 'description' => 'Administrador do sistema', 'company_id' => "afd93b22-5e47-3883-8820-f2ddaa366768"],
			['name' => 'Gerente', 'description' => 'Gerente', 'company_id' => "afd93b22-5e47-3883-8820-f2ddaa366768"],
			['name' => 'Técnico', 'description' => 'Técnico', 'company_id' => "afd93b22-5e47-3883-8820-f2ddaa366768"]
		);

        $roles_ca = array(
            ['name' => 'Admin', 'description' => 'Administrador do sistema', 'company_id' => "afd93b22-5e47-3883-8820-f2ddaa366769"],
            ['name' => 'Gerente', 'description' => 'Gerente', 'company_id' => "afd93b22-5e47-3883-8820-f2ddaa366769"],
            ['name' => 'Técnico', 'description' => 'Técnico', 'company_id' => "afd93b22-5e47-3883-8820-f2ddaa366769"]
        );

		// Uncomment the below to run the seeder
		DB::table('roles')->insert($roles_sm);
        DB::table('roles')->insert($roles_ca);

    }

}
