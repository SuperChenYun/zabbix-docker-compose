var hookUrl = "https://oapi.dingtalk.com/robot/send?access_token=ae91477cd8909a180e2bf6bb8f2090exxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
var req = new CurlHttpRequest();
req.AddHeader('Content-Type: application/json');
 
Zabbix.Log(4, 'webhook request value='+value);
var value = JSON.parse(value)
var requestData = {
"msgtype": "text", 
"text": {
   "content": value.Subject + "\n" +value.Message
  }, 
   "at": {
        "atMobiles": [
            value.To
       ], 
        "isAtAll": false
    }
}

req.Post(hookUrl,JSON.stringify(requestData));
 
Zabbix.Log(4, 'response code: '+req.Status());
 
return JSON.stringify({
  'tags': {
    'endpoint': 'slack'
  }
});
