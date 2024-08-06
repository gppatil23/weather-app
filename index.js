var  inputvalue = document.querySelector('#cityinput');
var  btn = document.querySelector('#add');
var  city = document.querySelector('#cityoutput');
var  descrip = document.querySelector('#description');
var  temp = document.querySelector('#temp');
var  wind = document.querySelector('#wind');

apik = "18afaacc762f5892e7d4cfc5b186b270"
function conversion (val) 
{
    return (val - 273).toFixed(3)

}

btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
    .then(res => res.json()) 


    .then(data =>
    {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var temprature = data['main']['temp']
        var wndspeed = data['wind']['speed']

        city.innerHTML = 'Weather of ' + nameval
        temp.innerHTML  = 'Temprature : ' + conversion(temprature) + 'C'
        description.innerHTML = 'Sky condition : ' + descrip
        wind.innerHTML = 'Wind speed:' + wndspeed
    })

    .catch(err => alert('You entered wrong city name'))
})
