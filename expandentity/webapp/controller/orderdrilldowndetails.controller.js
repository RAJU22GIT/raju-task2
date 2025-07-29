sap.ui.define([
    "sap/ui/core/mvc/Controller",
    
], (Controller) => {
    "use strict";

    return Controller.extend("demo.ladera.expandentity.controller.orderdrilldowndetails", {
       
        onInit() {
            sap.ui.core.UIComponent.getRouterFor(this).getRoute("RouteOrderDetails1").attachPatternMatched(this._objPatternMatched,this);
        },
        _objPatternMatched:function(evt){
            var orderId = evt.getParameter("arguments").OrderId;
            this.getOwnerComponent().getModel().read("/Orders",{
                urlParameters:{
                    "$expand":"Customer,Order_Details"
                },
                filters:[new sap.ui.model.Filter("OrderID","EQ",orderId)],
                success:function(oData,results){
                    console.log(oData);
                },
                error:function(oError){
                    MessageBox.error(JSON.parse(oError.responseText).error.message.value);
                }
            })
        },
        onNavHead () {
            var odetailRouter1 = sap.ui.core.UIComponent.getRouterFor(this);
            odetailRouter1.navTo("RouteOrderDetails");
        }
    });
});