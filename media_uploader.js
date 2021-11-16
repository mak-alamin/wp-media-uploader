(function($){
    $(document).ready(function(){
        $(document).on("click",".your-upload-button", function(){

            var button = $(".your-upload-button");
            
            var tm_wp_media = wp.media({
                
                title: 'Select Image',
                
                library: {
                    type: 'image'
                },
                
                button: {
                    text: 'Upload Image'
                },

                multiple: false

            });

            tm_wp_media.open();

            tm_wp_media.on( "select", function(){
                var attachment = tm_wp_media.state().get('selection').first().toJSON();

                button.siblings('#your_hidden_input_selector').val(attachment.url);
                
                $('#your_img_selector').attr('src', attachment.url);
            });
        });
    })
})(jQuery);