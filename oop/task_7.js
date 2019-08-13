function nouveau (Constructor, ...args) {
  // Don't forget, unnamed arguments after Constructor may be passed in!
  let temp = Constructor(args);
  if(temp && typeof temp == 'object' || typeof temp == 'function'){
    return temp; 
  }
  let obj = {};
  obj = Object.create(Constructor.prototype);
  Constructor.apply(obj, args);
  return  obj; 
}