/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
$(document).ready(function () {
    xively.setKey( "HaflOQg5JGVKNtg5HGyBuOYahDy7LRIb4jK0U1AWaMmemDyH" );
    var feedID        = 2064917552,          // Feed ID
        datastreamID  = "sm1",       // Datastream ID
        selector      = "#sensorl1";   // Your element on the page
    // Get datastream data from Xively
    xively.datastream.get (feedID, datastreamID, function ( datastream ) {

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
            var date = new Date();
            // Display the current value from the updated datastream
            $("#date").append(date);
            $(selector).append(datastream_updated["current_value"]);
        });
    });
        xively.datastream.get (feedID, "valve1", function ( datastream ) {
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
            xively.datastream.subscribe( feedID, datastreamID, function ( event , datastream_updated ) {
                // Display the current value from the updated datastream
                $("#valve1").append( datastream_updated["current_value"] );
            });

    });
    xively.datastream.get (feedID, "action1", function ( datastream ) {
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
        xively.datastream.subscribe( feedID,"action1", function ( event , datastream_updated ) {
            // Display the current value from the updated datastream
            $("#config1").append( datastream_updated["current_value"] );
        });

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

