<?php

class CostumerController extends BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{


		$input = Input::get();



		if (isset($input['query'])) {

			$costumers = Costumer::whereRaw('name ILIKE ' . "'" . $input['query'] . '%' . "'")
							->skip($input['start'])
							->take(5)
							->orderBy($input['sort'], $input['dir'])
							->get(); 

			$result = array(
							'success' => Costumer::exists(),
							'total' => Costumer::count(),
							'data' => $costumers->toArray()		
						);
		}
			else{

				$costumer = Costumer::skip($input['start'])
								->take($input['limit'])
								->orderBy($input['sort'], $input['dir'])
								->get(); 


				$result = array(
								'success' => Costumer::exists(),
								'total' => Costumer::count(),
								'data' => $costumer->toArray()		
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


		// Create Costumer

		$uuid = md5(uniqid(rand(), true));
		$costumer = new Costumer;
		$costumer->fill(Input::get());
		$costumer->id = $uuid;
		$costumer->save();

		$result = array(
			'success' => 'true',
			'data' => Costumer::find($uuid)->toArray()
		); 


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

	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$costumer = Costumer::find($id);
		$costumer->fill(Input::get());


		$costumer->save();

		$result = array(
			'success' => 'true',
			'id' => $id
		);

		echo json_encode($result);

	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Costumer::destroy($id);

		$result = array(
			'success' => 'true',
			'id' => $id
		);

		echo json_encode($result);
	}

}