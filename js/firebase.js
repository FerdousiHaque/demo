// Loop through users in order with the forEach() method. The callback
// provided to forEach() will be called synchronously with a DataSnapshot
// for each child:
var query = firebase.database().ref("products").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      const key = Number(childSnapshot.key);
      console.log(key);
      // childData will be the actual contents of the child
      var desp = childSnapshot.child("description").val();
      var img = childSnapshot.child("image").val();
      var image_and_desp_string;

      key % 2 === 0 ?
      $("#product_section").append(          //get value from Firebase and show accordingly
        '<div class="row">'
          + '<div class="col-md-6 col-sm-6">'
              + '<img src="' + img + '">'
          + '</div>'
          + '<div class="col-md-6 col-sm-6 productDetails">'
              + '<p>' + desp + '</p>'
          + '</div>'
         + '</div>')
      : $("#product_section").append(            //get value from Firebase and show accordingly
        '<div class="row">'
          + '<div class="col-md-6 col-sm-6 productDetails">'
              + '<p>' + desp + '</p>'
          + '</div>'
          + '<div class="col-md-6 col-sm-6">'
              + '<img src="' + img + '">'
          + '</div>'
         + '</div>');
  });
});
