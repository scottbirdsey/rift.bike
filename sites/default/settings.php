<?php

/**
 * Load services definition file.
 */
$settings['container_yamls'][] = __DIR__ . '/services.yml';


$local_settings = __DIR__ . "/settings.local.php";
if (file_exists($local_settings)) {
  include $local_settings;
}
$settings['install_profile'] = 'standard';

$databases["default"]["default"] = array(
   "driver" => "mysql",
   "database" => "rift", // Whatever you name the local database
   "username" => "root",
   "password" => "root", // might be empty in WAMP
   "host" => "localhost",
   "prefix" => "",
 );
