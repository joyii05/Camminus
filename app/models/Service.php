<?php

use AuraIsHere\LaravelMultiTenant\ScopedByTenant;

class Service extends Eloquent {

	protected $table = 'services';

    use SoftDeletingTrait;

    use ScopedByTenant;

    protected $dates = ['deleted_at'];
	
	protected $fillable = array('id','name', 'preco', 'description');


    public function incidents()
    {
        return $this->belongsToMany('Incident');
    }
}