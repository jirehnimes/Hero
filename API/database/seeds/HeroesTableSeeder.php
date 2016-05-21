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
            'ability_id'	=> '1',
            'badge_id'		=> '1',
            'codename'      => 'Ionic',
            'status'        => 'active'
 
        ));

        Hero::create(array(
 
            'id'            => '2',
            'ability_id'    => '2',
            'badge_id'      => '2',
            'codename'      => 'Ajax',
            'status'        => 'active'
 
        ));

        Hero::create(array(
 
            'id'            => '3',
            'ability_id'    => '3',
            'badge_id'      => '3',
            'codename'      => 'Laravel',
            'status'        => 'active'
 
        ));

        Hero::create(array(
 
            'id'            => '4',
            'ability_id'    => '4',
            'badge_id'      => '4',
            'codename'      => 'Perl',
            'status'        => 'active'
 
        ));

        Hero::create(array(
 
            'id'            => '5',
            'ability_id'    => '5',
            'badge_id'      => '5',
            'codename'      => 'Ruby',
            'status'        => 'active'
 
        ));

    }
}
