<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    public function station()
    {
        return $this->belongsTo('App\Station', 'hero_id', 'id');
    }
}
