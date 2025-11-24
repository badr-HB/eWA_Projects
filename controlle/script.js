function minus1(){
    const script = document.getElementById('change');
    let number = 97;
    let counter = 1;
    script.innerHTML = `<p id="change">$${number-75}.00</p>`
 
}
function plus1(){
    const script = document.getElementById('change');
    let number = 75;
    let counter = 1;
  
    script.innerHTML = `<p id="change">$${number+75}.00</p>`
    
}
/* NOT WORKING!!!! */