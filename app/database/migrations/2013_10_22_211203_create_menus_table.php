<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateMenusTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('menus', function(Blueprint $table) {
			
			$table->increments('id');
			$table->string('text', 45);
			$table->string('iconCls', 45)->nullable();
			$table->integer('parent_id')->nullable()->unsigned()->index();
			$table->string('className', 45)->nullable();
			$table->string('classType', 45)->nullable();


			$table->foreign('parent_id')->references('id')->on('menus')
			      ->onDelete('NO ACTION')
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
		Schema::drop('menus');
	}

}
