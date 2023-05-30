sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/Device", "dksh/connectclient/InventoryExp/model/models", "sap/m/MessageBox"], function (e, t, i, n) {
	"use strict";
	return e.extend("dksh.connectclient.InventoryExp.Component", {
		metadata: {
			manifest: "json",
			config: {
				fullWidth: true
			}
		},
		init: function () {
			e.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
			this.setModel(i.createDeviceModel(), "device")
		}
	})
});