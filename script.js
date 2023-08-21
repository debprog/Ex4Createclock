function upd(){
  let e=new Date();
  let hr=e.getHours();
  let min=e.getMinutes();
  let sec=e.getSeconds();


  
  let p=document.getElementById("h");
  p.lastChild.textContent=hr+":";
  let q=document.getElementById("m");
  q.lastChild.textContent=min+":";
  let r=document.getElementById("s");
  r.lastChild.textContent=sec;
  console.log(hr);
  
}
setInterval(upd,1000);
