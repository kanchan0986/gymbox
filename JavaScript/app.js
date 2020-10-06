//************* Variable Declarations ************//

    ////**** Form Variables ******////

    const modal_Form1 = document.getElementById('join-form1-modal');
    const modal_Form_Next_Button = document.getElementById('button-next-modal');
    const modal_Form_Back1_Button = document.getElementById('button-back1-modal');
    const modal_Form_Back2_Button = document.getElementById('button-back2-modal');
    const modal_Form1_Close_Button = document.getElementById('form1-close-modal');
    const modal_Form2_Close_Button = document.getElementById('form2-close-modal');
    const modal_Form2_PayNow_RadioButton = document.getElementById('pay-now-modal');
    const modal_Form2_PayLater_RadioButton = document.getElementById('pay-later-modal');
    const modal_Pay_Button = document.getElementById('button-pay-modal');
    const modal_Form_1 = document.getElementById('modal-form-1');
    const modal_Form_2 = document.getElementById('modal-form-2');
    
    
   ////**** Validation Variables ******////

   const modal_Input_Name = document.getElementById('name');
   const modal_Input_Email = document.getElementById('email');
   const modal_Input_Mobile = document.getElementById('mobile');
   const modal_Input_Age = document.getElementById('age-modal-form');
   const modal_Name_Label = document.getElementById('modal-name-label');
   const modal_Email_Label = document.getElementById('modal-email-label');
   const modal_Mobile_Label = document.getElementById('modal-mobile-label');
   const modal_Gender_Validation_Alert = document.getElementsByName("gender-modal-form1");
   const modal_Trial_Session_Validation_Alert = document.getElementsByName("trial-session-modal-form2");
   const modal_Date = document.getElementById("join-modal-date");
   const modal_Shift_Timing_Validation_Alert = document.getElementById("shift-timing-modal");
   const modal_Package_Name_Alert = document.getElementById("package-name-modal");
   const modal_Pay_Validation_Alert = document.getElementsByName("pay-modal-form2");
   const modal_Age_Label = document.getElementById('modal-age-label');
   const modal_Age_Label_Span = document.querySelector('.condition');
   const modal_Form1_Validation_Alert = document.getElementById('alert-modal-form1');
   const modal_Form2_Validation_Alert = document.getElementById('alert-modal-form2');



//************* Event Listeners ************//

   ////**** Functionality Listeners ******////
   
    modal_Form_Next_Button.addEventListener('click', toggle_Form);
    modal_Form_Back1_Button.addEventListener('click', toggle_Form1_Back);
    modal_Form_Back2_Button.addEventListener('click', toggle_Form2_Back);
    modal_Form1_Close_Button.addEventListener('click', close1_And_Reset_Modal);
    modal_Form2_Close_Button.addEventListener('click', close2_And_Reset_Modal);
    modal_Form2_PayLater_RadioButton.addEventListener('click', change_PayButton_To_SubmitButton);
    modal_Form2_PayNow_RadioButton.addEventListener('click', change_SubmitButton_To_PayButton);
    modal_Form1.addEventListener('submit', submit_Modal_Form);


   ////**** Validation Listeners ******////
   
    modal_Input_Name.addEventListener("keyup", input_Name_Validation);
    modal_Input_Email.addEventListener("keyup", input_Email_Validation);
    modal_Input_Mobile.addEventListener("keyup", input_Mobile_Validation);
    modal_Input_Age.addEventListener("keyup", input_Age_Validation);
    modal_Date.addEventListener("change", input_Joining_Date_Validation);
    modal_Shift_Timing_Validation_Alert.addEventListener("change", input_Shift_Timing_Validation);
    modal_Package_Name_Alert.addEventListener("change", input_Select_Package_Validation);
   
   
