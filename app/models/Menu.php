<?php

class Menu extends Eloquent {
	protected $guarded = array();

	public static $rules = array();

	public function roles()
    {
        return $this->belongsToMany('Role');
    }

	public function items()
    {
        return $this->hasMany('Menu', 'parent_id');
    }

}
