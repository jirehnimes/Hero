<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hero extends Model
{
    public function user()
    {
        return $this->belongsTo('App\User', 'hero_id', 'id');
    }

     public function guild()
    {
        return $this->belongsTo('App\Guild', 'hero_id', 'id');
    }

    public function ability()
    {
        return $this->hasMany('App\Ability', 'hero_id', 'id');
    }

    public function badge()
    {
        return $this->hasMany('App\Badge', 'hero_id', 'id');
    }

    public function commend()
    {
        return $this->hasMany('App\Commend', 'hero_id', 'id');
    }

     public function rating()
    {
        return $this->hasMany('App\Rating', 'hero_id', 'id');
    }

}
