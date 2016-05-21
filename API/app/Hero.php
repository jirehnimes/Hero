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
        return $this->belongsTo('App\Guild', 'id', 'guild_id');
    }

    public function ability()
    {
        return $this->hasMany('App\Ability', 'id', 'ability_id');
    }

    public function badge()
    {
        return $this->hasMany('App\Badge', 'id', 'badge_id');
    }

    public function commend()
    {
        return $this->hasMany('App\Commend', 'id', 'commend_id');
    }

     public function rating()
    {
        return $this->hasMany('App\Rating', 'id', 'rating_id');
    }

}
