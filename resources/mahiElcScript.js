
//A program for identifying the members Date of Birth

    var allTr= document.getElementsByTagName('tr');
    //get the current date in expected format
    var currentDate = new Date();
    var dd,mm,yyyy;
    dd = currentDate.getDate();
    mm = currentDate.getMonth()+1; 
    yyyy = currentDate.getFullYear();
    //get the date
    var finalDate=`${mm}/${dd}`; //date in mm/dd/yyyy format
    //check BOD
    for(var i=0;i<allTr.length;i++){
        if(i==0||i==1||i==2){
        continue; // the first 3 tr's are useless
        }
        var parentElem = allTr[i];
        var getChilds = allTr[i].children; // all the child elements of tr
        var nameElem = getChilds[2];
        var targetElem = getChilds[5]; //get the td which contains BOD
        var studentBod = targetElem.innerText; //get the bod
        var compareBod=studentBod.slice(0,-5); //make the bod mm/dd as it is easier to compare

        if(compareBod===finalDate){
          nameElem.style.backgroundColor='#f61741';
          nameElem.style.color='White';
        }
        else{
           
        }
    }