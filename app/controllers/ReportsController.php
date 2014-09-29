<?php

/**
 * Class ReportsController
 */
class ReportsController extends \BaseController {

    public function generateReport($reportType, $id)
    {

        switch ($reportType) {
            case "casesOpen":
                $incident = Incident::with('costumer', 'company', 'services')->find($id)->toArray();
                //dd($incident);
                return $this->generateReportFromView('reports.reportOpen', $incident);
                break;
            case "casesClose":
                echo "casesClose";
                break;
            default:
                App::abort(404);
        }

    }

    public function generateCloseCaseReport($case_number)
    {

    }

    /**
     * Generates a pdf from a given view
     *
     * @param $view
     * @return mixed
     */
    private function generateReportFromView($view, $data)
    {
        $pdf = PDF::loadView($view, $data)
            ->setPaper('a4')
            //->setOption('javascript-delay', 2000)
            ->setOption('margin-bottom', 0)
            ->setOrientation('landscape');

        return $pdf->stream('invoice.'.rand().'pdf');
    }

}
