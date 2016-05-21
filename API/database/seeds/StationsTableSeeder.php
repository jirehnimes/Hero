<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Station;

class StationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('stations')->delete();
 
        Station::create(array(
 
            'name'		=> 'Talipapa Police Station 3',
            'type'		=> 'Police',
            'latitude'	=> 14.687073, 
            'longitude'	=> 121.025720

        ));

        Station::create(array(
 
            'name'		=> 'Police Station 4',
            'type'		=> 'Police',
            'latitude'	=> 14.720775,  
            'longitude'	=> 121.040078

        ));

        Station::create(array(
 
            'name'		=> 'Police Community Precinct 8',
            'type'		=> 'Police',
            'latitude'	=> 14.694134, 
            'longitude'	=> 121.009120 

        ));

        Station::create(array(
 
            'name'		=> 'Novaliches District Hospital',
            'type'		=> 'Hospital',
            'latitude'	=> 14.700374, 
            'longitude'	=> 121.034337

        ));

        Station::create(array(
 
            'name'		=> 'Bernardino General Hospital',
            'type'		=> 'Hospital',
            'latitude'	=> 14.700233,  
            'longitude'	=> 121.034986

        ));

        Station::create(array(
 
            'name'		=> 'Ann Francis Mother & Child Hospital',
            'type'		=> 'Hospital',
            'latitude'	=> 14.693619, 
            'longitude'	=> 121.030872 

        ));

        Station::create(array(
 
            'name'		=> 'San Bartolome Fire Station',
            'type'		=> 'Fire',
            'latitude'	=> 14.710390,  
            'longitude'	=> 121.028336

        ));
    }
}
