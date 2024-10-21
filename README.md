*Settup of React
npm install react-bootstrap bootstrap
npm install react-router-dom
npx install create-react-app {nameoffolder}

*Setup of Laravel
composer create-project laravel/laravel {nameoffolder}
check .env and settup databasephp artisan make:model ProductList -m

//lamanan yung migration with columns

//lamanan yung model with use HasFactory at protected $fillable column names

// php artisan install:api

Route::apiResource('products', \App\Http\Controllers\ProductController::class);

php artisan make:controller ProductController —resource

//edit yung provider   Schema::defaultStringLength(191);

php artisan migrate

php artisan make:factory ProductListFactory

//edit yung factory 

App\Models\ProductList::factory()->count(5)->create(); 

php artisan config:publish cors

//edit controller index


-----------------------------------To Run This Project----------------------------------------------

Open xampp
Open react project
npm start


Open laravel project
php artisan serve

To populate your local database using laravel

App\Models\ProductList::factory()->count(10)->create(); 

10 or more kayo na bahala

php artisan migrate

it should now work
