var req =new XMLHttpRequest();
req.open("GET",'https://restcountries.eu/rest/v2/all',true);
req.send()
req.onload = function(){
    var data=JSON.parse(this.response);
    
    for(var i in data)
    {
        console.log(data[i].name);
        document.write("<br>");
        document.write(data[i].name);
        document.write(` &nbsp;-&nbsp; ${data[i].capital}`);
        document.write("<br>");
    }
    var total=0;
    for(i in data)
    {
        total+=data[i].population;
    }
    document.write(total);
}