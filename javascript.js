 
  var config = {
    apiKey: "AIzaSyD6xMwsug8DVPVnmXw5Lv7yHOqCuy6yOnY",
    authDomain: "employeehours-18058.firebaseapp.com",
    databaseURL: "https://employeehours-18058.firebaseio.com",
    projectId: "employeehours-18058",
    storageBucket: "employeehours-18058.appspot.com",
    messagingSenderId: "240342266766"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var name;
  var role;
  var startDate;
  var rate;

  $("button").on("click", function() {
  	event.preventDefault();
  	console.log(name);

  	name = $("#name-input").val().trim();
    role = $("#role-input").val().trim();
    startDate = $("#startDate-input").val().trim();
    rate = $("#rate-input").val().trim();

    database.ref().push({
    	name: name,
    	role: role,
    	startDate: startDate,
    	rate: rate
    });

  });

  database.ref().on("child_added", function(childSnapshot) {
    	var months = -moment(childSnapshot.val().startDate).diff(moment(),'months');

    	newRow = $("<tr>");
    	$("#employees").append(newRow);
    	newRow.append("<td>"+childSnapshot.val().name);
    	newRow.append("<td>"+childSnapshot.val().role);
    	newRow.append("<td>"+childSnapshot.val().startDate);
    	newRow.append("<td>"+months);    	
    	newRow.append("<td>"+childSnapshot.val().rate);
    	newRow.append("<td>"+childSnapshot.val().rate*months);

    	$("input[type=text]").val("");
    	    
  });