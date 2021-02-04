
# Getting started

## Installation

Clone the repository

    git clone https://github.com/ariel1995cr/AlquilandoApi.git

Switch to the repo folder

    cd AlquilandoApi

Install all the dependencies using composer

    composer install

Install npm and compile js and css
    npm install
    npm run dev

Copy the example env file and make the required configuration changes in the .env file

    cp .env.example .env

Generate a new application key

    php artisan key:generate


Run the database migrations (**Set the database connection in .env before migrating**)

    php artisan migrate

Start the local development server

    php artisan serve

You can now access the server at http://localhost:8000