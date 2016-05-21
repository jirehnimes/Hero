<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rate extends Model
{
     public function hero()
    {
        return $this->belongsTo('App\Hero', 'hero_id', 'id');
    }
}
