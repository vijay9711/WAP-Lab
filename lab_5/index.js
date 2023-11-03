function sumArr(){
  let arr = [1,2,3,4,5,6];
  addSumOfArr(arr);
}
function addSumOfArr(a){
  let sum = 0;
  a.map(item=>{
    sum += item;
  })
  document.getElementById("sumOfArr").innerText = 'sum of array: ' +a + ' = '+ sum;
}

function getFilterString(){
  let sArr =["US", "Egypt", "India", "Canada", "Europe", "Paris", "London", "Silicon valley"];
  getNewArray(sArr);
}

function getNewArray(sArray){
  let resArr = [];
  sArray.map(item=>{
    if(item.indexOf('a') != -1 && item.length >= 5){
      resArr.push(item);
    }
  })
  document.getElementById('filterArr').innerText = resArr;
}

function concatText(){
  concat('hi', [1,2,3], ['Hello','world']);
}

function concat(s,a1,a2){
  let res = [...s,...a1,...a2];
  document.getElementById('concat').innerText = res;
}