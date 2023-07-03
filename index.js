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

//function for strength bars
function updateStrength() {
  let bar1 = document.getElementById('bar1');
  let bar2 = document.getElementById('bar2');
  let bar3 = document.getElementById('bar3');
  let bar4 = document.getElementById('bar4');

  let checkboxes = document.querySelectorAll('.checks input[type="checkbox"]');
  let checkedCount = 0;

  for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
          checkedCount++;
      }

    if (checkedCount >= 1) {
        bar1.style.backgroundColor = '#A4FFAF';
    }
    else{
      bar1.style.backgroundColor = '#18171F';
    }
    if (checkedCount >= 2) {
        bar2.style.backgroundColor = '#A4FFAF';
    }
    else{
      bar2.style.backgroundColor = '#18171F';
    }
    if (checkedCount >= 3) {
        bar3.style.backgroundColor = '#A4FFAF';
    }
    else{
      bar3.style.backgroundColor = '#18171F';
    }
    if (checkedCount >= 4) {
        bar4.style.backgroundColor = '#A4FFAF';
    }
    else{
      bar4.style.backgroundColor = '#18171F';
  }
}
}

//function for copy
function copyPassword(){
  let copy=document.getElementById("password").innerHTML;
  navigator.clipboard.writeText(copy)
  .then(function() {
      alert("Password copied");
  })
  .catch(function(error) {
      console.error("Failed to copy password: ", error);
  });
}




  
