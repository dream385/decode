//7/6/2024, 2:25:14 AM
//Project:https://github.com/dream385/decode
var _0xodj = 'jsjiami.com.v7';
'use strict';
const _0x310550 = _0x1f7d;
if (function (_0x4ad783, _0x4ee53a, _0x44ee68, _0x131868, _0x484650, _0x2f0869, _0x1eed9a) {
  _0x4ad783 = _0x4ad783 >> 0x9;
  _0x2f0869 = 'hs';
  _0x1eed9a = 'hs';
  return function (_0xa350d4, _0x45e8cf, _0xfd26b0, _0x5c9dc3, _0xc7cd81) {
    const _0x37d639 = _0x1f7d;
    _0x5c9dc3 = 'tfi';
    _0x2f0869 = _0x5c9dc3 + _0x2f0869;
    _0xc7cd81 = 'up';
    _0x1eed9a += _0xc7cd81;
    _0x2f0869 = _0xfd26b0(_0x2f0869);
    _0x1eed9a = _0xfd26b0(_0x1eed9a);
    _0xfd26b0 = 0x0;
    const _0x59b3c7 = _0xa350d4();
    while (!![] && --_0x131868 + _0x45e8cf) {
      try {
        _0x5c9dc3 = -parseInt(_0x37d639(0x1e0, 'q2yF')) / 0x1 + -parseInt(_0x37d639(0x26a, '(cov')) / 0x2 * (-parseInt(_0x37d639(0x59c, 'o%]7')) / 0x3) + -parseInt(_0x37d639(0x6d0, 'Nkpr')) / 0x4 + -parseInt(_0x37d639(0x6b7, '7it%')) / 0x5 + parseInt(_0x37d639(0x4a0, 'YBo*')) / 0x6 + parseInt(_0x37d639(0x5ed, 'E9Je')) / 0x7 * (-parseInt(_0x37d639(0x4fe, 'A@za')) / 0x8) + parseInt(_0x37d639(0x3e4, '!4rE')) / 0x9;
      } catch (_0x416fd5) {
        _0x5c9dc3 = _0xfd26b0;
      } finally {
        _0xc7cd81 = _0x59b3c7[_0x2f0869]();
        if (_0x4ad783 <= _0x131868) {
          if (_0xfd26b0) {
            if (_0x484650) {
              _0x5c9dc3 = _0xc7cd81;
            } else {
              _0x484650 = _0xc7cd81;
            }
          } else {
            _0xfd26b0 = _0xc7cd81;
          }
        } else {
          if (_0xfd26b0 == _0x484650['replace'](/[dhLIFTbUypCkStPBwReGlEQK=]/g, '')) {
            if (_0x5c9dc3 === _0x45e8cf) {
              _0x59b3c7['un' + _0x2f0869](_0xc7cd81);
              break;
            }
            _0x59b3c7[_0x1eed9a](_0xc7cd81);
          }
        }
      }
    }
  }(_0x44ee68, _0x4ee53a, function (_0x1cf7f2, _0xe82e5, _0x1cda34, _0x6cbc94, _0x30e928, _0x1f2059, _0x6c0930) {
    _0xe82e5 = '\x73\x70\x6c\x69\x74';
    _0x1cf7f2 = arguments[0x0];
    _0x1cf7f2 = _0x1cf7f2[_0xe82e5]('');
    _0x1cda34 = '\x72\x65\x76\x65\x72\x73\x65';
    _0x1cf7f2 = _0x1cf7f2[_0x1cda34]('\x76');
    _0x6cbc94 = '\x6a\x6f\x69\x6e';
    0x16f3dd;
    return _0x1cf7f2[_0x6cbc94]('');
  });
}(0x19000, 0xd910d, _0x4b8c, 0xca), _0x4b8c) {
  _0xodj = 0xca;
}
Object[_0x310550(0x5e8, 'bJC8')](exports, _0x310550(0x213, 'o%]7'), {
  'value': !![]
});
const axios_1 = require(_0x310550(0x19a, 'tU9n')),
  CryptoJs = require(_0x310550(0x278, '(cov')),
  he_1 = require('he'),
  qs = require('qs'),
  cheerio_1 = require(_0x310550(0x5c3, 'OI7a'));
let Config = {
    'server': _0x310550(0x524, 'uN9]'),
    'platform': _0x310550(0x693, '9&#y'),
    'key': _0x310550(0x6d2, 'A@za')
  },
  ZZ123Config = {
    'headers': {
      'Content-Type': _0x310550(0x24a, 'Ln5U'),
      'Referer': _0x310550(0x379, '1faC'),
      'User-Agent': _0x310550(0x285, '[*32')
    }
  };
const pageSize = 0x14;
function formatYunMusicItem(_0x5efb66) {
  const _0x5c872f = _0x310550,
    _0x56f930 = {
      'UlZkp': _0x5c872f(0x51b, 'o%]7')
    };
  return {
    'id': _0x5efb66[_0x5c872f(0x4de, 'kjqA')][_0x5c872f(0x683, '8CIx')](_0x56f930[_0x5c872f(0x6e0, '1faC')], ''),
    'title': (0x0, he_1[_0x5c872f(0x47a, 'Nkpr')])(_0x5efb66[_0x5c872f(0x48e, '!Mi^')] || ''),
    'artist': (0x0, he_1[_0x5c872f(0x372, 'GGSV')])(_0x5efb66[_0x5c872f(0x3ef, 'uN9]')] || ''),
    'isfree': _0x5efb66?.[_0x5c872f(0x371, '69Sa')]?.[_0x5c872f(0x4f8, '69Sa')] !== '1'
  };
}
function formatMusicItem(_0x1a03d4) {
  const _0x25c377 = _0x310550,
    _0xd3f256 = {
      'rXhgT': function (_0x193497, _0x415b3c) {
        return _0x193497 === _0x415b3c;
      }
    },
    _0x5ed718 = _0x1a03d4[_0x25c377(0x5ca, '$ldZ')] || _0x1a03d4[_0x25c377(0x5dd, '69Sa')]?.['id'],
    _0x446980 = _0x1a03d4[_0x25c377(0x433, '9&#y')] || _0x1a03d4[_0x25c377(0x666, '!Mi^')]?.[_0x25c377(0x585, '!4rE')],
    _0x3b200b = _0x1a03d4[_0x25c377(0x6ef, 'wDo^')] || _0x1a03d4[_0x25c377(0x36b, 'YMpZ')]?.[_0x25c377(0x2a9, '(cov')];
  return {
    'id': _0x1a03d4['id'] || _0x1a03d4[_0x25c377(0x3b3, 'tU9n')],
    'songmid': _0x1a03d4[_0x25c377(0x585, '!4rE')] || _0x1a03d4[_0x25c377(0x591, '8CIx')],
    'title': _0x1a03d4[_0x25c377(0x2af, 'GGSV')] || _0x1a03d4[_0x25c377(0x692, 'A@za')],
    'artist': _0x1a03d4[_0x25c377(0x31f, '0juG')][_0x25c377(0x50b, 'Ln5U')](_0x2ec7ce => _0x2ec7ce[_0x25c377(0x5c1, 'VT5#')])[_0x25c377(0x664, 'Nkpr')](',\x20'),
    'artwork': _0x446980 ? _0x25c377(0x223, '![39') + _0x446980 + _0x25c377(0x570, '!4rE') : undefined,
    'album': _0x3b200b,
    'lrc': _0x1a03d4[_0x25c377(0x61f, 'Ln5U')] || undefined,
    'albumid': _0x5ed718,
    'albummid': _0x446980,
    'isfree': _0x1a03d4[_0x25c377(0x345, 'g[o#')][_0x25c377(0x426, 'o%]7')] === 0x0 || _0xd3f256[_0x25c377(0x38d, 'Cmd%')](_0x1a03d4[_0x25c377(0x38c, 'Nkpr')][_0x25c377(0x6d9, '0juG')], 0x0)
  };
}
const chineseSel = _0x2d2c23 => {
  const _0x576968 = _0x310550;
  let _0x4313ca = [];
  const _0xe5ac19 = /[\u4e00-\u9fa5]/g;
  if (_0x2d2c23) {
    _0x4313ca = _0x2d2c23[_0x576968(0x5fc, '2338')](_0xe5ac19);
  }
  return _0x4313ca?.[_0x576968(0x4ed, '(cov')] ? _0x4313ca[_0x576968(0x496, '#jWv')]('') : '';
};
function formatAlbumItem(_0x2d0c44) {
  const _0x4a8482 = _0x310550;
  return {
    'id': _0x2d0c44[_0x4a8482(0x67d, '%q4y')] || _0x2d0c44[_0x4a8482(0x421, 'OI7a')],
    'albumMID': _0x2d0c44[_0x4a8482(0x564, 'kjqA')] || _0x2d0c44[_0x4a8482(0x2bd, 'GGSV')],
    'title': _0x2d0c44[_0x4a8482(0x4d1, 'Ln5U')] || _0x2d0c44[_0x4a8482(0x1ed, '0c!C')],
    'artwork': _0x2d0c44[_0x4a8482(0x344, 'GGSV')] || _0x4a8482(0x4c1, '#jWv') + (_0x2d0c44[_0x4a8482(0x3f2, 'YMpZ')] || _0x2d0c44[_0x4a8482(0x4ca, 'sBLp')]) + _0x4a8482(0x277, 'I9C4'),
    'date': _0x2d0c44[_0x4a8482(0x598, 'kjqA')] || _0x2d0c44[_0x4a8482(0x2de, '#jWv')],
    'singerID': _0x2d0c44[_0x4a8482(0x299, 'KqK%')] || _0x2d0c44[_0x4a8482(0x512, '![39')],
    'artist': _0x2d0c44[_0x4a8482(0x52b, 'jjfM')] || _0x2d0c44[_0x4a8482(0x3f8, 'GGSV')],
    'singerMID': _0x2d0c44[_0x4a8482(0x24d, 'NRC*')] || _0x2d0c44[_0x4a8482(0x1b1, 'Cmd%')],
    'description': _0x2d0c44[_0x4a8482(0x57b, 'kjqA')]
  };
}
function formatArtistItem(_0x5161e2) {
  const _0x2ba07f = _0x310550;
  return {
    'name': _0x5161e2[_0x2ba07f(0x475, 'A@za')],
    'id': _0x5161e2[_0x2ba07f(0x20d, '[*32')],
    'singerMID': _0x5161e2[_0x2ba07f(0x6cb, '2Evc')],
    'avatar': _0x5161e2[_0x2ba07f(0x27b, 'vdaz')],
    'worksNum': _0x5161e2[_0x2ba07f(0x715, 'wDo^')]
  };
}
const searchTypeMap = {
    0x0: _0x310550(0x318, 'kjqA'),
    0x2: _0x310550(0x36b, 'YMpZ'),
    0x1: _0x310550(0x1d2, 'Y8Rn'),
    0x3: _0x310550(0x70b, '(cov'),
    0x7: _0x310550(0x55e, '9Fkk'),
    0xc: 'mv'
  },
  headers = {
    'referer': _0x310550(0x40c, '!Mi^'),
    'user-agent': _0x310550(0x5b8, 'g[o#'),
    'Cookie': _0x310550(0x2eb, 'YMpZ')
  },
  validSongFilter = _0x40e9dc => {
    return !![];
  };
