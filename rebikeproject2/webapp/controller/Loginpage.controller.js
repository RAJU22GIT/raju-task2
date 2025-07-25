sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("rebikeproject2.controller.Loginpage", {
        onInit() {
        },
        onShowLogin: function () {
            this.byId("loginForm").setVisible(true);
          },
          
          onTogglePassword: function (oEvent) {
            const bSelected = oEvent.getParameter("selected");
            const oPwdInput = this.byId("passwordInput");
            oPwdInput.setType(bSelected ? "Text" : "Password");
          },
          
          onLoginPress: function () {
            const username = this.byId("usernameInput").getValue();
            const password = this.byId("passwordInput").getValue();
          
            // Example validation (basic)
            if (!username || !password) {
              MessageToast.show("Please enter both username and password.");
              return;
            }
          
            MessageToast.show("Logging in...");
            // Continue to navigate or authenticate
          }
          
    });
});