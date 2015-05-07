function BracketMatcher(str) { 

  var openparen = 0;
  var closeparen = 0;
  for(var i = 0; i < str.length; i++) {
    if(str[i] === '(') {
      openparen++;
    }else if(str[i] === ')') {
      if(openparen > 0) {
        openparen--; 
      }else{
        closeparen++; 
        return false;
      }
    }
  }
  return !(openparen !== 0 || closeparen > 0) ; 
}

console.log(BracketMatcher("(hello (world))"));//true
console.log(BracketMatcher("((hello (world))"));//false
console.log(BracketMatcher("(function(){ return 'blah';})()"));//true
