<?php

//At first load these scripts
function your_plugin_load_admin_scripts(){
    wp_enqueue_script('media-upload');
    wp_enqueue_media();

    wp_enqueue_script( 'media-uploader-js', plugins_url('/media_uploader.js', __FILE__ ), array('jquery', 'media-upload'), null, true );

}
add_action('admin_enqueue_scripts', 'your_plugin_load_admin_scripts');