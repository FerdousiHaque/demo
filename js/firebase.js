var rootRef = firebase.database().ref().child("products");
rootRef.on("child_added", snap => { //get all data from Firebase
    var key = snap.key;
    var isOdd = parseInt(snap.key) % 2 == 1;
    var desp = snap.child("description").val();
    var image = snap.child("image").val();
    var imageString = '<div class="col-md-6 col-sm-6">'
         + '<img src="' + image + '">'
     + '</div>';
    var despString = '<div class="col-md-6 col-sm-6 productDetails">'
         + '<p>' + desp + '</p>'
     + '</div>';
    var image_and_desp_string =       
   '<div class="row">'
     + (isOdd ? despString : imageString)  //show value from Firebase, image then description
     + (isOdd ? imageString : despString)   //show value from Firebase, description then image
    + '</div>';

    $("#product_section").append(image_and_desp_string);
});
