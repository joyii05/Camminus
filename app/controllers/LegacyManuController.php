<?php

class LegacyManuController extends \BaseController {


	public function clientes()
	{
        $last_id = "";
        $clientes = DB::connection('manuex')->select('select * from clientes_view order by last_name ASC LIMIT 10');

        foreach ($clientes as $cliente)
        {
            if($cliente->id <> $last_id){
                DB::connection('pgsql')->insert('insert into costumers (id, company_id, name, document, phone, phone_home, email, created_at, updated_at, address_street, address_number, address_neighborhood, address_city, address_state, address_zip) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                    array($cliente->id, "afd93b22-5e47-3883-8820-f2ddaa366768", $cliente->last_name, $cliente->phone_other, $cliente->phone_mobile, $cliente->phone_home, $cliente->email_address, $cliente->date_entered, $cliente->date_modified, $cliente->primary_address_street, $cliente->alt_address_state, $cliente->alt_address_city, $cliente->primary_address_city, $cliente->primary_address_state, $cliente->primary_address_postalcode));

            }

            $last_id = $cliente->id;
        }

        echo 'Clientes importados com sucesso!';
	}



}