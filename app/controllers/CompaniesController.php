<?php

class CompaniesController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /companies
	 *
	 * @return Response
	 */
	public function index()
	{
        $input = Input::get();



        if (isset($input['query'])) {

            $companies = Company::where('company_name','ilike', $input['query'].'%')
                ->orWhere('corporate_name','ilike', $input['query'].'%')
                ->orWhere('document','ilike', $input['query'].'%')
                ->skip($input['start'])
                ->take(5)
                ->orderBy($input['sort'], $input['dir'])
                ->get();

            $result = array(
                'success' => Company::exists(),
                'total' => Company::count(),
                'data' => $companies->toArray()
            );
        }
        else{

            $companies = Company::skip($input['start'])
                ->take($input['limit'])
                ->orderBy($input['sort'], $input['dir'])
                ->get();


            $result = array(
                'success' => Company::exists(),
                'total' => Company::count(),
                'data' => $companies->toArray()
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

        $uploads_dir = 'Camminus/resources/companyLogo/';
        $upload_url = 'resources/companyLogo/';

        if(Input::hasFile('logo'))
        {

           $fileName = Input::get('document') . '_' . Input::file('logo')->getClientOriginalName();

           Input::file('logo')->move($uploads_dir, $fileName);

        }


        // Create Company

        if (Input::get('id') == '') {

            $uuid = md5(uniqid(rand(), true));
            $company = new Company;
            $company->fill(Input::get());
            $company->id = $uuid;
            if ($_FILES['logo']['name'] != null) { // only saves it if file upload
                $company->logo = $upload_url.$fileName;
            }
            $company->save();

            $result = array(
                'success' => 'true',
                'id' => Company::find($uuid)->id
            );

        }
        // Update Company

        else {

            $company = Company::find(Input::get('id'));
            $company->fill(Input::get());

            if ($_FILES['logo']['name'] != null) { // only update it if file upload
                $company->logo = $upload_url.$fileName;
            }

            $company->save();

            $result = array(
                'success' => 'true',
                'id' => $company->id
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
        return 'company '.$id;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id)
    {
        $company = Company::find($id);
        $company->fill(Input::get());
        //$company->password = Hash::make($company->password);
        $company->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        Company::destroy($id);
    }

}