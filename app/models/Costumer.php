<?php
use AuraIsHere\LaravelMultiTenant\ScopedByTenant;

class Costumer extends Eloquent {

	protected $table = 'costumers';

    use ScopedByTenant;

    use SoftDeletingTrait;

    protected $dates = ['deleted_at'];

	protected $fillable = array('id','name','email','document','obs', 'phone', 'phone_home', 'address_street', 
								'address_number', 'address_complement', 'address_neighborhood',
								'address_city', 'address_state', 'address_zip', 'is_company',
                                'fingerTemplate', 'fingerImage');
	
	public function cases() {
			return $this->hasMany('Ocorrencia');
	}

}