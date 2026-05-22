#!/usr/bin/env node
// @bun
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
function __accessProp(key) {
  return this[key];
}
var __toESMCache_node;
var __toESMCache_esm;
var __toESM = (mod, isNodeMode, target) => {
  var canCache = mod != null && typeof mod === "object";
  if (canCache) {
    var cache = isNodeMode ? __toESMCache_node ??= new WeakMap : __toESMCache_esm ??= new WeakMap;
    var cached = cache.get(mod);
    if (cached)
      return cached;
  }
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: __accessProp.bind(mod, key),
        enumerable: true
      });
  if (canCache)
    cache.set(mod, to);
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// node_modules/.bun/bignumber.js@9.3.1/node_modules/bignumber.js/bignumber.js
var require_bignumber = __commonJS((exports, module) => {
  (function(globalObject) {
    var BigNumber, isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, mathceil = Math.ceil, mathfloor = Math.floor, bignumberError = "[BigNumber Error] ", tooManyDigits = bignumberError + "Number primitive has more than 15 significant digits: ", BASE = 100000000000000, LOG_BASE = 14, MAX_SAFE_INTEGER = 9007199254740991, POWS_TEN = [1, 10, 100, 1000, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 10000000000, 100000000000, 1000000000000, 10000000000000], SQRT_BASE = 1e7, MAX = 1e9;
    function clone(configObject) {
      var div, convertBase, parseNumeric, P = BigNumber2.prototype = { constructor: BigNumber2, toString: null, valueOf: null }, ONE = new BigNumber2(1), DECIMAL_PLACES = 20, ROUNDING_MODE = 4, TO_EXP_NEG = -7, TO_EXP_POS = 21, MIN_EXP = -1e7, MAX_EXP = 1e7, CRYPTO = false, MODULO_MODE = 1, POW_PRECISION = 0, FORMAT = {
        prefix: "",
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ",",
        decimalSeparator: ".",
        fractionGroupSize: 0,
        fractionGroupSeparator: " ",
        suffix: ""
      }, ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz", alphabetHasNormalDecimalDigits = true;
      function BigNumber2(v, b) {
        var alphabet, c, caseChanged, e, i, isNum, len, str, x = this;
        if (!(x instanceof BigNumber2))
          return new BigNumber2(v, b);
        if (b == null) {
          if (v && v._isBigNumber === true) {
            x.s = v.s;
            if (!v.c || v.e > MAX_EXP) {
              x.c = x.e = null;
            } else if (v.e < MIN_EXP) {
              x.c = [x.e = 0];
            } else {
              x.e = v.e;
              x.c = v.c.slice();
            }
            return;
          }
          if ((isNum = typeof v == "number") && v * 0 == 0) {
            x.s = 1 / v < 0 ? (v = -v, -1) : 1;
            if (v === ~~v) {
              for (e = 0, i = v;i >= 10; i /= 10, e++)
                ;
              if (e > MAX_EXP) {
                x.c = x.e = null;
              } else {
                x.e = e;
                x.c = [v];
              }
              return;
            }
            str = String(v);
          } else {
            if (!isNumeric.test(str = String(v)))
              return parseNumeric(x, str, isNum);
            x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
          }
          if ((e = str.indexOf(".")) > -1)
            str = str.replace(".", "");
          if ((i = str.search(/e/i)) > 0) {
            if (e < 0)
              e = i;
            e += +str.slice(i + 1);
            str = str.substring(0, i);
          } else if (e < 0) {
            e = str.length;
          }
        } else {
          intCheck(b, 2, ALPHABET.length, "Base");
          if (b == 10 && alphabetHasNormalDecimalDigits) {
            x = new BigNumber2(v);
            return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
          }
          str = String(v);
          if (isNum = typeof v == "number") {
            if (v * 0 != 0)
              return parseNumeric(x, str, isNum, b);
            x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;
            if (BigNumber2.DEBUG && str.replace(/^0\.0*|\./, "").length > 15) {
              throw Error(tooManyDigits + v);
            }
          } else {
            x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
          }
          alphabet = ALPHABET.slice(0, b);
          e = i = 0;
          for (len = str.length;i < len; i++) {
            if (alphabet.indexOf(c = str.charAt(i)) < 0) {
              if (c == ".") {
                if (i > e) {
                  e = len;
                  continue;
                }
              } else if (!caseChanged) {
                if (str == str.toUpperCase() && (str = str.toLowerCase()) || str == str.toLowerCase() && (str = str.toUpperCase())) {
                  caseChanged = true;
                  i = -1;
                  e = 0;
                  continue;
                }
              }
              return parseNumeric(x, String(v), isNum, b);
            }
          }
          isNum = false;
          str = convertBase(str, b, 10, x.s);
          if ((e = str.indexOf(".")) > -1)
            str = str.replace(".", "");
          else
            e = str.length;
        }
        for (i = 0;str.charCodeAt(i) === 48; i++)
          ;
        for (len = str.length;str.charCodeAt(--len) === 48; )
          ;
        if (str = str.slice(i, ++len)) {
          len -= i;
          if (isNum && BigNumber2.DEBUG && len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
            throw Error(tooManyDigits + x.s * v);
          }
          if ((e = e - i - 1) > MAX_EXP) {
            x.c = x.e = null;
          } else if (e < MIN_EXP) {
            x.c = [x.e = 0];
          } else {
            x.e = e;
            x.c = [];
            i = (e + 1) % LOG_BASE;
            if (e < 0)
              i += LOG_BASE;
            if (i < len) {
              if (i)
                x.c.push(+str.slice(0, i));
              for (len -= LOG_BASE;i < len; ) {
                x.c.push(+str.slice(i, i += LOG_BASE));
              }
              i = LOG_BASE - (str = str.slice(i)).length;
            } else {
              i -= len;
            }
            for (;i--; str += "0")
              ;
            x.c.push(+str);
          }
        } else {
          x.c = [x.e = 0];
        }
      }
      BigNumber2.clone = clone;
      BigNumber2.ROUND_UP = 0;
      BigNumber2.ROUND_DOWN = 1;
      BigNumber2.ROUND_CEIL = 2;
      BigNumber2.ROUND_FLOOR = 3;
      BigNumber2.ROUND_HALF_UP = 4;
      BigNumber2.ROUND_HALF_DOWN = 5;
      BigNumber2.ROUND_HALF_EVEN = 6;
      BigNumber2.ROUND_HALF_CEIL = 7;
      BigNumber2.ROUND_HALF_FLOOR = 8;
      BigNumber2.EUCLID = 9;
      BigNumber2.config = BigNumber2.set = function(obj) {
        var p, v;
        if (obj != null) {
          if (typeof obj == "object") {
            if (obj.hasOwnProperty(p = "DECIMAL_PLACES")) {
              v = obj[p];
              intCheck(v, 0, MAX, p);
              DECIMAL_PLACES = v;
            }
            if (obj.hasOwnProperty(p = "ROUNDING_MODE")) {
              v = obj[p];
              intCheck(v, 0, 8, p);
              ROUNDING_MODE = v;
            }
            if (obj.hasOwnProperty(p = "EXPONENTIAL_AT")) {
              v = obj[p];
              if (v && v.pop) {
                intCheck(v[0], -MAX, 0, p);
                intCheck(v[1], 0, MAX, p);
                TO_EXP_NEG = v[0];
                TO_EXP_POS = v[1];
              } else {
                intCheck(v, -MAX, MAX, p);
                TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
              }
            }
            if (obj.hasOwnProperty(p = "RANGE")) {
              v = obj[p];
              if (v && v.pop) {
                intCheck(v[0], -MAX, -1, p);
                intCheck(v[1], 1, MAX, p);
                MIN_EXP = v[0];
                MAX_EXP = v[1];
              } else {
                intCheck(v, -MAX, MAX, p);
                if (v) {
                  MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
                } else {
                  throw Error(bignumberError + p + " cannot be zero: " + v);
                }
              }
            }
            if (obj.hasOwnProperty(p = "CRYPTO")) {
              v = obj[p];
              if (v === !!v) {
                if (v) {
                  if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                    CRYPTO = v;
                  } else {
                    CRYPTO = !v;
                    throw Error(bignumberError + "crypto unavailable");
                  }
                } else {
                  CRYPTO = v;
                }
              } else {
                throw Error(bignumberError + p + " not true or false: " + v);
              }
            }
            if (obj.hasOwnProperty(p = "MODULO_MODE")) {
              v = obj[p];
              intCheck(v, 0, 9, p);
              MODULO_MODE = v;
            }
            if (obj.hasOwnProperty(p = "POW_PRECISION")) {
              v = obj[p];
              intCheck(v, 0, MAX, p);
              POW_PRECISION = v;
            }
            if (obj.hasOwnProperty(p = "FORMAT")) {
              v = obj[p];
              if (typeof v == "object")
                FORMAT = v;
              else
                throw Error(bignumberError + p + " not an object: " + v);
            }
            if (obj.hasOwnProperty(p = "ALPHABET")) {
              v = obj[p];
              if (typeof v == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
                alphabetHasNormalDecimalDigits = v.slice(0, 10) == "0123456789";
                ALPHABET = v;
              } else {
                throw Error(bignumberError + p + " invalid: " + v);
              }
            }
          } else {
            throw Error(bignumberError + "Object expected: " + obj);
          }
        }
        return {
          DECIMAL_PLACES,
          ROUNDING_MODE,
          EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
          RANGE: [MIN_EXP, MAX_EXP],
          CRYPTO,
          MODULO_MODE,
          POW_PRECISION,
          FORMAT,
          ALPHABET
        };
      };
      BigNumber2.isBigNumber = function(v) {
        if (!v || v._isBigNumber !== true)
          return false;
        if (!BigNumber2.DEBUG)
          return true;
        var i, n, c = v.c, e = v.e, s = v.s;
        out:
          if ({}.toString.call(c) == "[object Array]") {
            if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {
              if (c[0] === 0) {
                if (e === 0 && c.length === 1)
                  return true;
                break out;
              }
              i = (e + 1) % LOG_BASE;
              if (i < 1)
                i += LOG_BASE;
              if (String(c[0]).length == i) {
                for (i = 0;i < c.length; i++) {
                  n = c[i];
                  if (n < 0 || n >= BASE || n !== mathfloor(n))
                    break out;
                }
                if (n !== 0)
                  return true;
              }
            }
          } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
            return true;
          }
        throw Error(bignumberError + "Invalid BigNumber: " + v);
      };
      BigNumber2.maximum = BigNumber2.max = function() {
        return maxOrMin(arguments, -1);
      };
      BigNumber2.minimum = BigNumber2.min = function() {
        return maxOrMin(arguments, 1);
      };
      BigNumber2.random = function() {
        var pow2_53 = 9007199254740992;
        var random53bitInt = Math.random() * pow2_53 & 2097151 ? function() {
          return mathfloor(Math.random() * pow2_53);
        } : function() {
          return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
        };
        return function(dp) {
          var a, b, e, k, v, i = 0, c = [], rand = new BigNumber2(ONE);
          if (dp == null)
            dp = DECIMAL_PLACES;
          else
            intCheck(dp, 0, MAX);
          k = mathceil(dp / LOG_BASE);
          if (CRYPTO) {
            if (crypto.getRandomValues) {
              a = crypto.getRandomValues(new Uint32Array(k *= 2));
              for (;i < k; ) {
                v = a[i] * 131072 + (a[i + 1] >>> 11);
                if (v >= 9000000000000000) {
                  b = crypto.getRandomValues(new Uint32Array(2));
                  a[i] = b[0];
                  a[i + 1] = b[1];
                } else {
                  c.push(v % 100000000000000);
                  i += 2;
                }
              }
              i = k / 2;
            } else if (crypto.randomBytes) {
              a = crypto.randomBytes(k *= 7);
              for (;i < k; ) {
                v = (a[i] & 31) * 281474976710656 + a[i + 1] * 1099511627776 + a[i + 2] * 4294967296 + a[i + 3] * 16777216 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
                if (v >= 9000000000000000) {
                  crypto.randomBytes(7).copy(a, i);
                } else {
                  c.push(v % 100000000000000);
                  i += 7;
                }
              }
              i = k / 7;
            } else {
              CRYPTO = false;
              throw Error(bignumberError + "crypto unavailable");
            }
          }
          if (!CRYPTO) {
            for (;i < k; ) {
              v = random53bitInt();
              if (v < 9000000000000000)
                c[i++] = v % 100000000000000;
            }
          }
          k = c[--i];
          dp %= LOG_BASE;
          if (k && dp) {
            v = POWS_TEN[LOG_BASE - dp];
            c[i] = mathfloor(k / v) * v;
          }
          for (;c[i] === 0; c.pop(), i--)
            ;
          if (i < 0) {
            c = [e = 0];
          } else {
            for (e = -1;c[0] === 0; c.splice(0, 1), e -= LOG_BASE)
              ;
            for (i = 1, v = c[0];v >= 10; v /= 10, i++)
              ;
            if (i < LOG_BASE)
              e -= LOG_BASE - i;
          }
          rand.e = e;
          rand.c = c;
          return rand;
        };
      }();
      BigNumber2.sum = function() {
        var i = 1, args = arguments, sum = new BigNumber2(args[0]);
        for (;i < args.length; )
          sum = sum.plus(args[i++]);
        return sum;
      };
      convertBase = function() {
        var decimal = "0123456789";
        function toBaseOut(str, baseIn, baseOut, alphabet) {
          var j, arr = [0], arrL, i = 0, len = str.length;
          for (;i < len; ) {
            for (arrL = arr.length;arrL--; arr[arrL] *= baseIn)
              ;
            arr[0] += alphabet.indexOf(str.charAt(i++));
            for (j = 0;j < arr.length; j++) {
              if (arr[j] > baseOut - 1) {
                if (arr[j + 1] == null)
                  arr[j + 1] = 0;
                arr[j + 1] += arr[j] / baseOut | 0;
                arr[j] %= baseOut;
              }
            }
          }
          return arr.reverse();
        }
        return function(str, baseIn, baseOut, sign, callerIsToString) {
          var alphabet, d, e, k, r, x, xc, y, i = str.indexOf("."), dp = DECIMAL_PLACES, rm = ROUNDING_MODE;
          if (i >= 0) {
            k = POW_PRECISION;
            POW_PRECISION = 0;
            str = str.replace(".", "");
            y = new BigNumber2(baseIn);
            x = y.pow(str.length - i);
            POW_PRECISION = k;
            y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, "0"), 10, baseOut, decimal);
            y.e = y.c.length;
          }
          xc = toBaseOut(str, baseIn, baseOut, callerIsToString ? (alphabet = ALPHABET, decimal) : (alphabet = decimal, ALPHABET));
          e = k = xc.length;
          for (;xc[--k] == 0; xc.pop())
            ;
          if (!xc[0])
            return alphabet.charAt(0);
          if (i < 0) {
            --e;
          } else {
            x.c = xc;
            x.e = e;
            x.s = sign;
            x = div(x, y, dp, rm, baseOut);
            xc = x.c;
            r = x.r;
            e = x.e;
          }
          d = e + dp + 1;
          i = xc[d];
          k = baseOut / 2;
          r = r || d < 0 || xc[d + 1] != null;
          r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));
          if (d < 1 || !xc[0]) {
            str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
          } else {
            xc.length = d;
            if (r) {
              for (--baseOut;++xc[--d] > baseOut; ) {
                xc[d] = 0;
                if (!d) {
                  ++e;
                  xc = [1].concat(xc);
                }
              }
            }
            for (k = xc.length;!xc[--k]; )
              ;
            for (i = 0, str = "";i <= k; str += alphabet.charAt(xc[i++]))
              ;
            str = toFixedPoint(str, e, alphabet.charAt(0));
          }
          return str;
        };
      }();
      div = function() {
        function multiply(x, k, base) {
          var m, temp, xlo, xhi, carry = 0, i = x.length, klo = k % SQRT_BASE, khi = k / SQRT_BASE | 0;
          for (x = x.slice();i--; ) {
            xlo = x[i] % SQRT_BASE;
            xhi = x[i] / SQRT_BASE | 0;
            m = khi * xlo + xhi * klo;
            temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
            carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
            x[i] = temp % base;
          }
          if (carry)
            x = [carry].concat(x);
          return x;
        }
        function compare2(a, b, aL, bL) {
          var i, cmp;
          if (aL != bL) {
            cmp = aL > bL ? 1 : -1;
          } else {
            for (i = cmp = 0;i < aL; i++) {
              if (a[i] != b[i]) {
                cmp = a[i] > b[i] ? 1 : -1;
                break;
              }
            }
          }
          return cmp;
        }
        function subtract(a, b, aL, base) {
          var i = 0;
          for (;aL--; ) {
            a[aL] -= i;
            i = a[aL] < b[aL] ? 1 : 0;
            a[aL] = i * base + a[aL] - b[aL];
          }
          for (;!a[0] && a.length > 1; a.splice(0, 1))
            ;
        }
        return function(x, y, dp, rm, base) {
          var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0, yL, yz, s = x.s == y.s ? 1 : -1, xc = x.c, yc = y.c;
          if (!xc || !xc[0] || !yc || !yc[0]) {
            return new BigNumber2(!x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : xc && xc[0] == 0 || !yc ? s * 0 : s / 0);
          }
          q = new BigNumber2(s);
          qc = q.c = [];
          e = x.e - y.e;
          s = dp + e + 1;
          if (!base) {
            base = BASE;
            e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
            s = s / LOG_BASE | 0;
          }
          for (i = 0;yc[i] == (xc[i] || 0); i++)
            ;
          if (yc[i] > (xc[i] || 0))
            e--;
          if (s < 0) {
            qc.push(1);
            more = true;
          } else {
            xL = xc.length;
            yL = yc.length;
            i = 0;
            s += 2;
            n = mathfloor(base / (yc[0] + 1));
            if (n > 1) {
              yc = multiply(yc, n, base);
              xc = multiply(xc, n, base);
              yL = yc.length;
              xL = xc.length;
            }
            xi = yL;
            rem = xc.slice(0, yL);
            remL = rem.length;
            for (;remL < yL; rem[remL++] = 0)
              ;
            yz = yc.slice();
            yz = [0].concat(yz);
            yc0 = yc[0];
            if (yc[1] >= base / 2)
              yc0++;
            do {
              n = 0;
              cmp = compare2(yc, rem, yL, remL);
              if (cmp < 0) {
                rem0 = rem[0];
                if (yL != remL)
                  rem0 = rem0 * base + (rem[1] || 0);
                n = mathfloor(rem0 / yc0);
                if (n > 1) {
                  if (n >= base)
                    n = base - 1;
                  prod = multiply(yc, n, base);
                  prodL = prod.length;
                  remL = rem.length;
                  while (compare2(prod, rem, prodL, remL) == 1) {
                    n--;
                    subtract(prod, yL < prodL ? yz : yc, prodL, base);
                    prodL = prod.length;
                    cmp = 1;
                  }
                } else {
                  if (n == 0) {
                    cmp = n = 1;
                  }
                  prod = yc.slice();
                  prodL = prod.length;
                }
                if (prodL < remL)
                  prod = [0].concat(prod);
                subtract(rem, prod, remL, base);
                remL = rem.length;
                if (cmp == -1) {
                  while (compare2(yc, rem, yL, remL) < 1) {
                    n++;
                    subtract(rem, yL < remL ? yz : yc, remL, base);
                    remL = rem.length;
                  }
                }
              } else if (cmp === 0) {
                n++;
                rem = [0];
              }
              qc[i++] = n;
              if (rem[0]) {
                rem[remL++] = xc[xi] || 0;
              } else {
                rem = [xc[xi]];
                remL = 1;
              }
            } while ((xi++ < xL || rem[0] != null) && s--);
            more = rem[0] != null;
            if (!qc[0])
              qc.splice(0, 1);
          }
          if (base == BASE) {
            for (i = 1, s = qc[0];s >= 10; s /= 10, i++)
              ;
            round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
          } else {
            q.e = e;
            q.r = +more;
          }
          return q;
        };
      }();
      function format(n, i, rm, id) {
        var c0, e, ne, len, str;
        if (rm == null)
          rm = ROUNDING_MODE;
        else
          intCheck(rm, 0, 8);
        if (!n.c)
          return n.toString();
        c0 = n.c[0];
        ne = n.e;
        if (i == null) {
          str = coeffToString(n.c);
          str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS) ? toExponential(str, ne) : toFixedPoint(str, ne, "0");
        } else {
          n = round(new BigNumber2(n), i, rm);
          e = n.e;
          str = coeffToString(n.c);
          len = str.length;
          if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {
            for (;len < i; str += "0", len++)
              ;
            str = toExponential(str, e);
          } else {
            i -= ne + (id === 2 && e > ne);
            str = toFixedPoint(str, e, "0");
            if (e + 1 > len) {
              if (--i > 0)
                for (str += ".";i--; str += "0")
                  ;
            } else {
              i += e - len;
              if (i > 0) {
                if (e + 1 == len)
                  str += ".";
                for (;i--; str += "0")
                  ;
              }
            }
          }
        }
        return n.s < 0 && c0 ? "-" + str : str;
      }
      function maxOrMin(args, n) {
        var k, y, i = 1, x = new BigNumber2(args[0]);
        for (;i < args.length; i++) {
          y = new BigNumber2(args[i]);
          if (!y.s || (k = compare(x, y)) === n || k === 0 && x.s === n) {
            x = y;
          }
        }
        return x;
      }
      function normalise(n, c, e) {
        var i = 1, j = c.length;
        for (;!c[--j]; c.pop())
          ;
        for (j = c[0];j >= 10; j /= 10, i++)
          ;
        if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {
          n.c = n.e = null;
        } else if (e < MIN_EXP) {
          n.c = [n.e = 0];
        } else {
          n.e = e;
          n.c = c;
        }
        return n;
      }
      parseNumeric = function() {
        var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i, dotAfter = /^([^.]+)\.$/, dotBefore = /^\.([^.]+)$/, isInfinityOrNaN = /^-?(Infinity|NaN)$/, whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function(x, str, isNum, b) {
          var base, s = isNum ? str : str.replace(whitespaceOrPlus, "");
          if (isInfinityOrNaN.test(s)) {
            x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
          } else {
            if (!isNum) {
              s = s.replace(basePrefix, function(m, p1, p2) {
                base = (p2 = p2.toLowerCase()) == "x" ? 16 : p2 == "b" ? 2 : 8;
                return !b || b == base ? p1 : m;
              });
              if (b) {
                base = b;
                s = s.replace(dotAfter, "$1").replace(dotBefore, "0.$1");
              }
              if (str != s)
                return new BigNumber2(s, base);
            }
            if (BigNumber2.DEBUG) {
              throw Error(bignumberError + "Not a" + (b ? " base " + b : "") + " number: " + str);
            }
            x.s = null;
          }
          x.c = x.e = null;
        };
      }();
      function round(x, sd, rm, r) {
        var d, i, j, k, n, ni, rd, xc = x.c, pows10 = POWS_TEN;
        if (xc) {
          out: {
            for (d = 1, k = xc[0];k >= 10; k /= 10, d++)
              ;
            i = sd - d;
            if (i < 0) {
              i += LOG_BASE;
              j = sd;
              n = xc[ni = 0];
              rd = mathfloor(n / pows10[d - j - 1] % 10);
            } else {
              ni = mathceil((i + 1) / LOG_BASE);
              if (ni >= xc.length) {
                if (r) {
                  for (;xc.length <= ni; xc.push(0))
                    ;
                  n = rd = 0;
                  d = 1;
                  i %= LOG_BASE;
                  j = i - LOG_BASE + 1;
                } else {
                  break out;
                }
              } else {
                n = k = xc[ni];
                for (d = 1;k >= 10; k /= 10, d++)
                  ;
                i %= LOG_BASE;
                j = i - LOG_BASE + d;
                rd = j < 0 ? 0 : mathfloor(n / pows10[d - j - 1] % 10);
              }
            }
            r = r || sd < 0 || xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
            r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 && (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
            if (sd < 1 || !xc[0]) {
              xc.length = 0;
              if (r) {
                sd -= x.e + 1;
                xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
                x.e = -sd || 0;
              } else {
                xc[0] = x.e = 0;
              }
              return x;
            }
            if (i == 0) {
              xc.length = ni;
              k = 1;
              ni--;
            } else {
              xc.length = ni + 1;
              k = pows10[LOG_BASE - i];
              xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
            }
            if (r) {
              for (;; ) {
                if (ni == 0) {
                  for (i = 1, j = xc[0];j >= 10; j /= 10, i++)
                    ;
                  j = xc[0] += k;
                  for (k = 1;j >= 10; j /= 10, k++)
                    ;
                  if (i != k) {
                    x.e++;
                    if (xc[0] == BASE)
                      xc[0] = 1;
                  }
                  break;
                } else {
                  xc[ni] += k;
                  if (xc[ni] != BASE)
                    break;
                  xc[ni--] = 0;
                  k = 1;
                }
              }
            }
            for (i = xc.length;xc[--i] === 0; xc.pop())
              ;
          }
          if (x.e > MAX_EXP) {
            x.c = x.e = null;
          } else if (x.e < MIN_EXP) {
            x.c = [x.e = 0];
          }
        }
        return x;
      }
      function valueOf(n) {
        var str, e = n.e;
        if (e === null)
          return n.toString();
        str = coeffToString(n.c);
        str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e, "0");
        return n.s < 0 ? "-" + str : str;
      }
      P.absoluteValue = P.abs = function() {
        var x = new BigNumber2(this);
        if (x.s < 0)
          x.s = 1;
        return x;
      };
      P.comparedTo = function(y, b) {
        return compare(this, new BigNumber2(y, b));
      };
      P.decimalPlaces = P.dp = function(dp, rm) {
        var c, n, v, x = this;
        if (dp != null) {
          intCheck(dp, 0, MAX);
          if (rm == null)
            rm = ROUNDING_MODE;
          else
            intCheck(rm, 0, 8);
          return round(new BigNumber2(x), dp + x.e + 1, rm);
        }
        if (!(c = x.c))
          return null;
        n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
        if (v = c[v])
          for (;v % 10 == 0; v /= 10, n--)
            ;
        if (n < 0)
          n = 0;
        return n;
      };
      P.dividedBy = P.div = function(y, b) {
        return div(this, new BigNumber2(y, b), DECIMAL_PLACES, ROUNDING_MODE);
      };
      P.dividedToIntegerBy = P.idiv = function(y, b) {
        return div(this, new BigNumber2(y, b), 0, 1);
      };
      P.exponentiatedBy = P.pow = function(n, m) {
        var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y, x = this;
        n = new BigNumber2(n);
        if (n.c && !n.isInteger()) {
          throw Error(bignumberError + "Exponent not an integer: " + valueOf(n));
        }
        if (m != null)
          m = new BigNumber2(m);
        nIsBig = n.e > 14;
        if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {
          y = new BigNumber2(Math.pow(+valueOf(x), nIsBig ? n.s * (2 - isOdd(n)) : +valueOf(n)));
          return m ? y.mod(m) : y;
        }
        nIsNeg = n.s < 0;
        if (m) {
          if (m.c ? !m.c[0] : !m.s)
            return new BigNumber2(NaN);
          isModExp = !nIsNeg && x.isInteger() && m.isInteger();
          if (isModExp)
            x = x.mod(m);
        } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0 ? x.c[0] > 1 || nIsBig && x.c[1] >= 240000000 : x.c[0] < 80000000000000 || nIsBig && x.c[0] <= 99999750000000))) {
          k = x.s < 0 && isOdd(n) ? -0 : 0;
          if (x.e > -1)
            k = 1 / k;
          return new BigNumber2(nIsNeg ? 1 / k : k);
        } else if (POW_PRECISION) {
          k = mathceil(POW_PRECISION / LOG_BASE + 2);
        }
        if (nIsBig) {
          half = new BigNumber2(0.5);
          if (nIsNeg)
            n.s = 1;
          nIsOdd = isOdd(n);
        } else {
          i = Math.abs(+valueOf(n));
          nIsOdd = i % 2;
        }
        y = new BigNumber2(ONE);
        for (;; ) {
          if (nIsOdd) {
            y = y.times(x);
            if (!y.c)
              break;
            if (k) {
              if (y.c.length > k)
                y.c.length = k;
            } else if (isModExp) {
              y = y.mod(m);
            }
          }
          if (i) {
            i = mathfloor(i / 2);
            if (i === 0)
              break;
            nIsOdd = i % 2;
          } else {
            n = n.times(half);
            round(n, n.e + 1, 1);
            if (n.e > 14) {
              nIsOdd = isOdd(n);
            } else {
              i = +valueOf(n);
              if (i === 0)
                break;
              nIsOdd = i % 2;
            }
          }
          x = x.times(x);
          if (k) {
            if (x.c && x.c.length > k)
              x.c.length = k;
          } else if (isModExp) {
            x = x.mod(m);
          }
        }
        if (isModExp)
          return y;
        if (nIsNeg)
          y = ONE.div(y);
        return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
      };
      P.integerValue = function(rm) {
        var n = new BigNumber2(this);
        if (rm == null)
          rm = ROUNDING_MODE;
        else
          intCheck(rm, 0, 8);
        return round(n, n.e + 1, rm);
      };
      P.isEqualTo = P.eq = function(y, b) {
        return compare(this, new BigNumber2(y, b)) === 0;
      };
      P.isFinite = function() {
        return !!this.c;
      };
      P.isGreaterThan = P.gt = function(y, b) {
        return compare(this, new BigNumber2(y, b)) > 0;
      };
      P.isGreaterThanOrEqualTo = P.gte = function(y, b) {
        return (b = compare(this, new BigNumber2(y, b))) === 1 || b === 0;
      };
      P.isInteger = function() {
        return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
      };
      P.isLessThan = P.lt = function(y, b) {
        return compare(this, new BigNumber2(y, b)) < 0;
      };
      P.isLessThanOrEqualTo = P.lte = function(y, b) {
        return (b = compare(this, new BigNumber2(y, b))) === -1 || b === 0;
      };
      P.isNaN = function() {
        return !this.s;
      };
      P.isNegative = function() {
        return this.s < 0;
      };
      P.isPositive = function() {
        return this.s > 0;
      };
      P.isZero = function() {
        return !!this.c && this.c[0] == 0;
      };
      P.minus = function(y, b) {
        var i, j, t, xLTy, x = this, a = x.s;
        y = new BigNumber2(y, b);
        b = y.s;
        if (!a || !b)
          return new BigNumber2(NaN);
        if (a != b) {
          y.s = -b;
          return x.plus(y);
        }
        var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
        if (!xe || !ye) {
          if (!xc || !yc)
            return xc ? (y.s = -b, y) : new BigNumber2(yc ? x : NaN);
          if (!xc[0] || !yc[0]) {
            return yc[0] ? (y.s = -b, y) : new BigNumber2(xc[0] ? x : ROUNDING_MODE == 3 ? -0 : 0);
          }
        }
        xe = bitFloor(xe);
        ye = bitFloor(ye);
        xc = xc.slice();
        if (a = xe - ye) {
          if (xLTy = a < 0) {
            a = -a;
            t = xc;
          } else {
            ye = xe;
            t = yc;
          }
          t.reverse();
          for (b = a;b--; t.push(0))
            ;
          t.reverse();
        } else {
          j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;
          for (a = b = 0;b < j; b++) {
            if (xc[b] != yc[b]) {
              xLTy = xc[b] < yc[b];
              break;
            }
          }
        }
        if (xLTy) {
          t = xc;
          xc = yc;
          yc = t;
          y.s = -y.s;
        }
        b = (j = yc.length) - (i = xc.length);
        if (b > 0)
          for (;b--; xc[i++] = 0)
            ;
        b = BASE - 1;
        for (;j > a; ) {
          if (xc[--j] < yc[j]) {
            for (i = j;i && !xc[--i]; xc[i] = b)
              ;
            --xc[i];
            xc[j] += BASE;
          }
          xc[j] -= yc[j];
        }
        for (;xc[0] == 0; xc.splice(0, 1), --ye)
          ;
        if (!xc[0]) {
          y.s = ROUNDING_MODE == 3 ? -1 : 1;
          y.c = [y.e = 0];
          return y;
        }
        return normalise(y, xc, ye);
      };
      P.modulo = P.mod = function(y, b) {
        var q, s, x = this;
        y = new BigNumber2(y, b);
        if (!x.c || !y.s || y.c && !y.c[0]) {
          return new BigNumber2(NaN);
        } else if (!y.c || x.c && !x.c[0]) {
          return new BigNumber2(x);
        }
        if (MODULO_MODE == 9) {
          s = y.s;
          y.s = 1;
          q = div(x, y, 0, 3);
          y.s = s;
          q.s *= s;
        } else {
          q = div(x, y, 0, MODULO_MODE);
        }
        y = x.minus(q.times(y));
        if (!y.c[0] && MODULO_MODE == 1)
          y.s = x.s;
        return y;
      };
      P.multipliedBy = P.times = function(y, b) {
        var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc, base, sqrtBase, x = this, xc = x.c, yc = (y = new BigNumber2(y, b)).c;
        if (!xc || !yc || !xc[0] || !yc[0]) {
          if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
            y.c = y.e = y.s = null;
          } else {
            y.s *= x.s;
            if (!xc || !yc) {
              y.c = y.e = null;
            } else {
              y.c = [0];
              y.e = 0;
            }
          }
          return y;
        }
        e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
        y.s *= x.s;
        xcL = xc.length;
        ycL = yc.length;
        if (xcL < ycL) {
          zc = xc;
          xc = yc;
          yc = zc;
          i = xcL;
          xcL = ycL;
          ycL = i;
        }
        for (i = xcL + ycL, zc = [];i--; zc.push(0))
          ;
        base = BASE;
        sqrtBase = SQRT_BASE;
        for (i = ycL;--i >= 0; ) {
          c = 0;
          ylo = yc[i] % sqrtBase;
          yhi = yc[i] / sqrtBase | 0;
          for (k = xcL, j = i + k;j > i; ) {
            xlo = xc[--k] % sqrtBase;
            xhi = xc[k] / sqrtBase | 0;
            m = yhi * xlo + xhi * ylo;
            xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
            c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
            zc[j--] = xlo % base;
          }
          zc[j] = c;
        }
        if (c) {
          ++e;
        } else {
          zc.splice(0, 1);
        }
        return normalise(y, zc, e);
      };
      P.negated = function() {
        var x = new BigNumber2(this);
        x.s = -x.s || null;
        return x;
      };
      P.plus = function(y, b) {
        var t, x = this, a = x.s;
        y = new BigNumber2(y, b);
        b = y.s;
        if (!a || !b)
          return new BigNumber2(NaN);
        if (a != b) {
          y.s = -b;
          return x.minus(y);
        }
        var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
        if (!xe || !ye) {
          if (!xc || !yc)
            return new BigNumber2(a / 0);
          if (!xc[0] || !yc[0])
            return yc[0] ? y : new BigNumber2(xc[0] ? x : a * 0);
        }
        xe = bitFloor(xe);
        ye = bitFloor(ye);
        xc = xc.slice();
        if (a = xe - ye) {
          if (a > 0) {
            ye = xe;
            t = yc;
          } else {
            a = -a;
            t = xc;
          }
          t.reverse();
          for (;a--; t.push(0))
            ;
          t.reverse();
        }
        a = xc.length;
        b = yc.length;
        if (a - b < 0) {
          t = yc;
          yc = xc;
          xc = t;
          b = a;
        }
        for (a = 0;b; ) {
          a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
          xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
        }
        if (a) {
          xc = [a].concat(xc);
          ++ye;
        }
        return normalise(y, xc, ye);
      };
      P.precision = P.sd = function(sd, rm) {
        var c, n, v, x = this;
        if (sd != null && sd !== !!sd) {
          intCheck(sd, 1, MAX);
          if (rm == null)
            rm = ROUNDING_MODE;
          else
            intCheck(rm, 0, 8);
          return round(new BigNumber2(x), sd, rm);
        }
        if (!(c = x.c))
          return null;
        v = c.length - 1;
        n = v * LOG_BASE + 1;
        if (v = c[v]) {
          for (;v % 10 == 0; v /= 10, n--)
            ;
          for (v = c[0];v >= 10; v /= 10, n++)
            ;
        }
        if (sd && x.e + 1 > n)
          n = x.e + 1;
        return n;
      };
      P.shiftedBy = function(k) {
        intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
        return this.times("1e" + k);
      };
      P.squareRoot = P.sqrt = function() {
        var m, n, r, rep, t, x = this, c = x.c, s = x.s, e = x.e, dp = DECIMAL_PLACES + 4, half = new BigNumber2("0.5");
        if (s !== 1 || !c || !c[0]) {
          return new BigNumber2(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
        }
        s = Math.sqrt(+valueOf(x));
        if (s == 0 || s == 1 / 0) {
          n = coeffToString(c);
          if ((n.length + e) % 2 == 0)
            n += "0";
          s = Math.sqrt(+n);
          e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
          if (s == 1 / 0) {
            n = "5e" + e;
          } else {
            n = s.toExponential();
            n = n.slice(0, n.indexOf("e") + 1) + e;
          }
          r = new BigNumber2(n);
        } else {
          r = new BigNumber2(s + "");
        }
        if (r.c[0]) {
          e = r.e;
          s = e + dp;
          if (s < 3)
            s = 0;
          for (;; ) {
            t = r;
            r = half.times(t.plus(div(x, t, dp, 1)));
            if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {
              if (r.e < e)
                --s;
              n = n.slice(s - 3, s + 1);
              if (n == "9999" || !rep && n == "4999") {
                if (!rep) {
                  round(t, t.e + DECIMAL_PLACES + 2, 0);
                  if (t.times(t).eq(x)) {
                    r = t;
                    break;
                  }
                }
                dp += 4;
                s += 4;
                rep = 1;
              } else {
                if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
                  round(r, r.e + DECIMAL_PLACES + 2, 1);
                  m = !r.times(r).eq(x);
                }
                break;
              }
            }
          }
        }
        return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
      };
      P.toExponential = function(dp, rm) {
        if (dp != null) {
          intCheck(dp, 0, MAX);
          dp++;
        }
        return format(this, dp, rm, 1);
      };
      P.toFixed = function(dp, rm) {
        if (dp != null) {
          intCheck(dp, 0, MAX);
          dp = dp + this.e + 1;
        }
        return format(this, dp, rm);
      };
      P.toFormat = function(dp, rm, format2) {
        var str, x = this;
        if (format2 == null) {
          if (dp != null && rm && typeof rm == "object") {
            format2 = rm;
            rm = null;
          } else if (dp && typeof dp == "object") {
            format2 = dp;
            dp = rm = null;
          } else {
            format2 = FORMAT;
          }
        } else if (typeof format2 != "object") {
          throw Error(bignumberError + "Argument not an object: " + format2);
        }
        str = x.toFixed(dp, rm);
        if (x.c) {
          var i, arr = str.split("."), g1 = +format2.groupSize, g2 = +format2.secondaryGroupSize, groupSeparator = format2.groupSeparator || "", intPart = arr[0], fractionPart = arr[1], isNeg = x.s < 0, intDigits = isNeg ? intPart.slice(1) : intPart, len = intDigits.length;
          if (g2) {
            i = g1;
            g1 = g2;
            g2 = i;
            len -= i;
          }
          if (g1 > 0 && len > 0) {
            i = len % g1 || g1;
            intPart = intDigits.substr(0, i);
            for (;i < len; i += g1)
              intPart += groupSeparator + intDigits.substr(i, g1);
            if (g2 > 0)
              intPart += groupSeparator + intDigits.slice(i);
            if (isNeg)
              intPart = "-" + intPart;
          }
          str = fractionPart ? intPart + (format2.decimalSeparator || "") + ((g2 = +format2.fractionGroupSize) ? fractionPart.replace(new RegExp("\\d{" + g2 + "}\\B", "g"), "$&" + (format2.fractionGroupSeparator || "")) : fractionPart) : intPart;
        }
        return (format2.prefix || "") + str + (format2.suffix || "");
      };
      P.toFraction = function(md) {
        var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s, x = this, xc = x.c;
        if (md != null) {
          n = new BigNumber2(md);
          if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
            throw Error(bignumberError + "Argument " + (n.isInteger() ? "out of range: " : "not an integer: ") + valueOf(n));
          }
        }
        if (!xc)
          return new BigNumber2(x);
        d = new BigNumber2(ONE);
        n1 = d0 = new BigNumber2(ONE);
        d1 = n0 = new BigNumber2(ONE);
        s = coeffToString(xc);
        e = d.e = s.length - x.e - 1;
        d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
        md = !md || n.comparedTo(d) > 0 ? e > 0 ? d : n1 : n;
        exp = MAX_EXP;
        MAX_EXP = 1 / 0;
        n = new BigNumber2(s);
        n0.c[0] = 0;
        for (;; ) {
          q = div(n, d, 0, 1);
          d2 = d0.plus(q.times(d1));
          if (d2.comparedTo(md) == 1)
            break;
          d0 = d1;
          d1 = d2;
          n1 = n0.plus(q.times(d2 = n1));
          n0 = d2;
          d = n.minus(q.times(d2 = d));
          n = d2;
        }
        d2 = div(md.minus(d0), d1, 0, 1);
        n0 = n0.plus(d2.times(n1));
        d0 = d0.plus(d2.times(d1));
        n0.s = n1.s = x.s;
        e = e * 2;
        r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
        MAX_EXP = exp;
        return r;
      };
      P.toNumber = function() {
        return +valueOf(this);
      };
      P.toPrecision = function(sd, rm) {
        if (sd != null)
          intCheck(sd, 1, MAX);
        return format(this, sd, rm, 2);
      };
      P.toString = function(b) {
        var str, n = this, s = n.s, e = n.e;
        if (e === null) {
          if (s) {
            str = "Infinity";
            if (s < 0)
              str = "-" + str;
          } else {
            str = "NaN";
          }
        } else {
          if (b == null) {
            str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(coeffToString(n.c), e) : toFixedPoint(coeffToString(n.c), e, "0");
          } else if (b === 10 && alphabetHasNormalDecimalDigits) {
            n = round(new BigNumber2(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
            str = toFixedPoint(coeffToString(n.c), n.e, "0");
          } else {
            intCheck(b, 2, ALPHABET.length, "Base");
            str = convertBase(toFixedPoint(coeffToString(n.c), e, "0"), 10, b, s, true);
          }
          if (s < 0 && n.c[0])
            str = "-" + str;
        }
        return str;
      };
      P.valueOf = P.toJSON = function() {
        return valueOf(this);
      };
      P._isBigNumber = true;
      if (configObject != null)
        BigNumber2.set(configObject);
      return BigNumber2;
    }
    function bitFloor(n) {
      var i = n | 0;
      return n > 0 || n === i ? i : i - 1;
    }
    function coeffToString(a) {
      var s, z, i = 1, j = a.length, r = a[0] + "";
      for (;i < j; ) {
        s = a[i++] + "";
        z = LOG_BASE - s.length;
        for (;z--; s = "0" + s)
          ;
        r += s;
      }
      for (j = r.length;r.charCodeAt(--j) === 48; )
        ;
      return r.slice(0, j + 1 || 1);
    }
    function compare(x, y) {
      var a, b, xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
      if (!i || !j)
        return null;
      a = xc && !xc[0];
      b = yc && !yc[0];
      if (a || b)
        return a ? b ? 0 : -j : i;
      if (i != j)
        return i;
      a = i < 0;
      b = k == l;
      if (!xc || !yc)
        return b ? 0 : !xc ^ a ? 1 : -1;
      if (!b)
        return k > l ^ a ? 1 : -1;
      j = (k = xc.length) < (l = yc.length) ? k : l;
      for (i = 0;i < j; i++)
        if (xc[i] != yc[i])
          return xc[i] > yc[i] ^ a ? 1 : -1;
      return k == l ? 0 : k > l ^ a ? 1 : -1;
    }
    function intCheck(n, min, max, name) {
      if (n < min || n > max || n !== mathfloor(n)) {
        throw Error(bignumberError + (name || "Argument") + (typeof n == "number" ? n < min || n > max ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n));
      }
    }
    function isOdd(n) {
      var k = n.c.length - 1;
      return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
    }
    function toExponential(str, e) {
      return (str.length > 1 ? str.charAt(0) + "." + str.slice(1) : str) + (e < 0 ? "e" : "e+") + e;
    }
    function toFixedPoint(str, e, z) {
      var len, zs;
      if (e < 0) {
        for (zs = z + ".";++e; zs += z)
          ;
        str = zs + str;
      } else {
        len = str.length;
        if (++e > len) {
          for (zs = z, e -= len;--e; zs += z)
            ;
          str += zs;
        } else if (e < len) {
          str = str.slice(0, e) + "." + str.slice(e);
        }
      }
      return str;
    }
    BigNumber = clone();
    BigNumber["default"] = BigNumber.BigNumber = BigNumber;
    if (typeof define == "function" && define.amd) {
      define(function() {
        return BigNumber;
      });
    } else if (typeof module != "undefined" && module.exports) {
      module.exports = BigNumber;
    } else {
      if (!globalObject) {
        globalObject = typeof self != "undefined" && self ? self : window;
      }
      globalObject.BigNumber = BigNumber;
    }
  })(exports);
});

