<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

        $this->call('CompaniesTableSeeder');
		$this->call('RolesTableSeeder');
		$this->call('ContractTypesTableSeeder');
		$this->call('UsersTableSeeder');
		$this->call('MenusTableSeeder');
		$this->call('MenuLeavesTableSeeder');
		$this->call('MenuRoleTableSeeder');
        $this->call('ServicesTableSeeder');

	}

}