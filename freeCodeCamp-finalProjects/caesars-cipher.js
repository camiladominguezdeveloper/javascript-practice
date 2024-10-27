function rot13(str) {
    let arr = [];
    for(let i = 0; i<str.length;i++){
      arr.push(str.charCodeAt(i))
    };
    arr = arr.map(x=>{
      if(x>=65&&x<=90){
        if(x<=77){return x+13}else{
          return x+13-90+64;
        };
      }else{return x}
    });
    let newStr = String.fromCharCode(...arr);
    return newStr;
  }
  
  rot13("SERR PBQR PNZC");