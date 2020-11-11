(function() {
	'use strict';

  sap.ui.controller("ui.App", {
    
    onPrint : function(oEvent) {
        var oTarget = this.getView(),
            sTargetId = oEvent.getSource().data("targetId");
            
        if (sTargetId) {
            oTarget = oTarget.byId(sTargetId);
        }
        
        if (oTarget) {
            var $domTarget = oTarget.$()[0],
                sTargetContent = $domTarget.innerHTML,
                sOriginalContent = document.body.innerHTML;
                
            document.body.innerHTML = sTargetContent;
            window.print();
            document.body.innerHTML = sOriginalContent;
        } else {
            jQuery.sap.log.error("onPrint needs a valid target container [view|data:targetId=\"SID\"]");
        }
    }
    
  });
  
})();