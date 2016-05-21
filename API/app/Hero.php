<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hero extends Model
{
    public function user()
    {
        return $this->belongsTo('App\User', 'hero_id', 'id');
    }
}
