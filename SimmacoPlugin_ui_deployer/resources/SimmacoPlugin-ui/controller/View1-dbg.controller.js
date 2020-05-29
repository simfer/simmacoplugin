sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("my.company.SimmacoPlugin-ui.controller.View1", {
        onInit: function() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // enable routing
            this.getRouter().initialize();

            // set the device model

            this.setModel(models.createDeviceModel(), "device");
            var oSupportHeaderItem = new sap.ushell.ui.shell.ShellHeadItem("supportChatBtn", {
                icon: sap.ui.core.IconPool.getIconURI("sap-logo-shape"),
                tooltip: "SAP Portal",
                showSeparator: true,
                press: this.onSupportHeaderItemPress
            });

            var oRendererExtensions = jQuery.sap.getObject("sap.ushell.renderers.fiori2.RendererExtensions");
            oRendererExtensions.addHeaderEndItem(oSupportHeaderItem);

        },
        onSupportHeaderItemPress: function() {
            window.open("https://portal.wdf.sap.corp/irj/portal");
        },
        onPress: function() {
            console.log("**** Test Plugin ****");
        }
    });
});