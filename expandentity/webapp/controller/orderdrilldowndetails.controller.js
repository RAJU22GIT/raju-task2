sap.ui.define([
    "sap/ui/core/mvc/Controller",
    
], (Controller) => {
    "use strict";

    return Controller.extend("demo.ladera.expandentity.controller.orderdrilldowndetails", {
       
        onInit() {
            sap.ui.core.UIComponent.getRouterFor(this).getRoute("RouteOrderDetails1").attachPatternMatched(this._objPatternMatched,this);
        },
        _objPatternMatched:function(evt){
            var that = this;
            var orderId = evt.getParameter("arguments").OrderId;
            this.getView().setBusy(true);
            this.getOwnerComponent().getModel().read("/Orders",{
                urlParameters:{
                    "$expand":"Customer,Order_Details"
                },
                filters:[new sap.ui.model.Filter("OrderID","EQ",orderId)],
                success:function(oData,results){
                    var model = new sap.ui.model.json.JSONModel(oData.results[0]);
                    that.getView().setModel(model, "model");
                    that.getView().setBusy(false);
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