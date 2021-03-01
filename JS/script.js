<<<<<<< HEAD
var centuary, year, month, day, dayBorn, dayValue;
var weekDay = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

function getDate() {
  var genders = document.getElementsByName("gender");
  if( document.myForm.year.value == "" || document.myForm.year.value.length !=4 || document.myForm.year.value >2100 || document.myForm.year.value <=1900) {
     alert( "Invalid,enter year" );
     document.myForm.year.focus() ;
     return false;
  }
  else if( document.myForm.month.value == "" || isNaN( document.myForm.month.value ) || 
  document.myForm.month.value.length != 2 || document.myForm.month.value > 12  || document.myForm.month.value <= 0){
     alert( "Invalid month: 0-12" );
     document.myForm.month.focus() ;
     return false;
  }
  else if( document.myForm.date.value == "" || isNaN( document.myForm.month.value ) || 
  document.myForm.month.value.length != 2|| document.myForm.date.value > 31 || document.myForm.date.value <= 0) {
     alert( "Invalida day:0-31!" );
     document.myForm.day.focus() ;
     return false;
  }
  else if(genders[0].checked==false && genders[1].checked==false ) {
      alert("Please select a gender:male/female");
      return false;
  }   
  else{
    return true ;
  }
  
}

function dayOfTheYearBorn(){
  let YY=(document.getElementById("year").value);
  let centuary = parseInt(YY.substring(0,2));
  let year= parseInt(YY.substring(2,4));
  let month = parseInt(document.getElementById("month").value);
  let day = parseInt(document.getElementById("date").value);
  dayBorn= parseInt(( ( (centuary/4) -2*centuary-1) + ( (5*year/4) ) + ((26*(month+1)/10) ) + day) %7);
  console.log(dayBorn); 
  return (Math.floor(dayBorn));
=======
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

function getDate() {
  let centuary = parseInt(document.getElementById("centuary").value);
  // console.log(centuary)
  let year = parseInt(document.getElementById("year").value);
  let month = parseInt(document.getElementById("month").value);
  let day = parseInt(document.getElementById("day").value);
  let dayOfTheWeekBorn =parseInt((((centuary / 4) - 2 * centuary - 1) + ((5 * year / 4)) +
    ((26 * (month + 1) / 10)) + day) % 7)
    console.log(dayOfTheWeekBorn)
      return dayOfTheWeekBorn

  }

if (centuary == "") {
  alert("Invalid centuary** clue first two digits of year born")
} else if (year == "") {
  alert("Invalid year** clue last two digits of year born")
} else if (month == "") {
  alert("Invald month ** clue 1-12")
} else if (day == "") {
  alert("invalid date **clue 1-31")

}  
function getValid(){
   var genders = document.getElementsByName("gender");
   if(genders[0].checked==false && genders[1].checked==false ) {
    alert("You must select male or female");
    return false;
    function getGender(){
      dayBorn=dayOfTheWeekBorn;
    if(genders[0].checked == true){
      var gender = "male";
    }
    else if(genders[1].checked == true){
      var gender = "female";
}   
else{
  return false;
>>>>>>> 11839141d30eba179b18307a5a1b3771a2e8cab3
}
    console.log(gender)

<<<<<<< HEAD
function getGender(){
  var genders = document.getElementsByName("gender");
  if(genders[0].checked == true){
    var gender = "male";
  }
  else if(genders[1].checked == true){
    var gender = "female";
  }
  else{
    return false;
  }
  switch(gender){
    case "male":
      if (dayBorn  == 1){
        alert("You were born on " +weekDay[0] + " and Your akan name is " +maleNames[0]+"!");
      }
      else if(dayBorn   == 2){
        alert("You were born on "+weekDay[1] + " and Your akan name is " +maleNames[1]+"!");
      }
      else if(dayBorn   == 3){
        alert("You were born on " +weekDay[2]+ " and Your akan name is " +maleNames[2]+"!");
      }
      else if(dayBorn   == 4){
        alert("You were born on "+weekDay[3] +  " and Your akan name is " +maleNames[3]+"!");
      }
      else if( dayBorn == 5){
        alert("You were born on "+weekDay[4] +  " and Your akan name is " +maleNames[4]+"!");
      }
      else if(dayBorn  == 6){
        alert("You were born on "+weekDay[5] +  " and Your akan name is " +maleNames[5]+"!");
      }
      else if(dayBorn  == -0){
        alert("You were born on "+weekDay[6] + " and Your akan name is " +maleNames[6]+"!");
      }
    break;
    case "female":
      if (dayBorn == 1){
        alert("You were born on "+weekDay[0] + " and Your akan name is  " +femaleNames[0]+"!");
      }
      else if(dayBorn  == 2){
        alert("You were born on " +weekDay[1] + " and Your akan name is " +femaleNames[1]+"!");
      }
      else if(dayBorn   == 3){
        alert("You were born on " +weekDay[2] + " and Your akan name is " +femaleNames[2]+"!");
      }
      else if (dayBorn  == 4){
        alert("You were born on " +weekDay[3] + " and Your akan name is " +femaleNames[3]+"!");
      }
      else if(dayBorn  == 5){
        alert("You were born on " +weekDay[4] + " and Your akan name is " +femaleNames[4]+"!");
      }
      else if(dayBorn   == 6){
        alert("You were born on " +weekDay[5] + " and Your akan name is " + femaleNames[5]+"!");
      }else if(dayBorn  == -0){
        alert("You were born on " +weekDay[6] + " and Your akan name is " +femaleNames[6]+"!");
      }
    break
    default:
          
  }
}
function findName(){
  dayValue = dayOfTheYearBorn();
    getGender();
=======
    switch(gender) {          
      case"male":
    if (dayBorn== 0) {
    alert=("You were born on: " + weekDays[0]);
    alert = ("Your Akun Name is" + maleNames[weekDays]);
  } else if (dayBorn== 1) {
    alert=("You were born on: " + weekDays[1]);
    alert = ("Your Akun Name is" + maleNames[weekDays]);
  } else if(dayBorn== 2) {
    alert=("You were born on: " + weekDays[2]);
    alert = ("Your Akun Name is" + maleNames[weekDays]);
  } else if (dayBorn== 3) {
    alert=("You were born on: " + weekDays[3]);
    alert = ("Your Akun Name is" + maleNames[weekDays]);
  } else if (dayBorn== 4) {
    alert=("You were born on: " + weekDays[4]);
    alert = ("Your Akun Name is" + maleNames[weekDays]);
  } else if ( dayBorn== 5) {
    alert=("You were born on: " + weekDays[5]);
    alert = ("Your Akun Name is" + maleNames[weekDays]);
  } else if (dayBorn== 6) {
    alert=("You were born on: " + weekDays[6]);
    alert = ("Your Akun Name is" + maleNames[weekDays]);
  } else 
  break;
  case"female":
    if (dayBorn== 0){
      alert=("You were born on: " + weekDays[0]);
      alert = ("Your Akun Name is" + femaleNames[weekDays]);
    } else if (dayBorn== 1) {
      alert=("You were born on: " + weekDays[1]);
      alert = ("Your Akun Name is" + femaleNames[weekDays]);
    } else if (dayBorn== 2) {
      alert=("You were born on: " + weekDays[2]);
      alert = ("Your Akun Name is" + femaleNames[weekDays]);
    } else if (dayBorn== 3) {
      alert=("You were born on: " + weekDays[3]);
      alert = ("Your Akun Name is" + femaleNames[weekDays]);
    } else if (dayBorn== 4) {
      alert=("You were born on: " + weekDays[4]);
      alert= ("Your Akun Name is" + femaleNames[weekDays]);
    } else if (dayBorn== 5) {
      alert=("You were born on: " + weekDays[5]);
      alert = ("Your Akun Name is" + femaleNames[weekDays]);
    } else if (dayBorn== 6) {
      alert=("You were born on: " + weekDays[6]);
      alert = ("Your Akun Name is" + femaleNames[weekDays]);
    }
  }  
    // getDate();
    function findName(){
      dayValue = dayOfTheWeekBorn();
      getGender();
  }
}
} 
>>>>>>> 11839141d30eba179b18307a5a1b3771a2e8cab3
}