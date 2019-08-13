function createSecretHolder(secret) {
  
  return {

    value: secret,

    getSecret: function(){
      return this.value;
    },
    
    setSecret: function(value){
      this.value = value;
    }
  }
  
}

obj = createSecretHolder(5);
console.log(obj.getSecret());
obj.setSecret(2);
console.log(obj.getSecret());