// node_modules/.bun/json-bigint@1.0.0/node_modules/json-bigint/lib/stringify.js
var require_stringify = __commonJS((exports, module) => {
  var BigNumber = require_bignumber();
  var JSON2 = exports;
  (function() {
    function f(n) {
      return n < 10 ? "0" + n : n;
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
      "\b": "\\b",
      "\t": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      '"': "\\\"",
      "\\": "\\\\"
    }, rep;
    function quote(string) {
      escapable.lastIndex = 0;
      return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
        var c = meta[a];
        return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
      }) + '"' : '"' + string + '"';
    }
    function str(key, holder) {
      var i, k, v, length, mind = gap, partial, value = holder[key], isBigNumber = value != null && (value instanceof BigNumber || BigNumber.isBigNumber(value));
      if (value && typeof value === "object" && typeof value.toJSON === "function") {
        value = value.toJSON(key);
      }
      if (typeof rep === "function") {
        value = rep.call(holder, key, value);
      }
      switch (typeof value) {
        case "string":
          if (isBigNumber) {
            return value;
          } else {
            return quote(value);
          }
        case "number":
          return isFinite(value) ? String(value) : "null";
        case "boolean":
        case "null":
        case "bigint":
          return String(value);
        case "object":
          if (!value) {
            return "null";
          }
          gap += indent;
          partial = [];
          if (Object.prototype.toString.apply(value) === "[object Array]") {
            length = value.length;
            for (i = 0;i < length; i += 1) {
              partial[i] = str(i, value) || "null";
            }
            v = partial.length === 0 ? "[]" : gap ? `[
` + gap + partial.join(`,
` + gap) + `
` + mind + "]" : "[" + partial.join(",") + "]";
            gap = mind;
            return v;
          }
          if (rep && typeof rep === "object") {
            length = rep.length;
            for (i = 0;i < length; i += 1) {
              if (typeof rep[i] === "string") {
                k = rep[i];
                v = str(k, value);
                if (v) {
                  partial.push(quote(k) + (gap ? ": " : ":") + v);
                }
              }
            }
          } else {
            Object.keys(value).forEach(function(k2) {
              var v2 = str(k2, value);
              if (v2) {
                partial.push(quote(k2) + (gap ? ": " : ":") + v2);
              }
            });
          }
          v = partial.length === 0 ? "{}" : gap ? `{
` + gap + partial.join(`,
` + gap) + `
` + mind + "}" : "{" + partial.join(",") + "}";
          gap = mind;
          return v;
      }
    }
    if (typeof JSON2.stringify !== "function") {
      JSON2.stringify = function(value, replacer, space) {
        var i;
        gap = "";
        indent = "";
        if (typeof space === "number") {
          for (i = 0;i < space; i += 1) {
            indent += " ";
          }
        } else if (typeof space === "string") {
          indent = space;
        }
        rep = replacer;
        if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
          throw new Error("JSON.stringify");
        }
        return str("", { "": value });
      };
    }
  })();
});

