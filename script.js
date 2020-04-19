const name = document.getElementsByTagName('name')
const password = document.getElementsByTagName('password')
const form = document.getElementById ('form')
const errorElement = document.getElementById('error')

form.addEventListener ('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null){
        messages.push('name is required')
    }
    if (password.value.length <= 6) {
        messages.push ('password must be longer than six charecter')
    }
    if (password.value.length >= 15) {
        messages.push ('password must be lesser than fifteen charecter')
    }


    if (messages.length >0 ){

        e.preventDefault()
        errorElement.innerText = messages.join(',')

    }
   


} ) 