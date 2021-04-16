var rq=new XMLHttpRequest();
rq.open('GET','https://restcountries.eu/rest/v2/all',true);
rq.send();
rq.onload=function(){
    var country=JSON.parse(this.response);
    for(var i in country)
    {
        try{
            var cname=country[i].name;
            var latlong=country[i].latlng;
            if(latlong==0) throw new Error("Lattitude and long not found");
            weatherdata(cname,...latlong);
        }
        catch(e){
            console.log("Invalid corrdinates"+cname);


        }

    }
}
var weatherdata=function(name,lat,lng)
{
    var URL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9436e0f38b07c5fb5103a391d1af3053`
    var request=new XMLHttpRequest();
    request.open('GET',URL,true);
    request.send();
    request.onload=function(){
        var data=JSON.parse(this.response);
        console.log(`${name}:${data.main.temp}`);
    }
}

