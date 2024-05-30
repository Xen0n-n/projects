function email_validation(input){
    return input.match(/^[\w\d]+\@[\w]+\.[\w]{2,5}$/i)
}
console.log(email_validation('nsoft13@gmail.com'))

