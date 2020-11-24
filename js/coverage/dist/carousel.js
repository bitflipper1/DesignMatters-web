/*!
  * Bootstrap carousel.js v4.5.3 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Carousel = factory(global.jQuery, global.Util));
}(this, (function ($, Util) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var Util__default = /*#__PURE__*/_interopDefaultLegacy(Util);

  function cov_2n99frj7rv() {
    var path = "/Users/mattmcglothlin/Desktop/DesignMatt-ers-Web/bootstrap-4.5.3/js/src/carousel.js";
    var hash = "e4c4ba594fc7ae0e120e8c27097dd89bc88709fd";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Users/mattmcglothlin/Desktop/DesignMatt-ers-Web/bootstrap-4.5.3/js/src/carousel.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 13
          },
          end: {
            line: 17,
            column: 23
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
            column: 30
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
            column: 27
          },
          end: {
            line: 23,
            column: 29
          }
        },
        "7": {
          start: {
            line: 24,
            column: 28
          },
          end: {
            line: 24,
            column: 30
          }
        },
        "8": {
          start: {
            line: 25,
            column: 31
          },
          end: {
            line: 25,
            column: 34
          }
        },
        "9": {
          start: {
            line: 26,
            column: 24
          },
          end: {
            line: 26,
            column: 26
          }
        },
        "10": {
          start: {
            line: 28,
            column: 16
          },
          end: {
            line: 35,
            column: 1
          }
        },
        "11": {
          start: {
            line: 37,
            column: 20
          },
          end: {
            line: 44,
            column: 1
          }
        },
        "12": {
          start: {
            line: 46,
            column: 23
          },
          end: {
            line: 46,
            column: 29
          }
        },
        "13": {
          start: {
            line: 47,
            column: 23
          },
          end: {
            line: 47,
            column: 29
          }
        },
        "14": {
          start: {
            line: 48,
            column: 23
          },
          end: {
            line: 48,
            column: 29
          }
        },
        "15": {
          start: {
            line: 49,
            column: 24
          },
          end: {
            line: 49,
            column: 31
          }
        },
        "16": {
          start: {
            line: 51,
            column: 20
          },
          end: {
            line: 51,
            column: 39
          }
        },
        "17": {
          start: {
            line: 52,
            column: 19
          },
          end: {
            line: 52,
            column: 37
          }
        },
        "18": {
          start: {
            line: 53,
            column: 22
          },
          end: {
            line: 53,
            column: 43
          }
        },
        "19": {
          start: {
            line: 54,
            column: 25
          },
          end: {
            line: 54,
            column: 49
          }
        },
        "20": {
          start: {
            line: 55,
            column: 25
          },
          end: {
            line: 55,
            column: 49
          }
        },
        "21": {
          start: {
            line: 56,
            column: 25
          },
          end: {
            line: 56,
            column: 49
          }
        },
        "22": {
          start: {
            line: 57,
            column: 24
          },
          end: {
            line: 57,
            column: 47
          }
        },
        "23": {
          start: {
            line: 58,
            column: 23
          },
          end: {
            line: 58,
            column: 45
          }
        },
        "24": {
          start: {
            line: 59,
            column: 26
          },
          end: {
            line: 59,
            column: 51
          }
        },
        "25": {
          start: {
            line: 60,
            column: 24
          },
          end: {
            line: 60,
            column: 47
          }
        },
        "26": {
          start: {
            line: 61,
            column: 25
          },
          end: {
            line: 61,
            column: 48
          }
        },
        "27": {
          start: {
            line: 62,
            column: 28
          },
          end: {
            line: 62,
            column: 61
          }
        },
        "28": {
          start: {
            line: 63,
            column: 29
          },
          end: {
            line: 63,
            column: 63
          }
        },
        "29": {
          start: {
            line: 65,
            column: 28
          },
          end: {
            line: 65,
            column: 38
          }
        },
        "30": {
          start: {
            line: 66,
            column: 26
          },
          end: {
            line: 66,
            column: 34
          }
        },
        "31": {
          start: {
            line: 67,
            column: 25
          },
          end: {
            line: 67,
            column: 32
          }
        },
        "32": {
          start: {
            line: 68,
            column: 25
          },
          end: {
            line: 68,
            column: 46
          }
        },
        "33": {
          start: {
            line: 69,
            column: 24
          },
          end: {
            line: 69,
            column: 44
          }
        },
        "34": {
          start: {
            line: 70,
            column: 24
          },
          end: {
            line: 70,
            column: 44
          }
        },
        "35": {
          start: {
            line: 71,
            column: 24
          },
          end: {
            line: 71,
            column: 44
          }
        },
        "36": {
          start: {
            line: 72,
            column: 33
          },
          end: {
            line: 72,
            column: 48
          }
        },
        "37": {
          start: {
            line: 74,
            column: 24
          },
          end: {
            line: 74,
            column: 33
          }
        },
        "38": {
          start: {
            line: 75,
            column: 29
          },
          end: {
            line: 75,
            column: 52
          }
        },
        "39": {
          start: {
            line: 76,
            column: 22
          },
          end: {
            line: 76,
            column: 38
          }
        },
        "40": {
          start: {
            line: 77,
            column: 26
          },
          end: {
            line: 77,
            column: 46
          }
        },
        "41": {
          start: {
            line: 78,
            column: 27
          },
          end: {
            line: 78,
            column: 69
          }
        },
        "42": {
          start: {
            line: 79,
            column: 28
          },
          end: {
            line: 79,
            column: 50
          }
        },
        "43": {
          start: {
            line: 80,
            column: 28
          },
          end: {
            line: 80,
            column: 59
          }
        },
        "44": {
          start: {
            line: 81,
            column: 27
          },
          end: {
            line: 81,
            column: 51
          }
        },
        "45": {
          start: {
            line: 83,
            column: 20
          },
          end: {
            line: 86,
            column: 1
          }
        },
        "46": {
          start: {
            line: 95,
            column: 4
          },
          end: {
            line: 95,
            column: 22
          }
        },
        "47": {
          start: {
            line: 96,
            column: 4
          },
          end: {
            line: 96,
            column: 25
          }
        },
        "48": {
          start: {
            line: 97,
            column: 4
          },
          end: {
            line: 97,
            column: 30
          }
        },
        "49": {
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 98,
            column: 26
          }
        },
        "50": {
          start: {
            line: 99,
            column: 4
          },
          end: {
            line: 99,
            column: 27
          }
        },
        "51": {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 100,
            column: 28
          }
        },
        "52": {
          start: {
            line: 101,
            column: 4
          },
          end: {
            line: 101,
            column: 24
          }
        },
        "53": {
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 102,
            column: 24
          }
        },
        "54": {
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 104,
            column: 42
          }
        },
        "55": {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 105,
            column: 27
          }
        },
        "56": {
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 106,
            column: 78
          }
        },
        "57": {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 107,
            column: 101
          }
        },
        "58": {
          start: {
            line: 108,
            column: 4
          },
          end: {
            line: 108,
            column: 78
          }
        },
        "59": {
          start: {
            line: 110,
            column: 4
          },
          end: {
            line: 110,
            column: 29
          }
        },
        "60": {
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 116,
            column: 18
          }
        },
        "61": {
          start: {
            line: 120,
            column: 4
          },
          end: {
            line: 120,
            column: 18
          }
        },
        "62": {
          start: {
            line: 126,
            column: 4
          },
          end: {
            line: 128,
            column: 5
          }
        },
        "63": {
          start: {
            line: 127,
            column: 6
          },
          end: {
            line: 127,
            column: 33
          }
        },
        "64": {
          start: {
            line: 132,
            column: 21
          },
          end: {
            line: 132,
            column: 37
          }
        },
        "65": {
          start: {
            line: 135,
            column: 4
          },
          end: {
            line: 138,
            column: 5
          }
        },
        "66": {
          start: {
            line: 137,
            column: 6
          },
          end: {
            line: 137,
            column: 17
          }
        },
        "67": {
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 144,
            column: 5
          }
        },
        "68": {
          start: {
            line: 143,
            column: 6
          },
          end: {
            line: 143,
            column: 33
          }
        },
        "69": {
          start: {
            line: 148,
            column: 4
          },
          end: {
            line: 150,
            column: 5
          }
        },
        "70": {
          start: {
            line: 149,
            column: 6
          },
          end: {
            line: 149,
            column: 27
          }
        },
        "71": {
          start: {
            line: 152,
            column: 4
          },
          end: {
            line: 155,
            column: 5
          }
        },
        "72": {
          start: {
            line: 153,
            column: 6
          },
          end: {
            line: 153,
            column: 46
          }
        },
        "73": {
          start: {
            line: 154,
            column: 6
          },
          end: {
            line: 154,
            column: 22
          }
        },
        "74": {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 157,
            column: 33
          }
        },
        "75": {
          start: {
            line: 158,
            column: 4
          },
          end: {
            line: 158,
            column: 25
          }
        },
        "76": {
          start: {
            line: 162,
            column: 4
          },
          end: {
            line: 164,
            column: 5
          }
        },
        "77": {
          start: {
            line: 163,
            column: 6
          },
          end: {
            line: 163,
            column: 28
          }
        },
        "78": {
          start: {
            line: 166,
            column: 4
          },
          end: {
            line: 169,
            column: 5
          }
        },
        "79": {
          start: {
            line: 167,
            column: 6
          },
          end: {
            line: 167,
            column: 35
          }
        },
        "80": {
          start: {
            line: 168,
            column: 6
          },
          end: {
            line: 168,
            column: 27
          }
        },
        "81": {
          start: {
            line: 171,
            column: 4
          },
          end: {
            line: 176,
            column: 5
          }
        },
        "82": {
          start: {
            line: 172,
            column: 6
          },
          end: {
            line: 175,
            column: 7
          }
        },
        "83": {
          start: {
            line: 180,
            column: 4
          },
          end: {
            line: 180,
            column: 75
          }
        },
        "84": {
          start: {
            line: 182,
            column: 24
          },
          end: {
            line: 182,
            column: 63
          }
        },
        "85": {
          start: {
            line: 184,
            column: 4
          },
          end: {
            line: 186,
            column: 5
          }
        },
        "86": {
          start: {
            line: 185,
            column: 6
          },
          end: {
            line: 185,
            column: 12
          }
        },
        "87": {
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 191,
            column: 5
          }
        },
        "88": {
          start: {
            line: 189,
            column: 6
          },
          end: {
            line: 189,
            column: 60
          }
        },
        "89": {
          start: {
            line: 189,
            column: 45
          },
          end: {
            line: 189,
            column: 59
          }
        },
        "90": {
          start: {
            line: 190,
            column: 6
          },
          end: {
            line: 190,
            column: 12
          }
        },
        "91": {
          start: {
            line: 193,
            column: 4
          },
          end: {
            line: 197,
            column: 5
          }
        },
        "92": {
          start: {
            line: 194,
            column: 6
          },
          end: {
            line: 194,
            column: 18
          }
        },
        "93": {
          start: {
            line: 195,
            column: 6
          },
          end: {
            line: 195,
            column: 18
          }
        },
        "94": {
          start: {
            line: 196,
            column: 6
          },
          end: {
            line: 196,
            column: 12
          }
        },
        "95": {
          start: {
            line: 199,
            column: 22
          },
          end: {
            line: 201,
            column: 20
          }
        },
        "96": {
          start: {
            line: 203,
            column: 4
          },
          end: {
            line: 203,
            column: 46
          }
        },
        "97": {
          start: {
            line: 207,
            column: 4
          },
          end: {
            line: 207,
            column: 35
          }
        },
        "98": {
          start: {
            line: 208,
            column: 4
          },
          end: {
            line: 208,
            column: 41
          }
        },
        "99": {
          start: {
            line: 210,
            column: 4
          },
          end: {
            line: 210,
            column: 22
          }
        },
        "100": {
          start: {
            line: 211,
            column: 4
          },
          end: {
            line: 211,
            column: 23
          }
        },
        "101": {
          start: {
            line: 212,
            column: 4
          },
          end: {
            line: 212,
            column: 24
          }
        },
        "102": {
          start: {
            line: 213,
            column: 4
          },
          end: {
            line: 213,
            column: 25
          }
        },
        "103": {
          start: {
            line: 214,
            column: 4
          },
          end: {
            line: 214,
            column: 25
          }
        },
        "104": {
          start: {
            line: 215,
            column: 4
          },
          end: {
            line: 215,
            column: 26
          }
        },
        "105": {
          start: {
            line: 216,
            column: 4
          },
          end: {
            line: 216,
            column: 30
          }
        },
        "106": {
          start: {
            line: 217,
            column: 4
          },
          end: {
            line: 217,
            column: 34
          }
        },
        "107": {
          start: {
            line: 223,
            column: 4
          },
          end: {
            line: 226,
            column: 5
          }
        },
        "108": {
          start: {
            line: 227,
            column: 4
          },
          end: {
            line: 227,
            column: 51
          }
        },
        "109": {
          start: {
            line: 228,
            column: 4
          },
          end: {
            line: 228,
            column: 17
          }
        },
        "110": {
          start: {
            line: 232,
            column: 22
          },
          end: {
            line: 232,
            column: 48
          }
        },
        "111": {
          start: {
            line: 234,
            column: 4
          },
          end: {
            line: 236,
            column: 5
          }
        },
        "112": {
          start: {
            line: 235,
            column: 6
          },
          end: {
            line: 235,
            column: 12
          }
        },
        "113": {
          start: {
            line: 238,
            column: 22
          },
          end: {
            line: 238,
            column: 50
          }
        },
        "114": {
          start: {
            line: 240,
            column: 4
          },
          end: {
            line: 240,
            column: 24
          }
        },
        "115": {
          start: {
            line: 243,
            column: 4
          },
          end: {
            line: 245,
            column: 5
          }
        },
        "116": {
          start: {
            line: 244,
            column: 6
          },
          end: {
            line: 244,
            column: 17
          }
        },
        "117": {
          start: {
            line: 248,
            column: 4
          },
          end: {
            line: 250,
            column: 5
          }
        },
        "118": {
          start: {
            line: 249,
            column: 6
          },
          end: {
            line: 249,
            column: 17
          }
        },
        "119": {
          start: {
            line: 254,
            column: 4
          },
          end: {
            line: 256,
            column: 5
          }
        },
        "120": {
          start: {
            line: 255,
            column: 6
          },
          end: {
            line: 255,
            column: 71
          }
        },
        "121": {
          start: {
            line: 255,
            column: 50
          },
          end: {
            line: 255,
            column: 70
          }
        },
        "122": {
          start: {
            line: 258,
            column: 4
          },
          end: {
            line: 262,
            column: 5
          }
        },
        "123": {
          start: {
            line: 259,
            column: 6
          },
          end: {
            line: 261,
            column: 57
          }
        },
        "124": {
          start: {
            line: 260,
            column: 39
          },
          end: {
            line: 260,
            column: 56
          }
        },
        "125": {
          start: {
            line: 261,
            column: 39
          },
          end: {
            line: 261,
            column: 56
          }
        },
        "126": {
          start: {
            line: 264,
            column: 4
          },
          end: {
            line: 266,
            column: 5
          }
        },
        "127": {
          start: {
            line: 265,
            column: 6
          },
          end: {
            line: 265,
            column: 36
          }
        },
        "128": {
          start: {
            line: 270,
            column: 4
          },
          end: {
            line: 272,
            column: 5
          }
        },
        "129": {
          start: {
            line: 271,
            column: 6
          },
          end: {
            line: 271,
            column: 12
          }
        },
        "130": {
          start: {
            line: 274,
            column: 18
          },
          end: {
            line: 280,
            column: 5
          }
        },
        "131": {
          start: {
            line: 275,
            column: 6
          },
          end: {
            line: 279,
            column: 7
          }
        },
        "132": {
          start: {
            line: 276,
            column: 8
          },
          end: {
            line: 276,
            column: 54
          }
        },
        "133": {
          start: {
            line: 277,
            column: 13
          },
          end: {
            line: 279,
            column: 7
          }
        },
        "134": {
          start: {
            line: 278,
            column: 8
          },
          end: {
            line: 278,
            column: 65
          }
        },
        "135": {
          start: {
            line: 282,
            column: 17
          },
          end: {
            line: 289,
            column: 5
          }
        },
        "136": {
          start: {
            line: 284,
            column: 6
          },
          end: {
            line: 288,
            column: 7
          }
        },
        "137": {
          start: {
            line: 285,
            column: 8
          },
          end: {
            line: 285,
            column: 28
          }
        },
        "138": {
          start: {
            line: 287,
            column: 8
          },
          end: {
            line: 287,
            column: 84
          }
        },
        "139": {
          start: {
            line: 291,
            column: 16
          },
          end: {
            line: 313,
            column: 5
          }
        },
        "140": {
          start: {
            line: 292,
            column: 6
          },
          end: {
            line: 294,
            column: 7
          }
        },
        "141": {
          start: {
            line: 293,
            column: 8
          },
          end: {
            line: 293,
            column: 73
          }
        },
        "142": {
          start: {
            line: 296,
            column: 6
          },
          end: {
            line: 296,
            column: 25
          }
        },
        "143": {
          start: {
            line: 297,
            column: 6
          },
          end: {
            line: 312,
            column: 7
          }
        },
        "144": {
          start: {
            line: 306,
            column: 8
          },
          end: {
            line: 306,
            column: 20
          }
        },
        "145": {
          start: {
            line: 307,
            column: 8
          },
          end: {
            line: 309,
            column: 9
          }
        },
        "146": {
          start: {
            line: 308,
            column: 10
          },
          end: {
            line: 308,
            column: 41
          }
        },
        "147": {
          start: {
            line: 311,
            column: 8
          },
          end: {
            line: 311,
            column: 114
          }
        },
        "148": {
          start: {
            line: 311,
            column: 48
          },
          end: {
            line: 311,
            column: 65
          }
        },
        "149": {
          start: {
            line: 315,
            column: 4
          },
          end: {
            line: 316,
            column: 52
          }
        },
        "150": {
          start: {
            line: 316,
            column: 33
          },
          end: {
            line: 316,
            column: 51
          }
        },
        "151": {
          start: {
            line: 318,
            column: 4
          },
          end: {
            line: 327,
            column: 5
          }
        },
        "152": {
          start: {
            line: 319,
            column: 6
          },
          end: {
            line: 319,
            column: 67
          }
        },
        "153": {
          start: {
            line: 319,
            column: 54
          },
          end: {
            line: 319,
            column: 66
          }
        },
        "154": {
          start: {
            line: 320,
            column: 6
          },
          end: {
            line: 320,
            column: 63
          }
        },
        "155": {
          start: {
            line: 320,
            column: 52
          },
          end: {
            line: 320,
            column: 62
          }
        },
        "156": {
          start: {
            line: 322,
            column: 6
          },
          end: {
            line: 322,
            column: 59
          }
        },
        "157": {
          start: {
            line: 324,
            column: 6
          },
          end: {
            line: 324,
            column: 66
          }
        },
        "158": {
          start: {
            line: 324,
            column: 53
          },
          end: {
            line: 324,
            column: 65
          }
        },
        "159": {
          start: {
            line: 325,
            column: 6
          },
          end: {
            line: 325,
            column: 64
          }
        },
        "160": {
          start: {
            line: 325,
            column: 52
          },
          end: {
            line: 325,
            column: 63
          }
        },
        "161": {
          start: {
            line: 326,
            column: 6
          },
          end: {
            line: 326,
            column: 62
          }
        },
        "162": {
          start: {
            line: 326,
            column: 51
          },
          end: {
            line: 326,
            column: 61
          }
        },
        "163": {
          start: {
            line: 331,
            column: 4
          },
          end: {
            line: 333,
            column: 5
          }
        },
        "164": {
          start: {
            line: 332,
            column: 6
          },
          end: {
            line: 332,
            column: 12
          }
        },
        "165": {
          start: {
            line: 335,
            column: 4
          },
          end: {
            line: 345,
            column: 5
          }
        },
        "166": {
          start: {
            line: 337,
            column: 8
          },
          end: {
            line: 337,
            column: 30
          }
        },
        "167": {
          start: {
            line: 338,
            column: 8
          },
          end: {
            line: 338,
            column: 19
          }
        },
        "168": {
          start: {
            line: 339,
            column: 8
          },
          end: {
            line: 339,
            column: 13
          }
        },
        "169": {
          start: {
            line: 341,
            column: 8
          },
          end: {
            line: 341,
            column: 30
          }
        },
        "170": {
          start: {
            line: 342,
            column: 8
          },
          end: {
            line: 342,
            column: 19
          }
        },
        "171": {
          start: {
            line: 343,
            column: 8
          },
          end: {
            line: 343,
            column: 13
          }
        },
        "172": {
          start: {
            line: 349,
            column: 4
          },
          end: {
            line: 351,
            column: 8
          }
        },
        "173": {
          start: {
            line: 352,
            column: 4
          },
          end: {
            line: 352,
            column: 39
          }
        },
        "174": {
          start: {
            line: 356,
            column: 28
          },
          end: {
            line: 356,
            column: 56
          }
        },
        "175": {
          start: {
            line: 357,
            column: 28
          },
          end: {
            line: 357,
            column: 56
          }
        },
        "176": {
          start: {
            line: 358,
            column: 24
          },
          end: {
            line: 358,
            column: 57
          }
        },
        "177": {
          start: {
            line: 359,
            column: 26
          },
          end: {
            line: 359,
            column: 48
          }
        },
        "178": {
          start: {
            line: 360,
            column: 26
          },
          end: {
            line: 361,
            column: 76
          }
        },
        "179": {
          start: {
            line: 363,
            column: 4
          },
          end: {
            line: 365,
            column: 5
          }
        },
        "180": {
          start: {
            line: 364,
            column: 6
          },
          end: {
            line: 364,
            column: 26
          }
        },
        "181": {
          start: {
            line: 367,
            column: 18
          },
          end: {
            line: 367,
            column: 55
          }
        },
        "182": {
          start: {
            line: 368,
            column: 22
          },
          end: {
            line: 368,
            column: 64
          }
        },
        "183": {
          start: {
            line: 370,
            column: 4
          },
          end: {
            line: 371,
            column: 66
          }
        },
        "184": {
          start: {
            line: 375,
            column: 24
          },
          end: {
            line: 375,
            column: 57
          }
        },
        "185": {
          start: {
            line: 376,
            column: 22
          },
          end: {
            line: 376,
            column: 91
          }
        },
        "186": {
          start: {
            line: 377,
            column: 23
          },
          end: {
            line: 382,
            column: 6
          }
        },
        "187": {
          start: {
            line: 384,
            column: 4
          },
          end: {
            line: 384,
            column: 40
          }
        },
        "188": {
          start: {
            line: 386,
            column: 4
          },
          end: {
            line: 386,
            column: 21
          }
        },
        "189": {
          start: {
            line: 390,
            column: 4
          },
          end: {
            line: 401,
            column: 5
          }
        },
        "190": {
          start: {
            line: 391,
            column: 25
          },
          end: {
            line: 391,
            column: 97
          }
        },
        "191": {
          start: {
            line: 392,
            column: 6
          },
          end: {
            line: 392,
            column: 50
          }
        },
        "192": {
          start: {
            line: 394,
            column: 28
          },
          end: {
            line: 396,
            column: 7
          }
        },
        "193": {
          start: {
            line: 398,
            column: 6
          },
          end: {
            line: 400,
            column: 7
          }
        },
        "194": {
          start: {
            line: 399,
            column: 8
          },
          end: {
            line: 399,
            column: 52
          }
        },
        "195": {
          start: {
            line: 405,
            column: 26
          },
          end: {
            line: 405,
            column: 75
          }
        },
        "196": {
          start: {
            line: 406,
            column: 31
          },
          end: {
            line: 406,
            column: 64
          }
        },
        "197": {
          start: {
            line: 407,
            column: 24
          },
          end: {
            line: 408,
            column: 56
          }
        },
        "198": {
          start: {
            line: 409,
            column: 29
          },
          end: {
            line: 409,
            column: 60
          }
        },
        "199": {
          start: {
            line: 410,
            column: 22
          },
          end: {
            line: 410,
            column: 45
          }
        },
        "200": {
          start: {
            line: 416,
            column: 4
          },
          end: {
            line: 424,
            column: 5
          }
        },
        "201": {
          start: {
            line: 417,
            column: 6
          },
          end: {
            line: 417,
            column: 44
          }
        },
        "202": {
          start: {
            line: 418,
            column: 6
          },
          end: {
            line: 418,
            column: 38
          }
        },
        "203": {
          start: {
            line: 419,
            column: 6
          },
          end: {
            line: 419,
            column: 41
          }
        },
        "204": {
          start: {
            line: 421,
            column: 6
          },
          end: {
            line: 421,
            column: 45
          }
        },
        "205": {
          start: {
            line: 422,
            column: 6
          },
          end: {
            line: 422,
            column: 38
          }
        },
        "206": {
          start: {
            line: 423,
            column: 6
          },
          end: {
            line: 423,
            column: 42
          }
        },
        "207": {
          start: {
            line: 426,
            column: 4
          },
          end: {
            line: 429,
            column: 5
          }
        },
        "208": {
          start: {
            line: 427,
            column: 6
          },
          end: {
            line: 427,
            column: 29
          }
        },
        "209": {
          start: {
            line: 428,
            column: 6
          },
          end: {
            line: 428,
            column: 12
          }
        },
        "210": {
          start: {
            line: 431,
            column: 23
          },
          end: {
            line: 431,
            column: 79
          }
        },
        "211": {
          start: {
            line: 432,
            column: 4
          },
          end: {
            line: 434,
            column: 5
          }
        },
        "212": {
          start: {
            line: 433,
            column: 6
          },
          end: {
            line: 433,
            column: 12
          }
        },
        "213": {
          start: {
            line: 436,
            column: 4
          },
          end: {
            line: 439,
            column: 5
          }
        },
        "214": {
          start: {
            line: 438,
            column: 6
          },
          end: {
            line: 438,
            column: 12
          }
        },
        "215": {
          start: {
            line: 441,
            column: 4
          },
          end: {
            line: 441,
            column: 26
          }
        },
        "216": {
          start: {
            line: 443,
            column: 4
          },
          end: {
            line: 445,
            column: 5
          }
        },
        "217": {
          start: {
            line: 444,
            column: 6
          },
          end: {
            line: 444,
            column: 18
          }
        },
        "218": {
          start: {
            line: 447,
            column: 4
          },
          end: {
            line: 447,
            column: 48
          }
        },
        "219": {
          start: {
            line: 449,
            column: 22
          },
          end: {
            line: 454,
            column: 6
          }
        },
        "220": {
          start: {
            line: 456,
            column: 4
          },
          end: {
            line: 493,
            column: 5
          }
        },
        "221": {
          start: {
            line: 457,
            column: 6
          },
          end: {
            line: 457,
            column: 45
          }
        },
        "222": {
          start: {
            line: 459,
            column: 6
          },
          end: {
            line: 459,
            column: 30
          }
        },
        "223": {
          start: {
            line: 461,
            column: 6
          },
          end: {
            line: 461,
            column: 53
          }
        },
        "224": {
          start: {
            line: 462,
            column: 6
          },
          end: {
            line: 462,
            column: 51
          }
        },
        "225": {
          start: {
            line: 464,
            column: 34
          },
          end: {
            line: 464,
            column: 89
          }
        },
        "226": {
          start: {
            line: 465,
            column: 6
          },
          end: {
            line: 470,
            column: 7
          }
        },
        "227": {
          start: {
            line: 466,
            column: 8
          },
          end: {
            line: 466,
            column: 92
          }
        },
        "228": {
          start: {
            line: 467,
            column: 8
          },
          end: {
            line: 467,
            column: 51
          }
        },
        "229": {
          start: {
            line: 469,
            column: 8
          },
          end: {
            line: 469,
            column: 85
          }
        },
        "230": {
          start: {
            line: 472,
            column: 33
          },
          end: {
            line: 472,
            column: 85
          }
        },
        "231": {
          start: {
            line: 474,
            column: 6
          },
          end: {
            line: 486,
            column: 49
          }
        },
        "232": {
          start: {
            line: 476,
            column: 10
          },
          end: {
            line: 478,
            column: 40
          }
        },
        "233": {
          start: {
            line: 480,
            column: 10
          },
          end: {
            line: 480,
            column: 104
          }
        },
        "234": {
          start: {
            line: 482,
            column: 10
          },
          end: {
            line: 482,
            column: 33
          }
        },
        "235": {
          start: {
            line: 484,
            column: 10
          },
          end: {
            line: 484,
            column: 66
          }
        },
        "236": {
          start: {
            line: 484,
            column: 27
          },
          end: {
            line: 484,
            column: 62
          }
        },
        "237": {
          start: {
            line: 488,
            column: 6
          },
          end: {
            line: 488,
            column: 53
          }
        },
        "238": {
          start: {
            line: 489,
            column: 6
          },
          end: {
            line: 489,
            column: 48
          }
        },
        "239": {
          start: {
            line: 491,
            column: 6
          },
          end: {
            line: 491,
            column: 29
          }
        },
        "240": {
          start: {
            line: 492,
            column: 6
          },
          end: {
            line: 492,
            column: 41
          }
        },
        "241": {
          start: {
            line: 495,
            column: 4
          },
          end: {
            line: 497,
            column: 5
          }
        },
        "242": {
          start: {
            line: 496,
            column: 6
          },
          end: {
            line: 496,
            column: 18
          }
        },
        "243": {
          start: {
            line: 503,
            column: 4
          },
          end: {
            line: 536,
            column: 6
          }
        },
        "244": {
          start: {
            line: 504,
            column: 17
          },
          end: {
            line: 504,
            column: 39
          }
        },
        "245": {
          start: {
            line: 505,
            column: 20
          },
          end: {
            line: 508,
            column: 7
          }
        },
        "246": {
          start: {
            line: 510,
            column: 6
          },
          end: {
            line: 515,
            column: 7
          }
        },
        "247": {
          start: {
            line: 511,
            column: 8
          },
          end: {
            line: 514,
            column: 9
          }
        },
        "248": {
          start: {
            line: 517,
            column: 21
          },
          end: {
            line: 517,
            column: 72
          }
        },
        "249": {
          start: {
            line: 519,
            column: 6
          },
          end: {
            line: 522,
            column: 7
          }
        },
        "250": {
          start: {
            line: 520,
            column: 8
          },
          end: {
            line: 520,
            column: 42
          }
        },
        "251": {
          start: {
            line: 521,
            column: 8
          },
          end: {
            line: 521,
            column: 36
          }
        },
        "252": {
          start: {
            line: 524,
            column: 6
          },
          end: {
            line: 535,
            column: 7
          }
        },
        "253": {
          start: {
            line: 525,
            column: 8
          },
          end: {
            line: 525,
            column: 23
          }
        },
        "254": {
          start: {
            line: 526,
            column: 13
          },
          end: {
            line: 535,
            column: 7
          }
        },
        "255": {
          start: {
            line: 527,
            column: 8
          },
          end: {
            line: 529,
            column: 9
          }
        },
        "256": {
          start: {
            line: 528,
            column: 10
          },
          end: {
            line: 528,
            column: 60
          }
        },
        "257": {
          start: {
            line: 531,
            column: 8
          },
          end: {
            line: 531,
            column: 22
          }
        },
        "258": {
          start: {
            line: 532,
            column: 13
          },
          end: {
            line: 535,
            column: 7
          }
        },
        "259": {
          start: {
            line: 533,
            column: 8
          },
          end: {
            line: 533,
            column: 20
          }
        },
        "260": {
          start: {
            line: 534,
            column: 8
          },
          end: {
            line: 534,
            column: 20
          }
        },
        "261": {
          start: {
            line: 540,
            column: 21
          },
          end: {
            line: 540,
            column: 54
          }
        },
        "262": {
          start: {
            line: 542,
            column: 4
          },
          end: {
            line: 544,
            column: 5
          }
        },
        "263": {
          start: {
            line: 543,
            column: 6
          },
          end: {
            line: 543,
            column: 12
          }
        },
        "264": {
          start: {
            line: 546,
            column: 19
          },
          end: {
            line: 546,
            column: 33
          }
        },
        "265": {
          start: {
            line: 548,
            column: 4
          },
          end: {
            line: 550,
            column: 5
          }
        },
        "266": {
          start: {
            line: 549,
            column: 6
          },
          end: {
            line: 549,
            column: 12
          }
        },
        "267": {
          start: {
            line: 552,
            column: 19
          },
          end: {
            line: 555,
            column: 5
          }
        },
        "268": {
          start: {
            line: 556,
            column: 23
          },
          end: {
            line: 556,
            column: 57
          }
        },
        "269": {
          start: {
            line: 558,
            column: 4
          },
          end: {
            line: 560,
            column: 5
          }
        },
        "270": {
          start: {
            line: 559,
            column: 6
          },
          end: {
            line: 559,
            column: 29
          }
        },
        "271": {
          start: {
            line: 562,
            column: 4
          },
          end: {
            line: 562,
            column: 53
          }
        },
        "272": {
          start: {
            line: 564,
            column: 4
          },
          end: {
            line: 566,
            column: 5
          }
        },
        "273": {
          start: {
            line: 565,
            column: 6
          },
          end: {
            line: 565,
            column: 45
          }
        },
        "274": {
          start: {
            line: 568,
            column: 4
          },
          end: {
            line: 568,
            column: 26
          }
        },
        "275": {
          start: {
            line: 578,
            column: 0
          },
          end: {
            line: 578,
            column: 88
          }
        },
        "276": {
          start: {
            line: 580,
            column: 0
          },
          end: {
            line: 586,
            column: 2
          }
        },
        "277": {
          start: {
            line: 581,
            column: 20
          },
          end: {
            line: 581,
            column: 80
          }
        },
        "278": {
          start: {
            line: 582,
            column: 2
          },
          end: {
            line: 585,
            column: 3
          }
        },
        "279": {
          start: {
            line: 582,
            column: 15
          },
          end: {
            line: 582,
            column: 16
          }
        },
        "280": {
          start: {
            line: 582,
            column: 24
          },
          end: {
            line: 582,
            column: 40
          }
        },
        "281": {
          start: {
            line: 583,
            column: 22
          },
          end: {
            line: 583,
            column: 37
          }
        },
        "282": {
          start: {
            line: 584,
            column: 4
          },
          end: {
            line: 584,
            column: 63
          }
        },
        "283": {
          start: {
            line: 594,
            column: 0
          },
          end: {
            line: 594,
            column: 38
          }
        },
        "284": {
          start: {
            line: 595,
            column: 0
          },
          end: {
            line: 595,
            column: 33
          }
        },
        "285": {
          start: {
            line: 596,
            column: 0
          },
          end: {
            line: 599,
            column: 1
          }
        },
        "286": {
          start: {
            line: 597,
            column: 2
          },
          end: {
            line: 597,
            column: 33
          }
        },
        "287": {
          start: {
            line: 598,
            column: 2
          },
          end: {
            line: 598,
            column: 34
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 94,
              column: 2
            },
            end: {
              line: 94,
              column: 3
            }
          },
          loc: {
            start: {
              line: 94,
              column: 31
            },
            end: {
              line: 111,
              column: 3
            }
          },
          line: 94
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 115,
              column: 2
            },
            end: {
              line: 115,
              column: 3
            }
          },
          loc: {
            start: {
              line: 115,
              column: 23
            },
            end: {
              line: 117,
              column: 3
            }
          },
          line: 115
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 119,
              column: 2
            },
            end: {
              line: 119,
              column: 3
            }
          },
          loc: {
            start: {
              line: 119,
              column: 23
            },
            end: {
              line: 121,
              column: 3
            }
          },
          line: 119
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 125,
              column: 2
            },
            end: {
              line: 125,
              column: 3
            }
          },
          loc: {
            start: {
              line: 125,
              column: 9
            },
            end: {
              line: 129,
              column: 3
            }
          },
          line: 125
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 131,
              column: 2
            },
            end: {
              line: 131,
              column: 3
            }
          },
          loc: {
            start: {
              line: 131,
              column: 20
            },
            end: {
              line: 139,
              column: 3
            }
          },
          line: 131
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 141,
              column: 2
            },
            end: {
              line: 141,
              column: 3
            }
          },
          loc: {
            start: {
              line: 141,
              column: 9
            },
            end: {
              line: 145,
              column: 3
            }
          },
          line: 141
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 147,
              column: 2
            },
            end: {
              line: 147,
              column: 3
            }
          },
          loc: {
            start: {
              line: 147,
              column: 15
            },
            end: {
              line: 159,
              column: 3
            }
          },
          line: 147
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 161,
              column: 2
            },
            end: {
              line: 161,
              column: 3
            }
          },
          loc: {
            start: {
              line: 161,
              column: 15
            },
            end: {
              line: 177,
              column: 3
            }
          },
          line: 161
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 179,
              column: 2
            },
            end: {
              line: 179,
              column: 3
            }
          },
          loc: {
            start: {
              line: 179,
              column: 12
            },
            end: {
              line: 204,
              column: 3
            }
          },
          line: 179
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 189,
              column: 39
            },
            end: {
              line: 189,
              column: 40
            }
          },
          loc: {
            start: {
              line: 189,
              column: 45
            },
            end: {
              line: 189,
              column: 59
            }
          },
          line: 189
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 206,
              column: 2
            },
            end: {
              line: 206,
              column: 3
            }
          },
          loc: {
            start: {
              line: 206,
              column: 12
            },
            end: {
              line: 218,
              column: 3
            }
          },
          line: 206
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 222,
              column: 2
            },
            end: {
              line: 222,
              column: 3
            }
          },
          loc: {
            start: {
              line: 222,
              column: 21
            },
            end: {
              line: 229,
              column: 3
            }
          },
          line: 222
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 231,
              column: 2
            },
            end: {
              line: 231,
              column: 3
            }
          },
          loc: {
            start: {
              line: 231,
              column: 17
            },
            end: {
              line: 251,
              column: 3
            }
          },
          line: 231
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 253,
              column: 2
            },
            end: {
              line: 253,
              column: 3
            }
          },
          loc: {
            start: {
              line: 253,
              column: 23
            },
            end: {
              line: 267,
              column: 3
            }
          },
          line: 253
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 255,
              column: 41
            },
            end: {
              line: 255,
              column: 42
            }
          },
          loc: {
            start: {
              line: 255,
              column: 50
            },
            end: {
              line: 255,
              column: 70
            }
          },
          line: 255
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 260,
              column: 30
            },
            end: {
              line: 260,
              column: 31
            }
          },
          loc: {
            start: {
              line: 260,
              column: 39
            },
            end: {
              line: 260,
              column: 56
            }
          },
          line: 260
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 261,
              column: 30
            },
            end: {
              line: 261,
              column: 31
            }
          },
          loc: {
            start: {
              line: 261,
              column: 39
            },
            end: {
              line: 261,
              column: 56
            }
          },
          line: 261
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 269,
              column: 2
            },
            end: {
              line: 269,
              column: 3
            }
          },
          loc: {
            start: {
              line: 269,
              column: 28
            },
            end: {
              line: 328,
              column: 3
            }
          },
          line: 269
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 274,
              column: 18
            },
            end: {
              line: 274,
              column: 19
            }
          },
          loc: {
            start: {
              line: 274,
              column: 27
            },
            end: {
              line: 280,
              column: 5
            }
          },
          line: 274
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 282,
              column: 17
            },
            end: {
              line: 282,
              column: 18
            }
          },
          loc: {
            start: {
              line: 282,
              column: 26
            },
            end: {
              line: 289,
              column: 5
            }
          },
          line: 282
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 291,
              column: 16
            },
            end: {
              line: 291,
              column: 17
            }
          },
          loc: {
            start: {
              line: 291,
              column: 25
            },
            end: {
              line: 313,
              column: 5
            }
          },
          line: 291
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 311,
              column: 39
            },
            end: {
              line: 311,
              column: 40
            }
          },
          loc: {
            start: {
              line: 311,
              column: 48
            },
            end: {
              line: 311,
              column: 65
            }
          },
          line: 311
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 316,
              column: 28
            },
            end: {
              line: 316,
              column: 29
            }
          },
          loc: {
            start: {
              line: 316,
              column: 33
            },
            end: {
              line: 316,
              column: 51
            }
          },
          line: 316
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 319,
              column: 45
            },
            end: {
              line: 319,
              column: 46
            }
          },
          loc: {
            start: {
              line: 319,
              column: 54
            },
            end: {
              line: 319,
              column: 66
            }
          },
          line: 319
        },
        "24": {
          name: "(anonymous_24)",
          decl: {
            start: {
              line: 320,
              column: 43
            },
            end: {
              line: 320,
              column: 44
            }
          },
          loc: {
            start: {
              line: 320,
              column: 52
            },
            end: {
              line: 320,
              column: 62
            }
          },
          line: 320
        },
        "25": {
          name: "(anonymous_25)",
          decl: {
            start: {
              line: 324,
              column: 44
            },
            end: {
              line: 324,
              column: 45
            }
          },
          loc: {
            start: {
              line: 324,
              column: 53
            },
            end: {
              line: 324,
              column: 65
            }
          },
          line: 324
        },
        "26": {
          name: "(anonymous_26)",
          decl: {
            start: {
              line: 325,
              column: 43
            },
            end: {
              line: 325,
              column: 44
            }
          },
          loc: {
            start: {
              line: 325,
              column: 52
            },
            end: {
              line: 325,
              column: 63
            }
          },
          line: 325
        },
        "27": {
          name: "(anonymous_27)",
          decl: {
            start: {
              line: 326,
              column: 42
            },
            end: {
              line: 326,
              column: 43
            }
          },
          loc: {
            start: {
              line: 326,
              column: 51
            },
            end: {
              line: 326,
              column: 61
            }
          },
          line: 326
        },
        "28": {
          name: "(anonymous_28)",
          decl: {
            start: {
              line: 330,
              column: 2
            },
            end: {
              line: 330,
              column: 3
            }
          },
          loc: {
            start: {
              line: 330,
              column: 18
            },
            end: {
              line: 346,
              column: 3
            }
          },
          line: 330
        },
        "29": {
          name: "(anonymous_29)",
          decl: {
            start: {
              line: 348,
              column: 2
            },
            end: {
              line: 348,
              column: 3
            }
          },
          loc: {
            start: {
              line: 348,
              column: 25
            },
            end: {
              line: 353,
              column: 3
            }
          },
          line: 348
        },
        "30": {
          name: "(anonymous_30)",
          decl: {
            start: {
              line: 355,
              column: 2
            },
            end: {
              line: 355,
              column: 3
            }
          },
          loc: {
            start: {
              line: 355,
              column: 48
            },
            end: {
              line: 372,
              column: 3
            }
          },
          line: 355
        },
        "31": {
          name: "(anonymous_31)",
          decl: {
            start: {
              line: 374,
              column: 2
            },
            end: {
              line: 374,
              column: 3
            }
          },
          loc: {
            start: {
              line: 374,
              column: 56
            },
            end: {
              line: 387,
              column: 3
            }
          },
          line: 374
        },
        "32": {
          name: "(anonymous_32)",
          decl: {
            start: {
              line: 389,
              column: 2
            },
            end: {
              line: 389,
              column: 3
            }
          },
          loc: {
            start: {
              line: 389,
              column: 38
            },
            end: {
              line: 402,
              column: 3
            }
          },
          line: 389
        },
        "33": {
          name: "(anonymous_33)",
          decl: {
            start: {
              line: 404,
              column: 2
            },
            end: {
              line: 404,
              column: 3
            }
          },
          loc: {
            start: {
              line: 404,
              column: 29
            },
            end: {
              line: 498,
              column: 3
            }
          },
          line: 404
        },
        "34": {
          name: "(anonymous_34)",
          decl: {
            start: {
              line: 475,
              column: 34
            },
            end: {
              line: 475,
              column: 35
            }
          },
          loc: {
            start: {
              line: 475,
              column: 40
            },
            end: {
              line: 485,
              column: 9
            }
          },
          line: 475
        },
        "35": {
          name: "(anonymous_35)",
          decl: {
            start: {
              line: 484,
              column: 21
            },
            end: {
              line: 484,
              column: 22
            }
          },
          loc: {
            start: {
              line: 484,
              column: 27
            },
            end: {
              line: 484,
              column: 62
            }
          },
          line: 484
        },
        "36": {
          name: "(anonymous_36)",
          decl: {
            start: {
              line: 502,
              column: 2
            },
            end: {
              line: 502,
              column: 3
            }
          },
          loc: {
            start: {
              line: 502,
              column: 34
            },
            end: {
              line: 537,
              column: 3
            }
          },
          line: 502
        },
        "37": {
          name: "(anonymous_37)",
          decl: {
            start: {
              line: 503,
              column: 21
            },
            end: {
              line: 503,
              column: 22
            }
          },
          loc: {
            start: {
              line: 503,
              column: 33
            },
            end: {
              line: 536,
              column: 5
            }
          },
          line: 503
        },
        "38": {
          name: "(anonymous_38)",
          decl: {
            start: {
              line: 539,
              column: 2
            },
            end: {
              line: 539,
              column: 3
            }
          },
          loc: {
            start: {
              line: 539,
              column: 37
            },
            end: {
              line: 569,
              column: 3
            }
          },
          line: 539
        },
        "39": {
          name: "(anonymous_39)",
          decl: {
            start: {
              line: 580,
              column: 34
            },
            end: {
              line: 580,
              column: 35
            }
          },
          loc: {
            start: {
              line: 580,
              column: 40
            },
            end: {
              line: 586,
              column: 1
            }
          },
          line: 580
        },
        "40": {
          name: "(anonymous_40)",
          decl: {
            start: {
              line: 596,
              column: 24
            },
            end: {
              line: 596,
              column: 25
            }
          },
          loc: {
            start: {
              line: 596,
              column: 30
            },
            end: {
              line: 599,
              column: 1
            }
          },
          line: 596
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 107,
              column: 27
            },
            end: {
              line: 107,
              column: 101
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 107,
              column: 27
            },
            end: {
              line: 107,
              column: 69
            }
          }, {
            start: {
              line: 107,
              column: 73
            },
            end: {
              line: 107,
              column: 101
            }
          }],
          line: 107
        },
        "1": {
          loc: {
            start: {
              line: 108,
              column: 33
            },
            end: {
              line: 108,
              column: 77
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 108,
              column: 33
            },
            end: {
              line: 108,
              column: 52
            }
          }, {
            start: {
              line: 108,
              column: 56
            },
            end: {
              line: 108,
              column: 77
            }
          }],
          line: 108
        },
        "2": {
          loc: {
            start: {
              line: 126,
              column: 4
            },
            end: {
              line: 128,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 126,
              column: 4
            },
            end: {
              line: 128,
              column: 5
            }
          }, {
            start: {
              line: 126,
              column: 4
            },
            end: {
              line: 128,
              column: 5
            }
          }],
          line: 126
        },
        "3": {
          loc: {
            start: {
              line: 135,
              column: 4
            },
            end: {
              line: 138,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 135,
              column: 4
            },
            end: {
              line: 138,
              column: 5
            }
          }, {
            start: {
              line: 135,
              column: 4
            },
            end: {
              line: 138,
              column: 5
            }
          }],
          line: 135
        },
        "4": {
          loc: {
            start: {
              line: 135,
              column: 8
            },
            end: {
              line: 136,
              column: 74
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 135,
              column: 8
            },
            end: {
              line: 135,
              column: 24
            }
          }, {
            start: {
              line: 136,
              column: 7
            },
            end: {
              line: 136,
              column: 30
            }
          }, {
            start: {
              line: 136,
              column: 34
            },
            end: {
              line: 136,
              column: 73
            }
          }],
          line: 135
        },
        "5": {
          loc: {
            start: {
              line: 142,
              column: 4
            },
            end: {
              line: 144,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 142,
              column: 4
            },
            end: {
              line: 144,
              column: 5
            }
          }, {
            start: {
              line: 142,
              column: 4
            },
            end: {
              line: 144,
              column: 5
            }
          }],
          line: 142
        },
        "6": {
          loc: {
            start: {
              line: 148,
              column: 4
            },
            end: {
              line: 150,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 148,
              column: 4
            },
            end: {
              line: 150,
              column: 5
            }
          }, {
            start: {
              line: 148,
              column: 4
            },
            end: {
              line: 150,
              column: 5
            }
          }],
          line: 148
        },
        "7": {
          loc: {
            start: {
              line: 152,
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
              line: 152,
              column: 4
            },
            end: {
              line: 155,
              column: 5
            }
          }, {
            start: {
              line: 152,
              column: 4
            },
            end: {
              line: 155,
              column: 5
            }
          }],
          line: 152
        },
        "8": {
          loc: {
            start: {
              line: 162,
              column: 4
            },
            end: {
              line: 164,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 162,
              column: 4
            },
            end: {
              line: 164,
              column: 5
            }
          }, {
            start: {
              line: 162,
              column: 4
            },
            end: {
              line: 164,
              column: 5
            }
          }],
          line: 162
        },
        "9": {
          loc: {
            start: {
              line: 166,
              column: 4
            },
            end: {
              line: 169,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 166,
              column: 4
            },
            end: {
              line: 169,
              column: 5
            }
          }, {
            start: {
              line: 166,
              column: 4
            },
            end: {
              line: 169,
              column: 5
            }
          }],
          line: 166
        },
        "10": {
          loc: {
            start: {
              line: 171,
              column: 4
            },
            end: {
              line: 176,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 171,
              column: 4
            },
            end: {
              line: 176,
              column: 5
            }
          }, {
            start: {
              line: 171,
              column: 4
            },
            end: {
              line: 176,
              column: 5
            }
          }],
          line: 171
        },
        "11": {
          loc: {
            start: {
              line: 171,
              column: 8
            },
            end: {
              line: 171,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 171,
              column: 8
            },
            end: {
              line: 171,
              column: 29
            }
          }, {
            start: {
              line: 171,
              column: 33
            },
            end: {
              line: 171,
              column: 48
            }
          }],
          line: 171
        },
        "12": {
          loc: {
            start: {
              line: 173,
              column: 9
            },
            end: {
              line: 173,
              column: 68
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 173,
              column: 36
            },
            end: {
              line: 173,
              column: 56
            }
          }, {
            start: {
              line: 173,
              column: 59
            },
            end: {
              line: 173,
              column: 68
            }
          }],
          line: 173
        },
        "13": {
          loc: {
            start: {
              line: 184,
              column: 4
            },
            end: {
              line: 186,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 184,
              column: 4
            },
            end: {
              line: 186,
              column: 5
            }
          }, {
            start: {
              line: 184,
              column: 4
            },
            end: {
              line: 186,
              column: 5
            }
          }],
          line: 184
        },
        "14": {
          loc: {
            start: {
              line: 184,
              column: 8
            },
            end: {
              line: 184,
              column: 51
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 184,
              column: 8
            },
            end: {
              line: 184,
              column: 38
            }
          }, {
            start: {
              line: 184,
              column: 42
            },
            end: {
              line: 184,
              column: 51
            }
          }],
          line: 184
        },
        "15": {
          loc: {
            start: {
              line: 188,
              column: 4
            },
            end: {
              line: 191,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 188,
              column: 4
            },
            end: {
              line: 191,
              column: 5
            }
          }, {
            start: {
              line: 188,
              column: 4
            },
            end: {
              line: 191,
              column: 5
            }
          }],
          line: 188
        },
        "16": {
          loc: {
            start: {
              line: 193,
              column: 4
            },
            end: {
              line: 197,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 193,
              column: 4
            },
            end: {
              line: 197,
              column: 5
            }
          }, {
            start: {
              line: 193,
              column: 4
            },
            end: {
              line: 197,
              column: 5
            }
          }],
          line: 193
        },
        "17": {
          loc: {
            start: {
              line: 199,
              column: 22
            },
            end: {
              line: 201,
              column: 20
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 200,
              column: 6
            },
            end: {
              line: 200,
              column: 20
            }
          }, {
            start: {
              line: 201,
              column: 6
            },
            end: {
              line: 201,
              column: 20
            }
          }],
          line: 199
        },
        "18": {
          loc: {
            start: {
              line: 234,
              column: 4
            },
            end: {
              line: 236,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 234,
              column: 4
            },
            end: {
              line: 236,
              column: 5
            }
          }, {
            start: {
              line: 234,
              column: 4
            },
            end: {
              line: 236,
              column: 5
            }
          }],
          line: 234
        },
        "19": {
          loc: {
            start: {
              line: 243,
              column: 4
            },
            end: {
              line: 245,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 243,
              column: 4
            },
            end: {
              line: 245,
              column: 5
            }
          }, {
            start: {
              line: 243,
              column: 4
            },
            end: {
              line: 245,
              column: 5
            }
          }],
          line: 243
        },
        "20": {
          loc: {
            start: {
              line: 248,
              column: 4
            },
            end: {
              line: 250,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 248,
              column: 4
            },
            end: {
              line: 250,
              column: 5
            }
          }, {
            start: {
              line: 248,
              column: 4
            },
            end: {
              line: 250,
              column: 5
            }
          }],
          line: 248
        },
        "21": {
          loc: {
            start: {
              line: 254,
              column: 4
            },
            end: {
              line: 256,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 254,
              column: 4
            },
            end: {
              line: 256,
              column: 5
            }
          }, {
            start: {
              line: 254,
              column: 4
            },
            end: {
              line: 256,
              column: 5
            }
          }],
          line: 254
        },
        "22": {
          loc: {
            start: {
              line: 258,
              column: 4
            },
            end: {
              line: 262,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 258,
              column: 4
            },
            end: {
              line: 262,
              column: 5
            }
          }, {
            start: {
              line: 258,
              column: 4
            },
            end: {
              line: 262,
              column: 5
            }
          }],
          line: 258
        },
        "23": {
          loc: {
            start: {
              line: 264,
              column: 4
            },
            end: {
              line: 266,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 264,
              column: 4
            },
            end: {
              line: 266,
              column: 5
            }
          }, {
            start: {
              line: 264,
              column: 4
            },
            end: {
              line: 266,
              column: 5
            }
          }],
          line: 264
        },
        "24": {
          loc: {
            start: {
              line: 270,
              column: 4
            },
            end: {
              line: 272,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 270,
              column: 4
            },
            end: {
              line: 272,
              column: 5
            }
          }, {
            start: {
              line: 270,
              column: 4
            },
            end: {
              line: 272,
              column: 5
            }
          }],
          line: 270
        },
        "25": {
          loc: {
            start: {
              line: 275,
              column: 6
            },
            end: {
              line: 279,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 275,
              column: 6
            },
            end: {
              line: 279,
              column: 7
            }
          }, {
            start: {
              line: 275,
              column: 6
            },
            end: {
              line: 279,
              column: 7
            }
          }],
          line: 275
        },
        "26": {
          loc: {
            start: {
              line: 275,
              column: 10
            },
            end: {
              line: 275,
              column: 90
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 275,
              column: 10
            },
            end: {
              line: 275,
              column: 28
            }
          }, {
            start: {
              line: 275,
              column: 32
            },
            end: {
              line: 275,
              column: 90
            }
          }],
          line: 275
        },
        "27": {
          loc: {
            start: {
              line: 277,
              column: 13
            },
            end: {
              line: 279,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 277,
              column: 13
            },
            end: {
              line: 279,
              column: 7
            }
          }, {
            start: {
              line: 277,
              column: 13
            },
            end: {
              line: 279,
              column: 7
            }
          }],
          line: 277
        },
        "28": {
          loc: {
            start: {
              line: 284,
              column: 6
            },
            end: {
              line: 288,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 284,
              column: 6
            },
            end: {
              line: 288,
              column: 7
            }
          }, {
            start: {
              line: 284,
              column: 6
            },
            end: {
              line: 288,
              column: 7
            }
          }],
          line: 284
        },
        "29": {
          loc: {
            start: {
              line: 284,
              column: 10
            },
            end: {
              line: 284,
              column: 79
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 284,
              column: 10
            },
            end: {
              line: 284,
              column: 37
            }
          }, {
            start: {
              line: 284,
              column: 41
            },
            end: {
              line: 284,
              column: 79
            }
          }],
          line: 284
        },
        "30": {
          loc: {
            start: {
              line: 292,
              column: 6
            },
            end: {
              line: 294,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 292,
              column: 6
            },
            end: {
              line: 294,
              column: 7
            }
          }, {
            start: {
              line: 292,
              column: 6
            },
            end: {
              line: 294,
              column: 7
            }
          }],
          line: 292
        },
        "31": {
          loc: {
            start: {
              line: 292,
              column: 10
            },
            end: {
              line: 292,
              column: 90
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 292,
              column: 10
            },
            end: {
              line: 292,
              column: 28
            }
          }, {
            start: {
              line: 292,
              column: 32
            },
            end: {
              line: 292,
              column: 90
            }
          }],
          line: 292
        },
        "32": {
          loc: {
            start: {
              line: 297,
              column: 6
            },
            end: {
              line: 312,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 297,
              column: 6
            },
            end: {
              line: 312,
              column: 7
            }
          }, {
            start: {
              line: 297,
              column: 6
            },
            end: {
              line: 312,
              column: 7
            }
          }],
          line: 297
        },
        "33": {
          loc: {
            start: {
              line: 307,
              column: 8
            },
            end: {
              line: 309,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 307,
              column: 8
            },
            end: {
              line: 309,
              column: 9
            }
          }, {
            start: {
              line: 307,
              column: 8
            },
            end: {
              line: 309,
              column: 9
            }
          }],
          line: 307
        },
        "34": {
          loc: {
            start: {
              line: 318,
              column: 4
            },
            end: {
              line: 327,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 318,
              column: 4
            },
            end: {
              line: 327,
              column: 5
            }
          }, {
            start: {
              line: 318,
              column: 4
            },
            end: {
              line: 327,
              column: 5
            }
          }],
          line: 318
        },
        "35": {
          loc: {
            start: {
              line: 331,
              column: 4
            },
            end: {
              line: 333,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 331,
              column: 4
            },
            end: {
              line: 333,
              column: 5
            }
          }, {
            start: {
              line: 331,
              column: 4
            },
            end: {
              line: 333,
              column: 5
            }
          }],
          line: 331
        },
        "36": {
          loc: {
            start: {
              line: 335,
              column: 4
            },
            end: {
              line: 345,
              column: 5
            }
          },
          type: "switch",
          locations: [{
            start: {
              line: 336,
              column: 6
            },
            end: {
              line: 339,
              column: 13
            }
          }, {
            start: {
              line: 340,
              column: 6
            },
            end: {
              line: 343,
              column: 13
            }
          }, {
            start: {
              line: 344,
              column: 6
            },
            end: {
              line: 344,
              column: 14
            }
          }],
          line: 335
        },
        "37": {
          loc: {
            start: {
              line: 349,
              column: 18
            },
            end: {
              line: 351,
              column: 8
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 350,
              column: 6
            },
            end: {
              line: 350,
              column: 71
            }
          }, {
            start: {
              line: 351,
              column: 6
            },
            end: {
              line: 351,
              column: 8
            }
          }],
          line: 349
        },
        "38": {
          loc: {
            start: {
              line: 349,
              column: 18
            },
            end: {
              line: 349,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 349,
              column: 18
            },
            end: {
              line: 349,
              column: 25
            }
          }, {
            start: {
              line: 349,
              column: 29
            },
            end: {
              line: 349,
              column: 47
            }
          }],
          line: 349
        },
        "39": {
          loc: {
            start: {
              line: 360,
              column: 26
            },
            end: {
              line: 361,
              column: 76
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 360,
              column: 26
            },
            end: {
              line: 360,
              column: 41
            }
          }, {
            start: {
              line: 360,
              column: 45
            },
            end: {
              line: 360,
              column: 62
            }
          }, {
            start: {
              line: 361,
              column: 28
            },
            end: {
              line: 361,
              column: 43
            }
          }, {
            start: {
              line: 361,
              column: 47
            },
            end: {
              line: 361,
              column: 76
            }
          }],
          line: 360
        },
        "40": {
          loc: {
            start: {
              line: 363,
              column: 4
            },
            end: {
              line: 365,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 363,
              column: 4
            },
            end: {
              line: 365,
              column: 5
            }
          }, {
            start: {
              line: 363,
              column: 4
            },
            end: {
              line: 365,
              column: 5
            }
          }],
          line: 363
        },
        "41": {
          loc: {
            start: {
              line: 363,
              column: 8
            },
            end: {
              line: 363,
              column: 43
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 363,
              column: 8
            },
            end: {
              line: 363,
              column: 21
            }
          }, {
            start: {
              line: 363,
              column: 25
            },
            end: {
              line: 363,
              column: 43
            }
          }],
          line: 363
        },
        "42": {
          loc: {
            start: {
              line: 367,
              column: 18
            },
            end: {
              line: 367,
              column: 55
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 367,
              column: 49
            },
            end: {
              line: 367,
              column: 51
            }
          }, {
            start: {
              line: 367,
              column: 54
            },
            end: {
              line: 367,
              column: 55
            }
          }],
          line: 367
        },
        "43": {
          loc: {
            start: {
              line: 370,
              column: 11
            },
            end: {
              line: 371,
              column: 66
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 371,
              column: 6
            },
            end: {
              line: 371,
              column: 41
            }
          }, {
            start: {
              line: 371,
              column: 44
            },
            end: {
              line: 371,
              column: 66
            }
          }],
          line: 370
        },
        "44": {
          loc: {
            start: {
              line: 390,
              column: 4
            },
            end: {
              line: 401,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 390,
              column: 4
            },
            end: {
              line: 401,
              column: 5
            }
          }, {
            start: {
              line: 390,
              column: 4
            },
            end: {
              line: 401,
              column: 5
            }
          }],
          line: 390
        },
        "45": {
          loc: {
            start: {
              line: 398,
              column: 6
            },
            end: {
              line: 400,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 398,
              column: 6
            },
            end: {
              line: 400,
              column: 7
            }
          }, {
            start: {
              line: 398,
              column: 6
            },
            end: {
              line: 400,
              column: 7
            }
          }],
          line: 398
        },
        "46": {
          loc: {
            start: {
              line: 407,
              column: 24
            },
            end: {
              line: 408,
              column: 56
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 407,
              column: 24
            },
            end: {
              line: 407,
              column: 31
            }
          }, {
            start: {
              line: 407,
              column: 35
            },
            end: {
              line: 407,
              column: 48
            }
          }, {
            start: {
              line: 408,
              column: 6
            },
            end: {
              line: 408,
              column: 56
            }
          }],
          line: 407
        },
        "47": {
          loc: {
            start: {
              line: 416,
              column: 4
            },
            end: {
              line: 424,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 416,
              column: 4
            },
            end: {
              line: 424,
              column: 5
            }
          }, {
            start: {
              line: 416,
              column: 4
            },
            end: {
              line: 424,
              column: 5
            }
          }],
          line: 416
        },
        "48": {
          loc: {
            start: {
              line: 426,
              column: 4
            },
            end: {
              line: 429,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 426,
              column: 4
            },
            end: {
              line: 429,
              column: 5
            }
          }, {
            start: {
              line: 426,
              column: 4
            },
            end: {
              line: 429,
              column: 5
            }
          }],
          line: 426
        },
        "49": {
          loc: {
            start: {
              line: 426,
              column: 8
            },
            end: {
              line: 426,
              column: 65
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 426,
              column: 8
            },
            end: {
              line: 426,
              column: 19
            }
          }, {
            start: {
              line: 426,
              column: 23
            },
            end: {
              line: 426,
              column: 65
            }
          }],
          line: 426
        },
        "50": {
          loc: {
            start: {
              line: 432,
              column: 4
            },
            end: {
              line: 434,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 432,
              column: 4
            },
            end: {
              line: 434,
              column: 5
            }
          }, {
            start: {
              line: 432,
              column: 4
            },
            end: {
              line: 434,
              column: 5
            }
          }],
          line: 432
        },
        "51": {
          loc: {
            start: {
              line: 436,
              column: 4
            },
            end: {
              line: 439,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 436,
              column: 4
            },
            end: {
              line: 439,
              column: 5
            }
          }, {
            start: {
              line: 436,
              column: 4
            },
            end: {
              line: 439,
              column: 5
            }
          }],
          line: 436
        },
        "52": {
          loc: {
            start: {
              line: 436,
              column: 8
            },
            end: {
              line: 436,
              column: 38
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 436,
              column: 8
            },
            end: {
              line: 436,
              column: 22
            }
          }, {
            start: {
              line: 436,
              column: 26
            },
            end: {
              line: 436,
              column: 38
            }
          }],
          line: 436
        },
        "53": {
          loc: {
            start: {
              line: 443,
              column: 4
            },
            end: {
              line: 445,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 443,
              column: 4
            },
            end: {
              line: 445,
              column: 5
            }
          }, {
            start: {
              line: 443,
              column: 4
            },
            end: {
              line: 445,
              column: 5
            }
          }],
          line: 443
        },
        "54": {
          loc: {
            start: {
              line: 456,
              column: 4
            },
            end: {
              line: 493,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 456,
              column: 4
            },
            end: {
              line: 493,
              column: 5
            }
          }, {
            start: {
              line: 456,
              column: 4
            },
            end: {
              line: 493,
              column: 5
            }
          }],
          line: 456
        },
        "55": {
          loc: {
            start: {
              line: 465,
              column: 6
            },
            end: {
              line: 470,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 465,
              column: 6
            },
            end: {
              line: 470,
              column: 7
            }
          }, {
            start: {
              line: 465,
              column: 6
            },
            end: {
              line: 470,
              column: 7
            }
          }],
          line: 465
        },
        "56": {
          loc: {
            start: {
              line: 466,
              column: 39
            },
            end: {
              line: 466,
              column: 92
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 466,
              column: 39
            },
            end: {
              line: 466,
              column: 67
            }
          }, {
            start: {
              line: 466,
              column: 71
            },
            end: {
              line: 466,
              column: 92
            }
          }],
          line: 466
        },
        "57": {
          loc: {
            start: {
              line: 469,
              column: 32
            },
            end: {
              line: 469,
              column: 85
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 469,
              column: 32
            },
            end: {
              line: 469,
              column: 60
            }
          }, {
            start: {
              line: 469,
              column: 64
            },
            end: {
              line: 469,
              column: 85
            }
          }],
          line: 469
        },
        "58": {
          loc: {
            start: {
              line: 495,
              column: 4
            },
            end: {
              line: 497,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 495,
              column: 4
            },
            end: {
              line: 497,
              column: 5
            }
          }, {
            start: {
              line: 495,
              column: 4
            },
            end: {
              line: 497,
              column: 5
            }
          }],
          line: 495
        },
        "59": {
          loc: {
            start: {
              line: 510,
              column: 6
            },
            end: {
              line: 515,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 510,
              column: 6
            },
            end: {
              line: 515,
              column: 7
            }
          }, {
            start: {
              line: 510,
              column: 6
            },
            end: {
              line: 515,
              column: 7
            }
          }],
          line: 510
        },
        "60": {
          loc: {
            start: {
              line: 517,
              column: 21
            },
            end: {
              line: 517,
              column: 72
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 517,
              column: 50
            },
            end: {
              line: 517,
              column: 56
            }
          }, {
            start: {
              line: 517,
              column: 59
            },
            end: {
              line: 517,
              column: 72
            }
          }],
          line: 517
        },
        "61": {
          loc: {
            start: {
              line: 519,
              column: 6
            },
            end: {
              line: 522,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 519,
              column: 6
            },
            end: {
              line: 522,
              column: 7
            }
          }, {
            start: {
              line: 519,
              column: 6
            },
            end: {
              line: 522,
              column: 7
            }
          }],
          line: 519
        },
        "62": {
          loc: {
            start: {
              line: 524,
              column: 6
            },
            end: {
              line: 535,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 524,
              column: 6
            },
            end: {
              line: 535,
              column: 7
            }
          }, {
            start: {
              line: 524,
              column: 6
            },
            end: {
              line: 535,
              column: 7
            }
          }],
          line: 524
        },
        "63": {
          loc: {
            start: {
              line: 526,
              column: 13
            },
            end: {
              line: 535,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 526,
              column: 13
            },
            end: {
              line: 535,
              column: 7
            }
          }, {
            start: {
              line: 526,
              column: 13
            },
            end: {
              line: 535,
              column: 7
            }
          }],
          line: 526
        },
        "64": {
          loc: {
            start: {
              line: 527,
              column: 8
            },
            end: {
              line: 529,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 527,
              column: 8
            },
            end: {
              line: 529,
              column: 9
            }
          }, {
            start: {
              line: 527,
              column: 8
            },
            end: {
              line: 529,
              column: 9
            }
          }],
          line: 527
        },
        "65": {
          loc: {
            start: {
              line: 532,
              column: 13
            },
            end: {
              line: 535,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 532,
              column: 13
            },
            end: {
              line: 535,
              column: 7
            }
          }, {
            start: {
              line: 532,
              column: 13
            },
            end: {
              line: 535,
              column: 7
            }
          }],
          line: 532
        },
        "66": {
          loc: {
            start: {
              line: 532,
              column: 17
            },
            end: {
              line: 532,
              column: 49
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 532,
              column: 17
            },
            end: {
              line: 532,
              column: 33
            }
          }, {
            start: {
              line: 532,
              column: 37
            },
            end: {
              line: 532,
              column: 49
            }
          }],
          line: 532
        },
        "67": {
          loc: {
            start: {
              line: 542,
              column: 4
            },
            end: {
              line: 544,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 542,
              column: 4
            },
            end: {
              line: 544,
              column: 5
            }
          }, {
            start: {
              line: 542,
              column: 4
            },
            end: {
              line: 544,
              column: 5
            }
          }],
          line: 542
        },
        "68": {
          loc: {
            start: {
              line: 548,
              column: 4
            },
            end: {
              line: 550,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 548,
              column: 4
            },
            end: {
              line: 550,
              column: 5
            }
          }, {
            start: {
              line: 548,
              column: 4
            },
            end: {
              line: 550,
              column: 5
            }
          }],
          line: 548
        },
        "69": {
          loc: {
            start: {
              line: 548,
              column: 8
            },
            end: {
              line: 548,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 548,
              column: 8
            },
            end: {
              line: 548,
              column: 15
            }
          }, {
            start: {
              line: 548,
              column: 19
            },
            end: {
              line: 548,
              column: 59
            }
          }],
          line: 548
        },
        "70": {
          loc: {
            start: {
              line: 558,
              column: 4
            },
            end: {
              line: 560,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 558,
              column: 4
            },
            end: {
              line: 560,
              column: 5
            }
          }, {
            start: {
              line: 558,
              column: 4
            },
            end: {
              line: 560,
              column: 5
            }
          }],
          line: 558
        },
        "71": {
          loc: {
            start: {
              line: 564,
              column: 4
            },
            end: {
              line: 566,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 564,
              column: 4
            },
            end: {
              line: 566,
              column: 5
            }
          }, {
            start: {
              line: 564,
              column: 4
            },
            end: {
              line: 566,
              column: 5
            }
          }],
          line: 564
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
        "287": 0
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
        "40": 0
      },
      b: {
        "0": [0, 0],
        "1": [0, 0],
        "2": [0, 0],
        "3": [0, 0],
        "4": [0, 0, 0],
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
        "28": [0, 0],
        "29": [0, 0],
        "30": [0, 0],
        "31": [0, 0],
        "32": [0, 0],
        "33": [0, 0],
        "34": [0, 0],
        "35": [0, 0],
        "36": [0, 0, 0],
        "37": [0, 0],
        "38": [0, 0],
        "39": [0, 0, 0, 0],
        "40": [0, 0],
        "41": [0, 0],
        "42": [0, 0],
        "43": [0, 0],
        "44": [0, 0],
        "45": [0, 0],
        "46": [0, 0, 0],
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
        "70": [0, 0],
        "71": [0, 0]
      },
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "e4c4ba594fc7ae0e120e8c27097dd89bc88709fd"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }

    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_2n99frj7rv = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }

  cov_2n99frj7rv();

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_2n99frj7rv().s[0]++, 'carousel');
  var VERSION = (cov_2n99frj7rv().s[1]++, '4.5.3');
  var DATA_KEY = (cov_2n99frj7rv().s[2]++, 'bs.carousel');
  var EVENT_KEY = (cov_2n99frj7rv().s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_2n99frj7rv().s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_2n99frj7rv().s[5]++, $__default['default'].fn[NAME]);
  var ARROW_LEFT_KEYCODE = (cov_2n99frj7rv().s[6]++, 37); // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = (cov_2n99frj7rv().s[7]++, 39); // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = (cov_2n99frj7rv().s[8]++, 500); // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = (cov_2n99frj7rv().s[9]++, 40);
  var Default = (cov_2n99frj7rv().s[10]++, {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  });
  var DefaultType = (cov_2n99frj7rv().s[11]++, {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  });
  var DIRECTION_NEXT = (cov_2n99frj7rv().s[12]++, 'next');
  var DIRECTION_PREV = (cov_2n99frj7rv().s[13]++, 'prev');
  var DIRECTION_LEFT = (cov_2n99frj7rv().s[14]++, 'left');
  var DIRECTION_RIGHT = (cov_2n99frj7rv().s[15]++, 'right');
  var EVENT_SLIDE = (cov_2n99frj7rv().s[16]++, "slide" + EVENT_KEY);
  var EVENT_SLID = (cov_2n99frj7rv().s[17]++, "slid" + EVENT_KEY);
  var EVENT_KEYDOWN = (cov_2n99frj7rv().s[18]++, "keydown" + EVENT_KEY);
  var EVENT_MOUSEENTER = (cov_2n99frj7rv().s[19]++, "mouseenter" + EVENT_KEY);
  var EVENT_MOUSELEAVE = (cov_2n99frj7rv().s[20]++, "mouseleave" + EVENT_KEY);
  var EVENT_TOUCHSTART = (cov_2n99frj7rv().s[21]++, "touchstart" + EVENT_KEY);
  var EVENT_TOUCHMOVE = (cov_2n99frj7rv().s[22]++, "touchmove" + EVENT_KEY);
  var EVENT_TOUCHEND = (cov_2n99frj7rv().s[23]++, "touchend" + EVENT_KEY);
  var EVENT_POINTERDOWN = (cov_2n99frj7rv().s[24]++, "pointerdown" + EVENT_KEY);
  var EVENT_POINTERUP = (cov_2n99frj7rv().s[25]++, "pointerup" + EVENT_KEY);
  var EVENT_DRAG_START = (cov_2n99frj7rv().s[26]++, "dragstart" + EVENT_KEY);
  var EVENT_LOAD_DATA_API = (cov_2n99frj7rv().s[27]++, "load" + EVENT_KEY + DATA_API_KEY);
  var EVENT_CLICK_DATA_API = (cov_2n99frj7rv().s[28]++, "click" + EVENT_KEY + DATA_API_KEY);
  var CLASS_NAME_CAROUSEL = (cov_2n99frj7rv().s[29]++, 'carousel');
  var CLASS_NAME_ACTIVE = (cov_2n99frj7rv().s[30]++, 'active');
  var CLASS_NAME_SLIDE = (cov_2n99frj7rv().s[31]++, 'slide');
  var CLASS_NAME_RIGHT = (cov_2n99frj7rv().s[32]++, 'carousel-item-right');
  var CLASS_NAME_LEFT = (cov_2n99frj7rv().s[33]++, 'carousel-item-left');
  var CLASS_NAME_NEXT = (cov_2n99frj7rv().s[34]++, 'carousel-item-next');
  var CLASS_NAME_PREV = (cov_2n99frj7rv().s[35]++, 'carousel-item-prev');
  var CLASS_NAME_POINTER_EVENT = (cov_2n99frj7rv().s[36]++, 'pointer-event');
  var SELECTOR_ACTIVE = (cov_2n99frj7rv().s[37]++, '.active');
  var SELECTOR_ACTIVE_ITEM = (cov_2n99frj7rv().s[38]++, '.active.carousel-item');
  var SELECTOR_ITEM = (cov_2n99frj7rv().s[39]++, '.carousel-item');
  var SELECTOR_ITEM_IMG = (cov_2n99frj7rv().s[40]++, '.carousel-item img');
  var SELECTOR_NEXT_PREV = (cov_2n99frj7rv().s[41]++, '.carousel-item-next, .carousel-item-prev');
  var SELECTOR_INDICATORS = (cov_2n99frj7rv().s[42]++, '.carousel-indicators');
  var SELECTOR_DATA_SLIDE = (cov_2n99frj7rv().s[43]++, '[data-slide], [data-slide-to]');
  var SELECTOR_DATA_RIDE = (cov_2n99frj7rv().s[44]++, '[data-ride="carousel"]');
  var PointerType = (cov_2n99frj7rv().s[45]++, {
    TOUCH: 'touch',
    PEN: 'pen'
  });
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element, config) {
      cov_2n99frj7rv().f[0]++;
      cov_2n99frj7rv().s[46]++;
      this._items = null;
      cov_2n99frj7rv().s[47]++;
      this._interval = null;
      cov_2n99frj7rv().s[48]++;
      this._activeElement = null;
      cov_2n99frj7rv().s[49]++;
      this._isPaused = false;
      cov_2n99frj7rv().s[50]++;
      this._isSliding = false;
      cov_2n99frj7rv().s[51]++;
      this.touchTimeout = null;
      cov_2n99frj7rv().s[52]++;
      this.touchStartX = 0;
      cov_2n99frj7rv().s[53]++;
      this.touchDeltaX = 0;
      cov_2n99frj7rv().s[54]++;
      this._config = this._getConfig(config);
      cov_2n99frj7rv().s[55]++;
      this._element = element;
      cov_2n99frj7rv().s[56]++;
      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
      cov_2n99frj7rv().s[57]++;
      this._touchSupported = (cov_2n99frj7rv().b[0][0]++, 'ontouchstart' in document.documentElement) || (cov_2n99frj7rv().b[0][1]++, navigator.maxTouchPoints > 0);
      cov_2n99frj7rv().s[58]++;
      this._pointerEvent = Boolean((cov_2n99frj7rv().b[1][0]++, window.PointerEvent) || (cov_2n99frj7rv().b[1][1]++, window.MSPointerEvent));
      cov_2n99frj7rv().s[59]++;

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      cov_2n99frj7rv().f[3]++;
      cov_2n99frj7rv().s[62]++;

      if (!this._isSliding) {
        cov_2n99frj7rv().b[2][0]++;
        cov_2n99frj7rv().s[63]++;

        this._slide(DIRECTION_NEXT);
      } else {
        cov_2n99frj7rv().b[2][1]++;
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      cov_2n99frj7rv().f[4]++;
      var $element = (cov_2n99frj7rv().s[64]++, $__default['default'](this._element)); // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible

      cov_2n99frj7rv().s[65]++;

      if ((cov_2n99frj7rv().b[4][0]++, !document.hidden) && (cov_2n99frj7rv().b[4][1]++, $element.is(':visible')) && (cov_2n99frj7rv().b[4][2]++, $element.css('visibility') !== 'hidden')) {
        cov_2n99frj7rv().b[3][0]++;
        cov_2n99frj7rv().s[66]++;
        this.next();
      } else {
        cov_2n99frj7rv().b[3][1]++;
      }
    };

    _proto.prev = function prev() {
      cov_2n99frj7rv().f[5]++;
      cov_2n99frj7rv().s[67]++;

      if (!this._isSliding) {
        cov_2n99frj7rv().b[5][0]++;
        cov_2n99frj7rv().s[68]++;

        this._slide(DIRECTION_PREV);
      } else {
        cov_2n99frj7rv().b[5][1]++;
      }
    };

    _proto.pause = function pause(event) {
      cov_2n99frj7rv().f[6]++;
      cov_2n99frj7rv().s[69]++;

      if (!event) {
        cov_2n99frj7rv().b[6][0]++;
        cov_2n99frj7rv().s[70]++;
        this._isPaused = true;
      } else {
        cov_2n99frj7rv().b[6][1]++;
      }

      cov_2n99frj7rv().s[71]++;

      if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
        cov_2n99frj7rv().b[7][0]++;
        cov_2n99frj7rv().s[72]++;
        Util__default['default'].triggerTransitionEnd(this._element);
        cov_2n99frj7rv().s[73]++;
        this.cycle(true);
      } else {
        cov_2n99frj7rv().b[7][1]++;
      }

      cov_2n99frj7rv().s[74]++;
      clearInterval(this._interval);
      cov_2n99frj7rv().s[75]++;
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      cov_2n99frj7rv().f[7]++;
      cov_2n99frj7rv().s[76]++;

      if (!event) {
        cov_2n99frj7rv().b[8][0]++;
        cov_2n99frj7rv().s[77]++;
        this._isPaused = false;
      } else {
        cov_2n99frj7rv().b[8][1]++;
      }

      cov_2n99frj7rv().s[78]++;

      if (this._interval) {
        cov_2n99frj7rv().b[9][0]++;
        cov_2n99frj7rv().s[79]++;
        clearInterval(this._interval);
        cov_2n99frj7rv().s[80]++;
        this._interval = null;
      } else {
        cov_2n99frj7rv().b[9][1]++;
      }

      cov_2n99frj7rv().s[81]++;

      if ((cov_2n99frj7rv().b[11][0]++, this._config.interval) && (cov_2n99frj7rv().b[11][1]++, !this._isPaused)) {
        cov_2n99frj7rv().b[10][0]++;
        cov_2n99frj7rv().s[82]++;
        this._interval = setInterval((document.visibilityState ? (cov_2n99frj7rv().b[12][0]++, this.nextWhenVisible) : (cov_2n99frj7rv().b[12][1]++, this.next)).bind(this), this._config.interval);
      } else {
        cov_2n99frj7rv().b[10][1]++;
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      cov_2n99frj7rv().f[8]++;
      cov_2n99frj7rv().s[83]++;
      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);
      var activeIndex = (cov_2n99frj7rv().s[84]++, this._getItemIndex(this._activeElement));
      cov_2n99frj7rv().s[85]++;

      if ((cov_2n99frj7rv().b[14][0]++, index > this._items.length - 1) || (cov_2n99frj7rv().b[14][1]++, index < 0)) {
        cov_2n99frj7rv().b[13][0]++;
        cov_2n99frj7rv().s[86]++;
        return;
      } else {
        cov_2n99frj7rv().b[13][1]++;
      }

      cov_2n99frj7rv().s[87]++;

      if (this._isSliding) {
        cov_2n99frj7rv().b[15][0]++;
        cov_2n99frj7rv().s[88]++;
        $__default['default'](this._element).one(EVENT_SLID, function () {
          cov_2n99frj7rv().f[9]++;
          cov_2n99frj7rv().s[89]++;
          return _this.to(index);
        });
        cov_2n99frj7rv().s[90]++;
        return;
      } else {
        cov_2n99frj7rv().b[15][1]++;
      }

      cov_2n99frj7rv().s[91]++;

      if (activeIndex === index) {
        cov_2n99frj7rv().b[16][0]++;
        cov_2n99frj7rv().s[92]++;
        this.pause();
        cov_2n99frj7rv().s[93]++;
        this.cycle();
        cov_2n99frj7rv().s[94]++;
        return;
      } else {
        cov_2n99frj7rv().b[16][1]++;
      }

      var direction = (cov_2n99frj7rv().s[95]++, index > activeIndex ? (cov_2n99frj7rv().b[17][0]++, DIRECTION_NEXT) : (cov_2n99frj7rv().b[17][1]++, DIRECTION_PREV));
      cov_2n99frj7rv().s[96]++;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      cov_2n99frj7rv().f[10]++;
      cov_2n99frj7rv().s[97]++;
      $__default['default'](this._element).off(EVENT_KEY);
      cov_2n99frj7rv().s[98]++;
      $__default['default'].removeData(this._element, DATA_KEY);
      cov_2n99frj7rv().s[99]++;
      this._items = null;
      cov_2n99frj7rv().s[100]++;
      this._config = null;
      cov_2n99frj7rv().s[101]++;
      this._element = null;
      cov_2n99frj7rv().s[102]++;
      this._interval = null;
      cov_2n99frj7rv().s[103]++;
      this._isPaused = null;
      cov_2n99frj7rv().s[104]++;
      this._isSliding = null;
      cov_2n99frj7rv().s[105]++;
      this._activeElement = null;
      cov_2n99frj7rv().s[106]++;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      cov_2n99frj7rv().f[11]++;
      cov_2n99frj7rv().s[107]++;
      config = _extends({}, Default, config);
      cov_2n99frj7rv().s[108]++;
      Util__default['default'].typeCheckConfig(NAME, config, DefaultType);
      cov_2n99frj7rv().s[109]++;
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      cov_2n99frj7rv().f[12]++;
      var absDeltax = (cov_2n99frj7rv().s[110]++, Math.abs(this.touchDeltaX));
      cov_2n99frj7rv().s[111]++;

      if (absDeltax <= SWIPE_THRESHOLD) {
        cov_2n99frj7rv().b[18][0]++;
        cov_2n99frj7rv().s[112]++;
        return;
      } else {
        cov_2n99frj7rv().b[18][1]++;
      }

      var direction = (cov_2n99frj7rv().s[113]++, absDeltax / this.touchDeltaX);
      cov_2n99frj7rv().s[114]++;
      this.touchDeltaX = 0; // swipe left

      cov_2n99frj7rv().s[115]++;

      if (direction > 0) {
        cov_2n99frj7rv().b[19][0]++;
        cov_2n99frj7rv().s[116]++;
        this.prev();
      } else {
        cov_2n99frj7rv().b[19][1]++;
      } // swipe right


      cov_2n99frj7rv().s[117]++;

      if (direction < 0) {
        cov_2n99frj7rv().b[20][0]++;
        cov_2n99frj7rv().s[118]++;
        this.next();
      } else {
        cov_2n99frj7rv().b[20][1]++;
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      cov_2n99frj7rv().f[13]++;
      cov_2n99frj7rv().s[119]++;

      if (this._config.keyboard) {
        cov_2n99frj7rv().b[21][0]++;
        cov_2n99frj7rv().s[120]++;
        $__default['default'](this._element).on(EVENT_KEYDOWN, function (event) {
          cov_2n99frj7rv().f[14]++;
          cov_2n99frj7rv().s[121]++;
          return _this2._keydown(event);
        });
      } else {
        cov_2n99frj7rv().b[21][1]++;
      }

      cov_2n99frj7rv().s[122]++;

      if (this._config.pause === 'hover') {
        cov_2n99frj7rv().b[22][0]++;
        cov_2n99frj7rv().s[123]++;
        $__default['default'](this._element).on(EVENT_MOUSEENTER, function (event) {
          cov_2n99frj7rv().f[15]++;
          cov_2n99frj7rv().s[124]++;
          return _this2.pause(event);
        }).on(EVENT_MOUSELEAVE, function (event) {
          cov_2n99frj7rv().f[16]++;
          cov_2n99frj7rv().s[125]++;
          return _this2.cycle(event);
        });
      } else {
        cov_2n99frj7rv().b[22][1]++;
      }

      cov_2n99frj7rv().s[126]++;

      if (this._config.touch) {
        cov_2n99frj7rv().b[23][0]++;
        cov_2n99frj7rv().s[127]++;

        this._addTouchEventListeners();
      } else {
        cov_2n99frj7rv().b[23][1]++;
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      cov_2n99frj7rv().f[17]++;
      cov_2n99frj7rv().s[128]++;

      if (!this._touchSupported) {
        cov_2n99frj7rv().b[24][0]++;
        cov_2n99frj7rv().s[129]++;
        return;
      } else {
        cov_2n99frj7rv().b[24][1]++;
      }

      cov_2n99frj7rv().s[130]++;

      var start = function start(event) {
        cov_2n99frj7rv().f[18]++;
        cov_2n99frj7rv().s[131]++;

        if ((cov_2n99frj7rv().b[26][0]++, _this3._pointerEvent) && (cov_2n99frj7rv().b[26][1]++, PointerType[event.originalEvent.pointerType.toUpperCase()])) {
          cov_2n99frj7rv().b[25][0]++;
          cov_2n99frj7rv().s[132]++;
          _this3.touchStartX = event.originalEvent.clientX;
        } else {
          cov_2n99frj7rv().b[25][1]++;
          cov_2n99frj7rv().s[133]++;

          if (!_this3._pointerEvent) {
            cov_2n99frj7rv().b[27][0]++;
            cov_2n99frj7rv().s[134]++;
            _this3.touchStartX = event.originalEvent.touches[0].clientX;
          } else {
            cov_2n99frj7rv().b[27][1]++;
          }
        }
      };

      cov_2n99frj7rv().s[135]++;

      var move = function move(event) {
        cov_2n99frj7rv().f[19]++;
        cov_2n99frj7rv().s[136]++;

        // ensure swiping with one touch and not pinching
        if ((cov_2n99frj7rv().b[29][0]++, event.originalEvent.touches) && (cov_2n99frj7rv().b[29][1]++, event.originalEvent.touches.length > 1)) {
          cov_2n99frj7rv().b[28][0]++;
          cov_2n99frj7rv().s[137]++;
          _this3.touchDeltaX = 0;
        } else {
          cov_2n99frj7rv().b[28][1]++;
          cov_2n99frj7rv().s[138]++;
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      cov_2n99frj7rv().s[139]++;

      var end = function end(event) {
        cov_2n99frj7rv().f[20]++;
        cov_2n99frj7rv().s[140]++;

        if ((cov_2n99frj7rv().b[31][0]++, _this3._pointerEvent) && (cov_2n99frj7rv().b[31][1]++, PointerType[event.originalEvent.pointerType.toUpperCase()])) {
          cov_2n99frj7rv().b[30][0]++;
          cov_2n99frj7rv().s[141]++;
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        } else {
          cov_2n99frj7rv().b[30][1]++;
        }

        cov_2n99frj7rv().s[142]++;

        _this3._handleSwipe();

        cov_2n99frj7rv().s[143]++;

        if (_this3._config.pause === 'hover') {
          cov_2n99frj7rv().b[32][0]++;
          cov_2n99frj7rv().s[144]++;

          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          cov_2n99frj7rv().s[145]++;

          if (_this3.touchTimeout) {
            cov_2n99frj7rv().b[33][0]++;
            cov_2n99frj7rv().s[146]++;
            clearTimeout(_this3.touchTimeout);
          } else {
            cov_2n99frj7rv().b[33][1]++;
          }

          cov_2n99frj7rv().s[147]++;
          _this3.touchTimeout = setTimeout(function (event) {
            cov_2n99frj7rv().f[21]++;
            cov_2n99frj7rv().s[148]++;
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        } else {
          cov_2n99frj7rv().b[32][1]++;
        }
      };

      cov_2n99frj7rv().s[149]++;
      $__default['default'](this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
        cov_2n99frj7rv().f[22]++;
        cov_2n99frj7rv().s[150]++;
        return e.preventDefault();
      });
      cov_2n99frj7rv().s[151]++;

      if (this._pointerEvent) {
        cov_2n99frj7rv().b[34][0]++;
        cov_2n99frj7rv().s[152]++;
        $__default['default'](this._element).on(EVENT_POINTERDOWN, function (event) {
          cov_2n99frj7rv().f[23]++;
          cov_2n99frj7rv().s[153]++;
          return start(event);
        });
        cov_2n99frj7rv().s[154]++;
        $__default['default'](this._element).on(EVENT_POINTERUP, function (event) {
          cov_2n99frj7rv().f[24]++;
          cov_2n99frj7rv().s[155]++;
          return end(event);
        });
        cov_2n99frj7rv().s[156]++;

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        cov_2n99frj7rv().b[34][1]++;
        cov_2n99frj7rv().s[157]++;
        $__default['default'](this._element).on(EVENT_TOUCHSTART, function (event) {
          cov_2n99frj7rv().f[25]++;
          cov_2n99frj7rv().s[158]++;
          return start(event);
        });
        cov_2n99frj7rv().s[159]++;
        $__default['default'](this._element).on(EVENT_TOUCHMOVE, function (event) {
          cov_2n99frj7rv().f[26]++;
          cov_2n99frj7rv().s[160]++;
          return move(event);
        });
        cov_2n99frj7rv().s[161]++;
        $__default['default'](this._element).on(EVENT_TOUCHEND, function (event) {
          cov_2n99frj7rv().f[27]++;
          cov_2n99frj7rv().s[162]++;
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      cov_2n99frj7rv().f[28]++;
      cov_2n99frj7rv().s[163]++;

      if (/input|textarea/i.test(event.target.tagName)) {
        cov_2n99frj7rv().b[35][0]++;
        cov_2n99frj7rv().s[164]++;
        return;
      } else {
        cov_2n99frj7rv().b[35][1]++;
      }

      cov_2n99frj7rv().s[165]++;

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          cov_2n99frj7rv().b[36][0]++;
          cov_2n99frj7rv().s[166]++;
          event.preventDefault();
          cov_2n99frj7rv().s[167]++;
          this.prev();
          cov_2n99frj7rv().s[168]++;
          break;

        case ARROW_RIGHT_KEYCODE:
          cov_2n99frj7rv().b[36][1]++;
          cov_2n99frj7rv().s[169]++;
          event.preventDefault();
          cov_2n99frj7rv().s[170]++;
          this.next();
          cov_2n99frj7rv().s[171]++;
          break;

        default:
          cov_2n99frj7rv().b[36][2]++;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      cov_2n99frj7rv().f[29]++;
      cov_2n99frj7rv().s[172]++;
      this._items = (cov_2n99frj7rv().b[38][0]++, element) && (cov_2n99frj7rv().b[38][1]++, element.parentNode) ? (cov_2n99frj7rv().b[37][0]++, [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM))) : (cov_2n99frj7rv().b[37][1]++, []);
      cov_2n99frj7rv().s[173]++;
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      cov_2n99frj7rv().f[30]++;
      var isNextDirection = (cov_2n99frj7rv().s[174]++, direction === DIRECTION_NEXT);
      var isPrevDirection = (cov_2n99frj7rv().s[175]++, direction === DIRECTION_PREV);
      var activeIndex = (cov_2n99frj7rv().s[176]++, this._getItemIndex(activeElement));
      var lastItemIndex = (cov_2n99frj7rv().s[177]++, this._items.length - 1);
      var isGoingToWrap = (cov_2n99frj7rv().s[178]++, (cov_2n99frj7rv().b[39][0]++, isPrevDirection) && (cov_2n99frj7rv().b[39][1]++, activeIndex === 0) || (cov_2n99frj7rv().b[39][2]++, isNextDirection) && (cov_2n99frj7rv().b[39][3]++, activeIndex === lastItemIndex));
      cov_2n99frj7rv().s[179]++;

      if ((cov_2n99frj7rv().b[41][0]++, isGoingToWrap) && (cov_2n99frj7rv().b[41][1]++, !this._config.wrap)) {
        cov_2n99frj7rv().b[40][0]++;
        cov_2n99frj7rv().s[180]++;
        return activeElement;
      } else {
        cov_2n99frj7rv().b[40][1]++;
      }

      var delta = (cov_2n99frj7rv().s[181]++, direction === DIRECTION_PREV ? (cov_2n99frj7rv().b[42][0]++, -1) : (cov_2n99frj7rv().b[42][1]++, 1));
      var itemIndex = (cov_2n99frj7rv().s[182]++, (activeIndex + delta) % this._items.length);
      cov_2n99frj7rv().s[183]++;
      return itemIndex === -1 ? (cov_2n99frj7rv().b[43][0]++, this._items[this._items.length - 1]) : (cov_2n99frj7rv().b[43][1]++, this._items[itemIndex]);
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      cov_2n99frj7rv().f[31]++;
      var targetIndex = (cov_2n99frj7rv().s[184]++, this._getItemIndex(relatedTarget));
      var fromIndex = (cov_2n99frj7rv().s[185]++, this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM)));
      var slideEvent = (cov_2n99frj7rv().s[186]++, $__default['default'].Event(EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      }));
      cov_2n99frj7rv().s[187]++;
      $__default['default'](this._element).trigger(slideEvent);
      cov_2n99frj7rv().s[188]++;
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      cov_2n99frj7rv().f[32]++;
      cov_2n99frj7rv().s[189]++;

      if (this._indicatorsElement) {
        cov_2n99frj7rv().b[44][0]++;
        var indicators = (cov_2n99frj7rv().s[190]++, [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE)));
        cov_2n99frj7rv().s[191]++;
        $__default['default'](indicators).removeClass(CLASS_NAME_ACTIVE);
        var nextIndicator = (cov_2n99frj7rv().s[192]++, this._indicatorsElement.children[this._getItemIndex(element)]);
        cov_2n99frj7rv().s[193]++;

        if (nextIndicator) {
          cov_2n99frj7rv().b[45][0]++;
          cov_2n99frj7rv().s[194]++;
          $__default['default'](nextIndicator).addClass(CLASS_NAME_ACTIVE);
        } else {
          cov_2n99frj7rv().b[45][1]++;
        }
      } else {
        cov_2n99frj7rv().b[44][1]++;
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      cov_2n99frj7rv().f[33]++;
      var activeElement = (cov_2n99frj7rv().s[195]++, this._element.querySelector(SELECTOR_ACTIVE_ITEM));
      var activeElementIndex = (cov_2n99frj7rv().s[196]++, this._getItemIndex(activeElement));
      var nextElement = (cov_2n99frj7rv().s[197]++, (cov_2n99frj7rv().b[46][0]++, element) || (cov_2n99frj7rv().b[46][1]++, activeElement) && (cov_2n99frj7rv().b[46][2]++, this._getItemByDirection(direction, activeElement)));
      var nextElementIndex = (cov_2n99frj7rv().s[198]++, this._getItemIndex(nextElement));
      var isCycling = (cov_2n99frj7rv().s[199]++, Boolean(this._interval));
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;
      cov_2n99frj7rv().s[200]++;

      if (direction === DIRECTION_NEXT) {
        cov_2n99frj7rv().b[47][0]++;
        cov_2n99frj7rv().s[201]++;
        directionalClassName = CLASS_NAME_LEFT;
        cov_2n99frj7rv().s[202]++;
        orderClassName = CLASS_NAME_NEXT;
        cov_2n99frj7rv().s[203]++;
        eventDirectionName = DIRECTION_LEFT;
      } else {
        cov_2n99frj7rv().b[47][1]++;
        cov_2n99frj7rv().s[204]++;
        directionalClassName = CLASS_NAME_RIGHT;
        cov_2n99frj7rv().s[205]++;
        orderClassName = CLASS_NAME_PREV;
        cov_2n99frj7rv().s[206]++;
        eventDirectionName = DIRECTION_RIGHT;
      }

      cov_2n99frj7rv().s[207]++;

      if ((cov_2n99frj7rv().b[49][0]++, nextElement) && (cov_2n99frj7rv().b[49][1]++, $__default['default'](nextElement).hasClass(CLASS_NAME_ACTIVE))) {
        cov_2n99frj7rv().b[48][0]++;
        cov_2n99frj7rv().s[208]++;
        this._isSliding = false;
        cov_2n99frj7rv().s[209]++;
        return;
      } else {
        cov_2n99frj7rv().b[48][1]++;
      }

      var slideEvent = (cov_2n99frj7rv().s[210]++, this._triggerSlideEvent(nextElement, eventDirectionName));
      cov_2n99frj7rv().s[211]++;

      if (slideEvent.isDefaultPrevented()) {
        cov_2n99frj7rv().b[50][0]++;
        cov_2n99frj7rv().s[212]++;
        return;
      } else {
        cov_2n99frj7rv().b[50][1]++;
      }

      cov_2n99frj7rv().s[213]++;

      if ((cov_2n99frj7rv().b[52][0]++, !activeElement) || (cov_2n99frj7rv().b[52][1]++, !nextElement)) {
        cov_2n99frj7rv().b[51][0]++;
        cov_2n99frj7rv().s[214]++;
        // Some weirdness is happening, so we bail
        return;
      } else {
        cov_2n99frj7rv().b[51][1]++;
      }

      cov_2n99frj7rv().s[215]++;
      this._isSliding = true;
      cov_2n99frj7rv().s[216]++;

      if (isCycling) {
        cov_2n99frj7rv().b[53][0]++;
        cov_2n99frj7rv().s[217]++;
        this.pause();
      } else {
        cov_2n99frj7rv().b[53][1]++;
      }

      cov_2n99frj7rv().s[218]++;

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = (cov_2n99frj7rv().s[219]++, $__default['default'].Event(EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      }));
      cov_2n99frj7rv().s[220]++;

      if ($__default['default'](this._element).hasClass(CLASS_NAME_SLIDE)) {
        cov_2n99frj7rv().b[54][0]++;
        cov_2n99frj7rv().s[221]++;
        $__default['default'](nextElement).addClass(orderClassName);
        cov_2n99frj7rv().s[222]++;
        Util__default['default'].reflow(nextElement);
        cov_2n99frj7rv().s[223]++;
        $__default['default'](activeElement).addClass(directionalClassName);
        cov_2n99frj7rv().s[224]++;
        $__default['default'](nextElement).addClass(directionalClassName);
        var nextElementInterval = (cov_2n99frj7rv().s[225]++, parseInt(nextElement.getAttribute('data-interval'), 10));
        cov_2n99frj7rv().s[226]++;

        if (nextElementInterval) {
          cov_2n99frj7rv().b[55][0]++;
          cov_2n99frj7rv().s[227]++;
          this._config.defaultInterval = (cov_2n99frj7rv().b[56][0]++, this._config.defaultInterval) || (cov_2n99frj7rv().b[56][1]++, this._config.interval);
          cov_2n99frj7rv().s[228]++;
          this._config.interval = nextElementInterval;
        } else {
          cov_2n99frj7rv().b[55][1]++;
          cov_2n99frj7rv().s[229]++;
          this._config.interval = (cov_2n99frj7rv().b[57][0]++, this._config.defaultInterval) || (cov_2n99frj7rv().b[57][1]++, this._config.interval);
        }

        var transitionDuration = (cov_2n99frj7rv().s[230]++, Util__default['default'].getTransitionDurationFromElement(activeElement));
        cov_2n99frj7rv().s[231]++;
        $__default['default'](activeElement).one(Util__default['default'].TRANSITION_END, function () {
          cov_2n99frj7rv().f[34]++;
          cov_2n99frj7rv().s[232]++;
          $__default['default'](nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE);
          cov_2n99frj7rv().s[233]++;
          $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE + " " + orderClassName + " " + directionalClassName);
          cov_2n99frj7rv().s[234]++;
          _this4._isSliding = false;
          cov_2n99frj7rv().s[235]++;
          setTimeout(function () {
            cov_2n99frj7rv().f[35]++;
            cov_2n99frj7rv().s[236]++;
            return $__default['default'](_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        cov_2n99frj7rv().b[54][1]++;
        cov_2n99frj7rv().s[237]++;
        $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE);
        cov_2n99frj7rv().s[238]++;
        $__default['default'](nextElement).addClass(CLASS_NAME_ACTIVE);
        cov_2n99frj7rv().s[239]++;
        this._isSliding = false;
        cov_2n99frj7rv().s[240]++;
        $__default['default'](this._element).trigger(slidEvent);
      }

      cov_2n99frj7rv().s[241]++;

      if (isCycling) {
        cov_2n99frj7rv().b[58][0]++;
        cov_2n99frj7rv().s[242]++;
        this.cycle();
      } else {
        cov_2n99frj7rv().b[58][1]++;
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      cov_2n99frj7rv().f[36]++;
      cov_2n99frj7rv().s[243]++;
      return this.each(function () {
        cov_2n99frj7rv().f[37]++;
        var data = (cov_2n99frj7rv().s[244]++, $__default['default'](this).data(DATA_KEY));

        var _config = (cov_2n99frj7rv().s[245]++, _extends({}, Default, $__default['default'](this).data()));

        cov_2n99frj7rv().s[246]++;

        if (typeof config === 'object') {
          cov_2n99frj7rv().b[59][0]++;
          cov_2n99frj7rv().s[247]++;
          _config = _extends({}, _config, config);
        } else {
          cov_2n99frj7rv().b[59][1]++;
        }

        var action = (cov_2n99frj7rv().s[248]++, typeof config === 'string' ? (cov_2n99frj7rv().b[60][0]++, config) : (cov_2n99frj7rv().b[60][1]++, _config.slide));
        cov_2n99frj7rv().s[249]++;

        if (!data) {
          cov_2n99frj7rv().b[61][0]++;
          cov_2n99frj7rv().s[250]++;
          data = new Carousel(this, _config);
          cov_2n99frj7rv().s[251]++;
          $__default['default'](this).data(DATA_KEY, data);
        } else {
          cov_2n99frj7rv().b[61][1]++;
        }

        cov_2n99frj7rv().s[252]++;

        if (typeof config === 'number') {
          cov_2n99frj7rv().b[62][0]++;
          cov_2n99frj7rv().s[253]++;
          data.to(config);
        } else {
          cov_2n99frj7rv().b[62][1]++;
          cov_2n99frj7rv().s[254]++;

          if (typeof action === 'string') {
            cov_2n99frj7rv().b[63][0]++;
            cov_2n99frj7rv().s[255]++;

            if (typeof data[action] === 'undefined') {
              cov_2n99frj7rv().b[64][0]++;
              cov_2n99frj7rv().s[256]++;
              throw new TypeError("No method named \"" + action + "\"");
            } else {
              cov_2n99frj7rv().b[64][1]++;
            }

            cov_2n99frj7rv().s[257]++;
            data[action]();
          } else {
            cov_2n99frj7rv().b[63][1]++;
            cov_2n99frj7rv().s[258]++;

            if ((cov_2n99frj7rv().b[66][0]++, _config.interval) && (cov_2n99frj7rv().b[66][1]++, _config.ride)) {
              cov_2n99frj7rv().b[65][0]++;
              cov_2n99frj7rv().s[259]++;
              data.pause();
              cov_2n99frj7rv().s[260]++;
              data.cycle();
            } else {
              cov_2n99frj7rv().b[65][1]++;
            }
          }
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      cov_2n99frj7rv().f[38]++;
      var selector = (cov_2n99frj7rv().s[261]++, Util__default['default'].getSelectorFromElement(this));
      cov_2n99frj7rv().s[262]++;

      if (!selector) {
        cov_2n99frj7rv().b[67][0]++;
        cov_2n99frj7rv().s[263]++;
        return;
      } else {
        cov_2n99frj7rv().b[67][1]++;
      }

      var target = (cov_2n99frj7rv().s[264]++, $__default['default'](selector)[0]);
      cov_2n99frj7rv().s[265]++;

      if ((cov_2n99frj7rv().b[69][0]++, !target) || (cov_2n99frj7rv().b[69][1]++, !$__default['default'](target).hasClass(CLASS_NAME_CAROUSEL))) {
        cov_2n99frj7rv().b[68][0]++;
        cov_2n99frj7rv().s[266]++;
        return;
      } else {
        cov_2n99frj7rv().b[68][1]++;
      }

      var config = (cov_2n99frj7rv().s[267]++, _extends({}, $__default['default'](target).data(), $__default['default'](this).data()));
      var slideIndex = (cov_2n99frj7rv().s[268]++, this.getAttribute('data-slide-to'));
      cov_2n99frj7rv().s[269]++;

      if (slideIndex) {
        cov_2n99frj7rv().b[70][0]++;
        cov_2n99frj7rv().s[270]++;
        config.interval = false;
      } else {
        cov_2n99frj7rv().b[70][1]++;
      }

      cov_2n99frj7rv().s[271]++;

      Carousel._jQueryInterface.call($__default['default'](target), config);

      cov_2n99frj7rv().s[272]++;

      if (slideIndex) {
        cov_2n99frj7rv().b[71][0]++;
        cov_2n99frj7rv().s[273]++;
        $__default['default'](target).data(DATA_KEY).to(slideIndex);
      } else {
        cov_2n99frj7rv().b[71][1]++;
      }

      cov_2n99frj7rv().s[274]++;
      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        cov_2n99frj7rv().f[1]++;
        cov_2n99frj7rv().s[60]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_2n99frj7rv().f[2]++;
        cov_2n99frj7rv().s[61]++;
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  cov_2n99frj7rv().s[275]++;
  $__default['default'](document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
  cov_2n99frj7rv().s[276]++;
  $__default['default'](window).on(EVENT_LOAD_DATA_API, function () {
    cov_2n99frj7rv().f[39]++;
    var carousels = (cov_2n99frj7rv().s[277]++, [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE)));
    cov_2n99frj7rv().s[278]++;

    for (var i = (cov_2n99frj7rv().s[279]++, 0), len = (cov_2n99frj7rv().s[280]++, carousels.length); i < len; i++) {
      var $carousel = (cov_2n99frj7rv().s[281]++, $__default['default'](carousels[i]));
      cov_2n99frj7rv().s[282]++;

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_2n99frj7rv().s[283]++;
  $__default['default'].fn[NAME] = Carousel._jQueryInterface;
  cov_2n99frj7rv().s[284]++;
  $__default['default'].fn[NAME].Constructor = Carousel;
  cov_2n99frj7rv().s[285]++;

  $__default['default'].fn[NAME].noConflict = function () {
    cov_2n99frj7rv().f[40]++;
    cov_2n99frj7rv().s[286]++;
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    cov_2n99frj7rv().s[287]++;
    return Carousel._jQueryInterface;
  };

  return Carousel;

})));
//# sourceMappingURL=carousel.js.map