// node_modules/.bun/json-bigint@1.0.0/node_modules/json-bigint/lib/parse.js
var require_parse = __commonJS((exports, module) => {
  var BigNumber = null;
  var suspectProtoRx = /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/;
  var suspectConstructorRx = /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;
  var json_parse = function(options) {
    var _options = {
      strict: false,
      storeAsString: false,
      alwaysParseAsBig: false,
      useNativeBigInt: false,
      protoAction: "error",
      constructorAction: "error"
    };
    if (options !== undefined && options !== null) {
      if (options.strict === true) {
        _options.strict = true;
      }
      if (options.storeAsString === true) {
        _options.storeAsString = true;
      }
      _options.alwaysParseAsBig = options.alwaysParseAsBig === true ? options.alwaysParseAsBig : false;
      _options.useNativeBigInt = options.useNativeBigInt === true ? options.useNativeBigInt : false;
      if (typeof options.constructorAction !== "undefined") {
        if (options.constructorAction === "error" || options.constructorAction === "ignore" || options.constructorAction === "preserve") {
          _options.constructorAction = options.constructorAction;
        } else {
          throw new Error(`Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${options.constructorAction}`);
        }
      }
      if (typeof options.protoAction !== "undefined") {
        if (options.protoAction === "error" || options.protoAction === "ignore" || options.protoAction === "preserve") {
          _options.protoAction = options.protoAction;
        } else {
          throw new Error(`Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${options.protoAction}`);
        }
      }
    }
    var at, ch, escapee = {
      '"': '"',
      "\\": "\\",
      "/": "/",
      b: "\b",
      f: "\f",
      n: `
`,
      r: "\r",
      t: "\t"
    }, text, error = function(m) {
      throw {
        name: "SyntaxError",
        message: m,
        at,
        text
      };
    }, next = function(c) {
      if (c && c !== ch) {
        error("Expected '" + c + "' instead of '" + ch + "'");
      }
      ch = text.charAt(at);
      at += 1;
      return ch;
    }, number = function() {
      var number2, string2 = "";
      if (ch === "-") {
        string2 = "-";
        next("-");
      }
      while (ch >= "0" && ch <= "9") {
        string2 += ch;
        next();
      }
      if (ch === ".") {
        string2 += ".";
        while (next() && ch >= "0" && ch <= "9") {
          string2 += ch;
        }
      }
      if (ch === "e" || ch === "E") {
        string2 += ch;
        next();
        if (ch === "-" || ch === "+") {
          string2 += ch;
          next();
        }
        while (ch >= "0" && ch <= "9") {
          string2 += ch;
          next();
        }
      }
      number2 = +string2;
      if (!isFinite(number2)) {
        error("Bad number");
      } else {
        if (BigNumber == null)
          BigNumber = require_bignumber();
        if (string2.length > 15)
          return _options.storeAsString ? string2 : _options.useNativeBigInt ? BigInt(string2) : new BigNumber(string2);
        else
          return !_options.alwaysParseAsBig ? number2 : _options.useNativeBigInt ? BigInt(number2) : new BigNumber(number2);
      }
    }, string = function() {
      var hex, i, string2 = "", uffff;
      if (ch === '"') {
        var startAt = at;
        while (next()) {
          if (ch === '"') {
            if (at - 1 > startAt)
              string2 += text.substring(startAt, at - 1);
            next();
            return string2;
          }
          if (ch === "\\") {
            if (at - 1 > startAt)
              string2 += text.substring(startAt, at - 1);
            next();
            if (ch === "u") {
              uffff = 0;
              for (i = 0;i < 4; i += 1) {
                hex = parseInt(next(), 16);
                if (!isFinite(hex)) {
                  break;
                }
                uffff = uffff * 16 + hex;
              }
              string2 += String.fromCharCode(uffff);
            } else if (typeof escapee[ch] === "string") {
              string2 += escapee[ch];
            } else {
              break;
            }
            startAt = at;
          }
        }
      }
      error("Bad string");
    }, white = function() {
      while (ch && ch <= " ") {
        next();
      }
    }, word = function() {
      switch (ch) {
        case "t":
          next("t");
          next("r");
          next("u");
          next("e");
          return true;
        case "f":
          next("f");
          next("a");
          next("l");
          next("s");
          next("e");
          return false;
        case "n":
          next("n");
          next("u");
          next("l");
          next("l");
          return null;
      }
      error("Unexpected '" + ch + "'");
    }, value, array = function() {
      var array2 = [];
      if (ch === "[") {
        next("[");
        white();
        if (ch === "]") {
          next("]");
          return array2;
        }
        while (ch) {
          array2.push(value());
          white();
          if (ch === "]") {
            next("]");
            return array2;
          }
          next(",");
          white();
        }
      }
      error("Bad array");
    }, object = function() {
      var key, object2 = Object.create(null);
      if (ch === "{") {
        next("{");
        white();
        if (ch === "}") {
          next("}");
          return object2;
        }
        while (ch) {
          key = string();
          white();
          next(":");
          if (_options.strict === true && Object.hasOwnProperty.call(object2, key)) {
            error('Duplicate key "' + key + '"');
          }
          if (suspectProtoRx.test(key) === true) {
            if (_options.protoAction === "error") {
              error("Object contains forbidden prototype property");
            } else if (_options.protoAction === "ignore") {
              value();
            } else {
              object2[key] = value();
            }
          } else if (suspectConstructorRx.test(key) === true) {
            if (_options.constructorAction === "error") {
              error("Object contains forbidden constructor property");
            } else if (_options.constructorAction === "ignore") {
              value();
            } else {
              object2[key] = value();
            }
          } else {
            object2[key] = value();
          }
          white();
          if (ch === "}") {
            next("}");
            return object2;
          }
          next(",");
          white();
        }
      }
      error("Bad object");
    };
    value = function() {
      white();
      switch (ch) {
        case "{":
          return object();
        case "[":
          return array();
        case '"':
          return string();
        case "-":
          return number();
        default:
          return ch >= "0" && ch <= "9" ? number() : word();
      }
    };
    return function(source, reviver) {
      var result;
      text = source + "";
      at = 0;
      ch = " ";
      result = value();
      white();
      if (ch) {
        error("Syntax error");
      }
      return typeof reviver === "function" ? function walk(holder, key) {
        var k, v, value2 = holder[key];
        if (value2 && typeof value2 === "object") {
          Object.keys(value2).forEach(function(k2) {
            v = walk(value2, k2);
            if (v !== undefined) {
              value2[k2] = v;
            } else {
              delete value2[k2];
            }
          });
        }
        return reviver.call(holder, key, value2);
      }({ "": result }, "") : result;
    };
  };
  module.exports = json_parse;
});

// node_modules/.bun/json-bigint@1.0.0/node_modules/json-bigint/index.js
var require_json_bigint = __commonJS((exports, module) => {
  var json_stringify = require_stringify().stringify;
  var json_parse = require_parse();
  module.exports = function(options) {
    return {
      parse: json_parse(options),
      stringify: json_stringify
    };
  };
  module.exports.parse = json_parse();
  module.exports.stringify = json_stringify;
});

// src/lib/search/cache.ts
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path2 from "node:path";

// node_modules/.bun/env-paths@4.0.0/node_modules/env-paths/index.js
import path from "node:path";
import os from "node:os";
import process2 from "node:process";

// node_modules/.bun/is-safe-filename@0.1.1/node_modules/is-safe-filename/index.js
var unsafeFilenameFixtures = Object.freeze([
  "",
  "   ",
  ".",
  "..",
  " .",
  ". ",
  " ..",
  ".. ",
  "../",
  "../foo",
  "foo/../bar",
  "foo/bar",
  "foo\\bar",
  "foo\x00bar"
]);
function isSafeFilename(filename) {
  if (typeof filename !== "string") {
    return false;
  }
  const trimmed = filename.trim();
  return trimmed !== "" && trimmed !== "." && trimmed !== ".." && !filename.includes("/") && !filename.includes("\\") && !filename.includes("\x00");
}
function assertSafeFilename(filename) {
  if (typeof filename !== "string") {
    throw new TypeError("Expected a string");
  }
  if (!isSafeFilename(filename)) {
    throw new Error(`Unsafe filename: ${JSON.stringify(filename)}`);
  }
}

// node_modules/.bun/env-paths@4.0.0/node_modules/env-paths/index.js
var homedir = os.homedir();
var tmpdir = os.tmpdir();
var { env } = process2;
var macos = (name) => {
  const library = path.join(homedir, "Library");
  return {
    data: path.join(library, "Application Support", name),
    config: path.join(library, "Preferences", name),
    cache: path.join(library, "Caches", name),
    log: path.join(library, "Logs", name),
    temp: path.join(tmpdir, name)
  };
};
var windows = (name) => {
  const appData = env.APPDATA || path.join(homedir, "AppData", "Roaming");
  const localAppData = env.LOCALAPPDATA || path.join(homedir, "AppData", "Local");
  return {
    data: path.join(localAppData, name, "Data"),
    config: path.join(appData, name, "Config"),
    cache: path.join(localAppData, name, "Cache"),
    log: path.join(localAppData, name, "Log"),
    temp: path.join(tmpdir, name)
  };
};
var linux = (name) => {
  const username = path.basename(homedir);
  return {
    data: path.join(env.XDG_DATA_HOME || path.join(homedir, ".local", "share"), name),
    config: path.join(env.XDG_CONFIG_HOME || path.join(homedir, ".config"), name),
    cache: path.join(env.XDG_CACHE_HOME || path.join(homedir, ".cache"), name),
    log: path.join(env.XDG_STATE_HOME || path.join(homedir, ".local", "state"), name),
    temp: path.join(tmpdir, username, name)
  };
};
function envPaths(name, { suffix = "nodejs" } = {}) {
  assertSafeFilename(name);
  if (suffix) {
    name += `-${suffix}`;
  }
  assertSafeFilename(name);
  if (process2.platform === "darwin") {
    return macos(name);
  }
  if (process2.platform === "win32") {
    return windows(name);
  }
  return linux(name);
}

