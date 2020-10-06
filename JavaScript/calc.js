//************* Variable Declarations ************//

    const submit_Bmi = document.getElementById('submit_bmi');
    const clear_Bmi = document.getElementById('clear_bmi');
    const result_Bmi = document.getElementById('bmi-result');
    const result_Bmr = document.getElementById('bmr-result');
    const result_Bmi_Caption = document.getElementById('bmi-result-caption');
    const result_Bmi_Suggestion = document.getElementById('bmi-result-sug');
    const submit_Calorie = document.getElementById('submit_calorie');
    const clear_Calorie = document.getElementById('clear_calorie');
    const result_Calorie = document.getElementById('calorie-result');
    const bmi_Calc_Front = document.getElementById('bmi-calc-front');
    const calorie_Calc_Front = document.getElementById('calorie-calc-front');
    const bmi_Calc_Back = document.getElementById('bmi-calc-back');
    const calorie_Calc_Back = document.getElementById('calorie-calc-back');
    const toggle_Btn_Height_Bmi = document.getElementById('toggle__height__bmi');
    const toggle_Btn_Weight_Bmi = document.getElementById('toggle__weight__bmi');
    const toggle_Btn_Height_Calorie = document.getElementById('toggle__height__calorie');
    const toggle_Btn_Weight_Calorie = document.getElementById('toggle__weight__calorie');
    const alert_Bmi = document.getElementById('calculator__alert--bmi');
    const alert_Calorie = document.getElementById('calculator__alert--calorie');



    const input_Age_bmi = document.getElementById('age__bmi');
    const input_Height_bmi = document.getElementById('height__bmi');
    const input_Weight_bmi = document.getElementById('weight__bmi');
    const input_Male_bmi = document.getElementById('male__bmi');
    const input_Female_bmi = document.getElementById('female__bmi');
    const label_Age_bmi = document.getElementById('age__label__bmi');
    const label_Height_bmi = document.getElementById('height__label__bmi');
    const label_Weight_bmi = document.getElementById('weight__label__bmi');


    const input_Age_calorie = document.getElementById('age__calorie');
    const input_Height_calorie = document.getElementById('height__calorie');
    const input_Weight_calorie = document.getElementById('weight__calorie');
    const input_Male_calorie = document.getElementById('male__calorie');
    const input_Female_calorie = document.getElementById('female__calorie');
    const input_Activity_calorie = document.getElementById('activity__calorie');
    const label_Age_calorie = document.getElementById('age__label__calorie');
    const label_Height_calorie = document.getElementById('height__label__calorie');
    const label_Weight_calorie = document.getElementById('weight__label__calorie');
    
    
    const result_Mild_Loss_calorie = document.getElementById('mld_Loss');
    const result_Moderate_Loss_calorie = document.getElementById('mod_Loss');
    const result_Extreme_Loss_calorie = document.getElementById('ext_Loss');
    const result_Mild_Gain_calorie = document.getElementById('mld_Gain');
    const result_Moderate_Gain_calorie = document.getElementById('mod_Gain');
    const result_Extreme_Gain_calorie = document.getElementById('ext_Gain');


//************* Event Listeners ************//


    submit_Bmi.addEventListener('mouseenter', bmi_Button_Color_Check);
    submit_Bmi.addEventListener('click', show_Bmi_Result);
    submit_Calorie.addEventListener('mouseenter', calorie_Button_Color_Check);
    submit_Calorie.addEventListener('click', show_Calorie_Result);
    bmi_Calc_Back.addEventListener('mouseleave', close_Bmi_Result)
    calorie_Calc_Back.addEventListener('mouseleave', close_Calorie_Result)
    clear_Bmi.addEventListener('click', clear_All_Fields_Bmi);
    clear_Calorie.addEventListener('click', clear_All_Fields_Calorie);
    toggle_Btn_Height_Bmi.addEventListener('click', toggle_Height_Bmi);
    toggle_Btn_Weight_Bmi.addEventListener('click', toggle_Weight_Bmi);
    toggle_Btn_Height_Calorie.addEventListener('click', toggle_Height_Calorie);
    toggle_Btn_Weight_Calorie.addEventListener('click', toggle_Weight_Calorie);
 


    input_Age_bmi.addEventListener('keyup', age_Validation_Bmi);
    input_Height_bmi.addEventListener('keyup', height_Validation_Bmi);
    input_Weight_bmi.addEventListener('keyup', weight_Validation_Bmi);
    input_Male_bmi.addEventListener('click', gender_Validation_Bmi);
    input_Female_bmi.addEventListener('click', gender_Validation_Bmi);


    input_Age_calorie.addEventListener('keyup', age_Validation_Calorie);
    input_Height_calorie.addEventListener('keyup', height_Validation_Calorie);
    input_Weight_calorie.addEventListener('keyup', weight_Validation_Calorie);
    input_Male_calorie.addEventListener('click', gender_Validation_Calorie);
    input_Female_calorie.addEventListener('click', gender_Validation_Calorie);
    input_Activity_calorie.addEventListener('click', activity_Level_Validation_Calorie);



