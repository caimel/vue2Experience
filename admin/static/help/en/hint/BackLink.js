		   var strURL = document.referrer;
         function goBack()
         {
            //window.location.href=strURL;
            window.history.go(-1);  
         }
         
         function BackLink()
         {
		      document.write("<a href=\".\/mainIndex.htm\">[Home]</a>");
            if (strURL.search(/\/hint\//i) > 0)
		      {
		         document.write("&nbsp;&nbsp;<a href=\"javascript:goBack()\;\">[Back]</a>");
		      }
		   }
