// const header=new Headers()
// header.append('Authorization','Basic'+btoa('shashank:shashank@123'))
// header.append('Authorization',`Basic ${btoa('shashank:shashank@123')}`)

// const encodedString=btoa('shashank:shashank@123')
// console.log(encodedString)



async function fetchdata(user,pass){
    try{
        const encodedString=btoa(`${user}:${pass}`);
        const headers = new Headers();
        headers.set("Authorization",`Basic ${encodedString}`)
        const fetchResPonse=await fetch('http://localhost:5083/weatherforecast',{
            method:'GET',
            headers:headers
        });

//     fetchResPonse.then(response=>response.json())
//     .then(data=>console.log(data))
//     .catch(error=>console.log(error));

        if(fetchResPonse.status==401){
            return false;
        }

        console.log(fetchResPonse)
        // return await fetchResPonse.text();
       var data=await fetchResPonse.text();
       return data
    }
    catch(error){
        console.error("error:",error);
        return null;
    }
}




document.getElementById('submit').addEventListener('click',async function(event){
    event.preventDefault();
    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    // console.log(username);
    // console.log(password);

    const data=await fetchdata(username,password);
    var response=document.createElement("p");
    if(data==false){
        response.textContent="Unauthorized";
    }
    else{
        response.textContent=data
    }
    console.log('shashank',data);
    document.getElementById("content").appendChild(response);
});

