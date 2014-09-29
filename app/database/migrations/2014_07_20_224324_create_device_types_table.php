<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDeviceTypesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('device_types', function(Blueprint $table)
		{
			$table->increments('id');
			
			$table->string('name', 255);

			$table->string('device_image', 128)->nullable();
			
			$table->string('created_by', 36)->nullable();
			$table->string('modified_by', 36)->nullable();

			$table->timestamps();

            $table->string('company_id', 36)->index();
            $table->foreign('company_id')->references('id')->on('companies');


		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('device_types');
	}

}
