var config = {
    apiKey: "AIzaSyBXBwjddkAKwV-uS0KiL_jn6qgWc4iEnoI",
    authDomain: "bidding-warsomuchfun.firebaseapp.com",
    databaseURL: "https://bidding-warsomuchfun.firebaseio.com",
    projectId: "bidding-warsomuchfun",
    storageBucket: "bidding-warsomuchfun.appspot.com",
    messagingSenderId: "204474263739"
  };
  firebase.initializeApp(config);
  var name = "";
  var role = "";
  var date = '';
  var payRate = "";
  
  // Capture Button Click
  $(".btn-primary").on("click", function(event) {
    event.preventDefault();
    
    // YOUR TASK!!!
    // Code in the logic for storing and retrieving the most recent user.
    // Don't forget to provide initial data to your Firebase database.
    name = $("#employeeName").val().trim();
    role = $("#role").val().trim();
    startDate = $("#startDate").val().trim();
    pay = $("#monthlyRate").val().trim();
    
    // Code for the push
    dataRef.ref().push({
      
      name: name,
      role: role,
      startDate: startDate,
      pay: pay,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
  });
  
  // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
  dataRef.ref().on("child_added", function(childSnapshot) {
    
    // Log everything that's coming out of snapshot
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().role);
    console.log(childSnapshot.val().pay);
    console.log(childSnapshot.val().startDate);
    console.log(childSnapshot.val().joinDate);
    console.log(childSnapshot.val().joinDate);

    
    // full list of items to the well
    $("#full-member-list").append("<div class='well'><span class='member-name'> " + childSnapshot.val().name +
      " </span><span class='member-role'> " + childSnapshot.val().role +
        " </span><span class='member-pay'> " + childSnapshot.val().pay +
          " </span><span class='member-startDate'> " + childSnapshot.val().startDate + " </span></div>");
          
    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });
      
  dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
    // Change the HTML to reflect
    $("#name-tb").text(snapshot.val().name);
    $("#role-tb").text(snapshot.val().role);
    $("#date-tb").text(snapshot.val().pay);
    $("#months-tb").text(snapshot.val().startDate);
    $("#rate-tb").text(snapshot.val().joinDate);
    $("#total-tb").text(snapshot.val().startDate);



  });  