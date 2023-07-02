//value for slider
function charlength(){
  let range=document.getElementById("range");
  let characterlength=document.getElementById("char-len");
  characterlength.innerHTML=range.value
  characterlength.style.color='#A4FFAF';
  characterlength.style.fontFamily='Monospaceland';
  characterlength.style.fontSize='25px';
}
charlength();

//function for generating password
function generatepassword(){
  const uppercaseChecked=document.getElementById("uppercase").checked;
  const lowercaseChecked=document.getElementById("lowercase").checked;
  const numbersChecked=document.getElementById("numbers").checked;
  const symbolsChecked=document.getElementById("symbols").checked;
  const slider=document.getElementById("range").value;

  let password='';
  const uppercaseChar='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChar='abcdefghijklmnopqrstuvwxyz';
  const numberChar='0123456789';
  const symbolChar='!@#$%^&*()_-+=<>?';

  if(uppercaseChecked){
    password+=uppercaseChar;
  }
  if(lowercaseChecked){
    password+=lowercaseChar;
  }
  if(numbersChecked){
    password+=numberChar;
  }
  if(symbolsChecked){
    password+=symbolChar;
  }

  let generated_pass='';
  for(let i=0;i<slider;i++)
  {
    generated_pass+=password.charAt(Math.floor(Math.random()*password.length));
  }
  document.getElementById('password').innerHTML=generated_pass;
}




  
