//6/30/2024, 12:20:12 PM
//Project:https://github.com/dream385/decode
const _0x595f2b = _0x261ea1("电信营业厅"),
  _0x15ce30 = require("got"),
  _0x22ff90 = require("fs"),
  _0x672035 = require("crypto-js"),
  {
    CookieJar: _0x44ed1f
  } = require("tough-cookie"),
  _0x8e5d6f = "chinaTelecom",
  _0x311fcb = /[\n\&\@]/,
  _0x1d5d49 = [_0x8e5d6f + "Account"],
  _0x396ad3 = 30000,
  _0x5c1b36 = 3;
const _0x386d68 = 5.04,
  _0x133587 = "chinaTelecom",
  _0x4a8fdc = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json";
let _0x24f328 = {};
const _0x45fbef = "./chinaTelecom_cache.json",
  _0x1aff54 = "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
  _0xa03465 = "34d7cb0bcdf07523",
  _0x5b59e6 = "1234567`90koiuyhgtfrdewsaqaqsqde",
  _0x40a180 = "\0\0\0\0\0\0\0\0",
  _0x8a3529 = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB",
  _0x280825 = "-----BEGIN PUBLIC KEY-----\n" + _0x8a3529 + "\n-----END PUBLIC KEY-----",
  _0x2d686a = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+ugG5A8cZ3FqUKDwM57GM4io6JGcStivT8UdGt67PEOihLZTw3P7371+N47PrmsCpnTRzbTgcupKtUv8ImZalYk65dU8rjC/ridwhw9ffW2LBwvkEnDkkKKRi2liWIItDftJVBiWOh17o6gfbPoNrWORcAdcbpk2L+udld5kZNwIDAQAB",
  _0x4de04b = "-----BEGIN PUBLIC KEY-----\n" + _0x2d686a + "\n-----END PUBLIC KEY-----",
  _0x238f0a = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDIPOHtjs6p4sTlpFvrx+ESsYkEvyT4JB/dcEbU6C8+yclpcmWEvwZFymqlKQq89laSH4IxUsPJHKIOiYAMzNibhED1swzecH5XLKEAJclopJqoO95o8W63Euq6K+AKMzyZt1SEqtZ0mXsN8UPnuN/5aoB3kbPLYpfEwBbhto6yrwIDAQAB",
  _0x756004 = "-----BEGIN PUBLIC KEY-----\n" + _0x238f0a + "\n-----END PUBLIC KEY-----",
  _0x20cc3d = require("node-rsa");
let _0x3be8dc = new _0x20cc3d(_0x280825);
const _0x1f6652 = {
  encryptionScheme: "pkcs1"
};
_0x3be8dc.setOptions(_0x1f6652);
let _0x206c94 = new _0x20cc3d(_0x4de04b);
const _0x252e67 = {
  encryptionScheme: "pkcs1"
};
_0x206c94.setOptions(_0x252e67);
let _0x4f6b80 = new _0x20cc3d(_0x756004);
const _0x44695f = {
  encryptionScheme: "pkcs1"
};
_0x4f6b80.setOptions(_0x44695f);
const _0x96db55 = [202201, 202202, 202203],
  _0x270886 = 5;
