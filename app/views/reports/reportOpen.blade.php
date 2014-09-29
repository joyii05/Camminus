@extends('layouts.report')

@section('confirmation')
    <strong>Concordo com os termos e autorizo a execução do(s) serviço(s),</strong>
@stop

@section('assinatura')
    <span>{{ $costumer['name'] }}</span><br>
    <span>{{ $costumer['document'] }}</span>
@stop