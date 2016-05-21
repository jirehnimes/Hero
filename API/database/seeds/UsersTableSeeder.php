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
            'last_name'     => 'admin',
            'username'		=> 'admin', 
            'email'         => 'admin@gmail.com',
            'password'      => Hash::make('password'), //hashes our password nicely for us
            'mobile_number' => '09069542341'
 
        ));
    }
}
