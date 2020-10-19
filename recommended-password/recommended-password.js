// generate password 
const password_input = document.querySelector('#password_input')

// generate random password 
const generated_password = () => {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-';
    var result = '';
    for ( var i = 0; i < 14; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

// insert password into input
const useRecommendedPassword = () => {
    password_input.value = generated_password()
    hideSuggestionBox()
}

// hide recommanded password box 
const hideSuggestionBox = () => {
    document.querySelector('.password-container').classList.add('hidden')
}

// show recommnded password box
password_input.addEventListener('focus', () => {
    if(password_input.value == '' || password_input == null){
        document.querySelector('#generate_recommended_password').innerHTML = generated_password()
        document.querySelector('.password-container').classList.remove('hidden')
    }
})

document.querySelector('#select_password').addEventListener('click', () => {
    useRecommendedPassword()
})

password_input.addEventListener('keyup', () => hideSuggestionBox())