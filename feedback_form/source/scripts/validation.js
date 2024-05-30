function email_validation(input){
    return input.match(/^[\w\d]+\@[\w]+\.[\w]{2,5}$/i)
}

function phone_validation(input){
    return input.match(/\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/)
}

console.log(email_validation('nsoft13@gmail.com'))
console.log(phone_validation('+7(977)966-83-52'))

