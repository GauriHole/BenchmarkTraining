<?php
return [
  'api' => [
    \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
    'throttle:api',
    \Illuminate\Routing\Middleware\SubstituteBindings::class,
  ],

  'middleware' => [
    // Other middleware...
    \Illuminate\Http\Middleware\HandleCors::class,
  ],
];
