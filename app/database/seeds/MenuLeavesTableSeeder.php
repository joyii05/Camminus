<?php

class MenuLeavesTableSeeder extends Seeder {

	public function run()
	{

        $menus = array(

			//Sub-menus
			
			//Painel

			['text' => 'Painel', 'iconCls' => 'menu-user-dashboard', 
			'parent_id' => '1', 'className' => 'panel', 'classType' => 'panel'],

			['text' => 'Perfil', 'iconCls' => 'menu-user-profile', 
			'parent_id' => '1', 'className' => 'panel', 'classType' => 'panel'],

			//Laboratório

			['text' => 'Em andamento', 'iconCls' => '', 
			'parent_id' => '2', 'className' => 'caseslabopened', 'classType' => 'panel'],

			['text' => 'Aguardando Peças', 'iconCls' => '', 
			'parent_id' => '2', 'className' => 'panel', 'classType' => 'panel'],

			['text' => 'Aguardando Autorização', 'iconCls' => '', 
			'parent_id' => '2', 'className' => 'panel', 'classType' => 'panel'],

			['text' => 'Aguardando Retirada', 'iconCls' => '', 
			'parent_id' => '2', 'className' => 'panel', 'classType' => 'panel'],

			//Clientes

			['text' => 'Lista de Clientes', 'iconCls' => 'menu-list', 
			'parent_id' => '3', 'className' => 'costumersgrid', 'classType' => 'panel'],

			['text' => 'Novo Cliente', 'iconCls' => 'menu-add', 
			'parent_id' => '3', 'className' => 'costumersform', 'classType' => 'window'],

			//Ocorrências

			['text' => 'Lista de Ocorrências', 'iconCls' => '', 
			'parent_id' => '4', 'className' => 'casesgrid', 'classType' => 'panel'],

			['text' => 'Nova Ocorrência', 'iconCls' => '', 
			'parent_id' => '4', 'className' => 'casesform', 'classType' => 'window'],

			['text' => 'Fechar Ocorrências', 'iconCls' => '',
			'parent_id' => '4', 'className' => 'panel', 'classType' => 'panel'],

			//Caixa

			['text' => 'Transações', 'iconCls' => '', 
			'parent_id' => '5', 'className' => 'panel', 'classType' => 'panel'],

			['text' => 'Contas', 'iconCls' => '', 
			'parent_id' => '5', 'className' => 'panel', 'classType' => 'panel'],

			['text' => 'Categorias', 'iconCls' => '', 
			'parent_id' => '5', 'className' => 'panel', 'classType' => 'panel'],

			//Relatórios

			['text' => 'Resumo', 'iconCls' => '', 
			'parent_id' => '6', 'className' => 'panel', 'classType' => 'panel'],

			['text' => 'Funcionários', 'iconCls' => '', 
			'parent_id' => '6', 'className' => 'panel', 'classType' => 'panel'],

			['text' => 'Faturamento', 'iconCls' => '', 
			'parent_id' => '6', 'className' => 'panel', 'classType' => 'panel'],

			//Estoque

			['text' => 'Estoque Atual', 'iconCls' => '', 
			'parent_id' => '7', 'className' => 'panel', 'classType' => 'panel'],

			['text' => 'Fornecedores', 'iconCls' => '', 
			'parent_id' => '7', 'className' => 'panel', 'classType' => 'panel'],

			['text' => 'Compras', 'iconCls' => '', 
			'parent_id' => '7', 'className' => 'panel', 'classType' => 'panel'],	

			//Configurações

			['text' => 'Serviços', 'iconCls' => '', 
			'parent_id' => '8', 'className' => 'servicesgrid', 'classType' => 'panel'],

			['text' => 'Diagnósticos', 'iconCls' => '', 
			'parent_id' => '8', 'className' => 'panel', 'classType' => 'panel'],

			['text' => 'Procedimentos', 'iconCls' => '', 
			'parent_id' => '8', 'className' => 'panel', 'classType' => 'panel'],

			['text' => 'Modelo de notas', 'iconCls' => '', 
			'parent_id' => '8', 'className' => 'panel', 'classType' => 'panel'],	

			//Admin

			['text' => 'Usuários', 'iconCls' => 'user', 
			'parent_id' => '9', 'className' => 'usersgrid', 'classType' => 'panel'],

			['text' => 'Grupos de usuários', 'iconCls' => '', 
			'parent_id' => '9', 'className' => 'rolesgrid', 'classType' => 'panel'],

			['text' => 'Funcionários', 'iconCls' => '', 
			'parent_id' => '9', 'className' => 'panel', 'classType' => 'panel'],

			['text' => 'Tipos de contrato', 'iconCls' => '', 
			'parent_id' => '9', 'className' => 'panel', 'classType' => 'panel'],

			['text' => 'Empresa', 'iconCls' => '', 
			'parent_id' => '9', 'className' => 'companiesgrid', 'classType' => 'panel']


		);

		 DB::table('menus')->insert($menus);
	}

}
