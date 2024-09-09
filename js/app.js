let inputDate = document.getElementById("submitBtn");

inputDate.addEventListener("click", function verification(){

    // Gets current Day
    const dateObj = new Date();
    const month = dateObj.getMonth() + 1; // Gets month 1-12 starting from 1
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();

    const todaysDate = month + "/" + day + "/" + year;
    console.log(todaysDate)
   

    // Gets inputed Birthdate
    const inputDate = document.getElementById("birthdate").value; 
    const birthdate = new Date(inputDate);
    const birthmonth = birthdate.getMonth() + 1;
    const daybirth = birthdate.getDate() + 1; // Day keeps displaying -1 than inputed so I put +1
    const birthyear = birthdate.getFullYear();

    const birth = birthmonth + "/" + daybirth + "/" + birthyear;
    console.log(birth)
    //Compares data to determine if valid
    let secretmessage = document.getElementById("Secret");
    let gif1 = document.createElement("img");
    gif1.src = "./img/ofage.gif"

    if (year - birthyear > 18){
        secretmessage.innerHTML = "You're an Adult!"
        document.getElementById("message").appendChild("img")
    }else if (year - birthyear === 18 && month >= birthmonth && day >= daybirth){
        secretmessage.innerHTML = "You're an Adult!"
    }else
        secretmessage.innerHTML = "You're too Young!"
        
}) 