sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/m/MessageBox",
     "sap/ui/model/Filter",
     "sap/ui/model/FilterOperator"
], (Controller, MessageBox, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit() {
        },
        onAfterRendering:function(){
            var that = this;
            this.getOwnerComponent().getModel().read("/Products",{
                // filters:[new sap.ui.model.Filter("ProductID","GE","2")],
                success:function(oData, results){
                    var productModel = new sap.ui.model.json.JSONModel(oData);
                    that.getView().setModel(productModel,"productModel")
                },
                error:function(error){
                    MessageBox.error(JSON.parse(error.responseText).error.message.value);
                }
            });
        },
        onsearchProducts:function(evt){
            var searchString =evt.getParameter("value");
            var filters = new sap.ui.model.Filter("ProductName","Contains",searchString);
            this.getView().byId("EmployeeTable").getBinding("items").filter(filters);
        },
        onSortPress:function(){
            this.sort = !this.sort;
            var sorters = new sap.ui.model.Sorter("ProductName", this.sort);
            this.getView().byId("EmployeeTable").getBinding("items").sort(sorters);
        }

    // onAfterRendering: function () {
    //     this._loadData(""); // Default no filter
    // },
    
    // onLiveSearchProduct: function (oEvent) {
    //     var searchValue = oEvent.getSource().getValue();
    //     this._loadData(searchValue);
    // },
    
    // _loadData: function (searchValue) {
    //     var that = this;
    //     var aFilters = [];
    
    //     if (searchValue) {
    //         aFilters.push(new sap.ui.model.Filter("ProductName", sap.ui.model.FilterOperator.Contains, searchValue));
    //     }
    
    //     this.getOwnerComponent().getModel().read("/Products", {
    //         filters: aFilters,
    //         success: function (oData, results) {
    //             var productModel = new sap.ui.model.json.JSONModel(oData);
    //             that.getView().setModel(productModel, "productModel");
    //         },
    //         error: function (error) {
    //             sap.m.MessageBox.error(JSON.parse(error.responseText).error.message.value);
    //         }
    //     });
    // }



    });
});