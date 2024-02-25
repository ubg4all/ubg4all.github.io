// Copyright 2011 Google Inc. All Rights Reserved.
(function () {
  var l,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ba =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    ca = function (a) {
      a = [
        "object" == typeof globalThis && globalThis,
        a,
        "object" == typeof window && window,
        "object" == typeof self && self,
        "object" == typeof global && global,
      ];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }
      throw Error("Cannot find global object");
    },
    da = ca(this),
    p = function (a, b) {
      if (b)
        a: {
          var c = da;
          a = a.split(".");
          for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e];
          }
          a = a[a.length - 1];
          d = c[a];
          b = b(d);
          b != d &&
            null != b &&
            ba(c, a, { configurable: !0, writable: !0, value: b });
        }
    };
  p("Symbol", function (a) {
    if (a) return a;
    var b = function (f, g) {
      this.g = f;
      ba(this, "description", { configurable: !0, writable: !0, value: g });
    };
    b.prototype.toString = function () {
      return this.g;
    };
    var c = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
      d = 0,
      e = function (f) {
        if (this instanceof e)
          throw new TypeError("Symbol is not a constructor");
        return new b(c + (f || "") + "_" + d++, f);
      };
    return e;
  });
  p("Symbol.iterator", function (a) {
    if (a) return a;
    a = Symbol("Symbol.iterator");
    for (
      var b =
          "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
            " "
          ),
        c = 0;
      c < b.length;
      c++
    ) {
      var d = da[b[c]];
      "function" === typeof d &&
        "function" != typeof d.prototype[a] &&
        ba(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return ea(aa(this));
          },
        });
    }
    return a;
  });
  var ea = function (a) {
      a = { next: a };
      a[Symbol.iterator] = function () {
        return this;
      };
      return a;
    },
    fa = function (a) {
      return (a.raw = a);
    },
    t = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return { next: aa(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ha = function (a) {
      if (!(a instanceof Array)) {
        a = t(a);
        for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
        a = c;
      }
      return a;
    },
    ia = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    ka =
      "function" == typeof Object.assign
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d) for (var e in d) ia(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  p("Object.assign", function (a) {
    return a || ka;
  });
  var ma =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    oa = (function () {
      function a() {
        function c() {}
        new c();
        Reflect.construct(c, [], function () {});
        return new c() instanceof c;
      }
      if ("undefined" != typeof Reflect && Reflect.construct) {
        if (a()) return Reflect.construct;
        var b = Reflect.construct;
        return function (c, d, e) {
          c = b(c, d);
          e && Reflect.setPrototypeOf(c, e.prototype);
          return c;
        };
      }
      return function (c, d, e) {
        void 0 === e && (e = c);
        e = ma(e.prototype || Object.prototype);
        return Function.prototype.apply.call(c, e, d) || e;
      };
    })(),
    pa;
  if ("function" == typeof Object.setPrototypeOf) pa = Object.setPrototypeOf;
  else {
    var qa;
    a: {
      var ra = { a: !0 },
        sa = {};
      try {
        sa.__proto__ = ra;
        qa = sa.a;
        break a;
      } catch (a) {}
      qa = !1;
    }
    pa = qa
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ta = pa,
    u = function (a, b) {
      a.prototype = ma(b.prototype);
      a.prototype.constructor = a;
      if (ta) ta(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Da = b.prototype;
    },
    ua = function () {
      this.A = !1;
      this.o = null;
      this.h = void 0;
      this.g = 1;
      this.I = this.j = 0;
      this.l = null;
    },
    va = function (a) {
      if (a.A) throw new TypeError("Generator is already running");
      a.A = !0;
    };
  ua.prototype.B = function (a) {
    this.h = a;
  };
  var wa = function (a, b) {
    a.l = { fe: b, Pf: !0 };
    a.g = a.j || a.I;
  };
  ua.prototype.return = function (a) {
    this.l = { return: a };
    this.g = this.I;
  };
  var xa = function (a, b, c) {
      a.g = c;
      return { value: b };
    },
    ya = function (a) {
      a.g = 0;
      a.j = 0;
    },
    za = function (a) {
      a.j = 0;
      var b = a.l.fe;
      a.l = null;
      return b;
    },
    Aa = function (a) {
      this.g = new ua();
      this.h = a;
    },
    Ea = function (a, b) {
      va(a.g);
      var c = a.g.o;
      if (c)
        return Ba(
          a,
          "return" in c
            ? c["return"]
            : function (d) {
                return { value: d, done: !0 };
              },
          b,
          a.g.return
        );
      a.g.return(b);
      return Ca(a);
    },
    Ba = function (a, b, c, d) {
      try {
        var e = b.call(a.g.o, c);
        if (!(e instanceof Object))
          throw new TypeError("Iterator result " + e + " is not an object");
        if (!e.done) return (a.g.A = !1), e;
        var f = e.value;
      } catch (g) {
        return (a.g.o = null), wa(a.g, g), Ca(a);
      }
      a.g.o = null;
      d.call(a.g, f);
      return Ca(a);
    },
    Ca = function (a) {
      for (; a.g.g; )
        try {
          var b = a.h(a.g);
          if (b) return (a.g.A = !1), { value: b.value, done: !1 };
        } catch (c) {
          (a.g.h = void 0), wa(a.g, c);
        }
      a.g.A = !1;
      if (a.g.l) {
        b = a.g.l;
        a.g.l = null;
        if (b.Pf) throw b.fe;
        return { value: b.return, done: !0 };
      }
      return { value: void 0, done: !0 };
    },
    Fa = function (a) {
      this.next = function (b) {
        va(a.g);
        a.g.o ? (b = Ba(a, a.g.o.next, b, a.g.B)) : (a.g.B(b), (b = Ca(a)));
        return b;
      };
      this.throw = function (b) {
        va(a.g);
        a.g.o
          ? (b = Ba(a, a.g.o["throw"], b, a.g.B))
          : (wa(a.g, b), (b = Ca(a)));
        return b;
      };
      this.return = function (b) {
        return Ea(a, b);
      };
      this[Symbol.iterator] = function () {
        return this;
      };
    },
    Ga = function (a) {
      function b(d) {
        return a.next(d);
      }
      function c(d) {
        return a.throw(d);
      }
      return new Promise(function (d, e) {
        function f(g) {
          g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e);
        }
        f(a.next());
      });
    },
    Ha = function (a) {
      return Ga(new Fa(new Aa(a)));
    },
    Ia = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
      return b;
    };
  p("Reflect", function (a) {
    return a ? a : {};
  });
  p("Reflect.construct", function () {
    return oa;
  });
  p("Reflect.setPrototypeOf", function (a) {
    return a
      ? a
      : ta
      ? function (b, c) {
          try {
            return ta(b, c), !0;
          } catch (d) {
            return !1;
          }
        }
      : null;
  });
  p("Promise", function (a) {
    function b() {
      this.g = null;
    }
    function c(g) {
      return g instanceof e
        ? g
        : new e(function (h) {
            h(g);
          });
    }
    if (a) return a;
    b.prototype.h = function (g) {
      if (null == this.g) {
        this.g = [];
        var h = this;
        this.j(function () {
          h.l();
        });
      }
      this.g.push(g);
    };
    var d = da.setTimeout;
    b.prototype.j = function (g) {
      d(g, 0);
    };
    b.prototype.l = function () {
      for (; this.g && this.g.length; ) {
        var g = this.g;
        this.g = [];
        for (var h = 0; h < g.length; ++h) {
          var k = g[h];
          g[h] = null;
          try {
            k();
          } catch (m) {
            this.o(m);
          }
        }
      }
      this.g = null;
    };
    b.prototype.o = function (g) {
      this.j(function () {
        throw g;
      });
    };
    var e = function (g) {
      this.g = 0;
      this.j = void 0;
      this.h = [];
      this.B = !1;
      var h = this.o();
      try {
        g(h.resolve, h.reject);
      } catch (k) {
        h.reject(k);
      }
    };
    e.prototype.o = function () {
      function g(m) {
        return function (n) {
          k || ((k = !0), m.call(h, n));
        };
      }
      var h = this,
        k = !1;
      return { resolve: g(this.G), reject: g(this.l) };
    };
    e.prototype.G = function (g) {
      if (g === this)
        this.l(new TypeError("A Promise cannot resolve to itself"));
      else if (g instanceof e) this.J(g);
      else {
        a: switch (typeof g) {
          case "object":
            var h = null != g;
            break a;
          case "function":
            h = !0;
            break a;
          default:
            h = !1;
        }
        h ? this.F(g) : this.A(g);
      }
    };
    e.prototype.F = function (g) {
      var h = void 0;
      try {
        h = g.then;
      } catch (k) {
        this.l(k);
        return;
      }
      "function" == typeof h ? this.N(h, g) : this.A(g);
    };
    e.prototype.l = function (g) {
      this.I(2, g);
    };
    e.prototype.A = function (g) {
      this.I(1, g);
    };
    e.prototype.I = function (g, h) {
      if (0 != this.g)
        throw Error(
          "Cannot settle(" +
            g +
            ", " +
            h +
            "): Promise already settled in state" +
            this.g
        );
      this.g = g;
      this.j = h;
      2 === this.g && this.H();
      this.K();
    };
    e.prototype.H = function () {
      var g = this;
      d(function () {
        if (g.D()) {
          var h = da.console;
          "undefined" !== typeof h && h.error(g.j);
        }
      }, 1);
    };
    e.prototype.D = function () {
      if (this.B) return !1;
      var g = da.CustomEvent,
        h = da.Event,
        k = da.dispatchEvent;
      if ("undefined" === typeof k) return !0;
      "function" === typeof g
        ? (g = new g("unhandledrejection", { cancelable: !0 }))
        : "function" === typeof h
        ? (g = new h("unhandledrejection", { cancelable: !0 }))
        : ((g = da.document.createEvent("CustomEvent")),
          g.initCustomEvent("unhandledrejection", !1, !0, g));
      g.promise = this;
      g.reason = this.j;
      return k(g);
    };
    e.prototype.K = function () {
      if (null != this.h) {
        for (var g = 0; g < this.h.length; ++g) f.h(this.h[g]);
        this.h = null;
      }
    };
    var f = new b();
    e.prototype.J = function (g) {
      var h = this.o();
      g.jc(h.resolve, h.reject);
    };
    e.prototype.N = function (g, h) {
      var k = this.o();
      try {
        g.call(h, k.resolve, k.reject);
      } catch (m) {
        k.reject(m);
      }
    };
    e.prototype.then = function (g, h) {
      function k(r, v) {
        return "function" == typeof r
          ? function (x) {
              try {
                m(r(x));
              } catch (H) {
                n(H);
              }
            }
          : v;
      }
      var m,
        n,
        q = new e(function (r, v) {
          m = r;
          n = v;
        });
      this.jc(k(g, m), k(h, n));
      return q;
    };
    e.prototype.catch = function (g) {
      return this.then(void 0, g);
    };
    e.prototype.jc = function (g, h) {
      function k() {
        switch (m.g) {
          case 1:
            g(m.j);
            break;
          case 2:
            h(m.j);
            break;
          default:
            throw Error("Unexpected state: " + m.g);
        }
      }
      var m = this;
      null == this.h ? f.h(k) : this.h.push(k);
      this.B = !0;
    };
    e.resolve = c;
    e.reject = function (g) {
      return new e(function (h, k) {
        k(g);
      });
    };
    e.race = function (g) {
      return new e(function (h, k) {
        for (var m = t(g), n = m.next(); !n.done; n = m.next())
          c(n.value).jc(h, k);
      });
    };
    e.all = function (g) {
      var h = t(g),
        k = h.next();
      return k.done
        ? c([])
        : new e(function (m, n) {
            function q(x) {
              return function (H) {
                r[x] = H;
                v--;
                0 == v && m(r);
              };
            }
            var r = [],
              v = 0;
            do
              r.push(void 0),
                v++,
                c(k.value).jc(q(r.length - 1), n),
                (k = h.next());
            while (!k.done);
          });
    };
    return e;
  });
  p("Object.setPrototypeOf", function (a) {
    return a || ta;
  });
  p("Array.prototype.find", function (a) {
    return a
      ? a
      : function (b, c) {
          a: {
            var d = this;
            d instanceof String && (d = String(d));
            for (var e = d.length, f = 0; f < e; f++) {
              var g = d[f];
              if (b.call(c, g, f, d)) {
                b = g;
                break a;
              }
            }
            b = void 0;
          }
          return b;
        };
  });
  p("WeakMap", function (a) {
    function b() {}
    function c(k) {
      var m = typeof k;
      return ("object" === m && null !== k) || "function" === m;
    }
    function d(k) {
      if (!ia(k, f)) {
        var m = new b();
        ba(k, f, { value: m });
      }
    }
    function e(k) {
      var m = Object[k];
      m &&
        (Object[k] = function (n) {
          if (n instanceof b) return n;
          Object.isExtensible(n) && d(n);
          return m(n);
        });
    }
    if (
      (function () {
        if (!a || !Object.seal) return !1;
        try {
          var k = Object.seal({}),
            m = Object.seal({}),
            n = new a([
              [k, 2],
              [m, 3],
            ]);
          if (2 != n.get(k) || 3 != n.get(m)) return !1;
          n.delete(k);
          n.set(m, 4);
          return !n.has(k) && 4 == n.get(m);
        } catch (q) {
          return !1;
        }
      })()
    )
      return a;
    var f = "$jscomp_hidden_" + Math.random();
    e("freeze");
    e("preventExtensions");
    e("seal");
    var g = 0,
      h = function (k) {
        this.g = (g += Math.random() + 1).toString();
        if (k) {
          k = t(k);
          for (var m; !(m = k.next()).done; )
            (m = m.value), this.set(m[0], m[1]);
        }
      };
    h.prototype.set = function (k, m) {
      if (!c(k)) throw Error("Invalid WeakMap key");
      d(k);
      if (!ia(k, f)) throw Error("WeakMap key fail: " + k);
      k[f][this.g] = m;
      return this;
    };
    h.prototype.get = function (k) {
      return c(k) && ia(k, f) ? k[f][this.g] : void 0;
    };
    h.prototype.has = function (k) {
      return c(k) && ia(k, f) && ia(k[f], this.g);
    };
    h.prototype.delete = function (k) {
      return c(k) && ia(k, f) && ia(k[f], this.g) ? delete k[f][this.g] : !1;
    };
    return h;
  });
  p("Map", function (a) {
    if (
      (function () {
        if (
          !a ||
          "function" != typeof a ||
          !a.prototype.entries ||
          "function" != typeof Object.seal
        )
          return !1;
        try {
          var h = Object.seal({ x: 4 }),
            k = new a(t([[h, "s"]]));
          if (
            "s" != k.get(h) ||
            1 != k.size ||
            k.get({ x: 4 }) ||
            k.set({ x: 4 }, "t") != k ||
            2 != k.size
          )
            return !1;
          var m = k.entries(),
            n = m.next();
          if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
          n = m.next();
          return n.done ||
            4 != n.value[0].x ||
            "t" != n.value[1] ||
            !m.next().done
            ? !1
            : !0;
        } catch (q) {
          return !1;
        }
      })()
    )
      return a;
    var b = new WeakMap(),
      c = function (h) {
        this[0] = {};
        this[1] = f();
        this.size = 0;
        if (h) {
          h = t(h);
          for (var k; !(k = h.next()).done; )
            (k = k.value), this.set(k[0], k[1]);
        }
      };
    c.prototype.set = function (h, k) {
      h = 0 === h ? 0 : h;
      var m = d(this, h);
      m.list || (m.list = this[0][m.id] = []);
      m.na
        ? (m.na.value = k)
        : ((m.na = {
            next: this[1],
            Ua: this[1].Ua,
            head: this[1],
            key: h,
            value: k,
          }),
          m.list.push(m.na),
          (this[1].Ua.next = m.na),
          (this[1].Ua = m.na),
          this.size++);
      return this;
    };
    c.prototype.delete = function (h) {
      h = d(this, h);
      return h.na && h.list
        ? (h.list.splice(h.index, 1),
          h.list.length || delete this[0][h.id],
          (h.na.Ua.next = h.na.next),
          (h.na.next.Ua = h.na.Ua),
          (h.na.head = null),
          this.size--,
          !0)
        : !1;
    };
    c.prototype.clear = function () {
      this[0] = {};
      this[1] = this[1].Ua = f();
      this.size = 0;
    };
    c.prototype.has = function (h) {
      return !!d(this, h).na;
    };
    c.prototype.get = function (h) {
      return (h = d(this, h).na) && h.value;
    };
    c.prototype.entries = function () {
      return e(this, function (h) {
        return [h.key, h.value];
      });
    };
    c.prototype.keys = function () {
      return e(this, function (h) {
        return h.key;
      });
    };
    c.prototype.values = function () {
      return e(this, function (h) {
        return h.value;
      });
    };
    c.prototype.forEach = function (h, k) {
      for (var m = this.entries(), n; !(n = m.next()).done; )
        (n = n.value), h.call(k, n[1], n[0], this);
    };
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function (h, k) {
        var m = k && typeof k;
        "object" == m || "function" == m
          ? b.has(k)
            ? (m = b.get(k))
            : ((m = "" + ++g), b.set(k, m))
          : (m = "p_" + k);
        var n = h[0][m];
        if (n && ia(h[0], m))
          for (h = 0; h < n.length; h++) {
            var q = n[h];
            if ((k !== k && q.key !== q.key) || k === q.key)
              return { id: m, list: n, index: h, na: q };
          }
        return { id: m, list: n, index: -1, na: void 0 };
      },
      e = function (h, k) {
        var m = h[1];
        return ea(function () {
          if (m) {
            for (; m.head != h[1]; ) m = m.Ua;
            for (; m.next != m.head; )
              return (m = m.next), { done: !1, value: k(m) };
            m = null;
          }
          return { done: !0, value: void 0 };
        });
      },
      f = function () {
        var h = {};
        return (h.Ua = h.next = h.head = h);
      },
      g = 0;
    return c;
  });
  p("Math.trunc", function (a) {
    return a
      ? a
      : function (b) {
          b = Number(b);
          if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b)
            return b;
          var c = Math.floor(Math.abs(b));
          return 0 > b ? -c : c;
        };
  });
  p("Object.values", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) ia(b, d) && c.push(b[d]);
          return c;
        };
  });
  p("Object.is", function (a) {
    return a
      ? a
      : function (b, c) {
          return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
        };
  });
  p("Array.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = this;
          d instanceof String && (d = String(d));
          var e = d.length;
          c = c || 0;
          for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0;
          }
          return !1;
        };
  });
  var Ja = function (a, b, c) {
    if (null == a)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          c +
          " must not be null or undefined"
      );
    if (b instanceof RegExp)
      throw new TypeError(
        "First argument to String.prototype." +
          c +
          " must not be a regular expression"
      );
    return a + "";
  };
  p("String.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          return -1 !== Ja(this, b, "includes").indexOf(b, c || 0);
        };
  });
  p("Number.isFinite", function (a) {
    return a
      ? a
      : function (b) {
          return "number" !== typeof b
            ? !1
            : !isNaN(b) && Infinity !== b && -Infinity !== b;
        };
  });
  p("Number.MAX_SAFE_INTEGER", function () {
    return 9007199254740991;
  });
  p("Number.isInteger", function (a) {
    return a
      ? a
      : function (b) {
          return Number.isFinite(b) ? b === Math.floor(b) : !1;
        };
  });
  p("Number.isSafeInteger", function (a) {
    return a
      ? a
      : function (b) {
          return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER;
        };
  });
  p("Number.isNaN", function (a) {
    return a
      ? a
      : function (b) {
          return "number" === typeof b && isNaN(b);
        };
  });
  var Ka = function (a, b) {
    a instanceof String && (a += "");
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var f = c++;
            return { value: b(f, a[f]), done: !1 };
          }
          d = !0;
          return { done: !0, value: void 0 };
        },
      };
    e[Symbol.iterator] = function () {
      return e;
    };
    return e;
  };
  p("Array.prototype.entries", function (a) {
    return a
      ? a
      : function () {
          return Ka(this, function (b, c) {
            return [b, c];
          });
        };
  });
  p("Array.prototype.keys", function (a) {
    return a
      ? a
      : function () {
          return Ka(this, function (b) {
            return b;
          });
        };
  });
  p("Array.prototype.values", function (a) {
    return a
      ? a
      : function () {
          return Ka(this, function (b, c) {
            return c;
          });
        };
  });
  p("Array.from", function (a) {
    return a
      ? a
      : function (b, c, d) {
          c =
            null != c
              ? c
              : function (h) {
                  return h;
                };
          var e = [],
            f =
              "undefined" != typeof Symbol &&
              Symbol.iterator &&
              b[Symbol.iterator];
          if ("function" == typeof f) {
            b = f.call(b);
            for (var g = 0; !(f = b.next()).done; )
              e.push(c.call(d, f.value, g++));
          } else
            for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
          return e;
        };
  });
  p("Object.entries", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) ia(b, d) && c.push([d, b[d]]);
          return c;
        };
  });
  p("String.prototype.startsWith", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = Ja(this, b, "startsWith");
          b += "";
          var e = d.length,
            f = b.length;
          c = Math.max(0, Math.min(c | 0, d.length));
          for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
          return g >= f;
        };
  });
  p("String.prototype.repeat", function (a) {
    return a
      ? a
      : function (b) {
          var c = Ja(this, null, "repeat");
          if (0 > b || 1342177279 < b)
            throw new RangeError("Invalid count value");
          b |= 0;
          for (var d = ""; b; ) if ((b & 1 && (d += c), (b >>>= 1))) c += c;
          return d;
        };
  });
  p("globalThis", function (a) {
    return a || da;
  });
  p("String.prototype.padStart", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = Ja(this, null, "padStart");
          b -= d.length;
          c = void 0 !== c ? String(c) : " ";
          return (
            (0 < b && c
              ? c.repeat(Math.ceil(b / c.length)).substring(0, b)
              : "") + d
          );
        };
  });
  p("Math.imul", function (a) {
    return a
      ? a
      : function (b, c) {
          b = Number(b);
          c = Number(c);
          var d = b & 65535,
            e = c & 65535;
          return (
            (d * e +
              (((((b >>> 16) & 65535) * e + d * ((c >>> 16) & 65535)) << 16) >>>
                0)) |
            0
          );
        };
  });
  p("Object.fromEntries", function (a) {
    return a
      ? a
      : function (b) {
          var c = {};
          if (!(Symbol.iterator in b))
            throw new TypeError("" + b + " is not iterable");
          b = b[Symbol.iterator].call(b);
          for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            if (Object(d) !== d)
              throw new TypeError(
                "iterable for fromEntries should yield objects"
              );
            c[d[0]] = d[1];
          }
          return c;
        };
  }); /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var La = La || {},
    w = this || self,
    y = function (a, b, c) {
      a = a.split(".");
      c = c || w;
      a[0] in c ||
        "undefined" == typeof c.execScript ||
        c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift()); )
        a.length || void 0 === b
          ? c[d] && c[d] !== Object.prototype[d]
            ? (c = c[d])
            : (c = c[d] = {})
          : (c[d] = b);
    },
    Na = function (a, b) {
      var c = Ma("CLOSURE_FLAGS");
      a = c && c[a];
      return null != a ? a : b;
    },
    Ma = function (a, b) {
      a = a.split(".");
      b = b || w;
      for (var c = 0; c < a.length; c++)
        if (((b = b[a[c]]), null == b)) return null;
      return b;
    },
    Oa = function (a) {
      var b = typeof a;
      return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
    },
    Pa = function (a) {
      var b = Oa(a);
      return "array" == b || ("object" == b && "number" == typeof a.length);
    },
    Qa = function (a) {
      var b = typeof a;
      return ("object" == b && null != a) || "function" == b;
    },
    Ta = function (a) {
      return (
        (Object.prototype.hasOwnProperty.call(a, Ra) && a[Ra]) || (a[Ra] = ++Sa)
      );
    },
    Ua = function (a) {
      null !== a && "removeAttribute" in a && a.removeAttribute(Ra);
      try {
        delete a[Ra];
      } catch (b) {}
    },
    Ra = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
    Sa = 0,
    Wa = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    Ya = function (a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    },
    Za = function (a, b, c) {
      Za =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf("native code")
          ? Wa
          : Ya;
      return Za.apply(null, arguments);
    },
    ab = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d);
      };
    },
    bb = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.Da = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.fi = function (d, e, f) {
        for (
          var g = Array(arguments.length - 2), h = 2;
          h < arguments.length;
          h++
        )
          g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g);
      };
    },
    cb = function (a) {
      return a;
    };
  function db(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, db);
    else {
      var c = Error().stack;
      c && (this.stack = c);
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b);
  }
  bb(db, Error);
  db.prototype.name = "CustomError";
  var eb;
  var fb,
    gb = "function" === typeof String.prototype.g,
    ib = "undefined" !== typeof TextEncoder;
  function jb(a) {
    var b = !1;
    b = void 0 === b ? !1 : b;
    if (ib) {
      if (
        b &&
        (gb
          ? !a.g()
          : /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(
              a
            ))
      )
        throw Error("Found an unpaired surrogate");
      a = (fb || (fb = new TextEncoder())).encode(a);
    } else {
      for (
        var c = 0, d = new Uint8Array(3 * a.length), e = 0;
        e < a.length;
        e++
      ) {
        var f = a.charCodeAt(e);
        if (128 > f) d[c++] = f;
        else {
          if (2048 > f) d[c++] = (f >> 6) | 192;
          else {
            if (55296 <= f && 57343 >= f) {
              if (56319 >= f && e < a.length) {
                var g = a.charCodeAt(++e);
                if (56320 <= g && 57343 >= g) {
                  f = 1024 * (f - 55296) + g - 56320 + 65536;
                  d[c++] = (f >> 18) | 240;
                  d[c++] = ((f >> 12) & 63) | 128;
                  d[c++] = ((f >> 6) & 63) | 128;
                  d[c++] = (f & 63) | 128;
                  continue;
                } else e--;
              }
              if (b) throw Error("Found an unpaired surrogate");
              f = 65533;
            }
            d[c++] = (f >> 12) | 224;
            d[c++] = ((f >> 6) & 63) | 128;
          }
          d[c++] = (f & 63) | 128;
        }
      }
      a = c === d.length ? d : d.subarray(0, c);
    }
    return a;
  }
  function kb(a) {
    w.setTimeout(function () {
      throw a;
    }, 0);
  }
  var lb = function (a, b) {
      var c = a.length - b.length;
      return 0 <= c && a.indexOf(b, c) == c;
    },
    nb = function (a) {
      return /^[\s\xa0]*$/.test(a);
    },
    ob = String.prototype.trim
      ? function (a) {
          return a.trim();
        }
      : function (a) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
        },
    pb = function (a, b) {
      return -1 != a.indexOf(b);
    },
    qb = function (a, b) {
      return pb(a.toLowerCase(), b.toLowerCase());
    },
    sb = function (a, b) {
      var c = 0;
      a = ob(String(a)).split(".");
      b = ob(String(b)).split(".");
      for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
        var f = a[e] || "",
          g = b[e] || "";
        do {
          f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          if (0 == f[0].length && 0 == g[0].length) break;
          c =
            rb(
              0 == f[1].length ? 0 : parseInt(f[1], 10),
              0 == g[1].length ? 0 : parseInt(g[1], 10)
            ) ||
            rb(0 == f[2].length, 0 == g[2].length) ||
            rb(f[2], g[2]);
          f = f[3];
          g = g[3];
        } while (0 == c);
      }
      return c;
    },
    rb = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
  var tb = Na(610401301, !1),
    ub = Na(572417392, !0);
  function vb() {
    var a = w.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  var wb,
    xb = w.navigator;
  wb = xb ? xb.userAgentData || null : null;
  function yb(a) {
    return tb
      ? wb
        ? wb.brands.some(function (b) {
            return (b = b.brand) && pb(b, a);
          })
        : !1
      : !1;
  }
  function z(a) {
    return pb(vb(), a);
  }
  function zb() {
    return tb ? !!wb && 0 < wb.brands.length : !1;
  }
  function Ab() {
    return zb() ? !1 : z("Opera");
  }
  function Bb() {
    return zb() ? !1 : z("Trident") || z("MSIE");
  }
  function Eb() {
    return z("Firefox") || z("FxiOS");
  }
  function Fb() {
    return (
      z("Safari") &&
      !(
        Gb() ||
        (zb() ? 0 : z("Coast")) ||
        Ab() ||
        (zb() ? 0 : z("Edge")) ||
        (zb() ? yb("Microsoft Edge") : z("Edg/")) ||
        (zb() ? yb("Opera") : z("OPR")) ||
        Eb() ||
        z("Silk") ||
        z("Android")
      )
    );
  }
  function Gb() {
    return zb()
      ? yb("Chromium")
      : ((z("Chrome") || z("CriOS")) && !(zb() ? 0 : z("Edge"))) || z("Silk");
  }
  function Hb() {
    return tb ? !!wb && !!wb.platform : !1;
  }
  function Ib() {
    return Hb() ? "Android" === wb.platform : z("Android");
  }
  function Jb() {
    return z("iPhone") && !z("iPod") && !z("iPad");
  }
  function Kb() {
    return Hb() ? "macOS" === wb.platform : z("Macintosh");
  }
  var Lb = function (a, b) {
      if ("string" === typeof a)
        return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
      for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
      return -1;
    },
    Mb = function (a, b) {
      for (
        var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0;
        e < c;
        e++
      )
        e in d && b.call(void 0, d[e], e, a);
    };
  function Nb(a, b) {
    for (
      var c = "string" === typeof a ? a.split("") : a, d = a.length - 1;
      0 <= d;
      --d
    )
      d in c && b.call(void 0, c[d], d, a);
  }
  var Ob = function (a, b) {
      for (
        var c = a.length,
          d = [],
          e = 0,
          f = "string" === typeof a ? a.split("") : a,
          g = 0;
        g < c;
        g++
      )
        if (g in f) {
          var h = f[g];
          b.call(void 0, h, g, a) && (d[e++] = h);
        }
      return d;
    },
    Pb = function (a, b) {
      for (
        var c = a.length,
          d = Array(c),
          e = "string" === typeof a ? a.split("") : a,
          f = 0;
        f < c;
        f++
      )
        f in e && (d[f] = b.call(void 0, e[f], f, a));
      return d;
    },
    Qb = function (a, b, c) {
      var d = c;
      Mb(a, function (e, f) {
        d = b.call(void 0, d, e, f, a);
      });
      return d;
    },
    Rb = function (a, b) {
      for (
        var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0;
        e < c;
        e++
      )
        if (e in d && b.call(void 0, d[e], e, a)) return !0;
      return !1;
    };
  function Sb(a, b) {
    b = Tb(a, b);
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
  }
  function Tb(a, b) {
    for (
      var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0;
      e < c;
      e++
    )
      if (e in d && b.call(void 0, d[e], e, a)) return e;
    return -1;
  }
  function Ub(a, b) {
    for (
      var c = "string" === typeof a ? a.split("") : a, d = a.length - 1;
      0 <= d;
      d--
    )
      if (d in c && b.call(void 0, c[d], d, a)) return d;
    return -1;
  }
  function Vb(a, b) {
    return 0 <= Lb(a, b);
  }
  function Wb(a, b) {
    b = Lb(a, b);
    var c;
    (c = 0 <= b) && Xb(a, b);
    return c;
  }
  function Xb(a, b) {
    return 1 == Array.prototype.splice.call(a, b, 1).length;
  }
  function Yb(a, b) {
    var c = 0;
    Nb(a, function (d, e) {
      b.call(void 0, d, e, a) && Xb(a, e) && c++;
    });
  }
  function Zb(a) {
    return Array.prototype.concat.apply([], arguments);
  }
  function $b(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function ac(a) {
    for (var b = 0, c = 0, d = {}; c < a.length; ) {
      var e = a[c++],
        f = Qa(e) ? "o" + Ta(e) : (typeof e).charAt(0) + e;
      Object.prototype.hasOwnProperty.call(d, f) || ((d[f] = !0), (a[b++] = e));
    }
    a.length = b;
  }
  function bc(a, b) {
    a.sort(b || cc);
  }
  function cc(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  function dc(a) {
    for (var b = [], c = 0; c < a; c++) b[c] = "";
    return b;
  }
  var ec = function (a) {
    ec[" "](a);
    return a;
  };
  ec[" "] = function () {};
  var fc = function (a, b) {
      try {
        return ec(a[b]), !0;
      } catch (c) {}
      return !1;
    },
    hc = function (a) {
      var b = gc;
      return Object.prototype.hasOwnProperty.call(b, 8) ? b[8] : (b[8] = a(8));
    };
  var ic = Ab(),
    jc = Bb(),
    kc = z("Edge"),
    lc =
      z("Gecko") &&
      !(qb(vb(), "WebKit") && !z("Edge")) &&
      !(z("Trident") || z("MSIE")) &&
      !z("Edge"),
    mc = qb(vb(), "WebKit") && !z("Edge"),
    qc = Kb(),
    rc = Ib(),
    sc = Jb(),
    tc = z("iPad"),
    uc = z("iPod"),
    vc = Jb() || z("iPad") || z("iPod"),
    wc = function () {
      var a = w.document;
      return a ? a.documentMode : void 0;
    },
    xc;
  a: {
    var yc = "",
      zc = (function () {
        var a = vb();
        if (lc) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (kc) return /Edge\/([\d\.]+)/.exec(a);
        if (jc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (mc) return /WebKit\/(\S+)/.exec(a);
        if (ic) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    zc && (yc = zc ? zc[1] : "");
    if (jc) {
      var Ac = wc();
      if (null != Ac && Ac > parseFloat(yc)) {
        xc = String(Ac);
        break a;
      }
    }
    xc = yc;
  }
  var Bc = xc,
    gc = {},
    Cc = function () {
      return hc(function () {
        return 0 <= sb(Bc, 8);
      });
    },
    Dc;
  if (w.document && jc) {
    var Ec = wc();
    Dc = Ec ? Ec : parseInt(Bc, 10) || void 0;
  } else Dc = void 0;
  var Hc = Dc;
  var Ic = Eb(),
    Jc = z("Android") && !(Gb() || Eb() || Ab() || z("Silk")),
    Kc = Gb();
  Fb();
  var Lc = {},
    Mc = null,
    Oc = function (a, b) {
      void 0 === b && (b = 0);
      Nc();
      b = Lc[b];
      for (
        var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0;
        e < a.length - 2;
        e += 3
      ) {
        var g = a[e],
          h = a[e + 1],
          k = a[e + 2],
          m = b[g >> 2];
        g = b[((g & 3) << 4) | (h >> 4)];
        h = b[((h & 15) << 2) | (k >> 6)];
        k = b[k & 63];
        c[f++] = "" + m + g + h + k;
      }
      m = 0;
      k = d;
      switch (a.length - e) {
        case 2:
          (m = a[e + 1]), (k = b[(m & 15) << 2] || d);
        case 1:
          (a = a[e]),
            (c[f] = "" + b[a >> 2] + b[((a & 3) << 4) | (m >> 4)] + k + d);
      }
      return c.join("");
    },
    Qc = function (a) {
      var b = [];
      Pc(a, function (c) {
        b.push(c);
      });
      return b;
    },
    Pc = function (a, b) {
      function c(k) {
        for (; d < a.length; ) {
          var m = a.charAt(d++),
            n = Mc[m];
          if (null != n) return n;
          if (!nb(m)) throw Error("Unknown base64 encoding at char: " + m);
        }
        return k;
      }
      Nc();
      for (var d = 0; ; ) {
        var e = c(-1),
          f = c(0),
          g = c(64),
          h = c(64);
        if (64 === h && -1 === e) break;
        b((e << 2) | (f >> 4));
        64 != g &&
          (b(((f << 4) & 240) | (g >> 2)), 64 != h && b(((g << 6) & 192) | h));
      }
    },
    Nc = function () {
      if (!Mc) {
        Mc = {};
        for (
          var a =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            b = ["+/=", "+/", "-_=", "-_.", "-_"],
            c = 0;
          5 > c;
          c++
        ) {
          var d = a.concat(b[c].split(""));
          Lc[c] = d;
          for (var e = 0; e < d.length; e++) {
            var f = d[e];
            void 0 === Mc[f] && (Mc[f] = e);
          }
        }
      }
    };
  var Rc = "undefined" !== typeof Uint8Array,
    Sc = !jc && "function" === typeof btoa;
  function Tc() {
    return "function" === typeof BigInt;
  }
  var Uc = !ub,
    Vc = !ub;
  var Wc = 0,
    Xc = 0,
    Yc;
  function Zc(a) {
    var b = 0 > a;
    a = Math.abs(a);
    var c = a >>> 0;
    a = Math.floor((a - c) / 4294967296);
    b &&
      ((c = t($c(c, a))), (b = c.next().value), (a = c.next().value), (c = b));
    Wc = c >>> 0;
    Xc = a >>> 0;
  }
  function ad(a, b) {
    b >>>= 0;
    a >>>= 0;
    if (2097151 >= b) var c = "" + (4294967296 * b + a);
    else
      Tc()
        ? (c = "" + ((BigInt(b) << BigInt(32)) | BigInt(a)))
        : ((c = ((a >>> 24) | (b << 8)) & 16777215),
          (b = (b >> 16) & 65535),
          (a = (a & 16777215) + 6777216 * c + 6710656 * b),
          (c += 8147497 * b),
          (b *= 2),
          1e7 <= a && ((c += Math.floor(a / 1e7)), (a %= 1e7)),
          1e7 <= c && ((b += Math.floor(c / 1e7)), (c %= 1e7)),
          (c = b + bd(c) + bd(a)));
    return c;
  }
  function bd(a) {
    a = String(a);
    return "0000000".slice(a.length) + a;
  }
  function cd() {
    var a = Wc,
      b = Xc;
    b & 2147483648
      ? Tc()
        ? (a = "" + ((BigInt(b | 0) << BigInt(32)) | BigInt(a >>> 0)))
        : ((b = t($c(a, b))),
          (a = b.next().value),
          (b = b.next().value),
          (a = "-" + ad(a, b)))
      : (a = ad(a, b));
    return a;
  }
  function dd(a) {
    if (16 > a.length) Zc(Number(a));
    else if (Tc())
      (a = BigInt(a)),
        (Wc = Number(a & BigInt(4294967295)) >>> 0),
        (Xc = Number((a >> BigInt(32)) & BigInt(4294967295)));
    else {
      var b = +("-" === a[0]);
      Xc = Wc = 0;
      for (
        var c = a.length, d = 0 + b, e = ((c - b) % 6) + b;
        e <= c;
        d = e, e += 6
      )
        (d = Number(a.slice(d, e))),
          (Xc *= 1e6),
          (Wc = 1e6 * Wc + d),
          4294967296 <= Wc &&
            ((Xc += Math.trunc(Wc / 4294967296)), (Xc >>>= 0), (Wc >>>= 0));
      b &&
        ((b = t($c(Wc, Xc))),
        (a = b.next().value),
        (b = b.next().value),
        (Wc = a),
        (Xc = b));
    }
  }
  function $c(a, b) {
    b = ~b;
    a ? (a = ~a + 1) : (b += 1);
    return [a, b];
  }
  var ed = function (a, b) {
      this.h = a >>> 0;
      this.g = b >>> 0;
    },
    gd = function (a) {
      if (!a) return fd || (fd = new ed(0, 0));
      if (!/^\d+$/.test(a)) return null;
      dd(a);
      return new ed(Wc, Xc);
    },
    fd,
    hd = function (a, b) {
      this.h = a >>> 0;
      this.g = b >>> 0;
    },
    jd = function (a) {
      if (!a) return id || (id = new hd(0, 0));
      if (!/^-?\d+$/.test(a)) return null;
      dd(a);
      return new hd(Wc, Xc);
    },
    id;
  var kd = function () {
    this.g = [];
  };
  kd.prototype.length = function () {
    return this.g.length;
  };
  kd.prototype.end = function () {
    var a = this.g;
    this.g = [];
    return a;
  };
  var ld = function (a, b, c) {
      for (; 0 < c || 127 < b; )
        a.g.push((b & 127) | 128),
          (b = ((b >>> 7) | (c << 25)) >>> 0),
          (c >>>= 7);
      a.g.push(b);
    },
    md = function (a, b) {
      for (; 127 < b; ) a.g.push((b & 127) | 128), (b >>>= 7);
      a.g.push(b);
    },
    nd = function (a, b) {
      if (0 <= b) md(a, b);
      else {
        for (var c = 0; 9 > c; c++) a.g.push((b & 127) | 128), (b >>= 7);
        a.g.push(1);
      }
    },
    pd = function (a, b) {
      a.g.push((b >>> 0) & 255);
      a.g.push((b >>> 8) & 255);
      a.g.push((b >>> 16) & 255);
      a.g.push((b >>> 24) & 255);
    };
  var qd = function () {
      this.j = [];
      this.h = 0;
      this.g = new kd();
    },
    rd = function (a, b) {
      0 !== b.length && (a.j.push(b), (a.h += b.length));
    },
    sd = function (a, b, c) {
      md(a.g, 8 * b + c);
    },
    td = function (a, b, c) {
      sd(a, b, 2);
      md(a.g, c.length);
      rd(a, a.g.end());
      rd(a, c);
    };
  var ud = function (a, b) {
    this.g = a;
    this.Ee = b;
  };
  function vd(a) {
    return Array.prototype.slice.call(a);
  }
  var wd;
  wd =
    "function" === typeof Symbol && "symbol" === typeof Symbol()
      ? Symbol()
      : void 0;
  var xd = wd
    ? function (a, b) {
        a[wd] |= b;
      }
    : function (a, b) {
        void 0 !== a.Aa
          ? (a.Aa |= b)
          : Object.defineProperties(a, {
              Aa: { value: b, configurable: !0, writable: !0, enumerable: !1 },
            });
      };
  function yd(a) {
    var b = zd(a);
    1 !== (b & 1) && (Object.isFrozen(a) && (a = vd(a)), Ad(a, b | 1));
  }
  var Bd = wd
    ? function (a, b) {
        a[wd] &= ~b;
      }
    : function (a, b) {
        void 0 !== a.Aa && (a.Aa &= ~b);
      };
  function Cd(a, b, c) {
    return c ? a | b : a & ~b;
  }
  var zd = wd
      ? function (a) {
          return a[wd] | 0;
        }
      : function (a) {
          return a.Aa | 0;
        },
    Dd = wd
      ? function (a) {
          return a[wd];
        }
      : function (a) {
          return a.Aa;
        },
    Ad = wd
      ? function (a, b) {
          a[wd] = b;
        }
      : function (a, b) {
          void 0 !== a.Aa
            ? (a.Aa = b)
            : Object.defineProperties(a, {
                Aa: {
                  value: b,
                  configurable: !0,
                  writable: !0,
                  enumerable: !1,
                },
              });
        };
  function Ed() {
    var a = [];
    xd(a, 1);
    return a;
  }
  function Fd(a, b) {
    Ad(b, (a | 0) & -14591);
  }
  function Gd(a, b) {
    Ad(b, (a | 34) & -14557);
  }
  function Hd(a) {
    a = (a >> 14) & 1023;
    return 0 === a ? 536870912 : a;
  }
  function Id(a) {
    return +!!(a & 512) - 1;
  }
  var Jd = {},
    Kd = {};
  function Ld(a) {
    return !(!a || "object" !== typeof a || a.mi !== Kd);
  }
  function Qd(a) {
    return (
      null !== a &&
      "object" === typeof a &&
      !Array.isArray(a) &&
      a.constructor === Object
    );
  }
  var Rd,
    Sd = !ub;
  function Td(a, b, c) {
    if (!Array.isArray(a) || a.length) return !1;
    var d = zd(a);
    if (d & 1) return !0;
    if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
    Ad(a, d | 1);
    return !0;
  }
  var Ud,
    Vd = [];
  Ad(Vd, 55);
  Ud = Object.freeze(Vd);
  function Wd(a) {
    if (a & 2) throw Error();
  }
  Object.freeze(new (function () {})());
  Object.freeze(new (function () {})());
  function Xd(a) {
    a = Error(a);
    a.__closure__error__context__984382 ||
      (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = "warning";
    return a;
  }
  function Yd(a) {
    if (null == a || "number" === typeof a) return a;
    if ("NaN" === a || "Infinity" === a || "-Infinity" === a) return Number(a);
  }
  function Zd(a) {
    if ("boolean" !== typeof a)
      throw Error("Expected boolean but got " + Oa(a) + ": " + a);
    return a;
  }
  function $d(a) {
    if (null == a || "boolean" === typeof a) return a;
    if ("number" === typeof a) return !!a;
  }
  var ae = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
  function be(a) {
    var b = typeof a;
    return "number" === b
      ? Number.isFinite(a)
      : "string" !== b
      ? !1
      : ae.test(a);
  }
  function ce(a) {
    if (!Number.isFinite(a)) throw Xd("enum");
    return a | 0;
  }
  function de(a) {
    return null == a ? a : ce(a);
  }
  function ee(a) {
    return null == a ? a : Number.isFinite(a) ? a | 0 : void 0;
  }
  function fe(a) {
    if ("number" !== typeof a) throw Xd("int32");
    if (!Number.isFinite(a)) throw Xd("int32");
    return a | 0;
  }
  function ge(a) {
    return null == a ? a : fe(a);
  }
  function he(a) {
    if (null == a) return a;
    if ("string" === typeof a) {
      if (!a) return;
      a = +a;
    }
    if ("number" === typeof a) return Number.isFinite(a) ? a | 0 : void 0;
  }
  function ie(a) {
    if (null == a) return a;
    if ("string" === typeof a) {
      if (!a) return;
      a = +a;
    }
    if ("number" === typeof a) return Number.isFinite(a) ? a >>> 0 : void 0;
  }
  function je(a) {
    if (null != a) {
      var b = !!b;
      if (!be(a)) throw Xd("int64");
      "string" === typeof a
        ? (a = ke(a))
        : b
        ? ((a = Math.trunc(a)),
          Number.isSafeInteger(a)
            ? (a = String(a))
            : ((b = String(a)), le(b) ? (a = b) : (Zc(a), (a = cd()))))
        : (a = me(a));
    }
    return a;
  }
  function ne(a) {
    return "-" === a[0]
      ? !1
      : 20 > a.length
      ? !0
      : 20 === a.length && 184467 > Number(a.substring(0, 6));
  }
  function le(a) {
    return "-" === a[0]
      ? 20 > a.length
        ? !0
        : 20 === a.length && -922337 < Number(a.substring(0, 7))
      : 19 > a.length
      ? !0
      : 19 === a.length && 922337 > Number(a.substring(0, 6));
  }
  function oe(a) {
    if (0 > a) {
      Zc(a);
      var b = ad(Wc, Xc);
      a = Number(b);
      return Number.isSafeInteger(a) ? a : b;
    }
    if (ne(String(a))) return a;
    Zc(a);
    return 4294967296 * Xc + (Wc >>> 0);
  }
  function me(a) {
    a = Math.trunc(a);
    if (!Number.isSafeInteger(a)) {
      Zc(a);
      var b = Wc,
        c = Xc;
      if ((a = c & 2147483648))
        (b = (~b + 1) >>> 0), (c = ~c >>> 0), 0 == b && (c = (c + 1) >>> 0);
      b = 4294967296 * c + (b >>> 0);
      a = a ? -b : b;
    }
    return a;
  }
  function ke(a) {
    var b = Math.trunc(Number(a));
    if (Number.isSafeInteger(b)) return String(b);
    b = a.indexOf(".");
    -1 !== b && (a = a.substring(0, b));
    le(a) || (dd(a), (a = cd()));
    return a;
  }
  function pe(a) {
    if ("string" !== typeof a) throw Error();
    return a;
  }
  function qe(a) {
    if (null != a && "string" !== typeof a) throw Error();
    return a;
  }
  function re(a) {
    return null == a || "string" === typeof a ? a : void 0;
  }
  function se(a, b, c) {
    if (null != a && "object" === typeof a && a.pd === Jd) return a;
    if (Array.isArray(a)) {
      var d = zd(a),
        e = d;
      0 === e && (e |= c & 32);
      e |= c & 2;
      e !== d && Ad(a, e);
      return new b(a);
    }
  }
  var te;
  function ue(a, b) {
    te = b;
    a = new a(b);
    te = void 0;
    return a;
  }
  var ve, we;
  function xe(a) {
    switch (typeof a) {
      case "boolean":
        return ve || (ve = [0, void 0, !0]);
      case "number":
        return 0 < a
          ? void 0
          : 0 === a
          ? we || (we = [0, void 0])
          : [-a, void 0];
      case "string":
        return [0, a];
      case "object":
        return a;
    }
  }
  function A(a, b, c) {
    null == a && (a = te);
    te = void 0;
    if (null == a) {
      var d = 96;
      c ? ((a = [c]), (d |= 512)) : (a = []);
      b && (d = (d & -16760833) | ((b & 1023) << 14));
    } else {
      if (!Array.isArray(a)) throw Error();
      d = zd(a);
      if (d & 64) return a;
      d |= 64;
      if (c && ((d |= 512), c !== a[0])) throw Error();
      a: {
        c = a;
        var e = c.length;
        if (e) {
          var f = e - 1;
          if (Qd(c[f])) {
            d |= 256;
            b = f - Id(d);
            if (1024 <= b) throw Error();
            d = (d & -16760833) | ((b & 1023) << 14);
            break a;
          }
        }
        if (b) {
          b = Math.max(b, e - Id(d));
          if (1024 < b) throw Error();
          d = (d & -16760833) | ((b & 1023) << 14);
        }
      }
    }
    Ad(a, d);
    return a;
  }
  function ye(a, b) {
    return ze(b);
  }
  function ze(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (a) {
          if (Array.isArray(a)) return Sd || !Td(a, void 0, 9999) ? a : void 0;
          if (Rc && null != a && a instanceof Uint8Array) {
            if (Sc) {
              for (var b = "", c = 0, d = a.length - 10240; c < d; )
                b += String.fromCharCode.apply(
                  null,
                  a.subarray(c, (c += 10240))
                );
              b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
              a = btoa(b);
            } else a = Oc(a);
            return a;
          }
        }
    }
    return a;
  }
  function Ae(a, b, c) {
    a = vd(a);
    var d = a.length,
      e = b & 256 ? a[d - 1] : void 0;
    d += e ? -1 : 0;
    for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
    if (e) {
      b = a[b] = {};
      for (var f in e) b[f] = c(e[f]);
    }
    return a;
  }
  function Be(a, b, c, d, e, f) {
    if (null != a) {
      if (Array.isArray(a))
        a =
          e && 0 == a.length && zd(a) & 1
            ? void 0
            : f && zd(a) & 2
            ? a
            : Ce(a, b, c, void 0 !== d, e, f);
      else if (Qd(a)) {
        var g = {},
          h;
        for (h in a) g[h] = Be(a[h], b, c, d, e, f);
        a = g;
      } else a = b(a, d);
      return a;
    }
  }
  function Ce(a, b, c, d, e, f) {
    var g = d || c ? zd(a) : 0;
    d = d ? !!(g & 32) : void 0;
    a = vd(a);
    for (var h = 0; h < a.length; h++) a[h] = Be(a[h], b, c, d, e, f);
    c && c(g, a);
    return a;
  }
  function Ee(a) {
    return a.pd === Jd ? a.toJSON() : ze(a);
  }
  function Fe(a, b, c) {
    c = void 0 === c ? Gd : c;
    if (null != a) {
      if (Rc && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        var d = zd(a);
        if (d & 2) return a;
        b && (b = 0 === d || (!!(d & 32) && !(d & 64 || !(d & 16))));
        return b
          ? (Ad(a, (d | 34) & -12293), a)
          : Ce(a, Fe, d & 4 ? Gd : c, !0, !1, !0);
      }
      a.pd === Jd &&
        ((c = a.M),
        (d = Dd(c)),
        (a = d & 2 ? a : ue(a.constructor, Ge(c, d, !0))));
      return a;
    }
  }
  function Ge(a, b, c) {
    var d = c || b & 2 ? Gd : Fd,
      e = !!(b & 32);
    a = Ae(a, b, function (f) {
      return Fe(f, e, d);
    });
    xd(a, 32 | (c ? 2 : 0));
    return a;
  }
  function He(a) {
    var b = a.M,
      c = Dd(b);
    return c & 2 ? ue(a.constructor, Ge(b, c, !1)) : a;
  }
  var Je = function (a, b) {
      a = a.M;
      return Ie(a, Dd(a), b);
    },
    Ie = function (a, b, c, d) {
      if (-1 === c) return null;
      if (c >= Hd(b)) {
        if (b & 256) return a[a.length - 1][c];
      } else {
        var e = a.length;
        if (d && b & 256 && ((d = a[e - 1][c]), null != d)) return d;
        b = c + Id(b);
        if (b < e) return a[b];
      }
    },
    Le = function (a, b, c) {
      var d = a.M,
        e = Dd(d);
      Wd(e);
      Ke(d, e, b, c);
      return a;
    };
  function Ke(a, b, c, d, e) {
    var f = Hd(b);
    if (c >= f || e) {
      var g = b;
      if (b & 256) e = a[a.length - 1];
      else {
        if (null == d) return g;
        e = a[f + Id(b)] = {};
        g |= 256;
      }
      e[c] = d;
      c < f && (a[c + Id(b)] = void 0);
      g !== b && Ad(a, g);
      return g;
    }
    a[c + Id(b)] = d;
    b & 256 && ((a = a[a.length - 1]), c in a && delete a[c]);
    return b;
  }
  function Me(a, b, c) {
    a = a.M;
    var d = Dd(a),
      e = 2 & d ? 1 : 2,
      f = Ne(a, d, b),
      g = zd(f);
    if (!(4 & g)) {
      if (4 & g || Object.isFrozen(f))
        (f = vd(f)), (g = Oe(g, d, !1)), (d = Ke(a, d, b, f));
      for (var h = 0, k = 0; h < f.length; h++) {
        var m = c(f[h]);
        null != m && (f[k++] = m);
      }
      k < h && (f.length = k);
      g = Pe(g, d, !1);
      g = Cd(g, 20, !0);
      g = Cd(g, 4096, !1);
      g = Cd(g, 8192, !1);
      Ad(f, g);
      2 & g && Object.freeze(f);
    }
    Qe(g) ||
      ((c = g),
      (h = 1 === e) ? (g = Cd(g, 2, !0)) : (g = Cd(g, 32, !1)),
      g !== c && Ad(f, g),
      h && Object.freeze(f));
    2 === e &&
      Qe(g) &&
      ((f = vd(f)), (g = Oe(g, d, !1)), Ad(f, g), Ke(a, d, b, f));
    return f;
  }
  function Ne(a, b, c) {
    a = Ie(a, b, c);
    return Array.isArray(a) ? a : Ud;
  }
  function Pe(a, b, c) {
    0 === a && (a = Oe(a, b, c));
    return (a = Cd(a, 1, !0));
  }
  function Qe(a) {
    return (!!(2 & a) && !!(4 & a)) || !!(2048 & a);
  }
  function Re(a, b, c, d) {
    var e = a.M,
      f = Dd(e);
    Wd(f);
    if (null == c) return Ke(e, f, b), a;
    var g = zd(c),
      h = g,
      k = !!(2 & g) || Object.isFrozen(c),
      m = !k && !1;
    if (!(4 & g))
      for (
        g = 21, k && ((c = vd(c)), (h = 0), (g = Oe(g, f, !0))), k = 0;
        k < c.length;
        k++
      )
        c[k] = d(c[k]);
    m && ((c = vd(c)), (h = 0), (g = Oe(g, f, !0)));
    g !== h && Ad(c, g);
    Ke(e, f, b, c);
    return a;
  }
  function Se(a, b, c, d) {
    var e = a.M,
      f = Dd(e);
    Wd(f);
    Ke(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
    return a;
  }
  function Te(a, b, c) {
    for (var d = 0, e = 0; e < c.length; e++) {
      var f = c[e];
      null != Ie(a, b, f) && (0 !== d && (b = Ke(a, b, d)), (d = f));
    }
    return d;
  }
  function Ue(a, b, c, d) {
    a = a.M;
    var e = Dd(a),
      f = Ie(a, e, c, d);
    b = se(f, b, e);
    b !== f && null != b && Ke(a, e, c, b, d);
    return b;
  }
  var Ve = function (a, b, c) {
    var d = void 0 === d ? !1 : d;
    b = Ue(a, b, c, d);
    if (null == b) return b;
    a = a.M;
    var e = Dd(a);
    if (!(e & 2)) {
      var f = He(b);
      f !== b && ((b = f), Ke(a, e, c, b, d));
    }
    return b;
  };
  function We(a, b, c, d, e, f) {
    var g = !!(2 & b),
      h = g ? 1 : 2,
      k = 1 === h;
    h = 2 === h;
    e = !!e;
    f && (f = !g);
    g = Ne(a, b, d);
    var m = zd(g),
      n = !!(4 & m);
    if (!n) {
      m = Pe(m, b, e);
      var q = g,
        r = b,
        v;
      (v = !!(2 & m)) && (r = Cd(r, 2, !0));
      for (var x = !v, H = !0, S = 0, la = 0; S < q.length; S++) {
        var V = se(q[S], c, r);
        if (V instanceof c) {
          if (!v) {
            var M = !!(zd(V.M) & 2);
            x && (x = !M);
            H && (H = M);
          }
          q[la++] = V;
        }
      }
      la < S && (q.length = la);
      m = Cd(m, 4, !0);
      m = Cd(m, 16, H);
      m = Cd(m, 8, x);
      Ad(q, m);
      v && Object.freeze(q);
    }
    c = !!(8 & m) || (k && !g.length);
    if (f && !c) {
      Qe(m) && ((g = vd(g)), (m = Oe(m, b, e)), (b = Ke(a, b, d, g)));
      f = g;
      c = m;
      for (q = 0; q < f.length; q++)
        (m = f[q]), (r = He(m)), m !== r && (f[q] = r);
      c = Cd(c, 8, !0);
      c = Cd(c, 16, !f.length);
      Ad(f, c);
      m = c;
    }
    Qe(m) ||
      ((f = m),
      k
        ? (m = Cd(m, !g.length || (16 & m && (!n || 32 & m)) ? 2 : 2048, !0))
        : e || (m = Cd(m, 32, !1)),
      m !== f && Ad(g, m),
      k && Object.freeze(g));
    h && Qe(m) && ((g = vd(g)), (m = Oe(m, b, e)), Ad(g, m), Ke(a, b, d, g));
    return g;
  }
  var Xe = function (a, b, c) {
      a = a.M;
      var d = Dd(a);
      return We(a, d, b, c, !1, !(2 & d));
    },
    Ye = function (a, b, c) {
      null == c && (c = void 0);
      return Le(a, b, c);
    },
    Ze = function (a, b, c) {
      var d = a.M,
        e = Dd(d);
      Wd(e);
      if (null == c) return Ke(d, e, b), a;
      for (
        var f = zd(c),
          g = f,
          h = !!(2 & f) || !!(2048 & f),
          k = h || Object.isFrozen(c),
          m = !0,
          n = !0,
          q = 0;
        q < c.length;
        q++
      ) {
        var r = c[q];
        h || ((r = !!(zd(r.M) & 2)), m && (m = !r), n && (n = r));
      }
      h || ((f = Cd(f, 5, !0)), (f = Cd(f, 8, m)), (f = Cd(f, 16, n)));
      k && f !== g && ((c = vd(c)), (g = 0), (f = Oe(f, e, !0)));
      f !== g && Ad(c, f);
      Ke(d, e, b, c);
      return a;
    };
  function Oe(a, b, c) {
    a = Cd(a, 2, !!(2 & b));
    a = Cd(a, 32, !!(32 & b) && c);
    return (a = Cd(a, 2048, !1));
  }
  function $e(a, b, c, d) {
    a = a.M;
    var e = Dd(a);
    Wd(e);
    b = We(a, e, c, b, !0);
    c = null != d ? d : new c();
    b.push(c);
    zd(c.M) & 2 ? Bd(b, 8) : Bd(b, 16);
    return c;
  }
  var af = function (a, b) {
      a = Je(a, b);
      var c;
      null == a
        ? (c = a)
        : be(a)
        ? "number" === typeof a
          ? (c = me(a))
          : (c = ke(a))
        : (c = void 0);
      return c;
    },
    bf = function (a, b) {
      return re(Je(a, b));
    };
  function cf(a, b) {
    return null != a ? a : b;
  }
  var df = function (a, b) {
      return cf($d(Je(a, b)), !1);
    },
    ef = function (a, b) {
      var c = void 0 === c ? 0 : c;
      return cf(he(Je(a, b)), c);
    },
    ff = function (a) {
      var b = void 0 === b ? 0 : b;
      a = ie(Je(a, 1));
      return cf(a, b);
    },
    gf = function (a) {
      var b = void 0 === b ? 0 : b;
      return cf(af(a, 2), b);
    },
    hf = function (a, b) {
      return cf(bf(a, b), "");
    },
    jf = function (a, b) {
      var c = 0;
      c = void 0 === c ? 0 : c;
      return cf(ee(Je(a, b)), c);
    },
    kf = function (a, b, c) {
      var d = a.M;
      b = Te(d, Dd(d), c) === b ? b : -1;
      return jf(a, b);
    },
    lf = function (a, b, c) {
      return Le(a, b, null == c ? c : Zd(c));
    },
    mf = function (a, b, c) {
      return Le(a, b, qe(c));
    };
  var B = function (a, b, c) {
    this.M = A(a, b, c);
  };
  B.prototype.toJSON = function () {
    if (Rd) var a = nf(this, this.M, !1);
    else (a = Ce(this.M, Ee, void 0, void 0, !1, !1)), (a = nf(this, a, !0));
    return a;
  };
  var of = function (a) {
    Rd = !0;
    try {
      return JSON.stringify(a.toJSON(), ye);
    } finally {
      Rd = !1;
    }
  };
  B.prototype.pd = Jd;
  B.prototype.toString = function () {
    return nf(this, this.M, !1).toString();
  };
  function nf(a, b, c) {
    var d = a.constructor.ga,
      e = Dd(c ? a.M : b),
      f = Hd(e),
      g = !1;
    if (d && Sd) {
      if (!c) {
        b = vd(b);
        var h;
        if (b.length && Qd((h = b[b.length - 1])))
          for (g = 0; g < d.length; g++)
            if (d[g] >= f) {
              Object.assign((b[b.length - 1] = {}), h);
              break;
            }
        g = !0;
      }
      f = b;
      c = !c;
      h = Dd(a.M);
      a = Hd(h);
      h = Id(h);
      for (var k, m, n = 0; n < d.length; n++)
        if (((m = d[n]), m < a)) {
          m += h;
          var q = f[m];
          null == q ? (f[m] = c ? Ud : Ed()) : c && q !== Ud && yd(q);
        } else
          k ||
            ((q = void 0),
            f.length && Qd((q = f[f.length - 1])) ? (k = q) : f.push((k = {}))),
            (q = k[m]),
            null == k[m] ? (k[m] = c ? Ud : Ed()) : c && q !== Ud && yd(q);
    }
    k = b.length;
    if (!k) return b;
    var r;
    if (Qd((f = b[k - 1]))) {
      a: {
        var v = f;
        c = {};
        a = !1;
        for (var x in v) {
          h = v[x];
          if (Array.isArray(h)) {
            n = h;
            if ((!Vc && Td(h, d, +x)) || (!Uc && Ld(h) && 0 === h.size))
              h = null;
            h != n && (a = !0);
          }
          null != h ? (c[x] = h) : (a = !0);
        }
        if (a) {
          for (var H in c) {
            v = c;
            break a;
          }
          v = null;
        }
      }
      v != f && (r = !0);
      k--;
    }
    for (e = Id(e); 0 < k; k--) {
      x = k - 1;
      f = b[x];
      if (
        !(
          null == f ||
          (!Vc && Td(f, d, x - e)) ||
          (!Uc && Ld(f) && 0 === f.size)
        )
      )
        break;
      var S = !0;
    }
    if (!r && !S) return b;
    var la;
    g ? (la = b) : (la = Array.prototype.slice.call(b, 0, k));
    b = la;
    g && (b.length = k);
    v && b.push(v);
    return b;
  }
  function pf(a, b, c) {
    a[b] = c;
  }
  var qf = Symbol();
  function rf(a) {
    var b = a[qf];
    if (!b) {
      var c = sf(a);
      b = function (d, e) {
        return tf(d, e, c);
      };
      a[qf] = b;
    }
    return b;
  }
  var uf = Symbol();
  function vf(a) {
    return a.g;
  }
  function wf(a, b) {
    var c,
      d,
      e = a.g;
    return function (f, g, h) {
      return e(f, g, h, d || (d = sf(b).g), c || (c = rf(b)));
    };
  }
  function sf(a) {
    var b = a[uf];
    if (b) return b;
    b = a[uf] = {};
    var c = vf,
      d = wf;
    var e = void 0 === e ? pf : e;
    b.g = xe(a[0]);
    var f = 0,
      g = a[++f];
    g &&
      g.constructor === Object &&
      ((b.xf = g),
      (g = a[++f]),
      "function" === typeof g && ((b.j = g), (b.h = a[++f]), (g = a[++f])));
    for (
      var h = {};
      Array.isArray(g) && "number" === typeof g[0] && 0 < g[0];

    ) {
      for (var k = 0; k < g.length; k++) h[g[k]] = g;
      g = a[++f];
    }
    for (k = 1; void 0 !== g; ) {
      "number" === typeof g && ((k += g), (g = a[++f]));
      var m = void 0;
      if (g instanceof ud) var n = g;
      else (n = xf), f--;
      if (n.Ee) {
        g = a[++f];
        m = a;
        var q = f;
        "function" == typeof g && ((g = g()), (m[q] = g));
        m = g;
      }
      g = a[++f];
      q = k + 1;
      "number" === typeof g && 0 > g && ((q -= g), (g = a[++f]));
      for (; k < q; k++) {
        var r = h[k];
        e(b, k, m ? d(n, m, r) : c(n, r));
      }
    }
    yf in a && uf in a && (a.length = 0);
    return b;
  }
  var yf = Symbol();
  function zf(a, b) {
    var c = a[b];
    if (c) return c;
    if ((c = a.xf))
      if ((c = c[b])) {
        c = Array.isArray(c) ? (c[0] instanceof ud ? c : [Af, c]) : [c, void 0];
        var d = c[0].g;
        if ((c = c[1])) {
          var e = rf(c),
            f = sf(c).g;
          c = (c = a.h)
            ? c(f, e)
            : function (g, h, k) {
                return d(g, h, k, f, e);
              };
        } else c = d;
        return (a[b] = c);
      }
  }
  function tf(a, b, c) {
    for (
      var d = Dd(a),
        e = Id(d),
        f = a.length,
        g = f + (d & 256 ? -1 : 0),
        h = d & 512 ? 1 : 0;
      h < g;
      h++
    ) {
      var k = a[h];
      if (null != k) {
        var m = h - e,
          n = zf(c, m);
        n && n(b, k, m);
      }
    }
    if (d & 256) {
      a = a[f - 1];
      for (var q in a)
        (d = +q),
          Number.isNaN(d) ||
            ((e = a[q]), null != e && (f = zf(c, d)) && f(b, e, d));
    }
  }
  function Bf(a) {
    return new ud(a, !1);
  }
  function Cf(a, b, c) {
    a: if (null != b) {
      if (be(b)) {
        if ("string" === typeof b) {
          b = ke(b);
          break a;
        }
        if ("number" === typeof b) {
          b = me(b);
          break a;
        }
      }
      b = void 0;
    }
    null != b &&
      ("string" === typeof b && jd(b),
      null != b &&
        (sd(a, c, 0),
        "number" === typeof b
          ? ((a = a.g), Zc(b), ld(a, Wc, Xc))
          : ((c = jd(b)), ld(a.g, c.h, c.g))));
  }
  function Df(a, b, c) {
    b = he(b);
    null != b && null != b && (sd(a, c, 0), nd(a.g, b));
  }
  function Ef(a, b, c, d, e) {
    b = b instanceof B ? b.M : Array.isArray(b) ? A(b, d[0], d[1]) : void 0;
    if (null != b) {
      sd(a, c, 2);
      c = a.g.end();
      rd(a, c);
      c.push(a.h);
      e(b, a);
      e = c.pop();
      for (e = a.h + a.g.length() - e; 127 < e; )
        c.push((e & 127) | 128), (e >>>= 7), a.h++;
      c.push(e);
      a.h++;
    }
  }
  var Ff = Bf(function (a, b, c) {
      b = Yd(b);
      null != b &&
        (sd(a, c, 1),
        (a = a.g),
        (c = Yc || (Yc = new DataView(new ArrayBuffer(8)))),
        c.setFloat64(0, +b, !0),
        (Wc = c.getUint32(0, !0)),
        (Xc = c.getUint32(4, !0)),
        pd(a, Wc),
        pd(a, Xc));
    }),
    Gf = Bf(function (a, b, c) {
      b = Yd(b);
      null != b &&
        (sd(a, c, 5),
        (a = a.g),
        (c = Yc || (Yc = new DataView(new ArrayBuffer(8)))),
        c.setFloat32(0, +b, !0),
        (Xc = 0),
        (Wc = c.getUint32(0, !0)),
        pd(a, Wc));
    }),
    Hf = Bf(Cf),
    If = Bf(Cf),
    Jf = Bf(function (a, b, c) {
      a: if (null != b) {
        if (be(b)) {
          if ("string" === typeof b) {
            var d = Math.trunc(Number(b));
            Number.isSafeInteger(d) && 0 <= d
              ? (b = String(d))
              : ((d = b.indexOf(".")),
                -1 !== d && (b = b.substring(0, d)),
                ne(b) || (dd(b), (b = ad(Wc, Xc))));
            break a;
          }
          if ("number" === typeof b) {
            b = Math.trunc(b);
            b = 0 <= b && Number.isSafeInteger(b) ? b : oe(b);
            break a;
          }
        }
        b = void 0;
      }
      null != b &&
        ("string" === typeof b && gd(b),
        null != b &&
          (sd(a, c, 0),
          "number" === typeof b
            ? ((a = a.g), Zc(b), ld(a, Wc, Xc))
            : ((c = gd(b)), ld(a.g, c.h, c.g))));
    }),
    Kf = Bf(Df),
    Lf = Bf(Df),
    Mf = Bf(function (a, b, c) {
      b = $d(b);
      null != b && (sd(a, c, 0), a.g.g.push(b ? 1 : 0));
    }),
    Nf = Bf(function (a, b, c) {
      b = re(b);
      null != b && td(a, c, jb(b));
    }),
    Of;
  Of = new ud(function (a, b, c) {
    if (Array.isArray(b)) {
      var d = zd(b);
      if (!(d & 4)) {
        for (var e = 0, f = 0; e < b.length; e++) {
          var g = re(b[e]);
          null != g && (b[f++] = g);
        }
        f < e && (b.length = f);
        Ad(b, (d | 5) & -12289);
        d & 2 && Object.freeze(b);
      }
    } else b = void 0;
    if (null != b)
      for (d = 0; d < b.length; d++)
        (e = a), (f = c), (g = b[d]), null != g && td(e, f, jb(g));
  }, !1);
  var Af = new ud(Ef, !0),
    xf = new ud(Ef, !0),
    Pf;
  Pf = new ud(function (a, b, c, d, e) {
    if (Array.isArray(b))
      for (var f = 0; f < b.length; f++) Ef(a, b[f], c, d, e);
  }, !0);
  var Qf = Bf(function (a, b, c) {
    b = he(b);
    null != b && ((b = parseInt(b, 10)), sd(a, c, 0), nd(a.g, b));
  });
  function Rf(a) {
    return function () {
      var b = new qd();
      tf(this.M, b, sf(a));
      rd(b, b.g.end());
      for (
        var c = new Uint8Array(b.h), d = b.j, e = d.length, f = 0, g = 0;
        g < e;
        g++
      ) {
        var h = d[g];
        c.set(h, f);
        f += h.length;
      }
      b.j = [c];
      return c;
    };
  }
  function Tf(a) {
    return function (b) {
      if (null == b || "" == b) b = new a();
      else {
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error(void 0);
        xd(b, 32);
        b = ue(a, b);
      }
      return b;
    };
  }
  var Uf = function (a, b, c) {
      c = void 0 === c ? {} : c;
      this.error = a;
      this.context = b.context;
      this.msg = b.message || "";
      this.id = b.id || "jserror";
      this.meta = c;
    },
    Vf = function (a) {
      return !!(a.error && a.meta && a.id);
    };
  var Wf = function (a) {
      this.g = a;
      this.defaultValue = !1;
    },
    Xf = function (a) {
      var b = void 0 === b ? [] : b;
      this.g = a;
      this.defaultValue = b;
    };
  var Yf = function () {},
    Zf = function (a) {
      var b = !1,
        c;
      return function () {
        b || ((c = a()), (b = !0));
        return c;
      };
    },
    $f = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    },
    ag = function (a) {
      var b = 0,
        c = !1,
        d = [],
        e = function () {
          b = 0;
          c && ((c = !1), f());
        },
        f = function () {
          b = w.setTimeout(e, 1e3);
          var g = d;
          d = [];
          a.apply(void 0, g);
        };
      return function (g) {
        d = arguments;
        b ? (c = !0) : f();
      };
    };
  var bg = Zf(function () {
    var a = !1;
    try {
      var b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        },
      });
      w.addEventListener("test", null, b);
    } catch (c) {}
    return a;
  });
  function cg(a) {
    return a ? (a.passive && bg() ? a : a.capture || !1) : !1;
  }
  var dg = function (a, b, c, d) {
      return a.addEventListener ? (a.addEventListener(b, c, cg(d)), !0) : !1;
    },
    eg = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, cg());
    };
  var C = function (a) {
    var b = "qb";
    if (a.qb && a.hasOwnProperty(b)) return a.qb;
    b = new a();
    return (a.qb = b);
  };
  var fg = function () {
    var a = {};
    this.h = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.j = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.g = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
  };
  function gg(a) {
    return C(fg).h(a.g, a.defaultValue);
  }
  function hg() {
    var a = ig;
    return C(fg).j(a.g, a.defaultValue);
  }
  var jg = jc || mc;
  function kg(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a);
  }
  function lg(a, b) {
    var c = {},
      d;
    for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
    return c;
  }
  function mg(a) {
    var b = ng,
      c;
    for (c in b) if (!a.call(void 0, b[c], c, b)) return !1;
    return !0;
  }
  function og(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b;
  }
  function pg(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = d;
    return b;
  }
  function qg(a, b) {
    var c = Pa(b),
      d = c ? b : arguments;
    for (c = c ? 0 : 1; c < d.length; c++) {
      if (null == a) return;
      a = a[d[c]];
    }
    return a;
  }
  function rg(a, b) {
    return null !== a && b in a;
  }
  function sg(a, b) {
    for (var c in a) if (a[c] == b) return !0;
    return !1;
  }
  function tg(a) {
    var b = ug,
      c;
    for (c in b) if (a.call(void 0, b[c], c, b)) return c;
  }
  function vg(a) {
    for (var b in a) return !1;
    return !0;
  }
  function wg(a) {
    for (var b in a) delete a[b];
  }
  function xg(a, b, c) {
    return null !== a && b in a ? a[b] : c;
  }
  var yg =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " "
    );
  function zg(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < yg.length; f++)
        (c = yg[f]),
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  var Ag,
    Bg = function () {
      if (void 0 === Ag) {
        var a = null,
          b = w.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: cb,
              createScript: cb,
              createScriptURL: cb,
            });
          } catch (c) {
            w.console && w.console.error(c.message);
          }
          Ag = a;
        } else Ag = a;
      }
      return Ag;
    };
  var Cg = function (a) {
    this.g = a;
  };
  Cg.prototype.toString = function () {
    return this.g + "";
  };
  var Dg = {},
    Eg = function (a) {
      var b = Bg();
      a = b ? b.createScriptURL(a) : a;
      return new Cg(a, Dg);
    };
  var Fg = function (a) {
    this.g = a;
  };
  Fg.prototype.toString = function () {
    return this.g.toString();
  };
  var Gg = {},
    Hg = new Fg("about:invalid#zClosurez", Gg);
  var Ig = {},
    Jg = function (a) {
      this.g = a;
    };
  Jg.prototype.toString = function () {
    return this.g.toString();
  };
  var Kg = new Jg("", Ig);
  var Lg = {},
    Mg = function (a) {
      this.g = a;
    };
  Mg.prototype.toString = function () {
    return this.g.toString();
  };
  var Ng = function (a) {
    return a instanceof Mg && a.constructor === Mg
      ? a.g
      : "type_error:SafeHtml";
  };
  var Og = function (a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0;
  };
  Og.prototype.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  Og.prototype.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  Og.prototype.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  var D = function (a, b) {
    this.width = a;
    this.height = b;
  };
  l = D.prototype;
  l.aspectRatio = function () {
    return this.width / this.height;
  };
  l.isEmpty = function () {
    return !(this.width * this.height);
  };
  l.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  l.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  l.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  var Pg = function (a) {
      return decodeURIComponent(a.replace(/\+/g, " "));
    },
    Qg = function (a, b) {
      a.length > b && (a = a.substring(0, b - 3) + "...");
      return a;
    },
    Rg = String.prototype.repeat
      ? function (a, b) {
          return a.repeat(b);
        }
      : function (a, b) {
          return Array(b + 1).join(a);
        },
    Sg = function (a) {
      return null == a ? "" : String(a);
    },
    Tg = (2147483648 * Math.random()) | 0,
    Ug = function (a) {
      return String(a).replace(/\-([a-z])/g, function (b, c) {
        return c.toUpperCase();
      });
    },
    Vg = function () {
      return "googleAvInapp".replace(/([A-Z])/g, "-$1").toLowerCase();
    },
    Wg = function (a) {
      return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
        return c + d.toUpperCase();
      });
    },
    Xg = function (a) {
      isFinite(a) && (a = String(a));
      return "string" === typeof a
        ? /^\s*-?0x/i.test(a)
          ? parseInt(a, 16)
          : parseInt(a, 10)
        : NaN;
    };
  var $g = function (a) {
      return a ? new Yg(Zg(a)) : eb || (eb = new Yg());
    },
    ah = function (a) {
      var b = document;
      return "string" === typeof a ? b.getElementById(a) : a;
    },
    ch = function (a, b) {
      kg(b, function (c, d) {
        "style" == d
          ? (a.style.cssText = c)
          : "class" == d
          ? (a.className = c)
          : "for" == d
          ? (a.htmlFor = c)
          : bh.hasOwnProperty(d)
          ? a.setAttribute(bh[d], c)
          : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
          ? a.setAttribute(d, c)
          : (a[d] = c);
      });
    },
    bh = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      frameborder: "frameBorder",
      height: "height",
      maxlength: "maxLength",
      nonce: "nonce",
      role: "role",
      rowspan: "rowSpan",
      type: "type",
      usemap: "useMap",
      valign: "vAlign",
      width: "width",
    },
    eh = function (a) {
      a = a.document;
      a = dh(a) ? a.documentElement : a.body;
      return new D(a.clientWidth, a.clientHeight);
    },
    fh = function (a) {
      var b = a.scrollingElement
        ? a.scrollingElement
        : !mc && dh(a)
        ? a.documentElement
        : a.body || a.documentElement;
      a = a.parentWindow || a.defaultView;
      return jc && a.pageYOffset != b.scrollTop
        ? new Og(b.scrollLeft, b.scrollTop)
        : new Og(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
    },
    E = function (a) {
      return a ? a.parentWindow || a.defaultView : window;
    },
    ih = function (a, b, c) {
      var d = arguments,
        e = document,
        f = d[1],
        g = gh(e, String(d[0]));
      f &&
        ("string" === typeof f
          ? (g.className = f)
          : Array.isArray(f)
          ? (g.className = f.join(" "))
          : ch(g, f));
      2 < d.length && hh(e, g, d, 2);
      return g;
    },
    hh = function (a, b, c, d) {
      function e(h) {
        h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h);
      }
      for (; d < c.length; d++) {
        var f = c[d];
        if (!Pa(f) || (Qa(f) && 0 < f.nodeType)) e(f);
        else {
          a: {
            if (f && "number" == typeof f.length) {
              if (Qa(f)) {
                var g =
                  "function" == typeof f.item || "string" == typeof f.item;
                break a;
              }
              if ("function" === typeof f) {
                g = "function" == typeof f.item;
                break a;
              }
            }
            g = !1;
          }
          Mb(g ? $b(f) : f, e);
        }
      }
    },
    gh = function (a, b) {
      b = String(b);
      "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
      return a.createElement(b);
    },
    dh = function (a) {
      return "CSS1Compat" == a.compatMode;
    },
    jh = function (a) {
      a && a.parentNode && a.parentNode.removeChild(a);
    },
    kh = function (a) {
      var b;
      if (jg && (b = a.parentElement)) return b;
      b = a.parentNode;
      return Qa(b) && 1 == b.nodeType ? b : null;
    },
    lh = function (a, b) {
      if (!a || !b) return !1;
      if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
      if ("undefined" != typeof a.compareDocumentPosition)
        return a == b || !!(a.compareDocumentPosition(b) & 16);
      for (; b && a != b; ) b = b.parentNode;
      return b == a;
    },
    Zg = function (a) {
      return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    },
    mh = function (a) {
      try {
        return (
          a.contentWindow || (a.contentDocument ? E(a.contentDocument) : null)
        );
      } catch (b) {}
      return null;
    },
    nh = function (a, b) {
      a && (a = a.parentNode);
      for (var c = 0; a; ) {
        if (b(a)) return a;
        a = a.parentNode;
        c++;
      }
      return null;
    },
    Yg = function (a) {
      this.g = a || w.document || document;
    };
  l = Yg.prototype;
  l.getElementsByTagName = function (a, b) {
    return (b || this.g).getElementsByTagName(String(a));
  };
  l.appendChild = function (a, b) {
    a.appendChild(b);
  };
  l.append = function (a, b) {
    hh(Zg(a), a, arguments, 1);
  };
  l.canHaveChildren = function (a) {
    if (1 != a.nodeType) return !1;
    switch (a.tagName) {
      case "APPLET":
      case "AREA":
      case "BASE":
      case "BR":
      case "COL":
      case "COMMAND":
      case "EMBED":
      case "FRAME":
      case "HR":
      case "IMG":
      case "INPUT":
      case "IFRAME":
      case "ISINDEX":
      case "KEYGEN":
      case "LINK":
      case "NOFRAMES":
      case "NOSCRIPT":
      case "META":
      case "OBJECT":
      case "PARAM":
      case "SCRIPT":
      case "SOURCE":
      case "STYLE":
      case "TRACK":
      case "WBR":
        return !1;
    }
    return !0;
  };
  l.contains = lh;
  var th = function () {
      return tb && wb
        ? wb.mobile
        : !oh() && (z("iPod") || z("iPhone") || z("Android") || z("IEMobile"));
    },
    oh = function () {
      return tb && wb
        ? !wb.mobile && (z("iPad") || z("Android") || z("Silk"))
        : z("iPad") || (z("Android") && !z("Mobile")) || z("Silk");
    };
  var uh = RegExp(
      "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
    ),
    vh = function (a) {
      var b = a.match(uh);
      a = b[1];
      var c = b[3];
      b = b[4];
      var d = "";
      a && (d += a + ":");
      c && ((d = d + "//" + c), b && (d += ":" + b));
      return d;
    },
    wh = function (a, b) {
      if (a) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
            e = null;
          if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
          } else f = a[c];
          b(f, e ? Pg(e) : "");
        }
      }
    },
    xh = /#|$/,
    yh = function (a, b) {
      var c = a.search(xh);
      a: {
        var d = 0;
        for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
          var f = a.charCodeAt(d - 1);
          if (38 == f || 63 == f)
            if (
              ((f = a.charCodeAt(d + e)), !f || 61 == f || 38 == f || 35 == f)
            )
              break a;
          d += e + 1;
        }
        d = -1;
      }
      if (0 > d) return null;
      e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return Pg(a.slice(d, -1 !== e ? e : 0));
    };
  var zh = function (a) {
    var b = [],
      c = [],
      d = {},
      e = function (f, g) {
        var h = g + "  ";
        try {
          if (void 0 === f) b.push("undefined");
          else if (null === f) b.push("NULL");
          else if ("string" === typeof f)
            b.push('"' + f.replace(/\n/g, "\n" + g) + '"');
          else if ("function" === typeof f)
            b.push(String(f).replace(/\n/g, "\n" + g));
          else if (Qa(f)) {
            f[Ra] || c.push(f);
            var k = Ta(f);
            if (d[k]) b.push("*** reference loop detected (id=" + k + ") ***");
            else {
              d[k] = !0;
              b.push("{");
              for (var m in f)
                "function" !== typeof f[m] &&
                  (b.push("\n"), b.push(h), b.push(m + " = "), e(f[m], h));
              b.push("\n" + g + "}");
              delete d[k];
            }
          } else b.push(f);
        } catch (n) {
          b.push("*** " + n + " ***");
        }
      };
    e(a, "");
    for (a = 0; a < c.length; a++) Ua(c[a]);
    return b.join("");
  }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var Ah = function (a) {
    this.Rf = a;
  };
  function Bh(a) {
    return new Ah(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var Ch = [
    Bh("data"),
    Bh(""),
    Bh(""),
    Bh("mailto"),
    Bh("ftp"),
    new Ah(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function Dh(a) {
    if ("undefined" !== typeof MediaSource && a instanceof MediaSource)
      return new Fg(URL.createObjectURL(a), Gg);
    var b = a.type.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i);
    if (
      2 !== (null == b ? void 0 : b.length) ||
      !(
        /^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon|heic|heif|avif|x-ms-bmp)$/i.test(
          b[1]
        ) ||
        /^video\/(?:mpeg|mp4|ogg|webm|x-matroska|quicktime|x-ms-wmv)$/i.test(
          b[1]
        ) ||
        /^audio\/(?:3gpp2|3gpp|aac|amr|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(
          b[1]
        ) ||
        /^font\/\w+/i.test(b[1])
      )
    )
      throw Error("");
    return new Fg(URL.createObjectURL(a), Gg);
  }
  var Eh = "function" === typeof URL;
  function Fh(a, b) {
    if (1 === a.nodeType) {
      var c = a.tagName;
      if ("SCRIPT" === c || "STYLE" === c) throw Error("");
    }
    a.innerHTML = Ng(b);
  }
  function Gh(a, b) {
    a.src =
      b instanceof Cg && b.constructor === Cg
        ? b.g
        : "type_error:TrustedResourceUrl";
    var c, d;
    (c = (b =
      null ==
      (d = (c = ((a.ownerDocument && a.ownerDocument.defaultView) || window)
        .document).querySelector)
        ? void 0
        : d.call(c, "script[nonce]"))
      ? b.nonce || b.getAttribute("nonce") || ""
      : "") && a.setAttribute("nonce", c);
  }
  function Hh(a, b) {
    a.write(Ng(b));
  }
  var Ih = function (a) {
      try {
        return !!a && null != a.location.href && fc(a, "foo");
      } catch (b) {
        return !1;
      }
    },
    Kh = function (a) {
      var b = void 0 === b ? !1 : b;
      var c = void 0 === c ? w : c;
      for (var d = 0; c && 40 > d++ && ((!b && !Ih(c)) || !a(c)); ) c = Jh(c);
    },
    Lh = function () {
      var a = window;
      Kh(function (b) {
        a = b;
        return !1;
      });
      return a;
    },
    Jh = function (a) {
      try {
        var b = a.parent;
        if (b && b != a) return b;
      } catch (c) {}
      return null;
    },
    Mh = function () {
      var a = window;
      return Ih(a.top) ? a.top : null;
    },
    Nh = function () {
      if (!globalThis.crypto) return Math.random();
      try {
        var a = new Uint32Array(1);
        globalThis.crypto.getRandomValues(a);
        return a[0] / 65536 / 65536;
      } catch (b) {
        return Math.random();
      }
    },
    Oh = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    },
    Ph = function (a) {
      var b = a.length;
      if (0 == b) return 0;
      for (var c = 305419896, d = 0; d < b; d++)
        c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
      return 0 < c ? c : 4294967296 + c;
    };
  function Qh(a) {
    var b, c;
    return null !=
      (c = null == (b = /https?:\/\/[^\/]+/.exec(a)) ? void 0 : b[0])
      ? c
      : "";
  }
  var Rh = function () {
      var a = w;
      try {
        for (var b = null; b != a; b = a, a = a.parent)
          switch (a.location.protocol) {
            case "https:":
              return !0;
            case "file:":
              return !0;
            case "http:":
              return !1;
          }
      } catch (c) {}
      return !0;
    },
    Sh = function (a, b) {
      try {
        return !(!a.frames || !a.frames[b]);
      } catch (c) {
        return !1;
      }
    },
    Th = function (a, b) {
      for (var c = 0; 50 > c; ++c) {
        if (Sh(a, b)) return a;
        if (!(a = Jh(a))) break;
      }
      return null;
    },
    Uh = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    },
    Vh = function (a) {
      for (var b = a; a && a != a.parent; ) (a = a.parent), Ih(a) && (b = a);
      return b;
    };
  var Wh = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"),
    Yh = function () {
      var a = (this.g = w) || w;
      this.h = a.top == a ? 1 : Ih(a.top) ? 2 : 3;
      3 != this.h &&
        ((a = w.top.document),
        (this.j = a.referrer),
        Date.parse(a.lastModified));
      Xh(this.g);
    },
    ai = function (a) {
      a = a || Xh();
      for (
        var b = new Zh(w.location.href, !1), c = null, d = a.length - 1, e = d;
        0 <= e;
        --e
      ) {
        var f = a[e];
        !c && Wh.test(f.url) && (c = f);
        if (f.url && !f.md) {
          b = f;
          break;
        }
      }
      e = null;
      f = a.length && a[d].url;
      0 != b.depth && f && (e = a[d]);
      return new $h(b, e, c);
    },
    Xh = function (a) {
      var b = a || w,
        c = [],
        d = null;
      do {
        var e = b;
        if (Ih(e)) {
          var f = e.location.href;
          d = (e.document && e.document.referrer) || null;
        } else (f = d), (d = null);
        c.push(new Zh(f || ""));
        try {
          b = e.parent;
        } catch (g) {
          b = null;
        }
      } while (b && e != b);
      e = 0;
      for (b = c.length - 1; e <= b; ++e) c[e].depth = b - e;
      e = a || w;
      if (
        e.location &&
        e.location.ancestorOrigins &&
        e.location.ancestorOrigins.length == c.length - 1
      )
        for (a = 1; a < c.length; ++a)
          (b = c[a]),
            b.url ||
              ((b.url = e.location.ancestorOrigins[a - 1] || ""), (b.md = !0));
      return c;
    },
    bi = function () {
      var a = ai();
      return a.h ? a.h.url : a.g.url;
    },
    $h = function (a, b, c) {
      this.g = a;
      this.h = b;
      this.j = c;
    },
    Zh = function (a, b) {
      this.url = a;
      this.md = !!b;
      this.depth = null;
    };
  var ci = null;
  function di() {
    var a = void 0 === a ? w : a;
    return (a = a.performance) && a.now && a.timing
      ? Math.floor(a.now() + a.timing.navigationStart)
      : Date.now();
  }
  function ei() {
    var a = void 0 === a ? w : a;
    return (a = a.performance) && a.now ? a.now() : null;
  }
  function fi(a, b) {
    b = void 0 === b ? w : b;
    var c, d;
    return (
      (null == (c = b.performance)
        ? void 0
        : null == (d = c.timing)
        ? void 0
        : d[a]) || 0
    );
  }
  function gi() {
    var a = void 0 === a ? w : a;
    var b = Math.min(
      fi("domLoading", a) || Infinity,
      fi("domInteractive", a) || Infinity
    );
    return Infinity === b
      ? Math.max(fi("responseEnd", a), fi("navigationStart", a))
      : b;
  }
  var hi = function (a, b, c, d) {
    this.label = a;
    this.type = b;
    this.value = c;
    this.duration = void 0 === d ? 0 : d;
    this.taskId = this.slotId = void 0;
    this.uniqueId = Math.random();
  };
  var ii = w.performance,
    ji = !!(ii && ii.mark && ii.measure && ii.clearMarks),
    ki = Zf(function () {
      var a;
      if ((a = ji)) {
        var b;
        if (null === ci) {
          ci = "";
          try {
            a = "";
            try {
              a = w.top.location.hash;
            } catch (c) {
              a = w.location.hash;
            }
            a && (ci = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "");
          } catch (c) {}
        }
        b = ci;
        a = !!b.indexOf && 0 <= b.indexOf("1337");
      }
      return a;
    }),
    li = function (a, b) {
      this.A = [];
      this.g = b || w;
      var c = null;
      b &&
        ((b.google_js_reporting_queue = b.google_js_reporting_queue || []),
        (this.A = b.google_js_reporting_queue),
        (c = b.google_measure_js_timing));
      this.j = ki() || (null != c ? c : Math.random() < a);
    };
  li.prototype.B = function () {
    this.j = !1;
    this.A != this.g.google_js_reporting_queue &&
      (ki() && Mb(this.A, mi), (this.A.length = 0));
  };
  li.prototype.I = function (a) {
    !this.j || 2048 < this.A.length || this.A.push(a);
  };
  var mi = function (a) {
    a &&
      ii &&
      ki() &&
      (ii.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
      ii.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"));
  };
  li.prototype.start = function (a, b) {
    if (!this.j) return null;
    a = new hi(a, b, ei() || di());
    b = "goog_" + a.label + "_" + a.uniqueId + "_start";
    ii && ki() && ii.mark(b);
    return a;
  };
  li.prototype.end = function (a) {
    if (this.j && "number" === typeof a.value) {
      a.duration = (ei() || di()) - a.value;
      var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
      ii && ki() && ii.mark(b);
      this.I(a);
    }
  };
  var ni = function () {
      this.j = "&";
      this.h = {};
      this.o = 0;
      this.g = [];
    },
    oi = function (a, b) {
      var c = {};
      c[a] = b;
      return [c];
    },
    qi = function (a, b, c, d, e) {
      var f = [];
      Oh(a, function (g, h) {
        (g = pi(g, b, c, d, e)) && f.push(h + "=" + g);
      });
      return f.join(b);
    },
    pi = function (a, b, c, d, e) {
      if (null == a) return "";
      b = b || "&";
      c = c || ",$";
      "string" == typeof c && (c = c.split(""));
      if (a instanceof Array) {
        if (((d = d || 0), d < c.length)) {
          for (var f = [], g = 0; g < a.length; g++)
            f.push(pi(a[g], b, c, d + 1, e));
          return f.join(c[d]);
        }
      } else if ("object" == typeof a)
        return (
          (e = e || 0),
          2 > e ? encodeURIComponent(qi(a, b, c, d, e + 1)) : "..."
        );
      return encodeURIComponent(String(a));
    },
    ri = function (a, b, c) {
      a.g.push(b);
      a.h[b] = c;
    },
    si = function (a, b, c, d) {
      a.g.push(b);
      a.h[b] = oi(c, d);
    },
    ui = function (a, b, c) {
      b = b + "//pagead2.googlesyndication.com" + c;
      var d = ti(a) - c.length;
      if (0 > d) return "";
      a.g.sort(function (n, q) {
        return n - q;
      });
      c = null;
      for (var e = "", f = 0; f < a.g.length; f++)
        for (var g = a.g[f], h = a.h[g], k = 0; k < h.length; k++) {
          if (!d) {
            c = null == c ? g : c;
            break;
          }
          var m = qi(h[k], a.j, ",$");
          if (m) {
            m = e + m;
            if (d >= m.length) {
              d -= m.length;
              b += m;
              e = a.j;
              break;
            }
            c = null == c ? g : c;
          }
        }
      a = "";
      null != c && (a = e + "trn=" + c);
      return b + a;
    },
    ti = function (a) {
      var b = 1,
        c;
      for (c in a.h) b = c.length > b ? c.length : b;
      return 3997 - b - a.j.length - 1;
    };
  var xi = function () {
    var a = vi;
    this.l = wi;
    this.A = "jserror";
    this.o = !0;
    this.g = void 0 === a ? null : a;
    this.h = null;
    this.j = !1;
    this.B = this.Sa;
  };
  l = xi.prototype;
  l.Sc = function (a) {
    this.h = a;
  };
  l.Hd = function (a) {
    this.A = a;
  };
  l.Id = function (a) {
    this.o = a;
  };
  l.Jd = function (a) {
    this.j = a;
  };
  l.tb = function (a, b, c) {
    try {
      if (this.g && this.g.j) {
        var d = this.g.start(a.toString(), 3);
        var e = b();
        this.g.end(d);
      } else e = b();
    } catch (h) {
      b = this.o;
      try {
        mi(d), (b = this.B(a, new Uf(h, { message: yi(h) }), void 0, c));
      } catch (k) {
        this.Sa(217, k);
      }
      if (b) {
        var f, g;
        null == (f = window.console) || null == (g = f.error) || g.call(f, h);
      } else throw h;
    }
    return e;
  };
  l.zd = function (a, b, c, d) {
    var e = this;
    return function () {
      var f = Ia.apply(0, arguments);
      return e.tb(
        a,
        function () {
          return b.apply(c, f);
        },
        d
      );
    };
  };
  l.Sa = function (a, b, c, d, e) {
    e = e || this.A;
    try {
      var f = new ni();
      si(f, 1, "context", a);
      Vf(b) || (b = new Uf(b, { message: yi(b) }));
      b.msg && si(f, 2, "msg", b.msg.substring(0, 512));
      var g = b.meta || {};
      if (this.h)
        try {
          this.h(g);
        } catch (k) {}
      if (d)
        try {
          d(g);
        } catch (k) {}
      ri(f, 3, [g]);
      var h = ai();
      h.h && si(f, 4, "top", h.h.url || "");
      ri(f, 5, [{ url: h.g.url || "" }, { url: h.g.url ? vh(h.g.url) : "" }]);
      zi(this.l, e, f, this.j, c);
    } catch (k) {
      try {
        zi(
          this.l,
          e,
          { context: "ecmserr", rctx: a, msg: yi(k), url: h && h.g.url },
          this.j,
          c
        );
      } catch (m) {}
    }
    return this.o;
  };
  var yi = function (a) {
    var b = a.toString();
    a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
    a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
    if (a.stack) {
      a = a.stack;
      var c = b;
      try {
        -1 == a.indexOf(c) && (a = c + "\n" + a);
        for (var d; a != d; )
          (d = a),
            (a = a.replace(
              RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),
              "$1"
            ));
        b = a.replace(RegExp("\n *", "g"), "\n");
      } catch (e) {
        b = c;
      }
    }
    return b;
  };
  var Bi = function (a, b, c, d, e) {
    Ai(
      a,
      b,
      void 0 === c ? null : c,
      void 0 === d ? !1 : d,
      void 0 === e ? !1 : e
    );
  };
  function Ai(a, b, c, d, e) {
    e = void 0 === e ? !1 : e;
    a.google_image_requests || (a.google_image_requests = []);
    var f = Uh("IMG", a.document);
    if (c || d) {
      var g = function (h) {
        c && c(h);
        d && Wb(a.google_image_requests, f);
        eg(f, "load", g);
        eg(f, "error", g);
      };
      dg(f, "load", g);
      dg(f, "error", g);
    }
    e && (f.attributionSrc = "");
    f.src = b;
    a.google_image_requests.push(f);
  }
  var Di = function (a, b) {
      var c = void 0 === c ? !1 : c;
      var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
      Oh(a, function (e, f) {
        if (e || 0 === e) d += "&" + f + "=" + encodeURIComponent("" + e);
      });
      Ci(d, c);
    },
    Ci = function (a, b) {
      var c = window;
      b = void 0 === b ? !1 : b;
      var d = void 0 === d ? !1 : d;
      c.fetch
        ? ((b = {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors",
          }),
          d &&
            ((b.mode = "cors"),
            "setAttributionReporting" in XMLHttpRequest.prototype
              ? (b.attributionReporting = {
                  eventSourceEligible: "true",
                  triggerEligible: "false",
                })
              : (b.headers = {
                  "Attribution-Reporting-Eligible": "event-source",
                })),
          c.fetch(a, b))
        : Bi(c, a, void 0, b, d);
    };
  var Ei = function () {
    var a;
    this.g = a = void 0 === a ? {} : a;
  };
  Ei.prototype.reset = function () {
    this.g = {};
  };
  var F = function (a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d;
  };
  F.prototype.getWidth = function () {
    return this.right - this.left;
  };
  F.prototype.getHeight = function () {
    return this.bottom - this.top;
  };
  var Fi = function (a) {
    return new F(a.top, a.right, a.bottom, a.left);
  };
  l = F.prototype;
  l.contains = function (a) {
    return this && a
      ? a instanceof F
        ? a.left >= this.left &&
          a.right <= this.right &&
          a.top >= this.top &&
          a.bottom <= this.bottom
        : a.x >= this.left &&
          a.x <= this.right &&
          a.y >= this.top &&
          a.y <= this.bottom
      : !1;
  };
  l.expand = function (a, b, c, d) {
    Qa(a)
      ? ((this.top -= a.top),
        (this.right += a.right),
        (this.bottom += a.bottom),
        (this.left -= a.left))
      : ((this.top -= a),
        (this.right += Number(b)),
        (this.bottom += Number(c)),
        (this.left -= Number(d)));
    return this;
  };
  l.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
  l.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
  l.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };
  var Gi = function (a, b, c) {
    b instanceof Og
      ? ((a.left += b.x), (a.right += b.x), (a.top += b.y), (a.bottom += b.y))
      : ((a.left += b),
        (a.right += b),
        "number" === typeof c && ((a.top += c), (a.bottom += c)));
    return a;
  };
  var Hi = function (a, b, c, d) {
      this.left = a;
      this.top = b;
      this.width = c;
      this.height = d;
    },
    Ii = function (a) {
      return new F(a.top, a.left + a.width, a.top + a.height, a.left);
    };
  l = Hi.prototype;
  l.contains = function (a) {
    return a instanceof Og
      ? a.x >= this.left &&
          a.x <= this.left + this.width &&
          a.y >= this.top &&
          a.y <= this.top + this.height
      : this.left <= a.left &&
          this.left + this.width >= a.left + a.width &&
          this.top <= a.top &&
          this.top + this.height >= a.top + a.height;
  };
  l.getSize = function () {
    return new D(this.width, this.height);
  };
  l.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  l.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  l.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  function Ji(a) {
    var b = Ia.apply(1, arguments);
    if (0 === b.length) return Eg(a[0]);
    for (var c = a[0], d = 0; d < b.length; d++)
      c += encodeURIComponent(b[d]) + a[d + 1];
    return Eg(c);
  }
  function Ki(a) {
    for (var b = Ia.apply(1, arguments), c = a[0], d = 0; d < a.length - 1; d++)
      c += String(b[d]) + a[d + 1];
    if (/[<>]/.test(c))
      throw Error("Forbidden characters in style string: " + c);
    return new Jg(c, Ig);
  }
  function Li(a) {
    a = void 0 === a ? w : a;
    var b = a.context || a.AMP_CONTEXT_DATA;
    if (!b)
      try {
        b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
      } catch (e) {}
    var c, d;
    return (null == (c = b) ? 0 : c.pageViewId) &&
      (null == (d = b) ? 0 : d.canonicalUrl)
      ? b
      : null;
  }
  var Mi = function () {
      this.S = {};
    },
    Ni = function () {
      var a = Li(window);
      if (a) {
        if (a) {
          var b = a.pageViewId;
          a = a.clientId;
          "string" === typeof a && (b += a.replace(/\D/g, "").substr(0, 6));
        } else b = null;
        return +b;
      }
      b = Vh(window);
      a = b.google_global_correlator;
      a ||
        (b.google_global_correlator = a =
          1 + Math.floor(Math.random() * Math.pow(2, 43)));
      return a;
    },
    Pi = function (a, b) {
      var c = Oi[7] || "google_ps_7";
      a = a.S;
      var d = a[c];
      return void 0 === d ? ((a[c] = b()), a[c]) : d;
    },
    Qi = function (a) {
      var b = Ni();
      return Pi(a, function () {
        return b;
      });
    },
    Si = function () {
      if (Ri) var a = Ri;
      else {
        a =
          ((a = void 0 === a ? Li() : a)
            ? Ih(a.master)
              ? a.master
              : null
            : null) || window;
        var b = a.google_persistent_state_async;
        a =
          null != b &&
          "object" == typeof b &&
          null != b.S &&
          "object" == typeof b.S
            ? (Ri = b)
            : (a.google_persistent_state_async = Ri = new Mi());
      }
      return Qi(a);
    },
    Ri = null,
    Ti = {},
    Oi =
      ((Ti[8] = "google_prev_ad_formats_by_region"),
      (Ti[9] = "google_prev_ad_slotnames_by_region"),
      Ti);
  var Ui = fa(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
    Vi = function () {
      var a = void 0 === a ? "jserror" : a;
      var b = void 0 === b ? 0.01 : b;
      var c = void 0 === c ? Ji(Ui) : c;
      this.h = a;
      this.j = !1;
      this.g = null;
      this.o = !1;
      this.B = Math.random();
      this.l = b;
      this.A = this.Sa;
      this.I = c;
    };
  l = Vi.prototype;
  l.Hd = function (a) {
    this.h = a;
  };
  l.Sc = function (a) {
    this.g = a;
  };
  l.Id = function (a) {
    this.j = a;
  };
  l.Jd = function (a) {
    this.o = a;
  };
  l.Sa = function (a, b, c, d, e) {
    c = void 0 === c ? this.l : c;
    e = void 0 === e ? this.h : e;
    if ((this.o ? this.B : Math.random()) > c) return this.j;
    Vf(b) || (b = new Uf(b, { context: a, id: e }));
    if (d || this.g) (b.meta = {}), this.g && this.g(b.meta), d && d(b.meta);
    w.google_js_errors = w.google_js_errors || [];
    w.google_js_errors.push(b);
    w.error_rep_loaded ||
      ((b = w.document),
      (a = Uh("SCRIPT", b)),
      Gh(a, this.I),
      (b = b.getElementsByTagName("script")[0]) &&
        b.parentNode &&
        b.parentNode.insertBefore(a, b),
      (w.error_rep_loaded = !0));
    return this.j;
  };
  l.tb = function (a, b, c) {
    try {
      return b();
    } catch (d) {
      if (!this.A(a, d, this.l, c, this.h)) throw d;
    }
  };
  l.zd = function (a, b, c, d) {
    var e = this;
    return function () {
      var f = Ia.apply(0, arguments);
      return e.tb(
        a,
        function () {
          return b.apply(c, f);
        },
        d
      );
    };
  };
  var Wi = function (a) {
      return a.prerendering
        ? 3
        : { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
            a.visibilityState ||
              a.webkitVisibilityState ||
              a.mozVisibilityState ||
              ""
          ] || 0;
    },
    Xi = function (a) {
      var b;
      a.visibilityState
        ? (b = "visibilitychange")
        : a.mozVisibilityState
        ? (b = "mozvisibilitychange")
        : a.webkitVisibilityState && (b = "webkitvisibilitychange");
      return b;
    };
  var Yi = function (a) {
    a = a._google_rum_ns_ = a._google_rum_ns_ || {};
    return (a.pq = a.pq || []);
  };
  function Zi(a) {
    a = null === a ? "null" : void 0 === a ? "undefined" : a;
    var b = Bg();
    a = b ? b.createHTML(a) : a;
    return new Mg(a, Lg);
  }
  function $i(a, b, c) {
    Oh(b, function (d, e) {
      var f = c && c[e];
      (!d && 0 !== d) ||
        f ||
        ((a +=
          "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(d))),
        c && (c[e] = !0));
    });
    return a;
  }
  var fj = function (a, b, c, d, e, f, g, h) {
    f = void 0 === f ? Infinity : f;
    g = void 0 === g ? !1 : g;
    li.call(this, a, h);
    var k = this;
    this.H = b;
    this.domain = c;
    this.path = d;
    this.V = e;
    this.K = 0;
    this.l = {};
    this.G = {};
    this.aa = [];
    this.report = {};
    this.h = 0;
    this.F = [];
    this.J = f;
    this.H = b;
    this.domain = c;
    this.path = d;
    this.V = e;
    a = this.g.navigator;
    this.Z = !("csi.gstatic.com" !== this.domain || !a || !a.sendBeacon);
    (this.g.performance && this.g.performance.now) || aj(this, "dat", 1);
    a && a.deviceMemory && aj(this, "dmc", a.deviceMemory);
    this.g === this.g.top && aj(this, "top", 1);
    this.X = !g;
    this.N = function () {
      k.g.setTimeout(function () {
        bj(k);
      }, 1100);
    };
    this.U = function () {
      aj(k, "uet", 2);
      for (var n = t(k.aa), q = n.next(); !q.done; q = n.next()) {
        q = q.value;
        try {
          q();
        } catch (v) {}
      }
      n = k.g;
      var r = void 0 === r ? {} : r;
      "function" === typeof window.CustomEvent
        ? (q = new CustomEvent("rum_blp", r))
        : ((q = document.createEvent("CustomEvent")),
          q.initCustomEvent("rum_blp", !!r.bubbles, !!r.cancelable, r.detail));
      n.dispatchEvent(q);
      bj(k);
      null != k.l.uet && ((k.o -= 3 + k.l.uet.length + 2), delete k.l.uet);
    };
    this.ha = ag(function () {
      bj(k);
    });
    this.ba = function () {
      var n = k.g.document;
      (null != n.hidden
        ? n.hidden
        : null != n.mozHidden
        ? n.mozHidden
        : null != n.webkitHidden && n.webkitHidden) && k.ha();
    };
    this.D = this.g.setTimeout(function () {
      bj(k);
    }, 5e3);
    this.o = b.length + c.length + d.length + e.length + 3;
    Mb(this.A, function (n) {
      cj(k, n);
    });
    b = Yi(this.g);
    var m = function () {
      var n = Ia.apply(0, arguments)[0],
        q = n[0];
      n = n[1];
      var r = q.length + n.length + 2;
      8e3 < k.o + k.h + r && bj(k);
      k.F.push([q, n]);
      k.h += r;
      dj(k);
      return 0;
    };
    Mb(b, function (n) {
      return m(n);
    });
    b.length = 0;
    b.push = m;
    aj(this, "puid", (this.K + 1).toString(36) + "~" + Date.now().toString(36));
    ej(this);
  };
  u(fj, li);
  var ej = function (a) {
      "complete" === a.g.document.readyState
        ? a.g.setTimeout(function () {
            bj(a);
          }, 0)
        : dg(a.g, "load", a.N);
      var b = Xi(a.g.document);
      "undefined" !== typeof b && dg(a.g, b, a.ba);
      dg(a.g, "pagehide", a.U);
    },
    aj = function (a, b, c) {
      c = String(c);
      a.o =
        null != a.l[b]
          ? a.o + (c.length - a.l[b].length)
          : a.o + (b.length + c.length + 2);
      a.l[b] = c;
    },
    ij = function (a, b, c, d, e) {
      e = void 0 === e ? "" : e;
      var f = gj(a, b, c, d, e);
      8e3 < a.o + a.h + f && (bj(a), (f = b.length + c.length + 2));
      hj(a, b, c, d, e);
      a.h += f;
      dj(a);
    },
    gj = function (a, b, c, d, e) {
      return null == a.report[b]
        ? b.length + c.length + 2
        : d
        ? c.length + (void 0 === e ? "" : e).length
        : c.length - a.report[b].length;
    },
    hj = function (a, b, c, d, e) {
      a.report[b] =
        d && null != a.report[b]
          ? a.report[b] + ("" + (void 0 === e ? "" : e) + c)
          : c;
    },
    dj = function (a) {
      6e3 <= a.o + a.h && bj(a);
    },
    bj = function (a) {
      if (a.j && a.X) {
        try {
          a.h && (a.sendBeacon(a.report), a.K === a.J && a.B());
        } catch (b) {
          new Vi().Sa(358, b);
        }
        a.report = {};
        a.h = 0;
        a.A.length = 0;
        a.g.clearTimeout(a.D);
        a.D = 0;
      }
    },
    jj = function (a, b) {
      var c = a.H + "//" + a.domain + a.path + a.V,
        d = {};
      c = $i(c, a.l, d);
      c = $i(c, b, d);
      b = a.g;
      b.google_timing_params &&
        ((c = $i(c, b.google_timing_params, d)),
        (b.google_timing_params = void 0));
      Mb(a.F, function (e) {
        var f = t(e);
        e = f.next().value;
        f = f.next().value;
        var g = {};
        c = $i(c, ((g[e] = f), g));
      });
      a.F.length = 0;
      return c;
    };
  fj.prototype.sendBeacon = function (a) {
    this.K++;
    a = jj(this, a);
    var b = !1;
    try {
      b = !!(
        this.Z &&
        this.g.navigator &&
        this.g.navigator.sendBeacon(a, null)
      );
    } catch (c) {
      this.Z = !1;
    }
    b || Bi(this.g, a);
    aj(this, "puid", (this.K + 1).toString(36) + "~" + Date.now().toString(36));
  };
  var cj = function (a, b) {
    var c = "met." + b.type,
      d =
        "number" === typeof b.value
          ? Math.round(b.value).toString(36)
          : b.value,
      e = Math.round(b.duration);
    b =
      "" +
      b.label +
      (null != b.slotId ? "_" + b.slotId : "") +
      ("." + d) +
      (0 < e ? "_" + e.toString(36) : "") +
      (null != b.taskId ? "__" + Math.round(b.taskId).toString(36) : "");
    ij(a, c, b, !0, "~");
  };
  fj.prototype.I = function (a) {
    this.j && this.K < this.J && (li.prototype.I.call(this, a), cj(this, a));
  };
  fj.prototype.B = function () {
    li.prototype.B.call(this);
    this.g.clearTimeout(this.D);
    this.h = this.D = 0;
    this.report = {};
    wg(this.G);
    wg(this.l);
    eg(this.g, "load", this.N);
    eg(this.g, "pagehide", this.U);
  };
  var G = function () {
      this.g = new fj(
        1,
        "https:",
        "csi.gstatic.com",
        "/csi?v=2&s=",
        "ima",
        void 0,
        !0
      );
      var a = Si();
      null != a && aj(this.g, "c", a);
      a = parseInt(this.g.l.c, 10) / 2;
      null != a && aj(this.g, "slotId", a);
    },
    I = function (a, b, c) {
      if (null != c) {
        a = a.g;
        var d = b + "=" + c;
        a.G[d] || (ij(a, b, c, !1), 1e3 > d.length && (a.G[d] = !0));
      }
    },
    kj = function (a, b) {
      for (var c in b)
        b[c] =
          "object" === typeof b[c]
            ? encodeURIComponent(JSON.stringify(b[c]))
            : encodeURIComponent(String(b[c]));
      a = a.g;
      var d = !1;
      c = 0;
      for (var e = t(Object.keys(b)), f = e.next(); !f.done; f = e.next())
        (f = f.value),
          null != a.report[f] && (d = !0),
          (c += gj(a, f, b[f], !1));
      (8e3 < a.o + a.h + c || d) && bj(a);
      d = t(Object.keys(b));
      for (f = d.next(); !f.done; f = d.next())
        (e = f.value), hj(a, e, b[e], !1);
      a.h += c;
      dj(a);
    },
    J = function (a) {
      var b = G.g().g;
      b.j && b.I(new hi(a, 4, di() - 0, 0));
    };
  G.prototype.recordClick = function (a, b, c, d) {
    for (
      var e = !1, f = "notag";
      void 0 != d && d != document.documentElement;

    ) {
      var g = void 0,
        h = void 0;
      if (
        (null == (g = d) ? 0 : g.getAttribute("data-ck-navigates")) ||
        (null == (h = d) ? 0 : h.getAttribute("data-ck-tag"))
      ) {
        g = f = void 0;
        e =
          null !=
          (g = null == (f = d) ? void 0 : f.getAttribute("data-ck-navigates"))
            ? g
            : !1;
        h = g = void 0;
        f =
          null != (h = null == (g = d) ? void 0 : g.getAttribute("data-ck-tag"))
            ? h
            : "notag";
        break;
      }
      g = void 0;
      d = null != (g = d.parentElement) ? g : void 0;
    }
    d = this.g;
    d.j && d.I(new hi(a + "_" + b + "x" + c + "|" + e + "|" + f, 4, di(), 0));
  };
  G.g = function () {
    return C(G);
  };
  var lj = function (a) {
      return /^\s*$/.test(a)
        ? !1
        : /^[\],:{}\s\u2028\u2029]*$/.test(
            a
              .replace(/\\["\\\/bfnrtu]/g, "@")
              .replace(
                /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                "]"
              )
              .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")
          );
    },
    mj = function (a) {
      try {
        return w.JSON.parse(a);
      } catch (b) {}
      a = String(a);
      if (lj(a))
        try {
          return eval("(" + a + ")");
        } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    },
    oj = function () {
      this.g = nj;
    },
    pj = function (a, b, c) {
      if (null == b) c.push("null");
      else {
        if ("object" == typeof b) {
          if (Array.isArray(b)) {
            var d = b;
            b = d.length;
            c.push("[");
            for (var e = "", f = 0; f < b; f++)
              c.push(e),
                (e = d[f]),
                pj(a, a.g ? a.g.call(d, String(f), e) : e, c),
                (e = ",");
            c.push("]");
            return;
          }
          if (
            b instanceof String ||
            b instanceof Number ||
            b instanceof Boolean
          )
            b = b.valueOf();
          else {
            c.push("{");
            f = "";
            for (d in b)
              Object.prototype.hasOwnProperty.call(b, d) &&
                ((e = b[d]),
                "function" != typeof e &&
                  (c.push(f),
                  qj(d, c),
                  c.push(":"),
                  pj(a, a.g ? a.g.call(b, d, e) : e, c),
                  (f = ",")));
            c.push("}");
            return;
          }
        }
        switch (typeof b) {
          case "string":
            qj(b, c);
            break;
          case "number":
            c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
            break;
          case "boolean":
            c.push(String(b));
            break;
          case "function":
            c.push("null");
            break;
          default:
            throw Error("Unknown type: " + typeof b);
        }
      }
    },
    rj = {
      '"': '\\"',
      "\\": "\\\\",
      "/": "\\/",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\v": "\\u000b",
    },
    sj = /\uffff/.test("\uffff")
      ? /[\\"\x00-\x1f\x7f-\uffff]/g
      : /[\\"\x00-\x1f\x7f-\xff]/g,
    qj = function (a, b) {
      b.push(
        '"',
        a.replace(sj, function (c) {
          var d = rj[c];
          d ||
            ((d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).slice(1)),
            (rj[c] = d));
          return d;
        }),
        '"'
      );
    };
  var tj = function () {
      this.j = null;
      this.g = "missing-id";
      this.h = !1;
    },
    vj = function (a) {
      var b = null;
      try {
        b = document.getElementsByClassName("lima-exp-data");
      } catch (c) {
        return uj("missing-element", a.g), null;
      }
      if (1 < b.length) return uj("multiple-elements", a.g), null;
      b = b[0];
      return b ? b.innerHTML : (uj("missing-element", a.g), null);
    },
    xj = function () {
      var a = wj,
        b = vj(a);
      if (null !== b)
        if (lj(b)) {
          var c = JSON.parse(b);
          b = c.experimentIds;
          var d = c.binaryIdentifier;
          c = c.adEventId;
          var e = "string" === typeof d;
          if ("string" == typeof c) {
            var f = G.g();
            null != c && aj(f.g, "qqid", c);
          }
          e && (a.g = d);
          "string" !== typeof b
            ? uj("missing-flags", a.g)
            : (e || uj("missing-binary-id", a.g), (a.j = b));
        } else uj("invalid-json", a.g);
    };
  tj.prototype.reset = function () {
    this.j = null;
    this.g = "missing-id";
  };
  var zj = function (a, b, c, d, e) {
      this.id = a;
      this.C = b;
      this.o = c;
      this.g = !1;
      this.j = d;
      this.h = e;
      this.o && yj(this);
    },
    K = function (a) {
      return a.g || a.o;
    },
    yj = function (a) {
      if (a.j && a.h) {
        var b = a.h;
        (a = a.j) && Object.assign(b.g, a);
      }
    },
    Aj = function () {
      this.g = [];
    },
    Bj = function () {
      this.g = new Map();
      this.h = !1;
      this.l = new Aj();
      this.A = new zj(0, 0, !1);
      this.j = [this.l];
      this.o = new Ei();
    },
    L = function (a) {
      var b = Cj;
      if (
        b.h ||
        b.g.has(a.id) ||
        (null == a.C && null == a.control) ||
        0 == a.rf
      )
        return b.A;
      var c = b.l;
      if (null != a.control)
        for (var d = t(b.j), e = d.next(); !e.done; e = d.next()) {
          if (((e = e.value), e.g.includes(a.control))) {
            c = e;
            break;
          }
        }
      else null != a.P && (c = a.P);
      d = 0;
      null != a.control ? (d = a.control.C) : null != a.C && (d = a.C);
      a = new zj(a.id, d, !!a.li, a.flags, b.o);
      c.g.push(a);
      b.j.includes(c) || b.j.push(c);
      b.g.set(a.id, a);
      return a;
    },
    Dj = function () {
      var a = Cj;
      return [].concat(ha(a.g.keys())).filter(function (b) {
        return K(this.g.get(b));
      }, a);
    },
    Ej = function (a) {
      var b = Cj;
      b.h || (a.g(b.j, b.g), (b.h = !0));
    };
  Bj.prototype.reset = function () {
    for (var a = t(this.g), b = a.next(); !b.done; b = a.next())
      (b = t(b.value)), b.next(), (b.next().value.g = !1);
    this.h = !1;
    this.o.reset();
  };
  var Cj = new Bj(),
    Gj = function () {
      return Fj.g
        .filter(function (a) {
          return K(a);
        })
        .map(function (a) {
          return a.id;
        });
    };
  var Hj = function () {};
  Hj.prototype.g = function (a) {
    a = t(a);
    for (var b = a.next(); !b.done; b = a.next()) {
      var c = 0,
        d = Math.floor(1e3 * Math.random());
      b = t(b.value.g);
      for (var e = b.next(); !e.done; e = b.next())
        if (((e = e.value), (c += e.C), d < c)) {
          e.g = !0;
          yj(e);
          break;
        }
    }
  };
  var Ij = function (a) {
    this.M = A(a);
  };
  u(Ij, B);
  Ij.ga = [2, 8];
  var Jj = [3, 4, 5];
  var Kj = function (a) {
    this.M = A(a);
  };
  u(Kj, B);
  Kj.ga = [4];
  var Lj = function (a) {
    this.M = A(a);
  };
  u(Lj, B);
  Lj.ga = [5];
  var Mj = [1, 2, 3, 6, 7];
  var Nj = function (a) {
    this.M = A(a);
  };
  u(Nj, B);
  Nj.prototype.getId = function () {
    return ef(this, 1);
  };
  Nj.ga = [2];
  var Oj = function (a) {
    this.M = A(a);
  };
  u(Oj, B);
  Oj.ga = [2];
  var Pj = function (a) {
    this.M = A(a);
  };
  u(Pj, B);
  Pj.ga = [2];
  var Qj = function (a) {
    this.M = A(a);
  };
  u(Qj, B);
  Qj.ga = [1, 4, 2, 3];
  var Rj = function (a) {
    this.g = a || { cookie: "" };
  };
  l = Rj.prototype;
  l.set = function (a, b, c) {
    var d = !1;
    if ("object" === typeof c) {
      var e = c.ui;
      d = c.fg || !1;
      var f = c.domain || void 0;
      var g = c.path || void 0;
      var h = c.qe;
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === h && (h = -1);
    this.g.cookie =
      a +
      "=" +
      b +
      (f ? ";domain=" + f : "") +
      (g ? ";path=" + g : "") +
      (0 > h
        ? ""
        : 0 == h
        ? ";expires=" + new Date(1970, 1, 1).toUTCString()
        : ";expires=" + new Date(Date.now() + 1e3 * h).toUTCString()) +
      (d ? ";secure" : "") +
      (null != e ? ";samesite=" + e : "");
  };
  l.get = function (a, b) {
    for (
      var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f;
      e < d.length;
      e++
    ) {
      f = ob(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
      if (f == a) return "";
    }
    return b;
  };
  l.remove = function (a, b, c) {
    var d = void 0 !== this.get(a);
    this.set(a, "", { qe: 0, path: b, domain: c });
    return d;
  };
  l.wc = function () {
    return Sj(this).keys;
  };
  l.zb = function () {
    return Sj(this).values;
  };
  l.isEmpty = function () {
    return !this.g.cookie;
  };
  l.clear = function () {
    for (var a = Sj(this).keys, b = a.length - 1; 0 <= b; b--)
      this.remove(a[b]);
  };
  var Sj = function (a) {
    a = (a.g.cookie || "").split(";");
    for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
      (e = ob(a[f])),
        (d = e.indexOf("=")),
        -1 == d
          ? (b.push(""), c.push(e))
          : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    return { keys: b, values: c };
  };
  function Tj(a) {
    return "null" !== a.origin;
  }
  function Uj(a, b, c) {
    b = df(b, 5) && Tj(c) ? c.document.cookie : null;
    return null === b ? null : new Rj({ cookie: b }).get(a) || "";
  }
  function Vj(a, b) {
    switch (b) {
      case 1:
        return kf(a, 1, Mj);
      case 2:
        return kf(a, 2, Mj);
      case 3:
        return kf(a, 3, Mj);
      case 6:
        return kf(a, 6, Mj);
      default:
        return null;
    }
  }
  function Wj(a, b) {
    if (!a) return null;
    switch (b) {
      case 1:
        return df(a, 1);
      case 7:
        return hf(a, 3);
      case 2:
        var c = void 0 === c ? 0 : c;
        a = a.M;
        b = Dd(a);
        var d = Ie(a, b, 2),
          e = Yd(d);
        null != e && e !== d && Ke(a, b, 2, e);
        return cf(e, c);
      case 3:
        return hf(a, 3);
      case 6:
        return Me(a, 4, re);
      default:
        return null;
    }
  }
  var ck = {},
    dk = ((ck[47] = Ic), ck);
  function ek() {
    var a = fk,
      b = Xe(new Qj(gk), Pj, 2);
    1 == b.length &&
      16 == jf(b[0], 1) &&
      Xe(b[0], Oj, 2).forEach(function (c) {
        var d = ff(c),
          e = Ve(c, Ij, 3),
          f = a[jf(c, 4)];
        Xe(c, Nj, 2).forEach(function (g) {
          var h = d || ef(g, 4),
            k = g.getId(),
            m = e || Ve(g, Ij, 3);
          m = m ? kf(m, 3, Jj) : null;
          m = dk[m];
          g = Xe(g, Lj, 2);
          g = hk(g);
          L({ id: k, C: h, P: f, rf: m, flags: g });
        });
      });
  }
  function hk(a) {
    if (a.length) {
      var b = {};
      a.forEach(function (c) {
        var d = c.M;
        d = Te(d, Dd(d), Mj);
        var e = Ve(c, Kj, 4);
        e && ((c = Vj(c, d)), (d = Wj(e, d)), (b[c] = d));
      });
      return b;
    }
  }
  var ik = function (a) {
    this.h = a;
  };
  ik.prototype.g = function (a, b) {
    a = t(this.h);
    for (var c = a.next(); !c.done; c = a.next())
      if ((c = b.get(c.value))) (c.g = !0), yj(c);
  };
  var jk = function (a, b) {
    this.h = a;
    this.j = b;
  };
  u(jk, ik);
  jk.prototype.g = function (a, b) {
    ik.prototype.g.call(this, a, b);
    var c = [];
    a = [];
    for (var d = t(this.h), e = d.next(); !e.done; e = d.next())
      (e = e.value), b.get(e) ? c.push(e) : a.push(e);
    b = c.map(String).join(",") || "0";
    a = a.map(String).join(",") || "0";
    I(G.g(), "sei", b);
    I(G.g(), "nsei", a);
    I(G.g(), "bi", this.j);
  };
  var kk = function () {
    tj.apply(this, arguments);
  };
  u(kk, tj);
  var uj = function (a, b) {
    var c = G.g();
    I(c, "eee", a);
    I(c, "bi", b);
  };
  kk.g = function () {
    return C(kk);
  };
  function lk() {
    return mk
      .split(",")
      .map(function (a) {
        return parseInt(a, 10);
      })
      .filter(function (a) {
        return !isNaN(a);
      });
  }
  var Fj = new Aj(),
    nk = new Aj(),
    ok = new Aj(),
    pk = new Aj(),
    qk = new Aj(),
    rk = new Aj(),
    sk = new Aj(),
    tk = new Aj(),
    uk = new Aj(),
    vk = new Aj(),
    wk = new Aj(),
    xk = new Aj(),
    yk = new Aj(),
    zk = new Aj(),
    Ak = new Aj(),
    Bk = new Aj(),
    Ck = new Aj(),
    Dk = new Aj(),
    Ek = new Aj(),
    Fk = new Aj();
  L({ id: 457864198, C: 0 });
  L({ id: 457864188, C: 0 });
  L({ id: 45786216, C: 10 });
  L({ id: 318475490, C: 0 });
  L({ id: 324123032, C: 0 });
  L({ id: 418572103, C: 0 });
  L({ id: 420706097, C: 10 });
  L({ id: 420706098, C: 10 });
  L({ id: 21062100, C: 0 });
  L({ id: 420706105, C: 0 });
  L({ id: 420706106, C: 0 });
  L({ id: 21064018, C: 0 });
  L({ id: 21064020, C: 0 });
  L({ id: 21064022, C: 0 });
  L({ id: 21064024, C: 0 });
  L({ id: 21064075, C: 0 });
  L({ id: 21064201, C: 0 });
  L({ id: 420706142, C: 0 });
  L({ id: 21064347, C: 0 });
  L({ id: 44745813, C: 0 });
  L({ id: 44746068, C: 0 });
  L({ id: 21064565, C: 0 });
  L({ id: 21064567, C: 0 });
  L({ id: 418572006, C: 10 });
  var Gk = L({ id: 44768716, C: 10, P: wk }),
    Hk = L({ id: 44768717, C: 10, P: wk }),
    Ik = L({ id: 44787137, C: 0, P: wk }),
    Jk = L({ id: 44744588, C: 10 }),
    Kk = L({ id: 44747319, C: 10 });
  L({ id: 44740339, C: 10 });
  var Lk = L({ id: 44740340, C: 10 });
  L({ id: 44749839, C: 0 });
  var Mk = L({ id: 44749840, C: 0 });
  L({ id: 44749841, C: 0 });
  var Nk = L({ id: 44749842, C: 0 });
  L({ id: 44749843, C: 1 });
  var Ok = L({ id: 44749844, C: 1 });
  L({ id: 44749845, C: 1 });
  var Pk = L({ id: 44749846, C: 1 });
  L({ id: 44714743, C: 0 });
  L({ id: 44719216, C: 0 });
  L({ id: 44730895, C: 10 });
  L({ id: 44730896, C: 10 });
  L({ id: 44736292, C: 10 });
  L({ id: 44736293, C: 10 });
  L({ id: 44772138, C: 0, P: qk });
  L({ id: 44772139, P: qk, C: 1e3 });
  L({ id: 31061774, C: 10 });
  var Qk = L({ id: 31061775, C: 10 });
  L({ id: 44715336, C: 10 });
  L({ id: 75259410, C: 0 });
  L({ id: 75259412, C: 0 });
  L({ id: 75259413, C: 0 });
  L({ id: 44773378, C: 10, P: ok });
  var Rk = L({ id: 44773379, C: 10, P: ok });
  L({ id: 44724516, C: 0 });
  L({ id: 44726389, C: 10 });
  L({ id: 44752711, C: 50 });
  L({ id: 44752052, C: 50 });
  L({ id: 44752657, C: 50 });
  L({ id: 44781407, P: pk, C: 0 });
  L({ id: 44781408, P: pk, C: 0 });
  L({ id: 44781409, P: pk, C: 1e3 });
  L({ id: 44777647, P: rk, C: 0 });
  L({ id: 44777648, P: rk, C: 0 });
  L({ id: 44777649, P: rk, C: 1e3 });
  L({ id: 44727953, C: 0 });
  L({ id: 44782089, P: sk, C: 10 });
  L({ id: 44782090, P: sk, C: 10 });
  L({ id: 44733246, C: 10 });
  L({ id: 44750823, C: 10, P: uk });
  L({ id: 44750824, C: 10, P: uk });
  L({ id: 44794282, C: 10, P: uk });
  L({ id: 44797013, C: 10, P: uk });
  L({ id: 44797014, C: 10, P: uk });
  L({ id: 44750822, C: 10, P: uk });
  L({ id: 44737473, C: 0, P: nk });
  L({ id: 44771450, C: 0, P: nk });
  L({ id: 44751889, C: 10 });
  L({ id: 44751890, C: 10 });
  L({ id: 44752995, C: 10 });
  L({ id: 44752996, C: 10 });
  L({ id: 44762627, C: 0 });
  L({ id: 44762628, C: 0 });
  L({ id: 44801479, C: 10, P: vk });
  L({ id: 44801480, C: 10, P: vk });
  L({ id: 44752538, C: 0 });
  L({ id: 44754608, C: 10 });
  L({ id: 44754609, C: 10 });
  L({ id: 44770822, C: 10 });
  L({ id: 44770823, C: 10 });
  L({ id: 44770824, C: 10 });
  L({ id: 44770825, C: 10 });
  L({ id: 75259414, C: 0 });
  L({ id: 44731964, C: 50, P: Fj });
  L({ id: 44731965, C: 50, P: Fj });
  L({ id: 44767584, C: 0 });
  var Sk,
    Tk = (
      null == (Sk = window.document.featurePolicy)
        ? 0
        : Sk.allowedFeatures().includes("attribution-reporting")
    )
      ? 300
      : 0;
  L({ id: 44776494, C: Tk, P: yk });
  L({ id: 44776495, C: Tk, P: yk });
  var Uk,
    Vk =
      (null == (Uk = window.document.featurePolicy) ||
        Uk.allowedFeatures().includes("attribution-reporting"),
      0);
  L({ id: 44769484, C: Vk, P: zk });
  L({ id: 44769485, C: Vk, P: zk });
  L({ id: 44776384, C: 0 });
  L({ id: 44804616, C: 50, P: Bk });
  var Wk = L({ id: 44804617, C: 50, P: Bk }),
    Xk = L({ id: 44804618, C: 50, P: Bk });
  L({ id: 44804613, C: 50, P: Ck });
  var Yk = L({ id: 44804614, C: 50, P: Ck }),
    Zk = L({ id: 44804615, C: 50, P: Ck });
  L({ id: 44803783, C: 50 });
  var $k = L({ id: 44803784, C: 50 }),
    al = L({ id: 44803785, C: 50 });
  L({ id: 44787954, C: 0 });
  L({ id: 44789282, C: 0 });
  L({ id: 44792636, C: 0 });
  L({ id: 44794298, C: 0 });
  L({ id: 44803996, C: 0 });
  L({ id: 44805453, C: 0 });
  L({ id: 44804917, C: 0 });
  L({ id: 44809796, C: 0 });
  L({ id: 75259415, C: 0 });
  var bl = L({ id: 75259416, C: 0 }),
    cl = L({ id: 75259420, C: 0 }),
    dl = L({ id: 75259421, C: 0 });
  L({ id: 44785452, C: 10 });
  L({ id: 44785453, C: 10 });
  L({ id: 45401791, C: 0 });
  L({ id: 44795414, C: 1, P: Ak });
  var el = L({ id: 44795415, C: 1, P: Ak }),
    fl = L({ id: 44795416, C: 1, P: Ak }),
    gl = L({ id: 44795417, C: 1, P: Ak });
  L({ id: 44805102, C: 5, P: Dk });
  var hl = L({ id: 44805103, C: 5, P: Dk }),
    il = L({ id: 44805104, C: 5, P: Dk }),
    jl = L({ id: 44805105, C: 5, P: Dk }),
    kl = L({ id: 44805106, C: 5, P: Dk });
  L({ id: 44806631, C: 50, P: Ek });
  L({ id: 44806632, C: 50, P: Ek });
  L({ id: 44802172, C: 10 });
  var ll = L({ id: 44802173, C: 10 }),
    ml = L({ id: 44804291, C: 1e3, P: Fk });
  L({ id: 44805638, C: 10 });
  L({ id: 44805639, C: 10 });
  L({ id: 44805640, C: 10 });
  L({ id: 44806074, C: 50 });
  L({ id: 44806075, C: 50 });
  L({ id: 44806732, C: 10 });
  L({ id: 44806733, C: 10 });
  var nl = (window.navigator || {}).cookieDeprecationLabel ? 50 : 0;
  L({ id: 95320460, C: nl });
  var ol = L({ id: 95320461, C: nl }),
    pl = L({ id: 95320462, C: nl });
  L({ id: 44807614, C: 10 });
  L({ id: 44807615, C: 10 });
  L({ id: 44808024, C: 10 });
  var ql = L({ id: 44808025, C: 10 }),
    rl = L({ id: 44808026, C: 10 });
  L({ id: 44809192, C: 5 });
  L({ id: 44809193, C: 5 });
  var sl = L({ id: 44809548, C: 1e3, P: xk });
  L({ id: 31079198, C: 0 });
  var tl = L({ id: 31079199, C: 0 }),
    ul = {},
    fk = ((ul[32] = Fj), (ul[35] = tk), ul);
  fk = void 0 === fk ? {} : fk;
  if (
    !/^\{+IMA_EXPERIMENT_STATE_JSPB\}+$/.test("{{IMA_EXPERIMENT_STATE_JSPB}}")
  )
    try {
      var gk = JSON.parse("{{IMA_EXPERIMENT_STATE_JSPB}}");
      gk instanceof Array && ek();
    } catch (a) {
      I(G.g(), "espe", a.message);
    }
  if ("undefined" === typeof window.v8_flag_map) {
    var wj = kk.g();
    wj.h || (xj(), (wj.h = !0));
    var mk = wj.j,
      vl;
    wj.h || (xj(), (wj.h = !0));
    vl = wj.g;
    if (null != mk) {
      var wl = new jk(lk(), vl);
      Ej(wl);
    }
  }
  Cj.reset();
  Ej(new Hj());
  var xl = function (a) {
    var b = {};
    Mb(a, function (c) {
      var d = c.g,
        e = b[d];
      b.hasOwnProperty(d)
        ? null !== e && (c.h(e) || (b[d] = null))
        : (b[d] = c);
    });
    Yb(a, function (c) {
      return null === b[c.g];
    });
  };
  var yl = { NONE: 0, Ng: 1 },
    zl = { Lg: 0, Hh: 1, Gh: 2, Ih: 3 },
    Al = { Ge: "a", Mg: "d", kf: "v" };
  var Bl = function () {
    this.Y = 0;
    this.g = !1;
    this.h = -1;
    this.rb = !1;
    this.sa = 0;
  };
  Bl.prototype.isVisible = function () {
    return this.rb ? 0.3 <= this.Y : 0.5 <= this.Y;
  };
  var Cl = { Kg: 0, Qg: 1 },
    Dl = { 668123728: 0, 668123729: 1 },
    El = { 44731964: 0, 44731965: 1 },
    Fl = { NONE: 0, rh: 1, Vg: 2 },
    Gl = { 480596784: 0, 480596785: 1, 21063355: 2 };
  var Hl = function () {
      this.g = null;
      this.o = !1;
      this.j = null;
    },
    Il = function (a) {
      a.o = !0;
      return a;
    },
    Jl = function (a, b) {
      a.j &&
        Mb(b, function (c) {
          c = a.j[c];
          void 0 !== c && a.h(c);
        });
    };
  Hl.prototype.getValue = function () {
    return this.g;
  };
  var Kl = function (a) {
    Hl.call(this);
    this.l = a;
  };
  u(Kl, Hl);
  Kl.prototype.h = function (a) {
    null === this.g && sg(this.l, a) && (this.g = a);
  };
  var Ll = function () {
    Hl.call(this);
  };
  u(Ll, Hl);
  Ll.prototype.h = function (a) {
    null === this.g && "number" === typeof a && (this.g = a);
  };
  var Ml = function () {
    Hl.call(this);
  };
  u(Ml, Hl);
  Ml.prototype.h = function (a) {
    null === this.g && "string" === typeof a && (this.g = a);
  };
  var Nl = function () {
    this.g = {};
    this.j = !0;
    this.h = {};
  };
  Nl.prototype.reset = function () {
    this.g = {};
    this.j = !0;
    this.h = {};
  };
  var Ol = function (a, b, c) {
      a.g[b] || (a.g[b] = new Kl(c));
      return a.g[b];
    },
    Pl = function (a) {
      a.g.queryid || (a.g.queryid = new Ml());
    },
    Ql = function (a, b, c) {
      (a = a.g[b]) && a.h(c);
    },
    Rl = function (a, b) {
      if (rg(a.h, b)) return a.h[b];
      if ((a = a.g[b])) return a.getValue();
    },
    Sl = function (a) {
      var b = {},
        c = lg(a.g, function (d) {
          return d.o;
        });
      kg(
        c,
        function (d, e) {
          d =
            void 0 !== a.h[e]
              ? String(a.h[e])
              : d.o && null !== d.g
              ? String(d.g)
              : "";
          0 < d.length && (b[e] = d);
        },
        a
      );
      return b;
    },
    Tl = function (a) {
      a = Sl(a);
      var b = [];
      kg(a, function (c, d) {
        d in Object.prototype ||
          ("undefined" != typeof c && b.push([d, ":", c].join("")));
      });
      return b;
    },
    Ul = function () {
      var a = N().R,
        b = Gj();
      a.j &&
        Mb(og(a.g), function (c) {
          return Jl(c, b);
        });
    };
  var Vl = function (a) {
    Ol(a, "od", yl);
    Il(Ol(a, "opac", Cl));
    Il(Ol(a, "sbeos", Cl));
    Il(Ol(a, "prf", Cl));
    Il(Ol(a, "mwt", Cl));
    Ol(a, "iogeo", Cl);
  };
  var Wl = document,
    O = window;
  var Xl = !jc && !Fb();
  var Yl = function () {
    this.g = this.ib = null;
  };
  var Zl = function () {};
  Zl.prototype.now = function () {
    return 0;
  };
  Zl.prototype.h = function () {
    return 0;
  };
  Zl.prototype.j = function () {
    return 0;
  };
  Zl.prototype.g = function () {
    return 0;
  };
  var am = function () {
    if (!$l()) throw Error();
  };
  u(am, Zl);
  var $l = function () {
    return !(!O || !O.performance);
  };
  am.prototype.now = function () {
    return $l() && O.performance.now
      ? O.performance.now()
      : Zl.prototype.now.call(this);
  };
  am.prototype.h = function () {
    return $l() && O.performance.memory
      ? O.performance.memory.totalJSHeapSize || 0
      : Zl.prototype.h.call(this);
  };
  am.prototype.j = function () {
    return $l() && O.performance.memory
      ? O.performance.memory.usedJSHeapSize || 0
      : Zl.prototype.j.call(this);
  };
  am.prototype.g = function () {
    return $l() && O.performance.memory
      ? O.performance.memory.jsHeapSizeLimit || 0
      : Zl.prototype.g.call(this);
  };
  var bm = function () {};
  bm.prototype.isVisible = function () {
    return 1 === Wi(Wl);
  };
  var cm = function (a, b) {
      this.g = a;
      this.depth = b;
    },
    em = function () {
      var a = Xh(),
        b = Math.max(a.length - 1, 0),
        c = ai(a);
      a = c.g;
      var d = c.h,
        e = c.j,
        f = [];
      c = function (h, k) {
        return null == h ? k : h;
      };
      e && f.push(new cm([e.url, e.md ? 2 : 0], c(e.depth, 1)));
      d && d != e && f.push(new cm([d.url, 2], 0));
      a.url && a != e && f.push(new cm([a.url, 0], c(a.depth, b)));
      var g = Pb(f, function (h, k) {
        return f.slice(0, f.length - k);
      });
      !a.url ||
        ((e || d) && a != e) ||
        ((d = Qh(a.url)) && g.push([new cm([d, 1], c(a.depth, b))]));
      g.push([]);
      return Pb(g, function (h) {
        return dm(b, h);
      });
    };
  function dm(a, b) {
    var c = Qb(
        b,
        function (e, f) {
          return Math.max(e, f.depth);
        },
        -1
      ),
      d = dc(c + 2);
    d[0] = a;
    Mb(b, function (e) {
      return (d[e.depth + 1] = e.g);
    });
    return d;
  }
  function fm() {
    var a = void 0 === a ? em() : a;
    return a.map(function (b) {
      return pi(b);
    });
  }
  var gm = function () {
      this.h = new bm();
      this.g = $l() ? new am() : new Zl();
    },
    im = function () {
      hm();
      var a = O.document;
      return !!(
        a &&
        a.body &&
        a.body.getBoundingClientRect &&
        "function" === typeof O.setInterval &&
        "function" === typeof O.clearInterval &&
        "function" === typeof O.setTimeout &&
        "function" === typeof O.clearTimeout
      );
    };
  gm.prototype.setTimeout = function (a, b) {
    return O.setTimeout(a, b);
  };
  gm.prototype.clearTimeout = function (a) {
    O.clearTimeout(a);
  };
  var jm = function () {
    hm();
    return fm();
  };
  var km = function () {},
    hm = function () {
      var a = C(km);
      if (!a.g) {
        if (!O)
          throw Error("Context has not been set and window is undefined.");
        a.g = C(gm);
      }
      return a.g;
    };
  var lm = function (a) {
    this.M = A(a);
  };
  u(lm, B);
  lm.prototype.g = Rf([0, Ff, If, -2, Lf]);
  var mm = function (a) {
      this.j = a;
      this.g = -1;
      this.h = this.o = 0;
    },
    nm = function (a, b) {
      return function () {
        var c = Ia.apply(0, arguments);
        if (-1 < a.g) return b.apply(null, ha(c));
        try {
          return (a.g = a.j.g.now()), b.apply(null, ha(c));
        } finally {
          (a.o += a.j.g.now() - a.g), (a.g = -1), (a.h += 1);
        }
      };
    };
  var om = function (a, b) {
    this.h = a;
    this.j = b;
    this.g = new mm(a);
  };
  var pm = function () {
      this.g = {};
    },
    rm = function () {
      var a = N().flags,
        b = qm;
      a = a.g[b.key];
      if ("proto" === b.valueType) {
        try {
          var c = JSON.parse(a);
          if (Array.isArray(c)) return c;
        } catch (d) {}
        return b.defaultValue;
      }
      return typeof a === typeof b.defaultValue ? a : b.defaultValue;
    };
  var sm = { Ch: 1, Zh: 2, wh: 3 };
  var tm = function () {
    this.j = void 0;
    this.h = this.A = 0;
    this.l = -1;
    this.R = new Nl();
    Il(Ol(this.R, "mv", Fl)).j = void 0 === Gl ? null : Gl;
    Ol(this.R, "omid", Cl);
    Il(Ol(this.R, "epoh", Cl));
    Il(Ol(this.R, "epph", Cl));
    Il(Ol(this.R, "umt", Cl)).j = void 0 === Dl ? null : Dl;
    Il(Ol(this.R, "phel", Cl));
    Il(Ol(this.R, "phell", Cl));
    Il(Ol(this.R, "oseid", sm));
    var a = this.R;
    a.g.sloi || (a.g.sloi = new Ll());
    Il(a.g.sloi);
    Ol(this.R, "mm", Al);
    Il(Ol(this.R, "ovms", zl));
    Il(Ol(this.R, "xdi", Cl));
    Il(Ol(this.R, "amp", Cl));
    Il(Ol(this.R, "prf", Cl));
    Il(Ol(this.R, "gtx", Cl));
    Il(Ol(this.R, "mvp_lv", Cl));
    Il(Ol(this.R, "ssmol", Cl)).j = void 0 === El ? null : El;
    Il(Ol(this.R, "fmd", Cl));
    Ol(this.R, "gen204simple", Cl);
    this.g = new om(hm(), this.R);
    this.o = !1;
    this.flags = new pm();
  };
  tm.prototype.yd = function (a) {
    if ("string" === typeof a && 0 != a.length) {
      var b = this.R;
      if (b.j) {
        a = a.split("&");
        for (var c = a.length - 1; 0 <= c; c--) {
          var d = a[c].split("="),
            e = decodeURIComponent(d[0]);
          1 < d.length
            ? ((d = decodeURIComponent(d[1])),
              (d = /^[0-9]+$/g.exec(d) ? parseInt(d, 10) : d))
            : (d = 1);
          (e = b.g[e]) && e.h(d);
        }
      }
    }
  };
  var N = function () {
    return C(tm);
  };
  var um = function (a, b, c, d, e) {
    if ((d ? a.j : Math.random()) < (e || a.g))
      try {
        if (c instanceof ni) var f = c;
        else
          (f = new ni()),
            Oh(c, function (h, k) {
              var m = f,
                n = m.o++;
              ri(m, n, oi(k, h));
            });
        var g = ui(f, a.h, "/pagead/gen_204?id=" + b + "&");
        g && (hm(), Bi(O, g));
      } catch (h) {}
  };
  var xm = function () {
    var a = vm;
    this.A = wm;
    this.l = "jserror";
    this.j = !0;
    this.h = null;
    this.B = this.Sa;
    this.g = void 0 === a ? null : a;
    this.o = !1;
  };
  l = xm.prototype;
  l.Sc = function (a) {
    this.h = a;
  };
  l.Hd = function (a) {
    this.l = a;
  };
  l.Id = function (a) {
    this.j = a;
  };
  l.Jd = function (a) {
    this.o = a;
  };
  l.tb = function (a, b, c) {
    var d = this;
    return nm(N().g.g, function () {
      try {
        if (d.g && d.g.j) {
          var e = d.g.start(a.toString(), 3);
          var f = b();
          d.g.end(e);
        } else f = b();
      } catch (h) {
        var g = d.j;
        try {
          mi(e), (g = d.B(a, new ym(zm(h)), void 0, c));
        } catch (k) {
          d.Sa(217, k);
        }
        if (!g) throw h;
      }
      return f;
    })();
  };
  l.zd = function (a, b, c, d) {
    var e = this;
    return nm(N().g.g, function () {
      var f = Ia.apply(0, arguments);
      return e.tb(
        a,
        function () {
          return b.apply(c, f);
        },
        d
      );
    });
  };
  l.Sa = function (a, b, c, d, e) {
    e = e || this.l;
    try {
      var f = new ni();
      si(f, 1, "context", a);
      Vf(b) || (b = new ym(zm(b)));
      b.msg && si(f, 2, "msg", b.msg.substring(0, 512));
      var g = b.meta || {};
      if (this.h)
        try {
          this.h(g);
        } catch (k) {}
      if (d)
        try {
          d(g);
        } catch (k) {}
      ri(f, 3, [g]);
      var h = ai();
      h.h && si(f, 4, "top", h.h.url || "");
      ri(f, 5, [{ url: h.g.url || "" }, { url: h.g.url ? vh(h.g.url) : "" }]);
      um(this.A, e, f, this.o, c);
    } catch (k) {
      try {
        um(
          this.A,
          e,
          { context: "ecmserr", rctx: a, msg: zm(k), url: h && h.g.url },
          this.o,
          c
        );
      } catch (m) {}
    }
    return this.j;
  };
  var zm = function (a) {
      var b = a.toString();
      a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
      a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
      if (a.stack) {
        a = a.stack;
        var c = b;
        try {
          -1 == a.indexOf(c) && (a = c + "\n" + a);
          for (var d; a != d; )
            (d = a),
              (a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1"));
          b = a.replace(/\n */g, "\n");
        } catch (e) {
          b = c;
        }
      }
      return b;
    },
    ym = function (a) {
      Uf.call(this, Error(a), { message: a });
    };
  u(ym, Uf);
  var wm,
    Am,
    vm = new li(1, window),
    Bm = function () {
      O &&
        "undefined" != typeof O.google_measure_js_timing &&
        (O.google_measure_js_timing || vm.B());
    };
  wm = new (function () {
    var a = "https:";
    O && O.location && "http:" === O.location.protocol && (a = "http:");
    this.h = a;
    this.g = 0.01;
    this.j = Math.random();
  })();
  Am = new xm();
  O &&
    O.document &&
    ("complete" == O.document.readyState
      ? Bm()
      : vm.j &&
        dg(O, "load", function () {
          Bm();
        }));
  var Cm = function (a) {
      Am.Sc(function (b) {
        Mb(a, function (c) {
          c(b);
        });
      });
    },
    Dm = function (a, b) {
      return Am.tb(a, b);
    },
    Em = function (a, b, c, d) {
      return Am.zd(a, b, c, d);
    },
    Fm = function (a, b, c, d) {
      Am.Sa(a, b, c, d);
    };
  var Gm = Date.now(),
    Hm = -1,
    Im = -1,
    Jm,
    Km = -1,
    Lm = !1,
    Mm = function () {
      return Date.now() - Gm;
    },
    Nm = function () {
      var a = N().j,
        b = 0 <= Im ? Mm() - Im : -1,
        c = Lm ? Mm() - Hm : -1,
        d = 0 <= Km ? Mm() - Km : -1;
      if (947190542 == a) return 100;
      if (79463069 == a) return 200;
      a = [2e3, 4e3];
      var e = [250, 500, 1e3];
      Fm(637, Error(), 0.001);
      var f = b;
      -1 != c && c < b && (f = c);
      for (b = 0; b < a.length; ++b)
        if (f < a[b]) {
          var g = e[b];
          break;
        }
      void 0 === g && (g = e[a.length]);
      return -1 != d && 1500 < d && 4e3 > d ? 500 : g;
    };
  var Om = function (a, b, c) {
    var d = new F(0, 0, 0, 0);
    this.time = a;
    this.volume = null;
    this.j = b;
    this.g = d;
    this.h = c;
  };
  var Pm = function (a, b, c, d, e, f, g) {
    this.j = a;
    this.h = b;
    this.l = c;
    this.g = d;
    this.o = e;
    this.B = f;
    this.A = g;
  };
  Pm.prototype.getTimestamp = function () {
    return this.B;
  };
  var Qm = {
      currentTime: 1,
      duration: 2,
      isVpaid: 4,
      volume: 8,
      isYouTube: 16,
      isPlaying: 32,
    },
    ug = {
      Xd: "start",
      FIRST_QUARTILE: "firstquartile",
      MIDPOINT: "midpoint",
      THIRD_QUARTILE: "thirdquartile",
      COMPLETE: "complete",
      ERROR: "error",
      Ue: "metric",
      Wd: "pause",
      df: "resume",
      SKIPPED: "skip",
      VIEWABLE_IMPRESSION: "viewable_impression",
      Ve: "mute",
      jf: "unmute",
      FULLSCREEN: "fullscreen",
      Qe: "exitfullscreen",
      Le: "bufferstart",
      Ke: "bufferfinish",
      Rd: "fully_viewable_audible_half_duration_impression",
      Vd: "measurable_impression",
      Fe: "abandon",
      Qd: "engagedview",
      IMPRESSION: "impression",
      Ne: "creativeview",
      LOADED: "loaded",
      Eh: "progress",
      Eg: "close",
      Fg: "collapse",
      We: "overlay_resize",
      Xe: "overlay_unmeasurable_impression",
      Ye: "overlay_unviewable_impression",
      af: "overlay_viewable_immediate_impression",
      Ze: "overlay_viewable_end_of_session_impression",
      Oe: "custom_metric_viewable",
      He: "audio_audible",
      Je: "audio_measurable",
      Ie: "audio_impression",
    },
    Rm = "start firstquartile midpoint thirdquartile resume loaded".split(" "),
    Sm = ["start", "firstquartile", "midpoint", "thirdquartile"],
    Tm = ["abandon"],
    Um = {
      Uh: -1,
      Xd: 0,
      FIRST_QUARTILE: 1,
      MIDPOINT: 2,
      THIRD_QUARTILE: 3,
      COMPLETE: 4,
      Ue: 5,
      Wd: 6,
      df: 7,
      SKIPPED: 8,
      VIEWABLE_IMPRESSION: 9,
      Ve: 10,
      jf: 11,
      FULLSCREEN: 12,
      Qe: 13,
      Rd: 14,
      Vd: 15,
      Fe: 16,
      Qd: 17,
      IMPRESSION: 18,
      Ne: 19,
      LOADED: 20,
      Oe: 21,
      Le: 22,
      Ke: 23,
      Ie: 27,
      Je: 28,
      He: 29,
    };
  var ng = {
      yg: "addEventListener",
      Wg: "getMaxSize",
      Xg: "getScreenSize",
      Yg: "getState",
      Zg: "getVersion",
      Fh: "removeEventListener",
      sh: "isViewable",
    },
    Vm = function (a) {
      var b = a !== a.top,
        c = a.top === Vh(a),
        d = -1,
        e = 0;
      if (b && c && a.top.mraid) {
        d = 3;
        var f = a.top.mraid;
      } else d = (f = a.mraid) ? (b ? (c ? 2 : 1) : 0) : -1;
      f &&
        (f.IS_GMA_SDK || (e = 2),
        mg(function (g) {
          return "function" === typeof f[g];
        }) || (e = 1));
      return { Ba: f, rc: e, kg: d };
    };
  var Wm = function () {
    var a = window.document;
    return a && "function" === typeof a.elementFromPoint;
  };
  function Xm(a, b, c) {
    try {
      a && (b = b.top);
      var d = b;
      a && null !== d && d != d.top && (d = d.top);
      try {
        var e = (void 0 === c ? 0 : c)
          ? new D(d.innerWidth, d.innerHeight).round()
          : eh(d || window).round();
      } catch (n) {
        e = new D(-12245933, -12245933);
      }
      a = e;
      var f = a.height,
        g = a.width;
      if (-12245933 === g) return new F(g, g, g, g);
      var h = fh($g(b.document).g),
        k = h.x,
        m = h.y;
      return new F(m, k + g, m + f, k);
    } catch (n) {
      return new F(-12245933, -12245933, -12245933, -12245933);
    }
  }
  var Zm = function (a, b) {
      if ("string" === typeof b) (b = Ym(a, b)) && (a.style[b] = void 0);
      else
        for (var c in b) {
          var d = a,
            e = b[c],
            f = Ym(d, c);
          f && (d.style[f] = e);
        }
    },
    $m = {},
    Ym = function (a, b) {
      var c = $m[b];
      if (!c) {
        var d = Ug(b);
        c = d;
        void 0 === a.style[d] &&
          ((d = (mc ? "Webkit" : lc ? "Moz" : jc ? "ms" : null) + Wg(d)),
          void 0 !== a.style[d] && (c = d));
        $m[b] = c;
      }
      return c;
    },
    an = function (a, b) {
      var c = a.style[Ug(b)];
      return "undefined" !== typeof c ? c : a.style[Ym(a, b)] || "";
    },
    bn = function (a, b) {
      var c = Zg(a);
      return c.defaultView &&
        c.defaultView.getComputedStyle &&
        (a = c.defaultView.getComputedStyle(a, null))
        ? a[b] || a.getPropertyValue(b) || ""
        : "";
    },
    cn = function (a) {
      try {
        return a.getBoundingClientRect();
      } catch (b) {
        return { left: 0, top: 0, right: 0, bottom: 0 };
      }
    },
    dn = function (a) {
      var b = Zg(a),
        c = new Og(0, 0);
      var d = b ? Zg(b) : document;
      d = !jc || 9 <= Number(Hc) || dh($g(d).g) ? d.documentElement : d.body;
      if (a == d) return c;
      a = cn(a);
      b = fh($g(b).g);
      c.x = a.left + b.x;
      c.y = a.top + b.y;
      return c;
    },
    en = function (a, b) {
      var c = new Og(0, 0),
        d = E(Zg(a));
      if (!fc(d, "parent")) return c;
      do {
        if (d == b) var e = dn(a);
        else (e = cn(a)), (e = new Og(e.left, e.top));
        c.x += e.x;
        c.y += e.y;
      } while (
        d &&
        d != b &&
        d != d.parent &&
        (a = d.frameElement) &&
        (d = d.parent)
      );
      return c;
    },
    fn = function () {
      var a = "100%";
      "number" == typeof a && (a = Math.round(a) + "px");
      return a;
    },
    hn = function (a) {
      var b = gn;
      if (
        "none" !=
        (bn(a, "display") ||
          (a.currentStyle ? a.currentStyle.display : null) ||
          (a.style && a.style.display))
      )
        return b(a);
      var c = a.style,
        d = c.display,
        e = c.visibility,
        f = c.position;
      c.visibility = "hidden";
      c.position = "absolute";
      c.display = "inline";
      a = b(a);
      c.display = d;
      c.position = f;
      c.visibility = e;
      return a;
    },
    gn = function (a) {
      var b = a.offsetWidth,
        c = a.offsetHeight,
        d = mc && !b && !c;
      return (void 0 === b || d) && a.getBoundingClientRect
        ? ((a = cn(a)), new D(a.right - a.left, a.bottom - a.top))
        : new D(b, c);
    },
    mn = function (a) {
      var b = Zg(a),
        c = jc && a.currentStyle;
      if (
        c &&
        dh($g(b).g) &&
        "auto" != c.width &&
        "auto" != c.height &&
        !c.boxSizing
      )
        return (
          (b = jn(a, c.width, "width", "pixelWidth")),
          (a = jn(a, c.height, "height", "pixelHeight")),
          new D(b, a)
        );
      c = new D(a.offsetWidth, a.offsetHeight);
      if (jc) {
        b = kn(a, "paddingLeft");
        var d = kn(a, "paddingRight"),
          e = kn(a, "paddingTop"),
          f = kn(a, "paddingBottom");
        b = new F(e, d, f, b);
      } else
        (b = bn(a, "paddingLeft")),
          (d = bn(a, "paddingRight")),
          (e = bn(a, "paddingTop")),
          (f = bn(a, "paddingBottom")),
          (b = new F(
            parseFloat(e),
            parseFloat(d),
            parseFloat(f),
            parseFloat(b)
          ));
      !jc || 9 <= Number(Hc)
        ? ((d = bn(a, "borderLeftWidth")),
          (e = bn(a, "borderRightWidth")),
          (f = bn(a, "borderTopWidth")),
          (a = bn(a, "borderBottomWidth")),
          (a = new F(
            parseFloat(f),
            parseFloat(e),
            parseFloat(a),
            parseFloat(d)
          )))
        : ((d = ln(a, "borderLeft")),
          (e = ln(a, "borderRight")),
          (f = ln(a, "borderTop")),
          (a = ln(a, "borderBottom")),
          (a = new F(f, e, a, d)));
      return new D(
        c.width - a.left - b.left - b.right - a.right,
        c.height - a.top - b.top - b.bottom - a.bottom
      );
    },
    jn = function (a, b, c, d) {
      if (/^\d+px?$/.test(b)) return parseInt(b, 10);
      var e = a.style[c],
        f = a.runtimeStyle[c];
      a.runtimeStyle[c] = a.currentStyle[c];
      a.style[c] = b;
      b = a.style[d];
      a.style[c] = e;
      a.runtimeStyle[c] = f;
      return +b;
    },
    kn = function (a, b) {
      return (b = a.currentStyle ? a.currentStyle[b] : null)
        ? jn(a, b, "left", "pixelLeft")
        : 0;
    },
    nn = { thin: 2, medium: 4, thick: 6 },
    ln = function (a, b) {
      if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
        return 0;
      b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
      return b in nn ? nn[b] : jn(a, b, "left", "pixelLeft");
    };
  var on = function (a, b) {
    b = Math.pow(10, b);
    return Math.floor(a * b) / b;
  };
  function pn(a, b, c, d) {
    if (!a) return { value: d, done: !1 };
    d = b(d, a);
    var e = c(d, a);
    return !e && fc(a, "parentElement")
      ? pn(kh(a), b, c, d)
      : { done: e, value: d };
  }
  var qn = function (a, b, c, d) {
    if (!a) return d;
    d = pn(a, b, c, d);
    if (!d.done)
      try {
        var e = Zg(a),
          f = e && E(e);
        return qn(f && f.frameElement, b, c, d.value);
      } catch (g) {}
    return d.value;
  };
  function rn(a) {
    var b = !jc || Cc();
    return qn(
      a,
      function (c, d) {
        c = fc(d, "style") && d.style && an(d, "visibility");
        return { hidden: "hidden" === c, visible: b && "visible" === c };
      },
      function (c) {
        return c.hidden || c.visible;
      },
      { hidden: !1, visible: !1 }
    ).hidden;
  }
  var sn = function (a) {
      return qn(
        a,
        function (b, c) {
          return !(!fc(c, "style") || !c.style || "none" !== an(c, "display"));
        },
        function (b) {
          return b;
        },
        !1
      )
        ? !0
        : rn(a);
    },
    tn = function (a) {
      return new F(a.top, a.right, a.bottom, a.left);
    },
    un = function (a) {
      var b = a.top || 0,
        c = a.left || 0;
      return new F(b, c + (a.width || 0), b + (a.height || 0), c);
    },
    vn = function (a) {
      return null != a && 0 <= a && 1 >= a;
    };
  function wn() {
    var a = vb();
    return a
      ? Rb(
          "AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(
            ";"
          ),
          function (b) {
            return qb(a, b);
          }
        ) ||
        (qb(a, "OMI/") && !qb(a, "XiaoMi/"))
        ? !0
        : qb(a, "Presto") &&
          qb(a, "Linux") &&
          !qb(a, "X11") &&
          !qb(a, "Android") &&
          !qb(a, "Mobi")
      : !1;
  }
  function xn() {
    var a = vb();
    return (
      qb(a, "AppleTV") ||
      qb(a, "Apple TV") ||
      qb(a, "CFNetwork") ||
      qb(a, "tvOS")
    );
  }
  function yn() {
    var a;
    (a =
      qb(vb(), "CrKey") ||
      qb(vb(), "PlayStation") ||
      qb(vb(), "Roku") ||
      wn() ||
      qb(vb(), "Xbox") ||
      xn()) ||
      ((a = vb()), (a = qb(a, "sdk_google_atv_x86") || qb(a, "Android TV")));
    return a;
  }
  var An = function () {
      this.j = !Ih(O.top);
      this.B = oh() || th();
      var a = Xh();
      a =
        0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url
          ? ((a = a[a.length - 1].url.match(uh)[3] || null)
              ? decodeURI(a)
              : a) || ""
          : "";
      this.domain = a;
      this.g = new F(0, 0, 0, 0);
      this.l = new D(0, 0);
      this.o = new D(0, 0);
      this.I = new F(0, 0, 0, 0);
      this.A = 0;
      this.K = !1;
      this.h = !(!O || !Vm(O).Ba);
      zn(this);
    },
    Bn = function (a, b) {
      b && b.screen && (a.l = new D(b.screen.width, b.screen.height));
    },
    Cn = function (a, b) {
      var c = a.g ? new D(a.g.getWidth(), a.g.getHeight()) : new D(0, 0);
      b = void 0 === b ? O : b;
      null !== b && b != b.top && (b = b.top);
      var d = 0,
        e = 0;
      try {
        var f = b.document,
          g = f.body,
          h = f.documentElement;
        if ("CSS1Compat" == f.compatMode && h.scrollHeight)
          (d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight),
            (e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth);
        else {
          var k = h.scrollHeight,
            m = h.scrollWidth,
            n = h.offsetHeight,
            q = h.offsetWidth;
          h.clientHeight != n &&
            ((k = g.scrollHeight),
            (m = g.scrollWidth),
            (n = g.offsetHeight),
            (q = g.offsetWidth));
          k > c.height
            ? k > n
              ? ((d = k), (e = m))
              : ((d = n), (e = q))
            : k < n
            ? ((d = k), (e = m))
            : ((d = n), (e = q));
        }
        var r = new D(e, d);
      } catch (v) {
        r = new D(-12245933, -12245933);
      }
      a.o = r;
    },
    zn = function (a) {
      O &&
        O.document &&
        ((a.I = Xm(!1, O, a.B)), (a.g = Xm(!0, O, a.B)), Cn(a, O), Bn(a, O));
    },
    En = function () {
      var a = Dn();
      if (0 < a.A || a.K) return !0;
      a = hm().h.isVisible();
      var b = 0 === Wi(Wl);
      return a || b;
    },
    Dn = function () {
      return C(An);
    };
  var Fn = function (a) {
    this.j = a;
    this.h = 0;
    this.g = null;
  };
  Fn.prototype.cancel = function () {
    hm().clearTimeout(this.g);
    this.g = null;
  };
  var Gn = function (a) {
    var b = hm(),
      c = N().g.g;
    a.g = b.setTimeout(
      nm(
        c,
        Em(143, function () {
          a.h++;
          a.j.sample();
        })
      ),
      Nm()
    );
  };
  var Hn = function (a, b, c) {
    this.j = a;
    this.ma = void 0 === c ? "na" : c;
    this.l = [];
    this.ua = !1;
    this.o = new Om(-1, !0, this);
    this.g = this;
    this.K = b;
    this.G = this.D = !1;
    this.X = "uk";
    this.N = !1;
    this.B = !0;
  };
  Hn.prototype.F = function () {
    return !1;
  };
  Hn.prototype.initialize = function () {
    return (this.ua = !0);
  };
  Hn.prototype.yb = function () {
    return this.g.X;
  };
  Hn.prototype.Ob = function () {
    return this.g.G;
  };
  var Jn = function (a, b, c) {
    if (!a.G || (void 0 === c ? 0 : c))
      (a.G = !0), (a.X = b), (a.K = 0), a.g != a || In(a);
  };
  Hn.prototype.getName = function () {
    return this.g.ma;
  };
  Hn.prototype.ab = function () {
    return this.g.Z();
  };
  Hn.prototype.Z = function () {
    return {};
  };
  Hn.prototype.Oa = function () {
    return this.g.K;
  };
  var Kn = function (a, b) {
    Vb(a.l, b) || (a.l.push(b), b.Ab(a.g), b.bb(a.o), b.Ka() && (a.D = !0));
  };
  Hn.prototype.U = function () {
    var a = Dn();
    a.g = Xm(!0, this.j, a.B);
  };
  Hn.prototype.V = function () {
    Bn(Dn(), this.j);
  };
  Hn.prototype.aa = function () {
    return this.o.g;
  };
  var Ln = function (a) {
    a = a.g;
    a.V();
    a.U();
    var b = Dn();
    b.I = Xm(!1, a.j, b.B);
    Cn(Dn(), a.j);
    a.o.g = a.aa();
  };
  Hn.prototype.sample = function () {};
  Hn.prototype.isActive = function () {
    return this.g.B;
  };
  var Mn = function (a) {
      a.D = a.l.length
        ? Rb(a.l, function (b) {
            return b.Ka();
          })
        : !1;
    },
    Nn = function (a) {
      var b = $b(a.l);
      Mb(b, function (c) {
        c.bb(a.o);
      });
    },
    In = function (a) {
      var b = $b(a.l);
      Mb(b, function (c) {
        c.Ab(a.g);
      });
      a.g != a || Nn(a);
    };
  l = Hn.prototype;
  l.Ab = function (a) {
    var b = this.g;
    this.g = a.Oa() >= this.K ? a : this;
    b !== this.g
      ? ((this.B = this.g.B), In(this))
      : this.B !== this.g.B && ((this.B = this.g.B), In(this));
  };
  l.bb = function (a) {
    if (a.h === this.g) {
      var b = this.o,
        c = this.D;
      if ((c = a && (void 0 === c || !c || b.volume == a.volume) && b.j == a.j))
        (b = b.g),
          (c = a.g),
          (c =
            b == c
              ? !0
              : b && c
              ? b.top == c.top &&
                b.right == c.right &&
                b.bottom == c.bottom &&
                b.left == c.left
              : !1);
      this.o = a;
      !c && Nn(this);
    }
  };
  l.Ka = function () {
    return this.D;
  };
  l.W = function () {
    this.N = !0;
  };
  l.ya = function () {
    return this.N;
  };
  var On = function (a, b, c, d) {
    this.j = a;
    this.g = new F(0, 0, 0, 0);
    this.l = new F(0, 0, 0, 0);
    this.h = b;
    this.R = c;
    this.G = d;
    this.F = !1;
    this.timestamp = -1;
    this.I = new Pm(b.o, this.g, new F(0, 0, 0, 0), 0, 0, Mm(), 0);
  };
  l = On.prototype;
  l.Xc = function () {
    return !0;
  };
  l.Xb = function () {};
  l.W = function () {
    if (!this.ya()) {
      var a = this.h;
      Wb(a.l, this);
      a.D && this.Ka() && Mn(a);
      this.Xb();
      this.F = !0;
    }
  };
  l.ya = function () {
    return this.F;
  };
  l.ab = function () {
    return this.h.ab();
  };
  l.Oa = function () {
    return this.h.Oa();
  };
  l.yb = function () {
    return this.h.yb();
  };
  l.Ob = function () {
    return this.h.Ob();
  };
  l.Ab = function () {};
  l.bb = function () {
    this.Ya();
  };
  l.Ka = function () {
    return this.G;
  };
  var Pn = function (a) {
    this.l = !1;
    this.g = a;
    this.o = function () {};
  };
  l = Pn.prototype;
  l.Oa = function () {
    return this.g.Oa();
  };
  l.yb = function () {
    return this.g.yb();
  };
  l.Ob = function () {
    return this.g.Ob();
  };
  l.create = function (a, b, c) {
    var d = null;
    this.g && ((d = this.Yb(a, b, c)), Kn(this.g, d));
    return d;
  };
  l.Sd = function () {
    return this.Gb();
  };
  l.Gb = function () {
    return !1;
  };
  l.init = function (a) {
    return this.g.initialize() ? (Kn(this.g, this), (this.o = a), !0) : !1;
  };
  l.Ab = function (a) {
    0 == a.Oa() && this.o(a.yb(), this);
  };
  l.bb = function () {};
  l.Ka = function () {
    return !1;
  };
  l.W = function () {
    this.l = !0;
  };
  l.ya = function () {
    return this.l;
  };
  l.ab = function () {
    return {};
  };
  var Qn = function (a, b, c) {
      this.j = void 0 === c ? 0 : c;
      this.h = a;
      this.g = null == b ? "" : b;
    },
    Rn = function (a) {
      switch (Math.trunc(a.j)) {
        case -16:
          return -16;
        case -8:
          return -8;
        case 0:
          return 0;
        case 8:
          return 8;
        case 16:
          return 16;
        default:
          return 16;
      }
    },
    Sn = function (a, b) {
      return a.j < b.j
        ? !0
        : a.j > b.j
        ? !1
        : a.h < b.h
        ? !0
        : a.h > b.h
        ? !1
        : typeof a.g < typeof b.g
        ? !0
        : typeof a.g > typeof b.g
        ? !1
        : a.g < b.g;
    };
  var Tn = function () {
    this.j = 0;
    this.g = [];
    this.h = !1;
  };
  Tn.prototype.add = function (a, b, c) {
    ++this.j;
    a = new Qn(a, b, c);
    this.g.push(new Qn(a.h, a.g, a.j + this.j / 4096));
    this.h = !0;
    return this;
  };
  var Un = function (a, b) {
      Mb(b.g, function (c) {
        a.add(c.h, c.g, Rn(c));
      });
    },
    Vn = function (a, b) {
      var c = void 0 === c ? 0 : c;
      var d = void 0 === d ? !0 : d;
      Oh(b, function (e, f) {
        (d && void 0 === e) || a.add(f, e, c);
      });
      return a;
    },
    Xn = function (a) {
      var b = Wn;
      a.h &&
        (bc(a.g, function (c, d) {
          return Sn(d, c) ? 1 : Sn(c, d) ? -1 : 0;
        }),
        (a.h = !1));
      return Qb(
        a.g,
        function (c, d) {
          d = b(d);
          return "" + c + ("" != c && "" != d ? "&" : "") + d;
        },
        ""
      );
    };
  var Wn = function (a) {
    var b = a.h;
    a = a.g;
    return "" === a
      ? b
      : "boolean" === typeof a
      ? a
        ? b
        : ""
      : Array.isArray(a)
      ? 0 === a.length
        ? b
        : b + "=" + a.join()
      : b + "=" + (Vb(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a));
  };
  var Yn = function (a) {
    var b = void 0 === b ? !0 : b;
    this.g = new Tn();
    void 0 !== a && Un(this.g, a);
    b && this.g.add("v", "unreleased", -16);
  };
  Yn.prototype.toString = function () {
    var a = "//pagead2.googlesyndication.com//pagead/gen_204",
      b = Xn(this.g);
    0 < b.length && (a += "?" + b);
    return a;
  };
  var Zn = function (a) {
      var b = [],
        c = [];
      kg(a, function (d, e) {
        if (!(e in Object.prototype) && "undefined" != typeof d)
          switch (
            (Array.isArray(d) && (d = d.join(",")),
            (d = [e, "=", d].join("")),
            e)
          ) {
            case "adk":
            case "r":
            case "tt":
            case "error":
            case "mtos":
            case "tos":
            case "p":
            case "bs":
              b.unshift(d);
              break;
            case "req":
            case "url":
            case "referrer":
            case "iframe_loc":
              c.push(d);
              break;
            default:
              b.push(d);
          }
      });
      return b.concat(c);
    },
    $n = function (a) {
      a = a.toString();
      hm();
      Bi(O, a);
    };
  var ao = function () {
    this.g = 0;
  };
  function bo(a) {
    a && "function" == typeof a.W && a.W();
  }
  var P = function () {
    this.K = this.K;
    this.I = this.I;
  };
  P.prototype.K = !1;
  P.prototype.ya = function () {
    return this.K;
  };
  P.prototype.W = function () {
    this.K || ((this.K = !0), this.L());
  };
  var eo = function (a, b) {
      co(a, ab(bo, b));
    },
    co = function (a, b) {
      a.K ? b() : (a.I || (a.I = []), a.I.push(b));
    };
  P.prototype.L = function () {
    if (this.I) for (; this.I.length; ) this.I.shift()();
  };
  var fo = function (a, b, c) {
    Mb(a.j, function (d) {
      var e = a.g;
      if (!d.g && (d.j(b, c), d.o())) {
        d.g = !0;
        var f = d.h(),
          g = new Tn();
        g.add("id", "av-js");
        g.add("type", "verif");
        g.add("vtype", d.l);
        d = C(ao);
        g.add("i", d.g++);
        g.add("adk", e);
        Vn(g, f);
        e = new Yn(g);
        $n(e);
      }
    });
  };
  var go = function () {
      this.h = this.j = this.o = this.g = 0;
    },
    ho = function (a, b, c, d) {
      b && ((a.g += c), (a.h += c), (a.o += c), (a.j = Math.max(a.j, a.o)));
      if (void 0 === d ? !b : d) a.o = 0;
    };
  var io = [1, 0.75, 0.5, 0.3, 0],
    jo = function (a) {
      this.h = a = void 0 === a ? io : a;
      this.g = Pb(this.h, function () {
        return new go();
      });
    },
    lo = function (a, b) {
      return ko(
        a,
        function (c) {
          return c.g;
        },
        void 0 === b ? !0 : b
      );
    },
    no = function (a, b) {
      return mo(a, b, function (c) {
        return c.g;
      });
    },
    oo = function (a, b) {
      return ko(
        a,
        function (c) {
          return c.j;
        },
        void 0 === b ? !0 : b
      );
    },
    po = function (a, b) {
      return mo(a, b, function (c) {
        return c.j;
      });
    },
    qo = function (a, b) {
      return mo(a, b, function (c) {
        return c.h;
      });
    },
    ro = function (a) {
      Mb(a.g, function (b) {
        b.h = 0;
      });
    },
    so = function (a, b, c, d, e, f, g) {
      g = void 0 === g ? !0 : g;
      c = f ? Math.min(b, c) : c;
      for (f = 0; f < a.h.length; f++) {
        var h = a.h[f],
          k = 0 < c && c >= h;
        h = !(0 < b && b >= h) || d;
        ho(a.g[f], g && k, e, !g || h);
      }
    },
    ko = function (a, b, c) {
      a = Pb(a.g, function (d) {
        return b(d);
      });
      return c ? a : to(a);
    },
    mo = function (a, b, c) {
      var d = Ub(a.h, function (e) {
        return b <= e;
      });
      return -1 == d ? 0 : c(a.g[d]);
    },
    to = function (a) {
      return Pb(a, function (b, c, d) {
        return 0 < c ? d[c] - d[c - 1] : d[c];
      });
    };
  var uo = function () {
      this.h = new jo();
      this.X = new go();
      this.G = this.B = -1;
      this.ha = 1e3;
      this.ba = new jo([1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0]);
      this.N = this.H = -1;
    },
    vo = function (a, b) {
      return oo(a.h, void 0 === b ? !0 : b);
    };
  uo.prototype.K = function (a, b, c, d) {
    this.B = -1 != this.B ? Math.min(this.B, b.Y) : b.Y;
    this.G = Math.max(this.G, b.Y);
    this.H = -1 != this.H ? Math.min(this.H, b.sa) : b.sa;
    this.N = Math.max(this.N, b.sa);
    so(this.ba, b.sa, c.sa, b.g, a, d);
    so(this.h, b.Y, c.Y, b.g, a, d);
    c = d || c.rb != b.rb ? c.isVisible() && b.isVisible() : c.isVisible();
    b = !b.isVisible() || b.g;
    ho(this.X, c, a, b);
  };
  uo.prototype.Ra = function () {
    return this.X.j >= this.ha;
  };
  if (Wl && Wl.URL) {
    var wo = Wl.URL,
      xo;
    if ((xo = !!wo)) {
      var yo;
      a: {
        if (wo) {
          var zo = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
          try {
            var Ao = zo.exec(decodeURIComponent(wo));
            if (Ao) {
              yo = Ao[1] && 1 < Ao[1].length ? Ao[1].substring(1) : "true";
              break a;
            }
          } catch (a) {}
        }
        yo = "";
      }
      xo = 0 < yo.length;
    }
    Am.Id(!xo);
  }
  var Bo = function (a, b, c, d) {
    var e = void 0 === e ? !1 : e;
    c = Em(d, c);
    dg(a, b, c, { capture: e });
  };
  var Co = new F(0, 0, 0, 0);
  function Do(a, b) {
    b = Eo(b);
    return 0 === b ? 0 : Eo(a) / b;
  }
  function Eo(a) {
    return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0);
  }
  function Fo(a, b) {
    if (!a || !b) return !1;
    for (var c = 0; null !== a && 100 > c++; ) {
      if (a === b) return !0;
      try {
        if ((a = kh(a) || a)) {
          var d = Zg(a),
            e = d && E(d),
            f = e && e.frameElement;
          f && (a = f);
        }
      } catch (g) {
        break;
      }
    }
    return !1;
  }
  function Go(a, b, c) {
    if (!a || !b) return !1;
    b = Gi(Fi(a), -b.left, -b.top);
    a = (b.left + b.right) / 2;
    b = (b.top + b.bottom) / 2;
    Ih(window.top) &&
      window.top &&
      window.top.document &&
      (window = window.top);
    if (!Wm()) return !1;
    a = window.document.elementFromPoint(a, b);
    if (!a) return !1;
    b =
      (b = (b = Zg(c)) && b.defaultView && b.defaultView.frameElement) &&
      Fo(b, a);
    var d = a === c;
    a =
      !d &&
      a &&
      nh(a, function (e) {
        return e === c;
      });
    return !(b || d || a);
  }
  function Ho(a, b, c, d) {
    return Dn().j
      ? !1
      : 0 >= a.getWidth() || 0 >= a.getHeight()
      ? !0
      : c && d
      ? Dm(208, function () {
          return Go(a, b, c);
        })
      : !1;
  }
  var Io = new F(0, 0, 0, 0),
    Ko = function (a, b, c) {
      P.call(this);
      this.position = Fi(Io);
      this.Jc = this.xc();
      this.nd = -2;
      this.og = Date.now();
      this.Be = -1;
      this.Bc = b;
      this.Ac = null;
      this.Kb = !1;
      this.Oc = null;
      this.opacity = -1;
      this.dg = c;
      this.pg = !1;
      this.od = function () {};
      this.Ce = function () {};
      this.ta = new Yl();
      this.ta.ib = a;
      this.ta.g = a;
      this.Pa = !1;
      this.nb = { rd: null, qd: null };
      this.xe = !0;
      this.Wb = null;
      this.Bb = this.Qf = !1;
      N().A++;
      this.pa = this.hd();
      this.Ae = -1;
      this.ca = null;
      this.ke = this.Of = !1;
      this.R = new Nl();
      Vl(this.R);
      Jo(this);
      1 == this.dg ? Ql(this.R, "od", 1) : Ql(this.R, "od", 0);
    };
  u(Ko, P);
  Ko.prototype.L = function () {
    this.ta.g &&
      (this.nb.rd &&
        (eg(this.ta.g, "mouseover", this.nb.rd), (this.nb.rd = null)),
      this.nb.qd &&
        (eg(this.ta.g, "mouseout", this.nb.qd), (this.nb.qd = null)));
    this.Wb && this.Wb.W();
    this.ca && this.ca.W();
    delete this.Jc;
    delete this.od;
    delete this.Ce;
    delete this.ta.ib;
    delete this.ta.g;
    delete this.nb;
    delete this.Wb;
    delete this.ca;
    delete this.R;
    P.prototype.L.call(this);
  };
  Ko.prototype.pb = function () {
    return this.ca ? this.ca.g : this.position;
  };
  Ko.prototype.yd = function (a) {
    N().yd(a);
  };
  var Jo = function (a) {
    a = a.ta.ib;
    var b;
    if ((b = a && a.getAttribute))
      b = /-[a-z]/.test("googleAvInapp")
        ? !1
        : Xl && a.dataset
        ? "googleAvInapp" in a.dataset
        : a.hasAttribute
        ? a.hasAttribute("data-" + Vg())
        : !!a.getAttribute("data-" + Vg());
    b && (Dn().h = !0);
  };
  Ko.prototype.Ka = function () {
    return !1;
  };
  Ko.prototype.xc = function () {
    return new uo();
  };
  Ko.prototype.oa = function () {
    return this.Jc;
  };
  var Lo = function (a, b) {
      b != a.Bb && ((a.Bb = b), (a = Dn()), b ? a.A++ : 0 < a.A && a.A--);
    },
    Mo = function (a, b) {
      if (a.ca) {
        if (b.getName() === a.ca.getName()) return;
        a.ca.W();
        a.ca = null;
      }
      b = b.create(a.ta.g, a.R, a.Ka());
      if ((b = null != b && b.Xc() ? b : null)) a.ca = b;
    },
    No = function (a, b, c) {
      if (
        !a.Ac ||
        -1 == a.Bc ||
        -1 === b.getTimestamp() ||
        -1 === a.Ac.getTimestamp()
      )
        return 0;
      a = b.getTimestamp() - a.Ac.getTimestamp();
      return a > c ? 0 : a;
    };
  Ko.prototype.he = function (a) {
    return No(this, a, 1e4);
  };
  var Oo = function (a, b, c) {
      if (a.ca) {
        a.ca.Ya();
        var d = a.ca.I,
          e = d.j,
          f = e.g;
        if (null != d.l) {
          var g = d.h;
          a.Oc = new Og(g.left - f.left, g.top - f.top);
        }
        f = a.Uc() ? Math.max(d.g, d.o) : d.g;
        g = {};
        null !== e.volume && (g.volume = e.volume);
        e = a.he(d);
        a.Ac = d;
        a.Md(f, b, c, !1, g, e, d.A);
      }
    },
    Po = function (a) {
      if (a.Kb && a.Wb) {
        var b = 1 == Rl(a.R, "od"),
          c = Dn().g,
          d = a.Wb,
          e = a.ca ? a.ca.getName() : "ns",
          f = a.Oc,
          g = new D(c.getWidth(), c.getHeight());
        c = a.Uc();
        a = { mg: e, Oc: f, xg: g, Uc: c, Y: a.pa.Y, sg: b };
        if ((b = d.h)) {
          b.Ya();
          e = b.I;
          f = e.j.g;
          var h = (g = null);
          null != e.l &&
            f &&
            ((g = e.h),
            (g = new Og(g.left - f.left, g.top - f.top)),
            (h = new D(f.right - f.left, f.bottom - f.top)));
          e = c ? Math.max(e.g, e.o) : e.g;
          c = { mg: b.getName(), Oc: g, xg: h, Uc: c, sg: !1, Y: e };
        } else c = null;
        c && fo(d, a, c);
      }
    };
  l = Ko.prototype;
  l.Md = function (a, b, c, d, e, f, g) {
    this.Pa ||
      (this.Kb &&
        ((a = this.Zc(a, c, e, g)),
        (d = d && this.pa.Y >= (this.rb() ? 0.3 : 0.5)),
        this.Nd(f, a, d),
        (this.Bc = b),
        0 < a.Y && -1 === this.Ae && (this.Ae = b),
        -1 == this.Be && this.Ra() && (this.Be = b),
        -2 == this.nd && (this.nd = Eo(this.pb()) ? a.Y : -1),
        (this.pa = a)),
      this.od(this));
  };
  l.Nd = function (a, b, c) {
    this.oa().K(a, b, this.pa, c);
  };
  l.hd = function () {
    return new Bl();
  };
  l.Zc = function (a, b, c, d) {
    c = this.hd();
    c.g = b;
    b = hm().h;
    b = 0 === Wi(Wl) ? -1 : b.isVisible() ? 0 : 1;
    c.h = b;
    c.Y = this.dd(a);
    c.rb = this.rb();
    c.sa = d;
    return c;
  };
  l.dd = function (a) {
    return 0 === this.opacity && 1 === Rl(this.R, "opac") ? 0 : a;
  };
  l.rb = function () {
    return !1;
  };
  l.Uc = function () {
    return this.Of || this.Qf;
  };
  l.wa = function () {
    return 0;
  };
  l.Ra = function () {
    return this.Jc.Ra();
  };
  l.je = function () {
    var a = this.Kb;
    a = (this.ke || this.ya()) && !a;
    var b = 2 !== N().h || this.pg;
    return this.Pa || (b && a) ? 2 : this.Ra() ? 4 : 3;
  };
  l.vc = function () {
    return 0;
  };
  var Qo = function (a, b, c) {
    b && (a.od = b);
    c && (a.Ce = c);
  };
  var Ro = function () {};
  Ro.prototype.next = function () {
    return So;
  };
  var So = { done: !0, value: void 0 };
  Ro.prototype.xb = function () {
    return this;
  };
  var To = function () {
      this.o = this.g = this.j = this.h = this.l = 0;
    },
    Uo = function (a) {
      var b = {};
      b = ((b.ptlt = Date.now() - a.l), b);
      var c = a.h;
      c && (b.pnk = c);
      (c = a.j) && (b.pnc = c);
      (c = a.o) && (b.pnmm = c);
      (a = a.g) && (b.pns = a);
      return b;
    };
  var Vo = function () {
    Bl.call(this);
    this.fullscreen = !1;
    this.volume = void 0;
    this.paused = !1;
    this.mediaTime = -1;
  };
  u(Vo, Bl);
  var Wo = function (a) {
    return vn(a.volume) && 0 < a.volume;
  };
  var Yo = function (a, b, c, d) {
      c = void 0 === c ? !0 : c;
      d =
        void 0 === d
          ? function () {
              return !0;
            }
          : d;
      return function (e) {
        var f = e[a];
        if (Array.isArray(f) && d(e)) return Xo(f, b, c);
      };
    },
    Zo = function (a, b) {
      return function (c) {
        return b(c) ? c[a] : void 0;
      };
    },
    $o = function (a) {
      return function (b) {
        for (var c = 0; c < a.length; c++)
          if (a[c] === b.e || (void 0 === a[c] && !b.hasOwnProperty("e")))
            return !0;
        return !1;
      };
    },
    Xo = function (a, b, c) {
      return void 0 === c || c
        ? Ob(a, function (d, e) {
            return Vb(b, e);
          })
        : Pb(b, function (d, e, f) {
            return a
              .slice(0 < e ? f[e - 1] + 1 : 0, d + 1)
              .reduce(function (g, h) {
                return g + h;
              }, 0);
          });
    };
  var ap = $o([void 0, 1, 2, 3, 4, 8, 16]),
    bp = $o([void 0, 4, 8, 16]),
    cp = {
      sv: "sv",
      v: "v",
      cb: "cb",
      e: "e",
      nas: "nas",
      msg: "msg",
      if: "if",
      sdk: "sdk",
      p: "p",
      p0: Zo("p0", bp),
      p1: Zo("p1", bp),
      p2: Zo("p2", bp),
      p3: Zo("p3", bp),
      cp: "cp",
      tos: "tos",
      mtos: "mtos",
      amtos: "amtos",
      mtos1: Yo("mtos1", [0, 2, 4], !1, bp),
      mtos2: Yo("mtos2", [0, 2, 4], !1, bp),
      mtos3: Yo("mtos3", [0, 2, 4], !1, bp),
      mcvt: "mcvt",
      ps: "ps",
      scs: "scs",
      bs: "bs",
      vht: "vht",
      mut: "mut",
      a: "a",
      a0: Zo("a0", bp),
      a1: Zo("a1", bp),
      a2: Zo("a2", bp),
      a3: Zo("a3", bp),
      ft: "ft",
      dft: "dft",
      at: "at",
      dat: "dat",
      as: "as",
      vpt: "vpt",
      gmm: "gmm",
      std: "std",
      efpf: "efpf",
      swf: "swf",
      nio: "nio",
      px: "px",
      nnut: "nnut",
      vmer: "vmer",
      vmmk: "vmmk",
      vmiec: "vmiec",
      nmt: "nmt",
      tcm: "tcm",
      bt: "bt",
      pst: "pst",
      vpaid: "vpaid",
      dur: "dur",
      vmtime: "vmtime",
      dtos: "dtos",
      dtoss: "dtoss",
      dvs: "dvs",
      dfvs: "dfvs",
      dvpt: "dvpt",
      fmf: "fmf",
      vds: "vds",
      is: "is",
      i0: "i0",
      i1: "i1",
      i2: "i2",
      i3: "i3",
      ic: "ic",
      cs: "cs",
      c: "c",
      c0: Zo("c0", bp),
      c1: Zo("c1", bp),
      c2: Zo("c2", bp),
      c3: Zo("c3", bp),
      mc: "mc",
      nc: "nc",
      mv: "mv",
      nv: "nv",
      qmt: Zo("qmtos", ap),
      qnc: Zo("qnc", ap),
      qmv: Zo("qmv", ap),
      qnv: Zo("qnv", ap),
      raf: "raf",
      rafc: "rafc",
      lte: "lte",
      ces: "ces",
      tth: "tth",
      femt: "femt",
      femvt: "femvt",
      emc: "emc",
      emuc: "emuc",
      emb: "emb",
      avms: "avms",
      nvat: "nvat",
      qi: "qi",
      psm: "psm",
      psv: "psv",
      psfv: "psfv",
      psa: "psa",
      pnk: "pnk",
      pnc: "pnc",
      pnmm: "pnmm",
      pns: "pns",
      ptlt: "ptlt",
      pngs: "pings",
      veid: "veid",
      ssb: "ssb",
      ss0: Zo("ss0", bp),
      ss1: Zo("ss1", bp),
      ss2: Zo("ss2", bp),
      ss3: Zo("ss3", bp),
      dc_rfl: "urlsigs",
      obd: "obd",
      omidp: "omidp",
      omidr: "omidr",
      omidv: "omidv",
      omida: "omida",
      omids: "omids",
      omidpv: "omidpv",
      omidam: "omidam",
      omidct: "omidct",
      omidia: "omidia",
      omiddc: "omiddc",
      omidlat: "omidlat",
      omiddit: "omiddit",
      nopd: "nopd",
    },
    dp = Object.assign({}, cp, {
      avid: (function (a) {
        return function () {
          return a;
        };
      })("audio"),
      avas: "avas",
      vs: "vs",
    }),
    ep = {
      atos: "atos",
      avt: Yo("atos", [2]),
      davs: "davs",
      dafvs: "dafvs",
      dav: "dav",
      ss: (function (a, b) {
        return function (c) {
          return void 0 === c[a] && void 0 !== b ? b : c[a];
        };
      })("ss", 0),
      t: "t",
    };
  var fp = function () {
    this.h = this.g = "";
  };
  var qp = function () {},
    rp = function (a, b) {
      var c = {};
      if (void 0 !== a)
        if (null != b)
          for (var d in b) {
            var e = b[d];
            d in Object.prototype ||
              (null != e && (c[d] = "function" === typeof e ? e(a) : a[e]));
          }
        else zg(c, a);
      return Xn(Vn(new Tn(), c));
    };
  var sp = function () {
    var a = {};
    this.h =
      ((a.vs = [1, 0]),
      (a.vw = [0, 1]),
      (a.am = [2, 2]),
      (a.a = [4, 4]),
      (a.f = [8, 8]),
      (a.bm = [16, 16]),
      (a.b = [32, 32]),
      (a.avw = [0, 64]),
      (a.avs = [64, 0]),
      (a.pv = [256, 256]),
      (a.gdr = [0, 512]),
      (a.p = [0, 1024]),
      (a.r = [0, 2048]),
      (a.m = [0, 4096]),
      (a.um = [0, 8192]),
      (a.ef = [0, 16384]),
      (a.s = [0, 32768]),
      (a.pmx = [0, 16777216]),
      (a.mut = [33554432, 33554432]),
      (a.umutb = [67108864, 67108864]),
      (a.tvoff = [134217728, 134217728]),
      a);
    this.g = {};
    for (var b in this.h) 0 < this.h[b][1] && (this.g[b] = 0);
    this.j = 0;
  };
  sp.prototype.reportEvent = function (a) {
    var b = this.h[a],
      c = b[1];
    this.j += b[0];
    0 < c && 0 == this.g[a] && (this.g[a] = 1);
  };
  var tp = function (a) {
      var b = pg(a.h),
        c = 0,
        d;
      for (d in a.g)
        Vb(b, d) && 1 == a.g[d] && ((c += a.h[d][1]), (a.g[d] = 2));
      return c;
    },
    up = function (a) {
      var b = 0,
        c;
      for (c in a.g) {
        var d = a.g[c];
        if (1 == d || 2 == d) b += a.h[c][1];
      }
      return b;
    };
  var vp = function () {
    this.g = this.h = 0;
  };
  vp.prototype.getValue = function () {
    return this.h;
  };
  var wp = function (a, b, c) {
    32 <= b ||
      (a.g & (1 << b) && !c
        ? (a.h &= ~(1 << b))
        : a.g & (1 << b) || !c || (a.h |= 1 << b),
      (a.g |= 1 << b));
  };
  var xp = function () {
    uo.call(this);
    this.j = new go();
    this.V = this.D = this.J = 0;
    this.I = -1;
    this.ma = new go();
    this.l = new go();
    this.g = new jo();
    this.A = this.o = -1;
    this.F = new go();
    this.ha = 2e3;
    this.U = new vp();
    this.aa = new vp();
    this.Z = new vp();
  };
  u(xp, uo);
  var yp = function (a, b, c) {
    var d = a.V;
    Lm || c || -1 == a.I || (d += b - a.I);
    return d;
  };
  xp.prototype.K = function (a, b, c, d) {
    if (!b.paused) {
      uo.prototype.K.call(this, a, b, c, d);
      var e = Wo(b) && Wo(c),
        f = 0.5 <= (d ? Math.min(b.Y, c.Y) : c.Y);
      vn(b.volume) &&
        ((this.o = -1 != this.o ? Math.min(this.o, b.volume) : b.volume),
        (this.A = Math.max(this.A, b.volume)));
      f && ((this.J += a), (this.D += e ? a : 0));
      so(this.g, b.Y, c.Y, b.g, a, d, e);
      ho(this.j, !0, a);
      ho(this.l, e, a);
      ho(this.F, c.fullscreen, a);
      ho(this.ma, e && !f, a);
      a = Math.floor(b.mediaTime / 1e3);
      wp(this.U, a, b.isVisible());
      wp(this.aa, a, 1 <= b.Y);
      wp(this.Z, a, Wo(b));
    }
  };
  var zp = function () {
    this.j = !1;
  };
  zp.prototype.h = function (a) {
    this.j ||
      (this.g(a)
        ? ((a = this.K.report(this.o, a)), (this.l |= a), (a = 0 == a))
        : (a = !1),
      (this.j = a));
  };
  var Ap = function (a, b) {
    this.j = !1;
    this.o = a;
    this.K = b;
    this.l = 0;
  };
  u(Ap, zp);
  Ap.prototype.g = function () {
    return !0;
  };
  Ap.prototype.A = function () {
    return !1;
  };
  Ap.prototype.getId = function () {
    var a = this,
      b = tg(function (c) {
        return c == a.o;
      });
    return Um[b].toString();
  };
  Ap.prototype.toString = function () {
    var a = "";
    this.A() && (a += "c");
    this.j && (a += "s");
    0 < this.l && (a += ":" + this.l);
    return this.getId() + a;
  };
  var Bp = function (a, b) {
    Ap.call(this, a, b);
    this.B = [];
  };
  u(Bp, Ap);
  Bp.prototype.h = function (a, b) {
    b = void 0 === b ? null : b;
    null != b && this.B.push(b);
    Ap.prototype.h.call(this, a);
  };
  var Cp = function () {};
  var Dp = function () {};
  u(Dp, Cp);
  Dp.prototype.h = function () {
    return null;
  };
  Dp.prototype.j = function () {
    return [];
  };
  var Ep = function (a, b, c, d) {
    On.call(this, a, b, c, d);
  };
  u(Ep, On);
  l = Ep.prototype;
  l.bd = function () {
    if (this.j) {
      var a = this.j,
        b = this.h.g.j;
      try {
        try {
          var c = tn(a.getBoundingClientRect());
        } catch (m) {
          c = new F(0, 0, 0, 0);
        }
        var d = c.right - c.left,
          e = c.bottom - c.top,
          f = en(a, b),
          g = f.x,
          h = f.y;
        var k = new F(
          Math.round(h),
          Math.round(g + d),
          Math.round(h + e),
          Math.round(g)
        );
      } catch (m) {
        k = Fi(Co);
      }
      this.g = k;
    }
  };
  l.ae = function () {
    this.l = this.h.o.g;
  };
  l.me = function (a) {
    var b = 1 == Rl(this.R, "od");
    return Ho(a, this.l, this.j, b);
  };
  l.be = function () {
    this.timestamp = Mm();
  };
  l.Ya = function () {
    this.be();
    this.bd();
    if (
      this.j &&
      "number" === typeof this.j.videoWidth &&
      "number" === typeof this.j.videoHeight
    ) {
      var a = this.j;
      var b = new D(a.videoWidth, a.videoHeight);
      a = this.g;
      var c = a.getWidth(),
        d = a.getHeight(),
        e = b.width;
      b = b.height;
      0 >= e ||
        0 >= b ||
        0 >= c ||
        0 >= d ||
        ((e /= b),
        (a = Fi(a)),
        e > c / d
          ? ((c /= e),
            (d = (d - c) / 2),
            0 < d &&
              ((d = a.top + d),
              (a.top = Math.round(d)),
              (a.bottom = Math.round(d + c))))
          : ((d *= e),
            (c = Math.round((c - d) / 2)),
            0 < c &&
              ((c = a.left + c),
              (a.left = Math.round(c)),
              (a.right = Math.round(c + d)))));
      this.g = a;
    }
    this.ae();
    a = this.g;
    c = this.l;
    a =
      a.left <= c.right &&
      c.left <= a.right &&
      a.top <= c.bottom &&
      c.top <= a.bottom
        ? new F(
            Math.max(a.top, c.top),
            Math.min(a.right, c.right),
            Math.min(a.bottom, c.bottom),
            Math.max(a.left, c.left)
          )
        : new F(0, 0, 0, 0);
    c = a.top >= a.bottom || a.left >= a.right ? new F(0, 0, 0, 0) : a;
    a = this.h.o;
    b = e = d = 0;
    0 < (this.g.bottom - this.g.top) * (this.g.right - this.g.left) &&
      (this.me(c)
        ? (c = new F(0, 0, 0, 0))
        : ((d = Dn().l),
          (b = new F(0, d.height, d.width, 0)),
          (d = Do(c, this.g)),
          (e = Do(c, Dn().g)),
          (b = Do(c, b))));
    c =
      c.top >= c.bottom || c.left >= c.right
        ? new F(0, 0, 0, 0)
        : Gi(c, -this.g.left, -this.g.top);
    En() || (e = d = 0);
    this.I = new Pm(a, this.g, c, d, e, this.timestamp, b);
  };
  l.getName = function () {
    return this.h.getName();
  };
  var Fp = new F(0, 0, 0, 0),
    Gp = function (a, b, c) {
      On.call(this, null, a, b, c);
      this.B = a.isActive();
      this.A = 0;
    };
  u(Gp, Ep);
  l = Gp.prototype;
  l.Xc = function () {
    this.o();
    return !0;
  };
  l.bb = function () {
    Ep.prototype.Ya.call(this);
  };
  l.be = function () {};
  l.bd = function () {};
  l.Ya = function () {
    this.o();
    Ep.prototype.Ya.call(this);
  };
  l.Ab = function (a) {
    a = a.isActive();
    a !== this.B &&
      (a
        ? this.o()
        : ((Dn().g = new F(0, 0, 0, 0)),
          (this.g = new F(0, 0, 0, 0)),
          (this.l = new F(0, 0, 0, 0)),
          (this.timestamp = -1)));
    this.B = a;
  };
  function Hp(a) {
    return [a.top, a.left, a.bottom, a.right];
  }
  var Ip = {},
    Jp =
      ((Ip.firstquartile = 0),
      (Ip.midpoint = 1),
      (Ip.thirdquartile = 2),
      (Ip.complete = 3),
      Ip),
    Kp = function (a, b, c, d, e, f) {
      f = void 0 === f ? new Dp() : f;
      Ko.call(this, b, c, d);
      this.xd = e;
      this.gd = 0;
      this.ia = {};
      this.fa = new sp();
      this.De = {};
      this.la = "";
      this.playerId = null;
      this.Ma = !1;
      this.g = [];
      this.Ta = f.h();
      this.A = f.j();
      this.l = null;
      this.j = -1;
      this.X = this.F = void 0;
      this.H = this.G = 0;
      this.U = -1;
      this.ba = this.ha = !1;
      this.N = this.D = this.h = this.Fb = this.Fa = 0;
      new jo();
      this.V = this.Z = 0;
      this.aa = -1;
      this.ka = 0;
      this.B = Yf;
      this.J = [this.xc()];
      this.Wa = 2;
      this.wb = {};
      this.wb.pause = "p";
      this.wb.resume = "r";
      this.wb.skip = "s";
      this.wb.mute = "m";
      this.wb.unmute = "um";
      this.wb.exitfullscreen = "ef";
      this.o = null;
      this.ma = this.Ea = !1;
    };
  u(Kp, Ko);
  Kp.prototype.Ka = function () {
    return !0;
  };
  var Lp = function (a) {
      a.ke = !0;
      0 != a.ka && (a.ka = 3);
    },
    Mp = function (a) {
      return void 0 === a ? a : Number(a) ? on(a, 3) : 0;
    };
  l = Kp.prototype;
  l.he = function (a) {
    return No(this, a, Math.max(1e4, this.j / 3));
  };
  l.Md = function (a, b, c, d, e, f, g) {
    var h = this,
      k = this.B(this) || {};
    zg(k, e);
    this.j = k.duration || this.j;
    this.F = k.isVpaid || this.F;
    this.X = k.isYouTube || this.X;
    hm();
    this.ma = !1;
    e = Np(this, b);
    1 === Op(this) && (f = e);
    Ko.prototype.Md.call(this, a, b, c, d, k, f, g);
    this.Ta &&
      this.Ta.j &&
      Mb(this.A, function (m) {
        m.h(h);
      });
  };
  l.Nd = function (a, b, c) {
    Ko.prototype.Nd.call(this, a, b, c);
    Pp(this).K(a, b, this.pa, c);
    this.ba = Wo(this.pa) && Wo(b);
    -1 == this.U && this.ha && (this.U = this.oa().j.g);
    this.fa.j = 0;
    a = this.Ra();
    b.isVisible() && this.fa.reportEvent("vs");
    a && this.fa.reportEvent("vw");
    vn(b.volume) && this.fa.reportEvent("am");
    Wo(b) ? this.fa.reportEvent("a") : this.fa.reportEvent("mut");
    this.Bb && this.fa.reportEvent("f");
    -1 != b.h &&
      (this.fa.reportEvent("bm"),
      1 == b.h &&
        (this.fa.reportEvent("b"), Wo(b) && this.fa.reportEvent("umutb")));
    Wo(b) && b.isVisible() && this.fa.reportEvent("avs");
    this.ba && a && this.fa.reportEvent("avw");
    0 < b.Y && this.fa.reportEvent("pv");
    Qp(this, this.oa().j.g, !0) && this.fa.reportEvent("gdr");
    2e3 <= po(this.oa().h, 1) && this.fa.reportEvent("pmx");
    this.ma && this.fa.reportEvent("tvoff");
  };
  l.xc = function () {
    return new xp();
  };
  l.oa = function () {
    return this.Jc;
  };
  var Pp = function (a, b) {
    return a.J[null != b && b < a.J.length ? b : a.J.length - 1];
  };
  Kp.prototype.hd = function () {
    return new Vo();
  };
  Kp.prototype.Zc = function (a, b, c, d) {
    a = Ko.prototype.Zc.call(this, a, b, c, void 0 === d ? -1 : d);
    a.fullscreen = this.Bb;
    a.paused = 2 == this.ka;
    a.volume = c.volume;
    vn(a.volume) ||
      (this.Fa++, (b = this.pa), vn(b.volume) && (a.volume = b.volume));
    c = c.currentTime;
    a.mediaTime = void 0 !== c && 0 <= c ? c : -1;
    return a;
  };
  var Op = function (a) {
      var b = !!Rl(N().R, "umt");
      return a.F || (!b && !a.X) ? 0 : 1;
    },
    Np = function (a, b) {
      2 == a.ka
        ? (b = 0)
        : -1 == a.Bc
        ? (b = 0)
        : ((b -= a.Bc), (b = b > Math.max(1e4, a.j / 3) ? 0 : b));
      var c = a.B(a) || {};
      c = void 0 !== c.currentTime ? c.currentTime : a.G;
      var d = c - a.G,
        e = 0;
      0 <= d
        ? ((a.H += b), (a.V += Math.max(b - d, 0)), (e = Math.min(d, a.H)))
        : (a.Z += Math.abs(d));
      0 != d && (a.H = 0);
      -1 == a.aa && 0 < d && (a.aa = 0 <= Km ? Mm() - Km : -1);
      a.G = c;
      return e;
    };
  Kp.prototype.dd = function (a) {
    return Dn(), this.Bb ? 1 : Ko.prototype.dd.call(this, a);
  };
  Kp.prototype.wa = function () {
    return 1;
  };
  Kp.prototype.getDuration = function () {
    return this.j;
  };
  var Rp = function (a, b) {
      Rb(a.A, function (c) {
        return c.o == b.o;
      }) || a.A.push(b);
    },
    Sp = function (a) {
      var b = no(a.oa().g, 1);
      return Qp(a, b);
    },
    Qp = function (a, b, c) {
      return 15e3 <= b
        ? !0
        : a.ha
        ? (void 0 === c ? 0 : c)
          ? !0
          : 0 < a.j
          ? b >= a.j / 2
          : 0 < a.U
          ? b >= a.U
          : !1
        : !1;
    },
    Tp = function (a) {
      var b = {},
        c = Dn();
      b.insideIframe = c.j;
      b.unmeasurable = a.Pa;
      b.position = a.pb();
      b.exposure = a.pa.Y;
      b.documentSize = c.o;
      b.viewportSize = new D(c.g.getWidth(), c.g.getHeight());
      null != a.o && (b.presenceData = a.o);
      b.screenShare = a.pa.sa;
      return b;
    },
    Up = function (a) {
      var b = on(a.pa.Y, 2),
        c = a.fa.j,
        d = a.pa,
        e = Pp(a),
        f = Mp(e.o),
        g = Mp(e.A),
        h = Mp(d.volume),
        k = on(e.B, 2),
        m = on(e.G, 2),
        n = on(d.Y, 2),
        q = on(e.H, 2),
        r = on(e.N, 2);
      d = on(d.sa, 2);
      a = Fi(a.pb());
      a.round();
      e = vo(e, !1);
      return {
        wg: b,
        Pb: c,
        Kc: f,
        Gc: g,
        Hb: h,
        Lc: k,
        Hc: m,
        Y: n,
        Mc: q,
        Ic: r,
        sa: d,
        position: a,
        Nc: e,
      };
    },
    Wp = function (a, b) {
      Vp(a.g, b, function () {
        return {
          wg: 0,
          Pb: void 0,
          Kc: -1,
          Gc: -1,
          Hb: -1,
          Lc: -1,
          Hc: -1,
          Y: -1,
          Mc: -1,
          Ic: -1,
          sa: -1,
          position: void 0,
          Nc: [],
        };
      });
      a.g[b] = Up(a);
    },
    Vp = function (a, b, c) {
      for (var d = a.length; d < b + 1; ) a.push(c()), d++;
    },
    Zp = function (a, b, c) {
      var d = a.De[b];
      if (null != d) return d;
      d = Xp(a, b);
      var e = tg(function (f) {
        return f == b;
      });
      a = Yp(a, d, d, c, Jp[ug[e]]);
      "fully_viewable_audible_half_duration_impression" == b && (a.std = "csm");
      return a;
    },
    $p = function (a, b, c) {
      var d = [b];
      if (a != b || c != b) d.unshift(a), d.push(c);
      return d;
    },
    Yp = function (a, b, c, d, e) {
      if (a.Pa) return { if: 0, vs: 0 };
      var f = Fi(a.pb());
      f.round();
      var g = Dn(),
        h = N(),
        k = a.oa(),
        m = a.ca ? a.ca.getName() : "ns",
        n = {};
      n["if"] = g.j ? 1 : void 0;
      n.sdk = a.l ? a.l : void 0;
      n.t = a.og;
      n.p = [f.top, f.left, f.bottom, f.right];
      n.tos = lo(k.h, !1);
      n.mtos = vo(k);
      n.mcvt = k.X.j;
      n.ps = void 0;
      n.vht = yp(k, Mm(), 2 == a.ka);
      n.mut = k.ma.j;
      n.a = Mp(a.pa.volume);
      n.mv = Mp(k.A);
      n.fs = a.Bb ? 1 : 0;
      n.ft = k.F.g;
      n.at = k.l.g;
      n.as = 0 < k.o ? 1 : 0;
      n.atos = lo(k.g);
      n.ssb = lo(k.ba, !1);
      n.amtos = oo(k.g, !1);
      n.uac = a.Fa;
      n.vpt = k.j.g;
      "nio" == m && ((n.nio = 1), (n.avms = "nio"));
      n.gmm = "4";
      n.gdr = Qp(a, k.j.g, !0) ? 1 : 0;
      n.efpf = a.Wa;
      if ("gsv" == m || "nis" == m) (f = a.ca), 0 < f.A && (n.nnut = f.A);
      n.tcm = Op(a);
      n.nmt = a.Z;
      n.bt = a.V;
      n.pst = a.aa;
      n.vpaid = a.F;
      n.dur = a.j;
      n.vmtime = a.G;
      n.is = a.fa.j;
      1 <= a.g.length &&
        ((n.i0 = a.g[0].Pb),
        (n.a0 = [a.g[0].Hb]),
        (n.c0 = [a.g[0].Y]),
        (n.ss0 = [a.g[0].sa]),
        (f = a.g[0].position),
        (n.p0 = f ? Hp(f) : void 0));
      2 <= a.g.length &&
        ((n.i1 = a.g[1].Pb),
        (n.a1 = $p(a.g[1].Kc, a.g[1].Hb, a.g[1].Gc)),
        (n.c1 = $p(a.g[1].Lc, a.g[1].Y, a.g[1].Hc)),
        (n.ss1 = $p(a.g[1].Mc, a.g[1].sa, a.g[1].Ic)),
        (f = a.g[1].position),
        (n.p1 = f ? Hp(f) : void 0),
        (n.mtos1 = a.g[1].Nc));
      3 <= a.g.length &&
        ((n.i2 = a.g[2].Pb),
        (n.a2 = $p(a.g[2].Kc, a.g[2].Hb, a.g[2].Gc)),
        (n.c2 = $p(a.g[2].Lc, a.g[2].Y, a.g[2].Hc)),
        (n.ss2 = $p(a.g[2].Mc, a.g[2].sa, a.g[2].Ic)),
        (f = a.g[2].position),
        (n.p2 = f ? Hp(f) : void 0),
        (n.mtos2 = a.g[2].Nc));
      4 <= a.g.length &&
        ((n.i3 = a.g[3].Pb),
        (n.a3 = $p(a.g[3].Kc, a.g[3].Hb, a.g[3].Gc)),
        (n.c3 = $p(a.g[3].Lc, a.g[3].Y, a.g[3].Hc)),
        (n.ss3 = $p(a.g[3].Mc, a.g[3].sa, a.g[3].Ic)),
        (f = a.g[3].position),
        (n.p3 = f ? Hp(f) : void 0),
        (n.mtos3 = a.g[3].Nc));
      n.cs = up(a.fa);
      b &&
        ((n.ic = tp(a.fa)),
        (n.dvpt = k.j.h),
        (n.dvs = qo(k.h, 0.5)),
        (n.dfvs = qo(k.h, 1)),
        (n.davs = qo(k.g, 0.5)),
        (n.dafvs = qo(k.g, 1)),
        c && ((k.j.h = 0), ro(k.h), ro(k.g)),
        a.Ra() &&
          ((n.dtos = k.J),
          (n.dav = k.D),
          (n.dtoss = a.gd + 1),
          c && ((k.J = 0), (k.D = 0), a.gd++)),
        (n.dat = k.l.h),
        (n.dft = k.F.h),
        c && ((k.l.h = 0), (k.F.h = 0)));
      n.ps = [g.o.width, g.o.height];
      n.bs = [g.g.getWidth(), g.g.getHeight()];
      n.scs = [g.l.width, g.l.height];
      n.dom = g.domain;
      a.Fb && (n.vds = a.Fb);
      if (0 < a.A.length || a.Ta)
        (b = $b(a.A)),
          a.Ta && b.push(a.Ta),
          (n.pings = Pb(b, function (q) {
            return q.toString();
          }));
      b = Pb(
        Ob(a.A, function (q) {
          return q.A();
        }),
        function (q) {
          return q.getId();
        }
      );
      ac(b);
      n.ces = b;
      a.h && (n.vmer = a.h);
      a.D && (n.vmmk = a.D);
      a.N && (n.vmiec = a.N);
      n.avms = a.ca ? a.ca.getName() : "ns";
      a.ca && zg(n, a.ca.ab());
      d
        ? ((n.c = on(a.pa.Y, 2)), (n.ss = on(a.pa.sa, 2)))
        : (n.tth = Mm() - Jm);
      n.mc = on(k.G, 2);
      n.nc = on(k.B, 2);
      n.mv = Mp(k.A);
      n.nv = Mp(k.o);
      n.lte = on(a.nd, 2);
      d = Pp(a, e);
      vo(k);
      n.qmtos = vo(d);
      n.qnc = on(d.B, 2);
      n.qmv = Mp(d.A);
      n.qnv = Mp(d.o);
      n.qas = 0 < d.o ? 1 : 0;
      n.qi = a.la;
      n.avms || (n.avms = "geo");
      n.psm = k.U.g;
      n.psv = k.U.getValue();
      n.psfv = k.aa.getValue();
      n.psa = k.Z.getValue();
      h = Tl(h.R);
      h.length && (n.veid = h);
      a.o && zg(n, Uo(a.o));
      n.avas = a.vc();
      n.vs = a.je();
      return n;
    },
    Xp = function (a, b) {
      if (Vb(Tm, b)) return !0;
      var c = a.ia[b];
      return void 0 !== c ? ((a.ia[b] = !0), !c) : !1;
    };
  Kp.prototype.je = function () {
    return this.Pa ? 2 : Sp(this) ? 5 : this.Ra() ? 4 : 3;
  };
  Kp.prototype.vc = function () {
    return this.Ea ? (2e3 <= this.oa().l.j ? 4 : 3) : 2;
  };
  var aq = Date.now(),
    dq = function () {
      this.g = {};
      var a = E();
      bq(this, a, document);
      var b = cq();
      try {
        if ("1" == b) {
          for (var c = a.parent; c != a.top; c = c.parent)
            bq(this, c, c.document);
          bq(this, a.top, a.top.document);
        }
      } catch (d) {}
    },
    cq = function () {
      var a = document.documentElement;
      try {
        if (!Ih(E().top)) return "2";
        var b = [],
          c = E(a.ownerDocument);
        for (a = c; a != c.top; a = a.parent)
          if (a.frameElement) b.push(a.frameElement);
          else break;
        return b && 0 != b.length ? "1" : "0";
      } catch (d) {
        return "2";
      }
    },
    bq = function (a, b, c) {
      Bo(
        c,
        "mousedown",
        function () {
          return eq(a);
        },
        301
      );
      Bo(
        b,
        "scroll",
        function () {
          return fq(a);
        },
        302
      );
      Bo(
        c,
        "touchmove",
        function () {
          return gq(a);
        },
        303
      );
      Bo(
        c,
        "mousemove",
        function () {
          return hq(a);
        },
        304
      );
      Bo(
        c,
        "keydown",
        function () {
          return iq(a);
        },
        305
      );
    },
    eq = function (a) {
      kg(a.g, function (b) {
        1e5 < b.j || ++b.j;
      });
    },
    fq = function (a) {
      kg(a.g, function (b) {
        1e5 < b.g || ++b.g;
      });
    },
    gq = function (a) {
      kg(a.g, function (b) {
        1e5 < b.g || ++b.g;
      });
    },
    iq = function (a) {
      kg(a.g, function (b) {
        1e5 < b.h || ++b.h;
      });
    },
    hq = function (a) {
      kg(a.g, function (b) {
        1e5 < b.o || ++b.o;
      });
    };
  var jq = function () {
      this.g = [];
      this.h = [];
    },
    kq = function (a, b) {
      return Sb(a.g, function (c) {
        return c.la == b;
      });
    },
    lq = function (a, b) {
      return b
        ? Sb(a.g, function (c) {
            return c.ta.ib == b;
          })
        : null;
    },
    mq = function (a, b) {
      return Sb(a.h, function (c) {
        return 2 == c.wa() && c.la == b;
      });
    },
    oq = function () {
      var a = nq;
      return 0 == a.g.length ? a.h : 0 == a.h.length ? a.g : Zb(a.h, a.g);
    };
  jq.prototype.reset = function () {
    this.g = [];
    this.h = [];
  };
  var pq = function (a, b) {
      a = 1 == b.wa() ? a.g : a.h;
      var c = Tb(a, function (d) {
        return d == b;
      });
      return -1 != c ? (a.splice(c, 1), b.ca && b.ca.Xb(), b.W(), !0) : !1;
    },
    qq = function (a) {
      var b = nq;
      if (pq(b, a)) {
        switch (a.wa()) {
          case 0:
            var c = function () {
              return null;
            };
          case 2:
            c = function () {
              return mq(b, a.la);
            };
            break;
          case 1:
            c = function () {
              return kq(b, a.la);
            };
        }
        for (var d = c(); d; d = c()) pq(b, d);
      }
    },
    rq = function (a) {
      var b = nq;
      a = Ob(a, function (c) {
        return !lq(b, c.ta.ib);
      });
      b.g.push.apply(b.g, ha(a));
    },
    sq = function (a) {
      var b = [];
      Mb(a, function (c) {
        Rb(nq.g, function (d) {
          return d.ta.ib === c.ta.ib && d.la === c.la;
        }) || (nq.g.push(c), b.push(c));
      });
    },
    nq = C(jq);
  var tq = function () {
      this.g = this.h = null;
    },
    uq = function (a, b) {
      if (null == a.h) return !1;
      var c = function (d, e) {
        b(d, e);
      };
      a.g = Sb(a.h, function (d) {
        return null != d && d.Sd();
      });
      a.g && (a.g.init(c) ? Ln(a.g.g) : b(a.g.g.yb(), a.g));
      return null != a.g;
    };
  var wq = function (a) {
    a = vq(a);
    Pn.call(this, a.length ? a[a.length - 1] : new Hn(O, 0));
    this.j = a;
    this.h = null;
  };
  u(wq, Pn);
  l = wq.prototype;
  l.getName = function () {
    return (this.h ? this.h : this.g).getName();
  };
  l.ab = function () {
    return (this.h ? this.h : this.g).ab();
  };
  l.Oa = function () {
    return (this.h ? this.h : this.g).Oa();
  };
  l.init = function (a) {
    var b = !1;
    Mb(this.j, function (c) {
      c.initialize() && (b = !0);
    });
    b && ((this.o = a), Kn(this.g, this));
    return b;
  };
  l.W = function () {
    Mb(this.j, function (a) {
      a.W();
    });
    Pn.prototype.W.call(this);
  };
  l.Sd = function () {
    return Rb(this.j, function (a) {
      return a.F();
    });
  };
  l.Gb = function () {
    return Rb(this.j, function (a) {
      return a.F();
    });
  };
  l.Yb = function (a, b, c) {
    return new Ep(a, this.g, b, c);
  };
  l.bb = function (a) {
    this.h = a.h;
  };
  var vq = function (a) {
    if (!a.length) return [];
    a = Ob(a, function (c) {
      return null != c && c.F();
    });
    for (var b = 1; b < a.length; b++) Kn(a[b - 1], a[b]);
    return a;
  };
  var xq = { threshold: [0, 0.3, 0.5, 0.75, 1] },
    yq = function (a, b, c, d) {
      On.call(this, a, b, c, d);
      this.D = this.K = this.A = this.B = this.o = null;
    };
  u(yq, Ep);
  yq.prototype.Xc = function () {
    var a = this;
    this.D || (this.D = Mm());
    if (
      Dm(298, function () {
        return zq(a);
      })
    )
      return !0;
    Jn(this.h, "msf");
    return !1;
  };
  yq.prototype.Xb = function () {
    if (this.o && this.j)
      try {
        this.o.unobserve(this.j),
          this.B
            ? (this.B.unobserve(this.j), (this.B = null))
            : this.A && (this.A.disconnect(), (this.A = null));
      } catch (a) {}
  };
  var Aq = function (a) {
      return a.o && a.o.takeRecords ? a.o.takeRecords() : [];
    },
    zq = function (a) {
      if (!a.j) return !1;
      var b = a.j,
        c = a.h.g.j,
        d = N().g.g;
      a.o = new c.IntersectionObserver(
        nm(d, function (e) {
          return Bq(a, e);
        }),
        xq
      );
      d = nm(d, function () {
        a.o.unobserve(b);
        a.o.observe(b);
        Bq(a, Aq(a));
      });
      c.ResizeObserver
        ? ((a.B = new c.ResizeObserver(d)), a.B.observe(b))
        : c.MutationObserver &&
          ((a.A = new w.MutationObserver(d)),
          a.A.observe(b, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0,
          }));
      a.o.observe(b);
      Bq(a, Aq(a));
      return !0;
    },
    Bq = function (a, b) {
      try {
        if (b.length) {
          a.K || (a.K = Mm());
          var c = Cq(b),
            d = en(a.j, a.h.g.j),
            e = d.x,
            f = d.y;
          a.g = new F(
            Math.round(f),
            Math.round(e) + c.boundingClientRect.width,
            Math.round(f) + c.boundingClientRect.height,
            Math.round(e)
          );
          var g = tn(c.intersectionRect);
          a.l = Gi(g, a.g.left - g.left, a.g.top - g.top);
        }
      } catch (h) {
        a.Xb(), Fm(299, h);
      }
    },
    Cq = function (a) {
      return Qb(
        a,
        function (b, c) {
          return b.time > c.time ? b : c;
        },
        a[0]
      );
    };
  l = yq.prototype;
  l.Ya = function () {
    var a = Aq(this);
    0 < a.length && Bq(this, a);
    Ep.prototype.Ya.call(this);
  };
  l.bd = function () {};
  l.me = function () {
    return !1;
  };
  l.ae = function () {};
  l.ab = function () {
    var a = {};
    return Object.assign(
      this.h.ab(),
      ((a.niot_obs = this.D), (a.niot_cbk = this.K), a)
    );
  };
  l.getName = function () {
    return "nio";
  };
  var Dq = function (a) {
    a = void 0 === a ? O : a;
    Pn.call(this, new Hn(a, 2));
  };
  u(Dq, Pn);
  Dq.prototype.getName = function () {
    return "nio";
  };
  Dq.prototype.Gb = function () {
    return !Dn().h && null != this.g.g.j.IntersectionObserver;
  };
  Dq.prototype.Yb = function (a, b, c) {
    return new yq(a, this.g, b, c);
  };
  var Fq = function () {
    var a = Eq();
    Hn.call(this, O.top, a, "geo");
  };
  u(Fq, Hn);
  Fq.prototype.aa = function () {
    return Dn().g;
  };
  Fq.prototype.F = function () {
    var a = Eq();
    this.K !== a &&
      (this.g != this && a > this.g.K && ((this.g = this), In(this)),
      (this.K = a));
    return 2 == a;
  };
  var Eq = function () {
    N();
    var a = Dn();
    return a.j || a.h ? 0 : 2;
  };
  var Gq = function () {};
  var Hq = function () {
      this.done = !1;
      this.g = {
        lf: 0,
        Yd: 0,
        wi: 0,
        ee: 0,
        ld: -1,
        tf: 0,
        sf: 0,
        uf: 0,
        lg: 0,
      };
      this.l = null;
      this.A = !1;
      this.j = null;
      this.B = 0;
      this.h = new Fn(this);
    },
    Kq = function () {
      var a = Iq;
      a.A ||
        ((a.A = !0),
        Jq(a, function () {
          return a.o.apply(a, ha(Ia.apply(0, arguments)));
        }),
        a.o());
    };
  Hq.prototype.sample = function () {
    Lq(this, oq(), !1);
  };
  var Mq = function () {
      C(Gq);
      var a = C(tq);
      null != a.g && a.g.g ? Ln(a.g.g) : zn(Dn());
    },
    Lq = function (a, b, c) {
      if (!a.done && (a.h.cancel(), 0 != b.length)) {
        a.j = null;
        try {
          Mq();
          var d = Mm();
          N().l = d;
          if (null != C(tq).g)
            for (var e = 0; e < b.length; e++) Oo(b[e], d, c);
          for (d = 0; d < b.length; d++) Po(b[d]);
          ++a.g.ee;
        } finally {
          c
            ? Mb(b, function (f) {
                f.pa.Y = 0;
              })
            : Gn(a.h);
        }
      }
    },
    Jq = function (a, b) {
      if (!a.l) {
        b = Em(142, b);
        hm();
        var c = Xi(Wl);
        c && dg(Wl, c, b, { capture: !1 }) && (a.l = b);
      }
    };
  Hq.prototype.o = function () {
    var a = En(),
      b = Mm();
    a
      ? (Lm ||
          ((Hm = b),
          Mb(nq.g, function (c) {
            var d = c.oa();
            d.V = yp(d, b, 1 != c.ka);
          })),
        (Lm = !0))
      : ((this.B = Nq(this, b)),
        (Lm = !1),
        (Jm = b),
        Mb(nq.g, function (c) {
          c.Kb && (c.oa().I = b);
        }));
    Lq(this, oq(), !a);
  };
  var Oq = function () {
      var a = C(tq);
      if (null != a.g) {
        var b = a.g;
        Mb(oq(), function (c) {
          return Mo(c, b);
        });
      }
    },
    Nq = function (a, b) {
      a = a.B;
      Lm && (a += b - Hm);
      return a;
    },
    Pq = function (a) {
      a =
        void 0 === a
          ? function () {
              return {};
            }
          : a;
      Am.Hd("av-js");
      wm.g = 0.01;
      Cm([
        function (b) {
          var c = N(),
            d = {};
          d = ((d.bin = c.h), (d.type = "error"), d);
          c = Sl(c.R);
          if (!Iq.j) {
            var e = Iq,
              f = O.document,
              g = 0 <= Im ? Mm() - Im : -1,
              h = Mm();
            -1 == e.g.ld && (g = h);
            var k = Dn(),
              m = N(),
              n = Sl(m.R),
              q = oq();
            try {
              if (0 < q.length) {
                var r = k.g;
                r && (n.bs = [r.getWidth(), r.getHeight()]);
                var v = k.o;
                v && (n.ps = [v.width, v.height]);
                O.screen && (n.scs = [O.screen.width, O.screen.height]);
              } else
                (n.url = encodeURIComponent(O.location.href.substring(0, 512))),
                  f.referrer &&
                    (n.referrer = encodeURIComponent(
                      f.referrer.substring(0, 512)
                    ));
              n.tt = g;
              n.pt = Im;
              n.bin = m.h;
              void 0 !== O.google_osd_load_pub_page_exp &&
                (n.olpp = O.google_osd_load_pub_page_exp);
              n.deb = [
                1,
                e.g.lf,
                e.g.Yd,
                e.g.ee,
                e.g.ld,
                0,
                e.h.h,
                e.g.tf,
                e.g.sf,
                e.g.uf,
                e.g.lg,
                -1,
              ].join(";");
              n.tvt = Nq(e, h);
              k.h && (n.inapp = 1);
              if (null !== O && O != O.top) {
                0 < q.length &&
                  (n.iframe_loc = encodeURIComponent(
                    O.location.href.substring(0, 512)
                  ));
                var x = k.I;
                n.is = [x.getWidth(), x.getHeight()];
              }
            } catch (S) {
              n.error = 1;
            }
            Iq.j = n;
          }
          v = Iq.j;
          r = {};
          for (var H in v) r[H] = v[H];
          H = N().g;
          if (1 == Rl(H.j, "prf")) {
            v = new lm();
            x = H.g;
            e = 0;
            -1 < x.g && (e = x.j.g.now() - x.g);
            x = x.o + e;
            if (null != x && "number" !== typeof x)
              throw Error(
                "Value of float/double field must be a number, found " +
                  typeof x +
                  ": " +
                  x
              );
            v = Se(v, 1, x, 0);
            x = H.g;
            v = Se(v, 5, ge(-1 < x.g ? x.h + 1 : x.h), 0);
            v = Se(v, 2, je(H.h.g.j()), "0");
            v = Se(v, 3, je(H.h.g.h()), "0");
            H = Se(v, 4, je(H.h.g.g()), "0");
            v = {};
            H = ((v.pf = Oc(H.g())), v);
          } else H = {};
          zg(r, H);
          zg(b, d, c, r, a());
        },
      ]);
    },
    Iq = C(Hq);
  var Qq = null,
    Rq = "",
    Sq = !1,
    Tq = function () {
      var a = Qq || O;
      if (!a) return "";
      var b = [];
      if (!a.location || !a.location.href) return "";
      b.push("url=" + encodeURIComponent(a.location.href.substring(0, 512)));
      a.document &&
        a.document.referrer &&
        b.push(
          "referrer=" +
            encodeURIComponent(a.document.referrer.substring(0, 512))
        );
      return b.join("&");
    };
  function Uq() {
    var a =
        "av.default_js_unreleased_RCxx".match(/_(\d{8})_RC\d+$/) ||
        "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_\d+$/) ||
        "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+\.\d+$/) ||
        "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_RC\d+$/),
      b;
    if (2 == (null == (b = a) ? void 0 : b.length)) return a[1];
    a = "av.default_js_unreleased_RCxx".match(
      /.*_(\d{2})\.(\d{4})\.\d+_RC\d+$/
    );
    var c;
    return 3 == (null == (c = a) ? void 0 : c.length)
      ? "20" + a[1] + a[2]
      : null;
  }
  var Vq = function () {
      return "ima_html5_sdk".includes("ima_html5_sdk")
        ? { Ha: "ima", Ia: null }
        : "ima_html5_sdk".includes("ima_native_sdk")
        ? { Ha: "nima", Ia: null }
        : "ima_html5_sdk".includes("admob-native-video-javascript")
        ? { Ha: "an", Ia: null }
        : "av.default_js_unreleased_RCxx".includes("cast_js_sdk")
        ? { Ha: "cast", Ia: Uq() }
        : "av.default_js_unreleased_RCxx".includes("youtube.player.web")
        ? { Ha: "yw", Ia: Uq() }
        : "av.default_js_unreleased_RCxx".includes("outstream_web_client")
        ? { Ha: "out", Ia: Uq() }
        : "av.default_js_unreleased_RCxx".includes("drx_rewarded_web")
        ? { Ha: "r", Ia: Uq() }
        : "av.default_js_unreleased_RCxx".includes("gam_native_web_video")
        ? { Ha: "n", Ia: Uq() }
        : "av.default_js_unreleased_RCxx".includes("admob_interstitial_video")
        ? { Ha: "int", Ia: Uq() }
        : { Ha: "j", Ia: null };
    },
    Wq = Vq().Ha,
    Xq = Vq().Ia;
  var Zq = function (a, b) {
      var c = { sv: "960" };
      null !== Xq && (c.v = Xq);
      c.cb = Wq;
      c.nas = nq.g.length;
      c.msg = a;
      void 0 !== b && (a = Yq(b)) && (c.e = Um[a]);
      return c;
    },
    $q = function (a) {
      return 0 == a.lastIndexOf("custom_metric_viewable", 0);
    },
    Yq = function (a) {
      var b = $q(a) ? "custom_metric_viewable" : a.toLowerCase();
      return tg(function (c) {
        return c == b;
      });
    };
  var ar = { Rg: "visible", Ag: "audible", Oh: "time", Qh: "timetype" },
    br = {
      visible: function (a) {
        return /^(100|[0-9]{1,2})$/.test(a);
      },
      audible: function (a) {
        return "0" == a || "1" == a;
      },
      timetype: function (a) {
        return "mtos" == a || "tos" == a;
      },
      time: function (a) {
        return /^(100|[0-9]{1,2})%$/.test(a) || /^([0-9])+ms$/.test(a);
      },
    },
    cr = function () {
      this.g = void 0;
      this.h = !1;
      this.j = 0;
      this.o = -1;
      this.l = "tos";
    },
    dr = function (a) {
      try {
        var b = a.split(",");
        return b.length > pg(ar).length
          ? null
          : Qb(
              b,
              function (c, d) {
                d = d.toLowerCase().split("=");
                if (2 != d.length || void 0 === br[d[0]] || !br[d[0]](d[1]))
                  throw Error("Entry (" + d[0] + ", " + d[1] + ") is invalid.");
                c[d[0]] = d[1];
                return c;
              },
              {}
            );
      } catch (c) {
        return null;
      }
    },
    er = function (a, b) {
      if (void 0 == a.g) return 0;
      switch (a.l) {
        case "mtos":
          return a.h ? po(b.g, a.g) : po(b.h, a.g);
        case "tos":
          return a.h ? no(b.g, a.g) : no(b.h, a.g);
      }
      return 0;
    };
  var fr = function (a, b, c, d) {
    Ap.call(this, b, d);
    this.B = a;
    this.I = c;
  };
  u(fr, Ap);
  fr.prototype.getId = function () {
    return this.B;
  };
  fr.prototype.A = function () {
    return !0;
  };
  fr.prototype.g = function (a) {
    var b = a.oa(),
      c = a.getDuration();
    return Rb(this.I, function (d) {
      if (void 0 != d.g) var e = er(d, b);
      else
        b: {
          switch (d.l) {
            case "mtos":
              e = d.h ? b.l.j : b.j.g;
              break b;
            case "tos":
              e = d.h ? b.l.g : b.j.g;
              break b;
          }
          e = 0;
        }
      0 == e
        ? (d = !1)
        : ((d = -1 != d.j ? d.j : void 0 !== c && 0 < c ? d.o * c : -1),
          (d = -1 != d && e >= d));
      return d;
    });
  };
  var gr = function () {};
  u(gr, qp);
  gr.prototype.g = function (a) {
    var b = new fp();
    b.g = rp(a, cp);
    b.h = rp(a, ep);
    return b;
  };
  var hr = function (a) {
    Ap.call(this, "fully_viewable_audible_half_duration_impression", a);
  };
  u(hr, Ap);
  hr.prototype.g = function (a) {
    return Sp(a);
  };
  var ir = function (a) {
    this.g = a;
  };
  u(ir, Cp);
  var jr = function (a, b) {
    Ap.call(this, a, b);
  };
  u(jr, Ap);
  jr.prototype.g = function (a) {
    return a.oa().Ra();
  };
  var kr = function (a) {
    Bp.call(this, "measurable_impression", a);
  };
  u(kr, Bp);
  kr.prototype.g = function (a) {
    var b = Vb(this.B, Rl(N().R, "ovms"));
    return !a.Pa && (0 != a.ka || b);
  };
  var lr = function () {
    ir.apply(this, arguments);
  };
  u(lr, ir);
  lr.prototype.h = function () {
    return new kr(this.g);
  };
  lr.prototype.j = function () {
    return [new jr("viewable_impression", this.g), new hr(this.g)];
  };
  var mr = function (a, b, c) {
    Gp.call(this, a, b, c);
  };
  u(mr, Gp);
  mr.prototype.o = function () {
    var a = Ma("ima.admob.getViewability"),
      b = Rl(this.R, "queryid");
    "function" === typeof a && b && a(b);
  };
  mr.prototype.getName = function () {
    return "gsv";
  };
  var nr = function (a) {
    a = void 0 === a ? O : a;
    Pn.call(this, new Hn(a, 2));
  };
  u(nr, Pn);
  nr.prototype.getName = function () {
    return "gsv";
  };
  nr.prototype.Gb = function () {
    var a = Dn();
    N();
    return a.h && !1;
  };
  nr.prototype.Yb = function (a, b, c) {
    return new mr(this.g, b, c);
  };
  var or = function (a, b, c) {
    Gp.call(this, a, b, c);
  };
  u(or, Gp);
  or.prototype.o = function () {
    var a = this,
      b = Ma("ima.bridge.getNativeViewability"),
      c = Rl(this.R, "queryid");
    "function" === typeof b &&
      c &&
      b(c, function (d) {
        vg(d) && a.A++;
        var e = d.opt_nativeViewVisibleBounds || {},
          f = d.opt_nativeViewHidden;
        a.g = un(d.opt_nativeViewBounds || {});
        var g = a.h.o;
        g.g = f ? Fi(Fp) : un(e);
        a.timestamp = d.opt_nativeTime || -1;
        Dn().g = g.g;
        d = d.opt_nativeVolume;
        void 0 !== d && (g.volume = d);
      });
  };
  or.prototype.getName = function () {
    return "nis";
  };
  var pr = function (a) {
    a = void 0 === a ? O : a;
    Pn.call(this, new Hn(a, 2));
  };
  u(pr, Pn);
  pr.prototype.getName = function () {
    return "nis";
  };
  pr.prototype.Gb = function () {
    var a = Dn();
    N();
    return a.h && !1;
  };
  pr.prototype.Yb = function (a, b, c) {
    return new or(this.g, b, c);
  };
  var qr = function () {
    Hn.call(this, O, 2, "mraid");
    this.ha = 0;
    this.H = this.J = !1;
    this.I = null;
    this.h = Vm(this.j);
    this.o.g = new F(0, 0, 0, 0);
    this.ba = !1;
  };
  u(qr, Hn);
  qr.prototype.F = function () {
    return null != this.h.Ba;
  };
  qr.prototype.Z = function () {
    var a = {};
    this.ha && (a.mraid = this.ha);
    this.J && (a.mlc = 1);
    a.mtop = this.h.kg;
    this.I && (a.mse = this.I);
    this.ba && (a.msc = 1);
    a.mcp = this.h.rc;
    return a;
  };
  qr.prototype.A = function (a) {
    var b = Ia.apply(1, arguments);
    try {
      return this.h.Ba[a].apply(this.h.Ba, b);
    } catch (c) {
      Fm(538, c, 0.01, function (d) {
        d.method = a;
      });
    }
  };
  var rr = function (a, b, c) {
    a.A("addEventListener", b, c);
  };
  qr.prototype.initialize = function () {
    var a = this;
    if (this.ua) return !this.Ob();
    this.ua = !0;
    if (2 === this.h.rc) return (this.I = "ng"), Jn(this, "w"), !1;
    if (1 === this.h.rc) return (this.I = "mm"), Jn(this, "w"), !1;
    Dn().K = !0;
    this.j.document.readyState && "complete" == this.j.document.readyState
      ? sr(this)
      : Bo(
          this.j,
          "load",
          function () {
            hm().setTimeout(
              Em(292, function () {
                return sr(a);
              }),
              100
            );
          },
          292
        );
    return !0;
  };
  var sr = function (a) {
      N().o = !!a.A("isViewable");
      rr(a, "viewableChange", tr);
      "loading" === a.A("getState") ? rr(a, "ready", ur) : vr(a);
    },
    vr = function (a) {
      "string" === typeof a.h.Ba.AFMA_LIDAR
        ? ((a.J = !0), wr(a))
        : ((a.h.rc = 3), (a.I = "nc"), Jn(a, "w"));
    },
    wr = function (a) {
      a.H = !1;
      var b = 1 == Rl(N().R, "rmmt"),
        c = !!a.A("isViewable");
      (b ? !c : 1) &&
        hm().setTimeout(
          Em(524, function () {
            a.H || (xr(a), Fm(540, Error()), (a.I = "mt"), Jn(a, "w"));
          }),
          500
        );
      yr(a);
      rr(a, a.h.Ba.AFMA_LIDAR, zr);
    },
    yr = function (a) {
      var b = 1 == Rl(N().R, "sneio"),
        c = void 0 !== a.h.Ba.AFMA_LIDAR_EXP_1,
        d = void 0 !== a.h.Ba.AFMA_LIDAR_EXP_2;
      (b = b && d) && (a.h.Ba.AFMA_LIDAR_EXP_2 = !0);
      c && (a.h.Ba.AFMA_LIDAR_EXP_1 = !b);
    },
    xr = function (a) {
      a.A("removeEventListener", a.h.Ba.AFMA_LIDAR, zr);
      a.J = !1;
    };
  qr.prototype.U = function () {
    var a = Dn(),
      b = Ar(this, "getMaxSize");
    a.g = new F(0, b.width, b.height, 0);
  };
  qr.prototype.V = function () {
    Dn().l = Ar(this, "getScreenSize");
  };
  var Ar = function (a, b) {
    if ("loading" === a.A("getState")) return new D(-1, -1);
    b = a.A(b);
    if (!b) return new D(-1, -1);
    a = parseInt(b.width, 10);
    b = parseInt(b.height, 10);
    return isNaN(a) || isNaN(b) ? new D(-1, -1) : new D(a, b);
  };
  qr.prototype.W = function () {
    xr(this);
    Hn.prototype.W.call(this);
  };
  var ur = function () {
      try {
        var a = C(qr);
        a.A("removeEventListener", "ready", ur);
        vr(a);
      } catch (b) {
        Fm(541, b);
      }
    },
    zr = function (a, b) {
      try {
        var c = C(qr);
        c.H = !0;
        var d = a
          ? new F(a.y, a.x + a.width, a.y + a.height, a.x)
          : new F(0, 0, 0, 0);
        var e = Mm(),
          f = En();
        var g = new Om(e, f, c);
        g.g = d;
        g.volume = b;
        c.bb(g);
      } catch (h) {
        Fm(542, h);
      }
    },
    tr = function (a) {
      var b = N(),
        c = C(qr);
      a && !b.o && ((b.o = !0), (c.ba = !0), c.I && Jn(c, "w", !0));
    };
  var qm = new (function (a, b) {
    this.key = a;
    this.defaultValue = void 0 === b ? !1 : b;
    this.valueType = "boolean";
  })("45378663");
  var Cr = function () {
    this.j = this.ua = !1;
    this.g = this.h = null;
    var a = {};
    this.J =
      ((a.start = this.Lf),
      (a.firstquartile = this.Gf),
      (a.midpoint = this.If),
      (a.thirdquartile = this.Mf),
      (a.complete = this.Df),
      (a.error = this.Ef),
      (a.pause = this.wd),
      (a.resume = this.we),
      (a.skip = this.Kf),
      (a.viewable_impression = this.Ja),
      (a.mute = this.Eb),
      (a.unmute = this.Eb),
      (a.fullscreen = this.Hf),
      (a.exitfullscreen = this.Ff),
      (a.fully_viewable_audible_half_duration_impression = this.Ja),
      (a.measurable_impression = this.Ja),
      (a.abandon = this.wd),
      (a.engagedview = this.Ja),
      (a.impression = this.Ja),
      (a.creativeview = this.Ja),
      (a.progress = this.Eb),
      (a.custom_metric_viewable = this.Ja),
      (a.bufferstart = this.wd),
      (a.bufferfinish = this.we),
      (a.audio_measurable = this.Ja),
      (a.audio_audible = this.Ja),
      a);
    a = {};
    this.U =
      ((a.overlay_resize = this.Jf),
      (a.abandon = this.kd),
      (a.close = this.kd),
      (a.collapse = this.kd),
      (a.overlay_unmeasurable_impression = function (b) {
        return Zp(b, "overlay_unmeasurable_impression", En());
      }),
      (a.overlay_viewable_immediate_impression = function (b) {
        return Zp(b, "overlay_viewable_immediate_impression", En());
      }),
      (a.overlay_unviewable_impression = function (b) {
        return Zp(b, "overlay_unviewable_impression", En());
      }),
      (a.overlay_viewable_end_of_session_impression = function (b) {
        return Zp(b, "overlay_viewable_end_of_session_impression", En());
      }),
      a);
    N().h = 3;
    Br(this);
  };
  Cr.prototype.l = function (a) {
    Lo(a, !1);
    qq(a);
  };
  Cr.prototype.I = function () {};
  var Dr = function (a, b, c, d) {
    a = a.A(null, d, !0, b);
    a.l = c;
    rq([a]);
    return a;
  };
  Cr.prototype.A = function (a, b, c, d) {
    var e = this;
    a = new Kp(O, a, c ? b : -1, 7, this.ed(), this.de());
    a.la = d;
    Pl(a.R);
    Ql(a.R, "queryid", a.la);
    a.yd("");
    Qo(
      a,
      function () {
        return e.H.apply(e, ha(Ia.apply(0, arguments)));
      },
      function () {
        return e.N.apply(e, ha(Ia.apply(0, arguments)));
      }
    );
    (d = C(tq).g) && Mo(a, d);
    a.ta.ib && C(Gq);
    return a;
  };
  var Er = function (a, b, c) {
      xl(b);
      var d = a.g;
      Mb(b, function (e) {
        var f = Pb(e.j, function (g) {
          var h = dr(g);
          if (null == h) g = null;
          else if (
            ((g = new cr()),
            null != h.visible && (g.g = h.visible / 100),
            null != h.audible && (g.h = 1 == h.audible),
            null != h.time)
          ) {
            var k = "mtos" == h.timetype ? "mtos" : "tos",
              m = lb(h.time, "%") ? "%" : "ms";
            h = parseInt(h.time, 10);
            "%" == m && (h /= 100);
            "ms" == m ? ((g.j = h), (g.o = -1)) : ((g.j = -1), (g.o = h));
            g.l = void 0 === k ? "tos" : k;
          }
          return g;
        });
        Rb(f, function (g) {
          return null == g;
        }) || Rp(c, new fr(e.id, e.g, f, d));
      });
    },
    Fr = function () {
      var a = [],
        b = N();
      a.push(C(Fq));
      Rl(b.R, "mvp_lv") && a.push(C(qr));
      b = [new nr(), new pr()];
      b.push(new wq(a));
      b.push(new Dq(O));
      return b;
    },
    Hr = function (a) {
      if (!a.ua) {
        a.ua = !0;
        try {
          var b = Mm(),
            c = N(),
            d = Dn();
          Im = b;
          c.j = 79463069;
          "o" !== a.h && (Qq = Vh(O));
          if (im()) {
            Iq.g.Yd = 0;
            Iq.g.ld = Mm() - b;
            var e = Fr(),
              f = C(tq);
            f.h = e;
            uq(f, function () {
              Gr();
            })
              ? Iq.done || (Oq(), Kn(f.g.g, a), Kq())
              : d.j
              ? Gr()
              : Kq();
          } else Sq = !0;
        } catch (g) {
          throw (nq.reset(), g);
        }
      }
    },
    Ir = function (a) {
      Iq.h.cancel();
      Rq = a;
      Iq.done = !0;
    },
    Jr = function (a) {
      if (a.h) return a.h;
      var b = C(tq).g;
      if (b)
        switch (b.getName()) {
          case "nis":
            a.h = "n";
            break;
          case "gsv":
            a.h = "m";
        }
      a.h || (a.h = "h");
      return a.h;
    },
    Kr = function (a, b, c) {
      if (null == a.g) return (b.Fb |= 4), !1;
      a = a.g.report(c, b);
      b.Fb |= a;
      return 0 == a;
    };
  Cr.prototype.Ab = function (a) {
    switch (a.Oa()) {
      case 0:
        if ((a = C(tq).g)) (a = a.g), Wb(a.l, this), a.D && this.Ka() && Mn(a);
        Gr();
        break;
      case 2:
        Kq();
    }
  };
  Cr.prototype.bb = function () {};
  Cr.prototype.Ka = function () {
    return !1;
  };
  var Gr = function () {
    var a = [new Dq(O)],
      b = C(tq);
    b.h = a;
    uq(b, function () {
      Ir("i");
    })
      ? Iq.done || (Oq(), Kq())
      : Ir("i");
  };
  Cr.prototype.N = function (a, b) {
    a.Pa = !0;
    switch (a.wa()) {
      case 1:
        Lr(a, b);
        break;
      case 2:
        this.Cd(a);
    }
    this.Gd(a);
  };
  var Lr = function (a, b) {
    if (!a.Ma) {
      var c = Zp(a, "start", En());
      c = a.xd.g(c).g;
      var d = { id: "lidarv" };
      d.r = b;
      d.sv = "960";
      null !== Xq && (d.v = Xq);
      wh(c, function (e, f) {
        return (d[e] = "mtos" == e || "tos" == e ? f : encodeURIComponent(f));
      });
      b = Tq();
      wh(b, function (e, f) {
        return (d[e] = encodeURIComponent(f));
      });
      b =
        "//pagead2.googlesyndication.com/pagead/gen_204?" + Xn(Vn(new Tn(), d));
      $n(b);
      a.Ma = !0;
    }
  };
  l = Cr.prototype;
  l.Lf = function (a) {
    var b = a.B(a);
    b && ((b = b.volume), (a.Ea = vn(b) && 0 < b));
    Wp(a, 0);
    return Zp(a, "start", En());
  };
  l.Eb = function (a, b, c) {
    Lq(Iq, [a], !En());
    return this.Ja(a, b, c);
  };
  l.Ja = function (a, b, c) {
    return Zp(a, c, En());
  };
  l.Gf = function (a) {
    return Mr(a, "firstquartile", 1);
  };
  l.If = function (a) {
    a.ha = !0;
    return Mr(a, "midpoint", 2);
  };
  l.Mf = function (a) {
    return Mr(a, "thirdquartile", 3);
  };
  l.Df = function (a) {
    var b = Mr(a, "complete", 4);
    Lp(a);
    return b;
  };
  l.Ef = function (a) {
    a.ka = 3;
    return Zp(a, "error", En());
  };
  var Mr = function (a, b, c) {
    Lq(Iq, [a], !En());
    Wp(a, c);
    4 != c && Vp(a.J, c, a.xc);
    return Zp(a, b, En());
  };
  l = Cr.prototype;
  l.we = function (a, b, c) {
    b = En();
    2 != a.ka || b || (a.oa().I = Mm());
    Lq(Iq, [a], !b);
    2 == a.ka && (a.ka = 1);
    return Zp(a, c, b);
  };
  l.Kf = function (a, b) {
    b = this.Eb(a, b || {}, "skip");
    Lp(a);
    return b;
  };
  l.Hf = function (a, b) {
    Lo(a, !0);
    return this.Eb(a, b || {}, "fullscreen");
  };
  l.Ff = function (a, b) {
    Lo(a, !1);
    return this.Eb(a, b || {}, "exitfullscreen");
  };
  l.wd = function (a, b, c) {
    b = a.oa();
    b.V = yp(b, Mm(), 1 != a.ka);
    Lq(Iq, [a], !En());
    1 == a.ka && (a.ka = 2);
    return Zp(a, c, En());
  };
  l.Jf = function (a) {
    Lq(Iq, [a], !En());
    return a.h();
  };
  l.kd = function (a) {
    Lq(Iq, [a], !En());
    this.ue(a);
    Lp(a);
    return a.h();
  };
  var Br = function (a) {
      Pq(function () {
        var b = Nr();
        null != a.h && (b.sdk = a.h);
        var c = C(tq);
        null != c.g && (b.avms = c.g.getName());
        return b;
      });
    },
    Or = function (a, b, c, d) {
      var e = lq(nq, c);
      null !== e && e.la !== b && (a.l(e), (e = null));
      e ||
        ((b = a.A(c, Mm(), !1, b)),
        0 == nq.h.length && (N().j = 79463069),
        sq([b]),
        (e = b),
        (e.l = Jr(a)),
        d && (e.playerId = d));
      return e;
    };
  Cr.prototype.H = function () {};
  var Qr = function (a, b) {
    b.D = 0;
    for (var c in Qm) null == a[c] && (b.D |= Qm[c]);
    Pr(a, "currentTime");
    Pr(a, "duration");
  };
  l = Cr.prototype;
  l.Cd = function () {};
  l.ue = function () {};
  l.Td = function () {};
  l.Gd = function () {};
  l.fd = function () {};
  l.de = function () {
    this.g || (this.g = this.fd());
    return null == this.g || this.j ? new Dp() : new lr(this.g);
  };
  l.ed = function () {
    return new gr();
  };
  var Pr = function (a, b) {
      var c = a[b];
      void 0 !== c && 0 < c && (a[b] = Math.floor(1e3 * c));
    },
    Nr = function () {
      var a = Dn(),
        b = {},
        c = {},
        d = {};
      return Object.assign(
        {},
        ((b.sv = "960"), b),
        null !== Xq && ((c.v = Xq), c),
        ((d["if"] = a.j ? "1" : "0"), (d.nas = String(nq.g.length)), d)
      );
    };
  var Rr = function (a) {
    Ap.call(this, "audio_audible", a);
  };
  u(Rr, Ap);
  Rr.prototype.g = function (a) {
    return 4 == a.vc();
  };
  var Sr = function (a) {
    Bp.call(this, "audio_measurable", a);
  };
  u(Sr, Bp);
  Sr.prototype.g = function (a) {
    a = a.vc();
    return 3 == a || 4 == a;
  };
  var Tr = function () {
    ir.apply(this, arguments);
  };
  u(Tr, ir);
  Tr.prototype.h = function () {
    return new Sr(this.g);
  };
  Tr.prototype.j = function () {
    return [new Rr(this.g)];
  };
  var Ur = function () {};
  u(Ur, qp);
  Ur.prototype.g = function (a) {
    a &&
      (28 === a.e && (a = Object.assign({}, a, { avas: 3 })),
      4 === a.vs || 5 === a.vs) &&
      (a = Object.assign({}, a, { vs: 3 }));
    var b = new fp();
    b.g = rp(a, dp);
    b.h = rp(a, ep);
    return b;
  };
  var Vr = function (a) {
    this.h = a;
  };
  Vr.prototype.report = function (a, b) {
    var c = this.g(b);
    if ("function" === typeof c) {
      var d = {};
      var e = {};
      d = Object.assign(
        {},
        null !== Xq && ((d.v = Xq), d),
        ((e.sv = "960"), (e.cb = Wq), (e.e = Wr(a)), e)
      );
      e = Zp(b, a, En());
      zg(d, e);
      b.De[a] = e;
      d = 2 == b.wa() ? Zn(d).join("&") : b.xd.g(d).g;
      try {
        return c(b.la, d, a), 0;
      } catch (f) {
        return 2;
      }
    } else return 1;
  };
  var Wr = function (a) {
    var b = $q(a) ? "custom_metric_viewable" : a;
    a = tg(function (c) {
      return c == b;
    });
    return Um[a];
  };
  Vr.prototype.g = function () {
    return Ma(this.h);
  };
  var Xr = function (a, b) {
    this.h = a;
    this.j = b;
  };
  u(Xr, Vr);
  Xr.prototype.g = function (a) {
    if (!a.playerId) return Vr.prototype.g.call(this, a);
    if (this.j[a.playerId]) return function () {};
    Fm(393, Error());
    return null;
  };
  var Yr = function () {
    Cr.call(this);
    this.D = void 0;
    this.F = null;
    this.K = !1;
    this.o = {};
    this.G = 0;
    this.B = "ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED";
  };
  u(Yr, Cr);
  Yr.prototype.I = function (a, b) {
    var c = this,
      d = C(tq);
    if (null != d.g)
      switch (d.g.getName()) {
        case "nis":
          var e = Zr(this, a, b);
          break;
        case "gsv":
          e = $r(this, a, b);
          break;
        case "exc":
          e = as(this, a);
      }
    e ||
      (b.opt_overlayAdElement
        ? (e = void 0)
        : b.opt_adElement && (e = Or(this, a, b.opt_adElement, b.opt_osdId)));
    e &&
      1 == e.wa() &&
      (e.B == Yf &&
        (e.B = function (f) {
          return c.Td(f);
        }),
      bs(this, e, b));
    return e;
  };
  var bs = function (a, b, c) {
    c = c.opt_configurable_tracking_events;
    null != a.g && Array.isArray(c) && Er(a, c, b);
  };
  Yr.prototype.Td = function (a) {
    a.h = 0;
    a.N = 0;
    if ("h" == a.l || "n" == a.l) {
      var b;
      N();
      if (a.playerId && cs(this)) {
        var c = this.o[a.playerId];
        c
          ? (b = function (e) {
              return ds(c, e);
            })
          : null !== c && Fm(379, Error());
      } else b = Ma("ima.common.getVideoMetadata");
      if ("function" === typeof b)
        try {
          var d = b(a.la);
        } catch (e) {
          a.h |= 4;
        }
      else a.h |= 2;
    } else if ("b" == a.l)
      if (((b = Ma("ytads.bulleit.getVideoMetadata")), "function" === typeof b))
        try {
          d = b(a.la);
        } catch (e) {
          a.h |= 4;
        }
      else a.h |= 2;
    else if ("ml" == a.l)
      if (((b = Ma("ima.common.getVideoMetadata")), "function" === typeof b))
        try {
          d = b(a.la);
        } catch (e) {
          a.h |= 4;
        }
      else a.h |= 2;
    else a.h |= 1;
    a.h ||
      (void 0 === d
        ? (a.h |= 8)
        : null === d
        ? (a.h |= 16)
        : vg(d)
        ? (a.h |= 32)
        : null != d.errorCode && ((a.N = d.errorCode), (a.h |= 64)));
    null == d && (d = {});
    Qr(d, a);
    vn(d.volume) && vn(this.D) && (d.volume *= this.D);
    return d;
  };
  var $r = function (a, b, c) {
      var d = kq(nq, b);
      d ||
        ((d = c.opt_nativeTime || -1),
        (d = Dr(a, b, Jr(a), d)),
        c.opt_osdId && (d.playerId = c.opt_osdId));
      return d;
    },
    Zr = function (a, b, c) {
      var d = kq(nq, b);
      d || (d = Dr(a, b, "n", c.opt_nativeTime || -1));
      return d;
    },
    as = function (a, b) {
      var c = kq(nq, b);
      c || (c = Dr(a, b, "h", -1));
      return c;
    };
  Yr.prototype.fd = function () {
    if (cs(this))
      return new Xr("ima.common.triggerExternalActivityEvent", this.o);
    var a = es(this);
    return null != a ? new Vr(a) : null;
  };
  var es = function (a) {
    N();
    switch (Jr(a)) {
      case "b":
        return "ytads.bulleit.triggerExternalActivityEvent";
      case "n":
        return "ima.bridge.triggerExternalActivityEvent";
      case "h":
      case "m":
      case "ml":
        return "ima.common.triggerExternalActivityEvent";
    }
    return null;
  };
  Yr.prototype.Cd = function (a) {
    !a.g &&
      a.Pa &&
      Kr(this, a, "overlay_unmeasurable_impression") &&
      (a.g = !0);
  };
  Yr.prototype.ue = function (a) {
    a.xe &&
      (a.Ra()
        ? Kr(this, a, "overlay_viewable_end_of_session_impression")
        : Kr(this, a, "overlay_unviewable_impression"),
      (a.xe = !1));
  };
  var fs = function (a, b, c, d) {
    c = void 0 === c ? {} : c;
    var e = {};
    zg(e, { opt_adElement: void 0, opt_fullscreen: void 0 }, c);
    var f = a.I(b, c);
    c = f ? f.xd : a.ed();
    if (e.opt_bounds) return c.g(Zq("ol", d));
    if (void 0 !== d)
      if (void 0 !== Yq(d))
        if (Sq) a = Zq("ue", d);
        else if ((Hr(a), "i" == Rq)) (a = Zq("i", d)), (a["if"] = 0);
        else if ((b = a.I(b, e))) {
          b: {
            "i" == Rq && ((b.Pa = !0), a.Gd(b));
            f = e.opt_fullscreen;
            void 0 !== f && Lo(b, !!f);
            var g;
            if ((f = !Dn().h && !yn())) hm(), (f = 0 === Wi(Wl));
            if ((g = f)) {
              switch (b.wa()) {
                case 1:
                  Lr(b, "pv");
                  break;
                case 2:
                  a.Cd(b);
              }
              Ir("pv");
            }
            f = d.toLowerCase();
            if ((g = !g))
              c: {
                if (Rl(N().R, "ssmol") && ((g = a.j), "loaded" === f)) break c;
                g = Vb(Rm, f);
              }
            if (g && 0 == b.ka) {
              "i" != Rq && (Iq.done = !1);
              g = void 0 !== e ? e.opt_nativeTime : void 0;
              Km = g = "number" === typeof g ? g : Mm();
              b.Kb = !0;
              var h = En();
              b.ka = 1;
              b.ia = {};
              b.ia.start = !1;
              b.ia.firstquartile = !1;
              b.ia.midpoint = !1;
              b.ia.thirdquartile = !1;
              b.ia.complete = !1;
              b.ia.resume = !1;
              b.ia.pause = !1;
              b.ia.skip = !1;
              b.ia.mute = !1;
              b.ia.unmute = !1;
              b.ia.viewable_impression = !1;
              b.ia.measurable_impression = !1;
              b.ia.fully_viewable_audible_half_duration_impression = !1;
              b.ia.fullscreen = !1;
              b.ia.exitfullscreen = !1;
              b.gd = 0;
              h || (b.oa().I = g);
              Lq(Iq, [b], !h);
            }
            (g = b.wb[f]) && b.fa.reportEvent(g);
            Rl(N().R, "fmd") || (Vb(Sm, f) && b.Ta && b.Ta.h(b, null));
            switch (b.wa()) {
              case 1:
                var k = $q(f) ? a.J.custom_metric_viewable : a.J[f];
                break;
              case 2:
                k = a.U[f];
            }
            if (
              k &&
              ((d = k.call(a, b, e, d)),
              Rl(N().R, "fmd") && Vb(Sm, f) && b.Ta && b.Ta.h(b, null),
              void 0 !== d)
            ) {
              e = Zq(void 0, f);
              zg(e, d);
              d = e;
              break b;
            }
            d = void 0;
          }
          3 == b.ka && a.l(b);
          a = d;
        } else a = Zq("nf", d);
      else a = void 0;
    else
      Sq
        ? (a = Zq("ue"))
        : f
        ? ((a = Zq()), zg(a, Yp(f, !0, !1, !1)))
        : (a = Zq("nf"));
    return "string" === typeof a ? c.g() : c.g(a);
  };
  Yr.prototype.H = function (a) {
    this.j && 1 == a.wa() && gs(this, a);
  };
  Yr.prototype.Gd = function (a) {
    this.j && 1 == a.wa() && gs(this, a);
  };
  var gs = function (a, b) {
      var c;
      if (b.playerId && cs(a)) {
        var d = a.o[b.playerId];
        d
          ? (c = function (f, g) {
              hs(d, f, g);
            })
          : null !== d && Fm(379, Error());
      } else c = Ma("ima.common.triggerViewabilityMeasurementUpdate");
      if ("function" === typeof c) {
        var e = Tp(b);
        e.nativeVolume = a.D;
        c(b.la, e);
      }
    },
    is = function (a, b, c) {
      a.o[b] = c;
    },
    cs = function (a) {
      return (N(), "h" != Jr(a) && "m" != Jr(a)) ? !1 : 0 != a.G;
    };
  Yr.prototype.A = function (a, b, c, d) {
    if (rm()) {
      var e = Rl(N().R, "mm"),
        f = {};
      (e = ((f[Al.Ge] = "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO"),
      (f[Al.kf] = "ACTIVE_VIEW_TRAFFIC_TYPE_VIDEO"),
      f)[e]) &&
        e &&
        (this.B = e);
      "ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED" === this.B && Fm(1044, Error());
    }
    a = Cr.prototype.A.call(this, a, b, c, d);
    this.K &&
      ((b = this.F),
      null == a.o && (a.o = new To()),
      (b.g[a.la] = a.o),
      (a.o.l = aq));
    return a;
  };
  Yr.prototype.l = function (a) {
    a && 1 == a.wa() && this.K && delete this.F.g[a.la];
    return Cr.prototype.l.call(this, a);
  };
  Yr.prototype.de = function () {
    this.g || (this.g = this.fd());
    return null == this.g || this.j
      ? new Dp()
      : "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO" === this.B
      ? new Tr(this.g)
      : new lr(this.g);
  };
  Yr.prototype.ed = function () {
    return "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO" === this.B ? new Ur() : new gr();
  };
  var js = function (a) {
      var b = {};
      return (b.viewability = a.g), (b.googleViewability = a.h), b;
    },
    ks = function (a, b, c) {
      c = void 0 === c ? {} : c;
      a = fs(C(Yr), b, c, a);
      return js(a);
    },
    ls = Em(193, ks, void 0, Nr);
  y("Goog_AdSense_Lidar_sendVastEvent", ls);
  var ms = Em(194, function (a, b) {
    b = void 0 === b ? {} : b;
    a = fs(C(Yr), a, b);
    return js(a);
  });
  y("Goog_AdSense_Lidar_getViewability", ms);
  var ns = Em(195, function () {
    return jm();
  });
  y("Goog_AdSense_Lidar_getUrlSignalsArray", ns);
  var os = Em(196, function () {
    return JSON.stringify(jm());
  });
  y("Goog_AdSense_Lidar_getUrlSignalsList", os);
  w.console &&
    "function" === typeof w.console.log &&
    Za(w.console.log, w.console);
  var ps = function (a) {
    for (var b = [], c = (a = E(a.ownerDocument)); c != a.top; c = c.parent)
      if (c.frameElement) b.push(c.frameElement);
      else break;
    return b;
  };
  var qs = function (a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.h = !1;
  };
  qs.prototype.stopPropagation = function () {
    this.h = !0;
  };
  qs.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
  };
  var rs = (function () {
    if (!w.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        },
      });
    try {
      var c = function () {};
      w.addEventListener("test", c, b);
      w.removeEventListener("test", c, b);
    } catch (d) {}
    return a;
  })();
  var ts = function (a, b) {
    qs.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.g = null;
    a && this.init(a, b);
  };
  bb(ts, qs);
  var us = { 2: "touch", 3: "pen", 4: "mouse" };
  ts.prototype.init = function (a, b) {
    var c = (this.type = a.type),
      d =
        a.changedTouches && a.changedTouches.length
          ? a.changedTouches[0]
          : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    (b = a.relatedTarget)
      ? lc && (fc(b, "nodeName") || (b = null))
      : "mouseover" == c
      ? (b = a.fromElement)
      : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    d
      ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
        (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
        (this.screenX = d.screenX || 0),
        (this.screenY = d.screenY || 0))
      : ((this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
        (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
        (this.screenX = a.screenX || 0),
        (this.screenY = a.screenY || 0));
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType =
      "string" === typeof a.pointerType
        ? a.pointerType
        : us[a.pointerType] || "";
    this.state = a.state;
    this.g = a;
    a.defaultPrevented && ts.Da.preventDefault.call(this);
  };
  ts.prototype.stopPropagation = function () {
    ts.Da.stopPropagation.call(this);
    this.g.stopPropagation
      ? this.g.stopPropagation()
      : (this.g.cancelBubble = !0);
  };
  ts.prototype.preventDefault = function () {
    ts.Da.preventDefault.call(this);
    var a = this.g;
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
  };
  var vs = "closure_listenable_" + ((1e6 * Math.random()) | 0),
    ws = function (a) {
      return !(!a || !a[vs]);
    };
  var xs = 0;
  var ys = function (a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.yc = e;
      this.key = ++xs;
      this.Ub = this.hc = !1;
    },
    zs = function (a) {
      a.Ub = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.yc = null;
    };
  var As = function (a) {
    this.src = a;
    this.g = {};
    this.h = 0;
  };
  As.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || ((a = this.g[f] = []), this.h++);
    var g = Bs(a, b, d, e);
    -1 < g
      ? ((b = a[g]), c || (b.hc = !1))
      : ((b = new ys(b, this.src, f, !!d, e)), (b.hc = c), a.push(b));
    return b;
  };
  As.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.g)) return !1;
    var e = this.g[a];
    b = Bs(e, b, c, d);
    return -1 < b
      ? (zs(e[b]), Xb(e, b), 0 == e.length && (delete this.g[a], this.h--), !0)
      : !1;
  };
  var Cs = function (a, b) {
    var c = b.type;
    c in a.g &&
      Wb(a.g[c], b) &&
      (zs(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
  };
  As.prototype.Mb = function (a, b, c, d) {
    a = this.g[a.toString()];
    var e = -1;
    a && (e = Bs(a, b, c, d));
    return -1 < e ? a[e] : null;
  };
  var Bs = function (a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.Ub && f.listener == b && f.capture == !!c && f.yc == d) return e;
    }
    return -1;
  };
  var Ds = "closure_lm_" + ((1e6 * Math.random()) | 0),
    Es = {},
    Fs = 0,
    Hs = function (a, b, c, d, e) {
      if (d && d.once) return Gs(a, b, c, d, e);
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) Hs(a, b[f], c, d, e);
        return null;
      }
      c = Is(c);
      return ws(a)
        ? a.O(b, c, Qa(d) ? !!d.capture : !!d, e)
        : Js(a, b, c, !1, d, e);
    },
    Js = function (a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");
      var g = Qa(e) ? !!e.capture : !!e,
        h = Ks(a);
      h || (a[Ds] = h = new As(a));
      c = h.add(b, c, d, g, f);
      if (c.proxy) return c;
      d = Ls();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener)
        rs || (e = g),
          void 0 === e && (e = !1),
          a.addEventListener(b.toString(), d, e);
      else if (a.attachEvent) a.attachEvent(Ms(b.toString()), d);
      else if (a.addListener && a.removeListener) a.addListener(d);
      else throw Error("addEventListener and attachEvent are unavailable.");
      Fs++;
      return c;
    },
    Ls = function () {
      var a = Ns,
        b = function (c) {
          return a.call(b.src, b.listener, c);
        };
      return b;
    },
    Gs = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) Gs(a, b[f], c, d, e);
        return null;
      }
      c = Is(c);
      return ws(a)
        ? a.Qb(b, c, Qa(d) ? !!d.capture : !!d, e)
        : Js(a, b, c, !0, d, e);
    },
    Os = function (a, b, c, d, e) {
      if (Array.isArray(b))
        for (var f = 0; f < b.length; f++) Os(a, b[f], c, d, e);
      else
        (d = Qa(d) ? !!d.capture : !!d),
          (c = Is(c)),
          ws(a)
            ? a.vb(b, c, d, e)
            : a && (a = Ks(a)) && (b = a.Mb(b, c, d, e)) && Ps(b);
    },
    Ps = function (a) {
      if ("number" !== typeof a && a && !a.Ub) {
        var b = a.src;
        if (ws(b)) Cs(b.o, a);
        else {
          var c = a.type,
            d = a.proxy;
          b.removeEventListener
            ? b.removeEventListener(c, d, a.capture)
            : b.detachEvent
            ? b.detachEvent(Ms(c), d)
            : b.addListener && b.removeListener && b.removeListener(d);
          Fs--;
          (c = Ks(b))
            ? (Cs(c, a), 0 == c.h && ((c.src = null), (b[Ds] = null)))
            : zs(a);
        }
      }
    },
    Ms = function (a) {
      return a in Es ? Es[a] : (Es[a] = "on" + a);
    },
    Ns = function (a, b) {
      if (a.Ub) a = !0;
      else {
        b = new ts(b, this);
        var c = a.listener,
          d = a.yc || a.src;
        a.hc && Ps(a);
        a = c.call(d, b);
      }
      return a;
    },
    Ks = function (a) {
      a = a[Ds];
      return a instanceof As ? a : null;
    },
    Qs = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0),
    Is = function (a) {
      if ("function" === typeof a) return a;
      a[Qs] ||
        (a[Qs] = function (b) {
          return a.handleEvent(b);
        });
      return a[Qs];
    };
  var Q = function () {
    P.call(this);
    this.o = new As(this);
    this.ac = this;
    this.ha = null;
  };
  bb(Q, P);
  Q.prototype[vs] = !0;
  l = Q.prototype;
  l.addEventListener = function (a, b, c, d) {
    Hs(this, a, b, c, d);
  };
  l.removeEventListener = function (a, b, c, d) {
    Os(this, a, b, c, d);
  };
  l.dispatchEvent = function (a) {
    var b,
      c = this.ha;
    if (c) for (b = []; c; c = c.ha) b.push(c);
    c = this.ac;
    var d = a.type || a;
    if ("string" === typeof a) a = new qs(a, c);
    else if (a instanceof qs) a.target = a.target || c;
    else {
      var e = a;
      a = new qs(d, c);
      zg(a, e);
    }
    e = !0;
    if (b)
      for (var f = b.length - 1; !a.h && 0 <= f; f--) {
        var g = (a.currentTarget = b[f]);
        e = Rs(g, d, !0, a) && e;
      }
    a.h ||
      ((g = a.currentTarget = c),
      (e = Rs(g, d, !0, a) && e),
      a.h || (e = Rs(g, d, !1, a) && e));
    if (b)
      for (f = 0; !a.h && f < b.length; f++)
        (g = a.currentTarget = b[f]), (e = Rs(g, d, !1, a) && e);
    return e;
  };
  l.L = function () {
    Q.Da.L.call(this);
    if (this.o) {
      var a = this.o,
        b = 0,
        c;
      for (c in a.g) {
        for (var d = a.g[c], e = 0; e < d.length; e++) ++b, zs(d[e]);
        delete a.g[c];
        a.h--;
      }
    }
    this.ha = null;
  };
  l.O = function (a, b, c, d) {
    return this.o.add(String(a), b, !1, c, d);
  };
  l.Qb = function (a, b, c, d) {
    return this.o.add(String(a), b, !0, c, d);
  };
  l.vb = function (a, b, c, d) {
    this.o.remove(String(a), b, c, d);
  };
  var Rs = function (a, b, c, d) {
    b = a.o.g[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.Ub && g.capture == c) {
        var h = g.listener,
          k = g.yc || g.src;
        g.hc && Cs(a.o, g);
        e = !1 !== h.call(k, d) && e;
      }
    }
    return e && !d.defaultPrevented;
  };
  Q.prototype.Mb = function (a, b, c, d) {
    return this.o.Mb(String(a), b, c, d);
  };
  var Ss = function (a, b) {
    this.j = a;
    this.o = b;
    this.h = 0;
    this.g = null;
  };
  Ss.prototype.get = function () {
    if (0 < this.h) {
      this.h--;
      var a = this.g;
      this.g = a.next;
      a.next = null;
    } else a = this.j();
    return a;
  };
  var Ts = function (a, b) {
    a.o(b);
    100 > a.h && (a.h++, (b.next = a.g), (a.g = b));
  };
  var Us,
    Vs = function () {
      var a = w.MessageChannel;
      "undefined" === typeof a &&
        "undefined" !== typeof window &&
        window.postMessage &&
        window.addEventListener &&
        !z("Presto") &&
        (a = function () {
          var e = gh(document, "IFRAME");
          e.style.display = "none";
          document.documentElement.appendChild(e);
          var f = e.contentWindow;
          e = f.document;
          e.open();
          e.close();
          var g = "callImmediate" + Math.random(),
            h =
              "file:" == f.location.protocol
                ? "*"
                : f.location.protocol + "//" + f.location.host;
          e = Za(function (k) {
            if (("*" == h || k.origin == h) && k.data == g)
              this.port1.onmessage();
          }, this);
          f.addEventListener("message", e, !1);
          this.port1 = {};
          this.port2 = {
            postMessage: function () {
              f.postMessage(g, h);
            },
          };
        });
      if ("undefined" !== typeof a && !Bb()) {
        var b = new a(),
          c = {},
          d = c;
        b.port1.onmessage = function () {
          if (void 0 !== c.next) {
            c = c.next;
            var e = c.ce;
            c.ce = null;
            e();
          }
        };
        return function (e) {
          d.next = { ce: e };
          d = d.next;
          b.port2.postMessage(0);
        };
      }
      return function (e) {
        w.setTimeout(e, 0);
      };
    };
  var Ws = function () {
    this.h = this.g = null;
  };
  Ws.prototype.add = function (a, b) {
    var c = Xs.get();
    c.set(a, b);
    this.h ? (this.h.next = c) : (this.g = c);
    this.h = c;
  };
  Ws.prototype.remove = function () {
    var a = null;
    this.g &&
      ((a = this.g),
      (this.g = this.g.next),
      this.g || (this.h = null),
      (a.next = null));
    return a;
  };
  var Xs = new Ss(
      function () {
        return new Ys();
      },
      function (a) {
        return a.reset();
      }
    ),
    Ys = function () {
      this.next = this.g = this.h = null;
    };
  Ys.prototype.set = function (a, b) {
    this.h = a;
    this.g = b;
    this.next = null;
  };
  Ys.prototype.reset = function () {
    this.next = this.g = this.h = null;
  };
  var Zs,
    $s = !1,
    at = new Ws(),
    ct = function (a, b) {
      Zs || bt();
      $s || (Zs(), ($s = !0));
      at.add(a, b);
    },
    bt = function () {
      if (w.Promise && w.Promise.resolve) {
        var a = w.Promise.resolve(void 0);
        Zs = function () {
          a.then(dt);
        };
      } else
        Zs = function () {
          var b = dt;
          "function" !== typeof w.setImmediate ||
          (w.Window &&
            w.Window.prototype &&
            (zb() || !z("Edge")) &&
            w.Window.prototype.setImmediate == w.setImmediate)
            ? (Us || (Us = Vs()), Us(b))
            : w.setImmediate(b);
        };
    },
    dt = function () {
      for (var a; (a = at.remove()); ) {
        try {
          a.h.call(a.g);
        } catch (b) {
          kb(b);
        }
        Ts(Xs, a);
      }
      $s = !1;
    };
  var et = function (a) {
    if (!a) return !1;
    try {
      return !!a.$goog_Thenable;
    } catch (b) {
      return !1;
    }
  };
  var gt = function (a) {
      this.g = 0;
      this.B = void 0;
      this.o = this.h = this.j = null;
      this.l = this.A = !1;
      if (a != Yf)
        try {
          var b = this;
          a.call(
            void 0,
            function (c) {
              ft(b, 2, c);
            },
            function (c) {
              ft(b, 3, c);
            }
          );
        } catch (c) {
          ft(this, 3, c);
        }
    },
    ht = function () {
      this.next = this.context = this.h = this.j = this.g = null;
      this.o = !1;
    };
  ht.prototype.reset = function () {
    this.context = this.h = this.j = this.g = null;
    this.o = !1;
  };
  var it = new Ss(
      function () {
        return new ht();
      },
      function (a) {
        a.reset();
      }
    ),
    jt = function (a, b, c) {
      var d = it.get();
      d.j = a;
      d.h = b;
      d.context = c;
      return d;
    };
  gt.prototype.then = function (a, b, c) {
    return kt(
      this,
      "function" === typeof a ? a : null,
      "function" === typeof b ? b : null,
      c
    );
  };
  gt.prototype.$goog_Thenable = !0;
  gt.prototype.I = function (a, b) {
    return kt(this, null, a, b);
  };
  gt.prototype.catch = gt.prototype.I;
  gt.prototype.cancel = function (a) {
    if (0 == this.g) {
      var b = new lt(a);
      ct(function () {
        mt(this, b);
      }, this);
    }
  };
  var mt = function (a, b) {
      if (0 == a.g)
        if (a.j) {
          var c = a.j;
          if (c.h) {
            for (
              var d = 0, e = null, f = null, g = c.h;
              g && (g.o || (d++, g.g == a && (e = g), !(e && 1 < d)));
              g = g.next
            )
              e || (f = g);
            e &&
              (0 == c.g && 1 == d
                ? mt(c, b)
                : (f
                    ? ((d = f),
                      d.next == c.o && (c.o = d),
                      (d.next = d.next.next))
                    : nt(c),
                  ot(c, e, 3, b)));
          }
          a.j = null;
        } else ft(a, 3, b);
    },
    qt = function (a, b) {
      a.h || (2 != a.g && 3 != a.g) || pt(a);
      a.o ? (a.o.next = b) : (a.h = b);
      a.o = b;
    },
    kt = function (a, b, c, d) {
      var e = jt(null, null, null);
      e.g = new gt(function (f, g) {
        e.j = b
          ? function (h) {
              try {
                var k = b.call(d, h);
                f(k);
              } catch (m) {
                g(m);
              }
            }
          : f;
        e.h = c
          ? function (h) {
              try {
                var k = c.call(d, h);
                void 0 === k && h instanceof lt ? g(h) : f(k);
              } catch (m) {
                g(m);
              }
            }
          : g;
      });
      e.g.j = a;
      qt(a, e);
      return e.g;
    };
  gt.prototype.D = function (a) {
    this.g = 0;
    ft(this, 2, a);
  };
  gt.prototype.F = function (a) {
    this.g = 0;
    ft(this, 3, a);
  };
  var ft = function (a, b, c) {
      if (0 == a.g) {
        a === c &&
          ((b = 3), (c = new TypeError("Promise cannot resolve to itself")));
        a.g = 1;
        a: {
          var d = c,
            e = a.D,
            f = a.F;
          if (d instanceof gt) {
            qt(d, jt(e || Yf, f || null, a));
            var g = !0;
          } else if (et(d)) d.then(e, f, a), (g = !0);
          else {
            if (Qa(d))
              try {
                var h = d.then;
                if ("function" === typeof h) {
                  rt(d, h, e, f, a);
                  g = !0;
                  break a;
                }
              } catch (k) {
                f.call(a, k);
                g = !0;
                break a;
              }
            g = !1;
          }
        }
        g ||
          ((a.B = c),
          (a.g = b),
          (a.j = null),
          pt(a),
          3 != b || c instanceof lt || tt(a, c));
      }
    },
    rt = function (a, b, c, d, e) {
      var f = !1,
        g = function (k) {
          f || ((f = !0), c.call(e, k));
        },
        h = function (k) {
          f || ((f = !0), d.call(e, k));
        };
      try {
        b.call(a, g, h);
      } catch (k) {
        h(k);
      }
    },
    pt = function (a) {
      a.A || ((a.A = !0), ct(a.K, a));
    },
    nt = function (a) {
      var b = null;
      a.h && ((b = a.h), (a.h = b.next), (b.next = null));
      a.h || (a.o = null);
      return b;
    };
  gt.prototype.K = function () {
    for (var a; (a = nt(this)); ) ot(this, a, this.g, this.B);
    this.A = !1;
  };
  var ot = function (a, b, c, d) {
      if (3 == c && b.h && !b.o) for (; a && a.l; a = a.j) a.l = !1;
      if (b.g) (b.g.j = null), ut(b, c, d);
      else
        try {
          b.o ? b.j.call(b.context) : ut(b, c, d);
        } catch (e) {
          vt.call(null, e);
        }
      Ts(it, b);
    },
    ut = function (a, b, c) {
      2 == b ? a.j.call(a.context, c) : a.h && a.h.call(a.context, c);
    },
    tt = function (a, b) {
      a.l = !0;
      ct(function () {
        a.l && vt.call(null, b);
      });
    },
    vt = kb,
    lt = function (a) {
      db.call(this, a);
    };
  bb(lt, db);
  lt.prototype.name = "cancel";
  var wt = function (a, b) {
    Q.call(this);
    this.h = a || 1;
    this.g = b || w;
    this.j = Za(this.ng, this);
    this.l = Date.now();
  };
  bb(wt, Q);
  l = wt.prototype;
  l.enabled = !1;
  l.La = null;
  l.ng = function () {
    if (this.enabled) {
      var a = Date.now() - this.l;
      0 < a && a < 0.8 * this.h
        ? (this.La = this.g.setTimeout(this.j, this.h - a))
        : (this.La && (this.g.clearTimeout(this.La), (this.La = null)),
          this.dispatchEvent("tick"),
          this.enabled && (this.stop(), this.start()));
    }
  };
  l.start = function () {
    this.enabled = !0;
    this.La ||
      ((this.La = this.g.setTimeout(this.j, this.h)), (this.l = Date.now()));
  };
  l.stop = function () {
    this.enabled = !1;
    this.La && (this.g.clearTimeout(this.La), (this.La = null));
  };
  l.L = function () {
    wt.Da.L.call(this);
    this.stop();
    delete this.g;
  };
  var xt = function (a, b, c) {
      if ("function" === typeof a) c && (a = Za(a, c));
      else if (a && "function" == typeof a.handleEvent)
        a = Za(a.handleEvent, a);
      else throw Error("Invalid listener argument");
      return 2147483647 < Number(b) ? -1 : w.setTimeout(a, b || 0);
    },
    yt = function (a) {
      var b = null;
      return new gt(function (c, d) {
        b = xt(function () {
          c("0");
        }, a);
        -1 == b && d(Error("Failed to schedule timer."));
      }).I(function (c) {
        w.clearTimeout(b);
        throw c;
      });
    };
  var zt = function () {
    return Math.round(Date.now() / 1e3);
  };
  var At = function () {
    this.g = {};
    return this;
  };
  At.prototype.remove = function (a) {
    var b = this.g;
    a in b && delete b[a];
  };
  At.prototype.set = function (a, b) {
    this.g[a] = b;
  };
  var Bt = function (a, b) {
    a.g.eb = xg(a.g, "eb", 0) | b;
  };
  At.prototype.get = function (a) {
    return xg(this.g, a, null);
  };
  var Ct = null,
    Dt = function () {
      this.g = {};
      this.h = 0;
    },
    Et = function () {
      Ct || (Ct = new Dt());
      return Ct;
    },
    Ft = function (a, b) {
      a.g[b.getName()] = b;
    },
    Gt = function (a, b) {
      this.o = a;
      this.j = !0;
      this.g = b;
    };
  Gt.prototype.getName = function () {
    return this.o;
  };
  Gt.prototype.getValue = function () {
    return this.g;
  };
  Gt.prototype.h = function () {
    return String(this.g);
  };
  var Ht = function (a, b) {
    Gt.call(this, String(a), b);
    this.l = a;
    this.g = !!b;
  };
  u(Ht, Gt);
  Ht.prototype.h = function () {
    return this.g ? "1" : "0";
  };
  var It = function (a, b) {
    Gt.call(this, a, b);
  };
  u(It, Gt);
  It.prototype.h = function () {
    return this.g
      ? Math.round(this.g.top) +
          "." +
          Math.round(this.g.left) +
          "." +
          (Math.round(this.g.top) + Math.round(this.g.height)) +
          "." +
          (Math.round(this.g.left) + Math.round(this.g.width))
      : "";
  };
  var Jt = function (a) {
    if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
      a = a.split(".");
      var b = Number(a[0]),
        c = Number(a[1]);
      return new It("", new Hi(c, b, Number(a[3]) - c, Number(a[2]) - b));
    }
    return new It("", new Hi(0, 0, 0, 0));
  };
  var Kt = function (a) {
      var b = new Hi(
          -Number.MAX_VALUE / 2,
          -Number.MAX_VALUE / 2,
          Number.MAX_VALUE,
          Number.MAX_VALUE
        ),
        c = new Hi(0, 0, 0, 0);
      if (!a || 0 == a.length) return c;
      for (var d = 0; d < a.length; d++) {
        a: {
          var e = b;
          var f = a[d],
            g = Math.max(e.left, f.left),
            h = Math.min(e.left + e.width, f.left + f.width);
          if (g <= h) {
            var k = Math.max(e.top, f.top);
            f = Math.min(e.top + e.height, f.top + f.height);
            if (k <= f) {
              e.left = g;
              e.top = k;
              e.width = h - g;
              e.height = f - k;
              e = !0;
              break a;
            }
          }
          e = !1;
        }
        if (!e) return c;
      }
      return b;
    },
    Lt = function (a, b) {
      var c = a.getBoundingClientRect();
      a = en(a, b);
      return new Hi(
        Math.round(a.x),
        Math.round(a.y),
        Math.round(c.right - c.left),
        Math.round(c.bottom - c.top)
      );
    },
    Mt = function (a, b, c) {
      if (b && c) {
        a: {
          var d = Math.max(b.left, c.left);
          var e = Math.min(b.left + b.width, c.left + c.width);
          if (d <= e) {
            var f = Math.max(b.top, c.top),
              g = Math.min(b.top + b.height, c.top + c.height);
            if (f <= g) {
              d = new Hi(d, f, e - d, g - f);
              break a;
            }
          }
          d = null;
        }
        e = d ? d.height * d.width : 0;
        f = d ? b.height * b.width : 0;
        d = d && f ? Math.round((e / f) * 100) : 0;
        Ft(a, new Gt("vp", d));
        d && 0 < d
          ? ((e = Ii(b)), (f = Ii(c)), (e = e.top >= f.top && e.top < f.bottom))
          : (e = !1);
        Ft(a, new Ht(512, e));
        d && 0 < d
          ? ((e = Ii(b)),
            (f = Ii(c)),
            (e = e.bottom <= f.bottom && e.bottom > f.top))
          : (e = !1);
        Ft(a, new Ht(1024, e));
        d && 0 < d
          ? ((e = Ii(b)),
            (f = Ii(c)),
            (e = e.left >= f.left && e.left < f.right))
          : (e = !1);
        Ft(a, new Ht(2048, e));
        d && 0 < d
          ? ((b = Ii(b)),
            (c = Ii(c)),
            (c = b.right <= c.right && b.right > c.left))
          : (c = !1);
        Ft(a, new Ht(4096, c));
      }
    };
  var Nt = function (a, b) {
    var c = 0;
    qg(E(), "ima", "video", "client", "tagged") && (c = 1);
    var d = null;
    a && (d = a());
    if (d) {
      a = Et();
      a.g = {};
      var e = new Ht(32, !0);
      e.j = !1;
      Ft(a, e);
      e = E().document;
      e =
        e.visibilityState ||
        e.webkitVisibilityState ||
        e.mozVisibilityState ||
        e.msVisibilityState ||
        "";
      Ft(
        a,
        new Ht(
          64,
          "hidden" != e.toLowerCase().substring(e.length - 6) ? !0 : !1
        )
      );
      try {
        var f = E().top;
        try {
          var g = !!f.location.href || "" === f.location.href;
        } catch (n) {
          g = !1;
        }
        if (g) {
          var h = ps(d);
          var k = h && 0 != h.length ? "1" : "0";
        } else k = "2";
      } catch (n) {
        k = "2";
      }
      Ft(a, new Ht(256, "2" == k));
      Ft(a, new Ht(128, "1" == k));
      h = g = E().top;
      "2" == k && (h = E());
      f = Lt(d, h);
      Ft(a, new It("er", f));
      try {
        var m = h.document && !h.document.body ? null : eh(h || window);
      } catch (n) {
        m = null;
      }
      m
        ? ((h = fh($g(h.document).g)),
          Ft(a, new Ht(16384, !!h)),
          (m = h ? new Hi(h.x, h.y, m.width, m.height) : null))
        : (m = null);
      Ft(a, new It("vi", m));
      if (m && "1" == k) {
        k = ps(d);
        d = [];
        for (h = 0; h < k.length; h++) (e = Lt(k[h], g)) && d.push(e);
        d.push(m);
        m = Kt(d);
      }
      Mt(a, f, m);
      a.h && Ft(a, new Gt("ts", zt() - a.h));
      a.h = zt();
    } else (a = Et()), (a.g = {}), (a.h = zt()), Ft(a, new Ht(32, !1));
    this.j = a;
    this.g = new At();
    this.g.set("ve", 4);
    c && Bt(this.g, 1);
    qg(E(), "ima", "video", "client", "crossdomainTag") && Bt(this.g, 4);
    qg(E(), "ima", "video", "client", "sdkTag") && Bt(this.g, 8);
    qg(E(), "ima", "video", "client", "jsTag") && Bt(this.g, 2);
    b && xg(b, "fullscreen", !1) && Bt(this.g, 16);
    this.h = b = null;
    if (c && ((c = qg(E(), "ima", "video", "client")), c.getEData)) {
      this.h = c.getEData();
      if ((c = qg(E(), "ima", "video", "client", "getLastSnapshotFromTop")))
        if ((a = c()))
          this.h.extendWithDataFromTopIframe(
            a.tagstamp,
            a.playstamp,
            a.lactstamp
          ),
            (c = this.j),
            (b = a.er),
            (a = a.vi),
            b &&
              a &&
              ((b = Jt(b).getValue()),
              (a = Jt(a).getValue()),
              (k = null),
              xg(c.g, "er", null) &&
                ((k = xg(c.g, "er", null).getValue()),
                (k.top += b.top),
                (k.left += b.left),
                Ft(c, new It("er", k))),
              xg(c.g, "vi", null) &&
                ((m = xg(c.g, "vi", null).getValue()),
                (m.top += b.top),
                (m.left += b.left),
                (d = []),
                d.push(m),
                d.push(b),
                d.push(a),
                (b = Kt(d)),
                Mt(c, k, b),
                Ft(c, new It("vi", a))));
      a: {
        if (this.h) {
          if (this.h.getTagLoadTimestamp) {
            b = this.h.getTagLoadTimestamp();
            break a;
          }
          if (this.h.getTimeSinceTagLoadSeconds) {
            b = this.h.getTimeSinceTagLoadSeconds();
            break a;
          }
        }
        b = null;
      }
    }
    c = this.g;
    a =
      window.performance &&
      window.performance.timing &&
      window.performance.timing.domLoading &&
      0 < window.performance.timing.domLoading
        ? Math.round(window.performance.timing.domLoading / 1e3)
        : null;
    c.set.call(c, "td", zt() - (null != a ? a : null != b ? b : zt()));
  };
  var Ot = new wt(200),
    Pt = function (a, b) {
      try {
        var c = new Nt(a, b);
        a = [];
        var d = Number(c.g.get("eb"));
        c.g.remove("eb");
        var e,
          f = c.g;
        b = [];
        for (var g in f.g) b.push(g + f.g[g]);
        (e = b.join("_")) && a.push(e);
        if (c.h) {
          var h = c.h.serialize();
          h && a.push(h);
        }
        var k,
          m = c.j;
        e = d;
        f = [];
        e || (e = 0);
        for (var n in m.g) {
          var q = m.g[n];
          if (q instanceof Ht) q.getValue() && (e |= q.l);
          else {
            var r = m.g[n],
              v = r.j ? r.h() : "";
            v && f.push(n + v);
          }
        }
        f.push("eb" + String(e));
        (k = f.join("_")) && a.push(k);
        c.g.set("eb", d);
        return a.join("_");
      } catch (x) {
        return "tle;" + Qg(x.name, 12) + ";" + Qg(x.message, 40);
      }
    },
    Qt = function (a, b) {
      Hs(Ot, "tick", function () {
        var c = Pt(b);
        a(c);
      });
      Ot.start();
      Ot.dispatchEvent("tick");
    };
  var Rt = function (a) {
    this.M = A(a);
  };
  u(Rt, B);
  Rt.prototype.getId = function () {
    return hf(this, 1);
  };
  var St = [0, Nf];
  var Tt = function (a) {
    this.M = A(a);
  };
  u(Tt, B);
  Tt.prototype.getWidth = function () {
    return ef(this, 1);
  };
  Tt.prototype.getHeight = function () {
    return ef(this, 2);
  };
  var Ut = [0, Kf, -1];
  var Vt = function (a) {
    this.M = A(a);
  };
  u(Vt, B);
  var Wt = [0, Hf, Mf];
  var Xt = function (a) {
    this.M = A(a);
  };
  u(Xt, B);
  Xt.prototype.getAdId = function () {
    return hf(this, 1);
  };
  Xt.prototype.getSize = function () {
    return Ve(this, Tt, 7);
  };
  Xt.prototype.Nb = function () {
    return Ve(this, Vt, 9);
  };
  Xt.ga = [4];
  var Yt = [0, Nf, Hf, Nf, Of, Qf, St, Ut, Hf, Wt];
  var Zt = function (a) {
    this.M = A(a);
  };
  u(Zt, B);
  var $t = function (a, b) {
      return Le(a, 1, de(b));
    },
    au = function (a, b) {
      return lf(a, 4, b);
    },
    bu = function (a, b) {
      return Le(a, 2, ge(b));
    },
    cu = [0, Qf, Kf, Nf, Mf];
  var du = function (a) {
    this.M = A(a);
  };
  u(du, B);
  var eu = function (a, b) {
      return mf(a, 1, b);
    },
    fu = function (a, b) {
      $e(a, 3, Xt, b);
      return a;
    },
    gu = function (a, b) {
      return Le(a, 4, de(b));
    };
  du.ga = [10, 3];
  var hu = [0, Nf, Hf, Pf, Yt, Qf, cu, Mf, Qf, 2, Of];
  var iu = function (a) {
    this.M = A(a);
  };
  u(iu, B);
  var ju = [0, Qf, Mf];
  var ku = function (a) {
    this.M = A(a);
  };
  u(ku, B);
  var lu = function (a, b) {
      return $e(a, 2, du, b);
    },
    mu = function (a, b) {
      Ye(a, 5, b);
    };
  ku.ga = [2];
  var nu = [0, Qf, Pf, hu, Qf, Nf, cu, Nf, Mf, Kf, ju];
  var ou = function (a) {
    this.M = A(a);
  };
  u(ou, B);
  var pu = function (a) {
    var b = new ku();
    b = Le(b, 1, de(1));
    return $e(a, 1, ku, b);
  };
  ou.ga = [1];
  ou.prototype.g = Rf([0, Pf, nu]);
  var qu = function (a) {
    this.M = A(a);
  };
  u(qu, B);
  qu.ga = [6, 4];
  var ru = function (a) {
    this.M = A(a);
  };
  u(ru, B);
  var tu = Tf(ru);
  ru.ga = [4, 5, 6];
  var uu = function (a) {
    this.M = A(a);
  };
  u(uu, B);
  var vu = function (a) {
      var b = new uu();
      return Le(b, 1, de(a));
    },
    wu = [0, Qf];
  var xu = function (a) {
    this.M = A(a);
  };
  u(xu, B);
  var yu = function (a) {
      var b = new xu();
      return mf(b, 1, a);
    },
    zu = function (a) {
      var b = window.Date.now();
      b = Number.isFinite(b) ? Math.round(b) : 0;
      return Le(a, 3, je(b));
    };
  xu.prototype.getError = function () {
    return Ve(this, uu, 10);
  };
  xu.prototype.jb = function (a) {
    return Ye(this, 10, a);
  };
  var Au = Tf(xu),
    Bu = [0, Nf, -1, Hf, Kf, -2, Hf, Gf, Mf, wu, Mf];
  var Cu = [0, 1, [0, Jf, -2], -1, Nf, -1, Mf, [0, 3, Qf, Nf], Hf];
  var Du = function (a) {
    this.M = A(a);
  };
  u(Du, B);
  Du.ga = [1, 2];
  Du.prototype.g = Rf([0, Pf, Cu, Pf, Bu]);
  var Eu = function () {};
  var Fu = function () {
      this.g = Math.random();
    },
    Gu = function () {
      var a = wi,
        b = window.google_srt;
      0 <= b && 1 >= b && (a.g = b);
    },
    zi = function (a, b, c, d, e) {
      if (((void 0 === d ? 0 : d) ? a.g : Math.random()) < (e || 0.01))
        try {
          if (c instanceof ni) var f = c;
          else
            (f = new ni()),
              Oh(c, function (h, k) {
                var m = f,
                  n = m.o++;
                ri(m, n, oi(k, h));
              });
          var g = ui(f, "https:", "/pagead/gen_204?id=" + b + "&");
          g && Bi(w, g);
        } catch (h) {}
    };
  var wi,
    Hu,
    vi = new li(1, window);
  (function (a) {
    wi = null != a ? a : new Fu();
    "number" !== typeof window.google_srt &&
      (window.google_srt = Math.random());
    Gu();
    Hu = new xi();
    Hu.Sc(function () {});
    Hu.Jd(!0);
    "complete" == window.document.readyState
      ? window.google_measure_js_timing || vi.B()
      : vi.j &&
        dg(window, "load", function () {
          window.google_measure_js_timing || vi.B();
        });
  })();
  var Iu = new Date().getTime();
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(function (
    a,
    b
  ) {
    return a + b;
  });
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(function (a, b) {
    return a + b;
  });
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(function (
    a,
    b
  ) {
    return a + b;
  });
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(function (a, b) {
    return a + b;
  });
  var Ju = function (a) {
    this.M = A(a);
  };
  u(Ju, B);
  Ju.ga = [3];
  var Ku = function (a) {
    this.M = A(a);
  };
  u(Ku, B);
  var Lu = function (a, b) {
      return Re(a, 1, b, ce);
    },
    Mu = function (a, b) {
      return Re(a, 2, b, ce);
    },
    Nu = function (a, b) {
      return Re(a, 3, b, fe);
    },
    Ou = function (a, b) {
      Re(a, 4, b, fe);
    };
  Ku.ga = [1, 2, 3, 4];
  var Pu = function (a) {
    this.M = A(a);
  };
  u(Pu, B);
  var Qu = function (a) {
    this.M = A(a);
  };
  u(Qu, B);
  Qu.prototype.getVersion = function () {
    return ef(this, 1);
  };
  var Ru = function (a, b) {
      return Se(a, 1, ge(b), 0);
    },
    Su = function (a, b) {
      return Ye(a, 2, b);
    },
    Tu = function (a, b) {
      return Ye(a, 3, b);
    },
    Uu = function (a, b) {
      return Se(a, 4, ge(b), 0);
    },
    Vu = function (a, b) {
      return Se(a, 5, ge(b), 0);
    },
    Wu = function (a, b) {
      return Se(a, 6, ge(b), 0);
    },
    Xu = function (a, b) {
      return Se(a, 7, qe(b), "");
    },
    Yu = function (a, b) {
      return Se(a, 8, ge(b), 0);
    },
    Zu = function (a, b) {
      return Se(a, 9, ge(b), 0);
    },
    $u = function (a, b) {
      return Se(a, 10, null == b ? b : Zd(b), !1);
    },
    av = function (a, b) {
      return Se(a, 11, null == b ? b : Zd(b), !1);
    },
    bv = function (a, b) {
      return Re(a, 12, b, ce);
    },
    cv = function (a, b) {
      return Re(a, 13, b, ce);
    },
    dv = function (a, b) {
      return Re(a, 14, b, ce);
    },
    ev = function (a, b) {
      return Se(a, 15, null == b ? b : Zd(b), !1);
    },
    fv = function (a, b) {
      return Se(a, 16, qe(b), "");
    },
    gv = function (a, b) {
      return Re(a, 17, b, fe);
    },
    hv = function (a, b) {
      return Re(a, 18, b, fe);
    },
    iv = function (a, b) {
      return Ze(a, 19, b);
    };
  Qu.ga = [12, 13, 14, 17, 18, 19];
  var jv = function (a) {
    this.M = A(a);
  };
  u(jv, B);
  var kv = "a".charCodeAt(),
    lv = og({
      mh: 0,
      lh: 1,
      ih: 2,
      bh: 3,
      jh: 4,
      eh: 5,
      kh: 6,
      gh: 7,
      hh: 8,
      ah: 9,
      fh: 10,
      nh: 11,
    }),
    mv = og({ ph: 0, qh: 1, oh: 2 });
  var nv = function (a) {
      if (/[^01]/.test(a))
        throw Error("Input bitstring " + a + " is malformed!");
      this.h = a;
      this.g = 0;
    },
    pv = function (a) {
      a = ov(a, 36);
      var b = new Pu();
      b = Se(b, 1, je(Math.floor(a / 10)), "0");
      return Se(b, 2, ge((a % 10) * 1e8), 0);
    },
    qv = function (a) {
      return (
        String.fromCharCode(kv + ov(a, 6)) + String.fromCharCode(kv + ov(a, 6))
      );
    },
    uv = function (a) {
      var b = ov(a, 16);
      return !0 === !!ov(a, 1)
        ? ((a = rv(a)),
          a.forEach(function (c) {
            if (c > b)
              throw Error("ID " + c + " is past MaxVendorId " + b + "!");
          }),
          a)
        : tv(a, b);
    },
    vv = function (a) {
      for (var b = [], c = ov(a, 12); c--; ) {
        var d = ov(a, 6),
          e = ov(a, 2),
          f = rv(a),
          g = b,
          h = g.push,
          k = new Ju();
        d = Se(k, 1, de(d), 0);
        e = Se(d, 2, de(e), 0);
        f = Re(e, 3, f, fe);
        h.call(g, f);
      }
      return b;
    },
    rv = function (a) {
      for (var b = ov(a, 12), c = []; b--; ) {
        var d = !0 === !!ov(a, 1),
          e = ov(a, 16);
        if (d) for (d = ov(a, 16); e <= d; e++) c.push(e);
        else c.push(e);
      }
      c.sort(function (f, g) {
        return f - g;
      });
      return c;
    },
    tv = function (a, b, c) {
      for (var d = [], e = 0; e < b; e++)
        if (ov(a, 1)) {
          var f = e + 1;
          if (c && -1 === c.indexOf(f))
            throw Error("ID: " + f + " is outside of allowed values!");
          d.push(f);
        }
      return d;
    },
    ov = function (a, b) {
      if (a.g + b > a.h.length)
        throw Error("Requested length " + b + " is past end of string.");
      var c = a.h.substring(a.g, a.g + b);
      a.g += b;
      return parseInt(c, 2);
    };
  nv.prototype.skip = function (a) {
    this.g += a;
  };
  var wv = function (a) {
    try {
      var b = Qc(a)
          .map(function (f) {
            return f.toString(2).padStart(8, "0");
          })
          .join(""),
        c = new nv(b);
      if (3 !== ov(c, 3)) return null;
      var d = Mu(Lu(new Ku(), tv(c, 24, lv)), tv(c, 24, lv)),
        e = ov(c, 6);
      0 !== e && Ou(Nu(d, tv(c, e)), tv(c, e));
      return d;
    } catch (f) {
      return null;
    }
  };
  var xv = function (a) {
    try {
      var b = Qc(a)
          .map(function (d) {
            return d.toString(2).padStart(8, "0");
          })
          .join(""),
        c = new nv(b);
      return iv(
        hv(
          gv(
            fv(
              ev(
                dv(
                  cv(
                    bv(
                      av(
                        $u(
                          Zu(
                            Yu(
                              Xu(
                                Wu(
                                  Vu(
                                    Uu(
                                      Tu(
                                        Su(Ru(new Qu(), ov(c, 6)), pv(c)),
                                        pv(c)
                                      ),
                                      ov(c, 12)
                                    ),
                                    ov(c, 12)
                                  ),
                                  ov(c, 6)
                                ),
                                qv(c)
                              ),
                              ov(c, 12)
                            ),
                            ov(c, 6)
                          ),
                          !!ov(c, 1)
                        ),
                        !!ov(c, 1)
                      ),
                      tv(c, 12, mv)
                    ),
                    tv(c, 24, lv)
                  ),
                  tv(c, 24, lv)
                ),
                !!ov(c, 1)
              ),
              qv(c)
            ),
            uv(c)
          ),
          uv(c)
        ),
        vv(c)
      );
    } catch (d) {
      return null;
    }
  };
  var zv = function (a) {
      if (!a) return null;
      var b = a.split(".");
      if (4 < b.length) return null;
      a = xv(b[0]);
      if (!a) return null;
      var c = new jv();
      a = Ye(c, 1, a);
      b.shift();
      b = t(b);
      for (c = b.next(); !c.done; c = b.next())
        switch (((c = c.value), yv(c))) {
          case 1:
          case 2:
            break;
          case 3:
            c = wv(c);
            if (!c) return null;
            Ye(a, 2, c);
            break;
          default:
            return null;
        }
      return a;
    },
    yv = function (a) {
      try {
        var b = Qc(a)
          .map(function (c) {
            return c.toString(2).padStart(8, "0");
          })
          .join("");
        return ov(new nv(b), 3);
      } catch (c) {
        return -1;
      }
    };
  var Av = function (a, b) {
    var c = {};
    if (Array.isArray(b) && 0 !== b.length) {
      b = t(b);
      for (var d = b.next(); !d.done; d = b.next())
        (d = d.value), (c[d] = -1 !== a.indexOf(d));
    } else for (a = t(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
    delete c[0];
    return c;
  };
  var ig = new (function (a, b) {
      this.g = a;
      this.defaultValue = void 0 === b ? 0 : b;
    })(494575051),
    Bv = new Xf(489560439),
    Cv = new Xf(505762507),
    Dv = new Wf(471855283),
    Ev = new Wf(465118388);
  var Fv = function (a) {
    this.M = A(a);
  };
  u(Fv, B);
  var Gv = function (a) {
    var b = new Fv(),
      c = b.M,
      d = zd(c);
    Wd(Dd(b.M));
    var e = d & 2;
    b = Ie(c, d, 1, !1);
    Array.isArray(b) || (b = Ud);
    var f = !!(d & 32),
      g = zd(b);
    0 === g && f && !e ? ((g |= 33), Ad(b, g)) : g & 1 || ((g |= 1), Ad(b, g));
    if (e) g & 2 || xd(b, 34), Object.freeze(b);
    else if (2 & g || 2048 & g)
      (b = vd(b)), (e = 1), f && (e |= 32), Ad(b, e), Ke(c, d, 1, b, !1);
    c = b;
    d = zd(c);
    d = !!(4 & d) && !!(4096 & d);
    if (Array.isArray(a)) for (b = 0; b < a.length; b++) c.push(ce(a[b], d));
    else
      for (a = t(a), b = a.next(); !b.done; b = a.next())
        c.push(ce(b.value, d));
  };
  Fv.ga = [1];
  var Hv = /^((market|itms|intent|itms-appss):\/\/)/i;
  var Iv = "ad_type vpos mridx pos vad_type videoad_start_delay".split(" ");
  var Jv = function (a) {
    var b = a.Xa,
      c = a.height,
      d = a.width,
      e = void 0 === a.Ca ? !1 : a.Ca;
    this.lb = a.lb;
    this.Xa = b;
    this.height = c;
    this.width = d;
    this.Ca = e;
  };
  Jv.prototype.getHeight = function () {
    return this.height;
  };
  Jv.prototype.getWidth = function () {
    return this.width;
  };
  var Kv = function (a) {
    var b = a.vg,
      c = a.nf,
      d = a.ug,
      e = a.mf;
    Jv.call(this, {
      lb: a.lb,
      Xa: a.Xa,
      height: a.height,
      width: a.width,
      Ca: void 0 === a.Ca ? !1 : a.Ca,
    });
    this.o = b;
    this.h = c;
    this.j = d;
    this.g = e;
  };
  u(Kv, Jv);
  var Lv = function (a) {
    var b = a.Sf;
    Jv.call(this, {
      lb: a.lb,
      Xa: a.Xa,
      height: a.height,
      width: a.width,
      Ca: void 0 === a.Ca ? !1 : a.Ca,
    });
    this.g = b;
  };
  u(Lv, Jv);
  Lv.prototype.getMediaUrl = function () {
    return this.g;
  };
  function Mv(a) {
    return new (Function.prototype.bind.apply(
      a,
      [null].concat(ha(Ia.apply(1, arguments)))
    ))();
  }
  var Nv = function (a, b, c, d) {
    P.call(this);
    this.F = b;
    this.D = c;
    this.B = d;
    this.l = new Map();
    this.G = 0;
    this.o = new Map();
    this.A = new Map();
    this.j = void 0;
    this.h = a;
  };
  u(Nv, P);
  Nv.prototype.L = function () {
    delete this.g;
    this.l.clear();
    this.o.clear();
    this.A.clear();
    this.j && (eg(this.h, "message", this.j), delete this.j);
    delete this.h;
    delete this.B;
    P.prototype.L.call(this);
  };
  var Ov = function (a) {
      if (a.g) return a.g;
      a.D && a.D(a.h) ? (a.g = a.h) : (a.g = Th(a.h, a.F));
      var b;
      return null != (b = a.g) ? b : null;
    },
    Qv = function (a, b, c) {
      if (Ov(a))
        if (a.g === a.h) (b = a.l.get(b)) && b(a.g, c);
        else {
          var d = a.o.get(b);
          if (d && d.Rb) {
            Pv(a);
            var e = ++a.G;
            a.A.set(e, { Cb: d.Cb, vf: d.Fc(c), cg: "addEventListener" === b });
            a.g.postMessage(d.Rb(c, e), "*");
          }
        }
    },
    Pv = function (a) {
      a.j ||
        ((a.j = function (b) {
          try {
            var c = a.B ? a.B(b) : void 0;
            if (c) {
              var d = c.se,
                e = a.A.get(d);
              if (e) {
                e.cg || a.A.delete(d);
                var f;
                null == (f = e.Cb) || f.call(e, e.vf, c.payload);
              }
            }
          } catch (g) {}
        }),
        dg(a.h, "message", a.j));
    };
  var Rv = function (a, b) {
      b = b.listener;
      (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0);
    },
    Sv = function (a, b) {
      (0, a.__gpp)("removeEventListener", b.listener, b.listenerId);
    },
    Tv = function (a, b) {
      (0, a.__gpp)(
        "getSection",
        function (c) {
          b.callback({ sc: null != c ? c : void 0, uc: c ? void 0 : 4 });
        },
        b.apiPrefix
      );
    },
    Uv = {
      Fc: function (a) {
        return a.listener;
      },
      Rb: function (a, b) {
        a = {};
        return (
          (a.__gppCall = {
            callId: b,
            command: "addEventListener",
            version: "1.1",
          }),
          a
        );
      },
      Cb: function (a, b) {
        b = b.__gppReturn;
        a(b.returnValue, b.success);
      },
    },
    Vv = {
      Fc: function (a) {
        return a.listener;
      },
      Rb: function (a, b) {
        var c = {};
        return (
          (c.__gppCall = {
            callId: b,
            command: "removeEventListener",
            version: "1.1",
            parameter: a.listenerId,
          }),
          c
        );
      },
      Cb: function (a, b) {
        b = b.__gppReturn;
        var c = b.returnValue.data;
        null == a || a(c, b.success);
      },
    },
    Wv = {
      Fc: function (a) {
        return a.callback;
      },
      Rb: function (a, b) {
        var c = {};
        return (
          (c.__gppCall = {
            callId: b,
            command: "getSection",
            version: "1.1",
            parameter: a.apiPrefix,
          }),
          c
        );
      },
      Cb: function (a, b) {
        b = b.__gppReturn;
        var c;
        a({
          sc: null != (c = b.returnValue) ? c : void 0,
          uc: b.success ? void 0 : 2,
        });
      },
    };
  function Xv(a) {
    var b = {};
    "string" === typeof a.data ? (b = JSON.parse(a.data)) : (b = a.data);
    return { payload: b, se: b.__gppReturn.callId };
  }
  var Yv = function (a, b) {
    var c = void 0 === b ? {} : b;
    b = c.gppApiDetectionMode;
    c = c.timeoutMs;
    P.call(this);
    this.caller = new Nv(
      a,
      b && 1 !== b && 3 !== b ? "__gppLocator_non_existent" : "__gppLocator",
      b && 1 !== b && 2 !== b
        ? void 0
        : function (d) {
            return "function" === typeof d.__gpp;
          },
      Xv
    );
    this.caller.l.set("addEventListener", Rv);
    this.caller.o.set("addEventListener", Uv);
    this.caller.l.set("removeEventListener", Sv);
    this.caller.o.set("removeEventListener", Vv);
    this.caller.l.set("getDataWithCallback", Tv);
    this.caller.o.set("getDataWithCallback", Wv);
    this.timeoutMs = null != c ? c : 500;
  };
  u(Yv, P);
  Yv.prototype.L = function () {
    this.caller.W();
    P.prototype.L.call(this);
  };
  Yv.prototype.addEventListener = function (a) {
    var b = this,
      c = $f(function () {
        a(Zv, !0);
      }),
      d =
        -1 === this.timeoutMs
          ? void 0
          : setTimeout(function () {
              c();
            }, this.timeoutMs);
    Qv(this.caller, "addEventListener", {
      listener: function (e, f) {
        clearTimeout(d);
        try {
          var g;
          if (
            void 0 === (null == (g = e.pingData) ? void 0 : g.gppVersion) ||
            "1" === e.pingData.gppVersion ||
            "1.0" === e.pingData.gppVersion
          ) {
            b.removeEventListener(e.listenerId);
            var h = {
              eventName: "signalStatus",
              data: "ready",
              pingData: {
                internalErrorState: 1,
                gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                applicableSections: [-1],
              },
            };
          } else
            Array.isArray(e.pingData.applicableSections) &&
            0 !== e.pingData.applicableSections.length
              ? (h = e)
              : (b.removeEventListener(e.listenerId),
                (h = {
                  eventName: "signalStatus",
                  data: "ready",
                  pingData: {
                    internalErrorState: 2,
                    gppString:
                      "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                    applicableSections: [-1],
                  },
                }));
          a(h, f);
        } catch (k) {
          if (null == e ? 0 : e.listenerId)
            try {
              b.removeEventListener(e.listenerId);
            } catch (m) {
              a($v, !0);
              return;
            }
          a(aw, !0);
        }
      },
    });
  };
  Yv.prototype.removeEventListener = function (a) {
    Qv(this.caller, "removeEventListener", { listenerId: a });
  };
  var aw = {
      eventName: "signalStatus",
      data: "ready",
      pingData: {
        internalErrorState: 2,
        gppString: "GPP_ERROR_STRING_UNAVAILABLE",
        applicableSections: [-1],
      },
      listenerId: -1,
    },
    Zv = {
      eventName: "signalStatus",
      data: "ready",
      pingData: {
        gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
        internalErrorState: 2,
        applicableSections: [-1],
      },
      listenerId: -1,
    },
    $v = {
      eventName: "signalStatus",
      data: "ready",
      pingData: {
        gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
        internalErrorState: 2,
        applicableSections: [-1],
      },
      listenerId: -1,
    };
  var bw = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    cw = function (a, b) {
      b = void 0 === b ? {} : b;
      P.call(this);
      this.h = a;
      this.g = null;
      this.A = {};
      this.B = 0;
      var c;
      this.o = null != (c = b.timeoutMs) ? c : 500;
      var d;
      this.l = null != (d = b.gi) ? d : !1;
      this.j = null;
    };
  u(cw, P);
  cw.prototype.L = function () {
    this.A = {};
    this.j && (eg(this.h, "message", this.j), delete this.j);
    delete this.A;
    delete this.h;
    delete this.g;
    P.prototype.L.call(this);
  };
  var ew = function (a) {
      return "function" === typeof a.h.__tcfapi || null != dw(a);
    },
    hw = function (a, b) {
      var c = { internalErrorState: 0, internalBlockOnErrors: a.l },
        d = $f(function () {
          return b(c);
        }),
        e = 0;
      -1 !== a.o &&
        (e = setTimeout(function () {
          e = 0;
          c.tcString = "tcunavailable";
          c.internalErrorState = 1;
          d();
        }, a.o));
      fw(a, "addEventListener", function (f) {
        f &&
          ((c = f),
          (c.internalErrorState = bw(c)),
          (c.internalBlockOnErrors = a.l),
          gw(c)
            ? (0 != c.internalErrorState && (c.tcString = "tcunavailable"),
              fw(a, "removeEventListener", null, c.listenerId),
              (f = e) && clearTimeout(f),
              d())
            : ("error" === c.cmpStatus || 0 !== c.internalErrorState) &&
              (f = e) &&
              clearTimeout(f));
      });
    };
  cw.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.l },
      d = $f(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.o &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.o));
    var f = function (g, h) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = bw(c)),
          (c.internalBlockOnErrors = b.l),
          (h && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), h || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      fw(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  cw.prototype.removeEventListener = function (a) {
    a && a.listenerId && fw(this, "removeEventListener", null, a.listenerId);
  };
  var fw = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.h.__tcfapi) (a = a.h.__tcfapi), a(b, 2, c, d);
      else if (dw(a)) {
        iw(a);
        var e = ++a.B;
        a.A[e] = c;
        a.g &&
          ((c = {}),
          a.g.postMessage(
            ((c.__tcfapiCall = {
              command: b,
              version: 2,
              callId: e,
              parameter: d,
            }),
            c),
            "*"
          ));
      } else c({}, !1);
    },
    dw = function (a) {
      if (a.g) return a.g;
      a.g = Th(a.h, "__tcfapiLocator");
      return a.g;
    },
    iw = function (a) {
      a.j ||
        ((a.j = function (b) {
          try {
            var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.A[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        dg(a.h, "message", a.j));
    },
    gw = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = bw(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (Di({ e: String(a.internalErrorState) }, "tcfe"), !1)
          : !0
        : "loaded" !== a.cmpStatus ||
          ("tcloaded" !== a.eventStatus &&
            "useractioncomplete" !== a.eventStatus)
        ? !1
        : !0;
    };
  Gv([1, 8, 10, 11, 12, 2, 3, 4, 5]);
  Gv([1, 6, 7, 8, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14]);
  Gv([1, 6, 7, 8, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14]);
  new Fv();
  var R = function (a, b) {
    this.h = this.A = this.o = "";
    this.I = null;
    this.K = this.j = "";
    this.l = !1;
    var c;
    a instanceof R
      ? ((this.l = void 0 !== b ? b : a.l),
        jw(this, a.o),
        (this.A = a.A),
        (this.h = a.h),
        kw(this, a.I),
        (this.j = a.j),
        lw(this, mw(a.g)),
        (this.K = a.D()))
      : a && (c = String(a).match(uh))
      ? ((this.l = !!b),
        jw(this, c[1] || "", !0),
        (this.A = nw(c[2] || "")),
        (this.h = nw(c[3] || "", !0)),
        kw(this, c[4]),
        (this.j = nw(c[5] || "", !0)),
        lw(this, c[6] || "", !0),
        (this.K = nw(c[7] || "")))
      : ((this.l = !!b), (this.g = new ow(null, this.l)));
  };
  R.prototype.toString = function () {
    var a = [],
      b = this.o;
    b && a.push(pw(b, qw, !0), ":");
    var c = this.h;
    if (c || "file" == b)
      a.push("//"),
        (b = this.A) && a.push(pw(b, qw, !0), "@"),
        a.push(
          encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
        ),
        (c = this.I),
        null != c && a.push(":", String(c));
    if ((c = this.j))
      this.h && "/" != c.charAt(0) && a.push("/"),
        a.push(pw(c, "/" == c.charAt(0) ? rw : tw, !0));
    (c = this.g.toString()) && a.push("?", c);
    (c = this.D()) && a.push("#", pw(c, uw));
    return a.join("");
  };
  R.prototype.resolve = function (a) {
    var b = this.F(),
      c = !!a.o;
    c ? jw(b, a.o) : (c = !!a.A);
    c ? (b.A = a.A) : (c = !!a.h);
    c ? (b.h = a.h) : (c = null != a.I);
    var d = a.j;
    if (c) kw(b, a.I);
    else if ((c = !!a.j)) {
      if ("/" != d.charAt(0))
        if (this.h && !this.j) d = "/" + d;
        else {
          var e = b.j.lastIndexOf("/");
          -1 != e && (d = b.j.slice(0, e + 1) + d);
        }
      e = d;
      if (".." == e || "." == e) d = "";
      else if (pb(e, "./") || pb(e, "/.")) {
        d = 0 == e.lastIndexOf("/", 0);
        e = e.split("/");
        for (var f = [], g = 0; g < e.length; ) {
          var h = e[g++];
          "." == h
            ? d && g == e.length && f.push("")
            : ".." == h
            ? ((1 < f.length || (1 == f.length && "" != f[0])) && f.pop(),
              d && g == e.length && f.push(""))
            : (f.push(h), (d = !0));
        }
        d = f.join("/");
      } else d = e;
    }
    c ? (b.j = d) : (c = "" !== a.g.toString());
    c ? lw(b, mw(a.g)) : (c = !!a.K);
    c && (b.K = a.D());
    return b;
  };
  R.prototype.F = function () {
    return new R(this);
  };
  var jw = function (a, b, c) {
      a.o = c ? nw(b, !0) : b;
      a.o && (a.o = a.o.replace(/:$/, ""));
    },
    kw = function (a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.I = b;
      } else a.I = null;
    },
    lw = function (a, b, c) {
      b instanceof ow
        ? ((a.g = b), vw(a.g, a.l))
        : (c || (b = pw(b, ww)), (a.g = new ow(b, a.l)));
    },
    xw = function (a, b, c) {
      a.g.set(b, c);
      return a;
    };
  R.prototype.D = function () {
    return this.K;
  };
  var yw = function (a) {
      return a instanceof R ? a.F() : new R(a, void 0);
    },
    nw = function (a, b) {
      return a
        ? b
          ? decodeURI(a.replace(/%25/g, "%2525"))
          : decodeURIComponent(a)
        : "";
    },
    pw = function (a, b, c) {
      return "string" === typeof a
        ? ((a = encodeURI(a).replace(b, zw)),
          c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
          a)
        : null;
    },
    zw = function (a) {
      a = a.charCodeAt(0);
      return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
    },
    qw = /[#\/\?@]/g,
    tw = /[#\?:]/g,
    rw = /[#\?]/g,
    ww = /[#\?@]/g,
    uw = /#/g,
    ow = function (a, b) {
      this.h = this.g = null;
      this.j = a || null;
      this.o = !!b;
    },
    Aw = function (a) {
      a.g ||
        ((a.g = new Map()),
        (a.h = 0),
        a.j &&
          wh(a.j, function (b, c) {
            a.add(Pg(b), c);
          }));
    };
  ow.prototype.add = function (a, b) {
    Aw(this);
    this.j = null;
    a = Bw(this, a);
    var c = this.g.get(a);
    c || this.g.set(a, (c = []));
    c.push(b);
    this.h += 1;
    return this;
  };
  ow.prototype.remove = function (a) {
    Aw(this);
    a = Bw(this, a);
    return this.g.has(a)
      ? ((this.j = null), (this.h -= this.g.get(a).length), this.g.delete(a))
      : !1;
  };
  ow.prototype.clear = function () {
    this.g = this.j = null;
    this.h = 0;
  };
  ow.prototype.isEmpty = function () {
    Aw(this);
    return 0 == this.h;
  };
  var Cw = function (a, b) {
    Aw(a);
    b = Bw(a, b);
    return a.g.has(b);
  };
  l = ow.prototype;
  l.forEach = function (a, b) {
    Aw(this);
    this.g.forEach(function (c, d) {
      c.forEach(function (e) {
        a.call(b, e, d, this);
      }, this);
    }, this);
  };
  l.wc = function () {
    Aw(this);
    for (
      var a = Array.from(this.g.values()),
        b = Array.from(this.g.keys()),
        c = [],
        d = 0;
      d < b.length;
      d++
    )
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  };
  l.zb = function (a) {
    Aw(this);
    var b = [];
    if ("string" === typeof a)
      Cw(this, a) && (b = b.concat(this.g.get(Bw(this, a))));
    else {
      a = Array.from(this.g.values());
      for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
    }
    return b;
  };
  l.set = function (a, b) {
    Aw(this);
    this.j = null;
    a = Bw(this, a);
    Cw(this, a) && (this.h -= this.g.get(a).length);
    this.g.set(a, [b]);
    this.h += 1;
    return this;
  };
  l.get = function (a, b) {
    if (!a) return b;
    a = this.zb(a);
    return 0 < a.length ? String(a[0]) : b;
  };
  l.toString = function () {
    if (this.j) return this.j;
    if (!this.g) return "";
    for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = this.zb(d);
      for (var f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g);
      }
    }
    return (this.j = a.join("&"));
  };
  var mw = function (a) {
      var b = new ow();
      b.j = a.j;
      a.g && ((b.g = new Map(a.g)), (b.h = a.h));
      return b;
    },
    Bw = function (a, b) {
      b = String(b);
      a.o && (b = b.toLowerCase());
      return b;
    },
    vw = function (a, b) {
      b &&
        !a.o &&
        (Aw(a),
        (a.j = null),
        a.g.forEach(function (c, d) {
          var e = d.toLowerCase();
          d != e &&
            (this.remove(d),
            this.remove(e),
            0 < c.length &&
              ((this.j = null),
              this.g.set(Bw(this, e), $b(c)),
              (this.h += c.length)));
        }, a));
      a.o = b;
    };
  var Dw,
    Ew,
    Fw,
    Gw = function () {
      return w.navigator ? w.navigator.userAgent : "";
    },
    Hw =
      pb(Gw(), "(iPad") ||
      pb(Gw(), "(Macintosh") ||
      pb(Gw(), "(iPod") ||
      pb(Gw(), "(iPhone");
  var Iw =
      "ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(
        " "
      ),
    Jw = ["c.googlesyndication.com"];
  function Kw(a, b) {
    b = void 0 === b ? window.location.protocol : b;
    var c = !1;
    null == a ||
    !a.startsWith("http") ||
    (null == a ? 0 : a.startsWith("https"))
      ? (c = !1)
      : Lw(a, Jw)
      ? (c = !1)
      : b.includes("https") && Lw(a, Iw) && (c = !0);
    return c
      ? ((a = new R(a)), I(G.g(), "htp", "1"), jw(a, "https"), a.toString())
      : a;
  }
  function Mw(a) {
    if (!a) return !1;
    try {
      var b = "string" === typeof a ? new R(a) : a;
      return "gcache" == b.o && !!b.g.get("url");
    } catch (c) {
      return !1;
    }
  }
  function Nw(a) {
    try {
      var b = "string" === typeof a ? new R(a) : a;
      if (Mw(b)) {
        var c = b.g.get("url");
        return "undefined" === typeof c ? null : c;
      }
    } catch (d) {}
    return null;
  }
  function Lw(a, b) {
    return new RegExp(
      "^https?://([a-z0-9-]{1,63}\\.)*(" +
        b.join("|").replace(/\./g, "\\.") +
        ")(:[0-9]+)?([/?#]|$)",
      "i"
    ).test(a);
  }
  function Ow(a) {
    a = new R(a);
    var b = a.h;
    if ("http" != a.o && "https" != a.o) a = !1;
    else if (-1 == b.indexOf(".") || b.match(/^[\.0-9]*$/)) a = !1;
    else
      a: {
        try {
          Pg(a.toString());
        } catch (c) {
          a = !1;
          break a;
        }
        a = !0;
      }
    return a;
  }
  var Pw = -1;
  function Qw(a, b) {
    b = null != b ? b : "";
    jc && (b = "");
    if (!nb(Sg(a))) {
      var c = a instanceof Fg || !Hv.test(a) ? a : new Fg(a, Gg);
      if (c instanceof Fg) var d = c;
      else {
        d = void 0 === d ? Ch : d;
        a: if (((d = void 0 === d ? Ch : d), !(a instanceof Fg))) {
          for (c = 0; c < d.length; ++c) {
            var e = d[c];
            if (e instanceof Ah && e.Rf(a)) {
              a = new Fg(a, Gg);
              break a;
            }
          }
          a = void 0;
        }
        d = a || Hg;
      }
      a = window;
      if (d instanceof Fg)
        var f =
          d instanceof Fg && d.constructor === Fg ? d.g : "type_error:SafeUrl";
      else {
        b: if (Eh) {
          try {
            f = new URL(d);
          } catch (g) {
            f = "https:";
            break b;
          }
          f = f.protocol;
        } else
          c: {
            f = document.createElement("a");
            try {
              f.href = d;
            } catch (g) {
              f = void 0;
              break c;
            }
            f = f.protocol;
            f = ":" === f || "" === f ? "https:" : f;
          }
        f = "javascript:" !== f ? d : void 0;
      }
      void 0 !== f && a.open(f, "_blank", b);
    }
  }
  var Rw = /OS (\S+) like/,
    Sw = /Android ([\d\.]+)/;
  function Tw(a, b) {
    a = (a = a.exec(vb())) ? a[1] : "";
    a = a.replace(/_/g, ".");
    return 0 <= sb(a, b);
  }
  var Uw = function () {
      return tc || (qc && "ontouchstart" in document.documentElement);
    },
    Vw = function (a) {
      return vc && Tw(Rw, a);
    },
    Ww = function (a) {
      return (a = void 0 === a ? null : a) &&
        "function" === typeof a.getAttribute
        ? a.getAttribute("playsinline")
          ? !0
          : !1
        : !1;
    };
  var Xw = function (a) {
    Q.call(this);
    this.h = a;
    this.l = this.A = !1;
    this.B = this.D = 0;
    this.g = new wt(1e3);
    eo(this, this.g);
    Hs(this.g, "tick", this.F, !1, this);
    Hs(this.h, "pause", this.j, !1, this);
    Hs(this.h, "playing", this.j, !1, this);
    Hs(this.h, "ended", this.j, !1, this);
    Hs(this.h, "timeupdate", this.j, !1, this);
  };
  u(Xw, Q);
  var Yw = function (a) {
    var b;
    return null != (b = a.h.currentTime) ? b : a.h.getCurrentTime();
  };
  Xw.prototype.j = function (a) {
    switch (a.type) {
      case "playing":
        Zw(this);
        break;
      case "pause":
      case "ended":
        this.g.enabled && this.g.stop();
        break;
      case "timeupdate":
        !this.A && 0 < Yw(this) && ((this.A = !0), Zw(this));
    }
  };
  var Zw = function (a) {
    !a.g.enabled &&
      a.A &&
      ((a.D = 1e3 * Yw(a)), (a.B = Date.now()), (a.l = !1), a.g.start());
  };
  Xw.prototype.F = function () {
    var a = Date.now(),
      b = a - this.B,
      c = 1e3 * Yw(this);
    c - this.D < 0.5 * b
      ? this.l || ((this.l = !0), this.dispatchEvent("playbackStalled"))
      : (this.l = !1);
    this.D = c;
    this.B = a;
  };
  var $w =
      "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav".split(
        " "
      ),
    ax = /\bocr\b/;
  function bx(a) {
    if (nb(Sg(a)) || (jc && 2048 < a.length)) return !1;
    try {
      if (new R(a).D().match(ax)) return !0;
    } catch (b) {}
    return (
      null !=
      $w.find(function (b) {
        return null != a.match(b);
      })
    );
  }
  var cx = new Map(),
    dx = function () {
      this.h = this.g = null;
    };
  function ex(a, b, c, d) {
    var e = hn(a);
    b.width <= e.width && b.height <= e.height
      ? (fx(d), c(e))
      : ((e = setTimeout(function () {
          return ex(a, b, c, d);
        }, 200)),
        (d.h = e));
  }
  function gx(a, b) {
    b = void 0 === b ? new D(1, 1) : b;
    var c = new dx(),
      d = new Promise(function (e) {
        var f = hn(a);
        if (b.width <= f.width && b.height <= f.height) return e(f);
        "ResizeObserver" in window
          ? ((f = new ResizeObserver(function (g) {
              window.requestAnimationFrame(function () {
                for (
                  var h = new D(0, 0), k = t(g), m = k.next();
                  !m.done;
                  m = k.next()
                )
                  if (
                    ((m = m.value),
                    m.contentBoxSize
                      ? ((m = Array.isArray(m.contentBoxSize)
                          ? m.contentBoxSize[0]
                          : m.contentBoxSize),
                        (h.width = Math.floor(m.inlineSize)),
                        (h.height = Math.floor(m.blockSize)))
                      : ((h.width = Math.floor(m.contentRect.width)),
                        (h.height = Math.floor(m.contentRect.height))),
                    b.width <= h.width && b.height <= h.height)
                  )
                    return fx(c), e(h);
              });
            })),
            (c.g = f),
            f.observe(a))
          : ex(a, b, e, c);
      });
    cx.set(d, c);
    return d;
  }
  function fx(a) {
    a.h && window.clearTimeout(a.h);
    a.g && (a.g.disconnect(), (a.g = null));
  }
  function hx(a, b) {
    return nb(b) ? !1 : new RegExp(a).test(b);
  }
  function ix(a) {
    var b = {};
    a.split(",").forEach(function (c) {
      var d = c.split("=");
      2 == d.length &&
        ((c = ob(d[0])), (d = ob(d[1])), 0 < c.length && (b[c] = d));
    });
    return b;
  }
  function jx(a) {
    var b =
      "af am ar_eg ar_sa ar_xb ar be bg bn ca cs da de_at de_cn de el en_au en_ca en_gb en_ie en_in en_sg en_xa en_xc en_za en es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et eu fa fi fil fr_ca fr_ch fr gl gsw gu he hi hr hu id in is it iw ja kn ko ln lo lt lv ml mo mr ms nb ne nl no pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv sw ta te th tl tr uk ur vi zh_cn zh_hk zh_tw zh zu".split(
        " "
      );
    if (!a) return null;
    a = a.toLowerCase().replace("-", "_");
    if (b.includes(a)) return a;
    a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "";
    return b.includes(a) ? a : null;
  }
  var kx = function () {
    this.g = Date.now();
  };
  kx.prototype.reset = function () {
    this.g = Date.now();
  };
  var lx = function (a) {
    a = a.g + 5e3 - Date.now();
    return 0 < a ? a : 0;
  };
  var mx = function (a, b) {
    this.url = a;
    this.g = void 0 === b ? null : b;
  };
  var nx = function (a) {
    switch (a) {
      case 0:
        return "No Error";
      case 1:
        return "Access denied to content document";
      case 2:
        return "File not found";
      case 3:
        return "Firefox silently errored";
      case 4:
        return "Application custom error";
      case 5:
        return "An exception occurred";
      case 6:
        return "Http response at 400 or 500 level";
      case 7:
        return "Request was aborted";
      case 8:
        return "Request timed out";
      case 9:
        return "The resource is not available offline";
      default:
        return "Unrecognized error code";
    }
  };
  var ox = function (a, b) {
    var c = Error.call(this, a);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.errorCode = a;
    this.g = b;
  };
  u(ox, Error);
  var px = function () {
      if (!jc) return !1;
      try {
        return new ActiveXObject("MSXML2.DOMDocument"), !0;
      } catch (a) {
        return !1;
      }
    },
    qx = jc && px();
  var rx = function (a) {
    P.call(this);
    this.o = a;
    this.h = {};
  };
  bb(rx, P);
  var sx = [];
  rx.prototype.O = function (a, b, c, d) {
    return tx(this, a, b, c, d);
  };
  var tx = function (a, b, c, d, e, f) {
    Array.isArray(c) || (c && (sx[0] = c.toString()), (c = sx));
    for (var g = 0; g < c.length; g++) {
      var h = Hs(b, c[g], d || a.handleEvent, e || !1, f || a.o || a);
      if (!h) break;
      a.h[h.key] = h;
    }
    return a;
  };
  rx.prototype.Qb = function (a, b, c, d) {
    return ux(this, a, b, c, d);
  };
  var ux = function (a, b, c, d, e, f) {
    if (Array.isArray(c))
      for (var g = 0; g < c.length; g++) ux(a, b, c[g], d, e, f);
    else {
      b = Gs(b, c, d || a.handleEvent, e, f || a.o || a);
      if (!b) return a;
      a.h[b.key] = b;
    }
    return a;
  };
  rx.prototype.vb = function (a, b, c, d, e) {
    if (Array.isArray(b))
      for (var f = 0; f < b.length; f++) this.vb(a, b[f], c, d, e);
    else
      (c = c || this.handleEvent),
        (d = Qa(d) ? !!d.capture : !!d),
        (e = e || this.o || this),
        (c = Is(c)),
        (d = !!d),
        (b = ws(a)
          ? a.Mb(b, c, d, e)
          : a
          ? (a = Ks(a))
            ? a.Mb(b, c, d, e)
            : null
          : null),
        b && (Ps(b), delete this.h[b.key]);
  };
  var vx = function (a) {
    kg(
      a.h,
      function (b, c) {
        this.h.hasOwnProperty(c) && Ps(b);
      },
      a
    );
    a.h = {};
  };
  rx.prototype.L = function () {
    rx.Da.L.call(this);
    vx(this);
  };
  rx.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  var wx = function () {};
  wx.prototype.g = null;
  var yx = function (a) {
    var b;
    (b = a.g) || ((b = {}), xx(a) && ((b[0] = !0), (b[1] = !0)), (b = a.g = b));
    return b;
  };
  var zx,
    Ax = function () {};
  bb(Ax, wx);
  var Bx = function (a) {
      return (a = xx(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
    },
    xx = function (a) {
      if (
        !a.h &&
        "undefined" == typeof XMLHttpRequest &&
        "undefined" != typeof ActiveXObject
      ) {
        for (
          var b = [
              "MSXML2.XMLHTTP.6.0",
              "MSXML2.XMLHTTP.3.0",
              "MSXML2.XMLHTTP",
              "Microsoft.XMLHTTP",
            ],
            c = 0;
          c < b.length;
          c++
        ) {
          var d = b[c];
          try {
            return new ActiveXObject(d), (a.h = d);
          } catch (e) {}
        }
        throw Error(
          "Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"
        );
      }
      return a.h;
    };
  zx = new Ax();
  var Cx = function (a) {
    Q.call(this);
    this.headers = new Map();
    this.G = a || null;
    this.h = !1;
    this.F = this.g = null;
    this.N = "";
    this.l = 0;
    this.j = this.J = this.A = this.H = !1;
    this.D = 0;
    this.B = null;
    this.Z = "";
    this.U = this.V = !1;
  };
  bb(Cx, Q);
  var Dx = /^https?$/i,
    Ex = ["POST", "PUT"],
    Ix = function (a, b, c, d) {
      if (a.g)
        throw Error(
          "[goog.net.XhrIo] Object is active with another request=" +
            a.N +
            "; newUri=" +
            b
        );
      c = c ? c.toUpperCase() : "GET";
      a.N = b;
      a.l = 0;
      a.H = !1;
      a.h = !0;
      a.g = a.G ? Bx(a.G) : Bx(zx);
      a.F = a.G ? yx(a.G) : yx(zx);
      a.g.onreadystatechange = Za(a.X, a);
      try {
        (a.J = !0), a.g.open(c, String(b), !0), (a.J = !1);
      } catch (g) {
        Fx(a);
        return;
      }
      b = d || "";
      d = new Map(a.headers);
      var e = Array.from(d.keys()).find(function (g) {
          return "content-type" == g.toLowerCase();
        }),
        f = w.FormData && b instanceof w.FormData;
      !Vb(Ex, c) ||
        e ||
        f ||
        d.set(
          "Content-Type",
          "application/x-www-form-urlencoded;charset=utf-8"
        );
      c = t(d);
      for (d = c.next(); !d.done; d = c.next())
        (e = t(d.value)),
          (d = e.next().value),
          (e = e.next().value),
          a.g.setRequestHeader(d, e);
      a.Z && (a.g.responseType = a.Z);
      "withCredentials" in a.g &&
        a.g.withCredentials !== a.V &&
        (a.g.withCredentials = a.V);
      try {
        Gx(a),
          0 < a.D &&
            ((a.U = Hx(a.g)),
            a.U
              ? ((a.g.timeout = a.D), (a.g.ontimeout = Za(a.aa, a)))
              : (a.B = xt(a.aa, a.D, a))),
          (a.A = !0),
          a.g.send(b),
          (a.A = !1);
      } catch (g) {
        Fx(a);
      }
    },
    Hx = function (a) {
      return jc && "number" === typeof a.timeout && void 0 !== a.ontimeout;
    };
  Cx.prototype.aa = function () {
    "undefined" != typeof La &&
      this.g &&
      ((this.l = 8), this.dispatchEvent("timeout"), this.abort(8));
  };
  var Fx = function (a) {
      a.h = !1;
      a.g && ((a.j = !0), a.g.abort(), (a.j = !1));
      a.l = 5;
      Jx(a);
      Kx(a);
    },
    Jx = function (a) {
      a.H ||
        ((a.H = !0), a.dispatchEvent("complete"), a.dispatchEvent("error"));
    };
  Cx.prototype.abort = function (a) {
    this.g &&
      this.h &&
      ((this.h = !1),
      (this.j = !0),
      this.g.abort(),
      (this.j = !1),
      (this.l = a || 7),
      this.dispatchEvent("complete"),
      this.dispatchEvent("abort"),
      Kx(this));
  };
  Cx.prototype.L = function () {
    this.g &&
      (this.h && ((this.h = !1), (this.j = !0), this.g.abort(), (this.j = !1)),
      Kx(this, !0));
    Cx.Da.L.call(this);
  };
  Cx.prototype.X = function () {
    this.ya() || (this.J || this.A || this.j ? Lx(this) : this.ba());
  };
  Cx.prototype.ba = function () {
    Lx(this);
  };
  var Lx = function (a) {
      if (
        a.h &&
        "undefined" != typeof La &&
        (!a.F[1] || 4 != Mx(a) || 2 != Nx(a))
      )
        if (a.A && 4 == Mx(a)) xt(a.X, 0, a);
        else if ((a.dispatchEvent("readystatechange"), 4 == Mx(a))) {
          a.h = !1;
          try {
            var b = Nx(a);
            a: switch (b) {
              case 200:
              case 201:
              case 202:
              case 204:
              case 206:
              case 304:
              case 1223:
                var c = !0;
                break a;
              default:
                c = !1;
            }
            var d;
            if (!(d = c)) {
              var e;
              if ((e = 0 === b)) {
                var f = String(a.N).match(uh)[1] || null;
                !f &&
                  w.self &&
                  w.self.location &&
                  (f = w.self.location.protocol.slice(0, -1));
                e = !Dx.test(f ? f.toLowerCase() : "");
              }
              d = e;
            }
            d
              ? (a.dispatchEvent("complete"), a.dispatchEvent("success"))
              : ((a.l = 6), Jx(a));
          } finally {
            Kx(a);
          }
        }
    },
    Kx = function (a, b) {
      if (a.g) {
        Gx(a);
        var c = a.g,
          d = a.F[0] ? function () {} : null;
        a.g = null;
        a.F = null;
        b || a.dispatchEvent("ready");
        try {
          c.onreadystatechange = d;
        } catch (e) {}
      }
    },
    Gx = function (a) {
      a.g && a.U && (a.g.ontimeout = null);
      a.B && (w.clearTimeout(a.B), (a.B = null));
    };
  Cx.prototype.isActive = function () {
    return !!this.g;
  };
  var Mx = function (a) {
      return a.g ? a.g.readyState : 0;
    },
    Nx = function (a) {
      try {
        return 2 < Mx(a) ? a.g.status : -1;
      } catch (b) {
        return -1;
      }
    },
    Ox = function (a) {
      if (a.g) {
        a: {
          a = a.g.responseText;
          if (w.JSON)
            try {
              var b = w.JSON.parse(a);
              break a;
            } catch (c) {}
          b = mj(a);
        }
        return b;
      }
    };
  var Px = function () {};
  Px.prototype.get = function (a) {
    return yy({
      url: a.url,
      timeout: a.timeout,
      withCredentials: void 0 === a.withCredentials ? !0 : a.withCredentials,
      method: "GET",
      headers: void 0 === a.headers ? {} : a.headers,
    });
  };
  var yy = function (a) {
      var b = a.url,
        c = a.timeout,
        d = a.withCredentials,
        e = a.method,
        f = void 0 === a.content ? void 0 : a.content,
        g = void 0 === a.headers ? {} : a.headers;
      return zy({
        url: b,
        timeout: c,
        withCredentials: d,
        method: e,
        content: f,
        headers: g,
      }).then(
        function (h) {
          return Promise.resolve(h);
        },
        function (h) {
          return h instanceof Error && 6 == h.message && d
            ? zy({
                url: b,
                timeout: c,
                withCredentials: !d,
                method: e,
                content: f,
                headers: g,
              })
            : Promise.reject(h);
        }
      );
    },
    zy = function (a) {
      var b = a.url,
        c = a.timeout,
        d = a.withCredentials,
        e = a.method,
        f = void 0 === a.content ? void 0 : a.content;
      a = void 0 === a.headers ? {} : a.headers;
      var g = new Cx();
      g.V = d;
      g.D = Math.max(0, lx(c));
      for (var h in a) g.headers.set(h, a[h]);
      var k = new rx();
      return new Promise(function (m, n) {
        k.Qb(g, "success", function () {
          a: {
            if (xn())
              try {
                Ox(g);
                var q = "application/json";
                break a;
              } catch (x) {
                q = "application/xml";
                break a;
              }
            g.g && 4 == Mx(g)
              ? ((q = g.g.getResponseHeader("Content-Type")),
                (q = null === q ? void 0 : q))
              : (q = void 0);
            q = q || "";
          }
          if (-1 != q.indexOf("application/json")) m(Ox(g) || {});
          else {
            try {
              var r = g.g ? g.g.responseXML : null;
            } catch (x) {
              r = null;
            }
            if (null == r) {
              try {
                var v = g.g ? g.g.responseText : "";
              } catch (x) {
                v = "";
              }
              r = v;
              if ("undefined" != typeof DOMParser)
                (v = new DOMParser()),
                  (r = Zi(r)),
                  (r = v.parseFromString(Ng(r), "application/xml"));
              else if (qx) {
                v = new ActiveXObject("MSXML2.DOMDocument");
                v.resolveExternals = !1;
                v.validateOnParse = !1;
                try {
                  v.setProperty("ProhibitDTD", !0),
                    v.setProperty("MaxXMLSize", 2048),
                    v.setProperty("MaxElementDepth", 256);
                } catch (x) {}
                v.loadXML(r);
                r = v;
              } else
                throw Error(
                  "Your browser does not support loading xml documents"
                );
            }
            m(r);
          }
          k.W();
          g.W();
        });
        k.Qb(g, ["error", "timeout"], function () {
          n(new ox(g.l, Nx(g)));
          k.W();
          g.W();
        });
        Ix(g, Kw(b), e, f);
      });
    };
  y("google.javascript.ads.imalib.common.UrlLoader", Px);
  var Ay = [
    "A9AxgGSwmnfgzzkyJHILUr3H8nJ/3D+57oAsL4DBt4USlng4jZ0weq+fZtHC/Qwwn6gd4QSa5DzT3OBif+kXVA0AAAB4eyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9",
    "As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
  ];
  function By() {
    var a = void 0 === a ? document : a;
    var b;
    return !(
      null == (b = a.featurePolicy) ||
      !b.features().includes("attribution-reporting")
    );
  }
  var Fy = function (a, b, c, d, e) {
      c = void 0 === c ? !1 : c;
      e = void 0 === e ? null : e;
      try {
        if (
          ((b = (void 0 === d ? 0 : d) ? Kw(b, "https") : Kw(b)),
          (c = c || bx(b)),
          a.h || null != e)
        )
          Cy(a, b, c, e);
        else {
          var f = By() ? e : null;
          xn() ? Dy(b) : Ey(a, b, c, f);
        }
      } catch (g) {}
    },
    Gy = function (a, b) {
      var c = { keepalive: !0, method: "get", redirect: "follow" };
      a && (c.referrerPolicy = "no-referrer");
      b
        ? "setAttributionReporting" in XMLHttpRequest.prototype
          ? (c.attributionReporting = {
              eventSourceEligible: !0,
              triggerEligible: !1,
            })
          : (c.headers = { "Attribution-Reporting-Eligible": "event-source" })
        : (c.mode = "no-cors");
      return c;
    },
    Cy = function (a, b, c, d) {
      d = void 0 === d ? null : d;
      I(G.g(), "faa", "1");
      var e = By();
      fetch(b, Gy(c, "" === d && e))
        .then(function () {
          I(G.g(), "fas", "1");
        })
        .catch(function () {
          I(G.g(), "faf", "1");
          a.h = !1;
          var f = d;
          f = By() ? f : null;
          xn() ? Dy(b) : Ey(a, b, c, f);
        });
      e && d && fetch(d, Gy(c, !0));
    },
    Ey = function (a, b, c, d) {
      var e = new Image(),
        f = (a.j++).toString();
      a.g.set(f, e);
      e.onload = e.onerror = function () {
        a.g.delete(f);
      };
      c && (e.referrerPolicy = "no-referrer");
      null != d && (e.attributionSrc = d);
      e.src = b;
    },
    Dy = function (a) {
      new Px().get({ url: a, timeout: new kx() });
    };
  var Hy = {
    AUTOPLAY_DISALLOWED: "autoplayDisallowed",
    Bg: "beginFullscreen",
    Cg: "canPlay",
    Dg: "canPlayThrough",
    CLICK: "click",
    DURATION_CHANGE: "durationChange",
    Og: "end",
    Pg: "endFullscreen",
    ERROR: "error",
    Tg: "focusSkipButton",
    Te: "loadStart",
    LOADED: "loaded",
    th: "mediaLoadTimeout",
    uh: "mediaPlaybackTimeout",
    Wd: "pause",
    Ah: "play",
    Bh: "playing",
    Jh: "seeked",
    Kh: "seeking",
    Lh: "skip",
    ff: "skipShown",
    Mh: "stalled",
    Xd: "start",
    Rh: "timeUpdate",
    Ph: "timedMetadata",
    ai: "volumeChange",
    bi: "waiting",
    ci: "windowFocusChanged",
    Ug: "fullyLoaded",
  };
  var Iy = function () {
    Q.apply(this, arguments);
  };
  u(Iy, Q);
  Iy.prototype.B = function () {
    return !1;
  };
  Iy.prototype.F = function () {
    return -1;
  };
  Iy.prototype.G = function () {};
  var Jy = {},
    Ky =
      ((Jy[18] = -1),
      (Jy[22] = -1),
      (Jy[43] = 350),
      (Jy[44] = 350),
      (Jy[45] = 350),
      (Jy[59] = -1),
      (Jy[133] = 350),
      (Jy[134] = 350),
      (Jy[135] = 350),
      (Jy[136] = 350),
      (Jy[139] = 50),
      (Jy[140] = 50),
      (Jy[141] = 50),
      (Jy[160] = 350),
      (Jy[242] = 150),
      (Jy[243] = 150),
      (Jy[244] = 150),
      (Jy[245] = 150),
      (Jy[247] = 150),
      (Jy[249] = 50),
      (Jy[250] = 50),
      (Jy[251] = 50),
      (Jy[278] = 150),
      (Jy[342] = -1),
      (Jy[343] = -1),
      (Jy[344] = -1),
      (Jy[345] = -1),
      (Jy[346] = -1),
      (Jy[347] = -1),
      (Jy[396] = -1),
      (Jy[398] = -1),
      Jy),
    Ly = {},
    My =
      ((Ly[18] = !1),
      (Ly[22] = !1),
      (Ly[43] = !0),
      (Ly[44] = !0),
      (Ly[45] = !0),
      (Ly[59] = !1),
      (Ly[133] = !0),
      (Ly[134] = !0),
      (Ly[135] = !0),
      (Ly[136] = !0),
      (Ly[139] = !0),
      (Ly[140] = !0),
      (Ly[141] = !0),
      (Ly[160] = !0),
      (Ly[242] = !0),
      (Ly[243] = !0),
      (Ly[244] = !0),
      (Ly[245] = !0),
      (Ly[247] = !0),
      (Ly[249] = !0),
      (Ly[250] = !0),
      (Ly[251] = !0),
      (Ly[278] = !0),
      (Ly[342] = !1),
      (Ly[343] = !1),
      (Ly[344] = !1),
      (Ly[345] = !1),
      (Ly[346] = !1),
      (Ly[347] = !1),
      (Ly[396] = !0),
      (Ly[398] = !0),
      Ly),
    Ny = {},
    Oy =
      ((Ny[18] = "video/mp4"),
      (Ny[22] = "video/mp4"),
      (Ny[43] = "video/webm"),
      (Ny[44] = "video/webm"),
      (Ny[45] = "video/webm"),
      (Ny[59] = "video/mp4"),
      (Ny[133] = "video/mp4"),
      (Ny[134] = "video/mp4"),
      (Ny[135] = "video/mp4"),
      (Ny[136] = "video/mp4"),
      (Ny[139] = "audio/mp4"),
      (Ny[140] = "audio/mp4"),
      (Ny[141] = "audio/mp4"),
      (Ny[160] = "video/mp4"),
      (Ny[242] = "video/webm"),
      (Ny[243] = "video/webm"),
      (Ny[244] = "video/webm"),
      (Ny[245] = "video/webm"),
      (Ny[247] = "video/webm"),
      (Ny[249] = "audio/webm"),
      (Ny[250] = "audio/webm"),
      (Ny[251] = "audio/webm"),
      (Ny[278] = "video/webm"),
      (Ny[342] = "video/mp4"),
      (Ny[343] = "video/mp4"),
      (Ny[344] = "video/mp4"),
      (Ny[345] = "video/mp4"),
      (Ny[346] = "video/mp4"),
      (Ny[347] = "video/mp4"),
      (Ny[396] = "video/mp4"),
      (Ny[398] = "video/mp4"),
      Ny),
    Py = {},
    Qy =
      ((Py[18] = "avc1.42001E, mp4a.40.2"),
      (Py[22] = "avc1.64001F, mp4a.40.2"),
      (Py[43] = "vp8, vorbis"),
      (Py[44] = "vp8, vorbis"),
      (Py[45] = "vp8, vorbis"),
      (Py[59] = "avc1.4D001F, mp4a.40.2"),
      (Py[133] = "avc1.4D401E"),
      (Py[134] = "avc1.4D401E"),
      (Py[135] = "avc1.4D401E"),
      (Py[136] = "avc1.4D401E"),
      (Py[139] = "mp4a.40.2"),
      (Py[140] = "mp4a.40.2"),
      (Py[141] = "mp4a.40.2"),
      (Py[160] = "avc1.4D401E"),
      (Py[242] = "vp9"),
      (Py[243] = "vp9"),
      (Py[244] = "vp9"),
      (Py[245] = "vp9"),
      (Py[247] = "vp9"),
      (Py[249] = "opus"),
      (Py[250] = "opus"),
      (Py[251] = "opus"),
      (Py[278] = "vp9"),
      (Py[342] = "avc1.42E01E, mp4a.40.2"),
      (Py[343] = "avc1.42E01E, mp4a.40.2"),
      (Py[344] = "avc1.42E01E, mp4a.40.2"),
      (Py[345] = "avc1.42E01E, mp4a.40.2"),
      (Py[346] = "avc1.42E01E, mp4a.40.2"),
      (Py[347] = "avc1.4D001F, mp4a.40.2"),
      (Py[396] = "av01.0.05M.08"),
      (Py[398] = "av01.0.05M.08"),
      Py);
  var Ry = RegExp("/itag/(\\d+)/");
  function Sy(a) {
    var b = Number(yh(a, "itag"));
    return b ? b : (a = a.match(Ry)) && 2 === a.length ? Number(a[1]) : null;
  }
  function Ty(a) {
    var b = Oy[a];
    a = Qy[a];
    b
      ? ((b = Sg(b).toLowerCase()),
        (b = a ? b + '; codecs="' + Sg(a) + '"' : b))
      : (b = "");
    return b;
  }
  function Uy(a, b) {
    if ("function" === typeof CustomEvent)
      return new CustomEvent(a, { detail: b });
    var c = document.createEvent("CustomEvent");
    c.initCustomEvent(a, !1, !0, b);
    return c;
  }
  var Vy = function (a, b) {
    Iy.call(this);
    var c = this;
    this.h = b;
    this.A = this.j = this.g = 0;
    this.l = null;
    this.uri = new R(a);
    this.state = 0;
    var d;
    this.D = null == (d = this.h) ? void 0 : d.initialize();
    co(this, function () {
      bo(c.h);
    });
  };
  u(Vy, Iy);
  Vy.prototype.F = function () {
    return this.g;
  };
  Vy.prototype.B = function () {
    return 3 === this.state;
  };
  Vy.prototype.G = function (a) {
    1 === this.state
      ? ((this.g += a), (this.state = 2))
      : 0 === this.state && ((this.g += a), (this.state = 1), Wy(this));
  };
  var Wy = function (a) {
      Ha(function (b) {
        if (1 == b.g) return 2 === a.state && (a.state = 1), xa(b, Xy(a), 4);
        var c = 3 < a.A;
        if (c) {
          null === a.l && (a.l = 400);
          var d = Uy("media_source_error", {
            code:
              0 < a.j
                ? MediaError.MEDIA_ERR_NETWORK
                : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
            message:
              'Response code "' +
              a.l +
              '" with ' +
              a.g +
              " bytes requested and " +
              a.j +
              " bytes loaded",
          });
          a.dispatchEvent(d);
        }
        a.j < a.g && 3 !== a.state && !c
          ? (b.g = 1)
          : (3 !== a.state && (a.state = 0), (b.g = 0));
      });
    },
    Xy = function (a) {
      var b;
      return Ha(function (c) {
        switch (c.g) {
          case 1:
            b = a.j + "-" + (a.g - 1);
            xw(a.uri, "range", b);
            if (!a.h) {
              c.g = 2;
              break;
            }
            return xa(c, a.D, 3);
          case 3:
            return c.return(Yy(a));
          case 2:
            return (c.j = 4), xa(c, Zy(a), 6);
          case 6:
            ya(c);
            break;
          case 4:
            za(c), a.A++, (c.g = 0);
        }
      });
    },
    Yy = function (a) {
      var b;
      return Ha(function (c) {
        switch (c.g) {
          case 1:
            return a.h ? xa(c, a.h.Nb(a.uri), 2) : c.return(Promise.reject());
          case 2:
            if ((b = c.h))
              return b.va && (a.state = 3), $y(a, b.video), c.return();
            c.j = 3;
            return xa(c, Zy(a), 5);
          case 5:
            ya(c);
            break;
          case 3:
            za(c), a.A++, (c.g = 0);
        }
      });
    },
    Zy = function (a) {
      var b, c, d, e, f, g, h;
      return Ha(function (k) {
        if (1 == k.g)
          return (b = 0), (c = a.g - a.j), xa(k, fetch(a.uri.toString()), 2);
        d = k.h;
        if (400 <= d.status)
          return (
            I(G.g(), "lvlfes", d.status.toString()),
            (a.l = d.status),
            k.return(Promise.reject())
          );
        f = null == (e = d.body) ? void 0 : e.getReader();
        if (!f) return J("lvlmr"), (a.l = d.status), k.return(Promise.reject());
        g = [];
        h = function () {
          var m, n, q, r, v, x;
          return Ha(function (H) {
            if (1 == H.g) return xa(H, f.read(), 2);
            m = H.h;
            n = m.done;
            q = m.value;
            if (n) return (r = b < c), az(a, g, r), H.return();
            g.push(q);
            b += null == (v = q) ? void 0 : v.length;
            $y(a, null == (x = q) ? void 0 : x.buffer);
            return xa(H, h(), 0);
          });
        };
        return xa(k, h(), 0);
      });
    },
    az = function (a, b, c) {
      c && ((a.state = 3), $y(a, new ArrayBuffer(0)));
      var d = new Uint8Array(
          b.reduce(function (g, h) {
            return g + h.length;
          }, 0)
        ),
        e = 0;
      b = t(b);
      for (var f = b.next(); !f.done; f = b.next())
        (f = f.value), d.set(f, e), (e += f.length);
      a.h && 0 < d.buffer.byteLength && a.h.dc(d.buffer, a.uri, 0, c);
    },
    $y = function (a, b) {
      null !== b &&
        ((b = b.slice(0)),
        (a.j += b.byteLength),
        a.dispatchEvent({ type: "progress", cd: b }));
    };
  Vy.prototype.L = function () {
    var a;
    (null == (a = this.h) ? 0 : a.Qa()) && this.h.close();
    Iy.prototype.L.call(this);
  };
  var cz = function (a) {
      this.uri = a;
      this.g = bz(a);
    },
    bz = function (a) {
      return new Map(
        a.j.split("/").reduce(function (b, c, d, e) {
          d % 2 && b.set(e[d - 1], c);
          return b;
        }, new Map())
      );
    };
  cz.prototype.getId = function () {
    return dz(this, "id");
  };
  var ez = function (a) {
      a = a.uri.g.get("range");
      if (!a) return null;
      a = a.split("-")[0];
      return !a || isNaN(Number(a)) ? null : Number(a);
    },
    dz = function (a, b) {
      var c = a.uri.g.get(b);
      return c ? c : (a = a.g.get(b)) ? a : null;
    };
  var fz = function () {};
  var gz = ["doubleclick.net"];
  function hz() {
    if (Jb() || z("iPad") || z("iPod")) return !1;
    if (Ib()) {
      if (void 0 === Fw) {
        a: {
          if (void 0 === Dw) {
            if (Hw) {
              var a = pb(Gw(), "Safari");
              var b = new R(window.location.href).g.zb("js");
              b: {
                if (
                  (b = b.length ? b[0] : "") &&
                  0 == b.lastIndexOf("afma-", 0)
                ) {
                  var c = b.lastIndexOf("v");
                  if (
                    -1 < c &&
                    (b = b
                      .substr(c + 1)
                      .match(/^(\d+\.\d+\.\d+|^\d+\.\d+|^\d+)(-.*)?$/))
                  ) {
                    b = b[1];
                    break b;
                  }
                }
                b = "0.0.0";
              }
              if (!a || "0.0.0" !== b) {
                a = Dw = !0;
                break a;
              }
            }
            Dw = !1;
          }
          a = Dw;
        }
        a ||
          (void 0 === Ew && (Ew = pb(Gw(), "afma-sdk-a") ? !0 : !1), (a = Ew));
        Fw = a;
      }
      return Fw ? !0 : oh() ? !1 : iz();
    }
    a =
      Kb() ||
      (Hb() ? "Linux" === wb.platform : z("Linux")) ||
      (Hb() ? "Windows" === wb.platform : z("Windows")) ||
      (Hb() ? "Chrome OS" === wb.platform : z("CrOS"));
    return (K(Lk) || K(Jk) || K(Kk)) && a && Gb() ? iz() : !1;
  }
  function iz() {
    var a = !1,
      b = new R(window.location.href).h;
    gz.forEach(function (c) {
      b.includes(c) && (a = !0);
    });
    return a;
  }
  var jz,
    mz = function (a, b, c) {
      if ("number" === typeof a) var d = { name: kz(a) };
      else (d = a), (a = lz(a.name));
      this.code = a;
      this.g = d;
      b = "Error " + b + ": " + this.getName();
      c && (b += ", " + c);
      db.call(this, b);
    };
  bb(mz, db);
  mz.prototype.getName = function () {
    return this.g.name || "";
  };
  var nz = {
      hf: 1,
      yh: 2,
      NOT_FOUND_ERR: 3,
      Me: 4,
      Pe: 5,
      zh: 6,
      gf: 7,
      ABORT_ERR: 8,
      cf: 9,
      Th: 10,
      TIMEOUT_ERR: 11,
      bf: 12,
      INVALID_ACCESS_ERR: 13,
      INVALID_STATE_ERR: 14,
    },
    oz = (w.g || w.h || nz).hf,
    pz = (w.g || w.h || nz).NOT_FOUND_ERR,
    qz = (w.g || w.h || nz).Me,
    rz = (w.g || w.h || nz).Pe,
    sz = (w.g || w.h || nz).gf,
    tz = (w.g || w.h || nz).ABORT_ERR,
    uz = (w.g || w.h || nz).cf,
    vz = (w.g || w.h || nz).TIMEOUT_ERR,
    wz = (w.g || w.h || nz).bf,
    xz = (w.DOMException || nz).INVALID_ACCESS_ERR,
    yz = (w.DOMException || nz).INVALID_STATE_ERR,
    lz = function (a) {
      switch (a) {
        case "UnknownError":
          return oz;
        case "NotFoundError":
          return pz;
        case "ConstraintError":
          return qz;
        case "DataError":
          return rz;
        case "TransactionInactiveError":
          return sz;
        case "AbortError":
          return tz;
        case "ReadOnlyError":
          return uz;
        case "TimeoutError":
          return vz;
        case "QuotaExceededError":
          return wz;
        case "InvalidAccessError":
          return xz;
        case "InvalidStateError":
          return yz;
        default:
          return oz;
      }
    },
    kz = function (a) {
      switch (a) {
        case oz:
          return "UnknownError";
        case pz:
          return "NotFoundError";
        case qz:
          return "ConstraintError";
        case rz:
          return "DataError";
        case sz:
          return "TransactionInactiveError";
        case tz:
          return "AbortError";
        case uz:
          return "ReadOnlyError";
        case vz:
          return "TimeoutError";
        case wz:
          return "QuotaExceededError";
        case xz:
          return "InvalidAccessError";
        case yz:
          return "InvalidStateError";
        default:
          return "UnknownError";
      }
    },
    zz = function (a, b) {
      return "error" in a
        ? new mz(a.error, b)
        : new mz({ name: "UnknownError" }, b);
    },
    Az = function (a, b) {
      return "name" in a
        ? new mz(a, b + ": " + a.message)
        : new mz({ name: "UnknownError" }, b);
    };
  var Bz = function (a) {
      this.g = a;
    },
    Cz = w.IDBKeyRange || w.webkitIDBKeyRange;
  function Dz() {} /*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
  var Ez = function (a, b) {
    this.l = [];
    this.G = a;
    this.F = b || null;
    this.o = this.j = !1;
    this.h = void 0;
    this.K = this.H = this.B = !1;
    this.A = 0;
    this.g = null;
    this.I = 0;
  };
  bb(Ez, Dz);
  Ez.prototype.cancel = function (a) {
    if (this.j) this.h instanceof Ez && this.h.cancel();
    else {
      if (this.g) {
        var b = this.g;
        delete this.g;
        a ? b.cancel(a) : (b.I--, 0 >= b.I && b.cancel());
      }
      this.G ? this.G.call(this.F, this) : (this.K = !0);
      this.j || Fz(this, new Gz(this));
    }
  };
  Ez.prototype.D = function (a, b) {
    this.B = !1;
    Hz(this, a, b);
  };
  var Hz = function (a, b, c) {
      a.j = !0;
      a.h = c;
      a.o = !b;
      Iz(a);
    },
    Kz = function (a) {
      if (a.j) {
        if (!a.K) throw new Jz(a);
        a.K = !1;
      }
    };
  Ez.prototype.callback = function (a) {
    Kz(this);
    Hz(this, !0, a);
  };
  var Fz = function (a, b) {
    Kz(a);
    Hz(a, !1, b);
  };
  Ez.prototype.Yc = function (a) {
    return Lz(this, a, null);
  };
  var Lz = function (a, b, c, d) {
    a.l.push([b, c, d]);
    a.j && Iz(a);
    return a;
  };
  Ez.prototype.then = function (a, b, c) {
    var d,
      e,
      f = new gt(function (g, h) {
        e = g;
        d = h;
      });
    Lz(
      this,
      e,
      function (g) {
        g instanceof Gz ? f.cancel() : d(g);
        return Mz;
      },
      this
    );
    return f.then(a, b, c);
  };
  Ez.prototype.$goog_Thenable = !0;
  var Nz = function (a) {
      return Rb(a.l, function (b) {
        return "function" === typeof b[1];
      });
    },
    Mz = {},
    Iz = function (a) {
      if (a.A && a.j && Nz(a)) {
        var b = a.A,
          c = Oz[b];
        c && (w.clearTimeout(c.g), delete Oz[b]);
        a.A = 0;
      }
      a.g && (a.g.I--, delete a.g);
      b = a.h;
      for (var d = (c = !1); a.l.length && !a.B; ) {
        var e = a.l.shift(),
          f = e[0],
          g = e[1];
        e = e[2];
        if ((f = a.o ? g : f))
          try {
            var h = f.call(e || a.F, b);
            h === Mz && (h = void 0);
            void 0 !== h &&
              ((a.o = a.o && (h == b || h instanceof Error)), (a.h = b = h));
            if (
              et(b) ||
              ("function" === typeof w.Promise && b instanceof w.Promise)
            )
              (d = !0), (a.B = !0);
          } catch (k) {
            (b = k), (a.o = !0), Nz(a) || (c = !0);
          }
      }
      a.h = b;
      d &&
        ((h = Za(a.D, a, !0)),
        (d = Za(a.D, a, !1)),
        b instanceof Ez ? (Lz(b, h, d), (b.H = !0)) : b.then(h, d));
      c && ((b = new Pz(b)), (Oz[b.g] = b), (a.A = b.g));
    },
    Jz = function () {
      db.call(this);
    };
  bb(Jz, db);
  Jz.prototype.message = "Deferred has already fired";
  Jz.prototype.name = "AlreadyCalledError";
  var Gz = function () {
    db.call(this);
  };
  bb(Gz, db);
  Gz.prototype.message = "Deferred was canceled";
  Gz.prototype.name = "CanceledError";
  var Pz = function (a) {
    this.g = w.setTimeout(Za(this.j, this), 0);
    this.h = a;
  };
  Pz.prototype.j = function () {
    delete Oz[this.g];
    throw this.h;
  };
  var Oz = {};
  var Qz = function () {
    Q.call(this);
  };
  bb(Qz, Q);
  Qz.prototype.g = null;
  Qz.prototype.next = function (a) {
    if (a) this.g["continue"](a);
    else this.g["continue"]();
  };
  Qz.prototype.remove = function () {
    var a = new Ez();
    try {
      var b = this.g["delete"]();
    } catch (c) {
      return Fz(a, Az(c, "deleting via cursor")), a;
    }
    b.onsuccess = function () {
      a.callback();
    };
    b.onerror = function (c) {
      Fz(a, zz(c.target, "deleting via cursor"));
    };
    return a;
  };
  Qz.prototype.getValue = function () {
    return this.g.value;
  };
  var Rz = function (a, b) {
    var c = new Qz();
    try {
      var d = a.openCursor(b ? b.g : null);
    } catch (e) {
      throw (c.W(), Az(e, a.name));
    }
    d.onsuccess = function (e) {
      c.g = e.target.result || null;
      c.g ? c.dispatchEvent("n") : c.dispatchEvent("c");
    };
    d.onerror = function () {
      c.dispatchEvent("e");
    };
    return c;
  };
  var Sz = function (a) {
    this.g = a;
  };
  Sz.prototype.getName = function () {
    return this.g.name;
  };
  var Tz = function (a, b, c) {
    var d = new Ez();
    try {
      var e = a.g.get(c);
    } catch (f) {
      return (b += " with key " + zh(c)), Fz(d, Az(f, b)), d;
    }
    e.onsuccess = function (f) {
      d.callback(f.target.result);
    };
    e.onerror = function (f) {
      b += " with key " + zh(c);
      Fz(d, zz(f.target, b));
    };
    return d;
  };
  Sz.prototype.get = function (a) {
    return Tz(this, "getting from index " + this.getName(), a);
  };
  var Uz = function (a, b) {
    return Rz(a.g, b);
  };
  var Vz = function (a) {
    this.g = a;
  };
  Vz.prototype.getName = function () {
    return this.g.name;
  };
  var Wz = function (a, b, c, d, e) {
      var f = new Ez();
      try {
        var g = e ? a.g[b](d, e) : a.g[b](d);
      } catch (h) {
        return (
          (c += zh(d)), e && (c += ", with key " + zh(e)), Fz(f, Az(h, c)), f
        );
      }
      g.onsuccess = function (h) {
        f.callback(h.target.result);
      };
      g.onerror = function (h) {
        c += zh(d);
        e && (c += ", with key " + zh(e));
        Fz(f, zz(h.target, c));
      };
      return f;
    },
    Xz = function (a, b) {
      return Wz(a, "put", "putting into " + a.getName() + " with value", b);
    };
  Vz.prototype.add = function (a, b) {
    return Wz(
      this,
      "add",
      "adding into " + this.getName() + " with value ",
      a,
      b
    );
  };
  Vz.prototype.remove = function (a) {
    var b = new Ez();
    try {
      var c = this.g["delete"](a instanceof Bz ? a.g : a);
    } catch (e) {
      return (
        (c = "removing from " + this.getName() + " with key " + zh(a)),
        Fz(b, Az(e, c)),
        b
      );
    }
    c.onsuccess = function () {
      b.callback();
    };
    var d = this;
    c.onerror = function (e) {
      var f = "removing from " + d.getName() + " with key " + zh(a);
      Fz(b, zz(e.target, f));
    };
    return b;
  };
  Vz.prototype.get = function (a) {
    var b = new Ez();
    try {
      var c = this.g.get(a);
    } catch (e) {
      return (
        (c = "getting from " + this.getName() + " with key " + zh(a)),
        Fz(b, Az(e, c)),
        b
      );
    }
    c.onsuccess = function (e) {
      b.callback(e.target.result);
    };
    var d = this;
    c.onerror = function (e) {
      var f = "getting from " + d.getName() + " with key " + zh(a);
      Fz(b, zz(e.target, f));
    };
    return b;
  };
  Vz.prototype.clear = function () {
    var a = "clearing store " + this.getName(),
      b = new Ez();
    try {
      var c = this.g.clear();
    } catch (d) {
      return Fz(b, Az(d, a)), b;
    }
    c.onsuccess = function () {
      b.callback();
    };
    c.onerror = function (d) {
      Fz(b, zz(d.target, a));
    };
    return b;
  };
  var Yz = function (a) {
    try {
      return new Sz(a.g.index("timestamp"));
    } catch (b) {
      throw Az(b, "getting index timestamp");
    }
  };
  var Zz = function (a, b) {
    Q.call(this);
    this.g = a;
    this.j = b;
    this.h = new rx(this);
    this.h.O(this.g, "complete", Za(this.dispatchEvent, this, "complete"));
    this.h.O(this.g, "abort", Za(this.dispatchEvent, this, "abort"));
    this.h.O(this.g, "error", this.Re);
  };
  bb(Zz, Q);
  l = Zz.prototype;
  l.Re = function (a) {
    a.target instanceof mz
      ? this.dispatchEvent({ type: "error", target: a.target })
      : this.dispatchEvent({
          type: "error",
          target: zz(a.target, "in transaction"),
        });
  };
  l.objectStore = function (a) {
    try {
      return new Vz(this.g.objectStore(a));
    } catch (b) {
      throw Az(b, "getting object store " + a);
    }
  };
  l.commit = function (a) {
    if (this.g.commit || !a)
      try {
        this.g.commit();
      } catch (b) {
        throw Az(b, "cannot commit the transaction");
      }
  };
  l.wait = function () {
    var a = new Ez();
    Gs(this, "complete", Za(a.callback, a));
    var b = Gs(this, "abort", function () {
      Ps(c);
      Fz(a, new mz(tz, "waiting for transaction to complete"));
    });
    var c = Gs(this, "error", function (e) {
      Ps(b);
      Fz(a, e.target);
    });
    var d = this.j;
    return a.Yc(function () {
      return d;
    });
  };
  l.abort = function () {
    this.g.abort();
  };
  l.L = function () {
    Zz.Da.L.call(this);
    this.h.W();
  };
  var $z = function (a) {
    Q.call(this);
    this.g = a;
    this.h = new rx(this);
    this.h.O(this.g, "abort", Za(this.dispatchEvent, this, "abort"));
    this.h.O(this.g, "error", this.Se);
    this.h.O(this.g, "versionchange", this.wf);
    this.h.O(this.g, "close", Za(this.dispatchEvent, this, "close"));
  };
  bb($z, Q);
  l = $z.prototype;
  l.td = !0;
  l.Se = function (a) {
    a = (a = a.target) && a.error;
    this.dispatchEvent({ type: "error", errorCode: a && a.severity });
  };
  l.wf = function (a) {
    this.dispatchEvent(new aA(a.oldVersion, a.newVersion));
  };
  l.close = function () {
    this.td && (this.g.close(), (this.td = !1));
  };
  l.Qa = function () {
    return this.td;
  };
  l.getName = function () {
    return this.g.name;
  };
  l.getVersion = function () {
    return Number(this.g.version);
  };
  var bA = function (a) {
    var b = ["MediaSourceVideoChunk"];
    try {
      var c = a.g.transaction(b, "readwrite");
      return new Zz(c, a);
    } catch (d) {
      throw Az(d, "creating transaction");
    }
  };
  $z.prototype.L = function () {
    $z.Da.L.call(this);
    this.h.W();
  };
  var aA = function (a, b) {
    qs.call(this, "versionchange");
    this.oldVersion = a;
    this.newVersion = b;
  };
  bb(aA, qs);
  var cA = function (a) {
    var b = new Ez();
    void 0 == jz &&
      (jz =
        w.indexedDB || w.mozIndexedDB || w.webkitIndexedDB || w.moz_indexedDB);
    var c = jz.open("IndexedDbVideoChunkPersistentStorage", 6);
    c.onsuccess = function (d) {
      d = new $z(d.target.result);
      b.callback(d);
    };
    c.onerror = function (d) {
      Fz(
        b,
        zz(d.target, "opening database IndexedDbVideoChunkPersistentStorage")
      );
    };
    c.onupgradeneeded = function (d) {
      if (a) {
        var e = new $z(d.target.result);
        a(
          new aA(d.oldVersion, d.newVersion),
          e,
          new Zz(d.target.transaction, e)
        );
      }
    };
    c.onblocked = function () {};
    return b;
  };
  var dA = function () {
    Q.apply(this, arguments);
    this.g = null;
  };
  u(dA, Q);
  dA.prototype.initialize = function () {
    var a = this;
    return Promise.resolve(cA(this.h)).then(
      function (b) {
        a.g = b;
      },
      function (b) {
        I(G.g(), "codf", b.message);
      }
    );
  };
  dA.prototype.Qa = function () {
    return null !== this.g && this.g.Qa();
  };
  dA.prototype.close = function () {
    var a = this;
    return new Promise(function (b) {
      eA(a, b);
    })
      .then(function () {
        return fA();
      })
      .then(function () {
        a.g.close();
      });
  };
  var fA = function () {
    var a;
    return (null == (a = navigator.storage) ? 0 : a.estimate)
      ? navigator.storage.estimate().then(function (b) {
          I(G.g(), "csue", String(b.usage));
        })
      : Promise.resolve(void 0);
  };
  dA.prototype.Nb = function (a) {
    return (a = gA(a, 0)) ? hA(this, iA(a), a.Cc) : Promise.resolve(null);
  };
  dA.prototype.dc = function (a, b, c, d) {
    (b = gA(b, c))
      ? ((c = b.Kd),
        jA(this, {
          hi: iA(b),
          Kd: c,
          tc: c + a.byteLength - 1,
          Cc: b.Cc,
          timestamp: new Date(Date.now()),
          va: d,
          sb: b.sb,
          video: a,
        }))
      : Promise.resolve(void 0);
  };
  dA.prototype.h = function (a, b) {
    if (b.g.objectStoreNames.contains("MediaSourceVideoChunk"))
      try {
        b.g.deleteObjectStore("MediaSourceVideoChunk");
      } catch (d) {
        throw Az(d, "deleting object store MediaSourceVideoChunk");
      }
    a = { keyPath: "cacheId" };
    try {
      var c = new Vz(b.g.createObjectStore("MediaSourceVideoChunk", a));
    } catch (d) {
      throw Az(d, "creating object store MediaSourceVideoChunk");
    }
    b = { unique: !1 };
    try {
      c.g.createIndex("timestamp", "timestamp", b);
    } catch (d) {
      throw Az(d, "creating new index timestamp with key path timestamp");
    }
  };
  var eA = function (a, b) {
      var c = new Date(Date.now());
      c.setDate(c.getDate() - 30);
      c = new Bz(Cz.upperBound(c, void 0));
      var d = Uz(Yz(bA(a.g).objectStore("MediaSourceVideoChunk")), c),
        e = d.O("n", function () {
          d.remove();
          d.next();
        });
      Gs(d, "c", function () {
        Ps(e);
        b();
      });
    },
    gA = function (a, b) {
      var c = new cz(a);
      a = c.getId();
      var d = dz(c, "itag"),
        e = dz(c, "source"),
        f = dz(c, "lmt");
      c = ez(c);
      var g = [];
      a
        ? d
          ? e
            ? f
              ? null === c && g.push("startIndex")
              : g.push("lmt")
            : g.push("source")
          : g.push("itag")
        : g.push("videoId");
      return 0 < g.length
        ? (I(G.g(), "civp", g.join("-")), null)
        : { tg: a, sb: d, source: e, Cc: f, Kd: c + b };
    },
    iA = function (a) {
      for (
        var b = [a.tg, a.source, a.Kd].join(), c = 0, d = 0;
        d < b.length;
        d++
      )
        c = (Math.imul(31, c) + b.charCodeAt(d)) | 0;
      return c.toString() + "," + a.sb;
    },
    hA = function (a, b, c) {
      var d = bA(a.g).objectStore("MediaSourceVideoChunk");
      return Promise.resolve(d.get(b)).then(
        function (e) {
          if (!e) return I(G.g(), "cenf", "1"), null;
          if (e.Cc !== c)
            return (
              I(G.g(), "cdl", "1"),
              d.remove(b).then(null, function (f) {
                I(G.g(), "crdlvf", f.message);
              }),
              null
            );
          I(G.g(), "cefml", "1");
          return { sb: e.sb, tc: e.tc, va: e.va, video: e.video };
        },
        function (e) {
          I(G.g(), "cgvf", e.message);
          return null;
        }
      );
    },
    jA = function (a, b) {
      a = bA(a.g).objectStore("MediaSourceVideoChunk");
      Promise.resolve(Xz(a, b)).then(
        function () {
          I(G.g(), "cavs", "1");
        },
        function (c) {
          I(G.g(), "cavf", c.message);
        }
      );
    };
  var kA = function (a) {
    Iy.call(this);
    var b = this;
    this.D = this.h = this.g = 0;
    this.l = this.H = null;
    this.uri = new R(a);
    this.state = 0;
    this.j = (this.A = hz()) ? Mv(dA) : null;
    co(this, function () {
      bo(b.j);
    });
    this.H = this.A ? this.j.initialize() : null;
  };
  u(kA, Iy);
  kA.prototype.F = function () {
    return this.g;
  };
  kA.prototype.B = function () {
    return 3 === this.state;
  };
  kA.prototype.G = function (a) {
    1 === this.state
      ? ((this.g += a), (this.state = 2))
      : 0 === this.state && ((this.g += a), (this.state = 1), lA(this));
  };
  var lA = function (a) {
      Ha(function (b) {
        if (1 == b.g) return 2 === a.state && (a.state = 1), xa(b, mA(a), 4);
        var c = 3 < a.D;
        if (c && null !== a.l) {
          var d = Uy("media_source_error", {
            code:
              0 < a.h
                ? MediaError.MEDIA_ERR_NETWORK
                : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
            message:
              'Response code "' +
              a.l +
              '" with ' +
              a.g +
              " bytes requested and " +
              a.h +
              " bytes loaded",
          });
          a.dispatchEvent(d);
        }
        a.h < a.g && 3 !== a.state && !c
          ? (b.g = 1)
          : (3 !== a.state && (a.state = 0), (b.g = 0));
      });
    },
    mA = function (a) {
      var b;
      return Ha(function (c) {
        switch (c.g) {
          case 1:
            b = a.h + "-" + (a.g - 1);
            xw(a.uri, "range", b);
            if (!a.A) {
              c.g = 2;
              break;
            }
            return xa(c, a.H, 3);
          case 3:
            return c.return(nA(a));
          case 2:
            return (c.j = 4), xa(c, oA(a), 6);
          case 6:
            ya(c);
            break;
          case 4:
            za(c), a.D++, (c.g = 0);
        }
      });
    },
    nA = function (a) {
      var b;
      return Ha(function (c) {
        switch (c.g) {
          case 1:
            return xa(c, a.j.Nb(a.uri), 2);
          case 2:
            if ((b = c.h)) {
              b.va && (a.state = 3);
              pA(a, b.video, 0);
              c.g = 0;
              break;
            }
            c.j = 4;
            return xa(c, oA(a), 6);
          case 6:
            ya(c);
            break;
          case 4:
            za(c), a.D++, (c.g = 0);
        }
      });
    },
    oA = function (a) {
      return new Promise(function (b, c) {
        var d = new XMLHttpRequest(),
          e = 0,
          f = a.g - a.h;
        d.addEventListener("load", function () {
          J("lvlcl");
          if (400 <= d.status)
            return (
              I(G.g(), "lvlxes", d.status.toString()), (a.l = d.status), c()
            );
          var g = d.response;
          g.byteLength < f && (a.state = 3);
          var h = pA(a, g, e);
          e += h;
          a.A && 0 < g.byteLength && a.j.dc(g, a.uri, 0, g.byteLength < f);
          b();
        });
        d.addEventListener("timeout", function () {
          J("lvlct");
          a.l = d.status;
          c();
        });
        d.addEventListener("error", function () {
          J("lvlce");
          a.l = d.status;
          c();
        });
        d.addEventListener("progress", function () {
          if (400 <= d.status) a.l = d.status;
          else {
            var g = pA(a, d.response, e);
            e += g;
          }
        });
        d.responseType = "arraybuffer";
        d.open("get", a.uri.toString());
        d.send(null);
      });
    },
    pA = function (a, b, c) {
      if (null === b) return 0;
      b = b.slice(c);
      a.h += b.byteLength;
      a.dispatchEvent({ type: "progress", cd: b });
      return b.byteLength;
    };
  kA.prototype.L = function () {
    this.A && this.j.Qa() && this.j.close();
    Iy.prototype.L.call(this);
  };
  var qA = { ti: 2e5, ri: 7e4, Ga: 3e5, pi: 5e3, zi: 5e3, si: 6e3 };
  function rA() {
    return !!window.MediaSource;
  }
  function sA(a) {
    return [43, 44, 45].includes(a) && Ic
      ? !1
      : My[a]
      ? ((a = Ty(a)), !!a && rA() && MediaSource.isTypeSupported(a))
      : !1;
  }
  var tA = function () {};
  tA.prototype.Tf = function (a, b, c) {
    return 0 === c ? 1e6 : 5e3 > b - a ? 3e5 : 0;
  };
  var vA = function (a, b) {
      var c = this;
      this.g = a;
      this.index = b;
      this.h = [];
      this.g || J("msms_sbf" + this.index);
      this.g.addEventListener("updateend", function () {
        uA(c);
      });
      this.g.addEventListener("error", function () {
        J("msms_sbe" + c.index);
      });
    },
    uA = function (a) {
      if (0 < a.h.length && !a.g.updating) {
        var b = a.h.shift();
        a.g.appendBuffer(b);
      }
    };
  var wA = function () {
    this.g = this.cache = null;
  };
  l = wA.prototype;
  l.initialize = function () {
    var a = this;
    return window.caches.open("CACHE_VIDEO_CHUNK_PERSISTENT_STORAGE").then(
      function (b) {
        a.cache = b;
      },
      function (b) {
        I(G.g(), "codf", b.message);
      }
    );
  };
  l.Qa = function () {
    return null !== this.cache;
  };
  l.close = function () {
    return Promise.resolve();
  };
  l.Nb = function (a) {
    var b = this;
    a = xA(this, a);
    return this.Qa() && a
      ? this.cache.match(a).then(
          function (c) {
            if (!c) return I(G.g(), "cenf", "1"), Promise.resolve(null);
            I(G.g(), "cef", "1");
            return c.arrayBuffer().then(function (d) {
              var e = ez(b.g),
                f;
              (f = b.g.uri.g.get("range"))
                ? ((f = f.split("-")[1]),
                  (f = !f || isNaN(Number(f)) ? null : Number(f)))
                : (f = null);
              e = e + d.byteLength - 1;
              f = f > e;
              return { sb: dz(b.g, "itag"), tc: e, va: f, video: d };
            });
          },
          function (c) {
            I(G.g(), "cgvf", c.message);
            return Promise.resolve(null);
          }
        )
      : (I(G.g(), "cgvf", "1"), Promise.resolve(null));
  };
  l.dc = function (a, b) {
    b = xA(this, b);
    a = new Response(a);
    this.Qa() && b
      ? this.cache.put(b, a).then(
          function () {
            I(G.g(), "cavs", "1");
          },
          function (c) {
            I(G.g(), "cavf", c.message);
          }
        )
      : (I(G.g(), "cavf", "1"), Promise.resolve());
  };
  var xA = function (a, b) {
    a.g = new cz(b);
    b = a.g.getId();
    var c = dz(a.g, "itag"),
      d = dz(a.g, "source"),
      e = dz(a.g, "lmt");
    a = dz(a.g, "range");
    if (b && c && d && a)
      return new Request(
        "http://url/videoplayback?id=" +
          b +
          "&itag=" +
          c +
          "&source=" +
          d +
          "&lmt=" +
          e +
          "&range=" +
          a
      );
    I(G.g(), "civp", "1");
    return null;
  };
  var AA = function (a) {
    Q.call(this);
    var b = this;
    this.j = a;
    this.g = [];
    this.A = null;
    this.B = 0;
    this.J = !1;
    this.F = 0;
    this.D = [];
    if (K(bl)) {
      var c = null;
      hz() && (K(dl) ? (c = Mv(wA)) : (c = Mv(dA)));
      this.l = this.j.map(function (d) {
        return Mv(Vy, d.url, c);
      });
    } else
      this.l = this.j.map(function (d) {
        return Mv(kA, d.url);
      });
    this.h = Mv(MediaSource);
    this.G = function () {
      yA(b);
    };
    this.h.addEventListener("sourceopen", this.G);
    this.H = zA(this);
  };
  u(AA, Q);
  var zA = function (a) {
      for (var b = [], c = 0; c < a.j.length; ++c) b.push(new tA());
      return b;
    },
    yA = function (a) {
      J("msms_oso");
      for (
        var b = { xa: 0 };
        b.xa < a.j.length;
        b = { Bd: void 0, Dc: void 0, kb: void 0, xa: b.xa, Ec: void 0 }, ++b.xa
      ) {
        var c = a.j[b.xa];
        I(G.g(), "msms_mime" + b.xa, c.mimeType);
        I(G.g(), "msms_cs" + b.xa, c.Ga.toString());
        K(cl)
          ? ((b.Bd = new vA(a.h.addSourceBuffer(c.mimeType), b.xa)),
            (b.Dc = a.l[b.xa]),
            b.Dc.O(
              "progress",
              (function (d) {
                return function (e) {
                  var f = d.Bd,
                    g = d.Dc;
                  e = e.cd;
                  0 !== e.byteLength && (f.h.push(e), uA(f));
                  g.B() && (a.B++, a.B === a.g.length && BA(a));
                };
              })(b)
            ),
            b.Dc.O("media_source_error", function (d) {
              a.dispatchEvent(d);
            }),
            a.g.push(b.Bd.g))
          : ((b.kb = a.h.addSourceBuffer(c.mimeType)),
            b.kb
              ? ((b.Ec = a.l[b.xa]),
                K(bl) &&
                  b.kb.addEventListener(
                    "updateend",
                    (function (d) {
                      return function () {
                        if (0 < a.D.length && !d.kb.updating) {
                          var e = a.D.shift();
                          d.kb.appendBuffer(e);
                        }
                      };
                    })(b)
                  ),
                b.kb.addEventListener(
                  "error",
                  (function (d) {
                    return function () {
                      J("msms_sbe" + d.xa);
                    };
                  })(b)
                ),
                b.Ec.O(
                  "progress",
                  (function (d) {
                    return function (e) {
                      var f = d.kb,
                        g = d.Ec;
                      e = e.cd;
                      0 !== e.byteLength &&
                        (K(bl)
                          ? f.updating
                            ? a.D.push(e)
                            : f.appendBuffer(e)
                          : f.appendBuffer(e));
                      g.B() && (a.B++, a.B === a.g.length && BA(a));
                    };
                  })(b)
                ),
                b.Ec.O("media_source_error", function (d) {
                  a.dispatchEvent(d);
                }),
                a.g.push(b.kb))
              : J("msms_sbf" + b.xa));
      }
      I(G.g(), "msms_ns", a.g.length.toString());
      a.J = !0;
      CA(a);
    },
    BA = function (a) {
      Promise.all(
        a.g.map(function (b) {
          return new Promise(function (c) {
            b.updating
              ? b.addEventListener("updateend", function () {
                  c();
                })
              : c();
          });
        })
      ).then(function () {
        a.h.endOfStream();
      });
    },
    CA = function (a) {
      if (a.J)
        for (var b = 0; b < a.j.length; ++b) {
          var c = a.l[b],
            d = a.g[b];
          d = 0 === d.buffered.length ? 0 : 1e3 * d.buffered.end(0);
          d = a.H[b].Tf(a.F, d, c.F());
          0 !== d && c.G(d);
        }
    },
    DA = function (a) {
      a.A = Dh(a.h).toString();
      return a.A;
    };
  AA.prototype.L = function () {
    this.A && window.URL.revokeObjectURL(this.A);
    for (var a = t(this.l), b = a.next(); !b.done; b = a.next()) b.value.W();
    this.h.removeEventListener("sourceopen", this.G);
    Q.prototype.L.call(this);
  };
  AA.prototype.Tc = function (a) {
    this.H.filter(function () {
      return !1;
    })
      .map(function (b) {
        return b;
      })
      .forEach(function (b) {
        b.g = Object.assign({}, qA, b.g, a);
      });
  };
  var EA = RegExp(
      "/pagead/conversion|/pagead/adview|/pagead/gen_204|/activeview?|csi.gstatic.com/csi|google.com/pagead/xsul|google.com/ads/measurement/l|googleads.g.doubleclick.net/pagead/ide_cookie|googleads.g.doubleclick.net/xbbe/pixel"
    ),
    FA = RegExp("outstream.min.js"),
    GA = RegExp("outstream.min.css"),
    HA = RegExp("fonts.gstatic.com"),
    IA = RegExp(
      "googlevideo.com/videoplayback|c.2mdn.net/videoplayback|gcdn.2mdn.net/videoplayback"
    ),
    JA = RegExp("custom.elements.min.js");
  function KA(a, b) {
    var c = 0,
      d = 0,
      e = 0,
      f = 0,
      g = 0,
      h = 0,
      k = 0,
      m = !1,
      n = !1;
    if (
      "function" === typeof Ma("performance.getEntriesByType", w) &&
      "transferSize" in w.PerformanceResourceTiming.prototype
    ) {
      var q = w.performance.getEntriesByType("resource");
      q = t(q);
      for (var r = q.next(); !r.done; r = q.next())
        (r = r.value),
          EA.test(r.name) ||
            ((f += 1),
            r.transferSize
              ? ((c += r.transferSize),
                r.encodedBodySize &&
                  r.transferSize < r.encodedBodySize &&
                  ((h += 1),
                  (e += r.encodedBodySize),
                  FA.test(r.name) && (m = !0),
                  GA.test(r.name) && (n = !0)),
                IA.test(r.name) && (d += r.transferSize))
              : 0 === r.transferSize && 0 === r.encodedBodySize
              ? JA.test(r.name)
                ? (c += 6686)
                : HA.test(r.name) ||
                  ((k += 1),
                  kj(G.g(), {
                    event_name: "unmeasurable_asset",
                    resource_name: r.name,
                    encoded_body_size: r.encodedBodySize,
                    transfer_size: r.transferSize,
                  }))
              : ((g += 1),
                (e += r.encodedBodySize),
                FA.test(r.name) && (m = !0),
                GA.test(r.name) && (n = !0)));
      q = 0;
      if (a.duration) {
        for (r = 0; r < a.buffered.length; r++)
          q += a.buffered.end(r) - a.buffered.start(r);
        q = Math.min(q, a.duration);
      }
      kj(G.g(), {
        event_name: b,
        asset_bytes: c,
        video_bytes: d,
        cached_data_bytes: e,
        js_cached: m,
        css_cached: n,
        num_assets: f,
        num_assets_cached: g,
        num_assets_cache_validated: h,
        num_assets_unmeasurable: k,
        video_played_seconds: a.currentTime.toFixed(2),
        video_muted: a.muted,
        video_seconds_loaded: q.toFixed(2),
      });
    } else I(G.g(), "error", "reporting_timing_not_supported");
  }
  var LA = function (a, b, c, d) {
    this.url = a;
    this.mimeType = b;
    this.Ga = c;
    this.g = void 0 === d ? null : d;
  };
  function MA(a) {
    var b = G.g(),
      c = a.getVideoPlaybackQuality && a.getVideoPlaybackQuality();
    c
      ? ((a = a.currentTime),
        I(b, "vqdf", String(c.droppedVideoFrames)),
        I(b, "vqtf", String(c.totalVideoFrames)),
        I(b, "vqfr", String(Math.round(c.totalVideoFrames / a))))
      : I(b, "vqu", "1");
  }
  var NA = function (a) {
    this.g = a;
  };
  NA.prototype.toString = function () {
    return this.g;
  };
  var OA = new NA("video_mute"),
    PA = new NA("video_caption_visibility");
  var QA = function (a) {
    P.call(this);
    this.A = 1;
    this.j = [];
    this.o = 0;
    this.g = [];
    this.h = {};
    this.D = !!a;
  };
  bb(QA, P);
  var RA = function (a, b, c) {
      var d = PA.toString(),
        e = a.h[d];
      e || (e = a.h[d] = []);
      var f = a.A;
      a.g[f] = d;
      a.g[f + 1] = b;
      a.g[f + 2] = c;
      a.A = f + 3;
      e.push(f);
    },
    SA = function (a, b, c) {
      var d = a.h[PA.toString()];
      if (d) {
        var e = a.g;
        (d = d.find(function (f) {
          return e[f + 1] == b && e[f + 2] == c;
        })) && a.l(d);
      }
    };
  QA.prototype.l = function (a) {
    var b = this.g[a];
    if (b) {
      var c = this.h[b];
      0 != this.o
        ? (this.j.push(a), (this.g[a + 1] = function () {}))
        : (c && Wb(c, a),
          delete this.g[a],
          delete this.g[a + 1],
          delete this.g[a + 2]);
    }
    return !!b;
  };
  QA.prototype.B = function (a, b) {
    var c = this.h[a];
    if (c) {
      for (
        var d = Array(arguments.length - 1), e = 1, f = arguments.length;
        e < f;
        e++
      )
        d[e - 1] = arguments[e];
      if (this.D)
        for (e = 0; e < c.length; e++) {
          var g = c[e];
          TA(this.g[g + 1], this.g[g + 2], d);
        }
      else {
        this.o++;
        try {
          for (e = 0, f = c.length; e < f && !this.ya(); e++)
            (g = c[e]), this.g[g + 1].apply(this.g[g + 2], d);
        } finally {
          if ((this.o--, 0 < this.j.length && 0 == this.o))
            for (; (c = this.j.pop()); ) this.l(c);
        }
      }
    }
  };
  var TA = function (a, b, c) {
    ct(function () {
      a.apply(b, c);
    });
  };
  QA.prototype.clear = function (a) {
    if (a) {
      var b = this.h[a];
      b && (b.forEach(this.l, this), delete this.h[a]);
    } else (this.g.length = 0), (this.h = {});
  };
  QA.prototype.L = function () {
    QA.Da.L.call(this);
    this.clear();
    this.j.length = 0;
  };
  var UA = function (a) {
    P.call(this);
    this.g = new QA(a);
    eo(this, this.g);
  };
  bb(UA, P);
  UA.prototype.clear = function (a) {
    this.g.clear(void 0 !== a ? a.toString() : void 0);
  };
  var VA = function (a) {
    a = void 0 === a ? null : a;
    P.call(this);
    this.g = new rx(this);
    eo(this, this.g);
    this.ub = a;
  };
  u(VA, P);
  var WA = function (a, b, c) {
    a.ub &&
      (RA(a.ub.g, b, c),
      co(a, function () {
        SA(a.ub.g, b, c);
      }));
  };
  var XA = function (a, b) {
    VA.call(this, b);
    WA(
      this,
      function (c) {
        c ? (a.g.mode = "showing") : a.fb();
      },
      this
    );
  };
  u(XA, VA);
  var YA = function () {
    Q.call(this);
    this.h = new rx(this);
    eo(this, this.h);
  };
  u(YA, Q);
  var $A = function (a, b, c) {
    c = void 0 === c ? !0 : c;
    YA.call(this);
    a.setAttribute("crossorigin", "anonymous");
    var d = ih("TRACK");
    d.setAttribute("kind", "captions");
    d.setAttribute("src", b);
    d.setAttribute("default", "");
    a.appendChild(d);
    this.g = a.textTracks[0];
    ZA(this);
    c ? (this.g.mode = "showing") : this.fb();
  };
  u($A, YA);
  var ZA = function (a) {
    var b = a.g;
    b.addEventListener(
      "cuechange",
      function () {
        for (var c = b.cues, d = 0; d < c.length; d++) {
          var e = c[d];
          e.align = "center";
          e.position = "auto";
        }
      },
      { once: !0 }
    );
  };
  $A.prototype.fb = function () {
    this.g.mode = "hidden";
  };
  function aB(a, b) {
    if ("undefined" !== typeof ReportingObserver) {
      var c = function (e) {
          e = t(e);
          for (var f = e.next(); !f.done; f = e.next())
            (f = f.value), a(f) && b(f);
        },
        d = new ReportingObserver(c, { buffered: !0 });
      w.addEventListener("pagehide", function () {
        c(d.takeRecords(), d);
        d.disconnect();
      });
      d.observe();
    }
  }
  function bB(a) {
    a = void 0 === a ? null : a;
    aB(
      function (b) {
        return b.body && "HeavyAdIntervention" === b.body.id;
      },
      function (b) {
        var c = b.body.message,
          d = G.g();
        I(d, "ham", c);
        c.includes("CPU")
          ? I(d, "hacpu", "true")
          : c.includes("network") && I(d, "habytes", "true");
        a && a(b);
      }
    );
  }
  var cB =
      "autoplay controls crossorigin demuxedaudiosrc demuxedvideosrc loop muted playsinline poster preload src webkit-playsinline x-webkit-airplay".split(
        " "
      ),
    dB =
      "autoplay buffered controls crossOrigin currentSrc currentTime defaultMuted defaultPlaybackRate disableRemotePlayback duration ended loop muted networkState onerror onwaitingforkey paused played playsinline poster preload preservesPitch mozPreservesPitch webkitPreservesPitch readyState seekable videoWidth videoHeight volume textTracks canPlayType captureStream getVideoPlaybackQuality load pause play setSinkId oncanplay oncanplaythrough onload onplay onpause onended onfullscreenchange onfullscreenerror addEventListener dispatchEvent removeEventListener requestFullscreen".split(
        " "
      ),
    eB = { childList: !0 },
    fB = !RegExp("^\\s*class\\s*\\{\\s*\\}\\s*$").test(
      function () {}.toString()
    ),
    gB = HTMLElement;
  fB &&
    ((gB = function () {
      var a = Object.getPrototypeOf(this).constructor;
      return w.Reflect.construct(HTMLElement, [], a);
    }),
    Object.setPrototypeOf(gB, HTMLElement),
    Object.setPrototypeOf(gB.prototype, HTMLElement.prototype));
  var hB = function (a) {
      if (null !== a) {
        a = t(a);
        for (var b = a.next(); !b.done; b = a.next())
          if (((b = b.value), b.nodeName === "TRACK".toString())) return b;
      }
      return null;
    },
    iB = function (a, b) {
      this.code = a;
      this.message = void 0 === b ? "" : b;
    },
    jB = function (a) {
      iB.call(
        this,
        MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
        void 0 === a ? "" : a
      );
    };
  u(jB, iB);
  var nB = function (a, b) {
    b = void 0 === b ? !1 : b;
    var c = gB.call(this) || this;
    I(G.g(), "ulv", "1");
    c.qg = b;
    c.qa = null;
    c.te = null;
    c.Zd = null;
    c.T = ih("VIDEO");
    kB(c);
    c.ub = a || new UA();
    lB(c);
    c.lc = null;
    mB(c);
    c.attachShadow({ mode: "open" });
    c.shadowRoot.appendChild(c.T);
    bB(function () {
      I(G.g(), "has", c.src || c.Za);
      I(G.g(), "hat", String(c.T.currentTime));
    });
    c.Rc = !1;
    c.ve = !1;
    c.Sb = null;
    c.Wc = null;
    c.rg = !1;
    c.ye = !1;
    c.ki = null;
    c.Ib = null;
    return c;
  };
  u(nB, gB);
  nB.prototype.attributeChangedCallback = function (a, b, c) {
    switch (a) {
      case "src":
        oB(this, c);
        break;
      case "demuxedaudiosrc":
      case "demuxedvideosrc":
        pB(this);
        break;
      case "muted":
        this.T[a] = "" === c ? !0 : !!c;
        qB(this, a, c);
        break;
      default:
        qB(this, a, c);
    }
  };
  nB.prototype.Tc = function (a) {
    this.Ib = a;
    var b;
    null == (b = this.qa) || b.Tc(a);
  };
  var qB = function (a, b, c) {
      c !== a.T.getAttribute(b) &&
        (null === c ? a.T.removeAttribute(b) : a.T.setAttribute(b, c));
    },
    rB = function (a) {
      a.qa &&
        (a.T.removeEventListener("timeupdate", a.Sb), a.qa.W(), (a.qa = null));
    },
    sB = function (a, b) {
      a.Zd = b;
      a.T.dispatchEvent(new Event("error"));
    },
    kB = function (a) {
      tB(a);
      uB(a);
      a.T.addEventListener("loadedmetadata", function () {
        a.Wc = gx(a);
        a.Wc.then(function (b) {
          var c = a.T.videoWidth,
            d = a.T.videoHeight,
            e = b.width,
            f = b.height;
          0 < c &&
            0 < d &&
            0 < e &&
            0 < f &&
            ((b = b.width / b.height),
            (c /= d),
            0.97 <= Math.min(c, b) / Math.max(c, b)
              ? Zm(a.T, { "object-fit": "cover" })
              : Zm(a.T, { "object-fit": "contain" }));
        });
      });
      a.T.addEventListener("play", function () {
        a.ve || (KA(a.T, "first_play"), (a.ve = !0));
      });
      a.T.addEventListener("pause", function () {
        a.Rc || (KA(a.T, "first_pause"), MA(a.T), (a.Rc = !0));
      });
      Hs(w, "pagehide", function () {
        a.Rc || (KA(a.T, "first_pause"), MA(a.T), (a.Rc = !0));
      });
      a.T.addEventListener("stalled", function () {
        I(G.g(), "ves", "1");
      });
      new Xw(a.T).O("playbackStalled", function () {
        return I(G.g(), "pbs", "1");
      });
      a.T.addEventListener("media_source_error", function (b) {
        rB(a);
        b = b.detail;
        sB(a, new iB(b.code, b.message));
      });
      vB(a);
    },
    mB = function (a) {
      var b = hB(a.childNodes);
      b && wB(a, b);
      null === a.lc && xB(a);
    },
    xB = function (a) {
      if (w.MutationObserver) {
        var b = new MutationObserver(function (c) {
          c = t(c);
          for (var d = c.next(); !d.done; d = c.next())
            if (
              ((d = d.value), "childList" === d.type && (d = hB(d.addedNodes)))
            ) {
              wB(a, d);
              b.disconnect();
              break;
            }
        });
        b.observe(a, eB);
      }
    },
    lB = function (a) {
      a.T.addEventListener("volumechange", function () {
        a.ub.g.B(OA.toString(), a.T.muted);
        a.qg || a.ub.g.B(PA.toString(), a.T.muted);
      });
    },
    wB = function (a, b) {
      if (null === a.lc && b.hasAttribute("src")) {
        var c = b.getAttribute("src");
        a.lc = new $A(a.T, c, b.hasAttribute("default"));
        new XA(a.lc, a.ub);
        c.includes("kind=asr") && I(G.g(), "act", "1");
      }
    },
    oB = function (a, b) {
      if (b !== a.te) {
        a.te = b;
        a.rg && b && Mw(b) && (b = Nw(b));
        var c = b ? Sy(b) : null,
          d = !!c && sA(c);
        I(G.g(), "umsem", d ? "1" : "0");
        d
          ? ((b = Mv(LA, b, Ty(c), 1e3 * Ky[c], null)),
            (a.qa = Mv(AA, [b])),
            a.Ib && a.qa.Tc(a.Ib),
            a.qa.O("media_source_error", function (e) {
              e = Uy("media_source_error", e.detail);
              a.T.dispatchEvent(e);
            }),
            (a.Sb = function () {
              var e = a.qa;
              e.F = 1e3 * a.T.currentTime;
              CA(e);
            }),
            a.T.addEventListener("timeupdate", a.Sb),
            qB(a, "src", DA(a.qa)))
          : (rB(a), qB(a, "src", b));
        a.ye || a.T.load();
      }
    },
    pB = function (a) {
      a.src &&
        sB(
          a,
          new iB(
            MediaError.MEDIA_ERR_ABORTED,
            "Setting demuxed src after src is already set."
          )
        );
      if (!a.ob && !a.Za && a.qa) rB(a), qB(a, "src", null), a.T.load();
      else if (a.ob && a.Za) {
        var b = Sy(Mw(a.Za) ? Nw(a.Za) : a.Za),
          c = Sy(Mw(a.ob) ? Nw(a.ob) : a.ob);
        if (b && sA(b))
          if (c && sA(c)) {
            var d = !!b && sA(b) && !!c && sA(c);
            I(G.g(), "umsed", d ? "1" : "0");
            b = Mv(LA, a.Za, Ty(b), -1, null);
            c = Mv(LA, a.ob, Ty(c), -1, null);
            a.qa = Mv(AA, [b, c]);
            a.Ib && a.qa.Tc(a.Ib);
            a.qa.O("media_source_error", function (e) {
              e = Uy("media_source_error", e.detail);
              a.T.dispatchEvent(e);
            });
            a.Sb = function () {
              var e = a.qa;
              e.F = 1e3 * a.T.currentTime;
              CA(e);
            };
            a.T.addEventListener("timeupdate", a.Sb);
            qB(a, "src", DA(a.qa));
            a.ye || a.T.load();
          } else sB(a, new jB('Audio itag "' + c + '" not supported.'));
        else sB(a, new jB('Video itag "' + b + '" not supported.'));
      }
    },
    tB = function (a) {
      for (
        var b = t(dB), c = b.next(), d = {};
        !c.done;
        d = { Va: void 0, getValue: void 0 }, c = b.next()
      )
        (d.Va = c.value),
          d.Va in a.T &&
            ("function" === typeof a.T[d.Va]
              ? ((d.getValue = a.T[d.Va].bind(a.T)),
                Object.defineProperty(a, d.Va, {
                  set: (function (e) {
                    return function (f) {
                      a.T[e.Va] = f;
                    };
                  })(d),
                  get: (function (e) {
                    return function () {
                      return e.getValue;
                    };
                  })(d),
                }))
              : Object.defineProperty(a, d.Va, {
                  set: (function (e) {
                    return function (f) {
                      a.T[e.Va] = f;
                    };
                  })(d),
                  get: (function (e) {
                    return function () {
                      return a.T[e.Va];
                    };
                  })(d),
                }));
    },
    uB = function (a) {
      Object.defineProperty(a, "error", {
        set: function () {},
        get: function () {
          return a.T.error ? a.T.error : a.Zd;
        },
      });
    },
    vB = function (a) {
      a.T.style.width = fn();
      a.T.style.height = fn();
    };
  nB.prototype.disconnectedCallback = function () {
    if (this.Wc) {
      var a = cx.get(this.Wc);
      fx(a);
    }
    gB.prototype.disconnectedCallback &&
      gB.prototype.disconnectedCallback.call(this);
  };
  da.Object.defineProperties(nB.prototype, {
    ob: {
      configurable: !0,
      enumerable: !0,
      set: function (a) {
        this.setAttribute("demuxedaudiosrc", a);
      },
      get: function () {
        return this.getAttribute("demuxedaudiosrc");
      },
    },
    Za: {
      configurable: !0,
      enumerable: !0,
      set: function (a) {
        this.setAttribute("demuxedvideosrc", a);
      },
      get: function () {
        return this.getAttribute("demuxedvideosrc");
      },
    },
    src: {
      configurable: !0,
      enumerable: !0,
      set: function (a) {
        this.setAttribute("src", a);
      },
      get: function () {
        return this.getAttribute("src");
      },
    },
  });
  da.Object.defineProperties(nB, {
    observedAttributes: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return cB;
      },
    },
  });
  w.customElements &&
    (w.customElements.get("lima-video") ||
      w.customElements.define("lima-video", nB));
  function yB() {
    var a = Mv(dA);
    a.initialize().then(function () {
      var b = Uy("initialized");
      a.dispatchEvent(b);
    });
    return a;
  }
  var AB = function (a, b, c, d, e) {
    P.call(this);
    this.F = a;
    this.h = c;
    this.o = e;
    this.Z = this.U = this.ac = this.D = this.j = this.Wa = 0;
    this.B = [];
    this.H = !1;
    this.aa = this.ba = this.ha = null;
    this.Ea = !1;
    this.bc = this.G = this.l = this.Fa = this.Ma = null;
    this.va = !1;
    this.J = new R(b.url);
    this.Ga = b.Ga;
    this.ma = d;
    (this.N = b.g) || this.J.g.remove("alr");
    I(G.g(), "sl_dv" + this.o, (null !== this.N).toString());
    this.V = !this.N;
    this.g = new XMLHttpRequest();
    this.X = 0.1;
    if ((this.A = hz())) (this.l = yB()), eo(this, this.l);
    zB(this);
  };
  u(AB, P);
  var BB = function (a, b) {
      b = Uy("media_source_error", b);
      a.F.dispatchEvent(b);
    },
    CB = function (a, b) {
      BB(a, {
        code:
          1 < a.j
            ? MediaError.MEDIA_ERR_NETWORK
            : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
        message: b,
      });
    },
    zB = function (a) {
      a.ha = function () {
        DB(a);
        if (a.V) {
          var b = a.g.responseText;
          a.H = !b || b.length < a.Ga;
          a.U = 0;
          J("sl_cc" + a.o + "_" + a.j);
          a.D++;
          EB(a);
        }
      };
      a.ba = function () {
        DB(a);
      };
      a.aa = function () {
        J("sl_ec" + a.o + "_" + a.j);
        CB(a, "Failed to load chunk " + a.j + " for stream " + a.o);
      };
      a.g.addEventListener("load", a.ha);
      a.g.addEventListener("progress", a.ba);
      a.g.addEventListener("error", a.aa);
      a.h.addEventListener("updateend", function () {
        a.h.buffered.length &&
          ((a.ac = a.h.buffered.end(0)),
          a.A
            ? a.va && !a.h.updating && a.j === a.D && (J("sl_lc" + a.o), a.ma())
            : a.H &&
              !a.h.updating &&
              a.j === a.D &&
              (J("sl_lc" + a.o), a.ma()));
        !a.Ea && 1 < a.F.buffered.length && (I(G.g(), "dbr", "1"), (a.Ea = !0));
      });
      a.h.addEventListener("update", function () {
        a.B.length && !a.h.updating && a.h.appendBuffer(a.B.shift());
      });
      a.h.addEventListener("error", function () {
        J("msb_err" + a.o);
        BB(a, {
          code: MediaError.MEDIA_ERR_DECODE,
          message: "Error on SourceBuffer " + a.o,
        });
      });
      a.A
        ? (a.l.Qa()
            ? FB(a)
            : (a.Ma = Hs(a.l, "initialized", function () {
                FB(a);
              })),
          (a.Fa = Hs(a.l, "get_video_succeeded", function () {
            EB(a);
          })))
        : FB(a);
    },
    HB = function (a) {
      J("sl_rc" + a.o + "_" + a.j);
      var b = GB(a);
      a.g.open("get", b);
      a.g.overrideMimeType("text/plain; charset=x-user-defined");
      a.g.send(null);
      a.A && ((a.G = null), (a.bc = b));
    },
    DB = function (a) {
      if (400 <= a.g.status)
        CB(
          a,
          'Response code "' +
            a.g.status +
            '" on loading chunk ' +
            a.j +
            " for stream " +
            a.o
        );
      else {
        if (!a.V) {
          var b = a.g.getResponseHeader("content-type");
          if (b && 0 <= b.indexOf("text/plain")) {
            a.g.readyState === XMLHttpRequest.DONE &&
              ((a.J = new R(a.g.response)),
              (a.j = 0),
              (a.D = 0),
              a.Wa++,
              FB(a));
            return;
          }
          a.V = !0;
          J("sl_redc" + a.o);
          I(G.g(), "sl_tr" + a.o, a.Wa.toString());
        }
        a.J.g.remove("alr");
        if (
          a.g.readyState === XMLHttpRequest.LOADING ||
          a.g.readyState === XMLHttpRequest.DONE
        )
          (b = IB(a, a.U)),
            (a.U = a.g.response.length),
            (a.Z += b.byteLength),
            JB(a, b);
        if (
          a.A &&
          a.g.readyState === XMLHttpRequest.DONE &&
          ((b = IB(a, 0)), 0 < b.byteLength)
        ) {
          var c = a.g.responseText;
          a.va = !c || c.length < a.Ga;
          a.l.dc(b, new R(a.bc), 0, a.va);
        }
      }
    },
    JB = function (a, b) {
      0 < b.byteLength &&
        (a.h.updating || a.B.length ? a.B.push(b) : a.h.appendBuffer(b));
    },
    IB = function (a, b) {
      a = a.g.response;
      for (var c = new Uint8Array(a.length - b), d = 0; d < c.length; d++)
        c[d] = a.charCodeAt(d + b) & 255;
      return c.buffer;
    },
    EB = function (a) {
      var b = Pw;
      -1 !== b && b < a.Z + a.Ga
        ? (a.F.pause(), (Pw = -1), (b = !1))
        : ((b = a.D === a.j && !a.h.updating && !a.B.length),
          (b = a.A
            ? !a.va && b && a.F.currentTime >= a.X
            : !a.H && b && a.F.currentTime >= a.X));
      b && ((a.X = a.ac + 0.1), FB(a));
    },
    GB = function (a) {
      var b = a.A && a.G ? a.G + 1 : a.j * a.Ga;
      return xw(a.J, "range", b + "-" + (b + a.Ga - 1)).toString();
    },
    FB = function (a) {
      if (a.A) {
        var b = new R(GB(a));
        a.l.Nb(b).then(function (c) {
          c
            ? ((a.G = Number(c.tc)),
              (a.va = c.va),
              JB(a, c.video),
              (c = Uy("get_video_succeeded")),
              a.l.dispatchEvent(c),
              a.D++)
            : HB(a);
          a.j++;
        });
      } else HB(a), a.j++;
    };
  AB.prototype.L = function () {
    this.A && this.l.Qa() && this.l.close();
    this.g.removeEventListener("load", this.ha);
    this.g.removeEventListener("progress", this.ba);
    this.g.removeEventListener("error", this.aa);
    Ps(this.Ma);
    Ps(this.Fa);
    P.prototype.L.call(this);
  };
  var LB = function (a, b) {
    P.call(this);
    var c = this;
    this.l = a;
    this.F = b;
    this.g = new MediaSource();
    this.D = [];
    this.j = [];
    this.h = this.o = null;
    this.A = !1;
    this.B = function () {
      KB(c);
    };
    this.g.addEventListener("sourceopen", this.B);
  };
  u(LB, P);
  var MB = function (a) {
      a.o && a.l.removeEventListener("timeupdate", a.o);
    },
    KB = function (a) {
      J("msmsw_oso");
      a.o = function () {
        if (!a.A)
          for (var e = t(a.j), f = e.next(); !f.done; f = e.next()) EB(f.value);
      };
      a.l.addEventListener("timeupdate", a.o);
      for (var b = 0; b < a.F.length; b++) {
        var c = a.F[b];
        I(G.g(), "msmsw_mime" + b, c.mimeType);
        I(G.g(), "msmsw_cs" + b, c.Ga.toString());
        var d = a.g.addSourceBuffer(c.mimeType);
        d
          ? (a.D.push(d),
            (c = Mv(
              AB,
              a.l,
              c,
              d,
              function () {
                a: if (!a.A) {
                  for (var e = t(a.j), f = e.next(); !f.done; f = e.next())
                    if (
                      ((f = f.value),
                      f.A
                        ? !f.va || f.h.updating || f.B.length
                        : !f.H || f.h.updating || f.B.length)
                    )
                      break a;
                  a.g.endOfStream();
                  a.A = !0;
                  MB(a);
                }
              },
              b
            )),
            a.j.push(c))
          : J("msmsw_sbf" + b);
      }
      I(G.g(), "msmsw_ns", a.D.length.toString());
    };
  LB.prototype.L = function () {
    this.h && window.URL.revokeObjectURL(this.h);
    for (var a = t(this.j), b = a.next(); !b.done; b = a.next()) b.value.W();
    MB(this);
    this.g.removeEventListener("sourceopen", this.B);
    P.prototype.L.call(this);
  }; /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
  var NB =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
        ""
      ),
    OB = function () {
      for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++)
        8 == d || 13 == d || 18 == d || 23 == d
          ? (a[d] = "-")
          : 14 == d
          ? (a[d] = "4")
          : (2 >= b && (b = (33554432 + 16777216 * Math.random()) | 0),
            (c = b & 15),
            (b >>= 4),
            (a[d] = NB[19 == d ? (c & 3) | 8 : c]));
      return a.join("");
    };
  var QB = function (a) {
    R.call(this, a);
    this.B = new Map();
    a = this.j;
    var b = a.indexOf(";"),
      c = null;
    0 <= b
      ? ((this.j = a.substring(0, b)), (c = a.substring(b + 1)))
      : (this.j = a);
    PB(this, c);
  };
  u(QB, R);
  QB.prototype.toString = function () {
    return RB(this, R.prototype.toString.call(this));
  };
  QB.prototype.D = function () {
    return "";
  };
  var PB = function (a, b) {
      nb(Sg(b)) ||
        b.split(";").forEach(function (c) {
          var d = c.indexOf("=");
          if (!(0 >= d)) {
            var e = Pg(c.substring(0, d));
            c = Pg(c.substring(d + 1));
            d = a.B.get(e);
            null != d ? d.includes(c) || d.push(c) : (d = [Sg(c)]);
            a.B.set(e, d);
          }
        }, a);
    },
    SB = function (a) {
      if (nb(Sg("ord"))) return null;
      a = a.B.get("ord");
      return null != a ? a : null;
    },
    TB = function (a, b) {
      nb(Sg("ord")) || ((b = b.map(Sg)), a.B.set("ord", b));
    },
    RB = function (a, b) {
      b = [Sg(b)];
      b.push.apply(b, ha(UB(a)));
      return b.join(";");
    },
    UB = function (a) {
      var b = SB(a);
      null == b ? (b = [Sg(Date.now())]) : nb(Sg("ord")) || a.B.delete("ord");
      var c = [];
      a.B.forEach(function (d, e) {
        d.forEach(function (f) {
          c.push(e + "=" + f);
        });
      });
      c.push("ord=" + b[0]);
      TB(a, b);
      return c;
    };
  QB.prototype.F = function () {
    return new QB(this.toString());
  };
  function VB(a) {
    var b = new QB(a);
    a = b.h;
    b = RB(b, b.j);
    return (
      !lb(a, ".g.doubleclick.net") &&
      (lb(a, "doubleclick.net") || lb(a, "pagead2.googlesyndication.com")) &&
      hx("/(ad|pfad)[x|i|j]?/", b)
    );
  }
  function WB(a) {
    return "bid.g.doubleclick.net" == new R(a).h;
  }
  function XB(a) {
    a = new R(a);
    var b = a.j;
    return (
      lb(a.h, "googleads.g.doubleclick.net") && hx("/pagead/(live/)?ads", b)
    );
  }
  function YB(a) {
    a = new R(a);
    var b = a.j;
    return lb(a.h, "doubleclick.net") && hx("/gampad/(live/)?ads", b);
  }
  function ZB(a) {
    a = new R(a);
    var b = a.j;
    return "ad.doubleclick.net" === a.h && hx("/dv3/adv", b);
  }
  var T = {
    DEPRECATED_ERROR_CODE: -1,
    VAST_MALFORMED_RESPONSE: 100,
    VAST_SCHEMA_VALIDATION_ERROR: 101,
    VAST_UNSUPPORTED_VERSION: 102,
    VAST_TRAFFICKING_ERROR: 200,
    VAST_UNEXPECTED_LINEARITY: 201,
    VAST_UNEXPECTED_DURATION_ERROR: 202,
    VAST_WRAPPER_ERROR: 300,
    VAST_LOAD_TIMEOUT: 301,
    VAST_TOO_MANY_REDIRECTS: 302,
    VAST_NO_ADS_AFTER_WRAPPER: 303,
    VIDEO_PLAY_ERROR: 400,
    VAST_MEDIA_LOAD_TIMEOUT: 402,
    VAST_LINEAR_ASSET_MISMATCH: 403,
    VAST_PROBLEM_DISPLAYING_MEDIA_FILE: 405,
    OVERLAY_AD_PLAYING_FAILED: 500,
    NONLINEAR_DIMENSIONS_ERROR: 501,
    OVERLAY_AD_LOADING_FAILED: 502,
    VAST_NONLINEAR_ASSET_MISMATCH: 503,
    COMPANION_REQUIRED_ERROR: 602,
    COMPANION_AD_LOADING_FAILED: 603,
    UNKNOWN_ERROR: 900,
    VPAID_ERROR: 901,
    FAILED_TO_REQUEST_ADS: 1005,
    VAST_ASSET_NOT_FOUND: 1007,
    VAST_EMPTY_RESPONSE: 1009,
    UNKNOWN_AD_RESPONSE: 1010,
    UNSUPPORTED_LOCALE: 1011,
    ADS_REQUEST_NETWORK_ERROR: 1012,
    INVALID_AD_TAG: 1013,
    STREAM_INITIALIZATION_FAILED: 1020,
    ASSET_FALLBACK_FAILED: 1021,
    INVALID_ARGUMENTS: 1101,
    NATIVE_MESSAGE_ERROR: 1204,
    AUTOPLAY_DISALLOWED: 1205,
    CONSENT_MANAGEMENT_PROVIDER_NOT_READY: 1300,
    Nh: 2002,
  };
  T[-1] = "DEPRECATED_ERROR_CODE";
  T[100] = "VAST_MALFORMED_RESPONSE";
  T[101] = "VAST_SCHEMA_VALIDATION_ERROR";
  T[102] = "VAST_UNSUPPORTED_VERSION";
  T[200] = "VAST_TRAFFICKING_ERROR";
  T[201] = "VAST_UNEXPECTED_LINEARITY";
  T[202] = "VAST_UNEXPECTED_DURATION_ERROR";
  T[300] = "VAST_WRAPPER_ERROR";
  T[301] = "VAST_LOAD_TIMEOUT";
  T[302] = "VAST_TOO_MANY_REDIRECTS";
  T[303] = "VAST_NO_ADS_AFTER_WRAPPER";
  T[400] = "VIDEO_PLAY_ERROR";
  T[402] = "VAST_MEDIA_LOAD_TIMEOUT";
  T[403] = "VAST_LINEAR_ASSET_MISMATCH";
  T[405] = "VAST_PROBLEM_DISPLAYING_MEDIA_FILE";
  T[500] = "OVERLAY_AD_PLAYING_FAILED";
  T[501] = "NONLINEAR_DIMENSIONS_ERROR";
  T[502] = "OVERLAY_AD_LOADING_FAILED";
  T[503] = "VAST_NONLINEAR_ASSET_MISMATCH";
  T[602] = "COMPANION_REQUIRED_ERROR";
  T[603] = "COMPANION_AD_LOADING_FAILED";
  T[900] = "UNKNOWN_ERROR";
  T[901] = "VPAID_ERROR";
  T[1005] = "FAILED_TO_REQUEST_ADS";
  T[1007] = "VAST_ASSET_NOT_FOUND";
  T[1009] = "VAST_EMPTY_RESPONSE";
  T[1010] = "UNKNOWN_AD_RESPONSE";
  T[1011] = "UNSUPPORTED_LOCALE";
  T[1012] = "ADS_REQUEST_NETWORK_ERROR";
  T[1013] = "INVALID_AD_TAG";
  T[1020] = "STREAM_INITIALIZATION_FAILED";
  T[1021] = "ASSET_FALLBACK_FAILED";
  T[1101] = "INVALID_ARGUMENTS";
  T[1204] = "NATIVE_MESSAGE_ERROR";
  T[1205] = "AUTOPLAY_DISALLOWED";
  T[1300] = "CONSENT_MANAGEMENT_PROVIDER_NOT_READY";
  T[2002] = "SUPPORTED_ADS_NOT_FOUND";
  var $B = function (a, b, c) {
    var d = Error.call(this);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.type = a;
    this.errorMessage = b;
    this.errorCode = c;
    this.ad = this.g = null;
  };
  u($B, Error);
  l = $B.prototype;
  l.getAd = function () {
    return this.ad;
  };
  l.getInnerError = function () {
    return this.g;
  };
  l.getMessage = function () {
    return this.errorMessage;
  };
  l.getErrorCode = function () {
    return this.errorCode;
  };
  l.getVastErrorCode = function () {
    return 1e3 > this.errorCode ? this.errorCode : 900;
  };
  l.getType = function () {
    return this.type;
  };
  l.toString = function () {
    return (
      "AdError " +
      this.getErrorCode() +
      ": " +
      this.getMessage() +
      (null != this.getInnerError()
        ? " Caused by: " + this.getInnerError()
        : "")
    );
  };
  function aC(a) {
    if ("" === a) return null;
    a = new R(a);
    var b;
    var c = null != (b = a.g.get("iu")) ? b : "";
    b = c
      ? (b = /\/(\d+)(?:,\d+){0,2}\//.exec(c)) && 2 === b.length
        ? b[1]
        : null
      : null;
    if (!b) {
      var d;
      b = (a = null != (d = a.g.get("client")) ? d : "") ? a : null;
    }
    return b;
  }
  var bC = function (a) {
    var b = {};
    b =
      ((b.IABUSPrivacy_String = "uspString"),
      (b.IABTCF_gdprApplies = "gdprApplies"),
      (b.IABTCF_TCString = "tcString"),
      (b.IABTCF_AddtlConsent = "addtlConsent"),
      (b.IABGPP_HDR_GppString = "gppString"),
      (b.IABGPP_GppSID = "gppSid"),
      b);
    for (var c in b) null != a[c] && ((a[b[c]] = a[c]), delete a[c]);
    this.ne = !!a.isGdprLoader;
    c = a.uspString;
    this.uspString = "string" === typeof c ? c : "";
    c = a.gdprApplies;
    this.h =
      "boolean" === typeof c
        ? c
          ? "1"
          : "0"
        : "number" !== typeof c || (1 !== c && 0 !== c)
        ? "string" !== typeof c || ("1" !== c && "0" !== c)
          ? ""
          : "1" === c
          ? "1"
          : "0"
        : 1 === c
        ? "1"
        : "0";
    c = a.tcString;
    this.g = "string" === typeof c ? c : "";
    /^[\.\w_-]*$/.test(this.g) || (this.g = encodeURIComponent(this.g));
    a = a.gppString;
    this.gppString = "string" === typeof a ? a : "";
  };
  var cC = function (a) {
      this.g = a;
    },
    dC = function (a, b) {
      return rg(a.g, b) && ((a = a.g[b]), "boolean" === typeof a) ? a : !1;
    },
    eC = function (a) {
      return rg(a.g, "videoElementFakeDuration") &&
        ((a = a.g.videoElementFakeDuration), "number" === typeof a)
        ? a
        : NaN;
    },
    fC = function (a) {
      if (rg(a.g, "forceExperimentIds")) {
        a = a.g.forceExperimentIds;
        var b = [],
          c = 0;
        Array.isArray(a) &&
          a.forEach(function (d) {
            "number" === typeof d && (b[c++] = d);
          });
        return b;
      }
      return null;
    };
  var U = function () {
      this.F = "always";
      this.U = 4;
      this.ppid = null;
      this.l = 1;
      this.g = 0;
      this.o = !0;
      this.locale = "en";
      this.j = null;
      this.h = !1;
      this.playerVersion = this.playerType = "";
      this.B = null;
      this.D = this.K = -1;
      this.A = "";
      this.J = !1;
      this.H = !0;
      this.sessionId = OB();
      this.N = {};
      this.I = "";
      this.G = 0;
      try {
        this.V = em()[0];
      } catch (a) {}
    },
    gC = function (a) {
      a = Sg(a);
      nb(a) || (a = a.substring(0, 20));
      return a;
    };
  l = U.prototype;
  l.setCompanionBackfill = function (a) {
    this.F = a;
  };
  l.getCompanionBackfill = function () {
    return this.F;
  };
  l.setNumRedirects = function (a) {
    this.U = a;
  };
  l.getNumRedirects = function () {
    return this.U;
  };
  l.setPpid = function (a) {
    this.ppid = a;
  };
  l.getPpid = function () {
    return this.ppid;
  };
  l.setVpaidAllowed = function (a) {
    "boolean" === typeof a && (this.l = a ? 1 : 0);
  };
  l.setVpaidMode = function (a) {
    this.l = a;
  };
  l.Cf = function () {
    return this.l;
  };
  l.setAutoPlayAdBreaks = function (a) {
    this.o = a;
  };
  l.Nf = function () {
    return this.o;
  };
  l.hg = function (a) {
    this.h = a;
  };
  l.Bf = function () {
    return this.h;
  };
  l.setLocale = function (a) {
    if ((a = jx(a))) this.locale = a;
  };
  l.getLocale = function () {
    return this.locale;
  };
  l.setPlayerType = function (a) {
    this.playerType = gC(a);
  };
  l.getPlayerType = function () {
    return this.playerType;
  };
  l.setPlayerVersion = function (a) {
    this.playerVersion = gC(a);
  };
  l.getPlayerVersion = function () {
    return this.playerVersion;
  };
  var hC = function (a) {
    if (null == a.B) {
      var b = {};
      var c = new R(E().location.href).g;
      if (Cw(c, "tcnfp"))
        try {
          b = JSON.parse(c.get("tcnfp"));
        } catch (d) {}
      a.B = new cC(b);
    }
    return a.B;
  };
  l = U.prototype;
  l.ig = function (a) {
    this.K = a;
  };
  l.jg = function (a) {
    this.D = a;
  };
  l.setDisableCustomPlaybackForIOS10Plus = function (a) {
    this.J = a;
  };
  l.getDisableCustomPlaybackForIOS10Plus = function () {
    return this.J;
  };
  l.isCookiesEnabled = function () {
    return this.H;
  };
  l.setCookiesEnabled = function (a) {
    null != a && (this.H = a);
  };
  l.setSessionId = function (a) {
    this.sessionId = a;
  };
  l.gg = function () {};
  l.Af = function () {
    return !0;
  };
  l.setFeatureFlags = function (a) {
    this.N = a;
  };
  l.getFeatureFlags = function () {
    return this.N;
  };
  U.prototype.getFeatureFlags = U.prototype.getFeatureFlags;
  U.prototype.setFeatureFlags = U.prototype.setFeatureFlags;
  U.prototype.getDisableFlashAds = U.prototype.Af;
  U.prototype.setDisableFlashAds = U.prototype.gg;
  U.prototype.setSessionId = U.prototype.setSessionId;
  U.prototype.setCookiesEnabled = U.prototype.setCookiesEnabled;
  U.prototype.isCookiesEnabled = U.prototype.isCookiesEnabled;
  U.prototype.getDisableCustomPlaybackForIOS10Plus =
    U.prototype.getDisableCustomPlaybackForIOS10Plus;
  U.prototype.setDisableCustomPlaybackForIOS10Plus =
    U.prototype.setDisableCustomPlaybackForIOS10Plus;
  U.prototype.setStreamCorrelator = U.prototype.jg;
  U.prototype.setPageCorrelator = U.prototype.ig;
  U.prototype.getPlayerVersion = U.prototype.getPlayerVersion;
  U.prototype.setPlayerVersion = U.prototype.setPlayerVersion;
  U.prototype.getPlayerType = U.prototype.getPlayerType;
  U.prototype.setPlayerType = U.prototype.setPlayerType;
  U.prototype.getLocale = U.prototype.getLocale;
  U.prototype.setLocale = U.prototype.setLocale;
  U.prototype.getIsVpaidAdapter = U.prototype.Bf;
  U.prototype.setIsVpaidAdapter = U.prototype.hg;
  U.prototype.isAutoPlayAdBreaks = U.prototype.Nf;
  U.prototype.setAutoPlayAdBreaks = U.prototype.setAutoPlayAdBreaks;
  U.prototype.getVpaidMode = U.prototype.Cf;
  U.prototype.setVpaidMode = U.prototype.setVpaidMode;
  U.prototype.setVpaidAllowed = U.prototype.setVpaidAllowed;
  U.prototype.getPpid = U.prototype.getPpid;
  U.prototype.setPpid = U.prototype.setPpid;
  U.prototype.getNumRedirects = U.prototype.getNumRedirects;
  U.prototype.setNumRedirects = U.prototype.setNumRedirects;
  U.prototype.getCompanionBackfill = U.prototype.getCompanionBackfill;
  U.prototype.setCompanionBackfill = U.prototype.setCompanionBackfill;
  var iC = new U();
  var jC = function (a) {
    this.M = A(a);
  };
  u(jC, B);
  jC.ga = [10];
  function kC(a) {
    var b = {};
    new R(a).g.forEach(function (c, d) {
      b[d] = c;
    });
    return b;
  }
  var lC = function (a, b) {
      a = void 0 === a ? {} : a;
      b = void 0 === b ? {} : b;
      var c = {};
      a = t(Object.entries(a));
      for (var d = a.next(); !d.done; d = a.next()) {
        var e = t(d.value);
        d = e.next().value;
        e = e.next().value;
        null != e && (c[d] = String(e));
      }
      this.g = c;
      this.h = new bC(b);
    },
    mC = function (a, b) {
      if (!(XB(a) || VB(a) || YB(a) || WB(a) || ZB(a))) {
        var c = new R(a),
          d = c.j;
        "pubads.g.doubleclick.net" === c.h &&
          (hx("/ssai/", d) || hx("/ondemand/", d));
      }
      return new lC(kC(a), b);
    },
    nC = function (a, b) {
      if (a.g.hasOwnProperty(b)) return a.g[b];
    },
    oC = function (a) {
      var b = nC(a, "ltd");
      if (!(b = "1" === b || "true" === b)) {
        b = nC(a, "gdpr");
        var c = a.h.h;
        b = ("1" === c || "0" === c ? c : void 0 !== b ? b : "").toLowerCase();
        if ("true" === b || "1" === b)
          if (
            ((b = a.h.g),
            (a = nC(a, "gdpr_consent")),
            (a =
              b && "tcunavailable" !== b
                ? b
                : "tcunavailable" === b
                ? a || b
                : a || ""),
            "tcunavailable" === a)
          )
            var d = !1;
          else {
            if ((b = zv(a)) && a) {
              var e = Ve(b, Qu, 1);
              b = Ve(b, Ku, 2) || new Ku();
              c = ef(e, 9);
              var f = ef(e, 4),
                g = ef(e, 5),
                h = df(e, 10),
                k = df(e, 11),
                m = hf(e, 16),
                n = df(e, 15),
                q = {
                  consents: Av(Me(e, 13, ee), lv),
                  legitimateInterests: Av(Me(e, 14, ee), lv),
                },
                r = {
                  consents: Av(Me(e, 17, he)),
                  legitimateInterests: Av(Me(e, 18, he)),
                },
                v = Av(Me(e, 12, ee), mv),
                x = Xe(e, Ju, 19);
              e = {};
              x = t(x);
              for (var H = x.next(); !H.done; H = x.next()) {
                H = H.value;
                var S = jf(H, 1);
                e[S] = e[S] || {};
                var la = Me(H, 3, he);
                la = t(la);
                for (var V = la.next(); !V.done; V = la.next())
                  e[S][V.value] = jf(H, 2);
              }
              a = {
                tcString: a,
                tcfPolicyVersion: c,
                gdprApplies: !0,
                cmpId: f,
                cmpVersion: g,
                isServiceSpecific: h,
                useNonStandardStacks: k,
                publisherCC: m,
                purposeOneTreatment: n,
                purpose: q,
                vendor: r,
                specialFeatureOptins: v,
                publisher: {
                  restrictions: e,
                  consents: Av(Me(b, 1, ee), lv),
                  legitimateInterests: Av(Me(b, 2, ee), lv),
                  customPurposes: {
                    consents: Av(Me(b, 3, he)),
                    legitimateInterests: Av(Me(b, 4, he)),
                  },
                },
              };
            } else a = null;
            if (a) {
              var M = void 0 === M ? !1 : M;
              if (gw(a))
                if (
                  !1 === a.gdprApplies ||
                  "tcunavailable" === a.tcString ||
                  (void 0 === a.gdprApplies && !M) ||
                  "string" !== typeof a.tcString ||
                  !a.tcString.length
                )
                  d = !0;
                else {
                  d = void 0 === d ? "755" : d;
                  c: {
                    if (
                      a.publisher &&
                      a.publisher.restrictions &&
                      ((M = a.publisher.restrictions["1"]), void 0 !== M)
                    ) {
                      M = M[void 0 === d ? "755" : d];
                      break c;
                    }
                    M = void 0;
                  }
                  0 === M
                    ? (d = !1)
                    : a.purpose && a.vendor
                    ? ((M = a.vendor.consents),
                      (d = !(!M || !M[void 0 === d ? "755" : d])) &&
                      a.purposeOneTreatment &&
                      "CH" === a.publisherCC
                        ? (d = !0)
                        : d &&
                          ((d = a.purpose.consents), (d = !(!d || !d["1"]))))
                    : (d = !0);
                }
              else d = !1;
            } else d = !1;
          }
        else d = !0;
        b = !d;
      }
      return b;
    },
    pC = function (a) {
      var b = new jC();
      a = !oC(a);
      lf(b, 5, a);
      return b;
    };
  var qC = function (a) {
    this.M = A(a);
  };
  u(qC, B);
  qC.prototype.getVersion = function () {
    return hf(this, 2);
  };
  var rC = function (a) {
    this.M = A(a);
  };
  u(rC, B);
  var sC = function (a, b) {
      return mf(a, 2, b);
    },
    tC = function (a, b) {
      return mf(a, 3, b);
    },
    uC = function (a, b) {
      return mf(a, 4, b);
    },
    vC = function (a, b) {
      return mf(a, 5, b);
    },
    wC = function (a, b) {
      return mf(a, 9, b);
    },
    xC = function (a, b) {
      return Ze(a, 10, b);
    },
    yC = function (a, b) {
      return lf(a, 11, b);
    },
    zC = function (a, b) {
      return mf(a, 1, b);
    },
    AC = function (a, b) {
      return lf(a, 7, b);
    };
  rC.ga = [10, 6];
  var BC =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function CC(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : (a.google_tag_data = {});
  }
  function DC(a) {
    var b, c;
    return (
      "function" ===
      typeof (null == (b = a.navigator)
        ? void 0
        : null == (c = b.userAgentData)
        ? void 0
        : c.getHighEntropyValues)
    );
  }
  function EC() {
    var a = window;
    if (!DC(a)) return null;
    var b = CC(a);
    if (b.uach_promise) return b.uach_promise;
    a = a.navigator.userAgentData.getHighEntropyValues(BC).then(function (c) {
      null != b.uach || (b.uach = c);
      return c;
    });
    return (b.uach_promise = a);
  }
  function FC(a) {
    var b;
    return yC(
      xC(
        vC(
          sC(
            zC(
              uC(
                AC(
                  wC(tC(new rC(), a.architecture || ""), a.bitness || ""),
                  a.mobile || !1
                ),
                a.model || ""
              ),
              a.platform || ""
            ),
            a.platformVersion || ""
          ),
          a.uaFullVersion || ""
        ),
        (null == (b = a.fullVersionList)
          ? void 0
          : b.map(function (c) {
              var d = new qC();
              d = mf(d, 1, c.brand);
              return mf(d, 2, c.version);
            })) || []
      ),
      a.wow64 || !1
    );
  }
  function GC() {
    var a, b;
    return null !=
      (b =
        null == (a = EC())
          ? void 0
          : a.then(function (c) {
              return FC(c);
            }))
      ? b
      : null;
  }
  var IC = function () {
      new lC();
      OB();
      this.deviceId = "";
      this.g = this.referrer = this.ppid = null;
      HC(this);
    },
    JC = function () {
      IC.g();
      var a = "h.3.612.0";
      iC.h && (a += "/vpaid_adapter");
      return a;
    },
    HC = function (a) {
      var b = GC();
      b &&
        b.then(function (c) {
          if (null == c) c = null;
          else {
            c = of(c);
            for (var d = [], e = 0, f = 0; f < c.length; f++) {
              var g = c.charCodeAt(f);
              255 < g && ((d[e++] = g & 255), (g >>= 8));
              d[e++] = g;
            }
            c = Oc(d, 3);
          }
          a.g = c;
        });
    };
  IC.g = function () {
    return C(IC);
  };
  var LC = function (a) {
      a = void 0 === a ? !1 : a;
      var b = hC(iC);
      if ((b && dC(b, "forceCustomPlayback")) || iC.h) return !0;
      if (Uw() && a) return !1;
      a = a && (Uw() || Vw(10)) && iC.getDisableCustomPlaybackForIOS10Plus();
      return ((sc || uc) && !a) || (rc && (!rc || !Tw(Sw, 4))) || KC()
        ? !0
        : !1;
    },
    MC = function (a) {
      return null === a
        ? !1
        : iC.h
        ? !0
        : vc || Uw()
        ? Ww(a)
          ? Uw() || (Vw(10) && iC.getDisableCustomPlaybackForIOS10Plus())
            ? !1
            : !0
          : !0
        : (rc && (!rc || !Tw(Sw, 4))) || KC()
        ? !0
        : !1;
    },
    NC = function () {
      var a = hC(iC);
      return a && dC(a, "disableOnScreenDetection") ? !1 : !xn();
    },
    KC = function () {
      return 1 === OC() || 2 === OC();
    },
    OC = function () {
      if (K(ml))
        switch ((IC.g(), 0)) {
          case 1:
            return 3;
          case 2:
            return 1;
        }
      return (IC.g(), IC.g(), "tvos" === (IC.g(), null)) ? 1 : yn() ? 2 : 0;
    };
  var PC = function (a, b) {
    return 0 == a.indexOf(b) ? a.substr(b.length) : null;
  };
  function QC() {
    if (xn()) return window.location.href;
    var a = ai(),
      b = a.h,
      c = a.g;
    a = a.j;
    var d = null;
    if (a)
      try {
        var e = yw(a.url),
          f = e.j,
          g = PC(f, "/v/");
        g || (g = PC(f, "/a/"));
        if (!g) throw Error("Can not extract standalone amp url.");
        var h = PC("/" + g, "/s/"),
          k = mw(e.g);
        k.remove("amp_js_v");
        k.remove("amp_lite");
        var m = h ? yw("https://" + h) : yw("http://" + g);
        lw(m, k);
        d = m.toString();
      } catch (n) {
        d = null;
      }
    return d ? d : b && b.url ? b.url : c && c.url ? c.url : "";
  }
  function RC() {
    var a = Xh();
    a = t(a);
    for (var b = a.next(); !b.done; b = a.next())
      if (((b = b.value), b.url && b.url.includes("amp=1"))) return !0;
    return null != window.context
      ? ((a = Number(window.context.ampcontextVersion)),
        isNaN(a) ? !1 : 0 < Math.floor(a))
      : null != ai().j;
  }
  function SC() {
    var a = E().location.ancestorOrigins;
    return a ? (0 < a.length ? [].concat(ha(a)).join(",") : "") : "";
  }
  function TC() {
    var a = E(),
      b = document;
    return new R(a.parent === a ? a.location.href : b.referrer);
  }
  function UC(a, b) {
    xw(a, "url", "");
    try {
      var c = 2083 - a.toString().length - 1;
      if (0 >= c) return a.toString();
      for (
        var d = b.slice(0, c), e = encodeURIComponent(d), f = c;
        0 < f && e.length > c;

      )
        (d = b.slice(0, f--)), (e = encodeURIComponent(d));
      xw(a, "url", d);
    } catch (g) {}
    return a.toString();
  }
  var W = {},
    VC =
      ((W.creativeView = "creativeview"),
      (W.start = "start"),
      (W.midpoint = "midpoint"),
      (W.firstQuartile = "firstquartile"),
      (W.thirdQuartile = "thirdquartile"),
      (W.complete = "complete"),
      (W.mute = "mute"),
      (W.unmute = "unmute"),
      (W.pause = "pause"),
      (W.rewind = "rewind"),
      (W.resume = "resume"),
      (W.fullscreen = "fullscreen"),
      (W.exitFullscreen = "exitfullscreen"),
      (W.expand = "expand"),
      (W.collapse = "collapse"),
      (W.close = "close"),
      (W.acceptInvitation = "acceptinvitation"),
      (W.adCanPlay = "adCanPlay"),
      (W.adStarted = "adStarted"),
      (W.abandon = "abandon"),
      (W.acceptInvitationLinear = "acceptinvitationlinear"),
      (W.engagedView = "engagedview"),
      (W.instreamAdComplete = "instreamAdComplete"),
      (W.skipShown = "skipshown"),
      (W.skippableStateChanged = "skippableStateChanged"),
      (W.skip = "skip"),
      (W.progress = "progress"),
      (W.publisher_invoked_skip = "PUBLISHER_INVOKED_SKIP"),
      (W.annotation_start = "annotation_start"),
      (W.annotation_click = "annotation_click"),
      (W.annotation_close = "annotation_close"),
      (W.cta_annotation_shown = "cta_annotation_shown"),
      (W.cta_annotation_clicked = "cta_annotation_clicked"),
      (W.cta_annotation_closed = "cta_annotation_closed"),
      (W.replay = "replay"),
      (W.stop = "stop"),
      (W.autoplayDisallowed = "autoplayDisallowed"),
      (W.error = "error"),
      (W.mediaLoadTimeout = "mediaLoadTimeout"),
      (W.linearChanged = "linearChanged"),
      (W.click = "click"),
      (W.contentPauseRequested = "contentPauseRequested"),
      (W.contentResumeRequested = "contentResumeRequested"),
      (W.discardAdBreak = "discardAdBreak"),
      (W.updateAdsRenderingSettings = "updateAdsRenderingSettings"),
      (W.durationChange = "durationChange"),
      (W.expandedChanged = "expandedChanged"),
      (W.autoClose = "autoClose"),
      (W.userClose = "userClose"),
      (W.userRecall = "userRecall"),
      (W.prefetched = "prefetched"),
      (W.loaded = "loaded"),
      (W.init = "init"),
      (W.allAdsCompleted = "allAdsCompleted"),
      (W.adMetadata = "adMetadata"),
      (W.adBreakReady = "adBreakReady"),
      (W.adBreakFetchError = "adBreakFetchError"),
      (W.log = "log"),
      (W.volumeChange = "volumeChange"),
      (W.companionBackfill = "companionBackfill"),
      (W.companionInitialized = "companionInitialized"),
      (W.companionImpression = "companionImpression"),
      (W.companionClick = "companionClick"),
      (W.impression = "impression"),
      (W.interaction = "interaction"),
      (W.adProgress = "adProgress"),
      (W.adBuffering = "adBuffering"),
      (W.trackingUrlPinged = "trackingUrlPinged"),
      (W.measurable_impression = "measurable_impression"),
      (W.custom_metric_viewable = "custom_metric_viewable"),
      (W.viewable_impression = "viewable_impression"),
      (W.fully_viewable_audible_half_duration_impression =
        "fully_viewable_audible_half_duration_impression"),
      (W.audio_audible = "audio_audible"),
      (W.audio_measurable = "audio_measurable"),
      (W.overlay_resize = "overlay_resize"),
      (W.overlay_unmeasurable_impression = "overlay_unmeasurable_impression"),
      (W.overlay_unviewable_impression = "overlay_unviewable_impression"),
      (W.overlay_viewable_immediate_impression =
        "overlay_viewable_immediate_impression"),
      (W.overlay_viewable_end_of_session_impression =
        "overlay_viewable_end_of_session_impression"),
      (W.externalActivityEvent = "externalActivityEvent"),
      (W.adEvent = "adEvent"),
      (W.configure = "configure"),
      (W.remainingTime = "remainingTime"),
      (W.destroy = "destroy"),
      (W.resize = "resize"),
      (W.volume = "volume"),
      (W.authorIconClicked = "videoAuthorIconClicked"),
      (W.authorNameClicked = "videoAuthorClicked"),
      (W.videoClicked = "videoClicked"),
      (W.videoIconClicked = "videoIconClicked"),
      (W.learnMoreClicked = "videoLearnMoreClicked"),
      (W.muteClicked = "videoMuteClicked"),
      (W.titleClicked = "videoTitleClicked"),
      (W.videoSkipClicked = "SKIPPED"),
      (W.unmuteClicked = "videoUnmuteClicked"),
      (W.vpaidEvent = "vpaidEvent"),
      (W.show_ad = "show_ad"),
      (W.video_card_endcap_collapse = "video_card_endcap_collapse"),
      (W.video_card_endcap_dismiss = "video_card_endcap_dismiss"),
      (W.video_card_endcap_impression = "video_card_endcap_impression"),
      (W.mediaUrlPinged = "mediaUrlPinged"),
      (W.breakStart = "breakstart"),
      (W.breakEnd = "breakend"),
      (W.omidReady = "omidReady"),
      (W.omidUnavailable = "omidUnavailable"),
      (W.omidAdSessionCompleted = "omidAdSessionCompleted"),
      (W.omidAdSessionAbandoned = "omidAdSessionAbandoned"),
      (W.verificationNotExecuted = "verificationNotExecuted"),
      (W.loadStart = "loadStart"),
      (W.seeked = "seeked"),
      (W.seeking = "seeking"),
      W);
  var WC = new (function () {
    this.g = new Map();
    this.j = 0;
    this.h = null != window.fetch;
  })();
  function XC(a) {
    var b = void 0 === b ? WC : b;
    var c = void 0 === c ? null : c;
    a = new mx(a, c ? c : c);
    var d = void 0 === d ? !1 : d;
    var e = void 0 === e ? !1 : e;
    null != a.g || e ? Fy(b, a.url, d, e, a.g) : Fy(b, a.url, d);
  }
  var X = function () {
    this.j = 0.01 > Math.random();
    this.h = Math.floor(4503599627370496 * Math.random());
    this.g = null;
  };
  X.prototype.report = function (a, b, c) {
    b = void 0 === b ? {} : b;
    if (null == w.G_testRunner && (this.j || (void 0 === c ? 0 : c))) {
      b.lid = a;
      JC() && (b.sdkv = JC());
      this.g && (b.palv = this.g);
      a = Dj().sort().join(",");
      nb(Sg(a)) || (b.e = a);
      b = YC(this, b);
      var d = new R("http://pagead2.googlesyndication.com/pagead/gen_204");
      kg(
        b,
        function (e, f) {
          null != e &&
            xw(
              d,
              f,
              null == e ? "" : "boolean" === typeof e ? (e ? "t" : "f") : "" + e
            );
        },
        this
      );
      b = TC().o;
      ("http" !== b && "https" !== b) || jw(d, b);
      b = d.toString();
      a = d.g.get("url");
      null != a && Bb() && 2083 < b.length && (b = UC(d, a));
      XC(b);
    }
  };
  var YC = function (a, b) {
    b.id = "ima_html5";
    var c = TC();
    b.c = a.h;
    b.domain = c.h;
    return b;
  };
  X.g = function () {
    return C(X);
  };
  function ZC(a) {
    var b = Date.now(),
      c = {};
    a = ((c["x-afma-token-requester-type"] = a), c);
    c =
      "https://pubads.g.doubleclick.net/adsid/integrator.json?aos=" +
      encodeURIComponent(SC());
    return new Px()
      .get({ url: c, withCredentials: !0, timeout: new kx(), headers: a })
      .then(function (d) {
        var e = Date.now();
        d = d.newToken || "";
        var f = {};
        X.g().report(182, ((f.t = e - b), (f.aos = SC()), f));
        return new $C(d);
      })
      .catch(function (d) {
        var e = "not instanceof Error";
        d instanceof Error && (e = nx(Number(d.message)));
        d = Date.now();
        var f = {};
        X.g().report(182, ((f.except = e), (f.t = d - b), f));
        return Promise.resolve(aD);
      });
  }
  var bD = function () {
    Q.call(this);
    this.g = null;
    this.l = new rx(this);
    eo(this, this.l);
    this.h = new wt(72e5);
    this.j = Promise.resolve(aD);
  };
  u(bD, Q);
  var cD = function (a) {
    var b = "requester_type_8";
    b = void 0 === b ? "requester_type_9" : b;
    var c = function (d) {
      a.g = d;
      return a.g;
    };
    a.j = ZC(b).then(c);
    a.h = new wt(72e5);
    a.l.O(a.h, "tick", function () {
      a.j = ZC(b).then(c);
    });
    a.h.start();
    co(a, function () {
      a.h.stop();
    });
  };
  bD.prototype.getId = function () {
    var a = this;
    return Ha(function (b) {
      if (1 == b.g)
        return (
          null != a.g && a.g !== aD
            ? ((b.g = 2), (b = void 0))
            : (b = xa(b, a.j, 3)),
          b
        );
      2 != b.g && (a.g = b.h);
      return b.return(a.g);
    });
  };
  var $C = function (a) {
      this.id = a;
    },
    aD = new $C("");
  var dD = function (a) {
    Q.call(this);
    this.j = [];
    this.h = !1;
    this.sessionId = a || "goog_" + Tg++;
  };
  u(dD, Q);
  dD.prototype.connect = function () {
    for (this.h = !0; 0 !== this.j.length; ) {
      var a = this.j.shift();
      a && this.sendMessage(a.name, a.type, a.data);
    }
  };
  var eD = function (a, b, c, d) {
    a.h ? a.sendMessage(b, c, d) : a.j.push({ name: b, type: c, data: d });
  };
  dD.prototype.sendMessage = function () {};
  var fD = function (a, b, c, d, e) {
    e = void 0 === e ? "" : e;
    qs.call(this, a);
    this.messageType = b;
    this.ra = c;
    this.sessionId = d;
    this.origin = e;
  };
  u(fD, qs);
  fD.prototype.toString = function () {
    return "";
  };
  var gD = { IMAGE: "Image", FLASH: "Flash", ALL: "All" },
    hD = { HTML: "Html", IFRAME: "IFrame", STATIC: "Static", ALL: "All" },
    iD = {
      IGNORE: "IgnoreSize",
      SELECT_EXACT_MATCH: "SelectExactMatch",
      SELECT_NEAR_MATCH: "SelectNearMatch",
      SELECT_FLUID: "SelectFluid",
    },
    jD = function () {
      this.allowCustom = !0;
      this.creativeType = this.resourceType = "All";
      this.sizeCriteria = "SelectExactMatch";
      this.nearMatchPercent = 90;
      this.adSlotIds = [];
    };
  y(
    "module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.CreativeType",
    gD
  );
  y(
    "module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.ResourceType",
    hD
  );
  y(
    "module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.SizeCriteria",
    iD
  );
  var lD = function (a, b) {
      b = void 0 === b ? new jD() : b;
      this.g = a;
      this.settings = b ? b : new jD();
      this.resourceType = kD(hD, this.settings.resourceType)
        ? this.settings.resourceType
        : "All";
      this.creativeType = kD(gD, this.settings.creativeType)
        ? this.settings.creativeType
        : "All";
      this.sizeCriteria = kD(iD, this.settings.sizeCriteria)
        ? this.settings.sizeCriteria
        : "SelectExactMatch";
      this.adSlotIds =
        null != this.settings.adSlotIds ? this.settings.adSlotIds : [];
      this.nearMatchPercent =
        "number" === typeof this.settings.nearMatchPercent &&
        0 < this.settings.nearMatchPercent &&
        100 >= this.settings.nearMatchPercent
          ? this.settings.nearMatchPercent
          : 90;
    },
    oD = function (a, b) {
      var c = [];
      b.forEach(function (d) {
        a.settings.allowCustom &&
          (!nb(d.getContent()) &&
          (isNaN(d.data.sequenceNumber) ||
            isNaN(d.data.mainAdSequenceNumber) ||
            d.data.mainAdSequenceNumber === d.data.sequenceNumber) &&
          mD(a, d)
            ? c.push(d)
            : ((d = nD(a, d)), null != d && !nb(d.getContent()) && c.push(d)));
      });
      return c;
    };
  lD.prototype.ie = function () {
    return this.resourceType;
  };
  var mD = function (a, b) {
      var c;
      if ((c = "Flash" !== b.getContentType())) {
        if ((c = "All" === a.resourceType || a.resourceType === b.ie()))
          (c = b.getContentType()),
            (c =
              null == c
                ? !0
                : "All" === a.creativeType || a.creativeType === c);
        c &&
          ((c = b.getAdSlotId()),
          (c =
            0 === a.adSlotIds.length
              ? !0
              : null != c
              ? a.adSlotIds.includes(c)
              : !1));
      }
      if (c)
        if (((c = b.getSize()), (b = !!b.data.fluidSize) || a.g.ge))
          a = b && a.g.ge;
        else if (
          ((b = "IgnoreSize" === a.sizeCriteria) ||
            ((b = a.g.size),
            (b =
              b == c
                ? !0
                : b && c
                ? b.width == c.width && b.height == c.height
                : !1)),
          b)
        )
          a = !0;
        else {
          if ((b = "SelectNearMatch" === a.sizeCriteria))
            (b = c.width),
              (c = c.height),
              (b =
                b > a.g.size.width ||
                c > a.g.size.height ||
                b < (a.nearMatchPercent / 100) * a.g.size.width ||
                c < (a.nearMatchPercent / 100) * a.g.size.height
                  ? !1
                  : !0);
          a = b;
        }
      else a = !1;
      return a;
    },
    nD = function (a, b) {
      b = pD(b);
      return null == b
        ? null
        : b.find(function (c) {
            return mD(a, c);
          }) || null;
    },
    kD = function (a, b) {
      return null != b && sg(a, b);
    };
  var qD = function (a, b) {
    this.message = a;
    this.errorCode = b;
  };
  qD.prototype.getErrorCode = function () {
    return this.errorCode;
  };
  qD.prototype.getMessage = function () {
    return this.message;
  };
  var rD = new qD(
      "Failed to initialize ad playback element before starting ad playback.",
      400
    ),
    sD = new qD("The provided {0} information: {1} is invalid.", 1101);
  function tD(a, b) {
    var c = void 0 === b ? null : b;
    var d = Ia.apply(2, arguments);
    if (!(c instanceof $B)) {
      var e = a.getErrorCode(),
        f = a.getMessage();
      if (0 < d.length)
        for (var g = 0; g < d.length; g++)
          f = f.replace(new RegExp("\\{" + g + "\\}", "ig"), d[g]);
      d = new $B("adPlayError", f, e);
      d.g = c;
      c = d;
    }
    return c;
  }
  var uD = function () {};
  uD.g = function () {
    throw Error("Must be overridden");
  };
  var vD = function () {
    this.g = 0;
  };
  u(vD, uD);
  vD.qb = void 0;
  vD.g = function () {
    return vD.qb ? vD.qb : (vD.qb = new vD());
  };
  function wD(a, b, c, d) {
    c = void 0 === c ? null : c;
    d = void 0 === d ? {} : d;
    var e = vD.g();
    0 === e.g && (e.g = 0.001 > Math.random() ? 2 : 1);
    if (2 === e.g) {
      e = {};
      var f = Object,
        g = f.assign;
      e.c = String(a);
      a = String;
      var h = window;
      if ("number" !== typeof h.goog_pvsid)
        try {
          var k = Object,
            m = k.defineProperty,
            n = void 0;
          n = void 0 === n ? Math.random : n;
          var q = Math.floor(n() * Math.pow(2, 52));
          m.call(k, h, "goog_pvsid", { value: q, configurable: !1 });
        } catch (r) {}
      e.pc = a(Number(h.goog_pvsid) || -1);
      e.em = c;
      e.lid = b;
      C(Eu);
      Di(g.call(f, {}, ((e.eids = ""), e), d), "esp");
    }
  }
  function xD() {
    var a = window;
    var b = void 0 === b ? function () {} : b;
    return new Promise(function (c) {
      var d = function () {
        c(b());
        eg(a, "load", d);
      };
      dg(a, "load", d);
    });
  }
  var yD = function () {
      this.cache = {};
    },
    AD = function () {
      zD || (zD = new yD());
      return zD;
    },
    BD = function (a) {
      var b = af(a, 3);
      if (!b) return 3;
      if (void 0 === bf(a, 2)) return 4;
      a = Date.now();
      return a > b + 2592e5 ? 2 : a > b + 432e5 ? 1 : 0;
    };
  yD.prototype.get = function (a, b) {
    if (this.cache[a]) return { Db: this.cache[a], success: !0 };
    var c = "";
    try {
      c = b.getItem("_GESPSK-" + a);
    } catch (g) {
      var d;
      wD(6, a, null == (d = g) ? void 0 : d.message);
      return { Db: null, success: !1 };
    }
    if (!c) return { Db: null, success: !0 };
    try {
      var e = Au(c);
      this.cache[a] = e;
      return { Db: e, success: !0 };
    } catch (g) {
      var f;
      wD(5, a, null == (f = g) ? void 0 : f.message);
      return { Db: null, success: !1 };
    }
  };
  yD.prototype.set = function (a, b) {
    var c = bf(a, 1),
      d = "_GESPSK-" + c;
    zu(a);
    try {
      b.setItem(d, of(a));
    } catch (f) {
      var e;
      wD(7, c, null == (e = f) ? void 0 : e.message);
      return !1;
    }
    this.cache[c] = a;
    return !0;
  };
  yD.prototype.remove = function (a, b) {
    a = bf(a, 1);
    try {
      b.removeItem("_GESPSK-" + a), delete this.cache[a];
    } catch (d) {
      var c;
      wD(8, a, null == (c = d) ? void 0 : c.message);
    }
  };
  var zD = null;
  var CD = function (a) {
    P.call(this);
    this.l = a;
    this.h = [];
    this.g = [];
    this.j = [];
    this.o = [];
  };
  u(CD, P);
  var DD = function (a, b) {
    a.g.push({ ec: !1, Na: b });
    gg(Dv) && b.Yc(a.l);
  };
  CD.prototype.L = function () {
    this.h.length = 0;
    this.j.length = 0;
    if (gg(Dv))
      for (var a = t(this.g), b = a.next(); !b.done; b = a.next())
        b.value.Na.kc.length = 0;
    this.g.length = 0;
    this.o.length = 0;
    P.prototype.L.call(this);
  };
  var ED = function () {
    var a = this;
    this.promise = new Promise(function (b, c) {
      a.resolve = b;
      a.reject = c;
    });
  };
  var FD = function (a) {
    a = Error.call(this, a);
    this.message = a.message;
    "stack" in a && (this.stack = a.stack);
    Object.setPrototypeOf(this, FD.prototype);
    this.name = "InputError";
  };
  u(FD, Error);
  var GD = function () {
      this.gb = !1;
    },
    HD = function () {
      GD.apply(this, arguments);
      this.kc = [];
      this.Pc = new ED();
    };
  u(HD, GD);
  var JD = function (a, b) {
      a.gb || ((a.gb = !0), (a.Tb = b), a.Pc.resolve(b), gg(Dv) && ID(a));
    },
    ID = function (a) {
      for (var b = t(a.kc), c = b.next(); !c.done; c = b.next())
        (c = c.value), c(a.Tb);
      a.kc.length = 0;
    };
  HD.prototype.Yc = function (a) {
    gg(Dv) && this.kc.push(a);
  };
  da.Object.defineProperties(HD.prototype, {
    promise: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.Pc.promise;
      },
    },
    Vb: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.gb;
      },
    },
    error: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.ud;
      },
    },
  });
  var KD = function () {
    HD.apply(this, arguments);
  };
  u(KD, HD);
  var LD = function (a, b) {
      JD(a, b);
    },
    MD = function (a, b) {
      b.then(function (c) {
        JD(a, c);
      });
    };
  KD.prototype.jb = function (a) {
    this.gb ||
      ((this.gb = !0),
      (this.Tb = null),
      (this.ud = a),
      this.Pc.reject(a),
      gg(Dv) && ID(this));
  };
  var ND = function (a) {
    this.gb = !1;
    this.g = a;
  };
  u(ND, GD);
  ND.prototype.Vb = function () {
    return this.g.gb;
  };
  da.Object.defineProperties(ND.prototype, {
    error: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.g.ud;
      },
    },
  });
  var OD = function (a) {
    ND.call(this, a);
    this.g = a;
  };
  u(OD, ND);
  da.Object.defineProperties(OD.prototype, {
    value: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.g.Tb;
      },
    },
  });
  var PD = function (a) {
    ND.call(this, a);
    this.g = a;
  };
  u(PD, ND);
  da.Object.defineProperties(PD.prototype, {
    value: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        var a;
        return null != (a = this.g.Tb) ? a : null;
      },
    },
  });
  var QD = function () {
    HD.apply(this, arguments);
  };
  u(QD, HD);
  QD.prototype.notify = function () {
    JD(this, null);
  };
  function RD(a, b, c) {
    var d, e, f, g, h;
    return Ha(function (k) {
      if (1 == k.g)
        return (
          (d = c
            ? a.filter(function (m) {
                return !m.ec;
              })
            : a),
          xa(
            k,
            Promise.all(
              d.map(function (m) {
                return m.Na.promise;
              })
            ),
            2
          )
        );
      if (a.length === d.length) return k.return();
      e = a.filter(function (m) {
        return m.ec;
      });
      if (gg(Ev)) {
        f = t(b);
        for (g = f.next(); !g.done; g = f.next()) (h = g.value), h.g();
        return xa(
          k,
          Promise.all(
            e.map(function (m) {
              return m.Na.promise;
            })
          ),
          0
        );
      }
      return xa(
        k,
        Promise.race([
          Promise.all(
            e.map(function (m) {
              return m.Na.promise;
            })
          ),
          new Promise(function (m) {
            return void setTimeout(m, c);
          }),
        ]),
        0
      );
    });
  }
  var TD = function (a, b, c) {
    P.call(this);
    var d = this;
    this.id = a;
    this.timeoutMs = b;
    this.o = c;
    this.G = this.F = this.D = this.l = !1;
    this.g = new CD(function () {
      SD(d);
    });
    eo(this, this.g);
  };
  u(TD, P);
  TD.prototype.start = function () {
    var a = this,
      b;
    return Ha(function (c) {
      if (1 == c.g) {
        if (a.l) return c.return();
        a.l = !0;
        c.j = 2;
        return xa(c, RD(a.g.g, a.g.o, a.timeoutMs), 4);
      }
      if (2 != c.g) {
        if (!a.ya()) {
          for (var d = 0, e = t(a.g.j), f = e.next(); !f.done; f = e.next()) {
            if (null == f.value.g.Tb)
              throw Error("missing input: " + a.id + "/" + d);
            ++d;
          }
          a.h();
        }
        return ya(c);
      }
      b = za(c);
      if (a.ya()) return c.return();
      !(b instanceof FD) &&
        b instanceof Error &&
        (a.o ? a.o(a.id, b) : a.A(a.id, b), UD(a, b));
      c.g = 0;
    });
  };
  var SD = function (a) {
      if (!a.l && a.D)
        try {
          var b = a.g.g,
            c = a.timeoutMs
              ? b.filter(function (k) {
                  return !k.ec;
                })
              : b,
            d = b.filter(function (k) {
              return k.ec;
            }),
            e,
            f =
              null ==
              (e = b.find(function (k) {
                return void 0 !== k.Na.error;
              }))
                ? void 0
                : e.Na.error;
          if (f) throw ((a.l = !0), f);
          if (
            !c.some(function (k) {
              return !k.Na.Vb;
            })
          ) {
            if (d.length)
              if (gg(Ev)) {
                for (var g = t(a.g.o), h = g.next(); !h.done; h = g.next())
                  h.value.g();
                if (
                  d.some(function (k) {
                    return !k.Na.Vb;
                  })
                )
                  return;
              } else if (
                (a.F ||
                  ((a.F = !0),
                  setTimeout(function () {
                    a.G = !0;
                    SD(a);
                  }, a.timeoutMs)),
                d.some(function (k) {
                  return !k.Na.Vb;
                }) && !a.G)
              )
                return;
            a.l = !0;
            a.h();
          }
        } catch (k) {
          !(a.ya() || k instanceof FD) &&
            k instanceof Error &&
            (a.o ? a.o(a.id, k) : a.A(a.id, k), UD(a, k));
        }
    },
    VD = function (a) {
      var b = void 0 === b ? new KD() : b;
      a.g.h.push(b);
      return b;
    },
    WD = function (a) {
      var b = void 0 === b ? new QD() : b;
      a.g.h.push(b);
      return b;
    },
    XD = function (a, b) {
      DD(a.g, b);
      b = new OD(b);
      a.g.j.push(b);
      return b;
    },
    YD = function (a, b) {
      DD(a.g, b);
      return new PD(b);
    },
    UD = function (a, b) {
      if (!a.o && a.g.h.length) {
        b = new FD(b.message);
        a = t(a.g.h);
        for (var c = a.next(); !c.done; c = a.next())
          if (((c = c.value), !c.Vb)) {
            var d = b;
            c.gb = !0;
            c.ud = d;
            c.Pc.reject(d);
            gg(Dv) && ID(c);
          }
      }
    };
  var ZD = function (a, b) {
    TD.call(this, a);
    this.id = a;
    this.A = b;
  };
  u(ZD, TD);
  function $D(a, b) {
    return Xe(a, xu, 2).some(function (c) {
      return bf(c, 1) === b && null != bf(c, 2);
    });
  }
  function aE(a) {
    var b = new Du();
    if (a) {
      var c = [],
        d = RegExp("^_GESPSK-(.+)$");
      try {
        for (var e = 0; e < a.length; e++) {
          var f = (d.exec(a.key(e)) || [])[1];
          f && c.push(f);
        }
      } catch (g) {}
      c = t(c);
      e = c.next();
      for (d = {}; !e.done; d = { zc: void 0 }, e = c.next())
        (d.zc = e.value),
          (e = AD().get(d.zc, a).Db) &&
            !$D(b, d.zc) &&
            ((f = BD(e)),
            2 !== f &&
              3 !== f &&
              (lf(e, 9, !1),
              (f = bf(e, 2)),
              $e(b, 2, xu, e),
              (e = {}),
              wD(19, d.zc, null, ((e.hs = f ? "1" : "0"), e))));
    }
    if (!Xe(b, xu, 2).length) return null;
    wD(50, "");
    return Oc(b.g(), 3);
  }
  var bE = {};
  var cE = function () {
    P.call(this);
    this.o = [];
    this.A = [];
    this.l = {};
    this.g = [];
    this.h = new ED();
    this.j = {};
  };
  u(cE, P);
  var dE = function (a, b) {
      eo(a, b);
      a.o.push(b);
    },
    eE = function (a, b) {
      b = t(b);
      for (var c = b.next(); !c.done; c = b.next()) dE(a, c.value);
    },
    fE = function (a) {
      var b, c, d, e, f, g, h, k, m, n, q, r;
      Ha(function (v) {
        switch (v.g) {
          case 1:
            if (!a.g.length) {
              v.g = 2;
              break;
            }
            return xa(
              v,
              Promise.all(
                a.g.map(function (x) {
                  return x.h.promise;
                })
              ),
              2
            );
          case 2:
            b = t(a.o);
            for (c = b.next(); !c.done; c = b.next())
              (d = c.value), gg(Dv) ? ((d.D = !0), SD(d)) : d.start();
            e = t(a.A);
            for (f = e.next(); !f.done; f = e.next()) (g = f.value), fE(g);
            if (!a.j) {
              v.g = 4;
              break;
            }
            h = Object.keys(a.j);
            if (!h.length) {
              v.g = 4;
              break;
            }
            return xa(
              v,
              Promise.all(
                Object.values(a.j).map(function (x) {
                  return x.promise;
                })
              ),
              6
            );
          case 6:
            for (k = v.h, m = 0, n = t(h), q = n.next(); !q.done; q = n.next())
              (r = q.value), (a.l[r] = k[m++]);
          case 4:
            return a.h.resolve(a.l), v.return(a.h.promise);
        }
      });
    };
  cE.prototype.L = function () {
    P.prototype.L.call(this);
    this.o.length = 0;
    this.A.length = 0;
    this.g.length = 0;
  };
  var gE = function (a, b, c, d) {
    ZD.call(this, 1041, d);
    this.storage = b;
    this.B = XD(this, a);
    c && (this.j = YD(this, c));
  };
  u(gE, ZD);
  gE.prototype.h = function () {
    var a = this.B.value,
      b,
      c,
      d =
        null != (c = this.storage)
          ? c
          : null == (b = this.j)
          ? void 0
          : b.value;
    d && AD().set(a, d) && null != bf(a, 2) && wD(27, bf(a, 1));
  };
  var hE = function (a, b) {
    ZD.call(this, 1094, b);
    this.j = WD(this);
    this.B = XD(this, a);
  };
  u(hE, ZD);
  hE.prototype.h = function () {
    var a = this.B.value;
    if (a) {
      if (void 0 !== a)
        for (var b = t(Object.keys(a)), c = b.next(); !c.done; c = b.next())
          if (((c = c.value), c.startsWith("_GESPSK")))
            try {
              a.removeItem(c);
            } catch (d) {}
      zD = new yD();
      this.j.notify();
    }
  };
  var iE = function (a, b) {
    ZD.call(this, 1048, b);
    this.j = VD(this);
    this.B = VD(this);
    this.H = XD(this, a);
  };
  u(iE, ZD);
  iE.prototype.h = function () {
    var a = this.H.value,
      b = function (c) {
        var d = {};
        wD(
          c,
          bf(a, 1),
          null,
          ((d.tic = String(Math.round((Date.now() - af(a, 3)) / 6e4))), d)
        );
      };
    switch (BD(a)) {
      case 0:
        b(24);
        break;
      case 1:
        b(25);
        JD(this.B, a);
        break;
      case 2:
        b(26);
        JD(this.j, a);
        break;
      case 3:
        wD(9, bf(a, 1));
        JD(this.j, a);
        break;
      case 4:
        b(23), JD(this.j, a);
    }
  };
  var jE = function (a, b, c) {
    ZD.call(this, 1027, c);
    this.qc = a;
    this.storage = b;
    this.j = VD(this);
    this.B = VD(this);
  };
  u(jE, ZD);
  jE.prototype.h = function () {
    var a = AD().get(this.qc, this.storage).Db;
    if (!a) {
      a = zu(yu(this.qc));
      var b = this.B,
        c = a.jb(vu(100));
      JD(b, c);
    }
    JD(this.j, a);
  };
  var kE = function (a, b, c) {
    ZD.call(this, 1046, c);
    this.output = WD(this);
    this.j = VD(this);
    this.B = XD(this, b);
    DD(this.g, a);
  };
  u(kE, ZD);
  kE.prototype.h = function () {
    JD(this.j, this.B.value);
  };
  var lE = function (a, b, c) {
    ZD.call(this, 1047, c);
    this.collectorFunction = a;
    this.j = VD(this);
    this.B = VD(this);
    this.H = VD(this);
    this.J = XD(this, b);
  };
  u(lE, ZD);
  lE.prototype.h = function () {
    var a = this,
      b = this.J.value,
      c = bf(b, 1);
    wD(18, c);
    try {
      var d = di();
      this.collectorFunction()
        .then(function (e) {
          wD(29, c, null, { delta: String(di() - d) });
          var f = a.j,
            g = mf(b, 2, e);
          JD(f, g);
          JD(a.H, null != e ? e : null);
        })
        .catch(function (e) {
          wD(28, c, mE(e));
          e = a.B;
          var f = b.jb(vu(106));
          JD(e, f);
        });
    } catch (e) {
      wD(1, c, mE(e)), LD(this.B, b.jb(vu(107)));
    }
  };
  function mE(a) {
    return "string" === typeof a ? a : a instanceof Error ? a.message : null;
  }
  var nE = function (a, b) {
    ZD.call(this, 1028, b);
    this.j = VD(this);
    this.B = XD(this, a);
  };
  u(nE, ZD);
  nE.prototype.h = function () {
    var a = this.B.value,
      b = bf(a, 1);
    null != af(a, 3) || wD(35, b);
    JD(this.j, a);
  };
  var oE = function (a, b, c, d, e) {
    ZD.call(this, 1050, e);
    this.J = c;
    this.H = d;
    this.j = VD(this);
    this.B = XD(this, a);
    this.N = YD(this, b);
  };
  u(oE, ZD);
  oE.prototype.h = function () {
    var a = this.B.value,
      b = bf(a, 1),
      c = this.N.value;
    if (null == c) wD(41, b), a.jb(vu(111)), JD(this.j, a);
    else if ("string" !== typeof c)
      wD(21, b), (b = this.j), (a = a.jb(vu(113))), JD(b, a);
    else {
      if (c.length > (/^(\d+)$/.test(b) ? this.H : this.J)) {
        var d = {};
        wD(12, b, null, ((d.sl = String(c.length)), d));
        b = a.jb(vu(108));
        Le(b, 2);
      } else c.length || wD(20, b), Le(a, 10);
      JD(this.j, a);
    }
  };
  var pE = function (a) {
    ZD.call(this, 1046, a);
    this.output = WD(this);
  };
  u(pE, ZD);
  pE.prototype.h = function () {
    var a = this;
    xD().then(function () {
      a.output.notify();
    });
  };
  function qE(a, b, c, d, e) {
    var f, g, h, k, m, n, q, r, v, x, H, S, la;
    return Ha(function (V) {
      return 1 == V.g
        ? ((f = new cE()),
          (g = new jE(a, c, e)),
          dE(f, g),
          dE(f, new gE(g.B, void 0, d, e)),
          (h = new nE(g.j, e)),
          dE(f, h),
          (k = new iE(h.j, e)),
          dE(f, k),
          (m = new lE(b, k.j, e)),
          dE(f, m),
          dE(f, new gE(m.B, void 0, d, e)),
          (n = new oE(m.j, m.H, 300, 1e3, e)),
          dE(f, n),
          dE(f, new gE(n.j, void 0, d, e)),
          (q = new pE(e)),
          dE(f, q),
          (r = new kE(q.output, k.B, e)),
          dE(f, r),
          (v = new lE(b, r.j, e)),
          dE(f, v),
          (x = new gE(v.j, void 0, d, e)),
          dE(f, x),
          fE(f),
          (la = a),
          xa(V, n.j.promise, 2))
        : V.return({
            id: la,
            collectorGeneratedData:
              null != (S = null == (H = V.h) ? void 0 : bf(H, 2)) ? S : null,
          });
    });
  }
  var rE = function (a, b, c, d) {
    ZD.call(this, 1059, d);
    this.J = b;
    this.H = c;
    this.j = VD(this);
    this.N = XD(this, a);
    this.B = YD(this, c);
  };
  u(rE, ZD);
  rE.prototype.h = function () {
    var a = this.B.value;
    if (a) {
      var b = this.N.value,
        c = b.id,
        d = b.collectorFunction,
        e;
      b = null != (e = b.networkCode) ? e : c;
      c = {};
      wD(42, b, null, ((c.ea = String(Number(this.J))), c));
      MD(this.j, qE(b, d, a, this.H, this.A));
    }
  };
  var sE = function (a, b) {
    ZD.call(this, 1057, b);
    this.j = a;
    this.B = VD(this);
    this.H = VD(this);
  };
  u(sE, ZD);
  sE.prototype.h = function () {
    if (this.j)
      if ("object" !== typeof this.j)
        wD(46, "UNKNOWN_COLLECTOR_ID"), tE(this, "UNKNOWN_COLLECTOR_ID", 112);
      else {
        var a = this.j.id,
          b = this.j.networkCode;
        a && b && (delete this.j.id, wD(47, a + ";" + b));
        a = null != b ? b : a;
        "string" !== typeof a
          ? ((b = {}),
            wD(
              37,
              "INVALID_COLLECTOR_ID",
              null,
              ((b.ii = JSON.stringify(a)), b)
            ),
            tE(this, "INVALID_COLLECTOR_ID", 102))
          : "function" !== typeof this.j.collectorFunction
          ? (wD(14, a), tE(this, a, 105))
          : C(fg).g(Cv.g, Cv.defaultValue).includes(a)
          ? (wD(22, a), tE(this, a, 104))
          : JD(this.H, this.j);
      }
    else wD(39, "UNKNOWN_COLLECTOR_ID"), tE(this, "UNKNOWN_COLLECTOR_ID", 110);
  };
  var tE = function (a, b, c) {
    a = a.B;
    b = yu(b).jb(vu(c));
    JD(a, b);
  };
  var uE = function (a, b, c, d, e) {
    var f = document;
    f = void 0 === f ? document : f;
    e = void 0 === e ? bE : e;
    this.g = b;
    this.j = c;
    this.o = f;
    this.K = d;
    this.I = e;
    this.B = [];
    this.A = [];
    this.l = [];
    this.h = 0;
    a = t(a);
    for (b = a.next(); !b.done; b = a.next()) this.push(b.value);
  };
  uE.prototype.push = function (a) {
    var b = this;
    this.j || this.K();
    var c = function (f, g) {
      return void vE(b, f, g);
    };
    a = new sE(a, c);
    var d = new gE(a.B, void 0, this.g, c);
    c = new rE(a.H, this.j, this.g, c, this.I);
    var e = new cE();
    eE(e, [a, d, c]);
    fE(e);
    a = c.j.promise;
    this.B.push(a);
    d = t(this.A);
    for (c = d.next(); !c.done; c = d.next()) a.then(c.value);
  };
  uE.prototype.addOnSignalResolveCallback = function (a) {
    this.A.push(a);
    for (var b = t(this.B), c = b.next(); !c.done; c = b.next())
      c.value.then(a);
  };
  uE.prototype.addErrorHandler = function (a) {
    this.l.push(a);
  };
  uE.prototype.clearAllCache = function () {
    var a = this,
      b =
        this.o.currentScript instanceof HTMLScriptElement
          ? this.o.currentScript.src
          : "";
    if (1 === this.h) {
      var c = {};
      wD(49, "", null, ((c.url = b), c));
    } else if (
      ((c = String(Ph(null != b ? b : ""))),
      C(fg).g(Bv.g, Bv.defaultValue).includes(c))
    )
      (c = {}), wD(48, "", null, ((c.url = b), c));
    else {
      var d = new cE();
      c = new hE(this.g, function (e, f) {
        return void vE(a, e, f);
      });
      dE(d, c);
      fE(d);
      this.h = 1;
      setTimeout(function () {
        a.h = 0;
      }, 1e3 * hg());
      d = {};
      wD(43, "", null, ((d.url = b), d));
      return c.j.promise;
    }
  };
  var vE = function (a, b, c) {
      a = t(a.l);
      for (var d = a.next(); !d.done; d = a.next()) (d = d.value), d(b, c);
    },
    wE = function (a) {
      this.push = function (b) {
        a.push(b);
      };
      this.addOnSignalResolveCallback = function (b) {
        a.addOnSignalResolveCallback(b);
      };
      this.addErrorHandler = function (b) {
        a.addErrorHandler(b);
      };
      this.clearAllCache = function () {
        a.clearAllCache();
      };
    };
  function xE(a, b, c, d, e, f) {
    f = void 0 === f ? bE : f;
    Lh() !== Mh()
      ? wD(16, "")
      : (yE(a, "encryptedSignalProviders", c, e) &&
          yE(a, "secureSignalProviders", c, e)) ||
        (wD(38, ""),
        zE(a, "encryptedSignalProviders", b, f, c, d, e),
        zE(a, "secureSignalProviders", b, f, c, function () {}, e));
  }
  function yE(a, b, c, d) {
    if (void 0 === a[b] || a[b] instanceof Array) return !1;
    a = a[b];
    d && a.addOnSignalResolveCallback(d);
    a.addErrorHandler(c);
    return !0;
  }
  function zE(a, b, c, d, e, f, g) {
    var h,
      k = new uE(
        null != (h = a[b]) ? h : [],
        c,
        "secureSignalProviders" === b,
        f,
        d
      );
    a[b] = new wE(k);
    g && k.addOnSignalResolveCallback(g);
    k.addErrorHandler(e);
  }
  function AE(a, b, c, d, e) {
    var f = void 0 === f ? bE : f;
    var g = new KD();
    JD(g, b);
    xE(a, g, c, d, e, f);
  }
  function BE(a, b, c, d) {
    var e = CE,
      f = new Map();
    b = b.map(function (g) {
      var h = g.qc;
      return new Promise(function (k) {
        f.set(h, k);
      });
    });
    AE(a, c, d, e, function (g) {
      var h = g.collectorGeneratedData;
      g = g.id;
      var k;
      return void (null == (k = f.get(g))
        ? void 0
        : k({ collectorGeneratedData: h, id: g }));
    });
    return b;
  }
  function DE() {
    var a;
    return null != (a = w.googletag) ? a : (w.googletag = { cmd: [] });
  }
  function EE(a) {
    if (!a || oC(a)) return null;
    try {
      return window.localStorage;
    } catch (b) {
      return null;
    }
  }
  function FE(a, b) {
    (a = EE(a)) && AE(DE(), a, function () {}, CE, b);
  }
  function GE(a, b) {
    return (b = EE(b)) && 0 !== a.length
      ? BE(DE(), a, b, function () {})
      : null;
  }
  function CE() {}
  function HE(a, b, c, d) {
    var e = new ED(),
      f = "",
      g = function (k) {
        try {
          var m = "object" === typeof k.data ? k.data : JSON.parse(k.data);
          f === m.paw_id &&
            (eg(a, "message", g),
            m.error ? e.reject(Error(m.error)) : e.resolve(d(m)));
        } catch (n) {}
      },
      h = IE(a);
    return h
      ? (dg(a, "message", g), (f = c(h)), e.promise)
      : (c = JE(a))
      ? ((f = String(Math.floor(2147483647 * Nh()))),
        dg(a, "message", g),
        b(c, f),
        e.promise)
      : null;
  }
  function KE(a) {
    return HE(
      a,
      function (b, c) {
        var d, e;
        return void (null ==
        (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig)
          ? void 0
          : d.postMessage(c));
      },
      function (b) {
        return b.getQueryInfo();
      },
      function (b) {
        return b.signal;
      }
    );
  }
  function LE() {
    var a = window;
    return !!IE(a) || !!JE(a);
  }
  function IE(a) {
    var b;
    if (
      "function" === typeof (null == (b = a.gmaSdk) ? void 0 : b.getQueryInfo)
    )
      return a.gmaSdk;
  }
  function JE(a) {
    var b, c, d, e, f, g;
    if (
      "function" ===
        typeof (null == (b = a.webkit)
          ? void 0
          : null == (c = b.messageHandlers)
          ? void 0
          : null == (d = c.getGmaQueryInfo)
          ? void 0
          : d.postMessage) ||
      "function" ===
        typeof (null == (e = a.webkit)
          ? void 0
          : null == (f = e.messageHandlers)
          ? void 0
          : null == (g = f.getGmaSig)
          ? void 0
          : g.postMessage)
    )
      return a.webkit.messageHandlers;
  }
  var NE = function () {
      this.timeoutMs = ME;
      this.h = KE;
      this.signal = null;
      this.g = 0;
    },
    OE = function () {
      return (K(Zk) && rc) || (K(Xk) && (vc || Uw()));
    },
    PE = function (a) {
      if (LE()) {
        if (K($k) || (K(Yk) && rc) || (K(Wk) && (vc || Uw())))
          return Promise.resolve("0");
        if (K(al) || OE()) {
          var b;
          return (null != (b = a.h(window)) ? b : Promise.resolve(null)).catch(
            function () {
              return "0";
            }
          );
        }
      }
      return Promise.resolve(null);
    },
    RE = function (a) {
      var b;
      return Ha(function (c) {
        if (1 == c.g) {
          if (!OE()) return c.return(QE(a));
          b = Date.now() - a.g;
          !a.signal || 3e5 < b
            ? (c = xa(c, QE(a), 3))
            : ((c.g = 2), (c = void 0));
          return c;
        }
        2 != c.g && ((a.signal = c.h), (a.g = Date.now()));
        return c.return(a.signal);
      });
    },
    QE = function (a) {
      return Promise.race([
        PE(a).then(function (b) {
          if (null == b) return null;
          a.signal = 1e4 < b.length ? "0" : b;
          a.g = Date.now();
          return a.signal;
        }),
        yt(a.timeoutMs),
      ]);
    };
  function nj(a, b) {
    return b instanceof RegExp ? "__REGEXP" + b.toString() : b;
  }
  function SE(a, b) {
    return b && 0 === b.toString().indexOf("__REGEXP")
      ? ((a = b.split("__REGEXP")[1].match(/\/(.*)\/(.*)?/)),
        new RegExp(a[1], a[2] || ""))
      : b;
  }
  var TE = function (a, b) {
    dD.call(this, b);
    this.l = a;
    this.g = null;
    this.A = new rx(this);
    this.A.O(E(), "message", this.B);
  };
  u(TE, dD);
  var UE = function (a) {
    if (null == a || "string" !== typeof a || !a.startsWith("ima://"))
      return null;
    a = a.substr(6);
    try {
      return JSON.parse(a, SE);
    } catch (b) {
      return null;
    }
  };
  TE.prototype.sendMessage = function (a, b, c) {
    if (null != this.g && null != this.g.postMessage) {
      var d = this.g,
        e = d.postMessage,
        f = {};
      f.name = a;
      f.type = b;
      null != c && (f.data = c);
      f.sid = this.sessionId;
      f.channel = this.l;
      a = [];
      pj(new oj(), f, a);
      e.call(d, "ima://" + a.join(""), "*");
    }
    null != this.g && null == this.g.postMessage && X.g().report(11);
  };
  TE.prototype.L = function () {
    bo(this.A);
    this.g = null;
    dD.prototype.L.call(this);
  };
  TE.prototype.B = function (a) {
    a = a.g;
    var b = UE(a.data);
    if (VE(this, b)) {
      if (null === this.g) (this.g = a.source), this.h || this.connect();
      else if (this.g !== a.source) return;
      VE(this, b) &&
        this.dispatchEvent(
          new fD(b.name, b.type, b.data || {}, b.sid, a.origin)
        );
    }
  };
  var VE = function (a, b) {
    if (null == b) return !1;
    var c = b.channel;
    if (null == c || c !== a.l) return !1;
    b = b.sid;
    return null == b || ("*" !== a.sessionId && b !== a.sessionId) ? !1 : !0;
  };
  var WE = function () {
    Q.call(this);
    this.F = !1;
    this.g = null;
    this.A = this.D = this.J = !1;
    this.h = 0;
    this.l = [];
    this.B = !1;
    this.U = this.N = Infinity;
    this.j = 0;
    this.G = {};
    this.H = new rx(this);
    eo(this, this.H);
  };
  u(WE, Q);
  var YE = function (a, b) {
      null == b || a.F || ((a.g = b), XE(a), (a.F = !0));
    },
    $E = function (a) {
      null != a.g &&
        a.F &&
        (ZE(a),
        (a.F = !1),
        (a.D = !1),
        (a.A = !1),
        (a.h = 0),
        (a.l = []),
        (a.B = !1));
    },
    XE = function (a) {
      ZE(a);
      !(a.g instanceof Q) && "ontouchstart" in document.documentElement && vc
        ? ((a.G = {
            touchstart: function (b) {
              a.D = !0;
              a.h = b.touches.length;
              a.j && (window.clearTimeout(a.j), (a.j = 0), (a.J = !0));
              a.B = aF(a, b.touches) || 1 !== b.touches.length;
              a.B
                ? ((a.N = Infinity), (a.U = Infinity))
                : ((a.N = b.touches[0].clientX), (a.U = b.touches[0].clientY));
              b = b.touches;
              a.l = [];
              for (var c = 0; c < b.length; c++) a.l.push(b[c].identifier);
            },
            touchmove: function (b) {
              a.h = b.touches.length;
              if (
                !Vw(8) ||
                Math.pow(b.changedTouches[0].clientX - a.N, 2) +
                  Math.pow(b.changedTouches[0].clientY - a.U, 2) >
                  Math.pow(5, 2)
              )
                a.A = !0;
            },
            touchend: function (b) {
              return void bF(a, b);
            },
          }),
          kg(a.G, function (b, c) {
            a.g.addEventListener(c, b, !1);
          }))
        : a.H.O(a.g, "click", a.V);
    },
    ZE = function (a) {
      a.H.vb(a.g, "click", a.V);
      kg(
        a.G,
        function (b, c) {
          this.g.removeEventListener(c, b, !1);
        },
        a
      );
      a.G = {};
    },
    bF = function (a, b) {
      !a.D ||
        1 !== a.h ||
        a.A ||
        a.J ||
        a.B ||
        !aF(a, b.changedTouches) ||
        (a.j = window.setTimeout(function () {
          return void cF(a);
        }, 300));
      a.h = b.touches.length;
      0 === a.h && ((a.D = !1), (a.A = !1), (a.l = []));
      a.J = !1;
    };
  WE.prototype.V = function () {
    cF(this);
  };
  var aF = function (a, b) {
      for (var c = 0; c < b.length; c++)
        if (a.l.includes(b[c].identifier)) return !0;
      return !1;
    },
    cF = function (a) {
      a.j = 0;
      a.dispatchEvent(new qs("click"));
    };
  WE.prototype.L = function () {
    $E(this);
    Q.prototype.L.call(this);
  };
  var dF = OB().toString();
  function eF(a) {
    return "number" === typeof a ? a.toString() : "";
  }
  var fF = function () {
      this.g = new ED();
      this.j = new Px();
      this.h = !1;
    },
    hF = function (a) {
      if (!a.h)
        if (((a.h = !0), K(rl) || K(ql))) {
          var b = gF();
          b &&
            a.j
              .get({ url: b, timeout: new kx() })
              .then(function (c) {
                c = JSON.stringify(c);
                a.g.resolve(tu(c));
              })
              .catch(function (c) {
                X.g().report(
                  186,
                  { errorCode: c.errorCode, httpStatus: c.g },
                  !0
                );
                a.g.resolve(null);
              });
        } else a.g.resolve(null);
    };
  fF.prototype.getConfig = function () {
    this.h || hF(this);
    return this.g.promise;
  };
  var gF = function () {
      var a = K(ql) ? bi() : K(rl) ? QC() : null;
      return a
        ? xw(
            new R("https://securepubads.g.doubleclick.net/pagead/ppub_config"),
            "ippd",
            a
          ).toString()
        : null;
    },
    iF = new fF();
  var jF =
    "abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting".split(
      " "
    );
  var kF = function (a, b) {
    P.call(this);
    this.g = a;
    this.timeoutMs = b;
    eo(this, this.g);
  };
  u(kF, P);
  var mF = function (a) {
      if (!Ov(a.g.caller)) return Promise.resolve(null);
      var b = new ED(),
        c = null;
      a.g.addEventListener(function (e) {
        if (1 === e.pingData.internalErrorState) b.resolve(null);
        else if ("listenerRegistered" === e.eventName)
          (c = e.listenerId),
            1 === e.pingData.applicableSections.length &&
              -1 === e.pingData.applicableSections[0] &&
              b.resolve(new lF("", "-1"));
        else if ("signalStatus" === e.eventName && "ready" === e.data) {
          e = e.pingData;
          var f,
            g = (null != (f = e.applicableSections) ? f : []).join("_");
          b.resolve(new lF(e.gppString, g));
        }
      });
      var d = new Promise(function (e) {
        setTimeout(function () {
          e(null);
        }, a.timeoutMs);
      });
      d = Promise.race([b.promise, d]);
      d.then(function () {
        null !== c && a.g.removeEventListener(c);
      });
      return d;
    },
    lF = function (a, b) {
      this.gppString = a;
      this.sid = b;
    };
  var nF = fa([
      "https://pagead2.googlesyndication.com/omsdk/releases/live/omweb-v1.js",
    ]),
    oF = fa([
      "https://pagead2.googlesyndication.com/omsdk/releases/control/omweb-v1.js",
    ]),
    pF = fa([
      "https://pagead2.googlesyndication.com/omsdk/releases/canary/omweb-v1.js",
    ]),
    qF = fa([
      "https://pagead2.googlesyndication.com/omsdk/releases/experimental/omweb-v1.js",
    ]),
    rF = Ji(nF),
    sF = Ji(oF),
    tF = Ji(pF),
    uF = Ji(qF);
  function vF(a) {
    return (a = mh(a)) && a.omidSessionInterface
      ? a.omidSessionInterface
      : null;
  }
  function wF(a) {
    var b, c, d, e, f, g;
    return Ha(function (h) {
      if (1 == h.g)
        return (
          (b = ih("IFRAME", {
            sandbox: "allow-scripts allow-same-origin",
            style: "display: none",
          })),
          (c = new Promise(function (k) {
            b.addEventListener("load", function () {
              k();
            });
          })),
          a.appendChild(b),
          xa(h, c, 2)
        );
      d = ih("SCRIPT");
      e = rF;
      K(Gk) ? (e = sF) : K(Hk) ? (e = tF) : K(Ik) && (e = uF);
      Gh(d, e);
      f = new Promise(function (k, m) {
        d.addEventListener("load", function () {
          vF(b) ? k(b) : m();
        });
      });
      g = b.contentDocument || b.contentWindow.document;
      g.head.appendChild(d);
      return h.return(f);
    });
  }
  var xF = function (a, b) {
    Q.call(this);
    this.h = b;
    this.g = vF(a);
  };
  u(xF, Q);
  var zF = function (a) {
      try {
        a.g &&
          a.g.registerSessionObserver(function (b) {
            "sessionStart" === b.type
              ? yF(a, a.h)
              : "sessionFinish" === b.type && zF(a);
          });
      } catch (b) {
        a.dispatchEvent(new Event("error"));
      }
    },
    yF = function (a, b) {
      b instanceof nB && (b = b.T);
      var c;
      if ("AUDIO" !== (null == (c = b.tagName) ? void 0 : c.toUpperCase()))
        try {
          a.g && a.g.setVideoElement(b);
        } catch (d) {
          a.dispatchEvent(new Event("error"));
        }
    },
    AF = function (a, b) {
      try {
        a.g && a.g.setSessionClientWindow(b);
      } catch (c) {
        a.dispatchEvent(new Event("error"));
      }
    };
  var BF = function (a) {
    this.data = a;
  };
  l = BF.prototype;
  l.getTotalAds = function () {
    return this.data.totalAds;
  };
  l.getMaxDuration = function () {
    return this.data.maxDuration;
  };
  l.getAdPosition = function () {
    return this.data.adPosition;
  };
  l.getPodIndex = function () {
    return this.data.podIndex;
  };
  l.getTimeOffset = function () {
    return this.data.timeOffset;
  };
  l.getIsBumper = function () {
    return this.data.isBumper;
  };
  BF.prototype.getIsBumper = BF.prototype.getIsBumper;
  BF.prototype.getTimeOffset = BF.prototype.getTimeOffset;
  BF.prototype.getPodIndex = BF.prototype.getPodIndex;
  BF.prototype.getAdPosition = BF.prototype.getAdPosition;
  BF.prototype.getMaxDuration = BF.prototype.getMaxDuration;
  BF.prototype.getTotalAds = BF.prototype.getTotalAds;
  var CF = function (a) {
    this.data = a;
  };
  l = CF.prototype;
  l.getContent = function () {
    return this.data.content;
  };
  l.getContentType = function () {
    return this.data.contentType;
  };
  l.getWidth = function () {
    return this.getSize().width;
  };
  l.getHeight = function () {
    return this.getSize().height;
  };
  l.getAdSlotId = function () {
    return this.data.adSlotId;
  };
  l.getSize = function () {
    return this.data.size;
  };
  l.ie = function () {
    return this.data.resourceType;
  };
  var pD = function (a) {
    return (a = a.data.backupCompanions)
      ? a.map(function (b) {
          return new CF(b);
        })
      : [];
  };
  CF.prototype.getAdSlotId = CF.prototype.getAdSlotId;
  CF.prototype.getHeight = CF.prototype.getHeight;
  CF.prototype.getWidth = CF.prototype.getWidth;
  CF.prototype.getContentType = CF.prototype.getContentType;
  CF.prototype.getContent = CF.prototype.getContent;
  var DF = function (a, b) {
    this.h = a;
    this.g = b;
  };
  DF.prototype.getAdIdValue = function () {
    return this.h;
  };
  DF.prototype.getAdIdRegistry = function () {
    return this.g;
  };
  DF.prototype.getAdIdRegistry = DF.prototype.getAdIdRegistry;
  DF.prototype.getAdIdValue = DF.prototype.getAdIdValue;
  var Y = function (a) {
    this.data = a;
  };
  Y.prototype.getAdId = function () {
    return this.data.adId;
  };
  Y.prototype.getCreativeAdId = function () {
    return this.data.creativeAdId;
  };
  Y.prototype.getCreativeId = function () {
    return this.data.creativeId;
  };
  var EF = function (a) {
    return a.data.adQueryId;
  };
  l = Y.prototype;
  l.getAdSystem = function () {
    return this.data.adSystem;
  };
  l.getAdvertiserName = function () {
    return this.data.advertiserName;
  };
  l.getApiFramework = function () {
    return this.data.apiFramework;
  };
  l.getWrapperAdIds = function () {
    return this.data.adWrapperIds;
  };
  l.getWrapperCreativeIds = function () {
    return this.data.adWrapperCreativeIds;
  };
  l.getWrapperAdSystems = function () {
    return this.data.adWrapperSystems;
  };
  l.isLinear = function () {
    return this.data.linear;
  };
  l.isSkippable = function () {
    return this.data.skippable;
  };
  l.getContentType = function () {
    return this.data.contentType;
  };
  l.getDescription = function () {
    return this.data.description;
  };
  l.getTitle = function () {
    return this.data.title;
  };
  l.getDuration = function () {
    return this.data.duration;
  };
  l.getVastMediaWidth = function () {
    return this.data.vastMediaWidth;
  };
  l.getVastMediaHeight = function () {
    return this.data.vastMediaHeight;
  };
  l.getWidth = function () {
    return this.data.width;
  };
  l.getHeight = function () {
    return this.data.height;
  };
  l.getUiElements = function () {
    return this.data.uiElements;
  };
  l.getMinSuggestedDuration = function () {
    return this.data.minSuggestedDuration;
  };
  l.getAdPodInfo = function () {
    return new BF(this.data.adPodInfo);
  };
  l.getCompanionAds = function (a, b, c) {
    if (!this.data.companions) return [];
    var d = this.data.companions.map(function (e) {
      return new CF(e);
    });
    return oD(
      new lD(
        { size: new D(a, b), ge: c ? "SelectFluid" === c.sizeCriteria : !1 },
        c
      ),
      d
    );
  };
  l.getTraffickingParameters = function () {
    return ix(Sg(this.data.traffickingParameters));
  };
  l.getTraffickingParametersString = function () {
    return this.data.traffickingParameters;
  };
  l.getVastMediaBitrate = function () {
    return this.data.vastMediaBitrate;
  };
  l.getMediaUrl = function () {
    return this.data.mediaUrl;
  };
  l.getSurveyUrl = function () {
    return this.data.surveyUrl;
  };
  l.getDealId = function () {
    return this.data.dealId;
  };
  l.getUniversalAdIds = function () {
    return (this.data.universalAdIds || []).map(function (a) {
      return new DF(a.adIdValue, a.adIdRegistry);
    });
  };
  l.getUniversalAdIdValue = function () {
    return this.data.universalAdIdValue;
  };
  l.getUniversalAdIdRegistry = function () {
    return this.data.universalAdIdRegistry;
  };
  l.getSkipTimeOffset = function () {
    return this.data.skipTimeOffset;
  };
  l.pe = function () {
    return this.data.disableUi;
  };
  Y.prototype.isUiDisabled = Y.prototype.pe;
  Y.prototype.getSkipTimeOffset = Y.prototype.getSkipTimeOffset;
  Y.prototype.getUniversalAdIdRegistry = Y.prototype.getUniversalAdIdRegistry;
  Y.prototype.getUniversalAdIdValue = Y.prototype.getUniversalAdIdValue;
  Y.prototype.getUniversalAdIds = Y.prototype.getUniversalAdIds;
  Y.prototype.getDealId = Y.prototype.getDealId;
  Y.prototype.getSurveyUrl = Y.prototype.getSurveyUrl;
  Y.prototype.getMediaUrl = Y.prototype.getMediaUrl;
  Y.prototype.getVastMediaBitrate = Y.prototype.getVastMediaBitrate;
  Y.prototype.getTraffickingParametersString =
    Y.prototype.getTraffickingParametersString;
  Y.prototype.getTraffickingParameters = Y.prototype.getTraffickingParameters;
  Y.prototype.getCompanionAds = Y.prototype.getCompanionAds;
  Y.prototype.getAdPodInfo = Y.prototype.getAdPodInfo;
  Y.prototype.getMinSuggestedDuration = Y.prototype.getMinSuggestedDuration;
  Y.prototype.getUiElements = Y.prototype.getUiElements;
  Y.prototype.getHeight = Y.prototype.getHeight;
  Y.prototype.getWidth = Y.prototype.getWidth;
  Y.prototype.getVastMediaHeight = Y.prototype.getVastMediaHeight;
  Y.prototype.getVastMediaWidth = Y.prototype.getVastMediaWidth;
  Y.prototype.getDuration = Y.prototype.getDuration;
  Y.prototype.getTitle = Y.prototype.getTitle;
  Y.prototype.getDescription = Y.prototype.getDescription;
  Y.prototype.getContentType = Y.prototype.getContentType;
  Y.prototype.isSkippable = Y.prototype.isSkippable;
  Y.prototype.isLinear = Y.prototype.isLinear;
  Y.prototype.getWrapperAdSystems = Y.prototype.getWrapperAdSystems;
  Y.prototype.getWrapperCreativeIds = Y.prototype.getWrapperCreativeIds;
  Y.prototype.getWrapperAdIds = Y.prototype.getWrapperAdIds;
  Y.prototype.getApiFramework = Y.prototype.getApiFramework;
  Y.prototype.getAdvertiserName = Y.prototype.getAdvertiserName;
  Y.prototype.getAdSystem = Y.prototype.getAdSystem;
  Y.prototype.getCreativeId = Y.prototype.getCreativeId;
  Y.prototype.getCreativeAdId = Y.prototype.getCreativeAdId;
  Y.prototype.getAdId = Y.prototype.getAdId;
  var FF = function (a) {
    this.g = a;
  };
  FF.prototype.getCuePoints = function () {
    return this.g;
  };
  FF.prototype.getCuePoints = FF.prototype.getCuePoints;
  var HF = function () {
      this.useLearnMoreButton = this.disableUi = this.disableClickThrough = !1;
      this.autoAlign = this.useVideoAdUi = !0;
      this.bitrate = -1;
      this.enablePreloading = !1;
      this.loadVideoTimeout = GF;
      this.mimeTypes = null;
      this.playAdsAfterTime = -1;
      this.restoreCustomPlaybackStateOnAdBreakComplete = !1;
      this.uiElements = null;
      this.useStyledNonLinearAds = this.useStyledLinearAds = !1;
    },
    IF = function (a, b) {
      var c = {};
      Object.assign(c, a);
      b && (c.disableClickThrough = !0);
      return c;
    };
  HF.prototype.append = function (a) {
    if (a) {
      var b = a.autoAlign;
      null != b && (this.autoAlign = b);
      b = Xg(a.bitrate);
      "number" === typeof b && !isNaN(b) && 0 < b && (this.bitrate = b);
      this.disableClickThrough =
        a.disableClickThrough || this.disableClickThrough;
      this.disableUi = a.disableUi || this.disableUi;
      this.enablePreloading = a.enablePreloading || this.enablePreloading;
      (b = a.mimeTypes) && 0 !== b.length && (this.mimeTypes = b);
      b = Xg(a.playAdsAfterTime);
      "number" === typeof b &&
        !isNaN(b) &&
        0 < b &&
        (this.playAdsAfterTime = b);
      this.restoreCustomPlaybackStateOnAdBreakComplete =
        a.restoreCustomPlaybackStateOnAdBreakComplete ||
        this.restoreCustomPlaybackStateOnAdBreakComplete;
      b = Xg(a.loadVideoTimeout);
      "number" === typeof b &&
        !isNaN(b) &&
        0 < b &&
        (this.loadVideoTimeout = b);
      this.uiElements = a.uiElements || this.uiElements;
      this.useLearnMoreButton = a.useLearnMoreButton || this.useLearnMoreButton;
      this.useStyledLinearAds = a.useStyledLinearAds || this.useStyledLinearAds;
      this.useStyledNonLinearAds =
        a.useStyledNonLinearAds || this.useStyledNonLinearAds;
      this.useVideoAdUi = !1 === a.useVideoAdUi ? !1 : this.useVideoAdUi;
    }
  };
  y(
    "module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ads_rendering_settings.AdsRenderingSettings.AUTO_SCALE",
    -1
  );
  var GF = K(el) ? 4e3 : K(fl) ? 6500 : K(gl) ? 12e3 : 8e3;
  var KF = function (a, b, c) {
    P.call(this);
    this.B = a;
    this.l = b;
    this.A = c;
    this.g = this.h = this.j = null;
    this.o = 0;
    a = new rx(this);
    eo(this, a);
    JF(this);
    K(sl) && a.O(this.l, "adsManager", this.D);
  };
  u(KF, P);
  var LF = function (a, b) {
      a.j = b;
      a.g && a.j && AF(a.g, a.j);
    },
    JF = function (a) {
      wF(a.B)
        .then(function (b) {
          return void MF(a, b);
        })
        .catch(function () {
          return void NF(a);
        });
    };
  KF.prototype.D = function (a) {
    if (["complete", "skip", "error"].includes(a.messageType)) {
      this.o++;
      if (10 === this.o) {
        this.o = 0;
        var b;
        null == (b = this.g) || b.W();
        JF(this);
      }
      a = mh(this.h);
      var c;
      (a && (null == (c = a.frames) ? 0 : c.omid_v1_present)) ||
        X.g().report(188, {}, !0);
    }
  };
  var MF = function (a, b) {
      a.h = b;
      a.g = new xF(b, a.A);
      a.g.O("error", function () {
        return void NF(a);
      });
      zF(a.g);
      a.g && a.j && AF(a.g, a.j);
    },
    NF = function (a) {
      eD(a.l, "omid", "iframeFailed");
      a.W();
    };
  KF.prototype.L = function () {
    this.h && (jh(this.h), (this.h = null));
    P.prototype.L.call(this);
  };
  var OF = function (a, b, c, d) {
    P.call(this);
    this.o = a;
    this.j = b;
    this.g = c;
    this.B = d;
    this.h = new rx(this);
    eo(this, this.h);
    this.h.O(this.o, d, this.A);
  };
  u(OF, P);
  var PF = function (a, b) {
    var c = b.ra;
    switch (b.messageType) {
      case "showVideo":
        a.j.Vc();
        break;
      case "hide":
        a.j.fb();
        break;
      case "resizeAndPositionVideo":
        b = c.resizeAndPositionVideo;
        a.j.Dd(new Hi(b.x, b.y, b.width, b.height));
        break;
      case "restoreSizeAndPositionVideo":
        a.j.Ed();
    }
  };
  OF.prototype.A = function (a) {
    var b = a.ra;
    switch (a.messageType) {
      case "activate":
        this.j.cc(this.g);
        break;
      case "startTracking":
        a = this.g;
        var c = this.l;
        this.h.O(a, og(Hy), c);
        this.h.O(a, jF, c);
        a = this.g;
        QF(a);
        a.h.O(a.g, jF, a.Ma);
        a.h.O(a.g, "ended", a.Uf);
        a.h.O(a.g, "webkitbeginfullscreen", a.Wa);
        a.h.O(a.g, "webkitendfullscreen", a.ba);
        a.h.O(a.g, "loadedmetadata", a.Wf);
        a.h.O(a.g, "pause", a.Yf);
        a.h.O(a.g, "playing", a.re);
        a.h.O(a.g, "timeupdate", a.Zf);
        a.h.O(a.g, "volumechange", a.bg);
        a.h.O(a.g, "error", a.X);
        a.h.O(a.g, Jc || (vc && !Vw(8)) ? "loadeddata" : "canplay", a.Vf);
        a.l = new WE();
        a.h.O(a.l, "click", a.ma);
        YE(a.l, a.g);
        a.F = new wt(1e3);
        a.h.O(a.F, "tick", a.Fa);
        a.F.start();
        break;
      case "stopTracking":
        a = this.g;
        c = this.l;
        this.h.vb(a, og(Hy), c);
        this.h.vb(a, jF, c);
        QF(this.g);
        break;
      case "exitFullscreen":
        a = this.g;
        (sc || uc) &&
          a.g.webkitDisplayingFullscreen &&
          a.g.webkitExitFullscreen();
        break;
      case "play":
        RF(this.g);
        break;
      case "pause":
        this.g.pause();
        break;
      case "load":
        a = this.g;
        c = b.videoUrl;
        var d = b.muxedMediaUrl,
          e = b.muxedMimeType,
          f = b.muxedAudioCodec,
          g = b.muxedVideoCodec,
          h = b.demuxedAudioUrl,
          k = b.demuxedVideoUrl,
          m = b.demuxedAudioMimeType,
          n = b.demuxedVideoMimeType,
          q = b.demuxedAudioCodec,
          r = b.demuxedVideoCodec;
        b = b.mseCompatible;
        var v = null;
        k &&
          h &&
          b &&
          n &&
          m &&
          r &&
          q &&
          (v = new Kv({
            vg: k,
            nf: h,
            yi: null,
            ei: null,
            ug: n,
            mf: m,
            lb: r,
            Xa: q,
            height: null,
            width: null,
            Ca: b,
            xi: null,
            di: null,
          }));
        h = null;
        d &&
          e &&
          g &&
          f &&
          (h = new Lv({
            Sf: d,
            sb: null,
            mimeType: e,
            lb: g,
            Xa: f,
            height: null,
            width: null,
            Ca: b,
            ji: null,
          }));
        v ? a.load(c, v) : h ? a.load(c, h) : a.load(c, null);
        break;
      case "unload":
        a = this.g;
        SF(a);
        a.U = !1;
        "removeAttribute" in a.g ? a.g.removeAttribute("src") : (a.g.src = "");
        a.g.load();
        break;
      case "setCurrentTime":
        this.g.g.currentTime = b.currentTime;
        break;
      case "setVolume":
        this.g.setVolume(b.volume);
    }
  };
  OF.prototype.l = function (a) {
    var b = {};
    switch (a.type) {
      case "autoplayDisallowed":
        a = "autoplayDisallowed";
        break;
      case "beginFullscreen":
        a = "fullscreen";
        break;
      case "endFullscreen":
        a = "exitFullscreen";
        break;
      case "click":
        a = "click";
        break;
      case "end":
        a = "end";
        break;
      case "error":
        a = "error";
        break;
      case "loaded":
        a = "loaded";
        break;
      case "mediaLoadTimeout":
        a = "mediaLoadTimeout";
        break;
      case "pause":
        a = "pause";
        b.ended = this.g.g.ended;
        break;
      case "play":
        a = "play";
        break;
      case "skip":
        a = "skip";
        break;
      case "start":
        a = "start";
        b.volume = this.g.getVolume();
        break;
      case "timeUpdate":
        a = "timeupdate";
        b.currentTime = this.g.getCurrentTime();
        b.duration = this.g.getDuration();
        break;
      case "volumeChange":
        a = "volumeChange";
        b.volume = this.g.getVolume();
        break;
      case "loadedmetadata":
        a = a.type;
        b.duration = this.g.getDuration();
        break;
      case "abort":
      case "canplay":
      case "canplaythrough":
      case "durationchange":
      case "emptied":
      case "loadstart":
      case "loadeddata":
      case "progress":
      case "ratechange":
      case "seeked":
      case "seeking":
      case "stalled":
      case "suspend":
      case "waiting":
        a = a.type;
        break;
      default:
        return;
    }
    eD(this.o, this.B, a, b);
  };
  var TF = function (a, b) {
    P.call(this);
    this.h = b;
    this.g = null;
    this.j = new OF(a, b, this.h.da, "videoDisplay1");
    eo(this, this.j);
    var c = this.h.za;
    null != c &&
      ((this.g = new OF(a, b, c, "videoDisplay2")), eo(this, this.g));
  };
  u(TF, P);
  var UF = function (a, b, c, d) {
    var e = Uh("IFRAME");
    e.id = b;
    e.name = b;
    e.width = String(c);
    e.height = String(d);
    e.allowTransparency = "true";
    e.scrolling = "no";
    e.marginWidth = "0";
    e.marginHeight = "0";
    e.frameBorder = "0";
    e.style.border = "0";
    e.style.verticalAlign = "bottom";
    e.src = "about:blank";
    e.setAttribute("aria-label", "Advertisement");
    e.title = "3rd party ad content";
    e.tabIndex = 0;
    a.appendChild(e);
    return e;
  };
  function VF() {
    var a,
      b,
      c,
      d = E();
    d = void 0 === d ? window : d;
    d = (null != (c = void 0 === d ? null : d) ? c : window).googletag;
    c = (null == d ? 0 : d.apiReady) ? d : void 0;
    return null !=
      (b =
        null == c ? void 0 : null == (a = c.companionAds) ? void 0 : a.call(c))
      ? b
      : null;
  }
  function WF(a) {
    var b = {};
    b.slotId = a.getSlotId().getId();
    var c = [];
    a = t(a.getSizes() || []);
    for (var d = a.next(); !d.done; d = a.next())
      if (((d = d.value), "string" !== typeof d)) {
        var e = {};
        c.push(((e.adWidth = d.getWidth()), (e.adHeight = d.getHeight()), e));
      } else "fluid" === d && ((d = {}), c.push(((d.fluidSize = !0), d)));
    return (b.adSizes = c), b;
  }
  function XF(a) {
    var b = VF();
    if (b && a && Array.isArray(a)) {
      var c = new Map(
        b.getSlots().map(function (r) {
          return [r.getSlotId().getId(), r];
        })
      );
      a = t(a);
      for (var d = a.next(); !d.done; d = a.next()) {
        var e = d.value,
          f = c.get(e.slotId);
        if (f && !b.isSlotAPersistentRoadblock(f)) {
          var g = e.adContent;
          if (g && (d = ah(f.getSlotId().getDomId()))) {
            d.style.display = "";
            var h = e.adWidth,
              k = e.adHeight;
            e.fluidSize && ((k = mn(d)), (h = k.width), (k = k.height));
            d.textContent = "";
            if (e.friendlyIframeRendering)
              try {
                var m = "google_companion_" + f.getSlotId().getId(),
                  n = UF(d, m, h, k),
                  q = n.contentWindow
                    ? n.contentWindow.document
                    : n.contentDocument;
                lc && q.open("text/html", "replace");
                Hh(q, Zi(g));
                q.close();
              } catch (r) {}
            else
              Fh(d, Zi(g)),
                (d.style.width = h + "px"),
                (d.style.height = k + "px");
            b.slotRenderEnded(f, h, k);
            (e = e.onAdContentSet) && e(d);
          }
        }
      }
    }
  }
  var YF = function (a, b, c, d, e, f) {
    fD.call(this, a, b, c, d, e);
    this.g = f;
  };
  u(YF, fD);
  var ZF = function (a, b) {
    Q.call(this);
    this.messageName = a;
    this.l = b;
    this.g = {};
    this.h = new rx(this);
    eo(this, this.h);
    this.h.O(E(), "message", this.j);
  };
  u(ZF, Q);
  var $F = function (a, b) {
      var c = b.g;
      a.g.hasOwnProperty(c) && eD(a.g[c], b.type, b.messageType, b.ra);
    },
    aG = function (a, b, c, d) {
      a.g.hasOwnProperty(b) ||
        ((c = new TE(b, c)),
        a.h.O(c, a.messageName, function (e) {
          this.dispatchEvent(
            new YF(e.type, e.messageType, e.ra, e.sessionId, e.origin, b)
          );
        }),
        (c.g = d),
        c.connect(),
        (a.g[b] = c));
    };
  ZF.prototype.L = function () {
    for (var a = t(Object.values(this.g)), b = a.next(); !b.done; b = a.next())
      bo(b.value);
    Q.prototype.L.call(this);
  };
  ZF.prototype.j = function (a) {
    a = a.g;
    var b = UE(a.data);
    if (null != b) {
      var c = b.channel;
      if (this.l && !this.g.hasOwnProperty(c)) {
        var d = b.sid;
        aG(this, c, d, a.source);
        this.dispatchEvent(
          new YF(b.name, b.type, b.data || {}, d, a.origin, c)
        );
      }
    }
  };
  function bG() {
    return !!Ma("googletag.cmd", E());
  }
  function cG() {
    var a = Ma("googletag.console", E());
    return null != a ? a : null;
  }
  var dG = function () {
    rx.call(this);
    this.g = null;
    this.j = new ZF("gpt", !0);
    eo(this, this.j);
    this.O(this.j, "gpt", this.A);
    bG() ||
      E().top === E() ||
      ((this.g = new ZF("gpt", !1)),
      eo(this, this.g),
      this.O(this.g, "gpt", this.l));
  };
  u(dG, rx);
  dG.prototype.A = function (a) {
    var b = a.origin,
      c = "//imasdk.googleapis.com".match(uh);
    b = b.match(uh);
    if (c[3] == b[3] && c[4] == b[4])
      if (null != this.g)
        aG(this.g, a.g, a.sessionId, E().parent),
          null != this.g && $F(this.g, a);
      else if (((c = a.ra), null != c && void 0 !== c.scope)) {
        b = c.scope;
        c = c.args;
        var d;
        if ("proxy" === b) {
          var e = a.messageType;
          "isGptPresent" === e
            ? (d = bG())
            : "isConsolePresent" === e && (d = null != cG());
        } else if (bG())
          if ("pubads" === b || "companionAds" === b) {
            d = a.messageType;
            var f = E().googletag;
            if (
              null != f &&
              null != f[b] &&
              ((b = f[b]()), null != b && ((d = b[d]), null != d))
            )
              try {
                e = d.apply(b, c);
              } catch (g) {}
            d = e;
          } else if ("console" === b) {
            if (((e = cG()), null != e && ((b = e[a.messageType]), null != b)))
              try {
                b.apply(e, c);
              } catch (g) {}
          } else
            null === b &&
              ((e = a.messageType),
              "googleGetCompanionAdSlots" === e
                ? (e = VF())
                  ? ((e = e.getSlots().map(WF)), (d = e.length ? e : null))
                  : (d = null)
                : ("googleSetCompanionAdContents" === e &&
                    XF(null == c ? void 0 : c[0]),
                  (d = null)));
        void 0 !== d && ((a.ra.returnValue = d), $F(this.j, a));
      }
  };
  dG.prototype.l = function (a) {
    $F(this.j, a);
  };
  var eG = function (a, b) {
    if (a.g) {
      var c = a.g;
      bo(c.g[b]);
      delete c.g[b];
    }
    a.j && ((a = a.j), bo(a.g[b]), delete a.g[b]);
  };
  var gG = function (a, b) {
      var c = Array.prototype.slice.call(arguments),
        d = c.shift();
      if ("undefined" == typeof d)
        throw Error("[goog.string.format] Template required");
      return d.replace(
        /%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g,
        function (e, f, g, h, k, m, n, q) {
          if ("%" == m) return "%";
          var r = c.shift();
          if ("undefined" == typeof r)
            throw Error("[goog.string.format] Not enough arguments");
          arguments[0] = r;
          return fG[m].apply(null, arguments);
        }
      );
    },
    fG = {
      s: function (a, b, c) {
        return isNaN(c) || "" == c || a.length >= Number(c)
          ? a
          : (a =
              -1 < b.indexOf("-", 0)
                ? a + Rg(" ", Number(c) - a.length)
                : Rg(" ", Number(c) - a.length) + a);
      },
      f: function (a, b, c, d, e) {
        d = a.toString();
        isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
        var f =
          0 > Number(a)
            ? "-"
            : 0 <= b.indexOf("+")
            ? "+"
            : 0 <= b.indexOf(" ")
            ? " "
            : "";
        0 <= Number(a) && (d = f + d);
        if (isNaN(c) || d.length >= Number(c)) return d;
        d = isNaN(e)
          ? Math.abs(Number(a)).toString()
          : Math.abs(Number(a)).toFixed(e);
        a = Number(c) - d.length - f.length;
        return (d =
          0 <= b.indexOf("-", 0)
            ? f + d + Rg(" ", a)
            : f + Rg(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d);
      },
      d: function (a, b, c, d, e, f, g, h) {
        return fG.f(parseInt(a, 10), b, c, d, 0, f, g, h);
      },
    };
  fG.i = fG.d;
  fG.u = fG.d;
  function hG() {
    return ["autoplay", "attribution-reporting"]
      .filter(function (a) {
        var b = document.featurePolicy;
        return (
          void 0 !== b &&
          "function" == typeof b.allowedFeatures &&
          "object" == typeof b.allowedFeatures() &&
          b.allowedFeatures().includes(a)
        );
      })
      .join(";");
  }
  var jG = function (a, b) {
    Q.call(this);
    this.D = b;
    this.J = this.H = null;
    this.G = !1;
    this.F = "goog_" + Tg++;
    this.A = new Map();
    this.h = null;
    var c = E();
    var d = Ma("google.ima.gptProxyInstance", c);
    null != d
      ? (c = d)
      : ((d = new dG()), y("google.ima.gptProxyInstance", d, c), (c = d));
    this.V = c;
    this.B = null;
    this.j = new rx(this);
    eo(this, this.j);
    c = this.F;
    d =
      (Rh() ? "https:" : "http:") +
      gG(
        "//imasdk.googleapis.com/js/core/bridge3.612.0_%s.html",
        iC.getLocale()
      );
    a: {
      var e = window;
      try {
        do {
          try {
            if (
              0 === e.location.href.indexOf(d) ||
              0 === e.document.referrer.indexOf(d)
            ) {
              var f = !0;
              break a;
            }
          } catch (k) {}
          e = e.parent;
        } while (e !== e.top);
      } catch (k) {}
      f = !1;
    }
    f && (d += "?f=" + c);
    f = window.document;
    if (Ay.length && f.head) {
      e = t(Ay);
      for (var g = e.next(); !g.done; g = e.next())
        if ((g = g.value) && f.head) {
          var h = Uh("META");
          f.head.appendChild(h);
          h.httpEquiv = "origin-trial";
          h.content = g;
        }
    }
    f = hG();
    c = ih("IFRAME", {
      src: d + "#" + c,
      allowFullscreen: !0,
      allow: f,
      id: c,
      style:
        "border:0; opacity:0; margin:0; padding:0; position:relative; color-scheme: light;",
    });
    this.j.Qb(c, "load", this.aa);
    a.appendChild(c);
    this.g = c;
    this.l = iG(this);
    this.N = new TF(this.l, this.D);
    eo(this, this.N);
    this.D.da && this.j.O(this.l, "displayContainer", this.U);
    this.j.O(this.l, "mouse", this.X);
    this.j.O(this.l, "touch", this.Z);
    KC() || ((this.B = new KF(a, this.l, b.da.N.g)), eo(this, this.B));
  };
  u(jG, Q);
  var iG = function (a, b) {
    b = void 0 === b ? "*" : b;
    var c = a.A.get(b);
    null == c &&
      ((c = new TE(a.F, b)),
      a.G && ((c.g = mh(a.g)), c.connect()),
      a.A.set(b, c));
    return c;
  };
  jG.prototype.cc = function (a) {
    var b;
    null != (b = this.B) &&
      ((a = a.N.g), (b.A = a), b.g && ((b = b.g), (b.h = a), yF(b, a)));
  };
  jG.prototype.L = function () {
    null !== this.h && (this.h.W(), (this.h = null));
    this.A.forEach(function (a) {
      bo(a);
    });
    this.A.clear();
    eG(this.V, this.F);
    jh(this.g);
    Q.prototype.L.call(this);
  };
  jG.prototype.X = function (a) {
    var b = a.ra,
      c = dn(this.g),
      d = document.createEvent("MouseEvent");
    d.initMouseEvent(
      a.messageType,
      !0,
      !0,
      window,
      b.detail,
      b.screenX,
      b.screenY,
      b.clientX + c.x,
      b.clientY + c.y,
      b.ctrlKey,
      b.altKey,
      b.shiftKey,
      b.metaKey,
      b.button,
      null
    );
    this.g.dispatchEvent(d);
  };
  var kG = function (a, b) {
    var c = dn(a.g),
      d = !!("TouchEvent" in window && 0 < TouchEvent.length);
    b = b.map(function (f) {
      return d
        ? new Touch({
            identifier: f.identifier,
            target: a.g,
            clientX: f.clientX,
            clientY: f.clientY,
            screenX: f.screenX,
            screenY: f.screenY,
            pageX: f.pageX + c.x,
            pageY: f.pageY + c.y,
          })
        : document.createTouch(
            window,
            a.g,
            f.identifier,
            f.pageX + c.x,
            f.pageY + c.y,
            f.screenX,
            f.screenY
          );
    });
    if (d) return b;
    var e;
    return null == (e = document.createTouchList)
      ? void 0
      : e.apply(document, b);
  };
  jG.prototype.Z = function (a) {
    var b = a.ra,
      c = dn(this.g);
    if ("TouchEvent" in window && 0 < TouchEvent.length)
      (b = {
        bubbles: !0,
        cancelable: !0,
        view: window,
        detail: b.detail,
        ctrlKey: b.ctrlKey,
        altKey: b.altKey,
        shiftKey: b.shiftKey,
        metaKey: b.metaKey,
        touches: kG(this, b.touches),
        targetTouches: kG(this, b.targetTouches),
        changedTouches: kG(this, b.changedTouches),
      }),
        (a = new TouchEvent(a.messageType, b)),
        this.g.dispatchEvent(a);
    else {
      var d = document.createEvent("TouchEvent");
      d.initTouchEvent(
        a.messageType,
        !0,
        !0,
        window,
        b.detail,
        b.screenX,
        b.screenY,
        b.clientX + c.x,
        b.clientY + c.y,
        b.ctrlKey,
        b.altKey,
        b.shiftKey,
        b.metaKey,
        kG(this, b.touches),
        kG(this, b.targetTouches),
        kG(this, b.changedTouches),
        b.scale,
        b.rotation
      );
      this.g.dispatchEvent(d);
    }
  };
  jG.prototype.U = function (a) {
    switch (a.messageType) {
      case "showVideo":
        null == this.h
          ? ((this.h = new WE()), this.j.O(this.h, "click", this.ba))
          : $E(this.h);
        YE(this.h, this.D.Lb());
        break;
      case "hide":
        null !== this.h && (this.h.W(), (this.h = null));
    }
    var b = this.N;
    PF(b.j, a);
    b.g && PF(b.g, a);
  };
  jG.prototype.ba = function () {
    eD(this.l, "displayContainer", "videoClick");
  };
  jG.prototype.aa = function () {
    this.H = gi();
    this.J = di();
    var a = mh(this.g);
    this.A.forEach(function (c) {
      c.g = a;
      c.connect();
    });
    var b;
    null == (b = this.B) || LF(b, a);
    this.G = !0;
  };
//   var lG = fa(["https://s0.2mdn.net/instream/video/client.js"]),
  var lG = fa(["client.js"]),
    mG = null,
    nG = function () {
      Q.call(this);
      this.g = null;
      this.h = new Map();
      this.j = new Map();
      this.ua = this.B = !1;
      this.l = null;
      this.A = new rx(this);
      eo(this, this.A);
    };
  u(nG, Q);
  var oG = function () {
      null == mG && (mG = new nG());
      return mG;
    },
    hs = function (a, b, c) {
      var d = {};
      d.queryId = b;
      d.viewabilityData = c;
      a.g && eD(a.g, "activityMonitor", "viewabilityMeasurement", d);
    };
  nG.prototype.destroy = function () {
    this.A.vb(this.g, "activityMonitor", this.D);
    this.ua = !1;
    this.h.clear();
  };
  nG.prototype.L = function () {
    this.destroy();
    Q.prototype.L.call(this);
  };
  nG.prototype.init = function (a) {
    if (!this.ua) {
      if ((this.g = a || null))
        this.A.O(this.g, "activityMonitor", this.D), pG(this);
      if (
        !(
          w.ima &&
          w.ima.video &&
          w.ima.video.client &&
          w.ima.video.client.tagged
        )
      ) {
        y("ima.video.client.sdkTag", !0);
        var b = w.document;
        a = gh(document, "SCRIPT");
        var c = Ji(lG);
        Gh(a, c);
        a.async = !0;
        a.type = "text/javascript";
        b = b.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b);
      }
      Ul();
      C(Yr).G = iC.g;
      this.B = !0;
      C(Yr).j = !0;
      this.l = null;
      a = C(Yr);
      b = "h" == Jr(a) || "b" == Jr(a);
      c = !(N(), !1);
      b && c && ((a.K = !0), (a.F = new dq()));
      this.ua = !0;
    }
  };
  var rG = function (a) {
      if (null == a) return !1;
      if ((sc || uc) && null !== a.webkitDisplayingFullscreen)
        return a.webkitDisplayingFullscreen;
      a = qG(a);
      var b = window.screen.availHeight || window.screen.height;
      return (
        0 >= (window.screen.availWidth || window.screen.width) - a.width &&
        42 >= b - a.height
      );
    },
    qG = function (a) {
      var b = {
        left: a.offsetLeft,
        top: a.offsetTop,
        width: a.offsetWidth,
        height: a.offsetHeight,
      };
      try {
        "function" === typeof a.getBoundingClientRect &&
          lh(Zg(a), a) &&
          (b = a.getBoundingClientRect());
      } catch (c) {}
      return b;
    },
    sG = function (a, b, c, d, e) {
      e = void 0 === e ? {} : e;
      if (a.ua) {
        d && null == e.opt_osdId && (e.opt_osdId = d);
        if (a.l) return a.l(b, c, e);
        if ((a = d ? a.j.get(d) : iC.j))
          null == e.opt_fullscreen && (e.opt_fullscreen = rG(a)),
            null == e.opt_adElement && (e.opt_adElement = a);
        return Hu.tb(469, ab(ks, b, c, e)) || {};
      }
      return {};
    },
    tG = function (a) {
      var b;
      0 !== iC.g ? (b = C(Yr).j) : (b = a.B);
      return b;
    },
    uG = function (a, b) {
      var c = String(Math.floor(1e9 * Math.random()));
      a.j.set(c, b);
      if (K(Qk))
        try {
          Qt(
            function (d) {
              if (a.g) {
                var e = {};
                e.engagementString = d;
                eD(a.g, "activityMonitor", "engagementData", e);
              }
            },
            function () {
              return b;
            }
          );
        } catch (d) {}
      0 !== iC.g && is(C(Yr), c, a);
      return c;
    },
    vG = function (a, b, c) {
      if (c) a.h.get(c) === b && a.h.delete(c);
      else {
        var d = [];
        a.h.forEach(function (e, f) {
          e === b && d.push(f);
        });
        d.forEach(a.h.delete, a.h);
      }
    },
    ds = function (a, b) {
      a = a.h.get(b);
      return "function" === typeof a ? a() : {};
    },
    pG = function (a) {
      if ("function" === typeof window.Goog_AdSense_Lidar_getUrlSignalsArray) {
        var b = {};
        b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
        var c;
        null == (c = a.g) || eD(c, "activityMonitor", "pageSignals", b);
      }
    };
  nG.prototype.D = function (a) {
    var b = a.ra,
      c = b.queryId,
      d = {},
      e = null;
    d.eventId = b.eventId;
    switch (a.messageType) {
      case "getPageSignals":
        pG(this);
        break;
      case "reportVastEvent":
        e = b.vastEvent;
        a = b.osdId;
        var f = {};
        f.opt_fullscreen = b.isFullscreen;
        b.isOverlay && (f.opt_bounds = b.overlayBounds);
        d.viewabilityData = sG(this, e, c, a, f);
        var g;
        null == (g = this.g) || eD(g, "activityMonitor", "viewability", d);
        break;
      case "fetchAdTagUrl":
        (c = {}),
          (c.eventId = b.eventId),
          (a = b.osdId),
          rg(b, "isFullscreen") && (e = b.isFullscreen),
          rg(b, "loggingId") &&
            ((b = b.loggingId),
            (c.loggingId = b),
            X.g().report(43, {
              step: "beforeLookup",
              logid: b,
              time: Date.now(),
            })),
          (c.engagementString = wG(this, a, e)),
          this.g && eD(this.g, "activityMonitor", "engagement", c);
    }
  };
  var wG = function (a, b, c) {
    var d,
      e = b ? (null != (d = a.j.get(b)) ? d : null) : iC.j;
    a = {};
    null != c && (a.fullscreen = c);
    c = "";
    try {
      c = Pt(function () {
        return e;
      }, a);
    } catch (f) {
      (c = f), (c = "sdktle;" + Qg(c.name, 12) + ";" + Qg(c.message, 40));
    }
    return c;
  };
  y("ima.common.getVideoMetadata", function (a) {
    return ds(oG(), a);
  });
  y("ima.common.triggerViewabilityMeasurementUpdate", function (a, b) {
    hs(oG(), a, b);
  });
  var xG = function (a) {
      this.g = a;
      this.j = "";
      this.h = -1;
      this.o = !1;
    },
    zG = function (a, b) {
      if (0 <= a.h) {
        var c = null == b ? function () {} : b,
          d = function () {
            yG(a, c);
            a.g.removeEventListener("loadedmetadata", d, !1);
          };
        a.g.addEventListener("loadedmetadata", d, !1);
        a.g.src = a.j;
        a.g.load();
      } else null != b && b();
    },
    yG = function (a, b) {
      var c = 0 < a.g.seekable.length;
      a.o
        ? c
          ? ((a.g.currentTime = a.h), AG(a), b())
          : setTimeout(function () {
              return void yG(a, b);
            }, 100)
        : (AG(a), b());
    },
    AG = function (a) {
      a.h = -1;
      a.j = "";
      a.o = !1;
    };
  var BG = new D(5, 5),
    CG = function (a) {
      Q.call(this);
      this.g = a;
      this.l = this.aa = null;
      this.B = 0;
      this.H = this.D = this.U = this.loaded = this.G = !1;
      this.V = this.F = this.J = this.j = null;
      this.Z = !1;
      this.A = null;
      this.N = new xG(a);
      this.h = new rx(this);
      eo(this, this.h);
      this.size = this.getSize();
      this.fullscreen = rG(this.g);
    };
  u(CG, Q);
  l = CG.prototype;
  l.Ud = function () {
    var a = this.N;
    a.j = a.g.currentSrc;
    a.o = 0 < a.g.seekable.length;
    a.h = a.g.ended ? -1 : a.g.currentTime;
  };
  l.Zb = function (a) {
    zG(this.N, a);
  };
  l.load = function (a, b) {
    var c = G.g().g;
    c.X = !0;
    bj(c);
    J("hvd_lc");
    SF(this);
    this.U = !1;
    if (b)
      if ((J("hvd_ad"), b instanceof Lv)) {
        if ((J("hvd_mad"), (c = b.getMediaUrl()))) {
          J("hvd_admu");
          J("hvd_src");
          this.g.src = c;
          this.g.load();
          return;
        }
      } else if (b instanceof Kv) {
        J("hvd_dad");
        c = b.o;
        var d = b.h,
          e = b.j,
          f = b.g,
          g = b.lb,
          h = b.Xa;
        if (c && d && e && f && g && h && (J("hvd_addu"), b.Ca)) {
          J("hvd_admse");
          b = e + '; codecs="' + g + '"';
          f = f + '; codecs="' + h + '"';
          if (
            rA() &&
            rA() &&
            MediaSource.isTypeSupported(b) &&
            rA() &&
            MediaSource.isTypeSupported(f)
          ) {
            J("hvd_ymse");
            J("hvd_mse");
            a = !1;
            try {
              -1 !== window.location.search.indexOf("goog_limavideo=true") &&
                (a = !0);
            } catch (k) {}
            w.customElements
              ? a
                ? (a = !0)
                : (K(Rk) && X.g().report(153, { limvid: "vd" }),
                  (a =
                    K(Rk) ||
                    K(Lk) ||
                    K(Pk) ||
                    K(Ok) ||
                    K(Mk) ||
                    K(Nk) ||
                    K(Jk) ||
                    K(Kk)
                      ? !0
                      : !1))
              : (a = !1);
            a && this.g instanceof nB
              ? ((this.g.Za = c), (this.g.ob = d))
              : ((this.aa = new LB(this.g, [
                  new LA(c, b, 35e4, new fz()),
                  new LA(d, f, 82e3, new fz()),
                ])),
                eo(this, this.aa),
                (a = this.g),
                (c = this.aa),
                c.h || (c.h = Dh(c.g).toString()),
                (c = c.h),
                (a.src = c));
            this.g.load();
            return;
          }
          J("hvd_nmse");
        }
      } else J("hvd_uad");
    a ? (J("hvd_src"), (this.g.src = a)) : J("hvd_vn");
    this.g.load();
  };
  l.setVolume = function (a) {
    this.g.volume = Math.max(a, 0);
    this.g.muted = 0 === a ? !0 : !1;
  };
  l.Dd = function (a) {
    this.g.style.left = String(a.left) + "px";
    this.g.style.top = String(a.top) + "px";
    this.g.style.width = String(a.width) + "px";
    this.g.style.height = String(a.height) + "px";
  };
  l.Ed = function () {
    this.g.style.width = "100%";
    this.g.style.height = "100%";
    this.g.style.left = "0";
    this.g.style.right = "0";
  };
  l.getVolume = function () {
    return this.g.muted ? 0 : this.g.volume;
  };
  var RF = function (a) {
    a.Z = !1;
    a.U || Bb()
      ? ((a.H = !1),
        (a.j = a.g.play()),
        null != a.j &&
          ((a.J = null),
          a.j
            .then(function () {
              a.j = null;
              a.re(a.J);
              a.J = null;
            })
            .catch(function (b) {
              a.j = null;
              var c = "";
              null != b && null != b.name && (c = b.name);
              "AbortError" === c || "NotAllowedError" === c
                ? a.dispatchEvent("autoplayDisallowed")
                : a.X();
            })))
      : (a.H = !0);
  };
  l = CG.prototype;
  l.pause = function () {
    null == this.j && ((this.Z = !0), this.g.pause());
  };
  l.getCurrentTime = function () {
    return this.g.currentTime;
  };
  l.getDuration = function () {
    return isNaN(this.g.duration) ? -1 : this.g.duration;
  };
  l.getSize = function () {
    return new D(this.g.offsetWidth, this.g.offsetHeight);
  };
  l.L = function () {
    if (this.V) {
      var a = cx.get(this.V);
      fx(a);
    }
    QF(this);
    Q.prototype.L.call(this);
  };
  var QF = function (a) {
      null != a.l && ($E(a.l), (a.l = null));
      null != a.F && a.F.W();
      vx(a.h);
      SF(a);
    },
    SF = function (a) {
      a.loaded = !1;
      a.D = !1;
      a.G = !1;
      a.H = !1;
      a.B = 0;
      a.j = null;
      a.J = null;
      bo(a.A);
    };
  CG.prototype.Ma = function (a) {
    this.dispatchEvent(a.type);
  };
  var EG = function (a) {
    if (!a.D) {
      a.D = !0;
      a.dispatchEvent("start");
      try {
        if (K(Rk) && w.customElements) {
          var b = w.customElements.get("lima-video");
          a.g instanceof b
            ? X.g().report(153, { limvid: "limastart" })
            : X.g().report(153, { limvid: "videostart" });
        }
      } catch (c) {
        X.g().report(153, { limvid: "startfail" });
      }
      b =
        "function" === typeof a.g.getAttribute &&
        null != a.g.getAttribute("playsinline");
      b = void 0 === b ? !1 : b;
      ((!Uw() && !Vw(10)) || (!b && (IC.g(), !1))
        ? (IC.g(), qb(vb(), "Xbox")) ||
          (sc || uc
            ? 0
            : (!rc || (rc && Tw(Sw, 4))) && (xn() ? (IC.g(), !1) : !KC()))
        : 1) ||
        !rc ||
        (rc && Tw(Sw, 3)) ||
        ((sc || uc) && !Vw(4)) ||
        DG(a);
    }
  };
  l = CG.prototype;
  l.Wf = function () {
    this.U = !0;
    this.H && RF(this);
    this.H = !1;
    FG(this);
  };
  l.Vf = function () {
    this.loaded || ((this.loaded = !0), this.dispatchEvent("loaded"));
  };
  l.re = function (a) {
    null != this.j
      ? (this.J = a)
      : (this.dispatchEvent("play"), vc || Uw() || Jc || EG(this));
  };
  l.Zf = function (a) {
    if (!this.D && (vc || Uw() || Jc)) {
      if (0 >= this.getCurrentTime()) return;
      if (Jc && this.g.ended && 1 === this.getDuration()) {
        this.X(a);
        return;
      }
      EG(this);
    }
    if (vc || qb(vb(), "Nintendo WiiU")) {
      if (1.5 < this.getCurrentTime() - this.B) {
        this.G = !0;
        this.g.currentTime = this.B;
        return;
      }
      this.G = !1;
      this.getCurrentTime() > this.B && (this.B = this.getCurrentTime());
    }
    this.dispatchEvent("timeUpdate");
  };
  l.bg = function () {
    this.dispatchEvent("volumeChange");
  };
  l.Yf = function () {
    if (this.D && vc && !this.Z && (2 > GG(this) || this.G)) {
      this.A = new wt(250);
      this.h.O(this.A, "tick", this.Ea);
      this.A.start();
      var a = !0;
    } else a = !1;
    a || this.j || this.dispatchEvent("pause");
  };
  l.Uf = function () {
    var a = !0;
    if (vc || qb(vb(), "Nintendo WiiU")) a = this.B >= this.g.duration - 1.5;
    !this.G && a && this.dispatchEvent("end");
  };
  var DG = function (a) {
    a.dispatchEvent("beginFullscreen");
  };
  CG.prototype.ba = function () {
    this.dispatchEvent("endFullscreen");
  };
  CG.prototype.X = function () {
    this.dispatchEvent("error");
  };
  CG.prototype.ma = function () {
    this.dispatchEvent("click");
  };
  var FG = function (a) {
    a.g instanceof HTMLElement &&
      ((a.V = gx(a.g, BG)),
      a.V.then(function (b) {
        a.ya() || I(G.g(), "ps", b.width + "x" + b.height);
      }));
  };
  CG.prototype.Fa = function () {
    var a = this.getSize(),
      b = rG(this.g);
    if (a.width !== this.size.width || a.height !== this.size.height)
      !this.fullscreen && b ? DG(this) : this.fullscreen && !b && this.ba(),
        (this.size = a),
        (this.fullscreen = b);
  };
  CG.prototype.Ea = function () {
    if (
      !this.g.ended &&
      this.g.paused &&
      (vc || Kc ? this.g.currentTime < this.g.duration : 1)
    ) {
      var a = this.g.duration - this.g.currentTime,
        b = GG(this);
      0 < b && (2 <= b || 2 > a) && (bo(this.A), RF(this));
    } else bo(this.A);
  };
  var GG = function (a) {
    var b;
    a: {
      for (b = a.g.buffered.length - 1; 0 <= b; ) {
        if (a.g.buffered.start(b) <= a.g.currentTime) {
          b = a.g.buffered.end(b);
          break a;
        }
        b--;
      }
      b = 0;
    }
    return b - a.g.currentTime;
  };
  CG.prototype.Wa = function () {
    X.g().report(139);
    DG(this);
  };
  var HG = function (a, b) {
    this.g = a[w.Symbol.iterator]();
    this.h = b;
  };
  HG.prototype[Symbol.iterator] = function () {
    return this;
  };
  HG.prototype.next = function () {
    var a = this.g.next();
    return {
      value: a.done ? void 0 : this.h.call(void 0, a.value),
      done: a.done,
    };
  };
  var IG = function (a, b) {
    return new HG(a, b);
  };
  var MG = function (a) {
      if (a instanceof JG || a instanceof KG || a instanceof LG) return a;
      if ("function" == typeof a.next)
        return new JG(function () {
          return a;
        });
      if ("function" == typeof a[Symbol.iterator])
        return new JG(function () {
          return a[Symbol.iterator]();
        });
      if ("function" == typeof a.xb)
        return new JG(function () {
          return a.xb();
        });
      throw Error("Not an iterator or iterable.");
    },
    JG = function (a) {
      this.g = a;
    };
  JG.prototype.xb = function () {
    return new KG(this.g());
  };
  JG.prototype[Symbol.iterator] = function () {
    return new LG(this.g());
  };
  JG.prototype.h = function () {
    return new LG(this.g());
  };
  var KG = function (a) {
    this.g = a;
  };
  u(KG, Ro);
  KG.prototype.next = function () {
    return this.g.next();
  };
  KG.prototype[Symbol.iterator] = function () {
    return new LG(this.g);
  };
  KG.prototype.h = function () {
    return new LG(this.g);
  };
  var LG = function (a) {
    JG.call(this, function () {
      return a;
    });
    this.j = a;
  };
  u(LG, JG);
  LG.prototype.next = function () {
    return this.j.next();
  };
  var NG = function (a, b) {
    this.h = {};
    this.g = [];
    this.j = this.size = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else if (a)
      if (a instanceof NG)
        for (c = a.wc(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
      else for (d in a) this.set(d, a[d]);
  };
  l = NG.prototype;
  l.zb = function () {
    OG(this);
    for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
    return a;
  };
  l.wc = function () {
    OG(this);
    return this.g.concat();
  };
  l.has = function (a) {
    return PG(this.h, a);
  };
  l.isEmpty = function () {
    return 0 == this.size;
  };
  l.clear = function () {
    this.h = {};
    this.j = this.size = this.g.length = 0;
  };
  l.remove = function (a) {
    return this.delete(a);
  };
  l.delete = function (a) {
    return PG(this.h, a)
      ? (delete this.h[a],
        --this.size,
        this.j++,
        this.g.length > 2 * this.size && OG(this),
        !0)
      : !1;
  };
  var OG = function (a) {
    if (a.size != a.g.length) {
      for (var b = 0, c = 0; b < a.g.length; ) {
        var d = a.g[b];
        PG(a.h, d) && (a.g[c++] = d);
        b++;
      }
      a.g.length = c;
    }
    if (a.size != a.g.length) {
      var e = {};
      for (c = b = 0; b < a.g.length; )
        (d = a.g[b]), PG(e, d) || ((a.g[c++] = d), (e[d] = 1)), b++;
      a.g.length = c;
    }
  };
  l = NG.prototype;
  l.get = function (a, b) {
    return PG(this.h, a) ? this.h[a] : b;
  };
  l.set = function (a, b) {
    PG(this.h, a) || ((this.size += 1), this.g.push(a), this.j++);
    this.h[a] = b;
  };
  l.forEach = function (a, b) {
    for (var c = this.wc(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  l.keys = function () {
    return MG(this.xb(!0)).h();
  };
  l.values = function () {
    return MG(this.xb(!1)).h();
  };
  l.entries = function () {
    var a = this;
    return IG(this.keys(), function (b) {
      return [b, a.get(b)];
    });
  };
  l.xb = function (a) {
    OG(this);
    var b = 0,
      c = this.j,
      d = this,
      e = new Ro();
    e.next = function () {
      if (c != d.j)
        throw Error("The map has changed since the iterator was created");
      if (b >= d.g.length) return So;
      var f = d.g[b++];
      return { value: a ? f : d.h[f], done: !1 };
    };
    return e;
  };
  var PG = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  var RG = function () {
    Q.call(this);
    this.readyState = 0;
    this.seeking = !1;
    this.currentTime = 0;
    this.initialTime = void 0;
    this.duration = NaN;
    this.paused = !0;
    this.ended = !1;
    this.volume = 1;
    this.muted = !1;
    this.currentSrc = "";
    this.defaultPlaybackRate = 1;
    this.playbackRate = 0;
    this.B = null;
    this.j = 0;
    this.h = this.g = null;
    this.buffered = new QG();
    this.seekable = new QG();
    this.A = "";
    this.tagName = "VIDEO";
    this.height = this.width = 0;
    this.canPlayType = function () {
      return "";
    };
    this.l = new rx(this);
    eo(this, this.l);
    var a = hC(iC);
    a && (this.duration = eC(a));
  };
  u(RG, Q);
  var SG = function () {
    var a = ["video/mp4"],
      b = ["video/ogg"],
      c = new RG();
    c.canPlayType = function (d) {
      return a.includes(d) ? "probably" : b.includes(d) ? "maybe" : "";
    };
    return c;
  };
  l = RG.prototype;
  l.pause = function () {
    if (!this.paused) {
      var a;
      null == (a = this.B) || a.stop();
      this.paused = !0;
      this.dispatchEvent("timeupdate");
      this.dispatchEvent("pause");
    }
  };
  l.load = function () {
    this.readyState = 0;
    this.paused = !0;
    this.seeking = !1;
    this.dispatchEvent("loadstart");
    var a;
    isNaN(this.duration) ? (a = 10 + 20 * Math.random()) : (a = this.duration);
    this.setProperty("duration", a);
    a = this.seekable;
    a.g.push(new TG(this.duration));
    a.length = a.g.length;
    a = this.buffered;
    a.g.push(new TG(this.duration));
    a.length = a.g.length;
    this.dispatchEvent("loadedmetadata");
    0 < this.currentTime && this.dispatchEvent("timeupdate");
    this.dispatchEvent("loadeddata");
    this.dispatchEvent("canplay");
    this.dispatchEvent("canplaythrough");
    this.dispatchEvent("progress");
    this.playbackRate = this.defaultPlaybackRate;
  };
  l.setProperty = function (a, b) {
    switch (a) {
      case "currentTime":
        a = Number(b);
        this.seeking = !0;
        this.dispatchEvent("seeking");
        this.seeking = !1;
        this.currentTime = a;
        this.dispatchEvent("seeked");
        a = Date.now() - this.j;
        b = this.currentTime + a / 1e3;
        this.j += a;
        2 < this.readyState && (this.currentTime = Math.min(b, this.duration));
        this.dispatchEvent("timeupdate");
        if (this.currentTime === this.duration) {
          this.ended = this.paused = !0;
          var c;
          null == (c = this.B) || c.stop();
          this.dispatchEvent("ended");
        }
        break;
      case "duration":
        this.duration = Number(b);
        this.dispatchEvent("durationchange");
        break;
      case "volume":
        this.setVolume(Number(b));
        break;
      default:
        throw Error("Property setter not implemented");
    }
  };
  l.setVolume = function (a) {
    this.volume = a;
    this.dispatchEvent("volumechange");
  };
  l.setAttribute = function (a, b) {
    null != a && UG.set(a, b);
  };
  l.getAttribute = function (a) {
    return UG.get(a);
  };
  l.ag = function (a) {
    var b = null,
      c = null;
    switch (a.type) {
      case "loadeddata":
        b = "Loaded";
        break;
      case "playing":
        b = "Playing";
        c = "#00f";
        break;
      case "pause":
        b = "Paused";
        break;
      case "ended":
        (b = "Ended"), (c = "#000");
    }
    b && this.h && (this.h.innerText = b);
    c && this.g && (this.g.style.backgroundColor = c);
  };
  da.Object.defineProperties(RG.prototype, {
    src: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.A;
      },
      set: function (a) {
        this.A = a;
      },
    },
  });
  var UG = new NG(),
    TG = function (a) {
      this.startTime = 0;
      this.endTime = a;
    },
    QG = function () {
      this.length = 0;
      this.g = [];
    };
  QG.prototype.start = function (a) {
    return this.g[a].startTime;
  };
  QG.prototype.end = function (a) {
    return this.g[a].endTime;
  };
  var XG = function (a, b) {
    P.call(this);
    this.o = a;
    this.j = this.g = null;
    this.h = VG(this);
    WG(this, b);
    bB(function () {
      I(G.g(), "haob", "1");
    });
  };
  u(XG, P);
  XG.prototype.initialize = function () {
    this.h && this.h.load();
  };
  XG.prototype.L = function () {
    jh(this.g);
    P.prototype.L.call(this);
  };
  var WG = function (a, b) {
      a.g = ih("DIV", { style: "display:none;" });
      a.o.appendChild(a.g);
      a.g.appendChild(a.h);
      b &&
        ((a.j = ih("DIV", {
          style: "position:absolute;width:100%;height:100%;left:0px;top:0px",
        })),
        a.g.appendChild(a.j));
    },
    VG = function (a) {
      var b = hC(iC);
      if (dC(b, "useVideoElementFake"))
        (a = SG()),
          (b = ih("DIV", {
            style: "position:absolute;width:100%;height:100%;top:0px;left:0px;",
          })),
          Object.assign(b, a),
          (a.g = ih("DIV", {
            style:
              "position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000",
          })),
          (a.h = ih("P", {
            style:
              "position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;",
          })),
          a.g.appendChild(a.h),
          b.appendChild(a.g),
          a.l.O(a, ["loadeddata", "playing", "pause", "ended"], a.ag),
          (a = b);
      else {
        b = !1;
        try {
          -1 !== window.location.search.indexOf("goog_limavideo=true") &&
            (b = !0);
        } catch (c) {}
        if (YG(a, b)) {
          b && console.log("force lima video in wrapper");
          a = null;
          try {
            a = new nB();
          } catch (c) {
            (a = ih("lima-video")),
              K(Rk) && X.g().report(153, { limvid: "firefail" });
          }
          a.style.backgroundColor = "#000";
          a.style.height = "100%";
          a.style.width = "100%";
          a.style.position = "absolute";
          a.style.left = "0";
          a.style.top = "0";
        } else
          a = ih("VIDEO", {
            style:
              "background-color:#000;position:absolute;width:100%;height:100%;left:0;top:0;",
            title: "Advertisement".toString(),
          });
      }
      a.setAttribute("webkit-playsinline", "true");
      a.setAttribute("playsinline", "true");
      return a;
    },
    YG = function (a, b) {
      if (!w.customElements) return !1;
      if (b) return !0;
      if (Eb() && Zg(a.o) !== document) return !1;
      K(Rk) && X.g().report(153, { limvid: "vw" });
      return K(Lk) || K(Rk) || K(Jk) || K(Kk) ? !0 : !1;
    };
  XG.prototype.Lb = function () {
    return this.j;
  };
  XG.prototype.fb = function () {
    var a = this.g;
    null != a && (a.style.display = "none");
  };
  var bH = function (a, b, c) {
    var d = a && a.getRootNode ? a.getRootNode({ composed: !0 }) : a;
    if (null == a || !lh(Zg(d), d))
      throw tD(sD, null, "containerElement", "element");
    this.h = b;
    this.N = MC(this.h || null);
    this.J = Ww(this.h || null);
    this.H = String(Math.floor(1e9 * Math.random()));
    this.D = !1;
    this.Qc = a;
    this.G = null != b;
    iC.g = 2;
    this.I = ZG(b ? b : null);
    d = ih("DIV", { style: "position:absolute" });
    a.insertBefore(d, a.firstChild);
    this.o = d;
    this.g = null;
    $G(this) && b
      ? (a = new CG(b))
      : ((this.g = new XG(this.o, !0)), (a = new CG(this.g.h)));
    this.da = a;
    this.za = this.j = null;
    if ((a = this.g && iC.o))
      a = !($G(this) || sc || uc || yn() || (rc && (!rc || !Tw(Sw, 4))));
    a && ((this.j = new XG(this.o, !0)), (this.za = new CG(this.j.h)));
    this.l = c || null;
    this.F = null != this.l;
    $G(this) && b
      ? "function" !== typeof b.getBoundingClientRect
        ? ((c = this.o), (iC.j = c))
        : (c = b)
      : (c = this.o);
    this.B = c;
    this.A = new jG(this.o, this);
    this.size = new D(0, 0);
    this.K = "";
    b &&
      ((b = yw(b.src || b.currentSrc)),
      200 > b.toString().length
        ? (this.K = b.toString())
        : 200 > b.h.length && (this.K = b.h));
    this.Pd = new Map();
    this.Pd.set("videoDisplay1", this.da);
    this.za && this.Pd.set("videoDisplay2", this.za);
    aH(this) &&
      !iC.h &&
      console.warn(
        "Custom media element must be a <video> or <audio> element. Viewability/audibility measurement will fail."
      );
  };
  l = bH.prototype;
  l.initialize = function () {
    this.D = !0;
    null != this.g && this.g.initialize();
    null != this.j && this.j.initialize();
  };
  l.ua = function () {
    return this.D;
  };
  l.destroy = function () {
    var a = this;
    this.h = null;
    bo(this.g);
    bo(this.j);
    bo(this.A);
    this.da.Zb(function () {
      return bo(a.da);
    });
    null != this.za &&
      this.za.Zb(function () {
        return bo(a.za);
      });
    jh(this.o);
  };
  l.Vc = function () {
    if (null != this.g) {
      var a = this.g.g;
      null != a && (a.style.display = "block");
    }
  };
  l.cc = function (a) {
    this.da !== a &&
      this.g &&
      this.j &&
      this.za &&
      (a.setVolume(this.da.getVolume()),
      (a = this.da),
      (this.da = this.za),
      (this.za = a),
      (a = this.g),
      (this.g = this.j),
      (this.j = a),
      this.j.fb(),
      this.A.cc(this.da));
  };
  l.fb = function () {
    null != this.g && this.g.fb();
  };
  l.Lb = function () {
    return this.F && this.l ? this.l : null != this.g ? this.g.Lb() : null;
  };
  var $G = function (a) {
      return LC(a.I) && a.G;
    },
    aH = function (a) {
      var b = ["VIDEO", "AUDIO"],
        c;
      return (
        $G(a) &&
        !!a.h &&
        !b.includes(null == (c = a.h.tagName) ? void 0 : c.toUpperCase())
      );
    };
  bH.prototype.getSize = function () {
    return this.size;
  };
  var ZG = function (a) {
    return null != a &&
      "function" === typeof a.getAttribute &&
      null != a.getAttribute("playsinline")
      ? !0
      : !1;
  };
  bH.prototype.Dd = function (a) {
    this.da.Dd(a);
  };
  bH.prototype.Ed = function () {
    this.da.Ed();
  };
  bH.prototype.destroy = bH.prototype.destroy;
  bH.prototype.initialize = bH.prototype.initialize;
  var cH = { AD_LOAD: "adLoadError", AD_PLAY: "adPlayError" },
    dH = function (a) {
      var b = Error.call(this);
      this.message = b.message;
      "stack" in b && (this.stack = b.stack);
      this.data = a;
    };
  u(dH, Error);
  l = dH.prototype;
  l.getInnerError = function () {
    var a = this.data.innerError;
    return a instanceof Object ? new dH(a) : null != a ? Error(a) : null;
  };
  l.getMessage = function () {
    return this.data.errorMessage;
  };
  l.getErrorCode = function () {
    return this.data.errorCode;
  };
  l.getVastErrorCode = function () {
    var a = this.getErrorCode();
    return 1e3 > a ? a : 900;
  };
  l.getType = function () {
    return this.data.type;
  };
  l.toString = function () {
    return (
      "AdError " +
      this.getErrorCode() +
      ": " +
      this.getMessage() +
      (null != this.getInnerError()
        ? " Caused by: " + this.getInnerError()
        : "")
    );
  };
  dH.prototype.getType = dH.prototype.getType;
  dH.prototype.getVastErrorCode = dH.prototype.getVastErrorCode;
  dH.prototype.getErrorCode = dH.prototype.getErrorCode;
  dH.prototype.getMessage = dH.prototype.getMessage;
  dH.prototype.getInnerError = dH.prototype.getInnerError;
  y(
    "module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_error.AdError.Type",
    cH
  );
  var eH = { AD_ERROR: "adError" },
    fH = function (a, b) {
      b = void 0 === b ? null : b;
      qs.call(this, "adError");
      this.error = a;
      this.g = b;
    };
  u(fH, qs);
  fH.prototype.getError = function () {
    return this.error;
  };
  fH.prototype.getUserRequestContext = function () {
    return this.g;
  };
  fH.prototype.getUserRequestContext = fH.prototype.getUserRequestContext;
  fH.prototype.getError = fH.prototype.getError;
  y(
    "module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_error_event.AdErrorEvent.Type",
    eH
  );
  var gH = {
      AD_CAN_PLAY: "adCanPlay",
      zg: "adStarted",
      CONTENT_PAUSE_REQUESTED: "contentPauseRequested",
      CONTENT_RESUME_REQUESTED: "contentResumeRequested",
      CLICK: "click",
      VIDEO_CLICKED: "videoClicked",
      VIDEO_ICON_CLICKED: "videoIconClicked",
      Qd: "engagedView",
      EXPANDED_CHANGED: "expandedChanged",
      STARTED: "start",
      AD_PROGRESS: "adProgress",
      AD_BUFFERING: "adBuffering",
      IMPRESSION: "impression",
      Vd: "measurable_impression",
      VIEWABLE_IMPRESSION: "viewable_impression",
      Rd: "fully_viewable_audible_half_duration_impression",
      We: "overlay_resize",
      Xe: "overlay_unmeasurable_impression",
      Ye: "overlay_unviewable_impression",
      af: "overlay_viewable_immediate_impression",
      Ze: "overlay_viewable_end_of_session_impression",
      Sg: "externalActivityEvent",
      PAUSED: "pause",
      RESUMED: "resume",
      FIRST_QUARTILE: "firstQuartile",
      MIDPOINT: "midpoint",
      THIRD_QUARTILE: "thirdQuartile",
      COMPLETE: "complete",
      DURATION_CHANGE: "durationChange",
      USER_CLOSE: "userClose",
      Vh: "userRecall",
      Dh: "prefetched",
      LOADED: "loaded",
      ALL_ADS_COMPLETED: "allAdsCompleted",
      SKIPPED: "skip",
      ff: "skipShown",
      LINEAR_CHANGED: "linearChanged",
      SKIPPABLE_STATE_CHANGED: "skippableStateChanged",
      AD_METADATA: "adMetadata",
      AD_BREAK_FETCH_ERROR: "adBreakFetchError",
      AD_BREAK_READY: "adBreakReady",
      LOG: "log",
      VOLUME_CHANGED: "volumeChange",
      VOLUME_MUTED: "mute",
      INTERACTION: "interaction",
      Gg: "companionBackfill",
      Sh: "trackingUrlPinged",
      Wh: "video_card_endcap_collapse",
      Xh: "video_card_endcap_dismiss",
      Yh: "video_card_endcap_impression",
      Jg: "companionInitialized",
      Ig: "companionImpression",
      Hg: "companionClick",
      vh: "mediaUrlPinged",
      Te: "loadStart",
      xh: "navigationRequested",
    },
    hH = function (a, b, c) {
      b = void 0 === b ? null : b;
      c = void 0 === c ? null : c;
      qs.call(this, a);
      this.ad = b;
      this.j = c;
    };
  u(hH, qs);
  hH.prototype.getAd = function () {
    return this.ad;
  };
  hH.prototype.getAdData = function () {
    return this.j;
  };
  hH.prototype.getAdData = hH.prototype.getAdData;
  hH.prototype.getAd = hH.prototype.getAd;
  y(
    "module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_event.AdEvent.Type",
    gH
  );
  var iH = function (a, b) {
    b = void 0 === b ? null : b;
    hH.call(this, "adMetadata", a);
    this.g = b;
  };
  u(iH, hH);
  iH.prototype.yf = function () {
    return this.g;
  };
  iH.prototype.getAdCuePoints = iH.prototype.yf;
  var jH = function (a) {
    this.adBreakDuration = a.adBreakDuration;
    this.adPosition = a.adPosition;
    this.currentTime = a.currentTime;
    this.duration = a.duration;
    this.totalAds = a.totalAds;
  };
  var kH = function (a, b) {
    Q.call(this);
    this.j = a;
    this.A = b;
    this.h = this.j.currentTime;
    this.g = new wt(250);
    eo(this, this.g);
    this.l = new rx(this);
    eo(this, this.l);
    tx(this.l, this.g, "tick", this.B, !1, this);
  };
  u(kH, Q);
  kH.prototype.pb = function () {
    return this.h;
  };
  kH.prototype.start = function () {
    lH(this);
    this.g.start();
  };
  kH.prototype.stop = function () {
    this.g.stop();
  };
  kH.prototype.B = function () {
    var a = this.j.currentTime;
    a !== this.pb() && ((this.h = a), lH(this));
  };
  var lH = function (a) {
    var b = {};
    b.currentTime = a.pb();
    eD(a.A, "contentTimeUpdate", "contentTimeUpdate", b);
  };
  var mH = mc && "srcdoc" in gh(document, "IFRAME"),
    nH = function (a, b) {
      a.open("text/html", "replace");
      Hh(a, Zi(String(b)));
      a.close();
    };
  var oH = {
      rgb: !0,
      rgba: !0,
      alpha: !0,
      rect: !0,
      image: !0,
      "linear-gradient": !0,
      "radial-gradient": !0,
      "repeating-linear-gradient": !0,
      "repeating-radial-gradient": !0,
      "cubic-bezier": !0,
      matrix: !0,
      perspective: !0,
      rotate: !0,
      rotate3d: !0,
      rotatex: !0,
      rotatey: !0,
      steps: !0,
      rotatez: !0,
      scale: !0,
      scale3d: !0,
      scalex: !0,
      scaley: !0,
      scalez: !0,
      skew: !0,
      skewx: !0,
      skewy: !0,
      translate: !0,
      translate3d: !0,
      translatex: !0,
      translatey: !0,
      translatez: !0,
    },
    pH = function (a) {
      a = ob(a);
      if ("" == a) return null;
      var b = String(a.slice(0, 4)).toLowerCase();
      if (0 == ("url(" < b ? -1 : "url(" == b ? 0 : 1)) return null;
      if (0 < a.indexOf("(")) {
        if (/"|'/.test(a)) return null;
        b = /([\-\w]+)\(/g;
        for (var c; (c = b.exec(a)); )
          if (!(c[1].toLowerCase() in oH)) return null;
      }
      return a;
    };
  function qH(a, b) {
    a = w[a];
    return a && a.prototype
      ? ((b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get) || null
      : null;
  }
  function rH(a) {
    var b = w.CSSStyleDeclaration;
    return (b && b.prototype && b.prototype[a]) || null;
  }
  qH("Element", "attributes") || qH("Node", "attributes");
  qH("Element", "innerHTML") || qH("HTMLElement", "innerHTML");
  qH("Node", "nodeName");
  qH("Node", "nodeType");
  qH("Node", "parentNode");
  qH("Node", "childNodes");
  qH("HTMLElement", "style") || qH("Element", "style");
  qH("HTMLStyleElement", "sheet");
  var sH = rH("getPropertyValue"),
    tH = rH("setProperty");
  qH("Element", "namespaceURI") || qH("Node", "namespaceURI");
  function uH(a, b, c, d) {
    if (a) return a.apply(b, d);
    if (jc && 10 > document.documentMode) {
      if (!b[c].call) throw Error("IE Clobbering detected");
    } else if ("function" != typeof b[c]) throw Error("Clobbering detected");
    return b[c].apply(b, d);
  }
  var vH = {
      "-webkit-border-horizontal-spacing": !0,
      "-webkit-border-vertical-spacing": !0,
    },
    xH = function (a) {
      if (!a) return Kg;
      var b = document.createElement("div").style;
      wH(a).forEach(function (c) {
        var d =
          mc && c in vH
            ? c
            : c.replace(
                /^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i,
                ""
              );
        0 != d.lastIndexOf("--", 0) &&
          0 != d.lastIndexOf("var", 0) &&
          ((c =
            uH(
              sH,
              a,
              a.getPropertyValue ? "getPropertyValue" : "getAttribute",
              [c]
            ) || ""),
          (c = pH(c)),
          null != c &&
            uH(tH, b, b.setProperty ? "setProperty" : "setAttribute", [d, c]));
      });
      return new Jg(b.cssText || "", Ig);
    },
    wH = function (a) {
      Pa(a) ? (a = $b(a)) : ((a = pg(a)), Wb(a, "cssText"));
      return a;
    };
  var yH = fa([""]),
    zH = function (a, b, c) {
      Q.call(this);
      this.h = a;
      this.l = b;
      this.B = c;
      this.g = null;
      this.D = "";
      this.F = Ki(yH);
      this.G = 0;
      this.A = this.slot = this.j = null;
      this.sessionId = "";
    };
  u(zH, Q);
  zH.prototype.init = function (a) {
    this.sessionId = a;
    a = "about:blank";
    jc && (a = "");
    this.j = ih("IFRAME", {
      src: a,
      allowtransparency: !0,
      background: "transparent",
    });
    Zm(this.j, { display: "none", width: "0", height: "0" });
    a = this.h.Qc;
    a.appendChild(this.j);
    a = a.ownerDocument;
    a = a.defaultView || a.parentWindow;
    null == this.A && (this.A = new rx(this));
    this.A.O(a, "message", this.H);
    a =
      '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js">\x3c/script><script>loader = new VPAIDLoader(false, "' +
      (this.sessionId + '");\x3c/script></body>');
    if (Kc || Ic || kc) {
      var b = this.j.contentWindow;
      b && nH(b.document, a);
    } else
      (b = this.j),
        mH
          ? ((a = Zi(a)), (b.srcdoc = Ng(a)))
          : (b = b.contentWindow) && nH(b.document, a);
  };
  zH.prototype.H = function (a) {
    try {
      var b = a.g.data;
      try {
        var c = JSON.parse(b);
      } catch (x) {
        return;
      }
      var d = c.session;
      if (null != d && this.sessionId === d)
        switch (c.type) {
          case "friendlyReady":
            var e = AH(this);
            if (null != e) {
              this.g = e;
              this.D = e.currentSrc;
              var f = e.style.cssText;
              if (jc && 10 > document.documentMode) var g = Kg;
              else {
                var h = document.implementation
                  .createHTMLDocument("")
                  .createElement("DIV");
                h.style.cssText = f;
                g = xH(h.style);
              }
              this.F = g;
              this.G = e.currentTime;
            } else {
              var k = this.h.Qc,
                m = "border: 0; margin: 0; padding: 0; position: absolute; ",
                n = this.h.getSize();
              m += "width:" + n.width + "px;";
              m += "height:" + n.height + "px;";
              this.g = ih("VIDEO", { style: m, autoplay: !0 });
              k.appendChild(this.g);
            }
            var q = this.h.Qc;
            k = "border: 0; margin: 0; padding: 0;position: absolute; ";
            var r = hn(this.g);
            k += "width:" + r.width + "px;";
            k += "height:" + r.height + "px;";
            this.slot = ih("DIV", { style: k });
            q.appendChild(this.slot);
            try {
              this.j.contentWindow.loader.initFriendly(this.g, this.slot);
            } catch (x) {
              BH(this);
            }
            eD(this.l, "vpaid", "", b);
            break;
          case "becameLinear":
            this.g && !th() && !oh() && Zm(this.g, { visibility: "visible" });
            eD(this.l, "vpaid", "", b);
            break;
          case "becameNonlinear":
            CH(this);
            eD(this.l, "vpaid", "", b);
            break;
          case "startAd":
            q = {};
            if (this.g) {
              m = this.g.paused;
              var v = 0 < this.g.currentTime;
              q.apl = v && !m ? "1" : "0";
              q.ip = m ? "1" : "0";
              q.iavp = v ? "1" : "0";
            } else q.apl = "n";
            X.g().report(99, q);
            eD(this.l, "vpaid", "", b);
            this.Vc();
            break;
          default:
            eD(this.l, "vpaid", "", b);
        }
    } catch (x) {
      BH(this);
    }
  };
  var BH = function (a) {
    var b = { type: "error" };
    b.session = a.sessionId;
    b = JSON.stringify(b);
    a.postMessage(b);
  };
  zH.prototype.postMessage = function (a) {
    window.postMessage(a, "*");
  };
  var AH = function (a) {
    return ("videoDisplayUnknown" === a.B ? a.h.da : a.h.Pd.get(a.B)).N.g;
  };
  zH.prototype.Vc = function () {
    null != AH(this) && this.h.Vc();
  };
  var CH = function (a) {
    a.g && !th() && !oh() && Zm(a.g, { visibility: "hidden" });
  };
  zH.prototype.L = function () {
    bo(this.A);
    this.A = null;
    jh(this.slot);
    this.slot = null;
    jh(this.j);
    this.j = null;
    var a = AH(this);
    if (null != a) {
      var b = this.F;
      a.style.cssText =
        b instanceof Jg && b.constructor === Jg ? b.g : "type_error:SafeStyle";
      th() || oh()
        ? ((a.src = this.D), (a.currentTime = this.G))
        : (a.removeAttribute("src"), this.h.fb());
    } else jh(this.g), (this.g = null);
    Q.prototype.L.call(this);
  };
  var DH = function (a, b) {
    P.call(this);
    this.h = a;
    this.j = b;
    this.g = new Map();
  };
  u(DH, P);
  var EH = function (a, b) {
    try {
      var c = b.ra,
        d = c.session;
      switch (c.vpaidEventType) {
        case "createFriendlyIframe":
          b = "videoDisplayUnknown";
          c.videoDisplayName && (b = c.videoDisplayName);
          var e = c.session,
            f = new zH(a.h, a.j, b);
          a.g.set(e, f);
          f.init(e);
          break;
        case "vpaidNonLinear":
          var g = a.g.get(d);
          g && CH(g);
          break;
        case "destroyFriendlyIframe":
          var h = a.g.get(d);
          h && (h.W(), a.g.delete(d));
      }
    } catch (k) {
      X.g().report(125, { msg: k.message });
    }
  };
  DH.prototype.L = function () {
    this.g.forEach(function (a) {
      a.W();
    });
  };
  var FH = function (a) {
    this.M = A(a);
  };
  u(FH, B);
  FH.prototype.getValue = function () {
    return hf(this, 1);
  };
  FH.prototype.getVersion = function () {
    return jf(this, 5);
  };
  var GH = Tf(FH);
  var HH = function () {
      this.g = window;
      this.h = 0;
    },
    IH = function (a, b, c, d) {
      if (d) {
        var e = gf(c) - Date.now() / 1e3;
        e = { qe: Math.max(e, 0), path: hf(c, 3), domain: hf(c, 4), fg: !1 };
        c = c.getValue();
        a = a.g;
        df(d, 5) && Tj(a) && new Rj(a.document).set(b, c, e);
      }
    },
    JH = function (a, b, c) {
      if (c && Uj(b, c, a.g)) {
        var d = a.g.location.hostname;
        if ("localhost" === d) d = ["localhost"];
        else if (((d = d.split(".")), 2 > d.length)) d = [];
        else {
          for (var e = [], f = 0; f < d.length - 1; ++f)
            e.push(d.slice(f).join("."));
          d = e;
        }
        d = t(d);
        for (e = d.next(); !e.done; e = d.next()) {
          f = b;
          var g = a.g;
          df(c, 5) && Tj(g) && new Rj(g.document).remove(f, "/", e.value);
        }
      }
    };
  var KH = function () {
    this.g = [];
    this.h = [];
  };
  l = KH.prototype;
  l.isEmpty = function () {
    return 0 === this.g.length && 0 === this.h.length;
  };
  l.clear = function () {
    this.g = [];
    this.h = [];
  };
  l.contains = function (a) {
    return Vb(this.g, a) || Vb(this.h, a);
  };
  l.remove = function (a) {
    var b = this.g;
    b: {
      var c = b.length - 1;
      0 > c && (c = Math.max(0, b.length + c));
      if ("string" === typeof b)
        c = "string" !== typeof a || 1 != a.length ? -1 : b.lastIndexOf(a, c);
      else {
        for (; 0 <= c; c--) if (c in b && b[c] === a) break b;
        c = -1;
      }
    }
    0 <= c ? (Xb(b, c), (b = !0)) : (b = !1);
    return b || Wb(this.h, a);
  };
  l.zb = function () {
    for (var a = [], b = this.g.length - 1; 0 <= b; --b) a.push(this.g[b]);
    var c = this.h.length;
    for (b = 0; b < c; ++b) a.push(this.h[b]);
    return a;
  };
  var Z = function (a, b, c, d, e, f, g, h) {
    Q.call(this);
    var k = this;
    this.G = a;
    this.g = b;
    this.adTagUrl = c;
    this.ba = d;
    this.Wa = e;
    this.D = g;
    this.Ma = h;
    this.l = new HF();
    this.J = !1;
    this.volume = 1;
    this.ba = d;
    this.aa = -1;
    this.B = this.j = this.h = null;
    this.A = new kH({ currentTime: 0 }, this.D);
    this.F = new KH();
    this.ma = this.V = !1;
    this.X = new Map();
    this.Z = this.Ea = !1;
    this.Fa = new DH(b, g);
    eo(this, this.Fa);
    this.H = f && null != this.g.l;
    this.N = function () {
      var m = k.g.da,
        n = m.getCurrentTime();
      m = m.getDuration();
      return { currentTime: n, duration: m, isPlaying: !0, volume: k.volume };
    };
    this.U = new rx(this);
    this.U.O(this.D, "adsManager", this.bc);
  };
  u(Z, Q);
  Z.prototype.bc = function (a) {
    var b = this,
      c = a.messageType,
      d = a.ra,
      e = {};
    switch (c) {
      case "error":
        LH(this);
        MH(this, d);
        break;
      case "contentPauseRequested":
        X.g().report(130);
        NH(this);
        this.A.stop();
        OH(this, c, d);
        break;
      case "contentResumeRequested":
        PH(this, function () {
          OH(b, c, d);
        });
        break;
      case "remainingTime":
        this.aa = d.remainingTime;
        break;
      case "skip":
        OH(this, c, d);
        break;
      case "log":
        OH(this, c, d, d.logData);
        break;
      case "companionBackfill":
        a = Ma("window.google_show_companion_ad");
        null != a && a();
        break;
      case "skipShown":
        this.J = !0;
        OH(this, c, d);
        break;
      case "interaction":
        OH(this, c, d, d.interactionData);
        break;
      case "vpaidEvent":
        EH(this.Fa, a);
        break;
      case "skippableStateChanged":
        e = d.adData;
        null != e.skippable && (this.J = e.skippable);
        OH(this, c, d);
        break;
      case "volumeChange":
        e = d.adData;
        null != e && "number" === typeof e.volume && (this.volume = e.volume);
        OH(this, c, d);
        break;
      case "firstQuartile":
        OH(this, VC.firstQuartile, d);
        OH(this, c, d);
        break;
      case "thirdQuartile":
        OH(this, VC.thirdQuartile, d);
        OH(this, c, d);
        break;
      case "updateGfpCookie":
        QH(this, d);
        break;
      default:
        OH(this, c, d);
    }
  };
  var OH = function (a, b, c, d) {
      if (null == c.companions) {
        var e = a.X.get(c.adId);
        c.companions = null != e ? e : [];
      }
      var f = c.adData;
      if ((e = null == f ? null : new Y(f))) a.h = e;
      switch (b) {
        case "adBreakReady":
        case "mediaUrlPinged":
          b = new hH(b, null, c);
          break;
        case "adMetadata":
          b = null;
          null != c.adCuePoints && (b = new FF(c.adCuePoints));
          b = new iH(e, b);
          break;
        case "allAdsCompleted":
          a.h = null;
          a.Ea = !0;
          b = new hH(b, e);
          break;
        case "contentPauseRequested":
          a.Z = !1;
          b = new hH(b, e);
          break;
        case "contentResumeRequested":
          a.h = null;
          a.Z = !0;
          b = new hH(b, e);
          break;
        case "loaded":
          a.aa = e.getDuration();
          a.J = !1;
          NC() &&
            ((d = a.G),
            (c = a.Wa),
            d.h.set(EF(e), a.N),
            tG(d) && sG(d, "loaded", EF(e), c));
          b = new hH(b, e, f);
          break;
        case "start":
          a.X.set(c.adId, c.companions);
          null != a.g.Lb() &&
            (null == a.j
              ? ((a.j = new WE()), a.U.O(a.j, "click", a.Xf))
              : $E(a.j),
            YE(a.j, a.g.Lb()));
          b = new hH(b, e);
          break;
        case "complete":
          null != a.j && $E(a.j);
          NC() && vG(a.G, a.N, EF(e));
          a.h = null;
          a.X.delete(c.adId);
          b = new hH(b, e);
          break;
        case "log":
          c = null;
          null != d && null != d.type
            ? ((f = d.type), (f = "adLoadError" === f || "adPlayError" === f))
            : (f = !1);
          f && (c = { adError: new dH(d) });
          b = new hH(b, e, c);
          break;
        case "interaction":
          b = new hH(b, e, d);
          break;
        case "adProgress":
          b = new hH(b, e, new jH(c));
          break;
        default:
          b = new hH(b, e);
      }
      a.dispatchEvent(b);
      a.Ea && a.Z && a.destroy();
    },
    MH = function (a, b) {
      var c = new fH(new dH(b));
      a.V
        ? (a.dispatchEvent(c),
          NC() && a.h && vG(a.G, a.N, EF(a.h)),
          (a.h = null))
        : a.F.h.push(c);
      a = { error: b.errorCode, vis: Wi(document) };
      X.g().report(7, a);
    },
    RH = function (a, b, c) {
      eD(a.D, "adsManager", b, c);
    },
    PH = function (a, b) {
      X.g().report(131);
      LH(a, b);
      a.ya() || a.A.start();
    },
    NH = function (a) {
      var b = a.g.da;
      $G(a.g) &&
        a.l.restoreCustomPlaybackStateOnAdBreakComplete &&
        null != b.Ud &&
        b.Ud();
    },
    LH = function (a, b) {
      var c = a.g.da;
      $G(a.g) && a.l.restoreCustomPlaybackStateOnAdBreakComplete && null != c.Zb
        ? c.Zb(b)
        : b && b();
    };
  l = Z.prototype;
  l.configureAdsManager = function (a, b) {
    this.B = a;
    null != a.currentTime && ((this.A = new kH(a, this.D)), this.A.start());
    null != b && (this.l = SH(b));
  };
  l.init = function (a, b, c, d) {
    if (this.F.isEmpty()) {
      var e = this.g,
        f = null;
      e.h && null == d && (f = { vd: "setnull" });
      e.h && e.h === d && (f = { vd: "match" });
      if (e.h && e.h !== d) {
        f = MC(d || null);
        var g = Ww(d || null);
        f = { vd: "diff", oc: e.N, nc: f, oi: e.J, ni: g };
      }
      !e.h && d && (f = { vd: "new" });
      f && ((f.custVid = e.H), X.g().report(93, f));
      null != d &&
        ((e.I = ZG(d)),
        LC(e.I) &&
          ((e.G = !0),
          bo(e.g),
          bo(e.j),
          bo(e.za),
          (e.g = null),
          (e.j = null),
          (e.za = null),
          bo(e.da),
          (e.da = new CG(d)),
          "function" !== typeof d.getBoundingClientRect
            ? ((e.B = e.o), (iC.j = e.B))
            : (e.B = d),
          e.A.cc(e.da)));
      this.V = !0;
      this.resize(a, b, c);
      d = IF(this.l, this.H);
      e = {};
      a =
        ((e.adsRenderingSettings = d),
        (e.width = a),
        (e.height = b),
        (e.viewMode = c),
        e);
      RH(this, "init", a);
    } else {
      for (; !this.F.isEmpty(); )
        (b = a = this.F),
          0 === b.g.length && ((b.g = b.h), b.g.reverse(), (b.h = [])),
          (a = a.g.pop()),
          this.dispatchEvent(a);
      this.W();
    }
  };
  l.isCustomPlaybackUsed = function () {
    return $G(this.g);
  };
  l.isCustomClickTrackingUsed = function () {
    return this.H;
  };
  l.getRemainingTime = function () {
    return this.aa;
  };
  l.getAdSkippableState = function () {
    return this.J;
  };
  l.discardAdBreak = function () {
    RH(this, "discardAdBreak");
  };
  l.updateAdsRenderingSettings = function (a) {
    if (null != a) {
      a = SH(a);
      var b = this.l.bitrate,
        c = a.bitrate;
      X.g().report(96, {
        init: this.V ? "1" : "0",
        start: this.ma ? "1" : "0",
        old: b,
        new: c,
        changed: b !== c ? "1" : "0",
      });
      this.l = a;
      a = IF(this.l, this.H);
      b = {};
      a = ((b.adsRenderingSettings = a), b);
      RH(this, "updateAdsRenderingSettings", a);
    }
  };
  l.skip = function () {
    RH(this, "skip");
  };
  l.start = function () {
    if (this.adTagUrl) {
      (sc || uc) && X.g().report(50, { customPlayback: $G(this.g) });
      this.g.ua() ||
        X.g().report(26, {
          adtagurl: this.adTagUrl,
          customPlayback: $G(this.g),
        });
      sn(this.g.o) &&
        X.g().report(30, {
          adtagurl: this.adTagUrl,
          customPlayback: $G(this.g),
        });
      var a = this.g.l,
        b = this.g.o,
        c;
      if ((c = a && b && !sn(a)))
        (a = qG(a)),
          (b = qG(b)),
          (c =
            0 < a.width &&
            0 < a.height &&
            0 < b.width &&
            0 < b.height &&
            a.left <= b.left + b.width &&
            b.left <= a.left + a.width &&
            a.top <= b.top + b.height &&
            b.top <= a.top + a.height);
      b = c;
      X.g().report(31, {
        adtagurl: this.adTagUrl,
        customPlayback: $G(this.g),
        covers: b,
      });
    }
    if (!this.g.ua() && !$G(this.g)) throw tD(rD);
    b = this.g;
    b.F = this.H && null != b.l;
    this.g.A.g.style.opacity = "1";
    if (null != this.B && 1 === this.getVolume()) {
      var d, e;
      if (
        "boolean" === typeof (null == (d = this.B) ? void 0 : d.muted) &&
        (null == (e = this.B) ? 0 : e.muted)
      )
        this.setVolume(0);
      else {
        var f;
        if ("number" === typeof (null == (f = this.B) ? void 0 : f.volume)) {
          var g;
          d = null == (g = this.B) ? void 0 : g.volume;
          if (0 <= d && 1 >= d) {
            var h;
            this.setVolume(null == (h = this.B) ? void 0 : h.volume);
          }
        }
      }
    }
    this.ma = !0;
    RH(this, "start");
  };
  l.Xf = function () {
    if (!this.l.disableClickThrough && null != this.h) {
      var a = this.h.data.clickThroughUrl;
      null != a && Qw(a, this.h.data.attributionParams);
    }
  };
  l.resize = function (a, b, c) {
    var d = this.g,
      e = d.o;
    null != e &&
      (-1 === a
        ? ((e.style.right = "0"), (e.style.left = "0"))
        : (e.style.width = a + "px"),
      -1 === b
        ? ((e.style.bottom = "0"), (e.style.top = "0"))
        : (e.style.height = b + "px"));
    e = d.A;
    e.g.width = -1 === a ? "100%" : String(a);
    e.g.height = -1 === b ? "100%" : String(b);
    try {
      e.g.offsetTop = e.g.offsetTop;
    } catch (f) {}
    d.size = new D(a, b);
    d = {};
    a = ((d.width = a), (d.height = b), (d.viewMode = c), d);
    RH(this, "resize", a);
  };
  l.stop = function () {
    RH(this, "stop");
  };
  l.expand = function () {
    RH(this, "expand");
  };
  l.collapse = function () {
    RH(this, "collapse");
  };
  l.getVolume = function () {
    return this.volume;
  };
  l.setVolume = function (a) {
    this.volume = a;
    this.g.da.setVolume(a);
    var b = {};
    a = ((b.volume = a), b);
    RH(this, "volume", a);
  };
  l.pause = function () {
    RH(this, "pause");
  };
  l.resume = function () {
    RH(this, "resume");
  };
  l.destroy = function () {
    this.W();
  };
  l.getCuePoints = function () {
    return this.ba;
  };
  l.zf = function () {
    return this.h;
  };
  l.L = function () {
    RH(this, "destroy");
    null != this.j && this.j.W();
    this.U.W();
    this.F.clear();
    this.A && (this.A.stop(), this.A.W());
    NC() && vG(this.G, this.N);
    Q.prototype.L.call(this);
  };
  l.qf = function () {
    X.g().report(124, { api: "clicked" });
    var a = this.h && this.h.data.clickThroughUrl,
      b;
    if (a && (null == (b = this.h) ? 0 : b.pe())) {
      var c;
      Qw(a, null == (c = this.h) ? void 0 : c.data.attributionParams);
    }
    RH(this, "click");
  };
  l.focus = function () {
    eD(this.D, "userInteraction", "focusUiElement");
  };
  var QH = function (a, b) {
    var c = b.gfpCookieUserEnabled;
    b = b.gfpCookieClearData;
    var d = new FH();
    d = mf(d, 1, c ? "0" : "1");
    d = Le(d, 2, je(2147483647));
    d = mf(d, 3, "/");
    d = mf(d, 4, window.location.hostname);
    var e = new HH(),
      f,
      g;
    a = null != (g = null == (f = a.Ma) ? void 0 : pC(f)) ? g : null;
    IH(e, "__gpi_opt_out", d, a);
    if (!c || b) JH(e, "__gads", a), JH(e, "__gpi", a);
  };
  Z.prototype.clicked = Z.prototype.qf;
  Z.prototype.getCurrentAd = Z.prototype.zf;
  Z.prototype.getCuePoints = Z.prototype.getCuePoints;
  Z.prototype.destroy = Z.prototype.destroy;
  Z.prototype.resume = Z.prototype.resume;
  Z.prototype.pause = Z.prototype.pause;
  Z.prototype.setVolume = Z.prototype.setVolume;
  Z.prototype.getVolume = Z.prototype.getVolume;
  Z.prototype.collapse = Z.prototype.collapse;
  Z.prototype.expand = Z.prototype.expand;
  Z.prototype.stop = Z.prototype.stop;
  Z.prototype.resize = Z.prototype.resize;
  Z.prototype.start = Z.prototype.start;
  Z.prototype.skip = Z.prototype.skip;
  Z.prototype.updateAdsRenderingSettings =
    Z.prototype.updateAdsRenderingSettings;
  Z.prototype.discardAdBreak = Z.prototype.discardAdBreak;
  Z.prototype.getAdSkippableState = Z.prototype.getAdSkippableState;
  Z.prototype.getRemainingTime = Z.prototype.getRemainingTime;
  Z.prototype.isCustomClickTrackingUsed = Z.prototype.isCustomClickTrackingUsed;
  Z.prototype.isCustomPlaybackUsed = Z.prototype.isCustomPlaybackUsed;
  Z.prototype.init = Z.prototype.init;
  function SH(a) {
    if (a instanceof HF) return X.g().report(174, { valid: !0 }), a;
    X.g().report(174, { valid: !1 });
    var b = new HF();
    b.append(a);
    return b;
  }
  var TH = { ADS_MANAGER_LOADED: "adsManagerLoaded" },
    UH = function (a, b) {
      qs.call(this, "adsManagerLoaded");
      this.g = a;
      this.j = b;
    };
  u(UH, qs);
  UH.prototype.getAdsManager = function (a, b) {
    a = a || { currentTime: null };
    this.g.configureAdsManager(a, b);
    return this.g;
  };
  UH.prototype.getUserRequestContext = function () {
    return this.j;
  };
  UH.prototype.getUserRequestContext = UH.prototype.getUserRequestContext;
  UH.prototype.getAdsManager = UH.prototype.getAdsManager;
  y(
    "module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ads_manager_loaded_event.AdsManagerLoadedEvent.Type",
    TH
  );
  var VH = function () {
    this.continuousPlayback = this.adWillPlayMuted = this.adWillAutoPlay = null;
    this.descriptionUrl = "";
    this.iconsSupported = !1;
    this.nonceLengthLimit = Number.MAX_SAFE_INTEGER;
    this.ppid =
      this.playerVersion =
      this.playerType =
      this.omidVersion =
      this.omidPartnerVersion =
      this.omidPartnerName =
        "";
    this.sessionId = dF;
    this.skippablesSupported = !1;
    this.supportedApiFrameworks = [];
    this.videoWidth = this.videoHeight = -1;
    this.url = "";
  };
  y("goog.pal.NonceRequest", VH);
  var WH = function (a, b) {
      (0, a.__uspapi)("getUSPData", 1, function (c, d) {
        b.callback({ sc: null != c ? c : void 0, uc: d ? void 0 : 2 });
      });
    },
    XH = {
      Fc: function (a) {
        return a.callback;
      },
      Rb: function (a, b) {
        a = {};
        return (
          (a.__uspapiCall = { callId: b, command: "getUSPData", version: 1 }), a
        );
      },
      Cb: function (a, b) {
        b = b.__uspapiReturn;
        var c;
        a({
          sc: null != (c = b.returnValue) ? c : void 0,
          uc: b.success ? void 0 : 2,
        });
      },
    };
  function YH(a) {
    var b = {};
    "string" === typeof a.data ? (b = JSON.parse(a.data)) : (b = a.data);
    return { payload: b, se: b.__uspapiReturn.callId };
  }
  var ZH = function (a, b) {
    b = void 0 === b ? {} : b;
    P.call(this);
    var c;
    this.timeoutMs = null != (c = b.timeoutMs) ? c : 500;
    this.caller = new Nv(
      a,
      "__uspapiLocator",
      function (d) {
        return "function" === typeof d.__uspapi;
      },
      YH
    );
    this.caller.l.set("getDataWithCallback", WH);
    this.caller.o.set("getDataWithCallback", XH);
  };
  u(ZH, P);
  ZH.prototype.L = function () {
    this.caller.W();
    P.prototype.L.call(this);
  };
  var $H = function (a, b) {
    var c = {};
    if (Ov(a.caller)) {
      var d = $f(function () {
        b(c);
      });
      Qv(a.caller, "getDataWithCallback", {
        callback: function (e) {
          e.uc || (c = e.sc);
          d();
        },
      });
      setTimeout(d, a.timeoutMs);
    } else b(c);
  };
  function aI() {
    var a = window,
      b,
      c;
    return null !=
      (c = ["pbjs"]
        .concat(null != (b = a._pbjsGlobals) ? b : [])
        .map(function (d) {
          return a[d];
        })
        .find(function (d) {
          return Array.isArray(null == d ? void 0 : d.que);
        }))
      ? c
      : null;
  }
  function bI(a, b) {
    var c, d, e;
    null == b ? (e = void 0) : (e = b.get.call(b, a));
    return null != (d = null != (c = e) ? c : null == b ? void 0 : b.get(Ph(a)))
      ? d
      : 0;
  }
  var cI = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/,
    dI = new Map();
  function eI(a, b, c, d, e) {
    var f = e.getBidResponsesForAdUnitCode;
    if (f) {
      var g,
        h,
        k,
        m,
        n,
        q =
          null !=
          (n = null == (g = f(null != (k = b.Jb) ? k : "")) ? void 0 : g.bids)
            ? n
            : null == (h = f(null != (m = b.adUnitCode) ? m : ""))
            ? void 0
            : h.bids;
      if (
        null != q &&
        q.length &&
        ((g = q.filter(function (x) {
          var H = x.adId;
          return (
            x.auctionId !== c &&
            Object.values(d).some(function (S) {
              return S.includes(H);
            })
          );
        })),
        g.length)
      ) {
        var r, v;
        f =
          null == (r = e.adUnits)
            ? void 0
            : null ==
              (v = r.find(function (x) {
                x = x.code;
                return x === b.Jb || x === b.adUnitCode;
              }))
            ? void 0
            : v.mediaTypes;
        r = t(g);
        for (v = r.next(); !v.done; v = r.next())
          (v = v.value),
            (g = fI(v, d, f)),
            (g = lu(a, fu(lf(gu(eu(new du(), v.bidder), 1), 6, !0), g))),
            gI(v.bidder, e, g),
            "number" === typeof v.timeToRespond &&
              Le(g, 2, je(Math.round(v.timeToRespond)));
      }
    }
  }
  function gI(a, b, c) {
    for (var d = []; a && !d.includes(a); ) {
      d.unshift(a);
      var e = void 0,
        f = void 0;
      a =
        null == (e = b)
          ? void 0
          : null == (f = e.aliasRegistry)
          ? void 0
          : f[a];
    }
    Re(c, 10, d, pe);
  }
  function hI(a, b, c) {
    null != ee(Je(a, 3)) ||
      (c === b.adUnitCode ? Le(a, 3, de(1)) : c === b.Jb && Le(a, 3, de(2)));
  }
  function iI(a, b, c, d, e, f, g) {
    f = f.get(
      null != g
        ? g
        : function () {
            return null;
          }
    );
    1 !== (null == f ? void 0 : jf(f, 1)) && Ye(b, 5, f);
    void 0 !== Ue(a, Zt, 5, !1) ||
      (f
        ? 1 === jf(f, 1)
          ? mu(a, f)
          : mu(a, bu($t(au(new Zt(), e), 1), bI(c, d)))
        : mu(a, $t(au(new Zt(), e), bI(c, d) ? 2 : 3)));
  }
  function fI(a, b, c) {
    var d = a.cpm,
      e = a.originalCpm,
      f = a.currency,
      g = a.originalCurrency,
      h = a.dealId,
      k = a.adserverTargeting,
      m = a.bidder,
      n = a.adId,
      q = a.mediaType,
      r = a.height,
      v = a.width;
    a = new Xt();
    "number" === typeof d &&
      (Le(a, 2, je(Math.round(1e6 * d))),
      (g && g !== f) ||
        ((d = Math.round(1e6 * Number(e))),
        isNaN(d) || d === gf(a) || Le(a, 8, je(d))));
    "string" === typeof f && mf(a, 3, f);
    ["string", "number"].includes(typeof h) &&
      ((f = new Rt()), (h = mf(f, 1, String(h))), Ye(a, 6, h));
    if ("object" === typeof k)
      for (m = t(["", "_" + m]), h = m.next(); !h.done; h = m.next()) {
        f = h.value;
        h = [];
        d = t(Object.entries(k));
        for (e = d.next(); !e.done; e = d.next()) {
          e = t(e.value);
          g = e.next().value;
          e = e.next().value;
          g = ("" + g + f).slice(0, 20);
          var x = void 0;
          if (null != (x = b[g]) && x.length)
            if (b[g][0] === String(e)) h.push(g);
            else {
              h = [];
              break;
            }
        }
        f = Me(a, 4, re);
        Re(a, 4, f.concat(h), pe);
      }
    switch (q || "banner") {
      case "banner":
        Le(a, 5, de(1));
        break;
      case "native":
        Le(a, 5, de(2));
        break;
      case "video":
        Le(a, 5, de(3));
        b = new Vt();
        var H;
        if (
          "adpod" ===
          (null == c ? void 0 : null == (H = c.video) ? void 0 : H.context)
        ) {
          var S,
            la =
              null == c
                ? void 0
                : null == (S = c.video)
                ? void 0
                : S.adPodDurationSec;
          Le(b, 1, je(la));
        } else
          (S =
            null == c
              ? void 0
              : null == (la = c.video)
              ? void 0
              : la.maxduration),
            Le(b, 1, je(S));
        var V;
        if (
          "number" ===
          typeof (null == c ? void 0 : null == (V = c.video) ? void 0 : V.skip)
        ) {
          var M;
          c = !!(null == c ? 0 : null == (M = c.video) ? 0 : M.skip);
          lf(b, 2, c);
        }
        Ye(a, 9, b);
    }
    Number.isFinite(r) &&
      Number.isFinite(v) &&
      ((M = new Tt()),
      (v = Le(M, 1, ge(Math.round(v)))),
      (r = Le(v, 2, ge(Math.round(r)))),
      Ye(a, 7, r));
    "string" === typeof n && mf(a, 1, n);
    return a;
  }
  function jI(a, b) {
    var c = new Map(),
      d = function (k) {
        var m = c.get(k);
        m || ((m = {}), c.set(k, m));
        return m;
      },
      e = [];
    a = t(a);
    for (var f = a.next(); !f.done; f = a.next()) {
      f = f.value;
      var g = f.args,
        h = f.eventType;
      f = f.elapsedTime;
      "bidTimeout" === h && e.push.apply(e, ha(g));
      switch (h) {
        case "bidRequested":
          if (g.auctionId !== b) continue;
          if (!Array.isArray(g.bids)) continue;
          g = t(g.bids);
          for (h = g.next(); !h.done; h = g.next())
            if ((h = h.value.bidId)) d(h).requestTime = f;
          break;
        case "noBid":
          g.auctionId === b && g.bidId && (d(g.bidId).eg = f);
      }
    }
    d = new Map();
    a = t(c.entries());
    for (f = a.next(); !f.done; f = a.next())
      (g = t(f.value)),
        (f = g.next().value),
        (h = g.next().value),
        (g = h.requestTime),
        (h = h.eg),
        g && h && d.set(f, { latency: h - g, oe: !1 });
    e = t(e);
    for (a = e.next(); !a.done; a = e.next())
      if (
        ((f = a.value),
        (a = f.bidId),
        (f = f.auctionId),
        a && f === b && (a = d.get(a)))
      )
        a.oe = !0;
    return d;
  }
  function kI(a, b) {
    var c = {};
    c = void 0 === c ? {} : c;
    var d = void 0 === d ? new Map() : d;
    var e = void 0 === e ? !1 : e;
    var f = void 0 === f ? new Map() : f;
    var g = void 0 === g ? new iu() : g;
    var h = new Map(),
      k = (0, a.getEvents)(),
      m = k.filter(function (Da) {
        var Va = Da.args;
        return "auctionEnd" === Da.eventType && Va.auctionId;
      }),
      n = new ou(),
      q = function (Da) {
        return Da === b.Jb || Da === b.adUnitCode;
      },
      r,
      v,
      x,
      H =
        null !=
        (x = dI.get(
          (null != (r = b.Jb) ? r : "") + (null != (v = b.adUnitCode) ? v : "")
        ))
          ? x
          : 0,
      S;
    m =
      null !=
      (S = m.filter(function (Da) {
        var Va, Sf, od;
        return (
          Number(null == (Va = Da.args) ? void 0 : Va.timestamp) > H &&
          (null == (Sf = Da.args)
            ? void 0
            : null == (od = Sf.adUnitCodes)
            ? void 0
            : od.find(q))
        );
      }))
        ? S
        : [];
    if (!m.length) return null;
    var la;
    m =
      null ==
      (la = m.reduce(function (Da, Va) {
        return Number(Va.args.timestamp) > Number(Da.args.timestamp) ? Va : Da;
      }))
        ? void 0
        : la.args;
    if (!m) return null;
    S = void 0 === m.bidderRequests ? [] : m.bidderRequests;
    la = void 0 === m.bidsReceived ? [] : m.bidsReceived;
    var V = m.auctionId;
    m = m.timestamp;
    if (!V || null == m || !S.length) return null;
    var M, Md;
    dI.set(
      (null != (M = b.Jb) ? M : "") + (null != (Md = b.adUnitCode) ? Md : ""),
      m
    );
    M = pu(n);
    a.version && cI.test(a.version) && mf(M, 6, a.version);
    Ye(M, 9, g);
    g = Zf(function () {
      return jI(k, V);
    });
    Md = t(S);
    m = Md.next();
    for (
      S = {};
      !m.done;
      S = { bidderCode: void 0, ze: void 0 }, m = Md.next()
    ) {
      r = m.value;
      S.bidderCode = r.bidderCode;
      v = r.bids;
      m = r.timeout;
      S.ze = r.src;
      r = r.auctionStart;
      v = t(v);
      var Fc = v.next();
      for (x = {}; !Fc.done; x = { fc: void 0 }, Fc = v.next()) {
        var nc = Fc.value;
        x.fc = nc.bidId;
        var $a = nc.transactionId;
        Fc = nc.adUnitCode;
        var gp = nc.getFloor;
        nc = nc.mediaTypes;
        if (x.fc && q(Fc)) {
          hI(M, b, Fc);
          $a && (null != bf(M, 4) || mf(M, 4, $a), h.has($a) || h.set($a, r));
          null == he(Je(M, 8)) && Number.isFinite(m) && Le(M, 8, ge(m));
          var Nd = la.find(
            (function (Da) {
              return function (Va) {
                return Va.requestId === Da.fc;
              };
            })(x)
          );
          $a = lu(
            M,
            (function (Da) {
              return function () {
                var Va = eu(new du(), Da.bidderCode);
                gI(Da.bidderCode, a, Va);
                switch (Da.ze) {
                  case "client":
                    Le(Va, 7, de(1));
                    break;
                  case "s2s":
                    Le(Va, 7, de(2));
                }
                return Va;
              };
            })(S)()
          );
          iI(M, $a, Fc, d, e, f, gp);
          Nd
            ? (gu($a, 1),
              "number" === typeof Nd.timeToRespond &&
                Number.isFinite(Nd.timeToRespond) &&
                Le($a, 2, je(Math.round(Nd.timeToRespond))),
              (x = fI(Nd, c, nc)),
              fu($a, x))
            : (x = g().get(x.fc)) && !x.oe
            ? (gu($a, 2),
              Number.isFinite(x.latency) &&
                Le($a, 2, je(Math.round(x.latency))))
            : ((x = gu($a, 3)),
              Number.isFinite(m) && Le(x, 2, je(Math.round(m))));
        }
      }
    }
    var ph;
    (null == (ph = a.getConfig) ? 0 : ph.call(a).useBidCache) &&
      eI(M, b, V, c, a);
    return n;
  }
  var ME = OE() ? 500 : 2e3,
    lI = function (a) {
      Q.call(this);
      var b = this,
        c = fC(hC(this.getSettings()));
      c && 0 < c.length && (Cj.reset(), Ej(new ik(c)));
      this.B = new HH();
      this.A = null;
      this.g = a;
      this.F = new Map();
      this.l = this.g.A;
      this.H = new rx(this);
      eo(this, this.H);
      this.U = new cw(window, { timeoutMs: 500 });
      this.V = new ZH(window, { timeoutMs: 500 });
      this.J = new NE();
      OE() && RE(this.J);
      a = new Yv(window, { timeoutMs: 500 });
      this.N = new kF(a, 500);
      eo(this, this.N);
      this.h = null;
      this.G = {};
      0 !== iC.g ? ((this.j = new nG()), eo(this, this.j)) : (this.j = oG());
      NC() &&
        (this.j.init(iG(this.l)),
        (this.D = uG(this.j, this.g.B)),
        co(this, function () {
          var d = b.D;
          b.j.j.delete(d);
          0 !== iC.g && (C(Yr).o[d] = null);
        }));
    };
  u(lI, Q);
  lI.prototype.destroy = function () {
    this.W();
  };
  lI.prototype.getVersion = function () {
    return "h.3.612.0";
  };
  lI.prototype.requestAds = function (a, b) {
    var c = this,
      d = [],
      e = null;
    ew(this.U) &&
      d.push(
        new Promise(function (h) {
          hw(c.U, function (k) {
            e = k;
            h();
          });
        })
      );
    var f = null;
    Ov(this.V.caller) &&
      d.push(
        new Promise(function (h) {
          $H(c.V, function (k) {
            f = k;
            h();
          });
        })
      );
    var g = null;
    d.push(
      mF(this.N).then(function (h) {
        g = h;
      })
    );
    Promise.all(d).then(function () {
      mI(c, a, b, { Ld: e, Od: f, jd: g });
    });
  };
  var mI = function (a, b, c, d) {
    var e = b.adTagUrl;
    e &&
      X.g().report(8, {
        adtagurl: e,
        customPlayback: $G(a.g),
        customClick: null != a.g.l,
      });
    var f = "goog_" + Tg++;
    a.F.set(f, c || null);
    var g = nI({ adTagUrl: e, ne: !1, Ld: d.Ld, Od: d.Od, jd: d.jd });
    a.h = mC(e, g || {});
    FE(a.h, function () {
      oI(a);
    });
    c = Promise.resolve();
    K(ll) &&
      (c = new Promise(function (n) {
        setTimeout(function () {
          n();
        }, 50);
      }));
    var h,
      k =
        null == (h = b.adTagUrl)
          ? void 0
          : h.includes("GOOGLE_INSTREAM_VIDEO_NONCE"),
      m = oC(a.h);
    h = pI(a, m, k);
    d = RE(a.J);
    e = iF.getConfig();
    Promise.all([c, h, d, e]).then(function (n) {
      var q = t(n);
      q.next();
      q.next();
      n = q.next().value;
      q = q.next().value;
      var r = {};
      X.g().report(
        182,
        ((r.aid = !!iC.A), (r.aidf = !!a.A), (r.hsc = !m && k), r)
      );
      qI(a, f, b, g, n, q);
    });
  };
  lI.prototype.getSettings = function () {
    return iC;
  };
  lI.prototype.contentComplete = function () {
    eD(iG(this.l), "adsLoader", "contentComplete");
  };
  lI.prototype.X = function (a) {
    var b = a.messageType;
    switch (b) {
      case "adsLoaded":
        b = a.ra;
        a = a.sessionId;
        b = new Z(
          this.j,
          this.g,
          b.adTagUrl || "",
          b.adCuePoints,
          this.D,
          b.isCustomClickTrackingAllowed,
          iG(this.l, a),
          this.h
        );
        this.dispatchEvent(new UH(b, rI(this, a)));
        break;
      case "error":
        b = a.ra;
        this.dispatchEvent(new fH(new dH(b), rI(this, a.sessionId)));
        a = { error: b.errorCode, vis: Wi(document) };
        X.g().report(7, a);
        break;
      case "cookieUpdate":
        a = a.ra;
        if (null == a) break;
        if (iC.isCookiesEnabled()) {
          b = new jC();
          lf(b, 5, !0);
          var c = a.gfpCookie;
          c && IH(this.B, "__gads", GH(c), b);
          (c = a.gfpCookieV2) && IH(this.B, "__gpi", GH(c), b);
        }
        sI(this, a.encryptedSignalBidderIds || []);
        break;
      case "trackingUrlPinged":
        this.dispatchEvent(new hH(b, null, a.ra));
    }
  };
  var sI = function (a, b) {
      0 !== b.length &&
        (b = GE(
          b.map(function (c) {
            return { qc: c };
          }),
          a.h
        )) &&
        b.forEach(function (c) {
          c.then(function (d) {
            d && oI(a);
          });
        });
    },
    oI = function (a) {
      var b = aE(EE(a.h));
      b &&
        ((a.G.espSignals = b), eD(iG(a.l), "adsLoader", "signalsRefresh", a.G));
    },
    rI = function (a, b) {
      var c = a.F.get(b);
      a.F.delete(b);
      return null != c ? c : null;
    },
    nI = function (a) {
      var b = a.Ld,
        c = a.Od,
        d = a.jd,
        e,
        f,
        g,
        h,
        k,
        m,
        n = {};
      var q = void 0 === q ? w : q;
      return (
        (n.gfcLoaded = Sh(q.top, "googlefcLoaded")),
        (n.isGdprLoader = a.ne),
        (n.addtlConsent =
          null != (e = null == b ? void 0 : b.addtlConsent) ? e : null),
        (n.gdprApplies =
          null != (f = null == b ? void 0 : b.gdprApplies) ? f : null),
        (n.tcString = null != (g = null == b ? void 0 : b.tcString) ? g : null),
        (n.uspString =
          null != (h = null == c ? void 0 : c.uspString) ? h : null),
        (n.gppString =
          null != (k = null == d ? void 0 : d.gppString) ? k : null),
        (n.gppSid = null != (m = null == d ? void 0 : d.sid) ? m : null),
        n
      );
    },
    pI = function (a, b, c) {
      if (b) return (a.A = null), Promise.resolve([]);
      b = [];
      b.push(tI());
      c && b.push(uI(a));
      return Promise.all(b);
    },
    qI = function (a, b, c, d, e, f) {
      d = vI(a, c, d, e);
      b = iG(a.l, b);
      a.H.O(b, "adsLoader", a.X);
      eD(b, "adsLoader", "requestAds", d);
      if (K(al) || OE())
        (a = {}),
          X.g().report(
            155,
            ((a.ws = LE()), (a.blob = null != e ? e : "undef"), a),
            !0
          );
      if (f) {
        var g, h;
        e =
          null != (h = null == (g = Ve(f, qu, 1)) ? void 0 : Me(g, 6, re))
            ? h
            : [];
        var k;
        c = null != (k = c.adTagUrl) ? k : "";
        var m = aC(c);
        k = e.some(function (n) {
          return n === m;
        });
        c = c
          ? XB(c)
            ? "adsense"
            : WB(c)
            ? "dbm"
            : VB(c)
            ? "dcm"
            : ZB(c)
            ? "dv3"
            : YB(c)
            ? "xfp"
            : "thirdparty"
          : "";
        X.g().report(187, { fm: k, rt: c }, !0);
      }
    },
    uI = function (a) {
      var b;
      return Ha(function (c) {
        if (1 == c.g)
          return a.A || ((a.A = new bD()), cD(a.A)), xa(c, a.A.getId(), 2);
        b = c.h;
        iC.A = b.id || "";
        c.g = 0;
      });
    },
    tI = function () {
      return Gb() && (K(pl) || K(ol))
        ? K(ol)
          ? new Promise(function (a) {
              setTimeout(function () {
                a();
              }, 50);
            })
          : wI().then(function (a) {
              var b,
                c = null != (b = a.label) ? b : "";
              iC.I = c;
              iC.G = a.status;
            })
        : Promise.resolve();
    },
    wI = function () {
      if (navigator.cookieDeprecationLabel) {
        var a = navigator.cookieDeprecationLabel
            .getValue()
            .then(function (c) {
              return { label: c, status: 1 };
            })
            .catch(function () {
              return { label: "", status: 2 };
            }),
          b = new Promise(function (c) {
            setTimeout(function () {
              c({ label: "", status: 5 });
            }, 50);
          });
        return Promise.race([b, a]);
      }
      return Promise.resolve({ label: "", status: 3 });
    },
    vI = function (a, b, c, d) {
      var e = {},
        f = ((e.limaExperimentIds = Dj().sort().join(",")), e),
        g = a.getSettings(),
        h = tG(a.j);
      h = void 0 === h ? null : h;
      var k = {};
      null != h && (k.activeViewPushUpdates = h);
      k.activityMonitorMode = g.g;
      k.adsToken = g.A;
      k.autoPlayAdBreaks = g.o;
      k.companionBackfill = g.getCompanionBackfill();
      k.cookiesEnabled = g.isCookiesEnabled();
      k.disableCustomPlaybackForIOS10Plus =
        g.getDisableCustomPlaybackForIOS10Plus();
      k.engagementDetection = !0;
      k.isFunctionalTest = !1;
      k.isVpaidAdapter = g.h;
      k["1pJar"] = "";
      k.numRedirects = g.getNumRedirects();
      k.pageCorrelator = g.K;
      k.persistentStateCorrelator = Si();
      k.playerType = g.getPlayerType();
      k.playerVersion = g.getPlayerVersion();
      k.ppid = g.getPpid();
      k.privacyControls = "";
      k.reportMediaRequests = !1;
      k.sessionId = g.sessionId;
      k.streamCorrelator = g.D;
      k.testingConfig = hC(g).g;
      k.urlSignals = g.V;
      k.vpaidMode = g.l;
      k.featureFlags = g.getFeatureFlags();
      k.cookieDeprecationLabel = g.I;
      k.cookieDeprecationLabelStatus = g.G;
      var m = b.adTagUrl,
        n = {};
      n.contentMediaUrl = a.g.K;
      n.customClickTrackingProvided = null != a.g.l;
      n.isAmp = RC();
      a: {
        try {
          var q = window.top.location.href;
        } catch (Xj) {
          var r = 2;
          break a;
        }
        r = null == q ? 2 : q == window.document.location.href ? 0 : 1;
      }
      n.iframeState = r;
      n.imaHostingDomain = window.document.domain;
      n.imaHostingPageUrl = window.document.URL;
      n.topAccessiblePageUrl = QC();
      n.referrer = window.document.referrer;
      n.domLoadTime = a.l.H;
      n.sdkImplLoadTime = a.l.J;
      n.supportsResizing = !$G(a.g);
      var v = E().location.ancestorOrigins;
      n.topOrigin = v
        ? 0 < v.length && 200 > v[v.length - 1].length
          ? v[v.length - 1]
          : ""
        : null;
      n.osdId = a.D;
      n.usesCustomVideoPlayback = $G(a.g);
      n.usesProxyMediaElement = aH(a.g);
      n.usesInlinePlayback = a.g.I;
      var x = a.g.Qc,
        H = [],
        S = "",
        la = "";
      if (null != x) {
        var V = x,
          M = !0;
        M = void 0 === M ? !1 : M;
        for (var Md = [], Fc = 0; V && 25 > Fc; ++Fc) {
          var nc = void 0,
            $a = "";
          (void 0 !== M && M) ||
            ($a = ($a = 9 !== V.nodeType && V.id) ? "/" + $a : "");
          a: {
            if (V && V.nodeName && V.parentElement)
              for (
                var gp = V.nodeName.toString().toLowerCase(),
                  Nd = V.parentElement.childNodes,
                  ph = 0,
                  Da = 0;
                Da < Nd.length;
                ++Da
              ) {
                var Va = Nd[Da];
                if (
                  Va.nodeName &&
                  Va.nodeName.toString().toLowerCase() === gp
                ) {
                  if (V === Va) {
                    nc = "." + ph;
                    break a;
                  }
                  ++ph;
                }
              }
            nc = "";
          }
          Md.push(
            (V.nodeName && V.nodeName.toString().toLowerCase()) + $a + nc
          );
          V = V.parentElement;
        }
        S = Md.join();
        if (x) {
          var Sf = x.ownerDocument,
            od = (Sf && (Sf.defaultView || Sf.parentWindow)) || null,
            Qx = [];
          if (od)
            try {
              for (
                var qh = od.parent, Rx = 0;
                qh && qh !== od && 25 > Rx;
                ++Rx
              ) {
                for (var Sx = qh.frames, Yj = 0; Yj < Sx.length; ++Yj)
                  if (od === Sx[Yj]) {
                    Qx.push(Yj);
                    break;
                  }
                od = qh;
                qh = od.parent;
              }
            } catch (Xj) {}
          la = Qx.join();
        } else la = "";
      }
      H.push(S, la);
      if (null != m) {
        for (var hp = 0; hp < Iv.length - 1; ++hp) H.push(yh(m, Iv[hp]) || "");
        var Tx = yh(m, "videoad_start_delay"),
          Ux = "";
        if (Tx) {
          var Vx = parseInt(Tx, 10);
          Ux = 0 > Vx ? "postroll" : 0 == Vx ? "preroll" : "midroll";
        }
        H.push(Ux);
      } else for (var Wx = 0; Wx < Iv.length; ++Wx) H.push("");
      var JI = ((n.videoAdKey = Ph(H.join(":")).toString()), n);
      var rh = {},
        oc =
          ((rh.consentSettings = c),
          (rh.imalibExperiments = f),
          (rh.settings = k),
          (rh.videoEnvironment = JI),
          rh),
        Xa = {};
      Xa.adsResponse = b.adsResponse;
      Xa.videoPlayActivation = b.h;
      Xa.videoPlayMuted = b.j;
      Xa.videoContinuousPlay = b.g;
      Xa.adTagUrl = b.adTagUrl;
      Xa.contentDuration = b.contentDuration;
      Xa.contentKeywords = b.contentKeywords;
      Xa.contentTitle = b.contentTitle;
      Xa.linearAdSlotWidth = b.linearAdSlotWidth;
      Xa.linearAdSlotHeight = b.linearAdSlotHeight;
      Xa.nonLinearAdSlotWidth = b.nonLinearAdSlotWidth;
      Xa.nonLinearAdSlotHeight = b.nonLinearAdSlotHeight;
      Xa.forceNonLinearFullSlot = b.forceNonLinearFullSlot;
      Xa.liveStreamPrefetchSeconds = b.liveStreamPrefetchSeconds;
      Xa.vastLoadTimeout = b.vastLoadTimeout;
      Xa.omidAccessModeRules = b.omidAccessModeRules;
      Xa.pageUrl = b.pageUrl;
      Object.assign(oc, Xa);
      if (a.h && iC.isCookiesEnabled()) {
        var pc = pC(a.h),
          De = a.B;
        if (0 === De.h) {
          if (pc && Uj("__gads", pc, De.g)) var Xx = !0;
          else {
            var Yx = De.g;
            df(pc, 5) &&
              Tj(Yx) &&
              new Rj(Yx.document).set("GoogleAdServingTest", "Good", void 0);
            var Zx = "Good" === Uj("GoogleAdServingTest", pc, De.g);
            if (Zx) {
              var $x = De.g;
              df(pc, 5) &&
                Tj($x) &&
                new Rj($x.document).remove(
                  "GoogleAdServingTest",
                  void 0,
                  void 0
                );
            }
            Xx = Zx;
          }
          De.h = Xx ? 2 : 1;
        }
        oc.isBrowserCookieEnabled = 2 === De.h;
        var ay = pc ? Uj("__gads", pc, a.B.g) : null;
        null !== ay && (oc.gfpCookieValue = ay);
        var by = pc ? Uj("__gpi", pc, a.B.g) : null;
        null !== by && (oc.gfpCookieV2Id = by);
        var cy = pc ? Uj("__gpi_opt_out", pc, a.B.g) : null;
        null !== cy && (oc.gfpCookieV2OptOut = cy);
      }
      var ip = aE(EE(a.h));
      ip && ((a.G.espSignals = ip), (oc.espSignals = ip));
      if (K(hl) || K(il) || K(jl) || K(kl))
        try {
          var na = new VH(),
            sh = null;
          b.pageUrl
            ? (sh = b.pageUrl)
            : Ow(b.adTagUrl) &&
              (sh = new URL(b.adTagUrl).searchParams.get("url"));
          sh && Ow(sh) && (na.url = sh);
          na.videoHeight = b.linearAdSlotHeight;
          na.videoWidth = b.linearAdSlotWidth;
          var KI = Map,
            dy = [],
            LI = dy.concat,
            MI = Map,
            ey = [],
            NI = ey.concat,
            Od = new Map();
          Od.set("eid", Dj().sort().join(","));
          Od.set("aselc", "3");
          Od.set("correlator", "");
          Od.set("pal_v", "");
          Od.set("ref", new Yh().j || window.document.referrer);
          Od.set("useragent", vb());
          Od.set("sdkv", "");
          var OI = ha(Od),
            Cb = new Map();
          null != na.adWillAutoPlay &&
            Cb.set("vpa", na.adWillAutoPlay ? "auto" : "click");
          null != na.adWillPlayMuted &&
            Cb.set("vpmute", na.adWillPlayMuted ? "1" : "0");
          null != na.continuousPlayback &&
            Cb.set("vconp", na.continuousPlayback ? "2" : "1");
          Cb.set("wta", na.iconsSupported ? "1" : "0");
          Cb.set("pss", na.skippablesSupported ? "1" : "0");
          500 >= na.descriptionUrl.length &&
            Cb.set("video_url_to_fetch", na.descriptionUrl);
          200 >= na.ppid.length && Cb.set("ppid", na.ppid);
          200 >= na.playerType.length && Cb.set("mpt", na.playerType);
          200 >= na.playerVersion.length && Cb.set("mpv", na.playerVersion);
          Cb.set("sid", na.sessionId);
          var Zj = na.videoHeight,
            ak = na.videoWidth;
          if (-1 !== Zj || -1 !== ak) {
            var PI = 0 <= Zj ? Zj.toString() : "0",
              QI = 0 <= ak ? ak.toString() : "0",
              fy = "l";
            Zj > ak && (fy = "p");
            Cb.set("vp_h", PI);
            Cb.set("vp_w", QI);
            Cb.set("u_so", fy);
          }
          var RI = ha(Cb),
            Gc = new Map(),
            Db = {};
          Db.u_tz = -new Date().getTimezoneOffset();
          var jp = void 0 === jp ? O : jp;
          try {
            var gy = jp.history.length;
          } catch (Xj) {
            gy = 0;
          }
          Db.u_his = gy;
          var hy;
          Db.u_h = null == (hy = O.screen) ? void 0 : hy.height;
          var iy;
          Db.u_w = null == (iy = O.screen) ? void 0 : iy.width;
          var jy;
          Db.u_ah = null == (jy = O.screen) ? void 0 : jy.availHeight;
          var ky;
          Db.u_aw = null == (ky = O.screen) ? void 0 : ky.availWidth;
          var ly;
          Db.u_cd = null == (ly = O.screen) ? void 0 : ly.colorDepth;
          Gc.set("u_ah", eF(Db.u_ah));
          Gc.set("u_aw", eF(Db.u_aw));
          Gc.set("u_cd", eF(Db.u_cd));
          Gc.set("u_his", eF(Db.u_his));
          Gc.set("nhd", eF(Math.max(Xh().length, 0)));
          Gc.set("u_h", eF(Db.u_h));
          Gc.set("u_w", eF(Db.u_w));
          Gc.set("dt", eF(Iu));
          Gc.set("u_tz", eF(Db.u_tz));
          var SI = ha(new MI(NI.call(ey, OI, RI, ha(Gc)))),
            TI = Map,
            my = [],
            UI = my.concat,
            ny = new Map();
          ny.set("sodar_correlator", "");
          var VI = ha(ny),
            Pd = new Map(),
            oy = !1,
            kp = na.omidVersion;
          0 < kp.length && 200 >= kp.length && Pd.set("omid_v", kp);
          var lp = na.omidPartnerName,
            mp = na.omidPartnerVersion;
          0 < lp.length &&
            0 < mp.length &&
            200 >= lp.length &&
            200 >= mp.length &&
            (Pd.set("omid_p", lp + "/" + mp), (oy = !0));
          var np = na.supportedApiFrameworks;
          !np.includes(7) && oy && np.push(7);
          Pd.set("sdk_apis", np.toString());
          var WI = QC(),
            py = bi();
          Pd.set("top", WI);
          na.url
            ? (Pd.set("url", na.url), Pd.set("loc", py))
            : Pd.set("url", py);
          for (
            var bk = new KI(
                LI.call(dy, SI, ha(new TI(UI.call(my, VI, ha(Pd)))))
              ),
              qy = t(bk.keys()),
              op = qy.next();
            !op.done;
            op = qy.next()
          ) {
            var ry = op.value;
            nb(bk.get(ry)) && bk.delete(ry);
          }
          var pp = bk;
        } catch (Xj) {
          var sy;
          X.g().report(181, {
            message: null == (sy = Xj) ? void 0 : sy.message,
          });
          pp = null;
        }
      else pp = null;
      var ty = pp;
      ty && (oc.palSignals = Object.fromEntries(ty));
      d && (oc.gmaSignals = d);
      oc.isEapLoader = !1;
      if (K(tl)) {
        var uy = aI();
        if (uy) {
          var vy = new URL(b.adTagUrl).searchParams.get("iu");
          if (vy) {
            var wy = kI(uy, { adUnitCode: vy });
            oc.clientBidsProto = wy ? Oc(wy.g(), 3) : void 0;
          }
        }
      }
      return oc;
    };
  lI.prototype.contentComplete = lI.prototype.contentComplete;
  lI.prototype.getSettings = lI.prototype.getSettings;
  lI.prototype.requestAds = lI.prototype.requestAds;
  lI.prototype.getVersion = lI.prototype.getVersion;
  lI.prototype.destroy = lI.prototype.destroy;
  var xI = function () {
    this.j = this.h = "unknown";
    this.g = "0";
    this.adsResponse = null;
    this.adTagUrl = "";
    this.contentTitle = this.contentKeywords = this.contentDuration = null;
    this.forceNonLinearFullSlot = !1;
    this.nonLinearAdSlotWidth =
      this.nonLinearAdSlotHeight =
      this.liveStreamPrefetchSeconds =
      this.linearAdSlotWidth =
      this.linearAdSlotHeight =
        0;
    this.omidAccessModeRules = {};
    this.pageUrl = null;
    this.vastLoadTimeout = 5e3;
  };
  xI.prototype.setAdWillAutoPlay = function (a) {
    this.h = a ? "auto" : "click";
  };
  xI.prototype.setAdWillPlayMuted = function (a) {
    this.j = a ? "muted" : "unmuted";
  };
  xI.prototype.setContinuousPlayback = function (a) {
    this.g = a ? "2" : "1";
  };
  xI.prototype.setContinuousPlayback = xI.prototype.setContinuousPlayback;
  xI.prototype.setAdWillPlayMuted = xI.prototype.setAdWillPlayMuted;
  xI.prototype.setAdWillAutoPlay = xI.prototype.setAdWillAutoPlay;
  function yI(a, b) {
    return a && (a[b] || (a[b] = {}));
  }
  function zI(a, b) {
    var c;
    if (
      (c =
        void 0 === c
          ? "undefined" === typeof omidExports
            ? null
            : omidExports
          : c)
    )
      (a = a.split(".")),
        (a.slice(0, a.length - 1).reduce(yI, c)[a[a.length - 1]] = b);
  }
  var AI = new Map([
    [2, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.moatads\.com\/.*$/]],
    [
      3,
      [
        /^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.doubleverify\.com\/.*$/,
        /^(https?:\/\/|\/\/)?c\.[\w\-]+\.com\/vfw\/dv\/.*$/,
        /^(https?:\/\/|\/\/)?(www\.)?[\w]+\.tv\/r\/s\/d\/.*$/,
      ],
    ],
    [4, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.adsafeprotected\.com\/.*$/]],
    [
      5,
      [
        /^https?:\/\/(q|cdn)\.adrta\.com\/s\/.*\/(aa|aanf)\.js.*$/,
        /^https:\/\/cdn\.rta247\.com\/s\/.*\/(aa|aanf)\.js.*$/,
      ],
    ],
    [6, []],
    [
      7,
      [
        /^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.voicefive\.com\/.*$/,
        /^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.measuread\.com\/.*$/,
        /^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.scorecardresearch\.com\/.*$/,
      ],
    ],
    [
      8,
      [/^(https?:\/\/|\/\/)?s418\.mxcdn\.net\/bb-serve\/omid-meetrics.*\.js$/],
    ],
    [
      9,
      [
        /^(https?:\/\/|\/\/)?pagead2\.googlesyndication\.com\/.*$/,
        /^(https?:\/\/|\/\/)?www\.googletagservices\.com\/.*$/,
      ],
    ],
  ]);
  zI("OmidSessionClient.verificationVendorIdForScriptUrl", function (a) {
    for (var b = t(AI.keys()), c = b.next(); !c.done; c = b.next()) {
      c = c.value;
      for (var d = t(AI.get(c)), e = d.next(); !e.done; e = d.next())
        if (e.value.test(a)) return c;
    }
    return 1;
  });
  zI("OmidSessionClient.VerificationVendorId", {
    OTHER: 1,
    MOAT: 2,
    DOUBLEVERIFY: 3,
    INTEGRAL_AD_SCIENCE: 4,
    PIXELATE: 5,
    NIELSEN: 6,
    COMSCORE: 7,
    MEETRICS: 8,
    GOOGLE: 9,
  });
  y("google.ima.AdCuePoints.POSTROLL", -1, window);
  y("google.ima.AdCuePoints.PREROLL", 0, window);
  y("google.ima.AdDisplayContainer", bH, window);
  y("google.ima.AdError.ErrorCode", T, window);
  y("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED", -1, window);
  y("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED", -1, window);
  y("google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR", -1, window);
  y("google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE", -1, window);
  y("google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED", -1, window);
  y("google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE", -1, window);
  y("google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED", -1, window);
  y("google.ima.AdError.Type", cH, window);
  y("google.ima.AdErrorEvent.Type", eH, window);
  y("google.ima.AdEvent.Type", gH, window);
  y("google.ima.AdsLoader", lI, window);
  y("google.ima.AdsManagerLoadedEvent.Type", TH, window);
  y("google.ima.CompanionAdSelectionSettings", jD, window);
  y("google.ima.CompanionAdSelectionSettings.CreativeType", gD);
  y("google.ima.CompanionAdSelectionSettings.ResourceType", hD);
  y("google.ima.CompanionAdSelectionSettings.SizeCriteria", iD);
  y(
    "google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED",
    "deprecated-event",
    window
  );
  y("ima.ImaSdkSettings", U, window);
  y("google.ima.settings", iC, window);
  y("google.ima.ImaSdkSettings.CompanionBackfillMode", {
    ALWAYS: "always",
    ON_MASTER_AD: "on_master_ad",
  });
  y("google.ima.ImaSdkSettings.VpaidMode", {
    DISABLED: 0,
    ENABLED: 1,
    INSECURE: 2,
    0: "DISABLED",
    1: "ENABLED",
    2: "INSECURE",
  });
  y("google.ima.AdsRenderingSettings", HF, window);
  y("google.ima.AdsRenderingSettings.AUTO_SCALE", -1, window);
  y("google.ima.AdsRequest", xI, window);
  y("google.ima.VERSION", "3.612.0");
  y("google.ima.OmidAccessMode", {
    LIMITED: "limited",
    DOMAIN: "domain",
    FULL: "full",
  });
  y("google.ima.OmidVerificationVendor", {
    COMSCORE: 7,
    DOUBLEVERIFY: 3,
    GOOGLE: 9,
    INTEGRAL_AD_SCIENCE: 4,
    MEETRICS: 8,
    MOAT: 2,
    NIELSEN: 6,
    PIXELATE: 5,
    OTHER: 1,
    7: "COMSCORE",
    3: "DOUBLEVERIFY",
    9: "GOOGLE",
    4: "INTEGRAL_AD_SCIENCE",
    8: "MEETRICS",
    2: "MOAT",
    6: "NIELSEN",
    5: "PIXELATE",
    1: "OTHER",
  });
  y("google.ima.UiElements", {
    AD_ATTRIBUTION: "adAttribution",
    COUNTDOWN: "countdown",
  });
  y("google.ima.ViewMode", { NORMAL: "normal", FULLSCREEN: "fullscreen" });
  var BI = function (a, b, c) {
      this.h = c;
      0 === b.length && (b = [[]]);
      this.g = b.map(function (d) {
        d = a.concat(d);
        for (var e = [], f = 0, g = 0; f < d.length; ) {
          var h = d[f++];
          if (128 > h) e[g++] = String.fromCharCode(h);
          else if (191 < h && 224 > h) {
            var k = d[f++];
            e[g++] = String.fromCharCode(((h & 31) << 6) | (k & 63));
          } else if (239 < h && 365 > h) {
            k = d[f++];
            var m = d[f++],
              n = d[f++];
            h =
              (((h & 7) << 18) |
                ((k & 63) << 12) |
                ((m & 63) << 6) |
                (n & 63)) -
              65536;
            e[g++] = String.fromCharCode(55296 + (h >> 10));
            e[g++] = String.fromCharCode(56320 + (h & 1023));
          } else
            (k = d[f++]),
              (m = d[f++]),
              (e[g++] = String.fromCharCode(
                ((h & 15) << 12) | ((k & 63) << 6) | (m & 63)
              ));
        }
        return new RegExp(e.join(""));
      });
    },
    CI = function (a, b) {
      return b
        ? a.g.some(function (c) {
            c = b.match(c);
            return null == c
              ? !1
              : !a.h ||
                (1 <= c.length && "3.612.0" === c[1]) ||
                (2 <= c.length && "3.612.0" === c[2])
              ? !0
              : !1;
          })
        : !1;
    },
    DI = [
      94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 105, 109,
      97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105,
      115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 40, 115, 100, 107, 108, 111,
      97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47,
    ],
    EI = [
      94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 115, 48,
      92, 46, 50, 109, 100, 110, 92, 46, 110, 101, 116, 47, 105, 110, 115, 116,
      114, 101, 97, 109, 47, 104, 116, 109, 108, 53, 47,
    ],
    FI = [
      94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 105, 109,
      97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105,
      115, 92, 46, 99, 111, 109, 47, 112, 97, 108, 47, 115, 100, 107, 108, 111,
      97, 100, 101, 114, 47,
    ],
    GI = [
      [105, 109, 97, 51, 92, 46, 106, 115],
      [105, 109, 97, 51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115],
      [105, 109, 97, 51, 95, 101, 97, 112, 46, 106, 115],
    ],
    HI = [
      [
        98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48,
        45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93,
        41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116,
        109, 108,
      ],
      [
        98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48,
        45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91,
        97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44,
        50, 125, 92, 46, 104, 116, 109, 108,
      ],
      [
        98, 114, 105, 100, 103, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57,
        93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104,
        116, 109, 108,
      ],
    ],
    II = [
      [111, 117, 116, 115, 116, 114, 101, 97, 109, 92, 46, 106, 115],
      [
        111, 117, 116, 115, 116, 114, 101, 97, 109, 95, 100, 101, 98, 117, 103,
        92, 46, 106, 115,
      ],
    ],
    XI = new BI(DI, GI, !1);
  new BI(DI, HI, !0);
  var YI = new BI(EI, GI, !1);
  new BI(EI, HI, !0);
  var ZI = new BI(
      [
        94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 105,
        109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112,
        105, 115, 92, 46, 99, 111, 109, 47, 112, 114, 101, 114, 101, 108, 101,
        97, 115, 101, 47, 106, 115, 47, 91, 48, 45, 57, 93, 43, 46, 91, 48, 45,
        57, 46, 93, 43, 47,
      ],
      GI,
      !1
    ),
    $I = new BI(
      [
        94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 40,
        112, 97, 103, 101, 97, 100, 50, 124, 116, 112, 99, 41, 92, 46, 103, 111,
        111, 103, 108, 101, 115, 121, 110, 100, 105, 99, 97, 116, 105, 111, 110,
        92, 46, 99, 111, 109, 47, 112, 97, 103, 101, 97, 100, 47, 40, 103, 97,
        100, 103, 101, 116, 115, 124, 106, 115, 41, 47,
      ],
      [],
      !1
    );
  new BI(
    DI,
    [
      [
        100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93,
        43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45,
        122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125,
        92, 46, 104, 116, 109, 108,
      ],
      [
        100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93,
        43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117,
        103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51,
        125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108,
      ],
      [
        100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 95, 40, 91, 97, 45,
        122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125,
        92, 46, 104, 116, 109, 108,
      ],
    ],
    !0
  );
  var aJ = new BI(DI, II, !1),
    bJ = new BI(DI, II, !1);
  new BI(FI, [[112, 97, 108, 46, 106, 115]], !1);
  new BI(FI, [[99, 97, 115, 116, 95, 112, 97, 108, 46, 106, 115]], !1);
  new BI(FI, [[99, 116, 118, 95, 112, 97, 108, 46, 106, 115]], !1);
  function cJ(a, b) {
    for (var c = {}, d = 0; d < b.length; c = { Fd: void 0 }, d++)
      if (
        ((c.Fd = b[d]),
        a.some(
          (function (e) {
            return function (f) {
              return CI(f, e.Fd.src);
            };
          })(c)
        ))
      )
        return c.Fd;
    return null;
  }
  if (
    !(function (a) {
      if (
        a.some(function (c) {
          return CI(c, E().location.href);
        })
      )
        return !0;
      var b = cJ(
        a,
        document.querySelectorAll && document.querySelector
          ? document.querySelectorAll("SCRIPT")
          : document.getElementsByTagName("SCRIPT")
      );
      null == b &&
        document.querySelectorAll &&
        (b = cJ(a, document.querySelectorAll("script")));
      return null != b;
    })([XI, ZI, YI, $I, aJ, bJ])
  )
    throw Error(
      "IMA SDK is either not loaded from a google domain or is not a supported version."
    );
  hF(iF);
})();
