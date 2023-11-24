document.getElementById("btn").addEventListener("click",(e)=>{
    e.preventDefault()
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    let err=document.getElementById("err")
    

    if(email==null || email==""){
        document.getElementById("err").innerHTML="Enter email"
        document.getElementById("err").style.color="red";
    }
    else if(password==""){
        document.getElementById("err").innerHTML="create new pass"
        document.getElementById("err").style.color="red";
    }
    else{
        const data=new FormData()
        data.append("userEmail",email)
        data.append("userPassword",password)


        let http = new XMLHttpRequest()
        http.open("POST","http://ilandertech.com/api/index.php/Welcome/StuLogin")
        http.send(data)
        console.log(http)

        http.onreadystatechange=()=>{
        if (http.readyState == 4 && http.status == 200 ){
            let res=JSON.parse(http.response)
            document.getElementById("err").innerHTML=res.message
            if (res.status==1){
                err.setAttribute("class","green")
                location.assign("index.html")
                localStorage.setItem("email",email)
            }
            else{
               err.setAttribute("class","red")
            }
        }
        }
    }
})