const form=document.querySelector('form');
const clock=document.querySelector('#clock');

form.addEventListener('submit',function (btn) {
    btn.preventDefault();

    const height = document.querySelector('#height').value
    const weight = document.querySelector('#weight').value
    const result = document.querySelector('#results')

    if(height ==='' || height < 0 || isNaN(height)){
        result.innerHTML="please enter  valid height ";
    }
   if(weight ==='' || weight < 0 || isNaN(weight)){
        result.innerHTML="please enter  valid weight ";
    }

    else{
        const cal =(weight/((height*height)/10000).toFixed(3));
        result.innerHTML=`the is result is: ${cal}`;
    }
})

setInterval(function (){
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000)


