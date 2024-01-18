sap.ui.define(["sap/ui/test/Opa5","sap/ui/test/actions/Press","sap/ui/test/matchers/PropertyStrictEquals"],function(e,t,s){"use strict";return{createActions:function(e){return{iPressOnTheShareButton:function(){return this.waitFor({controlType:"sap.m.Button",viewName:e,matchers:new s({name:"icon",value:"sap-icon://action"}),actions:new t,errorMessage:"Did not find the share button"})}}},createAssertions:function(t){return{iShouldSeeTheShareEmailButton:function(){return this.waitFor({viewName:t,controlType:"sap.m.Button",matchers:new s({name:"icon",value:"sap-icon://email"}),success:function(){e.assert.ok(true,"The E-Mail button is visible")},errorMessage:"The E-Mail button was not found"})},iShouldSeeTheShareTileButton:function(){return this.waitFor({id:"shareTile",viewName:t,success:function(){e.assert.ok(true,"The Save as Tile button is visible")},errorMessage:"The Save as Tile  button was not found"})},iShouldSeeTheShareJamButton:function(){return this.waitFor({id:"shareJam",viewName:t,success:function(){e.assert.ok(true,"The Jam share button is visible")},errorMessage:"The Jam share button was not found"})}}}}});
//# sourceMappingURL=shareOptions.js.map