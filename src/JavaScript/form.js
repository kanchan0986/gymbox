//************* Variable Declarations ************//

    ////**** Form Variables ******////

    const join_Form1 = document.getElementById('join-form1-join');
    const join_Form_Next_Button = document.getElementById('button-next-join');
    const join_Form_Back1_Button = document.getElementById('button-back1-join');
    const join_Form_Back2_Button = document.getElementById('button-back2-join');
    const join_Form2_Close_Button = document.getElementById('form2-close-join');
    const join_Form2_Close_Resp_Button = document.getElementById('form2-close-join-resp');
    const join_Form2_PayNow_RadioButton = document.getElementById('pay-now-join');
    const join_Form2_PayLater_RadioButton = document.getElementById('pay-later-join');
    const join_Pay_Button = document.getElementById('button-pay-join');
    const join_Form_1 = document.getElementById('join-form-1');
    const join_Form_2 = document.getElementById('join-form-2');
    
    
   ////**** Validation Variables ******////

   const join_Input_Name = document.getElementById('name-join');
   const join_Input_Email = document.getElementById('email-join');
   const join_Input_Mobile = document.getElementById('mobile-join');
   const join_Input_Age = document.getElementById('age-join-form');
   const join_Name_Label = document.getElementById('join-name-label');
   const join_Email_Label = document.getElementById('join-email-label');
   const join_Mobile_Label = document.getElementById('join-mobile-label');
   const join_Gender_Validation_Alert = document.getElementsByName("gender-join-form1");
   const join_Trial_Session_Validation_Alert = document.getElementsByName("trial-session-join-form2");
   const join_Date = document.getElementById("join-join-date");
   const join_Shift_Timing_Validation_Alert = document.getElementById("shift-timing-join");
   const join_Package_Name_Alert = document.getElementById("package-name-join");
   const join_Pay_Validation_Alert = document.getElementsByName("pay-join-form2");
   const join_Age_Label = document.getElementById('join-age-label');
   const join_Age_Label_Span = document.querySelector('.condition');
   const join_Form1_Validation_Alert = document.getElementById('alert-join-form1');
   const join_Form2_Validation_Alert = document.getElementById('alert-join-form2');



//************* Event Listeners ************//

   ////**** Functionality Listeners ******////
   
    join_Form_Next_Button.addEventListener('click', toggle_Form_join);
    join_Form_Back1_Button.addEventListener('click', toggle_Form1_Back_join);
    join_Form_Back2_Button.addEventListener('click', toggle_Form2_Back_join);
    join_Form2_Close_Button.addEventListener('click', close2_And_Reset_join);
    join_Form2_Close_Resp_Button.addEventListener('click', close2_And_Reset_join);
    join_Form2_PayLater_RadioButton.addEventListener('click', change_PayButton_To_SubmitButton_join);
    join_Form2_PayNow_RadioButton.addEventListener('click', change_SubmitButton_To_PayButton_join);
    join_Form1.addEventListener('submit', submit_join_Form_join);


   ////**** Validation Listeners ******////
   
    join_Input_Name.addEventListener("keyup", input_Name_Validation_join);
    join_Input_Email.addEventListener("keyup", input_Email_Validation_join);
    join_Input_Mobile.addEventListener("keyup", input_Mobile_Validation_join);
    join_Input_Age.addEventListener("keyup", input_Age_Validation_join);
    join_Date.addEventListener("change", input_Joining_Date_Validation_join);
    join_Shift_Timing_Validation_Alert.addEventListener("change", input_Shift_Timing_Validation_join);
    join_Package_Name_Alert.addEventListener("change", input_Select_Package_Validation_join);
   
   
