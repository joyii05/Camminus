<?php

class NotesModel extends Eloquent {

	protected $table = 'notes_models';

    use SoftDeletingTrait;

    protected $dates = ['deleted_at'];

	protected $fillable = [];
}