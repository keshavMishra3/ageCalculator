// step4
let displayMsg=(calculatedYr,calculatedMonth,calculatedDate)=>{
    let para=document.getElementById('msg')
    para.innerText=`You are ${calculatedYr} years ${calculatedMonth} months and ${calculatedDate} days old`
}


// step3
let ageClaculator=(actuallDate,actuallMonth,actuallYear)=>{
    let currDates=new Date()
    let currYear=currDates.getFullYear()
    let currMonth=currDates.getMonth()+1
    let currDate=currDates.getDate();
    let calculatedYear=currYear-actuallYear;
    let calculatedMonth=currMonth-actuallMonth;
    if(calculatedMonth<0){
        calculatedYear--;
        calculatedMonth=calculatedMonth+12;
    }
    
   let calculatedDate=currDate-actuallDate;
   if(calculatedDate<0){
    calculatedMonth--;
    let date=new Date(currYear,currMonth-1,0).getDate();
    
    calculatedDate=calculatedDate+date;
   }
    
      
    
    displayMsg(calculatedYear,calculatedMonth,calculatedDate)
}



// step2
let getDOB=()=>{
    let data=document.getElementById("calender")

    let dob=new Date(data.value)
    let actuallDate=dob.getDate()
    let actuallMonth=dob.getMonth()+1;
    let actuallYear=dob.getFullYear();
    
    ageClaculator(actuallDate,actuallMonth,actuallYear);
   
}
// step 1
let button=document.querySelector("#calButn")
button.addEventListener('click',()=>{
   getDOB();
})