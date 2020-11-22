	    //-----------Promena navbara----------------//
    ham=document.getElementById("hamburger");
    sidemeni=document.getElementById("sidemeni")
    var navbar=document.getElementById("navbar");
    navbar.style.transition="0.2s ease";
    addEventListener("scroll",function(){
    var bodyRect = document.body.getBoundingClientRect(),
    elemRect = navbar.getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top;
    if(offset>0)
    navbar.style.background="#000";
    else
        if(offset==0 && sidemeni.style.right=="0px"){
            navbar.style.background="#000";
        }
        else{
        navbar.style.background="transparent";}
        });

	ham.addEventListener("click",meni)
    ham.addEventListener("click",function(){
        var bodyRect = document.body.getBoundingClientRect(),
    elemRect = navbar.getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top;
    if(offset>0)
    navbar.style.background="#000";
    else{
        if(pozicija=document.getElementById("sidemeni").style.right=="0px")
            navbar.style.background="#000";
        else
            navbar.style.background="transparent";
         }
    });
    function meni(){
    	pozicija=document.getElementById("sidemeni").style.right
    	if(pozicija=='0px'){
    		sidemeni.style.right='-100vw';
            ham.getElementsByClassName("ham")[0].style.display="block";
            ham.getElementsByClassName("ham")[1].style.display="none";
    	}
    	else{
    		sidemeni.style.right=0;
             ham.getElementsByClassName("ham")[0].style.display="none";
            ham.getElementsByClassName("ham")[1].style.display="block";
    	}
    }