// src/lib/search/cache.ts
var defaultSearchIndexUrl = "https://adcli.jiangzhx.com/search-index.json";
function getSearchIndexCacheInfo(options = {}) {
  const cacheDir = options.cacheDir ?? envPaths("adcli", { suffix: "" }).cache;
  return {
    cachePath: path2.join(cacheDir, "search-index.json"),
    indexUrl: options.indexUrl ?? defaultSearchIndexUrl
  };
}
async function loadSearchIndex(options = {}) {
  if (options.index) {
    return await loadExplicitSearchIndex(options.index, options.fetcher);
  }
  const cacheInfo = getSearchIndexCacheInfo(options);
  if (!options.refresh) {
    try {
      return JSON.parse(await readFile(cacheInfo.cachePath, "utf8"));
    } catch (error) {
      if (!isNotFoundError(error)) {
        throw error;
      }
    }
  }
  return await refreshSearchIndex(options);
}
async function refreshSearchIndex(options = {}) {
  const cacheInfo = getSearchIndexCacheInfo(options);
  const index = await fetchSearchIndex(cacheInfo.indexUrl, options.fetcher);
  await writeCachedSearchIndex(cacheInfo.cachePath, index);
  return index;
}
async function loadExplicitSearchIndex(index, fetcher = fetch) {
  if (/^https?:\/\//i.test(index)) {
    return await fetchSearchIndex(index, fetcher);
  }
  try {
    return JSON.parse(await readFile(path2.resolve(index), "utf8"));
  } catch (error) {
    if (isNotFoundError(error)) {
      throw new Error(`missing search index: ${path2.relative(process.cwd(), path2.resolve(index))}`);
    }
    throw error;
  }
}
async function fetchSearchIndex(indexUrl, fetcher = fetch) {
  const response = await fetcher(indexUrl);
  if (!response.ok) {
    throw new Error(`failed to fetch search index: ${indexUrl} (${response.status})`);
  }
  return await response.json();
}
async function writeCachedSearchIndex(cachePath, index) {
  await mkdir(path2.dirname(cachePath), { recursive: true });
  const tempPath = `${cachePath}.${process.pid}.tmp`;
  await writeFile(tempPath, `${JSON.stringify(index)}
`, "utf8");
  await rename(tempPath, cachePath);
}
function isNotFoundError(error) {
  return error instanceof Error && "code" in error && error.code === "ENOENT";
}

// node_modules/.bun/minisearch@7.2.0/node_modules/minisearch/dist/es/index.js
var ENTRIES = "ENTRIES";
var KEYS = "KEYS";
var VALUES = "VALUES";
var LEAF = "";

class TreeIterator {
  constructor(set, type) {
    const node = set._tree;
    const keys = Array.from(node.keys());
    this.set = set;
    this._type = type;
    this._path = keys.length > 0 ? [{ node, keys }] : [];
  }
  next() {
    const value = this.dive();
    this.backtrack();
    return value;
  }
  dive() {
    if (this._path.length === 0) {
      return { done: true, value: undefined };
    }
    const { node, keys } = last$1(this._path);
    if (last$1(keys) === LEAF) {
      return { done: false, value: this.result() };
    }
    const child = node.get(last$1(keys));
    this._path.push({ node: child, keys: Array.from(child.keys()) });
    return this.dive();
  }
  backtrack() {
    if (this._path.length === 0) {
      return;
    }
    const keys = last$1(this._path).keys;
    keys.pop();
    if (keys.length > 0) {
      return;
    }
    this._path.pop();
    this.backtrack();
  }
  key() {
    return this.set._prefix + this._path.map(({ keys }) => last$1(keys)).filter((key) => key !== LEAF).join("");
  }
  value() {
    return last$1(this._path).node.get(LEAF);
  }
  result() {
    switch (this._type) {
      case VALUES:
        return this.value();
      case KEYS:
        return this.key();
      default:
        return [this.key(), this.value()];
    }
  }
  [Symbol.iterator]() {
    return this;
  }
}
var last$1 = (array) => {
  return array[array.length - 1];
};
var fuzzySearch = (node, query, maxDistance) => {
  const results = new Map;
  if (query === undefined)
    return results;
  const n = query.length + 1;
  const m = n + maxDistance;
  const matrix = new Uint8Array(m * n).fill(maxDistance + 1);
  for (let j = 0;j < n; ++j)
    matrix[j] = j;
  for (let i = 1;i < m; ++i)
    matrix[i * n] = i;
  recurse(node, query, maxDistance, results, matrix, 1, n, "");
  return results;
};
var recurse = (node, query, maxDistance, results, matrix, m, n, prefix) => {
  const offset = m * n;
  key:
    for (const key of node.keys()) {
      if (key === LEAF) {
        const distance = matrix[offset - 1];
        if (distance <= maxDistance) {
          results.set(prefix, [node.get(key), distance]);
        }
      } else {
        let i = m;
        for (let pos = 0;pos < key.length; ++pos, ++i) {
          const char = key[pos];
          const thisRowOffset = n * i;
          const prevRowOffset = thisRowOffset - n;
          let minDistance = matrix[thisRowOffset];
          const jmin = Math.max(0, i - maxDistance - 1);
          const jmax = Math.min(n - 1, i + maxDistance);
          for (let j = jmin;j < jmax; ++j) {
            const different = char !== query[j];
            const rpl = matrix[prevRowOffset + j] + +different;
            const del = matrix[prevRowOffset + j + 1] + 1;
            const ins = matrix[thisRowOffset + j] + 1;
            const dist = matrix[thisRowOffset + j + 1] = Math.min(rpl, del, ins);
            if (dist < minDistance)
              minDistance = dist;
          }
          if (minDistance > maxDistance) {
            continue key;
          }
        }
        recurse(node.get(key), query, maxDistance, results, matrix, i, n, prefix + key);
      }
    }
};

