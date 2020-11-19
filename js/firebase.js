
var rootRef = firebase.database().ref().child("products");
rootRef.on("child_added", snap => {
    //alert(snap.val());
    var desp = snap.child("description").val();
    var image = snap.child("image").val();
    var image_and_desp_string = 
   '<div class="row">'
     + '<div class="col-md-6 col-sm-6 productDetails">'
         + '<p>' + desp + '</p>'
     + '</div>'
     + '<div class="col-md-6 col-sm-6">'
         + '<img src="' + image + '">'
     + '</div>'
    + '</div>';

    $("#product_section").append(image_and_desp_string);
});
