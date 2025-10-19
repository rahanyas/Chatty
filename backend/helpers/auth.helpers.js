class Auth_check{

    set checkEmail(email){
        if(!email.includes('@') || !email.includes('.com')){
             throw new Error('Please Enter A Valid Email')
        }
    }

    set checkPass(pass){
        if(pass.length < 3){
            throw new Error("Password Must Be atleast 3 digits long")
        }
    }

    set checkMobile(mobile){
        if(mobile.toString().length < 10 || mobile.toString().length > 11){
            throw new Error('Mobile number must be 10 digits')
        }
    }
}

export default Auth_check