class SearchableMap {
  constructor(tree = new Map, prefix = "") {
    this._size = undefined;
    this._tree = tree;
    this._prefix = prefix;
  }
  atPrefix(prefix) {
    if (!prefix.startsWith(this._prefix)) {
      throw new Error("Mismatched prefix");
    }
    const [node, path3] = trackDown(this._tree, prefix.slice(this._prefix.length));
    if (node === undefined) {
      const [parentNode, key] = last(path3);
      for (const k of parentNode.keys()) {
        if (k !== LEAF && k.startsWith(key)) {
          const node2 = new Map;
          node2.set(k.slice(key.length), parentNode.get(k));
          return new SearchableMap(node2, prefix);
        }
      }
    }
    return new SearchableMap(node, prefix);
  }
  clear() {
    this._size = undefined;
    this._tree.clear();
  }
  delete(key) {
    this._size = undefined;
    return remove(this._tree, key);
  }
  entries() {
    return new TreeIterator(this, ENTRIES);
  }
  forEach(fn) {
    for (const [key, value] of this) {
      fn(key, value, this);
    }
  }
  fuzzyGet(key, maxEditDistance) {
    return fuzzySearch(this._tree, key, maxEditDistance);
  }
  get(key) {
    const node = lookup(this._tree, key);
    return node !== undefined ? node.get(LEAF) : undefined;
  }
  has(key) {
    const node = lookup(this._tree, key);
    return node !== undefined && node.has(LEAF);
  }
  keys() {
    return new TreeIterator(this, KEYS);
  }
  set(key, value) {
    if (typeof key !== "string") {
      throw new Error("key must be a string");
    }
    this._size = undefined;
    const node = createPath(this._tree, key);
    node.set(LEAF, value);
    return this;
  }
  get size() {
    if (this._size) {
      return this._size;
    }
    this._size = 0;
    const iter = this.entries();
    while (!iter.next().done)
      this._size += 1;
    return this._size;
  }
  update(key, fn) {
    if (typeof key !== "string") {
      throw new Error("key must be a string");
    }
    this._size = undefined;
    const node = createPath(this._tree, key);
    node.set(LEAF, fn(node.get(LEAF)));
    return this;
  }
  fetch(key, initial) {
    if (typeof key !== "string") {
      throw new Error("key must be a string");
    }
    this._size = undefined;
    const node = createPath(this._tree, key);
    let value = node.get(LEAF);
    if (value === undefined) {
      node.set(LEAF, value = initial());
    }
    return value;
  }
  values() {
    return new TreeIterator(this, VALUES);
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  static from(entries) {
    const tree = new SearchableMap;
    for (const [key, value] of entries) {
      tree.set(key, value);
    }
    return tree;
  }
  static fromObject(object) {
    return SearchableMap.from(Object.entries(object));
  }
}
var trackDown = (tree, key, path3 = []) => {
  if (key.length === 0 || tree == null) {
    return [tree, path3];
  }
  for (const k of tree.keys()) {
    if (k !== LEAF && key.startsWith(k)) {
      path3.push([tree, k]);
      return trackDown(tree.get(k), key.slice(k.length), path3);
    }
  }
  path3.push([tree, key]);
  return trackDown(undefined, "", path3);
};
var lookup = (tree, key) => {
  if (key.length === 0 || tree == null) {
    return tree;
  }
  for (const k of tree.keys()) {
    if (k !== LEAF && key.startsWith(k)) {
      return lookup(tree.get(k), key.slice(k.length));
    }
  }
};
var createPath = (node, key) => {
  const keyLength = key.length;
  outer:
    for (let pos = 0;node && pos < keyLength; ) {
      for (const k of node.keys()) {
        if (k !== LEAF && key[pos] === k[0]) {
          const len = Math.min(keyLength - pos, k.length);
          let offset = 1;
          while (offset < len && key[pos + offset] === k[offset])
            ++offset;
          const child2 = node.get(k);
          if (offset === k.length) {
            node = child2;
          } else {
            const intermediate = new Map;
            intermediate.set(k.slice(offset), child2);
            node.set(key.slice(pos, pos + offset), intermediate);
            node.delete(k);
            node = intermediate;
          }
          pos += offset;
          continue outer;
        }
      }
      const child = new Map;
      node.set(key.slice(pos), child);
      return child;
    }
  return node;
};
var remove = (tree, key) => {
  const [node, path3] = trackDown(tree, key);
  if (node === undefined) {
    return;
  }
  node.delete(LEAF);
  if (node.size === 0) {
    cleanup(path3);
  } else if (node.size === 1) {
    const [key2, value] = node.entries().next().value;
    merge(path3, key2, value);
  }
};
var cleanup = (path3) => {
  if (path3.length === 0) {
    return;
  }
  const [node, key] = last(path3);
  node.delete(key);
  if (node.size === 0) {
    cleanup(path3.slice(0, -1));
  } else if (node.size === 1) {
    const [key2, value] = node.entries().next().value;
    if (key2 !== LEAF) {
      merge(path3.slice(0, -1), key2, value);
    }
  }
};
var merge = (path3, key, value) => {
  if (path3.length === 0) {
    return;
  }
  const [node, nodeKey] = last(path3);
  node.set(nodeKey + key, value);
  node.delete(nodeKey);
};
var last = (array) => {
  return array[array.length - 1];
};
var OR = "or";
var AND = "and";
var AND_NOT = "and_not";

class MiniSearch {
  constructor(options) {
    if ((options === null || options === undefined ? undefined : options.fields) == null) {
      throw new Error('MiniSearch: option "fields" must be provided');
    }
    const autoVacuum = options.autoVacuum == null || options.autoVacuum === true ? defaultAutoVacuumOptions : options.autoVacuum;
    this._options = {
      ...defaultOptions,
      ...options,
      autoVacuum,
      searchOptions: { ...defaultSearchOptions, ...options.searchOptions || {} },
      autoSuggestOptions: { ...defaultAutoSuggestOptions, ...options.autoSuggestOptions || {} }
    };
    this._index = new SearchableMap;
    this._documentCount = 0;
    this._documentIds = new Map;
    this._idToShortId = new Map;
    this._fieldIds = {};
    this._fieldLength = new Map;
    this._avgFieldLength = [];
    this._nextId = 0;
    this._storedFields = new Map;
    this._dirtCount = 0;
    this._currentVacuum = null;
    this._enqueuedVacuum = null;
    this._enqueuedVacuumConditions = defaultVacuumConditions;
    this.addFields(this._options.fields);
  }
  add(document) {
    const { extractField, stringifyField, tokenize, processTerm, fields, idField } = this._options;
    const id = extractField(document, idField);
    if (id == null) {
      throw new Error(`MiniSearch: document does not have ID field "${idField}"`);
    }
    if (this._idToShortId.has(id)) {
      throw new Error(`MiniSearch: duplicate ID ${id}`);
    }
    const shortDocumentId = this.addDocumentId(id);
    this.saveStoredFields(shortDocumentId, document);
    for (const field of fields) {
      const fieldValue = extractField(document, field);
      if (fieldValue == null)
        continue;
      const tokens = tokenize(stringifyField(fieldValue, field), field);
      const fieldId = this._fieldIds[field];
      const uniqueTerms = new Set(tokens).size;
      this.addFieldLength(shortDocumentId, fieldId, this._documentCount - 1, uniqueTerms);
      for (const term of tokens) {
        const processedTerm = processTerm(term, field);
        if (Array.isArray(processedTerm)) {
          for (const t of processedTerm) {
            this.addTerm(fieldId, shortDocumentId, t);
          }
        } else if (processedTerm) {
          this.addTerm(fieldId, shortDocumentId, processedTerm);
        }
      }
    }
  }
  addAll(documents) {
    for (const document of documents)
      this.add(document);
  }
  addAllAsync(documents, options = {}) {
    const { chunkSize = 10 } = options;
    const acc = { chunk: [], promise: Promise.resolve() };
    const { chunk, promise } = documents.reduce(({ chunk: chunk2, promise: promise2 }, document, i) => {
      chunk2.push(document);
      if ((i + 1) % chunkSize === 0) {
        return {
          chunk: [],
          promise: promise2.then(() => new Promise((resolve) => setTimeout(resolve, 0))).then(() => this.addAll(chunk2))
        };
      } else {
        return { chunk: chunk2, promise: promise2 };
      }
    }, acc);
    return promise.then(() => this.addAll(chunk));
  }
  remove(document) {
    const { tokenize, processTerm, extractField, stringifyField, fields, idField } = this._options;
    const id = extractField(document, idField);
    if (id == null) {
      throw new Error(`MiniSearch: document does not have ID field "${idField}"`);
    }
    const shortId = this._idToShortId.get(id);
    if (shortId == null) {
      throw new Error(`MiniSearch: cannot remove document with ID ${id}: it is not in the index`);
    }
    for (const field of fields) {
      const fieldValue = extractField(document, field);
      if (fieldValue == null)
        continue;
      const tokens = tokenize(stringifyField(fieldValue, field), field);
      const fieldId = this._fieldIds[field];
      const uniqueTerms = new Set(tokens).size;
      this.removeFieldLength(shortId, fieldId, this._documentCount, uniqueTerms);
      for (const term of tokens) {
        const processedTerm = processTerm(term, field);
        if (Array.isArray(processedTerm)) {
          for (const t of processedTerm) {
            this.removeTerm(fieldId, shortId, t);
          }
        } else if (processedTerm) {
          this.removeTerm(fieldId, shortId, processedTerm);
        }
      }
    }
    this._storedFields.delete(shortId);
    this._documentIds.delete(shortId);
    this._idToShortId.delete(id);
    this._fieldLength.delete(shortId);
    this._documentCount -= 1;
  }
  removeAll(documents) {
    if (documents) {
      for (const document of documents)
        this.remove(document);
    } else if (arguments.length > 0) {
      throw new Error("Expected documents to be present. Omit the argument to remove all documents.");
    } else {
      this._index = new SearchableMap;
      this._documentCount = 0;
      this._documentIds = new Map;
      this._idToShortId = new Map;
      this._fieldLength = new Map;
      this._avgFieldLength = [];
      this._storedFields = new Map;
      this._nextId = 0;
    }
  }
  discard(id) {
    const shortId = this._idToShortId.get(id);
    if (shortId == null) {
      throw new Error(`MiniSearch: cannot discard document with ID ${id}: it is not in the index`);
    }
    this._idToShortId.delete(id);
    this._documentIds.delete(shortId);
    this._storedFields.delete(shortId);
    (this._fieldLength.get(shortId) || []).forEach((fieldLength, fieldId) => {
      this.removeFieldLength(shortId, fieldId, this._documentCount, fieldLength);
    });
    this._fieldLength.delete(shortId);
    this._documentCount -= 1;
    this._dirtCount += 1;
    this.maybeAutoVacuum();
  }
  maybeAutoVacuum() {
    if (this._options.autoVacuum === false) {
      return;
    }
    const { minDirtFactor, minDirtCount, batchSize, batchWait } = this._options.autoVacuum;
    this.conditionalVacuum({ batchSize, batchWait }, { minDirtCount, minDirtFactor });
  }
  discardAll(ids) {
    const autoVacuum = this._options.autoVacuum;
    try {
      this._options.autoVacuum = false;
      for (const id of ids) {
        this.discard(id);
      }
    } finally {
      this._options.autoVacuum = autoVacuum;
    }
    this.maybeAutoVacuum();
  }
  replace(updatedDocument) {
    const { idField, extractField } = this._options;
    const id = extractField(updatedDocument, idField);
    this.discard(id);
    this.add(updatedDocument);
  }
  vacuum(options = {}) {
    return this.conditionalVacuum(options);
  }
  conditionalVacuum(options, conditions) {
    if (this._currentVacuum) {
      this._enqueuedVacuumConditions = this._enqueuedVacuumConditions && conditions;
      if (this._enqueuedVacuum != null) {
        return this._enqueuedVacuum;
      }
      this._enqueuedVacuum = this._currentVacuum.then(() => {
        const conditions2 = this._enqueuedVacuumConditions;
        this._enqueuedVacuumConditions = defaultVacuumConditions;
        return this.performVacuuming(options, conditions2);
      });
      return this._enqueuedVacuum;
    }
    if (this.vacuumConditionsMet(conditions) === false) {
      return Promise.resolve();
    }
    this._currentVacuum = this.performVacuuming(options);
    return this._currentVacuum;
  }
  async performVacuuming(options, conditions) {
    const initialDirtCount = this._dirtCount;
    if (this.vacuumConditionsMet(conditions)) {
      const batchSize = options.batchSize || defaultVacuumOptions.batchSize;
      const batchWait = options.batchWait || defaultVacuumOptions.batchWait;
      let i = 1;
      for (const [term, fieldsData] of this._index) {
        for (const [fieldId, fieldIndex] of fieldsData) {
          for (const [shortId] of fieldIndex) {
            if (this._documentIds.has(shortId)) {
              continue;
            }
            if (fieldIndex.size <= 1) {
              fieldsData.delete(fieldId);
            } else {
              fieldIndex.delete(shortId);
            }
          }
        }
        if (this._index.get(term).size === 0) {
          this._index.delete(term);
        }
        if (i % batchSize === 0) {
          await new Promise((resolve) => setTimeout(resolve, batchWait));
        }
        i += 1;
      }
      this._dirtCount -= initialDirtCount;
    }
    await null;
    this._currentVacuum = this._enqueuedVacuum;
    this._enqueuedVacuum = null;
  }
  vacuumConditionsMet(conditions) {
    if (conditions == null) {
      return true;
    }
    let { minDirtCount, minDirtFactor } = conditions;
    minDirtCount = minDirtCount || defaultAutoVacuumOptions.minDirtCount;
    minDirtFactor = minDirtFactor || defaultAutoVacuumOptions.minDirtFactor;
    return this.dirtCount >= minDirtCount && this.dirtFactor >= minDirtFactor;
  }
  get isVacuuming() {
    return this._currentVacuum != null;
  }
  get dirtCount() {
    return this._dirtCount;
  }
  get dirtFactor() {
    return this._dirtCount / (1 + this._documentCount + this._dirtCount);
  }
  has(id) {
    return this._idToShortId.has(id);
  }
  getStoredFields(id) {
    const shortId = this._idToShortId.get(id);
    if (shortId == null) {
      return;
    }
    return this._storedFields.get(shortId);
  }
  search(query, searchOptions = {}) {
    const { searchOptions: globalSearchOptions } = this._options;
    const searchOptionsWithDefaults = { ...globalSearchOptions, ...searchOptions };
    const rawResults = this.executeQuery(query, searchOptions);
    const results = [];
    for (const [docId, { score, terms, match }] of rawResults) {
      const quality = terms.length || 1;
      const result = {
        id: this._documentIds.get(docId),
        score: score * quality,
        terms: Object.keys(match),
        queryTerms: terms,
        match
      };
      Object.assign(result, this._storedFields.get(docId));
      if (searchOptionsWithDefaults.filter == null || searchOptionsWithDefaults.filter(result)) {
        results.push(result);
      }
    }
    if (query === MiniSearch.wildcard && searchOptionsWithDefaults.boostDocument == null) {
      return results;
    }
    results.sort(byScore);
    return results;
  }
  autoSuggest(queryString, options = {}) {
    options = { ...this._options.autoSuggestOptions, ...options };
    const suggestions = new Map;
    for (const { score, terms } of this.search(queryString, options)) {
      const phrase = terms.join(" ");
      const suggestion = suggestions.get(phrase);
      if (suggestion != null) {
        suggestion.score += score;
        suggestion.count += 1;
      } else {
        suggestions.set(phrase, { score, terms, count: 1 });
      }
    }
    const results = [];
    for (const [suggestion, { score, terms, count }] of suggestions) {
      results.push({ suggestion, terms, score: score / count });
    }
    results.sort(byScore);
    return results;
  }
  get documentCount() {
    return this._documentCount;
  }
  get termCount() {
    return this._index.size;
  }
  static loadJSON(json, options) {
    if (options == null) {
      throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");
    }
    return this.loadJS(JSON.parse(json), options);
  }
  static async loadJSONAsync(json, options) {
    if (options == null) {
      throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");
    }
    return this.loadJSAsync(JSON.parse(json), options);
  }
  static getDefault(optionName) {
    if (defaultOptions.hasOwnProperty(optionName)) {
      return getOwnProperty(defaultOptions, optionName);
    } else {
      throw new Error(`MiniSearch: unknown option "${optionName}"`);
    }
  }
  static loadJS(js, options) {
    const { index, documentIds, fieldLength, storedFields, serializationVersion } = js;
    const miniSearch = this.instantiateMiniSearch(js, options);
    miniSearch._documentIds = objectToNumericMap(documentIds);
    miniSearch._fieldLength = objectToNumericMap(fieldLength);
    miniSearch._storedFields = objectToNumericMap(storedFields);
    for (const [shortId, id] of miniSearch._documentIds) {
      miniSearch._idToShortId.set(id, shortId);
    }
    for (const [term, data] of index) {
      const dataMap = new Map;
      for (const fieldId of Object.keys(data)) {
        let indexEntry = data[fieldId];
        if (serializationVersion === 1) {
          indexEntry = indexEntry.ds;
        }
        dataMap.set(parseInt(fieldId, 10), objectToNumericMap(indexEntry));
      }
      miniSearch._index.set(term, dataMap);
    }
    return miniSearch;
  }
  static async loadJSAsync(js, options) {
    const { index, documentIds, fieldLength, storedFields, serializationVersion } = js;
    const miniSearch = this.instantiateMiniSearch(js, options);
    miniSearch._documentIds = await objectToNumericMapAsync(documentIds);
    miniSearch._fieldLength = await objectToNumericMapAsync(fieldLength);
    miniSearch._storedFields = await objectToNumericMapAsync(storedFields);
    for (const [shortId, id] of miniSearch._documentIds) {
      miniSearch._idToShortId.set(id, shortId);
    }
    let count = 0;
    for (const [term, data] of index) {
      const dataMap = new Map;
      for (const fieldId of Object.keys(data)) {
        let indexEntry = data[fieldId];
        if (serializationVersion === 1) {
          indexEntry = indexEntry.ds;
        }
        dataMap.set(parseInt(fieldId, 10), await objectToNumericMapAsync(indexEntry));
      }
      if (++count % 1000 === 0)
        await wait(0);
      miniSearch._index.set(term, dataMap);
    }
    return miniSearch;
  }
  static instantiateMiniSearch(js, options) {
    const { documentCount, nextId, fieldIds, averageFieldLength, dirtCount, serializationVersion } = js;
    if (serializationVersion !== 1 && serializationVersion !== 2) {
      throw new Error("MiniSearch: cannot deserialize an index created with an incompatible version");
    }
    const miniSearch = new MiniSearch(options);
    miniSearch._documentCount = documentCount;
    miniSearch._nextId = nextId;
    miniSearch._idToShortId = new Map;
    miniSearch._fieldIds = fieldIds;
    miniSearch._avgFieldLength = averageFieldLength;
    miniSearch._dirtCount = dirtCount || 0;
    miniSearch._index = new SearchableMap;
    return miniSearch;
  }
  executeQuery(query, searchOptions = {}) {
    if (query === MiniSearch.wildcard) {
      return this.executeWildcardQuery(searchOptions);
    }
    if (typeof query !== "string") {
      const options2 = { ...searchOptions, ...query, queries: undefined };
      const results2 = query.queries.map((subquery) => this.executeQuery(subquery, options2));
      return this.combineResults(results2, options2.combineWith);
    }
    const { tokenize, processTerm, searchOptions: globalSearchOptions } = this._options;
    const options = { tokenize, processTerm, ...globalSearchOptions, ...searchOptions };
    const { tokenize: searchTokenize, processTerm: searchProcessTerm } = options;
    const terms = searchTokenize(query).flatMap((term) => searchProcessTerm(term)).filter((term) => !!term);
    const queries = terms.map(termToQuerySpec(options));
    const results = queries.map((query2) => this.executeQuerySpec(query2, options));
    return this.combineResults(results, options.combineWith);
  }
  executeQuerySpec(query, searchOptions) {
    const options = { ...this._options.searchOptions, ...searchOptions };
    const boosts = (options.fields || this._options.fields).reduce((boosts2, field) => ({ ...boosts2, [field]: getOwnProperty(options.boost, field) || 1 }), {});
    const { boostDocument, weights, maxFuzzy, bm25: bm25params } = options;
    const { fuzzy: fuzzyWeight, prefix: prefixWeight } = { ...defaultSearchOptions.weights, ...weights };
    const data = this._index.get(query.term);
    const results = this.termResults(query.term, query.term, 1, query.termBoost, data, boosts, boostDocument, bm25params);
    let prefixMatches;
    let fuzzyMatches;
    if (query.prefix) {
      prefixMatches = this._index.atPrefix(query.term);
    }
    if (query.fuzzy) {
      const fuzzy = query.fuzzy === true ? 0.2 : query.fuzzy;
      const maxDistance = fuzzy < 1 ? Math.min(maxFuzzy, Math.round(query.term.length * fuzzy)) : fuzzy;
      if (maxDistance)
        fuzzyMatches = this._index.fuzzyGet(query.term, maxDistance);
    }
    if (prefixMatches) {
      for (const [term, data2] of prefixMatches) {
        const distance = term.length - query.term.length;
        if (!distance) {
          continue;
        }
        fuzzyMatches === null || fuzzyMatches === undefined || fuzzyMatches.delete(term);
        const weight = prefixWeight * term.length / (term.length + 0.3 * distance);
        this.termResults(query.term, term, weight, query.termBoost, data2, boosts, boostDocument, bm25params, results);
      }
    }
    if (fuzzyMatches) {
      for (const term of fuzzyMatches.keys()) {
        const [data2, distance] = fuzzyMatches.get(term);
        if (!distance) {
          continue;
        }
        const weight = fuzzyWeight * term.length / (term.length + distance);
        this.termResults(query.term, term, weight, query.termBoost, data2, boosts, boostDocument, bm25params, results);
      }
    }
    return results;
  }
  executeWildcardQuery(searchOptions) {
    const results = new Map;
    const options = { ...this._options.searchOptions, ...searchOptions };
    for (const [shortId, id] of this._documentIds) {
      const score = options.boostDocument ? options.boostDocument(id, "", this._storedFields.get(shortId)) : 1;
      results.set(shortId, {
        score,
        terms: [],
        match: {}
      });
    }
    return results;
  }
  combineResults(results, combineWith = OR) {
    if (results.length === 0) {
      return new Map;
    }
    const operator = combineWith.toLowerCase();
    const combinator = combinators[operator];
    if (!combinator) {
      throw new Error(`Invalid combination operator: ${combineWith}`);
    }
    return results.reduce(combinator) || new Map;
  }
  toJSON() {
    const index = [];
    for (const [term, fieldIndex] of this._index) {
      const data = {};
      for (const [fieldId, freqs] of fieldIndex) {
        data[fieldId] = Object.fromEntries(freqs);
      }
      index.push([term, data]);
    }
    return {
      documentCount: this._documentCount,
      nextId: this._nextId,
      documentIds: Object.fromEntries(this._documentIds),
      fieldIds: this._fieldIds,
      fieldLength: Object.fromEntries(this._fieldLength),
      averageFieldLength: this._avgFieldLength,
      storedFields: Object.fromEntries(this._storedFields),
      dirtCount: this._dirtCount,
      index,
      serializationVersion: 2
    };
  }
  termResults(sourceTerm, derivedTerm, termWeight, termBoost, fieldTermData, fieldBoosts, boostDocumentFn, bm25params, results = new Map) {
    if (fieldTermData == null)
      return results;
    for (const field of Object.keys(fieldBoosts)) {
      const fieldBoost = fieldBoosts[field];
      const fieldId = this._fieldIds[field];
      const fieldTermFreqs = fieldTermData.get(fieldId);
      if (fieldTermFreqs == null)
        continue;
      let matchingFields = fieldTermFreqs.size;
      const avgFieldLength = this._avgFieldLength[fieldId];
      for (const docId of fieldTermFreqs.keys()) {
        if (!this._documentIds.has(docId)) {
          this.removeTerm(fieldId, docId, derivedTerm);
          matchingFields -= 1;
          continue;
        }
        const docBoost = boostDocumentFn ? boostDocumentFn(this._documentIds.get(docId), derivedTerm, this._storedFields.get(docId)) : 1;
        if (!docBoost)
          continue;
        const termFreq = fieldTermFreqs.get(docId);
        const fieldLength = this._fieldLength.get(docId)[fieldId];
        const rawScore = calcBM25Score(termFreq, matchingFields, this._documentCount, fieldLength, avgFieldLength, bm25params);
        const weightedScore = termWeight * termBoost * fieldBoost * docBoost * rawScore;
        const result = results.get(docId);
        if (result) {
          result.score += weightedScore;
          assignUniqueTerm(result.terms, sourceTerm);
          const match = getOwnProperty(result.match, derivedTerm);
          if (match) {
            match.push(field);
          } else {
            result.match[derivedTerm] = [field];
          }
        } else {
          results.set(docId, {
            score: weightedScore,
            terms: [sourceTerm],
            match: { [derivedTerm]: [field] }
          });
        }
      }
    }
    return results;
  }
  addTerm(fieldId, documentId, term) {
    const indexData = this._index.fetch(term, createMap);
    let fieldIndex = indexData.get(fieldId);
    if (fieldIndex == null) {
      fieldIndex = new Map;
      fieldIndex.set(documentId, 1);
      indexData.set(fieldId, fieldIndex);
    } else {
      const docs = fieldIndex.get(documentId);
      fieldIndex.set(documentId, (docs || 0) + 1);
    }
  }
  removeTerm(fieldId, documentId, term) {
    if (!this._index.has(term)) {
      this.warnDocumentChanged(documentId, fieldId, term);
      return;
    }
    const indexData = this._index.fetch(term, createMap);
    const fieldIndex = indexData.get(fieldId);
    if (fieldIndex == null || fieldIndex.get(documentId) == null) {
      this.warnDocumentChanged(documentId, fieldId, term);
    } else if (fieldIndex.get(documentId) <= 1) {
      if (fieldIndex.size <= 1) {
        indexData.delete(fieldId);
      } else {
        fieldIndex.delete(documentId);
      }
    } else {
      fieldIndex.set(documentId, fieldIndex.get(documentId) - 1);
    }
    if (this._index.get(term).size === 0) {
      this._index.delete(term);
    }
  }
  warnDocumentChanged(shortDocumentId, fieldId, term) {
    for (const fieldName of Object.keys(this._fieldIds)) {
      if (this._fieldIds[fieldName] === fieldId) {
        this._options.logger("warn", `MiniSearch: document with ID ${this._documentIds.get(shortDocumentId)} has changed before removal: term "${term}" was not present in field "${fieldName}". Removing a document after it has changed can corrupt the index!`, "version_conflict");
        return;
      }
    }
  }
  addDocumentId(documentId) {
    const shortDocumentId = this._nextId;
    this._idToShortId.set(documentId, shortDocumentId);
    this._documentIds.set(shortDocumentId, documentId);
    this._documentCount += 1;
    this._nextId += 1;
    return shortDocumentId;
  }
  addFields(fields) {
    for (let i = 0;i < fields.length; i++) {
      this._fieldIds[fields[i]] = i;
    }
  }
  addFieldLength(documentId, fieldId, count, length) {
    let fieldLengths = this._fieldLength.get(documentId);
    if (fieldLengths == null)
      this._fieldLength.set(documentId, fieldLengths = []);
    fieldLengths[fieldId] = length;
    const averageFieldLength = this._avgFieldLength[fieldId] || 0;
    const totalFieldLength = averageFieldLength * count + length;
    this._avgFieldLength[fieldId] = totalFieldLength / (count + 1);
  }
  removeFieldLength(documentId, fieldId, count, length) {
    if (count === 1) {
      this._avgFieldLength[fieldId] = 0;
      return;
    }
    const totalFieldLength = this._avgFieldLength[fieldId] * count - length;
    this._avgFieldLength[fieldId] = totalFieldLength / (count - 1);
  }
  saveStoredFields(documentId, doc) {
    const { storeFields, extractField } = this._options;
    if (storeFields == null || storeFields.length === 0) {
      return;
    }
    let documentFields = this._storedFields.get(documentId);
    if (documentFields == null)
      this._storedFields.set(documentId, documentFields = {});
    for (const fieldName of storeFields) {
      const fieldValue = extractField(doc, fieldName);
      if (fieldValue !== undefined)
        documentFields[fieldName] = fieldValue;
    }
  }
}
MiniSearch.wildcard = Symbol("*");
var getOwnProperty = (object, property) => Object.prototype.hasOwnProperty.call(object, property) ? object[property] : undefined;
var combinators = {
  [OR]: (a, b) => {
    for (const docId of b.keys()) {
      const existing = a.get(docId);
      if (existing == null) {
        a.set(docId, b.get(docId));
      } else {
        const { score, terms, match } = b.get(docId);
        existing.score = existing.score + score;
        existing.match = Object.assign(existing.match, match);
        assignUniqueTerms(existing.terms, terms);
      }
    }
    return a;
  },
  [AND]: (a, b) => {
    const combined = new Map;
    for (const docId of b.keys()) {
      const existing = a.get(docId);
      if (existing == null)
        continue;
      const { score, terms, match } = b.get(docId);
      assignUniqueTerms(existing.terms, terms);
      combined.set(docId, {
        score: existing.score + score,
        terms: existing.terms,
        match: Object.assign(existing.match, match)
      });
    }
    return combined;
  },
  [AND_NOT]: (a, b) => {
    for (const docId of b.keys())
      a.delete(docId);
    return a;
  }
};
var defaultBM25params = { k: 1.2, b: 0.7, d: 0.5 };
var calcBM25Score = (termFreq, matchingCount, totalCount, fieldLength, avgFieldLength, bm25params) => {
  const { k, b, d } = bm25params;
  const invDocFreq = Math.log(1 + (totalCount - matchingCount + 0.5) / (matchingCount + 0.5));
  return invDocFreq * (d + termFreq * (k + 1) / (termFreq + k * (1 - b + b * fieldLength / avgFieldLength)));
};
var termToQuerySpec = (options) => (term, i, terms) => {
  const fuzzy = typeof options.fuzzy === "function" ? options.fuzzy(term, i, terms) : options.fuzzy || false;
  const prefix = typeof options.prefix === "function" ? options.prefix(term, i, terms) : options.prefix === true;
  const termBoost = typeof options.boostTerm === "function" ? options.boostTerm(term, i, terms) : 1;
  return { term, fuzzy, prefix, termBoost };
};
var defaultOptions = {
  idField: "id",
  extractField: (document, fieldName) => document[fieldName],
  stringifyField: (fieldValue, fieldName) => fieldValue.toString(),
  tokenize: (text) => text.split(SPACE_OR_PUNCTUATION),
  processTerm: (term) => term.toLowerCase(),
  fields: undefined,
  searchOptions: undefined,
  storeFields: [],
  logger: (level, message) => {
    if (typeof (console === null || console === undefined ? undefined : console[level]) === "function")
      console[level](message);
  },
  autoVacuum: true
};
var defaultSearchOptions = {
  combineWith: OR,
  prefix: false,
  fuzzy: false,
  maxFuzzy: 6,
  boost: {},
  weights: { fuzzy: 0.45, prefix: 0.375 },
  bm25: defaultBM25params
};
var defaultAutoSuggestOptions = {
  combineWith: AND,
  prefix: (term, i, terms) => i === terms.length - 1
};
var defaultVacuumOptions = { batchSize: 1000, batchWait: 10 };
var defaultVacuumConditions = { minDirtFactor: 0.1, minDirtCount: 20 };
var defaultAutoVacuumOptions = { ...defaultVacuumOptions, ...defaultVacuumConditions };
var assignUniqueTerm = (target, term) => {
  if (!target.includes(term))
    target.push(term);
};
var assignUniqueTerms = (target, source) => {
  for (const term of source) {
    if (!target.includes(term))
      target.push(term);
  }
};
var byScore = ({ score: a }, { score: b }) => b - a;
var createMap = () => new Map;
var objectToNumericMap = (object) => {
  const map = new Map;
  for (const key of Object.keys(object)) {
    map.set(parseInt(key, 10), object[key]);
  }
  return map;
};
var objectToNumericMapAsync = async (object) => {
  const map = new Map;
  let count = 0;
  for (const key of Object.keys(object)) {
    map.set(parseInt(key, 10), object[key]);
    if (++count % 1000 === 0) {
      await wait(0);
    }
  }
  return map;
};
var wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
var SPACE_OR_PUNCTUATION = /[\n\r\p{Z}\p{P}]+/u;

// src/lib/search/tokenize.ts
var asciiTokenPattern = /[a-z0-9][a-z0-9_./:-]*/g;
var cjkCharPattern = /[\u3400-\u9fff]/;
function tokenize(input) {
  const tokens = [];
  const normalized = input.toLowerCase();
  let cjkRun = "";
  let asciiRun = "";
  for (const char of normalized) {
    if (cjkCharPattern.test(char)) {
      flushAscii(tokens, asciiRun);
      asciiRun = "";
      cjkRun += char;
      continue;
    }
    if (isAsciiTokenChar(char)) {
      flushCjk(tokens, cjkRun);
      cjkRun = "";
      asciiRun += char;
      continue;
    }
    flushCjk(tokens, cjkRun);
    flushAscii(tokens, asciiRun);
    cjkRun = "";
    asciiRun = "";
  }
  flushCjk(tokens, cjkRun);
  flushAscii(tokens, asciiRun);
  return tokens;
}
function flushCjk(tokens, value) {
  if (!value) {
    return;
  }
  for (const char of value) {
    tokens.push(char);
  }
  for (let size = 2;size <= 3; size += 1) {
    for (let index = 0;index <= value.length - size; index += 1) {
      tokens.push(value.slice(index, index + size));
    }
  }
}
function flushAscii(tokens, value) {
  if (!value) {
    return;
  }
  for (const match of value.matchAll(asciiTokenPattern)) {
    const token = match[0];
    tokens.push(token);
    for (const part of token.split(/[^a-z0-9]+/)) {
      if (part && part !== token) {
        tokens.push(part);
      }
    }
  }
}
function isAsciiTokenChar(char) {
  return /^[a-z0-9_./:-]$/.test(char);
}

// src/lib/search/searcher.ts
function createMiniSearch() {
  return new MiniSearch({
    fields: ["title", "platform_text", "headings_text", "id", "public_path", "source_url"],
    searchOptions: {
      boost: {
        title: 8,
        platform_text: 6,
        headings_text: 5,
        id: 3,
        public_path: 2,
        source_url: 1
      },
      prefix: true
    },
    tokenize
  });
}
function toMiniSearchDocuments(documents, platformAliases = {}) {
  return documents.map((document) => ({
    ...document,
    headings_text: document.headings.join(`
`),
    platform_text: [document.platform, ...platformAliases[document.platform] ?? []].join(" ")
  }));
}
async function searchDocuments(input) {
  const query = input.query.trim();
  if (!query) {
    return [];
  }
  const platformAliases = input.platformAliases ?? {};
  const documents = input.platform ? input.documents.filter((document) => document.platform === input.platform) : input.documents;
  const documentsById = new Map(documents.map((document) => [document.id, document]));
  const minisearch = input.miniSearch ? MiniSearch.loadJSON(JSON.stringify(input.miniSearch), {
    fields: ["title", "platform_text", "headings_text", "id", "public_path", "source_url"],
    searchOptions: {
      boost: {
        title: 8,
        platform_text: 6,
        headings_text: 5,
        id: 3,
        public_path: 2,
        source_url: 1
      },
      prefix: true
    },
    tokenize
  }) : createMiniSearch();
  if (!input.miniSearch) {
    minisearch.addAll(toMiniSearchDocuments(documents, platformAliases));
  }
  const limit = input.limit ?? 10;
  const candidates = minisearch.search(query).slice(0, Math.max(200, limit * 50)).map((result) => toSearchResult(result, documentsById, query, platformAliases)).filter((result) => result !== null);
  const seen = new Set(candidates.map((result) => result.id));
  for (const document of documents) {
    const score = rankDocument(query, document, platformAliases);
    if (score > 0 && !seen.has(document.id)) {
      candidates.push({ ...document, score, terms: tokenize(query) });
      seen.add(document.id);
    }
  }
  return candidates.sort((left, right) => right.score - left.score).slice(0, limit);
}
function toSearchResult(result, documentsById, query, platformAliases) {
  const document = documentsById.get(String(result.id));
  if (!document) {
    return null;
  }
  return {
    ...document,
    score: Math.log1p(result.score) * 30 + rankDocument(query, document, platformAliases),
    terms: result.terms
  };
}
function rankDocument(query, document, platformAliases = {}) {
  const terms = Array.from(new Set(tokenize(query).filter((term) => term.length > 1)));
  const compactQuery = compact(query);
  return scoreField(compactQuery, terms, document.title, 3000, 350) + scoreField(compactQuery, terms, [document.platform, ...platformAliases[document.platform] ?? []].join(" "), 1200, 260) + scoreField(compactQuery, terms, document.headings.join(" "), 1500, 220) + scoreField(compactQuery, terms, document.public_path, 800, 120) + scoreField(compactQuery, terms, document.source_url, 500, 80) + scoreField(compactQuery, terms, document.text, 250, 45);
}
function scoreField(compactQuery, terms, value, exactBoost, termBoost) {
  const field = compact(value);
  let score = 0;
  if (compactQuery && field.includes(compactQuery)) {
    score += exactBoost;
  }
  for (const term of terms) {
    score += Math.min(countOccurrences(field, compact(term)), 3) * termBoost * termWeight(term);
  }
  return score;
}
function termWeight(term) {
  if (importantTerms.some((importantTerm) => term.includes(importantTerm))) {
    return 1.5;
  }
  if (genericChineseTerms.has(term) || [...genericChineseTerms].some((genericTerm) => term.includes(genericTerm))) {
    return 0.05;
  }
  return 1;
}
var genericChineseTerms = new Set([
  "广告",
  "数据",
  "接口",
  "文档",
  "获取",
  "查询",
  "创建",
  "更新",
  "删除",
  "投放"
]);
var importantTerms = [
  "消耗",
  "花费",
  "报表",
  "流水",
  "余额",
  "转化",
  "账户",
  "账号",
  "广告主",
  "成本",
  "cost",
  "report",
  "balance",
  "fund",
  "statement",
  "access",
  "token"
];
function countOccurrences(value, term) {
  if (!term) {
    return 0;
  }
  let count = 0;
  let index = value.indexOf(term);
  while (index !== -1) {
    count += 1;
    index = value.indexOf(term, index + term.length);
  }
  return count;
}
function compact(value) {
  return value.toLowerCase().replace(/\s+/g, "");
}

// packages/oceanengine-ad-open-sdk/dist/api/client.js
var import_json_bigint = __toESM(require_json_bigint(), 1);

// packages/oceanengine-ad-open-sdk/dist/config/configuration.js
class Configuration {
  host = "api.oceanengine.com";
  scheme = "https";
  defaultHeaders = new Map;
  userAgent = "Bytedance Ads Openapi SDK";
  debug = false;
  logEnable = false;
  useLogMw = true;
  constructor(options = {}) {
    if (options.host) {
      this.host = options.host;
    }
    if (options.scheme) {
      this.scheme = options.scheme;
    }
    if (options.userAgent) {
      this.userAgent = options.userAgent;
    }
    if (options.debug != null) {
      this.debug = options.debug;
    }
    if (options.logEnable != null) {
      this.logEnable = options.logEnable;
    }
    if (options.useLogMw != null) {
      this.useLogMw = options.useLogMw;
    }
    for (const [name, value] of Object.entries(options.defaultHeaders ?? {})) {
      this.defaultHeaders.set(name, value);
    }
  }
  addDefaultHeader(name, value) {
    this.defaultHeaders.set(name, value);
  }
  getBasePath() {
    return `${this.scheme}://${this.host}`;
  }
}
function NewConfiguration() {
  return new Configuration;
}
var DefaultConfiguration = NewConfiguration();

// packages/oceanengine-ad-open-sdk/dist/api/client.js
var JSONBigStringParser = import_json_bigint.default({ storeAsString: true });
var SDK_VERSION = "1.1.87";

class ApiClient {
  basePath = DefaultConfiguration.getBasePath();
  fetchImpl;
  defaultHeaders = new Headers;
  constructor(options = {}) {
    this.fetchImpl = options.fetch ?? fetch;
    if (options.basePath) {
      this.basePath = options.basePath;
    }
    this.setUserAgent(DefaultConfiguration.userAgent);
    this.addDefaultHeader("X-Sdk-Language", "node");
    this.addDefaultHeader("X-Sdk-Version", SDK_VERSION);
    for (const [name, value] of DefaultConfiguration.defaultHeaders) {
      this.addDefaultHeader(name, value);
    }
  }
  getBasePath() {
    return this.basePath;
  }
  setBasePath(basePath) {
    this.basePath = basePath;
    return this;
  }
  setUserAgent(userAgent) {
    this.addDefaultHeader("User-Agent", userAgent);
    return this;
  }
  addDefaultHeader(name, value) {
    this.defaultHeaders.set(name, value);
    return this;
  }
  setAccessToken(token) {
    this.addDefaultHeader("Access-Token", token);
    return this;
  }
  buildUrl(path3, queryParams = []) {
    const basePath = this.basePath.endsWith("/") ? this.basePath : `${this.basePath}/`;
    const relativePath = path3.startsWith("/") ? path3.slice(1) : path3;
    const url = new URL(relativePath, basePath);
    for (const param of queryParams) {
      if (param.value == null) {
        continue;
      }
      if (Array.isArray(param.value)) {
        if (param.collectionFormat === "multi") {
          for (const value of param.value) {
            url.searchParams.append(param.name, this.parameterToString(value));
          }
          continue;
        }
        if (param.collectionFormat !== "csv") {
          throw new ApiException(`Unsupported collection format for query parameter '${param.name}'`);
        }
        url.searchParams.append(param.name, param.value.map((value) => this.parameterToString(value)).join(","));
        continue;
      }
      url.searchParams.append(param.name, this.parameterToString(param.value));
    }
    return url;
  }
  async request(options) {
    const response = await this.requestWithHttpInfo(options);
    return response.data;
  }
  async requestWithHttpInfo(options) {
    const request = this.buildRequest(options);
    const response = await this.fetchImpl(request);
    const data = await this.readResponseBody(response, options.responseType);
    if (!response.ok) {
      throw new ApiException(`HTTP ${response.status}`, {
        statusCode: response.status,
        responseBody: data,
        headers: response.headers
      });
    }
    return {
      data,
      statusCode: response.status,
      headers: response.headers
    };
  }
  buildRequest(options) {
    const headers = new Headers(this.defaultHeaders);
    for (const [name, value] of Object.entries(options.headers ?? {})) {
      headers.set(name, value);
    }
    let body;
    if (options.method !== "GET" && (options.formParams || options.files)) {
      const contentType = options.contentType ?? "application/x-www-form-urlencoded";
      if (contentType === "multipart/form-data") {
        body = this.buildMultipartFormBody(options.formParams, options.files);
      } else if (contentType === "application/x-www-form-urlencoded") {
        headers.set("Content-Type", contentType);
        const formBody = new URLSearchParams;
        for (const [name, value] of Object.entries(options.formParams ?? {})) {
          if (value != null) {
            formBody.append(name, this.parameterToString(value));
          }
        }
        body = formBody;
      } else {
        throw new ApiException(`Unsupported form content type '${contentType}'`);
      }
    } else if (options.method !== "GET" && options.body != null) {
      const contentType = options.contentType ?? "application/json";
      headers.set("Content-Type", contentType);
      body = contentType === "application/json" ? JSON.stringify(options.body) : String(options.body);
    }
    return new Request(this.buildUrl(options.path, options.queryParams), {
      method: options.method,
      headers,
      body
    });
  }
  buildMultipartFormBody(formParams = {}, files = {}) {
    const formBody = new FormData;
    for (const [name, value] of Object.entries(formParams)) {
      if (value != null) {
        formBody.append(name, this.parameterToString(value));
      }
    }
    for (const [name, value] of Object.entries(files)) {
      if (value != null) {
        formBody.append(name, value);
      }
    }
    return formBody;
  }
  async readResponseBody(response, responseType = "json") {
    if (responseType === "arrayBuffer") {
      return response.arrayBuffer();
    }
    const text = await response.text();
    if (!text) {
      return;
    }
    if (responseType === "text") {
      return text;
    }
    const contentType = response.headers.get("Content-Type") ?? "";
    if (contentType.includes("application/json")) {
      return parseJsonPreservingLargeIntegers(text);
    }
    return text;
  }
  parameterToString(value) {
    if (value instanceof Date) {
      return value.toISOString();
    }
    if (typeof value === "object" && value !== null) {
      return JSON.stringify(value);
    }
    return String(value);
  }
}

class ApiException extends Error {
  statusCode;
  responseBody;
  headers;
  constructor(message, options = {}) {
    super(message);
    this.name = "ApiException";
    this.statusCode = options.statusCode;
    this.responseBody = options.responseBody;
    this.headers = options.headers;
  }
}
function parseJsonPreservingLargeIntegers(text) {
  return JSONBigStringParser.parse(text);
}

// packages/oceanengine-ad-open-sdk/dist/api/api_oauth2_advertiser_get.js
class Oauth2AdvertiserGetApi {
  apiClient;
  constructor(apiClient = new ApiClient) {
    this.apiClient = apiClient;
  }
  getApiClient() {
    return this.apiClient;
  }
  setApiClient(apiClient) {
    this.apiClient = apiClient;
  }
  async openApiOauth2AdvertiserGetGet(request) {
    const response = await this.openApiOauth2AdvertiserGetGetWithHttpInfo(request);
    return response.data;
  }
  async openApiOauth2AdvertiserGetGetWithHttpInfo(request) {
    return this.apiClient.requestWithHttpInfo({
      method: "GET",
      path: "/open_api/oauth2/advertiser/get/",
      queryParams: [
        { name: "access_token", value: request.accessToken }
      ]
    });
  }
}

// packages/oceanengine-ad-open-sdk/dist/api/api_project_list_v30.js
class ProjectListV30Api {
  apiClient;
  constructor(apiClient = new ApiClient) {
    this.apiClient = apiClient;
  }
  getApiClient() {
    return this.apiClient;
  }
  setApiClient(apiClient) {
    this.apiClient = apiClient;
  }
  async openApiV30ProjectListGet(request) {
    const response = await this.openApiV30ProjectListGetWithHttpInfo(request);
    return response.data;
  }
  async openApiV30ProjectListGetWithHttpInfo(request) {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ProjectListGet");
    }
    return this.apiClient.requestWithHttpInfo({
      method: "GET",
      path: "/open_api/v3.0/project/list/",
      queryParams: [
        { name: "fields", value: request.fields, collectionFormat: "csv" },
        { name: "filtering", value: request.filtering },
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}

// packages/oceanengine-ad-open-sdk/dist/api/api_promotion_list_v30.js
class PromotionListV30Api {
  apiClient;
  constructor(apiClient = new ApiClient) {
    this.apiClient = apiClient;
  }
  getApiClient() {
    return this.apiClient;
  }
  setApiClient(apiClient) {
    this.apiClient = apiClient;
  }
  async openApiV30PromotionListGet(request) {
    const response = await this.openApiV30PromotionListGetWithHttpInfo(request);
    return response.data;
  }
  async openApiV30PromotionListGetWithHttpInfo(request) {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30PromotionListGet");
    }
    return this.apiClient.requestWithHttpInfo({
      method: "GET",
      path: "/open_api/v3.0/promotion/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "fields", value: request.fields, collectionFormat: "csv" },
        { name: "including_material_atrributes", value: request.includingMaterialAtrributes },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "cursor", value: request.cursor },
        { name: "count", value: request.count }
      ]
    });
  }
}

// src/commands/oceanengine/config.ts
import { chmod, mkdir as mkdir2, readFile as readFile2, rename as rename2, writeFile as writeFile2 } from "node:fs/promises";
import path3 from "node:path";
function getOceanEngineConfigInfo(options = {}) {
  const configDir = options.configDir ?? envPaths("adcli", { suffix: "" }).cache;
  return {
    configPath: path3.join(configDir, "oceanengine.json")
  };
}
async function saveOceanEngineAccessToken(token, options = {}) {
  const trimmed = token.trim();
  if (!trimmed) {
    throw new Error("missing OceanEngine token");
  }
  const configInfo = getOceanEngineConfigInfo(options);
  await mkdir2(path3.dirname(configInfo.configPath), { recursive: true });
  const tempPath = `${configInfo.configPath}.${process.pid}.tmp`;
  await writeFile2(tempPath, `${JSON.stringify({ access_token: trimmed })}
`, {
    encoding: "utf8",
    mode: 384
  });
  await rename2(tempPath, configInfo.configPath);
  await chmod(configInfo.configPath, 384);
  return configInfo;
}
async function loadOceanEngineAccessToken(options = {}) {
  const configInfo = getOceanEngineConfigInfo(options);
  let config;
  try {
    config = JSON.parse(await readFile2(configInfo.configPath, "utf8"));
  } catch (error) {
    if (isNotFoundError2(error)) {
      return;
    }
    throw error;
  }
  if (typeof config.access_token !== "string" || !config.access_token.trim()) {
    return;
  }
  return config.access_token.trim();
}
function isNotFoundError2(error) {
  return error instanceof Error && "code" in error && error.code === "ENOENT";
}

// src/commands/oceanengine/commands.ts
async function runOceanEngineCommand(argv, options = {}) {
  const args = parseOceanEngineArgs(argv);
  if (args.resource === "auth") {
    const token2 = args.action;
    if (!token2) {
      throw new Error("missing OceanEngine token");
    }
    const configInfo = await saveOceanEngineAccessToken(token2, { configDir: options.configDir });
    return {
      ok: true,
      config_path: configInfo.configPath
    };
  }
  const token = await resolveAccessToken(args, options);
  const apiClient = new ApiClient({ fetch: options.fetch }).setAccessToken(token);
  if (args.resource === "advertiser" && args.action === "list") {
    return new Oauth2AdvertiserGetApi(apiClient).openApiOauth2AdvertiserGetGet({ accessToken: token });
  }
  if (isProjectListCommand(args)) {
    const advertiserId = getRequiredId(args, "advertiser-id");
    return new ProjectListV30Api(apiClient).openApiV30ProjectListGet({
      advertiserId,
      fields: parseCsv(args.flags.fields),
      filtering: parseJsonFlag(args.flags.filtering),
      page: parseNumberFlag(args.flags.page),
      pageSize: parseNumberFlag(args.flags["page-size"])
    });
  }
  if (args.resource === "promotion" && args.action === "list") {
    const advertiserId = getRequiredId(args, "advertiser-id");
    const filtering = {
      ...parseJsonFlag(args.flags.filtering),
      ...parseProjectFilter(args.flags["project-id"])
    };
    return new PromotionListV30Api(apiClient).openApiV30PromotionListGet({
      advertiserId,
      filtering: Object.keys(filtering).length > 0 ? filtering : undefined,
      fields: parseCsv(args.flags.fields),
      includingMaterialAtrributes: args.flags["including-material-attributes"],
      page: parseNumberFlag(args.flags.page),
      pageSize: parseNumberFlag(args.flags["page-size"]),
      cursor: parseNumberFlag(args.flags.cursor),
      count: parseNumberFlag(args.flags.count)
    });
  }
  throw new Error(`unknown oceanengine command: ${[args.resource, args.action].filter(Boolean).join(" ")}`);
}
function formatOceanEngineOutput(payload, json, argv = []) {
  if (json) {
    return JSON.stringify(payload, null, 2);
  }
  if (isOceanEngineErrorPayload(payload)) {
    return JSON.stringify(payload, null, 2);
  }
  if (argv[0] === "advertiser" && argv[1] === "list") {
    return formatEntityList(payload, "advertiser_id", ["advertiser_id", "id"], ["advertiser_name", "name"]);
  }
  if (argv[0] === "project" && argv[1] === "list") {
    return formatEntityList(payload, "project_id", ["project_id", "id"], ["name", "project_name"]);
  }
  if (argv[0] === "promotion" && argv[1] === "list") {
    return formatEntityList(payload, "promotion_id", ["promotion_id", "id"], ["name", "promotion_name"]);
  }
  return JSON.stringify(payload, null, 2);
}
function formatOceanEngineError(error) {
  if (!isRecord(error) || !("responseBody" in error)) {
    return;
  }
  const responseBody = error.responseBody;
  if (responseBody == null) {
    return;
  }
  if (typeof responseBody === "string") {
    return responseBody;
  }
  return JSON.stringify(responseBody, null, 2);
}
function parseOceanEngineArgs(argv) {
  const args = {
    resource: argv[0],
    action: argv[1],
    flags: {}
  };
  for (let index = 2;index < argv.length; index += 1) {
    const value = argv[index];
    if (!value?.startsWith("--")) {
      continue;
    }
    const name = value.slice(2);
    const next = argv[index + 1];
    if (!next || next.startsWith("--")) {
      args.flags[name] = true;
      continue;
    }
    args.flags[name] = next;
    index += 1;
  }
  return args;
}
async function resolveAccessToken(args, options) {
  const explicitToken = getOptionalString(args.flags["access-token"]);
  if (explicitToken) {
    return explicitToken;
  }
  const env2 = options.env ?? process.env;
  const envToken = getOptionalString(env2.OCEANENGINE_ACCESS_TOKEN);
  if (envToken) {
    return envToken;
  }
  const savedToken = await loadOceanEngineAccessToken({ configDir: options.configDir });
  if (savedToken) {
    return savedToken;
  }
  throw new Error("missing --access-token; run adcli oceanengine auth <token> or set OCEANENGINE_ACCESS_TOKEN");
}
function getRequiredString(args, flag) {
  const value = getOptionalString(args.flags[flag]);
  if (!value) {
    throw new Error(`missing --${flag}`);
  }
  return value;
}
function getOptionalString(value) {
  if (typeof value !== "string" || !value) {
    return;
  }
  return value;
}
function getRequiredId(args, flag) {
  const value = getRequiredString(args, flag);
  if (!/^\d+$/.test(value)) {
    throw new Error(`--${flag} must be an integer id`);
  }
  return value;
}
function parseNumberFlag(value) {
  if (value == null || value === true) {
    return;
  }
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    throw new Error(`numeric flag must be a number: ${value}`);
  }
  return parsed;
}
function parseCsv(value) {
  if (typeof value !== "string" || !value) {
    return;
  }
  return value.split(",").map((item) => item.trim()).filter(Boolean);
}
function parseJsonFlag(value) {
  if (typeof value !== "string" || !value) {
    return;
  }
  return parseJsonPreservingLargeIntegers(value);
}
function parseProjectFilter(value) {
  if (typeof value !== "string" || !value) {
    return {};
  }
  if (!/^\d+$/.test(value)) {
    throw new Error("--project-id must be an integer id");
  }
  return { project_id: value };
}
function isProjectListCommand(args) {
  return args.resource === "project" && args.action === "list";
}
function formatEntityList(payload, idHeader, idKeys, nameKeys) {
  const list = getPayloadList(payload);
  const header = `${idHeader}	name`;
  if (list.length === 0) {
    return header;
  }
  return [
    header,
    ...list.map((item) => {
      const id = getRecordValue(item, idKeys);
      const name = getRecordValue(item, nameKeys);
      return `${id}	${name}`;
    })
  ].join(`
`);
}
function getPayloadList(payload) {
  if (!isRecord(payload) || !isRecord(payload.data) || !Array.isArray(payload.data.list)) {
    return [];
  }
  return payload.data.list.filter(isRecord);
}
function getRecordValue(record, keys) {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" || typeof value === "number") {
      return String(value);
    }
  }
  return "";
}
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isOceanEngineErrorPayload(payload) {
  return isRecord(payload) && typeof payload.code === "number" && payload.code !== 0;
}

