

// const button=document.getElementById('submit');
// button.addEventListener('click',function(event){

//     event.preventDefault();
//     let fetchResPonse=fetch(
//         'http://localhost:5166/weatherforecast'
//     );   
//     fetchResPonse.then(response=>response.json())
//     .then(data=>console.log(data))
//     .catch(error=>console.log(error));
// });

async function Clicked()
{
    let fetchResPonse=await fetch('http://localhost:5166/weatherforecast');
    var responses = await fetchResPonse.json();


    // var body=document.getElementById('body');
    // body.innerHTML=`<pre>${JSON.stringify(responses,null,2)}</pre>`;


    var table=document.getElementById('body');
    table.innerHTML='';
    responses.forEach(response => {
        var row = document.createElement('tr');
        var date=document.createElement('td');
        var temperatureC=document.createElement('td');
        var tempertaureF=document.createElement('td');
        var summary=document.createElement('td');

        date.textContent=response.date;
        temperatureC.textContent=response.temperatureC;
        tempertaureF.textContent=response.tempertaureF;
        summary.textContent=response.summary;

        row.appendChild(date);
        row.appendChild(temperatureC);
        row.appendChild(tempertaureF);
        row.appendChild(summary);

        table.appendChild(row);
        
    });
    
    
    
    

}



