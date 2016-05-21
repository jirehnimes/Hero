<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Hero;

class HeroesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('heroes')->delete();
 
        Hero::create(array(
 
            'id'            => '1',
            'ability_id'	=> '0',
            'badge_id'		=> '0'
 
        ));

    }
}
