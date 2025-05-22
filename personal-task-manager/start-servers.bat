@echo off
start cmd /k "php artisan serve"
start cmd /k "php artisan queue:work"
start cmd /k "cd frontend && npm run dev" 