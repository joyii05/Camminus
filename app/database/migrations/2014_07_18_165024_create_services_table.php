<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateServicesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('services', function(Blueprint $table)
		{
            $table->string('id', 36)->primary();

			$table->string('name', 255);
			
			$table->text('description')->nullable();

			$table->string('preco', 10);

			$table->string('created_by', 36)->nullable();
			$table->string('modified_by', 36)->nullable();
			
			$table->timestamps();
			$table->softDeletes();

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
		Schema::drop('services');
	}

}
