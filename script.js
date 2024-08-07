let btn=document.getElementById('calculate');
btn.addEventListener('click',()=>{
    console.log("Btn")
    let result=document.getElementById('showdata');
    let height=document.getElementById('height').value;
    let weight=document.getElementById('weight').value;
    if(height=="" || weight==""){
         result.innerHTML=`<p>Please Fill All Detail</p>`
    }
    else{
        height=parseFloat(height);
        weight=parseFloat(weight);
        console.log(height,weight)
        let bmi=(weight /((height*height)/10000)).toFixed(2);
        console.log(bmi);
        if(bmi<18.6){
            result.innerHTML=` <img src="underweight.png" alt="">
            <p>UnderWeight ${bmi}</p>`
        }
        else if(bmi>=18.6 && bmi<24.9){
             result.innerHTML=` <img src="normal.png" alt="">
            <p>Normal ${bmi}</p>`
        }
        else{
             result.innerHTML=` <img src="overweight.png" alt="">
            <p>OverWeight ${bmi}</p>`
        }

    }
})