function _0x21e99e(_0x3622c6, _0x2e7dfc, _0x3793e8, _0xade4ec, _0x324e33, _0x3ca184) {
  return _0x672035[_0x3622c6].encrypt(_0x672035.enc.Utf8.parse(_0xade4ec), _0x672035.enc.Utf8.parse(_0x324e33), {
    mode: _0x672035.mode[_0x2e7dfc],
    padding: _0x672035.pad[_0x3793e8],
    iv: _0x672035.enc.Utf8.parse(_0x3ca184)
  }).ciphertext.toString(_0x672035.enc.Hex);
}
function _0xcb5ea7(_0x335966, _0x88170d, _0x5b9a23, _0x563d22, _0x494451, _0x1a3eff) {
  return _0x672035[_0x335966].decrypt({
    ciphertext: _0x672035.enc.Hex.parse(_0x563d22)
  }, _0x672035.enc.Utf8.parse(_0x494451), {
    mode: _0x672035.mode[_0x88170d],
    padding: _0x672035.pad[_0x5b9a23],
    iv: _0x672035.enc.Utf8.parse(_0x1a3eff)
  }).toString(_0x672035.enc.Utf8);
}
function _0x3db3c4() {
  try {
    _0x22ff90.writeFileSync(_0x45fbef, JSON.stringify(_0x24f328, null, 4), "utf-8");
  } catch (_0x15cd79) {
    console.log("保存缓存出错");
  }
}
function _0x281681() {
  try {
    _0x24f328 = JSON.parse(_0x22ff90.readFileSync(_0x45fbef, "utf-8"));
  } catch (_0x5db1af) {
    console.log("读取缓存出错, 新建一个token缓存");
    _0x3db3c4();
  }
}
class _0x4046d1 {
  constructor() {
    this.index = _0x595f2b.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x4aa2a9 = {
      limit: 0
    };
    const _0x2d9532 = {
      Connection: "keep-alive"
    };
    const _0x4f58a1 = {
      retry: _0x4aa2a9,
      timeout: _0x396ad3,
      followRedirect: false,
      headers: _0x2d9532
    };
    this.got = _0x15ce30.extend(_0x4f58a1);
  }
  log(_0x3768ca, _0x5bc6c6 = {}) {
    var _0xfe1ac0 = "",
      _0x1b7e86 = _0x595f2b.userCount.toString().length;
    if (this.index) {
      _0xfe1ac0 += "账号[" + _0x595f2b.padStr(this.index, _0x1b7e86) + "]";
    }
    if (this.name) {
      _0xfe1ac0 += "[" + this.name + "]";
    }
    _0x595f2b.log(_0xfe1ac0 + _0x3768ca, _0x5bc6c6);
  }
  async request(_0x653590) {
    const _0x186f12 = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x3dffd0 = ["TimeoutError"];
    var _0x492e7d = null,
      _0x149302 = 0,
      _0x456ab1 = _0x653590.fn || _0x653590.url;
    _0x653590.method = _0x653590?.["method"]?.["toUpperCase"]() || "GET";
    let _0x33a539;
    while (_0x149302 < _0x5c1b36) {
      try {
        _0x149302++;
        _0x33a539 = null;
        let _0x5db619 = null,
          _0x5706ac = _0x653590?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x396ad3,
          _0x128bea = false;
        await new Promise(async _0x914774 => {
          setTimeout(() => {
            _0x128bea = true;
            _0x914774();
          }, _0x5706ac);
          await this.got(_0x653590).then(_0xe51502 => {
            _0x492e7d = _0xe51502;
          }, _0x20d7f4 => {
            _0x5db619 = _0x20d7f4;
            _0x492e7d = _0x20d7f4.response;
            _0x33a539 = _0x5db619?.["code"];
          });
          _0x914774();
        });
        if (_0x128bea) {
          this.log("[" + _0x456ab1 + "]请求超时(" + _0x5706ac / 1000 + "秒)，重试第" + _0x149302 + "次");
        } else {
          if (_0x3dffd0.includes(_0x5db619?.["name"])) {
            this.log("[" + _0x456ab1 + "]请求超时(" + _0x5db619.code + ")，重试第" + _0x149302 + "次");
          } else {
            if (_0x186f12.includes(_0x5db619?.["code"])) {
              this.log("[" + _0x456ab1 + "]请求错误(" + _0x5db619.code + ")，重试第" + _0x149302 + "次");
            } else {
              let _0x5b78e4 = _0x492e7d?.["statusCode"] || 999,
                _0x18a178 = _0x5b78e4 / 100 | 0;
              if (_0x18a178 > 3) {
                this.log("请求[" + _0x456ab1 + "]返回[" + _0x5b78e4 + "]");
              }
              if (_0x18a178 <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x3ca94f) {
        _0x3ca94f.name == "TimeoutError" ? this.log("[" + _0x456ab1 + "]请求超时，重试第" + _0x149302 + "次") : this.log("[" + _0x456ab1 + "]请求错误(" + _0x3ca94f.message + ")，重试第" + _0x149302 + "次");
      }
    }
    if (_0x492e7d == null) {
      return Promise.resolve({
        statusCode: _0x33a539 || -1,
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x1181b0,
      headers: _0x12b284,
      body: _0x30f173
    } = _0x492e7d;
    if (_0x30f173) {
      try {
        _0x30f173 = JSON.parse(_0x30f173);
      } catch {}
    }
    const _0x21dd6e = {
      statusCode: _0x1181b0,
      headers: _0x12b284,
      result: _0x30f173
    };
    return Promise.resolve(_0x21dd6e);
  }
}
let _0x35d1e3 = new _0x4046d1();
class _0x4d9f38 extends _0x4046d1 {
  constructor(_0x4a68b1) {
    super();
    let _0xac84fb = _0x4a68b1.split("#");
    this.name = _0xac84fb[0];
    this.passwd = _0xac84fb?.[1] || "";
    this.uuid = [_0x595f2b.randomPattern("xxxxxxxx"), _0x595f2b.randomPattern("xxxx"), _0x595f2b.randomPattern("4xxx"), _0x595f2b.randomPattern("xxxx"), _0x595f2b.randomPattern("xxxxxxxxxxxx")];
    this.cookieJar = new _0x44ed1f();
    this.can_feed = true;
    this.jml_tokenFlag = "";
    const _0x16a22a = {
      Connection: "keep-alive",
      "User-Agent": _0x1aff54
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x16a22a
    });
  }
  load_token() {
    let _0x4aefc1 = false;
    _0x24f328[this.name] && (this.userId = _0x24f328[this.name].userId, this.token = _0x24f328[this.name].token, this.log("读取到缓存token"), _0x4aefc1 = true);
    return _0x4aefc1;
  }
  encode_phone() {
    let _0x11c9ce = this.name.split("");
    for (let _0x50a57c in _0x11c9ce) {
      _0x11c9ce[_0x50a57c] = String.fromCharCode(_0x11c9ce[_0x50a57c].charCodeAt(0) + 2);
    }
    return _0x11c9ce.join("");
  }
  encode_aes(_0x4592b7) {
    return _0x21e99e("AES", "ECB", "Pkcs7", _0x4592b7, _0xa03465, 0);
  }
  async login(_0x4cc3ac = {}) {
    let _0x46501e = false;
    try {
      let _0x286137 = _0x595f2b.time("yyyyMMddhhmmss"),
        _0x355dd7 = "iPhone 14 15.4." + this.uuid.slice(0, 2).join("") + this.name + _0x286137 + this.passwd + "0$$$0.",
        _0x52f2d5 = {
          fn: "login",
          method: "post",
          url: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
          json: {
            headerInfos: {
              code: "userLoginNormal",
              timestamp: _0x286137,
              broadAccount: "",
              broadToken: "",
              clientType: "#9.6.1#channel50#iPhone 14 Pro Max#",
              shopId: "20002",
              source: "110003",
              sourcePassword: "Sid98s",
              token: "",
              userLoginName: this.name
            },
            content: {
              attach: "test",
              fieldData: {
                loginType: "4",
                accountType: "",
                loginAuthCipherAsymmertric: _0x3be8dc.encrypt(_0x355dd7, "base64"),
                deviceUid: this.uuid.slice(0, 3).join(""),
                phoneNum: this.encode_phone(),
                isChinatelecom: "0",
                systemVersion: "15.4.0",
                authentication: this.passwd
              }
            }
          }
        },
        {
          result: _0x36b3d6
        } = await this.request(_0x52f2d5),
        _0x43b637 = _0x595f2b.get(_0x36b3d6?.["responseData"], "resultCode", -1);
      if (_0x43b637 == "0000") {
        let {
          userId = "",
          token = ""
        } = _0x36b3d6?.["responseData"]?.["data"]?.["loginSuccessResult"] || {};
        this.userId = userId;
        this.token = token;
        this.log("使用服务密码登录成功");
        _0x24f328[this.name] = {
          token: token,
          userId: userId,
          t: Date.now()
        };
        _0x3db3c4();
        _0x46501e = true;
      } else {
        let _0x1d7f21 = _0x36b3d6?.["msg"] || _0x36b3d6?.["responseData"]?.["resultDesc"] || _0x36b3d6?.["headerInfos"]?.["reason"] || "";
        this.log("服务密码登录失败[" + _0x43b637 + "]: " + _0x1d7f21);
      }
    } catch (_0x26cf2c) {
      console.log(_0x26cf2c);
    } finally {
      return _0x46501e;
    }
  }
  async get_ticket(_0x304032 = {}) {
    let _0x2434ce = "";
    try {
      let _0x1226f7 = "\n            <Request>\n                <HeaderInfos>\n                    <Code>getSingle</Code>\n                    <Timestamp>" + _0x595f2b.time("yyyyMMddhhmmss") + "</Timestamp>\n                    <BroadAccount></BroadAccount>\n                    <BroadToken></BroadToken>\n                    <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n                    <ShopId>20002</ShopId>\n                    <Source>110003</Source>\n                    <SourcePassword>Sid98s</SourcePassword>\n                    <Token>" + this.token + "</Token>\n                    <UserLoginName>" + this.name + "</UserLoginName>\n                </HeaderInfos>\n                <Content>\n                    <Attach>test</Attach>\n                    <FieldData>\n                        <TargetId>" + _0x21e99e("TripleDES", "CBC", "Pkcs7", this.userId, _0x5b59e6, _0x40a180) + "</TargetId>\n                        <Url>4a6862274835b451</Url>\n                    </FieldData>\n                </Content>\n            </Request>";
      const _0x329fe0 = {
        fn: "get_ticket",
        method: "post",
        url: "https://appgologin.189.cn:9031/map/clientXML",
        body: _0x1226f7
      };
      let {
        result: _0x3b7bb3
      } = await this.request(_0x329fe0);
      if (_0x3b7bb3) {
        let _0x99e8a8 = _0x3b7bb3.match(/\<Ticket\>(\w+)\<\/Ticket\>/);
        if (_0x99e8a8) {
          let _0x4d512f = _0x99e8a8[1];
          _0x2434ce = _0xcb5ea7("TripleDES", "CBC", "Pkcs7", _0x4d512f, _0x5b59e6, _0x40a180);
          this.ticket = _0x2434ce;
        }
      }
      !_0x2434ce && (!_0x304032.retry && (await this.login()) ? (_0x304032.retry = true, _0x2434ce = await this.get_ticket(_0x304032)) : (this.log("没有获取到ticket: "), _0x3b7bb3 && console.log(_0x3b7bb3)));
    } catch (_0x166df3) {
      console.log(_0x166df3);
    } finally {
      return _0x2434ce;
    }
  }
  async get_sign(_0x40f23f = {}) {
    let _0x2030b5 = false;
    try {
      const _0xb6e937 = {
        ticket: this.ticket
      };
      const _0x365a4c = {
        fn: "login",
        method: "get",
        url: "https://wapside.189.cn:9001/jt-sign/ssoHomLogin",
        searchParams: _0xb6e937
      };
      let {
          result: _0x427de2
        } = await this.request(_0x365a4c),
        _0xbbbfc2 = _0x595f2b.get(_0x427de2, "resoultCode", -1);
      _0x427de2?.["resoultCode"] == 0 ? (_0x2030b5 = _0x427de2?.["sign"], this.sign = _0x2030b5, this.got = this.got.extend({
        headers: {
          sign: this.sign
        }
      })) : this.log("获取sign失败[" + _0xbbbfc2 + "]");
    } catch (_0x989858) {
      console.log(_0x989858);
    } finally {
      return _0x2030b5;
    }
  }
  encrypt_para(_0x58d4cc) {
    let _0x3a3e9d = typeof _0x58d4cc == "string" ? _0x58d4cc : JSON.stringify(_0x58d4cc);
    return _0x206c94.encrypt(_0x3a3e9d, "hex");
  }
  async userCoinInfo(_0x15c5d2 = false, _0x30cf65 = {}) {
    try {
      const _0x4aeea0 = {
        phone: this.name
      };
      let _0x32bd13 = {
          fn: "userCoinInfo",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/api/home/userCoinInfo",
          json: {
            para: this.encrypt_para(_0x4aeea0)
          }
        },
        {
          result: _0xf8cea1
        } = await this.request(_0x32bd13),
        _0x4fff21 = _0x595f2b.get(_0xf8cea1, "resoultCode", -1);
      if (_0x4fff21 == 0) {
        this.coin = _0xf8cea1?.["totalCoin"] || 0;
        if (_0x15c5d2) {
          const _0x5f3537 = {
            notify: true
          };
          this.log("金豆余额: " + this.coin, _0x5f3537);
          if (_0xf8cea1.amountEx) {
            let _0x12216f = _0x595f2b.time("yyyy-MM-dd", _0xf8cea1.expireDate);
            const _0x52e854 = {
              notify: true
            };
            _0x595f2b.log("-- [" + _0x12216f + "]将过期" + _0xf8cea1.amountEx + "金豆", _0x52e854);
          }
        }
      } else {
        let _0x20be66 = _0xf8cea1?.["msg"] || _0xf8cea1?.["resoultMsg"] || _0xf8cea1?.["error"] || "";
        this.log("查询账户金豆余额错误[" + _0x4fff21 + "]: " + _0x20be66);
      }
    } catch (_0x4adedb) {
      console.log(_0x4adedb);
    }
  }
  async userStatusInfo(_0x3bd84d = {}) {
    try {
      const _0x38ff32 = {
        phone: this.name
      };
      let _0x40343a = {
        fn: "userStatusInfo",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/api/home/userStatusInfo",
        json: {
          para: this.encrypt_para(_0x38ff32)
        }
      };
      {
        let {
            result: _0x34f03a
          } = await this.request(_0x595f2b.copy(_0x40343a)),
          _0x278922 = _0x595f2b.get(_0x34f03a, "resoultCode", -1);
        if (_0x278922 == 0) {
          let {
            isSign: _0x5965df
          } = _0x34f03a?.["data"];
          _0x5965df ? this.log("今天已签到") : await this.doSign();
        } else {
          let _0xbfbdd1 = _0x34f03a?.["msg"] || _0x34f03a?.["resoultMsg"] || _0x34f03a?.["error"] || "";
          this.log("查询账户签到状态错误[" + _0x278922 + "]: " + _0xbfbdd1);
        }
      }
      {
        let {
            result: _0x266ae7
          } = await this.request(_0x595f2b.copy(_0x40343a)),
          _0x2554bc = _0x595f2b.get(_0x266ae7, "resoultCode", -1);
        if (_0x2554bc == 0) {
          let {
            continuousDay: _0x1270cb,
            signDay: _0x24db7a,
            isSeven: _0x2169b2
          } = _0x266ae7?.["data"];
          this.log("已签到" + _0x24db7a + "天, 连签" + _0x1270cb + "天");
          _0x2169b2 && (await this.exchangePrize());
        } else {
          let _0xfe7c72 = _0x266ae7?.["msg"] || _0x266ae7?.["resoultMsg"] || _0x266ae7?.["error"] || "";
          this.log("查询账户签到状态错误[" + _0x2554bc + "]: " + _0xfe7c72);
        }
      }
    } catch (_0x284bc0) {
      console.log(_0x284bc0);
    }
  }
  async continueSignDays(_0x54106a = {}) {
    try {
      const _0x5b9cc3 = {
        phone: this.name
      };
      let _0x6b6971 = {
          fn: "continueSignDays",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/continueSignDays",
          json: {
            para: this.encrypt_para(_0x5b9cc3)
          }
        },
        {
          result: _0x375413
        } = await this.request(_0x6b6971),
        _0x9eaca4 = _0x595f2b.get(_0x375413, "resoultCode", -1);
      if (_0x9eaca4 == 0) {
        this.log("抽奖连签天数: " + (_0x375413?.["continueSignDays"] || 0) + "天");
        if (_0x375413?.["continueSignDays"] == 15) {
          const _0x5dd359 = {
            type: "15"
          };
          await this.exchangePrize(_0x5dd359);
        } else {
          if (_0x375413?.["continueSignDays"] == 28) {
            const _0x25971b = {
              type: "28"
            };
            await this.exchangePrize(_0x25971b);
          }
        }
      } else {
        let _0x1848e2 = _0x375413?.["msg"] || _0x375413?.["resoultMsg"] || _0x375413?.["error"] || "";
        this.log("查询抽奖连签天数错误[" + _0x9eaca4 + "]: " + _0x1848e2);
      }
    } catch (_0x56a910) {
      console.log(_0x56a910);
    }
  }
  async doSign(_0x22cfda = {}) {
    try {
      let _0x1e12ea = {
          phone: this.name,
          date: Date.now(),
          sysType: "20002"
        },
        _0x2b9527 = {
          fn: "doSign",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/sign",
          json: {
            encode: this.encode_aes(JSON.stringify(_0x1e12ea))
          }
        },
        {
          result: _0x10a6e6
        } = await this.request(_0x2b9527),
        _0x4e2b6d = _0x595f2b.get(_0x10a6e6, "resoultCode", -1);
      if (_0x4e2b6d == 0) {
        let _0x257a89 = _0x595f2b.get(_0x10a6e6?.["data"], "code", -1);
        if (_0x257a89 == 1) {
          const _0x1371cf = {
            notify: true
          };
          this.log("签到成功，获得" + (_0x10a6e6?.["data"]?.["coin"] || 0) + "金豆", _0x1371cf);
          await this.userStatusInfo();
        } else {
          const _0x2a28ea = {
            notify: true
          };
          this.log("签到失败[" + _0x257a89 + "]: " + _0x10a6e6.data.msg, _0x2a28ea);
        }
      } else {
        let _0x29488d = _0x10a6e6?.["msg"] || _0x10a6e6?.["resoultMsg"] || _0x10a6e6?.["error"] || "";
        this.log("签到错误[" + _0x4e2b6d + "]: " + _0x29488d);
      }
    } catch (_0x1310a6) {
      console.log(_0x1310a6);
    }
  }
  async exchangePrize(_0x2af3c8 = {}) {
    try {
      let _0x21e9b5 = _0x595f2b.pop(_0x2af3c8, "type", "7");
      const _0x4a698e = {
        phone: this.name,
        type: _0x21e9b5
      };
      let _0x4f0f5c = {
          fn: "exchangePrize",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/exchangePrize",
          json: {
            para: this.encrypt_para(_0x4a698e)
          }
        },
        {
          result: _0x486808
        } = await this.request(_0x4f0f5c),
        _0x1a5153 = _0x595f2b.get(_0x486808, "resoultCode", -1);
      if (_0x1a5153 == 0) {
        let _0x26dbc8 = _0x595f2b.get(_0x486808?.["prizeDetail"], "code", -1);
        if (_0x26dbc8 == 0) {
          const _0x4404ee = {
            notify: true
          };
          this.log("连签" + _0x21e9b5 + "天抽奖: " + _0x486808?.["prizeDetail"]?.["biz"]?.["winTitle"], _0x4404ee);
        } else {
          let _0x1437b8 = _0x486808?.["prizeDetail"]?.["err"] || "";
          const _0x5e29cc = {
            notify: true
          };
          this.log("连签" + _0x21e9b5 + "天抽奖失败[" + _0x26dbc8 + "]: " + _0x1437b8, _0x5e29cc);
        }
      } else {
        let _0x492a8f = _0x486808?.["msg"] || _0x486808?.["resoultMsg"] || _0x486808?.["error"] || "";
        this.log("连签" + _0x21e9b5 + "天抽奖错误[" + _0x1a5153 + "]: " + _0x492a8f);
      }
    } catch (_0x36bf14) {
      console.log(_0x36bf14);
    }
  }
  async homepage(_0x49f5ff, _0xb8491d = {}) {
    try {
      const _0x1e76d0 = {
        phone: this.name,
        shopId: "20001",
        type: _0x49f5ff
      };
      let _0x340724 = {
          fn: "homepage",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/homepage",
          json: {
            para: this.encrypt_para(_0x1e76d0)
          }
        },
        {
          result: _0x26b83a
        } = await this.request(_0x340724),
        _0x348da8 = _0x595f2b.get(_0x26b83a, "resoultCode", -1);
      if (_0x348da8 == 0) {
        let _0x204a76 = _0x595f2b.get(_0x26b83a?.["data"]?.["head"], "code", -1);
        if (_0x204a76 == 0) {
          for (let _0x3a5f65 of _0x26b83a?.["data"]?.["biz"]?.["adItems"] || []) {
            let _0x5e54f9 = _0x3a5f65.title;
            switch (_0x3a5f65?.["taskState"]) {
              case "1":
                console.log("[" + _0x5e54f9 + "] -- 可领取奖励");
                break;
              case "2":
                console.log("[" + _0x5e54f9 + "] -- 已完成");
                break;
              case "0":
              default:
                console.log("[" + _0x5e54f9 + "] -- 未完成");
                break;
            }
            if (["0", "1"].includes(_0x3a5f65?.["taskState"])) {
              switch (_0x3a5f65.contentOne) {
                case "3":
                  if (_0x3a5f65?.["rewardId"]) {
                    await this.receiveReward(_0x3a5f65);
                  }
                  break;
                case "5":
                  await this.openMsg(_0x3a5f65);
                  break;
                case "6":
                  await this.sharingGetGold();
                  break;
                case "10":
                case "13":
                  if (!this.xtoken) {
                    await this.get_usercode();
                  }
                  this.xtoken && (await this.watchLiveInit());
                  break;
                case "18":
                  await this.polymerize(_0x3a5f65);
                  break;
                default:
                  break;
              }
            }
          }
        } else {
          let _0x1a374c = _0x26b83a?.["data"]?.["head"]?.["err"] || "";
          this.log("获取任务列表失败[" + _0x204a76 + "]: " + _0x1a374c);
        }
      } else {
        this.log("获取任务列表错误[" + _0x348da8 + "]");
      }
    } catch (_0x295df1) {
      console.log(_0x295df1);
    }
  }
  async receiveReward(_0x1ab81f, _0x37e5ea = {}) {
    try {
      let _0x351372 = _0x1ab81f?.["title"]?.["split"](" ")?.[0];
      const _0x629ad3 = {
        phone: this.name,
        rewardId: _0x1ab81f?.["rewardId"] || ""
      };
      let _0x18da4f = {
          fn: "receiveReward",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/receiveReward",
          json: {
            para: this.encrypt_para(_0x629ad3)
          }
        },
        {
          result: _0x277f32
        } = await this.request(_0x18da4f),
        _0x62646c = _0x595f2b.get(_0x277f32, "resoultCode", -1);
      if (_0x62646c == 0) {
        this.log("领取任务[" + _0x351372 + "]奖励成功: " + _0x277f32?.["resoultMsg"]);
      } else {
        let _0x222068 = _0x277f32?.["msg"] || _0x277f32?.["resoultMsg"] || _0x277f32?.["error"] || "";
        this.log("领取任务[" + _0x351372 + "]奖励错误[" + _0x62646c + "]: " + _0x222068);
      }
    } catch (_0x13b76e) {
      console.log(_0x13b76e);
    }
  }
  async openMsg(_0x16607f, _0x2c927a = {}) {
    try {
      let _0x1a1055 = _0x16607f?.["title"]?.["split"](" ")?.[0];
      const _0x3be5e1 = {
        phone: this.name
      };
      let _0x127961 = {
          fn: "openMsg",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/openMsg",
          json: {
            para: this.encrypt_para(_0x3be5e1)
          }
        },
        {
          result: _0x244965
        } = await this.request(_0x127961),
        _0x453917 = _0x595f2b.get(_0x244965, "resoultCode", -1);
      if (_0x453917 == 0) {
        this.log("完成任务[" + _0x1a1055 + "]成功: " + _0x244965?.["resoultMsg"]);
      } else {
        let _0x36683e = _0x244965?.["msg"] || _0x244965?.["resoultMsg"] || _0x244965?.["error"] || "";
        this.log("完成任务[" + _0x1a1055 + "]错误[" + _0x453917 + "]: " + _0x36683e);
      }
    } catch (_0x1ca8de) {
      console.log(_0x1ca8de);
    }
  }
  async polymerize(_0x283988, _0xd74cfa = {}) {
    try {
      let _0x567a57 = _0x283988?.["title"]?.["split"](" ")?.[0];
      const _0x1dd72a = {
        phone: this.name,
        jobId: _0x283988.taskId
      };
      let _0x18781c = {
          fn: "polymerize",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/polymerize",
          json: {
            para: this.encrypt_para(_0x1dd72a)
          }
        },
        {
          result: _0x520c95
        } = await this.request(_0x18781c),
        _0x40c352 = _0x595f2b.get(_0x520c95, "resoultCode", -1);
      if (_0x40c352 == 0) {
        this.log("完成任务[" + _0x567a57 + "]成功: " + _0x520c95?.["resoultMsg"]);
      } else {
        let _0x5e3dbb = _0x520c95?.["msg"] || _0x520c95?.["resoultMsg"] || _0x520c95?.["error"] || "";
        this.log("完成任务[" + _0x567a57 + "]错误[" + _0x40c352 + "]: " + _0x5e3dbb);
      }
    } catch (_0x1bfe12) {
      console.log(_0x1bfe12);
    }
  }
  async food(_0x10cbb7, _0x3b8085 = {}) {
    try {
      const _0x1e4ea8 = {
        phone: this.name
      };
      let _0x552fc1 = {
          fn: "food",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/food",
          json: {
            para: this.encrypt_para(_0x1e4ea8)
          }
        },
        {
          result: _0x305f50
        } = await this.request(_0x552fc1),
        _0x3c08b5 = _0x595f2b.get(_0x305f50, "resoultCode", -1);
      if (_0x3c08b5 == 0) {
        this.log("第" + _0x10cbb7 + "次喂食: " + (_0x305f50?.["resoultMsg"] || "成功"));
        if (_0x305f50?.["levelUp"]) {
          let _0x37f15b = _0x305f50?.["currLevelRightList"][0]?.["level"];
          const _0x2c22ea = {
            notify: true
          };
          this.log("宠物已升级到[LV." + _0x37f15b + "], 获得: " + _0x305f50?.["currLevelRightList"][0]?.["righstName"], _0x2c22ea);
        }
      } else {
        let _0x2c9670 = _0x305f50?.["msg"] || _0x305f50?.["resoultMsg"] || _0x305f50?.["error"] || "";
        this.log("第" + _0x10cbb7 + "次喂食失败[" + _0x3c08b5 + "]: " + _0x2c9670);
        _0x2c9670?.["includes"]("最大喂食次数") && (this.can_feed = false);
      }
    } catch (_0x1a59c4) {
      console.log(_0x1a59c4);
    }
  }
  async getParadiseInfo(_0x46ac67 = {}) {
    try {
      const _0xa92121 = {
        phone: this.name
      };
      let _0x22c014 = {
        fn: "getParadiseInfo",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/paradise/getParadiseInfo",
        json: {
          para: this.encrypt_para(_0xa92121)
        }
      };
      {
        let {
            result: _0x2b6fed
          } = await this.request(_0x22c014),
          _0x249d9a = _0x595f2b.get(_0x2b6fed, "resoultCode", -1);
        if (_0x249d9a == 0) {
          let _0x3ff1ce = _0x2b6fed?.["userInfo"]?.["levelInfoMap"];
          this.level = _0x3ff1ce?.["level"];
          for (let _0xcbf46f = 1; _0xcbf46f <= 10 && this.can_feed; _0xcbf46f++) {
            await this.food(_0xcbf46f);
          }
        } else {
          let _0x4735e8 = _0x2b6fed?.["msg"] || _0x2b6fed?.["resoultMsg"] || _0x2b6fed?.["error"] || "";
          this.log("查询宠物等级失败[" + _0x249d9a + "]: " + _0x4735e8);
          return;
        }
      }
      {
        let {
            result: _0x4bc002
          } = await this.request(_0x22c014),
          _0x460fa0 = _0x595f2b.get(_0x4bc002, "resoultCode", -1);
        if (_0x460fa0 == 0) {
          let _0x1b0263 = _0x4bc002?.["userInfo"]?.["levelInfoMap"];
          this.level = _0x1b0263?.["level"];
          const _0x5d78ce = {
            notify: true
          };
          this.log("宠物等级[Lv." + _0x1b0263?.["level"] + "], 升级进度: " + _0x1b0263?.["growthValue"] + "/" + _0x1b0263?.["fullGrowthCoinValue"], _0x5d78ce);
        } else {
          let _0x1bdaf1 = _0x4bc002?.["msg"] || _0x4bc002?.["resoultMsg"] || _0x4bc002?.["error"] || "";
          this.log("查询宠物等级失败[" + _0x460fa0 + "]: " + _0x1bdaf1);
          return;
        }
      }
    } catch (_0x1703a5) {
      console.log(_0x1703a5);
    }
  }
  async getLevelRightsList(_0x901e63 = {}) {
    try {
      const _0x4d9e85 = {
        phone: this.name
      };
      let _0xce3c83 = {
          fn: "getLevelRightsList",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/getLevelRightsList",
          json: {
            para: this.encrypt_para(_0x4d9e85)
          }
        },
        {
          result: _0x3b00b2
        } = await this.request(_0xce3c83);
      if (_0x3b00b2?.["currentLevel"]) {
        let _0x1d02b1 = _0x3b00b2?.["currentLevel"] || 6;
        for (let _0x4c94c2 = _0x1d02b1; _0x4c94c2 > 0; _0x4c94c2--) {
          let _0x47c0ac = "V" + _0x4c94c2;
          for (let _0x2a39c3 of _0x3b00b2[_0x47c0ac] || []) {
            let _0x5de341 = _0x2a39c3?.["righstName"] || "";
            if (this.coin < _0x2a39c3.costCoin) {
              continue;
            }
            (_0x5de341?.["includes"]("话费") || _0x5de341?.["includes"]("专享") && _0x5de341?.["includes"]("金豆")) && (await this.conversionRights(_0x2a39c3));
          }
        }
      } else {
        let _0x181cff = _0x3b00b2?.["msg"] || _0x3b00b2?.["resoultMsg"] || _0x3b00b2?.["error"] || "";
        this.log("查询宠物兑换权益失败: " + _0x181cff);
      }
    } catch (_0x52f685) {
      console.log(_0x52f685);
    }
  }
  async conversionRights(_0x546184, _0xd306d7 = {}) {
    try {
      let _0x5341aa = _0x546184?.["righstName"] || "";
      const _0x397c1b = {
        phone: this.name,
        rightsId: _0x546184.id
      };
      let _0x3fd403 = {
          fn: "conversionRights",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/conversionRights",
          json: {
            para: this.encrypt_para(_0x397c1b)
          }
        },
        {
          result: _0x23c92e
        } = await this.request(_0x3fd403),
        _0x480552 = _0x595f2b.get(_0x23c92e, "resoultCode", -1);
      if (_0x480552 == 0) {
        this.log("兑换权益[" + _0x5341aa + "]成功");
      } else {
        let _0x578351 = _0x23c92e?.["msg"] || _0x23c92e?.["resoultMsg"] || _0x23c92e?.["error"] || "";
        this.log("兑换权益[" + _0x5341aa + "]失败[" + _0x480552 + "]: " + _0x578351);
      }
    } catch (_0x537318) {
      console.log(_0x537318);
    }
  }
  async get_usercode(_0x4d8b6d = {}) {
    try {
      const _0x5a0707 = {
        fn: "get_usercode",
        method: "get",
        url: "https://xbk.189.cn/xbkapi/api/auth/jump",
        searchParams: {}
      };
      _0x5a0707.searchParams.userID = this.ticket;
      _0x5a0707.searchParams.version = "9.3.3";
      _0x5a0707.searchParams.type = "room";
      _0x5a0707.searchParams.l = "renwu";
      let {
          statusCode: _0x465966,
          headers: _0x24d75c
        } = await this.request(_0x5a0707),
        _0x49da54 = _0x24d75c?.["location"]?.["match"](/usercode=(\w+)/);
      _0x49da54 ? await this.codeToken(_0x49da54[1]) : this.log("获取code失败[" + _0x465966 + "]");
    } catch (_0x11d30d) {
      console.log(_0x11d30d);
    }
  }
  async codeToken(_0x548af8, _0x3bf112 = {}) {
    try {
      const _0x4209f8 = {
        usercode: _0x548af8
      };
      const _0x3d0e39 = {
        fn: "codeToken",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/api/auth/userinfo/codeToken",
        json: _0x4209f8
      };
      let {
          result: _0x48de6a
        } = await this.request(_0x3d0e39),
        _0x397e1f = _0x595f2b.get(_0x48de6a, "code", -1);
      if (_0x397e1f == 0) {
        this.xtoken = _0x48de6a?.["data"]?.["token"];
        this.got = this.got.extend({
          headers: {
            Authorization: "Bearer " + _0x4f6b80.encrypt(this.xtoken, "base64")
          }
        });
      } else {
        let _0x2e9153 = _0x48de6a?.["msg"] || _0x48de6a?.["resoultMsg"] || _0x48de6a?.["error"] || _0x48de6a?.["msg"] || "";
        this.log("获取token失败[" + _0x397e1f + "]: " + _0x2e9153);
      }
    } catch (_0x3bb730) {
      console.log(_0x3bb730);
    }
  }
  async watchLiveInit(_0x5ed6d6 = {}) {
    try {
      let _0x1845e1 = Math.floor(Math.random() * 1000) + 1000;
      const _0x2bc319 = {
        period: 1,
        liveId: _0x1845e1
      };
      const _0x30e67d = {
        fn: "watchLiveInit",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchLiveInit",
        json: _0x2bc319
      };
      let {
          result: _0x2cdfeb
        } = await this.request(_0x30e67d),
        _0x368bde = _0x595f2b.get(_0x2cdfeb, "code", -1);
      if (_0x368bde == 0) {
        await _0x595f2b.wait(15000);
        await this.watchLive(_0x1845e1, _0x2cdfeb?.["data"]);
      } else {
        let _0x384217 = _0x2cdfeb?.["msg"] || _0x2cdfeb?.["resoultMsg"] || _0x2cdfeb?.["error"] || _0x2cdfeb?.["msg"] || "";
        this.log("开始观看直播[" + _0x1845e1 + "]失败[" + _0x368bde + "]: " + _0x384217);
      }
    } catch (_0x18b75e) {
      console.log(_0x18b75e);
    }
  }
  async watchLive(_0x52ca71, _0x166d18, _0x3bec3c = {}) {
    try {
      const _0x561b16 = {
        period: 1,
        liveId: _0x52ca71,
        key: _0x166d18
      };
      const _0x48cf53 = {
        fn: "watchLive",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchLive",
        json: _0x561b16
      };
      let {
          result: _0x5d1904
        } = await this.request(_0x48cf53),
        _0x2c95fd = _0x595f2b.get(_0x5d1904, "code", -1);
      if (_0x2c95fd == 0) {
        this.log("观看直播[" + _0x52ca71 + "]成功");
        await this.watchLiveInit();
      } else {
        let _0x7434a7 = _0x5d1904?.["msg"] || _0x5d1904?.["resoultMsg"] || _0x5d1904?.["error"] || _0x5d1904?.["msg"] || "";
        this.log("观看直播[" + _0x52ca71 + "]失败[" + _0x2c95fd + "]: " + _0x7434a7);
      }
    } catch (_0x21a291) {
      console.log(_0x21a291);
    }
  }
  async watchVideo(_0x129e11, _0x49efe5 = {}) {
    try {
      const _0x56ff3d = {
        articleId: _0x129e11
      };
      const _0xe45c4b = {
        fn: "watchVideo",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchVideo",
        json: _0x56ff3d
      };
      let {
          result: _0x417fde
        } = await this.request(_0xe45c4b),
        _0xc78166 = _0x595f2b.get(_0x417fde, "code", -1);
      if (_0xc78166 == 0) {
        this.log("观看短视频[" + _0x129e11 + "]成功");
      } else {
        let _0x394e0d = _0x417fde?.["msg"] || _0x417fde?.["resoultMsg"] || _0x417fde?.["error"] || _0x417fde?.["msg"] || "";
        this.log("观看短视频[" + _0x129e11 + "]失败[" + _0xc78166 + "]: " + _0x394e0d);
      }
    } catch (_0x47eeac) {
      console.log(_0x47eeac);
    }
  }
  async like(_0x150ac3, _0x32beed = {}) {
    try {
      const _0x53b972 = {
        account: this.name,
        liveId: _0x150ac3
      };
      const _0x15a942 = {
        fn: "like",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/lteration/room/like",
        json: _0x53b972
      };
      let {
          result: _0x1a5c85
        } = await this.request(_0x15a942),
        _0x2af072 = _0x595f2b.get(_0x1a5c85, "code", -1);
      if (_0x2af072 == 0) {
        this.log("点赞直播间[" + _0x150ac3 + "]成功");
      } else {
        let _0x5b582e = _0x1a5c85?.["msg"] || _0x1a5c85?.["resoultMsg"] || _0x1a5c85?.["error"] || _0x1a5c85?.["msg"] || "";
        this.log("点赞直播间[" + _0x150ac3 + "]失败[" + _0x2af072 + "]: " + _0x5b582e);
      }
    } catch (_0x139fb8) {
      console.log(_0x139fb8);
    }
  }
  async sharingGetGold(_0x56ef18 = {}) {
    try {
      let _0x3f8f1f = {
          fn: "sharingGetGold",
          method: "post",
          url: "https://appfuwu.189.cn:9021/query/sharingGetGold",
          json: {
            headerInfos: {
              code: "sharingGetGold",
              timestamp: _0x595f2b.time("yyyyMMddhhmmss"),
              broadAccount: "",
              broadToken: "",
              clientType: "#9.6.1#channel50#iPhone 14 Pro Max#",
              shopId: "20002",
              source: "110003",
              sourcePassword: "Sid98s",
              token: this.token,
              userLoginName: this.name
            },
            content: {
              attach: "test",
              fieldData: {
                shareSource: "3",
                userId: this.userId,
                account: this.encode_phone()
              }
            }
          }
        },
        {
          result: _0x3020f4
        } = await this.request(_0x3f8f1f),
        _0x4bdd27 = _0x595f2b.get(_0x3020f4?.["responseData"], "resultCode", -1);
      if (_0x4bdd27 == "0000") {
        this.log("分享成功");
      } else {
        let _0x2f147b = _0x3020f4?.["msg"] || _0x3020f4?.["responseData"]?.["resultDesc"] || _0x3020f4?.["error"] || _0x3020f4?.["msg"] || "";
        this.log("分享失败[" + _0x4bdd27 + "]: " + _0x2f147b);
      }
    } catch (_0x461161) {
      console.log(_0x461161);
    }
  }
  async month_jml_preCost(_0x425925 = {}) {
    try {
      let _0x5f587c = {
          fn: "month_jml_preCost",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/short/message/preCost",
          json: {
            phone: this.encode_aes(this.name),
            activityCode: "shortMesssge"
          }
        },
        {
          result: _0x2b7056
        } = await this.request(_0x5f587c),
        _0x6aeaad = _0x595f2b.get(_0x2b7056, "resoultCode", -1);
      if (_0x6aeaad == 0) {
        let _0x3069ad = _0x2b7056?.["data"]?.["resoultMsg"] || "领取成功";
        this.jml_tokenFlag = _0x2b7056?.["resoultMsg"];
        await this.month_jml_userCost(_0x3069ad);
        await this.month_jml_receive();
        await this.month_jml_getCount();
        await this.month_jml_refresh();
      } else {
        let _0x5c3cd4 = _0x2b7056?.["msg"] || _0x2b7056?.["resoultMsg"] || _0x2b7056?.["error"] || "";
        this.log("每月见面礼登录失败[" + _0x6aeaad + "]: " + _0x5c3cd4);
      }
    } catch (_0x2ffcab) {
      console.log(_0x2ffcab);
    }
  }
  async month_jml_userCost(_0x15ec7e, _0x49cde0 = {}) {
    try {
      let _0x14d4da = {
          fn: "month_jml_userCost",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/short/message/userCost",
          json: {
            phone: this.encode_aes(this.name),
            activityCode: "shortMesssge",
            flag: this.jml_tokenFlag
          }
        },
        {
          result: _0x451488
        } = await this.request(_0x14d4da),
        _0x57fcfa = _0x595f2b.get(_0x451488, "resoultCode", -1);
      if (_0x57fcfa == 0) {
        let _0x3bf682 = _0x451488?.["data"]?.["map"](_0x2e4905 => "[" + _0x2e4905.pizeName + "]") || [];
        this.log("见面礼" + _0x15ec7e + ": " + _0x3bf682.join(", "));
      } else {
        let _0x35da54 = _0x451488?.["msg"] || _0x451488?.["resoultMsg"] || _0x451488?.["error"] || "";
        this.log("领取每月见面礼失败[" + _0x57fcfa + "]: " + _0x35da54);
      }
    } catch (_0x4b3088) {
      console.log(_0x4b3088);
    }
  }
  async month_jml_receive(_0x5cdfdd = {}) {
    try {
      const _0x58e520 = {
        phone: this.name,
        flag: this.jml_tokenFlag
      };
      let _0x3f2b2f = {
          fn: "month_jml_receive",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/receive",
          json: {
            para: this.encrypt_para(_0x58e520)
          }
        },
        {
          result: _0x5d8282
        } = await this.request(_0x3f2b2f),
        _0x272358 = _0x595f2b.get(_0x5d8282, "code", -1);
      if (_0x272358 == 0) {
        this.log("领取APP抽奖次数成功");
      } else {
        let _0x531e27 = _0x5d8282?.["msg"] || _0x5d8282?.["resoultMsg"] || _0x5d8282?.["error"] || "";
        this.log("领取APP抽奖次数失败[" + _0x272358 + "]: " + _0x531e27);
      }
    } catch (_0x2c1418) {
      console.log(_0x2c1418);
    }
  }
  async month_jml_getCount(_0x361a0e = {}) {
    try {
      const _0x52ae02 = {
        phone: this.name,
        flag: this.jml_tokenFlag
      };
      let _0x3807ce = {
          fn: "month_jml_getCount",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/getCount",
          json: {
            para: this.encrypt_para(_0x52ae02)
          }
        },
        {
          result: _0x549d79
        } = await this.request(_0x3807ce),
        _0x5d39c4 = _0x595f2b.get(_0x549d79, "code", -1);
      if (_0x5d39c4 == 0) {
        let _0x168a68 = _0x549d79?.["video"]?.["map"](_0x395c08 => _0x395c08.videoType) || [],
          _0x180cb5 = _0x96db55.filter(_0x14cdd4 => !_0x168a68.includes(_0x14cdd4)),
          _0x6ecb47 = false;
        for (let _0x520191 of _0x180cb5) {
          if (_0x6ecb47) {
            let _0x465610 = Math.floor(Math.random() * 5000) + 3000;
            await _0x595f2b.wait(_0x465610);
          }
          await this.month_jml_addVideoCount(_0x520191);
          _0x6ecb47 = true;
        }
      } else {
        let _0x3ebf11 = _0x549d79?.["msg"] || _0x549d79?.["resoultMsg"] || _0x549d79?.["error"] || "";
        this.log("查询看视频得抽奖机会次数失败[" + _0x5d39c4 + "]: " + _0x3ebf11);
      }
    } catch (_0x5e054b) {
      console.log(_0x5e054b);
    }
  }
  async month_jml_addVideoCount(_0x24f0aa, _0x4da4f1 = {}) {
    try {
      const _0x5946ed = {
        phone: this.name,
        videoType: _0x24f0aa,
        flag: this.jml_tokenFlag
      };
      let _0x2ed684 = {
          fn: "month_jml_addVideoCount",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/addVideoCount",
          json: {
            para: this.encrypt_para(_0x5946ed)
          }
        },
        {
          result: _0x58eaf4
        } = await this.request(_0x2ed684),
        _0x14613b = _0x595f2b.get(_0x58eaf4, "code", -1);
      if (_0x14613b == 0) {
        this.log("看视频[" + _0x24f0aa + "]得抽奖机会成功");
      } else {
        let _0x2af539 = _0x58eaf4?.["msg"] || _0x58eaf4?.["resoultMsg"] || _0x58eaf4?.["error"] || "";
        this.log("看视频[" + _0x24f0aa + "]得抽奖机会失败[" + _0x14613b + "]: " + _0x2af539);
      }
    } catch (_0x17b39f) {
      console.log(_0x17b39f);
    }
  }
  async month_jml_refresh(_0x3f051f = {}) {
    try {
      const _0x3c8100 = {
        phone: this.name,
        flag: this.jml_tokenFlag
      };
      let _0x2782b5 = {
          fn: "month_jml_refresh",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/refresh",
          json: {
            para: this.encrypt_para(_0x3c8100)
          }
        },
        {
          result: _0x32eab0
        } = await this.request(_0x2782b5),
        _0x7c4945 = _0x595f2b.get(_0x32eab0, "code", -1);
      if (_0x7c4945 == -1) {
        let _0x368f3e = _0x32eab0?.["rNumber"] || 0;
        this.log("可以抽奖" + _0x368f3e + "次");
        let _0x42f370 = false;
        while (_0x368f3e-- > 0) {
          if (_0x42f370) {
            let _0xb9a4ad = Math.floor(Math.random() * 5000) + 3000;
            await _0x595f2b.wait(_0xb9a4ad);
          }
          await this.month_jml_lotteryRevice();
          _0x42f370 = true;
        }
      } else {
        let _0x25458a = _0x32eab0?.["msg"] || _0x32eab0?.["resoultMsg"] || _0x32eab0?.["error"] || "";
        this.log("查询抽奖次数失败[" + _0x7c4945 + "]: " + _0x25458a);
      }
    } catch (_0x2e2d2a) {
      console.log(_0x2e2d2a);
    }
  }
  async month_jml_lotteryRevice(_0x244d00 = {}) {
    try {
      const _0x2f8343 = {
        phone: this.name,
        flag: this.jml_tokenFlag
      };
      let _0x2a91c7 = {
          fn: "month_jml_lotteryRevice",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/lotteryRevice",
          json: {
            para: this.encrypt_para(_0x2f8343)
          }
        },
        {
          result: _0x5153c7
        } = await this.request(_0x2a91c7),
        _0x4e139a = _0x595f2b.get(_0x5153c7, "code", -1);
      if (_0x4e139a == 0) {
        let {
          rname: _0x4894fa,
          id: _0x15f7f8
        } = _0x5153c7;
        const _0x2547d0 = {
          notify: true
        };
        this.log("每月见面礼抽奖: " + _0x4894fa, _0x2547d0);
      } else {
        let _0xdcec53 = _0x5153c7?.["msg"] || _0x5153c7?.["resoultMsg"] || _0x5153c7?.["error"] || "";
        this.log("每月见面礼抽奖失败[" + _0x4e139a + "]: " + _0xdcec53);
      }
    } catch (_0xbeff9c) {
      console.log(_0xbeff9c);
    }
  }
  async userTask() {
    const _0x52f218 = {
      notify: true
    };
    _0x595f2b.log("\n======= 账号[" + this.index + "][" + this.name + "] =======", _0x52f218);
    if (!this.load_token() && !(await this.login())) {
      return;
    }
    if (!(await this.get_ticket())) {
      return;
    }
    if (!(await this.get_sign())) {
      return;
    }
    await this.userCoinInfo();
    await this.getLevelRightsList();
    await this.month_jml_preCost();
    await this.userStatusInfo();
    await this.continueSignDays();
    await this.homepage("hg_qd_zrwzjd");
    await this.getParadiseInfo();
    await this.userCoinInfo(true);
  }
}
!(async () => {
  if (!(await _0x44d91d())) {
    return;
  }
  _0x595f2b.read_env(_0x4d9f38);
  _0x281681();
  for (let _0x23fb17 of _0x595f2b.userList) {
    await _0x23fb17.userTask();
  }
})().catch(_0x2b4b8e => _0x595f2b.log(_0x2b4b8e)).finally(() => _0x595f2b.exitNow());
async function _0x44d91d(_0x12274c = 0) {
  let _0x5c4bf4 = false;
  try {
    const _0x163126 = {
      fn: "auth",
      method: "get",
      url: _0x4a8fdc,
      timeout: 20000
    };
    let {
      statusCode: _0x3d2284,
      result: _0x518b01
    } = await _0x35d1e3.request(_0x163126);
    if (_0x3d2284 != 200) {
      _0x12274c++ < _0x270886 && (_0x5c4bf4 = await _0x44d91d(_0x12274c));
      return _0x5c4bf4;
    }
    if (_0x518b01?.["code"] == 0) {
      _0x518b01 = JSON.parse(_0x518b01.data.file.data);
      if (_0x518b01?.["commonNotify"] && _0x518b01.commonNotify.length > 0) {
        const _0x55d8e7 = {
          notify: true
        };
        _0x595f2b.log(_0x518b01.commonNotify.join("\n") + "\n", _0x55d8e7);
      }
      _0x518b01?.["commonMsg"] && _0x518b01.commonMsg.length > 0 && _0x595f2b.log(_0x518b01.commonMsg.join("\n") + "\n");
      if (_0x518b01[_0x133587]) {
        let _0x38bb3f = _0x518b01[_0x133587];
        _0x38bb3f.status == 0 ? _0x386d68 >= _0x38bb3f.version ? (_0x5c4bf4 = true, _0x595f2b.log(_0x38bb3f.msg[_0x38bb3f.status]), _0x595f2b.log(_0x38bb3f.updateMsg), _0x595f2b.log("现在运行的脚本版本是：" + _0x386d68 + "，最新脚本版本：" + _0x38bb3f.latestVersion)) : _0x595f2b.log(_0x38bb3f.versionMsg) : _0x595f2b.log(_0x38bb3f.msg[_0x38bb3f.status]);
      } else {
        _0x595f2b.log(_0x518b01.errorMsg);
      }
    } else {
      _0x12274c++ < _0x270886 && (_0x5c4bf4 = await _0x44d91d(_0x12274c));
    }
  } catch (_0x4c62a6) {
    _0x595f2b.log(_0x4c62a6);
  } finally {
    return _0x5c4bf4;
  }
}
function _0x261ea1(_0x5c4150) {
  return new class {
    constructor(_0xe3710f) {
      this.name = _0xe3710f;
      this.startTime = Date.now();
      const _0x186b45 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x186b45);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
      this.default_timestamp_len = 13;
      this.default_wait_interval = 1000;
      this.default_wait_limit = 3600000;
      this.default_wait_ahead = 0;
    }
    log(_0x548681, _0x2ce75a = {}) {
      const _0x5d4e1e = {
        console: true
      };
      Object.assign(_0x5d4e1e, _0x2ce75a);
      if (_0x5d4e1e.time) {
        let _0x1199cf = _0x5d4e1e.fmt || "hh:mm:ss";
        _0x548681 = "[" + this.time(_0x1199cf) + "]" + _0x548681;
      }
      if (_0x5d4e1e.notify) {
        this.notifyStr.push(_0x548681);
      }
      if (_0x5d4e1e.console) {
        console.log(_0x548681);
      }
    }
    get(_0x21d214, _0x3ee88c, _0x2f3ce9 = "") {
      let _0xfdc6bd = _0x2f3ce9;
      _0x21d214?.["hasOwnProperty"](_0x3ee88c) && (_0xfdc6bd = _0x21d214[_0x3ee88c]);
      return _0xfdc6bd;
    }
    pop(_0x6279ac, _0x151e60, _0x2def59 = "") {
      let _0xc14f5f = _0x2def59;
      _0x6279ac?.["hasOwnProperty"](_0x151e60) && (_0xc14f5f = _0x6279ac[_0x151e60], delete _0x6279ac[_0x151e60]);
      return _0xc14f5f;
    }
    copy(_0x48d2b0) {
      return Object.assign({}, _0x48d2b0);
    }
    read_env(_0x230e6f) {
      let _0x5c1eff = _0x1d5d49.map(_0x534678 => process.env[_0x534678]);
      for (let _0x3a12bd of _0x5c1eff.filter(_0x181a0d => !!_0x181a0d)) {
        for (let _0x2752d8 of _0x3a12bd.split(_0x311fcb).filter(_0x45adeb => !!_0x45adeb)) {
          if (this.userList.includes(_0x2752d8)) {
            continue;
          }
          this.userList.push(new _0x230e6f(_0x2752d8));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x574378 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x1d5d49.map(_0x1d86bf => "[" + _0x1d86bf + "]").join("或"), _0x574378);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    time(_0x2d699d, _0x2a9bab = null) {
      let _0x75c2c9 = _0x2a9bab ? new Date(_0x2a9bab) : new Date(),
        _0x2bb4da = {
          "M+": _0x75c2c9.getMonth() + 1,
          "d+": _0x75c2c9.getDate(),
          "h+": _0x75c2c9.getHours(),
          "m+": _0x75c2c9.getMinutes(),
          "s+": _0x75c2c9.getSeconds(),
          "q+": Math.floor((_0x75c2c9.getMonth() + 3) / 3),
          S: this.padStr(_0x75c2c9.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x2d699d) && (_0x2d699d = _0x2d699d.replace(RegExp.$1, (_0x75c2c9.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x270d0b in _0x2bb4da) new RegExp("(" + _0x270d0b + ")").test(_0x2d699d) && (_0x2d699d = _0x2d699d.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x2bb4da[_0x270d0b] : ("00" + _0x2bb4da[_0x270d0b]).substr(("" + _0x2bb4da[_0x270d0b]).length)));
      return _0x2d699d;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x170ea9 = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x170ea9.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x488182, _0x1608c2, _0x4af434 = {}) {
      let _0x254c9f = _0x4af434.padding || "0",
        _0x1e2b7b = _0x4af434.mode || "l",
        _0x4ab598 = String(_0x488182),
        _0x37e660 = _0x1608c2 > _0x4ab598.length ? _0x1608c2 - _0x4ab598.length : 0,
        _0x5cc872 = "";
      for (let _0x20c3ed = 0; _0x20c3ed < _0x37e660; _0x20c3ed++) {
        _0x5cc872 += _0x254c9f;
      }
      _0x1e2b7b == "r" ? _0x4ab598 = _0x4ab598 + _0x5cc872 : _0x4ab598 = _0x5cc872 + _0x4ab598;
      return _0x4ab598;
    }
    json2str(_0x3fa1c5, _0x873835, _0x226eb3 = false) {
      let _0x2b72a = [];
      for (let _0x5ab8e0 of Object.keys(_0x3fa1c5).sort()) {
        let _0x315032 = _0x3fa1c5[_0x5ab8e0];
        if (_0x315032 && _0x226eb3) {
          _0x315032 = encodeURIComponent(_0x315032);
        }
        _0x2b72a.push(_0x5ab8e0 + "=" + _0x315032);
      }
      return _0x2b72a.join(_0x873835);
    }
    str2json(_0x7f99d5, _0x579474 = false) {
      let _0x468087 = {};
      for (let _0x4e6ee3 of _0x7f99d5.split("&")) {
        if (!_0x4e6ee3) {
          continue;
        }
        let _0x22eb77 = _0x4e6ee3.indexOf("=");
        if (_0x22eb77 == -1) {
          continue;
        }
        let _0x53b62f = _0x4e6ee3.substr(0, _0x22eb77),
          _0x363ca7 = _0x4e6ee3.substr(_0x22eb77 + 1);
        if (_0x579474) {
          _0x363ca7 = decodeURIComponent(_0x363ca7);
        }
        _0x468087[_0x53b62f] = _0x363ca7;
      }
      return _0x468087;
    }
    randomPattern(_0x55a092, _0x408a9d = "abcdef0123456789") {
      let _0x3fb064 = "";
      for (let _0x48334e of _0x55a092) {
        if (_0x48334e == "x") {
          _0x3fb064 += _0x408a9d.charAt(Math.floor(Math.random() * _0x408a9d.length));
        } else {
          _0x48334e == "X" ? _0x3fb064 += _0x408a9d.charAt(Math.floor(Math.random() * _0x408a9d.length)).toUpperCase() : _0x3fb064 += _0x48334e;
        }
      }
      return _0x3fb064;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x5a8125, _0x2fde42 = "abcdef0123456789") {
      let _0x242364 = "";
      for (let _0x562c03 = 0; _0x562c03 < _0x5a8125; _0x562c03++) {
        _0x242364 += _0x2fde42.charAt(Math.floor(Math.random() * _0x2fde42.length));
      }
      return _0x242364;
    }
    randomList(_0x22b8ec) {
      let _0x3de688 = Math.floor(Math.random() * _0x22b8ec.length);
      return _0x22b8ec[_0x3de688];
    }
    wait(_0x5b4bb3) {
      return new Promise(_0x1fd746 => setTimeout(_0x1fd746, _0x5b4bb3));
    }
    async exitNow() {
      await this.showmsg();
      let _0x49efb2 = Date.now(),
        _0x54cccd = (_0x49efb2 - this.startTime) / 1000;
      this.log("");
      const _0x2d91b2 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x54cccd + "秒", _0x2d91b2);
      process.exit(0);
    }
    normalize_time(_0x5dc51e, _0x37da36 = {}) {
      let _0x4288d7 = _0x37da36.len || this.default_timestamp_len;
      _0x5dc51e = _0x5dc51e.toString();
      let _0x32fc2c = _0x5dc51e.length;
      while (_0x32fc2c < _0x4288d7) {
        _0x5dc51e += "0";
      }
      _0x32fc2c > _0x4288d7 && (_0x5dc51e = _0x5dc51e.slice(0, 13));
      return parseInt(_0x5dc51e);
    }
    async wait_until(_0x4ba96a, _0x19c135 = {}) {
      let _0x113e16 = _0x19c135.logger || this,
        _0xe34fb4 = _0x19c135.interval || this.default_wait_interval,
        _0xa7235e = _0x19c135.limit || this.default_wait_limit,
        _0x471377 = _0x19c135.ahead || this.default_wait_ahead;
      if (typeof _0x4ba96a == "string" && _0x4ba96a.includes(":")) {
        if (_0x4ba96a.includes("-")) {
          _0x4ba96a = new Date(_0x4ba96a).getTime();
        } else {
          let _0x4fa0e7 = this.time("yyyy-MM-dd ");
          _0x4ba96a = new Date(_0x4fa0e7 + _0x4ba96a).getTime();
        }
      }
      let _0x56d346 = this.normalize_time(_0x4ba96a) - _0x471377,
        _0x2ac565 = this.time("hh:mm:ss.S", _0x56d346),
        _0x309958 = Date.now();
      _0x309958 > _0x56d346 && (_0x56d346 += 86400000);
      let _0x4340b8 = _0x56d346 - _0x309958;
      if (_0x4340b8 > _0xa7235e) {
        const _0x3ebe58 = {
          time: true
        };
        _0x113e16.log("离目标时间[" + _0x2ac565 + "]大于" + _0xa7235e / 1000 + "秒,不等待", _0x3ebe58);
      } else {
        const _0xaf3f16 = {
          time: true
        };
        _0x113e16.log("离目标时间[" + _0x2ac565 + "]还有" + _0x4340b8 / 1000 + "秒,开始等待", _0xaf3f16);
        while (_0x4340b8 > 0) {
          let _0x58f789 = Math.min(_0x4340b8, _0xe34fb4);
          await this.wait(_0x58f789);
          _0x309958 = Date.now();
          _0x4340b8 = _0x56d346 - _0x309958;
        }
        const _0x1aee29 = {
          time: true
        };
        _0x113e16.log("已完成等待", _0x1aee29);
      }
    }
    async wait_gap_interval(_0x1243d9, _0x5c68e1) {
      let _0x345b2f = Date.now() - _0x1243d9;
      _0x345b2f < _0x5c68e1 && (await this.wait(_0x5c68e1 - _0x345b2f));
    }
  }(_0x5c4150);
}