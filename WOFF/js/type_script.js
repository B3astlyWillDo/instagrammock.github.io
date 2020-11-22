var slike=['images/ansambl.jpg','images/ansambl2.jpg','images/ansambl3.jpg']
    //------------------Linkovi------------------//
    var pozadina=document.getElementById("image-holder");
    //------------Promena pozadine--------------//
	var i=0;
	function promena(){
		if(i<3){
			pozadina.style.backgroundImage="url("+slike[i]+")";
		   i++;}
        else{
        	i=0
            pozadina.style.backgroundImage="url("+slike[i]+")";
            i++;}
        setTimeout(promena,3000);
	}
	promena();
	//-----------Ispis slova--------------------//
	var y=0,z=0;
	var reci=['ANSAMBLI','FESTIVALI','GRUPE','OCENE'];
	var recenica=document.getElementById("main-text");
	  function Obrisi(){
  	if(recenica.innerHTML!=""){
  	if(y>=1){
  	    y--;
  	    recenica.innerHTML = reci[z].slice(0,y);
  	    setTimeout(Obrisi,100);
         }
  	else{
         y=0;
      }
      }
      else{
      	if(z<reci.length-1)
      		z++;
      	else
      		z=0;
      	console.log(z);
      	typeWriter();
      }
    }
    function typeWriter() {
    if (y < reci[z].length) {
    recenica.innerHTML += reci[z].charAt(y);
    y++;
    setTimeout(typeWriter, 500);
      }
  else{
  	if(recenica.innerHTML!=""){
  		Obrisi();
  	}
  	else{
  	if(z<reci.length-1){
  		z++;
  	   typeWriter();}
  	else{
  		z=0;
  		typeWriter();
  	 }
  	}
   }
 }
typeWriter();