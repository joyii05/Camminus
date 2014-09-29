<?php

class MenuRoleTableSeeder extends Seeder {

	public function run()
	{

		$menu_role_sm = array(

			//admin
			['role_id' => 1, 'menu_id' => 1],
			['role_id' => 1, 'menu_id' => 2],
			['role_id' => 1, 'menu_id' => 3],
			['role_id' => 1, 'menu_id' => 4],
			['role_id' => 1, 'menu_id' => 5],
			['role_id' => 1, 'menu_id' => 6],
			['role_id' => 1, 'menu_id' => 7],
			['role_id' => 1, 'menu_id' => 8],
			['role_id' => 1, 'menu_id' => 9],

			//gerente
			['role_id' => 2, 'menu_id' => 1],
			['role_id' => 2, 'menu_id' => 2],
			['role_id' => 2, 'menu_id' => 3],
			['role_id' => 2, 'menu_id' => 4],
			['role_id' => 2, 'menu_id' => 5],
			['role_id' => 2, 'menu_id' => 7],
			['role_id' => 2, 'menu_id' => 8],

			//técnico
			['role_id' => 3, 'menu_id' => 1],
			['role_id' => 3, 'menu_id' => 2],
			['role_id' => 3, 'menu_id' => 3],
			['role_id' => 3, 'menu_id' => 4]


		);

        $menu_role_ca = array(

            //admin
            ['role_id' => 4, 'menu_id' => 1],
            ['role_id' => 4, 'menu_id' => 2],
            ['role_id' => 4, 'menu_id' => 3],
            ['role_id' => 4, 'menu_id' => 4],
            ['role_id' => 4, 'menu_id' => 5],
            ['role_id' => 4, 'menu_id' => 6],
            ['role_id' => 4, 'menu_id' => 7],
            ['role_id' => 4, 'menu_id' => 8],
            ['role_id' => 4, 'menu_id' => 9],

            //gerente
            ['role_id' => 5, 'menu_id' => 1],
            ['role_id' => 5, 'menu_id' => 2],
            ['role_id' => 5, 'menu_id' => 3],
            ['role_id' => 5, 'menu_id' => 4],
            ['role_id' => 5, 'menu_id' => 5],
            ['role_id' => 5, 'menu_id' => 7],
            ['role_id' => 5, 'menu_id' => 8],

            //técnico
            ['role_id' => 6, 'menu_id' => 1],
            ['role_id' => 6, 'menu_id' => 2],
            ['role_id' => 6, 'menu_id' => 3],
            ['role_id' => 6, 'menu_id' => 4]


        );

		DB::table('menu_role')->insert($menu_role_sm);
        DB::table('menu_role')->insert($menu_role_ca);

    }

}
