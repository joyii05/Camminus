<?php

class ServicesController extends BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /services
	 *
	 * @return Response
	 */
	public function index()
	{
        $input = Input::get();


        if (isset($input['query'])) {

            $services = Service::whereRaw('name ILIKE ' . "'" . $input['query'] . '%' . "'")
                ->skip($input['start'])
                ->take(5)
                ->orderBy($input['sort'], $input['dir'])
                ->get();

            $result = array(
                'success' => Service::exists(),
                'total' => Service::count(),
                'data' => $services->toArray()
            );
        }
        else{

            $service = Service::orderBy($input['sort'], $input['dir'])
                ->get();


            $result = array(
                'success' => Service::exists(),
                'total' => Service::count(),
                'data' => $service->toArray()
            );
        }

        return $result;
	}


	/**
	 * Store a newly created resource in storage.
	 * POST /services
	 *
	 * @return Response
	 */
	public function store()
	{
        // Create Service

        $uuid = md5(uniqid(rand(), true));
        $service = new Service;
        $service->fill(Input::get());
        $service->id = $uuid;
        $service->save();

        $result = array(
            'success' => 'true',
            'data' => Service::find($uuid)->toArray()
        );


        echo json_encode($result);
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /services/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
        $service = Service::find($id);
        $service->fill(Input::get());


        $service->save();

        $result = array(
            'success' => 'true',
            'id' => $id
        );

        echo json_encode($result);
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /services/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
        Service::destroy($id);

        $result = array(
            'success' => 'true',
            'id' => $id
        );
	}

}