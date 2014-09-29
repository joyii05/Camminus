<?php

class DeviceType extends Eloquent {

	protected $table = 'device_types';

    use SoftDeletingTrait;

    protected $dates = ['deleted_at'];

	protected $fillable = [];
}