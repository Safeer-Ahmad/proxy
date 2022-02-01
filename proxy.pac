var NETINT="192.168.0.0";
var NETMASK="255.255.255.0";

function FindProxyForURL(url, host)
{
if (isInNet(host, NETINT, NETMASK))
 	{
  		return "DIRECT";
 	}
else
 	{
  		return "PROXY 192.168.0.1:3128;";
}
}
