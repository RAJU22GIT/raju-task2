sap.ui.define([
    "sap/ui/core/mvc/Controller",
    
], (Controller) => {
    "use strict";

    return Controller.extend("demo.ladera.expandentity.controller.OrderDetails", {
       
        onInit() {
            
        },
       
        formatDate: function (sDate) {
            if (!sDate) return "";
            const oDate = new Date(sDate);
            const day = oDate.getDate().toString().padStart(2, "0");
            const month = (oDate.getMonth() + 1).toString().padStart(2, "0");
            const year = oDate.getFullYear();
            return  `${day}-${month}-${year}`;
        },
        onshowNav(evt) {
            var oselected = evt.getSource().getBindingContext().getProperty().OrderID;
            var odetailRouter = sap.ui.core.UIComponent.getRouterFor(this);
            odetailRouter.navTo("RouteOrderDetails1",
                {OrderId : oselected}

            );

        }
    });
});