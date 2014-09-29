<?php

use AuraIsHere\LaravelMultiTenant\TenantScope;

class LoginController extends BaseController {


	public function getIndex()
	{
		if (Auth::check())
		{
		    $user = Auth::user()->toArray();
			$result = array(
				'success' => 'true',
				'data' => $user
			); 

			return $result;
			
		}else{
            Session::flush();
			return '{success: false}';
		}
	}

	public function postAuth()
	{
        Session::flush();
		$user_name = Input::get('user_name');
		$pswd = Input::get('password');

        TenantScope::disable();
		
		if (Auth::attempt(array('user_name' => $user_name, 'password' => $pswd, 'is_active' => '1')))
		{
			$user = Auth::user();

            $tenantId = $user->company_id;

            TenantScope::setTenantId($tenantId);

			$result = array(
				'success' => 'true',
				'data' => $user->toArray()
			); 
			return $result;
		}
		else
		{
			return '{success: false}';
		}
	}

	public function postLogout()
	{
        Session::flush();
		Auth::logout();
		return 'true';
	}


}

