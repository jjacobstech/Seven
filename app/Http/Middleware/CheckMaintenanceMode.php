<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Inertia\Inertia;

class CheckMaintenanceMode
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (env('MAINTENANCE_MODE', false)) {
            return Inertia::render('Maintenance')->toResponse($request)->setStatusCode(503);
        }

        return $next($request);
    }
}
