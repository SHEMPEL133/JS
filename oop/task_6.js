function isSantaClausable(obj) {

  
  if(obj.sayHoHoHo === undefined) {
    return false;
  }
  
  if(obj.distributeGifts === undefined){
    return false;
  }
  
  if(obj.goDownTheChimney === undefined){
    return false;
  }
  
  return true;
}