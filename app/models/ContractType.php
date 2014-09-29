<?php

class ContractType extends Eloquent {

	protected $table = 'contract_types';

	public function users() {
			return $this->hasMany('User');
	}
}