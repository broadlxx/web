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
	second = document.getElementById("acc");
    var x = position.coords.longitude;
    var y = position.coords.latitude;
    var h = position.coords.altitude;
    var a = position.coords.accuracy;
    var al  = position.coords.altitudeAccuracy;
    first.innerHTML = "纬度(latitude): " + y +  "<br>经度(longitude): " + x +"<br>海拔(altitude):" + h ;
    second.innerHTML =  "<br>accuracy:"+ a +"<br>";
   
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

/* In IE brower latitude is 39.17869954704452 and longitude is 117.16985569327026 but in edge brower latitude is 39.17872938524728 and longitude is 117.16985828074743
 * There is a lettle different between them.
 * The location information obtained by the four browsers(Chrome/Firefox/Safari/Opera) are the same. It is estimated that they all use the same location service.
 * The data obtained by IE is different from the data obtained by the above several browsers.
 * The local network information used by location services to estimate your location includes: information about visible WiFi access points (including signal strength),
 * information about your local router, and the IP address of your computer. The accuracy and  coverage of location-based services vary from location to location
 * 有关可见 WiFi 接入点的信息（包括信号强度）、有关您本地路由器的信息、您计算机的 IP 地址。位置服务的准确度和覆盖范围因位置不同而异*/