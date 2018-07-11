//
// SAGE2 application: syncmaps
// by: Luc Renambot <renambot@gmail.com>
//
// Copyright (c) 2015
//

"use strict";

/* global  */

var syncapps = SAGE2_App.extend({
	init: function(data) {
		this.SAGE2Init("div", data);
		this.element.id = "div_" + data.id;
		this.element.style.backgroundColor = this.state.color;

		//this.maxFPS = 2.0;


		// Not adding controls but making the default buttons available
		this.controls.finishedAddingControls();
		this.enableControls = true;

		// Get the value and update the app as needed
		//this.serverDataGetValue("globalColor", "getValue");
		// Subscribe to the update for this variable
		this.serverDataSubscribeToValue('globalColor', 'subscribeToColor');
	},

	getValue: function(value) {
		console.log('Got a value', value);
		// Change the color of this app
		this.changeColor({color: value});
	},

	subscribeToColor: function(newColor) {
		console.log('Got an update', newColor);
		// Change the color of this app
		this.changeColor({color: newColor});
	},

	changeColor: function(responseObject) {
		// update the state of this app
		this.state.color = responseObject.color;
		// update the color of the DOM element (a div)
		this.element.style.background = this.state.color;
		// synchronized the clients of this app
		this.SAGE2Sync(true);
	},

	setColor: function(responseObject) {
		// update the state of this app
		this.state.color = responseObject.color;
		// update the color of the DOM element (a div)
		this.element.style.background = this.state.color;
		// it's a change from a user action, so tell the other app instances
		this.serverDataSetValue("globalColor", this.state.color, "Two Color");
		// synchronized the clients of this app
		this.SAGE2Sync(true);
	},


	load: function(date) {
		console.log('syncmaps> Load with state', this.state);
		this.refresh(date);
	},

	draw: function(date) {
		console.log('syncmaps> Draw with state', this.state);
	},

	resize: function(date) {
		// Called when window is resized
		this.refresh(date);
	},

	move: function(date) {
		// Called when window is moved (set moveEvents to continuous)
		this.refresh(date);
	},

	quit: function() {
		// Make sure to delete stuff (timers, ...)
	},

	getContextEntries: function() {
		var entries = [];
		var entry;

		entry = {};
		entry.description = "Blue";
		entry.callback    = "setColor";
		entry.parameters  = { color: "lightblue"};
		entry.entryColor  = "lightblue";
		entries.push(entry);

		entry = {};
		entry.description = "Yellow";
		entry.callback    = "setColor";
		entry.parameters  = { color: "lightyellow"};
		entry.entryColor  = "lightyellow";
		entries.push(entry);

		entry = {};
		entry.description = "Pink";
		entry.callback    = "setColor";
		entry.parameters  = { color: "lightpink"};
		entry.entryColor  = "lightpink";
		entries.push(entry);

		entry = {};
		entry.description = "Green";
		entry.callback    = "setColor";
		entry.parameters  = { color: "lightgreen"};
		entry.entryColor  = "lightgreen";
		entries.push(entry);

		entry = {};
		entry.description = "White";
		entry.callback    = "setColor";
		entry.parameters  = { color: "white"};
		entry.entryColor  = "white";
		entries.push(entry);

		entry = {};
		entry.description = "Orange";
		entry.callback    = "setColor";
		entry.parameters  = { color: "lightsalmon"};
		entry.entryColor  = "lightsalmon";
		entries.push(entry);

		return entries;
	},

	event: function(eventType, position, user_id, data, date) {
		if (eventType === "pointerPress" && (data.button === "left")) {
			// click
		} else if (eventType === "pointerMove" && this.dragging) {
			// move
		} else if (eventType === "pointerRelease" && (data.button === "left")) {
			// click release
		} else if (eventType === "pointerScroll") {
			// Scroll events for zoom
		} else if (eventType === "widgetEvent") {
			// widget events
		} else if (eventType === "keyboard") {
			if (data.character === "m") {
				this.refresh(date);
			}
		} else if (eventType === "specialKey") {
			if (data.code === 37 && data.state === "down") {
				// left
				this.refresh(date);
			} else if (data.code === 38 && data.state === "down") {
				// up
				this.refresh(date);
			} else if (data.code === 39 && data.state === "down") {
				// right
				this.refresh(date);
			} else if (data.code === 40 && data.state === "down") {
				// down
				this.refresh(date);
			}
		}
	}
});
