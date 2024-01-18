sap.ui.define(["hcm/ux/hapv4/controller/Worklist.controller","hcm/ux/hapv4/controller/BaseController","sap/ui/base/ManagedObject","test/unit/helper/FakeI18nModel","sap/ui/thirdparty/sinon","sap/ui/thirdparty/sinon-qunit"],function(t,o,e,i){"use strict";QUnit.module("Table busy indicator delay",{beforeEach:function(){this.oWorklistController=new t;this.oTableStub=new e;this.oTableStub.getBusyIndicatorDelay=sinon.stub();this.oViewStub=new e;this.oComponentStub=new e;this.oComponentStub.setModel(new i,"i18n");sinon.stub(this.oWorklistController,"getOwnerComponent").returns(this.oComponentStub);sinon.stub(this.oWorklistController,"getView").returns(this.oViewStub);sinon.stub(this.oWorklistController,"byId").returns(this.oTableStub)},afterEach:function(){this.oWorklistController.destroy();this.oTableStub.destroy();this.oViewStub.destroy();this.oComponentStub.destroy()}});QUnit.test("Should set the initial busyindicator delay to 0",function(t){this.oWorklistController.onInit();t.strictEqual(this.oWorklistController.getModel("worklistView").getData().tableBusyDelay,0,"The original busy delay was restored")});QUnit.test("Should reset the busy indicator to the original one after the first request completed",function(t){var o=1;this.oTableStub.getBusyIndicatorDelay.returns(o);this.oWorklistController.onInit();this.oTableStub.fireEvent("updateFinished");t.strictEqual(this.oWorklistController.getModel("worklistView").getData().tableBusyDelay,o,"The original busy delay was restored")})});
//# sourceMappingURL=Worklist.controller.js.map