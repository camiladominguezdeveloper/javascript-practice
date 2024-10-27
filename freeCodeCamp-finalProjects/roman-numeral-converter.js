function convertToRoman(num) {

  let arrNums = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

  /*función que toma un número y devuelve el índice del mayor arábico que es menor o igual que el*/
  function indNum(val){
    let mapeo = arrNums.map(x=> val - x).map(x=>   x>=0);
    return mapeo.indexOf(true);
  };

/*función que toma el índice del arábico y devuelve el número romano*/
  function indaRom(num){
    switch(num){
      case 0:
      return "M";
      break;
      case 1:
      return "CM";
      break;
      case 2:
      return "D";
      break;
      case 3:
      return "CD";
      break;
      case 4:
      return "C";
      break;
      case 5:
      return "XC";
      break;
      case 6:
      return "L";
      break;
      case 7:
      return "XL";
      break;
      case 8:
      return "X";
      break;
      case 9:
      return "IX";
      break;
      case 10:
      return "V";
      break;
      case 11:
      return "IV";
      break;
      case 12:
      return "I";
      break;
    }
  };

/*función que toma un número arábico y devuelve el mayor número romano menor que él*/
function arToRom(n){
  return indaRom(indNum(n));
};

let sobrante = num;
let romano = "";
while(sobrante!=0){
  romano = romano + arToRom(sobrante);
  sobrante = sobrante - arrNums[indNum(sobrante)];
};
 return romano;
}

convertToRoman(36);