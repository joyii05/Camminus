<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCostumersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('costumers', function(Blueprint $table)
		{
			$table->string('id', 36)->primary();

            $table->boolean('is_company')->default(0);
			$table->string('name', 128)->nullable();
			$table->string('email', 128)->nullable();;

			$table->string('document', 36)->nullable();	

			$table->text('obs')->nullable();
			$table->string('phone', 50)->nullable();
			$table->string('phone_home', 50)->nullable();

			$table->text('address_street')->nullable();
			$table->string('address_number', 100)->nullable();
			$table->string('address_complement')->nullable();
			$table->string('address_neighborhood', 100)->nullable();
			$table->string('address_city', 100)->nullable();
			$table->string('address_state', 100)->nullable();
			$table->string('address_zip', 50)->nullable();

            $table->string('fingerImage', 128)->nullable();
            $table->string('fingerTemplate', 128)->nullable();

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
		Schema::drop('costumers');
	}

}
