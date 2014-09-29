<?php

class Company extends \Eloquent {

    protected $table = 'companies';

    use SoftDeletingTrait;

    protected $dates = ['deleted_at'];

    protected $guarded = array();
}