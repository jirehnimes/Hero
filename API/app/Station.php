<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Station extends Model
{
    
    public function report()
    {
        return $this->hasMany('App\Report', 'hero_id', 'id');
    }
}
