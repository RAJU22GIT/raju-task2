/*global QUnit*/

sap.ui.define([
	"projectodata/controller/odataview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("odataview Controller");

	QUnit.test("I should test the odataview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
