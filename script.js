var dateNow = new Date();
var todayDate = dateNow.getDate();        // get today date and store it.
var todayMonth = dateNow.getMonth() +1;        //get month of today and store it.
var todayYear = dateNow.getFullYear();          // get year of today and store it.


document.getElementById('Calculate').onclick = function abc(){
    let yourname = document.getElementById('yourname').value;       //collect user name
    let userMonth=document.getElementById('month').value;       //collect user selected month
    let userDate=document.getElementById('date').value;        //collect user entered date
    let userYear=document.getElementById('year').value;          //collect user entered year

    //object contain details of months and its index
    let monthcollect ={January:"31",February:"28",March:"31",April:"30",May:"31",June:"30",July:"31",August:"31",September:"30",October:"31",November:"30",December:"31"};
    let monthnumver ={January:"1",February:"2",March:"3",April:"4",May:"5",June:"6",July:"7",August:"8",September:"9",October:"10",November:"11",December:"12"};
    let nuvconvert ={"1":"January","2":"February","3":"March" , "4":"April","5":"May","6":"June","7":"July","8":"August","9":"September","10":"October","11":"November","12":"December"   }
    
    
    // alert you if you type date more than 30 and 31
    //alert  when you entered  upcoming year its suggest you about month details or suggest to refresh page.
    
    if(userDate>monthcollect[userMonth]){
        alert('You selected ' +userMonth+ ' and only ' +monthcollect[userMonth]+ 'days in this Month. Please, Be care full otherwise it gives you negative value or saved result. click "ok" to proceed!!');   
    }

    //take your name and show on screen
    if(yourname ==""){
        document.getElementById('display').innerHTML = "Enter your name ";

    }else{
        document.getElementById('display').innerHTML = yourname;
    }
    
    //check if user not enter any data
    if ( userDate=="" || userMonth=="" ||userYear==""){
        document.getElementById('display').innerHTML = " Type your D.O.B Date/Month/Year properly "
        document.getElementById('display').style.color = 'red';
        document.getElementById('display').style.fontFamily = 'Arial, Helvetica, sans-serif';
    
    }

    //Here it check the user age--

    if(userYear<=todayYear && monthnumver[userMonth]<=todayMonth && userDate<=todayDate ){
        let userShowDa = todayDate-userDate;
        let userShowMo = todayMonth - monthnumver[userMonth];
        let userShowYe = todayYear-userYear;
        
        if(userShowDa ==0 && userShowMo ==0 && userShowYe ==0){
            document.getElementById('display').innerHTML = yourname + " Happy Birthday ";
        }else{
            document.getElementById('display').innerHTML = yourname +" , Your Age is "+userShowYe + " years, " + userShowMo +" Month & " + userShowDa + " day.";
        }

    }else if(userYear<todayYear && monthnumver[userMonth]>todayMonth && userDate>todayDate ){
        let grab = document.getElementById('month').value;
        let add = todayDate + parseInt(monthcollect[grab]) ;
        let userShowDa = add - userDate;
        //console.log(userShowDa);

        let monthy= todayMonth -1
        if ( monthy >= userMonth){
            console.log(monthy-userMonth);    //print stuff in console
        }else{
            monthy +=12;
            let userShowM= monthy - parseInt( monthnumver[userMonth]);
            let sub = todayYear-1;
            let userShowYe = sub - userYear; 
            document.getElementById('display').innerHTML =yourname +" ,Your Age is "+ userShowYe +" years, "+ userShowM +" month & "  + userShowDa + " day";
        }
        
    }else if(monthnumver[userMonth]>todayMonth  && userDate<todayDate){

        let userShowDa = todayDate - userDate;
        let mont= todayMonth;
        if ( mont< monthnumver[userMonth]){
            mont +=12;
            let userShowM= mont - parseInt( monthnumver[userMonth]);
            let sub = todayYear-1;
            let userShowYe = sub - userYear; 
            document.getElementById('display').innerHTML =yourname+ " , Your Age is " +userShowYe +" years, "+ userShowM +" month & "  + userShowDa + " day.";
        }
    }else if(monthnumver[userMonth]<todayMonth  && userDate>todayDate){
        
        let add1 = todayDate + parseInt(monthcollect[ nuvconvert[todayMonth]]);
        let userShowDa = add1 - userDate
        let monthy = todayMonth-1;
        let userShowMo = monthy - monthnumver[userMonth];
        document.getElementById('display').innerHTML = yourname + " , Your Age is " + (todayYear-userYear) + " years, " + userShowMo +" month & " +userShowDa+ "days.";
    
    }else if(todayYear<userYear && todayMonth<=monthcollect[userMonth] || todayMonth>monthcollect[userMonth]){
        document.getElementById('display').innerHTML = " firstly take a Birth on Earth  Thanks!! "
    }else{
        document.getElementById('display').innerHTML = " Fill It Properly!! or refresh "
    }

}









