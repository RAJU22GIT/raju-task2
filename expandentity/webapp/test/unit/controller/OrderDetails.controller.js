/*global QUnit*/

sap.ui.define([
	"demo/ladera/expandentity/controller/OrderDetails.controller"
], function (Controller) {
	"use strict";

	QUnit.module("OrderDetails Controller");

	QUnit.test("I should test the OrderDetails controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
