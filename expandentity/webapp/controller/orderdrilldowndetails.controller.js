sap.ui.define([
    "sap/ui/core/mvc/Controller",
    
], (Controller) => {
    "use strict";

    return Controller.extend("demo.ladera.expandentity.controller.orderdrilldowndetails", {
       
        onInit() {
        },
        onNavHead () {
            var odetailRouter1 = sap.ui.core.UIComponent.getRouterFor(this);
            odetailRouter1.navTo("RouteOrderDetails");
        }
    });
});