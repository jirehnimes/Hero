<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ability extends Model
{


  public function hero()
    {
        return $this->belongsTo('App\Hero', 'ability_id', 'id');
    }

}
