function checkName(form){
    var regex = /^[a-zA-Z ]+$/;
    if(regex.test(form.name.value) == false){
    alert("Name must be in alphabets only");
    form.name.focus();
    return false;
}
    if(form.name.value == " "){
      alert("Name Field cannot be left empty");
      form.name.focus();
      return false;
    }
    return form.name.value;
  }

function checkEmail(form){
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if(regex.test(form.email.value)){
        return form.email.value;
    }
    else{
        alert("This is not a valid email address");
        return false;
    }
}

function checkUsername(form){
    var usernameRegex = /^[a-zA-Z0-9]{5,20}/;
    if(usernameRegex.test(form.skype.value)){
        return true;
    }
    else{
        alert("This is not a valid skype id");
        return false;
    }
}

function checkDegree(form){
    var regex = /^[a-zA-Z.]{2,7}/;
    if(regex.test(form.education_degree.value) == false){
    alert("Invalid Degree");
    form.education_degree.focus();
    return false;
    }
    if(form.education_degree.value == " "){
        alert("Degree Field cannot be left empty");
        form.education_degree.focus();
        return false;
    }
    return true;
}

function validateCheckbox(form){
    upwork = form.upwork.checked;
    freelancer = form.freelancer.checked;
    elancer = form.elancer.checked;
    referencebasedwork = form.referencebasedwork.checked;
    others = form.others.value;
    othersCheckbox = form.other.checked
    if(!upwork && !freelancer && !elancer && !referencebasedwork && !othersCheckbox){
        alert("You did not select any Freelancing information")
    }
    if(othersCheckbox && !others){
        alert("Enter values in others field for freelancing information")
    }
    foreign = form.foreign.checked
    local = form.local.checked
    if(!foreign && !local){
        alert("You did not select any clients information")
    }
    writer = form.writer.checked
    developer = form.developer.checked
    designer = form.designer.checked
    software = form.software.checked
    mobile = form.mobile.checked
    otherscheckBox = form.otherscheckBox.checked
    othersarea = form.othersarea.value
    if(!writer && !developer && !designer && !software && !mobile && !otherscheckBox){
        alert("You did not select your core area")
    }
    if(otherscheckBox && !othersarea){
        alert("Enter values in others field for core area")
    }
    select = form.area.value
    if(select){
        return true
    }
    return false
}

function validateForm(){
    const form = document.getElementById("form");
    form.addEventListener("submit", e => {
        e.preventDefault();
    });
    checkName(form)
    checkEmail(form)
    checkUsername(form)
    checkDegree(form)
    validateCheckbox(form)
    
}

async function validateLogin(){
    const form = document.getElementById("form");
    form.addEventListener("submit", e => {
        e.preventDefault();
    });
    username = form.username.value
    password = form.password.value
    if(!username || !password){
        document.getElementById("auth").innerHTML = 
            "Enter Credentials!"
    }
    else if(username && password){
            axios.post('http://localhost:1337/auth/local', {
                "identifier": username,
                "password": password
              })
              .then(function (response) {
                console.log(response.data);
                var token = response.data.jwt;
                localStorage.setItem("token", token)
                document.getElementById("auth").innerHTML = 
                    "Login Success!";
                window.location.href = "http://127.0.0.1:5501/src/Products.html";

              }).catch(e => document.getElementById("auth").innerHTML = "INVALID CREDENTIALS")
        }   
    }

function checkAddress(form){
    var address = /^[a-zA-Z0-9,. ]{5,150}/;
    if(address.test(form.address.value)){
        return form.address.value;
    }
    else{
        alert("This is not a valid address");
        return false;
    }
}
function checkCity(form){
    var city = /^[a-zA-Z]{5,15}/;
    if(city.test(form.city.value)){
        return form.city.value;
    }
    else{
        alert("This is not a valid city");
        return false;
    }
}

function checkGender(form){
    gender_female = form.gender_female.checked
    gender_male = form.gender_male.checked
    if(!gender_female && !gender_male){
        alert("select gender")
    }
    if(gender_female){
        return "Female"
    }else if(gender_male){
        return "Male"
    }
    else{
        return false;
    }
}

function checkPassword(form){
    pwd1 = form.pwd1.value;
    pwd2 = form.pwd2.value;
    var passw=   /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if(pwd1.match(passw)) {
        if (pwd1 === pwd2)
            return pwd1;
        else{
        alert("Password doesnt match")
        return false
        }
    }
    else{
    alert("Try another password")
    return false
    }
}

function checkAgree(form){
    agree = form.agree.checked
    if(!agree){
        document.getElementById("agreearea").innerHTML = "Please Agree!"
    }

}

function createLogin(username, password, email){
    axios.post('http://localhost:1337/users', {
        "username": username,
        "password": password,
        "email": email
      })
      .then(function (response) {
        console.log(response.data);
      })
}

function postRequest(name_, address_, city_, gender_, email_, password_){
    axios.post('http://localhost:1337/registrations', {
        "name": name_,
        "address": address_,
        "city": city_,
        "gender": gender_,
        "email": email_,
        "password": password_
      })
      .then(function (response) {
        window.location.href = "http://127.0.0.1:5501/src/login.html"
        console.log(response.data);
      })
}

function validateRegistration(){
    const form = document.getElementById("form");
    form.addEventListener("submit", e => {
        e.preventDefault();
    });
    name_serve = checkName(form)
    address_serve = checkAddress(form)
    city_serve = checkCity(form)
    gender_serve = checkGender(form)
    email_serve = checkEmail(form)
    password_serve = checkPassword(form)
    checkAgree(form)
    if(name_serve && address_serve && city_serve && address_serve && gender_serve && email_serve && password_serve){
        postRequest(name_serve, address_serve, city_serve, gender_serve, email_serve, password_serve)
        createLogin(name_serve, password_serve, email_serve)
    }
}