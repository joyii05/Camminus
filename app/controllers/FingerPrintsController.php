<?php

class FingerPrintsController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /fingerprints
	 *
	 * @return Response
	 */
	public function index()
	{
        $file = 'Camminus/resources/fingerTemplates/' . Input::get('costumer_id') . '.fpt';

        if (file_exists($file)) {
            header('Content-Description: File Transfer');
            header('Content-Type: application/octet-stream');
            header('Content-Disposition: attachment; filename='.basename($file));
            header('Expires: 0');
            header('Cache-Control: must-revalidate');
            header('Pragma: public');
            header('Content-Length: ' . filesize($file));
            readfile($file);
            exit;
        }
        else
        {
            App::abort(404);
        }

	}

	/**
	 * Store a newly created resource in storage.
	 * POST /fingerprints
	 *
	 * @return Response
	 */
	public function store()
	{
        if(Input::hasFile('finger') && Input::hasFile('img') && Input::get('costumer_id') != "")
        {
            $fpt_up_dir = 'Camminus/resources/fingerTemplates/';
            $img_up_dir = 'Camminus/resources/fingerImages/';
            $costumer_id =  Input::get('costumer_id');
            $fptName = $costumer_id . ".fpt";
            $imgName = $costumer_id . ".jpg";

            Input::file('finger')->move($fpt_up_dir, $fptName);
            Input::file('img')->move($img_up_dir, $imgName);

            $costumer = Costumer::find($costumer_id);
            $costumer->fingerTemplate = $fpt_up_dir . $fptName;
            $costumer->fingerImage = $img_up_dir . $imgName;
            $costumer->save();

            return "true";
        }
        else{
            return "false";
        }
	}

}