(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(2),c=a.n(i),o=(a(13),a(15),a(3)),l=a(4),s=a(6),u=a(5),d=a(7);a(17),a(20);function w(e){var t=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=new Date,i=n.getDate(),c=n.getMonth(),o=n.getDay(),l=e.forecast.map(function(e,n){return r.a.createElement("div",{className:"col text-center",key:n},r.a.createElement("div",{className:"weather-tile"},r.a.createElement("p",{className:"weather-date"},a[o+n]+" "+i+" "+t[c]),e.weather[0].id>=200&&e.weather[0].id<300?r.a.createElement("i",{class:"wi-storm-showers"}):null,e.weather[0].id>=300&&e.weather[0].id<600?r.a.createElement("i",{class:"wi-rain"}):null,e.weather[0].id>=600&&e.weather[0].id<700?r.a.createElement("i",{class:"wi wi-snow"}):null,e.weather[0].id>=700&&e.weather[0].id<800?r.a.createElement("i",{class:"wi wi-fog"}):null,800==e.weather[0].id?r.a.createElement("i",{class:"wi wi-day-sunny"}):null,e.weather[0].id>800?r.a.createElement("i",{class:"wi wi-cloud"}):null,r.a.createElement("p",{className:"temp"},e.temp.day," \xb0C"),r.a.createElement("p",{className:"temp temp-night"},e.temp.night," \xb0C")))});return r.a.createElement("div",{className:"row"},l)}var m=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={weather:[]},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://api.openweathermap.org/data/2.5/forecast/daily?lat=52.4&lon=16.9&units=metric&cnt=5&appid=abe5affb6861893994d8ed784c41108d").then(function(e){return e.json()}).then(function(t){var a=t.list;console.log(a),e.setState({weather:a})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container main-container"},r.a.createElement("h1",null,"5-days weather forecast"),r.a.createElement("p",null,"This is a simple wather app, using OpenWeatherMap API to display 5-days forecast."),r.a.createElement(w,{forecast:this.state.weather}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(22)}},[[8,2,1]]]);
//# sourceMappingURL=main.8b451339.chunk.js.map