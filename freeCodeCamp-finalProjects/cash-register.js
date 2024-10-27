function checkCashRegister(price, cash, cid) {

    let change = 0;
    cid.forEach(x=>change += x[1]);
    change = change.toFixed(2);
    let originalChange = change;
    let changeToGive = cash-price;
    let changeGiving = 0;
    let changeGivingArr = [["ONE HUNDRED", 0],["TWENTY", 0],["TEN", 0],["FIVE", 0],["ONE", 0],["QUARTER", 0],["DIME", 0],["NICKEL", 0],["PENNY", 0]];
  
    let registerStatus = {status: "OPEN", change: []}
  
    let penny = [0.01, (cid[0][1]/0.01).toFixed(2), 8];
    let nickel = [0.05, (cid[1][1]/0.05).toFixed(2), 7];
    let dime = [0.1, (cid[2][1]/0.1).toFixed(2), 6];
    let quarter = [0.25, (cid[3][1]/0.25).toFixed(2), 5];
    let dollar = [1, (cid[4][1]).toFixed(2), 4];
    let five = [5, (cid[5][1]/5).toFixed(2), 3];
    let ten = [10, (cid[6][1]/10).toFixed(2), 2];
    let twenty = [20, (cid[7][1]/20).toFixed(2), 1];
    let hundred = [100, (cid[8][1]/100).toFixed(2), 0];
  
    function whatCoinIs(index){
      switch(index){
        case 0:
        return hundred;
        break;
        case 1:
        return twenty;
        break;
        case 2:
        return ten;
        break;
        case 3:
        return five;
        break;
        case 4:
        return dollar;
        break;
        case 5:
        return quarter;
        break;
        case 6:
        return dime;
        break;
        case 7:
        return nickel;
        break;
        case 8:
        return penny;
        break;
      }
    };
  
    function giveChange(coin){
      while(coin[1]>0&&changeGiving<changeToGive){
        changeGiving += coin[0];
        changeGiving = parseFloat(changeGiving.toFixed(2));
        coin[1] -= 1;
        change -= coin[0];
        change = parseFloat(change.toFixed(2));
        changeGivingArr[coin[2]][1] += coin[0];
        changeGivingArr[coin[2]][1] = parseFloat(changeGivingArr[coin[2]][1].toFixed(2));
        };
        if(changeGiving>changeToGive){
          changeGiving -= coin[0];
          changeGiving = parseFloat(changeGiving.toFixed(2));
          coin[1] += 1;
          change += coin[0];
          change = parseFloat(change.toFixed(2));
          changeGivingArr[coin[2]][1] -= coin[0];
          changeGivingArr[coin[2]][1] = parseFloat(changeGivingArr[coin[2]][1].toFixed(2));
        };
    };
    
    let currentCoin = 0;
    while(changeGiving<changeToGive&&currentCoin<9){
      giveChange(whatCoinIs(currentCoin));
      currentCoin += 1;
    };
  
    if(cash-price>originalChange||changeGiving<changeToGive){
      registerStatus.status = "INSUFFICIENT_FUNDS";
      registerStatus.change = [];
    } else if(changeGiving == originalChange){
      registerStatus.status = "CLOSED";
      registerStatus.change = cid;
    } else{
      registerStatus.status = "OPEN";
      changeGivingArr = changeGivingArr.filter(x=> x[1]>0);
      registerStatus.change = changeGivingArr;
    }
    return registerStatus;
  }
  
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);