//************* Functions ************//

    ////**** Form Functions ******////


    function toggle_Form(e){

        if((modal_Input_Name.value.trim() === "" 
        && modal_Input_Email.value.trim() === "" 
        && modal_Input_Mobile.value.trim() === "" 
        && modal_Input_Age.value.trim() === "" 
        && modal_Date.value === "" 
        && modal_Shift_Timing_Validation_Alert.value === "" 
        && modal_Package_Name_Alert.value === "")
        && !(modal_Gender_Validation_Alert[0].checked || modal_Gender_Validation_Alert[1].checked) 
        && !(modal_Trial_Session_Validation_Alert[0].checked || modal_Trial_Session_Validation_Alert[1].checked) 
        && !(modal_Pay_Validation_Alert[0].checked || modal_Pay_Validation_Alert[1].checked))
        {
            error_Border_Color_Master()
            block_Form2("Please fill up the above details");
            error_effect_master();
        }else if(modal_Input_Name.value.trim() === ""){
            error_Border_Color(modal_Input_Name);
            error_effect_reset(modal_Input_Name);
            error_effect(modal_Input_Name);
            block_Form2("Please enter your name");
        }else if(modal_Input_Email.value.trim() === ""){
            error_Border_Color(modal_Input_Email);
            block_Form2("Please enter your email");
            error_effect_reset(modal_Input_Email);
            error_effect(modal_Input_Email);
        }else if(modal_Input_Mobile.value.trim() === ""){
            error_Border_Color(modal_Input_Mobile);
            block_Form2("Please enter your mobile number");
            error_effect_reset(modal_Input_Mobile);
            error_effect(modal_Input_Mobile);
        }else if(!(modal_Gender_Validation_Alert[0].checked || modal_Gender_Validation_Alert[1].checked)){
            block_Form2("Please enter your gender");
        }else{
            unblock_Form2();
            error_effect_master_reset();
        }

    }    

    
    function toggle_Form1_Back(e){
        complete_Reset();
    }

    function toggle_Form2_Back(e){
        modal_Form_2.style.zIndex = 500;
        modal_Form_1.style.zIndex = 501;
        error_effect_master_reset();
    }

    function close1_And_Reset_Modal(e){
        complete_Reset();
    }

    function close2_And_Reset_Modal(e){
        modal_Form_1.style.display = "block";
        modal_Form_2.style.display = "none";
        // modal_Form_2.style.transition = "all ease-in .3s";        
        complete_Reset();
    }

    function change_PayButton_To_SubmitButton(e){
        modal_Pay_Button.innerText = "Submit";
    }

    function change_SubmitButton_To_PayButton(e){
        modal_Pay_Button.innerText = "Pay";
    }


    // modal_Pay_Button.addEventListener('click', function (e) {
    //     if(e.target.innerText === "Pay"){
    //         modal_Pay_Button.setAttribute('href', 'https://google.com/');
    //         modal_Pay_Button.setAttribute('target', '_blank');
    //         location.reload();
    //     }else{
    //         alert('Thank you!');
    //     }
    // });



    function submit_Modal_Form(e){
        
        radio_Button_Validation(modal_Pay_Validation_Alert, "Please select payment time", e);
        
        input_Select_Package_Validation(e);
        
        input_Shift_Timing_Validation(e);
        
        input_Joining_Date_Validation(e);
        
        radio_Button_Validation(modal_Trial_Session_Validation_Alert, "Please select trial session", e);
        
        input_Age_Validation(e);
        
        radio_Button_Validation(modal_Gender_Validation_Alert, "Please select your gender", e);
        
        input_Mobile_Validation(e);

        input_Email_Validation(e);

        input_Name_Validation(e);

    }



    ////**** Validation Functions ******////



    function input_Name_Validation(e){
        const re_Input_Name = /^([A-Za-z]+)[A-Za-z \.\-']+$/;

        if(re_Input_Name.test(modal_Input_Name.value.trim())){
            validation_Success(modal_Input_Name, modal_Name_Label, "Full Name");
        }else{
            validation_Failure(modal_Input_Name, modal_Name_Label, "Please enter a valid name", "Please enter a valid name", e);
            error_effect_reset(modal_Input_Name);
            error_effect(modal_Input_Name);
        }
    }

    function input_Email_Validation(e){
        const re_Input_Email = /^([A-Za-z0-9\-\._]+)@([a-z0-9\-\._]+)\.[A-Za-z]{2,5}$/;

        if(re_Input_Email.test(modal_Input_Email.value.trim())){
            validation_Success(modal_Input_Email, modal_Email_Label, "Email address");
        }else{
            validation_Failure(modal_Input_Email, modal_Email_Label, "Please enter a valid email", "Please enter a valid email", e);
            error_effect_reset(modal_Input_Email);
            error_effect(modal_Input_Email);
        }
    }

    function input_Mobile_Validation(e){
        const re_Input_Mobile = /^\(?\d{3}\)?[-. ]?\d{3}[ -.]?\d{4}$/;

        if(re_Input_Mobile.test(modal_Input_Mobile.value.trim())){
            validation_Success(modal_Input_Mobile, modal_Mobile_Label, "Mobile number");
        }else{
            validation_Failure(modal_Input_Mobile, modal_Mobile_Label, "Please enter a valid mobile number", "Please enter a valid mobile number", e);
            error_effect_reset(modal_Input_Mobile);
            error_effect(modal_Input_Mobile);
        }
    }


    function input_Age_Validation(e){
        const re_Input_Age = /^(1[6-9]|[2-5][0-9]|6[0])$/;

        if(modal_Input_Age.value.trim() === ""){
            error_Border_Color(modal_Input_Age);
            alert_Message_Modal_Form2("Please enter your age", e);
            error_effect_reset(modal_Input_Age);
            error_effect(modal_Input_Age);
        }else if(re_Input_Age.test(modal_Input_Age.value.trim())){
            success_Border_Color(modal_Input_Age);
            modal_Age_Label.innerHTML = "Enter your Age <span class='condition'>(16 - 60)</span>";
            modal_Age_Label.style.color = "#49493f";
        }else{
            error_Border_Color(modal_Input_Age);
            modal_Age_Label.innerHTML = "Please enter age between <span class='condition'>(16 - 60)</span>";
            modal_Age_Label.style.color = "#fb0000";
            alert_Message_Modal_Form2("Please enter a valid age", e);
            error_effect_reset(modal_Input_Age);
            error_effect(modal_Input_Age);
        }
    }


    function input_Joining_Date_Validation(e){
        const selectedDate = modal_Date.value;
        const currentDate = new Date().getTime();

        if(modal_Date.value === ""){
            error_Border_Color(modal_Date);
            alert_Message_Modal_Form2("Please select a joining date", e);
            error_effect_reset(modal_Date);
            error_effect(modal_Date);
        }else if(new Date(selectedDate).getTime() < currentDate){
            error_Border_Color(modal_Date);
            alert_Message_Modal_Form2("Mention any future date as a joining date", e);
            error_effect_reset(modal_Date);
            error_effect(modal_Date);
        }else if(new Date(selectedDate).getTime() >= currentDate){
            success_Border_Color(modal_Date);
        }
    }


    function input_Shift_Timing_Validation(e){
        if(modal_Shift_Timing_Validation_Alert.value === ""){
            error_Border_Color(modal_Shift_Timing_Validation_Alert);
            alert_Message_Modal_Form2("Please select your preferred shift timing", e);
            error_effect_reset(modal_Shift_Timing_Validation_Alert);
            error_effect(modal_Shift_Timing_Validation_Alert);
        }else{
            success_Border_Color(modal_Shift_Timing_Validation_Alert);
        }
    }


    function input_Select_Package_Validation(e){
        if(modal_Package_Name_Alert.value === ""){
            error_Border_Color(modal_Package_Name_Alert);
            alert_Message_Modal_Form2("Please select a package", e);
            error_effect_reset(modal_Package_Name_Alert);
            error_effect(modal_Package_Name_Alert);
        }else{
            success_Border_Color(modal_Package_Name_Alert);
        }
    }


    function radio_Button_Validation(input, err_msg, e){
        if(!(input[0].checked || input[1].checked)){
            alert_Message_Modal_Form2(err_msg, e);
        }
    }




    ////**** Utility Functions ******////
    


    function complete_Reset(){
        modal_Form1.reset();
        modal_Pay_Button.innerText = "Pay";
        modal_Input_Name.style.borderBottom = ".15rem solid transparent";
        modal_Input_Email.style.borderBottom = ".15rem solid transparent";
        modal_Input_Mobile.style.borderBottom = ".15rem solid transparent";
        modal_Input_Age.style.borderBottom = ".15rem solid transparent";
        modal_Date.style.borderBottom = ".15rem solid transparent";
        modal_Shift_Timing_Validation_Alert.style.borderBottom = ".15rem solid transparent";
        modal_Package_Name_Alert.style.borderBottom = ".15rem solid transparent";
        error_effect_master_reset();
    }

    function error_effect_reset(input){
        input.style.animation = "none";
        input.style.transition = "none";
    }

    function error_effect_master_reset(){
        error_effect_reset(modal_Input_Name);
        error_effect_reset(modal_Input_Email);
        error_effect_reset(modal_Input_Mobile);
        error_effect_reset(modal_Input_Age);
        error_effect_reset(modal_Date);
        error_effect_reset(modal_Shift_Timing_Validation_Alert);
        error_effect_reset(modal_Package_Name_Alert);
    }


    function error_Border_Color(input){
        input.style.borderBottom = ".15rem solid #fb0000";
    }

    function error_Border_Color_Master(){
        error_Border_Color(modal_Input_Name);
        error_Border_Color(modal_Input_Email);
        error_Border_Color(modal_Input_Mobile);
        error_Border_Color(modal_Input_Age);
        error_Border_Color(modal_Date);
        error_Border_Color(modal_Shift_Timing_Validation_Alert);
        error_Border_Color(modal_Package_Name_Alert);
    }
    
    function success_Border_Color(input){
        input.style.borderBottom = ".15rem solid #33d633";
    }

    function error_effect(input) {
        input.style.animation = "shake .3s ease-in";
        input.style.transition = "all .3s ease-in";
    }

    function error_effect_master(){
        error_effect(modal_Input_Name);
        error_effect(modal_Input_Email);
        error_effect(modal_Input_Mobile);
        error_effect(modal_Input_Age);
        error_effect(modal_Date);
        error_effect(modal_Shift_Timing_Validation_Alert);
        error_effect(modal_Package_Name_Alert);
    }



    function validation_Success(input, label_Name, label_Text){
        input.style.borderBottom = ".15rem solid #33d633";
        label_Name.innerText = label_Text;
        label_Name.style.color = "#49493f";
    }

      function validation_Failure(input, label_Name, label_Text, message, e){
        input.style.borderBottom = ".15rem solid #fb0000";        
        input.style.animation = "shake .3s ease-in";
        input.style.transition = "all .3s ease-in";        
        label_Name.innerText = label_Text;
        label_Name.style.color = "#fb0000";
        alert_Message_Modal_Form2(message, e);
    }


    function block_Form2(message){
        modal_Form_1.style.zIndex = 501;
        modal_Form_2.style.zIndex = 500;
        alert_Message_Modal_Form1(message);
    }
    
    function unblock_Form2(){
        modal_Form_1.style.zIndex = 500;
        modal_Form_2.style.display = "block";
        modal_Form_2.style.transition = "all ease-in .3s .1s";
        modal_Form_2.style.zIndex = 501;
    }


    function alert_Message_Modal_Form1(message){
        setTimeout(()=>{
            modal_Form1_Validation_Alert.style.display = "block";
            modal_Form1_Validation_Alert.innerText = `${message}`;
        });
        setTimeout(()=>{
            modal_Form1_Validation_Alert.style.display = "none";
        }, 2500);
    }

    
    function alert_Message_Modal_Form2(message, e){
        setTimeout(()=>{
            modal_Form2_Validation_Alert.style.display = "block";
            modal_Form2_Validation_Alert.innerText = `${message}`;
        });
        setTimeout(()=>{
            modal_Form2_Validation_Alert.style.display = "none";
        }, 2500);

        e.preventDefault();
    }


