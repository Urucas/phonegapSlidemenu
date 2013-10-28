/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent();
    },
    // Update DOM on a Received Event
    receivedEvent: function() {
		try {
			// snap.js initialization
			var snapper = new Snap({
				element: document.getElementById('content'),
				disable: 'right'
			});

			document.getElementById('open-left').onclick = function(){
				console.log(snapper.state().state);
				if(snapper.state().state == "closed") {
					snapper.open('left');
				}else {
					snapper.close();
				}
			};

		}catch(e) { alert(e); }

		// snap.js fixed for android 2.x.x
		if(device.platform == "Android" && parseInt(device.version) < 4) {
			try {
				var fileref=document.createElement('script')
			    	fileref.setAttribute("type","text/javascript")
				    fileref.setAttribute("src", "libs/iscroll.js");
					fileref.onload = function() {
						menuScroll = new iScroll("menu");
						// containerScroll = new iScroll("container", {});
					}
				document.getElementsByTagName("head")[0].appendChild(fileref);
			}catch(e) {
				alert(e);
			}
		}
    }
};
