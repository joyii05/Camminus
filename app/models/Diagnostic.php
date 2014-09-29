<?php

class Diagnostic extends Eloquent {

	protected $table = 'diagnostics';

    use SoftDeletingTrait;

    protected $dates = ['deleted_at'];

	protected $fillable = [];
}