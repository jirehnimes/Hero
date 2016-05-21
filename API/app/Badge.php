<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Badge extends Model
{
    

    public function hero()
    {
        return $this->belongsTo('App\Hero', 'hero_id', 'id');
    }
}
