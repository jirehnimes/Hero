<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();
 
        User::create(array(
 
            'first_name'    => 'demo',
            'last_name'     => 'user',
            'username'		=> 'user', 
            'email'         => 'user@gmail.com',
            'password'      => Hash::make('password'), //hashes our password nicely for us
            'mobile_number' => '09069542341',
            'hero_id'       => 0,
            'gender'        => 'female',
 
        ));

        User::create(array(
 
            'first_name'    => 'hero',
            'last_name'     => 'first',
            'username'      => 'hero1', 
            'password'      => Hash::make('password'), //hashes our password nicely for us
            'email'         => 'hero1@gmail.com',
            'mobile_number' => '09779542341',
            'hero_id'       => 1,
            'gender'        => 'male',
            'latitude'      => 14.699756,
            'longitude'     => 121.033542
 
        ));

        User::create(array(
 
            'first_name'    => 'hero',
            'last_name'     => 'second',
            'username'      => 'hero2', 
            'password'      => Hash::make('password'), //hashes our password nicely for us
            'email'         => 'hero2@gmail.com',
            'mobile_number' => '09779542341',
            'hero_id'       => 2,
            'gender'        => 'male',
            'latitude'      => 14.700379, 
            'longitude'     => 121.030388
 
        ));

        User::create(array(
 
            'first_name'    => 'hero',
            'last_name'     => 'third',
            'username'      => 'hero3', 
            'password'      => Hash::make('password'), //hashes our password nicely for us
            'email'         => 'hero3@gmail.com',
            'mobile_number' => '09779542341',
            'hero_id'       => 3,
            'gender'        => 'female',
            'latitude'      => 14.700820, 
            'longitude'     => 121.033553
 
        ));

        User::create(array(
 
            'first_name'    => 'hero',
            'last_name'     => 'fourth',
            'username'      => 'hero4', 
            'password'      => Hash::make('password'), //hashes our password nicely for us
            'email'         => 'hero4@gmail.com',
            'mobile_number' => '09779542341',
            'hero_id'       => 4,
            'gender'        => 'female',
            'latitude'      => 14.698371, 
            'longitude'     => 121.030769
 
        ));

        User::create(array(
 
            'first_name'    => 'hero',
            'last_name'     => 'fifth',
            'username'      => 'hero5', 
            'password'      => Hash::make('password'), //hashes our password nicely for us
            'email'         => 'hero5@gmail.com',
            'mobile_number' => '09779542341',
            'hero_id'       => 5,
            'gender'        => 'female',
            'latitude'      => 14.698531, 
            'longitude'     => 121.033478
 
        ));
    }
}
