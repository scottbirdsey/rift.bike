<?php
$settings["hash_salt"] = "developmentsiteonly";
$settings[CONFIG_SYNC_DIRECTORY] = "sites/default/config";
if (!defined("PANTHEON_ENVIRONMENT")) {
 $databases["default"]["default"] = array(
   "driver" => "mysql",
   "database" => "rift", // Whatever you name the local database
   "username" => "root",
   "password" => "root", // might be empty in WAMP
   "host" => "localhost",
   "prefix" => "",
 );
}