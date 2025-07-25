/*global QUnit*/

sap.ui.define([
	"rebikeproject2/controller/Loginpage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Loginpage Controller");

	QUnit.test("I should test the Loginpage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
