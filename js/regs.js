document.getElementById("btn").addEventListener("click",(e)=>{
    e.preventDefault()

    let fname=document.getElementById("fname").value
    let lname=document.getElementById("lname").value
    let email=document.getElementById("email").value
    let phone=document.getElementById("phone").value
    let password=document.getElementById("password").value
    let cpassword=document.getElementById("cpassword").value
    let err=document.getElementById("err")
    
     
    if (fname.length < 4|| fname==null || fname==""){
        document.getElementById("err").innerHTML="Atleast 4 letters in fname"
        document.getElementById("err").style.color="red";
    }
    else if(lname==null || lname==""){
        document.getElementById("err").innerHTML="Enter last name"
        document.getElementById("err").style.color="red";
    }
    else if(email==null || email==""){
        document.getElementById("err").innerHTML="Enter email"
        document.getElementById("err").style.color="red";
    }
    else if(phone.leg<10 || phone==""){
        document.getElementById("err").innerHTML="check phone number"
        document.getElementById("err").style.color="red";
    }
    else if(password==""){
        document.getElementById("err").innerHTML="create new pass"
        document.getElementById("err").style.color="red";
    }
    else if(password !== cpassword){
        document.getElementById("err").innerHTML="check password"
        document.getElementById("err").style.color="red";
    }
    else{
        const data=new FormData()
        data.append("fname",fname)
        data.append("lname",lname)
        data.append("email",email)
        data.append("ph",phone)
        data.append("pwd",password)


        let http = new XMLHttpRequest()
        http.open("POST","http://ilandertech.com/api/index.php/Welcome/AddStuRegister")
        http.send(data)
        console.log(http)

        http.onreadystatechange=()=>{
        if (http.readyState == 4 && http.status == 200 ){
            let res=JSON.parse(http.response)
            err.innerHTML=res.message
       
        if (res.status==1){
            err.style.color="green";
            location.assign("login.html")
        }
        else{
            err.style.color="red";
        }
    }
        }
    }
})