//************* Functions ************//



 ////**** Display Functions ******////


 submit_Bmi.classList.add('calculator__button--submit1');
 submit_Calorie.classList.add('calculator__button--submit1');


    function show_Bmi_Result(){
        
        if(
            age_Validation_Bmi()
            &&
            height_Validation_Bmi()
            &&
            weight_Validation_Bmi()
            &&
            gender_Validation_Bmi()
        ){
            card_Front_Showing_Style(bmi_Calc_Front);
            card_Back_Showing_Style(bmi_Calc_Back);
            button_Visiblity_Hidden(submit_Bmi, clear_Bmi);


            ////**** Functionality Functions ******////

            let bmi_Height;
            let bmi_Weight;

            if(toggle_Btn_Height_Bmi.innerText === 'Feets' && toggle_Btn_Weight_Bmi.innerText === 'Pounds'){
               bmi_Height = Math.pow((input_Height_bmi.value.trim() / 100), 2);
               bmi_Weight = input_Weight_bmi.value.trim();
            }else if(toggle_Btn_Height_Bmi.innerText === 'Centimeters' && toggle_Btn_Weight_Bmi.innerText === 'Pounds'){
                bmi_Height = Math.pow(((input_Height_bmi.value.trim() * 30.48) / 100), 2);
                bmi_Weight = input_Weight_bmi.value.trim();
            }else if(toggle_Btn_Height_Bmi.innerText === 'Feets' && toggle_Btn_Weight_Bmi.innerText === 'Kilograms'){
                bmi_Height = Math.pow((input_Height_bmi.value.trim() / 100), 2);
                bmi_Weight = input_Weight_bmi.value.trim() / 2.205;
            }else if(toggle_Btn_Height_Bmi.innerText === 'Centimeters' && toggle_Btn_Weight_Bmi.innerText === 'Kilograms'){
                bmi_Height = Math.pow(((input_Height_bmi.value.trim() * 30.48) / 100), 2);
                bmi_Weight = input_Weight_bmi.value.trim() / 2.205;
            }

            const bmi_Result = bmi_Weight / bmi_Height;
            result_Bmi.innerText = bmi_Result.toFixed(1);

            const ebmi_Weight_Gain = Math.round((18.5 * bmi_Height) - bmi_Weight);
            const ebmi_Weight_Loss = Math.abs(Math.round((25 * bmi_Height) - bmi_Weight));

            const bmr_Men = Math.round((10 * bmi_Weight) + (6.25 * (Math.sqrt(bmi_Height) * 100) ) - (5 * input_Age_bmi.value.trim()) + 5);
            const bmr_Women = Math.round((10 * bmi_Weight) + (6.25 * (Math.sqrt(bmi_Height) * 100) ) - (5 * input_Age_bmi.value.trim()) - 161);

            if(input_Male_bmi.checked){
                result_Bmr.innerHTML = `${bmr_Men}<span class="calculator__result--unit">Calories/Day</span>`;
            }else if(input_Female_bmi.checked){
                result_Bmr.innerHTML = `${bmr_Women}<span class="calculator__result--unit">Calories/Day</span>`;
            }


            if(input_Age_bmi.value.trim() >= 20){
                if(result_Bmi.innerText < 16){
                    result_Bmi.style.color = 'darkred';
                    result_Bmr.style.color = 'darkred';
                    result_Bmi_Caption.style.backgroundColor = 'darkred';
                    result_Bmi_Caption.innerText = 'Severe Thinness';
                    result_Bmi_Suggestion.style.color = 'darkred';
                    result_Bmi_Suggestion.innerText = `Gain ${ebmi_Weight_Gain} kgs to reach a normal weight`;
                }else if(result_Bmi.innerText <= 16.9){
                    result_Bmi.style.color = 'red';
                    result_Bmr.style.color = 'red';
                    result_Bmi_Caption.style.backgroundColor = 'red';
                    result_Bmi_Caption.innerText = 'Moderate Thinness';
                    result_Bmi_Suggestion.style.color = 'red';
                    result_Bmi_Suggestion.innerText = `Gain ${ebmi_Weight_Gain} kgs to reach a normal weight`;
                }else if(result_Bmi.innerText <= 18.4){
                    result_Bmi.style.color = 'orange';
                    result_Bmr.style.color = 'orange';
                    result_Bmi_Caption.style.backgroundColor = 'orange';
                    result_Bmi_Caption.innerText = 'Mild Thinness';
                    result_Bmi_Suggestion.style.color = 'orange';
                    result_Bmi_Suggestion.innerText = `Gain ${ebmi_Weight_Gain} kgs to reach a normal weight`;
                }else if(result_Bmi.innerText <= 25){
                    result_Bmi.style.color = 'green';
                    result_Bmr.style.color = 'green';
                    result_Bmi_Caption.style.backgroundColor = 'green';
                    result_Bmi_Caption.innerText = 'Normal';
                    result_Bmi_Suggestion.style.color = 'green';
                    result_Bmi_Suggestion.innerText = 'Healthy weight for provided height';
                }else if(result_Bmi.innerText <= 29.9){
                    result_Bmi.style.color = 'orange';
                    result_Bmr.style.color = 'orange';
                    result_Bmi_Caption.style.backgroundColor = 'orange';
                    result_Bmi_Caption.innerText = 'Overweight';
                    result_Bmi_Suggestion.style.color = 'orange';
                    result_Bmi_Suggestion.innerText = `Lose ${ebmi_Weight_Loss} kgs to reach a normal weight`;
                }else if(result_Bmi.innerText <= 34.9){
                    result_Bmi.style.color = 'red';
                    result_Bmr.style.color = 'red';
                    result_Bmi_Caption.style.backgroundColor = 'red';
                    result_Bmi_Caption.innerText = 'Obese Class I';
                    result_Bmi_Suggestion.style.color = 'red';
                    result_Bmi_Suggestion.innerText = `Lose ${ebmi_Weight_Loss} kgs to reach a normal weight`;
                }else if(result_Bmi.innerText <= 39.9){
                    result_Bmi.style.color = 'darkred';
                    result_Bmr.style.color = 'darkred';
                    result_Bmi_Caption.style.backgroundColor = 'darkred';
                    result_Bmi_Caption.innerText = 'Obese Class II';
                    result_Bmi_Suggestion.style.color = 'darkred';
                    result_Bmi_Suggestion.innerText = `Lose ${ebmi_Weight_Loss} kgs to reach a normal weight`;
                }else if(result_Bmi.innerText >= 40){
                    result_Bmi.style.color = 'maroon';
                    result_Bmr.style.color = 'maroon';
                    result_Bmi_Caption.style.backgroundColor = 'maroon';
                    result_Bmi_Caption.innerText = 'Obese Class III';
                    result_Bmi_Suggestion.style.color = 'maroon';
                    result_Bmi_Suggestion.innerText = `Lose ${ebmi_Weight_Loss} kgs to reach a normal weight`;
                }
            }


        }else{
            error_Alert(alert_Bmi, 'Please fill up the above details');           
        }
    }

    function bmi_Button_Color_Check(){
        if(
            age_Validation_Bmi()
            &&
            height_Validation_Bmi()
            &&
            weight_Validation_Bmi()
            &&
            gender_Validation_Bmi()
        ){
            submit_Button_Hover_Green(submit_Bmi);
        }else{
            submit_Button_Hover_Red(submit_Bmi);
        }

        clear(input_Age_bmi, input_Height_bmi, input_Weight_bmi);
    }
    
    function close_Bmi_Result(){
        card_Front_Closing_Style(bmi_Calc_Front);
        card_Back_Closing_Style(bmi_Calc_Back);
        button_Visiblity_Shown(submit_Bmi, clear_Bmi);
    }

    function clear_All_Fields_Bmi(){
        clear_Fields(
            input_Age_bmi, 
            input_Height_bmi, 'Enter Your Height In Centimeters', 'Height In Centimeters', 
            input_Weight_bmi, 'Enter Your Weight In Kilograms', 'Height In Kilograms', 
            toggle_Btn_Height_Bmi, 
            toggle_Btn_Weight_Bmi, 
            submit_Bmi
            );
    }



    function show_Calorie_Result(){
        if(
            age_Validation_Calorie()
            &&
            height_Validation_Calorie()
            &&
            weight_Validation_Calorie()
            &&
            gender_Validation_Calorie()
            &&
            activity_Level_Validation_Calorie()
        ){
            card_Front_Showing_Style(calorie_Calc_Front);
            card_Back_Showing_Style(calorie_Calc_Back);
            button_Visiblity_Hidden(submit_Calorie, clear_Calorie);


            ////**** Functionality Functions ******////

            let calorie_Height;
            let calorie_Weight;

            if(toggle_Btn_Height_Calorie.innerText === 'Feets' && toggle_Btn_Weight_Calorie.innerText === 'Pounds'){
                calorie_Height = Math.pow((input_Height_calorie.value.trim() / 100), 2);
                calorie_Weight = input_Weight_calorie.value.trim();
            }else if(toggle_Btn_Height_Calorie.innerText === 'Centimeters' && toggle_Btn_Weight_Calorie.innerText === 'Pounds'){
                calorie_Height = Math.pow(((input_Height_calorie.value.trim() * 30.48) / 100), 2);
                calorie_Weight = input_Weight_calorie.value.trim();
            }else if(toggle_Btn_Height_Calorie.innerText === 'Feets' && toggle_Btn_Weight_Calorie.innerText === 'Kilograms'){
                calorie_Height = Math.pow((input_Height_calorie.value.trim() / 100), 2);
                calorie_Weight = input_Weight_calorie.value.trim() / 2.205;
            }else if(toggle_Btn_Height_Calorie.innerText === 'Centimeters' && toggle_Btn_Weight_Calorie.innerText === 'Kilograms'){
                calorie_Height = Math.pow(((input_Height_calorie.value.trim() * 30.48) / 100), 2);
                calorie_Weight = input_Weight_calorie.value.trim() / 2.205;
            }


            const bmr_Men = Math.round((10 * calorie_Weight) + (6.25 * (Math.sqrt(calorie_Height) * 100) ) - (5 * input_Age_calorie.value.trim()) + 5);
            const bmr_Women = Math.round((10 * calorie_Weight) + (6.25 * (Math.sqrt(calorie_Height) * 100) ) - (5 * input_Age_calorie.value.trim()) - 161);

            if(input_Male_calorie.checked){
                if(input_Activity_calorie.selectedIndex === 1){
                    result_Calorie.innerText = Math.round(bmr_Men * 1.2);
                    result_Mild_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 87/100);
                    result_Moderate_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 75/100);
                    result_Extreme_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 50/100);
                    result_Mild_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 113/100);
                    result_Moderate_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 125/100);
                    result_Extreme_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 150/100);
                }else if(input_Activity_calorie.selectedIndex === 2){
                    result_Calorie.innerText = Math.round(bmr_Men * 1.375);
                    result_Mild_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 89/100);
                    result_Moderate_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 78/100);
                    result_Extreme_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 56/100);
                    result_Mild_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 111/100);
                    result_Moderate_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 122/100);
                    result_Extreme_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 144/100);
                }else if(input_Activity_calorie.selectedIndex === 3){
                    result_Calorie.innerText = Math.round(bmr_Men * 1.465);
                    result_Mild_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 90/100);
                    result_Moderate_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 79/100);
                    result_Extreme_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 59/100);
                    result_Mild_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 110/100);
                    result_Moderate_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 121/100);
                    result_Extreme_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 141/100);
                }else if(input_Activity_calorie.selectedIndex === 4){
                    result_Calorie.innerText = Math.round(bmr_Men * 1.55);
                    result_Mild_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 90/100);
                    result_Moderate_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 81/100);
                    result_Extreme_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 61/100);
                    result_Mild_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 110/100);
                    result_Moderate_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 119/100);
                    result_Extreme_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 139/100);
                }else if(input_Activity_calorie.selectedIndex === 5){
                    result_Calorie.innerText = Math.round(bmr_Men * 1.725);
                    result_Mild_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 91/100);
                    result_Moderate_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 82/100);
                    result_Extreme_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 65/100);
                    result_Mild_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 109/100);
                    result_Moderate_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 118/100);
                    result_Extreme_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 135/100);
                }else if(input_Activity_calorie.selectedIndex === 6){
                    result_Calorie.innerText = Math.round(bmr_Men * 1.9);
                    result_Mild_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 92/100);
                    result_Moderate_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 84/100);
                    result_Extreme_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 68/100);
                    result_Mild_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 108/100);
                    result_Moderate_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 116/100);
                    result_Extreme_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 132/100);
                }
            }else if(input_Female_calorie.checked){
                if(input_Activity_calorie.selectedIndex === 1){
                    result_Calorie.innerText = Math.round(bmr_Women * 1.2);
                    result_Mild_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 87/100);
                    result_Moderate_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 75/100);
                    result_Extreme_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 50/100);
                    result_Mild_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 113/100);
                    result_Moderate_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 125/100);
                    result_Extreme_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 150/100);
                }else if(input_Activity_calorie.selectedIndex === 2){
                    result_Calorie.innerText = Math.round(bmr_Women * 1.375);
                    result_Mild_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 89/100);
                    result_Moderate_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 78/100);
                    result_Extreme_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 56/100);
                    result_Mild_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 111/100);
                    result_Moderate_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 122/100);
                    result_Extreme_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 144/100);
                }else if(input_Activity_calorie.selectedIndex === 3){
                    result_Calorie.innerText = Math.round(bmr_Women * 1.465);
                    result_Mild_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 90/100);
                    result_Moderate_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 79/100);
                    result_Extreme_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 59/100);
                    result_Mild_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 110/100);
                    result_Moderate_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 121/100);
                    result_Extreme_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 141/100);
                }else if(input_Activity_calorie.selectedIndex === 4){
                    result_Calorie.innerText = Math.round(bmr_Women * 1.55);
                    result_Mild_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 90/100);
                    result_Moderate_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 81/100);
                    result_Extreme_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 61/100);
                    result_Mild_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 110/100);
                    result_Moderate_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 119/100);
                    result_Extreme_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 139/100);
                }else if(input_Activity_calorie.selectedIndex === 5){
                    result_Calorie.innerText = Math.round(bmr_Women * 1.725);
                    result_Mild_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 91/100);
                    result_Moderate_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 82/100);
                    result_Extreme_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 65/100);
                    result_Mild_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 109/100);
                    result_Moderate_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 118/100);
                    result_Extreme_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 135/100);
                }else if(input_Activity_calorie.selectedIndex === 6){
                    result_Calorie.innerText = Math.round(bmr_Women * 1.9);
                    result_Mild_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 92/100);
                    result_Moderate_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 84/100);
                    result_Extreme_Loss_calorie.innerText = Math.round(result_Calorie.innerText * 68/100);
                    result_Mild_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 108/100);
                    result_Moderate_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 116/100);
                    result_Extreme_Gain_calorie.innerText = Math.round(result_Calorie.innerText * 132/100);
                }
            }



        }else{
            error_Alert(alert_Calorie, 'Please fill up the above details');
        }

    }


    function calorie_Button_Color_Check(){
        if(
            age_Validation_Calorie()
            &&
            height_Validation_Calorie()
            &&
            weight_Validation_Calorie()
            &&
            gender_Validation_Calorie()
            &&
            activity_Level_Validation_Calorie()
        ){
            submit_Button_Hover_Green(submit_Calorie);
        }else{
            submit_Button_Hover_Red(submit_Calorie);
        }

        clear(input_Age_calorie, input_Height_calorie, input_Weight_calorie);
        input_Activity_calorie.style.borderBottom = '.15rem solid transparent';
        input_Activity_calorie.style.animation = 'none';
        input_Activity_calorie.style.transition = "none";
    }


    function close_Calorie_Result(){
        card_Front_Closing_Style(calorie_Calc_Front);
        card_Back_Closing_Style(calorie_Calc_Back);
        button_Visiblity_Shown(submit_Calorie, clear_Calorie);
    }

    function clear_All_Fields_Calorie(){
        clear_Fields(
            input_Age_calorie, 
            input_Height_calorie, 'Enter Your Height In Centimeters', 'Height In Centimeters', 
            input_Weight_calorie, 'Enter Your Weight In Kilograms', 'Height In Kilograms', 
            toggle_Btn_Height_Calorie, 
            toggle_Btn_Weight_Calorie, 
            submit_Calorie
            );
            
        input_Activity_calorie.style.borderBottom = '.15rem solid transparent';
        input_Activity_calorie.style.animation = 'none';
        input_Activity_calorie.style.transition = "none";
    }
    
    function toggle_Height_Bmi(){

        let bmi_Height;

        if(height_Check_Bmi()){
            toggle_Buttons(
                toggle_Btn_Height_Bmi, 
                input_Height_bmi, 
                label_Height_bmi, 
                'Centimeters', 
                'Feets', 
                'Enter Your Height In Centimeters', 
                'Height In Centimeters', 
                'Enter Your Height In Feets', 
                'Height In Feets'
                );

                ////**** Functionality Functions ******////


                if(toggle_Btn_Height_Bmi.innerText === 'Feets'){
                    bmi_Height = Math.round(input_Height_bmi.value.trim() * 30.48);
                }else if(toggle_Btn_Height_Bmi.innerText === 'Centimeters'){
                    bmi_Height = (input_Height_bmi.value.trim() / 30.48).toFixed(2);
                }

                input_Height_bmi.value = bmi_Height;

            }else if(!height_Check_Bmi()){
                toggle_Buttons(
                    toggle_Btn_Height_Bmi, 
                    input_Height_bmi, 
                    label_Height_bmi, 
                    'Centimeters', 
                    'Feets', 
                    'Enter Your Height In Centimeters', 
                    'Please enter a height between (125 - 201) centimeters', 
                    'Enter Your Height In Feets', 
                    'Please enter a height between (4.10 - 6.6) feets'
                    );

                    if(toggle_Btn_Height_Bmi.innerText === 'Feets'){
                        if(input_Height_bmi.value.trim() !== ''){
                            bmi_Height = Math.round(input_Height_bmi.value.trim() * 30.48);
                            input_Height_bmi.value = bmi_Height;
                        }
                    }else if(toggle_Btn_Height_Bmi.innerText === 'Centimeters'){
                        if(input_Height_bmi.value.trim() !== ''){
                            bmi_Height = (input_Height_bmi.value.trim() / 30.48).toFixed(2);
                            input_Height_bmi.value = bmi_Height;
                        }
                    }
    


        }

    }

    function toggle_Height_Calorie(){

        let calorie_Height;

        if(height_Check_Calorie()){
            toggle_Buttons(
                toggle_Btn_Height_Calorie, 
                input_Height_calorie, 
                label_Height_calorie, 
                'Centimeters', 
                'Feets', 
                'Enter Your Height In Centimeters', 
                'Height In Centimeters', 
                'Enter Your Height In Feets', 
                'Height In Feets'
                );

                ////**** Functionality Functions ******////


                if(toggle_Btn_Height_Calorie.innerText === 'Feets'){
                    calorie_Height = Math.round(input_Height_calorie.value.trim() * 30.48);
                }else if(toggle_Btn_Height_Calorie.innerText === 'Centimeters'){
                    calorie_Height = (input_Height_calorie.value.trim() / 30.48).toFixed(2);
                }

                input_Height_calorie.value = calorie_Height;

            }else if(!height_Check_Calorie()){
                toggle_Buttons(
                    toggle_Btn_Height_Calorie, 
                    input_Height_calorie, 
                    label_Height_calorie, 
                    'Centimeters', 
                    'Feets', 
                    'Enter Your Height In Centimeters', 
                    'Please enter a height between (125 - 201) centimeters', 
                    'Enter Your Height In Feets', 
                    'Please enter a height between (4.10 - 6.6) feets'
                    );

                    if(toggle_Btn_Height_Calorie.innerText === 'Feets'){
                        if(input_Height_calorie.value.trim() !== ''){
                            calorie_Height = Math.round(input_Height_calorie.value.trim() * 30.48);
                            input_Height_calorie.value = calorie_Height;
                        }
                    }else if(toggle_Btn_Height_Calorie.innerText === 'Centimeters'){
                        if(input_Height_calorie.value.trim() !== ''){
                            calorie_Height = (input_Height_calorie.value.trim() / 30.48).toFixed(2);
                            input_Height_calorie.value = calorie_Height;
                        }
                    }
    


        }

    }
    
    function toggle_Weight_Bmi(){
        if(weight_Check_Bmi()){
            toggle_Buttons(
                toggle_Btn_Weight_Bmi, 
                input_Weight_bmi, 
                label_Weight_bmi, 
                'Kilograms', 
                'Pounds', 
                'Enter Your Weight In Kilograms', 
                'Weight In Kilograms', 
                'Enter Your Weight In Pounds', 
                'Weight In Pounds'
                );

                ////**** Functionality Functions ******////

                let bmi_Weight;

                if(toggle_Btn_Weight_Bmi.innerText === 'Pounds'){
                    bmi_Weight = (input_Weight_bmi.value.trim() / 2.205).toFixed(1);
                }else if(toggle_Btn_Weight_Bmi.innerText === 'Kilograms'){
                    bmi_Weight = Math.round(input_Weight_bmi.value.trim() * 2.205);
                }

                input_Weight_bmi.value = bmi_Weight;
        }else{
            toggle_Buttons(
                toggle_Btn_Weight_Bmi, 
                input_Weight_bmi, 
                label_Weight_bmi, 
                'Kilograms', 
                'Pounds', 
                'Enter Your Weight In Kilograms', 
                'Please enter a valid weight in kilograms', 
                'Enter Your Weight In Pounds', 
                'Please enter a valid weight in pounds'
                );
        }
    }

    function toggle_Weight_Calorie(){

        if(weight_Check_Calorie()){
            toggle_Buttons(
                toggle_Btn_Weight_Calorie, 
                input_Weight_calorie, 
                label_Weight_calorie, 
                'Kilograms', 
                'Pounds', 
                'Enter Your Weight In Kilograms', 
                'Weight In Kilograms', 
                'Enter Your Weight In Pounds', 
                'Weight In Pounds'
                );

                ////**** Functionality Functions ******////

                let calorie_Weight;

                if(toggle_Btn_Weight_Calorie.innerText === 'Pounds'){
                    calorie_Weight = (input_Weight_calorie.value.trim() / 2.205).toFixed(1);
                }else if(toggle_Btn_Weight_Calorie.innerText === 'Kilograms'){
                    calorie_Weight = Math.round(input_Weight_calorie.value.trim() * 2.205);
                }

                input_Weight_calorie.value = calorie_Weight;
        }else{
            toggle_Buttons(
                toggle_Btn_Weight_Calorie, 
                input_Weight_calorie, 
                label_Weight_calorie, 
                'Kilograms', 
                'Pounds', 
                'Enter Your Weight In Kilograms', 
                'Please enter a valid weight in kilograms', 
                'Enter Your Weight In Pounds', 
                'Please enter a valid weight in pounds'
                );
        }
    }


    ////**** Validation Functions ******////



    function age_Validation_Bmi(){
        const re = /^(?:1[01][0-9]|120|2[7-9]|[2-9][0-9])$/;

        if(re.test(input_Age_bmi.value.trim())){
            condition_True(input_Age_bmi, label_Age_bmi, 'Age');
            return true;
        }else if(!re.test(input_Age_bmi.value.trim())){
            condition_False(input_Age_bmi, label_Age_bmi, 'Please enter an age between (20 - 120) years');
            return false;
        }

        if(input_Age_bmi.value.trim() === ""){
            condition_Blank(input_Age_bmi);
            return false;           
        }

    }



    function age_Validation_Calorie(){
        const re = /^(?:1[01][0-9]|120|2[7-9]|[2-9][0-9])$/;

        if(re.test(input_Age_calorie.value.trim())){
            condition_True(input_Age_calorie, label_Age_calorie, 'Age');
            return true;
        }else if(!re.test(input_Age_calorie.value.trim())){
            condition_False(input_Age_calorie, label_Age_calorie, 'Please enter an age between (20 - 120) years');
            return false;
        }

        if(input_Age_calorie.value.trim() === ""){
            condition_Blank(input_Age_calorie);
            return false;           
        }

    }


    function height_Validation_Bmi(){
        const re_ft = /^(5(\.\d?\d?)?|4\.[1-9]([0-9]?)?|4\.[2-9]([1-9]?)?|6(\.[0-5][0-9]?)?|6(\.6(0)?)?)$/;
        const re_cm = /^(12[5-9]|1[3-9][0-9]|20[0-1])$/;

        if(toggle_Btn_Height_Bmi.innerText === 'Feets'){
            if(re_cm.test(input_Height_bmi.value)){
                condition_True(input_Height_bmi, label_Height_bmi, 'Height In Centimeters');
                return true;
            }else if(!re_cm.test(input_Height_bmi.value)){
                condition_False(input_Height_bmi, label_Height_bmi, 'Please enter a height between (125 - 201) centimeters');
                return false;
            }
        }else if(toggle_Btn_Height_Bmi.innerText === 'Centimeters'){
            if(re_ft.test(input_Height_bmi.value)){
                condition_True(input_Height_bmi, label_Height_bmi, 'Height In Feets');
                return true;
            }else if(!re_ft.test(input_Height_bmi.value)){
                condition_False(input_Height_bmi, label_Height_bmi, 'Please enter a height between (4.10 - 6.6) feets');
                return false;
            }
        }



        if(input_Height_bmi.value.trim() === ""){
            condition_Blank(input_Height_bmi);
            return false;
        }

    }


    function height_Validation_Calorie(){
        const re_ft = /^(5(\.\d?\d?)?|4\.[1-9]([0-9]?)?|4\.[2-9]([1-9]?)?|6(\.[0-5][0-9]?)?|6(\.6(0)?)?)$/;
        const re_cm = /^(12[5-9]|1[3-9][0-9]|20[0-1])$/;

        if(toggle_Btn_Height_Calorie.innerText === 'Feets'){
            if(re_cm.test(input_Height_calorie.value)){
                condition_True(input_Height_calorie, label_Height_calorie, 'Height In Centimeters');
                return true;
            }else if(!re_cm.test(input_Height_calorie.value)){
                condition_False(input_Height_calorie, label_Height_calorie, 'Please enter a height between (125 - 201) centimeters');
                return false;
            }
        }else if(toggle_Btn_Height_Calorie.innerText === 'Centimeters'){
            if(re_ft.test(input_Height_calorie.value)){
                condition_True(input_Height_calorie, label_Height_calorie, 'Height In Feets');
                return true;
            }else if(!re_ft.test(input_Height_calorie.value)){
                condition_False(input_Height_calorie, label_Height_calorie, 'Please enter a height between (4.10 - 6.6) feets');
                return false;
            }
        }



        if(input_Height_calorie.value.trim() === ""){
            condition_Blank(input_Height_calorie);
            return false;
        }

    }
    
    function weight_Validation_Bmi(){
        const re = /^\d+([\.]?[\d]+)?$/;

        if(re.test(input_Weight_bmi.value)){
            if(toggle_Btn_Weight_Bmi.innerText === 'Pounds'){
                condition_True(input_Weight_bmi, label_Weight_bmi, 'Weight In Kilograms');
            }else if(toggle_Btn_Weight_Bmi.innerText === 'Kilograms'){
                condition_True(input_Weight_bmi, label_Weight_bmi, 'Weight In Pounds');
            }
            return true;
        }else if(!re.test(input_Weight_bmi.value)){
            if(toggle_Btn_Weight_Bmi.innerText === 'Pounds'){
                condition_False(input_Weight_bmi, label_Weight_bmi, 'Please enter a valid weight in kilograms');
            }else if(toggle_Btn_Weight_Bmi.innerText === 'Kilograms'){
                condition_False(input_Weight_bmi, label_Weight_bmi, 'Please enter a valid weight in pounds');
            }
            return false;
        }

        if(input_Weight_bmi.value.trim() === ""){
            condition_Blank(input_Weight_bmi);
            return false;
        }

    }


    function weight_Validation_Calorie(){
        const re = /^\d+([\.]?[\d]+)?$/;

        if(re.test(input_Weight_calorie.value)){
            if(toggle_Btn_Weight_Calorie.innerText === 'Pounds'){
                condition_True(input_Weight_calorie, label_Weight_calorie, 'Weight In Kilograms');
            }else if(toggle_Btn_Weight_Calorie.innerText === 'Kilograms'){
                condition_True(input_Weight_calorie, label_Weight_calorie, 'Weight In Pounds');
            }
            return true;
        }else if(!re.test(input_Weight_calorie.value)){
            if(toggle_Btn_Weight_Calorie.innerText === 'Pounds'){
                condition_False(input_Weight_calorie, label_Weight_calorie, 'Please enter a valid weight in kilograms');
            }else if(toggle_Btn_Weight_Calorie.innerText === 'Kilograms'){
                condition_False(input_Weight_calorie, label_Weight_calorie, 'Please enter a valid weight in pounds');
            }
            return false;
        }

        if(input_Weight_calorie.value.trim() === ""){
            condition_Blank(input_Weight_calorie);
            return false;
        }

    }


    function gender_Validation_Bmi(){
        if((input_Male_bmi.checked || input_Female_bmi.checked)){
            return true;
        }else{
            return false;
        }
    }

    function gender_Validation_Calorie(){
        if((input_Male_calorie.checked || input_Female_calorie.checked)){
            return true;
        }else{
            return false;
        }
    }

    function activity_Level_Validation_Calorie(){
        if((input_Activity_calorie.value !== '')){
            input_Activity_calorie.style.borderBottom = '.15rem solid #33d633';
            return true;
        }else{
            input_Activity_calorie.style.borderBottom = '.15rem solid #fb0000';
            input_Activity_calorie.style.animation = 'shake .3s ease-in';
            input_Activity_calorie.style.transition = "all .3s ease-in";
            return false;
        }
    }





