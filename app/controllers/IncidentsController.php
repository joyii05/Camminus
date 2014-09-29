<?php

class IncidentsController extends BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /Incidents
	 *
	 * @return Response
	 */
	public function index()
	{

		$input = Input::get();



		if (isset($input['query'])) {

			$Incidents = Incident::whereRaw('case_number ILIKE ' . "'" . $input['query'] . '%' . "'")
							->skip($input['start'])
							->take(5)
							->orderBy($input['sort'], $input['dir'])
							->get();


			$result = array(
							'success' => Incident::exists(),
							'total' => Incident::count(),
							'data' => $Incidents->toArray()
						);
		}
			else{

				$Incidents = Incident::skip($input['start'])
								->take($input['limit'])
								->orderBy($input['sort'], $input['dir'])
								->get(); 


				$result = array(
								'success' => Incident::exists(),
								'total' => Incident::count(),
								'data' => $Incidents->toArray()
							);
			}
		
		return $result;
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /Incidents/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /Incidents
	 *
	 * @return Response
	 */
	public function store()
	{
		// Create Case

		$uuid = md5(uniqid(rand(), true));
		$Incident = new Incident;
		$Incident->fill(Input::except('services'));
		$Incident->id = $uuid;
		$Incident->user_id = Auth::user()->id;

		$Incident->save();

        //$newIncident = Incident::find($uuid);
        $Incident->services()->sync(Input::get('services'));



		$result = array(
			'success' => 'true',
			'data' => Incident::with('costumer')->find($uuid)->toArray()
		); 


		echo json_encode($result);
	}

	/**
	 * Display the specified resource.
	 * GET /Incidents/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /Incidents/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /Incidents/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /Incidents/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}