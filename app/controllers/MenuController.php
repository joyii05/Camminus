<?php

class MenuController extends BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
        $menu = Role::find(Auth::user()->role_id)->menus;

        // Creates the Root Menus
        foreach($menu as $key => $value)
		{
		     $items[$key] = $value['attributes'];
		     $items[$key]['leaf'] = 'false';

		     $sub_menus = Menu::find($value['attributes']['id'])->items;
		    
		    // Creates the Sub-menus
			foreach ($sub_menus as $k => $v) {

				$items[$key]['items'][$k] = $v['attributes'];
				$items[$key]['items'][$k]['leaf'] = 'true';
				//print_r($items[$key]['items'][$k]);
			}
		     
		}

		$result = array(
				'success' => 'true',
				'items' => $items		
			);

		return $result;

	}

}
