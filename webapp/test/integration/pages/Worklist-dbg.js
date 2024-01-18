sap.ui.define(["sap/ui/test/Opa5","sap/ui/test/actions/Press","sap/ui/test/actions/EnterText","sap/ui/test/matchers/AggregationLengthEquals","sap/ui/test/matchers/AggregationFilled","sap/ui/test/matchers/PropertyStrictEquals","hcm/ux/hapv4/test/integration/pages/Common","hcm/ux/hapv4/test/integration/pages/shareOptions"],function(e,t,i,r,s,n,a,o){"use strict";var h="Worklist",u="table",c="searchField",l="*#-Q@@||";function g(e){var t=e[0],i=e[1],r=t.getItems();if(r.length===0){return false}return r.every(function(e){return e.getCells()[0].getTitle().indexOf(i.getValue())!==-1})}function m(e){var t=e.position;return{id:u,viewName:h,matchers:function(e){return e.getItems()[t]},actions:e.actions,success:e.success,errorMessage:"Table in view '"+h+"' does not contain an Item at position '"+t+"'"}}e.createPageObjects({onTheWorklistPage:{baseClass:a,actions:jQuery.extend({iPressATableItemAtPosition:function(e){return this.waitFor(m({position:e,actions:new t}))},iRememberTheItemAtPosition:function(e){return this.waitFor(m({position:e,success:function(e){var t=e.getBindingContext();this.getContext().currentItem={bindingPath:t.getPath(),id:t.getProperty("AppraisalId"),name:t.getProperty("AppraisalName")}}}))},iPressOnMoreData:function(){return this.waitFor({id:u,viewName:h,matchers:function(e){return!!e.$("trigger").length},actions:function(e){e.$("trigger").trigger("tap")},errorMessage:"The Table does not have a trigger"})},iWaitUntilTheTableIsLoaded:function(){return this.waitFor({id:u,viewName:h,matchers:[new s({name:"items"})],errorMessage:"The Table has not been loaded"})},iWaitUntilTheListIsNotVisible:function(){return this.waitFor({id:u,viewName:h,visible:false,matchers:function(e){return!e.$().is(":visible")},errorMessage:"The Table is still visible"})},iSearchForTheFirstObject:function(){var e;return this.waitFor({id:u,viewName:h,matchers:new s({name:"items"}),success:function(t){e=t.getItems()[0].getCells()[0].getTitle();this.iSearchForValue(e);this.waitFor({id:[u,c],viewName:h,check:g,errorMessage:"Did not find any table entries or too many while trying to search for the first object."})},errorMessage:"Did not find table entries while trying to search for the first object."})},iSearchForValueWithActions:function(e){return this.waitFor({id:c,viewName:h,actions:e,errorMessage:"Failed to find search field in Worklist view.'"})},iSearchForValue:function(e){return this.iSearchForValueWithActions([new i({text:e}),new t])},iTypeSomethingInTheSearchThatCannotBeFoundAndTriggerRefresh:function(){var e=function(e){var t=jQuery.Event("touchend");t.originalEvent={refreshButtonPressed:true,id:e.getId()};t.target=e;t.srcElement=e;jQuery.extend(t,t.originalEvent);e.fireSearch(t)};return this.iSearchForValueWithActions([new i({text:l}),e])},iClearTheSearch:function(){return this.iSearchForValueWithActions([new i({text:""}),new t])},iSearchForSomethingWithNoResults:function(){return this.iSearchForValueWithActions([new i({text:l}),new t])}},o.createActions(h)),assertions:jQuery.extend({iShouldSeeTheTable:function(){return this.waitFor({id:u,viewName:h,success:function(t){e.assert.ok(t,"Found the object Table")},errorMessage:"Can't see the master Table."})},theTableShowsOnlyObjectsWithTheSearchStringInTheirTitle:function(){this.waitFor({id:[u,c],viewName:h,check:g,success:function(){e.assert.ok(true,"Every item did contain the title")},errorMessage:"The table did not have items"})},theTableHasEntries:function(){return this.waitFor({viewName:h,id:u,matchers:new s({name:"items"}),success:function(){e.assert.ok(true,"The table has entries")},errorMessage:"The table had no entries"})},theTableShouldHaveAllEntries:function(){var t,i;this.waitFor(this.createAWaitForAnEntitySet({entitySet:"DocumentListSet",success:function(e){t=e}}));return this.waitFor({id:u,viewName:h,matchers:function(e){i=Math.min(e.getGrowingThreshold(),t.length);return new r({name:"items",length:i}).isMatching(e)},success:function(t){e.assert.strictEqual(t.getItems().length,i,"The growing Table has "+i+" items")},errorMessage:"Table does not have all entries."})},theTitleShouldDisplayTheTotalAmountOfItems:function(){return this.waitFor({id:u,viewName:h,matchers:new s({name:"items"}),success:function(t){var i=t.getBinding("items").getLength();this.waitFor({id:"tableHeader",viewName:h,matchers:function(e){var t=e.getModel("i18n").getResourceBundle().getText("worklistTableTitleCount",[i]);return new n({name:"text",value:t}).isMatching(e)},success:function(){e.assert.ok(true,"The Page has a title containing the number "+i)},errorMessage:"The Page's header does not container the number of items "+i})},errorMessage:"The table has no items."})},theTableShouldHaveTheDoubleAmountOfInitialEntries:function(){var t;return this.waitFor({id:u,viewName:h,matchers:function(e){t=e.getGrowingThreshold()*2;return new r({name:"items",length:t}).isMatching(e)},success:function(){e.assert.ok(true,"The growing Table had the double amount: "+t+" of entries")},errorMessage:"Table does not have the double amount of entries."})},theTableShouldContainOnlyFormattedUnitNumbers:function(){return this.theUnitNumbersShouldHaveTwoDecimals("sap.m.ObjectNumber",h,"Object numbers are properly formatted","Table has no entries which can be checked for their formatting")},iShouldSeeTheWorklistViewsBusyIndicator:function(){return this.waitFor({id:"page",viewName:h,success:function(t){e.assert.ok(t.getParent().getBusy(),"The worklist view is busy")},errorMessage:"The worklist view is not busy"})},iShouldSeeTheWorklistTableBusyIndicator:function(){return this.waitFor({id:"table",viewName:h,matchers:function(e){return new n({name:"busy",value:true}).isMatching(e)},success:function(){e.assert.ok(true,"The worklist table is busy")},errorMessage:"The worklist table is not busy"})},iShouldSeeTheNoDataTextForNoSearchResults:function(){return this.waitFor({id:u,viewName:h,success:function(t){e.assert.strictEqual(t.getNoDataText(),t.getModel("i18n").getProperty("worklistNoDataWithSearchText"),"the table should show the no data text for search")},errorMessage:"table does not show the no data text for search"})}},o.createAssertions(h))}})});
//# sourceMappingURL=Worklist-dbg.js.map