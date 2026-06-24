<?php

use CodeIgniter\Router\RouteCollection;

/** @var RouteCollection $routes */
$routes->post('login', 'Api\Auth::login');
$routes->get('/', 'Home::index');

$routes->get('buku', 'Api\Buku::index');
$routes->post('buku', 'Api\Buku::create');
$routes->post('buku/(:num)', 'Api\Buku::update/$1');
$routes->put('buku/(:num)', 'Api\Buku::update/$1');
$routes->delete('buku/(:num)', 'Api\Buku::delete/$1');
$routes->get('buku/(:num)', 'Api\Buku::show/$1');
$routes->options('(:any)', static function () {return response()->setStatusCode(200);});
$routes->options('(:any)', static function () {return response();});

$routes->get('anggota', 'Api\Anggota::index');
$routes->get('anggota/(:num)', 'Api\Anggota::show/$1');
$routes->post('anggota', 'Api\Anggota::create');
$routes->put('anggota/(:num)', 'Api\Anggota::update/$1');
$routes->delete('anggota/(:num)', 'Api\Anggota::delete/$1');

$routes->get('peminjaman', 'Api\Peminjaman::index');
$routes->get('peminjaman/(:num)', 'Api\Peminjaman::show/$1');
$routes->post('peminjaman','Api\Peminjaman::create',['filter'=>'authToken']);
$routes->put('peminjaman/(:num)','Api\Peminjaman::update/$1',['filter'=>'authToken']);
$routes->delete('peminjaman/(:num)','Api\Peminjaman::delete/$1',['filter'=>'authToken']);