// packages/tencent-ads-marketing-api-sdk/dist/api/v3/client.js
var import_json_bigint2 = __toESM(require_json_bigint(), 1);

// packages/tencent-ads-marketing-api-sdk/dist/config/v3/configuration.js
class Configuration2 {
  basePath = "https://api.e.qq.com/v3.0";
  defaultHeaders = new Map;
  userAgent = "Tencent Ads Marketing API SDK";
  constructor(options = {}) {
    if (options.basePath) {
      this.basePath = options.basePath;
    }
    if (options.userAgent) {
      this.userAgent = options.userAgent;
    }
    for (const [name, value] of Object.entries(options.defaultHeaders ?? {})) {
      this.defaultHeaders.set(name, value);
    }
  }
  addDefaultHeader(name, value) {
    this.defaultHeaders.set(name, value);
  }
}
function NewConfiguration2() {
  return new Configuration2;
}
var DefaultConfiguration2 = NewConfiguration2();

// packages/tencent-ads-marketing-api-sdk/dist/api/v3/client.js
var JSONBigStringParser2 = import_json_bigint2.default({ storeAsString: true });
var SDK_VERSION2 = "1.7.84";

class ApiClient2 {
  basePath = DefaultConfiguration2.basePath;
  fetchImpl;
  accessToken;
  userToken;
  defaultHeaders = new Headers;
  constructor(options = {}) {
    this.fetchImpl = options.fetch ?? fetch;
    if (options.basePath) {
      this.basePath = options.basePath;
    }
    this.setUserAgent("Tencent Ads Marketing API SDK");
    this.addDefaultHeader("X-Sdk-Language", "node");
    this.addDefaultHeader("X-Sdk-Version", SDK_VERSION2);
  }
  getBasePath() {
    return this.basePath;
  }
  setBasePath(basePath) {
    this.basePath = basePath;
    return this;
  }
  setUserAgent(userAgent) {
    this.addDefaultHeader("User-Agent", userAgent);
    return this;
  }
  addDefaultHeader(name, value) {
    this.defaultHeaders.set(name, value);
    return this;
  }
  setAccessToken(token) {
    this.accessToken = token;
    this.addDefaultHeader("Access-Token", token);
    return this;
  }
  setUserToken(token) {
    this.userToken = token;
    return this;
  }
  buildUrl(path4, queryParams = [], basePathOverride) {
    const requestBasePath = basePathOverride ?? this.basePath;
    const basePath = requestBasePath.endsWith("/") ? requestBasePath : `${requestBasePath}/`;
    const relativePath = path4.startsWith("/") ? path4.slice(1) : path4;
    const url = new URL(relativePath, basePath);
    for (const param of queryParams) {
      if (param.value == null) {
        continue;
      }
      if (Array.isArray(param.value)) {
        if (param.collectionFormat === "multi") {
          url.searchParams.append(param.name, JSON.stringify(param.value));
          continue;
        }
        if (param.collectionFormat !== "csv") {
          throw new ApiException2(`Unsupported collection format for query parameter '${param.name}'`);
        }
        url.searchParams.append(param.name, param.value.map((value) => this.parameterToString(value)).join(","));
        continue;
      }
      url.searchParams.append(param.name, this.parameterToString(param.value));
    }
    this.applyAuthQueryParams(url);
    return url;
  }
  async request(options) {
    const response = await this.requestWithHttpInfo(options);
    return response.data;
  }
  async requestWithHttpInfo(options) {
    const request = this.buildRequest(options);
    const response = await this.fetchImpl(request);
    const data = await this.readResponseBody(response, options.responseType);
    if (!response.ok) {
      throw new ApiException2(`HTTP ${response.status}`, {
        statusCode: response.status,
        responseBody: data,
        headers: response.headers
      });
    }
    return {
      data,
      statusCode: response.status,
      headers: response.headers
    };
  }
  buildRequest(options) {
    const headers = new Headers(this.defaultHeaders);
    for (const [name, value] of Object.entries(options.headers ?? {})) {
      headers.set(name, value);
    }
    let body;
    if (options.method !== "GET" && (options.formParams || options.files)) {
      const contentType = options.contentType ?? "application/x-www-form-urlencoded";
      if (contentType === "multipart/form-data") {
        body = this.buildMultipartFormBody(options.formParams, options.files);
      } else if (contentType === "application/x-www-form-urlencoded") {
        headers.set("Content-Type", contentType);
        const formBody = new URLSearchParams;
        for (const [name, value] of Object.entries(options.formParams ?? {})) {
          if (value != null) {
            formBody.append(name, this.parameterToString(value));
          }
        }
        body = formBody;
      } else {
        throw new ApiException2(`Unsupported form content type '${contentType}'`);
      }
    } else if (options.method !== "GET" && options.body != null) {
      const contentType = options.contentType ?? "application/json";
      headers.set("Content-Type", contentType);
      body = contentType === "application/json" ? JSON.stringify(options.body) : String(options.body);
    }
    return new Request(this.buildUrl(options.path, options.queryParams, options.basePath), {
      method: options.method,
      headers,
      body
    });
  }
  buildMultipartFormBody(formParams = {}, files = {}) {
    const formBody = new FormData;
    for (const [name, value] of Object.entries(formParams)) {
      if (value != null) {
        formBody.append(name, this.parameterToString(value));
      }
    }
    for (const [name, value] of Object.entries(files)) {
      if (value != null) {
        formBody.append(name, value);
      }
    }
    return formBody;
  }
  async readResponseBody(response, responseType = "json") {
    if (responseType === "arrayBuffer") {
      return response.arrayBuffer();
    }
    const text = await response.text();
    if (!text) {
      return;
    }
    if (responseType === "text") {
      return text;
    }
    const contentType = response.headers.get("Content-Type") ?? "";
    if (contentType.includes("application/json")) {
      return parseJsonPreservingLargeIntegers2(text);
    }
    return text;
  }
  parameterToString(value) {
    if (value instanceof Date) {
      return value.toISOString();
    }
    if (typeof value === "object" && value !== null) {
      return JSON.stringify(value);
    }
    return String(value);
  }
  applyAuthQueryParams(url) {
    if (!this.accessToken) {
      return;
    }
    url.searchParams.set("access_token", this.accessToken);
    url.searchParams.set("timestamp", Math.floor(Date.now() / 1000).toString());
    url.searchParams.set("nonce", createNonce());
    if (this.userToken) {
      url.searchParams.set("user_token", this.userToken);
    }
  }
}

