<?php

use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableInterface;
use AuraIsHere\LaravelMultiTenant\ScopedByTenant;
use Illuminate\Database\Eloquent\SoftDeletingTrait;

class User extends Eloquent implements UserInterface, RemindableInterface {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';

    use ScopedByTenant;

    use SoftDeletingTrait;

    protected $dates = ['deleted_at'];

	protected $fillable = array('id','name','email','password','user_name', 'role_id', 'reports_to', 'is_active', 'company_id');

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = array('password');

	/**
	 * Get the unique identifier for the user.
	 *
	 * @return mixed
	 */
	public function getAuthIdentifier()
	{
		return $this->getKey();
	}

	/**
	 * Get the password for the user.
	 *
	 * @return string
	 */
	public function getAuthPassword()
	{
		return $this->password;
	}

	/**
	 * Get the e-mail address where password reminders are sent.
	 *
	 * @return string
	 */
	public function getReminderEmail()
	{
		return $this->email;
	}

	public function getRememberToken()
	{
	    return $this->remember_token;
	}

	public function setRememberToken($value)
	{
	    $this->remember_token = $value;
	}

	public function getRememberTokenName()
	{
	    return 'remember_token';
	}

	public function role(){
		return $this->belongsTo('Role', 'role_id');
	}

    public function company(){
        return $this->belongsTo('Company', 'company_id');
    }

	public function contractType(){
		return $this->belongsTo('ContractType', 'contract_type_id');
	}

	public function Incidents() {
			return $this->hasMany('Incident');
	}


}