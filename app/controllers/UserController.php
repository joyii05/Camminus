<?php

class UserController extends BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{


		$input = Input::get();



		if (isset($input['query'])) {

			$users = User::with('role', 'contractType')
							->whereRaw('name ILIKE ' . "'" . $input['query'] . '%' . "'")
							->skip($input['start'])
							->take(5)
							->orderBy($input['sort'], $input['dir'])
							->get(); 

			$result = array(
							'success' => User::exists(),
							'total' => User::count(),
							'data' => $users->toArray()		
						);
		}
			else{

				$users = User::with('role', 'contractType')
								->skip($input['start'])
								->take($input['limit'])
								->orderBy($input['sort'], $input['dir'])
								->get(); 

				$result = array(
								'success' => User::exists(),
								'total' => User::count(),
								'data' => $users->toArray()		
							);
			}
		
		return $result;
	}


	/**
	 * Stores and updates a given record.
	 *
	 * @return Response
	 */
	public function store()
	{

		$uploads_dir = 'Camminus/resources/profileImages/';
        $upload_url = 'resources/profileImages/';

		if(isset($_FILES)){

	        $tmpName = $_FILES['profile_image']['tmp_name'];
	        $fileName = Input::get('user_name') . '_' .$_FILES['profile_image']['name'];

	        move_uploaded_file($tmpName, $uploads_dir.$fileName);
		} 


		// Create User

		if (Input::get('id') == '') {

			$uuid = md5(uniqid(rand(), true));
			$user = new User;
			$user->fill(Input::get());
			$user->id = $uuid;
			$user->password = Hash::make($user->password);
            if ($_FILES['profile_image']['name'] != null) { // only update it if file upload
                $user->profile_image = $upload_url.$fileName;
            }
			$user->save();

			$result = array(
				'success' => 'true',
				'id' => User::find($uuid)->id
			); 
	
		} 
			// Update User

			else {

				$user = User::find(Input::get('id'));
				$user->fill(Input::get());

				if ($_FILES['profile_image']['name'] != null) { // only update it if file upload
                	$user->profile_image = $upload_url.$fileName;
        		}
				
				$user->save();

				$result = array(
					'success' => 'true',
					'id' => $user->id
			); 

			}


		echo json_encode($result);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		return 'usuario '.$id;
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$user = User::find($id);
		$user->fill(Input::get('data'));
		//$user->password = Hash::make($user->password);
		$user->save();
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		User::destroy($id);
	}

}