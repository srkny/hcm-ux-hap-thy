sap.ui.define(["sap/ui/test/Opa5"],function(e){"use strict";function t(e,t){var r=jQuery.sap.getResourcePath("hcm/ux/hapv4/app",".html");t=t?"?"+t:"";if(e){e="#AppraisalForms-Display&/"+(e.indexOf("/")===0?e.substring(1):e)}else{e="#AppraisalForms-Display"}return r+t+e}return e.extend("hcm.ux.hapv4.test.integration.pages.Common",{iStartMyApp:function(e){var r;e=e||{};var n=e.delay||50;r="serverDelay="+n;this.iStartMyAppInAFrame(t(e.hash,r))},iLookAtTheScreen:function(){return this},createAWaitForAnEntitySet:function(e){return{success:function(){var t=false,r;this.getMockServer().then(function(n){r=n.getEntitySetData(e.entitySet);t=true});return this.waitFor({check:function(){return t},success:function(){e.success.call(this,r)},errorMessage:"was not able to retireve the entity set "+e.entitySet})}}},getMockServer:function(){return new Promise(function(t){e.getWindow().sap.ui.require(["hcm/ux/hapv4/localService/mockserver"],function(e){t(e.getMockServer())})})},iStartMyAppOnADesktopToTestErrorHandler:function(e){this.iStartMyAppInAFrame(t("",e))},theUnitNumbersShouldHaveTwoDecimals:function(t,r,n,i){var s=/^-?\d+\.\d{2}$/;return this.waitFor({controlType:t,viewName:r,success:function(t){e.assert.ok(t.every(function(e){return s.test(e.getNumber())}),n)},errorMessage:i})}})});
//# sourceMappingURL=Common-dbg.js.map