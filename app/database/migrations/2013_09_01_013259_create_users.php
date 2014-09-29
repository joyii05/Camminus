<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsers extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('users', function(Blueprint $table)
		{
			$table->string('id', 36)->primary();
						
			$table->boolean('is_active')->default(0);
			
			$table->string('user_name', 80)->unique();
			$table->string('name', 128);
			$table->string('email', 128)->unique();
			$table->string('password', 60);
			$table->string('profile_image', 128)->nullable();

			$table->string('created_by', 36)->nullable();
			$table->string('modified_by', 36)->nullable();
			$table->string('reports_to', 36)->nullable();

			$table->integer('contract_type_id')->nullable()->unsigned()->index();
			$table->date('contract_start')->nullable();
			$table->integer('role_id')->nullable()->unsigned()->index();
			

			$table->string('phone_home', 30)->nullable();
			$table->string('phone_mobile', 30)->nullable();
			$table->string('phone_other', 30)->nullable();

			$table->string('address_street')->nullable();
			$table->string('address_number', 15)->nullable();
			$table->string('address_complement', 50)->nullable();
			$table->string('address_neighborhood', 100)->nullable();
			$table->string('address_city', 100)->nullable();
			$table->string('address_state', 100)->nullable();
			$table->string('address_zip', 50)->nullable();

			$table->string('emergency_contact_name', 128)->nullable();
			$table->string('emergency_contact_phone_home', 30)->nullable();
			$table->string('emergency_contact_phone_mobile', 30)->nullable();
			$table->text('emergency_contact_notes')->nullable();

			$table->timestamps();
			$table->softDeletes();

			$table->string('remember_token', 100)->nullable();

            $table->string('company_id', 36)->index();
            $table->foreign('company_id')->references('id')->on('companies');

			$table->foreign('contract_type_id')->references('id')->on('contract_types');
			$table->foreign('role_id')->references('id')->on('roles');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('users');
	}

}
