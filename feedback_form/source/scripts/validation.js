function email_validation(input){

    return input.match(/^[\w\d]+\@[\w]+\.[\w]{2,5}$/i)
}

function phone_validation(input){

    return input.match(/\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/)
}

function validate(){
    const formData = new FormData(document.getElementById('feedback-form'));
    const emailValCode = email_validation(formData.get('email'))
    const phoneValCode = phone_validation(formData.get('phone'))
    
    if ((!emailValCode) || (!phoneValCode)){
        if (emailValCode === null) {
            document.getElementById('email').style.borderColor = 'red';
        } else {
            document.getElementById('email').style.borderColor = 'green';
        }
        if (phoneValCode === null) {
            document.getElementById('phone').style.borderColor = 'red';
        } else {
            document.getElementById('phone').style.borderColor = 'green';
        }
        
    } else {
        document.getElementById('email').style.borderColor = 'green';
        document.getElementById('phone').style.borderColor = 'green';
    }
    

    console.log(email_validation(formData.get('email')))
    console.log(phone_validation(formData.get('phone')))
}