//************* Functions ************//

    ////**** Form Functions ******////


    function toggle_Form_join(e){

        if((join_Input_Name.value.trim() === "" 
        && join_Input_Email.value.trim() === "" 
        && join_Input_Mobile.value.trim() === "" 
        && join_Input_Age.value.trim() === "" 
        && join_Date.value === "" 
        && join_Shift_Timing_Validation_Alert.value === "" 
        && join_Package_Name_Alert.value === "")
        && !(join_Gender_Validation_Alert[0].checked || join_Gender_Validation_Alert[1].checked) 
        && !(join_Trial_Session_Validation_Alert[0].checked || join_Trial_Session_Validation_Alert[1].checked) 
        && !(join_Pay_Validation_Alert[0].checked || join_Pay_Validation_Alert[1].checked))
        {
            error_Border_Color_Master_join()
            hide_Form2("Please fill up the above details");
            error_effect_master_join();
        }else if(join_Input_Name.value.trim() === ""){
            error_Border_Color_join(join_Input_Name);
            error_effect_reset_join(join_Input_Name);
            error_effect_join(join_Input_Name);
            hide_Form2("Please enter your name");
        }else if(join_Input_Email.value.trim() === ""){
            error_Border_Color_join(join_Input_Email);
            hide_Form2("Please enter your email");
            error_effect_reset_join(join_Input_Email);
            error_effect_join(join_Input_Email);
        }else if(join_Input_Mobile.value.trim() === ""){
            error_Border_Color_join(join_Input_Mobile);
            hide_Form2("Please enter your mobile number");
            error_effect_reset_join(join_Input_Mobile);
            error_effect_join(join_Input_Mobile);
        }else if(!(join_Gender_Validation_Alert[0].checked || join_Gender_Validation_Alert[1].checked)){
            hide_Form2("Please enter your gender");
        }else{
            unhide_Form2();
            error_effect_master_reset_join();
        }

    }    

    
    function toggle_Form1_Back_join(e){
        complete_Reset_join();
    }

    function toggle_Form2_Back_join(e){
        join_Form_2.style.display = 'none';
        join_Form_1.style.display = 'block';
        error_effect_master_reset_join();
    }

    function close2_And_Reset_join(e){
        join_Form_1.style.display = "block";
        join_Form_2.style.display = "none";
        // join_Form_2.style.transition = "all ease-in .3s";        
        complete_Reset_join();
    }

    function change_PayButton_To_SubmitButton_join(e){
        join_Pay_Button.innerText = "Submit";
    }

    function change_SubmitButton_To_PayButton_join(e){
        join_Pay_Button.innerText = "Pay";
    }


    // join_Pay_Button.addEventListener('click', function (e) {
    //     if(e.target.innerText === "Pay"){
    //         join_Pay_Button.setAttribute('href', 'https://google.com/');
    //         join_Pay_Button.setAttribute('target', '_blank');
    //         location.reload();
    //     }else{
    //         alert('Thank you!');
    //     }
    // });



    function submit_join_Form_join(e){
        
        radio_Button_Validation_join(join_Pay_Validation_Alert, "Please select payment time", e);
        
        input_Select_Package_Validation_join(e);
        
        input_Shift_Timing_Validation_join(e);
        
        input_Joining_Date_Validation_join(e);
        
        radio_Button_Validation_join(join_Trial_Session_Validation_Alert, "Please select trial session", e);
        
        input_Age_Validation_join(e);
        
        radio_Button_Validation_join(join_Gender_Validation_Alert, "Please select your gender", e);
        
        input_Mobile_Validation_join(e);

        input_Email_Validation_join(e);

        input_Name_Validation_join(e);

    }



    ////**** Validation Functions ******////



    function input_Name_Validation_join(e){
        const re_Input_Name = /^([A-Za-z]+)[A-Za-z \.\-']+$/;

        if(re_Input_Name.test(join_Input_Name.value.trim())){
            validation_Success_join(join_Input_Name, join_Name_Label, "Full Name");
        }else{
            validation_Failure_join(join_Input_Name, join_Name_Label, "Please enter a valid name", "Please enter a valid name", e);
            error_effect_reset_join(join_Input_Name);
            error_effect_join(join_Input_Name);
        }
    }

    function input_Email_Validation_join(e){
        const re_Input_Email = /^([A-Za-z0-9\-\._]+)@([a-z0-9\-\._]+)\.[A-Za-z]{2,5}$/;

        if(re_Input_Email.test(join_Input_Email.value.trim())){
            validation_Success_join(join_Input_Email, join_Email_Label, "Email address");
        }else{
            validation_Failure_join(join_Input_Email, join_Email_Label, "Please enter a valid email", "Please enter a valid email", e);
            error_effect_reset_join(join_Input_Email);
            error_effect_join(join_Input_Email);
        }
    }

    function input_Mobile_Validation_join(e){
        const re_Input_Mobile = /^\(?\d{3}\)?[-. ]?\d{3}[ -.]?\d{4}$/;

        if(re_Input_Mobile.test(join_Input_Mobile.value.trim())){
            validation_Success_join(join_Input_Mobile, join_Mobile_Label, "Mobile number");
        }else{
            validation_Failure_join(join_Input_Mobile, join_Mobile_Label, "Please enter a valid mobile number", "Please enter a valid mobile number", e);
            error_effect_reset_join(join_Input_Mobile);
            error_effect_join(join_Input_Mobile);
        }
    }


    function input_Age_Validation_join(e){
        const re_Input_Age = /^(1[6-9]|[2-5][0-9]|6[0])$/;

        if(join_Input_Age.value.trim() === ""){
            error_Border_Color_join(join_Input_Age);
            alert_Message_join_Form2_join("Please enter your age", e);
            error_effect_reset_join(join_Input_Age);
            error_effect_join(join_Input_Age);
        }else if(re_Input_Age.test(join_Input_Age.value.trim())){
            success_Border_Color_join(join_Input_Age);
            join_Age_Label.innerHTML = "Enter your Age <span class='condition'>(16 - 60)</span>";
            join_Age_Label.style.color = "#49493f";
        }else{
            error_Border_Color_join(join_Input_Age);
            join_Age_Label.innerHTML = "Please enter age between <span class='condition'>(16 - 60)</span>";
            join_Age_Label.style.color = "#fb0000";
            alert_Message_join_Form2_join("Please enter a valid age", e);
            error_effect_reset_join(join_Input_Age);
            error_effect_join(join_Input_Age);
        }
    }


    function input_Joining_Date_Validation_join(e){
        const selectedDate = join_Date.value;
        const currentDate = new Date().getTime();

        if(join_Date.value === ""){
            error_Border_Color_join(join_Date);
            alert_Message_join_Form2_join("Please select a joining date", e);
            error_effect_reset_join(join_Date);
            error_effect_join(join_Date);
        }else if(new Date(selectedDate).getTime() < currentDate){
            error_Border_Color_join(join_Date);
            alert_Message_join_Form2_join("Mention any future date as a joining date", e);
            error_effect_reset_join(join_Date);
            error_effect_join(join_Date);
        }else if(new Date(selectedDate).getTime() >= currentDate){
            success_Border_Color_join(join_Date);
        }
    }


    function input_Shift_Timing_Validation_join(e){
        if(join_Shift_Timing_Validation_Alert.value === ""){
            error_Border_Color_join(join_Shift_Timing_Validation_Alert);
            alert_Message_join_Form2_join("Please select your preferred shift timing", e);
            error_effect_reset_join(join_Shift_Timing_Validation_Alert);
            error_effect_join(join_Shift_Timing_Validation_Alert);
        }else{
            success_Border_Color_join(join_Shift_Timing_Validation_Alert);
        }
    }


    function input_Select_Package_Validation_join(e){
        if(join_Package_Name_Alert.value === ""){
            error_Border_Color_join(join_Package_Name_Alert);
            alert_Message_join_Form2_join("Please select a package", e);
            error_effect_reset_join(join_Package_Name_Alert);
            error_effect_join(join_Package_Name_Alert);
        }else{
            success_Border_Color_join(join_Package_Name_Alert);
        }
    }


    function radio_Button_Validation_join(input, err_msg, e){
        if(!(input[0].checked || input[1].checked)){
            alert_Message_join_Form2_join(err_msg, e);
        }
    }




    ////**** Utility Functions ******////
    


    function complete_Reset_join(){
        join_Form1.reset();
        join_Pay_Button.innerText = "Pay";
        join_Input_Name.style.borderBottom = ".15rem solid transparent";
        join_Input_Email.style.borderBottom = ".15rem solid transparent";
        join_Input_Mobile.style.borderBottom = ".15rem solid transparent";
        join_Input_Age.style.borderBottom = ".15rem solid transparent";
        join_Date.style.borderBottom = ".15rem solid transparent";
        join_Shift_Timing_Validation_Alert.style.borderBottom = ".15rem solid transparent";
        join_Package_Name_Alert.style.borderBottom = ".15rem solid transparent";
        error_effect_master_reset_join();
    }

    function error_effect_reset_join(input){
        input.style.animation = "none";
        input.style.transition = "none";
    }

    function error_effect_master_reset_join(){
        error_effect_reset_join(join_Input_Name);
        error_effect_reset_join(join_Input_Email);
        error_effect_reset_join(join_Input_Mobile);
        error_effect_reset_join(join_Input_Age);
        error_effect_reset_join(join_Date);
        error_effect_reset_join(join_Shift_Timing_Validation_Alert);
        error_effect_reset_join(join_Package_Name_Alert);
    }


    function error_Border_Color_join(input){
        input.style.borderBottom = ".15rem solid #fb0000";
    }

    function error_Border_Color_Master_join(){
        error_Border_Color_join(join_Input_Name);
        error_Border_Color_join(join_Input_Email);
        error_Border_Color_join(join_Input_Mobile);
        error_Border_Color_join(join_Input_Age);
        error_Border_Color_join(join_Date);
        error_Border_Color_join(join_Shift_Timing_Validation_Alert);
        error_Border_Color_join(join_Package_Name_Alert);
    }
    
    function success_Border_Color_join(input){
        input.style.borderBottom = ".15rem solid #33d633";
    }

    function error_effect_join(input) {
        input.style.animation = "shake .3s ease-in";
        input.style.transition = "all .3s ease-in";
    }

    function error_effect_master_join(){
        error_effect_join(join_Input_Name);
        error_effect_join(join_Input_Email);
        error_effect_join(join_Input_Mobile);
        error_effect_join(join_Input_Age);
        error_effect_join(join_Date);
        error_effect_join(join_Shift_Timing_Validation_Alert);
        error_effect_join(join_Package_Name_Alert);
    }



    function validation_Success_join(input, label_Name, label_Text){
        input.style.borderBottom = ".15rem solid #33d633";
        label_Name.innerText = label_Text;
        label_Name.style.color = "#49493f";
    }

      function validation_Failure_join(input, label_Name, label_Text, message, e){
        input.style.borderBottom = ".15rem solid #fb0000";        
        input.style.animation = "shake .3s ease-in";
        input.style.transition = "all .3s ease-in";        
        label_Name.innerText = label_Text;
        label_Name.style.color = "#fb0000";
        alert_Message_join_Form2_join(message, e);
    }


    function hide_Form2(message){
        join_Form_1.style.display = 'block';
        join_Form_2.style.display = 'none';
        alert_Message_join_Form1_join(message);
    }
    
    function unhide_Form2(){
        join_Form_1.style.display = 'none';
        join_Form_2.style.display = "block";
        // join_Form_2.style.transition = "all ease-in .3s .1s";
    }


    function alert_Message_join_Form1_join(message){
        setTimeout(()=>{
            join_Form1_Validation_Alert.style.display = "block";
            join_Form1_Validation_Alert.innerText = `${message}`;
        });
        setTimeout(()=>{
            join_Form1_Validation_Alert.style.display = "none";
        }, 2500);
    }

    
    function alert_Message_join_Form2_join(message, e){
        setTimeout(()=>{
            join_Form2_Validation_Alert.style.display = "block";
            join_Form2_Validation_Alert.innerText = `${message}`;
        });
        setTimeout(()=>{
            join_Form2_Validation_Alert.style.display = "none";
        }, 2500);

        e.preventDefault();
    }


