<?php

class Procedure extends Eloquent {

	protected $table = 'procedures';

    use SoftDeletingTrait;

    protected $dates = ['deleted_at'];

	protected $fillable = [];
}