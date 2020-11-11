jQuery.sap.declare("ui.Component");

sap.ui.core.UIComponent.extend("ui.Component", {
	
	metadata : {
		rootView : "ui.App",
		name : "Section Print",
    version : "1.0",
		includes : [
      "../style.css"
		],
    dependencies : {
        libs : ["sap.m"]
    }
	}

});