"use strict";define("dummy/adapters/application",["exports","ember-data/adapters/json-api"],function(e,t){e["default"]=t["default"].extend({namespace:"api"})}),define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,r,a){var i=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:n["default"]}),(0,r["default"])(i,a["default"].modulePrefix),e["default"]=i}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var r=n["default"].APP.name,a=n["default"].APP.version;e["default"]=t["default"].extend({version:a,name:r})}),define("dummy/components/flexi-container",["exports","flexi/components/flexi-container"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/flexi-grid",["exports","flexi/components/flexi-grid"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/flexi-layout",["exports","flexi/components/flexi-layout"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/flexi-sustain",["exports","flexi/components/flexi-sustain"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/history-outlet",["exports","history/components/history-outlet/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/helpers/-inject-layout",["exports","flexi/helpers/-inject-layout"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}}),Object.defineProperty(e,"injectLayout",{enumerable:!0,get:function(){return t.injectLayout}})}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("dummy/initializers/-sustains",["exports","flexi/initializers/-sustains"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function r(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var r,a=n["default"].exportApplicationGlobal;r="string"==typeof a?a:t["default"].String.classify(n["default"].modulePrefix),window[r]||(window[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[r]}}))}}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("dummy/instance-initializers/-sustains",["exports","flexi/instance-initializers/-sustains"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/models/item",["exports","ember-data/model","ember-data/attr"],function(e,t,n){e["default"]=t["default"].extend({title:(0,n["default"])(),description:(0,n["default"])()})}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var r=t["default"].Router.extend({location:n["default"].locationType,rootURL:n["default"].rootURL});r.map(function(){this.route("alpha"),this.route("beta"),this.route("items",function(){this.route("single",{path:"/:id"})})}),e["default"]=r}),define("dummy/routes/alpha/route",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("dummy/routes/alpha/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.6.0-beta.4",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/routes/alpha/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("dummy/routes/application/route",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("dummy/routes/application/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.6.0-beta.4",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/routes/application/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("dummy/routes/beta/route",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("dummy/routes/beta/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.6.0-beta.4",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/routes/beta/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("dummy/routes/index/route",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({redirect:function(){this.transitionTo("items")}})}),define("dummy/routes/items/index/route",["exports","ember"],function(e,t){var n=t["default"].Route;e["default"]=n.extend({model:function(){return this.modelFor("items")}})}),define("dummy/routes/items/index/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.0-beta.4",loc:{source:null,start:{line:6,column:10},end:{line:8,column:10}},moduleName:"dummy/routes/items/index/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("            ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,1,1,n),r},statements:[["content","item.title",["loc",[null,[7,12],[7,26]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.6.0-beta.4",loc:{source:null,start:{line:3,column:4},end:{line:11,column:4}},moduleName:"dummy/routes/items/index/template.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("box");e.setAttribute(n,"class","item-card flexi-fit");var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createElement("h2"),a=e.createTextNode("\n");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("        ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(e.childAt(t,[1,1]),1,1),r},statements:[["block","link-to",["items.single",["get","item.id",["loc",[null,[6,36],[6,43]]]]],[],0,null,["loc",[null,[6,10],[8,22]]]]],locals:["item"],templates:[e]}}();return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.6.0-beta.4",loc:{source:null,start:{line:1,column:0},end:{line:14,column:0}},moduleName:"dummy/routes/items/index/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("page");e.setAttribute(n,"class","bg-dark");var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("box");e.setAttribute(r,"class","flexi-fill");var a=e.createTextNode("\n");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("  ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(e.childAt(t,[0,1]),1,1),r},statements:[["block","each",[["get","model",["loc",[null,[3,12],[3,17]]]]],[],0,null,["loc",[null,[3,4],[11,13]]]]],locals:[],templates:[e]}}())}),define("dummy/routes/items/route",["exports","ember"],function(e,t){var n=t["default"].inject,r=t["default"].Route;e["default"]=r.extend({history:n.service("history"),

  model:function(){
    if (!window._hasLoadedItems) {
      window._hasLoadedItems = true;
      this.get('store').pushPayload(window.mockedItems);
    }
    return this.get("history"),
      this.get("store").peekAll("item")
  },


  setupController:function(e,t){this._super(e,t),e.set("currentRouteName",this.routeName)}})}),define("dummy/routes/items/single/route",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(e){return this.get("store").findRecord("item",e.id)}})}),define("dummy/routes/items/single/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.6.0-beta.4",loc:{source:null,start:{line:1,column:0},end:{line:6,column:7}},moduleName:"dummy/routes/items/single/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("page");e.setAttribute(n,"class","bg-green");var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("h2"),a=e.createComment("");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("p"),a=e.createTextNode("\n    ");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("\n  ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n");return e.appendChild(n,r),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[0]),a=new Array(2);return a[0]=e.createMorphAt(e.childAt(r,[1]),0,0),a[1]=e.createMorphAt(e.childAt(r,[3]),1,1),a},statements:[["content","model.title",["loc",[null,[2,6],[2,21]]]],["content","model.description",["loc",[null,[4,4],[4,25]]]]],locals:[],templates:[]}}())}),define("dummy/routes/items/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.0-beta.4",loc:{source:null,start:{line:1,column:0},end:{line:3,column:9}},moduleName:"dummy/routes/items/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("screen"),r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n");return e.appendChild(n,r),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(e.childAt(t,[0]),1,1),r},statements:[["inline","history-outlet",[],["routeForOutlet",["subexpr","@mut",[["get","currentRouteName",["loc",[null,[2,34],[2,50]]]]],[],[]]],["loc",[null,[2,2],[2,52]]]]],locals:[],templates:[]}}())}),define("dummy/serializers/application",["exports","ember-data/serializers/json-api"],function(e,t){e["default"]=t["default"].extend({})}),define("dummy/services/-sustains",["exports","flexi/services/-sustains"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/services/device/layout",["exports","dummy/config/environment","flexi/services/device/layout"],function(e,t,n){e["default"]=n["default"].extend({breakpoints:t["default"].flexi.breakpoints})}),define("dummy/services/history",["exports","history/services/history"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",r=e["default"].$('meta[name="'+n+'"]').attr("content"),a=JSON.parse(unescape(r));return{"default":a}}catch(i){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app")["default"].create({name:"history",version:"0.0.0+eb7c63c8"});
