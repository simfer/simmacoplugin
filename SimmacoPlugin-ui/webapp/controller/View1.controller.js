sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("my.company.SimmacoPlugin-ui.controller.View1", {
        onInit: function() {

        },
        onPress: function() {
            console.log("**** Test Plugin ****");
        }
    });
});