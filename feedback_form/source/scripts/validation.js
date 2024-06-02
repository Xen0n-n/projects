function email_validation(input){
    return input.match(/^[\w\d]+\@[\w]+\.[\w]{2,5}$/i)
}

function phone_validation(input){
    return input.match(/\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/)
}

function validate(formData){
    
    const emailValCode = email_validation(formData.get('email'))
    const phoneValCode = phone_validation(formData.get('phone'))

    if ((!emailValCode) || (!phoneValCode)){
        if (emailValCode === null) {
            document.getElementById('email').classList.add('invalid');
        }
        if (phoneValCode === null) {
            document.getElementById('phone').classList.add('invalid');
        }
        return false;
    } else {
        return true;
    }
}

function check_and_submit(event){
    event.preventDefault();
    const formData = new FormData(document.getElementById('feedback-form'));
    
    console.log(email_validation(formData.get('email')));
    console.log(phone_validation(formData.get('phone')));

    if (validate(formData)){
        alert('success');
        return true;
    } else {
        alert('Error: Check your input');
        return fasle;
    }
}