async function searchBase(_0x415abd, _0x13b47a, _0x13b78c) {
  const _0xd74bbc = _0x310550,
    _0x5be7ca = {
      'uoXqq': _0xd74bbc(0x1bd, 'o%]7'),
      'SvJdd': _0xd74bbc(0x45f, 'VT5#'),
      'FzIQg': function (_0x4f210e, _0x5833d3) {
        return _0x4f210e <= _0x5833d3;
      },
      'BOZHP': function (_0x567019, _0x1a316d) {
        return _0x567019 * _0x1a316d;
      }
    },
    _0x54fbbc = (await (0x0, axios_1[_0xd74bbc(0x1d3, '1OC[')])({
      'url': _0xd74bbc(0x532, '9Fkk'),
      'method': _0xd74bbc(0x56e, '7it%'),
      'data': {
        'req_1': {
          'method': _0x5be7ca[_0xd74bbc(0x646, '8CIx')],
          'module': _0x5be7ca[_0xd74bbc(0x43a, 'o%]7')],
          'param': {
            'num_per_page': pageSize,
            'page_num': _0x13b47a,
            'query': _0x415abd,
            'search_type': _0x13b78c
          }
        }
      },
      'headers': headers,
      'xsrfCookieName': _0xd74bbc(0x3ab, 'bJC8'),
      'withCredentials': !![]
    }))[_0xd74bbc(0x747, 'MnJ5')];
  return {
    'isEnd': _0x5be7ca[_0xd74bbc(0x6cc, '1OC[')](_0x54fbbc[_0xd74bbc(0x1e7, 'Y#Tn')][_0xd74bbc(0x386, '$ldZ')][_0xd74bbc(0x52f, '7it%')][_0xd74bbc(0x73e, 'GGSV')], _0x5be7ca[_0xd74bbc(0x2e7, 'YMpZ')](_0x13b47a, pageSize)),
    'data': _0x54fbbc[_0xd74bbc(0x722, 'g[o#')][_0xd74bbc(0x6e6, 'uN9]')][_0xd74bbc(0x3b0, 'o%]7')][searchTypeMap[_0x13b78c]][_0xd74bbc(0x3eb, 'uN9]')]
  };
}
async function searchMusic(_0x72b17e, _0x85dc3f) {
  const _0x427847 = _0x310550,
    _0x5a9607 = {
      'YAKXA': function (_0x4d959d, _0xd23fab, _0x34cf53, _0x14b15c) {
        return _0x4d959d(_0xd23fab, _0x34cf53, _0x14b15c);
      }
    },
    _0x2b6475 = await _0x5a9607[_0x427847(0x746, '![39')](searchBase, _0x72b17e, _0x85dc3f, 0x0);
  return {
    'isEnd': _0x2b6475[_0x427847(0x6f9, '0juG')],
    'data': _0x2b6475[_0x427847(0x4ff, 'f!NO')][_0x427847(0x5f7, 'Cmd%')](validSongFilter)[_0x427847(0x209, 'YBo*')](formatMusicItem)
  };
}
async function searchAlbum(_0x54ca3a, _0x2ac44d) {
  const _0x4b75b0 = _0x310550,
    _0x3e332e = {
      'JuKrD': function (_0x14edd3, _0x17c77f, _0xae0712, _0x1c5d4b) {
        return _0x14edd3(_0x17c77f, _0xae0712, _0x1c5d4b);
      }
    },
    _0xef5439 = await _0x3e332e[_0x4b75b0(0x44d, 'f!NO')](searchBase, _0x54ca3a, _0x2ac44d, 0x2);
  return {
    'isEnd': _0xef5439[_0x4b75b0(0x19b, '0c!C')],
    'data': _0xef5439[_0x4b75b0(0x454, 'vdaz')][_0x4b75b0(0x4f3, '!4rE')](formatAlbumItem)
  };
}
async function searchArtist(_0x5d043a, _0x1d3430) {
  const _0x57a028 = _0x310550,
    _0x580a44 = await searchBase(_0x5d043a, _0x1d3430, 0x1);
  return {
    'isEnd': _0x580a44[_0x57a028(0x498, 'E9Je')],
    'data': _0x580a44[_0x57a028(0x3d0, 'Ln5U')][_0x57a028(0x1ce, 'wDo^')](formatArtistItem)
  };
}
async function searchMusicSheet(_0x2f54ee, _0x41c11f) {
  const _0xc39c1c = _0x310550,
    _0x26a18e = {
      'lPTYz': function (_0x4daf6, _0x362d62, _0x3af542, _0x4a28d7) {
        return _0x4daf6(_0x362d62, _0x3af542, _0x4a28d7);
      }
    },
    _0x379ef4 = await _0x26a18e[_0xc39c1c(0x1a4, '!4rE')](searchBase, _0x2f54ee, _0x41c11f, 0x3);
  return {
    'isEnd': _0x379ef4[_0xc39c1c(0x491, 'wDo^')],
    'data': _0x379ef4[_0xc39c1c(0x555, 'dZmR')][_0xc39c1c(0x573, '2338')](_0x53c3dc => ({
      'title': _0x53c3dc[_0xc39c1c(0x601, 'tU9n')],
      'createAt': _0x53c3dc[_0xc39c1c(0x314, '![39')],
      'description': _0x53c3dc[_0xc39c1c(0x1b8, 'VT5#')],
      'playCount': _0x53c3dc[_0xc39c1c(0x3aa, '!4rE')],
      'worksNums': _0x53c3dc[_0xc39c1c(0x6dd, '1faC')],
      'artwork': _0x53c3dc[_0xc39c1c(0x52e, '7it%')],
      'id': _0x53c3dc[_0xc39c1c(0x27e, 'Y#Tn')],
      'artist': _0x53c3dc[_0xc39c1c(0x46c, 'YMpZ')][_0xc39c1c(0x380, 'MnJ5')]
    }))
  };
}
async function searchLyric(_0x18e417, _0x5084f2) {
  const _0x3e9614 = _0x310550,
    _0x5be9c4 = {
      'FhixZ': function (_0x537b51, _0x598339, _0x319aad, _0x3b70f2) {
        return _0x537b51(_0x598339, _0x319aad, _0x3b70f2);
      }
    },
    _0xe40a0c = await _0x5be9c4[_0x3e9614(0x735, 'Cmd%')](searchBase, _0x18e417, _0x5084f2, 0x7);
  return {
    'isEnd': _0xe40a0c[_0x3e9614(0x487, 'GGSV')],
    'data': _0xe40a0c[_0x3e9614(0x6e6, 'uN9]')][_0x3e9614(0x4fb, 'Y8Rn')](_0xca5d34 => ({
      ...formatMusicItem(_0xca5d34),
      'rawLrcTxt': _0xca5d34[_0x3e9614(0x23e, 'o%]7')]
    }))
  };
}
function getQueryFromUrl(_0x4c22f2, _0x203ef4) {
  const _0x493ba8 = _0x310550,
    _0x583b3b = {
      'RFlVX': function (_0x5a1bf5, _0x4ac0d9) {
        return _0x5a1bf5 === _0x4ac0d9;
      },
      'Akdmf': _0x493ba8(0x712, '#jWv'),
      'DqWlC': function (_0x34af94, _0xe30c8b) {
        return _0x34af94(_0xe30c8b);
      },
      'ULsCw': function (_0x15b710, _0x396485) {
        return _0x15b710(_0x396485);
      },
      'IqoLF': function (_0x4513ef, _0x1e8eb2) {
        return _0x4513ef(_0x1e8eb2);
      },
      'nByGN': function (_0x4a4a9e, _0x34a6b0) {
        return _0x4a4a9e !== _0x34a6b0;
      },
      'RCqvS': _0x493ba8(0x5b7, '%q4y'),
      'vcwiA': _0x493ba8(0x412, '@jTP'),
      'OBFqn': function (_0x407870, _0x59820c) {
        return _0x407870 > _0x59820c;
      },
      'SXRJI': function (_0x16ceb8, _0x43fae8) {
        return _0x16ceb8 !== _0x43fae8;
      },
      'WzsBL': _0x493ba8(0x470, 'sBLp'),
      'BHpmn': function (_0xba6b81, _0x45f57d) {
        return _0xba6b81 !== _0x45f57d;
      },
      'haRbt': _0x493ba8(0x2ba, 'dZmR')
    };
  try {
    if (_0x583b3b[_0x493ba8(0x456, '8CIx')](_0x583b3b[_0x493ba8(0x3bc, '![39')], _0x583b3b[_0x493ba8(0x26e, 'g[o#')])) {
      const _0x1a4e80 = _0x203ef4[_0x493ba8(0x574, '69Sa')]('?');
      let _0x4cc8a3 = '';
      if (_0x583b3b[_0x493ba8(0x5a6, 'g[o#')](_0x1a4e80[_0x493ba8(0x363, 'bJC8')], 0x1)) {
        if (_0x583b3b[_0x493ba8(0x61e, '1faC')](_0x583b3b[_0x493ba8(0x216, 'kjqA')], _0x583b3b[_0x493ba8(0x3c6, '7it%')])) {
          if (_0x583b3b[_0x493ba8(0x224, 'OI7a')](_0x3e5fc7, _0x583b3b[_0x493ba8(0x725, 'OI7a')])) {
            return _0x3b77cf(_0x1796cc, _0x1e74dc);
          }
          if (_0x3ae6f0 === _0x493ba8(0x29f, 'sBLp')) {
            return _0x4a73c0(_0x2ef8af, _0x4489d3);
          }
        } else {
          _0x4cc8a3 = _0x1a4e80[0x1];
        }
      } else {
        return _0x4c22f2 ? undefined : {};
      }
      const _0x3542c7 = _0x4cc8a3[_0x493ba8(0x348, 'GGSV')]('&'),
        _0x5d2a3c = {};
      _0x3542c7[_0x493ba8(0x275, 'Y8Rn')](_0x4aa249 => {
        const _0x449811 = _0x493ba8,
          _0x2b074e = _0x4aa249[_0x449811(0x355, 'wDo^')]('=');
        _0x5d2a3c[_0x2b074e[0x0]] = _0x583b3b[_0x449811(0x5ee, 'NRC*')](decodeURIComponent, _0x2b074e[0x1]);
      });
      return _0x4c22f2 ? _0x5d2a3c[_0x4c22f2] : _0x5d2a3c;
    } else {
      let _0x1058af = _0x583b3b[_0x493ba8(0x587, '7it%')](_0x3af01f, _0x1c5088);
      _0x1058af == '' ? _0x20d383[_0x493ba8(0x1e6, 'OI7a')](_0x1548db) : _0x375326[_0x493ba8(0x349, '0juG')](_0x1058af);
    }
  } catch (_0x2dcbff) {
    if (_0x583b3b[_0x493ba8(0x1dd, 'tU9n')](_0x583b3b[_0x493ba8(0x560, 'YMpZ')], _0x493ba8(0x387, '8CIx'))) {
      return _0x4c22f2 ? '' : {};
    } else {
      const _0x249b0f = _0x471749[_0x493ba8(0x288, '%q4y')];
      return _0x583b3b[_0x493ba8(0x444, 'NRC*')](_0x27ea4d, _0x249b0f);
    }
  }
}
function changeUrlQuery(_0x21ae94, _0x592e89) {
  const _0xf9faf1 = _0x310550,
    _0x3919e2 = {
      'YKQnY': function (_0xb40daf, _0x40e318) {
        return _0xb40daf !== _0x40e318;
      },
      'wdJHA': _0xf9faf1(0x4f7, 'g[o#'),
      'hxSTF': function (_0x383093, _0x4d6431) {
        return _0x383093(_0x4d6431);
      },
      'QbpIz': function (_0x38e12c, _0xd74fbe, _0x1f3a86) {
        return _0x38e12c(_0xd74fbe, _0x1f3a86);
      }
    },
    _0x1c11b2 = _0x3919e2[_0xf9faf1(0x1a0, 'Nkpr')](getQueryFromUrl, null, _0x592e89);
  let _0x345c98 = _0x592e89[_0xf9faf1(0x6cd, 'A@za')]('?')[0x0];
  const _0x36cd13 = {
    ..._0x1c11b2,
    ..._0x21ae94
  };
  let _0x3eb490 = [];
  Object[_0xf9faf1(0x2a6, '0bVN')](_0x36cd13)[_0xf9faf1(0x1e2, 'VT5#')](_0x23adad => {
    const _0xe5b6c5 = _0xf9faf1;
    if (_0x3919e2[_0xe5b6c5(0x549, '0c!C')](_0x36cd13[_0x23adad], undefined) && _0x3919e2[_0xe5b6c5(0x2d5, 'Nkpr')](_0x36cd13[_0x23adad], '')) {
      _0xe5b6c5(0x53c, 'OI7a') === _0x3919e2[_0xe5b6c5(0x32f, 'tU9n')] ? _0x3eb490[_0xe5b6c5(0x3f4, 'VT5#')](_0x23adad + '=' + _0x3919e2[_0xe5b6c5(0x342, 'GGSV')](encodeURIComponent, _0x36cd13[_0x23adad])) : _0x4ce06a = (_0x4912fe[_0xe5b6c5(0x398, '9&#y')](/https?:\/\/y\.qq\.com\/n\/ryqq\/playlist\/([0-9]+)/) || [])[0x1];
    }
  });
  return (_0x345c98 + '?' + _0x3eb490[_0xf9faf1(0x273, 'kjqA')]('&'))[_0xf9faf1(0x253, '9&#y')](/\?$/, '');
}
const typeMap = {
  'm4a': {
    's': _0x310550(0x315, 'g[o#'),
    'e': _0x310550(0x530, 'OI7a')
  },
  0x80: {
    's': _0x310550(0x589, 'NRC*'),
    'e': _0x310550(0x5f6, 'A@za')
  },
  0x140: {
    's': _0x310550(0x623, '0c!C'),
    'e': _0x310550(0x5de, 'KqK%')
  },
  'ape': {
    's': _0x310550(0x60f, 'YMpZ'),
    'e': _0x310550(0x511, 'Y8Rn')
  },
  'flac': {
    's': _0x310550(0x5a4, '8CIx'),
    'e': _0x310550(0x1a7, '#jWv')
  }
};
async function getSourceUrl(_0x2d47df, _0x7ed386 = _0x310550(0x6c6, '!Mi^')) {
  const _0x3ad0e2 = _0x310550,
    _0x542c2d = {
      'WCdKn': _0x3ad0e2(0x34f, 'Nkpr'),
      'osyJm': _0x3ad0e2(0x1e8, 'NRC*'),
      'PTTLU': _0x3ad0e2(0x6f6, 'bJC8'),
      'CTKXZ': _0x3ad0e2(0x5a8, 'o%]7'),
      'SOLud': _0x3ad0e2(0x5b1, 'sBLp'),
      'SNeyH': _0x3ad0e2(0x2c7, 'Ln5U')
    },
    _0x258f73 = _0x2d47df;
  let _0x3ab480 = '';
  const _0x4886db = (Math[_0x3ad0e2(0x689, 'Nkpr')]() * 0x989680)[_0x3ad0e2(0x26b, 'I9C4')](0x0),
    _0x1c8cee = typeMap[_0x7ed386],
    _0x5211c6 = '' + _0x1c8cee['s'] + _0x2d47df + _0x258f73 + _0x1c8cee['e'],
    _0x11b6c9 = changeUrlQuery({
      '-': _0x3ad0e2(0x618, 'A@za'),
      'g_tk': 0x1505,
      'loginUin': _0x3ab480,
      'hostUin': 0x0,
      'format': _0x542c2d[_0x3ad0e2(0x31c, '!Mi^')],
      'inCharset': _0x3ad0e2(0x6f2, 'E9Je'),
      'outCharset': _0x542c2d[_0x3ad0e2(0x56f, 'OI7a')],
      'platform': _0x3ad0e2(0x5fb, '9&#y'),
      'needNewCode': 0x0,
      'data': JSON[_0x3ad0e2(0x556, 'f!NO')]({
        'req_0': {
          'module': _0x542c2d[_0x3ad0e2(0x72d, 'vdaz')],
          'method': _0x3ad0e2(0x640, '0juG'),
          'param': {
            'filename': [_0x5211c6],
            'guid': _0x4886db,
            'songmid': [_0x2d47df],
            'songtype': [0x0],
            'uin': _0x3ab480,
            'loginflag': 0x1,
            'platform': '20'
          }
        },
        'comm': {
          'uin': _0x3ab480,
          'format': _0x542c2d[_0x3ad0e2(0x331, 'g[o#')],
          'ct': 0x13,
          'cv': 0x0,
          'authst': ''
        }
      })
    }, _0x542c2d[_0x3ad0e2(0x5cb, 'f!NO')]);
  return (await (0x0, axios_1[_0x3ad0e2(0x1b5, '[*32')])({
    'method': _0x542c2d[_0x3ad0e2(0x1e9, '(cov')],
    'url': _0x11b6c9,
    'xsrfCookieName': _0x542c2d[_0x3ad0e2(0x31b, '0juG')],
    'withCredentials': !![]
  }))[_0x3ad0e2(0x63a, '#jWv')];
}
async function getAlbumInfo(_0x5d001d) {
  const _0x3fcff7 = _0x310550,
    _0x54440a = {
      'spIko': function (_0x9b4978, _0x3b1ab7) {
        return _0x9b4978(_0x3b1ab7);
      },
      'EesJX': _0x3fcff7(0x4f9, 'tU9n'),
      'BdrGs': _0x3fcff7(0x252, '2Evc'),
      'MTeKm': _0x3fcff7(0x41f, '9Fkk')
    },
    _0x5dc471 = changeUrlQuery({
      'data': JSON[_0x3fcff7(0x4a5, '$ldZ')]({
        'comm': {
          'ct': 0x18,
          'cv': 0x2710
        },
        'albumSonglist': {
          'method': _0x54440a[_0x3fcff7(0x5a7, '%q4y')],
          'param': {
            'albumMid': _0x5d001d[_0x3fcff7(0x353, '@jTP')],
            'albumID': 0x0,
            'begin': 0x0,
            'num': 0x3e7,
            'order': 0x2
          },
          'module': _0x54440a[_0x3fcff7(0x1ff, 'f!NO')]
        }
      })
    }, _0x3fcff7(0x4c6, 'VT5#')),
    _0x4b5b3c = (await (0x0, axios_1[_0x3fcff7(0x1b5, '[*32')])({
      'url': _0x5dc471,
      'headers': headers,
      'xsrfCookieName': _0x54440a[_0x3fcff7(0x35c, 'VT5#')],
      'withCredentials': !![]
    }))[_0x3fcff7(0x2cb, 'jjfM')];
  return {
    'musicList': _0x4b5b3c[_0x3fcff7(0x1fe, '%q4y')][_0x3fcff7(0x53b, 'sBLp')][_0x3fcff7(0x4af, '9Fkk')][_0x3fcff7(0x5f3, 'VT5#')](_0x3f0219 => validSongFilter(_0x3f0219[_0x3fcff7(0x3fe, 'wDo^')]))[_0x3fcff7(0x5a2, '7it%')](_0x2c9820 => {
      const _0x36289b = _0x3fcff7,
        _0x45d082 = _0x2c9820[_0x36289b(0x6d3, '8CIx')];
      return _0x54440a[_0x36289b(0x4ea, '69Sa')](formatMusicItem, _0x45d082);
    })
  };
}
async function getArtistSongs(_0x89aede, _0x4e41a3) {
  const _0x5000da = _0x310550,
    _0x20446b = {
      'xWPnQ': function (_0x1bb6c8, _0x2af5db, _0x5882bd) {
        return _0x1bb6c8(_0x2af5db, _0x5882bd);
      },
      'sRAcH': function (_0x58dfe6, _0x3605d2) {
        return _0x58dfe6 * _0x3605d2;
      },
      'BubVu': _0x5000da(0x399, '!4rE'),
      'fheOU': _0x5000da(0x230, 'Ln5U'),
      'doEET': _0x5000da(0x4b9, 'OI7a'),
      'fFmWS': _0x5000da(0x2e1, 'o%]7'),
      'WgpuR': function (_0x27591b, _0x1090ee) {
        return _0x27591b <= _0x1090ee;
      }
    },
    _0x4b7463 = _0x20446b[_0x5000da(0x2ee, 'dZmR')](changeUrlQuery, {
      'data': JSON[_0x5000da(0x3a6, 'A@za')]({
        'comm': {
          'ct': 0x18,
          'cv': 0x0
        },
        'singer': {
          'method': _0x5000da(0x2f1, '0juG'),
          'param': {
            'sort': 0x5,
            'singermid': _0x89aede[_0x5000da(0x267, '2338')],
            'sin': _0x20446b[_0x5000da(0x302, '2Evc')](_0x4e41a3 - 0x1, pageSize),
            'num': pageSize
          },
          'module': _0x20446b[_0x5000da(0x1f0, '0c!C')]
        }
      })
    }, _0x20446b[_0x5000da(0x280, 'OI7a')]),
    _0x3749e5 = (await (0x0, axios_1[_0x5000da(0x4ac, '2Evc')])({
      'url': _0x4b7463,
      'method': _0x20446b[_0x5000da(0x673, 'YMpZ')],
      'headers': headers,
      'xsrfCookieName': _0x20446b[_0x5000da(0x6a8, 'bJC8')],
      'withCredentials': !![]
    }))[_0x5000da(0x3f0, '0bVN')];
  return {
    'isEnd': _0x20446b[_0x5000da(0x3e6, '!Mi^')](_0x3749e5[_0x5000da(0x5c0, '@jTP')][_0x5000da(0x3f0, '0bVN')][_0x5000da(0x1ec, '!4rE')], _0x20446b[_0x5000da(0x565, 'VT5#')](_0x4e41a3, pageSize)),
    'data': _0x3749e5[_0x5000da(0x2a2, 'o%]7')][_0x5000da(0x63a, '#jWv')][_0x5000da(0x48b, 'sBLp')][_0x5000da(0x1f5, '2338')](validSongFilter)[_0x5000da(0x25d, '$ldZ')](formatMusicItem)
  };
}
async function getArtistAlbums(_0x39b6dd, _0x200d26) {
  const _0x1d53ac = _0x310550,
    _0x1d014e = {
      'RhmwD': function (_0x1c3abc, _0x27dd40, _0xfa57e3) {
        return _0x1c3abc(_0x27dd40, _0xfa57e3);
      },
      'ZQueI': _0x1d53ac(0x36a, 'sBLp'),
      'FIWCN': _0x1d53ac(0x4a9, '1OC['),
      'eRhSh': function (_0xfb101e, _0x1b2439) {
        return _0xfb101e * _0x1b2439;
      },
      'KXYcp': function (_0x59f7df, _0x4f7534) {
        return _0x59f7df / _0x4f7534;
      },
      'McEvF': _0x1d53ac(0x5f4, '7it%'),
      'YNOIE': function (_0x543390, _0x41c870) {
        return _0x543390 <= _0x41c870;
      },
      'FbVkF': function (_0x264b48, _0x2ee59c) {
        return _0x264b48 * _0x2ee59c;
      }
    },
    _0x3f69c3 = _0x1d014e[_0x1d53ac(0x54b, '[*32')](changeUrlQuery, {
      'data': JSON[_0x1d53ac(0x2ff, 'jjfM')]({
        'comm': {
          'ct': 0x18,
          'cv': 0x0
        },
        'singerAlbum': {
          'method': _0x1d014e[_0x1d53ac(0x5f5, '0bVN')],
          'param': {
            'singermid': _0x39b6dd[_0x1d53ac(0x6ce, 'A@za')],
            'order': _0x1d014e[_0x1d53ac(0x56b, '9Fkk')],
            'begin': _0x1d014e[_0x1d53ac(0x550, '1OC[')](_0x200d26 - 0x1, pageSize),
            'num': _0x1d014e[_0x1d53ac(0x22b, 'uN9]')](pageSize, 0x1),
            'exstatus': 0x1
          },
          'module': _0x1d014e[_0x1d53ac(0x3c0, '!Mi^')]
        }
      })
    }, _0x1d53ac(0x711, 'Y#Tn')),
    _0x13e860 = (await (0x0, axios_1[_0x1d53ac(0x4b7, 'Y8Rn')])({
      'url': _0x3f69c3,
      'method': _0x1d53ac(0x2cf, '1faC'),
      'headers': headers,
      'xsrfCookieName': _0x1d53ac(0x668, '![39'),
      'withCredentials': !![]
    }))[_0x1d53ac(0x704, '9&#y')];
  return {
    'isEnd': _0x1d014e[_0x1d53ac(0x196, 'tU9n')](_0x13e860[_0x1d53ac(0x2ce, '0bVN')][_0x1d53ac(0x329, '2Evc')][_0x1d53ac(0x552, '2Evc')], _0x1d014e[_0x1d53ac(0x30b, 'OI7a')](_0x200d26, pageSize)),
    'data': _0x13e860[_0x1d53ac(0x354, 'Ln5U')][_0x1d53ac(0x555, 'dZmR')][_0x1d53ac(0x1fa, '[*32')][_0x1d53ac(0x2c2, 'NRC*')](formatAlbumItem)
  };
}
async function getArtistWorks(_0x59033d, _0x54602a, _0x3330e7) {
  const _0x29ef31 = _0x310550,
    _0x4d9c15 = {
      'IeLHO': function (_0x7b3246, _0x4b81d7) {
        return _0x7b3246 === _0x4b81d7;
      },
      'ITmMU': _0x29ef31(0x2a3, '1faC'),
      'TQBMv': function (_0x56bef1, _0x19c18e, _0x37ff0e) {
        return _0x56bef1(_0x19c18e, _0x37ff0e);
      }
    };
  if (_0x4d9c15[_0x29ef31(0x536, 'Nkpr')](_0x3330e7, _0x29ef31(0x48d, 'tU9n'))) {
    return getArtistSongs(_0x59033d, _0x54602a);
  }
  if (_0x4d9c15[_0x29ef31(0x72b, '8CIx')](_0x3330e7, _0x4d9c15[_0x29ef31(0x300, 'kjqA')])) {
    return _0x4d9c15[_0x29ef31(0x2b1, 'Cmd%')](getArtistAlbums, _0x59033d, _0x54602a);
  }
}
async function getLyric(_0x411177) {
  const _0x12122a = _0x310550,
    _0x33c8c3 = {
      'rEJWs': _0x12122a(0x2ea, 'g[o#'),
      'Kcsjd': _0x12122a(0x251, 'I9C4')
    },
    _0x402d86 = (await (0x0, axios_1[_0x12122a(0x740, '![39')])({
      'url': _0x12122a(0x5c8, 'jjfM') + _0x411177[_0x12122a(0x6e3, '9Fkk')] + _0x12122a(0x6db, '!4rE') + new Date()[_0x12122a(0x27a, 'jjfM')]() + _0x12122a(0x5f0, '0juG'),
      'headers': {
        'Referer': _0x33c8c3[_0x12122a(0x23c, 'OI7a')],
        'Cookie': _0x33c8c3[_0x12122a(0x20f, '2338')]
      },
      'method': _0x12122a(0x2ac, '7it%'),
      'xsrfCookieName': _0x12122a(0x3ff, '$ldZ'),
      'withCredentials': !![]
    }))[_0x12122a(0x61b, '69Sa')],
    _0x5c2f11 = JSON[_0x12122a(0x3ee, 'GGSV')](_0x402d86[_0x12122a(0x41c, 'g[o#')](/callback\(|MusicJsonCallback\(|jsonCallback\(|\)$/g, ''));
  return {
    'rawLrc': CryptoJs[_0x12122a(0x4c8, '!Mi^')][_0x12122a(0x5d0, 'sBLp')][_0x12122a(0x69b, '9&#y')](_0x5c2f11[_0x12122a(0x61f, 'Ln5U')])[_0x12122a(0x201, 'MnJ5')](CryptoJs[_0x12122a(0x49f, '#jWv')][_0x12122a(0x1cf, '0juG')])
  };
}
async function importMusicSheet(_0x4cee9c) {
  const _0x1e3634 = _0x310550,
    _0x216d86 = {
      'ZHTec': function (_0x1a97f3, _0x78e5a8) {
        return _0x1a97f3(_0x78e5a8);
      },
      'ZaltH': _0x1e3634(0x1b3, 'q2yF'),
      'MoTrg': function (_0x4bd641, _0x36077f) {
        return _0x4bd641 === _0x36077f;
      },
      'nhZju': _0x1e3634(0x4d9, '![39'),
      'aiAmt': _0x1e3634(0x2be, 'o%]7'),
      'lJPeO': _0x1e3634(0x4b5, '#jWv')
    };
  let _0xc93211;
  if (!_0xc93211) {
    _0x1e3634(0x397, 'Y8Rn') !== _0x216d86[_0x1e3634(0x68a, 'GGSV')] ? _0x292bff[_0x1e3634(0x205, '0bVN')](_0x4191e8 + '=' + _0x216d86[_0x1e3634(0x621, 'Ln5U')](_0x2f0a07, _0x1b1289[_0xa27d04])) : _0xc93211 = (_0x4cee9c[_0x1e3634(0x259, '1faC')](/https?:\/\/i\.y\.qq\.com\/n2\/m\/share\/details\/taoge\.html\?.*id=([0-9]+)/) || [])[0x1];
  }
  if (!_0xc93211) {
    _0xc93211 = (_0x4cee9c[_0x1e3634(0x742, 'GGSV')](/https?:\/\/y\.qq\.com\/n\/ryqq\/playlist\/([0-9]+)/) || [])[0x1];
  }
  if (!_0xc93211) {
    _0xc93211 = (_0x4cee9c[_0x1e3634(0x6da, 'g[o#')](/^(\d+)$/) || [])[0x1];
  }
  if (!_0xc93211) {
    if (_0x216d86[_0x1e3634(0x6d7, '%q4y')](_0x216d86[_0x1e3634(0x66a, 'Ln5U')], _0x216d86[_0x1e3634(0x6ca, 'Cmd%')])) {
      return;
    } else {
      return {
        'url': ''
      };
    }
  }
  const _0x37200a = (await (0x0, axios_1[_0x1e3634(0x350, 'GGSV')])({
      'url': _0x1e3634(0x395, '0bVN') + _0xc93211 + _0x1e3634(0x3bb, '[*32'),
      'headers': {
        'Referer': _0x216d86[_0x1e3634(0x22f, 'tU9n')],
        'Cookie': _0x216d86[_0x1e3634(0x437, 'wDo^')]
      },
      'method': _0x1e3634(0x6aa, '8CIx'),
      'xsrfCookieName': _0x1e3634(0x358, '9&#y'),
      'withCredentials': !![]
    }))[_0x1e3634(0x2ef, 'wDo^')],
    _0x385742 = JSON[_0x1e3634(0x3ee, 'GGSV')](_0x37200a[_0x1e3634(0x73d, 'GGSV')](/callback\(|MusicJsonCallback\(|jsonCallback\(|\)$/g, ''));
  return _0x385742[_0x1e3634(0x504, '@jTP')][0x0][_0x1e3634(0x705, 'Y8Rn')][_0x1e3634(0x457, 'wDo^')](validSongFilter)[_0x1e3634(0x707, 'A@za')](formatMusicItem);
}
async function getTopLists() {
  const _0x1baf95 = _0x310550,
    _0x17689a = {
      'vtOqW': _0x1baf95(0x2d3, '69Sa'),
      'LZIMm': _0x1baf95(0x251, 'I9C4')
    },
    _0x3d58e6 = await (0x0, axios_1[_0x1baf95(0x490, '$ldZ')])({
      'url': _0x17689a[_0x1baf95(0x708, 'sBLp')],
      'method': _0x1baf95(0x59a, '1OC['),
      'headers': {
        'Cookie': _0x17689a[_0x1baf95(0x657, '7it%')]
      },
      'xsrfCookieName': _0x1baf95(0x1e5, '1faC'),
      'withCredentials': !![]
    });
  return _0x3d58e6[_0x1baf95(0x737, '!4rE')][_0x1baf95(0x215, '!Mi^')][_0x1baf95(0x704, '9&#y')][_0x1baf95(0x443, 'Nkpr')][_0x1baf95(0x5a0, 'kjqA')](_0x2e7a7e => ({
    'title': _0x2e7a7e[_0x1baf95(0x1fc, '[*32')],
    'data': _0x2e7a7e[_0x1baf95(0x669, 'Ln5U')][_0x1baf95(0x242, 'MnJ5')](_0x5458e5 => ({
      'id': _0x5458e5[_0x1baf95(0x743, 'KqK%')],
      'description': _0x5458e5[_0x1baf95(0x328, 'dZmR')],
      'title': _0x5458e5[_0x1baf95(0x22e, 'Cmd%')],
      'period': _0x5458e5[_0x1baf95(0x290, 'o%]7')],
      'coverImg': _0x5458e5[_0x1baf95(0x301, '69Sa')] || _0x5458e5[_0x1baf95(0x334, 'kjqA')]
    }))
  }));
}
async function getTopListDetail(_0x309a53) {
  const _0x25420d = _0x310550,
    _0x2eff71 = {
      'Agjfs': _0x25420d(0x3da, 'I9C4'),
      'UkxAX': _0x25420d(0x696, 'sBLp')
    },
    _0x4ba41a = await (0x0, axios_1[_0x25420d(0x521, 'uN9]')])({
      'url': _0x25420d(0x4cc, 'Y8Rn') + _0x309a53['id'] + _0x25420d(0x661, '%q4y') + (_0x309a53[_0x25420d(0x3ea, '69Sa')] ?? '') + _0x25420d(0x1d8, '1OC['),
      'method': _0x2eff71[_0x25420d(0x503, '1faC')],
      'headers': {
        'Cookie': _0x2eff71[_0x25420d(0x682, 'YMpZ')]
      },
      'xsrfCookieName': _0x25420d(0x2f6, 'NRC*'),
      'withCredentials': !![]
    });
  return {
    ..._0x309a53,
    'musicList': _0x4ba41a[_0x25420d(0x653, 'bJC8')][_0x25420d(0x71e, 'Ln5U')][_0x25420d(0x1a5, 'o%]7')][_0x25420d(0x1bc, '0c!C')][_0x25420d(0x5f3, 'VT5#')](validSongFilter)[_0x25420d(0x4b1, 'jjfM')](formatMusicItem)
  };
}
async function getRecommendSheetTags() {
  const _0x3f0892 = _0x310550,
    _0x10e6a5 = {
      'UKbMd': _0x3f0892(0x6c1, '1faC'),
      'XQRdi': _0x3f0892(0x5bb, '7it%')
    },
    _0x2f2965 = (await axios_1[_0x3f0892(0x490, '$ldZ')][_0x3f0892(0x6f1, 'jjfM')](_0x10e6a5[_0x3f0892(0x381, 'g[o#')], {
      'headers': {
        'referer': _0x10e6a5[_0x3f0892(0x19c, 'Nkpr')]
      }
    }))[_0x3f0892(0x454, 'vdaz')][_0x3f0892(0x2f9, '1OC[')][_0x3f0892(0x624, 'bJC8')],
    _0x1a949c = _0x2f2965[_0x3f0892(0x4d0, 'VT5#')](0x1)[_0x3f0892(0x3c4, 'VT5#')](_0x1a8861 => ({
      'title': _0x1a8861[_0x3f0892(0x5d4, 'E9Je')],
      'data': _0x1a8861[_0x3f0892(0x60e, 'Y8Rn')][_0x3f0892(0x4c9, 'f!NO')](_0x306f4a => ({
        'id': _0x306f4a[_0x3f0892(0x5ba, 'KqK%')],
        'title': _0x306f4a[_0x3f0892(0x718, 'Ln5U')]
      }))
    })),
    _0x566de2 = [];
  for (let _0x47714c of _0x1a949c) {
    if (_0x47714c[_0x3f0892(0x329, '2Evc')][_0x3f0892(0x29d, 'dZmR')]) {
      _0x566de2[_0x3f0892(0x731, '7it%')](_0x47714c[_0x3f0892(0x329, '2Evc')][0x0]);
    }
  }
  return {
    'pinned': _0x566de2,
    'data': _0x1a949c
  };
}
function _0x1f7d(_0x59cc10, _0x555d82) {
  const _0x4b8c1f = _0x4b8c();
  _0x1f7d = function (_0x1f7d8b, _0x29113b) {
    _0x1f7d8b = _0x1f7d8b - 0x195;
    let _0x8be8c = _0x4b8c1f[_0x1f7d8b];
    if (_0x1f7d['wbbmQJ'] === undefined) {
      var _0x42a0b1 = function (_0x15bba0) {
        const _0x52bfab = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let _0x2ddaf6 = '',
          _0x43a1dc = '';
        for (let _0x33ba2d = 0x0, _0x338882, _0x550e18, _0x348c71 = 0x0; _0x550e18 = _0x15bba0['charAt'](_0x348c71++); ~_0x550e18 && (_0x33ba2d % 0x4 ? _0x338882 = _0x338882 * 0x40 + _0x550e18 : _0x338882 = _0x550e18, _0x33ba2d++ % 0x4) ? _0x2ddaf6 += String['fromCharCode'](0xff & _0x338882 >> (-0x2 * _0x33ba2d & 0x6)) : 0x0) {
          _0x550e18 = _0x52bfab['indexOf'](_0x550e18);
        }
        for (let _0x471ed2 = 0x0, _0x4f6a22 = _0x2ddaf6['length']; _0x471ed2 < _0x4f6a22; _0x471ed2++) {
          _0x43a1dc += '%' + ('00' + _0x2ddaf6['charCodeAt'](_0x471ed2)['toString'](0x10))['slice'](-0x2);
        }
        return decodeURIComponent(_0x43a1dc);
      };
      const _0x2710c1 = function (_0x15f5dd, _0x248540) {
        let _0x243647 = [],
          _0x23fb2d = 0x0,
          _0x1d34c1,
          _0x287e10 = '';
        _0x15f5dd = _0x42a0b1(_0x15f5dd);
        let _0x4849b5;
        for (_0x4849b5 = 0x0; _0x4849b5 < 0x100; _0x4849b5++) {
          _0x243647[_0x4849b5] = _0x4849b5;
        }
        for (_0x4849b5 = 0x0; _0x4849b5 < 0x100; _0x4849b5++) {
          _0x23fb2d = (_0x23fb2d + _0x243647[_0x4849b5] + _0x248540['charCodeAt'](_0x4849b5 % _0x248540['length'])) % 0x100;
          _0x1d34c1 = _0x243647[_0x4849b5];
          _0x243647[_0x4849b5] = _0x243647[_0x23fb2d];
          _0x243647[_0x23fb2d] = _0x1d34c1;
        }
        _0x4849b5 = 0x0;
        _0x23fb2d = 0x0;
        for (let _0x1d025d = 0x0; _0x1d025d < _0x15f5dd['length']; _0x1d025d++) {
          _0x4849b5 = (_0x4849b5 + 0x1) % 0x100;
          _0x23fb2d = (_0x23fb2d + _0x243647[_0x4849b5]) % 0x100;
          _0x1d34c1 = _0x243647[_0x4849b5];
          _0x243647[_0x4849b5] = _0x243647[_0x23fb2d];
          _0x243647[_0x23fb2d] = _0x1d34c1;
          _0x287e10 += String['fromCharCode'](_0x15f5dd['charCodeAt'](_0x1d025d) ^ _0x243647[(_0x243647[_0x4849b5] + _0x243647[_0x23fb2d]) % 0x100]);
        }
        return _0x287e10;
      };
      _0x1f7d['MReVOu'] = _0x2710c1;
      _0x59cc10 = arguments;
      _0x1f7d['wbbmQJ'] = !![];
    }
    const _0x38d788 = _0x4b8c1f[0x0],
      _0x3b0952 = _0x1f7d8b + _0x38d788,
      _0x20dcbd = _0x59cc10[_0x3b0952];
    !_0x20dcbd ? (_0x1f7d['aNXwQp'] === undefined && (_0x1f7d['aNXwQp'] = !![]), _0x8be8c = _0x1f7d['MReVOu'](_0x8be8c, _0x29113b), _0x59cc10[_0x3b0952] = _0x8be8c) : _0x8be8c = _0x20dcbd;
    return _0x8be8c;
  };
  return _0x1f7d(_0x59cc10, _0x555d82);
}
async function getRecommendSheetsByTag(_0xb491d3, _0x16ead5) {
  const _0x156368 = _0x310550,
    _0x2857c7 = {
      'JaEMk': _0x156368(0x43f, '2338'),
      'ABnKc': _0x156368(0x38a, 'kjqA'),
      'sinZk': _0x156368(0x1b9, 'I9C4'),
      'VIaAa': function (_0x219989, _0x11e502) {
        return _0x219989 * _0x11e502;
      },
      'oiLxV': function (_0x558d86, _0x119075) {
        return _0x558d86 - _0x119075;
      },
      'JqXeh': function (_0x262a5c, _0x5d9543) {
        return _0x262a5c - _0x5d9543;
      },
      'sSXtA': function (_0x57ed71, _0x41049f) {
        return _0x57ed71 <= _0x41049f;
      }
    },
    _0x2ce6cc = 0x14,
    _0x3bbd3e = (await axios_1[_0x156368(0x411, '!Mi^')][_0x156368(0x2a1, '69Sa')](_0x156368(0x231, 'wDo^'), {
      'headers': {
        'referer': _0x2857c7[_0x156368(0x5be, 'bJC8')]
      },
      'params': {
        'inCharset': _0x2857c7[_0x156368(0x368, 'YBo*')],
        'outCharset': _0x2857c7[_0x156368(0x6fc, 'Y#Tn')],
        'sortId': 0x5,
        'categoryId': _0xb491d3?.['id'] || _0x156368(0x29e, '7it%'),
        'sin': _0x2857c7[_0x156368(0x613, '@jTP')](_0x2ce6cc, _0x2857c7[_0x156368(0x69f, 'Nkpr')](_0x16ead5, 0x1)),
        'ein': _0x2857c7[_0x156368(0x217, 'bJC8')](_0x16ead5 * _0x2ce6cc, 0x1)
      }
    }))[_0x156368(0x4da, '%q4y')],
    _0x5f3fbf = JSON[_0x156368(0x5d2, 'q2yF')](_0x3bbd3e[_0x156368(0x6b0, 'vdaz')](/callback\(|MusicJsonCallback\(|jsonCallback\(|\)$/g, ''))[_0x156368(0x304, 'Y#Tn')],
    _0xdd6ede = _0x2857c7[_0x156368(0x1f1, '![39')](_0x5f3fbf[_0x156368(0x582, 'Y8Rn')], _0x2857c7[_0x156368(0x73a, '!4rE')](_0x16ead5, _0x2ce6cc)),
    _0x5e4cef = _0x5f3fbf[_0x156368(0x3e7, 'KqK%')][_0x156368(0x3ed, '0c!C')](_0x3f9c06 => ({
      'id': _0x3f9c06[_0x156368(0x616, 'OI7a')],
      'createTime': _0x3f9c06[_0x156368(0x527, '1faC')],
      'title': _0x3f9c06[_0x156368(0x519, '9Fkk')],
      'artwork': _0x3f9c06[_0x156368(0x447, '0juG')],
      'description': _0x3f9c06[_0x156368(0x5e0, '1OC[')],
      'playCount': _0x3f9c06[_0x156368(0x415, 'Y8Rn')],
      'artist': _0x3f9c06[_0x156368(0x553, '1faC')]?.[_0x156368(0x4e2, 'Cmd%')] ?? ''
    }));
  return {
    'isEnd': _0xdd6ede,
    'data': _0x5e4cef
  };
}
async function getMusicSheetInfo(_0x372d7f, _0xd666f) {
  const _0x10b6a7 = _0x310550,
    _0x33e252 = {
      'TEhAk': function (_0x503b0d, _0x403bbf) {
        return _0x503b0d(_0x403bbf);
      }
    },
    _0x102b56 = await _0x33e252[_0x10b6a7(0x347, 'Cmd%')](importMusicSheet, _0x372d7f['id']);
  return {
    'isEnd': !![],
    'musicList': _0x102b56
  };
}
function formatAudiomackMusicItem(_0x4cc211) {
  const _0xf54d4 = _0x310550;
  return {
    'id': _0x4cc211['id'],
    'artwork': _0x4cc211[_0xf54d4(0x206, '2338')] || _0x4cc211[_0xf54d4(0x3c2, 'bJC8')],
    'duration': +_0x4cc211[_0xf54d4(0x40b, '9Fkk')],
    'title': _0x4cc211[_0xf54d4(0x6af, '0juG')][_0xf54d4(0x3ae, '0juG')]()[_0xf54d4(0x738, 'OI7a')]('\x20', '')[_0xf54d4(0x4ab, '9&#y')]('&', ','),
    'artist': _0x4cc211[_0xf54d4(0x32e, '9Fkk')][_0xf54d4(0x260, '![39')]()[_0xf54d4(0x71d, 'dZmR')]('\x20', '')[_0xf54d4(0x738, 'OI7a')]('&', ','),
    'album': _0x4cc211[_0xf54d4(0x245, 'Y#Tn')],
    'url_slug': _0x4cc211[_0xf54d4(0x19d, '1OC[')]
  };
}
function getNormalizedParams(_0x3df3fa) {
  const _0x12ea79 = _0x310550,
    _0xe26163 = {
      'loIjj': function (_0x521152, _0x30b0e6) {
        return _0x521152 !== _0x30b0e6;
      },
      'MfGqR': _0x12ea79(0x2f5, '8CIx'),
      'wZipm': function (_0x45a785, _0xf5cb9d) {
        return _0x45a785 < _0xf5cb9d;
      },
      'AhGrO': function (_0x2e42c5, _0xee4984) {
        return _0x2e42c5 < _0xee4984;
      },
      'IeRxA': function (_0x5f5038, _0x2596d7) {
        return _0x5f5038(_0x2596d7);
      },
      'YhHDD': function (_0x741f28, _0x5352a5) {
        return _0x741f28 + _0x5352a5;
      }
    },
    _0x55719d = [],
    _0x26196e = [];
  for (let _0x25dcc0 in _0x3df3fa) {
    if (_0xe26163[_0x12ea79(0x474, 'I9C4')](_0xe26163[_0x12ea79(0x3be, 'o%]7')], _0xe26163[_0x12ea79(0x37b, 'bJC8')])) {
      var _0x6c40a0 = this[_0x12ea79(0x33f, '7it%')](_0x214a96[_0x34135d]);
      this[_0x12ea79(0x628, 'g[o#')](_0x4a069d, _0x6c40a0);
    } else {
      _0x55719d[_0x12ea79(0x2cd, 'Y#Tn')](_encode(_0x25dcc0));
    }
  }
  _0x55719d[_0x12ea79(0x697, '(cov')]();
  for (let _0x135c73 = 0x0; _0xe26163[_0x12ea79(0x62e, '!4rE')](_0x135c73, _0x55719d[_0x12ea79(0x515, '69Sa')]); _0x135c73++) {
    const _0x2d3727 = _0x55719d[_0x135c73];
    var _0x3930a7,
      _0x17b45d,
      _0x81ad7e = _decode(_0x2d3727),
      _0x4f1301 = _0x3df3fa[_0x81ad7e];
    for (_0x4f1301[_0x12ea79(0x493, 'Y#Tn')](), _0x3930a7 = 0x0; _0xe26163[_0x12ea79(0x610, 'Nkpr')](_0x3930a7, _0x4f1301[_0x12ea79(0x41d, 'YBo*')]); _0x3930a7++) {
      _0x17b45d = _0xe26163[_0x12ea79(0x678, 'Y8Rn')](_encode, _0x4f1301[_0x3930a7]);
      _0x26196e[_0x12ea79(0x308, '![39')](_0xe26163[_0x12ea79(0x71a, 'sBLp')](_0x2d3727, '=') + _0x17b45d);
    }
  }
  return _0x26196e[_0x12ea79(0x6ee, 'YBo*')]('&');
}
function _0x4b8c() {
  const _0x49e692 = function () {
    return [_0xodj, 'LEtCjFesPjwbSiaIKmTiP.GQlcGRomBdU.kvy7ph==', 'WRJdKmkgW6n5', 'aCo6xmok', 'WO8aW6lcThKc', 'W7m/k8oUda', 'W5ODW44zAmk5dSowtSo1', 'WQ/cQZPpW5JcUfhcKa1AjSk9bW', 'D0jdlaq', 'xmk2tG', 'WRJdJSo8', 'WR1ElcZdMW', 'WR1MW7K', 'WQj7lZZdVCkoeG', 'q8oZW7aMheavBh3cJWbrWPe8W59Zi8oUWOqnW7GyW7K', 'W5O3W5i6sW', 'WRxcOmoCjSo7W4JdV8kyWPNdRsm', 'z8k/rdddLCoFWOVcNh03rc7dGvhcOmkWACkVrSorySoHmmorWP/cMXFcR1NdICoEhxddGebcD8k3WQ4MWQ3dNbldISkDWRZcNeOYxmkGWRxcJ17dP0PqWRxcRwhdSuZdMCk3W4WKymoWaSk8nCoIDmktW6dcSY8MWPagWOpcLaX9W73dN8oHWRiaxdyAB3FdLSkakmoTW75Hhe50muig', 'WQfQvq', 'hbNcM0rhEZiTlYFcTSkgaCkwaCkLW4NcGHNdI8k6fCkQeghcRGBdO2f+sfzhlrK', 'WQ7cMCkAnZ/dGSkhW7S', 'c8kKbhNdM2hdMCkbFeS', 'WQOAWRe', 'oYnsaXW', 'dmkLa2ZdMKZdVSke', 'jmkIWPWzWR4', 'Ch1kaCov', 'eCkrwuTUWRFdQCkGWQO', 'WOJcSrHYW70', 'cmoiW6hcLr8', 'cmorW6pcMW4faZC4', 'WPtdTCkBW5TL', 'W6eFW7bfer3dSCoOeCkWota', 'WRvoWR0', 'q8kaWRNdIvKukeXjEwrnvSoMtW', 'jHDyWQbEwLDO', 'k0DE', 'W47dRrFcNSkAcu9KtLLlWOX8W47dSq', 'gCk/hMNdKwhdVa', 'yK94obS', 'WQymW5NcQeq', 'qmkrwaS0ymo4', 'WQZcRSoKkSoK', 'ft7cQtZdOSobW4xcOgHGxte', 'WQ7cJCkDptq', 'FmkKxIFdUCkgW4VdHNbT', 'WRddSeFdKCkqoSkZW508W6v0l8o+dSoumHZcT8o4W71pbCkOFLRcGMtcJCouW5ZcTmoixuZdLca', 'Bmk9ocldOrlcVa', 'wSkNAIVdLG', 'W6LNW6OqBW', 'v8kPxYBdNG', 'iHymotKmW7i', 'hmk8W4e', 'W7ZcJSkakI7dVmkAW7O4W4FdMSolWOORW40GWQKmAuGLiSo8DSk9W5ddRYRdU0WIdbRdImkdsSoGnv7cJCkxW49sz8o1C1xcUcxdPwdcJc7cJN0qmW5pW5ZcHmk8WRSNW77dVslcOvGzEmoMW5/cHSkLW6ais8khWPbMW5pdMMigwCkDWQ3dLfxdHSo/W7nKWRPIi8kZqmkYWR/dIs0', 'mSkSWP0w', 'mH57bW', 'W6pdIvusWOS', 'WQlcQSkgeGK', 'WR3dN8k8W59bW6FdT8oUWR1ZbmosFvO', 'WRZcRIfpW7VcVqaJWQVcKa', 'eSkuvLHTWQRdLSke', 'kYerWPTN', 'CmoQWR7cOa', 'WPFdK8k5WPidFh3dNfO', 'W5aKp2jaWOVdPWBcJCoi', 'f8k2W5i', 'k0fuWQO', 'jHZPNlVKU7K', 'WRhdUSkp', 'h8ozW7NcNq', 'W5lcRLWuW5zuW4VcVXxcTCoPbSokW5RcLsFdN8ky', 'A2D8', 'iIxcOhjd', 'wCkdzbu8', 'BSk/rdi', 'WQJdQfldLCkfB8oUWP8', 'WQj9lWhdUW', 'umkxcWVdIG', 'deyFpcZdL8kNWOSDAG', 'zmktwrOb', 'W4C1ohfbWPtdHa', 'o8k/WRaDWPe', 'mr58mcpdVSoe', 'WRj2WOerW4S', 'Emo1W6eZ', 'kImVWPLVW6T1W7G', 'WQBdPSk/WPuO', 'fSozW70', 'b8oHymopWQi', 'WOuKmY0', 'xfbaiWG', 'W6G8FmoNDCk7vCkn', 'qNhcK8oEWOXJW7HACmojA8kiWRO', 'W5tcPeaDWPrYW5C', 'iHrecZ3dTSotk8kbBCka', 'umkbW6azW7dcQCkuW5q', 'WOGkW4pcTM4zWQr7', 'WRLGnsVcQSoiwCkTwaHqWOiieSktFZLtCmkFAgZdUX7dUIddGtxdPWT/xvldLqbd', 'fCk4gxFdNq', 'nCoIW6/cPGm', 'jSoGD8o/WPm', 'WOxdKmk1WOaGz3e', 'WQFcPSoBl8o6', 'Amo8W7WGk2Soyq', 'WRVdPuFdHmkeB8oUWOSfW7nUza', 'ndKYWPDG', 'kmo9z8o6WRe', 'WRreWRSWqK7dLa', 'jHPXlstdTCoowG', 'jb54ccVdSmoekCkmCG', 'WRZdOuFdGmkkBa', 'WOZdLZ4Evq', 'iCktWPDwAW', '5B215BM4WPZcNCohy8o/aa', 'WRpcQSoHfSk9', 'A8kUvIhdK8kjW5a', 'q0LFpHNdQ8kVfSop', 'nqBcI1Ls', '5AY65ywQ6l+M56UC5lUq5l6H6lYx5RU85O6Z5OMh5P+gWOeEoI/ORP7LKzad5PEL6lsN6z6M5lMu77+65A2r5yAq5PAw6zw65zks5Q+n5y2l5AAW5BgV5P2V5ywm77+X6k2W6ikO5BYE562p5B+3', 'WPZdKreLwa', 'eSozzSo7WO8', 'W6G8FmoNCmk2', 'WRtdI8kRW7LzW6tdHSo/WRK', 'hb16WO9y', 'eCkxwuTMWQZdGa', 'l3SLfXW', 'WQrXW7VdLYNdIq', 'yCkMxYldJ8olW4/dHML2e2pdNG', '5O205lMH5yEd6zw0', 'W6RdR3WE', 'fqhcJufzd3XVkW', 'nSkDW6JdP8kt', 'F8kNuttdGmkkW5BdNG', 'wh15e8o6', 'BCoNWRK', 'vY/cVJW', 'bGJcN1HviNHdiJS', 'u2ODibdcHN4y', 'zqFcQXZdOa', 'Cmo7W7i', 'WR3cItLHW7q', 'WO4aW6dcRN0tWQ8', 'WO8qW70', 'WRRdRhFdKSkc', 'WQjQr8k2WOJdL8kK', 'W4iFW6KfFG', 'WPeeW6tcOxq', 'DCoNWQ5gaq', 'WRCcW5NcQg8', 'WRRcMCkh', 'WP9oASkpWRW', 'WRhdN8k7W7e', 'zqxcUrddHW', 'dSkFWOjmsG', 'qsVcUWlcSq', 'WPFdJCkVWO4DzG', 'WRnBWQag', 'nSkPWQrQFa', 'dSoBWPVdU8oa', 'WOP6WPSrsG', 'WRVcUt18W6NcSHaf', 'CCk1DConW7S', 'WPdcN8ork8op', 'WOnjWRK8wq', 'aCo0vSo3WPVcHSot', 'W7m/mSoN', 'WPddL8kKW7Xd', 'xX7cNGtdUW', 'W4CXkNe', 'ACkKqGxdH8kgW4W', 'vSkRbN/dNq', '5O+o5lQX57Ud5P+3', 'dmkIjNhdIxBdPCkJCf3dTa', 'ocaJWOTUW49pW4G', 'lSo7WRTUf8k6pa', 'W5e/k35q', 'gCoHw8ooWOBdMSktW6vaWQBdUbCUW5lcKCoHvaH9W47dISooWQK', 'WOXWW7/dOaO', 'WPRdMrO2zq', 'tSkYjb3dHG', 'BxX+dmofqHxcNtXi', 'fHxcHSolaa', 'nctcVSoEnq', 'WQJcQJ9eW6RcTW', 'WPldLq8uyLhdSW', 'zSkCCXmb', 'WObFnHtdVW', 'W4RcRq7cMCkgbfKPv1LdWPC', 'W7iIoCkVuq', 'hcxdNW', 'FSoKWQpcRW', 'fmohWRddSSoTj8kfWPFdK31xW6e', 'W6C/dxvvWORdKWFcV8opWP0zmCoPpt8Lk8kWWP5od8kwif4', 'bSkprwfK', 'duSGfG8', 'kXfphrPjW6WYCSoyimkuWROwu8k9aH3cTmowW4CWertcJSoxW4/dOmohW6xdN8oycSkGWQiPz0zAW5lcHmouAMz6mdG', 'W4KkW4OCESkU', 'bdNcUSoad8oBnmoGW7G', 'ESk5xa', 'W68Jl0bN', 'smkeW7iaW4i', 'CXjfWQH5cqa', 'bSoAWQRdVmoxpq', 'nvbl', 'ECk9pa', 'q09l', 'jrrMaYFdUSof', 'W47cS0K', 'gtmtpqW', 'WPVdNSkR', 'zCker0m', 'b8kUuSoI', 'W6RcQLOhWRy', 'kIuVWPLMW7a', 'WQRcRJDcW6/cSHe', 'icHVWPrF', 'EHLgWQ44turP', 'zSoTWQO', 'c8k5ghFdKhtdVSkgAa', 'W6VdUwmgWQ3cMKbvWOpdMCkVoCk2W6KxB8kWbgClfSkRDSkTjHtcQtPmW5y6rColA8oIa3KKk1HJWQtdJKJcPIbdDSkSW6ddVW/dTL4dW6FcGmk8ffHwza', 'WQr7iaZdPq', 'hrj7WO5U', 'F8k6oYldQqlcRq', 'W7ewW5mBta', 'fCkzWR1Oyq', 'zNfomdu', 'jCk0WR1PBSkEtGjvjq', 'rh/dSCkAumkkgmo0W6xcTCoYWPW', 'gCo3W4BcLGO', 'W4xcRaJcRSkia0q', 'grJcNf1xhMHWiG', 'DdNcQdBdRG', 'v8kyyGBcI8kXW6VdUfTx', 'bbJcNfW', 'WQnXmatcOq', 'WRBcMmkpC2qXWOFdVhNdImoA', 'W4GCxSo1Fq', 'W4HVW5Kvzq', 'emoLx8osWPZcG8oDWR5tWRpcPWPLW5hcHCo5tGP6W4VdMCoBWQVdGmkCWRlcG8knWONdIa7dRIO', 'rYhcVJZdRCo2W5pcU29Q', 'bSoeWRZdOmojfSknWPNdSNe', 'WOnyWOa+W4ZcNLXcmmoG', 'tG5FiXldOSkFfG', 'jCoDWRZdG8or', 'WRvCECkJWRW', 'uGpcJuDeEG', 'W5tcPea', 'WQhcUrriW74', 'EmkXjdRdPqm', 'WRBcTCogc8oO', 'W73dQKy5WP8', 'AmoVWQ9kmq', 'WRddQCkBW6Dc', 'WPRdMrOb', 'WQBcVYvtW6NdPePnWRdcI8oQvmo1WRPlA8kVacraqCoTFmo/f1JcSqGfWOvXECokpmk8dJvZvW', 'WPhdGGyaz3pdPG7cGG', 'e8obWQRdUCob', 'tKXopXhdLSkvcSoeW7zWofK', 'nstdLmkGW44', 'jmk4WR0', 'WQhdKCkCW6reW6ddICo7', 'W7C6k0vw', 'dmkIowRdJhRdUCkh', 'W4RcRdpcGCkb', 'W5GnW40D', 'D8k1ksNdPq', 'uhOBfq3cGNq', 'WR1eW4ZdOXu', 'D8oKWQC', 'pbzsWQjVE1C', 'kNyjcYS', 'rYhcHJldTSomW5lcL2b+xq', 'WOxdMqCsCK/dJIC', 'emofWRNdRCoM', 'vCk7oYtdPa', 'jrjVcG', 'WRzXnq', 'gZeqncC', 'W7Wpo2n5WPFdLbRcLCof', 'mqtcHfHb', 'W69hW7KTAeqL', 'yguCaYG', 'W67cTgeiWPa', 'W68xbCoZiq', 'rItcNYZdTW', 'vCksW7u', 'd8knrevOWOZdISkpWOe', 'WRtdQ1q', 'WRpcQSkbpXC', 'WQn3uCk4WO/dJ8kJ', 'WOFdLs0EzW', 'WQ3cPSoJpCoPW4pdMmkPWPq', 'rmkOW5GuW5a', 'rSkJDHddLW', 'WQ57vCkNWO7cGCo/n0mPWQJcOZ4hz2uFqSo8CYb3WP/dJSoAemoMCCo1CCoidGniW5ldK8kiW600ic8DWRS0ASkYj8oYW4iBW74', 'jIVcG2jS', 'cGq0WO5L', 'smkOqmoWW5tcJCkDxG', 'W6/cRv81WPW', 'AmkwEcWO', 'oHj7jZG', 'e8kYw15e', 'hCkvWRauWQO', 'WQnLkIZdHa', 'W48CgMze', 'ANXKb8of', 'nSk4WOXOEW', 'WRddSeFdKCozl8kZWODLW6STCmoKvCoamL/dU8o1WRvvtCkRzvFdHsBcLmooW4BcO8kcge/dJNO', 'WP7dI8kVWPCDkdpcNLZcONBdIHDsWQrYzIeqW7JdS8kqzCkuWOKcrfldQG8fW6FcINpdNGmFWPCOvCk2ASoSW58aWRVcUCkEiSo7WOalEx1dfSoDaKNdPG', 'WP7dLqGrCK/dTa', 'W5BcSry', 'W4CJnKjS', 'WONcPSkimra', 'zcVcHWJdQa', 'W49lW7eawa', 'W7jgW60eExG3', 'WQZcNSkSntG', 'hmoDW7NcQaiAkW', 'f8k2W7pdVCkw', 'bIJcPwnh', 'W4mxg8oXoq', 'W4a/mgrrWPBdHa', 'WQboWRKzqK7dMCoXcSks', 'xSk7W5ldGCkD', 'W4/cOea', 'WRJdN8k/', 'eISwfJ0', 'W6Gag0b2', 'WRb4iY7dVq', 'i8k+WP5XFCkursq', 'c8onWRddSSoqiq', 'n1TwW7FcN8ktbq', 'WP1hbthdOW', 'WRNdTepdJCkky8o9WOyIW71TlSo/cmommW', 'WOLJW53dGau', 'imoEwmoXWPO', 'WRdcHCkhotNdR8kJW5zy', 'BhPLbCoe', 'WQfOv8k4WP4', 'W483w8oqyW', 'W7i/mCk/', 'd8knrevOW6VdICkCWP0JwtKuW7FcTZyxlmkwWQ5BW7xdNSoTsuztz8kriMLtW4GU', 'BSoXW6u+lLCc', 'WQbGW6hdGa', 'W7yGcCoQiG', 'WPtcJ8kVltG', 'F8kOit0', 'emkDr0bQWQBdGCkOWOiM', 'ySkQrcpdJG', 'WQz7W6i', 'A8kQrce', 'WQlcRJ9eW67cTG', 'WQv1W6u', 'WQNdNSk/WOm+C27dKfldQxVcGrq', 'yCksW54OW6e', 'WRjGBCk4WORdNSkIw1T0WQO', 'fJ/cVmoaeSoi', 'WO3dI8koW7jD', 'jx0DcZe', 'jGpcPSohba', 'iSkKWP0BWR8', 'x8o9w8otWPK', 'BCkXjINdPqpcLfnR', 'cSkmq1WXW6RcI8kEWP0', 'ASk3bchdTXtcQ1LoW4FdIG', 'WQPQkSk5lCoMqCk3WRBdICkpEG', 'W7m5gCoReq7dJG', 'obLcWQr/', 'v8k+d3/dJhddVW', 'WRFcRmoNimon', 'CSoXWQpcVSkyWP1iWRPtW44elmoUthhcRZpcM8oxWQOk', 'WQJdSuddIq', 'WQVdSupdHmkr', 'WOZcOSoPoCoh', 'xxaglW', 'W5dcRvWd', 'pYmZWRTIW6fU', 'WQJcHsvgW5K', 'WQK8l8oL', 'W7GHA8oWBCk9c8ktWRm', 'WRX9js7dOSklh8k2eb4', 'f8k2W5ldUmkyWQec', 'deyFpcZdL8k5WOmt', 'aJldIG', 'W4mXFCoMyq', 'WRv9mIJdUCkd', 'xuvCjH3dPSkF', 'eGxcINTH', 'W4pcOe05WPf+W4S', 'uqhcKJNdRW', 'W7dcS3uHWPm', 'vSkGgI0', 'WRVdOtG3zvldSbdcGKfUlMW6ke1timobamkdxSoMq8oBW5rtW40wDYL8rSoFW6e4WQRdHupdUuldGwGbW57cOKypW6RcPfpdGCklkSo6ArVdVw7dQGZcMCkoy8knW6TPD8kXWQ0/W6xcUSk3W7jvWR0WcW7cV8kaBhFdVZldNtVcSmojW7HekM83W4P7W5fVW6xcQSkHW44xtCowWQrVy8k2WRdcPmkRrItcOdVcPLKuW58GjmorWP3dLczkW7O+WPRdLmkvW5BcMXNdTCkIr1VcKK0xWQy9aq/dVSoEFYZdRmklWONdKYq7WRFdQmkZWPLi', 'F8kTlcFdRXZcUhLe', 'WQ/cKX9bW7S', 'xe9cltxdQ8kCcW', 'WRRcPb1mW63cUXCHWQBcJ8o4', '5O+W5lMe57Mk5P+A', 'jXDdWQLZ', 'sSkpW7aO', 'ACoWW7KZgq', 'W67cRWdcRmkm', 'maKllq', 'W5m1lhLBWPW', 'WPZdRSkJW6rs', 'W5hcPGVcTmoz', 'mq9IWPfL', 'fqFcI8o4dW', 'W6LIvmkKWPtdMmo/AfzMWRBdUa', 'rCkyWQm', 'hCkPW57dUSkj', 'D8oXW7aIyLulBgxcJq', 'CSoHWRbOamkRhue', 'DSojWPpcUmkB', 'WRT8W7ddLsK', 'm8kWWRLK', 'oH5MaZ7dUW', 'WQVcQJ9gW5NcUvtdIq', 'emo5tColWPG', 'W6ldMueuWOe', 'WPzyWOq', 'W5a5mhDrWOO', 'BSkNuJxdIW', 'ENb2cSovxd4', 'jqTKdt4', 'W4mDW4Cg', 'lLCPfIa', 'nN8DlY0', 'W686zSoSFa', 'nSoLDSoyWOe', 'lsmuWO5ZW6D0W4/cJgaA', 'W73dV3S', 'WR17jG', 'W5ddHbafCGddQHBcLfOI', 'WOGmW6tcRNK', 'cmk9WQjKA8kTsJfyjmowWOJdUSk2ALv8W784', 'sKrsjSow', 'iaXqW78', 'W6yMnSoX', 'ymo4WQ5Jdmk6nxhdOGJcQ8oEf3ySWQacfSkqW4S+W69pCcOaoWFcVSoDq8oOWP0DWOddPxXLW6T1W5tdPCoKW5yNdCkeaG', 'rSomW5Kldq', 'ibn3WPDE', 'WRVdIvhdOSkM', 'WPJcHHDcW7S', 'ASoPWRBcUSknW4GvW7G', 'mHb5id8', 'fCkDWP04WPm', 'f8ohWQ3dOq', 'WP0jW7lcT3eVWQD1W6m', 'W4SKkMbhW4lcN0dcGmkoWP45tSohjYfJjSoBWOjmfConp0ivWPVcM8kvkmk6', 'tCkmy8oxW6K', 'WPOdW5ZcP1q', 'rxOFlqxcJhq3wqa', 'WQ7cJCkz', 'ksaGWOPLW610W6e', 'W65AW6u', 'jSkaWOC0WRu', 'EH7cPINdPq', 'WOddL2hdP8oovmotWRKoW5W', 'sffGhCo5', 'sCo4W6W8gG', 'WQpcVIjkW7NcGqWg', 'fmkYW5ldJq', 'tSoMWQ/cR8kY', 'WQfHmJm', 'W5SrW5asBmkOkSo7qmoSW5O', 'AmkUra', 'WPLyWPe2W4JcJ0O', 'ySodWPpcI8kc', 'bclcPSool8oDmmoJ', 'WPLjWOqIW57dHXySkCkIW4xcQSoWWQmdWR3dNtJcNIpcMmoiW5xcNWddKWvamCoFl8orxr7cSmoPvCoVB2exhuTmWO/dPCoCfmoEDb7cMc/cQ04UW7v2WQVcOvVdRCkZd2CLc0nBW53cJ13dRSo5W7dcQSoDoSkNwMzOW4lcTJdcN2ddQmooWQZcUCkQWQOTdSkCleBcOwPrWOThWQW5zmoaWRHTfSk5W6ldV8kLdgFdVs8RWQDwCCoMyConW412DrRdNCocWPPOW5JdTxLiW7XHAqeHW4BcGxNdVK7cLSkZr8oArCoPgLDCnhDaW4qXjb/dRCowcvrWWRxdU8k/lCkWWOGyWPrTW7qyWPr6rWDKoNNcLCkfWPxdTGJcPCkCW6PuCga7WPldV8oZWO8cWOJcOZ5JWOdcG8kBW7hcMmkvExL1bf3dQmoiW54wCSotmSo3W716CXNdHmoXkq8KEmokdMZdTcaaWO3cQMXPW61skCkLBCkUW5ZdNL5FWQJcJ8kfn8kMWQdcICo2lxFdNHxcOSk9lw8dnSoNb8o/lmo4fHfeWOqsW7nsWQPmW619W7NdNYdcM2zoWPT+FbDpcgldP0/cS0/dGNqBWRtcSCkddbmIhZNcQdddTt3cUmkKAKOGemouWR9MWOldLhJcPCkXWPhcR8o9zCkvrqNcRSo5w1ZdKKldJmk3W67cK8kDoSkXmtlcNw0vW7DMWODfWPVdVe/dLZRdPaKTW5GGWPlcQSoaWPHIsYdcHJpdK8o6xCoKumkuWOL5W55PkSkCW7XoW5dcSMDqW5unycxcLZhdRCoPWONdIXNcG0ZcGSoNW7GIWP5dcKHakSkcWRBcGXtcUghcJSoQW7SVDmkIb8oUoCoBlCo1DexcTG', 'WOStW7JcTe8', 'WOTGWPGBEG', 's0vkkWNdQCko', 'c8kKbhNdM2hdNSkK', 'ar/cGW', 'cCoDW7ZcO1S', 'nXDQesC', 'dd9ffW0', 'gCk9W4ldICkjWOmb', 'uSkfW5ydW6i', 'cmk4cehdINRdUSkf', 'WR4AW4G', 'jmo5vSoqWQa', 'W7SddfyzWQZdVYtcVmoU', 'WOfhCSkeWPS', 'W6ZdQx8sWQe', 'xSk8uCo3W5S'].concat(function () {
      return ['ACoWWRxcVCkFW5uoW7Tv', 'fI1/WRjq', 'A8klEmonW6K', 'WRdcMmkimdJdVmkCW7S', 'B8o3WRS', 'WQNcU8oKoCo/WPFcOSo0WOhcSdFdT8ksBmkOWOW', 'xmkTtmk4', 'bmkPWQfbEq', 'jCkOWPSbWR/dNq', 'lIXycHS', 'WPldNSkVWOy', 'WPCpW7RcJNq', 'v8kvvsqRAmoVW6NdLtpdVYPOpaeMFCkFW55zExC', 'WRT9W7ldNG', 'WQ95B8ksWQW', 'od41WPDWW7y', 'hbzzWObz', 'WPVcV8k7ghhdICkHW5rzWRS', 'WQhdLSkMW6jsW5BdJSo4', 'aIGnebO', 'WQRcQIvc', 'qxr0d8oWutJcKtHjfColW6G', 'Amo7W4yMpv0jyG', 'WPFdNaSaEMldQqlcILy', 'WQjUvCk2', 'dKG9lIO', 'a8kNW5tdHCkFWQSopN4', 'FKScdde', 'WPLyWPe2W73cLfPwlSoG', 'eCkQDK9d', 'xCkfuHi7CG', 'WRv1ntO', 'eGtcGva', 'ACoGWRBcVmkiW48', 'WO83W4BcPe8', 'WRz6uSk/', 'gCk9a20', 'WQlcGmklkZe', 'mG/cUv9Y', 'WO4wW5WgECoH', 'p8kLWRL1nCosbdropSkDW47dQ8oXbbPZW6uWg8kAgmkYW4RdOW', 'vmkpW5uPW7FcOmkhW654Dgq', 'lsmnWPf0W6D0W4/cJgaA', 'W6ezW7K', 'sIFcJa7dMq', 'jrjMaY/dOCo+bSkbC8ka', 'qSkbsGWm', 'WQv9rmk2WONdNSkKCvDI', 'WOldU8kGEq', 'WQDrjtJdOW', 'W7jDW4Okvq', 'rhabjG', 'i8k/WOu', 'WRNdKCkO', 'y8k+raiq', 'W4XRW60QBW', 'B8oGW6C7ivmoy2O', 'WQn7ndxdTa', 'q8kztXW9CW', 'WOFdPvFdHCkZyCoUWPmMW7D3zmoN', 'WRtdVqihra', 's8kasdhdQW', 'q3a8nrBcHN8r', 'AmoOWOFcQ8kp', 'WPbDACk+WOS', 'WQz1W7JdLq', 'WPamW6pcK20', 'pXv8fIu', 'bSkzq00', 'wZRcVI3dSSktWO/dU3z6tYi1W4GhjmkVW55ov3ldV0zSW4nyWPvMW45wtYT8W4f4hSkAwSky', 'WR3dISk7W6bfWRpcImkZWR8TdmovEKOeECoMW7VdSmoYl8k2q8oAWPBdQMbWtSoJDmk/WQFcNMjNW5jMaHyJk0T9W4HHWQX3pmoMDIW', 'WQ/cUsvkW6NcQG', 'WOtdMSkRWOSpCxNdSfpdOa', 'maSwnYCr', 'imk1WODntG', 'wLja', 'WPBcJmo0aSoI', 'WOGnW7NcShGVWQn4', 'W5yImG', 'uw0alXdcV3Gvyb7cPq', 'WQHniIZdOG', 'nbrNcc/dSSop', 'WOldNYuAyfJdTsdcHKaK', 'Bvz9dCo6', 'CSk9jINdTbK', 'W4W/W5O0Bq', 'W7CLovn3', 'smkjW74U', 'vhalja', 'W4pcOe0', 'W4xdVwOcWRRdVrBcKdDqcSkih8k/WQZdMZaQW5bae3if', 'WRnBgt/dVG', 'WQVcTd8', 'WPqDW4pcLLO', 'WQNdLWWbreNdTqRcIvqhBJv3nunBkmoacCkwfmkH', 'WP0jW7lcT3eGWQn/', 'WRhcRSoP', 'pmorgG', 'sLb4kSol', 'WO8vW7ZcQ2G', 'qmkfuHm', 'W4uXmhDeWPe', 'WO1XW5pdLty', 'adRdSmkLW5K', 'oqxcVejS', 'W7W/W5yLtq', 'WRHyWQyB', 'WPGaW7BcO2KCWR4', 'D8oXW6W', 'hbj7WQfe', 'qCkmW7SZW63cImk8W6K', 'WQVdRv3dHSkgCSoDWP4PW6DU', 'WOxdJ8k3WO4A', 'jmkOWPKBWRVdJmkgW4ddUmkq', 'WQxcRIG', 'rmohW4CuyMaOtLBcPG', 'WRNdSvFdImkmBCo9WPeGWR9PCG', 'W5hcPGRcH8kia0Klt1W', 'WQFdM8k/W7XxW6RdGSoDWR5V', 'W67cLX/cOmke', 'aYlcHmogfSozl8ofW6dcN8ou', 'hbyynZGjW7D1FmkhlCkeWRXJfSk2gv7dVSolWRzWtuRcHmoqWOBcH8kZW7dcNSolc8k1WRviBvWyWQFcKmopm29JnY5AW6xdPmoSWOdcNauPWQpcKXPHW53cSZbuuCk0FxVdS8ogbqfvECk+nLpdJCoAaCkJW6tcHGFcUw0mnSkMW6X/kmkWWPzqxb8tqgRdHLJcJGXkW5ddGSoMW5RdVCkSW4Koo8k4v8kuD8kPW7z4n0/dN0JdSSkwv8kfs8o2D8owW4JcMGjvWRJdVmoSW4vFW7nb', 'WQjKltldPa', 'oSonW5VcJq0', 'hmoLha', 'WRpdS8ksWPe3', 'W4JcOfCkWOX7', 'W7CJlmoQ', 'g0yhDsFdHmkeWO9qBG', 'W5b4W4WXqW', 'aCklWRPkra', 'w8ohWRNcHCki', 'xCkSs8o3W53cV8kDxG', 'fSoWw8oHWOBcICosWQ1FWQ7cLKrXWP7cH8oJ', 'smkOqmoWW5q', 'BMD/h8oprdpcGda', 'd8oxW4hcKXWspd0DAta', 'lJyhWPjK', 'eIpcQW', 'smkkacFdTG', 'WOfCWOKBW4pcM1y', 'WPGaW7pcRxGv', 'WQ/cVZ1GW7S', 'g8k2W58', 'qmkCqa8+BSoZW6m', 'pmopW6/cLWq', 'W6/cLxW9WRO', 'WQv7eI/dOSkogmk/', 'z8k/rdddLCoFWOVcNgrJddlcGW7dRCk8A8oT', 'W5mLlxG', 'W6NcO34CWQO', 'BwfIaSoovYpcLIW', 'mbr6isVdSmoj', 'W6RdTM4cWO/dPHBcLa', 'W4S1p3rrWORdGW', 'WRVdN8kIW7u', 'WPtcHmoYbmoO', 'oSkIWO4', 'bCo8qSoB', 'DmoGW6eIpa5ikMNcKNCrW41/W6X9pa', 'kYKXWPjIW6fJW43cGx8', 'WQX1W6hdKq', 'lrvzWPzK', 'bmkkwee', 'W41hW5WwtW', 'qMSjEq', 'sCofWQ7cPG', 'WQjkWRa', 'Be14dmo0', 'mSoOW6hcIa8', 'ASk3gZRdSHJcT30', 'geOf', 'bSk6WRvSrq', 'WPvyWPyZW5JcKu0', 'bSkpy01D', 'WOZcI8kL', 'W4amW4Ofm8o1rmo0dmoGWPNdRuJcPSkuWQ4GCwRdJgWAW7JdOWBcNqpcP3z9WP/dUHaNiuW7bmo9WQNcVYS3W7JdP8oyFmonWPHkWP8ll8kBW6KBy1qpW4KjWO1HW7eXvI3cUWfVW7xdGvPYyx3cRCksW7FdLZGaW4H0W6i', 'cSoDWQ3dVmohoG', 'gIu3WOLx', 'CCo1W6eXjW', 'xJVcUttdOSkhW5FcSwnss2u9W44mmCkaW54ox3JdLbP7W4e', 'lSoPWQ5MsSkGiwVcPbtcOmkFcW', 'WOneBCkyWR4', 'ddvKlqy', 'WRbxWPW1W5K', 'hsRcUNzc', 'W7O/Cmo1Dmk8r8kuWQu', 'mSksW6RdLmkY', 'WOldMr0zCG', 'o8k+WQO', 'oaOUWRjw', 'W40FrSorvq', 'WO4AW4Xio8oQw8kNsCo/W5VdVvO', 'cmomW7/cLquqjXGf', 'jLj4W6dcSa', 'naf7hc8', 'WP3dVWy5vq', 'xYFcUsNdPmohW47cOwW', 'W7ZcLMSRW5vhW6hcGaBcKa', 'lq7cI8oooa', 'WRFdVCkyWQmRvfVdUxBdHKtcQcTTW4vbwb5SW5/dLSkQuCkGWR8Tqr/dRWGhW6JdGhNdNGDBWP0MxmkgFCo4W5KSWQVcPCkBjSoCWPSifJGqqSohurZcTSoieq', 'rmkFBrqVzmoZW43dKtldHq', 'W5erW7GMuq', 'W4e/oMK', 'FfKTibm', 'WQDsWQGGW48', 'jmk+WQnIzSkz', 'cSkmq1X4W7/cI8ogWO86u39bWQ/cS0nvlCkmWQ5AW5NdLCoItbGV', 'lsqOWOXNW51VW6G', 'WQfeWQCstKtdMa', 'vmkvrXOTBCo1', 'fIhcQSoCdmoJmmoVW6u', 'Dmo6WRiY', 'hI3dH8kaW5GnWQ9sv8ob', 'W5ddNaysFLpdKGRcIq5X', 'WPrmumkHWQ4', 'W6G6FmoNFmkGA8kWWOq', 'W642gwfM', 'lSoYsSokWQBcLmooWQnuWRVcJ1DYWPhcOSoVs0zXW4hdN8otW7q', 'W5zlW4WxrW', 'jIjTitm', 'W43cQfGkWP1mW4ZcQJdcUW', 'obLcWQr/Dv1R', 'W47cOGO', 'aefCi1pdVmkpcSkmW6XWlLRcQ8ovW4W', 'W43dOhW0WQu', 'hCoWqCozWOhcIa', 'W4dcOf8mWO1/W5O', 'gX/cQL9q', 'WPCcW4dcRvy', 'WQRdOupdJCkcy8o5', 'WOxdNWCsEvZdQGy', 'mGmSWPzj', 'W75YltRdS8oi', 'jb57esBdP8os', 'WRZdPuFdGa', 'hd3cH8oNoW', 'FhW9kI0', 'W53cRh8+WQa', 'W5qwCmokCW', 'bSoUWRhdMCoX', 'gZ89', 'iG0dlcawW4eZpCob', 'kWhcGfvqexXWlZRcUSoCbCkrfSkkW5tcGbxdP8kZuCkShhG', 'hXXEbIa', 'W6aZkW', 'WPhdGa8Buq', 'Dmo6WRi', 'W6hcIJtcJ8kX', 'l3X4W4pcTW', 'WRlcU8oIimoIW4RdPmk9WOe', 'pmkgeM/dSW', 'a8oWx8osWPtcG8ozWOTwWRa', 'W6GNymoPD8k1t8kFWRK', 'hI7dGSkcW4uDWQS', 'ah7dUg/cUCkCWPFcMfjUt3u0', 'W48bzSovqW', 'W4XpW7KuuW', 'BCoHWQ17', 'W63cHSo7WQueW6RdGCkUW6DGumodAbyf', 'W6H6W58huG', 'WOfyWOi7W4lcMq', 'oSkKWPOd', 'WP98kYpdGa', 'cSojWQ4', 'WOWeW6lcSxK', 'f8kFWR0+WONdUW', 'W4WzW4Ou', 'WPxdGay', 'smkOqmoWW5tcRCk9FG', 'cGHxWRv2wvrZW6HdWPi', 'W5pcTGNcGW', 'WOuKj2brW4xdNrRcISojWOW', 'bmofsSouWOm', 'WRNcMmkecde', 'WO8mW77cPxKcWPvYW6BdJCo1', 'hSkaWQG0W7FdVmkRW4dcPq', 'W6hcIxaBWQe', 'E3WgkXu', 'WOWjW7hcTNOFWRHX', 'bs/dK8kjW5K', 'WOxdKmk1WOaNFhRdNG', 'WPbhW4FdTNddTvFcGSoUiG', 'qhiiosy', 'W6GYF8oLnmk9vmkqWQFdP8kK', 'WQJcOSoXlSoP', 'BCk5sJBdRq', 'iHnHfI7dJmoida', 'WQFcPtvgW6lcKqm', 'acfoWPD1', 'f8orW77cRrO', 'khbwW7hcLa', 'smoWW5Wcnq', 'oW1BWQvYrG', 'nqWqpYamW7K0', 'W7nCW70rCG1+tmkDjrZcItmIW5Xz', 'W4NcHM8OWPe', 'W5mAz8o5EG', 'hHNdHCkdW6K', 'mZy6oJO', 'W79nW68aDfSL', 't8kHW7G1W6S', 'jrnTat4', 'ECk5W7e2W4i', 'nsuYWOPMW6XOW7NcGa', 'WQ59W7NdHdJdKW', 'W4GJhxLm', 'WRlcUSoYoSo4W5/dPmk1WP8', 'WPRdLqCsy1u', 'WOvuWOq+W4G', 'WRrSrmk+WOK', 'WRpcQSoGjCoTW47dQa', 'DSoGWRNcQCkFW48', 'WOHHu8k0WRO', 'csOWghKXW5KrdmoN', 'WQD/smkK', 'fqhcJufzkhK', 'W4m2v8opDW', 'W5RcRG3cVCkC', 'r2OCkq', 'bmk8W7xdMmkdWQujpW', 'W5mXj09eWPtdKry', 'WRJdRCkwWRyx', 'WO1SW4/dTdG', 'a8kJW4RdHCkf', 'W5ipW6dcPq', 'o8k0WQnIE8kv', 'W4xcGfThlWJcSc/cTfa2zt0', 'WQNcU8oKoCo/WPFcOSo0WO/dQthcQmoABSkPWOBdIHL4W5iGW7dcK8k9aG', 'kJWTWPD3', 'WOldLSkVWOSl', 'rCkctq', 'mtG1WO5WWRGPWQpcGd0sdWNcHuddLxRdPCoJjKtcPfJdUNRdJGxdMJZcILhcKSkfb1VcKHZdU2WrW7Cd', 'W7ldGSoz', 'FCo4W7CNiLKoyq', 'emoRW6xcPIW', 'nGmllNHfW7i/l8ofFmoqW7edx8k6hG', 'W4xcGLbgjGVdGHhcG2OcDG', 'WPRdTCklWOiH', 'W6yJo8oRbGBdI8oDDa', 'WP7dHb0fzaFcQeZcNuLWlMK0bK1ezSombSkdcCo8', 'W7aMfhrq', 'rCkJW7mxW7C', 'hbb4cW7dKCkWjG', 'C8oTWQ5Jbmk6mutdPWS', 'nZ9LWQnc', 'DSkSpd7dS0VdTJvwWPRdNSkNzCoXW53dQmoZ', 'mYZdKSkGW78', 'x2SBmv7dGd4bqHVdPYDAruDnW4xcUSktAmoOoW45W4xcVCkkWQpdKCo6WOa', 'cSkmq1WXW6RcI8kEWPK9fgmbWQ7dO1KyiCkoW6WgW5VcNq', 'WRvzWQyauW', 'WORcNCkgeHO', 'WOlcKsnpW7m', 'WR7cPZbxW7ZcSrCp', 'wCkDrG4QBq', 'W5Whz8oUDG', 'AmoGWQFcOSkkW4qcW5rEW5C', 'Cfbnob3dQmkFemogW6HQ', 'eSoqzmozWOi', 'jrjMaY/dOq', 'ptxdRCkvW7K', '5BYC5BITkHhdMGf4W4m', 'FCoMW6e7pea', 'WP7dH8klW4ba', 'W5GWqCoODG', 'FSovW5y9nq', 'W67dTumzWP7dRbBcUJHekq', 'g04foG', 'WORdH3JdUCkI', 'oZPpWObz', 'WPddLSk3WPmlya', 'W5pcOGpcOSkhbKm', 'WQNdJ8k6WPupF3NdHvRdVNW', 'WORdN8kRW7rMW6JdLCo9WR9MfCofEW', 'nSo56zYT5lUfW6uzWRpVV6lOHBxLU67MRAJLJ4ddSowkPEs4MZ7LIyZKUQ7LIAZLV5pKVPBLPANLJj7dLtOq5Asn5y6t77Ys54wt5zkf54ct5B2w5BML5AA95yI/6zoi5O2p772755MU5O6g57kB6lwp5y6W5y6D', 'oGtcKW', 'W7pdNvO0WP8', 'q8oKW7qGlLKcCxBcMJu', 'W47cTGNcGSkktL8VqKjpWPf8W77dUHdcVSoCvgTUWRxdNmo1iSkVWOPAW7q', 'p1LqW6FcISk1bW', 'E0vEkmou', 'w09GjqVdOmkij8ocW6L8', 'DmoGW6eIpa5ikNlcMc8nW4PLW6CMF8oSWOyfWQmqW6ZcKCkgtSoI', 'WQZdK8k4WPeD', 'WPldMSk9WOyBFMG', 'qCkqW7a1', 'fmobWRNdUW', 'ESk5pc8', 'paWrnZC6W6mOjq', 'WORcVmkfkJG', 'c8oxW77cIa', 'sSk2r8oKW43cJ8kg', 'fmk2W4ddJCkeWQat', 'gNNcQq', 'W4ZdQMKDWR8', 'kCoeyCo1WRq', 'WQRdOupdJCkcy8o5WRmNW74', 'BhbGb8obuY/cStLa', 'BSoTWR7cVmkpW7GoW7e', 'W6S5fSoOaW', 'cmorW6pcMW4fab8rFW', 'DCoTWQz7', 'D3T0dSoyFYW', 'W7zYW74isW', 'B8o9W7i8kLaYD38', 'WRzoWQOAr0G', 'emk5hM7cHdZcUmkxzLNcVXhdNIpdKqjpe8oJoYFdVhFdQHe', 'WQjYWQWWwG', 'WR19mHJdOG', 'v8oTW5ecoq', 'EhuDdZ4', 'f8k/W4ddTmk+', 'c8ouW6ZcIa0ypbm', 'WOTFWRuuW6a', 'BMbJaW', 'xCkBcGhdOG', 'eCoYe8k1WOa', 'eG5cWOHD', 'WPuwW5xcRhG', 'WPhcPZ5cW77cJGqqWQBcKCo4dSo2WQLwsSkTbMDHrSoZnSo9eW', 'W4RcRr7cJSkrl0O', 'fCkWWR5GoCoj', 'aSo6qCozWPNcICopWR4', 'WPBdVvFdPSkT', 'oSkKWR5SBa', 'W5vPW4qK', 'tNbZh8oN', 'WQXXW7pdKsJdJwW', 'WP/dJmkEWOKk', 'cCk+oMNdRW', 'WQj7mY8', 'W6hcGtBcVSkO', 'WRLGnsVcQSoiwCkReXamWPareSkBzsmtpCkBB27dQ1NdPW', 'eSkIa3a', 'WRD9ls/dTCkv', 'n0z3W7ZcGW', 'iYu0WOzk', 'aYxcRCoh', 'EMnzh8oN', 'W7XpW5GXCa', 'bd3cPmoafq', 'WP7dI8kVWPC', 'hCkJcq', 'lmkZW6ddVmoyWPbvW4ziW6GwlmoQ', 'sCo5WOH9kG', 'xYZcOHFdKa', 'oLrgW7m', 'w8kHuSoPW5JcG8krE0FdHG', 'WRTGW6FdMtpdHNhcR8os', 'idi0krO', 'CmkNWPOyWRtcKSos', 'WQpdNbaBqG', 'WRRcOJXg', 'ichcV0r5', 'BSoXW6u+lLCcrh/cHa', 'bSkDuu1+WQNdKa', 'D8knDaxdJW', 'W687D8oU', 'iHymorGmW6uU', 'eGpdJmk2W4O', 'hCkYW5y', 'WOWqW6pcQG', 'kuuHfX8', 'w09/pG7dRmkuaW', 'dCkKbcm', 'l8kzWR1DFG', 'psKNWP92W65Y', 'h8kKWRGUWRq', 'eWJcMW', 'zmoNW4mila', 'W4tdHfXn', 'bXNcJKbbmG', 'aYlcM8oDe8ovm8oH', 'W4/cPHtcJmkDca', 'mr1qWQzIweu', 'xevEpbNdTW', 'emk5hM7dJsNcUmopAaddTLFdG3VcJGjpeSkHEshdOhddRHe+W43dOSocWOhdSZpcPmozW77cLmofCCkYWQfkWPBdIGBdUqdcMmkLW7RcQ8ki', 'bctcPSoobmooaSoRW6JcIa', 'Bmo7W6yM', 'q8o4W7OZk2qgD3lcHsnxWPSJW5LZpCo6WOW', 'WRBcNSkf', 'W4VcTW7cM8kAwGnLvH5vW5CJW5ZcSrlcO8ose0TUWRxcOSoYoCk3W4XuW6tdVZFdLdHuWPeaW4dcN8kXoConWQ3dHCkXygNdOmkheY9WWPddMdpcIr4aWQ3cOhvZCf/cIvJcOSkFt14zW7HMWOLGW4JdPmkrs8kvWRdcGmkvW5JdK8kbWPStj8kAWP83', 'lmkQEN1Y', 'W75gW6O', 'gIhdLG', 'emo5tColWPJcV8orWQnE', 'zeeoW74JafzjW7T2WQtdVa', 'mtG1WO5WWRGPWQpcMd0gvaVcNq3cMhJdOCkRma3cRHVcT2xcKWxdHcZcMeRcKSkyfLBcLalcS2q8W6DvW53dIH4NWQmMW57dHmo8WPaMWOVdMIyBW6tdRh/dLmkqgmkvWPDUivRdQ8kQWQddOZNcHvbVW5RcP8kHWOpdNKhdVGFdLCoJBSoJir5qW4W8W7rVW5abW5HPeW3cNdrEnmoXW50EW6fQWQ/dGJKzWPpdTCo8W4HeW43cJCk3pCkhWOS3W5/cPv3cUCoOWPFcTtlcRaZdTgBdTCkYWQtcRSoJg1ZcMSocdYZcLCodB8o3WQnQWPy9fSouW4D+hmkUWQKHfCo4W7LgWPn7WQZcOdn6W4FdNYJcMSk9lhfszIO6W5mFWOnBWPhcMa'].concat(function () {
        return ['WP9iWP0WW4JcJW', 'CSoGWRBcQSkoW5uu', 'E8oFW6exfG', 'W5dcRXpcImkm', 'WRNdQfhdLmkotSo9WP8U', 'lH4NWPvW', 'frJcI11BlhXHjxRcTCoB', 'WP8kW6lcSq', 'W4O+oNvmWRFdLG', 'WRLGnsVcQSoiwCkVaqzqW4encCoipJCtFSoxAZlcTGFdUg7dLw7dPaPS', 'cCokW4dcQGO', 'WRj9W6ddIbq', 'WOjRumk4WO8', 's0fykW', 'WPFdJ8kYWPq', 'ESkfBSoTW5G', 'WONcPCoDamo1', 'EKO8ccFcVvGY', 'gGjtWOT1', 'vvLLlqW', 'FCkXddVdHa', 'Chr9dG', 'h8kOhG', 'vmkpW4OYW7lcRmkBW4O', 'm8kEW6xdH8ki', 'aYJdJ8kvW5KnWQrx', 'W49RW7GxrG', 'md8NWOXMW6C', 'mt4KWPG', 'WOjnWRK5W4i', 'EHLgWQ44turPWQjhWOJdQmoxW4VcMvm', 'WRrQuCk7WPZdMmk1wvzR', 'W7C2FmoNBCk6', 'jSkVFf9B', 'hCo6tSoA', 'nrWepYejW6i', 'bSoyWRFdPG', 'gJJcU8oaaG', 'xI/cUG', 'qxBcKCovWO5LW79GxSo3D8kMWQy', 'uSkfW6KQW6hcPSkq', 'e0OFpd3dJq', 'WQ3cV8oyg8o/', 'WP1uWOmMW4JcK2zLlSoTW5VdQCoKWRXz', 'emk0WRLey8kFxI5QjSoDWPVdK8kTt0a', 'mr5Dns0', 'nc0X', 'EmkaEZGq', 'rhKajIu', 'sSkoWR3cQGOokc0P', 'eYhdKSkg', 'ymo6WQPMfSkT', 'WRrMmZtdOG', 'z8ktzWG8', 'tSkSwIBdLq', 'q8keW7uVW7pcSq', 'n1ep', 'WQldM8kJW6PZ', 'WRhcICkzmJ3dVSklW55WWPK', 'WQVdTf/dImkx', 'FmkkrColW4a', 'W6ThW7Ov', 'WRxdPum', 'rxOFlqxcJhq', 'WQboWRKzqK7dMq', 'WQTEWQC', 'WR7dICk/W7XxW7ddGSoUWO1Ie8o/ma1vECk5WRZcPG', 'nWL8dtNdPW', 'DY0XWPS', 'WRvMt8kWWPJdICkpCv4', 'fdzJfHK', 'xuvCjH3dPSkFjCopW7y', 'WP1yWP41W5NcLq', 'W4qJC8oYEmk/q8knWQxdVmk5', 'WRLGnsVdO8oDwCo3d18zWOCquCkxpJCspmkvDdldSbtcU3/dHc/dOa1drHNdHeXWWOxdH33dTCoiBCoNlmk5ccJdGqW6WQ0', 'WQNdI0ldRmkg', 'nrarltOeW7S/', 'm8kDWQC0WQ4', 'W64fdvL3WQC', 'WQddMW4axW', 'WPFdNaSaENddJIC', 'bYhdNW', 'WOnGWR46ta', 'rhybjGhcNu4Fuq', 'mSkOWO8wWQ/dG8kx', 'W5jlW4SYAq', 'W4NcSbxcHq', 'pSk5WP0hWQNcLComWQ7dTCkyWOuaWO4isqFdRCojrv9GW5LiW4ZcKCozeYCzWProsCkqWPhdPb0', 'WQ5FvCk0WPa', 'WP7dGGWt', 'Bmk5vshdKSkaW7ddMNn8', 'WQKjW5FcGwO', 'vmkrvrO', 'zCoTWRHUemk1ia', 'a8k6W4JdI8kuWR4PowPt', 'WRtdRuddSmks', 'nSk9WQ9WyG', 'W7pdT2GdWPVdPq', 'W7FdV3Sx', 'wGddM1u', 'WRqYySoPnSkRu8kxW6/dVCkVzxC', 'oq0wlIDFWRL1pmkhzmkkW6vEuCk7a0VdQSkiWPb3bfRcGSoxW43dISoWWQ3dH8kgt8kGW7nMzq', 'WQj9jJu', 'WRHHW6BdMa', 'WRzkWR0u', 'WPToWOu9Ba', 'nbnmfYS', 'EhX+dW', 'erxdLq', 'W7mNzSoWASoOcCowWQ3dU8k5yNdcP0xcSNBcJ07dSgtdLmkFW5v7F8kKsbSzW5qzdt7cQmk8c0SzhmkeWPrvWPKruCoZ', 'fCo0w8oF', 'gb3cP2zh', 'v39HcCog', 'wsJdKSkkW5e', 'dSkiW60RW6W', 'u8kzzq4C', 'tmkTW4GeW6e', 'W4lcSq7cGSkAfa', 'hW4Eze4', 'WOGaW6JcTG', 'W5pcTGJcHW', 'WPScW6BcRx8', 'vCkfxaNdQG', 'sCk8cqNdOW', 'pSoJWO/dU8o9', 'WR/dOuC', 'WQtdMaqcuW', 'cSkmq1X4W7/cI8ogWPK9tx8CW7FcSHKCjCkwW60wW5VdN8kGxvTPj8koneHpW4GZE8kDW6NcGSk1zmoJz8k9WQRcTNhdGCoeW5S7ysldUf0eW7q', 'xI/cVJ7dQq', 'u34Bia', 'WRvGt8kWWO4', 'WQVcMtLWW7i', 'mCk9eNZdNq', 'fSkxq01N', 'Bmk5vshdKSkkW5y', 'WRPLnbFdNa', 'mHP8bq', 'bdtdLmkoW5m1WQrvxq', 'W7OHzSoPASkM', 'EmkDqbGlsCoaWR8', 'W4lcRXJcNSkep0eJrW', 'W74Jmq', 'kImVWPLQW6XGW6m', 'w8oLW7iafq', 'tmkpW74', 'iHymoq', 'hL0fmJRdKq', 'qCkLCmoNW40', 'zCoPWQPU', 'jHDPecZdVmotbq', 'WO7dLNddR8kU', 'vNmnnaNcOLGY', 'W5dcKtVcImkH', 'oY/cPMvJ', 'gmo2gG', 'W6nRW4CdAq', 'jmkLWR9SyCkAqIva', 'o8oQcq', 'fZa1hrO', 'eSknvubIWQBdSmkaWOmV', 'WQjXmY3dTCkv', 'W4RdLvWI', 'gX7cLN5z', 'hstcUJO', 'WO5YW7RdGXe', 'xCkRCCoXW4VcICkAxq', 'C8k5oa', 'WOjnWPW7W5K', 'a8oWx8osWPtcG8oz', 'fWlcI1e', 'rw52eGq', 'aalcUKrejg9blYtcUG', 'hmoDW7K', 'W6nGDgm', 'u3OCiG', 'cuLiDW', 'w0LyjHK', 'Fmk7xcNdKG', 'c8kOggJdM2e', 'bCkHW4O', 'gIBcUmoJlq', 'kJKS', 'W4iaxmo3uG', 'gCk/WOyFWP0', 'xIFcRG', 'W7mNzSoWASoOcCowWQhdVSkJjxldOW/cQgdcJrFcVwZcLmogWOiMySoGvLKbW5idb3ldVSk5cqqqwW', 'W4/dLNW1WP4', 'W5FcQXpcMCknp0uU', 'WO7dMCozBG', 'W5KLq8omsq', 'kCkXW67dVSozWPCQW41fW7uJcq', 'W7zDW7OiyMG4bW', 'at9miZ8', 'W6G5WRu', 'W6y6pCo3bdVdG8oD', 'WRXjWQCFzG', 'jHDyWQb6xvu', 'rYFcVJhdPa', 'x2SBmq', 'CCoHW6y7lgSoyq', 'rCoPWRJcR8kpW7CgW6DtW5yfmCoKu2pcIIRdMSozWOqvb8oiW6W', 'WOzVWRm3tq', 'WQr7W7i', 'r2Onlq3cJeuFwaK', 'W4W+n8ofdW', 'WQNcRIu', 'WRFcGSoZiSo4', 'WPbGcLfgWQZdUI0', 'a8ojWQRdTa', 'or1yWQbJxa', 'WRr5ms/dQq', 'wN4F', 'WRXvWP8AW68', 'W7FdU38', 'WP/dICkvWQi/', 'e0GgW7C', 'mCk9WQXM', 'WO7cJCowomoI', 'AKvFacq', 'W4SKkMbhW4lcN0dcJmkoWPzMeCovzI8JjCoBWPHAdCopluCAW43cMSkjkmkNDCkeWPlcJW14', 'cCkQWOWdWONdM8krW6JdUSkBWQiwW5nwBeJdVSoywfn6W49o', 'W7O/Cmo1Da', 'WR9cWQ0', 'BCk3jINdRrJcVq', 'cmoxW6pcMWyEkG', 'ndKYWPDGW4TOW6RcGG', 'WQLLW6xdHtC', '5O2l5lU35yEO6zAz', 'nSoqEW', 'lcdcO3Xanw1qkYBcQSone8kx', 'gIZcUa', 'WQVcMmkDlMBcSSobW754WPtcJSojWOL4WOuUWQSryvjYmmoXE8kYW5JdScZdQfTUdvFdKmkafCo9jqJcGCklW4ntqmk6A3K', 'imokWPldS8oX', 'iqNcUmoFoa', 'AwLjjWu', 'WOZcOmoQimoGW4hdRmo0W43cShBcPSkuwmkUWO/dNH8HW49LW4RdQmoUhmk2aCoWW4ddLCoxW4z0CWxdJJFcOWpdM8kRW63dSwWEj8kiW5C+W6q3WQGJW6HYW7/dOICsWRfSsv/dPmkymSkoWRNcK3RdNSoHpMDxWPr2W7FdMSo5awlcNCkSWO13WOvixNaDW50ddmkQkCkaW6vbW70vr2ldHwLAuCkQBmoFWPe', 'W7m1pwrZ', 'ySoPWQPQaSk2jNZdGGm', 'W7ldRNSgWPRcS0VdLIazpCklxSkXWPpdL20', 'aYtcVmofba', 'zCkqW5OkW4y', 'W67cPhWGWPm', 'xZ7cQXtdLa', 'u8kjW7CHW6xcTW', 'W43cOHFcJG', 'eaZcM1u', 'fWxcILfgkhi', 'W7VdQhSFWPRdVq', 'vSoEW74NhW', 'W48DW4OHymk3dG', 'WR5oWQCsv0u', 'gmkNW5ldNmolW6nioYLpWOGEWRRcRbKEWQRcUCkMww0GW57cVN/dNWBcNhzrWR/dRGWoW6hdOHeCW4X+WQlcT8ovuSoTW7ytW6NdOmkqu8kVpIjtWRhdQxxdICopCCkUqXtdOq', 'mciLWPT7W41G', 'WQL4W7FdHtddIhW', 'nbtdRCk/W6C', 'fSkqxL5VWPRdJCkn', 'emk5hM4', 'WP7dI8kVWPCDkdpcNKBcOMJcKa9oW60/AIiqW6BdTSkpB8kBW4KhsbldUam9W6ddGMBcMdKaW4f5ymoApCk5W5nSW6/dOmkGyCkuW5i', 'dSokW6e', 'm8o0xmoBW4pdLa', 'idfLWOvg', 'bYZcUSoAba', 'WRVdUXGsDq', 'pvrgW7FcGmkZeuKtW4JdUmkgWRxdJbKOsq', 'smoLWPFcNmoi', 'W4eDFSojvq', 'ptNcSSozeq', 'q8oHgSkg', 'ASkcuJ0B', 'xSo4wSonWPZcG8kt', 'c8obWQ3dOCobj8k2WORdSW', 'e8k8W4ldIq', 'WPbrWPiNW4a', 'l8oLWQ48', 'p8kPW5q', 'WQFcPsvrW7xcUHabWRpcLCoYfa', 'z8oHWRbR', 'WQtcICkD', 'uCkcvriRDq', '54Y35AAG546+', 'W7bnW7a', 'WRPFWR0fgqlcK8oDcCkCe1joW5FcOsuer3pdI8kHWO7cQM7cLmoXW4JcSmo5bg7cRsG6W4/cMqJcHCoUmSo4tLDEeZhcPmkmW4/cSGWfW70uvmoLDCk+sJtcSIxdO2TMWR3dLqpcGCopd8khsSodeLnBW4hcOgy6mL1rW6TNacVcImk2WP/cHJW5WR5GW7pdLJS2WRtcJSk6W6RdJ8ouW4zGdhahWRtcUg3cJG', 'WOLbtSk6WRK', 'W4dcOf8eWPz2W77cUsZcRSoPdCoTW4y', 'bcNdLG', 'hSkGWOGuWONdP8kIWRa', 'dSkDwuT/WQ0', 'eSo8WQFdOCoC', 'BqmkWQldKCkRe3mSW4RdKG', 'WOFcNCk+mH8', 'f8kkwW', 'fSkxFG8Zpmk0WR3cIhdcHIjIlWKHrmkPW5KklZ5phIZdOCoNCCkXWPFdP8oYbrv4W7pcM1b2ECoyWRFcG8oYl8kiW47cNdX7W4biaZSljuNcKt3dP8o7hcRcQ8k2v0VcR0BcGmolW7lcISkAW4/cICo8k13dH8o2ntFcTSkya8kmW7VdISknrmkUWP7cJdyLw8kJyq', 'nXamoG', 'BmosW70Zba', 'W4xcQHBcN8kmeG', 'W7FdR3WFWORcPXpcNdTOp8kthSk1WPNdIb0IW5ndceGeBtG', 'W7iPW4Sqqa', 'vCovW73dJW', 'EhX8h8ofqG', 'z21TcvhdLSkYjCks', 't8kTtmoH', 'WRtdJmk7W7LfW70', 'zCoLW6r8juCiAW', 'C8k5pc3dQa', 'gSokW7NcLrGd', 'd8oqW6tcJG8OjXO', 'WRJdKCkPWOqP', 'oSk0WPSEWRK', 'm8k4WR52yCkCrIy', 'WQpcOJu', 'xYhcRq', 'WQv9ntFdTq', 'xCkaeG', 'pIdcOer5', 'WQjEWROD', 'aJ/cPa', 'lLPcW6FcI8k9eq', 'pCkuwe1VWPxdHCkBWO8NxYuqW6NcQa', 'ex7cQCokvmoEBCk+WRFcISkcWPmewCkqjs8vWRSNoLTZeCkbW5b4W57dS8kQW7yf', 'fapdPCkEW58', 'F3u1nZ0', 'mdGKWPnW', 'Amo0eSk1', 'WPndWO4hBa', 'WQJdQ0ddLq', 'WOBdHrOD', 'DSkPW7GhW6e', 'kIuMWPa', 'p8kJWO0sWQldOmkf', 'eatcNeDDjq', 'wCkmpYhdIa', 'hmoDW7NcJaCwnW0tDdjyxmk2va', 'E8kIrcZdGW', 'smkvDZqn', 'WPvCWOqZ', 'p8o5WQJdU8om', 'o0DaW73cLq', 'xmktyGRdRW', 'WRtdVuhdImka', 'W6WZjG', 'WOldJgFdHmka', 'WPVdLSk/WPiCFNxdN1NdOW', 'kSkqW67cPq', 'W4FcPe0iWP98W5ZcOIBcRq', 'W6hcLcZcS8k4', 'WOvqWQa', 'WQZcGrjYW7q', 'WP7cO8o/kmoOW73dRmkPWPNdSYpdSSozFCkrWOddLGuZ', 'WRVcUt0', 'tCkLvSoK', 'W4dcRb7cJG', 'WQlcSILRW6W', 'bLKGnIe', 'rbtcOY3dRa', 'W7uZlSoDwq', 'WQrTW6FdMt4', 'c8kax25Q', 'WQbMt8kZ', 'W40/kq', 'ExrLj8oc', 'W4mPW4qKBq', 'mMXAW6xcJW', 'rCoKWRpcQSk7W4yvW7rFW54uimoZ', 'l8kD77+e5AAy5yQshmkXWRtLU6NNSOZOTjdVVPNMI4VOGQBNMytMJRBOV5NLHAdNU7pMLi3LRkdMRzJLJOdcSY/LJllLJP8', 'omoYrSojWRy', 'hmkShN8', 'mSogWRBdL8om', 'W7y9pxrb', 'eHelktS', 'W67dS3SAWOW', 'WRzoWQ8uvKhdIa', 'C8kxsdW9DCoxW6xdLtG', 'W4dcOeOgWOX8W57dPJtcU8oU', 'eG4mbXe', 'qZVcQaldTCoaW43cSq', 'WPxdL8k6WPuVzG', 'WPldKr0u', 'ibDUWRzM', 'iSkJWQe', 'duOabhK', 'WPqrW6tcSM9kW6uZW6BdKmo5omkNWPNcH8k6aJ/cGSoeWRZcI2m1WOvRWRtcPW', 'W4GFm3H+', 'pSkRbw3dSG', 'W7FdTg4BWOW', 'W5KYyCoLl8oM', 'WP9sW50XW4ZcNLfM', 'WRFdSXO2EG', 'obCgoYWQW7a', 'h8oDW6VcNr4BoG', 'Amo7W5K9ofevrNlcMYm', 'W4dcPe0m', 'qSkvurC5ySoKW4/dNc0', 'xNeljbZcOhC', 'lKbbW7O', 'W5BdGey7WOq', 'WO5EumkNWPC', 'q3aJlHpcIMm1vb/cRa', 'WQddJmkJW49fW6xdKSo7', 'e8odWOBdLSo3', 'W5C5g2PS', 'zmk0hJ3dIq', 'ACoPWQ1aeSk3bhFdPbFcOmkdgYi', 'WPutW57cH00', 'WP/dGwC', 'cHjVB07cT8kvaSofW6L8pWJdLCkiWO7cMCkIWRTABmoksmoDtbNcQsdcRSkdlxhdKCkkxCkOC0bmhI7dSItdG3JdKMpcISopW5buWRtcNSojq8oqhSkb', 'DMfKg8kAh2xcHYjBt8kCW645WO99W5/dJr07W7CPWQeeCKrUASorl2y', 'WQNcU8oKoCo/WPFcOSo0WPNdRI/cQmoDESkJWOJdLr03W58UWQRdN8kHqmkPwCoX', 'WRHeWQaB', 'WRPXW6xdNdZdGN3cImohaa', 'W7PeW6SuBa', 'WQLmWQCAW68', 'WP5CC8krW5ddR8kFu39j', 'WQZdQ0pdJCkkC8oO', 'WRBdRgNdI8kw', 'FCkUqr/cLG', 'W6NcJJxcM8kK', 'y1SvaWO', 'W5WqW5SB', 'CxD6dSodra', 'C8oTWQ5Jbmk6mq', 'WRhdM8kPW7fdW6xdKW', 'WRdcGSkimZK', 'tCkRz8oaW60', 'WRVcJSkbcaK', 'W7BcI0ORWPu', 'bLryW4pcQG', 'W5ddNGSgzWy', 'ecKtWOzc', 'W7m5e8oThG7dMmo9FJtdRq', 'gSouW6/cIqy', 'emkmchddMW', 'o8kzWQyrWQG', 'tKXopXhdJmk+', 'rYhcMsNdS8oaW47cSW', 'WRvzkchdVq', 'bGlcMLPq', 'jaSo', 'FmkVwSoeW6e', 'jX1gWQT2v1q', 'uJZcVIRdRSoBW4S', 'deaFpctdJmkn', 'W44rW5ar', 'gmkMW6tdQ8kN', 'WRVdSGarqa', 'WQbkWQCrtea', 'WQyeW7ZcTLq', 'WRv/tCk+WOK', 'iCk7xchdN8k6W4JdMM1ThsddLeNdUmo9ASkRgSowtCo/', 'WOBdK8k6WPmiFw7dNa', 'emoLx8osWPZcG8oDWR5tWRpcPWP3WO/cNCoG', 'W6CmW5mKzW', 'BKWHnI8', 'WQPZWRebyG', 'cmoxW6pcMWuwiXS', 'tCof6z2M5lIc', 'ufPtlSoQ', 'W7uZl8oUcaJdJW', 'bmo8qCkd', 'W6G8ymo0', 'iGjWWQTW', 'AK1jeWK', 'ACkNxY/dLa', 'Bmo1W6CHkG', 'BmkcwSo1W6K', 'W77dU3Sx', 'W4xcTuKbWPfWW4/cVYRcSCoIumoZW4ZcId/cLSokWPT1c8kbW7q2W48LbComWQddNKBdKSk+W5hdGIqvdmkvWOtcR8ktW5G7CSoj', 'WR1cWOunDq', 'hCoSxCoxWPy', 'FSkazSocW4W', 'W5aGmNLa', 'fmoDWRZdPSoqo8kkWPBdUa', 'ps01WP8', 'eYZcVmoi', 'BmoHWPzfiq', 'WQvHW6BdMt4', 'W4lcG1q6WQS', 'fJ3cUmofcmoFpmoYW6JcG8oFW5KDfSovzgGnW694la47v8odWOGKWOxcPSo0W7DwDW', 'mH1c', 'W7ddUCkGh8oTW5tdQ8kiWQ0', 'WQDJq8kIWPddSSku', 'W5jpW6awqG', 'dmkxe3tdLa', 'rmkzvrC9', 'duObnYJdHSkm', 'vCkHdb7dTG'];
      }());
    }());
  }();
  _0x4b8c = function () {
    return _0x49e692;
  };
  return _0x4b8c();
}
;
function nonce(_0xfa5087 = 0xa) {
  const _0xda90bb = _0x310550,
    _0x31091d = {
      'LsqPS': function (_0x2bfb85, _0x116b0e) {
        return _0x2bfb85 * _0x116b0e;
      }
    };
  let _0x8c90f6 = _0xda90bb(0x3ad, 'wDo^'),
    _0x2707c1 = '';
  for (let _0x5cbc7f = 0x0; _0x5cbc7f < _0xfa5087; _0x5cbc7f++) _0x2707c1 += _0x8c90f6[_0xda90bb(0x644, 'wDo^')](Math[_0xda90bb(0x69a, '1faC')](_0x31091d[_0xda90bb(0x1c4, 'o%]7')](Math[_0xda90bb(0x689, 'Nkpr')](), _0x8c90f6[_0xda90bb(0x4f6, 'vdaz')])));
  return _0x2707c1;
}
function _decode(_0x186147) {
  const _0x22a49a = _0x310550,
    _0x1f44b6 = {
      'xXxtA': function (_0x2b45a0, _0x195a91) {
        return _0x2b45a0(_0x195a91);
      }
    };
  return _0x186147 ? _0x1f44b6[_0x22a49a(0x691, 'Nkpr')](decodeURIComponent, _0x186147) : '';
}
function _encode(_0x1cab56) {
  const _0x2d070c = _0x310550,
    _0x1bac54 = {
      'JJaoL': function (_0x55344d, _0x22c667) {
        return _0x55344d(_0x22c667);
      },
      'mrYjK': _0x2d070c(0x2df, '!Mi^')
    };
  return _0x1cab56 ? _0x1bac54[_0x2d070c(0x235, 'NRC*')](encodeURIComponent, _0x1cab56)[_0x2d070c(0x4f5, '@jTP')](/[!'()]/g, escape)[_0x2d070c(0x4f5, '@jTP')](/\*/g, _0x1bac54[_0x2d070c(0x701, 'uN9]')]) : '';
}
async function getMusicAudiomack(_0x3595a7, _0x1d984c) {
  const _0x966cd = _0x310550,
    _0x5f0ec8 = {
      'nbnjE': function (_0x5e1846, _0x30ccb9) {
        return _0x5e1846 < _0x30ccb9;
      },
      'VHOFw': _0x966cd(0x677, '[*32'),
      'lpaIU': function (_0xff5a42, _0x28996d) {
        return _0xff5a42 != _0x28996d;
      },
      'OBIQW': _0x966cd(0x1de, '%q4y'),
      'pYeEy': function (_0x3bd119, _0x127e20) {
        return _0x3bd119(_0x127e20);
      },
      'ZrsFC': function (_0x4663d3, _0x5874fc) {
        return _0x4663d3(_0x5874fc);
      },
      'PectG': function (_0x2a4b62, _0x35a533) {
        return _0x2a4b62 + _0x35a533;
      },
      'SQoNN': _0x966cd(0x5f8, '%q4y'),
      'qvVhK': function (_0x1b18f6, _0x5b55a0) {
        return _0x1b18f6 / _0x5b55a0;
      },
      'brzvK': _0x966cd(0x432, 'NRC*'),
      'miHJD': _0x966cd(0x54f, '![39'),
      'ksCix': _0x966cd(0x26d, '#jWv'),
      'UnhBh': _0x966cd(0x6c3, 'OI7a'),
      'OEbJj': function (_0x2b1c1a, _0x407f85) {
        return _0x2b1c1a != _0x407f85;
      },
      'Jtzpp': function (_0x4fe6c5, _0x1e7c1f) {
        return _0x4fe6c5 === _0x1e7c1f;
      },
      'atlCa': _0x966cd(0x5bd, '@jTP'),
      'ZDMsG': _0x966cd(0x3fb, 'kjqA')
    };
  if (_0x5f0ec8[_0x966cd(0x5bf, '!4rE')](_0x1d984c, null)) {
    if (_0x966cd(0x2d4, 'GGSV') !== _0x5f0ec8[_0x966cd(0x566, 'OI7a')]) {
      return _0x5f0ec8[_0x966cd(0x3c1, 'dZmR')](getMusicAudiomackSource, _0x1d984c[_0x966cd(0x369, 'YMpZ')]);
    } else {
      let _0x35ddd4 = _0x3892f8[_0x3bb713],
        _0x7823d6 = _0x35ddd4[0x2][_0x966cd(0x6a2, 'o%]7')]('-'),
        _0x6c9d0a = _0x7823d6[0x0][_0x966cd(0x652, '9&#y')]()[_0x966cd(0x4ec, '![39')]('\x20', '')[_0x966cd(0x385, 'Y8Rn')]('&', ','),
        _0x2cfbea = '';
      for (var _0x141c50 = 0x1; _0x5f0ec8[_0x966cd(0x590, 'Nkpr')](_0x141c50, _0x7823d6[_0x966cd(0x5c7, 'Nkpr')]); _0x141c50++) {
        _0x2cfbea += _0x7823d6[_0x141c50][_0x966cd(0x35d, 'q2yF')]()[_0x966cd(0x472, 'Cmd%')]('\x20', '')[_0x966cd(0x3e1, 'sBLp')](_0x5f0ec8[_0x966cd(0x6f8, 'OI7a')], '')[_0x966cd(0x6eb, '1OC[')]('&', '');
      }
      let _0x49ec89 = {
        'key': _0x35ddd4[0x1],
        'singerName': _0x6c9d0a,
        'songName': _0x2cfbea
      };
      _0x13c1ba[_0x966cd(0x37a, 'o%]7')](_0x49ec89);
    }
  }
  let _0x597dfe = _0x3595a7[_0x966cd(0x55f, 'vdaz')][_0x966cd(0x269, '2338')]()[_0x966cd(0x35b, 'MnJ5')]('\x20', '')[_0x966cd(0x449, 'YBo*')]('&', ','),
    _0x32d1eb = _0x3595a7[_0x966cd(0x604, 'Y#Tn')][_0x966cd(0x679, 'I9C4')]()[_0x966cd(0x472, 'Cmd%')]('\x20', '')[_0x966cd(0x1df, 'tU9n')](_0x966cd(0x1f2, 'OI7a'), '')[_0x966cd(0x356, 'uN9]')]('&', ''),
    _0x3bd13f = _0x5f0ec8[_0x966cd(0x5d9, '0juG')](encodeURIComponent, _0x5f0ec8[_0x966cd(0x5b9, 'o%]7')](_0x5f0ec8[_0x966cd(0x48f, 'Cmd%')](_0x597dfe, '\x20'), _0x32d1eb));
  const _0x40edee = {
      'limit': pageSize,
      'oauth_consumer_key': _0x966cd(0x4d3, 'OI7a'),
      'oauth_nonce': _0x5f0ec8[_0x966cd(0x47c, 'Nkpr')](nonce, 0x20),
      'oauth_signature_method': _0x5f0ec8[_0x966cd(0x2f8, '9Fkk')],
      'oauth_timestamp': Math[_0x966cd(0x680, 'OI7a')](_0x5f0ec8[_0x966cd(0x255, 'I9C4')](Date[_0x966cd(0x633, 'o%]7')](), 0x3e8)),
      'oauth_version': _0x5f0ec8[_0x966cd(0x403, '1faC')],
      'page': 0x1,
      'q': _0x3bd13f,
      'show': _0x5f0ec8[_0x966cd(0x6a6, 'KqK%')],
      'sort': _0x966cd(0x609, 'E9Je')
    },
    _0x38cfa7 = getSignature(_0x966cd(0x6f4, 'wDo^'), _0x5f0ec8[_0x966cd(0x417, 'o%]7')], _0x40edee),
    _0x4806cf = (await axios_1[_0x966cd(0x4bf, '8CIx')][_0x966cd(0x211, 'Y#Tn')](_0x5f0ec8[_0x966cd(0x63b, '0c!C')], {
      'headers': headers,
      'params': {
        ..._0x40edee,
        'oauth_signature': _0x38cfa7
      }
    }))[_0x966cd(0x561, 'KqK%')][_0x966cd(0x3cf, 'dZmR')];
  let _0x2d3940 = _0x4806cf[_0x966cd(0x4f3, '!4rE')](formatAudiomackMusicItem)[_0x966cd(0x305, 'OI7a')](_0x25b7c0 => _0x25b7c0[_0x966cd(0x592, '!4rE')] == _0x32d1eb && _0x25b7c0[_0x966cd(0x5fd, 'A@za')] == _0x597dfe);
  if (_0x2d3940 != null) {
    let _0x5e62c9 = await getMusicAudiomackSource(_0x2d3940['id']);
    if (_0x5e62c9 && _0x5f0ec8[_0x966cd(0x3d4, '(cov')](_0x5e62c9[_0x966cd(0x2e9, 'YBo*')], null)) {
      let _0x301f38 = {
        'platform': _0x966cd(0x72a, 'MnJ5'),
        'third_id': _0x2d3940['id']
      };
      saveServer(_0x3595a7, _0x301f38);
      return {
        'url': _0x5e62c9[_0x966cd(0x5ef, '2Evc')]
      };
    } else {
      return {
        'url': ''
      };
    }
  } else {
    if (_0x5f0ec8[_0x966cd(0x5d7, 'q2yF')](_0x5f0ec8[_0x966cd(0x373, '1OC[')], _0x5f0ec8[_0x966cd(0x2db, 'dZmR')])) {
      _0x513769[_0x966cd(0x21c, 'Ln5U')](_0x1e0ebd);
    } else {
      return {
        'url': ''
      };
    }
  }
}
async function getMusicAudiomackSource(_0x31b5e5) {
  const _0x273e95 = _0x310550,
    _0x1424e1 = {
      'CCBOb': _0x273e95(0x641, 'bJC8'),
      'NocjN': _0x273e95(0x359, 'Ln5U'),
      'FNNKb': function (_0xe6a537, _0x62090e) {
        return _0xe6a537(_0x62090e);
      },
      'kjjLh': _0x273e95(0x3f9, 'uN9]'),
      'cLIEz': function (_0x40d50e, _0x3628e8) {
        return _0x40d50e / _0x3628e8;
      },
      'qJlrO': _0x273e95(0x1ab, 'KqK%'),
      'sCmfZ': function (_0x1a5ce4, _0x2e35b1, _0x1ad528, _0x23b75c) {
        return _0x1a5ce4(_0x2e35b1, _0x1ad528, _0x23b75c);
      },
      'MlzGe': _0x273e95(0x660, 'Ln5U'),
      'kQzQd': _0x273e95(0x26f, 'YBo*')
    },
    _0x1a06d2 = {
      'environment': _0x1424e1[_0x273e95(0x484, '2338')],
      'hq': !![],
      'oauth_consumer_key': _0x1424e1[_0x273e95(0x1d1, 'bJC8')],
      'oauth_nonce': _0x1424e1[_0x273e95(0x733, 'jjfM')](nonce, 0x20),
      'oauth_signature_method': _0x1424e1[_0x273e95(0x2f0, 'GGSV')],
      'oauth_timestamp': Math[_0x273e95(0x3fd, 'f!NO')](_0x1424e1[_0x273e95(0x728, 'sBLp')](Date[_0x273e95(0x25a, '$ldZ')](), 0x3e8)),
      'oauth_version': _0x273e95(0x341, '7it%'),
      'section': _0x1424e1[_0x273e95(0x22a, '2Evc')]
    },
    _0x2f2185 = _0x1424e1[_0x273e95(0x338, 'Cmd%')](getSignature, _0x1424e1[_0x273e95(0x28e, 'VT5#')], _0x273e95(0x295, '![39') + _0x31b5e5, _0x1a06d2),
    _0x5a948f = (await axios_1[_0x273e95(0x4bf, '8CIx')][_0x273e95(0x1d6, 'KqK%')](_0x273e95(0x586, '(cov') + _0x31b5e5, {
      'headers': {
        ...headers,
        'origin': _0x1424e1[_0x273e95(0x635, '0bVN')]
      },
      'params': {
        ..._0x1a06d2,
        'oauth_signature': _0x2f2185
      }
    }))[_0x273e95(0x1bb, 'YBo*')];
  return {
    'url': _0x5a948f[_0x273e95(0x479, '9&#y')]
  };
}
function getSignature(_0x497860, _0x41a6cf, _0x9476ee, _0x4dcecb = _0x310550(0x60b, 'q2yF')) {
  const _0x1783c7 = _0x310550,
    _0x217e54 = {
      'WcFsd': function (_0x1099af, _0x50fd00) {
        return _0x1099af(_0x50fd00);
      },
      'mnIsO': function (_0x2d463f, _0x5b28b2) {
        return _0x2d463f + _0x5b28b2;
      },
      'uTytx': function (_0x54d10e, _0xb3ebc5) {
        return _0x54d10e + _0xb3ebc5;
      },
      'AwHpX': function (_0x4191f4, _0x4f253d) {
        return _0x4191f4 + _0x4f253d;
      },
      'zgWkB': function (_0x4e9835, _0x5b3851) {
        return _0x4e9835 + _0x5b3851;
      },
      'yvQmh': function (_0x144d5f, _0x16f716) {
        return _0x144d5f(_0x16f716);
      }
    };
  _0x41a6cf = _0x41a6cf[_0x1783c7(0x508, 'Ln5U')]('?')[0x0];
  _0x41a6cf[_0x1783c7(0x3d7, '9Fkk')](_0x1783c7(0x49e, 'wDo^')) ? _0x41a6cf = _0x41a6cf : _0x41a6cf = _0x1783c7(0x649, 'GGSV') + _0x41a6cf;
  const _0x3d8ddb = new u(_0x9476ee)[_0x1783c7(0x6c2, '![39')](),
    _0x473d6b = _0x497860[_0x1783c7(0x2ab, 'Y8Rn')](),
    _0x1c9fd0 = _0x217e54[_0x1783c7(0x502, '0juG')](getNormalizedParams, _0x3d8ddb),
    _0xdf67c3 = _0x217e54[_0x1783c7(0x6b2, 'MnJ5')](_0x217e54[_0x1783c7(0x5ec, '0c!C')](_0x217e54[_0x1783c7(0x24b, '$ldZ')](_0x217e54[_0x1783c7(0x71f, '[*32')](_0x217e54[_0x1783c7(0x256, 'NRC*')](_encode, _0x473d6b), '&'), _0x217e54[_0x1783c7(0x62d, 'vdaz')](_encode, _0x41a6cf)), '&'), _encode(_0x1c9fd0)),
    _0x529612 = CryptoJs[_0x1783c7(0x558, '0juG')](_0xdf67c3, _0x4dcecb + '&')[_0x1783c7(0x4bd, 'q2yF')](CryptoJs[_0x1783c7(0x49f, '#jWv')][_0x1783c7(0x48a, 'tU9n')]);
  return _0x529612;
}
function u(_0x495fe1) {
  const _0x42a9f1 = _0x310550;
  this[_0x42a9f1(0x45e, '9&#y')] = {};
  this[_0x42a9f1(0x60a, '2Evc')](_0x495fe1 || {});
}
u[_0x310550(0x36c, 'Cmd%')] = {
  '_loadParameters': function (_0xa08928) {
    const _0x3f5de6 = _0x310550,
      _0x4c8166 = {
        'DltGB': function (_0x20887a, _0x3a72a6) {
          return _0x20887a instanceof _0x3a72a6;
        },
        'ONomD': function (_0x4a1793, _0x54309f) {
          return _0x4a1793 == _0x54309f;
        }
      };
    _0x4c8166[_0x3f5de6(0x440, 'f!NO')](_0xa08928, Array) ? this[_0x3f5de6(0x595, 'YBo*')](_0xa08928) : _0x4c8166[_0x3f5de6(0x5e7, '![39')](_0x3f5de6(0x66f, 'Cmd%'), typeof _0xa08928) && this[_0x3f5de6(0x3d8, 'OI7a')](_0xa08928);
  },
  '_loadParametersFromArray': function (_0x164c96) {
    const _0x15f698 = _0x310550,
      _0x20d02c = {
        'JJkuP': function (_0x2ed3f8, _0x283bb8) {
          return _0x2ed3f8 < _0x283bb8;
        }
      };
    var _0x57c9f1;
    for (_0x57c9f1 = 0x0; _0x20d02c[_0x15f698(0x5c5, '9&#y')](_0x57c9f1, _0x164c96[_0x15f698(0x419, '[*32')]); _0x57c9f1++) this[_0x15f698(0x488, '1OC[')](_0x164c96[_0x57c9f1]);
  },
  '_loadParametersFromObject': function (_0x404163) {
    const _0x3ad980 = _0x310550,
      _0x23c688 = {
        'KFBaw': function (_0x5ad8b4, _0x153847) {
          return _0x5ad8b4 == _0x153847;
        },
        'reOEb': function (_0x131aa9, _0x27c941) {
          return _0x131aa9 === _0x27c941;
        }
      };
    var _0x57b945;
    for (_0x57b945 in _0x404163) if (_0x404163[_0x3ad980(0x65e, 'KqK%')](_0x57b945)) {
      if (_0x23c688[_0x3ad980(0x2dd, '@jTP')](_0x3ad980(0x687, 'jjfM'), _0x3ad980(0x2aa, 'sBLp'))) {
        let _0x5ea672 = _0x266605(_0x3c1734);
        _0x23c688[_0x3ad980(0x3b1, 'kjqA')](_0x5ea672, '') ? _0x5222ba[_0x3ad980(0x534, '$ldZ')](_0x58a494) : _0x3ef356[_0x3ad980(0x607, 'Nkpr')](_0x5ea672);
      } else {
        var _0x10cabc = this[_0x3ad980(0x343, '[*32')](_0x404163[_0x57b945]);
        this[_0x3ad980(0x2b0, 'tU9n')](_0x57b945, _0x10cabc);
      }
    }
  },
  '_loadParameterValue': function (_0x2c6702, _0x13fa68) {
    const _0x49e6e0 = _0x310550,
      _0x14a2b7 = {
        'xbhVU': _0x49e6e0(0x1a8, 'Cmd%'),
        'ffLeH': _0x49e6e0(0x383, 'sBLp'),
        'SGPtd': _0x49e6e0(0x467, '0c!C'),
        'TcxaY': function (_0x13e924, _0x1a5714) {
          return _0x13e924 + _0x1a5714;
        },
        'Chiwo': function (_0x15bceb, _0x4b837a) {
          return _0x15bceb(_0x4b837a);
        },
        'WdAGc': function (_0x1e0d86, _0xfbb46f) {
          return _0x1e0d86 < _0xfbb46f;
        },
        'LSDjs': _0x49e6e0(0x4ee, '2Evc'),
        'KcRkI': function (_0x4d4b2a, _0x21553b) {
          return _0x4d4b2a == _0x21553b;
        }
      };
    var _0x4d8946;
    if (_0x13fa68 instanceof Array) {
      for (_0x4d8946 = 0x0; _0x14a2b7[_0x49e6e0(0x548, '2338')](_0x4d8946, _0x13fa68[_0x49e6e0(0x4ed, '(cov')]); _0x4d8946++) {
        if (_0x49e6e0(0x19f, 'g[o#') !== _0x14a2b7[_0x49e6e0(0x249, 'Y#Tn')]) {
          var _0xab66e5 = this[_0x49e6e0(0x3bf, 'sBLp')](_0x13fa68[_0x4d8946]);
          this[_0x49e6e0(0x45a, 'MnJ5')](_0x2c6702, _0xab66e5);
        } else {
          const _0x3a3693 = {
            'ztmVm': _0x14a2b7[_0x49e6e0(0x674, 'NRC*')]
          };
          try {
            let _0x1459f6 = _0x431aa7[_0x49e6e0(0x6b4, 'GGSV')] + _0x49e6e0(0x3c5, '%q4y'),
              _0x108314 = _0x5aa66f[_0x49e6e0(0x3fd, 'f!NO')](new _0x5e0142()[_0x49e6e0(0x23a, 'A@za')]() / 0x3e8)[_0x49e6e0(0x378, 'Y#Tn')](),
              _0x460f03 = {
                'platform': _0xddaf5c[_0x49e6e0(0x2c3, 'Y8Rn')],
                'third_id': _0x34bf4b[_0x49e6e0(0x717, '9&#y')],
                'music_url': _0x125d75[_0x49e6e0(0x469, '9Fkk')],
                'music_id': _0xa743c8[_0x49e6e0(0x58c, '!Mi^')]
              };
            _0x460f03[_0x14a2b7[_0x49e6e0(0x2c0, 'GGSV')]] = _0x108314;
            _0x460f03[_0x14a2b7[_0x49e6e0(0x1ea, '!Mi^')]] = _0x468684[_0x49e6e0(0x626, '$ldZ')](_0x14a2b7[_0x49e6e0(0x2cc, 'YBo*')](_0x14a2b7[_0x49e6e0(0x6ff, '0juG')](_0x14a2b7[_0x49e6e0(0x237, '!Mi^')](_0x3b3b10[_0x49e6e0(0x5cc, '2Evc')], _0x14a2b7[_0x49e6e0(0x63d, '9Fkk')](_0x28694f, _0x335f21[_0x49e6e0(0x3fc, 'GGSV')])) + _0x489760[_0x49e6e0(0x6c4, 'NRC*')], _0x411fc1[_0x49e6e0(0x5e5, '!Mi^')]), _0x108314))[_0x49e6e0(0x67e, '!4rE')]();
            (0x0, _0x72cf47[_0x49e6e0(0x52a, 'KqK%')])({
              'method': _0x49e6e0(0x46b, 'A@za'),
              'url': _0x1459f6,
              'data': _0x2ac13b[_0x49e6e0(0x37c, 'Cmd%')](_0x460f03)
            })[_0x49e6e0(0x274, 'bJC8')](_0x4ab2fe => {
              const _0x2662b2 = _0x49e6e0;
              _0xa72c[_0x2662b2(0x2ad, 'Y#Tn')](_0x3a3693[_0x2662b2(0x3f7, 'NRC*')], _0x4ab2fe[_0x2662b2(0x4a3, 'E9Je')]);
            });
          } catch (_0x499842) {
            _0x3ffe8d[_0x49e6e0(0x501, 'Y#Tn')](_0x49e6e0(0x5b0, '(cov'), _0x499842);
          }
        }
      }
      if (_0x14a2b7[_0x49e6e0(0x3d2, 'kjqA')](0x0, _0x13fa68[_0x49e6e0(0x42b, 'tU9n')])) {
        this[_0x49e6e0(0x2fa, 'Cmd%')](_0x2c6702, '');
      }
    } else {
      this[_0x49e6e0(0x637, 'YBo*')](_0x2c6702, _0x13fa68);
    }
  },
  '_getStringFromParameter': function (_0x3c5a75) {
    const _0x3f771d = _0x310550,
      _0x3a7972 = {
        'ExZDe': function (_0x4c3dec, _0x54baa8) {
          return _0x4c3dec || _0x54baa8;
        },
        'WeMUi': _0x3f771d(0x49b, 'Cmd%'),
        'gpIOv': _0x3f771d(0x2b8, '1OC['),
        'TLPpM': _0x3f771d(0x336, 'dZmR')
      };
    var _0x56080d = _0x3a7972[_0x3f771d(0x428, '$ldZ')](_0x3c5a75, '');
    try {
      if (_0x3a7972[_0x3f771d(0x236, '!4rE')] === _0x3a7972[_0x3f771d(0x1f7, '7it%')]) {
        return {
          'id': _0x413b91[_0x3f771d(0x6ac, '![39')] || _0x522ad9[_0x3f771d(0x421, 'OI7a')],
          'albumMID': _0x4563a5[_0x3f771d(0x51d, '[*32')] || _0x5d50f1[_0x3f771d(0x3b8, 'q2yF')],
          'title': _0x2f7a98[_0x3f771d(0x732, 'OI7a')] || _0x5349f8[_0x3f771d(0x2fc, '[*32')],
          'artwork': _0x599e89[_0x3f771d(0x58f, 'I9C4')] || _0x3f771d(0x5ce, 'wDo^') + (_0x544678[_0x3f771d(0x1aa, 'Y8Rn')] || _0x3fc86a[_0x3f771d(0x559, 'VT5#')]) + _0x3f771d(0x1d0, 'YMpZ'),
          'date': _0x325664[_0x3f771d(0x56c, '2Evc')] || _0x1b9937[_0x3f771d(0x643, '!4rE')],
          'singerID': _0x36e053[_0x3f771d(0x2d7, '#jWv')] || _0x2c235c[_0x3f771d(0x520, 'kjqA')],
          'artist': _0x395fda[_0x3f771d(0x6c5, '#jWv')] || _0x356eaa[_0x3f771d(0x312, 'dZmR')],
          'singerMID': _0x3f5799[_0x3f771d(0x3bd, '(cov')] || _0x5310a9[_0x3f771d(0x4c2, 'q2yF')],
          'description': _0x5a339e[_0x3f771d(0x6e7, 'dZmR')]
        };
      } else {
        if (_0x3f771d(0x40a, '8CIx') == typeof _0x3c5a75 || _0x3a7972[_0x3f771d(0x4aa, 'OI7a')] == typeof _0x3c5a75) {
          _0x56080d = _0x3c5a75[_0x3f771d(0x2fb, '9&#y')]();
        }
      }
    } catch (_0x24c1e9) {}
    return _0x56080d;
  },
  '_addParameter': function (_0x30317b, _0x587797) {
    const _0x21fd06 = _0x310550;
    this[_0x21fd06(0x44a, '%q4y')][_0x30317b] || (this[_0x21fd06(0x459, 'wDo^')][_0x30317b] = []);
    this[_0x21fd06(0x3f3, '8CIx')][_0x30317b][_0x21fd06(0x4b2, 'GGSV')](_0x587797);
  },
  'get': function () {
    const _0x5cfa38 = _0x310550;
    return this[_0x5cfa38(0x516, '(cov')];
  }
};
async function getMusicKuWoSource(_0x475523) {
  const _0x1e63a7 = _0x310550,
    _0x377af2 = {
      'mTOfr': function (_0x51c331, _0x331c3a) {
        return _0x51c331 === _0x331c3a;
      },
      'VpfkV': _0x1e63a7(0x316, 'Y#Tn'),
      'xgJrW': function (_0x462b26, _0x8c3a37) {
        return _0x462b26 / _0x8c3a37;
      },
      'jNZXx': function (_0x1ce84e, _0x55225d) {
        return _0x1ce84e + _0x55225d;
      },
      'VoXrb': function (_0x50b5c1, _0x418e3b) {
        return _0x50b5c1 != _0x418e3b;
      },
      'bhDsa': _0x1e63a7(0x218, 'I9C4'),
      'rOlOB': function (_0xda962, _0x52ff24) {
        return _0xda962(_0x52ff24);
      }
    };
  try {
    if (_0x377af2[_0x1e63a7(0x67c, 'uN9]')](_0x1e63a7(0x408, 'E9Je'), _0x377af2[_0x1e63a7(0x46f, '7it%')])) {
      var _0x2997d8 = _0x1e63a7(0x5e6, 'Nkpr') + _0x475523[_0x1e63a7(0x369, 'YMpZ')] + _0x1e63a7(0x3a5, '0bVN');
      let _0x215324 = (await axios_1[_0x1e63a7(0x671, 'MnJ5')][_0x1e63a7(0x33e, 'bJC8')](_0x2997d8))[_0x1e63a7(0x645, '[*32')];
      return {
        'url': _0x215324[_0x1e63a7(0x653, 'bJC8')][_0x1e63a7(0x233, 'VT5#')][_0x1e63a7(0x6df, '2338')](_0x1e63a7(0x6e5, 'NRC*'), '')
      };
      let _0x284ee8 = Math[_0x1e63a7(0x31e, 'Y#Tn')](_0x377af2[_0x1e63a7(0x3a7, 'E9Je')](new Date()[_0x1e63a7(0x5c6, '0bVN')](), 0x3e8))[_0x1e63a7(0x710, 'GGSV')](),
        _0x9efdf = _0x1e63a7(0x3e8, 'MnJ5'),
        _0x16a3cd = CryptoJs[_0x1e63a7(0x3d6, 'dZmR')](_0x377af2[_0x1e63a7(0x577, '%q4y')](_0x475523[_0x1e63a7(0x6c8, '#jWv')] + _0x9efdf, _0x284ee8));
      const _0x2ff8d8 = _0x1e63a7(0x53a, '(cov') + _0x16a3cd + _0x1e63a7(0x57c, '%q4y') + _0x475523[_0x1e63a7(0x5fe, 'A@za')] + _0x1e63a7(0x709, 'o%]7') + _0x284ee8,
        _0x7abbc7 = (await axios_1[_0x1e63a7(0x2d6, '%q4y')][_0x1e63a7(0x6d1, 'Nkpr')](_0x2ff8d8))[_0x1e63a7(0x59d, '0c!C')];
      if (_0x377af2[_0x1e63a7(0x3b2, '69Sa')](_0x7abbc7[_0x1e63a7(0x2e9, 'YBo*')], '')) {
        if (_0x377af2[_0x1e63a7(0x73f, 'Ln5U')] === _0x377af2[_0x1e63a7(0x537, 'dZmR')]) {
          let _0x2f4ce1 = {
              'headers': {
                'Content-Type': _0x1e63a7(0x68e, 'sBLp'),
                'Host': _0x1e63a7(0x72f, '1faC'),
                'Referer': _0x1e63a7(0x6de, 'Ln5U')
              }
            },
            _0x5f450e = (await axios_1[_0x1e63a7(0x723, '1faC')][_0x1e63a7(0x54a, 'Ln5U')](_0x7abbc7[_0x1e63a7(0x6b9, 'YMpZ')], _0x2f4ce1))[_0x1e63a7(0x468, '2338')],
            _0x18b46b = _0x5f450e[_0x1e63a7(0x248, 'E9Je')](_0x1e63a7(0x3b9, 'KqK%')),
            _0x33b4ab = _0x5f450e[_0x1e63a7(0x418, 'g[o#')](_0x18b46b),
            _0x39188e = _0x33b4ab[_0x1e63a7(0x2dc, 'jjfM')]('\x0d\x0a');
          _0x33b4ab = _0x33b4ab[_0x1e63a7(0x2e5, 'YBo*')](0x4, _0x39188e);
          _0x377af2[_0x1e63a7(0x6bf, '0bVN')](viewLog, _0x475523);
          return {
            'url': _0x33b4ab
          };
        } else {
          return {
            'url': ''
          };
        }
      }
    } else {
      return {
        'url': ''
      };
    }
  } catch (_0xb84b7f) {
    return {
      'url': ''
    };
  }
  return {
    'url': ''
  };
}
async function viewLog(_0x5a4568) {
  const _0x4f6ddf = _0x310550,
    _0xd8b5da = {
      'OrohG': function (_0x21d57a, _0x55a82c) {
        return _0x21d57a === _0x55a82c;
      },
      'aXNba': _0x4f6ddf(0x642, '9Fkk'),
      'GTwoH': _0x4f6ddf(0x28a, '@jTP'),
      'tiEzX': _0x4f6ddf(0x721, 'f!NO'),
      'xHpXq': function (_0x905e24, _0x4a8899) {
        return _0x905e24 / _0x4a8899;
      },
      'kShZG': _0x4f6ddf(0x1a2, 'I9C4'),
      'uISBQ': _0x4f6ddf(0x210, 'dZmR'),
      'NRMQy': function (_0x438a09, _0x2169b5) {
        return _0x438a09 + _0x2169b5;
      },
      'BBLUA': function (_0xb29752, _0x4d3812) {
        return _0xb29752 + _0x4d3812;
      },
      'kpONZ': function (_0x1535c8, _0x29aaa0) {
        return _0x1535c8(_0x29aaa0);
      },
      'ZRlPx': _0x4f6ddf(0x29a, 'YBo*'),
      'uPejv': _0x4f6ddf(0x730, 'bJC8')
    };
  try {
    let _0x3ee365 = Config[_0x4f6ddf(0x4c0, '%q4y')] + _0x4f6ddf(0x4eb, '8CIx'),
      _0x85f465 = Math[_0x4f6ddf(0x24e, 'Cmd%')](_0xd8b5da[_0x4f6ddf(0x4b6, 'tU9n')](new Date()[_0x4f6ddf(0x207, 'kjqA')](), 0x3e8))[_0x4f6ddf(0x2fb, '9&#y')](),
      _0x3966d0 = {
        'platform': _0x5a4568[_0x4f6ddf(0x6ec, '2Evc')],
        'third_id': _0x5a4568[_0x4f6ddf(0x332, 'GGSV')],
        'music_url': _0x5a4568[_0x4f6ddf(0x1e3, 'OI7a')],
        'music_id': _0x5a4568[_0x4f6ddf(0x594, '9&#y')]
      };
    _0x3966d0[_0xd8b5da[_0x4f6ddf(0x434, 'A@za')]] = _0x85f465;
    _0x3966d0[_0xd8b5da[_0x4f6ddf(0x5d1, '8CIx')]] = CryptoJs[_0x4f6ddf(0x3f1, 'Ln5U')](_0xd8b5da[_0x4f6ddf(0x427, 'wDo^')](_0xd8b5da[_0x4f6ddf(0x494, 'VT5#')](_0xd8b5da[_0x4f6ddf(0x4c7, '2Evc')](_0x5a4568[_0x4f6ddf(0x2f7, 'MnJ5')], _0xd8b5da[_0x4f6ddf(0x3d1, 'q2yF')](encodeURIComponent, _0x5a4568[_0x4f6ddf(0x2b9, 'YBo*')])), _0x5a4568[_0x4f6ddf(0x2ca, '1OC[')]) + Config[_0x4f6ddf(0x620, 'I9C4')], _0x85f465))[_0x4f6ddf(0x710, 'GGSV')]();
    (0x0, axios_1[_0x4f6ddf(0x392, '69Sa')])({
      'method': _0x4f6ddf(0x611, 'Ln5U'),
      'url': _0x3ee365,
      'data': qs[_0x4f6ddf(0x31d, '9&#y')](_0x3966d0)
    })[_0x4f6ddf(0x49a, 'q2yF')](_0x534ec7 => {
      const _0x2b51c4 = _0x4f6ddf;
      _0xd8b5da[_0x2b51c4(0x584, 'uN9]')](_0xd8b5da[_0x2b51c4(0x1b2, 'q2yF')], _0xd8b5da[_0x2b51c4(0x287, '1OC[')]) ? console[_0x2b51c4(0x1ca, '%q4y')](_0xd8b5da[_0x2b51c4(0x617, '2338')], _0x534ec7[_0x2b51c4(0x3f0, '0bVN')]) : _0x5b026b(_0x3d5e6b, _0x3a76f5);
    });
  } catch (_0x2fa51d) {
    if (_0xd8b5da[_0x4f6ddf(0x263, 'vdaz')] === _0x4f6ddf(0x22d, 'o%]7')) {
      console[_0x4f6ddf(0x61d, 'E9Je')](_0xd8b5da[_0x4f6ddf(0x3f6, 'sBLp')], _0x2fa51d);
    } else {
      _0x4a5dda[_0x4f6ddf(0x31a, 'MnJ5')](_0xd8b5da[_0x4f6ddf(0x65c, 'o%]7')]);
      return {
        'url': ''
      };
    }
  }
}
async function getMusicKuWoApp(_0x3f8729, _0x16f4dc) {
  const _0x1a13d9 = _0x310550,
    _0x1ba219 = {
      'xCNbh': function (_0xff604c, _0x29c385) {
        return _0xff604c != _0x29c385;
      },
      'VjPLV': function (_0x4c80fc, _0x476b92) {
        return _0x4c80fc(_0x476b92);
      },
      'Zlcvs': _0x1a13d9(0x50e, 'Nkpr'),
      'qKVwN': function (_0xbdc4ab, _0x53067b) {
        return _0xbdc4ab(_0x53067b);
      },
      'NZbZh': _0x1a13d9(0x71c, 'dZmR')
    };
  let _0x2c595f = {
    'url': ''
  };
  try {
    if (_0x1ba219[_0x1a13d9(0x2a0, '7it%')](_0x16f4dc, null)) {
      _0x2c595f = await _0x1ba219[_0x1a13d9(0x4b3, 'vdaz')](getMusicKuWoSource, _0x16f4dc);
    } else {
      let _0xad9b2 = await getSearchKuwo(_0x3f8729);
      if (_0xad9b2) {
        let _0xaf740e = {
          'platform': _0x1ba219[_0x1a13d9(0x464, 'wDo^')],
          'third_id': _0xad9b2['id']
        };
        _0x2c595f = await _0x1ba219[_0x1a13d9(0x4a6, '9Fkk')](getMusicKuWoSource, _0xaf740e);
        console[_0x1a13d9(0x382, 'uN9]')](_0x1ba219[_0x1a13d9(0x713, 'A@za')], _0x2c595f);
        if (_0x2c595f && _0x1ba219[_0x1a13d9(0x568, '!Mi^')](_0x2c595f[_0x1a13d9(0x681, '9Fkk')], '')) {
          saveServer(_0x3f8729, _0xaf740e);
        }
      }
    }
  } catch (_0x179256) {}
  return _0x2c595f;
}
async function getSearchKuwo(_0x249bc6) {
  const _0x1ab87f = _0x310550,
    _0x4f5109 = {
      'kquLL': function (_0xf75fbe, _0x524521) {
        return _0xf75fbe + _0x524521;
      },
      'mkpJL': function (_0x5e514d, _0x42f315) {
        return _0x5e514d + _0x42f315;
      },
      'QNnne': _0x1ab87f(0x579, 'A@za'),
      'jgWpw': _0x1ab87f(0x50f, 'MnJ5')
    };
  let _0x461c42 = _0x249bc6[_0x1ab87f(0x542, 'VT5#')][_0x1ab87f(0x36d, 'A@za')]()[_0x1ab87f(0x665, '$ldZ')]('\x20', '')[_0x1ab87f(0x32d, 'wDo^')]('&', ','),
    _0x216242 = _0x249bc6[_0x1ab87f(0x41a, '69Sa')][_0x1ab87f(0x337, '[*32')]()[_0x1ab87f(0x6b6, '0bVN')]('\x20', '')[_0x1ab87f(0x4a4, 'YMpZ')]('&', ','),
    _0x4f66d3 = _0x4f5109[_0x1ab87f(0x554, 'Y#Tn')](_0x4f5109[_0x1ab87f(0x581, 'q2yF')](_0x461c42, '\x20'), _0x216242);
  const _0x5ce6e1 = (await (0x0, axios_1[_0x1ab87f(0x63f, 'Nkpr')])({
    'method': _0x4f5109[_0x1ab87f(0x264, 'q2yF')],
    'url': _0x1ab87f(0x495, 'Y#Tn'),
    'params': {
      'client': 'kt',
      'all': _0x4f66d3,
      'pn': 0x0,
      'rn': 0x1e,
      'uid': 0x2f5f1d4a,
      'ver': _0x4f5109[_0x1ab87f(0x741, '0bVN')],
      'vipver': '1',
      'show_copyright_off': 0x1,
      'newver': 0x1,
      'ft': _0x1ab87f(0x4f2, 'q2yF'),
      'cluster': 0x0,
      'strategy': 0x7dc,
      'encoding': _0x1ab87f(0x2b2, '8CIx'),
      'rformat': _0x1ab87f(0x523, 'VT5#'),
      'vermerge': 0x1,
      'mobi': 0x1,
      'issubtitle': 0x1
    }
  }))[_0x1ab87f(0x555, 'dZmR')];
  let _0x44bb7f = _0x5ce6e1[_0x1ab87f(0x1db, '2338')][_0x1ab87f(0x4c9, 'f!NO')](formatYunMusicItem);
  return _0x44bb7f[_0x1ab87f(0x686, '0bVN')](_0x1d0aa5 => _0x1d0aa5[_0x1ab87f(0x22e, 'Cmd%')][_0x1ab87f(0x70e, 'dZmR')]()[_0x1ab87f(0x356, 'uN9]')]('\x20', '')[_0x1ab87f(0x35b, 'MnJ5')]('&', ',') == _0x216242 && _0x1d0aa5[_0x1ab87f(0x2f4, 'Y8Rn')][_0x1ab87f(0x30e, '@jTP')]()[_0x1ab87f(0x4ab, '9&#y')]('\x20', '')[_0x1ab87f(0x507, 'NRC*')]('&', ',') == _0x461c42);
}
async function saveServer(_0x461573, _0x39e30d) {
  const _0x1fcc22 = _0x310550,
    _0x1a7c09 = {
      'CPtOI': function (_0x5907f6, _0x234c7f) {
        return _0x5907f6(_0x234c7f);
      },
      'wzVBd': function (_0x3cdf64, _0xb0bd0e) {
        return _0x3cdf64 + _0xb0bd0e;
      }
    };
  try {
    let _0x24ab6 = Config[_0x1fcc22(0x57f, '#jWv')] + _0x1fcc22(0x39a, 'KqK%'),
      _0x2ce3b2 = Math[_0x1fcc22(0x1ac, 'o%]7')](new Date()[_0x1fcc22(0x702, 'dZmR')]() / 0x3e8)[_0x1fcc22(0x4b4, '%q4y')](),
      _0x514017 = {
        'platform': Config[_0x1fcc22(0x375, '0juG')],
        'third_id': _0x461573[_0x1fcc22(0x1cb, 'dZmR')],
        'title': _0x461573[_0x1fcc22(0x42f, 'wDo^')],
        'artwork': _0x461573[_0x1fcc22(0x684, '!4rE')],
        'artist': _0x461573[_0x1fcc22(0x5fa, 'MnJ5')]
      },
      _0x598392 = {
        'musicInfo': _0x1a7c09[_0x1fcc22(0x2bb, 'uN9]')](encodeURIComponent, JSON[_0x1fcc22(0x1c2, 'q2yF')](_0x514017)),
        'payInfo': encodeURIComponent(JSON[_0x1fcc22(0x569, 'tU9n')](_0x39e30d)),
        'time': _0x2ce3b2
      };
    _0x598392[_0x1fcc22(0x533, 'Y#Tn')] = CryptoJs[_0x1fcc22(0x394, 'g[o#')](_0x1a7c09[_0x1fcc22(0x34c, 'f!NO')](_0x1a7c09[_0x1fcc22(0x1f6, 'g[o#')](_0x598392[_0x1fcc22(0x21b, '2Evc')], _0x598392[_0x1fcc22(0x458, 'VT5#')]), Config[_0x1fcc22(0x351, '9&#y')]) + _0x2ce3b2)[_0x1fcc22(0x203, '#jWv')]();
    (0x0, axios_1[_0x1fcc22(0x465, 'wDo^')])({
      'method': _0x1fcc22(0x2bc, '0c!C'),
      'url': _0x24ab6,
      'data': qs[_0x1fcc22(0x569, 'tU9n')](_0x598392)
    })[_0x1fcc22(0x4ae, '(cov')](_0x5cf78e => {
      const _0x9c2342 = _0x1fcc22;
      console[_0x9c2342(0x3a2, 'tU9n')]('鎻愪氦', _0x5cf78e[_0x9c2342(0x6a5, 'q2yF')]);
    });
  } catch (_0x4c0d55) {}
}
async function getMusic2t58(_0x39aa71, _0x24c419) {
  const _0x459922 = _0x310550,
    _0x56156d = {
      'qsPwQ': function (_0x1d8ebe, _0x566f81) {
        return _0x1d8ebe === _0x566f81;
      },
      'EmeYu': _0x459922(0x627, '1OC['),
      'vMckt': _0x459922(0x6a9, 'q2yF'),
      'IcBSh': _0x459922(0x4c3, '9&#y'),
      'NhjxP': function (_0x5a7015, _0xad1e38) {
        return _0x5a7015 != _0xad1e38;
      },
      'NnrcG': _0x459922(0x30c, '0bVN'),
      'GTuno': function (_0x45caf3, _0x5e0042) {
        return _0x45caf3(_0x5e0042);
      },
      'udlaV': function (_0x4d77ab, _0x257426) {
        return _0x4d77ab + _0x257426;
      },
      'glfXO': function (_0x731ce7, _0x2e2c10) {
        return _0x731ce7 < _0x2e2c10;
      },
      'HQqpj': function (_0x161fbe, _0x5abf92) {
        return _0x161fbe !== _0x5abf92;
      },
      'JMOpM': _0x459922(0x317, '!Mi^'),
      'mXZgV': function (_0x6cc863, _0x2bd49d) {
        return _0x6cc863 < _0x2bd49d;
      },
      'TjuUb': function (_0x11c601, _0x14e2eb) {
        return _0x11c601 > _0x14e2eb;
      },
      'wRfks': function (_0x3c8504, _0x406f96) {
        return _0x3c8504 != _0x406f96;
      },
      'qgLuc': _0x459922(0x1d4, '8CIx')
    };
  try {
    if (_0x56156d[_0x459922(0x492, '#jWv')](_0x56156d[_0x459922(0x699, '%q4y')], _0x459922(0x294, 'q2yF'))) {
      if (_0x24c419 != null) {
        let _0x2ade62 = {
            'headers': {
              'Content-Type': _0x56156d[_0x459922(0x59b, 'g[o#')],
              'Referer': _0x459922(0x47b, '#jWv') + _0x24c419[_0x459922(0x588, 'VT5#')] + _0x459922(0x53e, 'f!NO')
            }
          },
          _0x5cb733 = (await (0x0, axios_1[_0x459922(0x700, 'o%]7')])({
            'method': _0x56156d[_0x459922(0x522, '!Mi^')],
            'url': _0x459922(0x662, 'Cmd%'),
            'headers': _0x2ade62[_0x459922(0x4ce, 'YBo*')],
            'data': _0x459922(0x5df, 'uN9]') + _0x24c419[_0x459922(0x404, 'dZmR')] + _0x459922(0x2ae, '[*32')
          }))[_0x459922(0x535, 'Nkpr')];
        return _0x56156d[_0x459922(0x3ec, 'Y#Tn')](_0x5cb733[_0x459922(0x27c, 'f!NO')], '') ? (viewLog(_0x24c419), {
          'url': _0x5cb733[_0x459922(0x233, 'VT5#')]
        }) : {
          'url': ''
        };
      }
      let _0x53a71d = _0x39aa71[_0x459922(0x1c7, '0c!C')][_0x459922(0x1a9, '#jWv')]()[_0x459922(0x471, 'Ln5U')]('\x20', '')[_0x459922(0x43d, 'KqK%')]('&', ','),
        _0x1ae802 = _0x39aa71[_0x459922(0x3a1, '[*32')][_0x459922(0x337, '[*32')]()[_0x459922(0x32d, 'wDo^')]('\x20', '')[_0x459922(0x665, '$ldZ')](_0x56156d[_0x459922(0x41e, '![39')], '')[_0x459922(0x258, '2Evc')]('&', ''),
        _0x2e58df = _0x56156d[_0x459922(0x448, '(cov')](encodeURIComponent, _0x56156d[_0x459922(0x28d, '9&#y')](_0x53a71d + '\x20', _0x1ae802)),
        _0x25cf7f = _0x459922(0x442, '2Evc') + _0x2e58df + _0x459922(0x266, 'sBLp'),
        _0x547e13 = (await (0x0, axios_1[_0x459922(0x3b7, '0juG')])({
          'method': _0x459922(0x6d1, 'Nkpr'),
          'url': _0x25cf7f,
          'timeout': 0x1388
        }))[_0x459922(0x1bb, 'YBo*')];
      var _0x32a004 = /href="\/song\/(.+?).html" target="_mp3">(.+?)<\/a>/g;
      let _0xc050e0 = _0x547e13[_0x459922(0x3c3, '8CIx')](_0x32a004),
        _0x40a2f9 = Array[_0x459922(0x388, '2Evc')](_0xc050e0),
        _0x1c8334 = [];
      for (let _0x14f520 = 0x0; _0x56156d[_0x459922(0x480, 'jjfM')](_0x14f520, _0x40a2f9[_0x459922(0x4f6, 'vdaz')]); _0x14f520++) {
        if (_0x56156d[_0x459922(0x658, '![39')](_0x56156d[_0x459922(0x66c, 'VT5#')], _0x56156d[_0x459922(0x606, 'OI7a')])) {
          _0x36ac87[_0x459922(0x55d, '@jTP')]('鎻愪氦', _0x1edff4[_0x459922(0x6f5, 'A@za')]);
        } else {
          let _0x424a05 = _0x40a2f9[_0x14f520],
            _0x26f03e = _0x424a05[0x2][_0x459922(0x429, 'jjfM')]('-'),
            _0x376eba = _0x26f03e[0x0][_0x459922(0x453, '7it%')]()[_0x459922(0x35a, 'VT5#')]('\x20', '')[_0x459922(0x35a, 'VT5#')]('&', ','),
            _0x17fd91 = '';
          for (var _0x306f5a = 0x1; _0x56156d[_0x459922(0x6c7, 'dZmR')](_0x306f5a, _0x26f03e[_0x459922(0x5eb, '2Evc')]); _0x306f5a++) {
            _0x17fd91 += _0x26f03e[_0x306f5a][_0x459922(0x289, '1OC[')]()[_0x459922(0x654, '0juG')]('\x20', '')[_0x459922(0x1ee, '69Sa')](_0x56156d[_0x459922(0x5ff, 'wDo^')], '')[_0x459922(0x2c1, 'kjqA')]('&', '');
          }
          let _0x3b50a0 = {
            'key': _0x424a05[0x1],
            'singerName': _0x376eba,
            'songName': _0x17fd91
          };
          _0x1c8334[_0x459922(0x612, '[*32')](_0x3b50a0);
        }
      }
      let _0x2896fc = _0x1c8334[_0x459922(0x632, '![39')](_0x242080 => _0x242080[_0x459922(0x6fe, 'vdaz')] == _0x53a71d && _0x242080[_0x459922(0x2d2, 'q2yF')] == _0x1ae802);
      if (!_0x2896fc && _0x56156d[_0x459922(0x202, 'o%]7')](_0x1c8334[_0x459922(0x59e, '8CIx')], 0x0)) {}
      if (_0x2896fc) {
        let _0x1bb33f = {
            'headers': {
              'Content-Type': _0x459922(0x1eb, 'sBLp'),
              'Referer': _0x459922(0x30d, 'tU9n') + _0x2896fc[_0x459922(0x357, '1OC[')] + _0x459922(0x240, 'jjfM')
            }
          },
          _0x465d17 = (await (0x0, axios_1[_0x459922(0x2a4, 'Cmd%')])({
            'method': _0x459922(0x4c3, '9&#y'),
            'url': _0x459922(0x4d6, 'Y#Tn'),
            'headers': _0x1bb33f[_0x459922(0x37f, 'o%]7')],
            'data': _0x459922(0x505, 'E9Je') + _0x2896fc[_0x459922(0x241, 'bJC8')] + _0x459922(0x3f5, 'o%]7')
          }))[_0x459922(0x4a3, 'E9Je')];
        if (_0x56156d[_0x459922(0x4d2, 'Y8Rn')](_0x465d17[_0x459922(0x6b9, 'YMpZ')], '')) {
          _0x24c419 = {
            'platform': _0x459922(0x5d8, 'sBLp'),
            'third_id': _0x2896fc[_0x459922(0x374, 'jjfM')]
          };
          saveServer(_0x39aa71, _0x24c419);
          return {
            'url': _0x465d17[_0x459922(0x1c3, '1faC')]
          };
        }
        return {
          'url': ''
        };
      } else {
        return {
          'url': ''
        };
      }
    } else {
      return {
        'url': ''
      };
    }
  } catch (_0x560e9b) {
    return _0x459922(0x208, '$ldZ') !== _0x56156d[_0x459922(0x2fe, 'vdaz')] ? _0x411559 ? '' : {} : (console[_0x459922(0x597, '$ldZ')](_0x560e9b), {
      'url': ''
    });
  }
}
async function getMusicZZ123(_0x4d99bc) {
  const _0x3836ad = _0x310550,
    _0x57e801 = {
      'bACoz': function (_0x3d2973, _0x4434b5) {
        return _0x3d2973(_0x4434b5);
      },
      'ZNlIL': function (_0x2d2b45, _0x13eae0) {
        return _0x2d2b45 === _0x13eae0;
      },
      'IgiwC': _0x3836ad(0x482, '69Sa'),
      'BMkrS': function (_0x2bc40f, _0x4e5c5b) {
        return _0x2bc40f != _0x4e5c5b;
      },
      'KPEPB': function (_0x1a94fc, _0x38288e) {
        return _0x1a94fc > _0x38288e;
      },
      'igqET': function (_0x5dff6a, _0xdc00e2) {
        return _0x5dff6a + _0xdc00e2;
      },
      'QkxiJ': _0x3836ad(0x58e, '$ldZ'),
      'Gwbko': _0x3836ad(0x50a, '!Mi^'),
      'BINdX': _0x3836ad(0x4dc, 'YMpZ'),
      'HJqcX': _0x3836ad(0x58a, '(cov'),
      'IgVbj': _0x3836ad(0x40e, '(cov')
    };
  try {
    if (_0x57e801[_0x3836ad(0x39c, 'dZmR')](_0x57e801[_0x3836ad(0x639, 'sBLp')], _0x57e801[_0x3836ad(0x6ad, '!Mi^')])) {
      let _0xe3c4e7 = _0x4d99bc[_0x3836ad(0x5c4, '7it%')],
        _0x58a831 = _0x4d99bc[_0x3836ad(0x604, 'Y#Tn')];
      var _0x5b78b5 = /\(.*?\)/isg;
      let _0x959534 = _0x58a831[_0x3836ad(0x26c, '8CIx')](_0x5b78b5);
      if (_0x57e801[_0x3836ad(0x321, '[*32')](_0x959534, null) && _0x57e801[_0x3836ad(0x244, 'o%]7')](_0x959534[_0x3836ad(0x419, '[*32')], 0x0)) {
        _0x58a831 = _0x58a831[_0x3836ad(0x41c, 'g[o#')](_0x959534[0x0], '');
      }
      if (_0x57e801[_0x3836ad(0x513, 'dZmR')](_0x959534, null) && _0x57e801[_0x3836ad(0x377, 'bJC8')](_0x959534[_0x3836ad(0x25c, '1OC[')], 0x0)) {
        _0x58a831 = _0x58a831[_0x3836ad(0x50d, 'Nkpr')](_0x959534[0x0], '');
      }
      _0xe3c4e7 = _0xe3c4e7[_0x3836ad(0x1df, 'tU9n')]('/', ',');
      let _0x214dd3 = _0xe3c4e7[_0x3836ad(0x42e, 'Y8Rn')](','),
        _0x141cb6 = [];
      _0x214dd3[_0x3836ad(0x37d, 'dZmR')](_0x3f9f47 => {
        const _0x4db366 = _0x3836ad;
        let _0x31ee9c = _0x57e801[_0x4db366(0x452, '9&#y')](chineseSel, _0x3f9f47);
        _0x31ee9c == '' ? _0x141cb6[_0x4db366(0x364, 'I9C4')](_0x3f9f47) : _0x141cb6[_0x4db366(0x424, 'kjqA')](_0x31ee9c);
      });
      let _0x5c3c89 = _0x57e801[_0x3836ad(0x1f8, 'KqK%')](_0x214dd3[_0x3836ad(0x6ee, 'YBo*')]('\x20'), _0x57e801[_0x3836ad(0x391, 'tU9n')]) + _0x58a831;
      console[_0x3836ad(0x21c, 'Ln5U')](_0x5c3c89);
      const _0x3f8649 = (await (0x0, axios_1[_0x3836ad(0x4f0, '9Fkk')])({
        'method': _0x57e801[_0x3836ad(0x376, 'A@za')],
        'url': _0x3836ad(0x439, '[*32'),
        'headers': ZZ123Config[_0x3836ad(0x232, '[*32')],
        'params': {
          'act': _0x3836ad(0x306, 'YBo*'),
          'key': _0x5c3c89,
          'page': 0x1
        }
      }))[_0x3836ad(0x1bb, 'YBo*')];
      if (_0x3f8649[_0x3836ad(0x4ff, 'f!NO')][_0x3836ad(0x339, '2338')] > 0x0) {
        let _0x55a2a7 = _0x3f8649[_0x3836ad(0x5c2, 'OI7a')][_0x3836ad(0x416, '$ldZ')](_0x57546a => _0x57546a[_0x3836ad(0x672, 'NRC*')] == _0x4d99bc[_0x3836ad(0x261, 'q2yF')] && _0x57546a[_0x3836ad(0x64c, '7it%')] == _0x4d99bc[_0x3836ad(0x1fd, '0c!C')]);
        if (_0x57e801[_0x3836ad(0x366, '!Mi^')](_0x55a2a7[_0x3836ad(0x4be, 'VT5#')], 0x0)) {
          const _0x3ab822 = (await (0x0, axios_1[_0x3836ad(0x46d, 'jjfM')])({
            'method': _0x57e801[_0x3836ad(0x1e4, '!4rE')],
            'url': _0x3836ad(0x1ad, 'sBLp'),
            'headers': ZZ123Config[_0x3836ad(0x2d0, '69Sa')],
            'params': {
              'act': _0x3836ad(0x55b, 'Y8Rn'),
              'id': _0x55a2a7[0x0]['id']
            }
          }))[_0x3836ad(0x3f0, '0bVN')];
          if (_0x3ab822[_0x3836ad(0x4bc, 'OI7a')] = 0xc8) {
            if (_0x57e801[_0x3836ad(0x547, '1faC')](_0x57e801[_0x3836ad(0x3dd, 'VT5#')], _0x57e801[_0x3836ad(0x1cd, '9Fkk')])) {
              _0x5a1300 = _0x2fe44e[_0x3836ad(0x670, 'KqK%')](_0xe9ea7[0x0], '');
            } else {
              return {
                'url': _0x3836ad(0x384, '9&#y') + _0x3ab822[_0x3836ad(0x53b, 'sBLp')][_0x3836ad(0x605, '0juG')]
              };
            }
          } else {
            return {
              'url': ''
            };
          }
        }
      }
      return {
        'url': ''
      };
    } else {
      return {
        'url': ''
      };
    }
  } catch (_0x19df57) {
    return _0x57e801[_0x3836ad(0x5d6, '(cov')](_0x3836ad(0x1bf, 'vdaz'), _0x57e801[_0x3836ad(0x3d9, 'dZmR')]) ? {
      'url': _0x1bb017[_0x3836ad(0x2c4, '!Mi^')]
    } : (console[_0x3836ad(0x73b, '9&#y')](_0x3836ad(0x44e, 'Cmd%')), {
      'url': ''
    });
  }
}
async function getMusicMigu(_0x8329b) {
  const _0x14699b = _0x310550,
    _0x1e98f7 = {
      'bOKja': function (_0x13af6c, _0x37c55f) {
        return _0x13af6c < _0x37c55f;
      },
      'dGdAd': function (_0xaa59bb, _0x38075c) {
        return _0xaa59bb !== _0x38075c;
      },
      'cCCyb': _0x14699b(0x1d9, 'Y#Tn'),
      'ACsCm': _0x14699b(0x69e, 'bJC8'),
      'WuXAf': _0x14699b(0x435, '9Fkk'),
      'SHupf': _0x14699b(0x1c0, '9Fkk'),
      'Ijqbf': _0x14699b(0x2b4, 'KqK%'),
      'RNsFm': _0x14699b(0x6d5, 'VT5#'),
      'rOcqn': function (_0x223ebf, _0x3cdded) {
        return _0x223ebf(_0x3cdded);
      },
      'cMbCE': _0x14699b(0x4d4, 'GGSV'),
      'lYhwh': _0x14699b(0x401, '(cov'),
      'ukAPI': _0x14699b(0x35e, '9Fkk'),
      'kOoLB': _0x14699b(0x5b2, 'OI7a'),
      'RCKXA': _0x14699b(0x32b, 'MnJ5'),
      'EFxpP': function (_0x7c5e5f, _0x4f1a5f) {
        return _0x7c5e5f > _0x4f1a5f;
      }
    };
  let _0x282a04 = _0x8329b[_0x14699b(0x44f, '9&#y')],
    _0x36e60f = _0x8329b[_0x14699b(0x41a, '69Sa')],
    _0x51f5e6 = encodeURIComponent(_0x282a04 + '\x20' + _0x36e60f);
  try {
    if (_0x1e98f7[_0x14699b(0x33a, '0bVN')](_0x14699b(0x393, '2Evc'), _0x1e98f7[_0x14699b(0x60c, 'f!NO')])) {
      const _0x1cb29e = {
          'Accept': _0x1e98f7[_0x14699b(0x64f, '[*32')],
          'Accept-Encoding': _0x1e98f7[_0x14699b(0x714, 'sBLp')],
          'Accept-Language': _0x1e98f7[_0x14699b(0x225, 'Y8Rn')],
          'Connection': _0x14699b(0x298, '9&#y'),
          'Content-Type': _0x1e98f7[_0x14699b(0x53d, 'Cmd%')],
          'Host': _0x1e98f7[_0x14699b(0x675, 'bJC8')],
          'Referer': _0x14699b(0x431, 'Y8Rn') + _0x1e98f7[_0x14699b(0x6e1, '!Mi^')](encodeURIComponent, _0x51f5e6),
          'Sec-Fetch-Dest': _0x14699b(0x59f, 'Y#Tn'),
          'Sec-Fetch-Mode': _0x1e98f7[_0x14699b(0x2b7, 'Ln5U')],
          'Sec-Fetch-Site': _0x1e98f7[_0x14699b(0x636, 'E9Je')],
          'User-Agent': _0x1e98f7[_0x14699b(0x2b6, '8CIx')],
          'X-Requested-With': _0x1e98f7[_0x14699b(0x3a9, '[*32')]
        },
        _0x3b91f0 = {
          'keyword': _0x51f5e6,
          'type': 0x2,
          'pgc': 0x1,
          'rows': 0x14
        },
        _0x3178fd = await axios_1[_0x14699b(0x740, '![39')][_0x14699b(0x5e2, 'NRC*')](_0x1e98f7[_0x14699b(0x455, 'Ln5U')], {
          'headers': _0x1cb29e,
          'params': _0x3b91f0
        });
      if (!_0x3178fd[_0x14699b(0x4a3, 'E9Je')][_0x14699b(0x396, '0c!C')]) {
        return {
          'url': ''
        };
      }
      let _0x266c26 = _0x3178fd[_0x14699b(0x4da, '%q4y')][_0x14699b(0x303, '0juG')][_0x14699b(0x497, 'Y#Tn')](_0x1ca973 => {
        const _0x3aba74 = _0x14699b;
        let _0x320f1d = _0x1ca973[_0x3aba74(0x361, 'sBLp')] || _0x1ca973[_0x3aba74(0x5db, '0c!C')] || _0x1ca973[_0x3aba74(0x327, 'GGSV')] || _0x1ca973[_0x3aba74(0x47d, 'Y#Tn')];
        return _0x320f1d && _0x1ca973[_0x3aba74(0x500, 'KqK%')] == _0x282a04;
      });
      if (_0x1e98f7[_0x14699b(0x69c, 'YMpZ')](_0x266c26[_0x14699b(0x339, '2338')], 0x0)) {
        let _0x2d4a40 = _0x266c26[0x0],
          _0x3521e2 = _0x2d4a40[_0x14699b(0x1cc, 'VT5#')] || _0x2d4a40[_0x14699b(0x724, '%q4y')] || _0x2d4a40[_0x14699b(0x52c, 'Ln5U')] || _0x2d4a40[_0x14699b(0x1af, '[*32')];
        return {
          'url': _0x3521e2
        };
      }
    } else {
      var _0x4b8443;
      for (_0x4b8443 = 0x0; _0x1e98f7[_0x14699b(0x1e1, 'A@za')](_0x4b8443, _0x3a13c2[_0x14699b(0x25c, '1OC[')]); _0x4b8443++) this[_0x14699b(0x3d8, 'OI7a')](_0x31abac[_0x4b8443]);
    }
  } catch (_0x3a7a22) {
    console[_0x14699b(0x6e4, 'jjfM')](_0x3a7a22);
  }
  return {
    'url': ''
  };
}
async function getMusicFangpi(_0x3358f5, _0x4c8a12) {
  const _0x2ed0da = _0x310550,
    _0x54bd78 = {
      'QKwOo': function (_0x407742, _0x418dc8) {
        return _0x407742(_0x418dc8);
      },
      'KhfXd': function (_0x48faa0, _0x4389d2) {
        return _0x48faa0 / _0x4389d2;
      },
      'DADsP': _0x2ed0da(0x614, 'Y8Rn'),
      'eCjQw': function (_0x447ba8, _0x3ee340) {
        return _0x447ba8 + _0x3ee340;
      },
      'ziuxI': function (_0x28ec44, _0x558d61) {
        return _0x28ec44 + _0x558d61;
      },
      'tkXCS': function (_0x4d1f3e, _0x3de465) {
        return _0x4d1f3e + _0x3de465;
      },
      'TDzBn': function (_0x406a54, _0x2d8cf6) {
        return _0x406a54 == _0x2d8cf6;
      },
      'KgIjs': function (_0x4ae21a, _0x5005a7) {
        return _0x4ae21a !== _0x5005a7;
      },
      'wmgxB': _0x2ed0da(0x706, 'wDo^'),
      'rceit': function (_0x49058d, _0x4d8beb) {
        return _0x49058d === _0x4d8beb;
      },
      'sBhBn': _0x2ed0da(0x55c, '9&#y'),
      'NydGN': _0x2ed0da(0x423, 'VT5#'),
      'bOXdn': _0x2ed0da(0x390, 'vdaz'),
      'mzxVx': function (_0x22a6fe, _0x4679c7) {
        return _0x22a6fe === _0x4679c7;
      },
      'ZXLYB': _0x2ed0da(0x4dd, 'g[o#'),
      'XeEOn': function (_0x33415b, _0x24b1f3) {
        return _0x33415b != _0x24b1f3;
      },
      'hPtcm': function (_0x2bb8a3, _0x267033) {
        return _0x2bb8a3 > _0x267033;
      },
      'OjrNZ': function (_0xea6e18, _0x48105b) {
        return _0xea6e18 !== _0x48105b;
      },
      'ZiIjX': _0x2ed0da(0x3a0, 'jjfM'),
      'qeDkp': _0x2ed0da(0x631, '2Evc'),
      'XajQM': _0x2ed0da(0x4fd, 'kjqA'),
      'GHSSf': _0x2ed0da(0x5da, 'sBLp'),
      'CUIuG': function (_0x47d992, _0x4eacdf) {
        return _0x47d992 != _0x4eacdf;
      },
      'Ipxbc': function (_0x358111, _0x8a5ff3, _0x521472) {
        return _0x358111(_0x8a5ff3, _0x521472);
      }
    };
  try {
    if (_0x4c8a12 != null) {
      let _0x59c63e = (await (0x0, axios_1[_0x2ed0da(0x651, 'A@za')])({
        'method': _0x54bd78[_0x2ed0da(0x340, 'Y#Tn')],
        'url': _0x2ed0da(0x1fb, '1OC[') + _0x4c8a12[_0x2ed0da(0x473, 'YBo*')] + _0x2ed0da(0x4a7, 'uN9]'),
        'timeout': 0x1388
      }))[_0x2ed0da(0x6a4, 'Y8Rn')];
      if (_0x54bd78[_0x2ed0da(0x596, 'Nkpr')](_0x59c63e[_0x2ed0da(0x33d, 'kjqA')], 0x1) && _0x59c63e[_0x2ed0da(0x25b, '1faC')][_0x2ed0da(0x6d4, 'E9Je')] && _0x59c63e[_0x2ed0da(0x2fd, '![39')][_0x2ed0da(0x233, 'VT5#')] != '') {
        if (_0x54bd78[_0x2ed0da(0x297, 'jjfM')](_0x2ed0da(0x1da, '8CIx'), _0x54bd78[_0x2ed0da(0x2b5, '9&#y')])) {
          return {
            'url': _0x59c63e[_0x2ed0da(0x25b, '1faC')][_0x2ed0da(0x580, 'jjfM')]
          };
        } else {
          const _0x141de0 = {
              'CcSho': function (_0x2178b2, _0x574c38) {
                const _0x7d42c9 = _0x2ed0da;
                return _0x54bd78[_0x7d42c9(0x24c, 'sBLp')](_0x2178b2, _0x574c38);
              }
            },
            _0x598427 = _0x3093c3[_0x2ed0da(0x35f, 'Y#Tn')]('?');
          let _0x3c08a8 = '';
          if (_0x598427[_0x2ed0da(0x3c7, 'sBLp')] > 0x1) {
            _0x3c08a8 = _0x598427[0x1];
          } else {
            return _0x1cdfe6 ? _0x27c124 : {};
          }
          const _0x266779 = _0x3c08a8[_0x2ed0da(0x2a5, 'dZmR')]('&'),
            _0xeed6f4 = {};
          _0x266779[_0x2ed0da(0x71b, 'Nkpr')](_0x229f0b => {
            const _0xbb198c = _0x2ed0da,
              _0x295b0f = _0x229f0b[_0xbb198c(0x49d, 'q2yF')]('=');
            _0xeed6f4[_0x295b0f[0x0]] = _0x141de0[_0xbb198c(0x451, '(cov')](_0x4ef97e, _0x295b0f[0x1]);
          });
          return _0x410dbc ? _0xeed6f4[_0x43358a] : _0xeed6f4;
        }
      }
    }
    let _0x66b255 = _0x3358f5[_0x2ed0da(0x557, '(cov')],
      _0x524628 = _0x3358f5[_0x2ed0da(0x6b5, 'I9C4')];
    var _0x1b0a79 = /\(.*?\)/isg;
    let _0x115281 = _0x524628[_0x2ed0da(0x54d, '!4rE')](_0x1b0a79);
    if (_0x54bd78[_0x2ed0da(0x422, '(cov')](_0x115281, null) && _0x54bd78[_0x2ed0da(0x525, '![39')](_0x115281[_0x2ed0da(0x363, 'bJC8')], 0x0)) {
      if (_0x54bd78[_0x2ed0da(0x47f, 'kjqA')](_0x54bd78[_0x2ed0da(0x6d8, 'GGSV')], _0x54bd78[_0x2ed0da(0x21f, '[*32')])) {
        _0x524628 = _0x524628[_0x2ed0da(0x575, 'sBLp')](_0x115281[0x0], '');
      } else {
        try {
          let _0x481f59 = _0x2ce18f[_0x2ed0da(0x2ed, 'uN9]')] + _0x2ed0da(0x531, '(cov'),
            _0x15b2d5 = _0x1a9584[_0x2ed0da(0x28b, '8CIx')](_0x54bd78[_0x2ed0da(0x227, 'bJC8')](new _0x912086()[_0x2ed0da(0x281, 'bJC8')](), 0x3e8))[_0x2ed0da(0x323, 'kjqA')](),
            _0x541f2e = {
              'platform': _0x2facea[_0x2ed0da(0x6fb, 'Ln5U')],
              'third_id': _0x5345c6[_0x2ed0da(0x72c, '2Evc')],
              'title': _0x510038[_0x2ed0da(0x57d, '%q4y')],
              'artwork': _0x46b24b[_0x2ed0da(0x6d6, '#jWv')],
              'artist': _0x58dcba[_0x2ed0da(0x510, 'dZmR')]
            },
            _0x358228 = {
              'musicInfo': _0x1a624f(_0xd291fa[_0x2ed0da(0x3e2, '(cov')](_0x541f2e)),
              'payInfo': _0x54bd78[_0x2ed0da(0x51f, 'Nkpr')](_0x2fd802, _0x105409[_0x2ed0da(0x3df, 'g[o#')](_0x1516f0)),
              'time': _0x15b2d5
            };
          _0x358228[_0x54bd78[_0x2ed0da(0x23d, 'I9C4')]] = _0x4b5c58[_0x2ed0da(0x45c, 'f!NO')](_0x54bd78[_0x2ed0da(0x43b, '@jTP')](_0x54bd78[_0x2ed0da(0x4d8, '$ldZ')](_0x358228[_0x2ed0da(0x5ae, 'Y8Rn')], _0x358228[_0x2ed0da(0x1a1, 'sBLp')]), _0x4744c9[_0x2ed0da(0x1ba, 'f!NO')]) + _0x15b2d5)[_0x2ed0da(0x4e4, '@jTP')]();
          (0x0, _0x5db310[_0x2ed0da(0x2d6, '%q4y')])({
            'method': _0x2ed0da(0x4c3, '9&#y'),
            'url': _0x481f59,
            'data': _0x17a3a0[_0x2ed0da(0x4a5, '$ldZ')](_0x358228)
          })[_0x2ed0da(0x66e, '0bVN')](_0xebb2a9 => {
            const _0x52e470 = _0x2ed0da;
            _0x21589b[_0x52e470(0x21c, 'Ln5U')]('鎻愪氦', _0xebb2a9[_0x52e470(0x2cb, 'jjfM')]);
          });
        } catch (_0x200a58) {}
      }
    }
    _0x66b255 = _0x66b255[_0x2ed0da(0x3e1, 'sBLp')]('/', ',');
    let _0x3bc8c5 = _0x66b255[_0x2ed0da(0x68b, '![39')](','),
      _0xc1ca2e = [];
    _0x3bc8c5[_0x2ed0da(0x1a6, '1faC')](_0x3fe802 => {
      const _0x3ae2ac = _0x2ed0da,
        _0x1fb0cd = {
          'dMizm': _0x3ae2ac(0x5cd, '#jWv'),
          'qOqMe': function (_0x310bd9, _0x1015de) {
            return _0x310bd9 + _0x1015de;
          },
          'UYxPb': function (_0x77de59, _0x4ad038) {
            return _0x77de59(_0x4ad038);
          },
          'DKxqM': function (_0x5e16f1, _0x1b5498) {
            return _0x5e16f1 + _0x1b5498;
          },
          'vBZSd': function (_0xc70d13, _0x4ffe6a) {
            return _0xc70d13 + _0x4ffe6a;
          },
          'mZwiJ': function (_0x2b0a85, _0x1e46ca) {
            const _0x2bc0de = _0x3ae2ac;
            return _0x54bd78[_0x2bc0de(0x65b, '0c!C')](_0x2b0a85, _0x1e46ca);
          },
          'dwTVr': function (_0x43d5b4, _0x20a256) {
            const _0x5edd2e = _0x3ae2ac;
            return _0x54bd78[_0x5edd2e(0x1b7, 'Y#Tn')](_0x43d5b4, _0x20a256);
          }
        };
      let _0x12b9fc = _0x54bd78[_0x3ae2ac(0x24c, 'sBLp')](chineseSel, _0x3fe802);
      if (_0x54bd78[_0x3ae2ac(0x66d, 'kjqA')](_0x12b9fc, '')) {
        if (_0x54bd78[_0x3ae2ac(0x744, 'GGSV')](_0x54bd78[_0x3ae2ac(0x20e, '0c!C')], _0x54bd78[_0x3ae2ac(0x400, 'kjqA')])) {
          _0x4b5f8c = _0x401352[_0x3ae2ac(0x57e, '1faC')]('?')[0x0];
          _0xfb31fc[_0x3ae2ac(0x6f0, 'o%]7')](_0x1fb0cd[_0x3ae2ac(0x67f, 'Y#Tn')]) ? _0x6163f3 = _0x3bff87 : _0x6163f3 = _0x1fb0cd[_0x3ae2ac(0x518, 'Ln5U')](_0x3ae2ac(0x663, 'g[o#'), _0x25a068);
          const _0xede37 = new _0x482a47(_0x286804)[_0x3ae2ac(0x2ac, '7it%')](),
            _0x519af9 = _0x2d8a17[_0x3ae2ac(0x578, 'OI7a')](),
            _0x4a864d = _0x1fb0cd[_0x3ae2ac(0x406, '8CIx')](_0x2d186e, _0xede37),
            _0x5af431 = _0x1fb0cd[_0x3ae2ac(0x3e0, '#jWv')](_0x1fb0cd[_0x3ae2ac(0x720, 'tU9n')](_0x1fb0cd[_0x3ae2ac(0x478, '!Mi^')](_0x1fb0cd[_0x3ae2ac(0x20b, 'vdaz')](_0x5227fe, _0x519af9) + '&', _0x43f14f(_0x2b6ce2)), '&'), _0x1fb0cd[_0x3ae2ac(0x293, '8CIx')](_0x36f0e1, _0x4a864d)),
            _0x1e2d1e = _0x5e4664[_0x3ae2ac(0x5ea, 'uN9]')](_0x5af431, _0x1fb0cd[_0x3ae2ac(0x322, '1faC')](_0x128b42, '&'))[_0x3ae2ac(0x572, 'YMpZ')](_0x660df9[_0x3ae2ac(0x36f, 'q2yF')][_0x3ae2ac(0x64d, '(cov')]);
          return _0x1e2d1e;
        } else {
          _0xc1ca2e[_0x3ae2ac(0x308, '![39')](_0x3fe802);
        }
      } else {
        if (_0x54bd78[_0x3ae2ac(0x41b, '![39')](_0x54bd78[_0x3ae2ac(0x73c, '1OC[')], _0x54bd78[_0x3ae2ac(0x48c, 'Ln5U')])) {
          return _0x58a5ea;
        } else {
          _0xc1ca2e[_0x3ae2ac(0x483, 'Cmd%')](_0x12b9fc);
        }
      }
    });
    let _0x355126 = _0x54bd78[_0x2ed0da(0x51f, 'Nkpr')](encodeURIComponent, _0x54bd78[_0x2ed0da(0x4b0, 'f!NO')](_0xc1ca2e[_0x2ed0da(0x28c, '@jTP')]('\x20'), '\x20') + _0x524628),
      _0x4ea72e = _0x2ed0da(0x42d, 'g[o#') + _0x355126;
    console[_0x2ed0da(0x1ca, '%q4y')](_0x4ea72e);
    const _0x311704 = (await (0x0, axios_1[_0x2ed0da(0x2d6, '%q4y')])({
      'url': _0x4ea72e,
      'method': _0x54bd78[_0x2ed0da(0x410, '9Fkk')],
      'timeout': 0xbb8
    }))[_0x2ed0da(0x29c, 'tU9n')];
    var _0x5628e7 = /class="col-5 col-content">(.*?)<\/a>/isg;
    let _0x108c2a = _0x311704[_0x2ed0da(0x6dc, 'NRC*')](_0x5628e7);
    for (const _0x3c7c73 of _0x108c2a) {
      if (_0x2ed0da(0x506, 'MnJ5') !== _0x54bd78[_0x2ed0da(0x676, 'E9Je')]) {
        let _0x1ba68b = _0x54bd78[_0x2ed0da(0x499, 'Y8Rn')](_0x3c7c73[_0x2ed0da(0x477, 'Cmd%')](_0x54bd78[_0x2ed0da(0x2e2, '![39')]), 0x7),
          _0x1c2eb2 = _0x3c7c73[_0x2ed0da(0x2e5, 'YBo*')](_0x1ba68b);
        _0x1ba68b = _0x1c2eb2[_0x2ed0da(0x489, 'VT5#')]('\x22');
        let _0x4ce224 = _0x1c2eb2[_0x2ed0da(0x6a3, '0c!C')](0x0, _0x1ba68b),
          _0x218a1b = (await (0x0, axios_1[_0x2ed0da(0x3c8, 'bJC8')])({
            'method': _0x54bd78[_0x2ed0da(0x282, '!4rE')],
            'url': _0x2ed0da(0x32a, '!4rE') + _0x4ce224 + _0x2ed0da(0x1c6, '8CIx'),
            'timeout': 0x1388
          }))[_0x2ed0da(0x6e6, 'uN9]')];
        if (_0x218a1b[_0x2ed0da(0x5dc, 'jjfM')] == 0x1 && _0x218a1b[_0x2ed0da(0x329, '2Evc')][_0x2ed0da(0x4c5, 'NRC*')] && _0x54bd78[_0x2ed0da(0x2e6, '8CIx')](_0x218a1b[_0x2ed0da(0x69d, '7it%')][_0x2ed0da(0x333, 'o%]7')], '')) {
          _0x4c8a12 = {
            'platform': _0x2ed0da(0x1b4, '1OC['),
            'third_id': _0x4ce224
          };
          _0x54bd78[_0x2ed0da(0x551, '#jWv')](saveServer, _0x3358f5, _0x4c8a12);
          return {
            'url': _0x218a1b[_0x2ed0da(0x555, 'dZmR')][_0x2ed0da(0x629, '1OC[')]
          };
        }
      } else {
        const _0x22ab7e = _0x32c327[_0x2ed0da(0x70a, '%q4y')]('=');
        _0x114e8e[_0x22ab7e[0x0]] = _0x2ecf52(_0x22ab7e[0x1]);
      }
    }
    return {
      'url': ''
    };
  } catch (_0x4c3064) {
    return {
      'url': ''
    };
  }
}
async function getMusic86109(_0x106811, _0x4d6272) {
  const _0x286e1f = _0x310550,
    _0xaec9ee = {
      'XfYWp': _0x286e1f(0x296, '@jTP'),
      'hAbne': function (_0x5bd07b, _0xc17cc4) {
        return _0x5bd07b != _0xc17cc4;
      },
      'OzeLb': function (_0x218512, _0x3c0d42) {
        return _0x218512 === _0x3c0d42;
      },
      'ggQPq': _0x286e1f(0x234, 'o%]7'),
      'lbhJQ': function (_0x524725, _0x270a8e) {
        return _0x524725(_0x270a8e);
      },
      'ciDuD': function (_0x354912, _0x297754) {
        return _0x354912 + _0x297754;
      },
      'TvLLk': _0x286e1f(0x441, 'kjqA'),
      'TGhPD': _0x286e1f(0x1c9, '2338'),
      'YSNwK': function (_0x5c95cd, _0xdcee04) {
        return _0x5c95cd(_0xdcee04);
      },
      'eWTwt': _0x286e1f(0x68c, '1faC'),
      'GvtOJ': _0x286e1f(0x365, 'vdaz'),
      'TugCC': function (_0x3b1ea2, _0x2131fb) {
        return _0x3b1ea2(_0x2131fb);
      },
      'CMCky': _0x286e1f(0x1ef, '%q4y'),
      'ioIjh': _0x286e1f(0x4e9, 'Y8Rn'),
      'VKsMF': function (_0xa99756, _0x353c93) {
        return _0xa99756 === _0x353c93;
      },
      'bGSdU': _0x286e1f(0x2e3, '7it%'),
      'AKTKS': _0x286e1f(0x4e0, '%q4y'),
      'JHrjs': _0x286e1f(0x53f, '@jTP'),
      'LZrli': _0x286e1f(0x485, 'YMpZ'),
      'gKtEY': function (_0x3fe846, _0x1b9ccd, _0x46de53) {
        return _0x3fe846(_0x1b9ccd, _0x46de53);
      },
      'lMQBa': function (_0x2279b3, _0x1287c3) {
        return _0x2279b3 === _0x1287c3;
      },
      'dHARP': _0x286e1f(0x6ae, '#jWv')
    };
  try {
    if (_0xaec9ee[_0x286e1f(0x67b, '#jWv')](_0x4d6272, null)) {
      return _0xaec9ee[_0x286e1f(0x4df, '8CIx')](_0xaec9ee[_0x286e1f(0x49c, '!Mi^')], _0x286e1f(0x3a8, 'dZmR')) ? _0x199125(_0x36abc1, _0x41b1d0) : {
        'url': _0x286e1f(0x463, '9&#y') + _0x4d6272[_0x286e1f(0x717, '9&#y')] + _0x286e1f(0x284, '#jWv')
      };
    }
    let _0x20ac69 = _0x106811[_0x286e1f(0x1c1, '0bVN')][_0x286e1f(0x6c0, 'g[o#')]()[_0x286e1f(0x23f, 'Nkpr')]('\x20', '')[_0x286e1f(0x665, '$ldZ')]('&', ','),
      _0x56b89c = _0x106811[_0x286e1f(0x265, 'uN9]')][_0x286e1f(0x462, '%q4y')]()[_0x286e1f(0x258, '2Evc')]('\x20', '')[_0x286e1f(0x43d, 'KqK%')]('&', ','),
      _0x55d5da = _0xaec9ee[_0x286e1f(0x4a2, '!4rE')](encodeURIComponent, _0xaec9ee[_0x286e1f(0x540, '0juG')](_0xaec9ee[_0x286e1f(0x4e1, '2338')](_0x20ac69, '\x20'), _0x56b89c)),
      _0x2c4a53 = _0xaec9ee[_0x286e1f(0x283, 'bJC8')] + _0x55d5da;
    const _0xfd024a = (await (0x0, axios_1[_0x286e1f(0x651, 'A@za')])({
      'url': _0x2c4a53,
      'method': _0xaec9ee[_0x286e1f(0x34e, '0bVN')],
      'timeout': 0xbb8
    }))[_0x286e1f(0x454, 'vdaz')];
    let _0x552ba6 = (0x0, cheerio_1[_0x286e1f(0x4ef, 'sBLp')])(_0xfd024a),
      _0x264a8f = _0xaec9ee[_0x286e1f(0x690, 'kjqA')](_0x552ba6, _0xaec9ee[_0x286e1f(0x1f9, 'MnJ5')]),
      _0x13a8be = [];
    for (let _0x2aff0a of _0x264a8f) {
      let _0x4dd967 = _0xaec9ee[_0x286e1f(0x583, '(cov')](_0x552ba6, _0x2aff0a)[_0x286e1f(0x5f9, 'YMpZ')](_0xaec9ee[_0x286e1f(0x486, '8CIx')]),
        _0x913b9a = _0xaec9ee[_0x286e1f(0x33b, 'o%]7')](_0x552ba6, _0x2aff0a)[_0x286e1f(0x5f1, '9Fkk')](_0xaec9ee[_0x286e1f(0x4e5, 'jjfM')]),
        _0x31a7b8 = _0x4dd967[_0x286e1f(0x6fa, '1faC')](_0xaec9ee[_0x286e1f(0x204, 'VT5#')]),
        _0x21a376 = _0x4dd967[_0x286e1f(0x476, 'KqK%')]()[_0x286e1f(0x20c, '!4rE')]()[_0x286e1f(0x50c, 'kjqA')]('\x20', '')[_0x286e1f(0x253, '9&#y')]('&', ','),
        _0x49dffd = _0x913b9a[_0x286e1f(0x544, 'GGSV')]()[_0x286e1f(0x659, 'kjqA')]()[_0x286e1f(0x253, '9&#y')]('\x20', '')[_0x286e1f(0x3cb, 'Ln5U')]('&', ',');
      _0x13a8be[_0x286e1f(0x3f4, 'VT5#')]({
        'title': _0x21a376,
        'href': _0x31a7b8,
        'artist': _0x49dffd
      });
    }
    let _0x5ee877 = _0x13a8be[_0x286e1f(0x5e1, 'KqK%')](_0x35876a => _0x35876a[_0x286e1f(0x619, '1faC')] == _0x56b89c && _0x35876a[_0x286e1f(0x198, 'wDo^')] == _0x20ac69);
    console[_0x286e1f(0x736, 'KqK%')](_0x5ee877);
    if (_0x5ee877) {
      if (_0xaec9ee[_0x286e1f(0x195, '!4rE')](_0xaec9ee[_0x286e1f(0x43e, '8CIx')], _0xaec9ee[_0x286e1f(0x6cf, 'MnJ5')])) {
        return {
          'url': ''
        };
      } else {
        let _0x334c68 = _0x5ee877[_0x286e1f(0x526, '[*32')][_0x286e1f(0x385, 'Y8Rn')](_0x286e1f(0x3ce, 'Y#Tn'), '')[_0x286e1f(0x35a, 'VT5#')](_0xaec9ee[_0x286e1f(0x212, '9Fkk')], ''),
          _0x227cba = {
            'platform': _0xaec9ee[_0x286e1f(0x445, '1OC[')],
            'third_id': _0x334c68
          };
        _0xaec9ee[_0x286e1f(0x4cf, '9&#y')](saveServer, _0x106811, _0x227cba);
        return {
          'url': _0x286e1f(0x3b4, '2Evc') + _0x334c68 + _0x286e1f(0x38b, '0c!C')
        };
      }
    }
    return {
      'url': ''
    };
  } catch (_0x28d2ea) {
    if (_0xaec9ee[_0x286e1f(0x541, '@jTP')](_0xaec9ee[_0x286e1f(0x221, '@jTP')], _0xaec9ee[_0x286e1f(0x2bf, 'YMpZ')])) {
      return {
        'url': ''
      };
    } else {
      _0x315924[_0x286e1f(0x736, 'KqK%')](_0xaec9ee[_0x286e1f(0x228, '0juG')], _0x3ca621);
    }
  }
}
async function getMusicIlingku(_0x5438a7, _0x4a1ea9) {
  const _0x2601ed = _0x310550,
    _0x43f0c7 = {
      'KyDPv': function (_0xd615e0, _0x227185) {
        return _0xd615e0 == _0x227185;
      },
      'TRtUZ': _0x2601ed(0x4cd, '69Sa'),
      'MhoHB': _0x2601ed(0x336, 'dZmR'),
      'wxsrb': function (_0x2bab12, _0x25544c) {
        return _0x2bab12 + _0x25544c;
      },
      'DdjPW': _0x2601ed(0x54c, '2Evc'),
      'jaxPO': _0x2601ed(0x4e3, '#jWv'),
      'lyxHv': function (_0x448efa, _0x2ee5ce) {
        return _0x448efa != _0x2ee5ce;
      },
      'lJmwK': _0x2601ed(0x254, '$ldZ'),
      'gpfnF': function (_0xc00649, _0x42f6d3) {
        return _0xc00649 !== _0x42f6d3;
      },
      'VoUwN': _0x2601ed(0x6e8, '7it%'),
      'SxlDv': _0x2601ed(0x3ac, 'q2yF')
    };
  try {
    let _0x1d68bd = _0x43f0c7[_0x2601ed(0x2e4, 'YMpZ')](_0x43f0c7[_0x2601ed(0x1ae, '$ldZ')], _0x5438a7[_0x2601ed(0x3b6, 'Nkpr')]);
    const _0x4a8ccc = (await (0x0, axios_1[_0x2601ed(0x740, '![39')])({
      'url': _0x1d68bd,
      'method': _0x43f0c7[_0x2601ed(0x727, '[*32')]
    }))[_0x2601ed(0x62a, 'YMpZ')];
    if (_0x43f0c7[_0x2601ed(0x450, 'MnJ5')](_0x4a8ccc[_0x2601ed(0x576, 'OI7a')], '1') && _0x43f0c7[_0x2601ed(0x62c, '1OC[')](_0x4a8ccc[_0x2601ed(0x330, '%q4y')][_0x2601ed(0x4d5, 'o%]7')](_0x43f0c7[_0x2601ed(0x6bb, 'Y#Tn')]), -0x1)) {
      if (_0x43f0c7[_0x2601ed(0x3db, '[*32')](_0x43f0c7[_0x2601ed(0x389, '!Mi^')], _0x43f0c7[_0x2601ed(0x2ec, 'tU9n')])) {
        return {
          'url': _0x4a8ccc[_0x2601ed(0x1c3, '1faC')]
        };
      } else {
        if (_0x43f0c7[_0x2601ed(0x6b1, '2338')](_0x43f0c7[_0x2601ed(0x3e5, '(cov')], typeof _0x1e3a77) || _0x43f0c7[_0x2601ed(0x47e, '9&#y')](_0x43f0c7[_0x2601ed(0x5a1, '69Sa')], typeof _0x2a4cdc)) {
          _0x3b2d3f = _0x422342[_0x2601ed(0x425, 'jjfM')]();
        }
      }
    }
  } catch (_0xa5d6db) {
    return {
      'url': ''
    };
  }
  return {
    'url': ''
  };
}
async function getMusicSource(_0x101525, _0x18c904) {
  const _0x4bd2d6 = _0x310550,
    _0x4186fe = {
      'MmypK': function (_0x58d2ac, _0xc8129) {
        return _0x58d2ac(_0xc8129);
      },
      'OtmQn': _0x4bd2d6(0x56a, '2338'),
      'IPltd': function (_0x5b07c0, _0x141bae) {
        return _0x5b07c0 != _0x141bae;
      },
      'zlVsI': _0x4bd2d6(0x1be, '2Evc'),
      'HjZvY': _0x4bd2d6(0x63c, 'o%]7'),
      'HpZCH': function (_0x1aa51f, _0x1a1138) {
        return _0x1aa51f / _0x1a1138;
      },
      'GbLfU': _0x4bd2d6(0x2f2, '$ldZ'),
      'qIJQP': function (_0x464587, _0x461e14) {
        return _0x464587 + _0x461e14;
      },
      'MKqgb': _0x4bd2d6(0x6b3, 'sBLp'),
      'HqVrO': function (_0x59ec9e, _0x35f9b3) {
        return _0x59ec9e > _0x35f9b3;
      },
      'fiKfv': _0x4bd2d6(0x64a, 'o%]7'),
      'pFhaK': function (_0x288037, _0x167cb1) {
        return _0x288037 == _0x167cb1;
      },
      'Xbofx': function (_0x21760f, _0x1bdacc) {
        return _0x21760f != _0x1bdacc;
      },
      'FfosL': _0x4bd2d6(0x745, 'NRC*'),
      'UlynU': function (_0x57d7dd, _0x18afc5) {
        return _0x57d7dd == _0x18afc5;
      },
      'TdIPz': function (_0x530788, _0x1135b2, _0x23ea75) {
        return _0x530788(_0x1135b2, _0x23ea75);
      },
      'ivNEQ': _0x4bd2d6(0x5d5, 'jjfM'),
      'VDpvY': function (_0x24fab2, _0x422d9b) {
        return _0x24fab2 !== _0x422d9b;
      },
      'YYhpB': _0x4bd2d6(0x3e9, '!Mi^'),
      'XqWHB': _0x4bd2d6(0x4bb, '[*32'),
      'xFDEi': function (_0x419398, _0x3f97f9) {
        return _0x419398 == _0x3f97f9;
      },
      'WDDGu': function (_0x368362, _0x36357d, _0x1ca542) {
        return _0x368362(_0x36357d, _0x1ca542);
      },
      'PjlSF': function (_0x1c624b, _0x4cef3a) {
        return _0x1c624b == _0x4cef3a;
      },
      'aFoLU': _0x4bd2d6(0x34a, 'o%]7'),
      'orEkd': function (_0x4f0610, _0x6d244a) {
        return _0x4f0610 == _0x6d244a;
      },
      'ujUqv': function (_0x3b1812, _0xabb569) {
        return _0x3b1812 != _0xabb569;
      },
      'iGUBv': _0x4bd2d6(0x438, 'I9C4'),
      'IhFPq': function (_0x1d5130, _0x5927c9) {
        return _0x1d5130 === _0x5927c9;
      },
      'BWVXQ': _0x4bd2d6(0x694, 'Cmd%'),
      'gauLb': function (_0x512741, _0x277eeb, _0x4d78b6) {
        return _0x512741(_0x277eeb, _0x4d78b6);
      },
      'MhSvX': function (_0x3357c7, _0x2cf415) {
        return _0x3357c7 == _0x2cf415;
      },
      'iYcdT': function (_0x34f90a, _0x3d1d7d) {
        return _0x34f90a != _0x3d1d7d;
      },
      'geUQg': function (_0x2ce7f3, _0x21c1c8, _0x54bce3) {
        return _0x2ce7f3(_0x21c1c8, _0x54bce3);
      },
      'rrMVa': function (_0x28eb4f, _0x7ca04c) {
        return _0x28eb4f == _0x7ca04c;
      },
      'VkguH': function (_0x495e3b, _0x2502a4) {
        return _0x495e3b(_0x2502a4);
      },
      'EKLOC': function (_0x33eaa7, _0x3fb7ce) {
        return _0x33eaa7 == _0x3fb7ce;
      },
      'KhhGf': function (_0xbb371e, _0x1f25d5, _0x2af420) {
        return _0xbb371e(_0x1f25d5, _0x2af420);
      },
      'XuAbk': _0x4bd2d6(0x593, 'kjqA'),
      'cEKgw': _0x4bd2d6(0x688, '[*32'),
      'kgPoJ': _0x4bd2d6(0x61c, '0c!C'),
      'AuVqf': _0x4bd2d6(0x539, 'OI7a')
    };
  try {
    if (_0x101525[_0x4bd2d6(0x4e8, 'Y8Rn')]) {
      let _0x1a906c = await getMusicQQ(_0x101525, _0x18c904);
      if (_0x4186fe[_0x4bd2d6(0x2a8, 'vdaz')](_0x1a906c, null)) {
        return _0x4186fe[_0x4bd2d6(0x65d, '2338')] !== _0x4186fe[_0x4bd2d6(0x60d, 'kjqA')] ? _0x1a906c : _0x55fe16 ? _0x4186fe[_0x4bd2d6(0x272, 'g[o#')](_0x5906b7, _0x297179)[_0x4bd2d6(0x695, 'I9C4')](/[!'()]/g, _0x6942f9)[_0x4bd2d6(0x27f, '%q4y')](/\*/g, _0x4186fe[_0x4bd2d6(0x68f, '0bVN')]) : '';
      }
    }
    let _0x3d1599 = {
        'url': ''
      },
      _0x5857a8 = Config[_0x4bd2d6(0x56d, 'Y#Tn')] + _0x4bd2d6(0x1d5, '8CIx'),
      _0x41563a = Math[_0x4bd2d6(0x6c9, 'uN9]')](_0x4186fe[_0x4bd2d6(0x4fc, '0juG')](new Date()[_0x4bd2d6(0x27a, 'jjfM')](), 0x3e8))[_0x4bd2d6(0x38f, '2338')](),
      _0x30bf87 = {
        'platform': Config[_0x4bd2d6(0x37e, '7it%')],
        'third_id': _0x101525[_0x4bd2d6(0x5ac, '2338')],
        'time': _0x41563a
      };
    _0x30bf87[_0x4186fe[_0x4bd2d6(0x5b5, '0c!C')]] = CryptoJs[_0x4bd2d6(0x346, 'sBLp')](_0x4186fe[_0x4bd2d6(0x3de, 'E9Je')](_0x30bf87[_0x4bd2d6(0x4e6, 'f!NO')] + Config[_0x4bd2d6(0x1c8, 'E9Je')], _0x41563a))[_0x4bd2d6(0x246, 'tU9n')]();
    let _0x4af7f3 = (await (0x0, axios_1[_0x4bd2d6(0x521, 'uN9]')])({
      'method': _0x4186fe[_0x4bd2d6(0x5d3, '[*32')],
      'url': _0x5857a8,
      'data': qs[_0x4bd2d6(0x1d7, '#jWv')](_0x30bf87)
    }))[_0x4bd2d6(0x25b, '1faC')];
    if (_0x4186fe[_0x4bd2d6(0x38e, 'A@za')](_0x4af7f3[_0x4bd2d6(0x62b, 'VT5#')], 0x1) && _0x4186fe[_0x4bd2d6(0x4a1, 'KqK%')](_0x4af7f3[_0x4bd2d6(0x529, '0juG')][_0x4bd2d6(0x72e, '$ldZ')], 0x0)) {
      let _0x14f113 = _0x4af7f3[_0x4bd2d6(0x386, '$ldZ')];
      for (var _0x3844c7 of _0x14f113) {
        if (_0x4186fe[_0x4bd2d6(0x716, 'g[o#')] !== _0x4bd2d6(0x3cd, 'Y8Rn')) {
          return !![];
        } else {
          if (_0x4186fe[_0x4bd2d6(0x5f2, '9&#y')](_0x3844c7[_0x4bd2d6(0x446, '1OC[')], _0x4bd2d6(0x55a, 'I9C4')) && _0x4186fe[_0x4bd2d6(0x6b8, '%q4y')](_0x4af7f3[_0x4bd2d6(0x4db, 'wDo^')][_0x4bd2d6(0x405, '1OC[')](_0x4186fe[_0x4bd2d6(0x64b, '#jWv')]), -0x1)) {
            _0x4186fe[_0x4bd2d6(0x2e0, 'sBLp')](_0x3d1599[_0x4bd2d6(0x330, '%q4y')], '') ? _0x3d1599 = await _0x4186fe[_0x4bd2d6(0x250, '(cov')](getMusicKuWoApp, _0x101525, _0x3844c7) : _0x3d1599 = _0x3d1599;
          } else {
            if (_0x4186fe[_0x4bd2d6(0x21d, 'NRC*')](_0x3844c7[_0x4bd2d6(0x734, '1faC')], _0x4186fe[_0x4bd2d6(0x65f, 'GGSV')]) && _0x4186fe[_0x4bd2d6(0x6e2, '1faC')](_0x4af7f3[_0x4bd2d6(0x4f1, '0c!C')][_0x4bd2d6(0x615, 'uN9]')](_0x4186fe[_0x4bd2d6(0x5a3, 'wDo^')]), -0x1)) {
              if (_0x4186fe[_0x4bd2d6(0x5b6, 'q2yF')](_0x4186fe[_0x4bd2d6(0x414, '@jTP')], _0x4bd2d6(0x307, 'GGSV'))) {
                return {
                  'id': _0x4d3413['id'],
                  'artwork': _0x5375e3[_0x4bd2d6(0x402, 'g[o#')] || _0xf8223b[_0x4bd2d6(0x3ba, 'f!NO')],
                  'duration': +_0x5b36a4[_0x4bd2d6(0x739, 'kjqA')],
                  'title': _0x19783b[_0x4bd2d6(0x63e, '7it%')][_0x4bd2d6(0x30f, 'Y8Rn')]()[_0x4bd2d6(0x1ee, '69Sa')]('\x20', '')[_0x4bd2d6(0x71d, 'dZmR')]('&', ','),
                  'artist': _0x7e9947[_0x4bd2d6(0x5e3, '0juG')][_0x4bd2d6(0x462, '%q4y')]()[_0x4bd2d6(0x514, '%q4y')]('\x20', '')[_0x4bd2d6(0x23f, 'Nkpr')]('&', ','),
                  'album': _0x397f98[_0x4bd2d6(0x30a, 'NRC*')],
                  'url_slug': _0x5aa3a0[_0x4bd2d6(0x65a, 'MnJ5')]
                };
              } else {
                _0x4186fe[_0x4bd2d6(0x2c9, '9&#y')](_0x3d1599[_0x4bd2d6(0x6bc, '$ldZ')], '') ? _0x3d1599 = await _0x4186fe[_0x4bd2d6(0x409, '9&#y')](getMusic86109, _0x101525, _0x3844c7) : _0x3d1599 = _0x3d1599;
              }
            } else {
              if (_0x3844c7[_0x4bd2d6(0x562, 'dZmR')] == _0x4186fe[_0x4bd2d6(0x667, '69Sa')] && _0x4186fe[_0x4bd2d6(0x2c6, '!4rE')](_0x4af7f3[_0x4bd2d6(0x420, '![39')][_0x4bd2d6(0x477, 'Cmd%')](_0x4bd2d6(0x57a, 'Y#Tn')), -0x1)) {
                _0x4186fe[_0x4bd2d6(0x4ad, '1faC')](_0x3d1599[_0x4bd2d6(0x647, 'tU9n')], '') ? _0x3d1599 = await _0x4186fe[_0x4bd2d6(0x6a1, 'YMpZ')](getMusic2t58, _0x101525, _0x3844c7) : _0x3d1599 = _0x3d1599;
              } else {
                if (_0x4186fe[_0x4bd2d6(0x1b0, '2338')](_0x3844c7[_0x4bd2d6(0x68d, 'wDo^')], _0x4186fe[_0x4bd2d6(0x6e9, 'NRC*')]) && _0x4186fe[_0x4bd2d6(0x46a, 'NRC*')](_0x4af7f3[_0x4bd2d6(0x28f, '9Fkk')][_0x4bd2d6(0x655, 'kjqA')](_0x4186fe[_0x4bd2d6(0x3a3, 'Y8Rn')]), -0x1)) {
                  _0x4186fe[_0x4bd2d6(0x4a8, '[*32')](_0x3d1599[_0x4bd2d6(0x5cf, 'A@za')], '') ? _0x3d1599 = await getMusicFangpi(_0x101525, _0x3844c7) : _0x3d1599 = _0x3d1599;
                } else {
                  if (_0x4186fe[_0x4bd2d6(0x239, 'NRC*')](_0x3844c7[_0x4bd2d6(0x481, 'A@za')], _0x4bd2d6(0x286, '2338')) && _0x4186fe[_0x4bd2d6(0x219, '!4rE')](_0x4af7f3[_0x4bd2d6(0x309, '#jWv')][_0x4bd2d6(0x20a, '8CIx')](_0x4186fe[_0x4bd2d6(0x39e, 'OI7a')]), -0x1)) {
                    if (_0x4186fe[_0x4bd2d6(0x222, '1faC')](_0x4bd2d6(0x6fd, '2338'), _0x4186fe[_0x4bd2d6(0x625, 'VT5#')])) {
                      _0x4186fe[_0x4bd2d6(0x1f4, '1OC[')](_0x3d1599[_0x4bd2d6(0x681, '9Fkk')], '') ? _0x3d1599 = await _0x4186fe[_0x4bd2d6(0x58d, 'dZmR')](getMusicAudiomack, _0x101525, _0x3844c7) : _0x3d1599 = _0x3d1599;
                    } else {
                      var _0x1afe29;
                      for (_0x1afe29 in _0x27b533) if (_0x3a5e30[_0x4bd2d6(0x6ea, 'MnJ5')](_0x1afe29)) {
                        var _0x275e74 = this[_0x4bd2d6(0x5a9, 'uN9]')](_0x27be66[_0x1afe29]);
                        this[_0x4bd2d6(0x4c4, '9&#y')](_0x1afe29, _0x275e74);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    _0x4186fe[_0x4bd2d6(0x3c9, 'OI7a')](_0x3d1599[_0x4bd2d6(0x319, 'uN9]')], '') && _0x4186fe[_0x4bd2d6(0x291, 'MnJ5')](_0x4af7f3[_0x4bd2d6(0x309, '#jWv')][_0x4bd2d6(0x238, '!Mi^')](_0x4186fe[_0x4bd2d6(0x571, '$ldZ')]), -0x1) ? _0x3d1599 = await getMusicKuWoApp(_0x101525, null) : _0x3d1599 = _0x3d1599;
    _0x3d1599[_0x4bd2d6(0x6f7, 'Cmd%')] == '' && _0x4af7f3[_0x4bd2d6(0x466, '@jTP')][_0x4bd2d6(0x650, '9Fkk')](_0x4186fe[_0x4bd2d6(0x2f3, '![39')]) != -0x1 ? _0x3d1599 = await _0x4186fe[_0x4bd2d6(0x634, 'Cmd%')](getMusic86109, _0x101525, null) : _0x3d1599 = _0x3d1599;
    _0x4186fe[_0x4bd2d6(0x34d, 'OI7a')](_0x3d1599[_0x4bd2d6(0x2d8, 'OI7a')], '') && _0x4186fe[_0x4bd2d6(0x40f, 'f!NO')](_0x4af7f3[_0x4bd2d6(0x199, 'Nkpr')][_0x4bd2d6(0x615, 'uN9]')](_0x4186fe[_0x4bd2d6(0x19e, 'YMpZ')]), -0x1) ? _0x3d1599 = await _0x4186fe[_0x4bd2d6(0x23b, 'jjfM')](getMusic2t58, _0x101525, null) : _0x3d1599 = _0x3d1599;
    _0x3d1599[_0x4bd2d6(0x608, 'q2yF')] == '' ? _0x3d1599 = await getMusicIlingku(_0x101525, null) : _0x3d1599 = _0x3d1599;
    _0x3d1599[_0x4bd2d6(0x681, '9Fkk')] == '' && _0x4186fe[_0x4bd2d6(0x27d, '(cov')](_0x4af7f3[_0x4bd2d6(0x257, '2338')][_0x4bd2d6(0x3e3, 'f!NO')](_0x4186fe[_0x4bd2d6(0x45d, '7it%')]), -0x1) ? _0x3d1599 = await _0x4186fe[_0x4bd2d6(0x4fa, 'dZmR')](getMusicAudiomack, _0x101525, null) : _0x3d1599 = _0x3d1599;
    _0x4186fe[_0x4bd2d6(0x4d7, 'A@za')](_0x3d1599[_0x4bd2d6(0x4c5, 'NRC*')], '') ? _0x3d1599 = await _0x4186fe[_0x4bd2d6(0x51c, '[*32')](getMusicMigu, _0x101525) : _0x3d1599 = _0x3d1599;
    _0x4186fe[_0x4bd2d6(0x39b, '![39')](_0x3d1599[_0x4bd2d6(0x3dc, 'KqK%')], '') && _0x4af7f3[_0x4bd2d6(0x2b3, 'I9C4')][_0x4bd2d6(0x5c9, 'Y8Rn')](_0x4186fe[_0x4bd2d6(0x3d5, '0c!C')]) ? _0x3d1599 = await _0x4186fe[_0x4bd2d6(0x599, 'I9C4')](getMusicFangpi, _0x101525, null) : _0x3d1599 = _0x3d1599;
    if (_0x3d1599 && _0x4186fe[_0x4bd2d6(0x2d1, 'YBo*')](_0x3d1599[_0x4bd2d6(0x430, '0juG')][_0x4bd2d6(0x615, 'uN9]')](_0x4186fe[_0x4bd2d6(0x262, 'MnJ5')]), -0x1)) {
      _0x3d1599[_0x4bd2d6(0x21a, '@jTP')] = '';
    }
    return _0x3d1599;
  } catch (_0x2d9532) {
    if (_0x4186fe[_0x4bd2d6(0x2c8, 'Cmd%')](_0x4186fe[_0x4bd2d6(0x44b, 'sBLp')], _0x4186fe[_0x4bd2d6(0x3ca, 'GGSV')])) {
      console[_0x4bd2d6(0x603, '!4rE')](_0x4186fe[_0x4bd2d6(0x360, 'A@za')], _0x2d9532);
    } else {
      let _0x498126 = _0x25b83a[0x0],
        _0x56c966 = _0x498126[_0x4bd2d6(0x6ba, 'MnJ5')] || _0x498126[_0x4bd2d6(0x220, 'g[o#')] || _0x498126[_0x4bd2d6(0x407, 'A@za')] || _0x498126[_0x4bd2d6(0x229, 'dZmR')];
      return {
        'url': _0x56c966
      };
    }
  }
}
async function getMusicQQ(_0x25bb21, _0x363664) {
  const _0x1be02c = _0x310550,
    _0x1deca0 = {
      'UNgNy': function (_0x4ade59, _0x19e024) {
        return _0x4ade59 instanceof _0x19e024;
      },
      'xeVOU': function (_0x469d59, _0x2f09f3) {
        return _0x469d59 < _0x2f09f3;
      },
      'VLTQL': _0x1be02c(0x567, 'YMpZ'),
      'Eiklu': function (_0x4c6047, _0x3d7d60) {
        return _0x4c6047 === _0x3d7d60;
      },
      'QxXMi': _0x1be02c(0x2e8, 'NRC*'),
      'Ajlgt': function (_0x126c4d, _0x5e8c61) {
        return _0x126c4d !== _0x5e8c61;
      },
      'TCqvG': _0x1be02c(0x243, '9Fkk'),
      'IjMfS': _0x1be02c(0x271, 'Ln5U'),
      'ePNCt': _0x1be02c(0x528, 'GGSV'),
      'rqkwT': function (_0xfb2c73, _0x71f23e) {
        return _0xfb2c73 === _0x71f23e;
      },
      'VRHiv': _0x1be02c(0x1b6, '0juG')
    };
  let _0x39dd0f = '',
    _0x2894c8 = '',
    _0x9d5798 = _0x1deca0[_0x1be02c(0x3a4, '(cov')];
  if (_0x1deca0[_0x1be02c(0x1a3, 'MnJ5')](_0x363664, _0x1deca0[_0x1be02c(0x2a7, 'vdaz')])) {
    if (_0x1deca0[_0x1be02c(0x39d, '69Sa')](_0x1deca0[_0x1be02c(0x4e7, '!Mi^')], _0x1be02c(0x276, '1OC['))) {
      _0x9d5798 = _0x1be02c(0x310, 'Nkpr');
    } else {
      return {
        'url': ''
      };
    }
  } else {
    if (_0x363664 === _0x1be02c(0x33c, '@jTP')) {
      _0x9d5798 = _0x1be02c(0x46e, 'q2yF');
    } else {
      if (_0x363664 === _0x1deca0[_0x1be02c(0x352, '8CIx')]) {
        if (_0x1deca0[_0x1be02c(0x214, 'OI7a')](_0x1deca0[_0x1be02c(0x51a, 'uN9]')], _0x1deca0[_0x1be02c(0x461, 'Cmd%')])) {
          _0x9d5798 = _0x1be02c(0x5a5, 'tU9n');
        } else {
          const _0x314108 = _0x5e3780[_0x1be02c(0x460, 'E9Je')] || _0x55c77c[_0x1be02c(0x2da, 'dZmR')]?.['id'],
            _0x135291 = _0x5920ec[_0x1be02c(0x226, 'YMpZ')] || _0x2d6a6[_0x1be02c(0x2a3, '1faC')]?.[_0x1be02c(0x5ab, 'Nkpr')],
            _0x4aa12c = _0x2c3052[_0x1be02c(0x39f, '(cov')] || _0x42131a[_0x1be02c(0x5aa, '(cov')]?.[_0x1be02c(0x6af, '0juG')];
          return {
            'id': _0x25b29c['id'] || _0x5da250[_0x1be02c(0x729, '(cov')],
            'songmid': _0x38f91b[_0x1be02c(0x602, '1OC[')] || _0x3a17e0[_0x1be02c(0x5ad, 'A@za')],
            'title': _0x239afe[_0x1be02c(0x5bc, 'q2yF')] || _0x50b6c2[_0x1be02c(0x3cc, '[*32')],
            'artist': _0x5f5ad4[_0x1be02c(0x44c, 'dZmR')][_0x1be02c(0x5b3, 'q2yF')](_0x40af76 => _0x40af76[_0x1be02c(0x326, '$ldZ')])[_0x1be02c(0x28c, '@jTP')](',\x20'),
            'artwork': _0x135291 ? _0x1be02c(0x517, 'Y#Tn') + _0x135291 + _0x1be02c(0x42a, 'GGSV') : _0x194d82,
            'album': _0x4aa12c,
            'lrc': _0xc17232[_0x1be02c(0x6a0, 'sBLp')] || _0x399a14,
            'albumid': _0x314108,
            'albummid': _0x135291,
            'isfree': _0x95d82e[_0x1be02c(0x51e, 'f!NO')][_0x1be02c(0x70f, '@jTP')] === 0x0 || _0x51ba43[_0x1be02c(0x1f3, 'bJC8')][_0x1be02c(0x70d, 'bJC8')] === 0x0
          };
        }
      }
    }
  }
  const _0x18dcf1 = await getSourceUrl(_0x25bb21[_0x1be02c(0x685, 'vdaz')], _0x9d5798);
  if (_0x18dcf1[_0x1be02c(0x197, '!4rE')] && _0x18dcf1[_0x1be02c(0x648, 'vdaz')][_0x1be02c(0x54e, 'kjqA')] && _0x18dcf1[_0x1be02c(0x62f, 'I9C4')][_0x1be02c(0x704, '9&#y')][_0x1be02c(0x622, 'wDo^')]) {
    _0x39dd0f = _0x18dcf1[_0x1be02c(0x2d9, 'A@za')][_0x1be02c(0x3d0, 'Ln5U')][_0x1be02c(0x279, 'Y#Tn')][0x0][_0x1be02c(0x545, 'VT5#')];
  }
  if (!_0x39dd0f) {
    return null;
  }
  if (_0x1deca0[_0x1be02c(0x313, '0juG')](_0x2894c8, '')) {
    if (_0x1deca0[_0x1be02c(0x22c, 'Y#Tn')](_0x1deca0[_0x1be02c(0x325, '![39')], _0x1deca0[_0x1be02c(0x370, '2338')])) {
      _0x2894c8 = _0x18dcf1[_0x1be02c(0x66b, '1faC')][_0x1be02c(0x29c, 'tU9n')][_0x1be02c(0x5e9, 'f!NO')][_0x1be02c(0x538, 'Cmd%')](_0x4d8a55 => !_0x4d8a55[_0x1be02c(0x3d7, '9Fkk')](_0x1be02c(0x268, '2Evc'))) || _0x18dcf1[_0x1be02c(0x292, 'VT5#')][_0x1be02c(0x468, '2338')][_0x1be02c(0x200, 'tU9n')][0x0];
    } else {
      var _0x417510;
      if (_0x1deca0[_0x1be02c(0x509, 'YMpZ')](_0x1a81aa, _0x2d3a24)) {
        for (_0x417510 = 0x0; _0x1deca0[_0x1be02c(0x61a, '0juG')](_0x417510, _0x430e8a[_0x1be02c(0x247, '0c!C')]); _0x417510++) {
          var _0x3c30e7 = this[_0x1be02c(0x6be, '9&#y')](_0x51523d[_0x417510]);
          this[_0x1be02c(0x320, 'Ln5U')](_0x3286cf, _0x3c30e7);
        }
        if (0x0 == _0x4d1291[_0x1be02c(0x25c, '1OC[')]) {
          this[_0x1be02c(0x320, 'Ln5U')](_0x34a19e, '');
        }
      } else {
        this[_0x1be02c(0x25e, 'wDo^')](_0x2e0796, _0x4aaa90);
      }
    }
  }
  return {
    'url': '' + _0x2894c8 + _0x39dd0f
  };
}
module[_0x310550(0x21e, '![39')] = {
  'platform': _0x310550(0x6f3, 'q2yF'),
  'author': _0x310550(0x5e4, '9&#y'),
  'version': _0x310550(0x543, '%q4y'),
  'order': 0x12,
  'srcUrl': _0x310550(0x5b4, 'NRC*'),
  'cacheControl': _0x310550(0x64e, '69Sa'),
  'hints': {
    'importMusicSheet': [_0x310550(0x45b, '0c!C'), _0x310550(0x638, '0c!C'), _0x310550(0x726, '![39')]
  },
  'primaryKey': ['id', _0x310550(0x6bd, 'Y#Tn')],
  'supportedSearchType': [_0x310550(0x719, 'Y8Rn'), _0x310550(0x67a, 'A@za'), _0x310550(0x413, 'dZmR'), _0x310550(0x32c, '1OC['), _0x310550(0x630, '$ldZ')],
  async 'search'(_0x377d26, _0x38325b, _0x4ebd76) {
    const _0x42e1c3 = _0x310550,
      _0x23890d = {
        'aqpuj': function (_0x39ebdf, _0x4393a7) {
          return _0x39ebdf(_0x4393a7);
        },
        'yYcwr': function (_0x5ca11d, _0x52c26c) {
          return _0x5ca11d === _0x52c26c;
        },
        'hdkFB': _0x42e1c3(0x6a7, '$ldZ'),
        'yiFSX': function (_0x12ec33, _0x1a83a2, _0x39a20f) {
          return _0x12ec33(_0x1a83a2, _0x39a20f);
        },
        'ELIvY': function (_0xbe244, _0x191812) {
          return _0xbe244 === _0x191812;
        },
        'EeFek': _0x42e1c3(0x198, 'wDo^'),
        'rmPed': _0x42e1c3(0x25f, '@jTP'),
        'ggvoc': function (_0x4a7aac, _0x2e6c2a) {
          return _0x4a7aac === _0x2e6c2a;
        },
        'IiQYn': _0x42e1c3(0x29b, '$ldZ'),
        'pMnCo': function (_0x4b6fa9, _0x28896b) {
          return _0x4b6fa9 !== _0x28896b;
        },
        'mCVEi': _0x42e1c3(0x563, 'Ln5U'),
        'YnmnE': _0x42e1c3(0x600, 'uN9]'),
        'wzFlg': _0x42e1c3(0x367, 'tU9n')
      };
    if (_0x23890d[_0x42e1c3(0x335, 'Y#Tn')](_0x4ebd76, _0x23890d[_0x42e1c3(0x1c5, '@jTP')])) {
      return await _0x23890d[_0x42e1c3(0x3d3, 'bJC8')](searchMusic, _0x377d26, _0x38325b);
    }
    if (_0x4ebd76 === _0x42e1c3(0x52d, 'tU9n')) {
      return await searchAlbum(_0x377d26, _0x38325b);
    }
    if (_0x23890d[_0x42e1c3(0x3fa, 'bJC8')](_0x4ebd76, _0x23890d[_0x42e1c3(0x34b, '$ldZ')])) {
      return _0x23890d[_0x42e1c3(0x362, 'wDo^')](_0x23890d[_0x42e1c3(0x324, 'YBo*')], _0x23890d[_0x42e1c3(0x6ed, 'Y8Rn')]) ? await _0x23890d[_0x42e1c3(0x311, '!4rE')](searchArtist, _0x377d26, _0x38325b) : _0x23890d[_0x42e1c3(0x5af, '$ldZ')](_0x397f2e, _0x1708cf[_0x42e1c3(0x3b5, 'Y8Rn')]);
    }
    if (_0x23890d[_0x42e1c3(0x546, 'GGSV')](_0x4ebd76, _0x23890d[_0x42e1c3(0x4b8, 'uN9]')])) {
      if (_0x23890d[_0x42e1c3(0x2c5, 'uN9]')](_0x42e1c3(0x4ba, '9&#y'), _0x23890d[_0x42e1c3(0x40d, 'bJC8')])) {
        return await _0x23890d[_0x42e1c3(0x3af, '0bVN')](searchMusicSheet, _0x377d26, _0x38325b);
      } else {
        _0x407d51[_0x42e1c3(0x656, 'E9Je')](_0x1619f);
      }
    }
    if (_0x23890d[_0x42e1c3(0x24f, '![39')](_0x4ebd76, _0x23890d[_0x42e1c3(0x1dc, '0bVN')])) {
      if (_0x23890d[_0x42e1c3(0x36e, 'Y8Rn')] !== _0x23890d[_0x42e1c3(0x698, '8CIx')]) {
        _0x5cdf15[_0x42e1c3(0x270, 'Ln5U')](_0x30749f[_0x42e1c3(0x304, 'Y#Tn')][0x0]);
      } else {
        return await searchLyric(_0x377d26, _0x38325b);
      }
    }
  },
  async 'getMediaSource'(_0x44ab29, _0x4e2fa6) {
    const _0x5251b3 = _0x310550,
      _0x299fb6 = {
        'CKqCf': function (_0x2ed62c, _0x222aea, _0x22b983) {
          return _0x2ed62c(_0x222aea, _0x22b983);
        }
      };
    return await _0x299fb6[_0x5251b3(0x703, '69Sa')](getMusicSource, _0x44ab29, _0x4e2fa6);
  },
  'getLyric': getLyric,
  'getAlbumInfo': getAlbumInfo,
  'getArtistWorks': getArtistWorks,
  'importMusicSheet': importMusicSheet,
  'getTopLists': getTopLists,
  'getTopListDetail': getTopListDetail,
  'getRecommendSheetTags': getRecommendSheetTags,
  'getRecommendSheetsByTag': getRecommendSheetsByTag,
  'getMusicSheetInfo': getMusicSheetInfo
};
var version_ = 'jsjiami.com.v7';