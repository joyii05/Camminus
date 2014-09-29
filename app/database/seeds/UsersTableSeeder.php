<?php

class UsersTableSeeder extends Seeder {

	public function run()
	{

		$users_sm = [
		    ['id'=>'1', 'name' => 'Genes Luna', 'user_name' => 'admin', 'is_active' => 1,
		    'email' => 'genesluna@gmail.com', 'created_by' => '1', 'modified_by' => '1', 
		    'password' => Hash::make(md5('312444578')),
		    'role_id' => 1, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s'),
            'company_id' => "afd93b22-5e47-3883-8820-f2ddaa366768"],

		    ['id'=>'2', 'name' => 'Leandro Queiroz', 'user_name' => 'leandro', 'is_active' => 1,
		    'email' => 'leandro@gmail.com', 'created_by' => '1', 'modified_by' => '1',
		    'password' => Hash::make(md5('312444578')),
		    'role_id' => 2, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s'),
            'company_id' => "afd93b22-5e47-3883-8820-f2ddaa366768"],

		    ['id'=>'3', 'name' => 'Lucas Ariel', 'user_name' => 'lucas', 'is_active' => 1,
		    'email' => 'lucas@gmail.com', 'created_by' => '1', 'modified_by' => '1',
		    'password' => Hash::make(md5('312444578')),
		    'role_id' => 3, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s'),
            'company_id' => "afd93b22-5e47-3883-8820-f2ddaa366768"]
    	];

        $users_ca = [
            ['id'=>'11', 'name' => 'Genes Luna', 'user_name' => 'genesluna', 'is_active' => 1,
                'email' => 'genesluna@me.com', 'created_by' => '11', 'modified_by' => '11',
                'password' => Hash::make(md5('312444578')),
                'role_id' => 4, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s'),
                'company_id' => "afd93b22-5e47-3883-8820-f2ddaa366769"],

        ];

		 DB::table('users')->insert($users_sm);
        DB::table('users')->insert($users_ca);
	}

}