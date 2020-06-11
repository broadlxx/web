function geolocationSupport()
{
    if(!navigator.geolocation)
    {
        alert('当前浏览器不支持HTML5 Geolocation')
    }
    else
    {
        alert('当前浏览器支持HTML5 Geolocation')
    }
}



function getCurrentPosition(){
    var options={
        enableHighAccuracy:true,
        timeout:60000,
        maximumAge:60000,
    }
   navigator.geolocation.getCurrentPosition(success,error,options)
//   navigator.geolocation.getCurrentPosition(getaccuracyPosition)
}
function success(position)
{
	first = document.getElementById("first");
//	second = document.getElementById("second");
    var x = position.coords.longitude;
    var y = position.coords.latitude;
    var h = position.coords.altitude;
    var a = position.coords.accuracy;
    var al  = position.coords.altitudeAccuracy;
    first.innerHTML = "纬度(latitude): " + y +  "<br>经度(longitude): " + x +"<br>海拔(altitude):" + h + "<br>accuracy:"+ a +"<br>"+al;

    var map = new BMap.Map("second");          // 创建地图实例
    var point = new BMap.Point(x, y);  // 创建点坐标
    map.centerAndZoom(point, 15);      // 初始化地图，设置中心点坐标和地图级别
    var marker = new BMap.Marker(point);  // 创建标注
        map.addOverlay(marker);              // 将标注添加到地图中

    var label = new BMap.Label("您在这里<br/>纬度(latitude):"+y+"<br/>经度(longitude):"+x,{offset:new BMap.Size(20,-10)});
    marker.setLabel(label);

}


function error(err)
{
    var errorTypes={
        1:"用户拒绝定位服务",
        2:"获取不到定位信息",
        3:"获取定位信息超时"
    }
    alert(errorTypes[err.code]);
}