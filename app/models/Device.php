<?php

class Device extends Eloquent {

	protected $table = 'devices';

    use SoftDeletingTrait;

    protected $dates = ['deleted_at'];

	protected $fillable = [];
}