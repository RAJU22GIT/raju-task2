sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/m/MessageBox",
     "sap/ui/model/Filter",
     "sap/ui/model/FilterOperator"
], (Controller, MessageBox) => {
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
            if(!this.addSort){
                this.addSort = new sap.ui.xmlfragment("project1.view.sort",this);
                this.getView().addDependent(this.addSort);
                }    
                this.addSort.open();  
        },
        onSelectionChange: function(oEvent){
            var oSelectedItem = oEvent.getParameter("selectedItem");
            if (oSelectedItem) {
                this.sKey = oSelectedItem.getKey();
                this.sText = oSelectedItem.getText();
            }
        },
        onOk : function () {
 
            var sortAsc = sap.ui.getCore().byId("Asc").getSelected();
            var sortDesc = sap.ui.getCore().byId("Desc").getSelected();
            if (sortAsc) {
                var oSorterAsc = new sap.ui.model.Sorter(this.sText, false);
                this.getView().byId("EmployeeTable").getBinding("items").sort(oSorterAsc);
                this.addSort.close();
            } else if(sortDesc) {
                var oSorterDesc = new sap.ui.model.Sorter(this.sText, true);
                this.getView().byId("EmployeeTable").getBinding("items").sort(oSorterDesc);
                this.addSort.close();
            }
           
            },
            onCancel : function () {
           
                this.addSort.close();
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