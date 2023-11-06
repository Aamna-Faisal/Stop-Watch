var min= 0
var second= 0
var millisec=0
 var getmin= document.getElementById('min')
 var getsecond= document.getElementById('sec')
 var getmilli= document.getElementById('msec')
var interval;


function start(){
      interval=setInterval(function(){
            millisec++
            getmilli.innerHTML= millisec
            if(millisec>=100){
                second++
                getsecond.innerHTML=second
                millisec=0
            }
                else if(second>=60){
                      min++
                      getmin.innerHTML=min
                      second=0
                
            }
          },10)
          document.getElementById('sss').disabled= true
}


function stop(){
      clearInterval(interval)
      document.getElementById('sss').disabled= false
}

function reset(){
      min=0
      second=0
      millisec=0
      getmin.innerHTML=min
      getsecond.innerHTML=second
      getmilli.innerHTML=millisec
      
}