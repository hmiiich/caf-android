<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider; // <-- This is crucial
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider // <-- This line must be complete
{
    /**
     * Define your route model bindings, pattern filters, and other route configuration.
     */
    public function boot(): void
    {
        // Rate Limiter configuration for the API
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });

        $this->routes(function () {
            
            // 1. API Routes: Loads routes from routes/api.php and prefixes them with 'api'
            Route::middleware('api')
                ->prefix('api')
                ->group(base_path('routes/api.php'));

            // 2. Web Routes: Loads routes from routes/web.php (standard web application routes)
            Route::middleware('web')
                ->group(base_path('routes/web.php'));
        });
    }
} // <-- CRITICAL: Ensure this closing brace is the last thing in the file