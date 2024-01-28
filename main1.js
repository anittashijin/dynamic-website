const login = ()=>{
    if(usernameinput.value==""|| pswdinput.value==""){
        alert("please fill the form completely!!!")
    }else{
        user=usernameinput.value
        localStorage.setItem("user",user)
        window.location="dash.html"
        alert("Login successfully!!")
    }

}