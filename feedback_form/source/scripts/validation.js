function email_validation(input){

    return input.match(/^[\w\d]+\@[\w]+\.[\w]{2,5}$/i)
}

function phone_validation(input){

    return input.match(/\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/)
}

function validate(){
    const formData = new FormData(document.getElementById('feedback-form'));

    console.log(email_validation(formData.get('email')))
    console.log(phone_validation(formData.get('phone')))
}
