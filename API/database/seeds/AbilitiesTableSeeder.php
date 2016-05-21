<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Ability;

class AbilitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('abilities')->delete();
 
        Ability::create(array(
 
            'id'            => '1',
            'ability'		=> 'Healer',
            'description'	=> 'Red Cross Volunteer'
 
        ));

        Ability::create(array(
 
            'id'            => '1',
            'ability'		=> 'Fighter',
            'description'	=> 'Mixed Martial Arts'
 
        ));

        Ability::create(array(
 
            'id'            => '2',
            'ability'		=> 'Healer',
            'description'	=> 'Nurse Graduate'
 
        ));

        Ability::create(array(
 
            'id'            => '2',
            'ability'		=> 'Watcher',
            'description'	=> 'Freelance Photographer'
 
        ));

        Ability::create(array(
 
            'id'            => '3',
            'ability'		=> 'Fighter',
            'description'	=> 'Boxer'
 
        ));

        Ability::create(array(
 
            'id'            => '3',
            'ability'		=> 'Watcher',
            'description'	=> 'Journalist'
 
        ));

        Ability::create(array(
 
            'id'            => '4',
            'ability'		=> 'Healer',
            'description'	=> 'Doctor'
 
        ));

        Ability::create(array(
 
            'id'            => '4',
            'ability'		=> 'Fighter',
            'description'	=> 'Police'
 
        ));

        Ability::create(array(
 
            'id'            => '5',
            'ability'		=> 'Fighter',
            'description'	=> 'Black Belt Taekwondo'
 
        ));

        Ability::create(array(
 
            'id'            => '5',
            'ability'		=> 'Watcher',
            'description'	=> 'Blogger'
 
        ));

    }
}
