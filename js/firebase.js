
var rootRef = firebase.database().ref().child("products");
rootRef.on("child_added", snap => {
    //alert(snap.val());
    var desp = snap.child("description").val();
    var image = document.createElement("img");
    var imageParent = document.getElementById("product_section");
    image.className = "col-md-6 col-sm-6";
    image.src = snap.child("image").val();
    imageParent.appendChild(image);

    $("#product_section").append('<div class="row"><div class="col-md-6 col-sm-6 productDetails"><p>'+desp+'</p></div></div>');
});
