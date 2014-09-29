<?php

class MenusTableSeeder extends Seeder {

	public function run()
	{

		$menus = array(
			
			//Root do menu
			
			['text' => 'Profile', 'iconCls' => 'user-small'],
			['text' => 'Laboratório', 'iconCls' => 'menu-lab'],
			['text' => 'Clientes', 'iconCls' => 'menu-contacts'],
			['text' => 'Ocorrências', 'iconCls' => 'menu-tickts'],
			['text' => 'Livro Caixa', 'iconCls' => 'menu-cash'],
			['text' => 'Relatórios', 'iconCls' => 'menu-reports'],
			['text' => 'Estoque', 'iconCls' => 'menu-cargo'],
			['text' => 'Configurações', 'iconCls' => 'menu-config'],
			['text' => 'Admin', 'iconCls' => 'menu-admin']


		);

		 DB::table('menus')->insert($menus);
	}

}
