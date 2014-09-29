<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateIncidentsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('incidents', function(Blueprint $table)
		{
			$table->string('id', 36)->primary();
			//$table->increments('case_number');
			$table->string('costumer_id', 36)->index();
			$table->string('user_id', 36)->nullable()->index();

			//Ocorrência
			$table->text('descricao')->nullable();
			$table->string('tipo')->nullable();
			$table->string('prioridade')->nullable();
			$table->string('previsao')->nullable();
			$table->string('situacao')->nullable();

			//Equipamento
			$table->string('equip_tipo')->nullable();
			$table->string('equip_serial')->nullable();
			$table->string('equip_marca')->nullable();
			$table->string('equip_modelo')->nullable();
			$table->string('equip_hd')->nullable();
			$table->string('equip_cpu')->nullable();
			$table->string('equip_mem')->nullable();
			$table->string('equip_acess')->nullable();
			$table->text('equip_obs')->nullable();


			$table->timestamps();
			$table->softDeletes();

            $table->string('company_id', 36)->index();
            $table->foreign('company_id')->references('id')->on('companies');

			$table->foreign('costumer_id')->references('id')->on('costumers');
			$table->foreign('user_id')->references('id')->on('users');

		});

        DB::unprepared('ALTER TABLE incidents ADD COLUMN case_number Serial;');

	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('incidents');
	}

}
