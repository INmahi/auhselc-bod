
//A program for identifying the members Date of Birth

    var allTr= document.getElementsByTagName('tr');
    var today = [];
    var thisMonth = [];
    var previous = [];
    //get the current date in expected format
    var currentDate = new Date();
    var dd,mm,yyyy;
    dd = currentDate.getDate();
    mm = currentDate.getMonth()+1;
    yyyy = currentDate.getFullYear();
    //get the date
    var finalDate=`${mm}/${dd}`; //date in mm/dd/yyyy format
    //get motnh name
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    var month = monthNames[currentDate.getMonth()];
    var monthfield = document.getElementById('printMonth');
    monthfield.innerText=month+" : ";
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
        var studentName = nameElem.innerText;

        if(compareBod===finalDate){
          nameElem.style.backgroundColor='#f61741';
          nameElem.style.color='White';
          today.push(studentName);

        }
        else{

        }
        // var ff = compareBod.slice(0,2)
        // console.log(ff)
    }
    var todayField = document.getElementById('todaysbday');
    todayField.innerText=today;

// tablinks funtion
    function openPage(pageName, elmnt, color) {
        // Hide all elements with class="tabcontent" by default */
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }

        // Remove the background color of all tablinks/buttons
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].style.backgroundColor = "";
        }

        // Show the specific tab content
        document.getElementById(pageName).style.display = "block";

        // Add the specific color to the button used to open the tab content
        elmnt.style.backgroundColor = color;
      }

      // Get the element with id="defaultOpen" and click on it
      document.getElementById("defaultOpen").click();
