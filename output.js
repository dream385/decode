//Sun Jun 30 2024 01:07:41 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/dream385/decode
body = $response.body.replace(/\"memberStatus":\d+/g, "\"memberStatus\":1").replace(/\"username":".*?"/g, "\"username\":\"彭于晏解锁\"").replace(/\"buttonText":".*?"/g, "\"buttonText\":\"已永久\"").replace(/\"hasPaid\":\w+/g, "\"hasPaid\":true").replace(/\"downLoadAll\":\w+/g, "\"downLoadAll\":true").replace(/\"videoTime\":\d+/g, "\"videoTime\":3000").replace(/\"startEnable\":\w+/g, "\"startEnable\":true").replace(/\"memberStatus\":\d+/g, "\"memberStatus\":1").replace(/\"preview\":\w+/g, "\"preview\":true").replace(/\"errorCode\":\d+/g, "\"errorCode\":0").replace(/\"status\":\w+/g, "\"status\":true");
var _0x1337d8 = {
  body: body
};
$done(_0x1337d8);