////**** Utility Functions ******////



    function height_Check_Bmi(){
        const re_ft = /^(5(\.\d?\d?)?|4\.[1-9]([0-9]?)?|4\.[2-9]([1-9]?)?|6(\.[0-5][0-9]?)?|6(\.6(0)?)?)$/;
        const re_cm = /^(12[5-9]|1[3-9][0-9]|20[0-1])$/;

        if(re_cm.test(input_Height_bmi.value) || re_ft.test(input_Height_bmi.value)){
            return true;
        }else{
            return false;
        }
    }

    function height_Check_Calorie(){
        const re_ft = /^(5(\.\d?\d?)?|4\.[1-9]([0-9]?)?|4\.[2-9]([1-9]?)?|6(\.[0-5][0-9]?)?|6(\.6(0)?)?)$/;
        const re_cm = /^(12[5-9]|1[3-9][0-9]|20[0-1])$/;

        if(re_cm.test(input_Height_calorie.value) || re_ft.test(input_Height_calorie.value)){
            return true;
        }else{
            return false;
        }
    }

    function weight_Check_Bmi(){
        const re = /^\d+([\.]?[\d]+)?$/;

        if(re.test(input_Weight_bmi.value)){
            return true;
        }else{
            return false;
        }
    }

    function weight_Check_Calorie(){
        const re = /^\d+([\.]?[\d]+)?$/;

        if(re.test(input_Weight_calorie.value)){
            return true;
        }else{
            return false;
        }
    }


    function submit_Button_Hover_Green(sb){
        sb.classList.remove('calculator__button--submit1');
        sb.classList.add('calculator__button--submit2');
    }

    function submit_Button_Hover_Red(sb){
        sb.classList.remove('calculator__button--submit2');
        sb.classList.add('calculator__button--submit1');
    }

    function error_Alert(input, msg){
        setTimeout(()=>{
            input.innerText = msg;
            input.style.visibility = 'visible';
        });

        setTimeout(()=>{
            input.style.visibility = 'hidden';
        }, 2500);
    }


    function clear_Fields(inp1, inp2, msg1, msg2, inp3, msg3, msg4, tb1, tb2, sb){
        inp1.style.borderBottom = '.15rem solid transparent';        
        inp1.style.animation = 'none';
        inp1.style.transition = "none"; 
       
        inp2.style.borderBottom = '.15rem solid transparent';        
        inp2.style.animation = 'none';
        inp2.style.transition = "none"; 
        
        inp3.style.borderBottom = '.15rem solid transparent';        
        inp3.style.animation = 'none';
        inp3.style.transition = "none";

        tb1.innerText = 'Feets';
        inp2.setAttribute('placeholder', msg1);
        inp2.innerText = msg2;

        tb2.innerText = 'Pounds';
        inp3.setAttribute('placeholder', msg3);
        inp3.innerText = msg4;
        
        sb.classList.remove('calculator__button--submit2');
        sb.classList.add('calculator__button--submit1');
    }

    function clear(inp1, inp2, inp3){
        inp1.style.borderBottom = '.15rem solid transparent';        
        inp1.style.animation = 'none';
        inp1.style.transition = "none"; 
       
        inp2.style.borderBottom = '.15rem solid transparent';        
        inp2.style.animation = 'none';
        inp2.style.transition = "none"; 
        
        inp3.style.borderBottom = '.15rem solid transparent';        
        inp3.style.animation = 'none';
        inp3.style.transition = "none";
    }

    function toggle_Buttons(tb, inp1, lb1, msg, msg0, msg1, msg2, msg3, msg4){
        if(tb.innerText === msg){
            tb.innerText = msg0;
            inp1.setAttribute('placeholder', msg1);
            lb1.innerText = msg2;
        }else{
            tb.innerText = msg;
            inp1.setAttribute('placeholder', msg3);
            lb1.innerText = msg4;
        }
    }

    function condition_True(inp, lb, msg){
        inp.style.borderBottom = '.15rem solid #33d633';
        lb.innerText = msg;
        lb.style.color = "#49493f";
    }

    function condition_False(inp, lb, msg){
        inp.style.borderBottom = '.15rem solid #fb0000';        
        inp.style.animation = 'shake .3s ease-in';
        inp.style.transition = "all .3s ease-in";        
        lb.innerText = msg;
        lb.style.color = "#fb0000";
    }

    function condition_Blank(inp){
        inp.style.borderBottom = '.15rem solid transparent';
    }

    function card_Front_Showing_Style(input){
        input.style.backgroundColor = 'rgba(#ebebe8, .8)';
        input.style.boxShadow = '0 .2rem 1rem rgba(#000000, .8)';
        input.style.transform = 'rotateY(-180deg)';
    }

    function card_Back_Showing_Style(input){
        input.style.backgroundColor = 'rgba(#ebebe8, .8)';
        input.style.boxShadow = '0 .2rem 1rem rgba(#000000, .8)';
        input.style.transform = 'rotateY(0deg)';
    }

    function card_Front_Closing_Style(input){
        input.style.backgroundColor = 'rgba(#ebebe8, .8)';
        input.style.boxShadow = '0 .2rem 1rem rgba(#000000, .8)';
        input.style.transform = 'rotateY(0deg)';
    }

    function card_Back_Closing_Style(input){
        input.style.backgroundColor = 'rgba(#ebebe8, .8)';
        input.style.boxShadow = '0 .2rem 1rem rgba(#000000, .8)';
        input.style.transform = 'rotateY(180deg)';
    }

    function button_Visiblity_Hidden(btn1, btn2){
        btn1.style.visibility = 'hidden';
        btn2.style.visibility = 'hidden';
    }

    function button_Visiblity_Shown(btn1, btn2){
        btn1.style.visibility = 'visible';
        btn2.style.visibility = 'visible';
    }





