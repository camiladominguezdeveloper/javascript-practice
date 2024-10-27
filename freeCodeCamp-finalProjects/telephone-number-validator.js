function telephoneCheck(str) {
    if(/^\d\d\d-\d\d\d-\d\d\d\d$/.test(str)){
      return true;
    }else if(/^\(\d\d\d\)\d\d\d-\d\d\d\d$/.test(str)){return true}else if(/^\(\d\d\d\) \d\d\d-\d\d\d\d$/.test(str)){return true}else if(/^\d\d\d \d\d\d \d\d\d\d$/.test(str)){return true}else if(/^\d\d\d\d\d\d\d\d\d\d$/.test(str)){return true}else if(/^1 \d\d\d \d\d\d \d\d\d\d$/.test(str)){return true}else if(/^1 \d\d\d-\d\d\d-\d\d\d\d$/.test(str)){return true}else if(/^1 \(\d\d\d\) \d\d\d-\d\d\d\d$/.test(str)){return true}else if(/^1\(\d\d\d\)\d\d\d-\d\d\d\d$/.test(str)){return true}else{return false}
  }
  
  telephoneCheck("555-555-5555");