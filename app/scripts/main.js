$(document).ready(function () {
    var date = new Date();
    // Display the current value from the updated datastream
    $("#date").append(date);

    xively.setKey( "HaflOQg5JGVKNtg5HGyBuOYahDy7LRIb4jK0U1AWaMmemDyH" );
    var feedID        = 2064917552,          // Feed ID
        datastreamID  = "sm1",       // Datastream ID
        selector      = "#sensorl1";   // Your element on the page
    // Get datastream data from Xively

    $("#submitman").on('click', function () {
        var m1 = $("form input[type=radio][name='area1']:checked").val();
        var m2 = $("form input[type=radio][name='area2']:checked").val();
        xively.datastream.update("2064917552", "action1", {current_value: parseInt(m1)}, function () {
            alert("Configuration sent");
        });
        xively.datastream.update("2064917552", "action2", {current_value: parseInt(m2)}, function () {
        });
        xively.datastream.update("2064917552", "modo", {current_value: parseInt("0")}, function () {
        });
    });

    $("#submitauto").on('click', function () {
        var hl1 = $('#hl11').val();
        var hl2 = $('#hl12').val();
        var hl3 = $('#hl21').val();
        var hl4 = $('#hl22').val();
        xively.datastream.update("2064917552", "low_limit1", {current_value: parseInt(hl1)}, function () {
            alert("Configuration sent");
        });
        xively.datastream.update("2064917552", "high_limit1", {current_value: parseInt(hl2)}, function () {
        });
        xively.datastream.update("2064917552", "low_limit2", {current_value: parseInt(hl3)}, function () {
        });
        xively.datastream.update("2064917552", "high_limit2", {current_value: parseInt(hl4)}, function () {
        });
        xively.datastream.update("2064917552", "modo", {current_value: parseInt("1")}, function () {
        });
    });

    xively.datastream.get(feedID, datastreamID, function ( datastream ) {

        // WARNING: This code is only executed when we get a response back from Xively,
        // it will likely execute after the rest your script
        //
        // NOTE: The variable "datastream" will contain all the Datastream information
        // as an object. The structure of Datastream objects can be found at:
        // https://xively.com/dev/docs/api/quick_reference/api_resource_attributes/#datastream

        // Display the current value from the datastream
        $(selector).append(datastream["current_value"]);

        // Getting realtime!
        // The function associated with the subscribe method will be executed
        // every time there is an update to the datastream
        xively.datastream.subscribe(feedID, datastreamID, function (event, datastream_updated) {

            $(selector).append(datastream_updated["current_value"]);
        });
    });
        xively.datastream.get("2064917552", "valve1", function ( datastream ) {
            // WARNING: This code is only executed when we get a response back from Xively,
            // it will likely execute after the rest your script
            //
            // NOTE: The variable "datastream" will contain all the Datastream information
            // as an object. The structure of Datastream objects can be found at:
            // https://xively.com/dev/docs/api/quick_reference/api_resource_attributes/#datastream

            // Display the current value from the datastream
            if (datastream["current_value"] == 1 ){
                $("#valve1").append("On");
            }
            else {
                $("#valve1").append("Off");
            }

            // Getting realtime!
            // The function associated with the subscribe method will be executed
            // every time there is an update to the datastream
            xively.datastream.subscribe("2064917552", "valve1", function ( event , datastream_updated ) {
                // Display the current value from the updated datastream
                $("#valve1").append( datastream_updated["current_value"] );
            });

    });
    xively.datastream.get("2064917552", "action1", function ( datastream ) {
        // WARNING: This code is only executed when we get a response back from Xively,
        // it will likely execute after the rest your script
        //
        // NOTE: The variable "datastream" will contain all the Datastream information
        // as an object. The structure of Datastream objects can be found at:
        // https://xively.com/dev/docs/api/quick_reference/api_resource_attributes/#datastream

        // Display the current value from the datastream
        $("#config1").append( datastream["current_value"] );

        // Getting realtime!
        // The function associated with the subscribe method will be executed
        // every time there is an update to the datastream
        xively.datastream.subscribe( "2064917552","action1", function ( event , datastream_updated ) {
            // Display the current value from the updated datastream
            $("#config1").append( datastream_updated["current_value"] );
        });

    });
    xively.datastream.get("2064917552", "Flow", function ( datastream ) {
        // WARNING: This code is only executed when we get a response back from Xively,
        // it will likely execute after the rest your script
        //
        // NOTE: The variable "datastream" will contain all the Datastream information
        // as an object. The structure of Datastream objects can be found at:
        // https://xively.com/dev/docs/api/quick_reference/api_resource_attributes/#datastream

        // Display the current value from the datastream
        $("#flowg").append("0.0");

    });


    xively.datastream.get (feedID, "sm2", function ( datastream ) {
        // WARNING: This code is only executed when we get a response back from Xively,
        // it will likely execute after the rest your script
        //
        // NOTE: The variable "datastream" will contain all the Datastream information
        // as an object. The structure of Datastream objects can be found at:
        // https://xively.com/dev/docs/api/quick_reference/api_resource_attributes/#datastream

        // Display the current value from the datastream
        $("#sensorl2").append( datastream["current_value"] );

        // Getting realtime!
        // The function associated with the subscribe method will be executed
        // every time there is an update to the datastream
        xively.datastream.subscribe( feedID,"sm2", function ( event , datastream_updated ) {
            // Display the current value from the updated datastream
            $("#sensorl2").append( datastream_updated["current_value"] );
        });

    });
    xively.datastream.get (feedID, "action2", function ( datastream ) {
        // WARNING: This code is only executed when we get a response back from Xively,
        // it will likely execute after the rest your script
        //
        // NOTE: The variable "datastream" will contain all the Datastream information
        // as an object. The structure of Datastream objects can be found at:
        // https://xively.com/dev/docs/api/quick_reference/api_resource_attributes/#datastream

        // Display the current value from the datastream
        $("#config2").append( datastream["current_value"] );

        // Getting realtime!
        // The function associated with the subscribe method will be executed
        // every time there is an update to the datastream
        xively.datastream.subscribe( feedID,"action2", function ( event , datastream_updated ) {
            // Display the current value from the updated datastream
            $("#config2").append( datastream_updated["current_value"] );
        });

    });
    xively.datastream.get (feedID, "valve2", function ( datastream ) {
        // WARNING: This code is only executed when we get a response back from Xively,
        // it will likely execute after the rest your script
        //
        // NOTE: The variable "datastream" will contain all the Datastream information
        // as an object. The structure of Datastream objects can be found at:
        // https://xively.com/dev/docs/api/quick_reference/api_resource_attributes/#datastream

        // Display the current value from the datastream
        if (datastream["current_value"] == 1 ){
            $("#valve2").append("On");
        }
        else {
            $("#valve2").append("Off");
        }



        // Getting realtime!
        // The function associated with the subscribe method will be executed
        // every time there is an update to the datastream
        xively.datastream.subscribe( feedID,"valve2", function ( event , datastream_updated ) {
            // Display the current value from the updated datastream
            $("#valve2").append( datastream_updated["current_value"] );
        });

    });

    xively.datastream.get(feedID, "Flow", function ( datastream ) {

        // WARNING: This code is only executed when we get a response back from Xively,
        // it will likely execute after the rest your script
        //
        // NOTE: The variable "datastream" will contain all the Datastream information
        // as an object. The structure of Datastream objects can be found at:
        // https://xively.com/dev/docs/api/quick_reference/api_resource_attributes/#datastream

        // Display the current value from the datastream
        $("#flowg").append(datastream["current_value"]);

        // Getting realtime!
        // The function associated with the subscribe method will be executed
        // every time there is an update to the datastream
        xively.datastream.subscribe(feedID, "Flow", function (event, datastream_updated) {

            // Display the current value from the updated datastream
            $("#flowg").append(datastream_updated["current_value"]);
        });
    });

    $("#areaauto").on('click', function() {
        $(".manual1").css({"display": "none"});
        $(".manual2").css({"display": "none"});
        $(".auto1").css({"display": "block"});
        $(".auto2").css({"display": "block"});
        $("#submitman").css({"display": "none"});
        $("#submitauto").css({"display": "block"});
    });

    $("#areaman").on('click', function() {
        $(".manual1").css({"display": "block"});
        $(".manual2").css({"display": "block"});
        $(".auto1").css({"display": "none"});
        $(".auto2").css({"display": "none"});
        $("#submitman").css({"display": "block"});
        $("#submitauto").css({"display": "none"});
    });


});

(function () {
  'use strict';

  var querySelector = document.querySelector.bind(document);

  var navdrawerContainer = querySelector('.navdrawer-container');
  var body = document.body;
  var appbarElement = querySelector('.app-bar');
  var menuBtn = querySelector('.menu');
  var main = querySelector('main');

  function closeMenu() {
    body.classList.remove('open');
    appbarElement.classList.remove('open');
    navdrawerContainer.classList.remove('open');
  }

  function toggleMenu() {
    body.classList.toggle('open');
    appbarElement.classList.toggle('open');
    navdrawerContainer.classList.toggle('open');
    navdrawerContainer.classList.add('opened');
  }

  main.addEventListener('click', closeMenu);
  menuBtn.addEventListener('click', toggleMenu);
  navdrawerContainer.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });
})();

function initialize() {
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
         center: new google.maps.LatLng(28.6744781,-106.0794246),
         zoom: 16,
         mapTypeId: google.maps.MapTypeId.HYBRID,
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(28.6744781,-106.0777246),
        map: map

    });
    marker.setMap(map);

}
google.maps.event.addDomListener(window, 'load', initialize);

