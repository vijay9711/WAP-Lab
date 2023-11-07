function startCount(from , to) {
  var countInterval = setInterval(()=>{
    if(from < to){
      console.log(from++);
      document.getElementById("count").innerText = from;
    }else{
      clearInterval(countInterval);
    }
  }, 1000);
}