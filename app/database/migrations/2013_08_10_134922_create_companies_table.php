<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCompaniesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('companies', function(Blueprint $table)
		{
            $table->string('id', 36)->primary();

            $table->string('document', 36);

            $table->boolean('is_active')->default(0);
            $table->boolean('is_parent')->default(0);

            $table->string('company_name');
            $table->string('corporate_name');
            $table->string('site', 128);
            $table->string('email', 128);
            $table->string('logo', 128)->nullable();

            $table->string('created_by', 36)->nullable();
            $table->string('modified_by', 36)->nullable();

            $table->string('phone', 30)->nullable();

            $table->string('address_street')->nullable();
            $table->string('address_number', 15)->nullable();
            $table->string('address_complement', 50)->nullable();
            $table->string('address_neighborhood', 100)->nullable();
            $table->string('address_city', 100)->nullable();
            $table->string('address_state', 100)->nullable();
            $table->string('address_zip', 50)->nullable();

            $table->softDeletes();
			$table->timestamps();


		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('companies');
	}

}
