    window.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    var bodyRect = document.body.getBoundingClientRect(),
    elemRect = navbar.getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top;
    if(delta==1 && offset>=0){
     window.scroll({
     top: 2000,
     left: 0,
     behavior: 'smooth'
      });}
    else if(delta==-1 && offset>0){
    window.scroll({
      top: -2000,
      left: 0,
      behavior: 'smooth'
       });
  }
});