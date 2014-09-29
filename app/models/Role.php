<?php

use AuraIsHere\LaravelMultiTenant\ScopedByTenant;

class Role extends Eloquent {

	protected $table = 'roles';

	//public $inclues = array('users');

    use ScopedByTenant;

	public function users() {
			return $this->hasMany('User');
	}

	public function menus()
    {
        return $this->belongsToMany('Menu');
    }
}