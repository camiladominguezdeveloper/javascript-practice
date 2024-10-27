function palindrome(str) {
  let awna = str.match(/[A-Za-z0-9]+/g);
  let swna = awna.reduce((ac,cur)=>{return ac + cur},"").toLowerCase();
  function pal(s){
    let bo = true;
    if(s.length % 2 == 0){
      for(let i = 0; i<=s.length/2-1;i++){
        if(s[i] !== s[s.length-i-1]){bo = false}
      };
    }else{
      for(let i = 0; i<=(s.length-1)/2-1;i++){
        if(s[i] !== s[s.length-i-1]){bo = false}
      };
    };
    return bo;
  };
  return pal(swna);
};

palindrome("eye");