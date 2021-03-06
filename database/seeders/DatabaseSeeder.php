<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserSeeder::class);
        $this->call(AdminSeeder::class);
        $this->call(NetworkSeeder::class);
        $this->call(PaymentTypeSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(BonusTypeSeeder::class);
        $this->call(DepositSeeder::class);
        $this->call(UnilevelAcquisitionLevelSeeder::class);
        $this->call(UnilevelRewardSeeder::class);
        $this->call(AssetHistorySeeder::class);
        $this->call(BonusSeeder::class);
        $this->call(CountrySeeder::class);
    }
}
