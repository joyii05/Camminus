<?php

class Note extends Eloquent {

	protected $table = 'notes';

    use SoftDeletingTrait;

    protected $dates = ['deleted_at'];

	protected $fillable = [];
}