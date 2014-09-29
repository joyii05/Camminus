<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContractTypes extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('contract_types', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name', 50);
			$table->text('description')->nullable();
			$table->string('created_by', 36)->nullable();
			$table->string('modified_by', 36)->nullable();
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
		Schema::drop('contract_types');
	}

}
