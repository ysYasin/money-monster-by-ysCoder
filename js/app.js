// function to provide a valied number
function isItNumber(ElimentId, validetionId){
    const getTheFeildId= document.getElementById(ElimentId);
    const fieldValueString= getTheFeildId.value;
const fieldValue= parseFloat(fieldValueString);
const getValidationId= document.getElementById(validetionId);

if(fieldValue >= 0){
      getValidationId.style.display='none'
      return fieldValue; 
} else{
   getValidationId.style.display='block'
}
}
//function to get balence holder
function balenceHolding(ElimentId, amount){
    const getElimentId= document.getElementById(ElimentId);
    getElimentId.innerText= amount;
    const faleAlert= document.getElementById('false-alertfor-expence');
    if(amount>= 0 || isNaN(amount)=== false){
        faleAlert.style.display='none'
        return getElimentId;
    } else{
        faleAlert.style.display='block'
        getElimentId.innerText='00'
        return getElimentId
    }
}
// fuction to calculate savings
document.getElementById('savings-btn').addEventListener('click', function(){
    const IncomeField=isItNumber('income','false-alertfor-Income');
    const parsentageFeild= isItNumber('savings-input','false-alertfor-parsentage');
    const makeParsentage=( IncomeField/100) *parsentageFeild;
    const fixedAmountToSaves=makeParsentage.toFixed(2)
    // display the result
     balenceHolding('saving-amount',fixedAmountToSaves);
    //
const totalBalence= (IncomeField - makeParsentage).toFixed(2);
    balenceHolding('remaining-balence',totalBalence);
})

// calculating expancess
function ExpensEliments(ElimentId){
const getElimentId= document.getElementById(ElimentId);
const ElimentValueString=getElimentId.value;
const  ElimentValue = parseFloat(ElimentValueString);

const faleAlert= document.getElementById('false-alertfor-expence');
    if(ElimentValue>= 0 ){
        faleAlert.style.display='none'
        return ElimentValue;
    } else{
        faleAlert.style.display='block'
    }

}
function getGalenceHolder(ElimentId){
    const previusBalenceId = document.getElementById(ElimentId);
    const previusBalenceString= previusBalenceId.innerText;
    const previusBalence= parseFloat(previusBalenceString).toFixed(2)
    return previusBalence;
}
document.getElementById('calculete').addEventListener('click', function(){
    const ExpensItem1=ExpensEliments('food'); 
    const ExpensItem2=ExpensEliments('rent'); 
    const ExpensItem3=ExpensEliments('extra'); 
    const totalExpens= ExpensItem1 + ExpensItem2+ ExpensItem3;
    const previusBalence =getGalenceHolder('remaining-balence');
    const newBalence= (previusBalence-totalExpens).toFixed(2);

        if(totalExpens> previusBalence){
            alert('Your Expence is more then your Income, Grow your Incom')
        } else{
            balenceHolding('total-expence',totalExpens);
            balenceHolding('balence',newBalence);
        }
})