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
 
        ));

        User::create(array(
 
            'first_name'    => 'demo',
            'last_name'     => 'hero',
            'username'      => 'hero', 
            'email'         => 'hero@gmail.com',
            'password'      => Hash::make('password'), //hashes our password nicely for us
            'mobile_number' => '09779542341',
            'hero_id'       => 1,
 
        ));
    }
}