class ApiException2 extends Error {
  statusCode;
  responseBody;
  headers;
  constructor(message, options = {}) {
    super(message);
    this.name = "ApiException";
    this.statusCode = options.statusCode;
    this.responseBody = options.responseBody;
    this.headers = options.headers;
  }
}
function parseJsonPreservingLargeIntegers2(text) {
  return JSONBigStringParser2.parse(text);
}
function createNonce() {
  return crypto.randomUUID().replaceAll("-", "").slice(0, 20);
}

// packages/tencent-ads-marketing-api-sdk/dist/api/v3/api_adgroups.js
class AdgroupsApi {
  apiClient;
  constructor(apiClient = new ApiClient2) {
    this.apiClient = apiClient;
  }
  getApiClient() {
    return this.apiClient;
  }
  setApiClient(apiClient) {
    this.apiClient = apiClient;
  }
  async add(request) {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }
  async addWithHttpInfo(request) {
    if (request.data == null) {
      throw new ApiException2("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo({
      method: "POST",
      basePath: DefaultConfiguration2.basePath,
      path: "/adgroups/add",
      queryParams: [],
      contentType: "application/json",
      body: request.data
    });
  }
  async delete(request) {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }
  async deleteWithHttpInfo(request) {
    if (request.data == null) {
      throw new ApiException2("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo({
      method: "POST",
      basePath: DefaultConfiguration2.basePath,
      path: "/adgroups/delete",
      queryParams: [],
      contentType: "application/json",
      body: request.data
    });
  }
  async get(request) {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }
  async getWithHttpInfo(request) {
    if (request.accountId == null) {
      throw new ApiException2("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo({
      method: "GET",
      basePath: DefaultConfiguration2.basePath,
      path: "/adgroups/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "is_deleted", value: request.isDeleted },
        { name: "fields", value: request.fields, collectionFormat: "multi" },
        { name: "pagination_mode", value: request.paginationMode },
        { name: "cursor", value: request.cursor }
      ],
      contentType: "text/plain"
    });
  }
  async update(request) {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }
  async updateWithHttpInfo(request) {
    if (request.data == null) {
      throw new ApiException2("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo({
      method: "POST",
      basePath: DefaultConfiguration2.basePath,
      path: "/adgroups/update",
      queryParams: [],
      contentType: "application/json",
      body: request.data
    });
  }
  async updateBidAmount(request) {
    const response = await this.updateBidAmountWithHttpInfo(request);
    return response.data;
  }
  async updateBidAmountWithHttpInfo(request) {
    if (request.data == null) {
      throw new ApiException2("Missing the required parameter 'data' when calling updateBidAmount");
    }
    return this.apiClient.requestWithHttpInfo({
      method: "POST",
      basePath: DefaultConfiguration2.basePath,
      path: "/adgroups/update_bid_amount",
      queryParams: [],
      contentType: "application/json",
      body: request.data
    });
  }
  async updateConfiguredStatus(request) {
    const response = await this.updateConfiguredStatusWithHttpInfo(request);
    return response.data;
  }
  async updateConfiguredStatusWithHttpInfo(request) {
    if (request.data == null) {
      throw new ApiException2("Missing the required parameter 'data' when calling updateConfiguredStatus");
    }
    return this.apiClient.requestWithHttpInfo({
      method: "POST",
      basePath: DefaultConfiguration2.basePath,
      path: "/adgroups/update_configured_status",
      queryParams: [],
      contentType: "application/json",
      body: request.data
    });
  }
  async updateDailyBudget(request) {
    const response = await this.updateDailyBudgetWithHttpInfo(request);
    return response.data;
  }
  async updateDailyBudgetWithHttpInfo(request) {
    if (request.data == null) {
      throw new ApiException2("Missing the required parameter 'data' when calling updateDailyBudget");
    }
    return this.apiClient.requestWithHttpInfo({
      method: "POST",
      basePath: DefaultConfiguration2.basePath,
      path: "/adgroups/update_daily_budget",
      queryParams: [],
      contentType: "application/json",
      body: request.data
    });
  }
  async updateDatetime(request) {
    const response = await this.updateDatetimeWithHttpInfo(request);
    return response.data;
  }
  async updateDatetimeWithHttpInfo(request) {
    if (request.data == null) {
      throw new ApiException2("Missing the required parameter 'data' when calling updateDatetime");
    }
    return this.apiClient.requestWithHttpInfo({
      method: "POST",
      basePath: DefaultConfiguration2.basePath,
      path: "/adgroups/update_datetime",
      queryParams: [],
      contentType: "application/json",
      body: request.data
    });
  }
}

// packages/tencent-ads-marketing-api-sdk/dist/api/v3/api_advertiser.js
class AdvertiserApi {
  apiClient;
  constructor(apiClient = new ApiClient2) {
    this.apiClient = apiClient;
  }
  getApiClient() {
    return this.apiClient;
  }
  setApiClient(apiClient) {
    this.apiClient = apiClient;
  }
  async add(request) {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }
  async addWithHttpInfo(request) {
    if (request.data == null) {
      throw new ApiException2("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo({
      method: "POST",
      basePath: DefaultConfiguration2.basePath,
      path: "/advertiser/add",
      queryParams: [],
      contentType: "application/json",
      body: request.data
    });
  }
  async get(request) {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }
  async getWithHttpInfo(request) {
    if (request.fields == null) {
      throw new ApiException2("Missing the required parameter 'fields' when calling get");
    }
    if (request.paginationMode == null) {
      throw new ApiException2("Missing the required parameter 'paginationMode' when calling get");
    }
    if (request.pageSize == null) {
      throw new ApiException2("Missing the required parameter 'pageSize' when calling get");
    }
    return this.apiClient.requestWithHttpInfo({
      method: "GET",
      basePath: DefaultConfiguration2.basePath,
      path: "/advertiser/get",
      queryParams: [
        { name: "agency_id", value: request.agencyId },
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" },
        { name: "pagination_mode", value: request.paginationMode },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "cursor", value: request.cursor }
      ],
      contentType: "text/plain"
    });
  }
  async update(request) {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }
  async updateWithHttpInfo(request) {
    if (request.data == null) {
      throw new ApiException2("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo({
      method: "POST",
      basePath: DefaultConfiguration2.basePath,
      path: "/advertiser/update",
      queryParams: [],
      contentType: "application/json",
      body: request.data
    });
  }
  async updateDailyBudget(request) {
    const response = await this.updateDailyBudgetWithHttpInfo(request);
    return response.data;
  }
  async updateDailyBudgetWithHttpInfo(request) {
    if (request.data == null) {
      throw new ApiException2("Missing the required parameter 'data' when calling updateDailyBudget");
    }
    return this.apiClient.requestWithHttpInfo({
      method: "POST",
      basePath: DefaultConfiguration2.basePath,
      path: "/advertiser/update_daily_budget",
      queryParams: [],
      contentType: "application/json",
      body: request.data
    });
  }
}

// packages/tencent-ads-marketing-api-sdk/dist/api/v3/api_dynamic_creatives.js
class DynamicCreativesApi {
  apiClient;
  constructor(apiClient = new ApiClient2) {
    this.apiClient = apiClient;
  }
  getApiClient() {
    return this.apiClient;
  }
  setApiClient(apiClient) {
    this.apiClient = apiClient;
  }
  async add(request) {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }
  async addWithHttpInfo(request) {
    if (request.data == null) {
      throw new ApiException2("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo({
      method: "POST",
      basePath: DefaultConfiguration2.basePath,
      path: "/dynamic_creatives/add",
      queryParams: [],
      contentType: "application/json",
      body: request.data
    });
  }
  async delete(request) {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }
  async deleteWithHttpInfo(request) {
    if (request.data == null) {
      throw new ApiException2("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo({
      method: "POST",
      basePath: DefaultConfiguration2.basePath,
      path: "/dynamic_creatives/delete",
      queryParams: [],
      contentType: "application/json",
      body: request.data
    });
  }
  async get(request) {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }
  async getWithHttpInfo(request) {
    if (request.accountId == null) {
      throw new ApiException2("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo({
      method: "GET",
      basePath: DefaultConfiguration2.basePath,
      path: "/dynamic_creatives/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" },
        { name: "is_deleted", value: request.isDeleted },
        { name: "pagination_mode", value: request.paginationMode },
        { name: "cursor", value: request.cursor }
      ],
      contentType: "text/plain"
    });
  }
  async update(request) {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }
  async updateWithHttpInfo(request) {
    if (request.data == null) {
      throw new ApiException2("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo({
      method: "POST",
      basePath: DefaultConfiguration2.basePath,
      path: "/dynamic_creatives/update",
      queryParams: [],
      contentType: "application/json",
      body: request.data
    });
  }
}

