sap.ui.define([
    "hcm/ux/hapv4/controller/BaseController"
], function (BaseController) {
    "use strict";

    return BaseController.extend("hcm.ux.hapv4.controller.NotFound", {

        /**
         * Navigates to the worklist when the link is pressed
         * @public
         */
        onLinkPressed : function () {
            this.getRouter().navTo("worklist");
        }

    });

}
);