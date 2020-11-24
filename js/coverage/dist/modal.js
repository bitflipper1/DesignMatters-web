/*!
  * Bootstrap modal.js v4.5.3 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Modal = factory(global.jQuery, global.Util));
}(this, (function ($, Util) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var Util__default = /*#__PURE__*/_interopDefaultLegacy(Util);

  function cov_a00hz9t35() {
    var path = "/Users/mattmcglothlin/Desktop/DesignMatt-ers-Web/bootstrap-4.5.3/js/src/modal.js";
    var hash = "c69f7c41d365b682a3cef81a9fc15b869f07679d";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Users/mattmcglothlin/Desktop/DesignMatt-ers-Web/bootstrap-4.5.3/js/src/modal.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 13
          },
          end: {
            line: 17,
            column: 20
          }
        },
        "1": {
          start: {
            line: 18,
            column: 16
          },
          end: {
            line: 18,
            column: 23
          }
        },
        "2": {
          start: {
            line: 19,
            column: 17
          },
          end: {
            line: 19,
            column: 27
          }
        },
        "3": {
          start: {
            line: 20,
            column: 18
          },
          end: {
            line: 20,
            column: 32
          }
        },
        "4": {
          start: {
            line: 21,
            column: 21
          },
          end: {
            line: 21,
            column: 32
          }
        },
        "5": {
          start: {
            line: 22,
            column: 27
          },
          end: {
            line: 22,
            column: 37
          }
        },
        "6": {
          start: {
            line: 23,
            column: 23
          },
          end: {
            line: 23,
            column: 25
          }
        },
        "7": {
          start: {
            line: 25,
            column: 16
          },
          end: {
            line: 30,
            column: 1
          }
        },
        "8": {
          start: {
            line: 32,
            column: 20
          },
          end: {
            line: 37,
            column: 1
          }
        },
        "9": {
          start: {
            line: 39,
            column: 19
          },
          end: {
            line: 39,
            column: 37
          }
        },
        "10": {
          start: {
            line: 40,
            column: 29
          },
          end: {
            line: 40,
            column: 56
          }
        },
        "11": {
          start: {
            line: 41,
            column: 21
          },
          end: {
            line: 41,
            column: 41
          }
        },
        "12": {
          start: {
            line: 42,
            column: 19
          },
          end: {
            line: 42,
            column: 37
          }
        },
        "13": {
          start: {
            line: 43,
            column: 20
          },
          end: {
            line: 43,
            column: 39
          }
        },
        "14": {
          start: {
            line: 44,
            column: 22
          },
          end: {
            line: 44,
            column: 43
          }
        },
        "15": {
          start: {
            line: 45,
            column: 21
          },
          end: {
            line: 45,
            column: 41
          }
        },
        "16": {
          start: {
            line: 46,
            column: 28
          },
          end: {
            line: 46,
            column: 55
          }
        },
        "17": {
          start: {
            line: 47,
            column: 30
          },
          end: {
            line: 47,
            column: 59
          }
        },
        "18": {
          start: {
            line: 48,
            column: 30
          },
          end: {
            line: 48,
            column: 59
          }
        },
        "19": {
          start: {
            line: 49,
            column: 32
          },
          end: {
            line: 49,
            column: 63
          }
        },
        "20": {
          start: {
            line: 50,
            column: 29
          },
          end: {
            line: 50,
            column: 63
          }
        },
        "21": {
          start: {
            line: 52,
            column: 30
          },
          end: {
            line: 52,
            column: 55
          }
        },
        "22": {
          start: {
            line: 53,
            column: 38
          },
          end: {
            line: 53,
            column: 63
          }
        },
        "23": {
          start: {
            line: 54,
            column: 28
          },
          end: {
            line: 54,
            column: 44
          }
        },
        "24": {
          start: {
            line: 55,
            column: 24
          },
          end: {
            line: 55,
            column: 36
          }
        },
        "25": {
          start: {
            line: 56,
            column: 24
          },
          end: {
            line: 56,
            column: 30
          }
        },
        "26": {
          start: {
            line: 57,
            column: 24
          },
          end: {
            line: 57,
            column: 30
          }
        },
        "27": {
          start: {
            line: 58,
            column: 26
          },
          end: {
            line: 58,
            column: 40
          }
        },
        "28": {
          start: {
            line: 60,
            column: 24
          },
          end: {
            line: 60,
            column: 39
          }
        },
        "29": {
          start: {
            line: 61,
            column: 28
          },
          end: {
            line: 61,
            column: 41
          }
        },
        "30": {
          start: {
            line: 62,
            column: 29
          },
          end: {
            line: 62,
            column: 52
          }
        },
        "31": {
          start: {
            line: 63,
            column: 30
          },
          end: {
            line: 63,
            column: 54
          }
        },
        "32": {
          start: {
            line: 64,
            column: 31
          },
          end: {
            line: 64,
            column: 82
          }
        },
        "33": {
          start: {
            line: 65,
            column: 32
          },
          end: {
            line: 65,
            column: 45
          }
        },
        "34": {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 75,
            column: 42
          }
        },
        "35": {
          start: {
            line: 76,
            column: 4
          },
          end: {
            line: 76,
            column: 27
          }
        },
        "36": {
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 77,
            column: 57
          }
        },
        "37": {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 78,
            column: 25
          }
        },
        "38": {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 79,
            column: 25
          }
        },
        "39": {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 80,
            column: 35
          }
        },
        "40": {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 81,
            column: 37
          }
        },
        "41": {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 82,
            column: 33
          }
        },
        "42": {
          start: {
            line: 83,
            column: 4
          },
          end: {
            line: 83,
            column: 28
          }
        },
        "43": {
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 89,
            column: 18
          }
        },
        "44": {
          start: {
            line: 93,
            column: 4
          },
          end: {
            line: 93,
            column: 18
          }
        },
        "45": {
          start: {
            line: 99,
            column: 4
          },
          end: {
            line: 99,
            column: 65
          }
        },
        "46": {
          start: {
            line: 103,
            column: 4
          },
          end: {
            line: 105,
            column: 5
          }
        },
        "47": {
          start: {
            line: 104,
            column: 6
          },
          end: {
            line: 104,
            column: 12
          }
        },
        "48": {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 109,
            column: 5
          }
        },
        "49": {
          start: {
            line: 108,
            column: 6
          },
          end: {
            line: 108,
            column: 34
          }
        },
        "50": {
          start: {
            line: 111,
            column: 22
          },
          end: {
            line: 113,
            column: 6
          }
        },
        "51": {
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 115,
            column: 39
          }
        },
        "52": {
          start: {
            line: 117,
            column: 4
          },
          end: {
            line: 119,
            column: 5
          }
        },
        "53": {
          start: {
            line: 118,
            column: 6
          },
          end: {
            line: 118,
            column: 12
          }
        },
        "54": {
          start: {
            line: 121,
            column: 4
          },
          end: {
            line: 121,
            column: 24
          }
        },
        "55": {
          start: {
            line: 123,
            column: 4
          },
          end: {
            line: 123,
            column: 26
          }
        },
        "56": {
          start: {
            line: 124,
            column: 4
          },
          end: {
            line: 124,
            column: 24
          }
        },
        "57": {
          start: {
            line: 126,
            column: 4
          },
          end: {
            line: 126,
            column: 24
          }
        },
        "58": {
          start: {
            line: 128,
            column: 4
          },
          end: {
            line: 128,
            column: 26
          }
        },
        "59": {
          start: {
            line: 129,
            column: 4
          },
          end: {
            line: 129,
            column: 26
          }
        },
        "60": {
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 135,
            column: 5
          }
        },
        "61": {
          start: {
            line: 134,
            column: 15
          },
          end: {
            line: 134,
            column: 31
          }
        },
        "62": {
          start: {
            line: 137,
            column: 4
          },
          end: {
            line: 143,
            column: 6
          }
        },
        "63": {
          start: {
            line: 138,
            column: 6
          },
          end: {
            line: 142,
            column: 8
          }
        },
        "64": {
          start: {
            line: 139,
            column: 8
          },
          end: {
            line: 141,
            column: 9
          }
        },
        "65": {
          start: {
            line: 140,
            column: 10
          },
          end: {
            line: 140,
            column: 42
          }
        },
        "66": {
          start: {
            line: 145,
            column: 4
          },
          end: {
            line: 145,
            column: 62
          }
        },
        "67": {
          start: {
            line: 145,
            column: 29
          },
          end: {
            line: 145,
            column: 61
          }
        },
        "68": {
          start: {
            line: 149,
            column: 4
          },
          end: {
            line: 151,
            column: 5
          }
        },
        "69": {
          start: {
            line: 150,
            column: 6
          },
          end: {
            line: 150,
            column: 28
          }
        },
        "70": {
          start: {
            line: 153,
            column: 4
          },
          end: {
            line: 155,
            column: 5
          }
        },
        "71": {
          start: {
            line: 154,
            column: 6
          },
          end: {
            line: 154,
            column: 12
          }
        },
        "72": {
          start: {
            line: 157,
            column: 22
          },
          end: {
            line: 157,
            column: 41
          }
        },
        "73": {
          start: {
            line: 159,
            column: 4
          },
          end: {
            line: 159,
            column: 39
          }
        },
        "74": {
          start: {
            line: 161,
            column: 4
          },
          end: {
            line: 163,
            column: 5
          }
        },
        "75": {
          start: {
            line: 162,
            column: 6
          },
          end: {
            line: 162,
            column: 12
          }
        },
        "76": {
          start: {
            line: 165,
            column: 4
          },
          end: {
            line: 165,
            column: 25
          }
        },
        "77": {
          start: {
            line: 166,
            column: 23
          },
          end: {
            line: 166,
            column: 65
          }
        },
        "78": {
          start: {
            line: 168,
            column: 4
          },
          end: {
            line: 170,
            column: 5
          }
        },
        "79": {
          start: {
            line: 169,
            column: 6
          },
          end: {
            line: 169,
            column: 34
          }
        },
        "80": {
          start: {
            line: 172,
            column: 4
          },
          end: {
            line: 172,
            column: 26
          }
        },
        "81": {
          start: {
            line: 173,
            column: 4
          },
          end: {
            line: 173,
            column: 26
          }
        },
        "82": {
          start: {
            line: 175,
            column: 4
          },
          end: {
            line: 175,
            column: 34
          }
        },
        "83": {
          start: {
            line: 177,
            column: 4
          },
          end: {
            line: 177,
            column: 49
          }
        },
        "84": {
          start: {
            line: 179,
            column: 4
          },
          end: {
            line: 179,
            column: 45
          }
        },
        "85": {
          start: {
            line: 180,
            column: 4
          },
          end: {
            line: 180,
            column: 48
          }
        },
        "86": {
          start: {
            line: 182,
            column: 4
          },
          end: {
            line: 190,
            column: 5
          }
        },
        "87": {
          start: {
            line: 183,
            column: 33
          },
          end: {
            line: 183,
            column: 85
          }
        },
        "88": {
          start: {
            line: 185,
            column: 6
          },
          end: {
            line: 187,
            column: 49
          }
        },
        "89": {
          start: {
            line: 186,
            column: 43
          },
          end: {
            line: 186,
            column: 65
          }
        },
        "90": {
          start: {
            line: 189,
            column: 6
          },
          end: {
            line: 189,
            column: 23
          }
        },
        "91": {
          start: {
            line: 194,
            column: 4
          },
          end: {
            line: 195,
            column: 60
          }
        },
        "92": {
          start: {
            line: 195,
            column: 30
          },
          end: {
            line: 195,
            column: 59
          }
        },
        "93": {
          start: {
            line: 202,
            column: 4
          },
          end: {
            line: 202,
            column: 34
          }
        },
        "94": {
          start: {
            line: 204,
            column: 4
          },
          end: {
            line: 204,
            column: 41
          }
        },
        "95": {
          start: {
            line: 206,
            column: 4
          },
          end: {
            line: 206,
            column: 23
          }
        },
        "96": {
          start: {
            line: 207,
            column: 4
          },
          end: {
            line: 207,
            column: 24
          }
        },
        "97": {
          start: {
            line: 208,
            column: 4
          },
          end: {
            line: 208,
            column: 23
          }
        },
        "98": {
          start: {
            line: 209,
            column: 4
          },
          end: {
            line: 209,
            column: 25
          }
        },
        "99": {
          start: {
            line: 210,
            column: 4
          },
          end: {
            line: 210,
            column: 24
          }
        },
        "100": {
          start: {
            line: 211,
            column: 4
          },
          end: {
            line: 211,
            column: 34
          }
        },
        "101": {
          start: {
            line: 212,
            column: 4
          },
          end: {
            line: 212,
            column: 36
          }
        },
        "102": {
          start: {
            line: 213,
            column: 4
          },
          end: {
            line: 213,
            column: 32
          }
        },
        "103": {
          start: {
            line: 214,
            column: 4
          },
          end: {
            line: 214,
            column: 31
          }
        },
        "104": {
          start: {
            line: 218,
            column: 4
          },
          end: {
            line: 218,
            column: 24
          }
        },
        "105": {
          start: {
            line: 224,
            column: 4
          },
          end: {
            line: 227,
            column: 5
          }
        },
        "106": {
          start: {
            line: 228,
            column: 4
          },
          end: {
            line: 228,
            column: 51
          }
        },
        "107": {
          start: {
            line: 229,
            column: 4
          },
          end: {
            line: 229,
            column: 17
          }
        },
        "108": {
          start: {
            line: 233,
            column: 4
          },
          end: {
            line: 265,
            column: 5
          }
        },
        "109": {
          start: {
            line: 234,
            column: 33
          },
          end: {
            line: 234,
            column: 62
          }
        },
        "110": {
          start: {
            line: 236,
            column: 6
          },
          end: {
            line: 236,
            column: 50
          }
        },
        "111": {
          start: {
            line: 237,
            column: 6
          },
          end: {
            line: 239,
            column: 7
          }
        },
        "112": {
          start: {
            line: 238,
            column: 8
          },
          end: {
            line: 238,
            column: 14
          }
        },
        "113": {
          start: {
            line: 241,
            column: 33
          },
          end: {
            line: 241,
            column: 99
          }
        },
        "114": {
          start: {
            line: 243,
            column: 6
          },
          end: {
            line: 245,
            column: 7
          }
        },
        "115": {
          start: {
            line: 244,
            column: 8
          },
          end: {
            line: 244,
            column: 48
          }
        },
        "116": {
          start: {
            line: 247,
            column: 6
          },
          end: {
            line: 247,
            column: 52
          }
        },
        "117": {
          start: {
            line: 249,
            column: 38
          },
          end: {
            line: 249,
            column: 89
          }
        },
        "118": {
          start: {
            line: 250,
            column: 6
          },
          end: {
            line: 250,
            column: 47
          }
        },
        "119": {
          start: {
            line: 252,
            column: 6
          },
          end: {
            line: 261,
            column: 54
          }
        },
        "120": {
          start: {
            line: 253,
            column: 8
          },
          end: {
            line: 253,
            column: 57
          }
        },
        "121": {
          start: {
            line: 254,
            column: 8
          },
          end: {
            line: 259,
            column: 9
          }
        },
        "122": {
          start: {
            line: 255,
            column: 10
          },
          end: {
            line: 258,
            column: 73
          }
        },
        "123": {
          start: {
            line: 256,
            column: 12
          },
          end: {
            line: 256,
            column: 46
          }
        },
        "124": {
          start: {
            line: 262,
            column: 6
          },
          end: {
            line: 262,
            column: 27
          }
        },
        "125": {
          start: {
            line: 264,
            column: 6
          },
          end: {
            line: 264,
            column: 17
          }
        },
        "126": {
          start: {
            line: 269,
            column: 23
          },
          end: {
            line: 269,
            column: 65
          }
        },
        "127": {
          start: {
            line: 270,
            column: 22
          },
          end: {
            line: 270,
            column: 91
          }
        },
        "128": {
          start: {
            line: 272,
            column: 4
          },
          end: {
            line: 276,
            column: 5
          }
        },
        "129": {
          start: {
            line: 275,
            column: 6
          },
          end: {
            line: 275,
            column: 46
          }
        },
        "130": {
          start: {
            line: 278,
            column: 4
          },
          end: {
            line: 278,
            column: 41
          }
        },
        "131": {
          start: {
            line: 279,
            column: 4
          },
          end: {
            line: 279,
            column: 48
          }
        },
        "132": {
          start: {
            line: 280,
            column: 4
          },
          end: {
            line: 280,
            column: 50
          }
        },
        "133": {
          start: {
            line: 281,
            column: 4
          },
          end: {
            line: 281,
            column: 48
          }
        },
        "134": {
          start: {
            line: 283,
            column: 4
          },
          end: {
            line: 287,
            column: 5
          }
        },
        "135": {
          start: {
            line: 284,
            column: 6
          },
          end: {
            line: 284,
            column: 29
          }
        },
        "136": {
          start: {
            line: 286,
            column: 6
          },
          end: {
            line: 286,
            column: 33
          }
        },
        "137": {
          start: {
            line: 289,
            column: 4
          },
          end: {
            line: 291,
            column: 5
          }
        },
        "138": {
          start: {
            line: 290,
            column: 6
          },
          end: {
            line: 290,
            column: 32
          }
        },
        "139": {
          start: {
            line: 293,
            column: 4
          },
          end: {
            line: 293,
            column: 46
          }
        },
        "140": {
          start: {
            line: 295,
            column: 4
          },
          end: {
            line: 297,
            column: 5
          }
        },
        "141": {
          start: {
            line: 296,
            column: 6
          },
          end: {
            line: 296,
            column: 26
          }
        },
        "142": {
          start: {
            line: 299,
            column: 23
          },
          end: {
            line: 301,
            column: 6
          }
        },
        "143": {
          start: {
            line: 303,
            column: 31
          },
          end: {
            line: 310,
            column: 5
          }
        },
        "144": {
          start: {
            line: 304,
            column: 6
          },
          end: {
            line: 306,
            column: 7
          }
        },
        "145": {
          start: {
            line: 305,
            column: 8
          },
          end: {
            line: 305,
            column: 29
          }
        },
        "146": {
          start: {
            line: 308,
            column: 6
          },
          end: {
            line: 308,
            column: 35
          }
        },
        "147": {
          start: {
            line: 309,
            column: 6
          },
          end: {
            line: 309,
            column: 42
          }
        },
        "148": {
          start: {
            line: 312,
            column: 4
          },
          end: {
            line: 320,
            column: 5
          }
        },
        "149": {
          start: {
            line: 313,
            column: 33
          },
          end: {
            line: 313,
            column: 84
          }
        },
        "150": {
          start: {
            line: 315,
            column: 6
          },
          end: {
            line: 317,
            column: 49
          }
        },
        "151": {
          start: {
            line: 319,
            column: 6
          },
          end: {
            line: 319,
            column: 26
          }
        },
        "152": {
          start: {
            line: 324,
            column: 4
          },
          end: {
            line: 332,
            column: 8
          }
        },
        "153": {
          start: {
            line: 327,
            column: 8
          },
          end: {
            line: 331,
            column: 9
          }
        },
        "154": {
          start: {
            line: 330,
            column: 10
          },
          end: {
            line: 330,
            column: 31
          }
        },
        "155": {
          start: {
            line: 336,
            column: 4
          },
          end: {
            line: 347,
            column: 5
          }
        },
        "156": {
          start: {
            line: 337,
            column: 6
          },
          end: {
            line: 344,
            column: 8
          }
        },
        "157": {
          start: {
            line: 338,
            column: 8
          },
          end: {
            line: 343,
            column: 9
          }
        },
        "158": {
          start: {
            line: 339,
            column: 10
          },
          end: {
            line: 339,
            column: 32
          }
        },
        "159": {
          start: {
            line: 340,
            column: 10
          },
          end: {
            line: 340,
            column: 21
          }
        },
        "160": {
          start: {
            line: 341,
            column: 15
          },
          end: {
            line: 343,
            column: 9
          }
        },
        "161": {
          start: {
            line: 342,
            column: 10
          },
          end: {
            line: 342,
            column: 43
          }
        },
        "162": {
          start: {
            line: 345,
            column: 11
          },
          end: {
            line: 347,
            column: 5
          }
        },
        "163": {
          start: {
            line: 346,
            column: 6
          },
          end: {
            line: 346,
            column: 49
          }
        },
        "164": {
          start: {
            line: 351,
            column: 4
          },
          end: {
            line: 355,
            column: 5
          }
        },
        "165": {
          start: {
            line: 352,
            column: 6
          },
          end: {
            line: 352,
            column: 67
          }
        },
        "166": {
          start: {
            line: 352,
            column: 42
          },
          end: {
            line: 352,
            column: 66
          }
        },
        "167": {
          start: {
            line: 354,
            column: 6
          },
          end: {
            line: 354,
            column: 33
          }
        },
        "168": {
          start: {
            line: 359,
            column: 4
          },
          end: {
            line: 359,
            column: 40
          }
        },
        "169": {
          start: {
            line: 360,
            column: 4
          },
          end: {
            line: 360,
            column: 51
          }
        },
        "170": {
          start: {
            line: 361,
            column: 4
          },
          end: {
            line: 361,
            column: 47
          }
        },
        "171": {
          start: {
            line: 362,
            column: 4
          },
          end: {
            line: 362,
            column: 41
          }
        },
        "172": {
          start: {
            line: 363,
            column: 4
          },
          end: {
            line: 363,
            column: 33
          }
        },
        "173": {
          start: {
            line: 364,
            column: 4
          },
          end: {
            line: 369,
            column: 6
          }
        },
        "174": {
          start: {
            line: 365,
            column: 6
          },
          end: {
            line: 365,
            column: 51
          }
        },
        "175": {
          start: {
            line: 366,
            column: 6
          },
          end: {
            line: 366,
            column: 30
          }
        },
        "176": {
          start: {
            line: 367,
            column: 6
          },
          end: {
            line: 367,
            column: 28
          }
        },
        "177": {
          start: {
            line: 368,
            column: 6
          },
          end: {
            line: 368,
            column: 44
          }
        },
        "178": {
          start: {
            line: 373,
            column: 4
          },
          end: {
            line: 376,
            column: 5
          }
        },
        "179": {
          start: {
            line: 374,
            column: 6
          },
          end: {
            line: 374,
            column: 32
          }
        },
        "180": {
          start: {
            line: 375,
            column: 6
          },
          end: {
            line: 375,
            column: 27
          }
        },
        "181": {
          start: {
            line: 380,
            column: 20
          },
          end: {
            line: 381,
            column: 26
          }
        },
        "182": {
          start: {
            line: 383,
            column: 4
          },
          end: {
            line: 447,
            column: 5
          }
        },
        "183": {
          start: {
            line: 384,
            column: 6
          },
          end: {
            line: 384,
            column: 52
          }
        },
        "184": {
          start: {
            line: 385,
            column: 6
          },
          end: {
            line: 385,
            column: 52
          }
        },
        "185": {
          start: {
            line: 387,
            column: 6
          },
          end: {
            line: 389,
            column: 7
          }
        },
        "186": {
          start: {
            line: 388,
            column: 8
          },
          end: {
            line: 388,
            column: 45
          }
        },
        "187": {
          start: {
            line: 391,
            column: 6
          },
          end: {
            line: 391,
            column: 47
          }
        },
        "188": {
          start: {
            line: 393,
            column: 6
          },
          end: {
            line: 404,
            column: 8
          }
        },
        "189": {
          start: {
            line: 394,
            column: 8
          },
          end: {
            line: 397,
            column: 9
          }
        },
        "190": {
          start: {
            line: 395,
            column: 10
          },
          end: {
            line: 395,
            column: 43
          }
        },
        "191": {
          start: {
            line: 396,
            column: 10
          },
          end: {
            line: 396,
            column: 16
          }
        },
        "192": {
          start: {
            line: 399,
            column: 8
          },
          end: {
            line: 401,
            column: 9
          }
        },
        "193": {
          start: {
            line: 400,
            column: 10
          },
          end: {
            line: 400,
            column: 16
          }
        },
        "194": {
          start: {
            line: 403,
            column: 8
          },
          end: {
            line: 403,
            column: 41
          }
        },
        "195": {
          start: {
            line: 406,
            column: 6
          },
          end: {
            line: 408,
            column: 7
          }
        },
        "196": {
          start: {
            line: 407,
            column: 8
          },
          end: {
            line: 407,
            column: 35
          }
        },
        "197": {
          start: {
            line: 410,
            column: 6
          },
          end: {
            line: 410,
            column: 49
          }
        },
        "198": {
          start: {
            line: 412,
            column: 6
          },
          end: {
            line: 414,
            column: 7
          }
        },
        "199": {
          start: {
            line: 413,
            column: 8
          },
          end: {
            line: 413,
            column: 14
          }
        },
        "200": {
          start: {
            line: 416,
            column: 6
          },
          end: {
            line: 419,
            column: 7
          }
        },
        "201": {
          start: {
            line: 417,
            column: 8
          },
          end: {
            line: 417,
            column: 18
          }
        },
        "202": {
          start: {
            line: 418,
            column: 8
          },
          end: {
            line: 418,
            column: 14
          }
        },
        "203": {
          start: {
            line: 421,
            column: 41
          },
          end: {
            line: 421,
            column: 94
          }
        },
        "204": {
          start: {
            line: 423,
            column: 6
          },
          end: {
            line: 425,
            column: 57
          }
        },
        "205": {
          start: {
            line: 426,
            column: 11
          },
          end: {
            line: 447,
            column: 5
          }
        },
        "206": {
          start: {
            line: 427,
            column: 6
          },
          end: {
            line: 427,
            column: 52
          }
        },
        "207": {
          start: {
            line: 429,
            column: 29
          },
          end: {
            line: 434,
            column: 7
          }
        },
        "208": {
          start: {
            line: 430,
            column: 8
          },
          end: {
            line: 430,
            column: 30
          }
        },
        "209": {
          start: {
            line: 431,
            column: 8
          },
          end: {
            line: 433,
            column: 9
          }
        },
        "210": {
          start: {
            line: 432,
            column: 10
          },
          end: {
            line: 432,
            column: 20
          }
        },
        "211": {
          start: {
            line: 436,
            column: 6
          },
          end: {
            line: 444,
            column: 7
          }
        },
        "212": {
          start: {
            line: 437,
            column: 43
          },
          end: {
            line: 437,
            column: 96
          }
        },
        "213": {
          start: {
            line: 439,
            column: 8
          },
          end: {
            line: 441,
            column: 59
          }
        },
        "214": {
          start: {
            line: 443,
            column: 8
          },
          end: {
            line: 443,
            column: 24
          }
        },
        "215": {
          start: {
            line: 445,
            column: 11
          },
          end: {
            line: 447,
            column: 5
          }
        },
        "216": {
          start: {
            line: 446,
            column: 6
          },
          end: {
            line: 446,
            column: 16
          }
        },
        "217": {
          start: {
            line: 456,
            column: 31
          },
          end: {
            line: 456,
            column: 97
          }
        },
        "218": {
          start: {
            line: 458,
            column: 4
          },
          end: {
            line: 460,
            column: 5
          }
        },
        "219": {
          start: {
            line: 459,
            column: 6
          },
          end: {
            line: 459,
            column: 67
          }
        },
        "220": {
          start: {
            line: 462,
            column: 4
          },
          end: {
            line: 464,
            column: 5
          }
        },
        "221": {
          start: {
            line: 463,
            column: 6
          },
          end: {
            line: 463,
            column: 68
          }
        },
        "222": {
          start: {
            line: 468,
            column: 4
          },
          end: {
            line: 468,
            column: 40
          }
        },
        "223": {
          start: {
            line: 469,
            column: 4
          },
          end: {
            line: 469,
            column: 41
          }
        },
        "224": {
          start: {
            line: 473,
            column: 17
          },
          end: {
            line: 473,
            column: 54
          }
        },
        "225": {
          start: {
            line: 474,
            column: 4
          },
          end: {
            line: 474,
            column: 84
          }
        },
        "226": {
          start: {
            line: 475,
            column: 4
          },
          end: {
            line: 475,
            column: 52
          }
        },
        "227": {
          start: {
            line: 479,
            column: 4
          },
          end: {
            line: 509,
            column: 5
          }
        },
        "228": {
          start: {
            line: 482,
            column: 27
          },
          end: {
            line: 482,
            column: 91
          }
        },
        "229": {
          start: {
            line: 483,
            column: 28
          },
          end: {
            line: 483,
            column: 93
          }
        },
        "230": {
          start: {
            line: 486,
            column: 6
          },
          end: {
            line: 492,
            column: 8
          }
        },
        "231": {
          start: {
            line: 487,
            column: 30
          },
          end: {
            line: 487,
            column: 56
          }
        },
        "232": {
          start: {
            line: 488,
            column: 34
          },
          end: {
            line: 488,
            column: 65
          }
        },
        "233": {
          start: {
            line: 489,
            column: 8
          },
          end: {
            line: 491,
            column: 92
          }
        },
        "234": {
          start: {
            line: 495,
            column: 6
          },
          end: {
            line: 501,
            column: 8
          }
        },
        "235": {
          start: {
            line: 496,
            column: 29
          },
          end: {
            line: 496,
            column: 54
          }
        },
        "236": {
          start: {
            line: 497,
            column: 33
          },
          end: {
            line: 497,
            column: 63
          }
        },
        "237": {
          start: {
            line: 498,
            column: 8
          },
          end: {
            line: 500,
            column: 90
          }
        },
        "238": {
          start: {
            line: 504,
            column: 28
          },
          end: {
            line: 504,
            column: 60
          }
        },
        "239": {
          start: {
            line: 505,
            column: 32
          },
          end: {
            line: 505,
            column: 69
          }
        },
        "240": {
          start: {
            line: 506,
            column: 6
          },
          end: {
            line: 508,
            column: 90
          }
        },
        "241": {
          start: {
            line: 511,
            column: 4
          },
          end: {
            line: 511,
            column: 46
          }
        },
        "242": {
          start: {
            line: 516,
            column: 25
          },
          end: {
            line: 516,
            column: 89
          }
        },
        "243": {
          start: {
            line: 517,
            column: 4
          },
          end: {
            line: 521,
            column: 6
          }
        },
        "244": {
          start: {
            line: 518,
            column: 22
          },
          end: {
            line: 518,
            column: 54
          }
        },
        "245": {
          start: {
            line: 519,
            column: 6
          },
          end: {
            line: 519,
            column: 44
          }
        },
        "246": {
          start: {
            line: 520,
            column: 6
          },
          end: {
            line: 520,
            column: 57
          }
        },
        "247": {
          start: {
            line: 524,
            column: 21
          },
          end: {
            line: 524,
            column: 91
          }
        },
        "248": {
          start: {
            line: 525,
            column: 4
          },
          end: {
            line: 530,
            column: 6
          }
        },
        "249": {
          start: {
            line: 526,
            column: 21
          },
          end: {
            line: 526,
            column: 52
          }
        },
        "250": {
          start: {
            line: 527,
            column: 6
          },
          end: {
            line: 529,
            column: 7
          }
        },
        "251": {
          start: {
            line: 528,
            column: 8
          },
          end: {
            line: 528,
            column: 73
          }
        },
        "252": {
          start: {
            line: 533,
            column: 20
          },
          end: {
            line: 533,
            column: 58
          }
        },
        "253": {
          start: {
            line: 534,
            column: 4
          },
          end: {
            line: 534,
            column: 48
          }
        },
        "254": {
          start: {
            line: 535,
            column: 4
          },
          end: {
            line: 535,
            column: 61
          }
        },
        "255": {
          start: {
            line: 539,
            column: 22
          },
          end: {
            line: 539,
            column: 51
          }
        },
        "256": {
          start: {
            line: 540,
            column: 4
          },
          end: {
            line: 540,
            column: 55
          }
        },
        "257": {
          start: {
            line: 541,
            column: 4
          },
          end: {
            line: 541,
            column: 40
          }
        },
        "258": {
          start: {
            line: 542,
            column: 27
          },
          end: {
            line: 542,
            column: 90
          }
        },
        "259": {
          start: {
            line: 543,
            column: 4
          },
          end: {
            line: 543,
            column: 40
          }
        },
        "260": {
          start: {
            line: 544,
            column: 4
          },
          end: {
            line: 544,
            column: 25
          }
        },
        "261": {
          start: {
            line: 550,
            column: 4
          },
          end: {
            line: 572,
            column: 6
          }
        },
        "262": {
          start: {
            line: 551,
            column: 17
          },
          end: {
            line: 551,
            column: 39
          }
        },
        "263": {
          start: {
            line: 552,
            column: 22
          },
          end: {
            line: 556,
            column: 7
          }
        },
        "264": {
          start: {
            line: 558,
            column: 6
          },
          end: {
            line: 561,
            column: 7
          }
        },
        "265": {
          start: {
            line: 559,
            column: 8
          },
          end: {
            line: 559,
            column: 39
          }
        },
        "266": {
          start: {
            line: 560,
            column: 8
          },
          end: {
            line: 560,
            column: 36
          }
        },
        "267": {
          start: {
            line: 563,
            column: 6
          },
          end: {
            line: 571,
            column: 7
          }
        },
        "268": {
          start: {
            line: 564,
            column: 8
          },
          end: {
            line: 566,
            column: 9
          }
        },
        "269": {
          start: {
            line: 565,
            column: 10
          },
          end: {
            line: 565,
            column: 60
          }
        },
        "270": {
          start: {
            line: 568,
            column: 8
          },
          end: {
            line: 568,
            column: 35
          }
        },
        "271": {
          start: {
            line: 569,
            column: 13
          },
          end: {
            line: 571,
            column: 7
          }
        },
        "272": {
          start: {
            line: 570,
            column: 8
          },
          end: {
            line: 570,
            column: 32
          }
        },
        "273": {
          start: {
            line: 582,
            column: 0
          },
          end: {
            line: 614,
            column: 2
          }
        },
        "274": {
          start: {
            line: 584,
            column: 19
          },
          end: {
            line: 584,
            column: 52
          }
        },
        "275": {
          start: {
            line: 586,
            column: 2
          },
          end: {
            line: 588,
            column: 3
          }
        },
        "276": {
          start: {
            line: 587,
            column: 4
          },
          end: {
            line: 587,
            column: 45
          }
        },
        "277": {
          start: {
            line: 590,
            column: 17
          },
          end: {
            line: 594,
            column: 5
          }
        },
        "278": {
          start: {
            line: 596,
            column: 2
          },
          end: {
            line: 598,
            column: 3
          }
        },
        "279": {
          start: {
            line: 597,
            column: 4
          },
          end: {
            line: 597,
            column: 26
          }
        },
        "280": {
          start: {
            line: 600,
            column: 18
          },
          end: {
            line: 611,
            column: 4
          }
        },
        "281": {
          start: {
            line: 601,
            column: 4
          },
          end: {
            line: 604,
            column: 5
          }
        },
        "282": {
          start: {
            line: 603,
            column: 6
          },
          end: {
            line: 603,
            column: 12
          }
        },
        "283": {
          start: {
            line: 606,
            column: 4
          },
          end: {
            line: 610,
            column: 6
          }
        },
        "284": {
          start: {
            line: 607,
            column: 6
          },
          end: {
            line: 609,
            column: 7
          }
        },
        "285": {
          start: {
            line: 608,
            column: 8
          },
          end: {
            line: 608,
            column: 20
          }
        },
        "286": {
          start: {
            line: 613,
            column: 2
          },
          end: {
            line: 613,
            column: 54
          }
        },
        "287": {
          start: {
            line: 622,
            column: 0
          },
          end: {
            line: 622,
            column: 35
          }
        },
        "288": {
          start: {
            line: 623,
            column: 0
          },
          end: {
            line: 623,
            column: 30
          }
        },
        "289": {
          start: {
            line: 624,
            column: 0
          },
          end: {
            line: 627,
            column: 1
          }
        },
        "290": {
          start: {
            line: 625,
            column: 2
          },
          end: {
            line: 625,
            column: 33
          }
        },
        "291": {
          start: {
            line: 626,
            column: 2
          },
          end: {
            line: 626,
            column: 31
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 74,
              column: 2
            },
            end: {
              line: 74,
              column: 3
            }
          },
          loc: {
            start: {
              line: 74,
              column: 31
            },
            end: {
              line: 84,
              column: 3
            }
          },
          line: 74
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 88,
              column: 2
            },
            end: {
              line: 88,
              column: 3
            }
          },
          loc: {
            start: {
              line: 88,
              column: 23
            },
            end: {
              line: 90,
              column: 3
            }
          },
          line: 88
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 92,
              column: 2
            },
            end: {
              line: 92,
              column: 3
            }
          },
          loc: {
            start: {
              line: 92,
              column: 23
            },
            end: {
              line: 94,
              column: 3
            }
          },
          line: 92
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 98,
              column: 2
            },
            end: {
              line: 98,
              column: 3
            }
          },
          loc: {
            start: {
              line: 98,
              column: 24
            },
            end: {
              line: 100,
              column: 3
            }
          },
          line: 98
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 102,
              column: 2
            },
            end: {
              line: 102,
              column: 3
            }
          },
          loc: {
            start: {
              line: 102,
              column: 22
            },
            end: {
              line: 146,
              column: 3
            }
          },
          line: 102
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 134,
              column: 6
            },
            end: {
              line: 134,
              column: 7
            }
          },
          loc: {
            start: {
              line: 134,
              column: 15
            },
            end: {
              line: 134,
              column: 31
            }
          },
          line: 134
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 137,
              column: 48
            },
            end: {
              line: 137,
              column: 49
            }
          },
          loc: {
            start: {
              line: 137,
              column: 54
            },
            end: {
              line: 143,
              column: 5
            }
          },
          line: 137
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 138,
              column: 50
            },
            end: {
              line: 138,
              column: 51
            }
          },
          loc: {
            start: {
              line: 138,
              column: 59
            },
            end: {
              line: 142,
              column: 7
            }
          },
          line: 138
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 145,
              column: 23
            },
            end: {
              line: 145,
              column: 24
            }
          },
          loc: {
            start: {
              line: 145,
              column: 29
            },
            end: {
              line: 145,
              column: 61
            }
          },
          line: 145
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 148,
              column: 2
            },
            end: {
              line: 148,
              column: 3
            }
          },
          loc: {
            start: {
              line: 148,
              column: 14
            },
            end: {
              line: 191,
              column: 3
            }
          },
          line: 148
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 186,
              column: 34
            },
            end: {
              line: 186,
              column: 35
            }
          },
          loc: {
            start: {
              line: 186,
              column: 43
            },
            end: {
              line: 186,
              column: 65
            }
          },
          line: 186
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 193,
              column: 2
            },
            end: {
              line: 193,
              column: 3
            }
          },
          loc: {
            start: {
              line: 193,
              column: 12
            },
            end: {
              line: 215,
              column: 3
            }
          },
          line: 193
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 195,
              column: 15
            },
            end: {
              line: 195,
              column: 16
            }
          },
          loc: {
            start: {
              line: 195,
              column: 30
            },
            end: {
              line: 195,
              column: 59
            }
          },
          line: 195
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 217,
              column: 2
            },
            end: {
              line: 217,
              column: 3
            }
          },
          loc: {
            start: {
              line: 217,
              column: 17
            },
            end: {
              line: 219,
              column: 3
            }
          },
          line: 217
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 223,
              column: 2
            },
            end: {
              line: 223,
              column: 3
            }
          },
          loc: {
            start: {
              line: 223,
              column: 21
            },
            end: {
              line: 230,
              column: 3
            }
          },
          line: 223
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 232,
              column: 2
            },
            end: {
              line: 232,
              column: 3
            }
          },
          loc: {
            start: {
              line: 232,
              column: 31
            },
            end: {
              line: 266,
              column: 3
            }
          },
          line: 232
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 252,
              column: 48
            },
            end: {
              line: 252,
              column: 49
            }
          },
          loc: {
            start: {
              line: 252,
              column: 54
            },
            end: {
              line: 260,
              column: 7
            }
          },
          line: 252
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 255,
              column: 52
            },
            end: {
              line: 255,
              column: 53
            }
          },
          loc: {
            start: {
              line: 255,
              column: 58
            },
            end: {
              line: 257,
              column: 11
            }
          },
          line: 255
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 268,
              column: 2
            },
            end: {
              line: 268,
              column: 3
            }
          },
          loc: {
            start: {
              line: 268,
              column: 30
            },
            end: {
              line: 321,
              column: 3
            }
          },
          line: 268
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 303,
              column: 31
            },
            end: {
              line: 303,
              column: 32
            }
          },
          loc: {
            start: {
              line: 303,
              column: 37
            },
            end: {
              line: 310,
              column: 5
            }
          },
          line: 303
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 323,
              column: 2
            },
            end: {
              line: 323,
              column: 3
            }
          },
          loc: {
            start: {
              line: 323,
              column: 18
            },
            end: {
              line: 333,
              column: 3
            }
          },
          line: 323
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 326,
              column: 25
            },
            end: {
              line: 326,
              column: 26
            }
          },
          loc: {
            start: {
              line: 326,
              column: 34
            },
            end: {
              line: 332,
              column: 7
            }
          },
          line: 326
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 335,
              column: 2
            },
            end: {
              line: 335,
              column: 3
            }
          },
          loc: {
            start: {
              line: 335,
              column: 20
            },
            end: {
              line: 348,
              column: 3
            }
          },
          line: 335
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 337,
              column: 49
            },
            end: {
              line: 337,
              column: 50
            }
          },
          loc: {
            start: {
              line: 337,
              column: 58
            },
            end: {
              line: 344,
              column: 7
            }
          },
          line: 337
        },
        "24": {
          name: "(anonymous_24)",
          decl: {
            start: {
              line: 350,
              column: 2
            },
            end: {
              line: 350,
              column: 3
            }
          },
          loc: {
            start: {
              line: 350,
              column: 20
            },
            end: {
              line: 356,
              column: 3
            }
          },
          line: 350
        },
        "25": {
          name: "(anonymous_25)",
          decl: {
            start: {
              line: 352,
              column: 33
            },
            end: {
              line: 352,
              column: 34
            }
          },
          loc: {
            start: {
              line: 352,
              column: 42
            },
            end: {
              line: 352,
              column: 66
            }
          },
          line: 352
        },
        "26": {
          name: "(anonymous_26)",
          decl: {
            start: {
              line: 358,
              column: 2
            },
            end: {
              line: 358,
              column: 3
            }
          },
          loc: {
            start: {
              line: 358,
              column: 15
            },
            end: {
              line: 370,
              column: 3
            }
          },
          line: 358
        },
        "27": {
          name: "(anonymous_27)",
          decl: {
            start: {
              line: 364,
              column: 23
            },
            end: {
              line: 364,
              column: 24
            }
          },
          loc: {
            start: {
              line: 364,
              column: 29
            },
            end: {
              line: 369,
              column: 5
            }
          },
          line: 364
        },
        "28": {
          name: "(anonymous_28)",
          decl: {
            start: {
              line: 372,
              column: 2
            },
            end: {
              line: 372,
              column: 3
            }
          },
          loc: {
            start: {
              line: 372,
              column: 20
            },
            end: {
              line: 377,
              column: 3
            }
          },
          line: 372
        },
        "29": {
          name: "(anonymous_29)",
          decl: {
            start: {
              line: 379,
              column: 2
            },
            end: {
              line: 379,
              column: 3
            }
          },
          loc: {
            start: {
              line: 379,
              column: 26
            },
            end: {
              line: 448,
              column: 3
            }
          },
          line: 379
        },
        "30": {
          name: "(anonymous_30)",
          decl: {
            start: {
              line: 393,
              column: 47
            },
            end: {
              line: 393,
              column: 48
            }
          },
          loc: {
            start: {
              line: 393,
              column: 56
            },
            end: {
              line: 404,
              column: 7
            }
          },
          line: 393
        },
        "31": {
          name: "(anonymous_31)",
          decl: {
            start: {
              line: 429,
              column: 29
            },
            end: {
              line: 429,
              column: 30
            }
          },
          loc: {
            start: {
              line: 429,
              column: 35
            },
            end: {
              line: 434,
              column: 7
            }
          },
          line: 429
        },
        "32": {
          name: "(anonymous_32)",
          decl: {
            start: {
              line: 455,
              column: 2
            },
            end: {
              line: 455,
              column: 3
            }
          },
          loc: {
            start: {
              line: 455,
              column: 18
            },
            end: {
              line: 465,
              column: 3
            }
          },
          line: 455
        },
        "33": {
          name: "(anonymous_33)",
          decl: {
            start: {
              line: 467,
              column: 2
            },
            end: {
              line: 467,
              column: 3
            }
          },
          loc: {
            start: {
              line: 467,
              column: 22
            },
            end: {
              line: 470,
              column: 3
            }
          },
          line: 467
        },
        "34": {
          name: "(anonymous_34)",
          decl: {
            start: {
              line: 472,
              column: 2
            },
            end: {
              line: 472,
              column: 3
            }
          },
          loc: {
            start: {
              line: 472,
              column: 20
            },
            end: {
              line: 476,
              column: 3
            }
          },
          line: 472
        },
        "35": {
          name: "(anonymous_35)",
          decl: {
            start: {
              line: 478,
              column: 2
            },
            end: {
              line: 478,
              column: 3
            }
          },
          loc: {
            start: {
              line: 478,
              column: 18
            },
            end: {
              line: 512,
              column: 3
            }
          },
          line: 478
        },
        "36": {
          name: "(anonymous_36)",
          decl: {
            start: {
              line: 486,
              column: 27
            },
            end: {
              line: 486,
              column: 28
            }
          },
          loc: {
            start: {
              line: 486,
              column: 47
            },
            end: {
              line: 492,
              column: 7
            }
          },
          line: 486
        },
        "37": {
          name: "(anonymous_37)",
          decl: {
            start: {
              line: 495,
              column: 28
            },
            end: {
              line: 495,
              column: 29
            }
          },
          loc: {
            start: {
              line: 495,
              column: 48
            },
            end: {
              line: 501,
              column: 7
            }
          },
          line: 495
        },
        "38": {
          name: "(anonymous_38)",
          decl: {
            start: {
              line: 514,
              column: 2
            },
            end: {
              line: 514,
              column: 3
            }
          },
          loc: {
            start: {
              line: 514,
              column: 20
            },
            end: {
              line: 536,
              column: 3
            }
          },
          line: 514
        },
        "39": {
          name: "(anonymous_39)",
          decl: {
            start: {
              line: 517,
              column: 25
            },
            end: {
              line: 517,
              column: 26
            }
          },
          loc: {
            start: {
              line: 517,
              column: 45
            },
            end: {
              line: 521,
              column: 5
            }
          },
          line: 517
        },
        "40": {
          name: "(anonymous_40)",
          decl: {
            start: {
              line: 525,
              column: 21
            },
            end: {
              line: 525,
              column: 22
            }
          },
          loc: {
            start: {
              line: 525,
              column: 41
            },
            end: {
              line: 530,
              column: 5
            }
          },
          line: 525
        },
        "41": {
          name: "(anonymous_41)",
          decl: {
            start: {
              line: 538,
              column: 2
            },
            end: {
              line: 538,
              column: 3
            }
          },
          loc: {
            start: {
              line: 538,
              column: 23
            },
            end: {
              line: 545,
              column: 3
            }
          },
          line: 538
        },
        "42": {
          name: "(anonymous_42)",
          decl: {
            start: {
              line: 549,
              column: 2
            },
            end: {
              line: 549,
              column: 3
            }
          },
          loc: {
            start: {
              line: 549,
              column: 49
            },
            end: {
              line: 573,
              column: 3
            }
          },
          line: 549
        },
        "43": {
          name: "(anonymous_43)",
          decl: {
            start: {
              line: 550,
              column: 21
            },
            end: {
              line: 550,
              column: 22
            }
          },
          loc: {
            start: {
              line: 550,
              column: 33
            },
            end: {
              line: 572,
              column: 5
            }
          },
          line: 550
        },
        "44": {
          name: "(anonymous_44)",
          decl: {
            start: {
              line: 582,
              column: 59
            },
            end: {
              line: 582,
              column: 60
            }
          },
          loc: {
            start: {
              line: 582,
              column: 76
            },
            end: {
              line: 614,
              column: 1
            }
          },
          line: 582
        },
        "45": {
          name: "(anonymous_45)",
          decl: {
            start: {
              line: 600,
              column: 44
            },
            end: {
              line: 600,
              column: 45
            }
          },
          loc: {
            start: {
              line: 600,
              column: 57
            },
            end: {
              line: 611,
              column: 3
            }
          },
          line: 600
        },
        "46": {
          name: "(anonymous_46)",
          decl: {
            start: {
              line: 606,
              column: 30
            },
            end: {
              line: 606,
              column: 31
            }
          },
          loc: {
            start: {
              line: 606,
              column: 36
            },
            end: {
              line: 610,
              column: 5
            }
          },
          line: 606
        },
        "47": {
          name: "(anonymous_47)",
          decl: {
            start: {
              line: 624,
              column: 24
            },
            end: {
              line: 624,
              column: 25
            }
          },
          loc: {
            start: {
              line: 624,
              column: 30
            },
            end: {
              line: 627,
              column: 1
            }
          },
          line: 624
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 99,
              column: 11
            },
            end: {
              line: 99,
              column: 65
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 99,
              column: 27
            },
            end: {
              line: 99,
              column: 38
            }
          }, {
            start: {
              line: 99,
              column: 41
            },
            end: {
              line: 99,
              column: 65
            }
          }],
          line: 99
        },
        "1": {
          loc: {
            start: {
              line: 103,
              column: 4
            },
            end: {
              line: 105,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 103,
              column: 4
            },
            end: {
              line: 105,
              column: 5
            }
          }, {
            start: {
              line: 103,
              column: 4
            },
            end: {
              line: 105,
              column: 5
            }
          }],
          line: 103
        },
        "2": {
          loc: {
            start: {
              line: 103,
              column: 8
            },
            end: {
              line: 103,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 103,
              column: 8
            },
            end: {
              line: 103,
              column: 21
            }
          }, {
            start: {
              line: 103,
              column: 25
            },
            end: {
              line: 103,
              column: 46
            }
          }],
          line: 103
        },
        "3": {
          loc: {
            start: {
              line: 107,
              column: 4
            },
            end: {
              line: 109,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 107,
              column: 4
            },
            end: {
              line: 109,
              column: 5
            }
          }, {
            start: {
              line: 107,
              column: 4
            },
            end: {
              line: 109,
              column: 5
            }
          }],
          line: 107
        },
        "4": {
          loc: {
            start: {
              line: 117,
              column: 4
            },
            end: {
              line: 119,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 117,
              column: 4
            },
            end: {
              line: 119,
              column: 5
            }
          }, {
            start: {
              line: 117,
              column: 4
            },
            end: {
              line: 119,
              column: 5
            }
          }],
          line: 117
        },
        "5": {
          loc: {
            start: {
              line: 117,
              column: 8
            },
            end: {
              line: 117,
              column: 55
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 117,
              column: 8
            },
            end: {
              line: 117,
              column: 21
            }
          }, {
            start: {
              line: 117,
              column: 25
            },
            end: {
              line: 117,
              column: 55
            }
          }],
          line: 117
        },
        "6": {
          loc: {
            start: {
              line: 139,
              column: 8
            },
            end: {
              line: 141,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 139,
              column: 8
            },
            end: {
              line: 141,
              column: 9
            }
          }, {
            start: {
              line: 139,
              column: 8
            },
            end: {
              line: 141,
              column: 9
            }
          }],
          line: 139
        },
        "7": {
          loc: {
            start: {
              line: 149,
              column: 4
            },
            end: {
              line: 151,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 149,
              column: 4
            },
            end: {
              line: 151,
              column: 5
            }
          }, {
            start: {
              line: 149,
              column: 4
            },
            end: {
              line: 151,
              column: 5
            }
          }],
          line: 149
        },
        "8": {
          loc: {
            start: {
              line: 153,
              column: 4
            },
            end: {
              line: 155,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 153,
              column: 4
            },
            end: {
              line: 155,
              column: 5
            }
          }, {
            start: {
              line: 153,
              column: 4
            },
            end: {
              line: 155,
              column: 5
            }
          }],
          line: 153
        },
        "9": {
          loc: {
            start: {
              line: 153,
              column: 8
            },
            end: {
              line: 153,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 153,
              column: 8
            },
            end: {
              line: 153,
              column: 22
            }
          }, {
            start: {
              line: 153,
              column: 26
            },
            end: {
              line: 153,
              column: 47
            }
          }],
          line: 153
        },
        "10": {
          loc: {
            start: {
              line: 161,
              column: 4
            },
            end: {
              line: 163,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 161,
              column: 4
            },
            end: {
              line: 163,
              column: 5
            }
          }, {
            start: {
              line: 161,
              column: 4
            },
            end: {
              line: 163,
              column: 5
            }
          }],
          line: 161
        },
        "11": {
          loc: {
            start: {
              line: 161,
              column: 8
            },
            end: {
              line: 161,
              column: 56
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 161,
              column: 8
            },
            end: {
              line: 161,
              column: 22
            }
          }, {
            start: {
              line: 161,
              column: 26
            },
            end: {
              line: 161,
              column: 56
            }
          }],
          line: 161
        },
        "12": {
          loc: {
            start: {
              line: 168,
              column: 4
            },
            end: {
              line: 170,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 168,
              column: 4
            },
            end: {
              line: 170,
              column: 5
            }
          }, {
            start: {
              line: 168,
              column: 4
            },
            end: {
              line: 170,
              column: 5
            }
          }],
          line: 168
        },
        "13": {
          loc: {
            start: {
              line: 182,
              column: 4
            },
            end: {
              line: 190,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 182,
              column: 4
            },
            end: {
              line: 190,
              column: 5
            }
          }, {
            start: {
              line: 182,
              column: 4
            },
            end: {
              line: 190,
              column: 5
            }
          }],
          line: 182
        },
        "14": {
          loc: {
            start: {
              line: 233,
              column: 4
            },
            end: {
              line: 265,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 233,
              column: 4
            },
            end: {
              line: 265,
              column: 5
            }
          }, {
            start: {
              line: 233,
              column: 4
            },
            end: {
              line: 265,
              column: 5
            }
          }],
          line: 233
        },
        "15": {
          loc: {
            start: {
              line: 237,
              column: 6
            },
            end: {
              line: 239,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 237,
              column: 6
            },
            end: {
              line: 239,
              column: 7
            }
          }, {
            start: {
              line: 237,
              column: 6
            },
            end: {
              line: 239,
              column: 7
            }
          }],
          line: 237
        },
        "16": {
          loc: {
            start: {
              line: 243,
              column: 6
            },
            end: {
              line: 245,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 243,
              column: 6
            },
            end: {
              line: 245,
              column: 7
            }
          }, {
            start: {
              line: 243,
              column: 6
            },
            end: {
              line: 245,
              column: 7
            }
          }],
          line: 243
        },
        "17": {
          loc: {
            start: {
              line: 254,
              column: 8
            },
            end: {
              line: 259,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 254,
              column: 8
            },
            end: {
              line: 259,
              column: 9
            }
          }, {
            start: {
              line: 254,
              column: 8
            },
            end: {
              line: 259,
              column: 9
            }
          }],
          line: 254
        },
        "18": {
          loc: {
            start: {
              line: 270,
              column: 22
            },
            end: {
              line: 270,
              column: 91
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 270,
              column: 37
            },
            end: {
              line: 270,
              column: 84
            }
          }, {
            start: {
              line: 270,
              column: 87
            },
            end: {
              line: 270,
              column: 91
            }
          }],
          line: 270
        },
        "19": {
          loc: {
            start: {
              line: 272,
              column: 4
            },
            end: {
              line: 276,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 272,
              column: 4
            },
            end: {
              line: 276,
              column: 5
            }
          }, {
            start: {
              line: 272,
              column: 4
            },
            end: {
              line: 276,
              column: 5
            }
          }],
          line: 272
        },
        "20": {
          loc: {
            start: {
              line: 272,
              column: 8
            },
            end: {
              line: 273,
              column: 63
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 272,
              column: 8
            },
            end: {
              line: 272,
              column: 33
            }
          }, {
            start: {
              line: 273,
              column: 8
            },
            end: {
              line: 273,
              column: 63
            }
          }],
          line: 272
        },
        "21": {
          loc: {
            start: {
              line: 283,
              column: 4
            },
            end: {
              line: 287,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 283,
              column: 4
            },
            end: {
              line: 287,
              column: 5
            }
          }, {
            start: {
              line: 283,
              column: 4
            },
            end: {
              line: 287,
              column: 5
            }
          }],
          line: 283
        },
        "22": {
          loc: {
            start: {
              line: 283,
              column: 8
            },
            end: {
              line: 283,
              column: 68
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 283,
              column: 8
            },
            end: {
              line: 283,
              column: 55
            }
          }, {
            start: {
              line: 283,
              column: 59
            },
            end: {
              line: 283,
              column: 68
            }
          }],
          line: 283
        },
        "23": {
          loc: {
            start: {
              line: 289,
              column: 4
            },
            end: {
              line: 291,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 289,
              column: 4
            },
            end: {
              line: 291,
              column: 5
            }
          }, {
            start: {
              line: 289,
              column: 4
            },
            end: {
              line: 291,
              column: 5
            }
          }],
          line: 289
        },
        "24": {
          loc: {
            start: {
              line: 295,
              column: 4
            },
            end: {
              line: 297,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 295,
              column: 4
            },
            end: {
              line: 297,
              column: 5
            }
          }, {
            start: {
              line: 295,
              column: 4
            },
            end: {
              line: 297,
              column: 5
            }
          }],
          line: 295
        },
        "25": {
          loc: {
            start: {
              line: 304,
              column: 6
            },
            end: {
              line: 306,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 304,
              column: 6
            },
            end: {
              line: 306,
              column: 7
            }
          }, {
            start: {
              line: 304,
              column: 6
            },
            end: {
              line: 306,
              column: 7
            }
          }],
          line: 304
        },
        "26": {
          loc: {
            start: {
              line: 312,
              column: 4
            },
            end: {
              line: 320,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 312,
              column: 4
            },
            end: {
              line: 320,
              column: 5
            }
          }, {
            start: {
              line: 312,
              column: 4
            },
            end: {
              line: 320,
              column: 5
            }
          }],
          line: 312
        },
        "27": {
          loc: {
            start: {
              line: 327,
              column: 8
            },
            end: {
              line: 331,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 327,
              column: 8
            },
            end: {
              line: 331,
              column: 9
            }
          }, {
            start: {
              line: 327,
              column: 8
            },
            end: {
              line: 331,
              column: 9
            }
          }],
          line: 327
        },
        "28": {
          loc: {
            start: {
              line: 327,
              column: 12
            },
            end: {
              line: 329,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 327,
              column: 12
            },
            end: {
              line: 327,
              column: 37
            }
          }, {
            start: {
              line: 328,
              column: 12
            },
            end: {
              line: 328,
              column: 42
            }
          }, {
            start: {
              line: 329,
              column: 12
            },
            end: {
              line: 329,
              column: 59
            }
          }],
          line: 327
        },
        "29": {
          loc: {
            start: {
              line: 336,
              column: 4
            },
            end: {
              line: 347,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 336,
              column: 4
            },
            end: {
              line: 347,
              column: 5
            }
          }, {
            start: {
              line: 336,
              column: 4
            },
            end: {
              line: 347,
              column: 5
            }
          }],
          line: 336
        },
        "30": {
          loc: {
            start: {
              line: 338,
              column: 8
            },
            end: {
              line: 343,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 338,
              column: 8
            },
            end: {
              line: 343,
              column: 9
            }
          }, {
            start: {
              line: 338,
              column: 8
            },
            end: {
              line: 343,
              column: 9
            }
          }],
          line: 338
        },
        "31": {
          loc: {
            start: {
              line: 338,
              column: 12
            },
            end: {
              line: 338,
              column: 67
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 338,
              column: 12
            },
            end: {
              line: 338,
              column: 33
            }
          }, {
            start: {
              line: 338,
              column: 37
            },
            end: {
              line: 338,
              column: 67
            }
          }],
          line: 338
        },
        "32": {
          loc: {
            start: {
              line: 341,
              column: 15
            },
            end: {
              line: 343,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 341,
              column: 15
            },
            end: {
              line: 343,
              column: 9
            }
          }, {
            start: {
              line: 341,
              column: 15
            },
            end: {
              line: 343,
              column: 9
            }
          }],
          line: 341
        },
        "33": {
          loc: {
            start: {
              line: 341,
              column: 19
            },
            end: {
              line: 341,
              column: 75
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 341,
              column: 19
            },
            end: {
              line: 341,
              column: 41
            }
          }, {
            start: {
              line: 341,
              column: 45
            },
            end: {
              line: 341,
              column: 75
            }
          }],
          line: 341
        },
        "34": {
          loc: {
            start: {
              line: 345,
              column: 11
            },
            end: {
              line: 347,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 345,
              column: 11
            },
            end: {
              line: 347,
              column: 5
            }
          }, {
            start: {
              line: 345,
              column: 11
            },
            end: {
              line: 347,
              column: 5
            }
          }],
          line: 345
        },
        "35": {
          loc: {
            start: {
              line: 351,
              column: 4
            },
            end: {
              line: 355,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 351,
              column: 4
            },
            end: {
              line: 355,
              column: 5
            }
          }, {
            start: {
              line: 351,
              column: 4
            },
            end: {
              line: 355,
              column: 5
            }
          }],
          line: 351
        },
        "36": {
          loc: {
            start: {
              line: 373,
              column: 4
            },
            end: {
              line: 376,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 373,
              column: 4
            },
            end: {
              line: 376,
              column: 5
            }
          }, {
            start: {
              line: 373,
              column: 4
            },
            end: {
              line: 376,
              column: 5
            }
          }],
          line: 373
        },
        "37": {
          loc: {
            start: {
              line: 380,
              column: 20
            },
            end: {
              line: 381,
              column: 26
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 381,
              column: 6
            },
            end: {
              line: 381,
              column: 21
            }
          }, {
            start: {
              line: 381,
              column: 24
            },
            end: {
              line: 381,
              column: 26
            }
          }],
          line: 380
        },
        "38": {
          loc: {
            start: {
              line: 383,
              column: 4
            },
            end: {
              line: 447,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 383,
              column: 4
            },
            end: {
              line: 447,
              column: 5
            }
          }, {
            start: {
              line: 383,
              column: 4
            },
            end: {
              line: 447,
              column: 5
            }
          }],
          line: 383
        },
        "39": {
          loc: {
            start: {
              line: 383,
              column: 8
            },
            end: {
              line: 383,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 383,
              column: 8
            },
            end: {
              line: 383,
              column: 21
            }
          }, {
            start: {
              line: 383,
              column: 25
            },
            end: {
              line: 383,
              column: 46
            }
          }],
          line: 383
        },
        "40": {
          loc: {
            start: {
              line: 387,
              column: 6
            },
            end: {
              line: 389,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 387,
              column: 6
            },
            end: {
              line: 389,
              column: 7
            }
          }, {
            start: {
              line: 387,
              column: 6
            },
            end: {
              line: 389,
              column: 7
            }
          }],
          line: 387
        },
        "41": {
          loc: {
            start: {
              line: 394,
              column: 8
            },
            end: {
              line: 397,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 394,
              column: 8
            },
            end: {
              line: 397,
              column: 9
            }
          }, {
            start: {
              line: 394,
              column: 8
            },
            end: {
              line: 397,
              column: 9
            }
          }],
          line: 394
        },
        "42": {
          loc: {
            start: {
              line: 399,
              column: 8
            },
            end: {
              line: 401,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 399,
              column: 8
            },
            end: {
              line: 401,
              column: 9
            }
          }, {
            start: {
              line: 399,
              column: 8
            },
            end: {
              line: 401,
              column: 9
            }
          }],
          line: 399
        },
        "43": {
          loc: {
            start: {
              line: 406,
              column: 6
            },
            end: {
              line: 408,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 406,
              column: 6
            },
            end: {
              line: 408,
              column: 7
            }
          }, {
            start: {
              line: 406,
              column: 6
            },
            end: {
              line: 408,
              column: 7
            }
          }],
          line: 406
        },
        "44": {
          loc: {
            start: {
              line: 412,
              column: 6
            },
            end: {
              line: 414,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 412,
              column: 6
            },
            end: {
              line: 414,
              column: 7
            }
          }, {
            start: {
              line: 412,
              column: 6
            },
            end: {
              line: 414,
              column: 7
            }
          }],
          line: 412
        },
        "45": {
          loc: {
            start: {
              line: 416,
              column: 6
            },
            end: {
              line: 419,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 416,
              column: 6
            },
            end: {
              line: 419,
              column: 7
            }
          }, {
            start: {
              line: 416,
              column: 6
            },
            end: {
              line: 419,
              column: 7
            }
          }],
          line: 416
        },
        "46": {
          loc: {
            start: {
              line: 426,
              column: 11
            },
            end: {
              line: 447,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 426,
              column: 11
            },
            end: {
              line: 447,
              column: 5
            }
          }, {
            start: {
              line: 426,
              column: 11
            },
            end: {
              line: 447,
              column: 5
            }
          }],
          line: 426
        },
        "47": {
          loc: {
            start: {
              line: 426,
              column: 15
            },
            end: {
              line: 426,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 426,
              column: 15
            },
            end: {
              line: 426,
              column: 29
            }
          }, {
            start: {
              line: 426,
              column: 33
            },
            end: {
              line: 426,
              column: 47
            }
          }],
          line: 426
        },
        "48": {
          loc: {
            start: {
              line: 431,
              column: 8
            },
            end: {
              line: 433,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 431,
              column: 8
            },
            end: {
              line: 433,
              column: 9
            }
          }, {
            start: {
              line: 431,
              column: 8
            },
            end: {
              line: 433,
              column: 9
            }
          }],
          line: 431
        },
        "49": {
          loc: {
            start: {
              line: 436,
              column: 6
            },
            end: {
              line: 444,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 436,
              column: 6
            },
            end: {
              line: 444,
              column: 7
            }
          }, {
            start: {
              line: 436,
              column: 6
            },
            end: {
              line: 444,
              column: 7
            }
          }],
          line: 436
        },
        "50": {
          loc: {
            start: {
              line: 445,
              column: 11
            },
            end: {
              line: 447,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 445,
              column: 11
            },
            end: {
              line: 447,
              column: 5
            }
          }, {
            start: {
              line: 445,
              column: 11
            },
            end: {
              line: 447,
              column: 5
            }
          }],
          line: 445
        },
        "51": {
          loc: {
            start: {
              line: 458,
              column: 4
            },
            end: {
              line: 460,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 458,
              column: 4
            },
            end: {
              line: 460,
              column: 5
            }
          }, {
            start: {
              line: 458,
              column: 4
            },
            end: {
              line: 460,
              column: 5
            }
          }],
          line: 458
        },
        "52": {
          loc: {
            start: {
              line: 458,
              column: 8
            },
            end: {
              line: 458,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 458,
              column: 8
            },
            end: {
              line: 458,
              column: 32
            }
          }, {
            start: {
              line: 458,
              column: 36
            },
            end: {
              line: 458,
              column: 54
            }
          }],
          line: 458
        },
        "53": {
          loc: {
            start: {
              line: 462,
              column: 4
            },
            end: {
              line: 464,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 462,
              column: 4
            },
            end: {
              line: 464,
              column: 5
            }
          }, {
            start: {
              line: 462,
              column: 4
            },
            end: {
              line: 464,
              column: 5
            }
          }],
          line: 462
        },
        "54": {
          loc: {
            start: {
              line: 462,
              column: 8
            },
            end: {
              line: 462,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 462,
              column: 8
            },
            end: {
              line: 462,
              column: 31
            }
          }, {
            start: {
              line: 462,
              column: 35
            },
            end: {
              line: 462,
              column: 54
            }
          }],
          line: 462
        },
        "55": {
          loc: {
            start: {
              line: 479,
              column: 4
            },
            end: {
              line: 509,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 479,
              column: 4
            },
            end: {
              line: 509,
              column: 5
            }
          }, {
            start: {
              line: 479,
              column: 4
            },
            end: {
              line: 509,
              column: 5
            }
          }],
          line: 479
        },
        "56": {
          loc: {
            start: {
              line: 520,
              column: 35
            },
            end: {
              line: 520,
              column: 57
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 520,
              column: 45
            },
            end: {
              line: 520,
              column: 52
            }
          }, {
            start: {
              line: 520,
              column: 55
            },
            end: {
              line: 520,
              column: 57
            }
          }],
          line: 520
        },
        "57": {
          loc: {
            start: {
              line: 527,
              column: 6
            },
            end: {
              line: 529,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 527,
              column: 6
            },
            end: {
              line: 529,
              column: 7
            }
          }, {
            start: {
              line: 527,
              column: 6
            },
            end: {
              line: 529,
              column: 7
            }
          }],
          line: 527
        },
        "58": {
          loc: {
            start: {
              line: 535,
              column: 39
            },
            end: {
              line: 535,
              column: 61
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 535,
              column: 49
            },
            end: {
              line: 535,
              column: 56
            }
          }, {
            start: {
              line: 535,
              column: 59
            },
            end: {
              line: 535,
              column: 61
            }
          }],
          line: 535
        },
        "59": {
          loc: {
            start: {
              line: 555,
              column: 12
            },
            end: {
              line: 555,
              column: 62
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 555,
              column: 51
            },
            end: {
              line: 555,
              column: 57
            }
          }, {
            start: {
              line: 555,
              column: 60
            },
            end: {
              line: 555,
              column: 62
            }
          }],
          line: 555
        },
        "60": {
          loc: {
            start: {
              line: 555,
              column: 12
            },
            end: {
              line: 555,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 555,
              column: 12
            },
            end: {
              line: 555,
              column: 38
            }
          }, {
            start: {
              line: 555,
              column: 42
            },
            end: {
              line: 555,
              column: 48
            }
          }],
          line: 555
        },
        "61": {
          loc: {
            start: {
              line: 558,
              column: 6
            },
            end: {
              line: 561,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 558,
              column: 6
            },
            end: {
              line: 561,
              column: 7
            }
          }, {
            start: {
              line: 558,
              column: 6
            },
            end: {
              line: 561,
              column: 7
            }
          }],
          line: 558
        },
        "62": {
          loc: {
            start: {
              line: 563,
              column: 6
            },
            end: {
              line: 571,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 563,
              column: 6
            },
            end: {
              line: 571,
              column: 7
            }
          }, {
            start: {
              line: 563,
              column: 6
            },
            end: {
              line: 571,
              column: 7
            }
          }],
          line: 563
        },
        "63": {
          loc: {
            start: {
              line: 564,
              column: 8
            },
            end: {
              line: 566,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 564,
              column: 8
            },
            end: {
              line: 566,
              column: 9
            }
          }, {
            start: {
              line: 564,
              column: 8
            },
            end: {
              line: 566,
              column: 9
            }
          }],
          line: 564
        },
        "64": {
          loc: {
            start: {
              line: 569,
              column: 13
            },
            end: {
              line: 571,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 569,
              column: 13
            },
            end: {
              line: 571,
              column: 7
            }
          }, {
            start: {
              line: 569,
              column: 13
            },
            end: {
              line: 571,
              column: 7
            }
          }],
          line: 569
        },
        "65": {
          loc: {
            start: {
              line: 586,
              column: 2
            },
            end: {
              line: 588,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 586,
              column: 2
            },
            end: {
              line: 588,
              column: 3
            }
          }, {
            start: {
              line: 586,
              column: 2
            },
            end: {
              line: 588,
              column: 3
            }
          }],
          line: 586
        },
        "66": {
          loc: {
            start: {
              line: 590,
              column: 17
            },
            end: {
              line: 594,
              column: 5
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 591,
              column: 4
            },
            end: {
              line: 591,
              column: 12
            }
          }, {
            start: {
              line: 591,
              column: 15
            },
            end: {
              line: 594,
              column: 5
            }
          }],
          line: 590
        },
        "67": {
          loc: {
            start: {
              line: 596,
              column: 2
            },
            end: {
              line: 598,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 596,
              column: 2
            },
            end: {
              line: 598,
              column: 3
            }
          }, {
            start: {
              line: 596,
              column: 2
            },
            end: {
              line: 598,
              column: 3
            }
          }],
          line: 596
        },
        "68": {
          loc: {
            start: {
              line: 596,
              column: 6
            },
            end: {
              line: 596,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 596,
              column: 6
            },
            end: {
              line: 596,
              column: 26
            }
          }, {
            start: {
              line: 596,
              column: 30
            },
            end: {
              line: 596,
              column: 53
            }
          }],
          line: 596
        },
        "69": {
          loc: {
            start: {
              line: 601,
              column: 4
            },
            end: {
              line: 604,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 601,
              column: 4
            },
            end: {
              line: 604,
              column: 5
            }
          }, {
            start: {
              line: 601,
              column: 4
            },
            end: {
              line: 604,
              column: 5
            }
          }],
          line: 601
        },
        "70": {
          loc: {
            start: {
              line: 607,
              column: 6
            },
            end: {
              line: 609,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 607,
              column: 6
            },
            end: {
              line: 609,
              column: 7
            }
          }, {
            start: {
              line: 607,
              column: 6
            },
            end: {
              line: 609,
              column: 7
            }
          }],
          line: 607
        }
      },
      s: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0,
        "13": 0,
        "14": 0,
        "15": 0,
        "16": 0,
        "17": 0,
        "18": 0,
        "19": 0,
        "20": 0,
        "21": 0,
        "22": 0,
        "23": 0,
        "24": 0,
        "25": 0,
        "26": 0,
        "27": 0,
        "28": 0,
        "29": 0,
        "30": 0,
        "31": 0,
        "32": 0,
        "33": 0,
        "34": 0,
        "35": 0,
        "36": 0,
        "37": 0,
        "38": 0,
        "39": 0,
        "40": 0,
        "41": 0,
        "42": 0,
        "43": 0,
        "44": 0,
        "45": 0,
        "46": 0,
        "47": 0,
        "48": 0,
        "49": 0,
        "50": 0,
        "51": 0,
        "52": 0,
        "53": 0,
        "54": 0,
        "55": 0,
        "56": 0,
        "57": 0,
        "58": 0,
        "59": 0,
        "60": 0,
        "61": 0,
        "62": 0,
        "63": 0,
        "64": 0,
        "65": 0,
        "66": 0,
        "67": 0,
        "68": 0,
        "69": 0,
        "70": 0,
        "71": 0,
        "72": 0,
        "73": 0,
        "74": 0,
        "75": 0,
        "76": 0,
        "77": 0,
        "78": 0,
        "79": 0,
        "80": 0,
        "81": 0,
        "82": 0,
        "83": 0,
        "84": 0,
        "85": 0,
        "86": 0,
        "87": 0,
        "88": 0,
        "89": 0,
        "90": 0,
        "91": 0,
        "92": 0,
        "93": 0,
        "94": 0,
        "95": 0,
        "96": 0,
        "97": 0,
        "98": 0,
        "99": 0,
        "100": 0,
        "101": 0,
        "102": 0,
        "103": 0,
        "104": 0,
        "105": 0,
        "106": 0,
        "107": 0,
        "108": 0,
        "109": 0,
        "110": 0,
        "111": 0,
        "112": 0,
        "113": 0,
        "114": 0,
        "115": 0,
        "116": 0,
        "117": 0,
        "118": 0,
        "119": 0,
        "120": 0,
        "121": 0,
        "122": 0,
        "123": 0,
        "124": 0,
        "125": 0,
        "126": 0,
        "127": 0,
        "128": 0,
        "129": 0,
        "130": 0,
        "131": 0,
        "132": 0,
        "133": 0,
        "134": 0,
        "135": 0,
        "136": 0,
        "137": 0,
        "138": 0,
        "139": 0,
        "140": 0,
        "141": 0,
        "142": 0,
        "143": 0,
        "144": 0,
        "145": 0,
        "146": 0,
        "147": 0,
        "148": 0,
        "149": 0,
        "150": 0,
        "151": 0,
        "152": 0,
        "153": 0,
        "154": 0,
        "155": 0,
        "156": 0,
        "157": 0,
        "158": 0,
        "159": 0,
        "160": 0,
        "161": 0,
        "162": 0,
        "163": 0,
        "164": 0,
        "165": 0,
        "166": 0,
        "167": 0,
        "168": 0,
        "169": 0,
        "170": 0,
        "171": 0,
        "172": 0,
        "173": 0,
        "174": 0,
        "175": 0,
        "176": 0,
        "177": 0,
        "178": 0,
        "179": 0,
        "180": 0,
        "181": 0,
        "182": 0,
        "183": 0,
        "184": 0,
        "185": 0,
        "186": 0,
        "187": 0,
        "188": 0,
        "189": 0,
        "190": 0,
        "191": 0,
        "192": 0,
        "193": 0,
        "194": 0,
        "195": 0,
        "196": 0,
        "197": 0,
        "198": 0,
        "199": 0,
        "200": 0,
        "201": 0,
        "202": 0,
        "203": 0,
        "204": 0,
        "205": 0,
        "206": 0,
        "207": 0,
        "208": 0,
        "209": 0,
        "210": 0,
        "211": 0,
        "212": 0,
        "213": 0,
        "214": 0,
        "215": 0,
        "216": 0,
        "217": 0,
        "218": 0,
        "219": 0,
        "220": 0,
        "221": 0,
        "222": 0,
        "223": 0,
        "224": 0,
        "225": 0,
        "226": 0,
        "227": 0,
        "228": 0,
        "229": 0,
        "230": 0,
        "231": 0,
        "232": 0,
        "233": 0,
        "234": 0,
        "235": 0,
        "236": 0,
        "237": 0,
        "238": 0,
        "239": 0,
        "240": 0,
        "241": 0,
        "242": 0,
        "243": 0,
        "244": 0,
        "245": 0,
        "246": 0,
        "247": 0,
        "248": 0,
        "249": 0,
        "250": 0,
        "251": 0,
        "252": 0,
        "253": 0,
        "254": 0,
        "255": 0,
        "256": 0,
        "257": 0,
        "258": 0,
        "259": 0,
        "260": 0,
        "261": 0,
        "262": 0,
        "263": 0,
        "264": 0,
        "265": 0,
        "266": 0,
        "267": 0,
        "268": 0,
        "269": 0,
        "270": 0,
        "271": 0,
        "272": 0,
        "273": 0,
        "274": 0,
        "275": 0,
        "276": 0,
        "277": 0,
        "278": 0,
        "279": 0,
        "280": 0,
        "281": 0,
        "282": 0,
        "283": 0,
        "284": 0,
        "285": 0,
        "286": 0,
        "287": 0,
        "288": 0,
        "289": 0,
        "290": 0,
        "291": 0
      },
      f: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0,
        "13": 0,
        "14": 0,
        "15": 0,
        "16": 0,
        "17": 0,
        "18": 0,
        "19": 0,
        "20": 0,
        "21": 0,
        "22": 0,
        "23": 0,
        "24": 0,
        "25": 0,
        "26": 0,
        "27": 0,
        "28": 0,
        "29": 0,
        "30": 0,
        "31": 0,
        "32": 0,
        "33": 0,
        "34": 0,
        "35": 0,
        "36": 0,
        "37": 0,
        "38": 0,
        "39": 0,
        "40": 0,
        "41": 0,
        "42": 0,
        "43": 0,
        "44": 0,
        "45": 0,
        "46": 0,
        "47": 0
      },
      b: {
        "0": [0, 0],
        "1": [0, 0],
        "2": [0, 0],
        "3": [0, 0],
        "4": [0, 0],
        "5": [0, 0],
        "6": [0, 0],
        "7": [0, 0],
        "8": [0, 0],
        "9": [0, 0],
        "10": [0, 0],
        "11": [0, 0],
        "12": [0, 0],
        "13": [0, 0],
        "14": [0, 0],
        "15": [0, 0],
        "16": [0, 0],
        "17": [0, 0],
        "18": [0, 0],
        "19": [0, 0],
        "20": [0, 0],
        "21": [0, 0],
        "22": [0, 0],
        "23": [0, 0],
        "24": [0, 0],
        "25": [0, 0],
        "26": [0, 0],
        "27": [0, 0],
        "28": [0, 0, 0],
        "29": [0, 0],
        "30": [0, 0],
        "31": [0, 0],
        "32": [0, 0],
        "33": [0, 0],
        "34": [0, 0],
        "35": [0, 0],
        "36": [0, 0],
        "37": [0, 0],
        "38": [0, 0],
        "39": [0, 0],
        "40": [0, 0],
        "41": [0, 0],
        "42": [0, 0],
        "43": [0, 0],
        "44": [0, 0],
        "45": [0, 0],
        "46": [0, 0],
        "47": [0, 0],
        "48": [0, 0],
        "49": [0, 0],
        "50": [0, 0],
        "51": [0, 0],
        "52": [0, 0],
        "53": [0, 0],
        "54": [0, 0],
        "55": [0, 0],
        "56": [0, 0],
        "57": [0, 0],
        "58": [0, 0],
        "59": [0, 0],
        "60": [0, 0],
        "61": [0, 0],
        "62": [0, 0],
        "63": [0, 0],
        "64": [0, 0],
        "65": [0, 0],
        "66": [0, 0],
        "67": [0, 0],
        "68": [0, 0],
        "69": [0, 0],
        "70": [0, 0]
      },
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "c69f7c41d365b682a3cef81a9fc15b869f07679d"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }

    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_a00hz9t35 = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }

  cov_a00hz9t35();

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_a00hz9t35().s[0]++, 'modal');
  var VERSION = (cov_a00hz9t35().s[1]++, '4.5.3');
  var DATA_KEY = (cov_a00hz9t35().s[2]++, 'bs.modal');
  var EVENT_KEY = (cov_a00hz9t35().s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_a00hz9t35().s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_a00hz9t35().s[5]++, $__default['default'].fn[NAME]);
  var ESCAPE_KEYCODE = (cov_a00hz9t35().s[6]++, 27); // KeyboardEvent.which value for Escape (Esc) key

  var Default = (cov_a00hz9t35().s[7]++, {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  });
  var DefaultType = (cov_a00hz9t35().s[8]++, {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  });
  var EVENT_HIDE = (cov_a00hz9t35().s[9]++, "hide" + EVENT_KEY);
  var EVENT_HIDE_PREVENTED = (cov_a00hz9t35().s[10]++, "hidePrevented" + EVENT_KEY);
  var EVENT_HIDDEN = (cov_a00hz9t35().s[11]++, "hidden" + EVENT_KEY);
  var EVENT_SHOW = (cov_a00hz9t35().s[12]++, "show" + EVENT_KEY);
  var EVENT_SHOWN = (cov_a00hz9t35().s[13]++, "shown" + EVENT_KEY);
  var EVENT_FOCUSIN = (cov_a00hz9t35().s[14]++, "focusin" + EVENT_KEY);
  var EVENT_RESIZE = (cov_a00hz9t35().s[15]++, "resize" + EVENT_KEY);
  var EVENT_CLICK_DISMISS = (cov_a00hz9t35().s[16]++, "click.dismiss" + EVENT_KEY);
  var EVENT_KEYDOWN_DISMISS = (cov_a00hz9t35().s[17]++, "keydown.dismiss" + EVENT_KEY);
  var EVENT_MOUSEUP_DISMISS = (cov_a00hz9t35().s[18]++, "mouseup.dismiss" + EVENT_KEY);
  var EVENT_MOUSEDOWN_DISMISS = (cov_a00hz9t35().s[19]++, "mousedown.dismiss" + EVENT_KEY);
  var EVENT_CLICK_DATA_API = (cov_a00hz9t35().s[20]++, "click" + EVENT_KEY + DATA_API_KEY);
  var CLASS_NAME_SCROLLABLE = (cov_a00hz9t35().s[21]++, 'modal-dialog-scrollable');
  var CLASS_NAME_SCROLLBAR_MEASURER = (cov_a00hz9t35().s[22]++, 'modal-scrollbar-measure');
  var CLASS_NAME_BACKDROP = (cov_a00hz9t35().s[23]++, 'modal-backdrop');
  var CLASS_NAME_OPEN = (cov_a00hz9t35().s[24]++, 'modal-open');
  var CLASS_NAME_FADE = (cov_a00hz9t35().s[25]++, 'fade');
  var CLASS_NAME_SHOW = (cov_a00hz9t35().s[26]++, 'show');
  var CLASS_NAME_STATIC = (cov_a00hz9t35().s[27]++, 'modal-static');
  var SELECTOR_DIALOG = (cov_a00hz9t35().s[28]++, '.modal-dialog');
  var SELECTOR_MODAL_BODY = (cov_a00hz9t35().s[29]++, '.modal-body');
  var SELECTOR_DATA_TOGGLE = (cov_a00hz9t35().s[30]++, '[data-toggle="modal"]');
  var SELECTOR_DATA_DISMISS = (cov_a00hz9t35().s[31]++, '[data-dismiss="modal"]');
  var SELECTOR_FIXED_CONTENT = (cov_a00hz9t35().s[32]++, '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top');
  var SELECTOR_STICKY_CONTENT = (cov_a00hz9t35().s[33]++, '.sticky-top');
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      cov_a00hz9t35().f[0]++;
      cov_a00hz9t35().s[34]++;
      this._config = this._getConfig(config);
      cov_a00hz9t35().s[35]++;
      this._element = element;
      cov_a00hz9t35().s[36]++;
      this._dialog = element.querySelector(SELECTOR_DIALOG);
      cov_a00hz9t35().s[37]++;
      this._backdrop = null;
      cov_a00hz9t35().s[38]++;
      this._isShown = false;
      cov_a00hz9t35().s[39]++;
      this._isBodyOverflowing = false;
      cov_a00hz9t35().s[40]++;
      this._ignoreBackdropClick = false;
      cov_a00hz9t35().s[41]++;
      this._isTransitioning = false;
      cov_a00hz9t35().s[42]++;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      cov_a00hz9t35().f[3]++;
      cov_a00hz9t35().s[45]++;
      return this._isShown ? (cov_a00hz9t35().b[0][0]++, this.hide()) : (cov_a00hz9t35().b[0][1]++, this.show(relatedTarget));
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      cov_a00hz9t35().f[4]++;
      cov_a00hz9t35().s[46]++;

      if ((cov_a00hz9t35().b[2][0]++, this._isShown) || (cov_a00hz9t35().b[2][1]++, this._isTransitioning)) {
        cov_a00hz9t35().b[1][0]++;
        cov_a00hz9t35().s[47]++;
        return;
      } else {
        cov_a00hz9t35().b[1][1]++;
      }

      cov_a00hz9t35().s[48]++;

      if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE)) {
        cov_a00hz9t35().b[3][0]++;
        cov_a00hz9t35().s[49]++;
        this._isTransitioning = true;
      } else {
        cov_a00hz9t35().b[3][1]++;
      }

      var showEvent = (cov_a00hz9t35().s[50]++, $__default['default'].Event(EVENT_SHOW, {
        relatedTarget: relatedTarget
      }));
      cov_a00hz9t35().s[51]++;
      $__default['default'](this._element).trigger(showEvent);
      cov_a00hz9t35().s[52]++;

      if ((cov_a00hz9t35().b[5][0]++, this._isShown) || (cov_a00hz9t35().b[5][1]++, showEvent.isDefaultPrevented())) {
        cov_a00hz9t35().b[4][0]++;
        cov_a00hz9t35().s[53]++;
        return;
      } else {
        cov_a00hz9t35().b[4][1]++;
      }

      cov_a00hz9t35().s[54]++;
      this._isShown = true;
      cov_a00hz9t35().s[55]++;

      this._checkScrollbar();

      cov_a00hz9t35().s[56]++;

      this._setScrollbar();

      cov_a00hz9t35().s[57]++;

      this._adjustDialog();

      cov_a00hz9t35().s[58]++;

      this._setEscapeEvent();

      cov_a00hz9t35().s[59]++;

      this._setResizeEvent();

      cov_a00hz9t35().s[60]++;
      $__default['default'](this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
        cov_a00hz9t35().f[5]++;
        cov_a00hz9t35().s[61]++;
        return _this.hide(event);
      });
      cov_a00hz9t35().s[62]++;
      $__default['default'](this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
        cov_a00hz9t35().f[6]++;
        cov_a00hz9t35().s[63]++;
        $__default['default'](_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
          cov_a00hz9t35().f[7]++;
          cov_a00hz9t35().s[64]++;

          if ($__default['default'](event.target).is(_this._element)) {
            cov_a00hz9t35().b[6][0]++;
            cov_a00hz9t35().s[65]++;
            _this._ignoreBackdropClick = true;
          } else {
            cov_a00hz9t35().b[6][1]++;
          }
        });
      });
      cov_a00hz9t35().s[66]++;

      this._showBackdrop(function () {
        cov_a00hz9t35().f[8]++;
        cov_a00hz9t35().s[67]++;
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      cov_a00hz9t35().f[9]++;
      cov_a00hz9t35().s[68]++;

      if (event) {
        cov_a00hz9t35().b[7][0]++;
        cov_a00hz9t35().s[69]++;
        event.preventDefault();
      } else {
        cov_a00hz9t35().b[7][1]++;
      }

      cov_a00hz9t35().s[70]++;

      if ((cov_a00hz9t35().b[9][0]++, !this._isShown) || (cov_a00hz9t35().b[9][1]++, this._isTransitioning)) {
        cov_a00hz9t35().b[8][0]++;
        cov_a00hz9t35().s[71]++;
        return;
      } else {
        cov_a00hz9t35().b[8][1]++;
      }

      var hideEvent = (cov_a00hz9t35().s[72]++, $__default['default'].Event(EVENT_HIDE));
      cov_a00hz9t35().s[73]++;
      $__default['default'](this._element).trigger(hideEvent);
      cov_a00hz9t35().s[74]++;

      if ((cov_a00hz9t35().b[11][0]++, !this._isShown) || (cov_a00hz9t35().b[11][1]++, hideEvent.isDefaultPrevented())) {
        cov_a00hz9t35().b[10][0]++;
        cov_a00hz9t35().s[75]++;
        return;
      } else {
        cov_a00hz9t35().b[10][1]++;
      }

      cov_a00hz9t35().s[76]++;
      this._isShown = false;
      var transition = (cov_a00hz9t35().s[77]++, $__default['default'](this._element).hasClass(CLASS_NAME_FADE));
      cov_a00hz9t35().s[78]++;

      if (transition) {
        cov_a00hz9t35().b[12][0]++;
        cov_a00hz9t35().s[79]++;
        this._isTransitioning = true;
      } else {
        cov_a00hz9t35().b[12][1]++;
      }

      cov_a00hz9t35().s[80]++;

      this._setEscapeEvent();

      cov_a00hz9t35().s[81]++;

      this._setResizeEvent();

      cov_a00hz9t35().s[82]++;
      $__default['default'](document).off(EVENT_FOCUSIN);
      cov_a00hz9t35().s[83]++;
      $__default['default'](this._element).removeClass(CLASS_NAME_SHOW);
      cov_a00hz9t35().s[84]++;
      $__default['default'](this._element).off(EVENT_CLICK_DISMISS);
      cov_a00hz9t35().s[85]++;
      $__default['default'](this._dialog).off(EVENT_MOUSEDOWN_DISMISS);
      cov_a00hz9t35().s[86]++;

      if (transition) {
        cov_a00hz9t35().b[13][0]++;
        var transitionDuration = (cov_a00hz9t35().s[87]++, Util__default['default'].getTransitionDurationFromElement(this._element));
        cov_a00hz9t35().s[88]++;
        $__default['default'](this._element).one(Util__default['default'].TRANSITION_END, function (event) {
          cov_a00hz9t35().f[10]++;
          cov_a00hz9t35().s[89]++;
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        cov_a00hz9t35().b[13][1]++;
        cov_a00hz9t35().s[90]++;

        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      cov_a00hz9t35().f[11]++;
      cov_a00hz9t35().s[91]++;
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        cov_a00hz9t35().f[12]++;
        cov_a00hz9t35().s[92]++;
        return $__default['default'](htmlElement).off(EVENT_KEY);
      });
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      cov_a00hz9t35().s[93]++;
      $__default['default'](document).off(EVENT_FOCUSIN);
      cov_a00hz9t35().s[94]++;
      $__default['default'].removeData(this._element, DATA_KEY);
      cov_a00hz9t35().s[95]++;
      this._config = null;
      cov_a00hz9t35().s[96]++;
      this._element = null;
      cov_a00hz9t35().s[97]++;
      this._dialog = null;
      cov_a00hz9t35().s[98]++;
      this._backdrop = null;
      cov_a00hz9t35().s[99]++;
      this._isShown = null;
      cov_a00hz9t35().s[100]++;
      this._isBodyOverflowing = null;
      cov_a00hz9t35().s[101]++;
      this._ignoreBackdropClick = null;
      cov_a00hz9t35().s[102]++;
      this._isTransitioning = null;
      cov_a00hz9t35().s[103]++;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      cov_a00hz9t35().f[13]++;
      cov_a00hz9t35().s[104]++;

      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      cov_a00hz9t35().f[14]++;
      cov_a00hz9t35().s[105]++;
      config = _extends({}, Default, config);
      cov_a00hz9t35().s[106]++;
      Util__default['default'].typeCheckConfig(NAME, config, DefaultType);
      cov_a00hz9t35().s[107]++;
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      cov_a00hz9t35().f[15]++;
      cov_a00hz9t35().s[108]++;

      if (this._config.backdrop === 'static') {
        cov_a00hz9t35().b[14][0]++;
        var hideEventPrevented = (cov_a00hz9t35().s[109]++, $__default['default'].Event(EVENT_HIDE_PREVENTED));
        cov_a00hz9t35().s[110]++;
        $__default['default'](this._element).trigger(hideEventPrevented);
        cov_a00hz9t35().s[111]++;

        if (hideEventPrevented.isDefaultPrevented()) {
          cov_a00hz9t35().b[15][0]++;
          cov_a00hz9t35().s[112]++;
          return;
        } else {
          cov_a00hz9t35().b[15][1]++;
        }

        var isModalOverflowing = (cov_a00hz9t35().s[113]++, this._element.scrollHeight > document.documentElement.clientHeight);
        cov_a00hz9t35().s[114]++;

        if (!isModalOverflowing) {
          cov_a00hz9t35().b[16][0]++;
          cov_a00hz9t35().s[115]++;
          this._element.style.overflowY = 'hidden';
        } else {
          cov_a00hz9t35().b[16][1]++;
        }

        cov_a00hz9t35().s[116]++;

        this._element.classList.add(CLASS_NAME_STATIC);

        var modalTransitionDuration = (cov_a00hz9t35().s[117]++, Util__default['default'].getTransitionDurationFromElement(this._dialog));
        cov_a00hz9t35().s[118]++;
        $__default['default'](this._element).off(Util__default['default'].TRANSITION_END);
        cov_a00hz9t35().s[119]++;
        $__default['default'](this._element).one(Util__default['default'].TRANSITION_END, function () {
          cov_a00hz9t35().f[16]++;
          cov_a00hz9t35().s[120]++;

          _this3._element.classList.remove(CLASS_NAME_STATIC);

          cov_a00hz9t35().s[121]++;

          if (!isModalOverflowing) {
            cov_a00hz9t35().b[17][0]++;
            cov_a00hz9t35().s[122]++;
            $__default['default'](_this3._element).one(Util__default['default'].TRANSITION_END, function () {
              cov_a00hz9t35().f[17]++;
              cov_a00hz9t35().s[123]++;
              _this3._element.style.overflowY = '';
            }).emulateTransitionEnd(_this3._element, modalTransitionDuration);
          } else {
            cov_a00hz9t35().b[17][1]++;
          }
        }).emulateTransitionEnd(modalTransitionDuration);
        cov_a00hz9t35().s[124]++;

        this._element.focus();
      } else {
        cov_a00hz9t35().b[14][1]++;
        cov_a00hz9t35().s[125]++;
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      cov_a00hz9t35().f[18]++;
      var transition = (cov_a00hz9t35().s[126]++, $__default['default'](this._element).hasClass(CLASS_NAME_FADE));
      var modalBody = (cov_a00hz9t35().s[127]++, this._dialog ? (cov_a00hz9t35().b[18][0]++, this._dialog.querySelector(SELECTOR_MODAL_BODY)) : (cov_a00hz9t35().b[18][1]++, null));
      cov_a00hz9t35().s[128]++;

      if ((cov_a00hz9t35().b[20][0]++, !this._element.parentNode) || (cov_a00hz9t35().b[20][1]++, this._element.parentNode.nodeType !== Node.ELEMENT_NODE)) {
        cov_a00hz9t35().b[19][0]++;
        cov_a00hz9t35().s[129]++;
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      } else {
        cov_a00hz9t35().b[19][1]++;
      }

      cov_a00hz9t35().s[130]++;
      this._element.style.display = 'block';
      cov_a00hz9t35().s[131]++;

      this._element.removeAttribute('aria-hidden');

      cov_a00hz9t35().s[132]++;

      this._element.setAttribute('aria-modal', true);

      cov_a00hz9t35().s[133]++;

      this._element.setAttribute('role', 'dialog');

      cov_a00hz9t35().s[134]++;

      if ((cov_a00hz9t35().b[22][0]++, $__default['default'](this._dialog).hasClass(CLASS_NAME_SCROLLABLE)) && (cov_a00hz9t35().b[22][1]++, modalBody)) {
        cov_a00hz9t35().b[21][0]++;
        cov_a00hz9t35().s[135]++;
        modalBody.scrollTop = 0;
      } else {
        cov_a00hz9t35().b[21][1]++;
        cov_a00hz9t35().s[136]++;
        this._element.scrollTop = 0;
      }

      cov_a00hz9t35().s[137]++;

      if (transition) {
        cov_a00hz9t35().b[23][0]++;
        cov_a00hz9t35().s[138]++;
        Util__default['default'].reflow(this._element);
      } else {
        cov_a00hz9t35().b[23][1]++;
      }

      cov_a00hz9t35().s[139]++;
      $__default['default'](this._element).addClass(CLASS_NAME_SHOW);
      cov_a00hz9t35().s[140]++;

      if (this._config.focus) {
        cov_a00hz9t35().b[24][0]++;
        cov_a00hz9t35().s[141]++;

        this._enforceFocus();
      } else {
        cov_a00hz9t35().b[24][1]++;
      }

      var shownEvent = (cov_a00hz9t35().s[142]++, $__default['default'].Event(EVENT_SHOWN, {
        relatedTarget: relatedTarget
      }));
      cov_a00hz9t35().s[143]++;

      var transitionComplete = function transitionComplete() {
        cov_a00hz9t35().f[19]++;
        cov_a00hz9t35().s[144]++;

        if (_this4._config.focus) {
          cov_a00hz9t35().b[25][0]++;
          cov_a00hz9t35().s[145]++;

          _this4._element.focus();
        } else {
          cov_a00hz9t35().b[25][1]++;
        }

        cov_a00hz9t35().s[146]++;
        _this4._isTransitioning = false;
        cov_a00hz9t35().s[147]++;
        $__default['default'](_this4._element).trigger(shownEvent);
      };

      cov_a00hz9t35().s[148]++;

      if (transition) {
        cov_a00hz9t35().b[26][0]++;
        var transitionDuration = (cov_a00hz9t35().s[149]++, Util__default['default'].getTransitionDurationFromElement(this._dialog));
        cov_a00hz9t35().s[150]++;
        $__default['default'](this._dialog).one(Util__default['default'].TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        cov_a00hz9t35().b[26][1]++;
        cov_a00hz9t35().s[151]++;
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      cov_a00hz9t35().f[20]++;
      cov_a00hz9t35().s[152]++;
      $__default['default'](document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
      .on(EVENT_FOCUSIN, function (event) {
        cov_a00hz9t35().f[21]++;
        cov_a00hz9t35().s[153]++;

        if ((cov_a00hz9t35().b[28][0]++, document !== event.target) && (cov_a00hz9t35().b[28][1]++, _this5._element !== event.target) && (cov_a00hz9t35().b[28][2]++, $__default['default'](_this5._element).has(event.target).length === 0)) {
          cov_a00hz9t35().b[27][0]++;
          cov_a00hz9t35().s[154]++;

          _this5._element.focus();
        } else {
          cov_a00hz9t35().b[27][1]++;
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      cov_a00hz9t35().f[22]++;
      cov_a00hz9t35().s[155]++;

      if (this._isShown) {
        cov_a00hz9t35().b[29][0]++;
        cov_a00hz9t35().s[156]++;
        $__default['default'](this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
          cov_a00hz9t35().f[23]++;
          cov_a00hz9t35().s[157]++;

          if ((cov_a00hz9t35().b[31][0]++, _this6._config.keyboard) && (cov_a00hz9t35().b[31][1]++, event.which === ESCAPE_KEYCODE)) {
            cov_a00hz9t35().b[30][0]++;
            cov_a00hz9t35().s[158]++;
            event.preventDefault();
            cov_a00hz9t35().s[159]++;

            _this6.hide();
          } else {
            cov_a00hz9t35().b[30][1]++;
            cov_a00hz9t35().s[160]++;

            if ((cov_a00hz9t35().b[33][0]++, !_this6._config.keyboard) && (cov_a00hz9t35().b[33][1]++, event.which === ESCAPE_KEYCODE)) {
              cov_a00hz9t35().b[32][0]++;
              cov_a00hz9t35().s[161]++;

              _this6._triggerBackdropTransition();
            } else {
              cov_a00hz9t35().b[32][1]++;
            }
          }
        });
      } else {
        cov_a00hz9t35().b[29][1]++;
        cov_a00hz9t35().s[162]++;

        if (!this._isShown) {
          cov_a00hz9t35().b[34][0]++;
          cov_a00hz9t35().s[163]++;
          $__default['default'](this._element).off(EVENT_KEYDOWN_DISMISS);
        } else {
          cov_a00hz9t35().b[34][1]++;
        }
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      cov_a00hz9t35().f[24]++;
      cov_a00hz9t35().s[164]++;

      if (this._isShown) {
        cov_a00hz9t35().b[35][0]++;
        cov_a00hz9t35().s[165]++;
        $__default['default'](window).on(EVENT_RESIZE, function (event) {
          cov_a00hz9t35().f[25]++;
          cov_a00hz9t35().s[166]++;
          return _this7.handleUpdate(event);
        });
      } else {
        cov_a00hz9t35().b[35][1]++;
        cov_a00hz9t35().s[167]++;
        $__default['default'](window).off(EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      cov_a00hz9t35().f[26]++;
      cov_a00hz9t35().s[168]++;
      this._element.style.display = 'none';
      cov_a00hz9t35().s[169]++;

      this._element.setAttribute('aria-hidden', true);

      cov_a00hz9t35().s[170]++;

      this._element.removeAttribute('aria-modal');

      cov_a00hz9t35().s[171]++;

      this._element.removeAttribute('role');

      cov_a00hz9t35().s[172]++;
      this._isTransitioning = false;
      cov_a00hz9t35().s[173]++;

      this._showBackdrop(function () {
        cov_a00hz9t35().f[27]++;
        cov_a00hz9t35().s[174]++;
        $__default['default'](document.body).removeClass(CLASS_NAME_OPEN);
        cov_a00hz9t35().s[175]++;

        _this8._resetAdjustments();

        cov_a00hz9t35().s[176]++;

        _this8._resetScrollbar();

        cov_a00hz9t35().s[177]++;
        $__default['default'](_this8._element).trigger(EVENT_HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      cov_a00hz9t35().f[28]++;
      cov_a00hz9t35().s[178]++;

      if (this._backdrop) {
        cov_a00hz9t35().b[36][0]++;
        cov_a00hz9t35().s[179]++;
        $__default['default'](this._backdrop).remove();
        cov_a00hz9t35().s[180]++;
        this._backdrop = null;
      } else {
        cov_a00hz9t35().b[36][1]++;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      cov_a00hz9t35().f[29]++;
      var animate = (cov_a00hz9t35().s[181]++, $__default['default'](this._element).hasClass(CLASS_NAME_FADE) ? (cov_a00hz9t35().b[37][0]++, CLASS_NAME_FADE) : (cov_a00hz9t35().b[37][1]++, ''));
      cov_a00hz9t35().s[182]++;

      if ((cov_a00hz9t35().b[39][0]++, this._isShown) && (cov_a00hz9t35().b[39][1]++, this._config.backdrop)) {
        cov_a00hz9t35().b[38][0]++;
        cov_a00hz9t35().s[183]++;
        this._backdrop = document.createElement('div');
        cov_a00hz9t35().s[184]++;
        this._backdrop.className = CLASS_NAME_BACKDROP;
        cov_a00hz9t35().s[185]++;

        if (animate) {
          cov_a00hz9t35().b[40][0]++;
          cov_a00hz9t35().s[186]++;

          this._backdrop.classList.add(animate);
        } else {
          cov_a00hz9t35().b[40][1]++;
        }

        cov_a00hz9t35().s[187]++;
        $__default['default'](this._backdrop).appendTo(document.body);
        cov_a00hz9t35().s[188]++;
        $__default['default'](this._element).on(EVENT_CLICK_DISMISS, function (event) {
          cov_a00hz9t35().f[30]++;
          cov_a00hz9t35().s[189]++;

          if (_this9._ignoreBackdropClick) {
            cov_a00hz9t35().b[41][0]++;
            cov_a00hz9t35().s[190]++;
            _this9._ignoreBackdropClick = false;
            cov_a00hz9t35().s[191]++;
            return;
          } else {
            cov_a00hz9t35().b[41][1]++;
          }

          cov_a00hz9t35().s[192]++;

          if (event.target !== event.currentTarget) {
            cov_a00hz9t35().b[42][0]++;
            cov_a00hz9t35().s[193]++;
            return;
          } else {
            cov_a00hz9t35().b[42][1]++;
          }

          cov_a00hz9t35().s[194]++;

          _this9._triggerBackdropTransition();
        });
        cov_a00hz9t35().s[195]++;

        if (animate) {
          cov_a00hz9t35().b[43][0]++;
          cov_a00hz9t35().s[196]++;
          Util__default['default'].reflow(this._backdrop);
        } else {
          cov_a00hz9t35().b[43][1]++;
        }

        cov_a00hz9t35().s[197]++;
        $__default['default'](this._backdrop).addClass(CLASS_NAME_SHOW);
        cov_a00hz9t35().s[198]++;

        if (!callback) {
          cov_a00hz9t35().b[44][0]++;
          cov_a00hz9t35().s[199]++;
          return;
        } else {
          cov_a00hz9t35().b[44][1]++;
        }

        cov_a00hz9t35().s[200]++;

        if (!animate) {
          cov_a00hz9t35().b[45][0]++;
          cov_a00hz9t35().s[201]++;
          callback();
          cov_a00hz9t35().s[202]++;
          return;
        } else {
          cov_a00hz9t35().b[45][1]++;
        }

        var backdropTransitionDuration = (cov_a00hz9t35().s[203]++, Util__default['default'].getTransitionDurationFromElement(this._backdrop));
        cov_a00hz9t35().s[204]++;
        $__default['default'](this._backdrop).one(Util__default['default'].TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else {
        cov_a00hz9t35().b[38][1]++;
        cov_a00hz9t35().s[205]++;

        if ((cov_a00hz9t35().b[47][0]++, !this._isShown) && (cov_a00hz9t35().b[47][1]++, this._backdrop)) {
          cov_a00hz9t35().b[46][0]++;
          cov_a00hz9t35().s[206]++;
          $__default['default'](this._backdrop).removeClass(CLASS_NAME_SHOW);
          cov_a00hz9t35().s[207]++;

          var callbackRemove = function callbackRemove() {
            cov_a00hz9t35().f[31]++;
            cov_a00hz9t35().s[208]++;

            _this9._removeBackdrop();

            cov_a00hz9t35().s[209]++;

            if (callback) {
              cov_a00hz9t35().b[48][0]++;
              cov_a00hz9t35().s[210]++;
              callback();
            } else {
              cov_a00hz9t35().b[48][1]++;
            }
          };

          cov_a00hz9t35().s[211]++;

          if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE)) {
            cov_a00hz9t35().b[49][0]++;

            var _backdropTransitionDuration = (cov_a00hz9t35().s[212]++, Util__default['default'].getTransitionDurationFromElement(this._backdrop));

            cov_a00hz9t35().s[213]++;
            $__default['default'](this._backdrop).one(Util__default['default'].TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
          } else {
            cov_a00hz9t35().b[49][1]++;
            cov_a00hz9t35().s[214]++;
            callbackRemove();
          }
        } else {
          cov_a00hz9t35().b[46][1]++;
          cov_a00hz9t35().s[215]++;

          if (callback) {
            cov_a00hz9t35().b[50][0]++;
            cov_a00hz9t35().s[216]++;
            callback();
          } else {
            cov_a00hz9t35().b[50][1]++;
          }
        }
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      cov_a00hz9t35().f[32]++;
      var isModalOverflowing = (cov_a00hz9t35().s[217]++, this._element.scrollHeight > document.documentElement.clientHeight);
      cov_a00hz9t35().s[218]++;

      if ((cov_a00hz9t35().b[52][0]++, !this._isBodyOverflowing) && (cov_a00hz9t35().b[52][1]++, isModalOverflowing)) {
        cov_a00hz9t35().b[51][0]++;
        cov_a00hz9t35().s[219]++;
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      } else {
        cov_a00hz9t35().b[51][1]++;
      }

      cov_a00hz9t35().s[220]++;

      if ((cov_a00hz9t35().b[54][0]++, this._isBodyOverflowing) && (cov_a00hz9t35().b[54][1]++, !isModalOverflowing)) {
        cov_a00hz9t35().b[53][0]++;
        cov_a00hz9t35().s[221]++;
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      } else {
        cov_a00hz9t35().b[53][1]++;
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      cov_a00hz9t35().f[33]++;
      cov_a00hz9t35().s[222]++;
      this._element.style.paddingLeft = '';
      cov_a00hz9t35().s[223]++;
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      cov_a00hz9t35().f[34]++;
      var rect = (cov_a00hz9t35().s[224]++, document.body.getBoundingClientRect());
      cov_a00hz9t35().s[225]++;
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      cov_a00hz9t35().s[226]++;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      cov_a00hz9t35().f[35]++;
      cov_a00hz9t35().s[227]++;

      if (this._isBodyOverflowing) {
        cov_a00hz9t35().b[55][0]++;
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = (cov_a00hz9t35().s[228]++, [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT)));
        var stickyContent = (cov_a00hz9t35().s[229]++, [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT))); // Adjust fixed content padding

        cov_a00hz9t35().s[230]++;
        $__default['default'](fixedContent).each(function (index, element) {
          cov_a00hz9t35().f[36]++;
          var actualPadding = (cov_a00hz9t35().s[231]++, element.style.paddingRight);
          var calculatedPadding = (cov_a00hz9t35().s[232]++, $__default['default'](element).css('padding-right'));
          cov_a00hz9t35().s[233]++;
          $__default['default'](element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        cov_a00hz9t35().s[234]++;
        $__default['default'](stickyContent).each(function (index, element) {
          cov_a00hz9t35().f[37]++;
          var actualMargin = (cov_a00hz9t35().s[235]++, element.style.marginRight);
          var calculatedMargin = (cov_a00hz9t35().s[236]++, $__default['default'](element).css('margin-right'));
          cov_a00hz9t35().s[237]++;
          $__default['default'](element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = (cov_a00hz9t35().s[238]++, document.body.style.paddingRight);
        var calculatedPadding = (cov_a00hz9t35().s[239]++, $__default['default'](document.body).css('padding-right'));
        cov_a00hz9t35().s[240]++;
        $__default['default'](document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      } else {
        cov_a00hz9t35().b[55][1]++;
      }

      cov_a00hz9t35().s[241]++;
      $__default['default'](document.body).addClass(CLASS_NAME_OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      cov_a00hz9t35().f[38]++;
      // Restore fixed content padding
      var fixedContent = (cov_a00hz9t35().s[242]++, [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT)));
      cov_a00hz9t35().s[243]++;
      $__default['default'](fixedContent).each(function (index, element) {
        cov_a00hz9t35().f[39]++;
        var padding = (cov_a00hz9t35().s[244]++, $__default['default'](element).data('padding-right'));
        cov_a00hz9t35().s[245]++;
        $__default['default'](element).removeData('padding-right');
        cov_a00hz9t35().s[246]++;
        element.style.paddingRight = padding ? (cov_a00hz9t35().b[56][0]++, padding) : (cov_a00hz9t35().b[56][1]++, '');
      }); // Restore sticky content

      var elements = (cov_a00hz9t35().s[247]++, [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT)));
      cov_a00hz9t35().s[248]++;
      $__default['default'](elements).each(function (index, element) {
        cov_a00hz9t35().f[40]++;
        var margin = (cov_a00hz9t35().s[249]++, $__default['default'](element).data('margin-right'));
        cov_a00hz9t35().s[250]++;

        if (typeof margin !== 'undefined') {
          cov_a00hz9t35().b[57][0]++;
          cov_a00hz9t35().s[251]++;
          $__default['default'](element).css('margin-right', margin).removeData('margin-right');
        } else {
          cov_a00hz9t35().b[57][1]++;
        }
      }); // Restore body padding

      var padding = (cov_a00hz9t35().s[252]++, $__default['default'](document.body).data('padding-right'));
      cov_a00hz9t35().s[253]++;
      $__default['default'](document.body).removeData('padding-right');
      cov_a00hz9t35().s[254]++;
      document.body.style.paddingRight = padding ? (cov_a00hz9t35().b[58][0]++, padding) : (cov_a00hz9t35().b[58][1]++, '');
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      cov_a00hz9t35().f[41]++;
      // thx d.walsh
      var scrollDiv = (cov_a00hz9t35().s[255]++, document.createElement('div'));
      cov_a00hz9t35().s[256]++;
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      cov_a00hz9t35().s[257]++;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = (cov_a00hz9t35().s[258]++, scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth);
      cov_a00hz9t35().s[259]++;
      document.body.removeChild(scrollDiv);
      cov_a00hz9t35().s[260]++;
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      cov_a00hz9t35().f[42]++;
      cov_a00hz9t35().s[261]++;
      return this.each(function () {
        cov_a00hz9t35().f[43]++;
        var data = (cov_a00hz9t35().s[262]++, $__default['default'](this).data(DATA_KEY));

        var _config = (cov_a00hz9t35().s[263]++, _extends({}, Default, $__default['default'](this).data(), (cov_a00hz9t35().b[60][0]++, typeof config === 'object') && (cov_a00hz9t35().b[60][1]++, config) ? (cov_a00hz9t35().b[59][0]++, config) : (cov_a00hz9t35().b[59][1]++, {})));

        cov_a00hz9t35().s[264]++;

        if (!data) {
          cov_a00hz9t35().b[61][0]++;
          cov_a00hz9t35().s[265]++;
          data = new Modal(this, _config);
          cov_a00hz9t35().s[266]++;
          $__default['default'](this).data(DATA_KEY, data);
        } else {
          cov_a00hz9t35().b[61][1]++;
        }

        cov_a00hz9t35().s[267]++;

        if (typeof config === 'string') {
          cov_a00hz9t35().b[62][0]++;
          cov_a00hz9t35().s[268]++;

          if (typeof data[config] === 'undefined') {
            cov_a00hz9t35().b[63][0]++;
            cov_a00hz9t35().s[269]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_a00hz9t35().b[63][1]++;
          }

          cov_a00hz9t35().s[270]++;
          data[config](relatedTarget);
        } else {
          cov_a00hz9t35().b[62][1]++;
          cov_a00hz9t35().s[271]++;

          if (_config.show) {
            cov_a00hz9t35().b[64][0]++;
            cov_a00hz9t35().s[272]++;
            data.show(relatedTarget);
          } else {
            cov_a00hz9t35().b[64][1]++;
          }
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        cov_a00hz9t35().f[1]++;
        cov_a00hz9t35().s[43]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_a00hz9t35().f[2]++;
        cov_a00hz9t35().s[44]++;
        return Default;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  cov_a00hz9t35().s[273]++;
  $__default['default'](document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    var _this11 = this;

    cov_a00hz9t35().f[44]++;
    var target;
    var selector = (cov_a00hz9t35().s[274]++, Util__default['default'].getSelectorFromElement(this));
    cov_a00hz9t35().s[275]++;

    if (selector) {
      cov_a00hz9t35().b[65][0]++;
      cov_a00hz9t35().s[276]++;
      target = document.querySelector(selector);
    } else {
      cov_a00hz9t35().b[65][1]++;
    }

    var config = (cov_a00hz9t35().s[277]++, $__default['default'](target).data(DATA_KEY) ? (cov_a00hz9t35().b[66][0]++, 'toggle') : (cov_a00hz9t35().b[66][1]++, _extends({}, $__default['default'](target).data(), $__default['default'](this).data())));
    cov_a00hz9t35().s[278]++;

    if ((cov_a00hz9t35().b[68][0]++, this.tagName === 'A') || (cov_a00hz9t35().b[68][1]++, this.tagName === 'AREA')) {
      cov_a00hz9t35().b[67][0]++;
      cov_a00hz9t35().s[279]++;
      event.preventDefault();
    } else {
      cov_a00hz9t35().b[67][1]++;
    }

    var $target = (cov_a00hz9t35().s[280]++, $__default['default'](target).one(EVENT_SHOW, function (showEvent) {
      cov_a00hz9t35().f[45]++;
      cov_a00hz9t35().s[281]++;

      if (showEvent.isDefaultPrevented()) {
        cov_a00hz9t35().b[69][0]++;
        cov_a00hz9t35().s[282]++;
        // Only register focus restorer if modal will actually get shown
        return;
      } else {
        cov_a00hz9t35().b[69][1]++;
      }

      cov_a00hz9t35().s[283]++;
      $target.one(EVENT_HIDDEN, function () {
        cov_a00hz9t35().f[46]++;
        cov_a00hz9t35().s[284]++;

        if ($__default['default'](_this11).is(':visible')) {
          cov_a00hz9t35().b[70][0]++;
          cov_a00hz9t35().s[285]++;

          _this11.focus();
        } else {
          cov_a00hz9t35().b[70][1]++;
        }
      });
    }));
    cov_a00hz9t35().s[286]++;

    Modal._jQueryInterface.call($__default['default'](target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_a00hz9t35().s[287]++;
  $__default['default'].fn[NAME] = Modal._jQueryInterface;
  cov_a00hz9t35().s[288]++;
  $__default['default'].fn[NAME].Constructor = Modal;
  cov_a00hz9t35().s[289]++;

  $__default['default'].fn[NAME].noConflict = function () {
    cov_a00hz9t35().f[47]++;
    cov_a00hz9t35().s[290]++;
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    cov_a00hz9t35().s[291]++;
    return Modal._jQueryInterface;
  };

  return Modal;

})));
//# sourceMappingURL=modal.js.map
