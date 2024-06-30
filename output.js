//6/30/2024, 10:23:47 AM
//Project:https://github.com/dream385/decode
const _0x1b79bf = new _0x4ee126("腾讯视频-福利中心");
let _0x5e79bc = ["\n", "@", "&"],
  _0x150e6d,
  _0x34e361,
  _0x3f68f7,
  _0xd4cf3d = (_0x1b79bf.isNode() ? process.env.txspCookie : _0x1b79bf.getdata("txspCookie")) || "",
  _0x370dd2 = [],
  _0x3c1d68 = 0,
  _0x65b07e = 0,
  _0x4bcdf5 = "1001",
  _0x350564 = "wxca942bbff22e0e51",
  _0x139e3e = "8.6.25.25668",
  _0xfb3978 = "3000002",
  _0x482a00 = "wxa75efa648b60994b",
  _0x144187 = [],
  _0x2b4303 = 0,
  _0x1c280e = 5,
  _0x1668fd = 1.03,
  _0x4302c5 = 0,
  _0x5d55f7 = "txspfl",
  _0x173ef1 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x5be7d2 = "https://127.0.0.1/";
class _0x90650a {
  constructor(_0x580113) {
    this.index = ++_0x3c1d68;
    this.name = this.index;
    this.valid = false;
    this.vuserid = _0x580113.match(/vuserid=(\d+)/) ? _0x580113.match(/vuserid=(\d+)/)[1] : "";
    this.vusession = _0x580113.match(/vusession=([\w\.]+)/) ? _0x580113.match(/vusession=([\w\.]+)/)[1] : "";
    this.refresh_token = _0x580113.match(/refresh_token=([\w\-]+)/) ? _0x580113.match(/refresh_token=([\w\-]+)/)[1] : "";
    this.qimei36 = _0x1b79bf.randomString(36);
    this.omgid = _0x1b79bf.randomString(36) + "0010115b03";
    this.openid = _0x1b79bf.randomString(28);
    this.cookie = "appid=" + _0x350564 + "; app_ver=" + _0x139e3e + "; app_ver_all=" + _0x139e3e + "; qimei36=" + this.qimei36 + "; vuserid=" + this.vuserid + "; vusession=" + this.vusession + "; video_omgid=" + this.omgid + "; main_login=wx; vdevice_qimei36=" + this.qimei36 + "; video_platform=5; openid=" + this.openid + ";";
    this.canHelp = true;
    this.needHelp = true;
  }
  async getUserName(_0x403ac5 = false) {
    try {
      let _0x1d32b9 = "https://vip.video.qq.com/fcgi-bin/comm_cgi?name=spp_SVipInfo&cmd=1&source_scene=4&otype=xjson",
        _0x41490e = "",
        _0x5003d9 = _0x5ef8e6(_0x1d32b9, this.cookie, _0x41490e);
      await _0x3f8965("get", _0x5003d9);
      let _0xf87835 = _0x150e6d;
      if (!_0xf87835) {
        return;
      }
      _0xf87835?.["result"]?.["code"] == 0 ? (this.valid = true, this.name = _0xf87835.nick, console.log("账号" + this.index + "登录成功：" + this.name)) : !_0x403ac5 ? (await _0x1b79bf.wait(300), await this.refreshToken()) : (console.log(_0xf87835), _0x1b79bf.logAndNotify("账号" + this.index + "登录失败：" + _0xf87835.err_msg));
    } catch (_0x196f19) {
      console.log(_0x196f19);
    } finally {}
  }
  async refreshToken() {
    try {
      let _0x4b8e38 = "https://pbaccess.video.qq.com/com.tencent.spp_rpc.bazel.RpcLogin/RefreshToken?video_appid=" + _0xfb3978 + "&vplatform=3&guid=" + _0x1b79bf.randomString(16),
        _0x34ce6c = "{\"login_token\":[{\"token_appid\":\"" + _0x482a00 + "\",\"token_key_type\":100,\"tokenid\":\"" + _0x1b79bf.randomString(28) + "\",\"token_value\":\"57_ddApqVJEekOcHlQ3libWXcgi5gd5QwQWCVmPad8lqKZOXbhF5z8B7I_" + _0x1b79bf.randomString(34) + "-" + _0x1b79bf.randomString(17) + "\",\"refresh_value\":\"" + this.refresh_token + "\"}],\"dispatchPriority\":0,\"use_video_server_token\":true}",
        _0x2ab480 = _0x5ef8e6(_0x4b8e38, this.cookie, _0x34ce6c);
      await _0x3f8965("post", _0x2ab480);
      let _0x11e65e = _0x150e6d;
      if (!_0x11e65e) {
        return;
      }
      if (_0x11e65e.ret == 0) {
        if (_0x11e65e.data.err_code == 0) {
          this.vusession = _0x11e65e.data.video_token.video_sessionkey;
          this.access_token = _0x11e65e.data.token_info.access_token;
          this.refresh_token = _0x11e65e.data.token_info.refresh_token;
          this.openid = _0x11e65e.data.token_info.openid;
          this.cookie = "appid=" + _0x350564 + "; app_ver=" + _0x139e3e + "; app_ver_all=" + _0x139e3e + "; qimei36=" + this.qimei36 + "; vuserid=" + this.vuserid + "; vusession=" + this.vusession + "; video_omgid=" + this.omgid + "; main_login=wx; vdevice_qimei36=" + this.qimei36 + "; video_platform=5; openid=" + this.openid + ";";
          _0x1b79bf.logAndNotify("账号" + this.index + "原CK失效，刷新vusession成功");
          await _0x1b79bf.wait(1000);
          await this.getUserName(true);
        } else {
          _0x1b79bf.logAndNotify("账号" + this.index + "原CK失效，刷新vusession失败: " + _0x11e65e.data.err_msg);
        }
      } else {
        _0x1b79bf.logAndNotify("账号" + this.index + "原CK失效，刷新vusession失败: " + _0x11e65e.msg);
      }
    } catch (_0x40d8fe) {
      console.log(_0x40d8fe);
    } finally {}
  }
  async queryUserActivity(_0xf5f9f7 = false) {
    try {
      let _0x2060d3 = "https://pbaccess.video.qq.com/activity/welfare_center/v2/queryUserActivityNew",
        _0xa8cbe0 = "{\"activity_id\":" + _0x4bcdf5 + "}",
        _0x28e851 = _0x5ef8e6(_0x2060d3, this.cookie, _0xa8cbe0);
      await _0x3f8965("post", _0x28e851);
      let _0x507650 = _0x150e6d;
      if (!_0x507650) {
        return;
      }
      _0x507650.err_code == 0 ? (this.coin = _0x507650.data.asset_info.coin, this.sponsor_id = _0x507650.data.vuid_encoded, _0xf5f9f7 ? _0x1b79bf.logAndNotify("账号" + this.index + "[" + this.name + "]: " + this.coin + "金币") : (console.log("账号" + this.index + "[" + this.name + "]金币：" + this.coin), console.log("账号" + this.index + "[" + this.name + "]助力码：" + this.sponsor_id), _0x507650.data.task_info.browse_info.browse_record.length < 2 && (await _0x1b79bf.wait(1000), await this.browseTask("caochangdi", "4")), _0x507650.data.task_info.watch_video_info.watch_video_record.length < 2 && (await _0x1b79bf.wait(1000), await this.watchVideoTask("mzc00200p51jpn7", "1")))) : console.log("账号[" + this.name + "]查询账户失败: " + _0x507650.err_msg);
    } catch (_0x48385b) {
      console.log(_0x48385b);
    } finally {}
  }
  async browseTask(_0x475a89, _0xbf8412) {
    try {
      let _0x1e925b = "https://pbaccess.video.qq.com/activity/platform/gateway/v2/browse";
      const _0x5ccd76 = {
        activity_id: _0x4bcdf5,
        browse_page: _0x475a89,
        task_group_id: _0xbf8412
      };
      let _0x3e73ef = JSON.stringify(_0x5ccd76),
        _0x32592a = _0x5ef8e6(_0x1e925b, this.cookie, _0x3e73ef);
      await _0x3f8965("post", _0x32592a);
      let _0x18790d = _0x150e6d;
      if (!_0x18790d) {
        return;
      }
      _0x18790d.err_code == 0 ? console.log("账号[" + this.name + "]完成浏览任务成功") : console.log("账号[" + this.name + "]完成浏览任务失败: " + _0x18790d.err_msg);
    } catch (_0x3efb90) {
      console.log(_0x3efb90);
    } finally {}
  }
  async watchVideoTask(_0x22c1f5, _0x18591f) {
    try {
      let _0x202772 = "https://pbaccess.video.qq.com/activity/platform/gateway/v2/WatchVideo";
      const _0x2a2b7a = {
        activity_id: _0x4bcdf5,
        vid: _0x22c1f5,
        task_group_id: _0x18591f
      };
      let _0x304c2c = JSON.stringify(_0x2a2b7a),
        _0x18a58a = _0x5ef8e6(_0x202772, this.cookie, _0x304c2c);
      await _0x3f8965("post", _0x18a58a);
      let _0x444c71 = _0x150e6d;
      if (!_0x444c71) {
        return;
      }
      _0x444c71.err_code == 0 ? console.log("账号[" + this.name + "]完成播放任务成功") : console.log("账号[" + this.name + "]完成播放任务失败: " + _0x444c71.err_msg);
    } catch (_0x5a4e9c) {
      console.log(_0x5a4e9c);
    } finally {}
  }
  async querySignInfo(_0x334f29) {
    try {
      let _0x4b15bd = "https://pbaccess.video.qq.com/activity/platform/gateway/v2/querySignInfo";
      const _0x21a711 = {
        activity_id: _0x4bcdf5,
        task_group_id: _0x334f29
      };
      let _0x29f53a = JSON.stringify(_0x21a711),
        _0x3a7385 = _0x5ef8e6(_0x4b15bd, this.cookie, _0x29f53a);
      await _0x3f8965("post", _0x3a7385);
      let _0x1fb744 = _0x150e6d;
      if (!_0x1fb744) {
        return;
      }
      _0x1fb744.err_code == 0 ? (console.log("账号[" + this.name + "]今天" + (_0x1fb744.data.is_sign ? "已" : "未") + "签到"), !_0x1fb744.data.is_sign && (await _0x1b79bf.wait(1000), await this.signin(_0x334f29))) : console.log("账号[" + this.name + "]查询签到状态失败: " + _0x1fb744.err_msg);
    } catch (_0x1793a2) {
      console.log(_0x1793a2);
    } finally {}
  }
  async signin(_0x22dc1b) {
    try {
      let _0x36abb3 = "https://pbaccess.video.qq.com/activity/platform/gateway/v2/signPlay";
      const _0x5e1d4f = {
        activity_id: _0x4bcdf5,
        task_group_id: _0x22dc1b
      };
      let _0xf8b192 = JSON.stringify(_0x5e1d4f),
        _0x3b6b31 = _0x5ef8e6(_0x36abb3, this.cookie, _0xf8b192);
      await _0x3f8965("post", _0x3b6b31);
      let _0x5f4cd8 = _0x150e6d;
      if (!_0x5f4cd8) {
        return;
      }
      _0x5f4cd8.err_code == 0 ? console.log("账号[" + this.name + "]签到成功，获得" + _0x5f4cd8.data.reward_count + "金币") : console.log("账号[" + this.name + "]签到失败: " + _0x5f4cd8.err_msg);
    } catch (_0x4232df) {
      console.log(_0x4232df);
    } finally {}
  }
  async helpFriend(_0x1198a1) {
    try {
      let _0xc5430b = "https://pbaccess.video.qq.com/activity/platform/gateway/v2/helpShare";
      const _0x238cb7 = {
        activity_id: _0x4bcdf5,
        sponsor_id: _0x1198a1.sponsor_id,
        task_group_id: 2
      };
      let _0x51338c = JSON.stringify(_0x238cb7),
        _0x303fbc = _0x5ef8e6(_0xc5430b, this.cookie, _0x51338c);
      await _0x3f8965("post", _0x303fbc);
      let _0x4da364 = _0x150e6d;
      if (_0x4da364.err_code == 0) {
        console.log("账号[" + this.name + "]助力账号[" + _0x1198a1.name + "]成功");
      } else {
        console.log("账号[" + this.name + "]助力账号[" + _0x1198a1.name + "]失败：" + _0x4da364.err_msg);
        if (_0x4da364?.["err_msg"]) {
          if (_0x4da364.err_msg.indexOf("已完成助力任务啦") > -1) {
            _0x1198a1.needHelp = false;
          } else {
            if (_0x4da364.err_msg.indexOf("您今天助力已达上限") > -1) {
              this.canHelp = false;
            } else {
              _0x4da364.err_msg.indexOf("账号存在安全风险") > -1 && (this.canHelp = false);
            }
          }
        }
      }
    } catch (_0x2f5636) {
      console.log(_0x2f5636);
    } finally {}
  }
  async helpMe(_0x5914d1) {
    try {
      let _0x372911 = "https://pbaccess.video.qq.com/activity/platform/gateway/v2/helpShare";
      const _0x34de5a = {
        activity_id: _0x4bcdf5,
        sponsor_id: _0x5914d1.id,
        task_group_id: 2
      };
      let _0x106a74 = JSON.stringify(_0x34de5a),
        _0x40769e = _0x5ef8e6(_0x372911, this.cookie, _0x106a74);
      await _0x3f8965("post", _0x40769e);
      let _0x521c60 = _0x150e6d;
      if (_0x521c60.err_code != 0) {
        if (_0x521c60?.["err_msg"]) {
          if (_0x521c60.err_msg.indexOf("您今天助力已达上限") > -1) {
            this.canHelp = false;
          } else {
            if (_0x521c60.err_msg.indexOf("账号存在安全风险") > -1) {
              this.canHelp = false;
            } else {
              _0x521c60.err_msg.indexOf("已完成助力任务") > -1 && (_0x5914d1.isMax = true);
            }
          }
        }
      }
    } catch (_0x2743ae) {
      console.log(_0x2743ae);
    } finally {}
  }
  async userHelpTask() {
    let _0x682824 = _0x144187.length,
      _0xf691de = _0x1b79bf.getMin(_0x2b4303, _0x682824);
    if (_0xf691de > 0) {
      let _0x273ed2 = Math.floor(Math.random() * _0x682824);
      for (let _0x529006 = 0; _0x529006 < _0xf691de; _0x529006++) {
        let _0x380daa = _0x144187[(_0x273ed2 + _0x529006) % _0x682824];
        await this.helpMe(_0x380daa);
        if (!this.canHelp) {
          break;
        }
        await _0x1b79bf.wait(1000);
      }
    }
    let _0x2a038f = this.index;
    for (let _0x181a14 = _0x2a038f; _0x181a14 < _0x2a038f + _0x65b07e - 1; _0x181a14++) {
      let _0x734d8d = _0x370dd2[_0x181a14 % _0x65b07e];
      if (!_0x734d8d.valid) {
        continue;
      }
      await this.helpFriend(_0x734d8d);
      if (!this.canHelp) {
        return;
      }
      await _0x1b79bf.wait(1000);
    }
    for (let _0x50aff0 of _0x144187.filter(_0x196d17 => !_0x196d17.isMax)) {
      await this.helpMe(_0x50aff0);
      if (!this.canHelp) {
        return;
      }
      await _0x1b79bf.wait(1000);
    }
  }
}
!(async () => {
  if (typeof $request !== "undefined") {
    await _0x2f9aab();
  } else {
    await _0x22c780();
    if (_0x4302c5 == false) {
      return;
    }
    await _0x1cc00d();
    if (!(await _0x3dbcf1())) {
      return;
    }
    console.log("\n------------- 登录 -------------");
    for (let _0x44300a of _0x370dd2) {
      await _0x44300a.getUserName();
      await _0x1b79bf.wait(1000);
    }
    let _0xe8f65f = _0x370dd2.filter(_0x2c2bd5 => _0x2c2bd5.valid);
    if (_0xe8f65f.length > 0) {
      console.log("\n------------- 任务 -------------");
      for (let _0x3be31c of _0xe8f65f) {
        console.log("=========== 账号" + _0x3be31c.index + "[" + _0x3be31c.name + "] ===========");
        await _0x3be31c.queryUserActivity();
        await _0x1b79bf.wait(1000);
      }
      console.log("\n------------- 签到 -------------");
      for (let _0x3a665b of _0xe8f65f) {
        await _0x3a665b.querySignInfo(5);
        await _0x1b79bf.wait(1000);
      }
      console.log("\n------------- 互助 -------------");
      for (let _0x580c4c of _0xe8f65f) {
        await _0x580c4c.userHelpTask();
        await _0x1b79bf.wait(1000);
      }
      _0x1b79bf.logAndNotify("\n------------- 金币 -------------");
      for (let _0x37b7db of _0xe8f65f) {
        await _0x37b7db.queryUserActivity(true);
        await _0x1b79bf.wait(1000);
      }
    }
    await _0x1b79bf.showmsg();
  }
})().catch(_0x17268c => console.log(_0x17268c)).finally(() => _0x1b79bf.done());
async function _0x2f9aab() {
  if ($request.url.indexOf("welfare_center/queryUserActivityNew") > -1) {
    let _0x4aeb3e = $request.headers.Cookie,
      _0x95ced9 = "undefined";
    if (_0x4aeb3e.indexOf("vuserid") > -1 && _0x4aeb3e.indexOf("vusession") > -1) {
      let _0x5f2d79 = _0x4aeb3e.match(/(vuserid=\d+)/);
      if (_0x5f2d79) {
        _0x95ced9 = _0x5f2d79[1];
      }
      _0xd4cf3d ? _0xd4cf3d.indexOf(_0x95ced9) == -1 && (_0xd4cf3d = _0xd4cf3d + "\n" + _0x4aeb3e, _0x1b79bf.setdata(_0xd4cf3d, "txspCookie"), ckList = _0xd4cf3d.split("\n"), _0x1b79bf.msg("获取第" + ckList.length + "个ck成功: " + _0x4aeb3e)) : (_0x1b79bf.setdata(_0x4aeb3e, "txspCookie"), _0x1b79bf.msg("获取第1个ck成功: " + _0x4aeb3e));
    }
  }
}
async function _0x3dbcf1() {
  if (_0xd4cf3d) {
    let _0x50c672 = _0x5e79bc[0];
    for (let _0x53f567 of _0x5e79bc) {
      if (_0xd4cf3d.indexOf(_0x53f567) > -1) {
        _0x50c672 = _0x53f567;
        break;
      }
    }
    for (let _0x19729a of _0xd4cf3d.split(_0x50c672)) {
      if (_0x19729a) {
        _0x370dd2.push(new _0x90650a(_0x19729a));
      }
    }
    _0x65b07e = _0x370dd2.length;
  } else {
    console.log("未找到CK");
    return;
  }
  console.log("共找到" + _0x65b07e + "个账号");
  return true;
}
async function _0x22c780(_0x391df1 = 0) {
  const _0x1d3ca9 = {
    url: _0x173ef1
  };
  await _0x3f8965("get", _0x1d3ca9);
  let _0x41b2e0 = _0x150e6d;
  if (!_0x41b2e0) {
    if (_0x391df1 < _0x1c280e) {
      await _0x22c780(++_0x391df1);
    }
    return;
  }
  _0x41b2e0?.["code"] == 0 && (_0x41b2e0 = JSON.parse(_0x41b2e0.data.file.data));
  _0x41b2e0?.["commonMsg"] && _0x41b2e0.commonMsg.length > 0 && console.log(_0x41b2e0.commonMsg.join("\n") + "\n");
  _0x41b2e0?.["commonNotify"] && _0x41b2e0.commonNotify.length > 0 && _0x1b79bf.logAndNotify(_0x41b2e0.commonNotify.join("\n") + "\n");
  if (_0x41b2e0[_0x5d55f7]) {
    let _0x2c8e5e = _0x41b2e0[_0x5d55f7];
    if (_0x2c8e5e.status == 0) {
      if (_0x1668fd >= _0x2c8e5e.version) {
        _0x4302c5 = true;
        _0x5be7d2 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x5d55f7 + ".json";
        console.log(_0x2c8e5e.msg[_0x2c8e5e.status]);
        console.log(_0x2c8e5e.updateMsg);
        console.log("现在运行的脚本版本是：" + _0x1668fd + "，最新脚本版本：" + _0x2c8e5e.latestVersion);
      } else {
        console.log(_0x2c8e5e.versionMsg);
      }
    } else {
      console.log(_0x2c8e5e.msg[_0x2c8e5e.status]);
    }
  } else {
    console.log(_0x41b2e0.errorMsg);
  }
}
async function _0x1cc00d(_0x2fc0fc = 0) {
  const _0x1a1075 = {
    url: _0x5be7d2
  };
  await _0x3f8965("get", _0x1a1075);
  let _0xf61250 = _0x150e6d;
  if (!_0xf61250) {
    if (_0x2fc0fc < _0x1c280e) {
      await _0x1cc00d(++_0x2fc0fc);
    }
    return;
  }
  _0xf61250?.["code"] == 0 && (_0xf61250 = JSON.parse(_0xf61250.data.file.data));
  if (_0xf61250.helpCode) {
    for (let _0x142de9 of _0xf61250.helpCode) _0x144187.push({
      id: _0x142de9,
      isMax: false
    });
  }
  _0x2b4303 = _0xf61250.helpNum || 0;
  return;
}
function _0x5ef8e6(_0x10da9f, _0x13c00a, _0x19032a = "") {
  let _0x31b243 = _0x10da9f.replace("//", "/").split("/")[1];
  const _0xcb9972 = {
    Host: _0x31b243,
    Connection: "keep-alive",
    Cookie: _0x13c00a,
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11A465 QQLiveBrowser/8.5.95 AppType/UN WebKitCore/WKWebView iOS GDTTangramMobSDK/4.370.6 GDTMobSDK/4.370.6 cellPhone/iPhone 12",
    Referer: "https://fuli.v.qq.com/",
    Origin: "https://fuli.v.qq.com/"
  };
  const _0x423311 = {
    url: _0x10da9f,
    headers: _0xcb9972,
    timeout: 5000
  };
  _0x19032a && (_0x423311.body = _0x19032a, _0x423311.headers["Content-Type"] = "application/json", _0x423311.headers["Content-Length"] = _0x423311.body ? _0x423311.body.length : 0);
  return _0x423311;
}
async function _0x3f8965(_0x1ad653, _0x493b80) {
  _0x150e6d = null;
  _0x34e361 = null;
  _0x3f68f7 = null;
  return new Promise(_0x26a0be => {
    _0x1b79bf.send(_0x1ad653, _0x493b80, async (_0x3b87b7, _0xe05e0e, _0x22b072) => {
      try {
        _0x34e361 = _0xe05e0e;
        _0x3f68f7 = _0x22b072;
        if (_0x3b87b7) {
          console.log(_0x1ad653 + "请求失败");
          console.log(JSON.stringify(_0x3b87b7));
        } else {
          if (_0x22b072.body) {
            if (typeof _0x22b072.body == "object") {
              _0x150e6d = _0x22b072.body;
            } else {
              try {
                _0x150e6d = JSON.parse(_0x22b072.body);
              } catch (_0x2e6ffa) {
                _0x150e6d = _0x22b072.body;
              }
            }
          }
        }
      } catch (_0x41bebe) {
        console.log(_0x41bebe);
      } finally {
        _0x26a0be();
      }
    });
  });
}
function _0x3800ae(_0x25054d, _0x46c7cc, _0x3b274d, _0x37ff18, _0x224f3e, _0xe7e1c7) {
  return CryptoJS[_0x25054d].encrypt(CryptoJS.enc.Utf8.parse(_0x37ff18), CryptoJS.enc.Utf8.parse(_0x224f3e), {
    mode: CryptoJS.mode[_0x46c7cc],
    padding: CryptoJS.pad[_0x3b274d],
    iv: CryptoJS.enc.Utf8.parse(_0xe7e1c7)
  }).ciphertext.toString(CryptoJS.enc.Base64);
}
function _0x1395b7(_0x28c9bd, _0x22a0df, _0x1f1c24, _0x145d6d, _0xd21aea, _0xe7f801) {
  return CryptoJS[_0x28c9bd].decrypt({
    ciphertext: CryptoJS.enc.Base64.parse(_0x145d6d)
  }, CryptoJS.enc.Utf8.parse(_0xd21aea), {
    mode: CryptoJS.mode[_0x22a0df],
    padding: CryptoJS.pad[_0x1f1c24],
    iv: CryptoJS.enc.Utf8.parse(_0xe7f801)
  }).toString(CryptoJS.enc.Utf8);
}
var _0x333bcd = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function (_0x50f67e) {
    var _0x50904c = "";
    var _0x17e0e2, _0xcf100e, _0x1a517d, _0x5e5f61, _0xe340aa, _0x1700f2, _0xd37a44;
    var _0x18f44b = 0;
    _0x50f67e = _0x333bcd._utf8_encode(_0x50f67e);
    while (_0x18f44b < _0x50f67e.length) {
      _0x17e0e2 = _0x50f67e.charCodeAt(_0x18f44b++);
      _0xcf100e = _0x50f67e.charCodeAt(_0x18f44b++);
      _0x1a517d = _0x50f67e.charCodeAt(_0x18f44b++);
      _0x5e5f61 = _0x17e0e2 >> 2;
      _0xe340aa = (_0x17e0e2 & 3) << 4 | _0xcf100e >> 4;
      _0x1700f2 = (_0xcf100e & 15) << 2 | _0x1a517d >> 6;
      _0xd37a44 = _0x1a517d & 63;
      if (isNaN(_0xcf100e)) {
        _0x1700f2 = _0xd37a44 = 64;
      } else {
        isNaN(_0x1a517d) && (_0xd37a44 = 64);
      }
      _0x50904c = _0x50904c + this._keyStr.charAt(_0x5e5f61) + this._keyStr.charAt(_0xe340aa) + this._keyStr.charAt(_0x1700f2) + this._keyStr.charAt(_0xd37a44);
    }
    return _0x50904c;
  },
  decode: function (_0x14d71c) {
    var _0x1ba762 = "";
    var _0x3af9e7, _0x1cac50, _0x241aef;
    var _0xfe3f5e, _0x523608, _0x3351d7, _0x8998b7;
    var _0x2da85a = 0;
    _0x14d71c = _0x14d71c.replace(/[^A-Za-z0-9+/=]/g, "");
    while (_0x2da85a < _0x14d71c.length) {
      _0xfe3f5e = this._keyStr.indexOf(_0x14d71c.charAt(_0x2da85a++));
      _0x523608 = this._keyStr.indexOf(_0x14d71c.charAt(_0x2da85a++));
      _0x3351d7 = this._keyStr.indexOf(_0x14d71c.charAt(_0x2da85a++));
      _0x8998b7 = this._keyStr.indexOf(_0x14d71c.charAt(_0x2da85a++));
      _0x3af9e7 = _0xfe3f5e << 2 | _0x523608 >> 4;
      _0x1cac50 = (_0x523608 & 15) << 4 | _0x3351d7 >> 2;
      _0x241aef = (_0x3351d7 & 3) << 6 | _0x8998b7;
      _0x1ba762 = _0x1ba762 + String.fromCharCode(_0x3af9e7);
      _0x3351d7 != 64 && (_0x1ba762 = _0x1ba762 + String.fromCharCode(_0x1cac50));
      _0x8998b7 != 64 && (_0x1ba762 = _0x1ba762 + String.fromCharCode(_0x241aef));
    }
    _0x1ba762 = _0x333bcd._utf8_decode(_0x1ba762);
    return _0x1ba762;
  },
  _utf8_encode: function (_0x3920a0) {
    _0x3920a0 = _0x3920a0.replace(/rn/g, "n");
    var _0x106817 = "";
    for (var _0x4572f3 = 0; _0x4572f3 < _0x3920a0.length; _0x4572f3++) {
      var _0x5eeac1 = _0x3920a0.charCodeAt(_0x4572f3);
      if (_0x5eeac1 < 128) {
        _0x106817 += String.fromCharCode(_0x5eeac1);
      } else {
        _0x5eeac1 > 127 && _0x5eeac1 < 2048 ? (_0x106817 += String.fromCharCode(_0x5eeac1 >> 6 | 192), _0x106817 += String.fromCharCode(_0x5eeac1 & 63 | 128)) : (_0x106817 += String.fromCharCode(_0x5eeac1 >> 12 | 224), _0x106817 += String.fromCharCode(_0x5eeac1 >> 6 & 63 | 128), _0x106817 += String.fromCharCode(_0x5eeac1 & 63 | 128));
      }
    }
    return _0x106817;
  },
  _utf8_decode: function (_0x5a2445) {
    c1 = c2 = 0;
    var _0x37d448 = "",
      _0x3b9d0c = 0,
      _0x5d1e27 = c1;
    while (_0x3b9d0c < _0x5a2445.length) {
      _0x5d1e27 = _0x5a2445.charCodeAt(_0x3b9d0c);
      if (_0x5d1e27 < 128) {
        _0x37d448 += String.fromCharCode(_0x5d1e27);
        _0x3b9d0c++;
      } else {
        _0x5d1e27 > 191 && _0x5d1e27 < 224 ? (c2 = _0x5a2445.charCodeAt(_0x3b9d0c + 1), _0x37d448 += String.fromCharCode((_0x5d1e27 & 31) << 6 | c2 & 63), _0x3b9d0c += 2) : (c2 = _0x5a2445.charCodeAt(_0x3b9d0c + 1), c3 = _0x5a2445.charCodeAt(_0x3b9d0c + 2), _0x37d448 += String.fromCharCode((_0x5d1e27 & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x3b9d0c += 3);
      }
    }
    return _0x37d448;
  }
};
function _0x588cea(_0x1d66b4) {
  function _0x155370(_0x2304e1, _0x1245ca) {
    return _0x2304e1 << _0x1245ca | _0x2304e1 >>> 32 - _0x1245ca;
  }
  function _0x3935a1(_0x2de1a3, _0x15748d) {
    var _0x3e3951, _0x41fce5, _0x4acef5, _0xec8136, _0x6a7982;
    _0x4acef5 = 2147483648 & _0x2de1a3;
    _0xec8136 = 2147483648 & _0x15748d;
    _0x3e3951 = 1073741824 & _0x2de1a3;
    _0x41fce5 = 1073741824 & _0x15748d;
    _0x6a7982 = (1073741823 & _0x2de1a3) + (1073741823 & _0x15748d);
    return _0x3e3951 & _0x41fce5 ? 2147483648 ^ _0x6a7982 ^ _0x4acef5 ^ _0xec8136 : _0x3e3951 | _0x41fce5 ? 1073741824 & _0x6a7982 ? 3221225472 ^ _0x6a7982 ^ _0x4acef5 ^ _0xec8136 : 1073741824 ^ _0x6a7982 ^ _0x4acef5 ^ _0xec8136 : _0x6a7982 ^ _0x4acef5 ^ _0xec8136;
  }
  function _0x59f6a5(_0x5d5fd6, _0x3e430d, _0xb35cb8) {
    return _0x5d5fd6 & _0x3e430d | ~_0x5d5fd6 & _0xb35cb8;
  }
  function _0x9a7515(_0x52167d, _0x42fcd3, _0x2bf75c) {
    return _0x52167d & _0x2bf75c | _0x42fcd3 & ~_0x2bf75c;
  }
  function _0x1c8cd5(_0x1d74f7, _0x41de14, _0x5d8f8e) {
    return _0x1d74f7 ^ _0x41de14 ^ _0x5d8f8e;
  }
  function _0x3ef9c9(_0x1408be, _0x551f09, _0x2a2bd3) {
    return _0x551f09 ^ (_0x1408be | ~_0x2a2bd3);
  }
  function _0x42d196(_0x19faba, _0x5486c7, _0x5077ed, _0x4f5968, _0x20a63e, _0x4d1e04, _0x4e12c5) {
    _0x19faba = _0x3935a1(_0x19faba, _0x3935a1(_0x3935a1(_0x59f6a5(_0x5486c7, _0x5077ed, _0x4f5968), _0x20a63e), _0x4e12c5));
    return _0x3935a1(_0x155370(_0x19faba, _0x4d1e04), _0x5486c7);
  }
  function _0x35d863(_0x3be9f2, _0x18503c, _0xe18e9f, _0x1291c7, _0x486abf, _0x4b2406, _0x498d07) {
    _0x3be9f2 = _0x3935a1(_0x3be9f2, _0x3935a1(_0x3935a1(_0x9a7515(_0x18503c, _0xe18e9f, _0x1291c7), _0x486abf), _0x498d07));
    return _0x3935a1(_0x155370(_0x3be9f2, _0x4b2406), _0x18503c);
  }
  function _0x2c3545(_0xff6017, _0x20613e, _0x42db5c, _0x9df9a3, _0x313cee, _0x3c65d3, _0x1d1cab) {
    _0xff6017 = _0x3935a1(_0xff6017, _0x3935a1(_0x3935a1(_0x1c8cd5(_0x20613e, _0x42db5c, _0x9df9a3), _0x313cee), _0x1d1cab));
    return _0x3935a1(_0x155370(_0xff6017, _0x3c65d3), _0x20613e);
  }
  function _0x11065f(_0x326de9, _0x2d814f, _0x39eefc, _0x295f1c, _0x1351e9, _0xb18b6a, _0x12bf36) {
    _0x326de9 = _0x3935a1(_0x326de9, _0x3935a1(_0x3935a1(_0x3ef9c9(_0x2d814f, _0x39eefc, _0x295f1c), _0x1351e9), _0x12bf36));
    return _0x3935a1(_0x155370(_0x326de9, _0xb18b6a), _0x2d814f);
  }
  function _0x49c322(_0x654eb8) {
    for (var _0x5d03f4, _0x43c1b8 = _0x654eb8.length, _0x58fcfe = _0x43c1b8 + 8, _0x272427 = (_0x58fcfe - _0x58fcfe % 64) / 64, _0x317d2a = 16 * (_0x272427 + 1), _0x401eb0 = new Array(_0x317d2a - 1), _0x52895a = 0, _0x428918 = 0; _0x43c1b8 > _0x428918;) {
      _0x5d03f4 = (_0x428918 - _0x428918 % 4) / 4;
      _0x52895a = _0x428918 % 4 * 8;
      _0x401eb0[_0x5d03f4] = _0x401eb0[_0x5d03f4] | _0x654eb8.charCodeAt(_0x428918) << _0x52895a;
      _0x428918++;
    }
    _0x5d03f4 = (_0x428918 - _0x428918 % 4) / 4;
    _0x52895a = _0x428918 % 4 * 8;
    _0x401eb0[_0x5d03f4] = _0x401eb0[_0x5d03f4] | 128 << _0x52895a;
    _0x401eb0[_0x317d2a - 2] = _0x43c1b8 << 3;
    _0x401eb0[_0x317d2a - 1] = _0x43c1b8 >>> 29;
    return _0x401eb0;
  }
  function _0x29dacc(_0x3835d6) {
    var _0x4af2c7,
      _0x13f1de,
      _0x4b34bb = "",
      _0x5403e0 = "";
    for (_0x13f1de = 0; 3 >= _0x13f1de; _0x13f1de++) {
      _0x4af2c7 = _0x3835d6 >>> 8 * _0x13f1de & 255;
      _0x5403e0 = "0" + _0x4af2c7.toString(16);
      _0x4b34bb += _0x5403e0.substr(_0x5403e0.length - 2, 2);
    }
    return _0x4b34bb;
  }
  function _0x3458b8(_0x33b254) {
    _0x33b254 = _0x33b254.replace(/\r\n/g, "\n");
    for (var _0x393787 = "", _0x51a8f5 = 0; _0x51a8f5 < _0x33b254.length; _0x51a8f5++) {
      var _0x27254d = _0x33b254.charCodeAt(_0x51a8f5);
      128 > _0x27254d ? _0x393787 += String.fromCharCode(_0x27254d) : _0x27254d > 127 && 2048 > _0x27254d ? (_0x393787 += String.fromCharCode(_0x27254d >> 6 | 192), _0x393787 += String.fromCharCode(63 & _0x27254d | 128)) : (_0x393787 += String.fromCharCode(_0x27254d >> 12 | 224), _0x393787 += String.fromCharCode(_0x27254d >> 6 & 63 | 128), _0x393787 += String.fromCharCode(63 & _0x27254d | 128));
    }
    return _0x393787;
  }
  var _0xde7153,
    _0x5da229,
    _0x4b6650,
    _0x4ce6f1,
    _0x1e9237,
    _0x4b8cdd,
    _0x39074f,
    _0x4435ba,
    _0x48dfb7,
    _0x31c948 = [],
    _0x5ded06 = 7,
    _0x9bd8a7 = 12,
    _0x425788 = 17,
    _0x555ae1 = 22,
    _0x31dec5 = 5,
    _0x2956dd = 9,
    _0x270b9f = 14,
    _0x3737a1 = 20,
    _0x2e57ed = 4,
    _0x2180b1 = 11,
    _0x1c0114 = 16,
    _0x517d25 = 23,
    _0xde0873 = 6,
    _0x4e2ffe = 10,
    _0x5282da = 15,
    _0x2eb7b6 = 21;
  for (_0x1d66b4 = _0x3458b8(_0x1d66b4), _0x31c948 = _0x49c322(_0x1d66b4), _0x4b8cdd = 1732584193, _0x39074f = 4023233417, _0x4435ba = 2562383102, _0x48dfb7 = 271733878, _0xde7153 = 0; _0xde7153 < _0x31c948.length; _0xde7153 += 16) {
    _0x5da229 = _0x4b8cdd;
    _0x4b6650 = _0x39074f;
    _0x4ce6f1 = _0x4435ba;
    _0x1e9237 = _0x48dfb7;
    _0x4b8cdd = _0x42d196(_0x4b8cdd, _0x39074f, _0x4435ba, _0x48dfb7, _0x31c948[_0xde7153 + 0], _0x5ded06, 3614090360);
    _0x48dfb7 = _0x42d196(_0x48dfb7, _0x4b8cdd, _0x39074f, _0x4435ba, _0x31c948[_0xde7153 + 1], _0x9bd8a7, 3905402710);
    _0x4435ba = _0x42d196(_0x4435ba, _0x48dfb7, _0x4b8cdd, _0x39074f, _0x31c948[_0xde7153 + 2], _0x425788, 606105819);
    _0x39074f = _0x42d196(_0x39074f, _0x4435ba, _0x48dfb7, _0x4b8cdd, _0x31c948[_0xde7153 + 3], _0x555ae1, 3250441966);
    _0x4b8cdd = _0x42d196(_0x4b8cdd, _0x39074f, _0x4435ba, _0x48dfb7, _0x31c948[_0xde7153 + 4], _0x5ded06, 4118548399);
    _0x48dfb7 = _0x42d196(_0x48dfb7, _0x4b8cdd, _0x39074f, _0x4435ba, _0x31c948[_0xde7153 + 5], _0x9bd8a7, 1200080426);
    _0x4435ba = _0x42d196(_0x4435ba, _0x48dfb7, _0x4b8cdd, _0x39074f, _0x31c948[_0xde7153 + 6], _0x425788, 2821735955);
    _0x39074f = _0x42d196(_0x39074f, _0x4435ba, _0x48dfb7, _0x4b8cdd, _0x31c948[_0xde7153 + 7], _0x555ae1, 4249261313);
    _0x4b8cdd = _0x42d196(_0x4b8cdd, _0x39074f, _0x4435ba, _0x48dfb7, _0x31c948[_0xde7153 + 8], _0x5ded06, 1770035416);
    _0x48dfb7 = _0x42d196(_0x48dfb7, _0x4b8cdd, _0x39074f, _0x4435ba, _0x31c948[_0xde7153 + 9], _0x9bd8a7, 2336552879);
    _0x4435ba = _0x42d196(_0x4435ba, _0x48dfb7, _0x4b8cdd, _0x39074f, _0x31c948[_0xde7153 + 10], _0x425788, 4294925233);
    _0x39074f = _0x42d196(_0x39074f, _0x4435ba, _0x48dfb7, _0x4b8cdd, _0x31c948[_0xde7153 + 11], _0x555ae1, 2304563134);
    _0x4b8cdd = _0x42d196(_0x4b8cdd, _0x39074f, _0x4435ba, _0x48dfb7, _0x31c948[_0xde7153 + 12], _0x5ded06, 1804603682);
    _0x48dfb7 = _0x42d196(_0x48dfb7, _0x4b8cdd, _0x39074f, _0x4435ba, _0x31c948[_0xde7153 + 13], _0x9bd8a7, 4254626195);
    _0x4435ba = _0x42d196(_0x4435ba, _0x48dfb7, _0x4b8cdd, _0x39074f, _0x31c948[_0xde7153 + 14], _0x425788, 2792965006);
    _0x39074f = _0x42d196(_0x39074f, _0x4435ba, _0x48dfb7, _0x4b8cdd, _0x31c948[_0xde7153 + 15], _0x555ae1, 1236535329);
    _0x4b8cdd = _0x35d863(_0x4b8cdd, _0x39074f, _0x4435ba, _0x48dfb7, _0x31c948[_0xde7153 + 1], _0x31dec5, 4129170786);
    _0x48dfb7 = _0x35d863(_0x48dfb7, _0x4b8cdd, _0x39074f, _0x4435ba, _0x31c948[_0xde7153 + 6], _0x2956dd, 3225465664);
    _0x4435ba = _0x35d863(_0x4435ba, _0x48dfb7, _0x4b8cdd, _0x39074f, _0x31c948[_0xde7153 + 11], _0x270b9f, 643717713);
    _0x39074f = _0x35d863(_0x39074f, _0x4435ba, _0x48dfb7, _0x4b8cdd, _0x31c948[_0xde7153 + 0], _0x3737a1, 3921069994);
    _0x4b8cdd = _0x35d863(_0x4b8cdd, _0x39074f, _0x4435ba, _0x48dfb7, _0x31c948[_0xde7153 + 5], _0x31dec5, 3593408605);
    _0x48dfb7 = _0x35d863(_0x48dfb7, _0x4b8cdd, _0x39074f, _0x4435ba, _0x31c948[_0xde7153 + 10], _0x2956dd, 38016083);
    _0x4435ba = _0x35d863(_0x4435ba, _0x48dfb7, _0x4b8cdd, _0x39074f, _0x31c948[_0xde7153 + 15], _0x270b9f, 3634488961);
    _0x39074f = _0x35d863(_0x39074f, _0x4435ba, _0x48dfb7, _0x4b8cdd, _0x31c948[_0xde7153 + 4], _0x3737a1, 3889429448);
    _0x4b8cdd = _0x35d863(_0x4b8cdd, _0x39074f, _0x4435ba, _0x48dfb7, _0x31c948[_0xde7153 + 9], _0x31dec5, 568446438);
    _0x48dfb7 = _0x35d863(_0x48dfb7, _0x4b8cdd, _0x39074f, _0x4435ba, _0x31c948[_0xde7153 + 14], _0x2956dd, 3275163606);
    _0x4435ba = _0x35d863(_0x4435ba, _0x48dfb7, _0x4b8cdd, _0x39074f, _0x31c948[_0xde7153 + 3], _0x270b9f, 4107603335);
    _0x39074f = _0x35d863(_0x39074f, _0x4435ba, _0x48dfb7, _0x4b8cdd, _0x31c948[_0xde7153 + 8], _0x3737a1, 1163531501);
    _0x4b8cdd = _0x35d863(_0x4b8cdd, _0x39074f, _0x4435ba, _0x48dfb7, _0x31c948[_0xde7153 + 13], _0x31dec5, 2850285829);
    _0x48dfb7 = _0x35d863(_0x48dfb7, _0x4b8cdd, _0x39074f, _0x4435ba, _0x31c948[_0xde7153 + 2], _0x2956dd, 4243563512);
    _0x4435ba = _0x35d863(_0x4435ba, _0x48dfb7, _0x4b8cdd, _0x39074f, _0x31c948[_0xde7153 + 7], _0x270b9f, 1735328473);
    _0x39074f = _0x35d863(_0x39074f, _0x4435ba, _0x48dfb7, _0x4b8cdd, _0x31c948[_0xde7153 + 12], _0x3737a1, 2368359562);
    _0x4b8cdd = _0x2c3545(_0x4b8cdd, _0x39074f, _0x4435ba, _0x48dfb7, _0x31c948[_0xde7153 + 5], _0x2e57ed, 4294588738);
    _0x48dfb7 = _0x2c3545(_0x48dfb7, _0x4b8cdd, _0x39074f, _0x4435ba, _0x31c948[_0xde7153 + 8], _0x2180b1, 2272392833);
    _0x4435ba = _0x2c3545(_0x4435ba, _0x48dfb7, _0x4b8cdd, _0x39074f, _0x31c948[_0xde7153 + 11], _0x1c0114, 1839030562);
    _0x39074f = _0x2c3545(_0x39074f, _0x4435ba, _0x48dfb7, _0x4b8cdd, _0x31c948[_0xde7153 + 14], _0x517d25, 4259657740);
    _0x4b8cdd = _0x2c3545(_0x4b8cdd, _0x39074f, _0x4435ba, _0x48dfb7, _0x31c948[_0xde7153 + 1], _0x2e57ed, 2763975236);
    _0x48dfb7 = _0x2c3545(_0x48dfb7, _0x4b8cdd, _0x39074f, _0x4435ba, _0x31c948[_0xde7153 + 4], _0x2180b1, 1272893353);
    _0x4435ba = _0x2c3545(_0x4435ba, _0x48dfb7, _0x4b8cdd, _0x39074f, _0x31c948[_0xde7153 + 7], _0x1c0114, 4139469664);
    _0x39074f = _0x2c3545(_0x39074f, _0x4435ba, _0x48dfb7, _0x4b8cdd, _0x31c948[_0xde7153 + 10], _0x517d25, 3200236656);
    _0x4b8cdd = _0x2c3545(_0x4b8cdd, _0x39074f, _0x4435ba, _0x48dfb7, _0x31c948[_0xde7153 + 13], _0x2e57ed, 681279174);
    _0x48dfb7 = _0x2c3545(_0x48dfb7, _0x4b8cdd, _0x39074f, _0x4435ba, _0x31c948[_0xde7153 + 0], _0x2180b1, 3936430074);
    _0x4435ba = _0x2c3545(_0x4435ba, _0x48dfb7, _0x4b8cdd, _0x39074f, _0x31c948[_0xde7153 + 3], _0x1c0114, 3572445317);
    _0x39074f = _0x2c3545(_0x39074f, _0x4435ba, _0x48dfb7, _0x4b8cdd, _0x31c948[_0xde7153 + 6], _0x517d25, 76029189);
    _0x4b8cdd = _0x2c3545(_0x4b8cdd, _0x39074f, _0x4435ba, _0x48dfb7, _0x31c948[_0xde7153 + 9], _0x2e57ed, 3654602809);
    _0x48dfb7 = _0x2c3545(_0x48dfb7, _0x4b8cdd, _0x39074f, _0x4435ba, _0x31c948[_0xde7153 + 12], _0x2180b1, 3873151461);
    _0x4435ba = _0x2c3545(_0x4435ba, _0x48dfb7, _0x4b8cdd, _0x39074f, _0x31c948[_0xde7153 + 15], _0x1c0114, 530742520);
    _0x39074f = _0x2c3545(_0x39074f, _0x4435ba, _0x48dfb7, _0x4b8cdd, _0x31c948[_0xde7153 + 2], _0x517d25, 3299628645);
    _0x4b8cdd = _0x11065f(_0x4b8cdd, _0x39074f, _0x4435ba, _0x48dfb7, _0x31c948[_0xde7153 + 0], _0xde0873, 4096336452);
    _0x48dfb7 = _0x11065f(_0x48dfb7, _0x4b8cdd, _0x39074f, _0x4435ba, _0x31c948[_0xde7153 + 7], _0x4e2ffe, 1126891415);
    _0x4435ba = _0x11065f(_0x4435ba, _0x48dfb7, _0x4b8cdd, _0x39074f, _0x31c948[_0xde7153 + 14], _0x5282da, 2878612391);
    _0x39074f = _0x11065f(_0x39074f, _0x4435ba, _0x48dfb7, _0x4b8cdd, _0x31c948[_0xde7153 + 5], _0x2eb7b6, 4237533241);
    _0x4b8cdd = _0x11065f(_0x4b8cdd, _0x39074f, _0x4435ba, _0x48dfb7, _0x31c948[_0xde7153 + 12], _0xde0873, 1700485571);
    _0x48dfb7 = _0x11065f(_0x48dfb7, _0x4b8cdd, _0x39074f, _0x4435ba, _0x31c948[_0xde7153 + 3], _0x4e2ffe, 2399980690);
    _0x4435ba = _0x11065f(_0x4435ba, _0x48dfb7, _0x4b8cdd, _0x39074f, _0x31c948[_0xde7153 + 10], _0x5282da, 4293915773);
    _0x39074f = _0x11065f(_0x39074f, _0x4435ba, _0x48dfb7, _0x4b8cdd, _0x31c948[_0xde7153 + 1], _0x2eb7b6, 2240044497);
    _0x4b8cdd = _0x11065f(_0x4b8cdd, _0x39074f, _0x4435ba, _0x48dfb7, _0x31c948[_0xde7153 + 8], _0xde0873, 1873313359);
    _0x48dfb7 = _0x11065f(_0x48dfb7, _0x4b8cdd, _0x39074f, _0x4435ba, _0x31c948[_0xde7153 + 15], _0x4e2ffe, 4264355552);
    _0x4435ba = _0x11065f(_0x4435ba, _0x48dfb7, _0x4b8cdd, _0x39074f, _0x31c948[_0xde7153 + 6], _0x5282da, 2734768916);
    _0x39074f = _0x11065f(_0x39074f, _0x4435ba, _0x48dfb7, _0x4b8cdd, _0x31c948[_0xde7153 + 13], _0x2eb7b6, 1309151649);
    _0x4b8cdd = _0x11065f(_0x4b8cdd, _0x39074f, _0x4435ba, _0x48dfb7, _0x31c948[_0xde7153 + 4], _0xde0873, 4149444226);
    _0x48dfb7 = _0x11065f(_0x48dfb7, _0x4b8cdd, _0x39074f, _0x4435ba, _0x31c948[_0xde7153 + 11], _0x4e2ffe, 3174756917);
    _0x4435ba = _0x11065f(_0x4435ba, _0x48dfb7, _0x4b8cdd, _0x39074f, _0x31c948[_0xde7153 + 2], _0x5282da, 718787259);
    _0x39074f = _0x11065f(_0x39074f, _0x4435ba, _0x48dfb7, _0x4b8cdd, _0x31c948[_0xde7153 + 9], _0x2eb7b6, 3951481745);
    _0x4b8cdd = _0x3935a1(_0x4b8cdd, _0x5da229);
    _0x39074f = _0x3935a1(_0x39074f, _0x4b6650);
    _0x4435ba = _0x3935a1(_0x4435ba, _0x4ce6f1);
    _0x48dfb7 = _0x3935a1(_0x48dfb7, _0x1e9237);
  }
  var _0x2987f7 = _0x29dacc(_0x4b8cdd) + _0x29dacc(_0x39074f) + _0x29dacc(_0x4435ba) + _0x29dacc(_0x48dfb7);
  return _0x2987f7.toLowerCase();
}
function _0x5d1a82(_0x25e41f) {
  function _0x2212c9(_0x3b4a0a, _0xeb8956) {
    return (_0x3b4a0a & 2147483647) + (_0xeb8956 & 2147483647) ^ _0x3b4a0a & 2147483648 ^ _0xeb8956 & 2147483648;
  }
  function _0x3f7c4f(_0x2f3f18) {
    var _0x144cb0 = "0123456789abcdef",
      _0x527c93 = "";
    for (var _0x36bae6 = 7; _0x36bae6 >= 0; _0x36bae6--) {
      _0x527c93 += _0x144cb0.charAt(_0x2f3f18 >> _0x36bae6 * 4 & 15);
    }
    return _0x527c93;
  }
  function _0x16bcc7(_0x13f336) {
    var _0x2c0c61 = (_0x13f336.length + 8 >> 6) + 1,
      _0x567b8e = new Array(_0x2c0c61 * 16);
    for (var _0xa25777 = 0; _0xa25777 < _0x2c0c61 * 16; _0xa25777++) {
      _0x567b8e[_0xa25777] = 0;
    }
    for (_0xa25777 = 0; _0xa25777 < _0x13f336.length; _0xa25777++) {
      _0x567b8e[_0xa25777 >> 2] |= _0x13f336.charCodeAt(_0xa25777) << 24 - (_0xa25777 & 3) * 8;
    }
    _0x567b8e[_0xa25777 >> 2] |= 128 << 24 - (_0xa25777 & 3) * 8;
    _0x567b8e[_0x2c0c61 * 16 - 1] = _0x13f336.length * 8;
    return _0x567b8e;
  }
  function _0x12f793(_0x3c9bf9, _0x33f555) {
    return _0x3c9bf9 << _0x33f555 | _0x3c9bf9 >>> 32 - _0x33f555;
  }
  function _0x1cb262(_0x1f4595, _0x139d1a, _0x36ed6b, _0x4ec90f) {
    if (_0x1f4595 < 20) {
      return _0x139d1a & _0x36ed6b | ~_0x139d1a & _0x4ec90f;
    }
    if (_0x1f4595 < 40) {
      return _0x139d1a ^ _0x36ed6b ^ _0x4ec90f;
    }
    if (_0x1f4595 < 60) {
      return _0x139d1a & _0x36ed6b | _0x139d1a & _0x4ec90f | _0x36ed6b & _0x4ec90f;
    }
    return _0x139d1a ^ _0x36ed6b ^ _0x4ec90f;
  }
  function _0x3451c0(_0x326e10) {
    return _0x326e10 < 20 ? 1518500249 : _0x326e10 < 40 ? 1859775393 : _0x326e10 < 60 ? -1894007588 : -899497514;
  }
  var _0x4d285f = _0x16bcc7(_0x25e41f),
    _0x4e55ca = new Array(80),
    _0x43fd66 = 1732584193,
    _0x26fb7b = -271733879,
    _0x3f392e = -1732584194,
    _0x1ea775 = 271733878,
    _0x25c30d = -1009589776;
  for (var _0x4827af = 0; _0x4827af < _0x4d285f.length; _0x4827af += 16) {
    var _0x59cb52 = _0x43fd66,
      _0x15f6f2 = _0x26fb7b,
      _0x1bb87d = _0x3f392e,
      _0xd84469 = _0x1ea775,
      _0xf6a508 = _0x25c30d;
    for (var _0x1b8c76 = 0; _0x1b8c76 < 80; _0x1b8c76++) {
      if (_0x1b8c76 < 16) {
        _0x4e55ca[_0x1b8c76] = _0x4d285f[_0x4827af + _0x1b8c76];
      } else {
        _0x4e55ca[_0x1b8c76] = _0x12f793(_0x4e55ca[_0x1b8c76 - 3] ^ _0x4e55ca[_0x1b8c76 - 8] ^ _0x4e55ca[_0x1b8c76 - 14] ^ _0x4e55ca[_0x1b8c76 - 16], 1);
      }
      t = _0x2212c9(_0x2212c9(_0x12f793(_0x43fd66, 5), _0x1cb262(_0x1b8c76, _0x26fb7b, _0x3f392e, _0x1ea775)), _0x2212c9(_0x2212c9(_0x25c30d, _0x4e55ca[_0x1b8c76]), _0x3451c0(_0x1b8c76)));
      _0x25c30d = _0x1ea775;
      _0x1ea775 = _0x3f392e;
      _0x3f392e = _0x12f793(_0x26fb7b, 30);
      _0x26fb7b = _0x43fd66;
      _0x43fd66 = t;
    }
    _0x43fd66 = _0x2212c9(_0x43fd66, _0x59cb52);
    _0x26fb7b = _0x2212c9(_0x26fb7b, _0x15f6f2);
    _0x3f392e = _0x2212c9(_0x3f392e, _0x1bb87d);
    _0x1ea775 = _0x2212c9(_0x1ea775, _0xd84469);
    _0x25c30d = _0x2212c9(_0x25c30d, _0xf6a508);
  }
  SHA1Value = _0x3f7c4f(_0x43fd66) + _0x3f7c4f(_0x26fb7b) + _0x3f7c4f(_0x3f392e) + _0x3f7c4f(_0x1ea775) + _0x3f7c4f(_0x25c30d);
  return SHA1Value;
}
function _0x4ee126(_0x4cbc26, _0x15ff93) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(_0x36864f, _0x14c0fd) {
      this.name = _0x36864f;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x14c0fd);
      console.log(this.name + " 开始运行：\n");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    getdata(_0x45e127) {
      let _0x390d96 = this.getval(_0x45e127);
      if (/^@/.test(_0x45e127)) {
        const [, _0x1733a3, _0x2e1212] = /^@(.*?)\.(.*?)$/.exec(_0x45e127),
          _0xc0cd54 = _0x1733a3 ? this.getval(_0x1733a3) : "";
        if (_0xc0cd54) {
          try {
            const _0x20b8c5 = JSON.parse(_0xc0cd54);
            _0x390d96 = _0x20b8c5 ? this.lodash_get(_0x20b8c5, _0x2e1212, "") : _0x390d96;
          } catch (_0x1b3810) {
            _0x390d96 = "";
          }
        }
      }
      return _0x390d96;
    }
    setdata(_0x12a413, _0x51c76a) {
      let _0x5ae5ba = !1;
      if (/^@/.test(_0x51c76a)) {
        const [, _0x50bfec, _0x1241f0] = /^@(.*?)\.(.*?)$/.exec(_0x51c76a),
          _0x3526f4 = this.getval(_0x50bfec),
          _0x2de5ca = _0x50bfec ? "null" === _0x3526f4 ? null : _0x3526f4 || "{}" : "{}";
        try {
          const _0x20a624 = JSON.parse(_0x2de5ca);
          this.lodash_set(_0x20a624, _0x1241f0, _0x12a413);
          _0x5ae5ba = this.setval(JSON.stringify(_0x20a624), _0x50bfec);
        } catch (_0x20b233) {
          const _0x280037 = {};
          this.lodash_set(_0x280037, _0x1241f0, _0x12a413);
          _0x5ae5ba = this.setval(JSON.stringify(_0x280037), _0x50bfec);
        }
      } else {
        _0x5ae5ba = this.setval(_0x12a413, _0x51c76a);
      }
      return _0x5ae5ba;
    }
    getval(_0x48767f) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x48767f) : this.isQuanX() ? $prefs.valueForKey(_0x48767f) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x48767f]) : this.data && this.data[_0x48767f] || null;
    }
    setval(_0x4d2247, _0xc4c525) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x4d2247, _0xc4c525) : this.isQuanX() ? $prefs.setValueForKey(_0x4d2247, _0xc4c525) : this.isNode() ? (this.data = this.loaddata(), this.data[_0xc4c525] = _0x4d2247, this.writedata(), !0) : this.data && this.data[_0xc4c525] || null;
    }
    send(_0x490fa9, _0x1e4f53, _0xd64859 = () => {}) {
      if (_0x490fa9 != "get" && _0x490fa9 != "post" && _0x490fa9 != "put" && _0x490fa9 != "delete") {
        console.log("无效的http方法：" + _0x490fa9);
        return;
      }
      if (_0x490fa9 == "get" && _0x1e4f53.headers) {
        delete _0x1e4f53.headers["Content-Type"];
        delete _0x1e4f53.headers["Content-Length"];
      } else {
        if (_0x1e4f53.body && _0x1e4f53.headers) {
          if (!_0x1e4f53.headers["Content-Type"]) {
            _0x1e4f53.headers["Content-Type"] = "application/x-www-form-urlencoded";
          }
        }
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x1e4f53.headers = _0x1e4f53.headers || {};
          const _0xe2a731 = {
            "X-Surge-Skip-Scripting": !1
          };
          Object.assign(_0x1e4f53.headers, _0xe2a731);
        }
        const _0xa1594 = {
          method: _0x490fa9,
          url: _0x1e4f53.url,
          headers: _0x1e4f53.headers,
          timeout: _0x1e4f53.timeout,
          data: _0x1e4f53.body
        };
        if (_0x490fa9 == "get") {
          delete _0xa1594.data;
        }
        $axios(_0xa1594).then(_0x230bdb => {
          const {
              status: _0x56a267,
              request: _0x2ba5f0,
              headers: _0x130e94,
              data: _0x37dad4
            } = _0x230bdb,
            _0x644801 = {
              statusCode: _0x56a267,
              headers: _0x130e94,
              body: _0x37dad4
            };
          _0xd64859(null, _0x2ba5f0, _0x644801);
        }).catch(_0x5c06b3 => console.log(_0x5c06b3));
      } else {
        if (this.isQuanX()) {
          const _0x49cfeb = {
            hints: !1
          };
          _0x1e4f53.method = _0x490fa9.toUpperCase();
          this.isNeedRewrite && (_0x1e4f53.opts = _0x1e4f53.opts || {}, Object.assign(_0x1e4f53.opts, _0x49cfeb));
          $task.fetch(_0x1e4f53).then(_0x5aec48 => {
            const {
                statusCode: _0x1ec0b9,
                request: _0x160569,
                headers: _0x4d6e3f,
                body: _0x1e21fe
              } = _0x5aec48,
              _0x1e3fbb = {
                statusCode: _0x1ec0b9,
                headers: _0x4d6e3f,
                body: _0x1e21fe
              };
            _0xd64859(null, _0x160569, _0x1e3fbb);
          }, _0x455456 => _0xd64859(_0x455456));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            const {
                url: _0xc342e7,
                ..._0x2b162c
              } = _0x1e4f53,
              _0x37a0d6 = {
                followRedirect: false
              };
            this.instance = this.got.extend(_0x37a0d6);
            this.instance[_0x490fa9](_0xc342e7, _0x2b162c).then(_0x539a66 => {
              const {
                  statusCode: _0x25c8e0,
                  request: _0x293f04,
                  headers: _0x1107f5,
                  body: _0x501ca2
                } = _0x539a66,
                _0x3cd65b = {
                  statusCode: _0x25c8e0,
                  headers: _0x1107f5,
                  body: _0x501ca2
                };
              _0xd64859(null, _0x293f04, _0x3cd65b);
            }, _0x1e695c => {
              const {
                message: _0x2d7a4a,
                response: _0x4ab5c7
              } = _0x1e695c;
              _0xd64859(_0x2d7a4a, _0x4ab5c7, _0x4ab5c7 && _0x4ab5c7.body);
            });
          }
        }
      }
    }
    time(_0x36d23e) {
      let _0x145946 = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(_0x36d23e) && (_0x36d23e = _0x36d23e.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x3fd7a4 in _0x145946) new RegExp("(" + _0x3fd7a4 + ")").test(_0x36d23e) && (_0x36d23e = _0x36d23e.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x145946[_0x3fd7a4] : ("00" + _0x145946[_0x3fd7a4]).substr(("" + _0x145946[_0x3fd7a4]).length)));
      return _0x36d23e;
    }
    async showmsg() {
      if (!this.notifyStr) {
        return;
      }
      let _0x5aa50b = this.name + " 运行通知\n\n" + this.notifyStr;
      if (_0x1b79bf.isNode()) {
        var _0xf1fc9 = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await _0xf1fc9.sendNotify(this.name, _0x5aa50b);
      } else {
        this.msg(_0x5aa50b);
      }
    }
    logAndNotify(_0x4fd618) {
      console.log(_0x4fd618);
      this.notifyStr += _0x4fd618;
      this.notifyStr += "\n";
    }
    msg(_0x50f960 = t, _0x2d6c8c = "", _0x238c76 = "", _0x200b89) {
      const _0x216103 = _0x3125f2 => {
        if (!_0x3125f2) {
          return _0x3125f2;
        }
        if ("string" == typeof _0x3125f2) {
          return this.isLoon() ? _0x3125f2 : this.isQuanX() ? {
            "open-url": _0x3125f2
          } : this.isSurge() ? {
            url: _0x3125f2
          } : void 0;
        }
        if ("object" == typeof _0x3125f2) {
          if (this.isLoon()) {
            let _0x2c9ddc = _0x3125f2.openUrl || _0x3125f2.url || _0x3125f2["open-url"],
              _0x3cdcf5 = _0x3125f2.mediaUrl || _0x3125f2["media-url"];
            const _0x1968c6 = {
              openUrl: _0x2c9ddc,
              mediaUrl: _0x3cdcf5
            };
            return _0x1968c6;
          }
          if (this.isQuanX()) {
            let _0x566b71 = _0x3125f2["open-url"] || _0x3125f2.url || _0x3125f2.openUrl,
              _0x47dce9 = _0x3125f2["media-url"] || _0x3125f2.mediaUrl;
            const _0x15dffa = {
              "open-url": _0x566b71,
              "media-url": _0x47dce9
            };
            return _0x15dffa;
          }
          if (this.isSurge()) {
            let _0x749d75 = _0x3125f2.url || _0x3125f2.openUrl || _0x3125f2["open-url"];
            const _0x73950a = {
              url: _0x749d75
            };
            return _0x73950a;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x50f960, _0x2d6c8c, _0x238c76, _0x216103(_0x200b89)) : this.isQuanX() && $notify(_0x50f960, _0x2d6c8c, _0x238c76, _0x216103(_0x200b89)));
      let _0x422568 = ["", "============== 系统通知 =============="];
      _0x422568.push(_0x50f960);
      _0x2d6c8c && _0x422568.push(_0x2d6c8c);
      _0x238c76 && _0x422568.push(_0x238c76);
      console.log(_0x422568.join("\n"));
    }
    getMin(_0x16e987, _0x2c21d7) {
      return _0x16e987 < _0x2c21d7 ? _0x16e987 : _0x2c21d7;
    }
    getMax(_0x85a17e, _0xa537b9) {
      return _0x85a17e < _0xa537b9 ? _0xa537b9 : _0x85a17e;
    }
    padStr(_0x23a930, _0x488a4d, _0x48ea25 = "0") {
      let _0x237d41 = String(_0x23a930),
        _0x3b4870 = _0x488a4d > _0x237d41.length ? _0x488a4d - _0x237d41.length : 0,
        _0x260a48 = "";
      for (let _0x4a1eb0 = 0; _0x4a1eb0 < _0x3b4870; _0x4a1eb0++) {
        _0x260a48 += _0x48ea25;
      }
      _0x260a48 += _0x237d41;
      return _0x260a48;
    }
    json2str(_0xf29796, _0x510cf0, _0x5dfe1c = false) {
      let _0x39f5a6 = [];
      for (let _0xf668d8 of Object.keys(_0xf29796).sort()) {
        let _0x6e25e = _0xf29796[_0xf668d8];
        if (_0x6e25e && _0x5dfe1c) {
          _0x6e25e = encodeURIComponent(_0x6e25e);
        }
        _0x39f5a6.push(_0xf668d8 + "=" + _0x6e25e);
      }
      return _0x39f5a6.join(_0x510cf0);
    }
    str2json(_0x55ad50, _0x33ba0a = false) {
      let _0xdd41c9 = {};
      for (let _0x189227 of _0x55ad50.split("&")) {
        if (!_0x189227) {
          continue;
        }
        let _0xbd26f6 = _0x189227.indexOf("=");
        if (_0xbd26f6 == -1) {
          continue;
        }
        let _0x3a60b4 = _0x189227.substr(0, _0xbd26f6),
          _0x1dd5e3 = _0x189227.substr(_0xbd26f6 + 1);
        if (_0x33ba0a) {
          _0x1dd5e3 = decodeURIComponent(_0x1dd5e3);
        }
        _0xdd41c9[_0x3a60b4] = _0x1dd5e3;
      }
      return _0xdd41c9;
    }
    randomString(_0x1175ae, _0x274e07 = "abcdef0123456789") {
      let _0x61c31a = "";
      for (let _0x24895b = 0; _0x24895b < _0x1175ae; _0x24895b++) {
        _0x61c31a += _0x274e07.charAt(Math.floor(Math.random() * _0x274e07.length));
      }
      return _0x61c31a;
    }
    randomList(_0x1773cf) {
      let _0x409662 = Math.floor(Math.random() * _0x1773cf.length);
      return _0x1773cf[_0x409662];
    }
    wait(_0x5074b1) {
      return new Promise(_0x1f214b => setTimeout(_0x1f214b, _0x5074b1));
    }
    done(_0x5b41cd = {}) {
      const _0x482ab8 = new Date().getTime(),
        _0x12e279 = (_0x482ab8 - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x12e279 + " 秒！");
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x5b41cd);
      }
    }
  }(_0x4cbc26, _0x15ff93);
}