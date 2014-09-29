<?php
use AuraIsHere\LaravelMultiTenant\ScopedByTenant;
use Illuminate\Database\Eloquent\SoftDeletingTrait;

class Incident extends Eloquent {

	protected $table = 'incidents';

    use SoftDeletingTrait;

    use ScopedByTenant;

    protected $dates = ['deleted_at'];

	protected $guarded = array();
	

	public function user(){
		return $this->belongsTo('User', 'user_id');
	}

	public function costumer(){
		return $this->belongsTo('Costumer', 'costumer_id');
	}

    public function company(){
        return $this->belongsTo('Company', 'company_id');
    }

    public function services() {
        return $this->belongsToMany('Service');
    }
}