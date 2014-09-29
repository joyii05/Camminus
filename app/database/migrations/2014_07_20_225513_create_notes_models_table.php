<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateNotesModelsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('notes_models', function(Blueprint $table)
		{
			$table->increments('id');
		
			$table->text('name');

			

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
		Schema::drop('notes_models');
	}

}
