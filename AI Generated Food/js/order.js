//PICKUP PATH

function pickup()
	{
         if (document.getElementById("q2v2").style.display != 'none') { 
            document.getElementById("q2v2").style.display="none";
            document.getElementById("menus").style.display="none";
            document.getElementById("submit").style.display="none";
            document.getElementById("radioNumber3").setAttribute('checked', false);
        }
        
		document.getElementById("q2").style.display="block";
	}


function menu()
    {
        document.getElementById("radioNumber3").style.display="none";
		document.getElementById("menus").style.display="block";
	}          
    
function secret()
    {
        document.getElementById("radioNumber3").style.display="block";
		document.getElementById("menus").style.display="none";
	}    


    //DELIVERY PATH
    function delivery()
	{
		if (document.getElementById("q2").style.display != 'none') { 
            document.getElementById("q2").style.display="none";
            document.getElementById("menus").style.display="none";
            document.getElementById("submit").style.display="none";
            document.getElementById("radioNumber3").style.display="none";

        }
        
		document.getElementById("q2v2").style.display="block";
	}

    function freeresp(){
		document.getElementById("free-response").style.display="block";
    }


function why(){
	document.getElementById("whats").style.display="block";
}
    //Opene submit button
    function submit(){
        
        document.getElementById("submit").style.display="block";
    }