// packages/tencent-ads-marketing-api-sdk/dist/api/v3/api_organization_account_relation.js
class OrganizationAccountRelationApi {
  apiClient;
  constructor(apiClient = new ApiClient2) {
    this.apiClient = apiClient;
  }
  getApiClient() {
    return this.apiClient;
  }
  setApiClient(apiClient) {
    this.apiClient = apiClient;
  }
  async get(request) {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }
  async getWithHttpInfo(request) {
    if (request.paginationMode == null) {
      throw new ApiException2("Missing the required parameter 'paginationMode' when calling get");
    }
    return this.apiClient.requestWithHttpInfo({
      method: "GET",
      basePath: DefaultConfiguration2.basePath,
      path: "/organization_account_relation/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "advertiser_type", value: request.advertiserType },
        { name: "business_unit_id", value: request.businessUnitId },
        { name: "pagination_mode", value: request.paginationMode },
        { name: "cursor", value: request.cursor },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }
}

// src/commands/tencent-ads/config.ts
import { chmod as chmod2, mkdir as mkdir3, readFile as readFile3, rename as rename3, writeFile as writeFile3 } from "node:fs/promises";
import path4 from "node:path";
function getTencentAdsConfigInfo(options = {}) {
  const configDir = options.configDir ?? envPaths("adcli", { suffix: "" }).cache;
  return {
    configPath: path4.join(configDir, "tencent-ads.json")
  };
}
async function saveTencentAdsAccessToken(token, options = {}) {
  const trimmed = token.trim();
  if (!trimmed) {
    throw new Error("missing Tencent Ads token");
  }
  const configInfo = getTencentAdsConfigInfo(options);
  await mkdir3(path4.dirname(configInfo.configPath), { recursive: true });
  const tempPath = `${configInfo.configPath}.${process.pid}.tmp`;
  await writeFile3(tempPath, `${JSON.stringify({ access_token: trimmed })}
`, {
    encoding: "utf8",
    mode: 384
  });
  await rename3(tempPath, configInfo.configPath);
  await chmod2(configInfo.configPath, 384);
  return configInfo;
}
async function loadTencentAdsAccessToken(options = {}) {
  const configInfo = getTencentAdsConfigInfo(options);
  let config;
  try {
    config = JSON.parse(await readFile3(configInfo.configPath, "utf8"));
  } catch (error) {
    if (isNotFoundError3(error)) {
      return;
    }
    throw error;
  }
  if (typeof config.access_token !== "string" || !config.access_token.trim()) {
    return;
  }
  return config.access_token.trim();
}
function isNotFoundError3(error) {
  return error instanceof Error && "code" in error && error.code === "ENOENT";
}

// src/commands/tencent-ads/commands.ts
async function runTencentAdsCommand(argv, options = {}) {
  const args = parseTencentAdsArgs(argv);
  if (args.resource === "auth") {
    const token2 = args.action;
    if (!token2) {
      throw new Error("missing Tencent Ads token");
    }
    const configInfo = await saveTencentAdsAccessToken(token2, { configDir: options.configDir });
    return {
      ok: true,
      config_path: configInfo.configPath
    };
  }
  const token = await resolveAccessToken2(args, options);
  const apiClient = new ApiClient2({ fetch: options.fetch }).setAccessToken(token);
  if (args.resource === "advertiser" && args.action === "list") {
    return new OrganizationAccountRelationApi(apiClient).get({
      accountId: getOptionalId(args, "account-id") ?? getOptionalId(args, "advertiser-id"),
      fields: parseCsv2(args.flags.fields) ?? ["account_id", "corporation_name", "is_bid", "is_mp", "is_adx", "comment_list"],
      page: parseNumberFlag2(args.flags.page) ?? 1,
      pageSize: parseNumberFlag2(args.flags["page-size"]) ?? 100,
      paginationMode: getOptionalString2(args.flags["pagination-mode"]) ?? "PAGINATION_MODE_NORMAL"
    });
  }
  if (args.resource === "advertiser" && args.action === "get") {
    return new AdvertiserApi(apiClient).get({
      accountId: getRequiredAccountId(args),
      fields: parseCsv2(args.flags.fields) ?? ["account_id", "account_name"],
      filtering: parseJsonFlag2(args.flags.filtering),
      page: parseNumberFlag2(args.flags.page),
      pageSize: parseNumberFlag2(args.flags["page-size"]) ?? 20,
      paginationMode: getOptionalString2(args.flags["pagination-mode"]) ?? "PAGINATION_MODE_NORMAL"
    });
  }
  if (args.resource === "adgroup" && args.action === "list") {
    return new AdgroupsApi(apiClient).get({
      accountId: getRequiredAccountId(args),
      filtering: parseJsonFlag2(args.flags.filtering),
      fields: parseCsv2(args.flags.fields),
      page: parseNumberFlag2(args.flags.page),
      pageSize: parseNumberFlag2(args.flags["page-size"])
    });
  }
  if (args.resource === "dynamic-creative" && args.action === "list") {
    return new DynamicCreativesApi(apiClient).get({
      accountId: getRequiredAccountId(args),
      filtering: parseJsonFlag2(args.flags.filtering),
      fields: parseCsv2(args.flags.fields),
      page: parseNumberFlag2(args.flags.page),
      pageSize: parseNumberFlag2(args.flags["page-size"])
    });
  }
  throw new Error(`unknown tencent-ads command: ${[args.resource, args.action].filter(Boolean).join(" ")}`);
}
function formatTencentAdsOutput(payload, json, argv = []) {
  if (json) {
    return JSON.stringify(payload, null, 2);
  }
  if (isTencentAdsErrorPayload(payload)) {
    return JSON.stringify(payload, null, 2);
  }
  if (argv[0] === "advertiser" && argv[1] === "list") {
    return formatEntityList2(payload, "account_id", ["account_id", "id"], ["account_name", "corporation_name", "name"]);
  }
  if (argv[0] === "advertiser" && argv[1] === "get") {
    return formatEntityList2(payload, "account_id", ["account_id", "id"], ["account_name", "corporation_name", "name"]);
  }
  if (argv[0] === "adgroup" && argv[1] === "list") {
    return formatEntityList2(payload, "adgroup_id", ["adgroup_id", "id"], ["adgroup_name", "name"]);
  }
  if (argv[0] === "dynamic-creative" && argv[1] === "list") {
    return formatEntityList2(payload, "dynamic_creative_id", ["dynamic_creative_id", "id"], ["dynamic_creative_name", "name"]);
  }
  return JSON.stringify(payload, null, 2);
}
function formatTencentAdsError(error) {
  if (!isRecord2(error) || !("responseBody" in error)) {
    return;
  }
  const responseBody = error.responseBody;
  if (responseBody == null) {
    return;
  }
  if (typeof responseBody === "string") {
    return responseBody;
  }
  return JSON.stringify(responseBody, null, 2);
}
function parseTencentAdsArgs(argv) {
  const args = {
    resource: argv[0],
    action: argv[1],
    flags: {}
  };
  for (let index = 2;index < argv.length; index += 1) {
    const value = argv[index];
    if (!value?.startsWith("--")) {
      continue;
    }
    const name = value.slice(2);
    const next = argv[index + 1];
    if (!next || next.startsWith("--")) {
      args.flags[name] = true;
      continue;
    }
    args.flags[name] = next;
    index += 1;
  }
  return args;
}
async function resolveAccessToken2(args, options) {
  const explicitToken = getOptionalString2(args.flags["access-token"]);
  if (explicitToken) {
    return explicitToken;
  }
  const env2 = options.env ?? process.env;
  const envToken = getOptionalString2(env2.TENCENT_ADS_ACCESS_TOKEN);
  if (envToken) {
    return envToken;
  }
  const savedToken = await loadTencentAdsAccessToken({ configDir: options.configDir });
  if (savedToken) {
    return savedToken;
  }
  throw new Error("missing --access-token; run adcli tencent-ads auth <token> or set TENCENT_ADS_ACCESS_TOKEN");
}
function getRequiredAccountId(args) {
  return getRequiredId2(args, "account-id", "advertiser-id");
}
function getRequiredString2(args, flag, alias) {
  const value = getOptionalString2(args.flags[flag]) ?? (alias ? getOptionalString2(args.flags[alias]) : undefined);
  if (!value) {
    throw new Error(alias ? `missing --${flag} or --${alias}` : `missing --${flag}`);
  }
  return value;
}
function getOptionalString2(value) {
  if (typeof value !== "string" || !value) {
    return;
  }
  return value;
}
function getOptionalId(args, flag) {
  const value = getOptionalString2(args.flags[flag]);
  if (!value) {
    return;
  }
  if (!/^\d+$/.test(value)) {
    throw new Error(`--${flag} must be an integer id`);
  }
  return value;
}
function getRequiredId2(args, flag, alias) {
  const value = getRequiredString2(args, flag, alias);
  if (!/^\d+$/.test(value)) {
    throw new Error(alias ? `--${flag} or --${alias} must be an integer id` : `--${flag} must be an integer id`);
  }
  return value;
}
function parseNumberFlag2(value) {
  if (value == null || value === true) {
    return;
  }
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    throw new Error(`numeric flag must be a number: ${value}`);
  }
  return parsed;
}
function parseCsv2(value) {
  if (typeof value !== "string" || !value) {
    return;
  }
  return value.split(",").map((item) => item.trim()).filter(Boolean);
}
function parseJsonFlag2(value) {
  if (typeof value !== "string" || !value) {
    return;
  }
  return parseJsonPreservingLargeIntegers2(value);
}
function formatEntityList2(payload, idHeader, idKeys, nameKeys) {
  const list = getPayloadList2(payload);
  const header = `${idHeader}	name`;
  if (list.length === 0) {
    return header;
  }
  return [
    header,
    ...list.map((item) => {
      const id = getRecordValue2(item, idKeys);
      const name = getRecordValue2(item, nameKeys);
      return `${id}	${name}`;
    })
  ].join(`
`);
}
function getPayloadList2(payload) {
  if (!isRecord2(payload) || !isRecord2(payload.data) || !Array.isArray(payload.data.list)) {
    return [];
  }
  return payload.data.list.filter(isRecord2);
}
function getRecordValue2(record, keys) {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" || typeof value === "number") {
      return String(value);
    }
  }
  return "";
}
function isRecord2(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isTencentAdsErrorPayload(payload) {
  return isRecord2(payload) && typeof payload.code === "number" && payload.code !== 0;
}

// src/cli.ts
var help = `adcli

Usage:
  adcli list [platform] [--json]
  adcli doc <command>
  adcli oceanengine <resource> <command>
  adcli tencent-ads <resource> <command>
  adcli prompt
  adcli llms

Commands:
  list          List supported advertising platforms and capabilities
  doc           Search and sync published advertising API docs
  oceanengine   Call OceanEngine APIs through the generated Node.js SDK
  tencent-ads   Call Tencent Ads APIs through the generated Node.js SDK
  prompt        Print an AI/Agent instruction prompt for using the docs pack
  llms          Print LLM-readable docs pack entry URLs
`;
var docHelp = `adcli doc

Usage:
  adcli doc search <query> [--platform tencent_ads] [--limit 10] [--json] [--refresh]
  adcli doc sync

Commands:
  search    Search published advertising API docs
  sync      Download and cache the latest search index
`;
var oceanEngineHelp = `adcli oceanengine

Usage:
  adcli oceanengine auth <token>
  adcli oceanengine advertiser list [--access-token token] [--json]
  adcli oceanengine project list --advertiser-id 123 [--access-token token] [--page 1] [--page-size 20] [--filtering '{"status":"PROJECT_STATUS_ALL"}'] [--json]
  adcli oceanengine promotion list --advertiser-id 123 [--access-token token] [--project-id 456] [--fields promotion_id,name,status_first] [--filtering '{}'] [--json]

Environment:
  Token precedence is --access-token, OCEANENGINE_ACCESS_TOKEN, then the saved token.
  Project list does not include deleted projects by default; use filtering status PROJECT_STATUS_ALL for all projects.
`;
var tencentAdsHelp = `adcli tencent-ads

Usage:
  adcli tencent-ads auth <token>
  adcli tencent-ads advertiser list [--access-token token] [--page 1] [--page-size 100] [--json]
  adcli tencent-ads advertiser get --account-id 123 [--access-token token] [--fields account_id,account_name] [--json]
  adcli tencent-ads adgroup list --account-id 123 [--access-token token] [--page 1] [--page-size 20] [--fields adgroup_id,adgroup_name] [--filtering '{}'] [--json]
  adcli tencent-ads dynamic-creative list --account-id 123 [--access-token token] [--fields dynamic_creative_id,dynamic_creative_name] [--filtering '{}'] [--json]

Environment:
  Token precedence is --access-token, TENCENT_ADS_ACCESS_TOKEN, then the saved token.
  --advertiser-id is accepted as an alias for --account-id.
  Tencent Ads command names follow v3 API resources; use --filtering for resource filters.
`;
async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.domain || args.domain === "help" || args.domain === "--help" || args.domain === "-h") {
    console.log(help.trim());
    return;
  }
  if (args.domain === "list") {
    const index2 = await loadSearchIndex({ index: args.index, refresh: args.refresh });
    printDocList(index2, args);
    return;
  }
  if (args.domain === "doc" && (!args.command || args.command === "--help" || args.command === "-h" || args.command === "help")) {
    console.log(docHelp.trim());
    return;
  }
  if (args.domain === "doc" && args.command === "sync") {
    const index2 = await refreshSearchIndex();
    const cache = getSearchIndexCacheInfo();
    console.log(`Synced ${index2.documents.length} docs to ${cache.cachePath}`);
    return;
  }
  if (args.domain === "doc" && args.command === "list") {
    const index2 = await loadSearchIndex({ index: args.index, refresh: args.refresh });
    printDocList(index2, args);
    return;
  }
  if (args.domain === "prompt") {
    printLlms({ ...args, domain: "llms", command: "prompt" });
    return;
  }
  if (args.domain === "llms") {
    printLlms(args);
    return;
  }
  if (args.domain === "oceanengine") {
    if (!args.command || args.command === "--help" || args.command === "-h" || args.command === "help") {
      console.log(oceanEngineHelp.trim());
      return;
    }
    const oceanEngineArgv = [args.command, ...args.query];
    const payload = await runOceanEngineCommand(oceanEngineArgv);
    console.log(formatOceanEngineOutput(payload, args.json, oceanEngineArgv));
    return;
  }
  if (args.domain === "tencent-ads") {
    if (!args.command || args.command === "--help" || args.command === "-h" || args.command === "help") {
      console.log(tencentAdsHelp.trim());
      return;
    }
    const tencentAdsArgv = [args.command, ...args.query];
    const payload = await runTencentAdsCommand(tencentAdsArgv);
    console.log(formatTencentAdsOutput(payload, args.json, tencentAdsArgv));
    return;
  }
  if (args.domain !== "doc" || args.command !== "search") {
    throw new Error(`unknown command: ${[args.domain, args.command].filter(Boolean).join(" ")}`);
  }
  const query = args.query.join(" ").trim();
  if (!query) {
    throw new Error("missing search query");
  }
  const index = await loadSearchIndex({ index: args.index, refresh: args.refresh });
  const results = await searchDocuments({
    query,
    documents: index.documents,
    miniSearch: index.mini_search,
    platformAliases: index.platform_aliases,
    platform: args.platform,
    limit: args.limit
  });
  if (args.json) {
    console.log(JSON.stringify({ query, results }, null, 2));
    return;
  }
  if (results.length === 0) {
    console.log("No matching docs found.");
    return;
  }
  for (const [index2, result] of results.entries()) {
    console.log(`${index2 + 1}. [${result.platform}] ${result.title}`);
    console.log(`   Doc: ${result.public_path}`);
    if (result.source_url) {
      console.log(`   Source: ${result.source_url}`);
    }
    console.log(`   Score: ${result.score.toFixed(2)}`);
  }
}
function printDocList(index, args) {
  const platformFilter = args.command;
  const platforms = [...new Set(index.documents.map((document) => document.platform))].sort().filter((platform) => !platformFilter || platform === platformFilter).map((platform) => {
    const documents = index.documents.filter((document) => document.platform === platform);
    return {
      platform,
      capabilities: [
        {
          name: "doc",
          documents: documents.length,
          index_url: `https://adcli.jiangzhx.com/${platform}/index.md`,
          commands: [
            `adcli doc search <query> --platform ${platform}`
          ]
        }
      ]
    };
  });
  if (platformFilter && platforms.length === 0) {
    throw new Error(`unsupported platform: ${platformFilter}`);
  }
  if (args.json) {
    console.log(JSON.stringify({ platforms }, null, 2));
    return;
  }
  for (const item of platforms) {
    console.log(item.platform);
    for (const capability of item.capabilities) {
      console.log(`  ${capability.name}`);
      for (const command of capability.commands) {
        console.log(`    ${command}`);
      }
      console.log(`    docs: ${capability.documents}`);
      console.log(`    index: ${capability.index_url}`);
    }
  }
}
function printLlms(args) {
  const payload = {
    name: "AdCLI Docs Pack",
    base_url: "https://adcli.jiangzhx.com",
    llms_txt: "https://adcli.jiangzhx.com/llms.txt",
    llms_full_txt: "https://adcli.jiangzhx.com/llms-full.txt",
    search_index: "https://adcli.jiangzhx.com/search-index.json",
    platform_indexes: [
      "https://adcli.jiangzhx.com/kuaishou/index.md",
      "https://adcli.jiangzhx.com/oceanengine/index.md",
      "https://adcli.jiangzhx.com/tencent_ads/index.md"
    ]
  };
  if (args.json) {
    console.log(JSON.stringify(payload, null, 2));
    return;
  }
  if (args.command === "prompt") {
    console.log([
      "Use the AdCLI advertising API docs pack when answering advertising platform API questions.",
      "",
      `Start with: ${payload.llms_txt}`,
      `Use full index when needed: ${payload.llms_full_txt}`,
      `Use search index for local/tool search: ${payload.search_index}`,
      "",
      "Rules:",
      "- Prefer the Markdown docs from this docs pack over memory.",
      "- Cite the specific platform document URL or source URL used.",
      "- If a query names a platform, keep that platform as the primary context but do not ignore relevant cross-platform differences.",
      "- For API testing or implementation, identify method, path, auth requirement, parameters, response fields, and known limits.",
      "- If the docs are incomplete or ambiguous, say what is missing instead of guessing."
    ].join(`
`));
    return;
  }
  console.log([
    "AdCLI Docs Pack",
    "",
    `llms.txt:       ${payload.llms_txt}`,
    `llms-full.txt:  ${payload.llms_full_txt}`,
    `search index:   ${payload.search_index}`,
    "",
    "Platform indexes:",
    ...payload.platform_indexes.map((url) => `- ${url}`),
    "",
    "Prompt for AI/Agent:",
    "  adcli llms prompt"
  ].join(`
`));
}
function parseArgs(argv) {
  const args = {
    domain: argv[0],
    command: argv[1],
    query: [],
    index: process.env.ADCLI_SEARCH_INDEX,
    limit: 10,
    json: false,
    refresh: false
  };
  for (let index = 2;index < argv.length; index += 1) {
    const value = argv[index];
    if (value === "--json") {
      args.json = true;
      continue;
    }
    if (value === "--index") {
      args.index = argv[index + 1] ?? "";
      index += 1;
      continue;
    }
    if (value === "--refresh") {
      args.refresh = true;
      continue;
    }
    if (value === "--limit") {
      args.limit = Number.parseInt(argv[index + 1] ?? "", 10);
      index += 1;
      continue;
    }
    if (value === "--platform") {
      args.platform = argv[index + 1];
      index += 1;
      continue;
    }
    args.query.push(value ?? "");
  }
  if (!Number.isInteger(args.limit) || args.limit < 1) {
    throw new Error("--limit must be a positive integer");
  }
  return args;
}
main().catch((error) => {
  console.error(formatTencentAdsError(error) ?? formatOceanEngineError(error) ?? (error instanceof Error ? error.message : error));
  process.exit(1);
});
