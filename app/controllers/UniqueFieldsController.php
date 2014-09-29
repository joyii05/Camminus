<?php

class UniqueFieldsController extends \BaseController {

    /**
     * Chescks if the a given values is already in use
     * in the model
     *
     * @param $model
     * @param $field
     * @param $value
     */
    public function checkUnique($model,$field, $value)
    {
        if ($model == 'User' || $model == 'Costumer'){
            $check = $model::allTenants()->where($field, $value)->first();
        } elseif ($model == 'Company'){
            $check = $model::where($field, $value)->first();
        }

        if ($check != null)
        {
            echo 0;
        }
        else {
            echo 1;
        }
    }

}