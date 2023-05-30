/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"dksh/connectclient/InventoryExp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});