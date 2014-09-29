<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateIncidentServiceTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('incident_service', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('incident_id', 36)->index();
			$table->foreign('incident_id')->references('id')->on('incidents')->onDelete('cascade');
			$table->string('service_id', 36)->index();
			$table->foreign('service_id')->references('id')->on('services')->onDelete('cascade');

		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('incident_service');
	}

}
