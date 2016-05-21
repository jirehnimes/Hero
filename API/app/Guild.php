<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Guild extends Model
{
   public function hero()
    {
        return $this->hasMany('App\Heroes', 'id', 'hero_id');
    }

   


}
