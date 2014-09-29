<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class PivotMenusRoleTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('menu_role', function(Blueprint $table) {
			
			$table->increments('id');
			$table->integer('menu_id')->unsigned()->index();
			$table->integer('role_id')->unsigned()->index();

			
			$table->foreign('menu_id')->references('id')
				  ->on('menus')->onDelete('NO ACTION')
				  ->onUpdate('NO ACTION');

			$table->foreign('role_id')->references('id')
				  ->on('roles')->onDelete('NO ACTION')
				  ->onUpdate('NO ACTION');


		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('menu_role');
	}

}
