/*global QUnit*/

sap.ui.define([
	"project/controller/Base.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Base Controller");

	QUnit.test("I should test the Base controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
