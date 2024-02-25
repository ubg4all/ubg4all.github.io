/*! @amzn/apswebapstaglibrary - web-client-bundle - v23.1211.1645 - 2023-12-11 16:45:49 */
!(function () {
  "use strict";
  var t = function (e, n) {
    return (
      (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        }),
      t(e, n)
    );
  };
  var e,
    n,
    o,
    r,
    i = function () {
      return (
        (i =
          Object.assign ||
          function (t) {
            for (var e, n = 1, o = arguments.length; n < o; n++)
              for (var r in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t;
          }),
        i.apply(this, arguments)
      );
    };
  function a(t, e, n, o) {
    var r,
      i = arguments.length,
      a =
        i < 3
          ? e
          : null === o
          ? (o = Object.getOwnPropertyDescriptor(e, n))
          : o;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      a = Reflect.decorate(t, e, n, o);
    else
      for (var u = t.length - 1; u >= 0; u--)
        (r = t[u]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
    return i > 3 && a && Object.defineProperty(e, n, a), a;
  }
  function u(t, e, n, o) {
    return new (n || (n = Promise))(function (r, i) {
      function a(t) {
        try {
          c(o.next(t));
        } catch (t) {
          i(t);
        }
      }
      function u(t) {
        try {
          c(o.throw(t));
        } catch (t) {
          i(t);
        }
      }
      function c(t) {
        var e;
        t.done
          ? r(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                })).then(a, u);
      }
      c((o = o.apply(t, e || [])).next());
    });
  }
  function c(t, e) {
    var n,
      o,
      r,
      i,
      a = {
        label: 0,
        sent: function () {
          if (1 & r[0]) throw r[1];
          return r[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: u(0), throw: u(1), return: u(2) }),
      "function" == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function u(u) {
      return function (c) {
        return (function (u) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; i && ((i = 0), u[0] && (a = 0)), a; )
            try {
              if (
                ((n = 1),
                o &&
                  (r =
                    2 & u[0]
                      ? o.return
                      : u[0]
                      ? o.throw || ((r = o.return) && r.call(o), 0)
                      : o.next) &&
                  !(r = r.call(o, u[1])).done)
              )
                return r;
              switch (((o = 0), r && (u = [2 & u[0], r.value]), u[0])) {
                case 0:
                case 1:
                  r = u;
                  break;
                case 4:
                  return a.label++, { value: u[1], done: !1 };
                case 5:
                  a.label++, (o = u[1]), (u = [0]);
                  continue;
                case 7:
                  (u = a.ops.pop()), a.trys.pop();
                  continue;
                default:
                  if (
                    !((r = a.trys),
                    (r = r.length > 0 && r[r.length - 1]) ||
                      (6 !== u[0] && 2 !== u[0]))
                  ) {
                    a = 0;
                    continue;
                  }
                  if (3 === u[0] && (!r || (u[1] > r[0] && u[1] < r[3]))) {
                    a.label = u[1];
                    break;
                  }
                  if (6 === u[0] && a.label < r[1]) {
                    (a.label = r[1]), (r = u);
                    break;
                  }
                  if (r && a.label < r[2]) {
                    (a.label = r[2]), a.ops.push(u);
                    break;
                  }
                  r[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }
              u = e.call(t, a);
            } catch (t) {
              (u = [6, t]), (o = 0);
            } finally {
              n = r = 0;
            }
          if (5 & u[0]) throw u[1];
          return { value: u[0] ? u[1] : void 0, done: !0 };
        })([u, c]);
      };
    }
  }
  function s(t) {
    var e = "function" == typeof Symbol && Symbol.iterator,
      n = e && t[e],
      o = 0;
    if (n) return n.call(t);
    if (t && "number" == typeof t.length)
      return {
        next: function () {
          return (
            t && o >= t.length && (t = void 0), { value: t && t[o++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? "Object is not iterable." : "Symbol.iterator is not defined."
    );
  }
  function l(t, e) {
    var n = "function" == typeof Symbol && t[Symbol.iterator];
    if (!n) return t;
    var o,
      r,
      i = n.call(t),
      a = [];
    try {
      for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
        a.push(o.value);
    } catch (t) {
      r = { error: t };
    } finally {
      try {
        o && !o.done && (n = i.return) && n.call(i);
      } finally {
        if (r) throw r.error;
      }
    }
    return a;
  }
  function d(t, e, n) {
    if (n || 2 === arguments.length)
      for (var o, r = 0, i = e.length; r < i; r++)
        (!o && r in e) ||
          (o || (o = Array.prototype.slice.call(e, 0, r)), (o[r] = e[r]));
    return t.concat(o || Array.prototype.slice.call(e));
  }
  !(function (t) {
    (t.push = "push"),
      (t.listenerSuccess = "listenerSuccess"),
      (t.direct = "direct");
  })(e || (e = {})),
    (function (t) {
      (t.internal = "internal"), (t.apstag = "apstag"), (t.webpage = "webpage");
    })(n || (n = {})),
    (function (t) {
      (t.completed = "completed"),
        (t.waiting = "waiting"),
        (t.cancelled = "cancelled");
    })(o || (o = {})),
    (function (t) {
      (t.started = "started"),
        (t.error = "error"),
        (t.unknown = "unknown"),
        (t.deactivated = "deactivated");
    })(r || (r = {}));
  var v = i(i({}, o), r),
    p = { key: "_config/requestViewer/countryCode", default: "unknown" },
    f = new Map([
      [
        "_config/config/didLoad",
        function (t) {
          var e = t.account;
          return (
            t.customEvent,
            u(void 0, void 0, void 0, function () {
              return c(this, function (t) {
                return e.write("config/loaded", !0), [2, o.completed];
              });
            })
          );
        },
      ],
      [
        "_config/requestViewerCountry/define",
        function (t) {
          var e = t.account,
            n = t.customEvent;
          return u(void 0, void 0, void 0, function () {
            var t, r;
            return c(this, function (i) {
              if (
                void 0 ===
                (null === (r = n.detail) || void 0 === r ? void 0 : r.code)
              )
                throw new Error("Missing country code");
              if (
                "string" != typeof (t = n.detail.code) ||
                0 === t.trim().length
              )
                throw new Error('Invalid country code: "'.concat(t, '"'));
              return (
                e.update(p, function () {
                  return t;
                }),
                [2, o.completed]
              );
            });
          });
        },
      ],
    ]),
    g = new Map([
      [
        "apstag/configuration/fetch",
        function (t) {
          var e = t.account;
          return (
            t.customEvent,
            u(void 0, void 0, void 0, function () {
              var t;
              return c(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      (t =
                        e.globalContext.document.createElement(
                          "script"
                        )).setAttribute(
                        "src",
                        ""
                          .concat(
                            ""
                          )
                          .concat(e.id)
                      ),
                      t.setAttribute("type", "text/javascript"),
                      t.setAttribute("async", "async"),
                      e.globalContext.document.head.appendChild(t),
                      [
                        4,
                        new Promise(function (e, n) {
                          t.addEventListener("load", function () {
                            e();
                          }),
                            t.addEventListener("error", function (t) {
                              n(t);
                            });
                        }),
                      ]
                    );
                  case 1:
                    return n.sent(), [2, o.completed];
                }
              });
            })
          );
        },
      ],
    ]),
    h = "consent/GPPData",
    m = "consent/isGPPListenerRegistered",
    y = { key: "consent/isTCFAPIListenerRegistered", default: !1 },
    w = { key: "consent/TCData", default: void 0 },
    b = {
      consent_gppapi_attemptSync: "consent/gppapi/attemptSync",
      consent_gppapi_didChange: "consent/gppapi/didChange",
      consent_gppapi_syncData: "consent/gppapi/syncData",
      consent_tcfapi_attemptSync: "consent/tcfapi/attemptSync",
      consent_tcfapi_didChange: "consent/tcfapi/didChange",
    },
    _ = new Map([
      [
        b.consent_gppapi_attemptSync,
        function (t) {
          var e = t.account;
          return u(void 0, void 0, void 0, function () {
            var t;
            return c(this, function (n) {
              switch (n.label) {
                case 0:
                  return void 0 === e.globalContext.__gpp || !0 === e.read(m)
                    ? [2, o.cancelled]
                    : [4, e.record(b.consent_gppapi_syncData)];
                case 1:
                  return (
                    n.sent(),
                    (t = e.globalContext.__gpp(
                      "addEventListener",
                      function (t) {
                        "error" !== (null == t ? void 0 : t.eventName) &&
                          e.record(b.consent_gppapi_didChange, {
                            eventListener: t,
                          });
                      }
                    )),
                    e.write(
                      m,
                      "listenerRegistered" ===
                        (null == t ? void 0 : t.eventName) &&
                        !0 === (null == t ? void 0 : t.data)
                    ),
                    [2, o.completed]
                  );
              }
            });
          });
        },
      ],
      [
        b.consent_gppapi_didChange,
        function (t) {
          var e = t.account;
          return (
            t.customEvent,
            u(void 0, void 0, void 0, function () {
              return c(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, e.record(b.consent_gppapi_syncData)];
                  case 1:
                    return t.sent(), [2, o.completed];
                }
              });
            })
          );
        },
      ],
      [
        b.consent_gppapi_syncData,
        function (t) {
          var e = t.account,
            n = t.customEvent;
          return u(void 0, void 0, void 0, function () {
            var t, r, a, u, s, d;
            return c(this, function (c) {
              return (
                (u = l(
                  (function (t) {
                    var e, n;
                    try {
                      var o = t.globalContext.__gpp("getGPPData");
                      e = i(i({}, o), o.pingData);
                    } catch (t) {
                      n = "E:getGPPData: ".concat(t);
                    }
                    return [e, n];
                  })(e),
                  2
                )),
                (t = u[0]),
                (r = u[1]),
                "object" != typeof t &&
                  ((s = l(
                    (function (t) {
                      var e, n, o;
                      try {
                        var r = t.globalContext.__gpp("ping", function (t, e) {
                          e && "object" == typeof t && (n = t);
                        });
                        void 0 === n &&
                          (null !== (e = null == r ? void 0 : r.gppString) &&
                          void 0 !== e
                            ? e
                            : ""
                          ).length > 0 &&
                          (n = r);
                      } catch (t) {
                        o = "E:ping: ".concat(t);
                      }
                      return [n, o];
                    })(e),
                    2
                  )),
                  (t = s[0]),
                  (a = s[1])),
                (n.analytics = {
                  gpp: {
                    gppLength:
                      "string" == typeof (null == t ? void 0 : t.gppString)
                        ? t.gppString.length
                        : void 0,
                    isGPPTilde: (null !==
                      (d = null == t ? void 0 : t.gppString) && void 0 !== d
                      ? d
                      : ""
                    ).includes("~"),
                    error10: r,
                    error: a,
                    gppVersion: null == t ? void 0 : t.gppVersion,
                    cmpId: null == t ? void 0 : t.cmpId,
                  },
                }),
                e.write(h, t),
                [2, o.completed]
              );
            });
          });
        },
      ],
      [
        b.consent_tcfapi_attemptSync,
        function (t) {
          var e = t.account;
          return u(void 0, void 0, void 0, function () {
            var t;
            return c(this, function (n) {
              return (
                (t = e.use(y)),
                void 0 === e.globalContext.__tcfapi || t
                  ? [2, o.cancelled]
                  : (e.globalContext.__tcfapi(
                      "addEventListener",
                      2,
                      function (t, n) {
                        e.record(b.consent_tcfapi_didChange, {
                          tcData: t,
                          success: n,
                        });
                      }
                    ),
                    [2, o.completed])
              );
            });
          });
        },
      ],
      [
        b.consent_tcfapi_didChange,
        function (t) {
          var e = t.account,
            n = t.customEvent;
          return u(void 0, void 0, void 0, function () {
            var t, r, i, a;
            return c(this, function (u) {
              return (
                (t =
                  null === (i = n.detail) || void 0 === i ? void 0 : i.success),
                e.update(y, function (e) {
                  return e || !0 === t;
                }),
                (r =
                  null === (a = n.detail) || void 0 === a ? void 0 : a.tcData),
                e.update(w, function (e) {
                  return void 0 !== r || !0 === t ? r : e;
                }),
                [2, o.completed]
              );
            });
          });
        },
      ],
    ]),
    E = "debugSession/end",
    S = "prepend/events",
    C = "populator/ran",
    x = "deviceSignal/sua",
    P = "23.1211.1645",
    I = (function () {
      function t() {
        (this._batchSize = 300),
          (this._serviceUrl =
            ""),
          (this._publicSourceIdentifier =
            "79db72eb0b5c7255afa54a253df24fb4a5ac916bf40b51c730df8850aa5665ca"),
          (this._queueLimit = 5e3),
          (this._sampleRates = new Map([
            ["error", 0],
            ["feat", 0],
          ])),
          (this._recordQueues = new Map([
            ["error", []],
            ["feat", []],
          ])),
          this.clearAndUpdateEventProcessingInterval(5e3);
      }
      return (
        (t.prototype.logEvent = function (t) {
          var e,
            n = t.eventCategory,
            o = t.eventName,
            r = t.eventProperties,
            a = "".concat(Date.now()),
            u = {
              eventSource: "aps_web_client_library",
              eventTime: a,
              eventCategory: n,
              eventName: o,
              eventProperties: i({}, r),
            };
          try {
            var c = { Data: window.btoa(JSON.stringify(u)), PartitionKey: a };
            null === (e = this._recordQueues.get(u.eventCategory)) ||
              void 0 === e ||
              e.push(c);
          } catch (t) {}
        }),
        (t.prototype.setSampleRates = function (t) {
          var e = function (t) {
            return t < 0 ? 0 : t >= 0 && t <= 1 ? t : 1;
          };
          "number" == typeof (null == t ? void 0 : t.error) &&
            this._sampleRates.set("error", e(t.error)),
            "number" == typeof (null == t ? void 0 : t.feat) &&
              this._sampleRates.set("feat", e(t.feat));
        }),
        (t.prototype.clearAndUpdateEventProcessingInterval = function (t) {
          var e = this;
          "number" != typeof t ||
            t <= 0 ||
            (t !== this._intervalDelayInMs &&
              (clearInterval(this._intervalId),
              (this._intervalId = setInterval(function () {
                try {
                  e.processEventRecords();
                } catch (t) {}
              }, t)),
              (this._intervalDelayInMs = t)));
        }),
        (t.prototype.processEventRecords = function () {
          for (
            var t = [],
              e = Array.from(this._recordQueues.keys()),
              n = function (n) {
                var r = e[n],
                  i = o._recordQueues.get(r),
                  a = o._sampleRates.get(r);
                if (void 0 === i || i.length <= 0) return "continue";
                if (void 0 === a || 0 === a)
                  return (
                    i.length >= o._queueLimit &&
                      ((i.length = 0),
                      o.logEvent({
                        eventCategory: r,
                        eventName: "queue limit reached",
                      })),
                    "continue"
                  );
                var u = i.filter(function (t) {
                  return void 0 !== t && a >= Math.random();
                });
                (i.length = 0), t.push.apply(t, d([], l(u), !1));
              },
              o = this,
              r = 0;
            r < e.length;
            r += 1
          )
            n(r);
          if (0 !== t.length)
            for (r = 0; r < t.length; r += this._batchSize)
              this.sendRecords(t.slice(r, r + this._batchSize));
        }),
        (t.prototype.sendRecords = function (t) {
          return u(this, void 0, void 0, function () {
            return c(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    fetch("".concat(this._serviceUrl), {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        "x-api-key": this._publicSourceIdentifier,
                      },
                      body: JSON.stringify({ Records: t }),
                    }),
                  ];
                case 1:
                  return e.sent(), [2];
              }
            });
          });
        }),
        t
      );
    })(),
    A = new ((function () {
      function t() {
        (this.STACK_MAX_LENGTH = 500), (this._tahoeStream = new I());
      }
      return (
        (t.prototype.logCoreError = function (t) {
          this.logError(i(i({}, t), { isCore: !0 }));
        }),
        (t.prototype.logCoreFeature = function (t) {
          this.logFeature(i(i({}, t), { isCore: !0 }));
        }),
        (t.prototype.logError = function (t) {
          var e;
          void 0 !== t &&
            this._tahoeStream.logEvent({
              eventCategory: "error",
              eventName: null !== (e = t.id) && void 0 !== e ? e : "unknown",
              eventProperties: i(
                i(i({}, t.props), this.getSharedEventProperties(t)),
                {
                  error: {
                    name: this.getErrorName(t.error),
                    message: this.getErrorMessage(t.error),
                    stack: this.getStackTraceMessage(t.error),
                    context: this.getErrorContext(t.error),
                  },
                }
              ),
            });
        }),
        (t.prototype.logFeature = function (t) {
          var e;
          void 0 !== t &&
            this._tahoeStream.logEvent({
              eventCategory: "feat",
              eventName: null !== (e = t.id) && void 0 !== e ? e : "unknown",
              eventProperties: i(
                i(i({}, t.props), this.getSharedEventProperties(t)),
                { status: t.feature }
              ),
            });
        }),
        (t.prototype.setEventProcessingInterval = function (t) {
          if ("number" != typeof t)
            throw new Error("Event processing interval must be a number.");
          this._tahoeStream.clearAndUpdateEventProcessingInterval(t);
        }),
        (t.prototype.setEventSamplingRates = function (t) {
          "number" == typeof (null == t ? void 0 : t.error) &&
            this._tahoeStream.setSampleRates({ error: t.error }),
            "number" == typeof (null == t ? void 0 : t.feature) &&
              this._tahoeStream.setSampleRates({ feat: t.feature });
        }),
        (t.prototype.getSharedEventProperties = function (t) {
          var e;
          return {
            isCore: null !== (e = t.isCore) && void 0 !== e && e,
            accountID: this.safelyGetAccountID(t.account),
            libraryVersion: P,
            url: this.getLocationHref(),
            hostname: this.getLocationHostname(),
            viewerCountryCode: this.getViewerCountryCode(t.account),
          };
        }),
        (t.prototype.safelyGetAccountID = function (t) {
          var e = "unknown";
          try {
            void 0 !== (null == t ? void 0 : t.id) && (e = t.id);
          } catch (t) {}
          return e;
        }),
        (t.prototype.getLocationHref = function () {
          var t,
            e,
            n,
            o = "";
          try {
            o =
              null !==
                (n =
                  null ===
                    (e =
                      null === (t = window.top) || void 0 === t
                        ? void 0
                        : t.location) || void 0 === e
                    ? void 0
                    : e.href) && void 0 !== n
                ? n
                : "";
          } catch (t) {}
          return o;
        }),
        (t.prototype.getLocationHostname = function () {
          var t,
            e,
            n,
            o = "";
          try {
            o =
              null !==
                (n =
                  null ===
                    (e =
                      null === (t = window.top) || void 0 === t
                        ? void 0
                        : t.location) || void 0 === e
                    ? void 0
                    : e.hostname) && void 0 !== n
                ? n
                : "";
          } catch (t) {}
          return o;
        }),
        (t.prototype.getViewerCountryCode = function (t) {
          var e = "unknown";
          try {
            null !== t && (e = t.use(p));
          } catch (t) {}
          return e;
        }),
        (t.prototype.getStackTraceMessage = function (t) {
          try {
            if ("string" == typeof t) return "NO STACK: ERROR PASSED AS STRING";
            if (void 0 === t.stack) return "NO STACK: error.stack IS UNDEFINED";
            if (t.stack.length > this.STACK_MAX_LENGTH) {
              var e = "[...]";
              return t.stack.substring(0, this.STACK_MAX_LENGTH - e.length) + e;
            }
            return t.stack;
          } catch (t) {
            return "NO STACK: ERROR ON RETRIEVAL";
          }
        }),
        (t.prototype.getErrorName = function (t) {
          var e = "unknown";
          try {
            "string" == typeof t ? (e = t) : void 0 !== t.name && (e = t.name);
          } catch (t) {}
          return e;
        }),
        (t.prototype.getErrorMessage = function (t) {
          var e = "unknown";
          try {
            "string" == typeof t
              ? (e = t)
              : void 0 !== t.message && (e = t.message);
          } catch (t) {}
          return e;
        }),
        (t.prototype.getErrorContext = function (t) {
          var e,
            n = "unknown";
          try {
            "string" != typeof t &&
              "context" in t &&
              (n = null !== (e = t.context) && void 0 !== e ? e : "");
          } catch (t) {}
          return n;
        }),
        t
      );
    })())(),
    D = ["scope/objectName", E, S, x];
  function N(t) {
    return null === t || "object" != typeof t
      ? t
      : t instanceof Date
      ? new Date(t.getTime())
      : t instanceof Array
      ? t.reduce(function (t, e) {
          return t.push(N(e)), t;
        }, [])
      : t instanceof Set
      ? Array.from(t.values()).reduce(function (t, e) {
          return t.add(N(e)), t;
        }, new Set())
      : t instanceof Map
      ? Array.from(t.entries()).reduce(function (t, e) {
          return t.set(e[0], N(e[1])), t;
        }, new Map())
      : t instanceof Object
      ? Object.keys(t).reduce(function (e, n) {
          return (e[n] = N(t[n])), e;
        }, {})
      : t;
  }
  var O = (function () {
      function t(t, e, n) {
        void 0 === e && (e = rt.globalContext),
          void 0 === n && (n = rt.rootName);
        var o = e[n].get(t);
        if (null == o)
          throw new Error(
            'Missing "'.concat(t, '" account in userspace object')
          );
        (this.globalContext = e),
          (this.id = t),
          (this.store = o.store),
          (this.queue = o.queue);
      }
      return (
        (t.prototype.record = function (t, e) {
          return u(this, void 0, void 0, function () {
            var o = this;
            return c(this, function (r) {
              switch (r.label) {
                case 0:
                  return [
                    4,
                    new Promise(function (r, a) {
                      o.queue.push(
                        new CustomEvent(t, {
                          detail: i(
                            { resolve: r, reject: a, source: n.internal },
                            e
                          ),
                        })
                      );
                    }),
                  ];
                case 1:
                  return [2, r.sent()];
              }
            });
          });
        }),
        (t.prototype.read = function (t, e) {
          var n,
            o,
            r,
            i,
            a = this.store.get(t);
          if (void 0 !== a) return a;
          if (void 0 !== (null == e ? void 0 : e.persist) && e.persist) {
            var u = this.persistRead(t);
            if (void 0 !== u) return u;
          }
          var c =
            null ===
              (o =
                null === (n = null == e ? void 0 : e.default) || void 0 === n
                  ? void 0
                  : n.generators) || void 0 === o
              ? void 0
              : o.get(t);
          return void 0 !== c
            ? c.apply(
                void 0,
                d(
                  [],
                  l(
                    null !==
                      (i =
                        null === (r = null == e ? void 0 : e.default) ||
                        void 0 === r
                          ? void 0
                          : r.args) && void 0 !== i
                      ? i
                      : []
                  ),
                  !1
                )
              )
            : void 0;
        }),
        (t.prototype.write = function (t, e, n) {
          this.store.set(t, e),
            void 0 !== (null == n ? void 0 : n.persist) &&
              n.persist &&
              this.persistWrite(t, e);
        }),
        (t.prototype.use = function (t, e) {
          var n,
            o = this.store.get(t.key);
          if (void 0 !== o) n = o;
          else if (void 0 !== (null == e ? void 0 : e.persist) && e.persist) {
            var r = this.persistRead(t.key);
            null != r && (n = r);
          }
          var i = null != n ? n : t.default;
          if ("function" == typeof i) return i;
          try {
            return structuredClone(i);
          } catch (t) {
            try {
              return N(i);
            } catch (t) {
              return (
                A.logCoreError({
                  id: "Core.library.Account.use",
                  account: null,
                  error: t,
                }),
                i
              );
            }
          }
        }),
        (t.prototype.update = function (t, e, n) {
          var o = e(this.use(t, n));
          if (
            (this.store.set(t.key, o),
            void 0 !== (null == n ? void 0 : n.persist) && n.persist)
          ) {
            if ("string" != typeof o)
              throw new Error(
                "".concat(
                  JSON.stringify(o),
                  " must be a string to be writtable to browser storage"
                )
              );
            this.persistWrite(t.key, o);
          }
        }),
        (t.prototype.delete = function (t, e) {
          this.store.delete(t),
            void 0 !== (null == e ? void 0 : e.persist) &&
              e.persist &&
              this.persistDelete(t);
        }),
        (t.prototype.getPersistedItemName = function (t) {
          return ""
            .concat("aps")
            .concat(":")
            .concat(this.id)
            .concat(":")
            .concat(t);
        }),
        (t.prototype.persistRead = function (t) {
          if (!D.includes(t))
            throw new Error(
              "".concat(t, " is not allowed to be read from browser storage")
            );
          var e = this.getPersistedItemName(t);
          if (e in this.globalContext.localStorage)
            return this.globalContext.localStorage.getItem(e);
        }),
        (t.prototype.persistWrite = function (t, e) {
          if (!D.includes(t))
            throw new Error(
              "".concat(t, " is not allowed to be written to browser storage")
            );
          if ("string" != typeof e)
            throw new Error(
              "".concat(
                JSON.stringify(e),
                " must be a string to be writtable to browser storage"
              )
            );
          this.globalContext.localStorage.setItem(
            this.getPersistedItemName(t),
            e
          );
        }),
        (t.prototype.persistDelete = function (t) {
          if (!D.includes(t))
            throw new Error(
              "".concat(
                t,
                " is not allowed to be touched/deleted in browser storage"
              )
            );
          this.globalContext.localStorage.removeItem(
            this.getPersistedItemName(t)
          );
        }),
        (t.create = function (t) {
          var e = t.accountID,
            n = void 0 === e ? "default" : e,
            o = t.globalContext,
            r = void 0 === o ? rt.globalContext : o,
            i = t.rootName,
            a = void 0 === i ? rt.rootName : i,
            u = t.listeners,
            c = new it(r, a);
          c.equip(), void 0 !== u && c.subscribe(u);
          var s = { store: new Map(), queue: [] };
          return r[a].set(n, s), new this(n);
        }),
        t
      );
    })(),
    R = "_system",
    M = (function (e) {
      function n(t, n) {
        return e.call(this, R, t, n) || this;
      }
      return (
        (function (e, n) {
          if ("function" != typeof n && null !== n)
            throw new TypeError(
              "Class extends value " +
                String(n) +
                " is not a constructor or null"
            );
          function o() {
            this.constructor = e;
          }
          t(e, n),
            (e.prototype =
              null === n
                ? Object.create(n)
                : ((o.prototype = n.prototype), new o()));
        })(n, e),
        n
      );
    })(O);
  function L(t) {
    var e = function (t, e) {
      throw (
        (void 0 !== t.context
          ? (t.context = "".concat(e, " > ").concat(t.context))
          : (t.context = e),
        t)
      );
    };
    return function (n, o, r) {
      var i = r.value;
      return (
        (r.value = function () {
          for (var n = [], o = 0; o < arguments.length; o++)
            n[o] = arguments[o];
          try {
            var r = i.apply(this, n);
            return r && r instanceof Promise
              ? r.catch(function (n) {
                  e(n, t);
                })
              : r;
          } catch (n) {
            e(n, t);
          }
        }),
        r
      );
    };
  }
  var k,
    T = "listeners",
    q = "_internal/history",
    j = "_config/events/activations",
    U = "_config/events/deactivations",
    z = "_internal/pageLoadID",
    F = "_internal/externalEventCount",
    B = "_internal/recentDispatches",
    H = "_internal/coreDebugMode",
    V = (function () {
      function t(t, e, n) {
        (this.globalContext = t), (this.rootName = e), (this.dispatcher = n);
      }
      return (
        (t.prototype.getAccounts = function () {
          return this.globalContext[this.rootName];
        }),
        (t.prototype.createUserspaceRoot = function () {
          null == this.getAccounts() &&
            (this.globalContext[this.rootName] = new Map());
        }),
        (t.prototype.createSystemAccount = function () {
          !1 === this.getAccounts().has(R) &&
            (this.getAccounts().set(R, { queue: [], store: new Map() }),
            new M().store.set(z, Math.random()));
        }),
        (t.prototype.observeRootSet = function () {
          var t = this;
          this.getAccounts().set = function (e, n) {
            Map.prototype.set.apply(this, [e, n]), t.equip();
          };
        }),
        (t.prototype.observeAccountQueuesPush = function () {
          var t = this;
          this.getAccounts().forEach(function (n) {
            n.queue.push = function () {
              for (var n = [], o = 0; o < arguments.length; o++)
                n[o] = arguments[o];
              Array.prototype.push.apply(this, n),
                t.dispatcher.dispatch({
                  reason: { method: e.push, events: n },
                });
            };
          });
        }),
        (t.prototype.overwriteAccountStoresGet = function () {
          this.getAccounts().forEach(function (t) {
            t.store.get = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              var n = Map.prototype.get.apply(this, t);
              return n;
            };
          });
        }),
        (t.prototype.defineConvenienceFunctions = function () {
          var t = this,
            e = function (e, n, o) {
              var r = t.getAccounts().get(e);
              void 0 !== r &&
                r.queue.push(
                  new CustomEvent(n, { detail: null != o ? o : {} })
                );
            },
            n = this.globalContext[this.rootName];
          (n.triggerFor = e),
            (n.trigger = function (t, n) {
              e(R, t, n);
            });
        }),
        (t.prototype.equip = function () {
          try {
            this.createUserspaceRoot(),
              this.createSystemAccount(),
              this.observeRootSet(),
              this.observeAccountQueuesPush(),
              this.overwriteAccountStoresGet(),
              this.defineConvenienceFunctions();
          } catch (t) {
            throw (
              (A.logCoreError({
                id: "Core.library.Equiper.equip",
                account: null,
                error: t,
              }),
              t)
            );
          }
        }),
        t
      );
    })();
  !(function (t) {
    (t.info = "info"), (t.warn = "warn"), (t.error = "error");
  })(k || (k = {}));
  var G = (function () {
      function t() {}
      return (
        (t.Instance = function () {
          return this._instance;
        }),
        (t.SessionId = function () {
          return this._sessionId;
        }),
        (t.prototype.info = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          var n = new Date(Date.now()),
            o = k.info;
          return (
            console.log.apply(console, d([this.getPrefix(n, o)], l(t), !1)),
            { timestamp: n, logLevel: o }
          );
        }),
        (t.prototype.warn = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          var n = new Date(Date.now()),
            o = k.warn;
          return (
            console.warn.apply(console, d([this.getPrefix(n, o)], l(t), !1)),
            { timestamp: n, logLevel: o }
          );
        }),
        (t.prototype.error = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          var n = new Date(Date.now()),
            o = k.error;
          return (
            console.error.apply(console, d([this.getPrefix(n, o)], l(t), !1)),
            { timestamp: n, logLevel: o }
          );
        }),
        (t.prototype.getPrefix = function (e, n) {
          var o = e.toISOString();
          return ""
            .concat(o, " | ")
            .concat(t.SessionId(), " | [")
            .concat(n.toUpperCase(), "]");
        }),
        (t._instance = new t()),
        (t._sessionId = "".concat(Date.now())),
        t
      );
    })(),
    J = G.Instance(),
    W = function (t) {
      var e, n;
      if (void 0 === t || !Array.isArray(t)) return !0;
      var o = window;
      do {
        if (
          t.includes(
            null === (e = null == o ? void 0 : o.location) || void 0 === e
              ? void 0
              : e.hostname
          )
        )
          return !0;
        if (o === window.top) break;
        (n = o), (o = o.parent);
      } while (n !== o && n !== window.top);
      return !1;
    };
  function Q() {
    var t, e, n;
    try {
      return (
        !!new URLSearchParams(
          null !==
            (e =
              null === (t = window.top) || void 0 === t
                ? void 0
                : t.location.search) && void 0 !== e
            ? e
            : window.location.search
        ).has("apsCoreDebugMode") ||
        (null !== (n = new M().read(H)) && void 0 !== n && n)
      );
    } catch (t) {
      return !1;
    }
  }
  var K,
    Y,
    X,
    Z = [v.completed, v.error, v.cancelled],
    $ = (function () {
      function t(t, e) {
        (this.globalContext = t), (this.rootName = e);
      }
      return (
        (t.prototype.getDeactivations = function (t) {
          var e;
          return null !== (e = t.store.get(U)) && void 0 !== e ? e : new Set();
        }),
        (t.prototype.isEventDeactivated = function (t, e) {
          return (
            !0 === this.getDeactivations(t).has(e.type) ||
            (function (t, e) {
              var n, o, r, i, a, u;
              try {
                var c =
                  null ===
                    (r =
                      null ===
                        (o =
                          null === (n = t.detail) || void 0 === n
                            ? void 0
                            : n.restrictions) || void 0 === o
                        ? void 0
                        : o.allow) || void 0 === r
                    ? void 0
                    : r.hostnames;
                if (void 0 !== c && !W(c)) return !0;
                var s =
                  null ===
                    (u =
                      null ===
                        (a =
                          null === (i = t.detail) || void 0 === i
                            ? void 0
                            : i.restrictions) || void 0 === a
                        ? void 0
                        : a.block) || void 0 === u
                    ? void 0
                    : u.hostnames;
                if (void 0 !== s && W(s)) return !0;
              } catch (t) {
                return (
                  A.logError({
                    error: new Error(t),
                    id: "hostnames",
                    account: e,
                  }),
                  !1
                );
              }
              return !1;
            })(e, t) ||
            (function (t) {
              var e,
                n,
                o,
                r,
                i,
                a,
                u =
                  null ===
                    (o =
                      null ===
                        (n =
                          null === (e = null == t ? void 0 : t.detail) ||
                          void 0 === e
                            ? void 0
                            : e.restrictions) || void 0 === n
                        ? void 0
                        : n.allow) || void 0 === o
                    ? void 0
                    : o.libraryVersions,
                c =
                  null ===
                    (a =
                      null ===
                        (i =
                          null === (r = null == t ? void 0 : t.detail) ||
                          void 0 === r
                            ? void 0
                            : r.restrictions) || void 0 === i
                        ? void 0
                        : i.block) || void 0 === a
                    ? void 0
                    : a.libraryVersions;
              return (
                !(!Array.isArray(c) || !c.includes(P)) ||
                !(!Array.isArray(u) || u.includes(P))
              );
            })(e)
          );
        }),
        (t.prototype.getListeners = function () {
          var t;
          return null !== (t = new M().store.get(T)) && void 0 !== t
            ? t
            : new Map();
        }),
        (t.prototype.getListener = function (t) {
          return this.getListeners().get(t.type);
        }),
        (t.prototype.shouldWaitingEventBeProcessed = function (t) {
          var e = this.readStoreItemCount(F);
          return (
            (void 0 === t.externalEventCount || t.externalEventCount < e) &&
            ((t.externalEventCount = e), !0)
          );
        }),
        (t.prototype.shouldEventBeProcessed = function (t) {
          if (void 0 === t.status) return !0;
          if (t.status === v.started) return !1;
          if (Z.includes(t.status)) return !1;
          if (t.status === v.waiting)
            return !!this.shouldWaitingEventBeProcessed(t);
          if (t.status === v.unknown) return !1;
          if (t.status === v.deactivated) return !1;
          throw new Error(
            "Event status not explicitely handled: ".concat(t.status)
          );
        }),
        (t.prototype.addTimeoutToPromiseRaceIfRequested = function (t, e) {
          var n;
          void 0 !==
            (null === (n = e.detail) || void 0 === n ? void 0 : n.timeout) &&
            t.push(
              new Promise(function (t, n) {
                setTimeout(function () {
                  return n(new Error('Event "'.concat(e.type, '" timed out')));
                }, e.detail.timeout);
              })
            );
        }),
        (t.prototype.incrementStoreItemCountBy = function (t, e) {
          var n,
            o = new M(),
            r = null !== (n = o.read(t)) && void 0 !== n ? n : 0;
          o.write(t, r + e);
        }),
        (t.prototype.resetStoreItemCount = function (t) {
          new M().write(t, 0);
        }),
        (t.prototype.readStoreItemCount = function (t) {
          var e;
          return null !== (e = new M().read(t)) && void 0 !== e ? e : 0;
        }),
        (t.prototype.handleEventSuccess = function (t, n, o, r) {
          var i;
          if (!(n in v))
            throw new Error(
              "Listener returned invalid status: "
                .concat(t.type, " returned ")
                .concat(n)
            );
          if (
            (this.updateAndLogEventStatusOnChange(t, n, r),
            n !== v.waiting &&
              void 0 !==
                (null === (i = t.detail) || void 0 === i ? void 0 : i.resolve))
          )
            try {
              t.detail.resolve(o);
            } catch (t) {
              J.error(t);
            }
          this.dispatch({ reason: { method: e.listenerSuccess, events: [t] } });
        }),
        (t.prototype.handleEventFailure = function (t, e, n) {
          (void 0 !== e && "string" != typeof e) || (e = new Error(e)),
            this.updateAndLogEventStatusOnChange(t, v.error, n),
            this.surfaceErrorToExternalUsers(t, e),
            (e.context = t.type),
            A.logError({ id: t.type, error: e, account: n });
        }),
        (t.prototype.addListenerToPromiseRace = function (t, e, n) {
          var o = this.getListener(e);
          t.push(o({ customEvent: e, account: n }));
        }),
        (t.prototype.runPromiseRace = function (t, e, n) {
          var o = this;
          Promise.race(t)
            .then(function (t) {
              var r, i;
              "string" == typeof t
                ? (r = t)
                : "object" == typeof t && ((r = t.status), (i = t.value)),
                o.handleEventSuccess(e, r, i, n);
            })
            .catch(function (t) {
              o.handleEventFailure(e, t, n);
            });
        }),
        (t.prototype.executeListenerRace = function (t, e) {
          var n = [];
          this.addListenerToPromiseRace(n, t, e),
            this.addTimeoutToPromiseRaceIfRequested(n, t),
            this.runPromiseRace(n, t, e);
        }),
        (t.prototype.recordErrorPassedAsEventDetailIfNoStatus = function (
          t,
          e
        ) {
          var n;
          if (void 0 === t.status) {
            var o = null === (n = t.detail) || void 0 === n ? void 0 : n.error;
            void 0 !== o && A.logError({ id: t.type, error: o, account: e });
          }
        }),
        (t.prototype.flagDeactivatedListener = function (t, e) {
          this.isEventDeactivated(e, t) &&
            this.updateAndLogEventStatusOnChange(t, v.deactivated, e);
        }),
        (t.prototype.flagMissingListener = function (t, e) {
          void 0 === this.getListener(t) &&
            this.updateAndLogEventStatusOnChange(t, v.unknown, e);
        }),
        (t.prototype.surfaceErrorToExternalUsers = function (t, e) {
          var n;
          if (
            void 0 !==
            (null === (n = t.detail) || void 0 === n ? void 0 : n.reject)
          )
            try {
              t.detail.reject(e);
            } catch (t) {
              J.error(t);
            }
          else J.error(e);
        }),
        (t.prototype.handleInvalidAccountError = function (t, e) {
          var n = new Error('Invalid account ID: "'.concat(e.id, '"'));
          this.handleEventFailure(t, n, e);
        }),
        (t.prototype.isAccountValid = function (t) {
          if ("string" != typeof t.id) return !1;
          return !["", "undefined", "true", "false"].includes(t.id.trim());
        }),
        (t.prototype.dispatchEvent = function (t, e) {
          var n;
          this.isAccountValid(e)
            ? (this.recordErrorPassedAsEventDetailIfNoStatus(t, e),
              this.flagMissingListener(t, e),
              this.flagDeactivatedListener(t, e),
              this.shouldEventBeProcessed(t) &&
                (this.updateAndLogEventStatusOnChange(t, v.started, e),
                Q() &&
                  J.info(
                    "## Execute event: "
                      .concat(t.type, " with initial status ")
                      .concat(
                        null !== (n = t.status) && void 0 !== n
                          ? n
                          : "undefined"
                      )
                  ),
                this.executeListenerRace(t, e)))
            : this.handleInvalidAccountError(t, e);
        }),
        (t.prototype.dispatchAccount = function (t, e) {
          var n = this;
          t.queue.forEach(function (e) {
            return n.dispatchEvent(e, t);
          });
        }),
        (t.prototype.updateEventStatus = function (t, e) {
          (t.status = e),
            (t.statusEvents = null != t.statusEvents ? t.statusEvents : []),
            t.statusEvents.push(new CustomEvent(e));
        }),
        (t.prototype.logEventUsage = function (t, e, n) {
          var o,
            r = new CustomEvent("now").timeStamp,
            a =
              null === (o = t.statusEvents) || void 0 === o
                ? void 0
                : o.find(function (t) {
                    return t.type === v.started;
                  }),
            u = null != a ? r - a.timeStamp : void 0;
          A.logFeature({
            id: t.type,
            feature: e,
            props: i(i({}, t.analytics), {
              timers: { sinceCreated: r - t.timeStamp, sinceStarted: u },
            }),
            account: n,
          });
        }),
        (t.prototype.updateAndLogEventStatusOnChange = function (t, e, n) {
          var o;
          t.status !== e &&
            (Q() &&
              J.info(
                "### Update "
                  .concat(t.type, " from ")
                  .concat(
                    null !== (o = t.status) && void 0 !== o ? o : "undefined",
                    " to "
                  )
                  .concat(e)
              ),
            this.updateEventStatus(t, e),
            !0 !== t.isLogDisabled && this.logEventUsage(t, e, n));
        }),
        (t.prototype.getAccounts = function () {
          var t = this,
            e = new Map();
          return (
            this.globalContext[this.rootName].forEach(function (n, o) {
              return e.set(o, new O(o, t.globalContext, t.rootName));
            }),
            e
          );
        }),
        (t.prototype.recordProcessedEvents = function (t) {
          var e = null != t.store.get(q) ? t.store.get(q) : [];
          e.push.apply(
            e,
            d(
              [],
              l(
                t.queue.filter(function (t) {
                  return void 0 !== t.status && Z.includes(t.status);
                })
              ),
              !1
            )
          ),
            t.store.set(q, e);
        }),
        (t.prototype.cleanUpAccountQueue = function (t) {
          var e;
          (e = t.queue).splice.apply(
            e,
            d(
              [0, t.queue.length],
              l(
                t.queue.filter(function (t) {
                  return void 0 === t.status || !Z.includes(t.status);
                })
              ),
              !1
            )
          );
        }),
        (t.prototype.archive = function () {
          var t = this;
          this.getAccounts().forEach(function (e) {
            t.recordProcessedEvents(e), t.cleanUpAccountQueue(e);
          });
        }),
        (t.prototype.filterExternalEvents = function (t) {
          return null == t
            ? void 0
            : t.filter(function (t) {
                var e, o;
                return (
                  (null === (e = t.detail) || void 0 === e
                    ? void 0
                    : e.source) !== n.internal &&
                  (null === (o = t.detail) || void 0 === o
                    ? void 0
                    : o.source) !== n.apstag &&
                  t.status !== v.waiting
                );
              });
        }),
        (t.prototype.getNumberOfExternalEvents = function (t) {
          var e,
            n = this.filterExternalEvents(t);
          return null !== (e = null == n ? void 0 : n.length) && void 0 !== e
            ? e
            : 0;
        }),
        (t.prototype.updateExternalEventCount = function (t) {
          var e = this.getNumberOfExternalEvents(t);
          this.incrementStoreItemCountBy(F, e);
        }),
        (t.prototype.throwOnInfiniteLoop = function () {
          var t = this,
            e = B;
          this.incrementStoreItemCountBy(e, 1);
          var n = this.readStoreItemCount(e);
          if (n > 1e4) throw new Error("Too many dispatches. Aborting");
          n % 100 == 0 &&
            A.logCoreFeature({
              id: "Core.library.Dispatcher.throwOnInfiniteLoop",
              account: null,
              feature: "recentDispatchesCount",
              props: { recentDispatchesCount: n },
            }),
            setTimeout(function () {
              t.resetStoreItemCount(e);
            }, 100);
        }),
        (t.prototype.dispatch = function (t) {
          var e,
            n,
            o,
            r,
            i,
            a = this,
            u = t.reason;
          try {
            this.throwOnInfiniteLoop(),
              Q() &&
                J.info(
                  '# Dispatch from method "'
                    .concat(u.method, '" on event "')
                    .concat(
                      null !==
                        (n =
                          null === (e = u.events) || void 0 === e
                            ? void 0
                            : e[0].type) && void 0 !== n
                        ? n
                        : "undefined",
                      '" with source "'
                    )
                    .concat(
                      null !==
                        (i =
                          null ===
                            (r =
                              null === (o = u.events) || void 0 === o
                                ? void 0
                                : o[0].detail) || void 0 === r
                            ? void 0
                            : r.source) && void 0 !== i
                        ? i
                        : "undefined",
                      '"\n_________________________________________'
                    )
                ),
              this.updateExternalEventCount(u.events),
              this.getAccounts().forEach(function (t) {
                return a.dispatchAccount(t, u);
              }),
              this.archive();
          } catch (t) {
            throw (
              (A.logCoreError({
                id: "Core.library.Dispatcher.dispatch",
                account: null,
                error: t,
              }),
              t)
            );
          }
        }),
        t
      );
    })(),
    tt = (function () {
      function t(t, e) {
        (this.globalContext = t), (this.rootName = e);
      }
      return (
        (t.prototype.subscribe = function (t) {
          try {
            var e = new M(),
              n = null != e.store.get(T) ? e.store.get(T) : new Map();
            e.store.set(T, new Map(d(d([], l(n), !1), l(t), !1)));
          } catch (t) {
            throw (
              (A.logCoreError({
                id: "Core.library.Subscriber.subscribe",
                account: null,
                error: t,
              }),
              t)
            );
          }
        }),
        t
      );
    })(),
    et = (function () {
      function t(t, e) {
        (this.globalContext = t), (this.rootName = e);
      }
      return (
        (t.prototype.populate = function () {
          try {
            var t = new M(),
              e = !1;
            try {
              e = JSON.parse(t.read(C));
            } catch (t) {}
            if (e) return;
            t.write(C, JSON.stringify(!0)),
              this.populateFromPrependStore(),
              this.populateFromQueryParams();
          } catch (t) {
            throw (
              (A.logCoreError({
                id: "Core.library.Populator.populate",
                account: null,
                error: t,
              }),
              t)
            );
          }
        }),
        (t.prototype.populateFromPrependStore = function () {
          var t = this;
          this.globalContext[this.rootName].forEach(function (e, n) {
            var o,
              r,
              i = new O(n, t.globalContext, t.rootName),
              a =
                null !== (r = i.read(S, { persist: !0 })) && void 0 !== r
                  ? r
                  : "[]";
            i.write(S, JSON.stringify([]));
            try {
              var u = JSON.parse(a);
              if (0 === u.length) return;
              (o = i.queue).push.apply(o, d([], l(u.map(ot)), !1));
            } catch (t) {
              console.error("Error processing prepended events", t);
            }
          });
        }),
        (t.prototype.populateFromQueryParams = function () {
          var t,
            e,
            n =
              null ===
                (e =
                  null === (t = this.globalContext) || void 0 === t
                    ? void 0
                    : t.location) || void 0 === e
                ? void 0
                : e.search,
            o = new URLSearchParams(n),
            r = this.globalContext[this.rootName],
            i = r.get(R);
          nt(o, "aps.trigger").forEach(function (t) {
            i.queue.push(ot(t));
          }),
            nt(o, "aps.triggerFor", !0).forEach(function (t) {
              void 0 !== t.accountId &&
                r.has(t.accountId) &&
                r.get(t.accountId).queue.push(ot(t));
            });
          var a = nt(o, "aps_event");
          r.forEach(function (t) {
            a.forEach(function (e) {
              t.queue.push(ot(e));
            });
          });
        }),
        t
      );
    })(),
    nt = function (t, e, n) {
      void 0 === n && (n = !1);
      var o = t.getAll(e),
        r = [];
      return (
        o.forEach(function (t) {
          var e,
            o = t.split(",");
          n && (e = o.shift());
          var i = o.shift();
          if (void 0 !== i && i.length > 0) {
            var a = decodeURIComponent(o.join(",")),
              u = void 0;
            if (a.length > 0)
              try {
                u = JSON.parse(a);
              } catch (t) {
                console.error("Error processing query param event", i, u);
              }
            r.push({
              eventName: i.replace(/_/g, "/"),
              eventDetail: u,
              accountId: e,
            });
          }
        }),
        r
      );
    },
    ot = function (t) {
      var e;
      return new CustomEvent(t.eventName, {
        detail: i({}, null !== (e = t.eventDetail) && void 0 !== e ? e : {}),
      });
    },
    rt = { globalContext: window, rootName: "_aps" },
    it = (function () {
      function t(t, e) {
        void 0 === t && (t = rt.globalContext),
          void 0 === e && (e = rt.rootName),
          (this.dispatcher = new $(t, e)),
          (this.equiper = new V(t, e, this.dispatcher)),
          (this.subscriber = new tt(t, e)),
          (this.populator = new et(t, e)),
          (this.globalContext = t),
          (this.rootName = e);
      }
      return (
        (t.prototype.subscribe = function (t) {
          this.subscriber.subscribe(t);
        }),
        (t.prototype.equip = function () {
          this.equiper.equip();
        }),
        (t.prototype.dispatch = function (t) {
          var e = t.reason;
          this.dispatcher.dispatch({ reason: e });
        }),
        (t.prototype.populate = function () {
          this.populator.populate();
        }),
        (t.prototype.load = function (t) {
          var n = t.listeners;
          this.equip(),
            this.subscribe(n),
            this.dispatch({ reason: { method: e.direct } }),
            this.populate();
        }),
        a(
          [L("HASH#Core.library.UserSpace.subscribe")],
          t.prototype,
          "subscribe",
          null
        ),
        a([L("HASH#Core.library.UserSpace.equip")], t.prototype, "equip", null),
        a(
          [L("HASH#Core.library.UserSpace.dispatch")],
          t.prototype,
          "dispatch",
          null
        ),
        a(
          [L("HASH#Core.library.UserSpace.populate")],
          t.prototype,
          "populate",
          null
        ),
        a([L("HASH#Core.library.UserSpace.load")], t.prototype, "load", null),
        t
      );
    })(),
    at = new Map([
      [
        "_config/events/activate",
        function (t) {
          var e = t.customEvent,
            n = t.account;
          return u(void 0, void 0, void 0, function () {
            var t;
            return c(this, function (r) {
              return (
                (t = null != n.store.get(j) ? n.store.get(j) : new Set()).add(
                  e.detail.name
                ),
                n.store.set(j, t),
                [2, o.completed]
              );
            });
          });
        },
      ],
      [
        "_config/events/deactivate",
        function (t) {
          var e = t.customEvent,
            n = t.account;
          return u(void 0, void 0, void 0, function () {
            var t;
            return c(this, function (r) {
              return (
                (t = null != n.store.get(U) ? n.store.get(U) : new Set()).add(
                  e.detail.name
                ),
                n.store.set(U, t),
                [2, o.completed]
              );
            });
          });
        },
      ],
    ]);
  !(function (t) {
    t.OpenRTB3_0 = "OpenRTB3_0";
  })(K || (K = {})),
    (function (t) {
      (t.Display = "display"),
        (t.Video = "video"),
        (t.MultiFormat = "multi-format");
    })(Y || (Y = {})),
    (function (t) {
      (t.Googletag = "googletag"), (t.AppNexus = "appnexus"), (t.SAS = "sas");
    })(X || (X = {}));
  var ut = function (t) {
      var e,
        n = {
          id: t.slotID,
          spec: {
            placement: {
              tagid: null !== (e = t.slotName) && void 0 !== e ? e : t.slotID,
            },
          },
        };
      return (
        void 0 !== t.floor &&
          ((n.flr = t.floor.value), (n.flrcur = t.floor.currency)),
        void 0 !== t.slotParams && (n.spec.placement.ext = t.slotParams),
        (n.spec.placement = i(i({}, n.spec.placement), ct(t))),
        n
      );
    },
    ct = function (t) {
      var e = {};
      return (
        t.mediaType === Y.MultiFormat
          ? (e = st(t.multiFormatProperties, t.companions))
          : t.mediaType === Y.Video
          ? ((e.video = {}),
            void 0 !== t.sizes &&
              t.sizes.length > 0 &&
              (e.video = { w: t.sizes[0][0], h: t.sizes[0][1] }),
            void 0 !== t.companions &&
              t.companions.length > 0 &&
              (e.video.comp = t.companions.map(function (t) {
                return { id: t };
              })))
          : t.mediaType === Y.Display &&
            ((e.display = {}),
            void 0 !== t.sizes &&
              t.sizes.length > 0 &&
              (e.display.displayfmt = t.sizes.map(function (t) {
                return { w: t[0], h: t[1] };
              }))),
        e
      );
    },
    st = function (t, e) {
      var n,
        o = {};
      if (
        void 0 !== t &&
        (void 0 !== t.display &&
          (o.display = {
            displayfmt:
              void 0 !== t.display.sizes
                ? t.display.sizes.map(function (t) {
                    return { w: t[0], h: t[1] };
                  })
                : void 0,
          }),
        void 0 !== t.video)
      ) {
        var r = null === (n = t.video.sizes) || void 0 === n ? void 0 : n[0];
        (o.video = {
          w: void 0 !== r ? r[0] : void 0,
          h: void 0 !== r ? r[1] : void 0,
        }),
          void 0 !== e &&
            (o.video.comp = e.map(function (t) {
              return { id: t };
            }));
      }
      return o;
    },
    lt = function (t, e) {
      var n = {};
      return (
        Object.keys(t).forEach(function (o) {
          "object" == typeof t[o] &&
            null !== t[o] &&
            (o === e ? Object.assign(n, t[o]) : Object.assign(n, lt(t[o], e)));
        }),
        n
      );
    },
    dt = function (t) {
      var e = lt(t, "ext");
      return (
        Object.entries(e).forEach(function (t) {
          var n = l(t, 2),
            o = n[0],
            r = n[1];
          "string" != typeof r && (e[o] = JSON.stringify(r));
        }),
        0 !== Object.keys(e).length ? e : void 0
      );
    },
    vt = function (t) {
      var e,
        n = pt(t),
        o = { mediaType: n };
      return (
        n === Y.MultiFormat
          ? (o = i(i({}, o), ft(t)))
          : n === Y.Display
          ? (o.sizes = gt(t.display))
          : n === Y.Video &&
            ((o.sizes = ht(t.video)),
            void 0 !==
              (null === (e = t.video) || void 0 === e ? void 0 : e.comp) &&
              (o.companions = mt(t.video))),
        o
      );
    },
    pt = function (t) {
      return void 0 !== t.video && void 0 !== t.display
        ? Y.MultiFormat
        : void 0 !== t.video
        ? Y.Video
        : Y.Display;
    },
    ft = function (t) {
      var e = { multiFormatProperties: {} };
      return (
        void 0 !== t.video &&
          ((e.multiFormatProperties.video = { sizes: ht(t.video) }),
          void 0 !== t.video.comp && (e.companions = mt(t.video))),
        void 0 !== t.display &&
          (e.multiFormatProperties.display = { sizes: gt(t.display) }),
        e
      );
    },
    gt = function (t) {
      var e = [];
      return (
        void 0 !== t &&
          (void 0 !== t.displayfmt &&
            t.displayfmt.length > 0 &&
            (e = d(
              d([], l(e), !1),
              l(
                t.displayfmt.map(function (t) {
                  return [t.w, t.h];
                })
              ),
              !1
            )),
          void 0 !== t.h &&
            void 0 !== t.w &&
            (e = d(d([], l(e), !1), [[t.w, t.h]], !1))),
        e
      );
    },
    ht = function (t) {
      var e = [];
      return (
        void 0 !== t &&
          void 0 !== t.h &&
          void 0 !== t.w &&
          (e = d(d([], l(e), !1), [[t.w, t.h]], !1)),
        e
      );
    },
    mt = function (t) {
      var e;
      return (
        void 0 !== (null == t ? void 0 : t.comp) &&
          t.comp.length > 0 &&
          (e = t.comp.map(function (t) {
            return t.id;
          })),
        e
      );
    },
    yt = "ad/targeting",
    wt = "ad/schain",
    bt = "ad/context",
    _t = "ad/googletagSlotAutoImport",
    Et = new Map([
      [
        yt,
        function () {
          var t = new Map();
          return (
            (t.get = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              var n = Map.prototype.get.apply(this, t);
              return Map.prototype.delete.apply(this, t), n;
            }),
            t
          );
        },
      ],
      [wt, function () {}],
      [bt, function () {}],
      [_t, function () {}],
    ]);
  var St = {
      debug_events_show: "debug/events/show",
      debug_prepend_add: "debug/prepend/add",
      debug_prepend_clear: "debug/prepend/clear",
      debug_prepend_remove: "debug/prepend/remove",
      debug_store_show: "debug/store/show",
      ad_debugSession_start: "ad/debugSession/start",
      debug_listeners_show: "debug/listeners/show",
    },
    Ct = new Map([
      [
        St.debug_events_show,
        function (t) {
          var e = t.account;
          return u(void 0, void 0, void 0, function () {
            var t;
            return c(this, function (n) {
              return (
                (t = d(
                  d(
                    d(
                      d(
                        [],
                        l(
                          (null != e.store.get(q) ? e.store.get(q) : []).map(
                            function (t) {
                              return {
                                type: t.type,
                                status: "created",
                                detail: t.detail,
                                timestamp: t.timeStamp,
                              };
                            }
                          )
                        ),
                        !1
                      ),
                      l(
                        e.queue.map(function (t) {
                          return {
                            type: t.type,
                            status: "created",
                            detail: t.detail,
                            timestamp: t.timeStamp,
                          };
                        })
                      ),
                      !1
                    ),
                    l(
                      (null != e.store.get(q) ? e.store.get(q) : [])
                        .map(function (t) {
                          return null != t.statusEvents
                            ? t.statusEvents.map(function (e) {
                                return {
                                  type: t.type,
                                  status: e.type,
                                  detail: t.detail,
                                  timestamp: e.timeStamp,
                                };
                              })
                            : [];
                        })
                        .flat()
                    ),
                    !1
                  ),
                  l(
                    e.queue
                      .map(function (t) {
                        return null != t.statusEvents
                          ? t.statusEvents.map(function (e) {
                              return {
                                type: t.type,
                                status: e.type,
                                detail: t.detail,
                                timestamp: e.timeStamp,
                              };
                            })
                          : [];
                      })
                      .flat()
                  ),
                  !1
                ).filter(function (t) {
                  return !t.type.startsWith("debug/");
                })).sort(function (t, e) {
                  return t.timestamp - e.timestamp;
                }),
                console.groupCollapsed("âŒ‚ Account ID: ".concat(e.id)),
                console.table(t),
                console.groupEnd(),
                [2, o.completed]
              );
            });
          });
        },
      ],
      [
        St.debug_prepend_add,
        function (t) {
          var e = t.account,
            n = t.customEvent;
          return u(void 0, void 0, void 0, function () {
            var t, r, i, a, u, s, l;
            return c(this, function (c) {
              if (
                void 0 ===
                (null === (s = n.detail) || void 0 === s ? void 0 : s.eventName)
              )
                throw new Error("Missing event information");
              return (
                (t =
                  null !== (l = e.read(S, { persist: !0 })) && void 0 !== l
                    ? l
                    : "[]"),
                (r = JSON.parse(t)),
                (i = n.detail),
                (a = i.eventName),
                (u = i.eventDetail),
                r.unshift({ eventName: a, eventDetail: u }),
                e.write(S, JSON.stringify(r), { persist: !0 }),
                [2, o.completed]
              );
            });
          });
        },
      ],
      [
        St.debug_prepend_clear,
        function (t) {
          var e = t.account;
          return u(void 0, void 0, void 0, function () {
            return c(this, function (t) {
              return e.delete(S, { persist: !0 }), [2, o.completed];
            });
          });
        },
      ],
      [
        St.debug_prepend_remove,
        function (t) {
          var e = t.account,
            n = t.customEvent;
          return u(void 0, void 0, void 0, function () {
            var t, r, i, a, u, s;
            return c(this, function (c) {
              if (
                void 0 ===
                (null === (u = n.detail) || void 0 === u ? void 0 : u.eventName)
              )
                throw new Error("Missing event information");
              return (
                (t =
                  null !== (s = e.read(S, { persist: !0 })) && void 0 !== s
                    ? s
                    : "[]"),
                (r = JSON.parse(t)),
                (i = n.detail.eventName),
                (a = r.filter(function (t) {
                  return t.eventName !== i;
                })),
                e.write(S, JSON.stringify(a), { persist: !0 }),
                [2, o.completed]
              );
            });
          });
        },
      ],
      [
        St.debug_store_show,
        function (t) {
          var e = t.account;
          return u(void 0, void 0, void 0, function () {
            var t;
            return c(this, function (n) {
              return (
                (t = d([], l(e.store.entries()), !1)),
                console.groupCollapsed("âŒ‚ Account ID: ".concat(e.id)),
                console.table(t),
                console.groupEnd(),
                [2, o.completed]
              );
            });
          });
        },
      ],
      [
        St.ad_debugSession_start,
        function (t) {
          var e = t.account,
            n = t.customEvent;
          return u(void 0, void 0, void 0, function () {
            return c(this, function (t) {
              return (function (t) {
                return t.status !== o.waiting;
              })(n) &&
                ((function (t, e) {
                  var n;
                  void 0 !==
                    (null === (n = t.detail) || void 0 === n
                      ? void 0
                      : n.minutes) &&
                    (function (t, e) {
                      var n,
                        o = new Date();
                      t.write(
                        E,
                        o
                          .setMinutes(
                            Number(o.getMinutes()) +
                              Number(
                                null === (n = e.detail) || void 0 === n
                                  ? void 0
                                  : n.minutes
                              )
                          )
                          .toString(),
                        { persist: !0 }
                      );
                    })(e, t);
                  !(function (t) {
                    var e;
                    (t.globalContext.apstagDEBUG =
                      null !== (e = t.globalContext.apstagDEBUG) && void 0 !== e
                        ? e
                        : {}),
                      (t.globalContext.apstagDEBUG.url = (function (t) {
                        var e,
                          n,
                          o,
                          r,
                          i = new URL(
                            null !==
                              (o =
                                null ===
                                  (n =
                                    null === (e = null == t ? void 0 : t.top) ||
                                    void 0 === e
                                      ? void 0
                                      : e.location) || void 0 === n
                                  ? void 0
                                  : n.href) && void 0 !== o
                              ? o
                              : null ===
                                  (r = null == t ? void 0 : t.document) ||
                                void 0 === r
                              ? void 0
                              : r.referrer
                          );
                        return (
                          i.searchParams.set("amzn_debug_mode", "1"),
                          i.toString()
                        );
                      })(t.globalContext));
                  })(e);
                })(n, e),
                (function (t) {
                  return (
                    t.queue.filter(function (t) {
                      return t.type === St.ad_debugSession_start;
                    }).length > 1
                  );
                })(e))
                ? [2, o.completed]
                : (function (t) {
                    var e = t.read(E, { persist: !0 });
                    return void 0 !== e && new Date() >= new Date(Number(e));
                  })(e)
                ? ((function (t) {
                    t.delete(E, { persist: !0 }),
                      (function (t) {
                        var e;
                        null === (e = t.globalContext.apstagDEBUG) ||
                          void 0 === e ||
                          delete e.url;
                      })(t);
                  })(e),
                  [2, o.completed])
                : ((function (t) {
                    t.record(St.debug_events_show),
                      t.record(St.debug_store_show);
                  })(e),
                  [2, o.waiting]);
            });
          });
        },
      ],
      [
        St.debug_listeners_show,
        function (t) {
          return (
            t.account,
            u(void 0, void 0, void 0, function () {
              var t, e, n;
              return c(this, function (r) {
                return (
                  (t = new M()),
                  (e = t.store.get(T)),
                  (n = d([], l(e.entries()), !1)),
                  console.groupCollapsed("âŒ‚ Listeners"),
                  console.table(n),
                  console.groupEnd(),
                  [2, o.completed]
                );
              });
            })
          );
        },
      ],
    ]),
    xt = { key: "ad/slots", default: new Map() },
    Pt = { key: "ad/attachTargeting", default: void 0 },
    It = { key: "cxm/isConfigLoadInitiated", default: !1 };
  function At(t) {
    var e = t.account,
      n = t.selectedSlots,
      o = t.publisherParams,
      r = t.timeout,
      a = t._endpointDomain,
      s = t.initConfig;
    return u(this, void 0, void 0, function () {
      var t;
      return c(this, function (u) {
        switch (u.label) {
          case 0:
            return (
              (t = (function (t) {
                return t.map(function (t) {
                  return (function (t) {
                    if (void 0 !== t.version && t.version !== K.OpenRTB3_0)
                      throw new Error("Invalid OpenRTB version specified");
                    var e = t.spec.placement,
                      n = i({ slotID: t.id, slotName: e.tagid }, vt(e)),
                      o = dt(t);
                    if (
                      (void 0 !== o && (n.slotParams = o), void 0 !== t.flr)
                    ) {
                      if (void 0 !== t.flrcur && "USD" !== t.flrcur)
                        throw new Error(
                          'item.flrcur: only "USD" is currently supported'
                        );
                      n.floor = { value: t.flr, currency: "USD" };
                    }
                    return n;
                  })(t);
                });
              })(n)),
              [
                4,
                Dt({
                  account: e,
                  legacySlots: t,
                  publisherParams: o,
                  timeout: r,
                  _endpointDomain: a,
                  initConfig: s,
                }),
              ]
            );
          case 1:
            return [2, u.sent()];
        }
      });
    });
  }
  function Dt(t) {
    var e = t.account,
      n = t.legacySlots,
      o = t.publisherParams,
      r = t.timeout,
      i = t._endpointDomain,
      a = t.initConfig;
    return u(this, void 0, void 0, function () {
      return c(this, function (t) {
        switch (t.label) {
          case 0:
            return [
              4,
              new Promise(function (t) {
                if (void 0 === e.globalContext.apstag)
                  throw new Error("apstag undefined in global scope");
                e.globalContext.apstag.fetchBids(
                  {
                    slots: n,
                    params: o,
                    timeout: null != r ? r : 6e4,
                    _endpointDomain: i,
                  },
                  function (e) {
                    t(e);
                  },
                  { initConfig: a }
                );
              }),
            ];
          case 1:
            return [2, t.sent()];
        }
      });
    });
  }
  var Nt,
    Ot,
    Rt = function (t, e, n, o) {
      var r,
        i,
        a,
        u = n.globalContext.document.createElement("iframe"),
        c =
          null === (r = e.get("amznsz")) || void 0 === r
            ? void 0
            : r.split("x"),
        s = e.get("amzniid"),
        l = t;
      if (!(void 0 === s || void 0 === l || void 0 === c || c.length < 2)) {
        (u.style.marginLeft = "0"),
          (u.style.marginTop = "0"),
          (u.style.height = "".concat(c[1], "px")),
          (u.style.width = "100%"),
          u.setAttribute("scrolling", "no"),
          u.setAttribute("frameborder", "0");
        var d = n.globalContext.document.createElement("div"),
          v =
            null !== (i = null == o ? void 0 : o.location) && void 0 !== i
              ? i
              : "afterend",
          p = n.globalContext.document.getElementById(l);
        if (null != p) {
          p.insertAdjacentElement(v, d), d.appendChild(u);
          var f =
            null === (a = null == u ? void 0 : u.contentWindow) || void 0 === a
              ? void 0
              : a.document;
          void 0 !== f &&
            (f.open(),
            f.write(
              '<!DOCTYPE html><html><head><meta charset="UTF-8"><style>html{height:100%}body{height:100%;margin:0;overflow:hidden}</style></head><body><script>window.parent.apstag.renderImp(document, "' +
                s +
                '", {"inheritSize": true});</script></body></html>'
            ),
            f.close());
        }
      }
    },
    Mt = "ad/ASRSlot/render",
    Lt = new Map([
      [
        Mt,
        function (t) {
          var e = t.account,
            n = t.customEvent;
          return u(void 0, void 0, void 0, function () {
            var t, r;
            return c(this, function (i) {
              if (
                void 0 ===
                  (null === (t = n.detail) || void 0 === t ? void 0 : t.id) ||
                void 0 ===
                  (null === (r = n.detail) || void 0 === r
                    ? void 0
                    : r.targeting)
              )
                throw new Error("Missing event detail");
              return Rt(n.detail.id, n.detail.targeting, e), [2, o.completed];
            });
          });
        },
      ],
    ]);
  !(function (t) {
    t.equinoxWidget = "amazon:93b7dd52-a8ce-11ed-afa1-0242ac120002";
  })(Nt || (Nt = {})),
    (function (t) {
      t.equinoxWidget = "aax-us-east.amazon-adsystem.com";
    })(Ot || (Ot = {}));
  function kt(t, e) {
    return u(this, void 0, void 0, function () {
      var n, o;
      return c(this, function (r) {
        switch (r.label) {
          case 0:
            return (
              (function (t) {
                t.forEach(function (t) {
                  if (void 0 === t.deal) return t;
                  t.deal.some(function (t) {
                    return t.id === Nt.equinoxWidget;
                  }) &&
                    (function (t) {
                      void 0 !== t.spec.placement.display &&
                        (t.spec.placement.display.displayfmt = [
                          { w: 999, h: 999 },
                        ]);
                    })(t);
                });
              })(t),
              [4, jt(t, e)]
            );
          case 1:
            return (
              r.sent(),
              (n = (function (t) {
                var e = {};
                return (
                  t.forEach(function (t) {
                    var n = (function (t) {
                      var e,
                        n,
                        o,
                        r,
                        a,
                        u = {},
                        c = "93b7dd52-a8ce-11ed-afa1-0242ac120002";
                      return (
                        void 0 !==
                          (null === (e = t.deal) || void 0 === e
                            ? void 0
                            : e.find(function (t) {
                                return t.id === "amazon:".concat(c);
                              })) &&
                          (u = i(i({}, u), { program: "apscustom" })),
                        i(
                          i({}, u),
                          null !==
                            (a =
                              null ===
                                (r =
                                  null ===
                                    (o =
                                      null === (n = t.spec.placement.display) ||
                                      void 0 === n
                                        ? void 0
                                        : n.ext) || void 0 === o
                                    ? void 0
                                    : o.amazon) || void 0 === r
                                ? void 0
                                : r[c]) && void 0 !== a
                            ? a
                            : {}
                        )
                      );
                    })(t);
                    e = i(i({}, e), n);
                  }),
                  e
                );
              })(t)),
              [4, qt(t, n, e)]
            );
          case 2:
            return r.sent(), (o = e.read(yt)), [4, Ut(t, o, e)];
          case 3:
            return r.sent(), [2];
        }
      });
    });
  }
  function Tt(t) {
    return t.some(function (t) {
      return (function (t) {
        var e;
        return (
          !0 ===
          (null === (e = t.deal) || void 0 === e
            ? void 0
            : e.some(function (t) {
                return t.id === Nt.equinoxWidget;
              }))
        );
      })(t);
    });
  }
  function qt(t, e, n) {
    return u(this, void 0, void 0, function () {
      var o;
      return c(this, function (r) {
        switch (r.label) {
          case 0:
            return (
              (o = {
                itemIds: t.map(function (t) {
                  return t.id;
                }),
                publisherParams: e,
              }),
              Tt(t) && (o._endpointDomain = Ot.equinoxWidget),
              [4, n.record(Ft.ad_targeting_fetch, o)]
            );
          case 1:
            return r.sent(), [2];
        }
      });
    });
  }
  function jt(t, e) {
    return u(this, void 0, void 0, function () {
      return c(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, e.record(Ft.ad_slot_define, { item: t })];
          case 1:
            return n.sent(), [2];
        }
      });
    });
  }
  function Ut(t, e, n) {
    return u(this, void 0, void 0, function () {
      var o, r, i, a, u, l, d;
      return c(this, function (c) {
        switch (c.label) {
          case 0:
            c.trys.push([0, 5, 6, 7]),
              (o = s(t)),
              (r = o.next()),
              (c.label = 1);
          case 1:
            return r.done
              ? [3, 4]
              : ((i = r.value),
                void 0 === (a = e.get(i.id)) ? [3, 3] : [4, zt(i, a, n)]);
          case 2:
            c.sent(), (c.label = 3);
          case 3:
            return (r = o.next()), [3, 1];
          case 4:
            return [3, 7];
          case 5:
            return (u = c.sent()), (l = { error: u }), [3, 7];
          case 6:
            try {
              r && !r.done && (d = o.return) && d.call(o);
            } finally {
              if (l) throw l.error;
            }
            return [7];
          case 7:
            return [2];
        }
      });
    });
  }
  function zt(t, e, n) {
    var o;
    return u(this, void 0, void 0, function () {
      return c(this, function (r) {
        switch (r.label) {
          case 0:
            return !0 !==
              (null === (o = t.deal) || void 0 === o
                ? void 0
                : o.some(function (t) {
                    return t.id === Nt.equinoxWidget;
                  }))
              ? [3, 2]
              : [4, n.record(Mt, { id: t.id, targeting: e })];
          case 1:
            return r.sent(), [3, 3];
          case 2:
            throw new Error(
              "Not implemented: The ad/slot/render event can only be used with specific deal IDs currently"
            );
          case 3:
            return [2];
        }
      });
    });
  }
  var Ft = {
      ad_schain_define: "ad/schain/define",
      ad_slot_define: "ad/slot/define",
      ad_slot_import: "ad/slot/import",
      ad_slot_render: "ad/slot/render",
      ad_targeting_fetch: "ad/targeting/fetch",
      ad_targeting_attach: "ad/targeting/attach",
      ad_signals_define: "ad/signals/define",
      cxm_config_load: "cxm/config/load",
    },
    Bt = new Map([
      [
        Ft.ad_slot_define,
        function (t) {
          var e = t.account,
            n = t.customEvent;
          return u(void 0, void 0, void 0, function () {
            var t, r, i, a, u, s;
            return c(this, function (c) {
              if (
                0 ===
                (t = d(
                  d(
                    [],
                    l(
                      null !==
                        (i =
                          null === (r = n.detail) || void 0 === r
                            ? void 0
                            : r.item) && void 0 !== i
                        ? i
                        : []
                    ),
                    !1
                  ),
                  l(
                    null !==
                      (s =
                        null ===
                          (u =
                            null === (a = n.detail) || void 0 === a
                              ? void 0
                              : a.slots) || void 0 === u
                          ? void 0
                          : u.map(ut)) && void 0 !== s
                      ? s
                      : []
                  ),
                  !1
                )).length
              )
                throw new Error(
                  "Expecting a non-empty array for 'item' (OpenRTB) or 'slots' (legacy)"
                );
              return (
                t.forEach(function (t) {
                  e.update(xt, function (e) {
                    return e.set(t.id, t);
                  });
                }),
                [2, o.completed]
              );
            });
          });
        },
      ],
      [
        Ft.ad_targeting_fetch,
        function (t) {
          var e = t.account,
            n = t.customEvent;
          return u(void 0, void 0, void 0, function () {
            var t, r, i, a, u, d, v, p;
            return c(this, function (c) {
              switch (c.label) {
                case 0:
                  return void 0 === e.globalContext.apstag
                    ? [2, o.waiting]
                    : ((function (t) {
                        var e = t.use(It);
                        e ||
                          (t.update(It, function () {
                            return !0;
                          }),
                          t.record(Ft.cxm_config_load));
                      })(e),
                      (function (t) {
                        (function (t) {
                          if (
                            (function (t) {
                              var e, n;
                              try {
                                for (
                                  var r = s(t.queue), i = r.next();
                                  !i.done;
                                  i = r.next()
                                ) {
                                  var a = i.value;
                                  if (
                                    a.type === St.ad_debugSession_start &&
                                    a.status === o.waiting
                                  )
                                    return !0;
                                }
                              } catch (t) {
                                e = { error: t };
                              } finally {
                                try {
                                  i && !i.done && (n = r.return) && n.call(r);
                                } finally {
                                  if (e) throw e.error;
                                }
                              }
                              return !1;
                            })(t)
                          )
                            return !1;
                          var e = t.read(E, { persist: !0 });
                          if (void 0 !== e) return !0;
                          return !1;
                        })(t) && t.record(St.ad_debugSession_start);
                      })(e),
                      (t = (function (t) {
                        return Array.from(t.use(xt).values());
                      })(e)),
                      (r = (function (t, e) {
                        var n = t;
                        void 0 !== e &&
                          e.length > 0 &&
                          (n = t.filter(function (t) {
                            return e.includes(t.id);
                          }));
                        return n;
                      })(
                        t,
                        null === (u = n.detail) || void 0 === u
                          ? void 0
                          : u.itemIds
                      )),
                      (i =
                        null === (d = n.detail) || void 0 === d
                          ? void 0
                          : d.publisherParams),
                      [
                        4,
                        At({
                          account: e,
                          selectedSlots: r,
                          publisherParams: i,
                          timeout:
                            null === (v = n.detail) || void 0 === v
                              ? void 0
                              : v.timeout,
                          _endpointDomain:
                            null === (p = n.detail) || void 0 === p
                              ? void 0
                              : p._endpointDomain,
                          initConfig: {
                            pubID: e.id,
                            isSelfServePub: 36 === e.id.length,
                            deals: !0,
                          },
                        }),
                      ]);
                case 1:
                  return (
                    (a = c.sent()),
                    (function (t, e) {
                      var n = (function (t) {
                        return t.read(yt, {
                          default: { generators: Et, args: [] },
                        });
                      })(t);
                      (function (t, e) {
                        e.forEach(function (e) {
                          t.set(e.slotID, new Map());
                        });
                      })(n, e),
                        (function (t, e) {
                          e.forEach(function (e) {
                            Object.entries(e.targeting).forEach(function (n) {
                              var o = l(n, 2),
                                r = o[0],
                                i = o[1];
                              Map.prototype.get.apply(t, [e.slotID]).set(r, i);
                            });
                          });
                        })(n, e),
                        (function (t, e) {
                          t.store.set(yt, e);
                        })(t, n);
                    })(e, a),
                    (function (t) {
                      var e = function (e) {
                        var n = e.adServer,
                          o = e.itemIds;
                        t.record(Ft.ad_targeting_attach, {
                          itemIds: o,
                          adServer: n,
                        });
                      };
                      t.update(Pt, function () {
                        return e;
                      });
                    })(e),
                    [2, o.completed]
                  );
              }
            });
          });
        },
      ],
      [
        Ft.ad_targeting_attach,
        function (t) {
          var e = t.account,
            n = t.customEvent;
          return u(void 0, void 0, void 0, function () {
            var t, r, i, a;
            return c(this, function (u) {
              if (
                void 0 ===
                (t =
                  null === (i = n.detail) || void 0 === i ? void 0 : i.adServer)
              )
                throw new Error("adServer must be defined");
              if (!Object.values(X).includes(t))
                throw new Error(
                  "adServer: ".concat(t, " isn't currently supported")
                );
              return (
                (r = { pubID: e.id }),
                e.globalContext.apstag.setDisplayBids(
                  null === (a = n.detail) || void 0 === a ? void 0 : a.itemIds,
                  { initConfig: r, adServer: t }
                ),
                [2, o.completed]
              );
            });
          });
        },
      ],
      [
        Ft.ad_slot_import,
        function (t) {
          var e = t.account,
            n = t.customEvent;
          return u(void 0, void 0, void 0, function () {
            var t;
            return c(this, function (r) {
              if (
                void 0 ===
                (null === (t = n.detail) || void 0 === t ? void 0 : t.adServer)
              )
                throw new Error("adServer: a valid value must be provided");
              if (n.detail.adServer === X.Googletag)
                return e.write(_t, !0), [2, o.completed];
              throw new Error(
                "adServer: value provided isn't currently supported"
              );
            });
          });
        },
      ],
      [
        Ft.ad_schain_define,
        function (t) {
          var e = t.account,
            n = t.customEvent;
          return u(void 0, void 0, void 0, function () {
            var t;
            return c(this, function (r) {
              if (
                void 0 ===
                (null === (t = n.detail) || void 0 === t ? void 0 : t.schain)
              )
                throw new Error("Missing schain object");
              return e.write(wt, n.detail.schain), [2, o.completed];
            });
          });
        },
      ],
      [
        Ft.ad_signals_define,
        function (t) {
          var e = t.account,
            n = t.customEvent;
          return u(void 0, void 0, void 0, function () {
            return c(this, function (t) {
              if (void 0 === n.detail || !("context" in n.detail))
                throw new Error("Missing detail object");
              return e.write(bt, n.detail.context), [2, o.completed];
            });
          });
        },
      ],
      [
        Ft.ad_slot_render,
        function (t) {
          var e = t.account,
            n = t.customEvent;
          return u(void 0, void 0, void 0, function () {
            var t, r;
            return c(this, function (i) {
              switch (i.label) {
                case 0:
                  return void 0 ===
                    (t =
                      null === (r = n.detail) || void 0 === r ? void 0 : r.item)
                    ? [3, 2]
                    : [4, kt(t, e)];
                case 1:
                  return i.sent(), [2, o.completed];
                case 2:
                  throw new Error(
                    'Not implemented: The ad/slot/render event can only be used with the "item" attribute currently'
                  );
              }
            });
          });
        },
      ],
      [
        Ft.cxm_config_load,
        function (t) {
          var e = t.account;
          return (
            t.customEvent,
            u(void 0, void 0, void 0, function () {
              var t, n, r;
              return c(this, function (i) {
                switch (i.label) {
                  case 0:
                    return void 0 ===
                      (null === (r = e.globalContext.apstag) || void 0 === r
                        ? void 0
                        : r._load3PLibraryConfig)
                      ? [2, o.waiting]
                      : ((t = e.id),
                        36 === e.id.length && ((t = "600"), (n = e.id)),
                        [
                          4,
                          new Promise(function (o, r) {
                            var i;
                            if (
                              void 0 ===
                              (null === (i = e.globalContext.apstag) ||
                              void 0 === i
                                ? void 0
                                : i._load3PLibraryConfig)
                            )
                              throw new Error(
                                "apstag._load3PLibraryConfig is undefined"
                              );
                            e.globalContext.apstag._load3PLibraryConfig(
                              e.id,
                              { sourceID: t, publisherUUID: n },
                              o,
                              r
                            );
                          }),
                        ]);
                  case 1:
                    return i.sent(), [2, o.completed];
                }
              });
            })
          );
        },
      ],
    ]),
    Ht = { key: "customPlacement/configuration", default: void 0 },
    Vt = { key: "customPlacement/contextURL", default: void 0 },
    Gt = {
      key: "customPlacement/configurationEndpoint",
      default: "",
    };
  function Jt(t) {
    var e = t.read(bt);
    return void 0 !== e && "user" in e
      ? (e.user,
        (function (t, e) {
          var n = {};
          for (var o in t)
            Object.prototype.hasOwnProperty.call(t, o) &&
              e.indexOf(o) < 0 &&
              (n[o] = t[o]);
          if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(t); r < o.length; r++)
              e.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, o[r]) &&
                (n[o[r]] = t[o[r]]);
          }
          return n;
        })(e, ["user"]))
      : e;
  }
  function Wt(t, e) {
    try {
      var n =
        null != e
          ? e
          : (function (t) {
              var e, n;
              try {
                if (
                  void 0 !==
                  (null === (e = t.globalContext.top) || void 0 === e
                    ? void 0
                    : e.location.href)
                )
                  return null === (n = t.globalContext.top) || void 0 === n
                    ? void 0
                    : n.location.href;
              } catch (t) {}
              try {
                if (t.globalContext.top !== t.globalContext.self)
                  return t.globalContext.document.referrer;
              } catch (t) {}
              return;
            })(t);
      if (void 0 !== n) return encodeURIComponent(n);
    } catch (t) {}
    return "";
  }
  function Qt(t) {
    return u(this, void 0, void 0, function () {
      var e, n, o, r, i;
      return c(this, function (a) {
        switch (a.label) {
          case 0:
            return (
              (e = { ortb2: Jt(t) }),
              (n = t.use(Vt)),
              (o = t.use(Gt)),
              (r = Wt(t, n)),
              (i = encodeURIComponent(JSON.stringify(e))),
              [
                4,
                fetch(
                  ""
                    .concat(o, "?account=")
                    .concat(t.id, "&u=")
                    .concat(r, "&sg=")
                    .concat(i)
                ),
              ]
            );
          case 1:
            return [4, a.sent().json()];
          case 2:
            return [2, a.sent()];
        }
      });
    });
  }
  var Kt = { key: "customPlacement/defaultLocationHints", default: new Set() },
    Yt = { key: "customPlacement/secondaryLocationHints", default: new Set() },
    Xt = { key: "customPlacement/requestedGAMSlots", default: new Set() };
  function Zt(t) {
    return u(this, void 0, void 0, function () {
      var e, n, o;
      return c(this, function (r) {
        switch (r.label) {
          case 0:
            return (
              6e4,
              (e = {
                slots: [
                  {
                    slotID: "93b7dd52-a8ce-11ed-afa1-0242ac120002:1",
                    sizes: [[999, 999]],
                  },
                ],
                timeout: 6e4,
                _endpointDomain: "aax-us-east.amazon-adsystem.com",
                params: { program: "apscustom" },
              }),
              (n = {
                pubID: t.id,
                isSelfServePub: 36 === t.id.length,
                deals: !0,
              }),
              (o = t.use(Vt)),
              [
                4,
                new Promise(function (r) {
                  var i;
                  null === (i = t.globalContext.apstag) ||
                    void 0 === i ||
                    i.fetchBids(
                      e,
                      function (t) {
                        r(t);
                      },
                      { initConfig: n, contextURL: o }
                    );
                }),
              ]
            );
          case 1:
            return [2, r.sent()];
        }
      });
    });
  }
  var $t,
    te = {
      customPlacement_configuration_fetch:
        "customPlacement/configuration/fetch",
      customPlacement_placement_enable: "customPlacement/placement/enable",
      customPlacement_hint_define: "customPlacement/hint/define",
      customPlacement_targeting_attach: "customPlacement/targeting/attach",
      customPlacement_bids_fetch: "customPlacement/bids/fetch",
    },
    ee = new Map([
      [
        te.customPlacement_configuration_fetch,
        function (t) {
          var e = t.account;
          return u(void 0, void 0, void 0, function () {
            var t;
            return c(this, function (n) {
              switch (n.label) {
                case 0:
                  return (function (t) {
                    var e = t.use(Ht);
                    if (void 0 !== e) return !0;
                    return !1;
                  })(e)
                    ? [2, o.cancelled]
                    : [4, Qt(e)];
                case 1:
                  return (
                    (t = n.sent()),
                    e.update(Ht, function () {
                      return t;
                    }),
                    [4, e.record(te.customPlacement_targeting_attach)]
                  );
                case 2:
                  return n.sent(), [2, o.completed];
              }
            });
          });
        },
      ],
      [
        te.customPlacement_placement_enable,
        function (t) {
          var e = t.account;
          return u(void 0, void 0, void 0, function () {
            var t, n;
            return c(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (function (t) {
                      var e, n;
                      null ===
                        (n =
                          null === (e = t.globalContext.googletag) ||
                          void 0 === e
                            ? void 0
                            : e.cmd) ||
                        void 0 === n ||
                        n.push(function () {
                          var e, n;
                          null ===
                            (n =
                              null === (e = t.globalContext.googletag) ||
                              void 0 === e
                                ? void 0
                                : e.pubads()) ||
                            void 0 === n ||
                            n.addEventListener("slotRequested", function (e) {
                              t.update(Xt, function (t) {
                                return t.add(e.slot.getSlotElementId());
                              });
                            });
                        });
                    })(e),
                    e.record(te.customPlacement_configuration_fetch),
                    [4, e.record(te.customPlacement_bids_fetch)]
                  );
                case 1:
                  if (
                    ((t = r.sent()),
                    (n = (function (t, e) {
                      var n = t.use(Xt);
                      return e.filter(function (t) {
                        return !n.has(t.slotID);
                      });
                    })(e, t)),
                    0 === n.length)
                  )
                    throw new Error("No custom placement bids arrived in time");
                  return [4, e.record(te.customPlacement_targeting_attach)];
                case 2:
                  return (
                    r.sent(),
                    (function (t, e) {
                      var n = (function (t) {
                          var e = t.use(Kt),
                            n = t.use(Yt),
                            o = d(d([], l(e), !1), l(n), !1);
                          if (0 === o.length)
                            throw new Error("No configured hints");
                          return o[0];
                        })(t),
                        o = t.globalContext.document.getElementById(n);
                      if (null == o)
                        throw new Error(
                          'Hint location "'.concat(n, '" not found')
                        );
                      e.every(function (e) {
                        var n,
                          r =
                            null === (n = e.targeting) || void 0 === n
                              ? void 0
                              : n.amzniid;
                        return (
                          !(void 0 !== r && r.length > 0) ||
                          ((function (t, e, n) {
                            var o,
                              r =
                                t.globalContext.document.createElement(
                                  "iframe"
                                ),
                              i = e.size.split("x");
                            Object.assign(r.style, {
                              marginLeft: "0",
                              marginTop: "0",
                              height: "".concat(i[1], "px"),
                              width: "100%",
                            }),
                              r.setAttribute("scrolling", "no"),
                              r.setAttribute("frameborder", "0"),
                              n.appendChild(r);
                            var a =
                              null === (o = r.contentWindow) || void 0 === o
                                ? void 0
                                : o.document;
                            void 0 !== a &&
                              (a.open(),
                              a.write(
                                '<!DOCTYPE html><html><head><meta charset="UTF-8"><style>html{height:100%}body{height:100%;margin:0;overflow:hidden}</style></head><body><script>window.parent.apstag.renderImp(document, "' +
                                  e.targeting.amzniid +
                                  '", {"inheritSize": true});</script></body></html>'
                              ),
                              a.close());
                          })(t, e, o),
                          !1)
                        );
                      });
                    })(e, n),
                    [2, o.completed]
                  );
              }
            });
          });
        },
      ],
      [
        te.customPlacement_hint_define,
        function (t) {
          var e = t.account,
            n = t.customEvent;
          return u(void 0, void 0, void 0, function () {
            var t, r, i, a, u;
            return c(this, function (c) {
              if (
                void 0 ===
                (null === (u = n.detail) || void 0 === u ? void 0 : u.id)
              )
                throw new Error("Hint `id` must be defined");
              return (
                (t = n.detail),
                (r = t.id),
                (i = t.isDefault),
                (a = Kt),
                !0 !== i && (a = Yt),
                e.update(a, function (t) {
                  return t.add(r);
                }),
                [2, o.completed]
              );
            });
          });
        },
      ],
      [
        te.customPlacement_targeting_attach,
        function (t) {
          var e = t.account;
          return u(void 0, void 0, void 0, function () {
            var t;
            return c(this, function (n) {
              return void 0 !== (t = e.use(Ht)) &&
                (function (t) {
                  return (
                    !0 ===
                    (null == t
                      ? void 0
                      : t.aps.some(function (t) {
                          return t.active;
                        }))
                  );
                })(t)
                ? ((function (t, e) {
                    var n,
                      o,
                      r = (function (t, e) {
                        if (void 0 === (null == e ? void 0 : e.google))
                          return [];
                        var n = t.use(Xt);
                        return e.google.filter(function (t) {
                          return !n.has(t.div);
                        });
                      })(t, e);
                    if (0 === r.length)
                      throw new Error(
                        "No unrequested slots in custom placement configuration"
                      );
                    null ===
                      (o =
                        null === (n = t.globalContext.googletag) || void 0 === n
                          ? void 0
                          : n.cmd) ||
                      void 0 === o ||
                      o.push(function () {
                        !(function (t, e) {
                          var n,
                            o =
                              null === (n = null == t ? void 0 : t.pubads()) ||
                              void 0 === n
                                ? void 0
                                : n.getSlots();
                          null == e ||
                            e.forEach(function (t) {
                              var e =
                                null == o
                                  ? void 0
                                  : o.find(function (e) {
                                      return e.getSlotElementId() === t.div;
                                    });
                              void 0 !== e &&
                                Object.entries(t.targeting).forEach(function (
                                  t
                                ) {
                                  var n = l(t, 2),
                                    o = n[0],
                                    r = n[1];
                                  e.setTargeting(o, r);
                                });
                            });
                        })(t.globalContext.googletag, r);
                      });
                  })(e, t),
                  [2, o.completed])
                : [2, o.cancelled];
            });
          });
        },
      ],
      [
        te.customPlacement_bids_fetch,
        function (t) {
          var e = t.account;
          return u(void 0, void 0, void 0, function () {
            var t, n;
            return c(this, function (r) {
              switch (r.label) {
                case 0:
                  return void 0 ===
                    (null === (n = e.globalContext.apstag) || void 0 === n
                      ? void 0
                      : n.fetchBids)
                    ? [2, o.waiting]
                    : [4, Zt(e)];
                case 1:
                  return (t = r.sent()), [2, { status: o.completed, value: t }];
              }
            });
          });
        },
      ],
    ]),
    ne = new Map([
      [
        "analytics/sampling/set",
        function (t) {
          t.account;
          var e = t.customEvent;
          return u(void 0, void 0, void 0, function () {
            var t, n, r, i, a;
            return c(this, function (u) {
              return void 0 ===
                (null === (t = null == e ? void 0 : e.detail) || void 0 === t
                  ? void 0
                  : t.rates)
                ? [2, o.cancelled]
                : (void 0 !==
                    (null ===
                      (r =
                        null === (n = null == e ? void 0 : e.detail) ||
                        void 0 === n
                          ? void 0
                          : n.rates) || void 0 === r
                      ? void 0
                      : r.error) &&
                    A.setEventSamplingRates({ error: e.detail.rates.error }),
                  void 0 !==
                    (null ===
                      (a =
                        null === (i = null == e ? void 0 : e.detail) ||
                        void 0 === i
                          ? void 0
                          : i.rates) || void 0 === a
                      ? void 0
                      : a.status) &&
                    A.setEventSamplingRates({ feature: e.detail.rates.status }),
                  [2, o.completed]);
            });
          });
        },
      ],
      [
        "log/analytics/setSampling",
        function (t) {
          t.account;
          var e = t.customEvent;
          return u(void 0, void 0, void 0, function () {
            var t;
            return c(this, function (n) {
              if (
                "number" !=
                typeof (null === (t = e.detail) || void 0 === t
                  ? void 0
                  : t.ratio)
              )
                throw new Error("Invalid 'ratio' param passed");
              return (
                A.setEventSamplingRates({
                  error: e.detail.ratio,
                  feature: e.detail.ratio,
                }),
                [2, o.completed]
              );
            });
          });
        },
      ],
      [
        "log/analytics/setInterval",
        function (t) {
          t.account;
          var e = t.customEvent;
          return u(void 0, void 0, void 0, function () {
            var t;
            return c(this, function (n) {
              if (
                "number" !=
                typeof (null === (t = e.detail) || void 0 === t
                  ? void 0
                  : t.interval)
              )
                throw new Error("Invalid 'interval' param passed");
              return (
                A.setEventProcessingInterval(e.detail.interval),
                [2, o.completed]
              );
            });
          });
        },
      ],
    ]);
  !(function (t) {
    (t[(t.unspecifiedUnknown = 0)] = "unspecifiedUnknown"),
      (t[(t.lowEntropy = 1)] = "lowEntropy"),
      (t[(t.highEntropy = 2)] = "highEntropy");
  })($t || ($t = {}));
  var oe = ["brands", "mobile", "platform"],
    re = [
      "architecture",
      "bitness",
      "fullVersionList",
      "model",
      "platformVersion",
    ];
  function ie(t, e, n) {
    return u(this, void 0, void 0, function () {
      var r, i;
      return c(this, function (a) {
        switch (a.label) {
          case 0:
            return (
              a.trys.push([0, 2, , 3]),
              [4, n.getHighEntropyValues(d(d([], l(oe), !1), l(re), !1))]
            );
          case 1:
            return (
              (r = a.sent()),
              t.write(e, JSON.stringify(ae(r)), { persist: !0 }),
              [3, 3]
            );
          case 2:
            return (
              (i = a.sent()),
              A.logError({
                id: "deviceSignal_sua_persistHighEntropyEventually",
                error: i,
                account: t,
              }),
              [3, 3]
            );
          case 3:
            return [2, o.completed];
        }
      });
    });
  }
  function ae(t) {
    var e,
      n,
      o = {};
    return (
      (o.architecture = t.architecture),
      (o.bitness = t.bitness),
      (o.mobile = t.mobile ? 1 : 0),
      (o.model = t.model),
      (o.source = (function (t) {
        if (
          re.some(function (e) {
            return t[e];
          })
        )
          return $t.highEntropy;
        if (
          oe.some(function (e) {
            return t[e];
          })
        )
          return $t.lowEntropy;
        return $t.unspecifiedUnknown;
      })(t)),
      "string" == typeof t.platform &&
        (o.platform = {
          brand: t.platform,
          version:
            null === (e = t.platformVersion) || void 0 === e
              ? void 0
              : e.split("."),
        }),
      Array.isArray(t.fullVersionList)
        ? (n = t.fullVersionList)
        : Array.isArray(t.brands) && (n = t.brands),
      n instanceof Array &&
        (o.browsers = n.map(function (t) {
          var e;
          return {
            brand: t.brand,
            version:
              null === (e = t.version) || void 0 === e ? void 0 : e.split("."),
          };
        })),
      o
    );
  }
  var ue,
    ce = new Map([
      [
        "deviceSignal/sua/set",
        function (t) {
          var e = t.account;
          return u(void 0, void 0, void 0, function () {
            var t, n, r, i, a;
            return c(this, function (u) {
              switch (u.label) {
                case 0:
                  return (
                    (t = x),
                    (n =
                      null === (i = e.globalContext.navigator) || void 0 === i
                        ? void 0
                        : i.userAgentData),
                    "string" == typeof (r = e.read(t, { persist: !0 }))
                      ? e.write(t, r)
                      : n instanceof Object &&
                        (function (t, e, n) {
                          t.write(e, JSON.stringify(ae(n)));
                        })(e, t, n),
                    !1 !==
                    (null === (a = e.globalContext.apstag) || void 0 === a
                      ? void 0
                      : a.isGDPRRegion)
                      ? [2, o.completed]
                      : "function" !=
                        typeof (null == n ? void 0 : n.getHighEntropyValues)
                      ? [3, 2]
                      : [4, ie(e, t, n)]
                  );
                case 1:
                  u.sent(), (u.label = 2);
                case 2:
                  return [2, o.completed];
              }
            });
          });
        },
      ],
    ]);
  !(function (t) {
    t.equinoxWidget = "amazon:93b7dd52-a8ce-11ed-afa1-0242ac120002";
  })(ue || (ue = {}));
  var se = new Map([
      [
        "ad/container/didInitialize",
        function (t) {
          var e = t.account,
            n = t.customEvent;
          return u(void 0, void 0, void 0, function () {
            var t, r, i, a, u;
            return c(this, function (c) {
              switch (c.label) {
                case 0:
                  return (
                    (t =
                      null === (a = n.detail) || void 0 === a ? void 0 : a.id),
                    (r =
                      null === (u = n.detail) || void 0 === u
                        ? void 0
                        : u.labels),
                    void 0 !== t && void 0 !== r && r.includes(ue.equinoxWidget)
                      ? ((i = [
                          {
                            id: t,
                            spec: { placement: { display: {} } },
                            deal: [{ id: ue.equinoxWidget }],
                          },
                        ]),
                        [4, e.record(Ft.ad_slot_render, { item: i })])
                      : [3, 2]
                  );
                case 1:
                  c.sent(), (c.label = 2);
                case 2:
                  return [2, o.completed];
              }
            });
          });
        },
      ],
    ]),
    le = { key: "_monitoring/statusesByEventIdentifier", default: new Map() },
    de = function (t) {
      var e = t.account,
        n = t.customEvent;
      return u(void 0, void 0, void 0, function () {
        var t, r, i, a, u;
        return c(this, function (c) {
          if (
            void 0 ===
            (t =
              null === (u = n.detail) || void 0 === u
                ? void 0
                : u.eventIdentifier)
          )
            throw new Error("Missing eventIdentifier parameter");
          return (
            (r = e.use(le)),
            (i = "".concat(n.type, ":").concat(t)),
            void 0 !== (a = r.get(i)) ? [2, a] : [2, o.waiting]
          );
        });
      });
    },
    ve = function (t) {
      var e = t.account,
        n = t.customEvent;
      return u(void 0, void 0, void 0, function () {
        var t, r, i, a, u, s;
        return c(this, function (c) {
          if (
            void 0 ===
            (t =
              null === (a = n.detail) || void 0 === a
                ? void 0
                : a.eventIdentifier)
          )
            throw new Error("Missing eventIdentifier parameter");
          if (
            void 0 ===
            (r =
              null === (u = n.detail) || void 0 === u ? void 0 : u.statusUpdate)
          )
            throw new Error("Missing statusUpdate parameter");
          if (!(r in o))
            throw new Error(
              "Invalid statusUpdate parameter. Expected one of ".concat(
                Object.values(o).join(", ")
              )
            );
          if (
            void 0 ===
              (i =
                null === (s = n.detail) || void 0 === s
                  ? void 0
                  : s.pairedEvents) ||
            i.length < 1 ||
            i.some(function (t) {
              return "string" != typeof t;
            })
          )
            throw new Error(
              "Parameter pairedEvents must be a non-empty array of string"
            );
          return (
            i.forEach(function (n) {
              var o = "".concat(n, ":").concat(t);
              e.update(le, function (t) {
                return t.set(o, r);
              });
            }),
            [2, o.completed]
          );
        });
      });
    },
    pe = new Map([
      ["_monitor/testing/only", de],
      ["_update/testing/only", ve],
      ["_legacy/bidRequest/monitor", de],
      ["_legacy/bidRequest/didComplete", ve],
    ]),
    fe = new Map([
      [
        "ad/record/delete",
        function (t) {
          var e = t.account;
          return (
            t.customEvent,
            u(void 0, void 0, void 0, function () {
              var t;
              return c(this, function (n) {
                switch (n.label) {
                  case 0:
                    return void 0 ===
                      (null === (t = e.globalContext.apstag) || void 0 === t
                        ? void 0
                        : t.dpa)
                      ? [2, o.waiting]
                      : [
                          4,
                          new Promise(function (t, n) {
                            var o;
                            try {
                              null === (o = e.globalContext.apstag) ||
                                void 0 === o ||
                                o.dpa(function () {
                                  return t();
                                });
                            } catch (t) {
                              n(new Error("apstag.dpa error: ".concat(t)));
                            }
                          }),
                        ];
                  case 1:
                    return n.sent(), [2, o.completed];
                }
              });
            })
          );
        },
      ],
      [
        "ad/record/renew",
        function (t) {
          var e = t.account,
            n = t.customEvent;
          return u(void 0, void 0, void 0, function () {
            var t;
            return c(this, function (r) {
              switch (r.label) {
                case 0:
                  return void 0 ===
                    (null === (t = e.globalContext.apstag) || void 0 === t
                      ? void 0
                      : t.rpa)
                    ? [2, o.waiting]
                    : [
                        4,
                        new Promise(function (t, o) {
                          var r, i;
                          if (
                            void 0 ===
                            (null === (r = n.detail) || void 0 === r
                              ? void 0
                              : r.config)
                          )
                            throw new Error("Missing tokenConfig object");
                          try {
                            null === (i = e.globalContext.apstag) ||
                              void 0 === i ||
                              i.rpa(
                                n.detail.config,
                                function () {
                                  return t();
                                },
                                n.detail.setCookie,
                                e.id
                              );
                          } catch (t) {
                            o(new Error("apstag.rpa error: ".concat(t)));
                          }
                        }),
                      ];
                case 1:
                  return r.sent(), [2, o.completed];
              }
            });
          });
        },
      ],
      [
        "ad/record/rr",
        function (t) {
          var e = t.account,
            n = t.customEvent;
          return u(void 0, void 0, void 0, function () {
            var t, r;
            return c(this, function (a) {
              if (
                void 0 ===
                (null === (t = e.globalContext.apstag) || void 0 === t
                  ? void 0
                  : t.rr)
              )
                return [2, o.waiting];
              if (
                void 0 ===
                (null === (r = n.detail) || void 0 === r ? void 0 : r.config)
              )
                throw new Error("Missing config object");
              return (
                e.globalContext.apstag.rr(
                  i({ accountID: e.id }, n.detail.config)
                ),
                [2, o.completed]
              );
            });
          });
        },
      ],
      [
        "ad/record/update",
        function (t) {
          var e = t.account,
            n = t.customEvent;
          return u(void 0, void 0, void 0, function () {
            var t;
            return c(this, function (r) {
              switch (r.label) {
                case 0:
                  return void 0 ===
                    (null === (t = e.globalContext.apstag) || void 0 === t
                      ? void 0
                      : t.upa)
                    ? [2, o.waiting]
                    : [
                        4,
                        new Promise(function (t, o) {
                          var r, i;
                          if (
                            void 0 ===
                            (null === (r = n.detail) || void 0 === r
                              ? void 0
                              : r.config)
                          )
                            throw new Error("Missing tokenConfig object");
                          try {
                            null === (i = e.globalContext.apstag) ||
                              void 0 === i ||
                              i.upa(
                                n.detail.config,
                                function () {
                                  return t();
                                },
                                n.detail.setCookie,
                                "api",
                                e.id
                              );
                          } catch (t) {
                            o(new Error("apstag.upa error: ".concat(t)));
                          }
                        }),
                      ];
                case 1:
                  return r.sent(), [2, o.completed];
              }
            });
          });
        },
      ],
    ]);
  function ge(t) {
    return u(this, void 0, void 0, function () {
      var e, n, o, r, i;
      return c(this, function (a) {
        switch (a.label) {
          case 0:
            return (
              a.trys.push([0, 3, , 4]),
              [
                4,
                crypto.subtle.importKey(
                  "jwk",
                  {
                    alg: "A128CTR",
                    ext: !0,
                    k: "ERTYQsuodPO_Um-5jFmOLg",
                    key_ops: ["encrypt"],
                    kty: "oct",
                  },
                  "AES-CTR",
                  !0,
                  ["encrypt"]
                ),
              ]
            );
          case 1:
            return (
              (e = a.sent()),
              (n = new TextEncoder().encode(t)),
              (r = Uint8Array.bind),
              [
                4,
                crypto.subtle.encrypt(
                  { name: "AES-CTR", counter: new Uint8Array(16), length: 128 },
                  e,
                  n
                ),
              ]
            );
          case 2:
            return (
              (o = new (r.apply(Uint8Array, [void 0, a.sent()]))()),
              [2, btoa(String.fromCharCode.apply(String, d([], l(o), !1)))]
            );
          case 3:
            return (
              (i = a.sent()),
              A.logError({
                id: "SecureSignals-encryptSignal",
                account: null,
                error: i,
              }),
              [2, null]
            );
          case 4:
            return [2];
        }
      });
    });
  }
  var he = {
      google_secureSignals_set: "google/secureSignals/set",
      google_secureSignals_initialize: "google/secureSignals/initialize",
    },
    me = new Map([
      [
        he.google_secureSignals_set,
        function (t) {
          var e = t.account;
          return (
            t.customEvent,
            u(void 0, void 0, void 0, function () {
              return c(this, function (t) {
                return (
                  void 0 === e.globalContext.googletag &&
                    (e.globalContext.googletag = {}),
                  void 0 === e.globalContext.googletag.secureSignalProviders &&
                    (e.globalContext.googletag.secureSignalProviders = []),
                  e.globalContext.googletag.secureSignalProviders.push({
                    networkCode: "amazon.com",
                    collectorFunction: function () {
                      return u(void 0, void 0, void 0, function () {
                        return c(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return [
                                4,
                                e.record(he.google_secureSignals_initialize),
                              ];
                            case 1:
                              return [2, t.sent()];
                          }
                        });
                      });
                    },
                  }),
                  [2, o.completed]
                );
              });
            })
          );
        },
      ],
      [
        he.google_secureSignals_initialize,
        function (t) {
          var e = t.account;
          return (
            t.customEvent,
            u(void 0, void 0, void 0, function () {
              var t, n, r, i, a, u, s;
              return c(this, function (c) {
                switch (c.label) {
                  case 0:
                    return void 0 ===
                      (t =
                        null === (u = e.globalContext.apstag) || void 0 === u
                          ? void 0
                          : u._getSlotIdToNameMapping)
                      ? [2, { status: o.waiting }]
                      : ((n = t()),
                        0 === Object.keys(n).length
                          ? [2, { status: o.waiting }]
                          : (void 0 ===
                              (r =
                                null === (s = e.globalContext.location) ||
                                void 0 === s
                                  ? void 0
                                  : s.href) &&
                              (A.logError({
                                id: "SecureSignals-googleSignalCollector",
                                error: "window.location.href null",
                                account: e,
                              }),
                              (r = "")),
                            (i = ""
                              .concat(r, ";")
                              .concat(JSON.stringify(n))
                              .substr(0, 225)),
                            (a = { status: o.completed }),
                            [4, ge(i)]));
                  case 1:
                    return [2, ((a.value = c.sent()), a)];
                }
              });
            })
          );
        },
      ],
    ]);
  var ye = {
      widget_toolbox_end: "widget/toolbox/end",
      widget_toolbox_open: "widget/toolbox/open",
      widget_toolbox_start: "widget/toolbox/start",
    },
    we = new Map([
      [
        ye.widget_toolbox_end,
        function (t) {
          var e = t.account;
          return u(void 0, void 0, void 0, function () {
            return c(this, function (t) {
              return (
                e.record(St.debug_prepend_remove, {
                  eventName: ye.widget_toolbox_start,
                }),
                [2, o.completed]
              );
            });
          });
        },
      ],
      [
        ye.widget_toolbox_open,
        function (t) {
          var e = t.account;
          return (
            t.customEvent,
            u(void 0, void 0, void 0, function () {
              return c(this, function (t) {
                return (
                  (function (t, e) {
                    var n = e.globalContext.document.createElement("script");
                    (n.src = t),
                      (n.async = !0),
                      e.globalContext.document.head.appendChild(n);
                  })("", e),
                  [2, o.completed]
                );
              });
            })
          );
        },
      ],
      [
        ye.widget_toolbox_start,
        function (t) {
          var e = t.account,
            n = t.customEvent;
          return u(void 0, void 0, void 0, function () {
            return c(this, function (t) {
              return (
                e.record(St.debug_prepend_add, { eventName: n.type }),
                e.record(ye.widget_toolbox_open),
                [2, o.completed]
              );
            });
          });
        },
      ],
    ]);
  try {
    var be = new Map(
      d(
        d(
          d(
            d(
              d(
                d(
                  d(
                    d(
                      d(
                        d(
                          d(
                            d(
                              d(d(d([], l(g), !1), l(_), !1), l(we), !1),
                              l(se),
                              !1
                            ),
                            l(Ct),
                            !1
                          ),
                          l(Bt),
                          !1
                        ),
                        l(Lt),
                        !1
                      ),
                      l(fe),
                      !1
                    ),
                    l(f),
                    !1
                  ),
                  l(at),
                  !1
                ),
                l(ne),
                !1
              ),
              l(me),
              !1
            ),
            l(ee),
            !1
          ),
          l(pe),
          !1
        ),
        l(ce),
        !1
      )
    );
    new it().load({ listeners: be });
  } catch (t) {
    A.logCoreError({ id: "publisher", account: null, error: t }),
      Q() && J.error(t);
  }
})();
/*! @amzn/apswebapstaglibrary - apstag-legacy - 23.1211.1645 */
!(function (t) {
  var e = {};
  function n(r) {
    var o;
    return (
      e[r] ||
      ((o = e[r] = { i: r, l: !1, exports: {} }),
      t[r].call(o.exports, o, o.exports, n),
      (o.l = !0),
      o)
    ).exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 40));
})([
  function (t, e, n) {
    "use strict";
    function r(t) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function o(t) {
      try {
        var e = parseInt(t, 10);
        if (!isNaN(e))
          return !(e <= 0) && (100 <= e || 100 * Math.random() <= e);
      } catch (t) {}
      return !1;
    }
    function i(t, e) {
      var n = parseInt(e, 10),
        r = [],
        o = 0;
      if (u(t)) {
        if (isNaN(n) || n < 1) return [t];
        for (var i = t.length; o < i; ) {
          var a = o;
          (o += n), r.push(t.slice(a, o));
        }
      }
      return r;
    }
    function a() {
      return "".concat(Math.round(1e12 * Math.random())).concat(Date.now());
    }
    function c(t) {
      for (
        var e =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
          n = new Array(t),
          r = 0;
        r < t;
        r++
      )
        n[r] = e[Math.floor(Math.random() * e.length)];
      return n.join("");
    }
    function s(t) {
      return "object" === r(t) && null !== t;
    }
    function u(t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    }
    function l(t, e) {
      return s(t) && void 0 !== t[e] && "" !== t[e];
    }
    function d(t, e) {
      return -1 !== t.indexOf(e);
    }
    function f(t) {
      var e = new Date();
      return e.setDate(e.getDate() + t), e.toUTCString();
    }
    function b(t) {
      try {
        var e =
            t.innerWidth ||
            t.document.documentElement.clientWidth ||
            t.document.body.clientWidth,
          n =
            t.innerHeight ||
            t.document.documentElement.clientHeight ||
            t.document.body.clientHeight;
        return "".concat(e, "x").concat(n);
      } catch (t) {}
      return "x";
    }
    function p(t, e) {
      return (
        decodeURIComponent(t).split("?")[0].split("#")[0] ===
        decodeURIComponent(e).split("?")[0].split("#")[0]
      );
    }
    function y(t) {
      var e = Object.keys(t);
      return (
        e.filter(function (e) {
          return t[e];
        }).length === e.length
      );
    }
    n.d(e, "l", function () {
      return o;
    }),
      n.d(e, "c", function () {
        return i;
      }),
      n.d(e, "d", function () {
        return a;
      }),
      n.d(e, "e", function () {
        return c;
      }),
      n.d(e, "j", function () {
        return s;
      }),
      n.d(e, "i", function () {
        return u;
      }),
      n.d(e, "k", function () {
        return l;
      }),
      n.d(e, "h", function () {
        return d;
      }),
      n.d(e, "f", function () {
        return f;
      }),
      n.d(e, "g", function () {
        return b;
      }),
      n.d(e, "b", function () {
        return p;
      }),
      n.d(e, "a", function () {
        return y;
      });
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "b", function () {
      return f;
    }),
      n.d(e, "c", function () {
        return b;
      }),
      n.d(e, "d", function () {
        return p;
      }),
      n.d(e, "a", function () {
        return y;
      });
    e = n(0);
    var r = n(3),
      o = n(2),
      i = n(7),
      a = n(9),
      c = n(16),
      s = n(4),
      u = Object(e.l)(10),
      l = [],
      d =
        (!0 === Object(i.c)("exposeErrors") && (window.apstagErrors = l),
        function (t, e, n) {
          try {
            var r = Date.now(),
              o = {
                eventSource: "apstag",
                eventTime: r,
                eventCategory: "error",
                eventName: null != n ? n : "unknown",
                eventProperties: {
                  accountID: t,
                  libraryVersion: s.l,
                  url: Object(a.g)(window),
                  error: {
                    name: "string" == typeof e ? e : e.name,
                    message: "string" == typeof e ? e : e.message,
                  },
                },
              },
              i = { Data: window.btoa(JSON.stringify(o)), PartitionKey: r };
            fetch(
              "",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "x-api-key":
                    "5e0b19374596b1c8abfb0560fcb956220131d0a7f7100979de5d18cfada355d5",
                },
                body: JSON.stringify({ Records: [i] }),
              }
            ).catch(function () {});
          } catch (t) {}
        });
    function f(t, e, n) {
      try {
        ((null != n && n.makeVisibleToAllUsers) || Object(i.d)("errors")) &&
          console.error(t);
        var s,
          f,
          b = {
            ts: Date.now(),
            url: encodeURIComponent(Object(a.g)(window)),
            r: encodeURIComponent(Object(a.h)(window)),
            _type: "apsLibraryError",
            e: { et: t.name, el: e, msg: t.message },
          };
        return (
          l.push(b),
          o.a.dispatch({ type: "LOG_ERROR", error: b }),
          Math.random() <= 0.001 &&
            ((f =
              null != (s = null == n ? void 0 : n.accountId)
                ? s
                : Object(c.unsafelyGuessAccountID)()),
            d(f, t, e)),
          !!u && (Object(r.b)(b), !0)
        );
      } catch (t) {
        console.error(t);
      }
      return !1;
    }
    function b(t, e, n, r) {
      return f(
        {
          name: e,
          message: ""
            .concat(t, " was of type '")
            .concat(e, "' instead of '")
            .concat(n, "'"),
        },
        "TypeError-".concat(t),
        r
      );
    }
    function p(t, e) {
      return function () {
        try {
          return t.apply(null, arguments);
        } catch (t) {
          return f(t, e, { makeVisibleToAllUsers: !0 }), null;
        }
      };
    }
    function y(t) {
      ((1 < arguments.length && void 0 !== arguments[1] && arguments[1]) ||
        Object(i.d)("errors")) &&
        console.warn(t);
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return p;
    });
    var r,
      o = n(4),
      i = ((e = n(5)), n(0));
    n = n(7);
    function a(t) {
      return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function c(t, e) {
      var n,
        r = Object.keys(t);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(t)),
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
          r.push.apply(r, n)),
        r
      );
    }
    function s(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? c(Object(n), !0).forEach(function (e) {
              u(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : c(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function u(t, e, n) {
      return (
        (e = (function (t) {
          return (
            (t = (function (t, e) {
              if ("object" !== a(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 === n) return String(t);
              if ("object" !== a((n = n.call(t, e)))) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            })(t, "string")),
            "symbol" === a(t) ? t : String(t)
          );
        })(e)) in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    function l(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return d(t);
        })(t) ||
        (function (t) {
          if (
            ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
            null != t["@@iterator"]
          )
            return Array.from(t);
        })(t) ||
        (function (t, e) {
          var n;
          if (t)
            return "string" == typeof t
              ? d(t, e)
              : "Map" ===
                  (n =
                    "Object" ===
                      (n = Object.prototype.toString.call(t).slice(8, -1)) &&
                    t.constructor
                      ? t.constructor.name
                      : n) || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? d(t, e)
              : void 0;
        })(t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function d(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    var f = {
      AAXReqs: [],
      aaxViewabilityEnabled: !1,
      bidConfigs: {},
      bidReqs: {},
      bsPixels: {},
      cfg: {
        v: -1,
        CSM_JS: "//c.amazon-adsystem.com/aax2/csm.js.gz",
        CSM_RTB_COMMUNICATOR_JS: "".concat(
          o.x,
          "c.amazon-adsystem.com/bao-csm/aps-comm/aps_csm.js"
        ),
        DEBUG_APP_HTML: "//c.amazon-adsystem.com/aax2/debugApp.html",
        DEBUG_APP_HTML_V2: "//c.amazon-adsystem.com/aax2/debug_app_v2.html",
        DEFAULT_TIMEOUT: 2e3,
        DTB_PATH: "/e/dtb",
        TEST_PATH_FREQUENCY: 0,
        TEST_BID_ENDPOINT: null,
        TEST_PATH_LATENCY_SAMPLE_RATE: null,
        PIXEL_PATH: "/x/px/",
        LATENCY_SAMPLING_RATE: 1,
        COOKIE_MATCH_DELAY: 0,
        MAX_SLOTS_PER_REQUEST: 1,
        SLOT_RENDER_SAMPLING_RATE: 1,
        FEATURE_SAMPLING_RATE: 1,
        CONFIG_CALL_ENABLED: !1,
        LIB_CONFIG_PATH: "/cdn/prod/config",
      },
      cmpFired: !1,
      config: { pubID: "" },
      displayAdServer: {
        noBidSlotIDs: [],
        shouldSampleRender: !1,
        slotRenderEndedSet: !1,
      },
      errors: [],
      eventLog: [],
      experiments: {},
      gamSlotFetchLog: [],
      gamSlotRenderPixel: { aaxReqOffset: 0, gamSlotFetchLogOffset: 0 },
      hosts: {
        DEFAULT_AAX_BID_HOST: "aax.amazon-adsystem.com",
        DEFAULT_AAX_PIXEL_HOST: "aax.amazon-adsystem.com",
        DEFAULT_CXM_HOST: "c.amazon-adsystem.com",
        DEFAULT_BS_HOST: "cxm-bcn.publisher-services.amazon.dev",
      },
      identityState: {},
      libraryLoadCallLatency: 0,
      Q: [],
      slotBids: {},
      targetingKeys: {},
      tcfParseTime: 0,
      outstream: { renderStart: 0, shouldSample: !1 },
      consentManagementPlatform: {},
    };
    function b() {
      var t =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : f,
        e = 1 < arguments.length ? arguments[1] : void 0;
      return {
        AAXReqs: (function (t, e) {
          switch (e.type) {
            case "RECORD_AAX_REQUEST":
              return [].concat(l(t), [e.data]);
            case "RECORD_AAX_REQ_PROP":
              return t.map(function (t) {
                return (
                  (t = s({}, t)).bidReqID === e.bidReqID &&
                    (t[e.key] = e.value),
                  t
                );
              });
            default:
              return l(t);
          }
        })(t.AAXReqs, e),
        aaxViewabilityEnabled: (function (t, e) {
          return "SET_VIEWABILITY" !== e.type ? t : e.viewability;
        })(t.aaxViewabilityEnabled, e),
        bidConfigs: (function (t, e) {
          return "RECORD_ORIGINAL_BID_CONFIG" !== e.type
            ? s({}, t)
            : s(s({}, t), {}, u({}, e.bidConfig.bidReqID, e.bidConfig));
        })(t.bidConfigs, e),
        bidReqs: (function (t, e) {
          var n;
          switch (e.type) {
            case "ADD_CHUNKED_REQUESTS":
              return s(
                s({}, t),
                {},
                u(
                  {},
                  e.fid,
                  s(
                    s({}, t[e.fid]),
                    {},
                    { networkReqs: new Array(e.numChunks) }
                  )
                )
              );
            case "NEW_FETCH_BID_REQUEST":
              return s(
                s({}, t),
                {},
                u({}, e.fid, {
                  pto: e.pto,
                  hasCallbackExecuted: !1,
                  networkReqs: [],
                })
              );
            case "RECORD_CALLBACK":
              return s(
                s({}, t),
                {},
                u(
                  {},
                  e.fid,
                  s(s({}, t[e.fid]), {}, { hasCallbackExecuted: !0 })
                )
              );
            case "RECORD_NETWORK_EXCHANGE":
              var r = t[e.fid].networkReqs;
              return (
                (r[e.networkID] = s(
                  s({}, r[e.networkID]),
                  {},
                  (u((n = {}), "".concat(e.exchangeType, "Time"), e.timestamp),
                  u(n, "inFlight", "request" === e.exchangeType),
                  n)
                )),
                s(
                  s({}, t),
                  {},
                  u({}, e.fid, s(s({}, t[e.fid]), {}, { networkReqs: r }))
                )
              );
            case "RECORD_TIMEOUT":
              return s(
                s({}, t),
                {},
                u(
                  {},
                  e.fid,
                  s(
                    s({}, t[e.fid]),
                    {},
                    {
                      networkReqs: t[e.fid].networkReqs.map(function (t) {
                        return t.inFlight
                          ? s(s({}, t), {}, { timeOut: e.timeOut })
                          : t;
                      }),
                    }
                  )
                )
              );
            default:
              return s({}, t);
          }
        })(t.bidReqs, e),
        bsPixels: (function (t, e) {
          return "RECORD_BID_INFO_SENT" !== e.type
            ? s({}, t)
            : s(s({}, t), {}, u({}, e.bidInfo.iid, e.bidInfo.state));
        })(t.bsPixels, e),
        cfg: (function (t, e) {
          return "SET_CFG" !== e.type ? s({}, t) : s(s({}, t), e.cfg);
        })(t.cfg, e),
        cmpFired: (function (t, e) {
          return "CMP_FIRED" === e.type || t;
        })(t.cmpFired, e),
        config: (function (t, e) {
          return "SET_CONFIG" !== e.type
            ? s({}, t)
            : s(
                s({}, e.config),
                {},
                {
                  gdpr: s({ cmpTimeout: e.defaultCmpTimeout }, e.config.gdpr),
                  isSelfServePub:
                    void 0 !== e.config.pubID && 5 <= e.config.pubID.length,
                }
              );
        })(t.config, e),
        displayAdServer: (function (t, e) {
          switch (e.type) {
            case "SLOT_RENDER_ENDED_SET":
              return s(s({}, t), {}, { slotRenderEndedSet: !0 });
            case "NO_BID_ON_ADSERVER_SLOTS":
              return s(
                s({}, t),
                {},
                { noBidSlotIDs: t.noBidSlotIDs.concat(e.slotIDs) }
              );
            case "REQUESTED_BID_FOR_ADSERVER_SLOTS":
              return s(
                s({}, t),
                {},
                {
                  noBidSlotIDs: t.noBidSlotIDs.filter(function (t) {
                    return !Object(i.h)(e.slotIDs, t);
                  }),
                }
              );
            case "SHOULD_SAMPLE_SLOT_RENDER":
              return s(s({}, t), {}, { shouldSampleRender: e.value });
            default:
              return s(s({}, t), {}, { noBidSlotIDs: l(t.noBidSlotIDs) });
          }
        })(t.displayAdServer, e),
        errors: (function (t, e) {
          return "LOG_ERROR" !== e.type
            ? l(t)
            : [].concat(l(t), [s({}, e.error)]);
        })(t.errors, e),
        eventLog: (function (t, e) {
          return "LOG_EVENT" !== e.type
            ? l(t)
            : [].concat(l(t), [s({}, e.event)]);
        })(t.eventLog, e),
        experiments: (function (t, e) {
          switch (e.type) {
            case "SHOULD_CHUNK_REQUESTS":
              return s(
                { chunkRequests: !0 === t.shouldSampleLatency && e.value },
                t
              );
            case "SHOULD_SAMPLE_LATENCY":
              return s(s({}, t), {}, { shouldSampleLatency: e.value });
            case "SHOULD_SAMPLE_FEATURES":
              return s(s({}, t), {}, { shouldSampleFeatures: e.value });
            case "SHOULD_USE_TEST_BID_ENDPOINT":
              return s(s({}, t), {}, { shouldUseTestBidEndpoint: e.value });
            default:
              return s({}, t);
          }
        })(t.experiments, e),
        gamSlotFetchLog: (function (t, e) {
          return "LOG_GAM_EVENT" !== e.type
            ? l(t)
            : [].concat(l(t), [s({}, e.event)]);
        })(t.gamSlotFetchLog, e),
        gamSlotRenderPixel: (function (t, e) {
          return "UPDATE_RENDER_OFFSETS" !== e.type
            ? s({}, t)
            : s(s({}, t), e.offsets);
        })(t.gamSlotRenderPixel, e),
        hosts: (function (t, e) {
          return "SET_HOST" !== e.type
            ? s({}, t)
            : s(s({}, t), {}, u({}, e.hostName, e.hostValue));
        })(t.hosts, e),
        identityState: (function (t, e) {
          return "RECORD_IDENTITY_STATE" !== e.type
            ? t
            : s(
                s({}, t),
                {},
                u(
                  {},
                  e.vendor,
                  Object(i.k)(t, e.vendor) ? t[e.vendor] : e.identityState
                )
              );
        })(t.identityState, e),
        libraryLoadCallLatency: (function (t, e) {
          return "RECORD_LIBRARY_LOAD_CALL_LATENCY" !== e.type ? t : e.latency;
        })(t.libraryLoadCallLatency, e),
        Q: (function (t, e) {
          return "SET_Q" !== e.type ? l(t) : l(e.Q);
        })(t.Q, e),
        slotBids: (function (t, e) {
          switch (e.type) {
            case "BID_STATE_CHANGE":
              return s(
                s({}, t),
                {},
                u(
                  {},
                  e.slotID,
                  t[e.slotID].map(function (t) {
                    return (
                      t._targetingSetID === e._targetingSetID &&
                        ((t.bidState = e.bidState),
                        e.bidState === o.c.rendered
                          ? (t.timing.renderTime = e.ts)
                          : e.bidState === o.c.set &&
                            t.timing.setAtTimes.push(e.ts)),
                      t
                    );
                  })
                )
              );
            case "UPDATE_BID_INFO_PROP":
              return void 0 === t[e.slotID] ||
                t[e.slotID].filter(function (t) {
                  return t.matchesBidCacheId(e.iid);
                }).length < 1
                ? s({}, t)
                : s(
                    s({}, t),
                    {},
                    u(
                      {},
                      e.slotID,
                      t[e.slotID].map(function (t) {
                        return (
                          t.matchesBidCacheId(e.iid) && (t[e.key] = e.value), t
                        );
                      })
                    )
                  );
            case "UPDATE_SLOT_BIDS":
              return s(
                s({}, t),
                e.bids.reduce(function (e, n) {
                  return (
                    Object(i.k)(e, n.slotID)
                      ? (e[n.slotID] = [].concat(l(e[n.slotID]), [n]))
                      : Object(i.k)(t, n.slotID)
                      ? (e[n.slotID] = [].concat(l(t[n.slotID]), [n]))
                      : (e[n.slotID] = [n]),
                    e
                  );
                }, {})
              );
            default:
              return s({}, t);
          }
        })(t.slotBids, e),
        targetingKeys: (function (t, e) {
          return "UPDATE_SLOT_BIDS" !== e.type
            ? s({}, t)
            : s(
                s({}, t),
                e.bids.reduce(function (e, n) {
                  return (
                    Object(i.k)(t, n.slotID)
                      ? (e[n.slotID] = [].concat(
                          l(t[n.slotID]),
                          l(
                            (n.bidConfig.targeting || o.i).filter(function (e) {
                              return -1 === t[n.slotID].indexOf(e);
                            })
                          )
                        ))
                      : (e[n.slotID] = n.bidConfig.targeting || o.i),
                    e
                  );
                }, {})
              );
        })(t.targetingKeys, e),
        tcfParseTime: (function (t, e) {
          return "RECORD_TCF_PARSE_TIME" !== e.type ? t : e.time;
        })(t.tcfParseTime, e),
        outstream: (function (t, e) {
          switch (e.type) {
            case "RECORD_OUTSTREAM_RENDER_START_TIME":
              return s(s({}, t), {}, { renderStart: e.time });
            case "OUTSTREAM_SHOULD_SAMPLE":
              return s(s({}, t), {}, { shouldSample: e.shouldSample });
            default:
              return t;
          }
        })(t.outstream, e),
        consentManagementPlatform: (function (t, e) {
          switch (e.type) {
            case "RECORD_CMP_LISTENED_TO":
              return s(s({}, t), {}, { isListenedTo: e.isListenedTo });
            case "RECORD_CMP_CONSENT_DATA":
              return s(s({}, t), {}, { tcData: e.tcData });
            default:
              return t;
          }
        })(t.consentManagementPlatform, e),
      };
    }
    var p = {
      getState: function () {
        return r;
      },
      dispatch: function (t) {
        r = b(r, t);
      },
    };
    (p =
      Object(n.d)("redux") &&
      Object(e.b)() &&
      Object(i.k)(window, "__REDUX_DEVTOOLS_EXTENSION__")
        ? window.__REDUX_DEVTOOLS_EXTENSION__(b)
        : p).dispatch({ type: "NOOP" });
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "f", function () {
      return p;
    }),
      n.d(e, "c", function () {
        return j;
      }),
      n.d(e, "d", function () {
        return S;
      }),
      n.d(e, "b", function () {
        return T;
      }),
      n.d(e, "a", function () {
        return _;
      }),
      n.d(e, "g", function () {
        return D;
      }),
      n.d(e, "e", function () {
        return A;
      });
    var r = n(4),
      o = n(2),
      i = n(7),
      a = n(0),
      c = n(1),
      s = n(9),
      u = n(14),
      l = n(11),
      d = [],
      f = !1,
      b = [];
    function p(t) {
      var e = new Image();
      return (e.src = t), b.push(e), e;
    }
    !0 === Object(i.c)("exposePixels") &&
      ((window.apstagPixelQueue = d), (window.apstagPixelsSent = b));
    var y,
      g = {
        adServer: [],
        ampAdContext: [],
        appended: [],
        AaxSlotSizes: [],
        bidRender: [],
        bidRenderState: [],
        bidType: [],
        "blockedBidders-fetchBids": [],
        "blockedBidders-init": [],
        ccpa: [],
        cmpVar: [],
        creativeSize: [],
        deals: [],
        fetchBids: [],
        fifFlow: [],
        customFloor: [],
        gdpr: [],
        gpp: [],
        id: [],
        idRemap: [],
        iframe: [],
        renderFootprint: [],
        resizeIframe: [],
        schain: [],
        simplerGpt: [],
        slots: [],
        slotType: [],
        targeting: [],
        tcfVar: [],
        unusedDeal: [],
        useSafeFrames: [],
        trustToken: [],
        hasLocalStorage: [],
        renderImp: [],
        configOrder: [],
      },
      m = [],
      h = !1;
    function O() {
      h && (clearTimeout(y), (h = !1)),
        Object(a.c)(m, 5).forEach(function (t) {
          T({ _type: "featureUsage", p: t, u: Object(s.g)(window) });
        }),
        (m = []);
    }
    function v() {
      h || ((h = !0), (y = setTimeout(O, 2e3)));
    }
    function j(t, e) {
      try {
        return (
          !!o.a.getState().experiments.shouldSampleFeatures &&
          void 0 !== g[t] &&
          !Object(a.h)(g[t], e) &&
          (g[t].push(e), m.push({ cat: t, feat: e }), f && v(), !0)
        );
      } catch (t) {
        return Object(c.b)(t, "sendFeaturePixel"), !1;
      }
    }
    function S() {
      try {
        var t,
          e,
          n,
          r = o.a.getState().libraryLoadCallLatency,
          i = Object(u.c)(window, new RegExp("aax2/apstag-legacy.js"));
        (null === i && 0 === r) ||
          ((t = Object(u.e)(window, "navigationStart")),
          (e = { _type: "libLatency", pid: l.b, ns: t }),
          null !== i &&
            ((e.fs = Object(u.a)(i, "fetchStart")),
            (e.re = Object(u.a)(i, "responseEnd")),
            null !== (n = Object(u.f)(i))) &&
            (e.c = n ? 1 : 0),
          0 !== r && (e.tcc = r),
          T(e));
      } catch (t) {
        Object(c.b)(t, "sendInitLatencyPixel");
      }
    }
    function w(t) {
      try {
        var e;
        return f
          ? ((e = (function () {
              try {
                var t = o.a.getState(),
                  e = t.cfg.PIXEL_PATH,
                  n = t.hosts.DEFAULT_AAX_PIXEL_HOST,
                  a = Object(i.c)("pixelHost", n);
                return "".concat(r.t).concat(a).concat(e);
              } catch (t) {
                return Object(c.b)(t, "buildPixelBaseUrl"), "";
              }
            })()),
            void 0 === t.bidId
              ? (e += "p/PH/")
              : (e += "".concat(t.bidId, "/")),
            p(
              (e += (function (t) {
                try {
                  t._tl = "aps-tag";
                  var e = o.a.getState(),
                    n = null,
                    i = "";
                  Object(a.k)(e, "config") &&
                    Object(a.k)(e.config, "pubID") &&
                    "" !== e.config.pubID &&
                    ((n = e.config.isSelfServePub), (i = e.config.pubID)),
                    null !== n &&
                      (n ? ((t.src = r.u), (t.pubid = i)) : (t.src = i)),
                    (t.lv = r.l);
                  var s = (function (t) {
                    try {
                      return t.replace(/\\.{1}/g, "");
                    } catch (t) {
                      return Object(c.b)(t, "escapeJsonForAax"), "";
                    }
                  })(JSON.stringify(t));
                  return encodeURIComponent(s);
                } catch (t) {
                  return Object(c.b)(t, "objectToUrlPath"), "";
                }
              })(t.payload))
            ))
          : (d.push(t), !1);
      } catch (t) {
        return !1;
      }
    }
    function T(t) {
      return w({ payload: t });
    }
    function _(t, e) {
      return w({ payload: e, bidId: t });
    }
    function D() {
      try {
        f || ((f = !0), d.forEach(w), 0 < m.length && v());
      } catch (t) {
        Object(c.b)(t, "sendPixels");
      }
    }
    function A(t, e) {
      var n =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
      try {
        return w({
          payload: { _type: "outstreamRender", bi: e, loc: t, lt: n },
        });
      } catch (t) {
        return Object(c.b)(t, "outstreamPixel"), !1;
      }
    }
    !0 === Object(i.c)("exposePixels") && (window.apstagFeaturePixelQueue = m);
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "n", function () {
      return a;
    }),
      n.d(e, "i", function () {
        return c;
      }),
      n.d(e, "B", function () {
        return s;
      }),
      n.d(e, "c", function () {
        return r;
      }),
      n.d(e, "h", function () {
        return u;
      }),
      n.d(e, "A", function () {
        return l;
      }),
      n.d(e, "f", function () {
        return d;
      }),
      n.d(e, "g", function () {
        return f;
      }),
      n.d(e, "d", function () {
        return b;
      }),
      n.d(e, "q", function () {
        return p;
      }),
      n.d(e, "o", function () {
        return y;
      }),
      n.d(e, "e", function () {
        return g;
      }),
      n.d(e, "z", function () {
        return m;
      }),
      n.d(e, "y", function () {
        return h;
      }),
      n.d(e, "m", function () {
        return O;
      }),
      n.d(e, "p", function () {
        return o;
      }),
      n.d(e, "w", function () {
        return v;
      }),
      n.d(e, "j", function () {
        return j;
      }),
      n.d(e, "v", function () {
        return i;
      }),
      n.d(e, "u", function () {
        return S;
      }),
      n.d(e, "l", function () {
        return w;
      }),
      n.d(e, "t", function () {
        return T;
      }),
      n.d(e, "x", function () {
        return _;
      }),
      n.d(e, "b", function () {
        return D;
      }),
      n.d(e, "k", function () {
        return A;
      }),
      n.d(e, "a", function () {
        return I;
      }),
      n.d(e, "s", function () {
        return E;
      }),
      n.d(e, "r", function () {
        return k;
      }),
      n.d(e, "D", function () {
        return P;
      }),
      n.d(e, "C", function () {
        return R;
      });
    var r,
      o,
      i,
      a = 25,
      c = ["amznbid", "amzniid", "amznsz", "amznp"],
      s = ["amznbid", "amzniid", "amznp", "r_amznbid", "r_amzniid", "r_amznp"],
      u =
        (((n = r = r || {}).new = "NEW"),
        (n.exposed = "EXPOSED"),
        (n.set = "SET"),
        (n.rendered = "RENDERED"),
        "apstagDebug"),
      l = ["redux", "fake_bids", "verbose", "console", "console_v2", "errors"],
      d = "apstagDebugHeight",
      f = "apstagDEBUG",
      b = "apstagCfg",
      p = 0,
      y = 0,
      g = "apstagCxMEnabled",
      m = "3pmetadata",
      h = 5,
      O = "apstagLiveRampTimestamp",
      v =
        (((e = o = o || {}).amznbid = "testBid"),
        (e.amzniid = "testImpression"),
        (e.amznp = "testP"),
        (e.crid = "testCrid"),
        ["amznbid", "amznp"]),
      j = new Map([
        ["__apsid", "ck"],
        ["__aps_id_p", "ckp"],
      ]),
      S =
        (((n = i = i || {}).noRequest = "0"),
        (n.bidInFlight = "1"),
        (n.noBid = "2"),
        "600"),
      w = "23.1211.1645",
      T = "",
      _ = "".concat("s://"),
      D = "".concat(T, ""),
      A =
        "function" == typeof XMLHttpRequest &&
        void 0 !== new XMLHttpRequest().withCredentials,
      I = "apstagLOADED",
      E = 13,
      k = 1e4,
      P = /^1[NY\-]{3}$/,
      R =
        '<!DOCTYPE html>\n<html>\n  <head>\n    <title>APS Video Ads</title>\n    <script src="" onerror="$$apsvidonerror$$"></script>\n  </head>\n  <body>\n    <div id="amazon-ads-container" style="height: 100%; width: 100%; position: absolute;">\n    </div>\n    <script type="text/javascript">\nconst adsContainer = document.querySelector("#amazon-ads-container")\nconst companionContainers =\n  window.AmazonVideoAds.findCompanionDivs($$apstagCompanionContainers$$)\nconst videoPlayerProps = $$videoPlayerProps$$\n\nconst amazonVideoAds = new window.AmazonVideoAds(adsContainer,\n{ ...videoPlayerProps,\n  companions: companionContainers });\nwindow.adsM;\n\nfunction addListeners(adsM, amazonVideoAds) {\n  adsM.addListener(amazonVideoAds.eventNames.AdVideoPlayerEvents.COMPLETED, (e) => {\n    window.top.postMessage({"apsVideoPlayer": true, "event": "completed"}, window.top.location.origin);\n  })\n  adsM.addListener(amazonVideoAds.eventNames.AdVideoPlayerEvents.LOADED, (e) => {\n    window.top.postMessage({"apsVideoPlayer": true, "event": "loaded"}, window.top.location.origin);\n  })\n}\n \nwindow.requestAndPlay = () => {\n  amazonVideoAds.fetchAdsFromUrl("$$apstagVastTag$$")\n    .then(adsManager => {\n      adsM = adsManager;\n \n      adsM.init({\n        fullscreen: true,\n        muted: true,\n        volume: .3,\n        autoplay: false,\n        controls: false,\n        preload: "auto"\n      })\n\n      addListeners(adsM, amazonVideoAds);\n      adsM.startAds(2000, {shouldVideoRemainAfterPlay: true});\n    })\n    .catch(function(err) {\n      console.log("apstag failed to get APS ads manager", err);\n    });\n  }\n \n  requestAndPlay();\n    </script>\n  </body>\n</html>';
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "b", function () {
      return S;
    }),
      n.d(e, "a", function () {
        return A;
      });
    var r,
      o,
      i,
      a,
      c = n(1),
      s = n(3),
      u = n(17),
      l = n(23),
      d = n(2);
    function f(t) {
      return (f =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function b(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        e &&
          (function (t, e) {
            (Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          })(t, e);
    }
    function p(t) {
      var e = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = g(t);
        (n = e
          ? ((n = g(this).constructor), Reflect.construct(r, arguments, n))
          : r.apply(this, arguments)),
          (r = this);
        if (n && ("object" === f(n) || "function" == typeof n)) return n;
        if (void 0 !== n)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return y(r);
      };
    }
    function y(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function g(t) {
      return (g = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function m(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function h(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, j(r.key), r);
      }
    }
    function O(t, e, n) {
      e && h(t.prototype, e),
        n && h(t, n),
        Object.defineProperty(t, "prototype", { writable: !1 });
    }
    function v(t, e, n) {
      (e = j(e)) in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n);
    }
    function j(t) {
      return (
        (t = (function (t, e) {
          if ("object" !== f(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 === n) return String(t);
          if ("object" !== f((n = n.call(t, e)))) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        })(t, "string")),
        "symbol" === f(t) ? t : String(t)
      );
    }
    function S() {
      try {
        var t, e, n, r;
        return (
          !(
            null == (t = window) ||
            null == (e = t.localStorage) ||
            !e.setItem ||
            null == (n = window) ||
            null == (r = n.localStorage) ||
            !r.removeItem
          ) || (Object(s.c)("hasLocalStorage", "absent"), !1)
        );
      } catch (t) {
        return Object(s.c)("hasLocalStorage", "exception"), !1;
      }
    }
    ((e = r = r || {}).sessionStorage = "sessionStorage"),
      (e.localStorage = "localStorage"),
      ((o = o || {}).document = "document"),
      ((n = i = i || {}).clear = "clear"),
      (n.getItem = "getItem"),
      (n.key = "key"),
      (n.removeItem = "removeItem"),
      (n.setItem = "setItem"),
      (n.length = "length"),
      ((a = a || {}).cookie = "cookie");
    var w = ["AMZN-NoCookieConsent"],
      T = (function () {
        function t(e, n) {
          m(this, t),
            v(this, "globalContext", void 0),
            v(this, "stateContainer", void 0),
            (this.globalContext = e),
            (this.stateContainer = n);
        }
        return (
          O(t, [
            {
              key: "privacyRegulationApplies",
              value: function () {
                var t =
                    null == (e = l.a.readStoredConsentData(this.stateContainer))
                      ? void 0
                      : e.tcString,
                  e = null == e ? void 0 : e.gdprApplies;
                return !!(
                  ("string" == typeof t && 0 < t.length) ||
                  (null != (t = this.globalContext.apstag) && t.isGDPRRegion) ||
                  e
                );
              },
            },
            {
              key: "allowedToStoreAndAccessInformationOnDevice",
              value: function () {
                if (this.privacyRegulationApplies()) {
                  var t;
                  if (
                    !(t =
                      null ==
                      (t = l.a.readStoredConsentData(this.stateContainer))
                        ? void 0
                        : t.tcString) ||
                    "string" != typeof t
                  )
                    return {
                      allowed: !1,
                      failures: ["Invalid tcString: ".concat(t)],
                    };
                  var e = Object(u.c)(t);
                  if (!e)
                    return {
                      allowed: !1,
                      failures: ["Invalid tcString: ".concat(t)],
                    };
                  if ((t = Object(u.b)(e)).length)
                    return { allowed: !1, failures: t };
                }
                return { allowed: !0, failures: [] };
              },
            },
            {
              key: "ensureStorageUsageIsAllowedOrThrowOnError",
              value: function (t, e, n) {
                var r = (o = this.allowedToStoreAndAccessInformationOnDevice())
                    .allowed,
                  o = o.failures;
                if (!(r || (n && 0 < n.length && 0 <= w.indexOf(n[0]))))
                  throw new Error(
                    "Not allowed to store or access information on device: ".concat(
                      o
                    )
                  );
                if (!(r = this.globalContext[t]))
                  throw new ReferenceError(
                    "Object ".concat(t, " isn't available")
                  );
                if (void 0 === r[e])
                  throw new ReferenceError(
                    "Method ".concat(e, " isn't available")
                  );
              },
            },
            {
              key: "executeFunction",
              value: function (t, e, n, r, o) {
                return (
                  (e = this.globalContext[e]),
                  (n = (r = r || e[n]).apply(e, t)) && null != o && o.isJson
                    ? JSON.parse(n)
                    : n
                );
              },
            },
            {
              key: "executeFunctionOrThrowOnError",
              value: function (t, e, n, r, o) {
                return (
                  this.ensureStorageUsageIsAllowedOrThrowOnError(e, n, t),
                  this.executeFunction(t, e, n, r, o)
                );
              },
            },
            {
              key: "regulatedMethod",
              value: function (t, e, n, r) {
                var o = this;
                return function () {
                  try {
                    for (
                      var i = arguments.length, a = new Array(i), s = 0;
                      s < i;
                      s++
                    )
                      a[s] = arguments[s];
                    return o.executeFunctionOrThrowOnError(a, t, e, n, r);
                  } catch (i) {
                    if (null == r || !r.ignoreFailure)
                      throw (
                        (Object(c.b)(
                          i,
                          "RegulatedDataContainer-regulatedMethod"
                        ),
                        i)
                      );
                  }
                };
              },
            },
          ]),
          t
        );
      })(),
      _ = (function () {
        b(e, T);
        var t = p(e);
        function e() {
          var n;
          m(this, e);
          for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++)
            i[c] = arguments[c];
          return (
            v(
              y((n = t.call.apply(t, [this].concat(i)))),
              "_getItem",
              function (t) {
                return (
                  n.globalContext.document.cookie
                    .split("; ")
                    .reduce(function (e, n) {
                      return (n = n.split("="))[0] === t
                        ? decodeURIComponent(n[1])
                        : e;
                    }, "") || null
                );
              }
            ),
            v(y(n), "_removeItem", function (t) {
              n._setItem(t, "", 0);
            }),
            v(y(n), "_setItem", function (t, e, r) {
              var o =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : "/";
              r = new Date(r);
              if (!n.isValidDate(r)) throw new Error("Invalid expiration date");
              n.globalContext.document.cookie = ""
                .concat(t, "=")
                .concat(e, "; expires=")
                .concat(r.toUTCString(), "; path=")
                .concat(o, ";");
            }),
            v(y(n), "getItem", function (t, e) {
              return n.regulatedMethod(o.document, a.cookie, n._getItem, e)(t);
            }),
            v(y(n), "setItem", function (t, e, r) {
              var i =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : "/";
              return n.regulatedMethod(
                o.document,
                a.cookie,
                n._setItem,
                4 < arguments.length ? arguments[4] : void 0
              )(t, e, r, i);
            }),
            v(y(n), "removeItem", function (t, e) {
              return n.regulatedMethod(
                o.document,
                a.cookie,
                n._removeItem,
                e
              )(t);
            }),
            n
          );
        }
        return (
          O(e, [
            {
              key: "isValidDate",
              value: function (t) {
                return t instanceof Date && !isNaN(t);
              },
            },
          ]),
          e
        );
      })(),
      D = (function () {
        b(e, T);
        var t = p(e);
        function e(n, r, o) {
          var a;
          return (
            m(this, e),
            v(y((a = t.call(this, n, r))), "storageType", void 0),
            v(y(a), "clear", function (t) {
              return a.regulatedMethod(a.storageType, i.clear, null, t)();
            }),
            v(y(a), "getItem", function (t, e) {
              return a.regulatedMethod(a.storageType, i.getItem, null, e)(t);
            }),
            v(y(a), "key", function (t, e) {
              return a.regulatedMethod(a.storageType, i.key, null, e)(t);
            }),
            v(y(a), "removeItem", function (t, e) {
              return a.regulatedMethod(a.storageType, i.removeItem, null, e)(t);
            }),
            v(y(a), "setItem", function (t, e, n) {
              return a.regulatedMethod(a.storageType, i.setItem, null, n)(t, e);
            }),
            (a.storageType = o),
            a
          );
        }
        return (
          O(e, [
            {
              key: "length",
              get: function () {
                return (
                  this.ensureStorageUsageIsAllowedOrThrowOnError(
                    this.storageType,
                    i.length
                  ),
                  this.globalContext[this.storageType].length
                );
              },
            },
          ]),
          e
        );
      })(),
      A = (function () {
        function t(e) {
          m(this, t),
            v(this, "globalContext", void 0),
            v(this, "stateContainer", void 0),
            (this.globalContext = e.globalContext),
            (this.stateContainer = e.stateContainer);
        }
        return (
          O(
            t,
            [
              {
                key: "sessionStorage",
                get: function () {
                  try {
                    return new D(
                      this.globalContext,
                      this.stateContainer,
                      r.sessionStorage
                    );
                  } catch (t) {
                    throw (
                      (Object(c.b)(t, "RegulatedDataContainers-sessionStorage"),
                      t)
                    );
                  }
                },
              },
              {
                key: "localStorage",
                get: function () {
                  try {
                    return new D(
                      this.globalContext,
                      this.stateContainer,
                      r.localStorage
                    );
                  } catch (t) {
                    throw (
                      (Object(c.b)(t, "RegulatedDataContainers-localStorage"),
                      t)
                    );
                  }
                },
              },
              {
                key: "cookie",
                get: function () {
                  try {
                    return new _(this.globalContext, this.stateContainer);
                  } catch (t) {
                    throw (Object(c.b)(t, "RegulatedDataContainers-cookie"), t);
                  }
                },
              },
              {
                key: "indexedDB",
                get: function () {
                  throw new ReferenceError("Interface isn't yet defined");
                },
              },
              {
                key: "allowedToStoreAndAccessInformationOnDevice",
                value: function () {
                  try {
                    return new T(
                      this.globalContext,
                      this.stateContainer
                    ).allowedToStoreAndAccessInformationOnDevice().allowed;
                  } catch (t) {
                    return (
                      Object(c.b)(
                        t,
                        "RegulatedDataContainers-allowedToStoreAndAccessInformationOnDevice"
                      ),
                      !1
                    );
                  }
                },
              },
            ],
            [
              {
                key: "getDefault",
                value: function () {
                  return new t({ globalContext: window, stateContainer: d.a });
                },
              },
            ]
          ),
          t
        );
      })();
  },
  function (t, e, n) {
    "use strict";
    var r, o;
    function i(t) {
      return void 0 !== t.amzniid;
    }
    function a(t) {
      return void 0 !== t.kvMap;
    }
    n.d(e, "a", function () {
      return r;
    }),
      n.d(e, "b", function () {
        return o;
      }),
      n.d(e, "d", function () {
        return i;
      }),
      n.d(e, "c", function () {
        return a;
      }),
      ((n = r = r || {}).DISPLAY = "display"),
      (n.VIDEO = "video"),
      (n.MULTI_FORMAT = "multi-format"),
      ((e = o = o || {}).MANAGED_WEB = "mw"),
      (e.SELF_SERVE_WEB = "ssw");
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return d;
    }),
      n.d(e, "b", function () {
        return m;
      }),
      n.d(e, "d", function () {
        return _;
      }),
      n.d(e, "c", function () {
        return A;
      }),
      n.d(e, "e", function () {
        return E;
      });
    var r = n(2),
      o = n(5),
      i = n(0),
      a = n(4),
      c = n(10),
      s = n(3),
      u = n(1),
      l = ["getLog", "getState"];
    function d(t, e, n) {
      try {
        switch (
          (Object(i.h)(l, t) &&
            (Object(u.b)(
              new Error("Debug call made: ".concat(t)),
              "debugPublicApi-call-".concat(t)
            ),
            (l = l.filter(function (e) {
              return e !== t;
            }))),
          t)
        ) {
          case "getLog":
            return r.a.getState().eventLog;
          case "getState":
            return r.a.getState();
          case "enable":
            return D("fake_bids", !0), "DEBUG MODE ENABLED";
          case "disable":
            return D("fake_bids", !1), "DEBUG MODE DISABLED";
          case "enableConsole":
            return m(!1, "command"), "Debug console enabled";
          case "enableConsoleV2":
            return m(!0, "command"), "Debug console v2 enabled";
          case "disableConsole":
            try {
              D("console", !1),
                D("console_v2", !1),
                null !== f && document.body.removeChild(f),
                (g = !1),
                Object(o.b)() && o.a.getDefault().localStorage.removeItem(a.f);
            } catch (e) {
              Object(u.b)(e, "disableDebugConsole", {
                makeVisibleToAllUsers: !0,
              });
            }
            return "Debug console disabled";
          case "setDebug":
            return (D(e, n) ? "Set debug mode '" : "Failed to set debug mode '")
              .concat(e, "' to '")
              .concat(n, "'");
          default:
            return "unknown debug argument";
        }
      } catch (e) {
        return (
          Object(u.b)(e, "debugPublicApi", { makeVisibleToAllUsers: !0 }),
          "error"
        );
      }
    }
    var f,
      b,
      p,
      y,
      g = !1;
    function m() {
      var t,
        e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
        n = 1 < arguments.length ? arguments[1] : void 0;
      try {
        D(e ? "console_v2" : "console", !0),
          g ||
            ((t = {
              url: e
                ? r.a.getState().cfg.DEBUG_APP_HTML_V2
                : r.a.getState().cfg.DEBUG_APP_HTML,
              onload: h,
              onerror: function () {
                return Object(u.b)(
                  new Error("Error Loading Debug Console"),
                  "enableDebugConsole-".concat(e ? "v2" : "v1", "-onerror"),
                  { makeVisibleToAllUsers: !0 }
                );
              },
            }),
            Object(c.d)(t),
            setTimeout(function () {
              try {
                var t = { _type: "debugLoad", mode: e ? 2 : 1 };
                Object(i.k)(r.a.getState().config, "pubID") &&
                  (t.src = r.a.getState().config.pubID),
                  null !== n && (t.method = n),
                  Object(s.b)(t);
              } catch (t) {
                Object(u.b)(t, "enableDebugConsole-setTimeout", {
                  makeVisibleToAllUsers: !0,
                });
              }
            }, 5e3));
      } catch (t) {
        Object(u.b)(t, "enableDebugConsole", { makeVisibleToAllUsers: !0 });
      }
    }
    function h(t) {
      try {
        var e = t.responseText,
          n =
            ((f = document.createElement("div")),
            (b = document.createElement("div")),
            (p = document.createElement("iframe")),
            200);
        _("console_v2") && (n = 330),
          Object(o.b)() &&
            null !== o.a.getDefault().localStorage.getItem(a.f) &&
            (n = parseInt(o.a.getDefault().localStorage.getItem(a.f), 10)),
          (isNaN(n) || n > window.innerHeight) && (n = 200),
          (f.style.background = "#eaeded"),
          (f.style.zIndex = "2147483647"),
          (f.style.bottom = "0"),
          (f.style.position = "fixed !important"),
          (f.style.display = "block !important"),
          (f.style.left = "0"),
          (f.style.right = "0"),
          (f.style.height = "".concat(n, "px")),
          (b.style.cursor = "row-resize"),
          (b.style.height = "2px"),
          (b.style.position = "absolute"),
          (b.style.top = "0"),
          (b.style.left = "0"),
          (b.style.right = "0"),
          (b.style.backgroundColor = "RGBA(0,0,0,0)"),
          f.appendChild(b),
          (p.frameBorder = "0"),
          (p.marginHeight = "0"),
          (p.marginWidth = "0"),
          (p.scrolling = "no"),
          (p.id = "apstag-debug-iframe"),
          (p.src = "about:blank"),
          (p.style.display = "block"),
          (p.style.width = "100%"),
          (p.style.height = "".concat(n, "px")),
          f.appendChild(p),
          document.body.appendChild(f),
          null !== p.contentDocument &&
            (p.contentDocument.open(),
            p.contentDocument.write(e),
            p.contentDocument.close()),
          b.addEventListener("mousedown", j);
      } catch (t) {
        Object(u.b)(t, "renderDebugConsole", { makeVisibleToAllUsers: !0 });
      }
    }
    function O(t) {
      try {
        var e = window.innerHeight - t.clientY;
        return (
          e < 200 && (e = 200),
          (f.style.height = "".concat(e, "px")),
          (p.style.height = "".concat(e, "px")),
          e
        );
      } catch (t) {
        return (
          Object(u.b)(t, "resizeDebugConsole", { makeVisibleToAllUsers: !0 }),
          200
        );
      }
    }
    function v(t) {
      try {
        return (
          t.stopPropagation && t.stopPropagation(),
          t.preventDefault && t.preventDefault(),
          (t.cancelBubble = !0),
          (t.returnValue = !1)
        );
      } catch (t) {
        return (
          Object(u.b)(t, "preventEvent", { makeVisibleToAllUsers: !0 }), !1
        );
      }
    }
    function j() {
      try {
        void 0 === y &&
          (((y = document.createElement("div")).style.position = "fixed"),
          (y.style.left = "0"),
          (y.style.right = "0"),
          (y.style.top = "0"),
          (y.style.bottom = "0"),
          (y.style.zIndex = "9999999999")),
          f.appendChild(y),
          window.addEventListener("mouseup", w),
          window.addEventListener("mousemove", S);
      } catch (t) {
        Object(u.b)(t, "resizeBarMouseDownListener", {
          makeVisibleToAllUsers: !0,
        });
      }
    }
    function S(t) {
      try {
        return O(t), v(t);
      } catch (t) {
        return (
          Object(u.b)(t, "resizeBarMouseMoveListener", {
            makeVisibleToAllUsers: !0,
          }),
          !1
        );
      }
    }
    function w(t) {
      try {
        null !== y && f.removeChild(y),
          window.removeEventListener("mousemove", S),
          window.removeEventListener("mouseup", w);
        var e = O(t);
        return (
          Object(o.b)() &&
            o.a.getDefault().localStorage.setItem(a.f, "".concat(e)),
          v(t)
        );
      } catch (t) {
        return (
          Object(u.b)(t, "resizeBarMouseUpListener", {
            makeVisibleToAllUsers: !0,
          }),
          !1
        );
      }
    }
    function T() {
      try {
        if (!Object(o.b)()) return [];
        var t = o.a
            .getDefault()
            .localStorage.getItem(a.h, { ignoreFailure: !0 }),
          e =
            (null === t || "false" === t
              ? (t = "[]")
              : "true" === t && (t = '["fake_bids"]'),
            []);
        try {
          e = JSON.parse(t);
        } catch (t) {}
        return (e = Object(i.i)(e) ? e : []).filter(function (t) {
          return Object(i.h)(a.A, t);
        });
      } catch (t) {
        return [];
      }
    }
    function _(t) {
      try {
        return Object(i.h)(T(), t);
      } catch (t) {
        return !1;
      }
    }
    function D(t, e) {
      try {
        var n;
        if (Object(o.b)() && -1 !== a.A.indexOf(t))
          return (
            (n = T()),
            e && -1 === n.indexOf(t)
              ? n.push(t)
              : e ||
                (n = n.filter(function (e) {
                  return e !== t;
                })),
            0 === n.length
              ? o.a.getDefault().localStorage.removeItem(a.h)
              : o.a.getDefault().localStorage.setItem(a.h, JSON.stringify(n)),
            E(),
            1
          );
      } catch (e) {
        Object(u.b)(e, "setDebugMode");
      }
    }
    function A(t) {
      var e =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
      try {
        if (Object(i.k)(window, a.g) && Object(i.k)(window[a.g], t))
          return window[a.g][t];
      } catch (t) {
        Object(u.b)(t, "getDebugValue");
      }
      return e;
    }
    var I = [];
    function E() {
      try {
        T()
          .filter(function (t) {
            return -1 === I.indexOf(t);
          })
          .forEach(function (t) {
            Object(u.b)(
              new Error("Debug method enabled: ".concat(t)),
              "debugPublicApi-enabled-".concat(t),
              { makeVisibleToAllUsers: !0 }
            ),
              I.push(t);
          });
      } catch (t) {
        Object(u.b)(t, "pixelDebugModes");
      }
    }
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function o(t, e) {
      var n,
        r = Object.keys(t);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(t)),
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
          r.push.apply(r, n)),
        r
      );
    }
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, c(r.key), r);
      }
    }
    function a(t, e, n) {
      (e = c(e)) in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n);
    }
    function c(t) {
      return (
        (t = (function (t, e) {
          if ("object" !== r(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 === n) return String(t);
          if ("object" !== r((n = n.call(t, e)))) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        })(t, "string")),
        "symbol" === r(t) ? t : String(t)
      );
    }
    n.d(e, "a", function () {
      return l;
    });
    var s = (function () {
        function t(e) {
          if (((e = e.accountID), !(this instanceof t)))
            throw new TypeError("Cannot call a class as a function");
          a(this, "accountID", void 0), (this.accountID = e), this.init();
        }
        var e, n;
        return (
          (e = t),
          (n = [
            {
              key: "queue",
              get: function () {
                var t;
                return null == (t = window._aps.get(this.accountID))
                  ? void 0
                  : t.queue;
              },
            },
            {
              key: "init",
              value: function () {
                (window._aps = window._aps || new Map()),
                  window._aps.has(this.accountID) ||
                    window._aps.set(this.accountID, {
                      queue: [],
                      store: new Map(),
                    });
              },
            },
            {
              key: "record",
              value: function (t, e) {
                var n = this;
                return new Promise(function (r, i) {
                  window._aps.get(n.accountID).queue.push(
                    new window.CustomEvent(t, {
                      detail: (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                          var n = null != arguments[e] ? arguments[e] : {};
                          e % 2
                            ? o(Object(n), !0).forEach(function (e) {
                                a(t, e, n[e]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                t,
                                Object.getOwnPropertyDescriptors(n)
                              )
                            : o(Object(n)).forEach(function (e) {
                                Object.defineProperty(
                                  t,
                                  e,
                                  Object.getOwnPropertyDescriptor(n, e)
                                );
                              });
                        }
                        return t;
                      })({ resolve: r, reject: i, source: "apstag" }, e),
                    })
                  );
                });
              },
            },
            {
              key: "read",
              value: function (t) {
                var e =
                  null == (e = window._aps)
                    ? void 0
                    : e.get(this.accountID).store.get(t);
                try {
                  this.record("_legacy/store/didRead", {
                    name: t,
                    value: structuredClone
                      ? structuredClone(e)
                      : "missing structuredClone",
                  }).catch(function () {});
                } catch (t) {}
                return e;
              },
            },
          ]) && i(e.prototype, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t
        );
      })(),
      u = {},
      l = function (t) {
        return (
          "string" != typeof t && (t = t.toString()),
          (window._aps && window._aps.has(t) && u[t]) ||
            (u[t] = new s({ accountID: t })),
          u[t]
        );
      };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "c", function () {
      return f;
    }),
      n.d(e, "j", function () {
        return b;
      }),
      n.d(e, "g", function () {
        return p;
      }),
      n.d(e, "h", function () {
        return y;
      }),
      n.d(e, "d", function () {
        return g;
      }),
      n.d(e, "e", function () {
        return m;
      }),
      n.d(e, "f", function () {
        return h;
      }),
      n.d(e, "i", function () {
        return v;
      }),
      n.d(e, "b", function () {
        return j;
      }),
      n.d(e, "a", function () {
        return S;
      }),
      n.d(e, "k", function () {
        return w;
      });
    var r = n(7),
      o = n(0),
      i = n(5),
      a = n(1),
      c = n(4),
      s = n(2),
      u = n(3),
      l = n(16);
    function d(t) {
      return (d =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function f(t) {
      try {
        return t.split("_").pop();
      } catch (t) {
        return Object(a.b)(t, "getAmpAmznBidValue"), "";
      }
    }
    function b(t) {
      try {
        return !Object(o.k)(t, "slots");
      } catch (t) {
        return Object(a.b)(t, "isAAXPunt"), !0;
      }
    }
    function p(t) {
      try {
        var e,
          n = Object(r.c)("url");
        if (null !== n) return encodeURIComponent(n);
        try {
          w(t, !1)
            ? (Object(u.c)("ampAdContext", "getCurrentUrl"),
              (e = null),
              t.context && (e = t.context.canonicalUrl || t.context.sourceUrl))
            : (e = t.top.location.href);
        } catch (t) {
          e = null;
        }
        if (null === e || !e || void 0 === e) {
          e = "";
          try {
            t.top !== t.self && (e = t.document.referrer);
          } catch (t) {}
        }
        return encodeURIComponent(e);
      } catch (t) {
        return Object(a.b)(t, "getCurrentUrl"), "";
      }
    }
    function y(t) {
      try {
        var e,
          n = "",
          o = Object(r.c)("url");
        if (null !== o) return encodeURIComponent(o);
        try {
          try {
            e = (
              (w(t, !1) &&
                (Object(u.c)("ampAdContext", "getReferrerUrl"), t.context)) ||
              t.top.document
            ).referrer;
          } catch (n) {
            e = t.document.referrer;
          }
          n = encodeURIComponent(e);
        } catch (n) {}
        return n;
      } catch (n) {
        return Object(a.b)(n, "getReferrerUrl"), "";
      }
    }
    function g() {
      try {
        var t = { cookiesParams: "" };
        return (
          c.j.forEach(function (e, n) {
            (n = i.a.getDefault().cookie.getItem(n)) &&
              (t.cookiesParams += "&".concat(e, "=").concat(n));
          }),
          t
        );
      } catch (t) {
        return Object(a.b)(t, "getApsFirstPartyCookies"), { cookiesParams: "" };
      }
    }
    function m(t, e) {
      try {
        var n = Object(l._getInitConfig)({
            overrides: null == e ? void 0 : e.initConfig,
          }).blockedBidders,
          r =
            (Object(o.k)(t, "blockedBidders") &&
              Object(o.i)(t.blockedBidders) &&
              (n = t.blockedBidders),
            "");
        return Object(o.i)(n) ? JSON.stringify(n) : r;
      } catch (t) {
        return (
          Object(a.b)(t, "getBlockedBidders", { makeVisibleToAllUsers: !0 }), ""
        );
      }
    }
    function h() {
      try {
        var t;
        return Object(i.b)()
          ? ((t = s.a.getState()),
            Object(o.k)(t, "cfg") && Object(o.k)(t.cfg, "v") && -1 !== t.cfg.v
              ? t.cfg.v
              : null)
          : c.q;
      } catch (t) {
        return Object(a.b)(t, "getCfgVersion"), null;
      }
    }
    function O(t) {
      try {
        if (-1 === ["string", "number"].indexOf(d(t))) return !1;
        var e = Math.floor(Number(t));
        if (e > c.o) return e;
      } catch (t) {
        Object(a.b)(t, "parseTimeout", { makeVisibleToAllUsers: !0 });
      }
      return !1;
    }
    function v(t, e) {
      try {
        var n = O(t.timeout);
        return !1 === (n = !1 === n ? O(e.config.bidTimeout) : n)
          ? O(e.cfg.DEFAULT_TIMEOUT)
          : n;
      } catch (t) {
        return Object(a.b)(t, "getTimeout", { makeVisibleToAllUsers: !0 }), 2e3;
      }
    }
    function j(t, e) {
      var n,
        r = !1;
      function o(e) {
        if (!r)
          try {
            t(e);
          } catch (e) {
            Object(a.b)(e, "executeFunctionOnceWithTimeout-wrappedFunction", {
              makeVisibleToAllUsers: !0,
            });
          }
        clearTimeout(n), (r = !0);
      }
      try {
        return (n = setTimeout(o, e, !0)), o.bind(null, !1);
      } catch (e) {
        return (
          Object(a.b)(e, "executeFunctionOnceWithTimeout", {
            makeVisibleToAllUsers: !0,
          }),
          function () {}
        );
      }
    }
    function S(t) {
      var e = !1;
      return function (n) {
        if (!e)
          try {
            t(n);
          } catch (n) {
            Object(a.b)(n, "executeFunctionOnceWithTimeout-wrappedFunction", {
              makeVisibleToAllUsers: !0,
            });
          }
        e = !0;
      };
    }
    function w(t, e) {
      try {
        var n = e ? t.AMP_CONTEXT_DATA : t.context;
        return Boolean(
          n && Object(o.k)(n, "tagName") && "AMP-AD" === n.tagName
        );
      } catch (t) {
        return Object(a.b)(t, "isInAmpAd"), !1;
      }
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "d", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return a;
      }),
      n.d(e, "a", function () {
        return c;
      }),
      n.d(e, "c", function () {
        return s;
      });
    var r = n(1);
    function o(t) {
      return (o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function i(t) {
      var e,
        n = t.url,
        i = t.onload,
        a = t.onerror,
        c = t.ontimeout,
        s = t.withCredentials,
        u = void 0 === (u = t.body) ? null : u,
        l = void 0 === (e = t.headers) ? null : e,
        d =
          ((t = void 0 === (e = t.trustTokenParameter) ? null : e),
          new window.XMLHttpRequest());
      try {
        if ("" === n) void 0 !== a && a.call(d, "error");
        else {
          (d.onload = i.bind(null, d)),
            void 0 !== a && (d.onerror = a),
            void 0 !== c && (d.ontimeout = c),
            void 0 !== s && (d.withCredentials = s);
          var f = null !== u ? "POST" : "GET";
          d.open(f, n),
            null !== l &&
              "object" === o(l) &&
              Object.keys(l).forEach(function (t) {
                d.setRequestHeader(t, l[t]);
              });
          try {
            null !== t &&
              "object" === o(t) &&
              window.location === window.parent.location &&
              d.setTrustToken(t);
          } catch (t) {
            Object(r.b)(t, "setTrustToken");
          }
          d.send(u);
        }
      } catch (t) {
        void 0 !== a && a.call(d, "error"), Object(r.b)(t, "xhrRequest");
      }
    }
    function a(t, e, n, o) {
      try {
        if ((void 0 === n && (n = document), void 0 === t))
          return "function" == typeof e && e(!0), !1;
        var i = n.getElementsByTagName("script")[0] || n.body.firstChild,
          a = n.createElement("script");
        if (
          ((a.type = "text/javascript"),
          (a.async = !0),
          (a.src = t),
          e && c(a, e),
          c(
            a,
            o ||
              function () {
                Object(r.b)(
                  new Error("Error Loading Script Tag"),
                  "loadScriptTag-onerror"
                );
              },
            [],
            "onerror"
          ),
          null !== i.parentNode)
        )
          return i.parentNode.insertBefore(a, i), !0;
      } catch (t) {
        Object(r.b)(t, "loadScriptTag", { makeVisibleToAllUsers: !0 });
      }
      return !1;
    }
    function c(t, e) {
      var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [],
        o =
          3 < arguments.length && void 0 !== arguments[3]
            ? arguments[3]
            : "onload";
      try {
        return (
          "function" == typeof e &&
          ((t[o] = function () {
            e.apply(null, n);
          }),
          !0)
        );
      } catch (t) {
        return Object(r.b)(t, "addCallbackFunction"), !1;
      }
    }
    function s(t) {
      try {
        return encodeURIComponent(JSON.stringify(t));
      } catch (t) {
        return Object(r.b)(t, "objToUrlParam"), "";
      }
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return E;
    }),
      n.d(e, "b", function () {
        return k;
      }),
      n.d(e, "h", function () {
        return R;
      }),
      n.d(e, "d", function () {
        return C;
      }),
      n.d(e, "g", function () {
        return z;
      }),
      n.d(e, "c", function () {
        return x;
      }),
      n.d(e, "f", function () {
        return M;
      }),
      n.d(e, "e", function () {
        return L;
      });
    var r = n(2),
      o = n(7),
      i = n(4),
      a = n(0),
      c = n(10),
      s = n(1),
      u = n(9),
      l = n(13),
      d = n(6),
      f = n(20),
      b = n(3),
      p = n(12),
      y = n(15),
      g = n(28),
      m = n(16),
      h = n(8);
    function O(t) {
      return (O =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function v(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return _(t);
        })(t) ||
        (function (t) {
          if (
            ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
            null != t["@@iterator"]
          )
            return Array.from(t);
        })(t) ||
        T(t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function j(t, e) {
      var n,
        r = Object.keys(t);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(t)),
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
          r.push.apply(r, n)),
        r
      );
    }
    function S(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? j(Object(n), !0).forEach(function (e) {
              A(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : j(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function w(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var n =
            null == t
              ? null
              : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
          if (null != n) {
            var r,
              o,
              i,
              a,
              c = [],
              s = !0,
              u = !1;
            try {
              if (((i = (n = n.call(t)).next), 0 === e)) {
                if (Object(n) !== n) return;
                s = !1;
              } else
                for (
                  ;
                  !(s = (r = i.call(n)).done) &&
                  (c.push(r.value), c.length !== e);
                  s = !0
                );
            } catch (t) {
              (u = !0), (o = t);
            } finally {
              try {
                if (
                  !s &&
                  null != n.return &&
                  ((a = n.return()), Object(a) !== a)
                )
                  return;
              } finally {
                if (u) throw o;
              }
            }
            return c;
          }
        })(t, e) ||
        T(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function T(t, e) {
      var n;
      if (t)
        return "string" == typeof t
          ? _(t, e)
          : "Map" ===
              (n =
                "Object" ===
                  (n = Object.prototype.toString.call(t).slice(8, -1)) &&
                t.constructor
                  ? t.constructor.name
                  : n) || "Set" === n
          ? Array.from(t)
          : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? _(t, e)
          : void 0;
    }
    function _(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    function D(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, I(r.key), r);
      }
    }
    function A(t, e, n) {
      (e = I(e)) in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n);
    }
    function I(t) {
      return (
        (t = (function (t, e) {
          if ("object" !== O(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 === n) return String(t);
          if ("object" !== O((n = n.call(t, e)))) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        })(t, "string")),
        "symbol" === O(t) ? t : String(t)
      );
    }
    var E = (function () {
        function t(e) {
          if (!(this instanceof t))
            throw new TypeError("Cannot call a class as a function");
          A(this, "bidConfig", void 0),
            A(this, "bidState", i.c.new),
            A(this, "_targetingSetID", void 0),
            A(this, "timing", { setAtTimes: [] }),
            A(this, "pixelSent", !1),
            A(this, "useSafeFrames", !1),
            A(this, "bidReqID", ""),
            A(this, "host", void 0),
            A(this, "ev", void 0),
            A(this, "cfe", void 0),
            A(this, "isAmp", !1),
            A(this, "doc", void 0),
            A(this, "inheritSize", void 0),
            (this.bidConfig = e),
            (this._targetingSetID = Object(a.d)()),
            r.a.getState().config.useSafeFrames && (this.useSafeFrames = !0),
            this.useSafeFrames &&
              Object(a.k)(e, "targeting") &&
              e.targeting.push("amznhost"),
            Object(a.k)(e, "meta")
              ? Object(a.i)(e.meta) ||
                (this.reportError(
                  {
                    name: "TypeError",
                    message: "'meta' is not an 'array': ".concat(
                      JSON.stringify(e.meta)
                    ),
                  },
                  "constructor-meta"
                ),
                (e.meta = []))
              : (e.meta = []);
          try {
            var n = "d",
              o =
                ((this.bidConfig.mediaType !== d.a.VIDEO &&
                  "v" !== this.bidConfig.mediaType) ||
                  (n = "v"),
                []);
            Object(a.k)(this.bidConfig, "amzndeals") &&
              (Object(b.c)("bidType", "".concat(n, "-amzndeals")),
              (o = this.bidConfig.amzndeals.map(function (t) {
                return "".concat(t, "amzniid");
              }))),
              this.bidConfig.targeting
                .filter(function (t) {
                  return -1 !== t.indexOf("amzniid") && !Object(a.h)(o, t);
                })
                .forEach(function (t) {
                  return Object(b.c)("bidType", "".concat(n, "-").concat(t));
                }),
              Object(a.k)(this.bidConfig, "fif") && "1" === this.bidConfig.fif
                ? Object(b.c)("bidRender", "friendly")
                : Object(b.c)("bidRender", "unfriendly");
          } catch (e) {
            this.reportError(e, "pixeling");
          }
        }
        var e, n;
        return (
          (e = t),
          (n = [
            {
              key: "reportError",
              value: function (t, e, n) {
                Object(s.b)(t, "Bid-".concat(e), n);
              },
            },
            {
              key: "mediaType",
              get: function () {
                var t = "d";
                return this.bidConfig.mediaType !== d.a.VIDEO &&
                  "v" !== this.bidConfig.mediaType &&
                  "v" !== this.bidConfig.mediaType_sp
                  ? t
                  : d.a.VIDEO;
              },
            },
            {
              key: "targeting",
              get: function () {
                var t = this;
                try {
                  return this.bidConfig.targeting
                    .map(function (e) {
                      return "amznhost" === e
                        ? [e, encodeURIComponent(t.host)]
                        : Object(a.k)(t.bidConfig, e) &&
                          Object(a.i)(t.bidConfig[e])
                        ? [e, encodeURIComponent(t.bidConfig[e].join(","))]
                        : Object(a.k)(t.bidConfig, e)
                        ? [e, encodeURIComponent(t.bidConfig[e])]
                        : [e, ""];
                    })
                    .map(function (t) {
                      var e = (t = w(t, 2))[0];
                      t = t[1];
                      return "&".concat(e, "=").concat(t);
                    })
                    .join("");
                } catch (t) {
                  return this.reportError(t, "targeting"), "";
                }
              },
            },
            {
              key: "bidObject",
              get: function () {
                try {
                  var t = {
                    slotID: this.bidConfig.slotID,
                    amzniid: this.bidConfig.amzniid,
                    amznbid: this.bidConfig.amznbid,
                    amznp: this.bidConfig.amznp,
                    amznsz: this.bidConfig.amznsz,
                    size: this.bidConfig.amznsz,
                  };
                  return (
                    this.bidConfig.amznactt &&
                      (t.amznactt = this.bidConfig.amznactt),
                    Object(a.k)(this.bidConfig, "amznadm") &&
                      (t.amznadm = this.bidConfig.amznadm),
                    this.mediaType === d.a.VIDEO &&
                      ((t.mediaType = d.a.VIDEO),
                      (t.qsParams = this.targeting),
                      (t.encodedQsParams = encodeURIComponent(this.targeting)),
                      (t.r_amznbid = this.bidConfig.r_amznbid),
                      (t.r_amzniid = this.bidConfig.r_amzniid),
                      (t.r_amznp = this.bidConfig.r_amznp)),
                    this.useSafeFrames && (t.amznhost = this.host),
                    t
                  );
                } catch (t) {
                  return (
                    this.reportError(t, "bidObject", {
                      makeVisibleToAllUsers: !0,
                    }),
                    {
                      slotID: "",
                      amzniid: "error",
                      amznbid: "error",
                      amznp: "error",
                      amznsz: "error",
                      size: "error",
                    }
                  );
                }
              },
            },
            {
              key: "newBidObject",
              get: function () {
                var t = this;
                try {
                  var e = {
                      slotID: this.bidConfig.slotID,
                      size: this.bidConfig.amznsz,
                      mediaType: this.mediaType,
                      targeting: {},
                      helpers: {
                        targetingKeys: this.bidConfig.targeting,
                        qsParams: function () {
                          return t.targeting;
                        },
                        encodedQsParams: function () {
                          return encodeURIComponent(t.targeting);
                        },
                      },
                    },
                    n = ["slotID", "size", "mediaType"];
                  return (
                    this.bidConfig.meta
                      .filter(function (t) {
                        return -1 === n.indexOf(t);
                      })
                      .forEach(function (n) {
                        e[n] = t.bidConfig[n];
                      }),
                    this.bidConfig.targeting.forEach(function (n) {
                      e.targeting[n] =
                        "amznhost" === n ? t.host : t.bidConfig[n];
                    }),
                    void 0 !== this.slotID &&
                      -1 !== this.slotID.indexOf("_") &&
                      (e.sasTargeting = e.helpers.targetingKeys
                        .map(function (n) {
                          return ""
                            .concat(n, "_")
                            .concat(t.slotID.split("_")[1], "=")
                            .concat(e.targeting[n]);
                        })
                        .join(";")),
                    e
                  );
                } catch (t) {
                  return (
                    this.reportError(t, "newBidObject", {
                      makeVisibleToAllUsers: !0,
                    }),
                    {
                      slotID: "",
                      size: "",
                      mediaType: "d",
                      targeting: {},
                      helpers: {
                        targetingKeys: [],
                        qsParams: function () {
                          return "";
                        },
                        encodedQsParams: function () {
                          return "";
                        },
                      },
                    }
                  );
                }
              },
            },
            {
              key: "slotID",
              get: function () {
                try {
                  return this.bidConfig.slotID;
                } catch (t) {
                  return this.reportError(t, "slotID"), "";
                }
              },
            },
            {
              key: "matchesBidCacheId",
              value: function (t) {
                var e = this;
                try {
                  return this.bidConfig.targeting.reduce(function (n, r) {
                    return (
                      n || (-1 !== r.indexOf("amzniid") && e.bidConfig[r] === t)
                    );
                  }, !1);
                } catch (t) {
                  return this.reportError(t, "matchesBidCacheId"), !1;
                }
              },
            },
          ]) && D(e.prototype, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t
        );
      })(),
      k = Object(a.e)(i.s);
    function P(t, e, n) {
      try {
        var r = Object(a.j)(t.config.params) ? t.config.params : {},
          o = Object(a.j)(e.params) ? e.params : {},
          i =
            "string" == typeof n
              ? (function (t) {
                  if ((t = Object(h.a)(t).read("deviceSignal/sua")))
                    try {
                      return { device: { sua: JSON.parse(t) } };
                    } catch (t) {
                      Object(s.b)(t, "getDeviceNode");
                    }
                  return {};
                })(n)
              : {},
          u = S(S(S({}, r), o), i);
        return 0 === Object.keys(u).length ? "" : Object(c.c)(u);
      } catch (t) {
        return (
          Object(s.b)(t, "getBidParams", { makeVisibleToAllUsers: !0 }), ""
        );
      }
    }
    function R(t) {
      var e = "validateSupplyChainObject",
        n = !1;
      function r(t, r) {
        return (
          Object(s.b)(
            { name: "TypeError", message: r },
            "".concat(e, "-").concat(t),
            { makeVisibleToAllUsers: !0 }
          ),
          !(n = !0)
        );
      }
      try {
        return Object(a.j)(t)
          ? (Object(a.k)(t, "complete")
              ? -1 === [1, 0].indexOf(t.complete) &&
                r(
                  "schain-complete-type",
                  "The `schain.complete` property must be a `1` or `0`"
                )
              : r(
                  "schain-complete",
                  "The `schain.complete` property must be provided"
                ),
            Object(a.k)(t, "ver")
              ? Object(p.b)(t.ver, ["string"]) ||
                r(
                  "schain-ver-type",
                  "The `schain.ver` property must be a string"
                )
              : r("schain-ver", "The `schain.ver` property must be provided"),
            Object(a.k)(t, "nodes")
              ? Object(a.i)(t.nodes)
                ? t.nodes.reduce(function (t, e) {
                    return Object(a.j)(e)
                      ? (Object(a.k)(e, "asi")
                          ? Object(p.b)(e.asi, ["string"]) ||
                            r(
                              "schain-node-asi-type",
                              "All `schain.nodes` items must have an `asi` property of type `string`"
                            )
                          : r(
                              "schain-node-asi",
                              "All `schain.nodes` items must have an `asi` property"
                            ),
                        Object(a.k)(e, "sid")
                          ? Object(p.b)(e.sid, ["string"]) ||
                            r(
                              "schain-node-sid-type",
                              "All `schain.nodes` items must have an `sid` property of type `string`"
                            )
                          : r(
                              "schain-node-sid",
                              "All `schain.nodes` items must have an `sid` property"
                            ),
                        Object(a.k)(e, "hp")
                          ? -1 === [1, 0].indexOf(e.hp) &&
                            r(
                              "schain-node-hp-type",
                              "All `schain.nodes` items must have an `hp` property which is `1` or `0`"
                            )
                          : r(
                              "schain-node-hp",
                              "All `schain.nodes` items must have an `hp` property"
                            ),
                        Object(p.b)(e.rid, ["string", "undefined"]) ||
                          r(
                            "schain-node-rid-type",
                            "If provided, the `rid` property on an `schain.nodes` item must be of type `string`"
                          ),
                        Object(p.b)(e.name, ["string", "undefined"]) ||
                          r(
                            "schain-node-name-type",
                            "If provided, the `name` property on an `schain.nodes` item must be of type `string`"
                          ),
                        Object(p.b)(e.domain, ["string", "undefined"]) ||
                          r(
                            "schain-node-domain-type",
                            "If provided, the `domain` property on an `schain.nodes` item must be of type `string`"
                          ),
                        t && !n)
                      : r(
                          "schain-node-type",
                          "All `schain.nodes` items must be objects"
                        );
                  }, !n)
                : r(
                    "schain-nodes-type",
                    "The `schain.nodes` property must be an `Array`"
                  )
              : r(
                  "schain-nodes",
                  "The `schain.nodes` property must be provided"
                ))
          : r("schain", "The `schain` value must be an object");
      } catch (t) {
        return Object(s.b)(t, e, { makeVisibleToAllUsers: !0 }), !1;
      }
    }
    function C(t, e, n, l, p) {
      try {
        var O,
          j,
          w,
          T,
          _ =
            null !=
            (O = null == p || null == (j = p.initConfig) ? void 0 : j.pubID)
              ? O
              : null == (w = r.a.getState().config)
              ? void 0
              : w.pubID,
          D = r.a.getState(),
          A =
            t._endpointDomain ||
            Object(o.c)("host", D.hosts.DEFAULT_AAX_BID_HOST),
          I = D.cfg.DTB_PATH,
          E = "bid",
          C =
            (D.experiments.shouldUseTestBidEndpoint &&
              null !== D.cfg.TEST_BID_ENDPOINT &&
              (E = D.cfg.TEST_BID_ENDPOINT),
            {
              src: Object(m._getInitConfig)({
                overrides: null == p ? void 0 : p.initConfig,
              }).pubID,
              u:
                null != p && p.contextURL
                  ? encodeURIComponent(p.contextURL)
                  : Object(u.g)(window),
              pr: Object(u.h)(window),
              pid: k,
              cb: t.bidReqID,
              ws: Object(a.g)(window),
              v: i.l,
              t: e,
              slots: (function (t) {
                try {
                  return Object(c.c)(
                    t
                      .map(function (t) {
                        var e;
                        if (
                          (Object(a.k)(t, "mediaType") &&
                            t.mediaType === d.a.VIDEO) ||
                          t.mediaType === d.a.MULTI_FORMAT
                        )
                          e = t.aaxSlot;
                        else {
                          if (
                            !(
                              Object(a.k)(t, "sizes") &&
                              0 < t.sizes.length &&
                              Object(a.k)(t, "slotID")
                            )
                          )
                            return (
                              Object(s.b)(
                                {
                                  name: "SlotError",
                                  message:
                                    "There was an error with the configuration for this slot: ".concat(
                                      JSON.stringify(t.rawSlot)
                                    ),
                                },
                                "buildSlotsUrlParam-invalidSlot",
                                { makeVisibleToAllUsers: !0 }
                              ),
                              { id: "ERROR", mt: f.a.VIDEO, error: !0 }
                            );
                          var n = t.aaxSlot;
                          Object(a.k)(t, "slotName") && t.slotName !== t.slotID
                            ? (Object(b.c)("idRemap", "y"),
                              (n.sd = t.slotID),
                              (n.sn = t.slotName))
                            : Object(b.c)("idRemap", "n"),
                            (e = n);
                        }
                        return e;
                      })
                      .filter(function (t) {
                        return !0 !== t.error;
                      })
                  );
                } catch (t) {
                  return (
                    Object(s.b)(t, "buildSlotsUrlParam", {
                      makeVisibleToAllUsers: !0,
                    }),
                    ""
                  );
                }
              })(t.validSlots),
              pj: P(D, t, _),
              sg: Object(g.a)(_),
              cfgv: Object(u.f)(),
              bb: Object(u.e)(t),
              schain: (function (t, e) {
                try {
                  var n,
                    r = Object(h.a)(e).read("ad/schain");
                  if (Object(a.k)(t.config, "schain")) n = t.config.schain;
                  else {
                    if (!r || !R(r)) return "";
                    n = r;
                  }
                  return encodeURIComponent(
                    ["".concat(n.ver, ",").concat(n.complete)]
                      .concat(
                        v(
                          n.nodes.map(function (t) {
                            return ["asi", "sid", "hp", "rid", "name", "domain"]
                              .map(function (e) {
                                return Object(a.k)(t, e) ? t[e] : "";
                              })
                              .map(function (t) {
                                return encodeURIComponent(t);
                              })
                              .map(function (t) {
                                return t.replace(/\!/g, "%21");
                              })
                              .join(",");
                          })
                        )
                      )
                      .join("!")
                  );
                } catch (t) {
                  return (
                    Object(s.b)(t, "getSupplyChainObject", {
                      makeVisibleToAllUsers: !0,
                    }),
                    ""
                  );
                }
              })(D, _),
            });
        try {
          var z = Object(h.a)(_).read("consent/GPPData") || {},
            x = z.gppString,
            M = z.applicableSections,
            L = 0 < (x || "").length,
            U = 0 < (M || []).length;
          L && (C.gpp = encodeURIComponent(x)),
            U && (C.gpp_sid = encodeURIComponent(JSON.stringify(M)));
          var V,
            B = (N = { isGPPPresent: L, isSectionPresent: U }).isGPPPresent,
            N = N.isSectionPresent;
          (V = B && N ? "all" : B ? "gpp" : N ? "section" : "none"),
            Object(b.c)("gpp", V);
        } catch (t) {
          Object(s.b)(t, "gpp");
        }
        if ("[]" === C.slots || "" === C.slots)
          throw new Error("No slots available for bid request");
        r.a.dispatch({
          type: "RECORD_AAX_REQUEST",
          data: {
            bidConfig: t,
            bidReqID: t.bidReqID,
            timeout: e,
            ws: C.ws,
            url: C.u,
            rqTs: Date.now(),
          },
        }),
          D.experiments.chunkRequests &&
            ((T = t.bidReqID.split("-")),
            r.a.dispatch({
              type: "RECORD_NETWORK_EXCHANGE",
              fid: T[0],
              networkID: parseInt(T[1], 10),
              timestamp: Date.now(),
              exchangeType: "request",
            })),
          Object(m._getInitConfig)({
            overrides: null == p ? void 0 : p.initConfig,
          }).isSelfServePub && ((C.pubid = C.src), (C.src = 600));
        var F = Object(u.d)(),
          q = Object(o.c)("bidParams"),
          G =
            (Object(a.j)(q) && (C = S(S({}, C), q)),
            Object(a.j)(n) &&
              (Object(a.k)(n, "enabled") &&
                (C.gdpre = encodeURIComponent(n.enabled)),
              Object(a.k)(n, "consent") &&
                (C.gdprc = encodeURIComponent(n.consent)),
              Object(a.k)(n, "log")) &&
              (C.gdprl = Object(c.c)(n.log)),
            Object(a.k)(
              Object(m._getInitConfig)({
                overrides: null == p ? void 0 : p.initConfig,
              }),
              "useSafeFrames"
            ) &&
              Object(m._getInitConfig)({
                overrides: null == p ? void 0 : p.initConfig,
              }).useSafeFrames &&
              (C.sf = "1"),
            Object(y.b)()),
          H =
            (G && (Object(b.c)("id", "bidReq-attachToken"), (l.ids.at = G)),
            (C.vm =
              l && 0 !== Object.keys(l.ids).length
                ? Object(c.c)({ ids: l.ids, md: l.md })
                : ""),
            Object.keys(C)
              .filter(function (t) {
                return (
                  Object(a.k)(C, t) &&
                  "undefined" !== C[t] &&
                  "" !== C[t] &&
                  null !== C[t]
                );
              })
              .map(function (t) {
                return "".concat(t, "=").concat(C[t]);
              })
              .join("&")),
          Q =
            (F.cookiesParams && (H += F.cookiesParams),
            "".concat(i.t).concat(A).concat(I, "/").concat(E, "?").concat(H));
        return (
          r.a.dispatch({
            type: "RECORD_AAX_REQ_PROP",
            bidReqID: t.bidReqID,
            key: "urlLength",
            value: Q.length,
          }),
          Q
        );
      } catch (t) {
        return Object(s.b)(t, "buildBidUrl", { makeVisibleToAllUsers: !0 }), "";
      }
    }
    function z(t, e) {
      try {
        return (
          (Object(a.k)(t, "deals") && !0 === t.deals) ||
          !0 === e.needNewBidObject
        );
      } catch (t) {
        return Object(s.b)(t, "isNewBidObjectRequired"), !1;
      }
    }
    function x(t, e, n) {
      try {
        var r = t.map(l.c),
          o = e.slots
            .filter(Object(l.d)(d.a.DISPLAY, d.a.MULTI_FORMAT))
            .map(l.c)
            .filter(function (t) {
              return !Object(a.h)(r, t);
            }),
          c = n ? i.v.bidInFlight : i.v.noBid;
        return t.concat(
          o.map(function (t) {
            return new E({
              size: "0x0",
              crid: "",
              slotID: t,
              mediaType: "d",
              meta: ["slotID", "mediaType", "size"],
              amznbid: c,
              amzniid: "",
              amznp: c,
              amznsz: "0x0",
              targeting: ["amzniid", "amznbid", "amznp", "amznsz"],
            });
          })
        );
      } catch (e) {
        return Object(s.b)(e, "addStateTrackingBidsToRealBids"), t;
      }
    }
    function M(t, e) {
      try {
        var n;
        return (
          !Object(a.h)(r.a.getState().displayAdServer.noBidSlotIDs, t.slotID) &&
          ((n = r.a.getState().AAXReqs.filter(function (e) {
            return e.bidReqID === t.bidReqID;
          })[0]),
          !(
            (Object(a.k)(n, "rqTs") && Date.now() - n.rqTs > 24e4) ||
            (Object(a.k)(n, "url") &&
              !Object(a.b)(
                n.url,
                null != e && e.contextURL
                  ? encodeURIComponent(e.contextURL)
                  : Object(u.g)(window)
              )) ||
            t.bidState === i.c.rendered
          ))
        );
      } catch (e) {
        return Object(s.b)(e, "isBidEligible"), !1;
      }
    }
    function L(t, e) {
      try {
        var n = t.map(l.c),
          o = r.a.getState();
        return Object.keys(o.slotBids)
          .filter(function (t) {
            return Object(a.h)(n, t);
          })
          .reduce(function (t, n) {
            var a = o.slotBids[n]
              .filter(function (t) {
                return t.bidState === i.c.new;
              })
              .filter(function (t) {
                return M(t, e);
              });
            return (
              0 < a.length &&
                ((a = a[a.length - 1]),
                r.a.dispatch({
                  type: "BID_STATE_CHANGE",
                  slotID: n,
                  _targetingSetID: a._targetingSetID,
                  bidState: i.c.exposed,
                }),
                (t[n] = a)),
              t
            );
          }, {});
      } catch (t) {
        return Object(s.b)(t, "getNewSlotBidsAndExposeForRequestedSlots"), {};
      }
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a;
    }),
      n.d(e, "b", function () {
        return c;
      });
    var r = n(1),
      o = n(0);
    function i(t) {
      return (i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function a(t) {
      try {
        return (
          (function (t) {
            try {
              var e;
              return (
                !!c(t, ["number", "string"]) &&
                !(
                  isNaN(t) ||
                  ("number" != typeof t && ((e = parseInt(t, 10)), isNaN(e)))
                )
              );
            } catch (t) {
              return Object(r.b)(t, "isNumber"), !0;
            }
          })(t) || void 0 === t
        );
      } catch (t) {
        return Object(r.b)(t, "isNumberOrUndefined"), !0;
      }
    }
    function c(t, e) {
      try {
        return Object(o.h)(e, i(t));
      } catch (t) {
        return Object(r.b)(t, "isVarOfTypes"), !0;
      }
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "b", function () {
      return i;
    }),
      n.d(e, "a", function () {
        return a;
      }),
      n.d(e, "d", function () {
        return c;
      }),
      n.d(e, "c", function () {
        return s;
      });
    var r = n(1),
      o = n(0);
    function i(t) {
      var e = [];
      try {
        t.hasAdServerObjectLoaded() && (e = t.getSlots());
      } catch (t) {
        Object(r.b)(t, "getDisplayAdServerSlots");
      }
      return e;
    }
    function a(t) {
      try {
        return (
          Object(o.k)(t, "sizes") &&
          Object(o.i)(t.sizes) &&
          0 !== t.sizes.length
        );
      } catch (t) {
        return Object(r.b)(t, "doesSlotHaveSizes"), !1;
      }
    }
    function c() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      return function (t) {
        try {
          return !t.mediaType || -1 < e.indexOf(t.mediaType);
        } catch (t) {
          return Object(r.b)(t, "isSlotOfType"), !0;
        }
      };
    }
    function s(t) {
      try {
        return t.slotID;
      } catch (t) {
        return Object(r.b)(t, "getSlotID"), "";
      }
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return r;
    }),
      n.d(e, "c", function () {
        return o;
      }),
      n.d(e, "b", function () {
        return i;
      }),
      n.d(e, "e", function () {
        return a;
      }),
      n.d(e, "f", function () {
        return c;
      }),
      n.d(e, "d", function () {
        return s;
      });
    function r(t, e) {
      try {
        return "number" != typeof t[e] ? 0 : Math.round(t[e]);
      } catch (t) {
        return 0;
      }
    }
    function o(t, e) {
      try {
        var n = i(t, e)[0];
        if (void 0 !== n) return n;
      } catch (t) {}
      return null;
    }
    function i(t, e) {
      try {
        return t.performance.getEntriesByType("resource").filter(function (t) {
          return e.test(t.name);
        });
      } catch (t) {
        return [];
      }
    }
    function a(t, e) {
      try {
        var n = t.performance.timing[e];
        return void 0 === n ? 0 : n;
      } catch (t) {
        return 0;
      }
    }
    function c(t) {
      try {
        var e;
        return 0 ===
          [
            "redirectStart",
            "redirectEnd",
            "domainLookupStart",
            "domainLookupEnd",
            "connectStart",
            "connectEnd",
            "requestStart",
            "responseStart",
            "secureConnectionStart",
          ].reduce(function (e, n) {
            return e + r(t, n);
          }, 0)
          ? null
          : ((e = r(t, "fetchStart")),
            [
              "domainLookupStart",
              "domainLookupEnd",
              "connectStart",
              "connectEnd",
            ].reduce(function (n, o) {
              return n && r(t, o) === e;
            }, !0));
      } catch (t) {
        return null;
      }
    }
    function s() {
      try {
        var t = window.performance.timeOrigin;
        return void 0 === t ? window.performance.timing.navigationStart : t;
      } catch (t) {
        return 0;
      }
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "c", function () {
      return h;
    }),
      n.d(e, "b", function () {
        return j;
      }),
      n.d(e, "a", function () {
        return S;
      }),
      n.d(e, "e", function () {
        return T;
      }),
      n.d(e, "d", function () {
        return _;
      });
    var r = n(1),
      o = n(17),
      i = n(10),
      a = n(3),
      c = n(9),
      s = n(0),
      u = n(5),
      l = n(16),
      d = n(2);
    function f(t) {
      return (f =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    var b,
      p = ["email"],
      y = /@/,
      g = /^[0-9a-fA-F]{64}$/,
      m =
        (((e = b = b || {})[(e.noConsent = 0)] = "noConsent"),
        (e[(e.token = 1)] = "token"),
        ""),
      h = function (t) {
        return g.test(t || "");
      };
    function O(t) {
      return t === b.noConsent ? "AMZN-NoCookieConsent" : "AMZN-Token";
    }
    function v(t, e, n) {
      (t = 0 < arguments.length && void 0 !== t ? t : ""),
        (e = 1 < arguments.length && void 0 !== e ? e : 0),
        (n = 2 < arguments.length && void 0 !== n ? n : b.token);
      try {
        var o = new Date(e).toUTCString();
        u.a.getDefault().cookie.setItem(O(n), t, o);
      } catch (t) {
        Object(r.b)(t, "setAmznToken-".concat(n));
      }
    }
    function j() {
      var t =
        0 < arguments.length && void 0 !== arguments[0]
          ? arguments[0]
          : b.token;
      try {
        var e = u.a.getDefault().cookie.getItem(O(t));
        return e || "";
      } catch (e) {
        return Object(r.b)(e, "getAmznToken-".concat(t)), "";
      }
    }
    function S(t) {
      var e =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "api";
      try {
        if (void 0 !== t && "function" != typeof t)
          throw new Error(
            "Callback function must be a function, ".concat(f(t), " provided")
          );
        "function" != typeof t && (t = function () {}),
          v(),
          v("", 0, b.noConsent),
          Object(a.c)("id", "d-".concat(e));
      } catch (t) {
        Object(r.b)(t, "deleteIdentity", { makeVisibleToAllUsers: !0 });
      }
      t();
    }
    function w(t, e, n, o, u, d) {
      try {
        n = Object(c.a)(n);
        var f,
          p,
          y = Object(l._getInitConfig)({
            overrides: null == d ? void 0 : d.initConfig,
          });
        if (!Object(s.k)(y, "pubID") && 0 === (null != t ? t : "").length)
          throw new Error("apstag.init must be called before ID functions");
        y.pubID = 0 < (null != (f = y.pubID) ? f : "").length ? y.pubID : t;
        var g = {
          url: m,
          onload: function (t) {
            try {
              if (t.readyState === XMLHttpRequest.DONE && 200 === t.status) {
                if (
                  "string" !=
                    typeof (p = JSON.parse(t.responseText)).AIPToken ||
                  "number" != typeof p.cookieExpiry
                )
                  return (
                    n(),
                    void Object(r.b)(
                      new Error("Invalid AIPES response"),
                      "callAipes-response"
                    )
                  );
                "" === p.AIPToken
                  ? (Object(a.c)("id", "endReqAipes-tokenEmpty"),
                    v("1", p.cookieExpiry, b.noConsent))
                  : (Object(a.c)("id", "endReqAipes-tokenAvailable"),
                    Object(a.g)(),
                    o && v(p.AIPToken, p.cookieExpiry));
              } else
                t.readyState === XMLHttpRequest.DONE &&
                  Object(r.b)(
                    new Error("AIPES response code: ".concat(t.status)),
                    "callAipes-onload",
                    { makeVisibleToAllUsers: !0 }
                  );
            } catch (t) {
              Object(r.b)(t, "callAipes-onload", { makeVisibleToAllUsers: !0 });
            }
            n(o ? null : p);
          },
          onerror: function () {
            Object(r.b)(
              new Error("AIPES response code: ".concat(this.status)),
              "callAipes-onerror",
              { makeVisibleToAllUsers: !0 }
            ),
              n();
          },
          ontimeout: function () {
            Object(r.b)(
              new Error("AIPES request timeout"),
              "callAipes-ontimeout",
              { makeVisibleToAllUsers: !0 }
            ),
              n();
          },
          headers: { "Content-Type": "application/json" },
          body: (function (t, e, n) {
            try {
              var o = { publisherId: e.pubID, hashedRecords: t.hashedRecords };
              return (
                n.enabled
                  ? ((o.gdpr = 1),
                    void 0 !== n.consent && (o.gdprConsent = n.consent))
                  : 0 === n.enabled && (o.gdpr = 0),
                void 0 !== t.ttl && (o.ttl = t.ttl),
                JSON.stringify(o)
              );
            } catch (t) {
              return (
                Object(r.b)(t, "buildAipesBody", { makeVisibleToAllUsers: !0 }),
                ""
              );
            }
          })(e, y, u),
        };
        Object(a.c)("id", "startReqAipes"), Object(i.d)(g);
      } catch (t) {
        Object(r.b)(t, "callAipes", { makeVisibleToAllUsers: !0 }), n();
      }
    }
    function T(t, e, n) {
      var i,
        c =
          3 < arguments.length && void 0 !== arguments[3]
            ? arguments[3]
            : "api",
        u =
          (u = 4 < arguments.length ? arguments[4] : void 0) ||
          d.a.getState().config.pubID;
      "function" != typeof e && (e = function () {}),
        "boolean" != typeof n && (n = !0);
      try {
        if (!Object(s.j)(t))
          throw new Error(
            "'tokenConfig' must be an object, ".concat(
              "object" === f(t) ? "null" : f(t),
              " provided"
            )
          );
        t.optOut
          ? S(e, "u-oo")
          : (S(function () {}, "u"),
            Object(a.c)("id", "u-".concat(c)),
            (function (t) {
              try {
                var e = [];
                if (
                  (!Object(s.k)(t, "gdpr") ||
                  (Object(s.j)(t.gdpr) && !Object(s.i)(t.gdpr))
                    ? Object(s.k)(t, "gdpr") &&
                      (Object(s.k)(t.gdpr, "enabled") &&
                        -1 === [!0, !1].indexOf(t.gdpr.enabled) &&
                        e.push("`gdpr.enabled` must be a boolean"),
                      Object(s.k)(t.gdpr, "consent")) &&
                      "string" != typeof t.gdpr.consent &&
                      e.push(
                        "'gdpr.consent' must be a valid IAB-formatted string"
                      )
                    : e.push("`gdpr` must be an Object"),
                  Object(s.k)(t, "optOut") &&
                    -1 === [!0, !1].indexOf(t.optOut) &&
                    e.push("'optOut' must be a boolean"),
                  Object(s.k)(t, "hashedRecords") &&
                  Object(s.i)(t.hashedRecords)
                    ? 1 !== t.hashedRecords.length
                      ? e.push("'hashedRecords' must contain exactly one item")
                      : t.hashedRecords.forEach(function (t) {
                          (Object(s.k)(t, "type") &&
                            -1 !== p.indexOf(t.type)) ||
                            e.push(
                              "'type' must be 'email' in item '".concat(
                                JSON.stringify(t),
                                "'"
                              )
                            ),
                            Object(s.k)(t, "encrypted") &&
                              "boolean" != typeof t.encrypted &&
                              e.push(
                                "'encrypted' must be a boolean in item '".concat(
                                  JSON.stringify(t),
                                  "'"
                                )
                              ),
                            Object(s.k)(t, "record") &&
                            "string" == typeof t.record
                              ? t.encrypted || g.test(t.record)
                                ? t.encrypted &&
                                  y.test(t.record) &&
                                  e.push(
                                    "'record' must NOT be an un-hashed, un-encrypted email"
                                  )
                                : e.push(
                                    "'record' must be a SHA256 hash in item '".concat(
                                      JSON.stringify(t),
                                      "'"
                                    )
                                  )
                              : e.push(
                                  "'record' must be a string in item '".concat(
                                    JSON.stringify(t),
                                    "'"
                                  )
                                );
                        })
                    : e.push("'hashedRecords' must be an array"),
                  Object(s.k)(t, "ttl") &&
                    ("number" != typeof t.ttl ||
                      isNaN(t.ttl) ||
                      t.ttl <= 0 ||
                      t.ttl % 1 != 0) &&
                    e.push("'ttl' must be a positive integer"),
                  !(0 < e.length))
                )
                  return 1;
                Object(r.b)(
                  {
                    name: "TokenConfigValidationError",
                    message:
                      "There was an issue with the TokenConfig provided ".concat(
                        JSON.stringify(t),
                        ":\n"
                      ) +
                      e
                        .map(function (t) {
                          return "- ".concat(t);
                        })
                        .join("\n"),
                  },
                  "validateTokenConfig-invalid",
                  { makeVisibleToAllUsers: !0 }
                );
              } catch (t) {
                Object(r.b)(t, "validateTokenConfig", {
                  makeVisibleToAllUsers: !0,
                });
              }
            })(t)
              ? Object(o.a)(
                  t.gdpr,
                  w.bind(null, null != (i = u) ? i : "", t, e, n),
                  u
                )
              : e());
      } catch (t) {
        Object(r.b)(t, "updateIdentity", { makeVisibleToAllUsers: !0 }), e();
      }
    }
    function _(t, e, n, o) {
      "function" != typeof e && (e = function () {}),
        "boolean" != typeof n && (n = !0);
      try {
        if (!Object(s.j)(t))
          throw new Error(
            "'tokenConfig' must be an object, ".concat(
              "object" === f(t) ? "null" : f(t),
              " provided"
            )
          );
        t.optOut
          ? S(e, "r-oo")
          : "" !== j(b.noConsent)
          ? e()
          : "" !== j()
          ? (e(), Object(a.c)("id", "r-noop"))
          : T(t, e, n, "r", o);
      } catch (t) {
        Object(r.b)(t, "renewIdentity", { makeVisibleToAllUsers: !0 }), e();
      }
    }
  },
  function (i, t, e) {
    "use strict";
    e.r(t),
      e.d(t, "unsafelyGuessAccountID", function () {
        return ie;
      }),
      e.d(t, "_getInitConfig", function () {
        return ae;
      });
    var Pt = e(17),
      At = e(2),
      Ct = e(9),
      Rt = e(0),
      zt = e(13),
      xt = e(7),
      Lt = e(4),
      Ut = e(14),
      Bt = e(27),
      Nt = e(22),
      Vt = e(3),
      Mt = e(1),
      Ft = e(10),
      ce = e(29),
      n = e(31),
      qt = e(30),
      Ht = e(11),
      a = e(18),
      Gt = e(6),
      Qt = e(12),
      Xt = e(21),
      Jt = e(15),
      se = e(36),
      ue = e(38),
      $t = e(32),
      le = e(37),
      Kt = e(26),
      de = e(39),
      fe = e(23),
      Yt = e(8),
      Wt = e(5),
      Zt = e(33),
      be = e(28),
      pe = e(24);
    function te(t) {
      return l(t) || u(t) || s(t) || c();
    }
    function c() {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    function s(t, e) {
      var n;
      if (t)
        return "string" == typeof t
          ? r(t, e)
          : "Map" ===
              (n =
                "Object" ===
                  (n = Object.prototype.toString.call(t).slice(8, -1)) &&
                t.constructor
                  ? t.constructor.name
                  : n) || "Set" === n
          ? Array.from(t)
          : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? r(t, e)
          : void 0;
    }
    function u(t) {
      if (
        ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
        null != t["@@iterator"]
      )
        return Array.from(t);
    }
    function l(t) {
      if (Array.isArray(t)) return r(t);
    }
    function r(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    function ee(t) {
      return (ee =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function o(t, e) {
      var n,
        r = Object.keys(t);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(t)),
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
          r.push.apply(r, n)),
        r
      );
    }
    function ne(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? o(Object(n), !0).forEach(function (e) {
              re(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : o(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function re(t, e, n) {
      (e = d(e)) in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n);
    }
    function d(t) {
      return "symbol" === ee((t = f(t, "string"))) ? t : String(t);
    }
    function f(t, e) {
      if ("object" !== ee(t) || null === t) return t;
      var n = t[Symbol.toPrimitive];
      if (void 0 === n) return ("string" === e ? String : Number)(t);
      if ("object" !== ee((n = n.call(t, e || "default")))) return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    var oe = new a.a();
    function ie(t) {
      try {
        var e;
        if ("string" == typeof t && 0 < t.trim().length) return t;
        if ("number" == typeof t && 0 < t) return t.toString();
        var n = null == (e = At.a.getState().config) ? void 0 : e.pubID;
        if (n && "number" == typeof n && 0 < n) return n.toString();
        if (n && "string" == typeof n && "" !== n) return n;
        var r = Array.from(window._aps.keys()).filter(function (t) {
          return "_system" !== t && "" !== t;
        })[0];
        if (r) return r;
      } catch (t) {}
      return "_system";
    }
    function ae(t) {
      return (t = t.overrides), ne(ne({}, At.a.getState().config), t);
    }
    try {
      var b = Object(n.b)(window.apstag);
      b
        ? Object(Mt.b)(
            new Error("apstag has already loaded - preventing duplicate load"),
            "apstag-duplicateLoad"
          )
        : (Object(n.a)(window) &&
            Object(Mt.b)(
              new Error("apstag was loaded and then destroyed"),
              "apstag-destroyReload",
              { makeVisibleToAllUsers: !0 }
            ),
          (window.apstagLOADED = !0),
          (function () {
            var m = Object(Ut.e)(window, "navigationStart"),
              a =
                (Object(Rt.l)(1) &&
                  Object(Mt.b)(
                    new Error(
                      "apstag-".concat(
                        Lt.l,
                        " reference pixel - Used to compute ratios for other errors"
                      )
                    ),
                    "REFERENCE"
                  ),
                new fe.a({ stateContainer: At.a, globalContext: window })),
              t = (a.attemptConsentDataSync(), "ls"),
              n =
                Object(xt.d)("console") ||
                (function () {
                  try {
                    return (
                      -1 !==
                        window.location.href.indexOf("amzn_debug_console=1") &&
                      ((t = "url"), !0)
                    );
                  } catch (t) {
                    return !1;
                  }
                })(),
              r =
                Object(xt.d)("console_v2") ||
                (function () {
                  try {
                    return (
                      -1 !==
                        window.location.href.indexOf("amzn_debug_console=2") &&
                      ((t = "url"), !0)
                    );
                  } catch (t) {
                    return !1;
                  }
                })();
            function L(t) {
              try {
                return (
                  !At.a.getState().experiments.chunkRequests ||
                  0 ===
                    At.a
                      .getState()
                      .bidReqs[t.split("-")[0]].networkReqs.filter(function (
                        t
                      ) {
                        return t.inFlight;
                      }).length
                );
              } catch (t) {
                return Object(Mt.b)(t, "_isRequestComplete"), 1;
              }
            }
            function c(t, e) {
              try {
                !At.a.getState().bidReqs[t].hasCallbackExecuted &&
                  L(t) &&
                  (At.a.dispatch({ type: "RECORD_CALLBACK", fid: t }), e());
              } catch (t) {
                Object(Mt.b)(t, "_checkAndCallCallback");
              }
            }
            function s(t) {
              try {
                At.a.getState().experiments.chunkRequests &&
                  At.a.dispatch({
                    type: "RECORD_NETWORK_EXCHANGE",
                    fid: t[0],
                    timestamp: Date.now(),
                    exchangeType: "response",
                    networkID: parseInt(t[1], 10),
                  });
              } catch (t) {
                Object(Mt.b)(t, "_recordResponse");
              }
            }
            function h(t, r, e, o) {
              var i = e.split("-"),
                n = {
                  url: t,
                  withCredentials: !0,
                  onload: function t(e) {
                    try {
                      (e.status < 200 || 299 < e.status) &&
                        0 !== e.status &&
                        Object(Yt.a)(o)
                          .record("_legacy/_xhrBid/didError", {
                            error: new Error("".concat(e.status)),
                          })
                          .catch(function () {});
                    } catch (t) {}
                    try {
                      s(i);
                      var n = e.responseText;
                      eval(n), c(i[0], r);
                    } catch (t) {
                      Object(Mt.b)(t, "_xhrBid-onload", {
                        makeVisibleToAllUsers: !0,
                      });
                    }
                  },
                  onerror: function () {
                    try {
                      "number" == typeof this.status &&
                        0 !== this.status &&
                        Object(Yt.a)(o)
                          .record("_legacy/_xhrBid/didError", {
                            error: new Error("".concat(this.status)),
                          })
                          .catch(function () {});
                    } catch (t) {}
                    try {
                      s(i), c(i[0], r);
                    } catch (t) {
                      Object(Mt.b)(t, "_xhrBid-onerror", {
                        makeVisibleToAllUsers: !0,
                      });
                    }
                  },
                };
              Object(se.a)(n);
              try {
                Object(Ft.d)(n);
              } catch (t) {
                Object(Mt.b)(t, "_xhrBid", { makeVisibleToAllUsers: !0 }),
                  s(i),
                  c(i[0], r);
              }
            }
            function U(t) {
              try {
                var e = new Date();
                return e.setTime(e.getTime() + 1e3 * t), e.toUTCString();
              } catch (t) {
                return (
                  Object(Mt.b)(t, "_getCookieExpiry"),
                  "Thu, 01 Jan 1970 00:00:00 GMT"
                );
              }
            }
            function B(t) {
              try {
                Object(Rt.k)(t, "cr") &&
                  t.cr.forEach(function (t) {
                    var e = -1 !== t.exp ? U(t.exp) : Object(Rt.f)(365);
                    Wt.a.getDefault().cookie.setItem(t.k, t.v, e);
                  });
              } catch (t) {
                Object(Mt.b)(t, "_setFirstPartyCookies");
              }
            }
            function N(t, e) {
              try {
                var n;
                Object(Rt.k)(t, "cb") &&
                  (At.a.dispatch({
                    type: "RECORD_AAX_REQ_PROP",
                    bidReqID: t.cb,
                    key: "resTs",
                    value: Date.now(),
                  }),
                  (n = new RegExp("e/dtb/bid.*cb=".concat(t.cb))),
                  At.a.dispatch({
                    type: "RECORD_AAX_REQ_PROP",
                    bidReqID: t.cb,
                    key: "perf",
                    value: Object(Ut.c)(window, n),
                  })),
                  Object(Rt.k)(t, "cfg") &&
                    At.a.dispatch({ type: "SET_CFG", cfg: t.cfg }),
                  it(t, e);
              } catch (t) {
                Object(Mt.b)(t, "_doOnAaxResponse", {
                  makeVisibleToAllUsers: !0,
                });
              }
            }
            function V(t) {
              try {
                Object(Zt.b)(t),
                  B(t),
                  Object(Rt.k)(t, "cfg") &&
                    Wt.a
                      .getDefault()
                      .localStorage.setItem(Lt.d, JSON.stringify(t.cfg), {
                        ignoreFailure: !0,
                      }),
                  M(t),
                  Object(Ct.j)(t) || Object(Vt.g)();
              } catch (t) {
                Object(Mt.b)(t, "_doAfterAaxResponse", {
                  makeVisibleToAllUsers: !0,
                });
              }
            }
            function M(t) {
              try {
                var e;
                Object(Rt.k)(t, "fp") &&
                  ((e = t.fp), Object(Rt.k)(e, "length")) &&
                  e.forEach(function (t) {
                    var e = t.d || 0;
                    setTimeout(function () {
                      Object(Vt.f)(t.s);
                    }, e);
                  });
              } catch (t) {
                Object(Mt.b)(t, "fireAAXPixels");
              }
            }
            function F() {
              try {
                At.a.getState().Q.forEach(function (t) {
                  var e = "init";
                  switch (t[0]) {
                    case "i":
                      e = "init";
                      break;
                    case "f":
                      e = "fetchBids";
                      break;
                    case "di":
                      e = "deleteId";
                      break;
                    case "ri":
                      e = "renewId";
                      break;
                    case "ui":
                      e = "updateId";
                      break;
                    default:
                      return;
                  }
                  window.apstag[e].apply(null, t[1]);
                });
              } catch (t) {
                Object(Mt.b)(t, "_QHandler", { makeVisibleToAllUsers: !0 });
              }
            }
            function q(t, e) {
              try {
                var n;
                Object(Rt.j)(t) ||
                  (Object(Mt.c)("init.config", ee(t), "object"),
                  (t = { pubID: "err" })),
                  Object(Qt.b)(t.pubID, ["string", "number"])
                    ? "number" == typeof t.pubID &&
                      (t.pubID = "".concat(t.pubID))
                    : Object(Mt.c)("init.config.pubID", ee(t.pubID), "string"),
                  Object(Qt.b)(t.adServer, ["undefined", "string"]) ||
                    Object(Mt.c)(
                      "init.config.adServer",
                      ee(t.adServer),
                      "string"
                    ),
                  Object(Qt.a)(t.bidTimeout) ||
                    ("string" == typeof t.bidTimeout
                      ? Object(Mt.b)(
                          {
                            name: "string-".concat(t.bidTimeout),
                            message:
                              "init.config.bidTimeout was a non-numeric string '".concat(
                                t.bidTimeout,
                                "'"
                              ),
                          },
                          "TypeError-init.config.bidTimeout",
                          { makeVisibleToAllUsers: !0 }
                        )
                      : Object(Mt.c)(
                          "init.config.bidTimeout",
                          ee(t.bidTimeout),
                          "number"
                        )),
                  Object(Qt.b)(t.gdpr, ["undefined", "object"])
                    ? "object" !== ee(t.gdpr) ||
                      Object(Qt.a)(t.gdpr.cmpTimeout) ||
                      (Object(Qt.b)(t.gdpr.cmpTimeout, ["string", "undefined"])
                        ? Object(Mt.b)(
                            {
                              name: "string-".concat(t.bidTimeout),
                              message:
                                "init.config.gdpr.cmpTimeout was a non-numeric string '".concat(
                                  t.gdpr.cmpTimeout,
                                  "'"
                                ),
                            },
                            "TypeError-init.config.gdpr.cmpTimeout",
                            { makeVisibleToAllUsers: !0 }
                          )
                        : Object(Mt.c)(
                            "init.config.gdpr.cmpTimeout",
                            ee(t.gdpr.cmpTimeout),
                            "number"
                          ))
                    : Object(Mt.c)("init.config.gdpr", ee(t.gdpr), "object"),
                  Object(Rt.k)(t, "params") && !Object(Rt.j)(t.params)
                    ? Object(Mt.c)("init.config.params", ee(t.params), "object")
                    : Object(Rt.k)(t, "params") &&
                      Object.keys(t.params).forEach(function (e) {
                        return !(
                          !Object(Rt.k)(t, "params") ||
                          ("string" != typeof t.params[e] &&
                            "number" != typeof t.params[e] &&
                            (Object(Rt.i)(t.params[e])
                              ? !t.params[e].reduce(function (t, e) {
                                  return (
                                    t &&
                                    ("string" == typeof e ||
                                      "number" == typeof e)
                                  );
                                }, !0) &&
                                (Object(Mt.b)(
                                  {
                                    name: "non-string array item",
                                    message: "'init.config.params.".concat(
                                      e,
                                      " contains a non-string item"
                                    ),
                                  },
                                  "TypeError-init.config.params.".concat(e),
                                  { makeVisibleToAllUsers: !0 }
                                ),
                                1)
                              : (Object(Mt.c)(
                                  "init.config.params.".concat(e),
                                  ee(t.params[e]),
                                  "string' or 'array"
                                ),
                                1)))
                        );
                      }),
                  Object(Rt.k)(t, "params") &&
                  Object(Rt.k)(t.params, "us_privacy") &&
                  "string" == typeof t.params.us_privacy &&
                  Lt.D.test(t.params.us_privacy)
                    ? Object(Vt.c)("ccpa", "y")
                    : Object(Rt.k)(t, "params") &&
                      Object(Rt.k)(t.params, "us_privacy")
                    ? Object(Vt.c)("ccpa", "i")
                    : Object(Vt.c)("ccpa", "n"),
                  Object(Rt.k)(t, "blockedBidders") &&
                  !Object(Rt.i)(t.blockedBidders)
                    ? Object(Mt.c)(
                        "init.config.blockedBidders",
                        ee(t.blockedBidders),
                        "array"
                      )
                    : Object(Rt.k)(t, "blockedBidders") &&
                      Object(Rt.i)(t.blockedBidders) &&
                      (t.blockedBidders.reduce(function (t, e) {
                        return (
                          t && ("string" == typeof e || "number" == typeof e)
                        );
                      }, !0) ||
                        Object(Mt.b)(
                          {
                            name: "non-string array item",
                            message:
                              "'init.config.blockedBidders contains a non-string item",
                          },
                          "TypeError-init.config.blockedBidders",
                          { makeVisibleToAllUsers: !0 }
                        )),
                  Object(Rt.k)(t, "blockedBidders")
                    ? Object(Vt.c)("blockedBidders-init", "y")
                    : Object(Vt.c)("blockedBidders-init", "n"),
                  Object(Qt.b)(t.simplerGPT, ["undefined", "boolean"]) ||
                    Object(Mt.c)(
                      "init.config.simplerGPT",
                      ee(t.simplerGPT),
                      "boolean"
                    ),
                  t.simplerGPT
                    ? Object(Vt.c)("simplerGpt", "y")
                    : Object(Vt.c)("simplerGpt", "n"),
                  Object(Qt.b)(t.deals, ["undefined", "boolean"]) ||
                    Object(Mt.c)("init.config.deals", ee(t.deals), "boolean"),
                  t.deals
                    ? Object(Vt.c)("deals", "y")
                    : Object(Vt.c)("deals", "n"),
                  Object(Qt.b)(t.schain, ["undefined", "object"]) &&
                  null !== t.schain
                    ? Object(Rt.k)(t, "schain") &&
                      !Object(Ht.h)(t.schain) &&
                      delete t.schain
                    : (Object(Mt.c)(
                        "init.config.schain",
                        ee(t.schain),
                        "object"
                      ),
                      delete t.schain),
                  Object(Rt.k)(t, "schain")
                    ? Object(Vt.c)("schain", "y")
                    : Object(Vt.c)("schain", "n"),
                  Object(Qt.b)(t.useSafeFrames, ["undefined", "boolean"]) ||
                    (Object(Mt.c)(
                      "init.config.useSafeFrames",
                      ee(t.useSafeFrames),
                      "boolean"
                    ),
                    delete t.useSafeFrames),
                  t.useSafeFrames
                    ? Object(Vt.c)("useSafeFrames", "y")
                    : Object(Vt.c)("useSafeFrames", "n"),
                  Object(Qt.b)(t.signals, ["undefined", "object"])
                    ? (Object(Yt.a)(e)
                        .record("ad/signals/define", {
                          context: null == (n = t.signals) ? void 0 : n.ortb2,
                        })
                        .catch(function () {}),
                      delete t.signals)
                    : Object(Mt.c)(
                        "init.config.signals",
                        ee(t.signals),
                        "object"
                      );
              } catch (e) {
                Object(Mt.b)(e, "_validateAndStoreConfig-validateConfig");
              }
              try {
                var r = At.a.getState().config;
                Object(Rt.k)(r, "pubID") &&
                  Object(Rt.k)(t, "pubID") &&
                  r.pubID !== t.pubID &&
                  Object(Mt.b)(
                    new Error(
                      "`apstag.init` was called multiple times with different pubIDs ("
                        .concat(r.pubID, " then ")
                        .concat(t.pubID, ")")
                    ),
                    "_validateAndStoreConfig-diffPubId",
                    { makeVisibleToAllUsers: !0 }
                  ),
                  At.a.dispatch({
                    type: "SET_CONFIG",
                    config: t,
                    defaultCmpTimeout: At.a.getState().cfg.GDPR_CMP_TIMEOUT,
                  });
              } catch (e) {
                Object(Mt.b)(e, "_validateAndStoreConfig", {
                  makeVisibleToAllUsers: !0,
                });
              }
            }
            function o(t, e) {
              try {
                var n = t.slotID,
                  r = !1;
                Object(Rt.k)(t.bidConfig, "amznbid") &&
                  "o_" === t.bidConfig.amznbid.slice(0, 2) &&
                  (r = !0),
                  (Object(Rt.k)(t.bidConfig, "mediaType") &&
                    "v" === t.bidConfig.mediaType &&
                    !1 === r) ||
                    (!window.IntersectionObserver && r
                      ? Object(Mt.b)(
                          {
                            name: "IntersectionObserver",
                            message: "IntersectionObserver not supported ",
                          },
                          "_safeApplySlotTargeting"
                        )
                      : e.hasAdServerObjectLoaded()
                      ? e.isCommandQueueDefined()
                        ? e.hasAdServerObjectLoaded()
                          ? null !== u(n, e)
                            ? f(t, e)
                            : Object(Mt.a)(
                                "".concat(
                                  n,
                                  " isn't defined when trying to set amazon bid!"
                                )
                              )
                          : e.cmdQueuePush(function () {
                              o(t, e);
                            })
                        : Object(Mt.a)(
                            "displayAdServer Object's cmd queue hasn't been defined",
                            !0
                          )
                      : Object(Mt.a)(
                          "displayAdServer Object hasn't been defined",
                          !0
                        ));
              } catch (t) {
                Object(Mt.b)(t, "_safeApplySlotTargeting", {
                  makeVisibleToAllUsers: !0,
                });
              }
            }
            function u(t, e) {
              var n = null;
              try {
                n =
                  Object(zt.b)(e).filter(function (e) {
                    return e.slotID === t;
                  })[0] || null;
              } catch (e) {
                Object(Mt.b)(e, "_getAdServerSlot");
              }
              return n;
            }
            function i(t, e) {
              try {
                var n = At.a.getState().targetingKeys[t.slotID];
                e.hasAdServerObjectLoaded() &&
                  Object(Rt.i)(n) &&
                  n.forEach(function (e) {
                    return 0 < t.getTargeting(e).length && t.clearTargeting(e);
                  });
              } catch (e) {
                Object(Mt.b)(e, "_clearTargetingFromSlot", {
                  makeVisibleToAllUsers: !0,
                });
              }
            }
            function l(t) {
              try {
                var e;
                Object(Rt.k)(At.a.getState().slotBids, t.slotID) &&
                  (e = At.a.getState().slotBids[t.slotID].filter(function (t) {
                    return t.bidState === Lt.c.set;
                  })[0]) &&
                  e.bidState === Lt.c.set &&
                  At.a.dispatch({
                    type: "BID_STATE_CHANGE",
                    slotID: t.slotID,
                    _targetingSetID: e._targetingSetID,
                    bidState: Lt.c.exposed,
                  });
              } catch (t) {
                Object(Mt.b)(t, "_clearBidSetOnSlot", {
                  makeVisibleToAllUsers: !0,
                });
              }
            }
            function H(t, e) {
              try {
                return (
                  t
                    .map(function (t) {
                      return Object(Rt.h)(e, t);
                    })
                    .filter(function (t) {
                      return t;
                    }).length === t.length
                );
              } catch (t) {
                Object(Mt.b)(t, "_hasAllItemsInArray");
              }
            }
            function d(t) {
              var e = {};
              try {
                Object.keys(At.a.getState().slotBids).forEach(function (n) {
                  var r = At.a.getState().slotBids[n].filter(function (e) {
                    return Object(Ht.f)(e, t);
                  });
                  0 < r.length &&
                    (e[n] = r
                      .map(function (t) {
                        var e = At.a.getState().AAXReqs.filter(function (e) {
                            return e.bidReqID === t.bidReqID;
                          }),
                          n = 0;
                        return (
                          0 < e.length
                            ? (n = e[0].rqTs)
                            : ((e = At.a
                                .getState()
                                .AAXReqs.map(function (t) {
                                  return t.bidReqID;
                                })
                                .join(", ")),
                              Object(Mt.b)(
                                {
                                  name: "BidError",
                                  message: "Request not found: "
                                    .concat(t.bidReqID, " not found in ")
                                    .concat(e),
                                },
                                "_getCurrentSlotBids-noRequest"
                              )),
                          { rqTs: n, bid: t }
                        );
                      })
                      .reduce(function (t, e) {
                        return t.rqTs > e.rqTs ? t : e;
                      }).bid);
                });
              } catch (t) {
                Object(Mt.b)(t, "_getCurrentSlotBids", {
                  makeVisibleToAllUsers: !0,
                });
              }
              return e;
            }
            function G(t, e) {
              try {
                return Object(Rt.i)(At.a.getState().targetingKeys[t])
                  ? e
                    ? ["amzniid_sp"]
                    : At.a.getState().targetingKeys[t].filter(function (t) {
                        return (
                          -1 < t.indexOf("amzniid") &&
                          t.indexOf("amzniid_sp") < 0
                        );
                      })
                  : ["amzniid"];
              } catch (t) {
                return Object(Mt.b)(t, "_getAllBidIdKeys"), [];
              }
            }
            function Q(t, e) {
              var n, r;
              try {
                var o = At.a.getState().slotBids;
                Object.keys(o).forEach(function (i) {
                  o[i].forEach(function (o) {
                    G(i, e).forEach(function (e) {
                      o.bidConfig[e] === t &&
                        ((n = o),
                        "amzniid_sp" === e
                          ? (r = "sp")
                          : "amzniid" !== e &&
                            (r = e.substr(0, e.indexOf("amzniid"))));
                    });
                  });
                });
              } catch (t) {
                Object(Mt.b)(t, "_findSlotBidByBidID", {
                  makeVisibleToAllUsers: !0,
                });
              }
              return { slotBid: n, dealId: r };
            }
            function X(t, e, n) {
              var r = "";
              try {
                e.bidConfig[n + "amzniid"] === t &&
                  (r = n.split("_").pop().trim());
              } catch (t) {
                Object(Mt.b)(t, "_getPMPBidSize");
              }
              return r;
            }
            function J(t) {
              try {
                var e;
                return void 0 === t.slots
                  ? []
                  : ((e = {}),
                    t.slots.forEach(function (t) {
                      (t.mediaType !== Gt.a.VIDEO &&
                        "v" !== t.mediaType &&
                        "v" !== t.mediaType_sp) ||
                      (0 <= t.slotID.indexOf("rsv-") &&
                        (t = {
                          slotID: t.slotID.substring(4),
                          r_amznbid: t.amznbid,
                          r_amzniid: t.amzniid,
                          r_amznp: t.amznp,
                          mediaType: Gt.a.VIDEO,
                          targeting: ["r_amznbid", "r_amzniid", "r_amznp"],
                          amznsz: t.amznsz,
                          size: t.size,
                          crid: t.crid,
                          meta: t.meta,
                        }),
                      !Object(Rt.k)(e, t.slotID))
                        ? (e[t.slotID] = new Ht.a(t))
                        : t.targeting.forEach(function (n) {
                            (e[t.slotID].bidConfig[n] = t[n]),
                              -1 ===
                                e[t.slotID].bidConfig.targeting.indexOf(n) &&
                                e[t.slotID].bidConfig.targeting.push(n);
                          });
                    }),
                    Object.keys(e).map(function (t) {
                      return e[t];
                    }));
              } catch (t) {
                return Object(Mt.b)(t, "_mergeVideoBids"), [];
              }
            }
            function $(t) {
              var e = J(t),
                n = [];
              try {
                n = e.map(function (e) {
                  return (
                    (e.bidReqID = t.cb),
                    (e.host = t.host),
                    (e.ev = t.ev),
                    (e.cfe = t.cfe),
                    e
                  );
                });
              } catch (e) {
                Object(Mt.b)(e, "_convertAaxResponse");
              }
              return n;
            }
            function f(t, e) {
              try {
                var n,
                  r,
                  o = t.slotID,
                  i = t._targetingSetID;
                t.bidState !== Lt.c.set &&
                  null !== (n = u(o, e)) &&
                  (l(n),
                  (r = t.newBidObject),
                  Object(Xt.a)(n),
                  Object.keys(r.targeting).forEach(function (t) {
                    return n.setTargeting(t, r.targeting[t]);
                  }),
                  At.a.dispatch({
                    type: "BID_STATE_CHANGE",
                    slotID: o,
                    _targetingSetID: i,
                    bidState: Lt.c.set,
                    ts: Date.now(),
                  }));
              } catch (t) {
                Object(Mt.b)(t, "_applyTargetingToAdServerSlot", {
                  makeVisibleToAllUsers: !0,
                });
              }
            }
            function K(t, e, n) {
              try {
                var r = d(n);
                t.forEach(function (t) {
                  r[t] && o(r[t], e);
                });
              } catch (t) {
                Object(Mt.b)(t, "_applySuppliedSlotBidsToAdServerObject", {
                  makeVisibleToAllUsers: !0,
                });
              }
            }
            function Y(t, e) {
              try {
                var n = d(e);
                Object.keys(n).forEach(function (e) {
                  return o(n[e], t);
                });
              } catch (e) {
                Object(Mt.b)(
                  e,
                  "_applyAllCurrentSlotBidsTargetingToAdServerObject",
                  { makeVisibleToAllUsers: !0 }
                );
              }
            }
            function W(t, e, n) {
              try {
                e
                  ? (Object(Vt.c)("targeting", "setDisplayBids-list"),
                    K(e, t, n))
                  : (Object(Vt.c)("targeting", "setDisplayBids-all"), Y(t, n)),
                  At.a.getState().displayAdServer.slotRenderEndedSet ||
                    (t.cmdQueuePush(function () {
                      try {
                        t.slotRenderEndedEvent(function (e) {
                          try {
                            i(e, t), l(e);
                          } catch (e) {
                            Object(Mt.b)(
                              e,
                              "_applySlotTargeting-cmdQueue-slotCb",
                              { makeVisibleToAllUsers: !0 }
                            );
                          }
                        });
                      } catch (t) {
                        Object(Mt.b)(t, "_applySlotTargeting-cmdQueue", {
                          makeVisibleToAllUsers: !0,
                        });
                      }
                    }),
                    At.a.dispatch({ type: "SLOT_RENDER_ENDED_SET" }));
              } catch (e) {
                Object(Mt.b)(e, "_applySlotTargeting", {
                  makeVisibleToAllUsers: !0,
                });
              }
            }
            function b(t, e) {
              function n() {
                if (!o)
                  if (20 <= i++)
                    Object(Mt.b)(
                      {
                        name: "LoopError",
                        message: "Too many attempts to append to document.body",
                      },
                      "_safeDocumentBodyAppendChild-callback-loops",
                      { makeVisibleToAllUsers: !0 }
                    );
                  else {
                    try {
                      if (
                        t &&
                        t.body &&
                        null !== t.body &&
                        "function" == typeof t.body.appendChild
                      )
                        return t.body.appendChild(e), r(), void (o = !0);
                    } catch (t) {
                      Object(Mt.b)(t, "_safeDocumentBodyAppendChild-callback");
                    }
                    setTimeout(n, 100);
                  }
              }
              var r =
                  2 < arguments.length && void 0 !== arguments[2]
                    ? arguments[2]
                    : function () {},
                o = !1,
                i = 0;
              try {
                "complete" === t.readyState || "interactive" === t.readyState
                  ? (Object(Vt.c)("appended", "sync"), n())
                  : (Object(Vt.c)("appended", "async"),
                    t.addEventListener("DOMContentLoaded", n));
              } catch (t) {
                Object(Mt.b)(t, "_safeDocumentBodyAppendChild");
              }
            }
            function Z(t) {
              try {
                var e = ""
                    .concat(t.host)
                    .concat(At.a.getState().cfg.DTB_PATH, "/imp"),
                  n = ""
                    .concat(t.host)
                    .concat(At.a.getState().cfg.DTB_PATH, "/adm");
                return t.cfe || t.isAmp || t.isSf ? n : e;
              } catch (t) {
                return Object(Mt.b)(t, "determineCreativeFetchEndpoint"), "";
              }
            }
            function _(t) {
              try {
                var e = "?b=".concat(t.bidID, "&rnd=").concat(Object(Rt.d)()),
                  n =
                    (Object(Rt.k)(t, "pp") && (e += "&pp=".concat(t.pp)),
                    Object(Rt.k)(t, "amznp") && (e += "&p=".concat(t.amznp)),
                    Object(Rt.k)(t, "crID") && (e += "&crid=".concat(t.crID)),
                    Object(Rt.k)(t, "isSharedPMP") &&
                      !0 === t.isSharedPMP &&
                      (e += "&sp=true"),
                    Object(Xt.e)() && (e += "&ep=%7B%22ce%22%3A%221%22%7D"),
                    Z(t));
                return (t.fif ? "".concat(n, "j") : "".concat(n, "i")).concat(
                  e
                );
              } catch (t) {
                return Object(Mt.b)(t, "_creativeURL"), "";
              }
            }
            function p(t) {
              try {
                var e = t.doc.createElement("iframe");
                return (
                  (e.frameBorder = "0"),
                  (e.marginHeight = "0"),
                  (e.marginWidth = "0"),
                  (e.style.marginTop = "0"),
                  (e.style.marginLeft = "0"),
                  (e.scrolling = "no"),
                  t.inheritSize
                    ? ((e.style.width = "100%"), (e.style.height = "100%"))
                    : ((e.style.width = "".concat(t.sizes[0], "px")),
                      (e.style.height = "".concat(t.sizes[1], "px"))),
                  e
                );
              } catch (t) {
                return (
                  Object(Mt.b)(t, "_baseIframe"),
                  window.document.createElement("iframe")
                );
              }
            }
            function tt(t) {
              try {
                if (Object(Rt.k)(t, "bidType")) {
                  var e,
                    n = t.kvMap;
                  switch (t.bidType) {
                    case "sharedPMP":
                      return {
                        bidID: n.amzniid_sp[0],
                        pp: n.amznbid_sp[0],
                        sizes: n.amznsz_sp[0].split("x"),
                        amznp: n.amznp_sp[0],
                        inheritSize: t.inheritSize,
                        isSharedPMP: t.isSharedPMP,
                      };
                    case "preferredPMP":
                      if (Object(Gt.c)(t) && Object(Rt.k)(t, "amzndeal"))
                        return (
                          (e = t.amzndeal.split("_").pop().trim()),
                          {
                            bidID: n["".concat(t.amzndeal, "amzniid")][0],
                            sizes: C(e),
                          }
                        );
                      break;
                    case "openAuction":
                      if (Object(Gt.c)(t))
                        return {
                          bidID: n.amzniid[0],
                          pp: Object(Ct.c)(n.amznbid[0]),
                          amznp: n.amznp[0],
                          inheritSize: t.inheritSize,
                          sizes: n.amznsz[0].split("x"),
                        };
                      if (Object(Gt.d)(t))
                        return {
                          bidID: t.amzniid,
                          pp: Object(Ct.c)(t.amznbid),
                          amznp: t.amznp,
                          sizes: t.amznsz.split("x"),
                        };
                      break;
                    default:
                      Object(Mt.b)(
                        {
                          name: "Invalid AMP Bid Type: ".concat(t.bidType),
                          message: "No valid AMP bid type",
                        },
                        "getAmpAdData-invalidBidType"
                      );
                  }
                }
              } catch (t) {
                Object(Mt.b)(t, "getAmpAdData");
              }
              return { bidID: "ERROR", sizes: [] };
            }
            function D(t, e, n) {
              try {
                var r,
                  o = null;
                void 0 !== e &&
                  ((Object(Rt.k)(e, "ampEnv") && e.ampEnv) ||
                    (Object(Rt.k)(e, "sfEnv") && e.sfEnv)) &&
                  ((o = e),
                  Object(Rt.k)(e, "bidType") && "sharedPMP" === e.bidType
                    ? (o.isSharedPMP = !0)
                    : (o.isSharedPMP = !1),
                  (o.document = t),
                  (o.amznhost = o.kvMap.amznhost[0])),
                  A(t) && (((o = t).bidType = "openAuction"), (o.ampEnv = !0)),
                  null === o
                    ? Object(Mt.b)(
                        new Error("Invalid AMP parameters"),
                        "_renderAmpImpression-invalidParams",
                        { makeVisibleToAllUsers: !0 }
                      )
                    : "ERROR" !== (r = tt(o)).bidID &&
                      ((r.doc = o.document),
                      (r.host = o.amznhost.replace("://", "://")),
                      (r.adID = "amznad".concat(Object(Rt.d)())),
                      (r.isAmp = o.ampEnv),
                      (r.isSf = Object(Bt.c)(window)),
                      At.a.getState().aaxViewabilityEnabled
                        ? z(r, r.doc, n)
                        : E(r));
              } catch (t) {
                Object(Mt.b)(t, "_renderAmpImpression");
              }
            }
            function I(t) {
              var e,
                n = "unknown";
              function r(r) {
                try {
                  r && (t.hasTimedOut = !0),
                    r &&
                      !t.hasRendered &&
                      Object(Mt.b)(
                        {
                          name: "RenderTimeout",
                          message:
                            "renderAd was called from timeout. fifFlowMethod: ".concat(
                              n
                            ),
                        },
                        "__loadAdIntoFriendlyIframe-renderAd-timeout-isOutstream:".concat(
                          t.isOutstream
                        )
                      ),
                    null === e.contentDocument
                      ? Object(Mt.b)(
                          {
                            name: "NoDocument",
                            message:
                              "iframe.contentDocument was null inside renderAd. isFromTimeout: "
                                .concat(r, ". fifFlowMethod: ")
                                .concat(n),
                          },
                          "__loadAdIntoFriendlyIframe-renderAd-noDocument-isOutstream:".concat(
                            t.isOutstream
                          ),
                          { makeVisibleToAllUsers: !0 }
                        )
                      : t.hasRendered && !t.hasTimedOut
                      ? Object(Mt.b)(
                          {
                            name: "DupeRender",
                            message: "Render was called twice",
                          },
                          "__loadAdIntoFriendlyIframe-renderAd-rerender-isOutstream:".concat(
                            t.isOutstream
                          ),
                          { makeVisibleToAllUsers: !0 }
                        )
                      : t.hasRendered ||
                        ((t.hasRendered = !0),
                        e.contentDocument.open(),
                        e.contentDocument.write(t.html),
                        e.contentDocument.close(),
                        Object(Vt.c)("iframe", "friendly_write_complete"));
                } catch (r) {
                  Object(Mt.b)(
                    r,
                    "__loadAdIntoFriendlyIframe-renderAd-isOutstream:".concat(
                      t.isOutstream
                    )
                  );
                }
              }
              function o() {
                var o = r.bind(null, !1);
                try {
                  (n =
                    null !== e.contentDocument &&
                    Object(Rt.h)(
                      ["complete", "interactive"],
                      e.contentDocument.readyState
                    )
                      ? (o(), "doc-ready")
                      : null !== e.contentDocument &&
                        "uninitialized" !== e.contentDocument.readyState
                      ? (e.contentDocument.addEventListener(
                          "DOMContentLoaded",
                          o
                        ),
                        "dom-listener")
                      : (e.addEventListener("load", o), "iframe-listener")),
                    Object(Vt.c)("fifFlow", n),
                    setTimeout(r, 1e3, !0);
                } catch (o) {
                  Object(Mt.b)(
                    o,
                    "_loadAdIntoFriendlyIframe-setAttributes-isOutstream:".concat(
                      t.isOutstream
                    )
                  );
                }
              }
              try {
                if ((Object(Vt.c)("iframe", "friendly"), void 0 === t.html))
                  throw new Error(
                    "No HTML available for ad, most likely the creative has expired"
                  );
                if (
                  ((t = ne({ hasRendered: !1, hasTimedOut: !1 }, t)),
                  ((e = p(t)).id = "apstag-f-iframe-".concat(Object(Rt.d)())),
                  t.isOutstream)
                )
                  try {
                    var i = Object(Nt.d)(document, t);
                    if (void 0 === i)
                      throw new Error("gpt video div element is undefined");
                    i &&
                      i.firstElementChild &&
                      i.firstElementChild.style.setProperty(
                        "display",
                        "none",
                        "important"
                      );
                    var a = Object(Nt.f)(t.sizes);
                    Object(Nt.a)(a, i),
                      Object(Nt.e)(a, e),
                      o(),
                      Object(Nt.g)(a, e, t.bidID);
                  } catch (o) {
                    Object(Mt.b)(o, "_loadAdIntoFriendlyIframe-outstream", {
                      makeVisibleToAllUsers: !0,
                    });
                  }
                else b(t.doc, e, o);
              } catch (o) {
                Object(Mt.b)(o, "_loadAdIntoFriendlyIframe", {
                  makeVisibleToAllUsers: !0,
                });
              }
            }
            function E(t) {
              var e =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {
                        states: {
                          csmLoaded: !1,
                          iframeLoaded: !1,
                          shouldRunViewability: !1,
                        },
                      },
                n = 2 < arguments.length ? arguments[2] : void 0;
              try {
                Object(Vt.c)("iframe", "unfriendly");
                var r,
                  o = p(t);
                (o.id = t.adID),
                  o.setAttribute(
                    "sandbox",
                    "allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                  ),
                  Object(xt.d)("fake_bids")
                    ? ((r = '<body style="background-color: #FF9900;">'
                        .concat(
                          50 < parseInt(t.sizes[1], 10)
                            ? "<h3>apstag Test Creative</h3>"
                            : "",
                          "<h4>amzniid - "
                        )
                        .concat(t.bidID, " | amznbid: ")
                        .concat(t.pp, " | size: ")
                        .concat(t.sizes.join("x"), "</h4></body>")),
                      (o.src = "javascript:'".concat(r, "'")))
                    : (o.src = _(t)),
                  (!(t.isAmp && t.isSf && Object(Bt.b)(window)) &&
                    (!t.isSf || t.isAmp || t.inheritSize)) ||
                    Object(Bt.a)(t.sizes, window),
                  b(t.doc, o),
                  ((e.iframe = o).onload = function () {
                    (e.states.iframeLoaded = !0), n && n();
                  });
              } catch (t) {
                Object(Mt.b)(t, "_loadAdIntoUnfriendlyIframe", {
                  makeVisibleToAllUsers: !0,
                });
              }
            }
            function et(t, e) {
              var n,
                r = t.states,
                o = t.doc,
                i = t.bidID;
              t = t.iframe;
              try {
                Object(Rt.a)(r) ||
                  ((r.shouldRunViewability = !1),
                  Object(Rt.k)(window, "amzncsm")
                    ? (n = window.amzncsm)
                    : void 0 !== o &&
                      null !== o.defaultView &&
                      Object(Rt.k)(o.defaultView, "amzncsm") &&
                      (n = o.defaultView.amzncsm),
                  void 0 !== o &&
                    void 0 !== n &&
                    Object(Rt.k)(n, "rmD") &&
                    ((n.host = Object(xt.c)(
                      "host",
                      At.a.getState().hosts.DEFAULT_AAX_PIXEL_HOST
                    )),
                    n.rmD(
                      t,
                      i,
                      o.defaultView,
                      o,
                      ae({ overrides: null == e ? void 0 : e.initConfig }).pubID
                    )));
              } catch (t) {
                Object(Mt.b)(t, "_triggerViewability");
              }
            }
            function nt(t, e, n, r) {
              return function (o) {
                try {
                  var i = Object(Ht.e)(e.slots, r),
                    a = Object.keys(i),
                    c = [],
                    s =
                      (o &&
                        (At.a.dispatch({
                          type: "RECORD_AAX_REQ_PROP",
                          bidReqID: e.bidReqID,
                          key: "timedOutAt",
                          value: Date.now(),
                        }),
                        At.a.getState().experiments.chunkRequests) &&
                        At.a.dispatch({
                          type: "RECORD_TIMEOUT",
                          fid: e.bidReqID,
                          timeOut: Date.now(),
                        }),
                      a.forEach(function (t) {
                        Object(Rt.k)(i, t) &&
                          ((t = i[t]),
                          Object(Ht.g)(
                            ae({
                              overrides: null == r ? void 0 : r.initConfig,
                            }),
                            n
                          ) || Object(Rt.k)(t.bidConfig, "amznbid")
                            ? Object(Rt.k)(t.bidConfig, "amznp") ||
                              (t.bidConfig.amznp = "")
                            : (Object(Vt.c)("unusedDeal", t.mediaType),
                              t.mediaType !== Gt.a.VIDEO &&
                                (t.bidConfig.targeting.unshift("amznsz"),
                                (t.bidConfig.amznsz = "0x0")),
                              t.bidConfig.targeting.unshift(
                                "amzniid",
                                "amznbid",
                                "amznp"
                              ),
                              (t.bidConfig.amzniid = ""),
                              (t.bidConfig.amznbid = Lt.v.noBid),
                              (t.bidConfig.amznp = Lt.v.noBid)),
                          c.push(t));
                      }),
                      n.isSupported && (c = Object(Ht.c)(c, e, o)),
                      { fromTimeout: o }),
                    u = Object(Ht.g)(
                      ae({ overrides: null == r ? void 0 : r.initConfig }),
                      n
                    );
                  try {
                    t(
                      c.map(function (t) {
                        return u ? t.newBidObject : t.bidObject;
                      }),
                      s
                    );
                  } catch (a) {
                    console.error(a);
                  }
                } catch (a) {
                  Object(Mt.b)(a, "_bidCallbackHandler", {
                    makeVisibleToAllUsers: !0,
                  });
                  try {
                    t([], { fromTimeout: o, fromError: !0 });
                  } catch (a) {
                    console.error(a);
                  }
                }
              };
            }
            function rt(t, e) {
              try {
                var n, r;
                e.inheritSize
                  ? Object(Vt.c)("creativeSize", "inherited")
                  : ((r =
                      t.defaultView && t.defaultView.frameElement
                        ? ((n = t.defaultView.frameElement), "defaultView")
                        : ((n = window.frameElement), "frameElement")),
                    Object(Vt.c)("resizeIframe", r),
                    Object(Vt.c)("creativeSize", "resized"),
                    null !== n
                      ? ((n.style.width = "".concat(e.sizes[0], "px")),
                        (n.style.height = "".concat(e.sizes[1], "px")))
                      : Object(Mt.b)(
                          {
                            name: "FrameNotFound",
                            message: "'win' is 'null'. Method used: ".concat(r),
                          },
                          "_resizeIframe-win"
                        ));
              } catch (t) {
                Object(Mt.b)(t, "_resizeIframe");
              }
            }
            function e(t) {
              try {
                return "".concat(t[0], "x").concat(t[1]);
              } catch (t) {
                return Object(Mt.b)(t, "_sizeArrayToSring"), "x";
              }
            }
            function y(t) {
              try {
                return 1 === t.length
                  ? e(t[0])
                  : e(t[Math.floor(t.length * Math.random())]);
              } catch (t) {
                return (
                  Object(Mt.b)(t, "_pickRandomSizeForMockBid", {
                    makeVisibleToAllUsers: !0,
                  }),
                  ""
                );
              }
            }
            function ot(t) {
              try {
                var e,
                  n = Object(xt.c)(
                    "host",
                    At.a.getState().hosts.DEFAULT_AAX_BID_HOST
                  ),
                  r = Object(Ct.g)(window),
                  o = t.bidReqID,
                  i = Object(Rt.g)(window),
                  a = Object(xt.c)("testBidTimeout", 200);
                At.a.dispatch({
                  type: "RECORD_AAX_REQUEST",
                  data: {
                    bidConfig: t,
                    timeout: a,
                    bidReqID: o,
                    ws: i,
                    url: r,
                    rqTs: Date.now(),
                  },
                }),
                  (e = t.slots.map(function (t) {
                    var e = y(t.sizes),
                      n =
                        ((e = "testDeal".concat(Object(Rt.d)(), "_").concat(e)),
                        "testDealIi-".concat(Object(Rt.d)())),
                      r = y(t.sizes);
                    re(
                      (r = {
                        slotID: t.slotID,
                        crid: "".concat(Lt.p.crid, "-").concat(Object(Rt.d)()),
                        size: r,
                        amzniid: ""
                          .concat(Lt.p.amzniid, "-")
                          .concat(Object(Rt.d)()),
                        amznbid: Lt.p.amznbid,
                        amznp: Lt.p.amznp,
                        amznsz: r,
                        amzniid_sp: ""
                          .concat(Lt.p.amzniid, "-")
                          .concat(Object(Rt.d)()),
                        amznbid_sp: "".concat(Lt.p.amznbid, "SP"),
                        amznp_sp: "".concat(Lt.p.amznp, "SP"),
                        amznsz_sp: y(t.sizes),
                        amzndeals: [e],
                      }),
                      "".concat(e, "amzniid"),
                      n
                    ),
                      re(r, "mediaType", "d"),
                      re(r, "meta", ["slotID", "mediaType", "size"]),
                      re(r, "targeting", [
                        "amzniid",
                        "amznbid",
                        "amznp",
                        "amznsz",
                        "amzniid_sp",
                        "amznbid_sp",
                        "amznp_sp",
                        "amznsz_sp",
                        "amzndeal_sp",
                        "amzndeals",
                        "".concat(e, "amzniid"),
                      ]),
                      (n = r);
                    return (
                      t.mediaType === Gt.a.VIDEO &&
                        ((n.mediaType = Gt.a.VIDEO),
                        (n.amznbid = "v_".concat(n.amznbid))),
                      n
                    );
                  })),
                  setTimeout(function () {
                    window.apstag.bids({
                      slots: e,
                      host: n,
                      status: "ok",
                      cb: o,
                    });
                  }, a);
              } catch (t) {
                Object(Mt.b)(t, "_doMockBid", { makeVisibleToAllUsers: !0 });
              }
            }
            function it(t, e) {
              try {
                var n,
                  r,
                  o,
                  i = At.a.getState().AAXReqs.filter(function (e) {
                    return e.bidReqID === t.cb;
                  })[0];
                i &&
                  i.bidConfig &&
                  i.bidConfig.slots &&
                  ((n = i.bidConfig.slots
                    .filter(Object(zt.d)(Gt.a.DISPLAY, Gt.a.MULTI_FORMAT))
                    .map(function (t) {
                      return t.slotID;
                    })),
                  (r = Object(Rt.k)(t, "slots")
                    ? t.slots.map(function (t) {
                        return t.slotID;
                      })
                    : []),
                  (o = n.filter(function (t) {
                    return !Object(Rt.h)(r, t);
                  })),
                  At.a.dispatch({
                    type: "NO_BID_ON_ADSERVER_SLOTS",
                    slotIDs: o,
                  }),
                  e.hasAdServerObjectLoaded()
                    ? O(e)
                    : e.isCommandQueueDefined() &&
                      e.cmdQueuePush(function () {
                        O(e);
                      }));
              } catch (e) {
                Object(Mt.b)(e, "_determineNoBidStateForAdServerObject");
              }
            }
            function at(t) {
              return Object(Rt.h)(
                At.a
                  .getState()
                  .AAXReqs.filter(function (t) {
                    return !t.resTs;
                  })
                  .map(function (t) {
                    return t.bidConfig.slots;
                  })
                  .reduce(function (t, e) {
                    return t.concat(e);
                  }, [])
                  .map(zt.c),
                t
              );
            }
            function g(t) {
              try {
                var e = t.getTargeting("amznbid");
                return 0 < e.length && 2 < e[0].length;
              } catch (t) {
                return Object(Mt.b)(t, "_isRealAmznbidTargetingSetOnSlot"), 1;
              }
            }
            function O(t) {
              try {
                t.hasAdServerObjectLoaded() &&
                  "1" === t.getTargeting("amznbid")[0] &&
                  j(t),
                  Object(zt.b)(t).forEach(function (t) {
                    !Object(Rt.h)(
                      At.a.getState().displayAdServer.noBidSlotIDs,
                      t.slotID
                    ) ||
                      at(t.slotID) ||
                      g(t) ||
                      "2" === t.getTargeting("amznbid")[0] ||
                      (v("noBid", t), Object(Xt.a)(t));
                  });
              } catch (t) {
                Object(Mt.b)(t, "_applyNoBidFromAAXState");
              }
            }
            function v(t, e) {
              Lt.w.forEach(function (n) {
                return e.setTargeting(n, Lt.v[t]);
              });
            }
            function j(t) {
              Lt.w.forEach(function (e) {
                return t.clearTargeting(e);
              });
            }
            function ct(t) {
              try {
                var e = {
                  _type: "dupePixel",
                  dd: Date.now() - t.timing.renderTime,
                };
                Object(Vt.a)(t.bidConfig.amzniid, e);
              } catch (t) {
                Object(Mt.b)(t, "_sendDupeBidPixel");
              }
            }
            !(function () {
              var t;
              Object(Wt.b)() &&
                (t = Wt.a
                  .getDefault()
                  .localStorage.getItem(Lt.d, { ignoreFailure: !0 })) &&
                null !== (t = JSON.parse(t)) &&
                At.a.dispatch({ type: "SET_CFG", cfg: t });
            })(),
              Object(Xt.d)();
            var st = 0;
            function S() {
              try {
                Object(Rt.k)(window, "googletag") &&
                Object(Rt.k)(window.googletag, "cmd")
                  ? new ce.a().cmdQueuePush(function () {
                      try {
                        window.googletag
                          .pubads()
                          .addEventListener("slotRequested", function (t) {
                            try {
                              var e = t.slot;
                              At.a.dispatch({
                                type: "LOG_GAM_EVENT",
                                event: ne(
                                  ne({}, new Kt.a(e).slotConfig),
                                  {},
                                  {
                                    ts: Date.now(),
                                    targeting: e.getTargetingMap(),
                                  }
                                ),
                              });
                            } catch (t) {
                              Object(Mt.b)(
                                t,
                                "_initializeSlotRequestedEventListener-cmdQueue-listener"
                              );
                            }
                          });
                      } catch (t) {
                        Object(Mt.b)(
                          t,
                          "_initializeSlotRequestedEventListener-cmdQueue"
                        );
                      }
                    })
                  : ++st < 5 && setTimeout(S, 100);
              } catch (t) {
                Object(Mt.b)(t, "_initializeSlotRequestedEventListener");
              }
            }
            function w(t) {
              try {
                var e = t.AAXReqs.slice(t.gamSlotRenderPixel.aaxReqOffset)
                    .reduce(function (t, e) {
                      return t.concat(e.bidConfig.slots);
                    }, [])
                    .map(function (t) {
                      return ne(ne({}, t), {}, { type: "a" });
                    })
                    .filter(function (t) {
                      return t.mediaType !== Gt.a.VIDEO;
                    }),
                  n = t.gamSlotFetchLog
                    .slice(t.gamSlotRenderPixel.gamSlotFetchLogOffset)
                    .map(function (t) {
                      return ne(ne({}, t), {}, { type: "g" });
                    }),
                  r = [].concat(te(e), te(n)).reduce(function (t, e) {
                    return (
                      void 0 === t[e.slotID] &&
                        (t[e.slotID] = {
                          sd: e.slotID,
                          a: { c: 0 },
                          g: { c: 0 },
                        }),
                      t[e.slotID][e.type].c++,
                      (t[e.slotID][e.type].s = e.sizes),
                      (t[e.slotID][e.type].sn = e.slotName || ""),
                      t
                    );
                  }, {});
                return Object.keys(r)
                  .map(function (t) {
                    return r[t];
                  })
                  .filter(function (t) {
                    return 0 !== t.a.c || 0 !== t.g.c;
                  });
              } catch (t) {
                return Object(Mt.b)(t, "getSlotFetchCounts"), [];
              }
            }
            function ut() {
              try {
                var t = At.a.getState(),
                  e = w(t);
                0 < Object.keys(e).length &&
                  (Object(Rt.c)(e, 5).forEach(function (e) {
                    (e = {
                      slots: e,
                      pid: Ht.b,
                      url: Object(Ct.g)(window).split("?")[0],
                      ws: Object(Rt.g)(window),
                      pubid: t.config.pubID,
                      _type: "slotRenders",
                    }),
                      Object(Vt.b)(e);
                  }),
                  At.a.dispatch({
                    type: "UPDATE_RENDER_OFFSETS",
                    offsets: {
                      aaxReqOffset: t.AAXReqs.length,
                      gamSlotFetchLogOffset: t.gamSlotFetchLog.length,
                    },
                  }));
              } catch (e) {
                Object(Mt.b)(e, "sendDisplayAdServerRenderPixel");
              }
            }
            function lt() {
              setInterval(function () {
                ut();
              }, 5e3);
            }
            function T(t, e) {
              try {
                setTimeout(function () {
                  try {
                    var n = k(t).filter(function (t) {
                        return (
                          !Object(Rt.k)(At.a.getState().bsPixels, t.iid) ||
                          t.state !== At.a.getState().bsPixels[t.iid]
                        );
                      }),
                      r =
                        (n &&
                          n.length &&
                          0 < n.length &&
                          (n.forEach(function (t) {
                            return Object(Vt.a)(t.iid, ft(t, e));
                          }),
                          dt(n)),
                        {
                          fetchStart: "a",
                          domainLookupStart: "b",
                          domainLookupEnd: "c",
                          connectStart: "d",
                          secureConnectionStart: "e",
                          connectEnd: "f",
                          requestStart: "g",
                          responseStart: "h",
                          responseEnd: "i",
                        });
                    Object.keys(At.a.getState().slotBids).forEach(function (t) {
                      At.a.getState().slotBids[t].forEach(function (e) {
                        var n, o, i;
                        Object(Rt.k)(e.bidConfig, "amzniid") &&
                          !e.pixelSent &&
                          "object" ===
                            ee(
                              (n = At.a.getState().AAXReqs.filter(function (t) {
                                return t.bidReqID === e.bidReqID;
                              })[0])
                            ) &&
                          null !== n &&
                          ((o = n.rqTs - Object(Ut.d)()),
                          (i = {
                            pid: Ht.b,
                            ns: n.bidConfig.validSlots.length,
                            fid: e.bidReqID,
                            fbrq: n.rqTs,
                            _type: "latencyBd",
                          }),
                          "object" === ee(n.perf) &&
                            null !== n.perf &&
                            Object.keys(r).forEach(function (t) {
                              Object(Rt.k)(n, "perf") &&
                                0 !== Object(Ut.a)(n.perf, t) &&
                                (i[r[t]] = Object(Ut.a)(n.perf, t) - o);
                            }),
                          (i.j = n.resTs - n.rqTs),
                          Object(Vt.a)(e.bidConfig.amzniid, i),
                          At.a.dispatch({
                            type: "UPDATE_BID_INFO_PROP",
                            slotID: t,
                            iid: e.bidConfig.amzniid,
                            key: "pixelSent",
                            value: !0,
                          }));
                      });
                    }),
                      T(t, e);
                  } catch (n) {
                    Object(Mt.b)(n, "_sendBidsSetOnDFPPixel-timeout");
                  }
                }, 5e3);
              } catch (t) {
                Object(Mt.b)(t, "_sendBidsSetOnDFPPixel");
              }
            }
            function dt(t) {
              t.forEach(function (t) {
                return At.a.dispatch({
                  type: "RECORD_BID_INFO_SENT",
                  bidInfo: t,
                });
              });
            }
            function ft(t, e) {
              try {
                var n = bt(t.fid),
                  r = {
                    status: t.state,
                    pubid: ae({ overrides: null == e ? void 0 : e.initConfig })
                      .pubID,
                    _type: "bidSetPixel",
                    toa: Object(Rt.k)(n.req, "timedOutAt")
                      ? n.req.timedOutAt
                      : 0,
                    fbrq: n.req.rqTs,
                    pto: n.req.timeout,
                    ns: n.req.bidConfig.validSlots.length,
                    bla: n.req.resTs - n.req.rqTs,
                    reqindex: n.index,
                    fid: t.fid,
                    tbs: 0,
                    c: "dtb",
                  },
                  o =
                    (At.a.getState().cfg.CHUNK_BID_REQUESTS_PROPORTION &&
                      ((r.eid = At.a.getState().experiments.chunkRequests
                        ? 2
                        : 1),
                      (r.fbindex = n.fbIndex),
                      (r.fbns =
                        At.a.getState().bidConfigs[
                          parseInt(t.fid.split("-")[0], 10)
                        ].slots.length)),
                    At.a.getState().experiments),
                  i =
                    (Object(Rt.k)(o, "shouldUseTestBidEndpoint") &&
                      (r.tbs = o.shouldUseTestBidEndpoint ? 2 : 1),
                    t.delta && (r.delay = t.delta),
                    n.req.perf);
                return (
                  void 0 !== i &&
                    ((r.ul = n.req.urlLength),
                    (r.es = Object(Ut.a)(i, "encodedBodySize"))),
                  0 < Object.keys(At.a.getState().identityState).length &&
                    (r.ids = JSON.stringify(At.a.getState().identityState)),
                  0 < At.a.getState().tcfParseTime &&
                    (r.tpt = At.a.getState().tcfParseTime),
                  r
                );
              } catch (t) {
                return (
                  Object(Mt.b)(t, "_mapBidInfoToPixel"),
                  {
                    _type: "bidSetPixel",
                    status: -1,
                    pubid: "",
                    toa: 0,
                    fbrq: 0,
                    pto: 0,
                    ns: 0,
                    bla: 0,
                    reqindex: 0,
                    fid: "",
                    tbs: 0,
                    c: "dtb",
                  }
                );
              }
            }
            function bt(t) {
              var e = At.a.getState().AAXReqs.filter(function (e) {
                  return e.bidReqID === t;
                })[0],
                n = At.a.getState().AAXReqs.indexOf(e) + 1;
              return (
                ((e = { req: e, index: n, fbIndex: n }).index =
                  At.a.getState().AAXReqs.indexOf(e.req) + 1),
                At.a.getState().experiments.chunkRequests &&
                  (e.fbIndex =
                    At.a
                      .getState()
                      .AAXReqs.filter(function (t) {
                        return (
                          -1 === t.bidReqID.indexOf("-") ||
                          "0" === t.bidReqID.split("-")[1]
                        );
                      })
                      .map(function (t) {
                        return t.bidReqID.split("-")[0];
                      })
                      .indexOf(t.split("-")[0]) + 1),
                e
              );
            }
            function k(t) {
              try {
                var e = gt(t),
                  n = [];
                return (
                  null !== e &&
                    Object.keys(At.a.getState().slotBids).forEach(function (t) {
                      At.a.getState().slotBids[t][0].bidConfig.mediaType !==
                        Gt.a.VIDEO &&
                        At.a
                          .getState()
                          .slotBids[t].filter(function (t) {
                            return Object(Rt.k)(t.bidConfig, "amzniid");
                          })
                          .forEach(function (r) {
                            var o, i, a;
                            null !== e &&
                              ((o = {
                                state: -1,
                                slotID: t,
                                iid: r.bidConfig.amzniid,
                                fid: r.bidReqID,
                              }),
                              (a = []),
                              (i = []),
                              t in e &&
                                ((a = e[t].fetchedAt.filter(function (t) {
                                  return (
                                    t.AAXReqInfo &&
                                    t.AAXReqInfo.bidReqID === r.bidReqID
                                  );
                                })),
                                (i = e[t].targetedAt.filter(function (t) {
                                  return t.targeting === r.bidConfig.amzniid;
                                }))),
                              0 < a.length
                                ? 0 < a.length &&
                                  i.length >= a.length &&
                                  a.slice(a.length - 1)[0].ts >
                                    i.slice(a.length - 1)[0].ts
                                  ? 1 ===
                                    e[t].fetchWithIID.filter(function (t) {
                                      return t === r.bidConfig.amzniid;
                                    }).length
                                    ? (o.state = 1)
                                    : (o.state = 4)
                                  : Object(Rt.h)(
                                      e[t].fetchWithIID,
                                      r.bidConfig.amzniid
                                    )
                                  ? (o.state = 3)
                                  : (o.state = 2)
                                : (o.state = 0),
                              (1 !== o.state && 2 !== o.state) ||
                                ((a = P(
                                  (i = At.a
                                    .getState()
                                    .AAXReqs.filter(function (t) {
                                      return t.bidReqID === r.bidReqID;
                                    })[0].resTs),
                                  e[t].fetchedAt,
                                  2 === o.state
                                )) &&
                                  Object(Rt.k)(a, "ts") &&
                                  (o.delta = i - a.ts)),
                              n.push(o));
                          });
                    }),
                  n
                );
              } catch (t) {
                return Object(Mt.b)(t, "_getBidSetInfo"), [];
              }
            }
            function P(t, e, n) {
              var r = e.map(function (e) {
                return (
                  (e = t - e.ts), !n && e <= 0 ? -e : n && 0 <= e ? e : null
                );
              });
              return e[pt(r)];
            }
            function pt(t) {
              for (var e = -1, n = -1, r = 0; r < t.length; r++)
                null !== t[r] && (-1 === n || t[r] < e) && (e = t[(n = r)]);
              return n;
            }
            function yt(t, e) {
              return At.a.getState().AAXReqs.filter(function (t) {
                return Object(Rt.h)(
                  t.bidConfig.slots.map(function (t) {
                    return t.slotID;
                  }),
                  e
                );
              })[t];
            }
            function gt(t) {
              try {
                var e;
                return t.hasAdServerObjectLoaded()
                  ? ((e = At.a
                      .getState()
                      .gamSlotFetchLog.reduce(function (t, e) {
                        Object(Rt.k)(t, e.slotID) ||
                          (t[e.slotID] = { fetchedAt: [], targetedAt: [] });
                        var n = t[e.slotID];
                        return (
                          n.fetchedAt.push({
                            ts: e.ts,
                            AAXReqInfo: yt(n.fetchedAt.length, e.slotID),
                          }),
                          Object(Rt.k)(e.targeting, "amzniid") &&
                          0 < e.targeting.amzniid.length
                            ? n.targetedAt.push({
                                ts: e.ts - 1,
                                targeting: e.targeting.amzniid[0],
                              })
                            : n.targetedAt.push({
                                ts: e.ts - 1,
                                targeting: "",
                              }),
                          t
                        );
                      }, {})),
                    Object.keys(e).forEach(function (t) {
                      var n;
                      Object(Rt.k)(e, t) &&
                        (((n = e[t]).fetchWithIID = n.fetchedAt.map(function (
                          t
                        ) {
                          return (t = P(t.ts, n.targetedAt, !0))
                            ? t.targeting
                            : 0;
                        })),
                        (e[t] = n));
                    }),
                    e)
                  : null;
              } catch (t) {
                return Object(Mt.b)(t, "_getDFPSlotFetches"), null;
              }
            }
            function mt(t) {
              try {
                t.hasAdServerObjectLoaded()
                  ? v("noRequest", t)
                  : t.isCommandQueueDefined() &&
                    t.cmdQueuePush(function () {
                      v("noRequest", t);
                    });
              } catch (t) {
                Object(Mt.b)(t, "_applyNoRequestToAAXState");
              }
            }
            function ht(t, e) {
              try {
                At.a.dispatch({
                  type: "REQUESTED_BID_FOR_ADSERVER_SLOTS",
                  slotIDs: t,
                }),
                  e.isCommandQueueDefined() &&
                    e.cmdQueuePush(function () {
                      try {
                        var n = Object(zt.b)(e);
                        "0" === e.getTargeting("amznbid")[0] && j(e),
                          H(
                            t.filter(function (t) {
                              return void 0 !== t;
                            }),
                            n.map(function (t) {
                              return t.slotID;
                            })
                          )
                            ? n.forEach(function (e) {
                                Object(Rt.h)(t, e.slotID) &&
                                  !g(e) &&
                                  v("bidInFlight", e);
                              })
                            : e.cmdQueuePush(function () {
                                try {
                                  v("bidInFlight", e);
                                } catch (t) {
                                  Object(Mt.b)(
                                    t,
                                    "_setRequestToAAXInFlightState-cmdQueue-cmdQueue"
                                  );
                                }
                              });
                      } catch (n) {
                        Object(Mt.b)(
                          n,
                          "_setRequestToAAXInFlightState-cmdQueue"
                        );
                      }
                    });
              } catch (t) {
                Object(Mt.b)(t, "_setRequestToAAXInFlightState");
              }
            }
            function A(t) {
              try {
                return (
                  Object(Rt.k)(t, "type") &&
                  !(t instanceof Document) &&
                  "amp" === t.type
                );
              } catch (t) {
                return Object(Mt.b)(t, "_isLegacyAmpCreative"), !1;
              }
            }
            function Ot(t, e) {
              try {
                return (
                  (void 0 !== e && Object(Rt.k)(e, "ampEnv") && e.ampEnv) ||
                  A(t)
                );
              } catch (t) {
                Object(Mt.b)(t, "_isAmpImpression");
              }
            }
            function C(t) {
              return t.split("x");
            }
            function vt(t, e, n, r) {
              try {
                var o = ie();
                Object(Yt.a)(o)
                  .record("_legacy/_renderImp/willExecute")
                  .catch(function () {});
              } catch (t) {}
              try {
                Object(Vt.c)("renderImp", "start"), Object(Vt.g)();
              } catch (t) {
                Object(Mt.b)(t, "_renderImp-pixels");
              }
              try {
                var i = void 0 === n ? "0.0.0" : n.cv;
                if (Ot(t, n) && Object(Ct.k)(window, !0))
                  A(t)
                    ? Object(Vt.c)("renderFootprint", "amp")
                    : Object(Vt.c)("renderFootprint", "multi-amp-".concat(i)),
                    D(t, n, r);
                else if (
                  Object(Bt.c)(window) &&
                  void 0 !== n &&
                  Object(Rt.k)(n, "kvMap") &&
                  Object(Rt.k)(n.kvMap, "amznhost")
                )
                  Object(Vt.c)("renderFootprint", "multi-sf-".concat(i)),
                    D(t, n, r);
                else {
                  var a = !1,
                    c =
                      ("string" == typeof e &&
                        0 === e.indexOf("sp|") &&
                        ((e = e.substring(3)), (a = !0)),
                      e || t.amzniid),
                    s = Q(c, a),
                    u = s.slotBid,
                    l = s.dealId,
                    d = !1;
                  if (
                    (void 0 !== n &&
                      Object(Rt.k)(n, "bidType") &&
                      "outstream" === n.bidType &&
                      (d = !0),
                    u)
                  ) {
                    var f,
                      b,
                      p,
                      y,
                      g,
                      m,
                      h,
                      O,
                      v,
                      j,
                      S,
                      w,
                      T =
                        l && 1 <= l.length
                          ? C("sp" === l ? u.bidConfig.amznsz_sp : X(c, u, l))
                          : C(u.bidConfig.amznsz);
                    1 === arguments.length
                      ? (Object(Vt.c)("renderFootprint", "JSONp"),
                        I({
                          doc: u.doc,
                          bidID: u.bidConfig.amzniid,
                          sizes: T,
                          html: t.html,
                          inheritSize: u.inheritSize || !1,
                          isOutstream: d,
                        }))
                      : (Object(Vt.c)("bidRenderState", u.bidState),
                        (f = a ? "sharedpmp" : "open"),
                        void 0 !== n
                          ? Object(Vt.c)(
                              "renderFootprint",
                              "multi-".concat(f, "-").concat(i)
                            )
                          : Object(Vt.c)(
                              "renderFootprint",
                              "standard-".concat(f, "-").concat(i)
                            ),
                        u.bidState === Lt.c.rendered && ct(u),
                        At.a.dispatch({
                          type: "BID_STATE_CHANGE",
                          slotID: u.slotID,
                          _targetingSetID: u._targetingSetID,
                          bidState: Lt.c.rendered,
                          ts: Date.now(),
                        }),
                        (b = u.host),
                        (p = u.bidConfig.slotID),
                        (y = "amznad".concat(Math.round(1e6 * Math.random()))),
                        (g = {
                          bidID: c,
                          doc: t,
                          slotID: p,
                          pp: R("amznbid", u, l),
                          host: b,
                          adID: y,
                          sizes: T,
                          amznp: R("amznp", u, l),
                          crID: R("crid", u, l),
                          fif: !1,
                          dealId: l,
                          isSharedPMP: a,
                          cfe: u.cfe,
                          isOutstream: d,
                          inheritSize:
                            Object(Rt.j)(n) &&
                            Object(Rt.k)(n, "inheritSize") &&
                            !0 === n.inheritSize,
                        }),
                        "1" === u.bidConfig.fif && !1 === d && !1 === a
                          ? ((g.fif = !0),
                            At.a.dispatch({
                              type: "UPDATE_BID_INFO_PROP",
                              slotID: u.slotID,
                              iid: e,
                              key: "doc",
                              value: t,
                            }),
                            At.a.dispatch({
                              type: "UPDATE_BID_INFO_PROP",
                              slotID: u.slotID,
                              iid: e,
                              key: "inheritSize",
                              value: g.inheritSize,
                            }),
                            Object(Ft.b)(
                              _(g),
                              function () {},
                              document,
                              function () {
                                return Object(Mt.b)(
                                  new Error(
                                    "Error Loading JSONP Render Callback"
                                  ),
                                  "renderImp-fif-callback-load",
                                  { makeVisibleToAllUsers: !0 }
                                );
                              }
                            ))
                          : d
                          ? (At.a.dispatch({
                              type: "OUTSTREAM_SHOULD_SAMPLE",
                              shouldSample: Object(Rt.l)(10),
                            }),
                            At.a.getState().outstream.shouldSample &&
                              (Object(Vt.e)("renderImp", g.bidID),
                              At.a.dispatch({
                                type: "RECORD_OUTSTREAM_RENDER_START_TIME",
                                time: Date.now(),
                              })),
                            (v = Object(Nt.c)(g, Lt.b)),
                            (S =
                              1 <=
                              (null ==
                              (j =
                                null ==
                                  (m =
                                    At.a.getState().bidConfigs[u.bidReqID]) ||
                                null == (h = m.slots)
                                  ? void 0
                                  : h.filter(function (t) {
                                      return (
                                        (null == t ? void 0 : t.slotID) ===
                                        (null == g ? void 0 : g.slotID)
                                      );
                                    }))
                                ? void 0
                                : j.length)
                                ? null == (O = j[0])
                                  ? void 0
                                  : O.companions
                                : []),
                            (w = Object(Nt.b)(v, Lt.C, g, S)),
                            (g.html = w),
                            I(g))
                          : At.a.getState().aaxViewabilityEnabled
                          ? z(g, t, r)
                          : E(g),
                        d || rt(t, g),
                        Object(Vt.c)("renderImp", "complete"));
                  } else
                    try {
                      Object(Mt.b)(
                        new Error(
                          "Invalid bid ID. '"
                            .concat(
                              "(bidID value: " + e + ", bID value: " + c + ")",
                              "' tried to render into document "
                            )
                            .concat(
                              t instanceof Document
                                ? t.documentURI
                                : "with type " + ee(t)
                            )
                        ),
                        "_renderImp-invalidId",
                        { makeVisibleToAllUsers: !0 }
                      );
                    } catch (t) {
                      Object(Mt.b)(t, "_renderImp-invalidId");
                    }
                }
              } catch (t) {
                Object(Mt.b)(t, "_renderImp", { makeVisibleToAllUsers: !0 });
              }
            }
            function R(t, e, n) {
              try {
                var r,
                  o = "";
                return (
                  void 0 !== n && 1 <= n.length
                    ? ((r = "".concat(t, "_sp")),
                      "sp" === n &&
                        Object(Rt.k)(e.bidConfig, r) &&
                        (o = e.bidConfig[r]))
                    : Object(Rt.k)(e.bidConfig, t) && (o = e.bidConfig[t]),
                  o
                );
              } catch (t) {
                return Object(Mt.b)(t, "_getProperBidInfoValue"), "";
              }
            }
            function z(t, e, n) {
              try {
                var r = e.createElement("script"),
                  o =
                    ((r.type = "text/javascript"),
                    (r.async = !0),
                    {
                      doc: e,
                      bidID: t.bidID,
                      states: {
                        csmLoaded: !1,
                        iframeLoaded: !1,
                        shouldRunViewability: !0,
                      },
                    }),
                  i = et.bind(null, o, n);
                Object(Ft.a)(r, function () {
                  (o.states.csmLoaded = !0), i();
                });
                try {
                  r.addEventListener("error", function (t) {
                    return Object(Vt.b)({
                      _type: "csm_fail",
                      ts: Date.now(),
                      msg: t.message,
                    });
                  });
                } catch (t) {
                  Object(Mt.b)(t, "_loadViewabilityAd-csm");
                }
                E(t, o, i), (r.src = At.a.getState().cfg.CSM_JS), b(e, r);
              } catch (t) {
                Object(Mt.b)(t, "_loadViewabilityAd");
              }
            }
            function x(t) {
              var e = oe;
              try {
                var n,
                  r = ie();
                Object(Yt.a)(r)
                  .record("_legacy/bidRequest/didComplete", {
                    pairedEvents: ["_legacy/bidRequest/monitor"],
                    eventIdentifier: t.cb,
                    statusUpdate: "completed",
                  })
                  .catch(function () {}),
                  Object(Yt.a)(r)
                    .record("_legacy/_bids/willExecute")
                    .catch(function () {}),
                  null != (n = t.slots) &&
                    n.some(function (t) {
                      return t.amzniid;
                    }) &&
                    Object(Yt.a)(r)
                      .record("_legacy/validBid/didExist")
                      .catch(function () {});
              } catch (t) {}
              try {
                N(t, e),
                  Object(Rt.k)(t, "slots") &&
                    (At.a.dispatch({ type: "UPDATE_SLOT_BIDS", bids: $(t) }),
                    Object(Rt.k)(t, "ev") &&
                      At.a.dispatch({
                        type: "SET_VIEWABILITY",
                        viewability: t.ev,
                      }),
                    Object(Rt.k)(t, "cfn")) &&
                    At.a.dispatch({
                      type: "SET_CFG",
                      cfg: {
                        CSM_JS:
                          "//" === t.cfn.substring(0, 2)
                            ? t.cfn
                            : "//c.amazon-adsystem.com/".concat(t.cfn),
                      },
                    }),
                  V(t);
              } catch (t) {
                Object(Mt.b)(t, "_bids", { makeVisibleToAllUsers: !0 });
              }
            }
            function jt() {
              return (
                "number" == typeof At.a.getState().cfg.MAX_SLOTS_PER_REQUEST &&
                0 < At.a.getState().cfg.MAX_SLOTS_PER_REQUEST
              );
            }
            function St(t, e, n) {
              var r,
                o =
                  null !=
                  (r =
                    null == n || null == (r = n.initConfig) ? void 0 : r.pubID)
                    ? r
                    : At.a.getState().config.pubID;
              try {
                Object(Yt.a)(o)
                  .record("_legacy/fetchBids/willExecute")
                  .catch(function () {}),
                  Object(Yt.a)(o)
                    .record("consent/tcfapi/attemptSync")
                    .catch(function () {}),
                  Object(Yt.a)(o)
                    .record("consent/gppapi/attemptSync")
                    .catch(function () {}),
                  a.attemptConsentDataSync();
                var i = Object(Xt.b)();
                Object(Pt.a)(
                  At.a.getState().config.gdpr,
                  function (r) {
                    wt(t, e, r, i, {
                      initConfig: null == n ? void 0 : n.initConfig,
                      contextURL: null == n ? void 0 : n.contextURL,
                      accountID: o,
                    });
                  },
                  o
                );
              } catch (r) {
                Object(Mt.b)(r, "_getConfigsAndFetchBids", {
                  makeVisibleToAllUsers: !0,
                });
              }
            }
            function wt(t, e, n, r, o) {
              var i = o.accountID,
                a = null != o && o.adServer ? Object(qt.a)(o.adServer) : oe;
              try {
                Object(Qt.b)(e, ["function", "undefined"]) ||
                  Object(Mt.c)("fetchBids.callback", ee(e), "function"),
                  "function" != typeof e && (e = function () {}),
                  Object(Rt.j)(t) ||
                    (Object(Mt.c)("fetchBids.bidConfig", ee(t), "object"),
                    (t = {})),
                  Object(Qt.a)(t.timeout) ||
                    ("string" == typeof t.timeout
                      ? Object(Mt.b)(
                          {
                            name: "string-".concat(t.timeout),
                            message:
                              "fetchBids.bidConfig.timeout was a non-numeric string '".concat(
                                t.timeout,
                                "'"
                              ),
                          },
                          "TypeError-fetchBids.bidConfig.timeout",
                          { makeVisibleToAllUsers: !0 }
                        )
                      : Object(Mt.c)(
                          "fetchBids.bidConfig.timeout",
                          ee(t.timeout),
                          "number"
                        )),
                  Object(Rt.k)(t, "params") && !Object(Rt.j)(t.params)
                    ? Object(Mt.c)(
                        "fetchBids.bidConfig.params",
                        ee(t.params),
                        "object"
                      )
                    : Object(Rt.k)(t, "params") &&
                      Object(Rt.j)(t.params) &&
                      Object.keys(t.params).forEach(function (e) {
                        return !(
                          void 0 === t.params ||
                          ("string" != typeof t.params[e] &&
                            "number" != typeof t.params[e] &&
                            (Object(Rt.i)(t.params[e])
                              ? !t.params[e].reduce(function (t, e) {
                                  return (
                                    t &&
                                    ("string" == typeof e ||
                                      "number" == typeof e)
                                  );
                                }, !0) &&
                                (Object(Mt.b)(
                                  {
                                    name: "non-string array item",
                                    message:
                                      "'fetchBids.bidConfig.params.".concat(
                                        e,
                                        " contains a non-string item"
                                      ),
                                  },
                                  "TypeError-fetchBids.bidConfig.params.".concat(
                                    e
                                  ),
                                  { makeVisibleToAllUsers: !0 }
                                ),
                                1)
                              : (Object(Mt.c)(
                                  "fetchBids.bidConfig.params.".concat(e),
                                  ee(t.params[e]),
                                  "string' or 'array"
                                ),
                                1)))
                        );
                      }),
                  Object(Rt.k)(t, "blockedBidders") &&
                  !Object(Rt.i)(t.blockedBidders)
                    ? Object(Mt.c)(
                        "fetchBids.bidConfig.blockedBidders",
                        ee(t.blockedBidders),
                        "array"
                      )
                    : Object(Rt.k)(t, "blockedBidders") &&
                      Object(Rt.i)(t.blockedBidders) &&
                      (t.blockedBidders.reduce(function (t, e) {
                        return (
                          t && ("string" == typeof e || "number" == typeof e)
                        );
                      }, !0) ||
                        Object(Mt.b)(
                          {
                            name: "non-string array item",
                            message:
                              "'fetchBids.bidConfig.blockedBidders contains a non-string item",
                          },
                          "TypeError-fetchBids.bidConfig.blockedBidders",
                          { makeVisibleToAllUsers: !0 }
                        )),
                  Object(Rt.k)(t, "blockedBidders")
                    ? Object(Vt.c)("blockedBidders-fetchBids", "y")
                    : Object(Vt.c)("blockedBidders-fetchBids", "n"),
                  Object(Rt.k)(t, "slots") &&
                    !Object(Rt.i)(t.slots) &&
                    Object(Mt.c)(
                      "fetchBids.bidConfig.slots",
                      ee(t.slots),
                      "array"
                    );
              } catch (a) {
                Object(Mt.b)(a, "_fetchBids-validation", {
                  makeVisibleToAllUsers: !0,
                });
              }
              var c = !1,
                s =
                  ((ae({ overrides: null == o ? void 0 : o.initConfig })
                    .simplerGPT ||
                    Object(Yt.a)(i).read("ad/googletagSlotAutoImport")) &&
                    (c = !0),
                  ne(
                    ne({}, t),
                    {},
                    {
                      bidReqID: "".concat(At.a.getState().AAXReqs.length),
                      slots: [],
                      validSlots: [],
                      networkReqs: [],
                    }
                  )),
                u = !1;
              try {
                !0 === c &&
                (!Object(Rt.k)(t, "slots") ||
                  (Object(Rt.k)(t, "slots") &&
                    Object(Rt.i)(t.slots) &&
                    0 < t.slots.length &&
                    Object(Rt.k)(t.slots[0], "getSlotElementId")))
                  ? 0 === Object(zt.b)(a).length
                    ? (Object(Mt.b)(
                        new Error(
                          "fetchBids was called in simplerGPT mode before any slots were defined in GPT"
                        ),
                        "_fetchBids-simplerGpt-NoSlots",
                        { makeVisibleToAllUsers: !0 }
                      ),
                      (u = !0),
                      (s.slots = []))
                    : (t.slots
                        ? (Object(Vt.c)("slots", "gpt-provided"),
                          (s.slots = t.slots.map(function (t) {
                            return new Kt.a(t);
                          })))
                        : (Object(Vt.c)("slots", "gpt-fetch"),
                          (s.slots = Object(zt.b)(a))),
                      (s.slots = s.slots.filter(zt.a)),
                      0 === s.slots.length &&
                        (Object(Mt.b)(
                          new Error(
                            "No GPT slots provided to apstag.fetchBids() had valid sizes"
                          ),
                          "_fetchBids-simplerGpt-NoValidSizes",
                          { makeVisibleToAllUsers: !0 }
                        ),
                        (u = !0)))
                  : Object(Rt.k)(t, "slots") &&
                    Object(Rt.i)(t.slots) &&
                    (c
                      ? Object(Vt.c)("slots", "gpt-aps")
                      : Object(Vt.c)("slots", "aps"),
                    (s.slots = t.slots.map(function (t) {
                      switch (t.mediaType) {
                        case Gt.a.DISPLAY:
                          return new $t.a(t);
                        case Gt.a.VIDEO:
                          return new le.a(t);
                        case Gt.a.MULTI_FORMAT:
                          return new de.a(t);
                        default:
                          return new $t.a(t);
                      }
                    }))),
                  (s.validSlots = s.slots.filter(function (t) {
                    return t.isValid();
                  })),
                  s.validSlots.length > Lt.n &&
                    ((s.validSlots = s.validSlots.slice(
                      s.validSlots.length - Lt.n
                    )),
                    Object(Vt.c)(
                      "slots",
                      ""
                        .concat(Lt.n, " max-allowed-slots-exceeded with ")
                        .concat(s.slots.length, " slots defined")
                    ));
              } catch (a) {
                Object(Mt.b)(a, "_fetchBids-getSlots", {
                  makeVisibleToAllUsers: !0,
                });
              }
              var l,
                d = Object(Ct.i)(s, At.a.getState());
              try {
                e = Object(Ct.b)(nt(e, s, a, o), d);
              } catch (a) {
                Object(Mt.b)(a, "_fetchBids-wrapCallback", {
                  makeVisibleToAllUsers: !0,
                });
              }
              try {
                if (0 === s.validSlots.length)
                  return (
                    !1 === u &&
                      Object(Mt.b)(
                        new Error(
                          "No valid slots provided to apstag.fetchBids"
                        ),
                        "_fetchBids-noSlots",
                        { makeVisibleToAllUsers: !0 }
                      ),
                    void setTimeout(e.bind(null, []), 10)
                  );
                try {
                  var f = 1 === s.slots.length ? "single" : "multi",
                    b = Date.now() - m <= Lt.r ? "onload" : "ondelay",
                    p = At.a.getState().AAXReqs.reduce(function (t, e) {
                      return (
                        e.bidConfig.slots.forEach(function (e) {
                          Object(Rt.h)(t, e.slotID) || t.push(e.slotID);
                        }),
                        t
                      );
                    }, []);
                  s.slots
                    .map(function (t) {
                      return t.slotID;
                    })
                    .map(function (t) {
                      return Object(Rt.h)(p, t);
                    })
                    .map(function (t) {
                      return t ? "refresh" : "initial";
                    })
                    .filter(function (t, e, n) {
                      return n.indexOf(t) === e;
                    })
                    .forEach(function (t) {
                      return Object(Vt.c)(
                        "fetchBids",
                        "".concat(f, "-").concat(b, "-").concat(t)
                      );
                    });
                } catch (a) {
                  Object(Mt.b)(a, "_fetchBids-feature");
                }
                if (
                  (ht(
                    s.slots
                      .filter(Object(zt.d)(Gt.a.DISPLAY, Gt.a.MULTI_FORMAT))
                      .map(zt.c),
                    a
                  ),
                  At.a.dispatch({
                    type: "NEW_FETCH_BID_REQUEST",
                    fid: s.bidReqID,
                    pto: d,
                  }),
                  At.a.dispatch({
                    type: "RECORD_ORIGINAL_BID_CONFIG",
                    bidConfig: s,
                  }),
                  Object(Yt.a)(i)
                    .record("_legacy/bidRequest/monitor", {
                      eventIdentifier: s.bidReqID,
                    })
                    .catch(function () {}),
                  Object(Yt.a)(i)
                    .record("_legacy/bids/willFetch")
                    .catch(function () {}),
                  Object(xt.d)("fake_bids"))
                )
                  ot(s);
                else if (Lt.k)
                  if (
                    (At.a.dispatch({
                      type: "SHOULD_CHUNK_REQUESTS",
                      value: Object(Rt.l)(
                        At.a.getState().cfg.CHUNK_BID_REQUESTS_PROPORTION
                      ),
                    }),
                    At.a.getState().experiments.chunkRequests && jt())
                  ) {
                    for (var y = Tt(s), g = 0; g < y.length; g++)
                      y[g].bidReqID = "".concat(s.bidReqID, "-").concat(g);
                    At.a.dispatch({
                      type: "ADD_CHUNKED_REQUESTS",
                      fid: s.bidReqID,
                      numChunks: y.length,
                    }),
                      y.forEach(function (t) {
                        h(Object(Ht.d)(t, d, n, r, o), e, t.bidReqID, i);
                      });
                  } else h(Object(Ht.d)(s, d, n, r, o), e, s.bidReqID, i);
                else Object(Ft.b)(Object(Ht.d)(s, d, n, r, o), e);
              } catch (a) {
                Object(Mt.b)(a, "_fetchBids", { makeVisibleToAllUsers: !0 });
              }
              try {
                null != o &&
                  null != (l = o.initConfig) &&
                  l.pubID &&
                  Object(pe.c)(o.initConfig.pubID);
              } catch (a) {}
            }
            function Tt(t) {
              try {
                for (
                  var e = Math.ceil(
                      t.validSlots.length /
                        At.a.getState().cfg.MAX_SLOTS_PER_REQUEST
                    ),
                    n = new Array(e),
                    r = 0;
                  r < e;
                  r++
                ) {
                  var o = r * At.a.getState().cfg.MAX_SLOTS_PER_REQUEST;
                  n[r] = {
                    slots: t.validSlots.slice(
                      o,
                      o + At.a.getState().cfg.MAX_SLOTS_PER_REQUEST
                    ),
                  };
                }
                return n.map(function (e) {
                  return ne(ne({}, t), e);
                });
              } catch (e) {
                return (
                  Object(Mt.b)(e, "chunkConfig", { makeVisibleToAllUsers: !0 }),
                  []
                );
              }
            }
            function _t(t, e) {
              var n = null != e && e.adServer ? Object(qt.a)(e.adServer) : oe;
              try {
                (null != e && e.adServer) ||
                Object(Rt.k)(At.a.getState().config, "adServer")
                  ? n.isSupported
                    ? (W(n, t, e), O(n))
                    : Object(Mt.b)(
                        new Error(
                          "apstag.setDisplayBids called with unsupported ad server: ".concat(
                            At.a.getState().config.adServer
                          )
                        ),
                        "_setDisplayBids-invalidAdServer",
                        { makeVisibleToAllUsers: !0 }
                      )
                  : Object(Mt.b)(
                      new Error(
                        "apstag.setDisplayBids called without specifying ad server"
                      ),
                      "_setDisplayBids-noAdServer",
                      { makeVisibleToAllUsers: !0 }
                    );
              } catch (t) {
                Object(Mt.b)(t, "_setDisplayBids", {
                  makeVisibleToAllUsers: !0,
                });
              }
            }
            function Dt(t, e) {
              var n,
                r = t.pubID;
              Object(Yt.a)(r)
                .record("_legacy/updateConfig/willExecute")
                .catch(function () {}),
                ((null != (n = t.gdpr) && n.consent) ||
                  (null != (n = t.gdpr) && n.enabled)) &&
                  ((n = {
                    tcString: null == (n = t.gdpr) ? void 0 : n.consent,
                    gdprApplies: null == (n = t.gdpr) ? void 0 : n.enabled,
                  }),
                  a.writeConsentDataToStore(n)),
                a.attemptConsentDataSync(),
                Object(Yt.a)(t.pubID)
                  .record("consent/tcfapi/attemptSync")
                  .catch(function () {}),
                Object(Yt.a)(t.pubID)
                  .record("consent/gppapi/attemptSync")
                  .catch(function () {}),
                q(t, r),
                "function" == typeof e && e();
            }
            function It(t, e) {
              var n = t.pubID;
              try {
                Object(Yt.a)(n)
                  .record("_legacy/init/willExecute")
                  .catch(function () {}),
                  Object(Yt.a)(n)
                    .record("log/analytics/setSampling", { ratio: 0.001 })
                    .catch(function () {}),
                  Object(Yt.a)(n)
                    .record("deviceSignal/sua/set")
                    .catch(function () {});
                var r = (oe = t.adServer ? Object(qt.a)(t.adServer) : oe);
                t.disableConfigCall ||
                  Object(Yt.a)(t.pubID)
                    .record("apstag/configuration/fetch")
                    .catch(function () {}),
                  Dt(t),
                  mt(r),
                  Object(be.b)(),
                  Object(Xt.c)(n);
              } catch (t) {
                Object(Mt.b)(t, "_init");
              }
              "function" == typeof e && e();
            }
            function Et() {
              var t,
                e =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : "display",
                n = oe,
                r = At.a.getState();
              try {
                switch (e) {
                  case Gt.a.DISPLAY:
                    return (
                      Object(Vt.c)("targeting", "targetingKeys-display"),
                      r.config.useSafeFrames
                        ? [].concat(te(Lt.i), ["amznhost"])
                        : Lt.i
                    );
                  case Gt.a.VIDEO:
                    return (
                      Object(Vt.c)("targeting", "targetingKeys-video"),
                      r.config.useSafeFrames
                        ? [].concat(te(Lt.B), ["amznhost"])
                        : Lt.B
                    );
                  default:
                    if (
                      Object(Ht.g)(
                        null == (t = At.a.getState()) ? void 0 : t.config,
                        n
                      )
                    ) {
                      if (
                        (Object(Vt.c)("targeting", "targetingKeys-newBid"),
                        Object(Rt.i)(At.a.getState().targetingKeys[e]))
                      )
                        return At.a.getState().targetingKeys[e];
                    } else Object(Vt.c)("targeting", "targetingKeys-invalid");
                    return [];
                }
              } catch (t) {
                return (
                  Object(Mt.b)(t, "_targetingKeys", {
                    makeVisibleToAllUsers: !0,
                  }),
                  []
                );
              }
            }
            function kt() {
              try {
                return At.a.getState().AAXReqs.reduce(function (t, e) {
                  return e.bidConfig.slots.reduce(function (t, e) {
                    return (t[e.slotID] = e.slotName), t;
                  }, t);
                }, {});
              } catch (t) {
                return (
                  Object(Mt.b)(t, "_getSlotIdToNameMapping", {
                    makeVisibleToAllUsers: !0,
                  }),
                  {}
                );
              }
            }
            try {
              Object(Rt.k)(window, "apstag") &&
                Object(Rt.k)(window.apstag, "_Q") &&
                0 < window.apstag._Q.length &&
                At.a.dispatch({ type: "SET_Q", Q: window.apstag._Q });
            } catch (t) {
              Object(Mt.b)(t, "apstag-storeQ", { makeVisibleToAllUsers: !0 });
            }
            (window.apstag = (function () {
              var e = {
                punt: x,
                init: It,
                debug: xt.a,
                _getSlotIdToNameMapping: kt,
                targetingKeys: Et,
                fetchBids: St,
                setDisplayBids: _t,
                renderImp: vt,
                bids: x,
                deleteId: Jt.a,
                updateId: Jt.e,
                renewId: Jt.d,
                dpa: Jt.a,
                upa: Jt.e,
                rpa: Jt.d,
                thirdPartyData: {},
                isGDPRRegion: !1,
                rr: ue.a,
                re: Mt.b,
                _load3PLibraryConfig: Xt.c,
              };
              return (
                Object.keys(e).forEach(function (t) {
                  "function" == typeof e[t] &&
                    ((e[t] = Object(Zt.a)(t, e[t])),
                    (e[t] = Object(Mt.d)(e[t], t)));
                }),
                r ? Object(xt.b)(!0, t) : n && Object(xt.b)(!1, t),
                !0 === Object(xt.c)("exposeApi") &&
                  (e._api = {
                    _getBidSetInfo: k,
                    _applyTargetingToGPTSlot: f,
                    dispatch: At.a.dispatch,
                    _clearTargetingFromGPTSlot: i,
                    _clearBidSetOnSlot: l,
                    _getCurrentSlotBids: d,
                    _creativeURL: _,
                    getSlotFetchCounts: w,
                    buildBidUrl: Ht.d,
                  }),
                e
              );
            })()),
              (function () {
                try {
                  var t,
                    e =
                      (At.a.dispatch({
                        type: "SHOULD_SAMPLE_FEATURES",
                        value: Object(Rt.l)(
                          At.a.getState().cfg.FEATURE_SAMPLING_RATE
                        ),
                      }),
                      At.a.dispatch({
                        type: "SET_HOST",
                        hostName: "DEFAULT_AAX_BID_HOST",
                        hostValue: "aax.amazon-adsystem.com",
                      }),
                      At.a.dispatch({
                        type: "SHOULD_SAMPLE_LATENCY",
                        value: Object(Rt.l)(
                          At.a.getState().cfg.LATENCY_SAMPLING_RATE
                        ),
                      }),
                      null !== At.a.getState().cfg.TEST_BID_ENDPOINT &&
                        ((t = Object(Rt.l)(
                          At.a.getState().cfg.TEST_PATH_FREQUENCY
                        )),
                        At.a.dispatch({
                          type: "SHOULD_USE_TEST_BID_ENDPOINT",
                          value: t,
                        }),
                        t) &&
                        null !==
                          At.a.getState().cfg.TEST_PATH_LATENCY_SAMPLE_RATE &&
                        At.a.dispatch({
                          type: "SHOULD_SAMPLE_LATENCY",
                          value: Object(Rt.l)(
                            At.a.getState().cfg.TEST_PATH_LATENCY_SAMPLE_RATE
                          ),
                        }),
                      At.a.dispatch({
                        type: "SHOULD_SAMPLE_SLOT_RENDER",
                        value: Object(Rt.l)(
                          At.a.getState().cfg.SLOT_RENDER_SAMPLING_RATE
                        ),
                      }),
                      At.a.getState());
                  (e.experiments.shouldSampleLatency ||
                    e.displayAdServer.shouldSampleRender) &&
                    S(),
                    e.displayAdServer.shouldSampleRender && lt(),
                    e.experiments.shouldSampleLatency && T(oe);
                } catch (t) {
                  Object(Mt.b)(t, "apstag-sampleLatency");
                }
                try {
                  F();
                } catch (t) {
                  Object(Mt.b)(t, "apstag-doLast");
                }
                if (!Object(Ct.k)(window, !0))
                  try {
                    var n = function (t) {
                      (t && "object" !== ee(t)) ||
                        (t = "Request Timeout or Error"),
                        Object(Mt.b)(
                          {
                            message: "csm-rtb-comm-js loading failed",
                            name: t,
                          },
                          "__csm-rtb-comm-js__"
                        );
                    };
                    Object(Ft.d)({
                      url: At.a.getState().cfg.CSM_RTB_COMMUNICATOR_JS,
                      onload: function t(e) {
                        e.readyState === XMLHttpRequest.DONE && 200 === e.status
                          ? eval(e.responseText)
                          : n(
                              JSON.stringify({
                                status: e.statusText,
                                response: e.responseXML,
                              })
                            );
                      },
                      onerror: n,
                      ontimeout: n,
                    });
                  } catch (t) {
                    Object(Mt.b)(t, "__load-csm-rtb-comm-js__");
                  }
                Object(xt.e)();
              })();
          })(),
          Object(Yt.a)("_system")
            .record("apstag/library/didLoad", { source: "bundle" })
            .catch(function () {}));
    } catch (t) {
      Object(Mt.b)(t, "apstag");
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return b;
    }),
      n.d(e, "c", function () {
        return h;
      }),
      n.d(e, "b", function () {
        return O;
      }),
      n.d(e, "d", function () {
        return v;
      });
    var r = n(1),
      o = n(3),
      i = n(0),
      a = n(2),
      c = n(8);
    function s(t) {
      return (s =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function u(t, e) {
      var n,
        r = Object.keys(t);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(t)),
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
          r.push.apply(r, n)),
        r
      );
    }
    function l(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? u(Object(n), !0).forEach(function (e) {
              var r, o;
              (r = t),
                (o = n[(e = e)]),
                (e = (function (t) {
                  return (
                    (t = (function (t, e) {
                      if ("object" !== s(t) || null === t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 === n) return String(t);
                      if ("object" !== s((n = n.call(t, e)))) return n;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(t, "string")),
                    "symbol" === s(t) ? t : String(t)
                  );
                })(e)) in r
                  ? Object.defineProperty(r, e, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[e] = o);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : u(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var d =
        Number.isInteger ||
        function (t) {
          return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
        },
      f = "__tcfapi";
    function b(t, e, n) {
      if ((p = Object(c.a)(n).read("consent/TCData")))
        e({
          enabled: p.gdprApplies ? 1 : 0,
          consent: p.tcString,
          log: { status: "tcfv2-success" },
          gdprApplies: p.gdprApplies,
        });
      else {
        Object(c.a)(n)
          .record("_legacy/getGdprConfig_legacy/willExecute")
          .catch(function () {});
        var a,
          u = !1,
          b = { log: { status: "no-status" } },
          p = 50,
          y = "global-func-error";
        e = Object(r.d)(e, "GdprCallback");
        try {
          if (
            (!1 === (t = Object(i.j)(t) ? l({}, t) : {}).enabled ||
            0 === t.enabled
              ? ((b.log.status = "explicit-no-gdpr"), (b.enabled = 0))
              : !0 === t.enabled || 1 === t.enabled
              ? ((b.log.status = Object(i.k)(t, "consent")
                  ? "explicit-consent-passed"
                  : "explicit-no-consent-passed"),
                (b.enabled = 1),
                (b.consent = t.consent))
              : Object(i.k)(t, "enabled") &&
                ((b.log.status = Object(i.k)(t, "consent")
                  ? "malformed-with-consent"
                  : "malformed-without-consent"),
                (b.consent = t.consent),
                d(t.enabled) ? (b.enabled = t.enabled) : (b.enabled = 1)),
            Object(i.k)(t, "enabled") && (b.log.enabled = t.enabled),
            Object(i.k)(t, "cmpTimeout") &&
              d(t.cmpTimeout) &&
              ((p = t.cmpTimeout), (b.log.cmpTimeout = p)),
            void 0 !== b.enabled)
          )
            return (
              Object(o.c)("gdpr", "pub-api"),
              Object(i.k)(b, "consent") &&
                "string" != typeof b.consent &&
                (delete b.consent,
                Object(r.b)(
                  new Error(
                    "Invalid consent: must be string, given ".concat(
                      s(b.consent)
                    )
                  ),
                  "getGdprConfig-pub-consent-invalid",
                  { makeVisibleToAllUsers: !0 }
                )),
              void g()
            );
        } catch (t) {
          Object(r.b)(t, "getGdprConfig-parseConfig", {
            makeVisibleToAllUsers: !0,
          });
        }
        try {
          Object(i.k)(window, f) && "function" == typeof window[f]
            ? ((a = "tcfv2"),
              Object(o.c)("gdpr", a),
              setTimeout(function () {
                (b.log.status = "".concat(a, "-timeout")), g();
              }, p),
              (y = "".concat(a, "-internal-error")),
              window[f]("getTCData", 2, function (t, e) {
                try {
                  e && Object(i.j)(t)
                    ? ((b.log.status = "".concat(a, "-success")),
                      Object(i.k)(t, "tcString")
                        ? (b.consent = t.tcString)
                        : Object(i.k)(t, "consentData") &&
                          (b.consent = t.consentData),
                      (b.enabled = t.gdprApplies ? 1 : 0),
                      0 === b.enabled && delete b.consent,
                      (b.gdprApplies = t.gdprApplies),
                      g())
                    : ((b.log.status = "".concat(a, "-error")), g());
                } catch (t) {
                  (b.log.status = "func-error"),
                    g(),
                    Object(r.b)(t, "cmpCallback-".concat(a), {
                      makeVisibleToAllUsers: !0,
                    });
                }
              }))
            : (Object(o.c)("gdpr", "no-cmp"), (b.log.status = "no-cmp"), g());
        } catch (t) {
          (b.log.status = y),
            g(),
            Object(r.b)(t, "getGdprConfig-".concat(y), {
              makeVisibleToAllUsers: !0,
            });
        }
      }
      function g() {
        u ||
          ((u = !0),
          b.consent &&
            Object(r.b)(
              new Error(
                "Legacy getTCData logic was successful when addEventListener logic wasn't"
              ),
              "LEGACY-TCFAPI-SUCCESS",
              { makeVisibleToAllUsers: !1, accountId: n }
            ),
          e(l(l({}, b), {}, { log: l({}, b.log) })));
      }
    }
    function p(t) {
      for (var e = [], n = -1; 0 <= (n = t.indexOf("1", n + 1)); )
        e.push(n + 1);
      return e;
    }
    function y(t) {
      for (var e = [], n = parseInt(m(t, 12), 2), r = 0; r < n; r++) {
        var o = parseInt(m(t, 1), 2),
          i = parseInt(m(t, 16), 2);
        if ((e.push(i), o))
          for (var a = parseInt(m(t, 16), 2), c = i + 1; c <= a; c++) e.push(c);
      }
      return e;
    }
    function g(t) {
      var e = parseInt(m(t, 16), 2);
      return parseInt(m(t, 1), 2) ? y(t) : p(m(t, e));
    }
    function m(t, e) {
      var n = t.bits.substr(t.index, e);
      return (t.index += e), n;
    }
    function h(t) {
      try {
        var e, n, o;
        return (
          !!t &&
          !(
            (e = (function (t) {
              try {
                for (
                  var e = (t = (t = t.replace(/-/g, "+")).replace(
                      /_/g,
                      "/"
                    )).split(".")[0],
                    n = window.atob(e),
                    o = "",
                    i = 0;
                  i < n.length;
                  i++
                )
                  o += ("0000000" + n.charCodeAt(i).toString(2)).substr(-8);
                return o;
              } catch (e) {
                return (
                  Object(r.b)(
                    new Error(
                      "TCF string conversion failed. (TCF string: ".concat(
                        t,
                        ")"
                      )
                    ),
                    "TCFToBinary",
                    { makeVisibleToAllUsers: !0 }
                  ),
                  ""
                );
              }
            })(t)).length < 230
          ) &&
          ((o = { bits: e, index: 0 }),
          ((n = {}).version = parseInt(m(o, 6), 2)),
          2 === n.version) &&
          ((n.created = parseInt(m(o, 36), 2)),
          (n.lastUpdated = parseInt(m(o, 36), 2)),
          (n.cmpId = parseInt(m(o, 12), 2)),
          (n.cmpVersion = parseInt(m(o, 12), 2)),
          (n.consentScreen = parseInt(m(o, 6), 2)),
          (n.consentLanguage =
            String.fromCharCode(parseInt(m(o, 6), 2) + 65) +
            String.fromCharCode(parseInt(m(o, 6), 2) + 65)),
          (n.vendorListVersion = parseInt(m(o, 12), 2)),
          (n.tcfPolicyVersion = parseInt(m(o, 6), 2)),
          (n.isServiceSpecific = "1" === m(o, 1)),
          (n.useNonStandardStacks = "1" === m(o, 1)),
          (n.specialFeatureOptIns = p(m(o, 12))),
          (n.purposesConsent = p(m(o, 24))),
          (n.purposesLITransparency = p(m(o, 24))),
          (n.purposeOneTreatment = "1" === m(o, 1)),
          (n.publisherCC =
            String.fromCharCode(parseInt(m(o, 6), 2) + 65) +
            String.fromCharCode(parseInt(m(o, 6), 2) + 65)),
          (n.vendorConsents = g(o)),
          (n.vendorLegitimateInterests = g(o)),
          (n.publisherRestrictions = (function (t) {
            for (var e = parseInt(m(t, 12), 2), n = [], r = 0; r < e; r++) {
              var o = parseInt(m(t, 6), 2),
                i = parseInt(m(t, 2), 2);
              n.push({ purposeId: o, restrictionType: i, vendorIds: y(t) });
            }
            return n;
          })(o)),
          n)
        );
      } catch (t) {
        return (
          Object(r.b)(t, "parseTCFString", { makeVisibleToAllUsers: !0 }), !1
        );
      }
    }
    function O(t) {
      var e = [];
      try {
        var n = Date.now(),
          r =
            (t || e.push("Invalid tcString: ".concat(t)),
            2 !== t.version &&
              e.push("tcString version not supported: ".concat(t.version)),
            t.useNonStandardStacks &&
              e.push("tcString's useNonStandardStacks should not be true"),
            t.isServiceSpecific ||
              e.push("tcString needs to be service specific"),
            t.publisherRestrictions
              ? t.publisherRestrictions.filter(function (t) {
                  return 1 === t.purposeId && 0 <= t.vendorIds.indexOf(793);
                })
              : []);
        if (0 === r.length) j(t) || e.push("Invalid publisher restrictions");
        else
          switch (r[0].restrictionType) {
            case 0:
            case 2:
              e.push("Invalid publisher restrictions");
              break;
            default:
              j(t) || e.push("Invalid publisher restrictions");
          }
        return (
          a.a.dispatch({ type: "RECORD_TCF_PARSE_TIME", time: Date.now() - n }),
          e
        );
      } catch (t) {
        if (e.length) return e;
        throw t;
      }
    }
    function v(t, e) {
      if (!t) return !!window.apstag && !window.apstag.isGDPRRegion && !0 !== e;
      if (window.apstag && !window.apstag.isGDPRRegion && !1 === e) return !0;
      if (2 !== t.version) return !1;
      if (t.useNonStandardStacks) return !1;
      if (!t.isServiceSpecific) return !1;
      if (
        0 ===
        (e = t.publisherRestrictions.filter(function (t) {
          return 1 === t.purposeId && 0 <= t.vendorIds.indexOf(793);
        })).length
      )
        return j(t);
      switch (e[0].restrictionType) {
        case 0:
        case 2:
          return !1;
        default:
          return j(t);
      }
    }
    function j(t) {
      return (
        !(
          !Object(i.k)(t, "vendorConsents") ||
          !Object(i.k)(t, "purposesConsent")
        ) &&
        0 <= t.vendorConsents.indexOf(793) &&
        0 <= t.purposesConsent.indexOf(1)
      );
    }
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function o(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, a(r.key), r);
      }
    }
    function i(t, e, n) {
      (e = a(e)) in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n);
    }
    function a(t) {
      return (
        (t = (function (t, e) {
          if ("object" !== r(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 === n) return String(t);
          if ("object" !== r((n = n.call(t, e)))) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        })(t, "string")),
        "symbol" === r(t) ? t : String(t)
      );
    }
    n.d(e, "a", function () {
      return c;
    });
    var c = (function () {
      function t() {
        if (!(this instanceof t))
          throw new TypeError("Cannot call a class as a function");
        i(this, "isSupported", !1), i(this, "needNewBidObject", !1);
      }
      var e, n;
      return (
        (e = t),
        (n = [
          { key: "cmdQueuePush", value: function (t) {} },
          { key: "slotRenderEndedEvent", value: function (t) {} },
          { key: "setTargeting", value: function (t, e) {} },
          {
            key: "getTargeting",
            value: function (t) {
              return [];
            },
          },
          { key: "clearTargeting", value: function (t, e) {} },
          {
            key: "hasAdServerObjectLoaded",
            value: function () {
              return !1;
            },
          },
          {
            key: "isCommandQueueDefined",
            value: function () {
              return !1;
            },
          },
          {
            key: "getSlots",
            value: function () {
              return [];
            },
          },
        ]) && o(e.prototype, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return d;
    });
    var r = n(0),
      o = n(1),
      i = n(6),
      a = n(3);
    function c(t) {
      return (c =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function s(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, l(r.key), r);
      }
    }
    function u(t, e, n) {
      (e = l(e)) in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n);
    }
    function l(t) {
      return (
        (t = (function (t, e) {
          if ("object" !== c(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 === n) return String(t);
          if ("object" !== c((n = n.call(t, e)))) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        })(t, "string")),
        "symbol" === c(t) ? t : String(t)
      );
    }
    var d = (function () {
      function t(e) {
        if (!(this instanceof t))
          throw new TypeError("Cannot call a class as a function");
        u(this, "_slotConfig", void 0),
          u(this, "rawSlot", void 0),
          (this._slotConfig = e),
          (this.rawSlot = e);
      }
      var e, n;
      return (
        (e = t),
        (n = [
          {
            key: "slotID",
            get: function () {
              return this._slotConfig.slotID;
            },
          },
          {
            key: "slotName",
            get: function () {
              return this._slotConfig.slotName;
            },
          },
          {
            key: "slotParams",
            get: function () {
              return this._slotConfig.slotParams;
            },
          },
          {
            key: "companions",
            get: function () {
              return this._slotConfig.companions;
            },
          },
          {
            key: "slotConfig",
            get: function () {
              return {
                slotID: this.slotID,
                slotName: this.slotName,
                sizes: this.sizes,
              };
            },
          },
          {
            key: "mediaType",
            get: function () {
              return i.a.DISPLAY;
            },
          },
          {
            key: "sizes",
            get: function () {
              return [];
            },
          },
          {
            key: "floor",
            get: function () {
              var t;
              return (
                Object(r.k)(this._slotConfig, "floor") &&
                "USD" === this._slotConfig.floor.currency &&
                this.validateFloorValue(this._slotConfig.floor.value)
                  ? ((t = this._slotConfig.floor),
                    Object(a.c)("customFloor", "y"))
                  : Object(a.c)("customFloor", "n"),
                t
              );
            },
          },
          {
            key: "aaxSlotParams",
            get: function () {
              var t = this;
              try {
                return Object(r.k)(this, "slotParams") &&
                  Object(r.j)(this.slotParams)
                  ? Object.keys(this.slotParams)
                      .filter(function (e) {
                        return t.validateSlotParamValue(t.slotParams[e]);
                      })
                      .reduce(function (e, n) {
                        return (e[n] = t.slotParams[n]), e;
                      }, {})
                  : void 0;
              } catch (t) {
                return this.reportError(t, "aaxSlotParams"), this.slotParams;
              }
            },
          },
          {
            key: "aaxSlot",
            get: function () {
              Object(a.c)("slotType", this.mediaType);
              var t = { kv: this.aaxSlotParams };
              return (
                this.floor &&
                  ((t.fc = this.floor.currency), (t.fp = this.floor.value)),
                t
              );
            },
          },
          {
            key: "isValid",
            value: function () {
              var t,
                e,
                n = [],
                o = [];
              return (
                void 0 === this.slotID
                  ? n.push("'slotID' must be provided and a string")
                  : "string" != typeof this.slotID &&
                    o.push("'slotID' must be a string"),
                Object(r.k)(this._slotConfig, "floor") &&
                  Object(r.j)(this._slotConfig.floor) &&
                  ((t = (e = this._slotConfig.floor).currency),
                  (e = e.value),
                  "USD" !== t && o.push("'floor' currency only supports USD"),
                  this.validateFloorValue(e) ||
                    o.push("'floor' value must be a positive integer")),
                Object(r.k)(this, "companions") &&
                  (Object(r.i)(this.companions)
                    ? this.companions.forEach(function (t) {
                        "string" != typeof t &&
                          n.push(
                            "'companions' contains a non-string item : ".concat(
                              t
                            )
                          );
                      })
                    : n.push("'companions' contains non-array")),
                0 < n.length
                  ? (this.reportIsValidMessages([].concat(n, o), !0), !1)
                  : (0 < o.length && this.reportIsValidMessages(o, !1), !0)
              );
            },
          },
          {
            key: "reportError",
            value: function (t, e, n) {
              Object(o.b)(t, "Slot-".concat(e), n);
            },
          },
          { key: "setTargeting", value: function (t, e) {} },
          {
            key: "getTargeting",
            value: function (t) {
              return [];
            },
          },
          { key: "clearTargeting", value: function (t) {} },
          {
            key: "reportIsValidMessages",
            value: function (t, e) {
              this.reportError(
                {
                  name: "SlotValidationError",
                  message: this.buildIsValidMessage(t, this._slotConfig),
                },
                "validation-".concat(e ? "error" : "warn"),
                { makeVisibleToAllUsers: !0 }
              );
            },
          },
          {
            key: "validateSlotParamValue",
            value: function (t) {
              var e = this;
              try {
                return Object(r.i)(t)
                  ? 0 < t.length &&
                      t.reduce(function (t, n) {
                        return t && e.validateSlotParamValue(n);
                      }, !0)
                  : "string" == typeof t && 0 < t.length;
              } catch (t) {
                return Object(o.b)(t, "validateSlotParamValue"), !1;
              }
            },
          },
          {
            key: "validateFloorValue",
            value: function (t) {
              return "number" == typeof t && 0 < t && t % 1 == 0;
            },
          },
          {
            key: "buildIsValidMessage",
            value: function (t, e) {
              return (
                "There was an issue with the configuration for this slot: ".concat(
                  JSON.stringify(e),
                  "\n"
                ) +
                t
                  .map(function (t) {
                    return "- ".concat(t);
                  })
                  .join("\n")
              );
            },
          },
        ]) && s(e.prototype, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
  },
  function (t, e, n) {
    "use strict";
    var r;
    n.d(e, "a", function () {
      return r;
    }),
      ((n = r = r || {}).DISPLAY = "d"),
      (n.VIDEO = "v"),
      (n.MULTI_FORMAT = "mf");
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a;
    }),
      n.d(e, "c", function () {
        return v;
      }),
      n.d(e, "e", function () {
        return j;
      }),
      n.d(e, "d", function () {
        return S;
      }),
      n.d(e, "b", function () {
        return D;
      });
    var s = n(10),
      l = n(1),
      u = n(34),
      d = n(4),
      f = n(2),
      b = n(5),
      p = n(0),
      y = n(3),
      g = n(17),
      r = n(35),
      m = n(24);
    function i(t, e) {
      var n,
        r,
        o,
        i,
        a,
        c,
        s =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
      if (s)
        return (
          (o = !(r = !0)),
          {
            s: function () {
              s = s.call(t);
            },
            n: function () {
              var t = s.next();
              return (r = t.done), t;
            },
            e:
              ((c = function (t) {
                (o = !0), (i = t);
              }),
              (u.toString = function () {
                return c.toString();
              }),
              u),
            f: function () {
              try {
                r || null == s.return || s.return();
              } finally {
                if (o) throw i;
              }
            },
          }
        );
      if (
        Array.isArray(t) ||
        (s = h(t)) ||
        (e && t && "number" == typeof t.length)
      )
        return (
          s && (t = s),
          (a = 0),
          {
            s: (e = function () {}),
            n: function () {
              return a >= t.length ? { done: !0 } : { done: !1, value: t[a++] };
            },
            e:
              ((n = function (t) {
                throw t;
              }),
              (l.toString = function () {
                return n.toString();
              }),
              l),
            f: e,
          }
        );
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
      function u(t) {
        return c.apply(this, arguments);
      }
      function l(t) {
        return n.apply(this, arguments);
      }
    }
    function h(t, e) {
      var n;
      if (t)
        return "string" == typeof t
          ? o(t, e)
          : "Map" ===
              (n =
                "Object" ===
                  (n = Object.prototype.toString.call(t).slice(8, -1)) &&
                t.constructor
                  ? t.constructor.name
                  : n) || "Set" === n
          ? Array.from(t)
          : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? o(t, e)
          : void 0;
    }
    function o(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    function a(t) {
      O(t), c(t);
    }
    function c(t) {
      try {
        var e,
          n = b.a.getDefault().sessionStorage,
          r = "aps_targeting_comscore",
          o = n.getItem(r, { isJson: !0 });
        n.removeItem(r),
          o && ((e = "vnd_prx_segments"), t.setTargeting(e, o[e]));
      } catch (t) {
        Object(l.b)(t, "applyComscoreTargeting");
      }
    }
    function O(t) {
      try {
        var e,
          n,
          r,
          o,
          i,
          a = b.a.getDefault().sessionStorage,
          c = "aps_targeting_ias",
          s = a.getItem(c, { isJson: !0 });
        a.removeItem(c),
          s &&
            ((e = s.targeting.slots[t.slotID]),
            Object.keys(e).forEach(function (n) {
              var r = e[n];
              t.setTargeting(n, r);
            }),
            (n = s.targeting),
            (r = n.brandSafety),
            (o = n.fr),
            (i = n.custom),
            r &&
              Object.keys(r).forEach(function (t) {
                var e = r[t];
                window.googletag.pubads().setTargeting(t, e);
              }),
            i &&
              Object.keys(i).forEach(function (t) {
                var e = i[t];
                window.googletag.pubads().setTargeting(t, e);
              }),
            o) &&
            window.googletag.pubads().setTargeting("fr", o);
      } catch (n) {
        Object(l.b)(n, "applyIasTargeting");
      }
    }
    function v(r, o, i, e) {
      var a = f.a.getState().experiments.shouldSampleLatency,
        c = Date.now(),
        t = Object(u.a)(window.location, window.top.location, o);
      if (null !== t) {
        var n = {
          url: t,
          withCredentials: !0,
          onload: function t(e) {
            if (200 === e.status)
              try {
                f.a.dispatch({
                  type: "RECORD_LIBRARY_LOAD_CALL_LATENCY",
                  latency: Date.now() - c,
                }),
                  a && setTimeout(y.d, 1e3);
                var n = JSON.parse(e.response);
                eval(n["3pvendor"]),
                  Object(g.a)(
                    f.a.getState().config.gdpr,
                    function (t) {
                      var e;
                      t &&
                        ((e = Object(g.c)(t.consent)), Object(b.b)()) &&
                        Object(g.d)(e, t.gdprApplies) &&
                        b.a.getDefault().localStorage.setItem(d.e, "1");
                    },
                    r
                  ),
                  Object(m.b)(n, o);
              } catch (t) {
                Object(l.b)(t, "load3PLibraryConfig-onload"),
                  Object(m.a)(t, "load3PLibraryConfig-onload", o);
              }
            null != i && i();
          },
          onerror: function (t) {
            (t = new Error(
              "".concat(t.type, ": ").concat(t.loaded, " bytes transferred")
            )),
              Object(l.b)(t, "load3PLibraryConfig-onerror"),
              Object(m.a)(t, "load3PLibraryConfig-onerror", o),
              null != e && e(t);
          },
        };
        try {
          Object(s.d)(n);
        } catch (t) {
          Object(l.b)(t, "load3PLibraryConfig"),
            Object(m.a)(t, "load3PLibraryConfig", o),
            null != e && e(t);
        }
        a && setTimeout(y.d, 1e3);
      }
    }
    function j() {
      return (
        (Object(p.k)(window, "creativeVendorLibraryLoaded") &&
          !0 === window.creativeVendorLibraryLoaded) ||
        Object(p.k)(window, "confiant")
      );
    }
    function S() {
      var t = { renderTimes: {} };
      window.addEventListener("message", function (e) {
        Object(r.a)(t, e);
      });
    }
    function w(t) {
      if (t)
        try {
          var e,
            n = JSON.parse(window.atob(decodeURIComponent(t))),
            r = { id: n.envelope, newGen: 2 },
            o = b.a.getDefault().localStorage;
          return (
            Object(p.k)(n, "timestamp") &&
              (!(e = o.getItem(d.m)) || e < n.timestamp
                ? ((r.newGen = 1), o.setItem(d.m, n.timestamp))
                : (r.newGen = 0)),
            r
          );
        } catch (e) {
          return { id: decodeURIComponent(t), newGen: 2 };
        }
      return !1;
    }
    var T = ["_publink", "_publink_srv", "_pbjs_publink"];
    function _() {
      try {
        var t,
          e = i(T);
        try {
          for (e.s(); !(t = e.n()).done; ) {
            var n,
              r = t.value,
              o = b.a.getDefault().cookie.getItem(r, { isJson: !0 });
            if (o) return null != (n = o.publink) && n;
          }
        } catch (t) {
          e.e(t);
        } finally {
          e.f();
        }
        return !1;
      } catch (t) {
        return !1;
      }
    }
    function D() {
      try {
        var t,
          e,
          n,
          r,
          o,
          i,
          a,
          c,
          s,
          u = { ids: {} };
        return (
          "1" === b.a.getDefault().localStorage.getItem(d.e) &&
            ((t = b.a.getDefault().localStorage.getItem("id5id")) &&
              (u.ids.id5 = JSON.parse(decodeURIComponent(t)).universal_uid),
            (e =
              b.a.getDefault().localStorage.getItem("_pubcid") ||
              b.a.getDefault().localStorage.getItem("_sharedID")) &&
              (u.ids.pubcommon = e),
            (n = !1),
            b.a.getDefault().localStorage.getItem("_lr_env")
              ? (n = w(b.a.getDefault().localStorage.getItem("_lr_env")))
              : b.a.getDefault().cookie.getItem("_lr_env")
              ? (r = b.a.getDefault().cookie.getItem("_lr_env")) && (n = w(r))
              : b.a.getDefault().localStorage.getItem("idl_env")
              ? (n = w(b.a.getDefault().localStorage.getItem("idl_env")))
              : b.a.getDefault().cookie.getItem("idl_env") &&
                (o = b.a.getDefault().cookie.getItem("idl_env")) &&
                (n = w(o)),
            n &&
              ((u.ids.liveRamp = n.id), Object(p.k)(n, "newGen")) &&
              (u.md = { liveRamp: n.newGen }),
            (i =
              b.a.getDefault().localStorage.getItem("hadronId") ||
              b.a.getDefault().localStorage.getItem("auHadronId")) &&
              (u.ids.audigent = i),
            (a = b.a.getDefault().localStorage.getItem("panoramaId")) &&
              (u.ids.lotame = a),
            (c = _()) && (u.ids.publink = c),
            (s = b.a.getDefault().localStorage.getItem("33acrossId"))) &&
            (u.ids["33across"] = decodeURIComponent(s)),
          u
        );
      } catch (t) {
        Object(l.b)(t, "getIdentityConfig");
      }
      return { ids: {} };
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "d", function () {
      return b;
    }),
      n.d(e, "c", function () {
        return p;
      }),
      n.d(e, "b", function () {
        return y;
      }),
      n.d(e, "g", function () {
        return O;
      }),
      n.d(e, "a", function () {
        return T;
      }),
      n.d(e, "e", function () {
        return _;
      }),
      n.d(e, "f", function () {
        return D;
      });
    var r = n(1),
      o = n(0),
      i = n(3),
      a = n(2),
      c = n(4),
      s = n(6);
    function u(t) {
      return (u =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function l(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, d(r.key), r);
      }
    }
    function d(t) {
      return (
        (t = (function (t, e) {
          if ("object" !== u(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 === n) return String(t);
          if ("object" !== u((n = n.call(t, e)))) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        })(t, "string")),
        "symbol" === u(t) ? t : String(t)
      );
    }
    var f = (function () {
      function t() {
        var e,
          n =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          r = this,
          o = t;
        if (!(r instanceof o))
          throw new TypeError("Cannot call a class as a function");
        (r = this),
          (o = void 0),
          (e = d((e = "_rawProps"))) in r
            ? Object.defineProperty(r, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[e] = o),
          (this._rawProps = n);
      }
      var e, n;
      return (
        (e = t),
        (n = [
          {
            key: "source",
            get: function () {
              return "web";
            },
          },
          {
            key: "omsdkAccessMode",
            get: function () {
              return "limited";
            },
          },
          {
            key: "publisherType",
            get: function () {
              var t = a.a.getState().config;
              return t && !0 === t.isSelfServePub
                ? s.b.SELF_SERVE_WEB
                : s.b.MANAGED_WEB;
            },
          },
          {
            key: "publisherUUID",
            get: function () {
              var t = a.a.getState().config;
              if (t) return t.pubID;
            },
          },
          {
            key: "integratorVersion",
            get: function () {
              return c.l;
            },
          },
          {
            key: "bidId",
            get: function () {
              var t = this._rawProps.bidId;
              if ("string" == typeof t) return t;
            },
          },
          {
            key: "dealId",
            get: function () {
              var t = this._rawProps.dealId;
              if ("string" == typeof t) return t;
            },
          },
          {
            key: "hostName",
            get: function () {
              var t = this._rawProps.hostName;
              if ("string" == typeof t) return t;
            },
          },
          {
            key: "pricePoint",
            get: function () {
              var t = this._rawProps.pricePoint;
              if ("string" == typeof t) return t;
            },
          },
          {
            key: "targetingMap",
            get: function () {
              var t = this._rawProps.targetingMap;
              if ("string" == typeof t) return t;
            },
          },
          {
            key: "adServerType",
            get: function () {
              var t = a.a.getState().config;
              if (t) return t.adServer;
            },
          },
          {
            key: "adServerAdUnitId",
            get: function () {
              var t = this._rawProps.adServerAdUnitId;
              if ("string" == typeof t) return t;
            },
          },
          {
            key: "apsAdUnitId",
            get: function () {
              var t = this._rawProps.apsAdUnitId;
              if ("string" == typeof t) return t;
            },
          },
          {
            key: "getProperties",
            value: function () {
              return JSON.stringify({
                source: this.source,
                omsdkAccessMode: this.omsdkAccessMode,
                publisherType: this.publisherType,
                publisherUUID: this.publisherUUID,
                integratorVersion: this.integratorVersion,
                bidId: this.bidId,
                hostName: this.hostName,
                dealId: this.dealId,
                pricePoint: this.pricePoint,
                targetingMap: this.targetingMap,
                adServerType: this.adServerType,
                adServerAdUnitId: this.adServerAdUnitId,
                apsAdUnitId: this.apsAdUnitId,
              });
            },
          },
        ]) && l(e.prototype, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
    function b(t, e) {
      try {
        if (Object(o.k)(e, "slotID")) {
          var n = e.slotID,
            i = t.getElementById(n);
          if (i instanceof HTMLDivElement) return i;
        }
      } catch (t) {
        Object(r.b)(t, "getVideoDivElement-outstream");
      }
    }
    function p(t, e) {
      try {
        Object(o.k)(t, "bidID") && (e += "b=".concat(t.bidID)),
          Object(o.k)(t, "pp") &&
            void 0 === t.dealId &&
            (e += "&pp=".concat(t.pp)),
          (e += "&rnd=".concat(Object(o.d)()));
      } catch (t) {
        Object(r.b)(t, "constructVastTag");
      }
      return e;
    }
    function y(t, e, n, o) {
      try {
        var i = {
            bidId: null == n ? void 0 : n.bidID,
            hostName: null == n ? void 0 : n.host,
            dealId: null == n ? void 0 : n.dealId,
            pricePoint: null == n ? void 0 : n.pp,
            apsAdUnitId: null == n ? void 0 : n.slotID,
          },
          a = { key: "$$videoPlayerProps$$", value: new f(i).getProperties() },
          c = { key: "$$apstagVastTag$$", value: t },
          s = {
            key: "$$apstagCompanionContainers$$",
            value: JSON.stringify(o || []),
          },
          u = e;
        return (
          [
            a,
            c,
            s,
            {
              key: "$$apsvidonerror$$",
              value:
                "try { window.parent.apstag.re(new Error('video player load error'), 'vsdk-load-fail'); } catch(e) {}",
            },
          ].forEach(function (t) {
            var e = t.key;
            t = t.value;
            return (u = u.replace(e, t));
          }),
          u
        );
      } catch (t) {
        return Object(r.b)(t, "constructVastTag"), "";
      }
    }
    var g = {},
      m = function (t) {
        return (
          g[t] ||
            (g[t] = { started: !1, completed: !1, loaded: !1, isPaused: !1 }),
          g[t]
        );
      },
      h = { root: null, rootMargin: "0px", threshold: 0.5 };
    function O(t, e, n) {
      try {
        var o;
        window.addEventListener("message", function (t) {
          v(t, n);
        }),
          window.IntersectionObserver
            ? (o = new window.IntersectionObserver(function (r) {
                r.forEach(function (r) {
                  0.5 < r.intersectionRatio &&
                    e.contentWindow &&
                    (j(e, t, n), o.disconnect());
                });
              }, h)).observe(t)
            : Object(r.b)(
                {
                  name: "IntersectionObserver",
                  message: "IntersectionObserver not supported ",
                },
                "startVideoAndHandlePlayback"
              );
      } catch (t) {
        Object(r.b)(t, "startVideoAndHandlePlayback");
      }
    }
    function v(t, e) {
      if (
        t.origin === window.top.location.origin &&
        !0 === t.data.apsVideoPlayer
      )
        switch (t.data.event) {
          case "completed":
            m(e).completed = !0;
            break;
          case "loaded":
            var n;
            (m(e).loaded = !0),
              a.a.getState().outstream.shouldSample &&
                ((n = Date.now() - a.a.getState().outstream.renderStart),
                Object(i.e)("loaded", e, n));
        }
    }
    function j(t, e, n) {
      try {
        null !== t.contentDocument &&
        Object(o.h)(["complete", "interactive"], t.contentDocument.readyState)
          ? w(t, e, n)
          : null !== t.contentDocument &&
            "uninitialized" !== t.contentDocument.readyState
          ? t.contentDocument.addEventListener("DOMContentLoaded", function () {
              w(t, e, n);
            })
          : t.addEventListener("load", function () {
              w(t, e, n);
            }),
          setTimeout(w, 1e3, !0);
      } catch (t) {
        Object(r.b)(t, "loadVideoAd");
      }
    }
    function S(t, e, n) {
      try {
        var o;
        window.IntersectionObserver &&
          (o = new window.IntersectionObserver(
            function (e) {
              e.forEach(function (e) {
                m(n).completed && o.disconnect(),
                  e.intersectionRatio < 0.5 && !m(n).isPaused
                    ? t.contentWindow &&
                      t.contentWindow.adsM &&
                      (t.contentWindow.adsM.pause(), (m(n).isPaused = !0))
                    : m(n).isPaused &&
                      t.contentWindow &&
                      t.contentWindow.adsM &&
                      (t.contentWindow.adsM.play(), (m(n).isPaused = !1));
              });
            },
            { threshold: 0.5 }
          )).observe(e);
      } catch (e) {
        Object(r.b)(e, "handleAutoPauseAndPlay");
      }
    }
    function w(t, e, n) {
      t.contentWindow &&
        !m(n).started &&
        ((m(n).started = !0),
        (function (t, e, n) {
          var r = Number(new Date()) + (e || 2e3);
          return (
            (n = n || 100),
            new Promise(function e(o, i) {
              var a = t();
              a
                ? o(a)
                : Number(new Date()) < r
                ? setTimeout(e, n, o, i)
                : i(new Error("apsVideoPlayer timed out"));
            })
          );
        })(
          function () {
            return m(n).loaded;
          },
          3e4,
          100
        )
          .then(function () {
            t.contentWindow &&
              t.contentWindow.adsM &&
              (t.contentWindow.adsM.play(), S(t, e, n));
          })
          .catch(function () {
            S(t, e, n),
              Object(r.b)(
                {
                  name: "VideoPlayerTimeout",
                  message: "video player took more than 30 seconds to load",
                },
                "startAd"
              );
          }));
    }
    function T(t, e) {
      try {
        e && e.appendChild(t);
      } catch (t) {
        Object(r.b)(t, "_appendDivElement");
      }
    }
    function _(t, e) {
      try {
        t.appendChild(e);
      } catch (t) {
        Object(r.b)(t, "_insertVideoIframeInsideDiv");
      }
    }
    function D(t) {
      var e = document.createElement("div");
      return (
        (e.style.width = "".concat(t[0], "px")),
        (e.style.height = "".concat(t[1], "px")),
        (e.style.margin = "0 auto"),
        (e.id = "apsVideoDiv-".concat(Object(o.d)())),
        e
      );
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return d;
    });
    var r = n(1);
    function o(t) {
      return (o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, c(r.key), r);
      }
    }
    function a(t, e, n) {
      return (
        (e = c(e)) in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    function c(t) {
      return (
        (t = (function (t, e) {
          if ("object" !== o(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 === n) return String(t);
          if ("object" !== o((n = n.call(t, e)))) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        })(t, "string")),
        "symbol" === o(t) ? t : String(t)
      );
    }
    var s = "__tcfapi",
      u = "isListenedTo",
      l = "consentManagementPlatform",
      d = (function () {
        function t(e) {
          if (!(this instanceof t))
            throw new TypeError("Cannot call a class as a function");
          a(this, "store", void 0),
            a(this, "globalContext", void 0),
            (this.store = e.stateContainer),
            (this.globalContext = e.globalContext);
        }
        var e, n, o;
        return (
          (e = t),
          (o = [
            {
              key: "readStoredConsentData",
              value: function (t) {
                return null == (t = t.getState()[l]) ? void 0 : t.tcData;
              },
            },
          ]),
          (n = [
            {
              key: "isListenerActive",
              get: function () {
                return this.isListenedTo;
              },
            },
            {
              key: "isListenedTo",
              get: function () {
                var t;
                return (
                  (null == (t = this.store.getState()[l]) ? void 0 : t[u]) || !1
                );
              },
              set: function (t) {
                this.store.dispatch(
                  a({ type: "RECORD_CMP_LISTENED_TO" }, u, t)
                );
              },
            },
            {
              key: "writeConsentDataToStore",
              value: function (t) {
                this.store.dispatch(
                  a({ type: "RECORD_CMP_CONSENT_DATA" }, "tcData", t)
                );
              },
            },
            {
              key: "onConsentDataChange",
              value: function (t, e, n) {
                try {
                  e
                    ? ((this.isListenedTo = !0),
                      t && this.writeConsentDataToStore(t),
                      null != n && n(!0))
                    : null != n && n(!1);
                } catch (t) {
                  Object(r.b)(t, "attemptConsentDataSync-onConsentDataChange");
                }
              },
            },
            {
              key: "syncConsentData",
              value: function (t) {
                var e = this;
                this.globalContext[s]
                  ? this.globalContext[s](
                      "addEventListener",
                      2,
                      function (n, r) {
                        return e.onConsentDataChange(n, r, t);
                      }
                    )
                  : null != t && t(!1);
              },
            },
            {
              key: "syncConsentDataIfNotSynced",
              value: function (t) {
                this.isListenedTo
                  ? null != t && t(!0)
                  : this.syncConsentData(t);
              },
            },
            {
              key: "attemptConsentDataSync",
              value: function (t) {
                try {
                  this.syncConsentDataIfNotSynced(t);
                } catch (e) {
                  Object(r.b)(e, "attemptConsentDataSync"), null != t && t(!1);
                }
              },
            },
          ]) && i(e.prototype, n),
          o && i(e, o),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t
        );
      })();
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return y;
    }),
      n.d(e, "b", function () {
        return g;
      }),
      n.d(e, "c", function () {
        return m;
      });
    var r = n(10),
      o = n(1),
      i = n(2),
      a = n(4),
      c = n(7),
      s = n(0),
      u = n(8),
      l = n(3),
      d = n(5);
    function f(t) {
      return (f =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function b(t, e) {
      var n,
        r = Object.keys(t);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(t)),
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
          r.push.apply(r, n)),
        r
      );
    }
    function p(t) {
      var e = Object(c.c)("bsHost", i.a.getState().hosts.DEFAULT_BS_HOST);
      e = {
        url: ""
          .concat(a.t)
          .concat("prod", ".")
          .concat("us-east-1", ".")
          .concat(e)
          .concat("/v1/recordVendorsLoaded"),
        body: JSON.stringify(t),
        headers: { "Content-Type": "application/json" },
        onload: function () {},
      };
      try {
        Object(r.d)(e);
      } catch (t) {
        Object(o.b)(t, "load3PLibraryConfig-VendorLoadedEvent-SendError");
      }
    }
    function y(t, e, n) {
      if (Object(s.l)(a.y))
        try {
          var r = i.a.getState().config;
          p([
            {
              publisherId:
                ("600" === (null == n ? void 0 : n.sourceID)
                  ? null == n
                    ? void 0
                    : n.publisherUUID
                  : null == n
                  ? void 0
                  : n.sourceID) || r.pubID,
              sourceId:
                (null == n ? void 0 : n.sourceID) ||
                (r.isSelfServePub ? a.u : r.pubID),
              failure: e,
              errorName: t.name,
              errorMessage: t.message,
            },
          ]);
        } catch (t) {
          Object(o.b)(
            t,
            "load3PLibraryConfig-VendorLoadedEventError-ConstructError"
          );
        }
    }
    function g(t, e) {
      var n;
      if (
        ((n = t),
        Object(s.l)(
          "number" == typeof n["3psamplerate"] ? n["3psamplerate"] : a.y
        ))
      )
        try {
          var r = JSON.parse(t[a.z]),
            c =
              (c =
                "600" === (null == e ? void 0 : e.sourceID)
                  ? null == e
                    ? void 0
                    : e.publisherUUID
                  : null == e
                  ? void 0
                  : e.sourceID) || i.a.getState().config.pubID;
          p(
            r.map(function (t) {
              return (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? b(Object(n), !0).forEach(function (e) {
                        var r, o;
                        (r = t),
                          (o = n[(e = e)]),
                          (e = (function (t) {
                            return (
                              (t = (function (t, e) {
                                if ("object" !== f(t) || null === t) return t;
                                var n = t[Symbol.toPrimitive];
                                if (void 0 === n) return String(t);
                                if ("object" !== f((n = n.call(t, e))))
                                  return n;
                                throw new TypeError(
                                  "@@toPrimitive must return a primitive value."
                                );
                              })(t, "string")),
                              "symbol" === f(t) ? t : String(t)
                            );
                          })(e)) in r
                            ? Object.defineProperty(r, e, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                              })
                            : (r[e] = o);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : b(Object(n)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(n, e)
                        );
                      });
                }
                return t;
              })({ publisherId: c }, t);
            })
          );
        } catch (t) {
          Object(o.b)(
            t,
            "load3PLibraryConfig-VendorLoadedEvent-ConstructError"
          );
        }
    }
    function m(t) {
      t =
        (null == (t = Object(u.a)(t)) ? void 0 : t.read("config/loaded")) ||
        (null == t || null == (t = t.queue)
          ? void 0
          : t.some(function (t) {
              return "_config/config/didLoad" === t.type;
            }));
      var e = "1" === d.a.getDefault().localStorage.getItem(a.e);
      t = t && e ? "all" : t && !e ? "config" : !t && e ? "cxm" : "none";
      Object(l.c)("configOrder", "".concat(t));
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return l;
    });
    var r = n(0),
      o = n(1),
      i = n(3);
    function a(t) {
      return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function c(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, u(r.key), r);
      }
    }
    function s(t, e, n) {
      (e = u(e)) in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n);
    }
    function u(t) {
      return (
        (t = (function (t, e) {
          if ("object" !== a(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 === n) return String(t);
          if ("object" !== a((n = n.call(t, e)))) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        })(t, "string")),
        "symbol" === a(t) ? t : String(t)
      );
    }
    var l = (function () {
      function t(e) {
        var n =
            !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
          r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
          o = this,
          i = t;
        if (!(o instanceof i))
          throw new TypeError("Cannot call a class as a function");
        s(this, "validSizeStringRegex", /^[0-9]+x[0-9]+$/),
          s(this, "numberStringRegex", /^[0-9]+$/),
          s(this, "_sizes", void 0),
          s(this, "_permit1D", !0),
          s(this, "_allowUndefined", !1),
          (this._sizes = e),
          (this._permit1D = n),
          (this._allowUndefined = r);
      }
      var e, n;
      return (
        (e = t),
        (n = [
          {
            key: "isValid",
            value: function () {
              return (
                !(void 0 !== this._sizes || !this._allowUndefined) ||
                0 < this.sizes.length
              );
            },
          },
          {
            key: "sizes",
            get: function () {
              var t = this;
              try {
                var e = [];
                if (Object(r.i)(this._sizes)) {
                  this._sizes = this._sizes.filter(function (t) {
                    return "fluid" !== t;
                  });
                  var n = "2d",
                    i = this._sizes;
                  if (
                    i &&
                    0 < i.length &&
                    !Object(r.i)(i[0]) &&
                    ("string" != typeof i[0] ||
                      !this.validSizeStringRegex.test(i[0]))
                  ) {
                    if (!this._permit1D)
                      throw new Error("Sizes must be 2d array");
                    (n = "1d"), (i = [i]);
                  }
                  e = i
                    .filter(function (e) {
                      return t.isValidSize(n, e);
                    })
                    .map(function (t) {
                      return Object(r.i)(t)
                        ? t
                        : t.split("x").map(function (t) {
                            return parseInt(t, 10);
                          });
                    });
                }
                return e;
              } catch (e) {
                return Object(o.b)(e, "SizesDelegate-getSizes"), [];
              }
            },
          },
          {
            key: "aaxSizes",
            get: function () {
              if (void 0 !== this._sizes || !this._allowUndefined)
                return this.sizes.filter(r.i).map(function (t) {
                  return t.join("x");
                });
            },
          },
          {
            key: "isValidSize",
            value: function (t, e) {
              var n = this,
                a = [];
              function c(t) {
                (t = JSON.stringify(t)),
                  -1 === a.indexOf(t) &&
                    (a.push(t),
                    Object(o.b)(
                      {
                        name: "SizesDelegate-isValidSize-invalid",
                        message: "Invalid Slot Size: ".concat(
                          JSON.stringify(e)
                        ),
                      },
                      "SizesDelegate-isValidSize-invalid"
                    ));
              }
              try {
                return "string" == typeof e && this.validSizeStringRegex.test(e)
                  ? (Object(i.c)("AaxSlotSizes", "".concat(t, "-compiled")), !0)
                  : Object(r.i)(e) && 1 !== e.length
                  ? (2 < e.length && c(e),
                    e.slice(0, 2).reduce(function (e, r) {
                      return (
                        e &&
                        ("number" == typeof r || "string" == typeof r) &&
                        !(
                          ("string" == typeof r &&
                            !n.numberStringRegex.test(r)) ||
                          ("string" == typeof r
                            ? Object(i.c)(
                                "AaxSlotSizes",
                                "".concat(t, "-string")
                              )
                            : Object(i.c)(
                                "AaxSlotSizes",
                                "".concat(t, "-number")
                              ),
                          0)
                        )
                      );
                    }, !0))
                  : (c(e), !1);
              } catch (c) {
                return Object(o.b)(c, "isValidSize"), !0;
              }
            },
          },
        ]) && c(e.prototype, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return m;
    });
    e = n(19);
    var r = n(0),
      o = n(1),
      i = n(6);
    function a(t) {
      return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function c(t, e) {
      var n,
        r = Object.keys(t);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(t)),
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
          r.push.apply(r, n)),
        r
      );
    }
    function s(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? c(Object(n), !0).forEach(function (e) {
              y(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : c(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function u(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, g(r.key), r);
      }
    }
    function l() {
      return (l =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get.bind()
          : function (t, e, n) {
              var r = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = p(t));

                );
                return t;
              })(t, e);
              if (r)
                return (r = Object.getOwnPropertyDescriptor(r, e)).get
                  ? r.get.call(arguments.length < 3 ? t : n)
                  : r.value;
            }).apply(this, arguments);
    }
    function d(t, e) {
      return (d = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function f(t) {
      var e = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = p(t);
        (n = e
          ? ((n = p(this).constructor), Reflect.construct(r, arguments, n))
          : r.apply(this, arguments)),
          (r = this);
        if (n && ("object" === a(n) || "function" == typeof n)) return n;
        if (void 0 !== n)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return b(r);
      };
    }
    function b(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function p(t) {
      return (p = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function y(t, e, n) {
      (e = g(e)) in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n);
    }
    function g(t) {
      return (
        (t = (function (t, e) {
          if ("object" !== a(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 === n) return String(t);
          if ("object" !== a((n = n.call(t, e)))) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        })(t, "string")),
        "symbol" === a(t) ? t : String(t)
      );
    }
    var m = (function (t) {
      var e = a;
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && d(e, t);
      var n = f(a);
      function a(t) {
        var e;
        if (this instanceof a)
          return (
            y(
              b(
                (e = n.call(this, {
                  slotID: t.getSlotElementId(),
                  slotName: t.getAdUnitPath(),
                }))
              ),
              "rawSlot",
              void 0
            ),
            (e.rawSlot = t),
            e
          );
        throw new TypeError("Cannot call a class as a function");
      }
      return (
        (e = a),
        (t = [
          {
            key: "mediaType",
            get: function () {
              return i.a.DISPLAY;
            },
          },
          {
            key: "sizes",
            get: function () {
              try {
                var t = Object(r.g)(window)
                    .split("x")
                    .map(function (t) {
                      return Number(t);
                    }),
                  e = this.rawSlot.getSizes(t[0], t[1]);
                return null === e
                  ? []
                  : e
                      .filter(function (t) {
                        return "fluid" !== t;
                      })
                      .map(function (t) {
                        return [t.getWidth(), t.getHeight()];
                      });
              } catch (t) {
                return this.reportError(t, "sizes"), [];
              }
            },
          },
          {
            key: "aaxSlot",
            get: function () {
              var t = s(
                s({}, l(p(a.prototype), "aaxSlot", this)),
                {},
                {
                  sd: this.slotID,
                  s: this.sizes.filter(r.i).map(function (t) {
                    return t.join("x");
                  }),
                }
              );
              return this.slotID !== this.slotName && (t.sn = this.slotName), t;
            },
          },
          {
            key: "isValid",
            value: function () {
              return !(
                !l(p(a.prototype), "isValid", this).call(this) ||
                (0 === this.sizes.length &&
                  (this.reportIsValidMessages(
                    ["'sizes' must have at least 1 valid item"],
                    !0
                  ),
                  1))
              );
            },
          },
          {
            key: "reportError",
            value: function (t, e, n) {
              Object(o.b)(t, "GptSlot-".concat(e), n);
            },
          },
          {
            key: "setTargeting",
            value: function (t, e) {
              try {
                this.rawSlot.setTargeting(t, e);
              } catch (t) {
                this.reportError(t, "setTargeting");
              }
            },
          },
          {
            key: "getTargeting",
            value: function (t) {
              try {
                return this.rawSlot.getTargeting(t);
              } catch (t) {
                return this.reportError(t, "getTargeting"), [];
              }
            },
          },
          {
            key: "clearTargeting",
            value: function (t) {
              try {
                this.rawSlot.clearTargeting(t);
              } catch (t) {
                this.reportError(t, "clearTargeting");
              }
            },
          },
        ]) && u(e.prototype, t),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        a
      );
    })(e.a);
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "c", function () {
      return i;
    }),
      n.d(e, "a", function () {
        return a;
      }),
      n.d(e, "b", function () {
        return c;
      });
    var r = n(1),
      o = n(0);
    function i(t) {
      try {
        return !(!Object(o.k)(t, "$sf") || !Object(o.k)(t.$sf, "ext"));
      } catch (t) {
        return Object(r.b)(t, "isSafeFrame"), !1;
      }
    }
    function a(t, e) {
      try {
        var n,
          o,
          i,
          a = e.innerWidth,
          c = e.innerHeight,
          s = parseInt(t[0], 10),
          u = parseInt(t[1], 10),
          l = s - a,
          d = u - c,
          f = e.sfAPI || (null == (n = e.$sf) ? void 0 : n.ext);
        !f ||
          (a === s && c === u) ||
          (null != (o = f.register) && o.call(f, s, u),
          null != (i = f.expand) && i.call(f, { r: l, b: d, push: !0 }));
      } catch (t) {
        Object(r.b)(t, "expandSf");
      }
    }
    function c(t) {
      try {
        return 1 === t.innerWidth && 1 === t.innerHeight;
      } catch (t) {
        return Object(r.b)(t, "is1x1Creative"), !1;
      }
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return j;
    }),
      n.d(e, "b", function () {
        return S;
      });
    var r = n(1),
      o = n(10),
      i = n(0),
      a = n(8),
      c = n(4),
      s = n(9),
      u = n(7),
      l = n(2);
    function d(t) {
      return (d =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function f() {function () {
          return t;
        };
      var t = {},
        e = Object.prototype,
        n = e.hasOwnProperty,
        r =
          Object.defineProperty ||
          function (t, e, n) {
            t[e] = n.value;
          },
        o =
          (g = "function" == typeof Symbol ? Symbol : {}).iterator ||
          "@@iterator",
        i = g.asyncIterator || "@@asyncIterator",
        a = g.toStringTag || "@@toStringTag";
      function c(t, e, n) {
        return (
          Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        c({}, "");
      } catch (e) {
        c = function (t, e, n) {
          return (t[e] = n);
        };
      }
      function s(t, e, n, o) {
        var i, a, c, s;
        (e = e && e.prototype instanceof b ? e : b),
          (e = Object.create(e.prototype)),
          (o = new w(o || []));
        return (
          r(e, "_invoke", {
            value:
              ((i = t),
              (a = n),
              (c = o),
              (s = "suspendedStart"),
              function (t, e) {
                if ("executing" === s)
                  throw new Error("Generator is already running");
                if ("completed" === s) {
                  if ("throw" === t) throw e;
                  return { value: void 0, done: !0 };
                }
                for (c.method = t, c.arg = e; ; ) {
                  var n = c.delegate;
                  if (
                    n &&
                    (n = (function t(e, n) {
                      var r = n.method,
                        o = e.iterator[r];
                      return void 0 === o
                        ? ((n.delegate = null),
                          ("throw" === r &&
                            e.iterator.return &&
                            ((n.method = "return"),
                            (n.arg = void 0),
                            t(e, n),
                            "throw" === n.method)) ||
                            ("return" !== r &&
                              ((n.method = "throw"),
                              (n.arg = new TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method"
                              )))),
                          l)
                        : "throw" === (r = u(o, e.iterator, n.arg)).type
                        ? ((n.method = "throw"),
                          (n.arg = r.arg),
                          (n.delegate = null),
                          l)
                        : (o = r.arg)
                        ? o.done
                          ? ((n[e.resultName] = o.value),
                            (n.next = e.nextLoc),
                            "return" !== n.method &&
                              ((n.method = "next"), (n.arg = void 0)),
                            (n.delegate = null),
                            l)
                          : o
                        : ((n.method = "throw"),
                          (n.arg = new TypeError(
                            "iterator result is not an object"
                          )),
                          (n.delegate = null),
                          l);
                    })(n, c))
                  ) {
                    if (n === l) continue;
                    return n;
                  }
                  if ("next" === c.method) c.sent = c._sent = c.arg;
                  else if ("throw" === c.method) {
                    if ("suspendedStart" === s)
                      throw ((s = "completed"), c.arg);
                    c.dispatchException(c.arg);
                  } else "return" === c.method && c.abrupt("return", c.arg);
                  if (((s = "executing"), "normal" === (n = u(i, a, c)).type)) {
                    if (
                      ((s = c.done ? "completed" : "suspendedYield"),
                      n.arg === l)
                    )
                      continue;
                    return { value: n.arg, done: c.done };
                  }
                  "throw" === n.type &&
                    ((s = "completed"), (c.method = "throw"), (c.arg = n.arg));
                }
              }),
          }),
          e
        );
      }
      function u(t, e, n) {
        try {
          return { type: "normal", arg: t.call(e, n) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = s;
      var l = {};
      function b() {}
      function p() {}
      function y() {}
      var g,
        m,
        h =
          ((m =
            (m =
              (c((g = {}), o, function () {
                return this;
              }),
              Object.getPrototypeOf)) && m(m(T([])))) &&
            m !== e &&
            n.call(m, o) &&
            (g = m),
          (y.prototype = b.prototype = Object.create(g)));
      function O(t) {
        ["next", "throw", "return"].forEach(function (e) {
          c(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function v(t, e) {
        var o;
        r(this, "_invoke", {
          value: function (r, i) {
            function a() {
              return new e(function (o, a) {
                !(function r(o, i, a, c) {
                  var s;
                  if ("throw" !== (o = u(t[o], t, i)).type)
                    return (i = (s = o.arg).value) &&
                      "object" == d(i) &&
                      n.call(i, "__await")
                      ? e.resolve(i.__await).then(
                          function (t) {
                            r("next", t, a, c);
                          },
                          function (t) {
                            r("throw", t, a, c);
                          }
                        )
                      : e.resolve(i).then(
                          function (t) {
                            (s.value = t), a(s);
                          },
                          function (t) {
                            return r("throw", t, a, c);
                          }
                        );
                  c(o.arg);
                })(r, i, o, a);
              });
            }
            return (o = o ? o.then(a, a) : a());
          },
        });
      }
      function j(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function S(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function w(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(j, this),
          this.reset(!0);
      }
      function T(t) {
        if (t) {
          var e,
            r = t[o];
          if (r) return r.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length))
            return (
              (e = -1),
              ((r = function r() {
                for (; ++e < t.length; )
                  if (n.call(t, e)) return (r.value = t[e]), (r.done = !1), r;
                return (r.value = void 0), (r.done = !0), r;
              }).next = r)
            );
        }
        return { next: _ };
      }
      function _() {
        return { value: void 0, done: !0 };
      }
      return (
        r(h, "constructor", { value: (p.prototype = y), configurable: !0 }),
        r(y, "constructor", { value: p, configurable: !0 }),
        (p.displayName = c(y, a, "GeneratorFunction")),
        (t.isGeneratorFunction = function (t) {
          return (
            !!(t = "function" == typeof t && t.constructor) &&
            (t === p || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, y)
              : ((t.__proto__ = y), c(t, a, "GeneratorFunction")),
            (t.prototype = Object.create(h)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        O(v.prototype),
        c(v.prototype, i, function () {
          return this;
        }),
        (t.AsyncIterator = v),
        (t.async = function (e, n, r, o, i) {
          void 0 === i && (i = Promise);
          var a = new v(s(e, n, r, o), i);
          return t.isGeneratorFunction(n)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        O(h),
        c(h, a, "Generator"),
        c(h, o, function () {
          return this;
        }),
        c(h, "toString", function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var e,
            n = Object(t),
            r = [];
          for (e in n) r.push(e);
          return (
            r.reverse(),
            function t() {
              for (; r.length; ) {
                var e = r.pop();
                if (e in n) return (t.value = e), (t.done = !1), t;
              }
              return (t.done = !0), t;
            }
          );
        }),
        (t.values = T),
        (w.prototype = {
          constructor: w,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(S),
              !t)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  n.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;
            function r(n, r) {
              return (
                (a.type = "throw"),
                (a.arg = t),
                (e.next = n),
                r && ((e.method = "next"), (e.arg = void 0)),
                !!r
              );
            }
            for (var o = this.tryEntries.length - 1; 0 <= o; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return r("end");
              if (i.tryLoc <= this.prev) {
                var c = n.call(i, "catchLoc"),
                  s = n.call(i, "finallyLoc");
                if (c && s) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                } else {
                  if (!s)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
              var o = this.tryEntries[r];
              if (
                o.tryLoc <= this.prev &&
                n.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var i = o;
                break;
              }
            }
            var a = (i =
              i &&
              ("break" === t || "continue" === t) &&
              i.tryLoc <= e &&
              e <= i.finallyLoc
                ? null
                : i)
              ? i.completion
              : {};
            return (
              (a.type = t),
              (a.arg = e),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), l)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              l
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
              var n = this.tryEntries[e];
              if (n.finallyLoc === t)
                return this.complete(n.completion, n.afterLoc), S(n), l;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
              var n,
                r,
                o = this.tryEntries[e];
              if (o.tryLoc === t)
                return (
                  "throw" === (n = o.completion).type && ((r = n.arg), S(o)), r
                );
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, n) {
            return (
              (this.delegate = { iterator: T(t), resultName: e, nextLoc: n }),
              "next" === this.method && (this.arg = void 0),
              l
            );
          },
        }),
        t
      );
    }
    function b(t, e, n, r, o, i, a) {
      try {
        var c = t[i](a),
          s = c.value;
      } catch (t) {
        return void n(t);
      }
      c.done ? e(s) : Promise.resolve(s).then(r, o);
    }
    function p(t, e) {
      var n,
        r = Object.keys(t);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(t)),
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
          r.push.apply(r, n)),
        r
      );
    }
    function y(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? p(Object(n), !0).forEach(function (e) {
              O(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : p(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function g(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function m(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, v(r.key), r);
      }
    }
    function h(t, e, n) {
      e && m(t.prototype, e),
        n && m(t, n),
        Object.defineProperty(t, "prototype", { writable: !1 });
    }
    function O(t, e, n) {
      (e = v(e)) in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n);
    }
    function v(t) {
      return (
        (t = (function (t, e) {
          if ("object" !== d(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 === n) return String(t);
          if ("object" !== d((n = n.call(t, e)))) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        })(t, "string")),
        "symbol" === d(t) ? t : String(t)
      );
    }
    function j(t) {
      try {
        var e = (function (t) {
          try {
            var e = Object(a.a)(t).read("ad/context");
            return Object(i.j)(e) ? { ortb2: e } : {};
          } catch (t) {
            return Object(r.b)(t, "getSignals"), {};
          }
        })(t);
        return 0 === Object.keys(e).length ? "" : Object(o.c)(e);
      } catch (t) {
        return Object(r.b)(t, "getSignalsParams"), "";
      }
    }
    function S() {
      E.get().log(_, "init");
      var t = window.apscustom || [];
      if (((window.apscustom = { push: A, loaded: !0 }), Array.isArray(t)))
        for (; t.length; ) A(t.shift());
    }
    var w = Object(u.c)("ASR_ENDPOINT_HOST", "c.aps.amazon-adsystem.com"),
      T = Object(u.c)("ASR_ENDPOINT_IS", "86355855cc6ed9e335d0382c8563aa10"),
      _ =
        ((e = (function () {
          function t() {
            g(this, t),
              O(this, "ignoreKeys", ["apsCustomSlotname", "apsCustomProgram"]),
              O(this, "programKey", "apscustom"),
              O(this, "dataParamPrefix", "apsCustom");
          }
          return (
            h(t, [
              {
                key: "init",
                value: function (t) {
                  var e,
                    n,
                    r,
                    o = this;
                  t &&
                    t.id &&
                    (n = document.getElementById(t.id)) &&
                    ((t._element = n),
                    (e = Object.assign({}, n.dataset)),
                    n.setAttribute("data-aps-custom-status", "read"),
                    (n = {
                      program: e.apsCustomProgram || this.programKey,
                      is: T,
                    }),
                    Object.keys(e)
                      .filter(function (t) {
                        return (
                          t.indexOf(o.dataParamPrefix) <= -1 ||
                          o.ignoreKeys.includes(t)
                        );
                      })
                      .forEach(function (t) {
                        return delete e[t];
                      }),
                    (r = {
                      slotID: t.id,
                      slotName: e.apsCustomSlotname || t.id,
                      sizes: [[999, 999]],
                    }),
                    this.fetchBidsAndRender(r, t, y(y({}, n), e)));
                },
              },
              {
                key: "fetchBidsAndRender",
                value: function (t, e, n) {
                  var r = this;
                  ((t =
                    (E.get().log(_, "fetchBids/start"),
                    { slots: [t], params: n })).timeout =
                    null != (n = e.timeout) ? n : 6e4),
                    (t._endpointDomain = w),
                    window.apstag.fetchBids(t, function (t) {
                      E.get().log(_, "fetchBids/end"), r.renderBids(t, e);
                    });
                },
              },
              {
                key: "renderBids",
                value: function (t, e) {
                  t.forEach(function (t) {
                    new I(e, t).render();
                  });
                },
              },
            ]),
            t
          );
        })()),
        "customPlacements"),
      D = new e();
    function A(t) {
      E.get().log(_, "implementation/legacyPush", 0.01),
        (t = Object.assign({}, t)),
        D.init(t);
    }
    var I = (function () {
        function t(e, n) {
          var r = this;
          g(this, t),
            O(this, "slotProps", void 0),
            O(this, "rawResponse", void 0),
            O(this, "getPageStyles", function () {
              return (
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : ["p", "h1", "h2"]
              )
                .map(r.getTagStyle)
                .filter(function (t) {
                  return 0 < Object.keys(t).length;
                })
                .reduce(function (t, e) {
                  return y(y({}, t), e);
                }, {});
            }),
            O(this, "getContainerStyles", function (t) {
              try {
                var e, n, r;
                return t
                  ? ((e = window.getComputedStyle(t)),
                    (n = "--aps-custom-container-"),
                    (r = new Map()).set("".concat(n, "width"), e.width),
                    r.set("".concat(n, "margin"), e.margin),
                    r.set("".concat(n, "padding"), e.padding),
                    Object.fromEntries(r.entries()))
                  : {};
              } catch (t) {
                return {};
              }
            }),
            (this.slotProps = e),
            (this.rawResponse = n);
        }
        return (
          h(t, [
            {
              key: "getTagStyle",
              value: function (t) {
                var e,
                  n,
                  r = document.getElementsByTagName(t);
                return r && r[0]
                  ? ((r = window.getComputedStyle(
                      document.getElementsByTagName(t)[0]
                    )),
                    (e = new Map()).set(
                      "".concat((n = "--aps-custom-page-")).concat(t, "-color"),
                      r.color
                    ),
                    e.set("".concat(n).concat(t, "-fontFamily"), r.fontFamily),
                    e.set("".concat(n).concat(t, "-fontSize"), r.fontSize),
                    e.set("".concat(n).concat(t, "-fontWeight"), r.fontWeight),
                    e.set("".concat(n).concat(t, "-lineHeight"), r.lineHeight),
                    Object.fromEntries(e))
                  : {};
              },
            },
            {
              key: "getDynamicFrameBodyHeight",
              value: function (t, e, n) {
                if (e) {
                  E.get().log(
                    _,
                    "render/"
                      .concat(n, "/")
                      .concat(this.slotProps.id, "/loaded")
                  );
                  var r =
                      (null == e ? void 0 : e.contentDocument) ||
                      (null == e || null == (o = e.contentWindow)
                        ? void 0
                        : o.document),
                    o = null == r ? void 0 : r.body.scrollHeight;
                  e.style.height = "".concat(o, "px");
                  try {
                    var i = y(
                      y({}, this.getPageStyles()),
                      this.getContainerStyles(t)
                    );
                    Object.keys(i).forEach(function (t) {
                      null != r && r.documentElement.style.setProperty(t, i[t]);
                    }),
                      E.get().trackEvent(_, "renderComplete", {
                        asrEndpoint: w,
                        height: o,
                        source: n,
                      });
                  } catch (t) {}
                }
              },
            },
            {
              key: "render",
              value: function () {
                return this._renderInIframe();
              },
            },
            {
              key: "_renderInIframe",
              value: function () {
                var t = this;
                if (!this.rawResponse || !this.slotProps) return !1;
                try {
                  var e,
                    n,
                    o = this.rawResponse.size.split("x"),
                    i =
                      (null == (e = this.rawResponse.targeting)
                        ? void 0
                        : e.amzniid) || this.rawResponse.amzniid,
                    a =
                      (null == (n = this.rawResponse.targeting)
                        ? void 0
                        : n.amznadm) || this.rawResponse.amznadm;
                  if (!i) return !1;
                  E.get().log(_, "render/".concat(this.slotProps.id, "/start"));
                  var c,
                    s,
                    u,
                    l,
                    d = this.slotProps._element;
                  return (
                    this.slotProps.location &&
                      this.slotProps.id &&
                      ((s = document.createElement("div")),
                      null !=
                        (c = document.getElementById(this.slotProps.id)) &&
                        c.insertAdjacentElement(this.slotProps.location, s),
                      (d = s)),
                    !!d &&
                      (((u =
                        document.createElement("iframe")).style.marginLeft =
                        "0"),
                      (u.style.marginTop = "0"),
                      (u.style.height = "".concat(o[1], "px")),
                      (u.style.width = "100%"),
                      u.setAttribute("scrolling", "no"),
                      u.setAttribute("frameborder", "0"),
                      (u.onload = function () {
                        return t.getDynamicFrameBodyHeight(
                          d,
                          u,
                          a ? "amznadm" : "admi"
                        );
                      }),
                      (l =
                        '\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <meta charset="UTF-8">\n          <style>html{height:100%}body{height:100%;margin:0;overflow:hidden}</style>\n        </head>\n        <body>\n          <script>\n            window.parent.apstag.renderImp(document, "'.concat(
                          i,
                          '", {"inheritSize": true});\n          </script>\n        </body>\n      </html>'
                        )),
                      (u.srcdoc = a || l),
                      d.appendChild(u),
                      this.updateSlotAttribute("status", "rendered"),
                      !0)
                  );
                } catch (t) {
                  return (
                    Object(r.b)(
                      new Error("Error while rendering"),
                      "CustomPlacements"
                    ),
                    !1
                  );
                }
              },
            },
            {
              key: "updateSlotAttribute",
              value: function (t, e) {
                var n;
                null != (n = this.slotProps._element) &&
                  n.setAttribute("data-aps-custom-".concat(t), e);
              },
            },
          ]),
          t
        );
      })(),
      E = (function () {
        function t() {
          var e = this,
            n =
              (g(this, t),
              O(
                this,
                "TAHOE_PROD",
                "04a6c6a40ec6c493437745b4ff085efb826e05c276ad857733462915bc4c35e0"
              ),
              O(
                this,
                "TAHOE_PROD_URL",
                "https://prod.tahoe-analytics.publishers.advertising.a2z.com/logevent/postEquinoxEvent"
              ),
              O(this, "level", Object(u.c)("APS_ANALYTICS_LEVEL", "TAHOE")),
              O(this, "config", void 0),
              O(this, "timings", void 0),
              O(this, "log", void 0),
              O(this, "setLevel", function (t) {
                e.level = t;
              }),
              O(
                this,
                "trackEvent",
                (function () {
                  n = f().mark(function n(r, o) {
                    var i,
                      a,
                      u = arguments;
                    return f().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (i = 2 < u.length && void 0 !== u[2] ? u[2] : {}),
                              (a =
                                3 < u.length && void 0 !== u[3]
                                  ? u[3]
                                  : t.getDefaultSamplingRate()),
                              n.abrupt(
                                "return",
                                new Promise(function (t) {
                                  try {
                                    var n, u;
                                    Math.random() > a
                                      ? t(!1)
                                      : ((n = y(
                                          {
                                            url: decodeURIComponent(
                                              Object(s.g)(window)
                                            ),
                                            libraryVersion: c.l,
                                            timings: e.timings,
                                          },
                                          e.getBrowserInfo()
                                        )),
                                        (u = JSON.stringify({
                                          eventSource: "apstag",
                                          eventCategory: r,
                                          eventName: o,
                                          eventTime: String(Date.now()),
                                          eventProperties: y(
                                            y(y({}, e.config), n),
                                            i
                                          ),
                                        })),
                                        "DEBUG" === e.level &&
                                          console.info(
                                            "<analytics> ",
                                            JSON.parse(u)
                                          ),
                                        "TAHOE" === e.level &&
                                          fetch(e.TAHOE_PROD_URL, {
                                            method: "POST",
                                            headers: {
                                              "Content-Type":
                                                "application/json",
                                              "x-api-key": e.TAHOE_PROD,
                                            },
                                            body: JSON.stringify({
                                              Data: window.btoa(u),
                                              PartitionKey: String(Date.now()),
                                            }),
                                          }),
                                        t(!0));
                                  } catch (n) {
                                    t(!1);
                                  }
                                })
                              )
                            );
                          case 3:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  });
                  var n,
                    r = function () {
                      var t = this,
                        e = arguments;
                      return new Promise(function (r, o) {
                        var i = n.apply(t, e);
                        function a(t) {
                          b(i, r, o, a, c, "next", t);
                        }
                        function c(t) {
                          b(i, r, o, a, c, "throw", t);
                        }
                        a(void 0);
                      });
                    };
                  return function (t, e) {
                    return r.apply(this, arguments);
                  };
                })()
              ),
              l.a.getState());
          (this.config = n.config),
            (this.timings = []),
            (this.log = function (t, n, r) {
              try {
                e.timings.push({
                  time: performance.now(),
                  key: "".concat(t, "/").concat(n),
                }),
                  r && e.trackEvent(t, n, {}, r);
              } catch (t) {}
            });
        }
        return (
          h(
            t,
            [
              {
                key: "getBrowserInfo",
                value: function () {
                  try {
                    var t,
                      e = navigator.connection;
                    return {
                      connection: {
                        effectiveType: null == e ? void 0 : e.effectiveType,
                        rtt: null == e ? void 0 : e.rtt,
                        downlink: null == e ? void 0 : e.downlink,
                      },
                      screen: Object(i.g)(window),
                      userAgent: null == (t = navigator) ? void 0 : t.userAgent,
                    };
                  } catch (t) {
                    return {};
                  }
                },
              },
            ],
            [
              {
                key: "get",
                value: function () {
                  return (
                    null === this._analytics && (this._analytics = new t()),
                    this._analytics
                  );
                },
              },
            ]
          ),
          t
        );
      })();
    O(E, "_analytics", null),
      O(E, "getDefaultSamplingRate", function () {
        var t = Object(u.c)("APS_ANALYTICS_RATE", 0.1);
        try {
          return Number(t);
        } catch (t) {
          return 0.1;
        }
      });
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return b;
    });
    var r = n(0),
      o = ((e = n(18)), n(1)),
      i = n(26);
    function a(t) {
      return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function c(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, f(r.key), r);
      }
    }
    function s(t, e) {
      return (s = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function u(t) {
      var e = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = d(t);
        (n = e
          ? ((n = d(this).constructor), Reflect.construct(r, arguments, n))
          : r.apply(this, arguments)),
          (r = this);
        if (n && ("object" === a(n) || "function" == typeof n)) return n;
        if (void 0 !== n)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return l(r);
      };
    }
    function l(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function d(t) {
      return (d = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function f(t) {
      return (
        (t = (function (t, e) {
          if ("object" !== a(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 === n) return String(t);
          if ("object" !== a((n = n.call(t, e)))) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        })(t, "string")),
        "symbol" === a(t) ? t : String(t)
      );
    }
    var b = (function (t) {
      var e = a;
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && s(e, t);
      var n = u(a);
      function a() {
        var t = this,
          e = a;
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
        for (
          var r, o, i = arguments.length, c = new Array(i), s = 0;
          s < i;
          s++
        )
          c[s] = arguments[s];
        return (
          (e = l((t = n.call.apply(n, [this].concat(c))))),
          (o = !0),
          (r = f((r = "isSupported"))) in e
            ? Object.defineProperty(e, r, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = o),
          t
        );
      }
      return (
        (e = a),
        (t = [
          {
            key: "reportError",
            value: function (t, e) {
              Object(o.b)(t, "GoogletagAdServer-".concat(e));
            },
          },
          {
            key: "cmdQueuePush",
            value: function (t) {
              try {
                window.googletag.cmd.push(t);
              } catch (t) {
                this.reportError(t, "cmdQueuePush");
              }
            },
          },
          {
            key: "slotRenderEndedEvent",
            value: function (t) {
              try {
                window.googletag
                  .pubads()
                  .addEventListener("slotRenderEnded", function (e) {
                    (e = new i.a(e.slot)), t(e);
                  });
              } catch (t) {
                this.reportError(t, "slotRenderEndedEvent");
              }
            },
          },
          {
            key: "setTargeting",
            value: function (t, e) {
              try {
                window.googletag.pubads().setTargeting(t, e);
              } catch (t) {
                this.reportError(t, "setTargeting");
              }
            },
          },
          {
            key: "getTargeting",
            value: function (t) {
              try {
                return window.googletag.pubads().getTargeting(t) || [];
              } catch (t) {
                return this.reportError(t, "getTargeting"), [];
              }
            },
          },
          {
            key: "clearTargeting",
            value: function (t) {
              try {
                window.googletag.pubads().clearTargeting(t);
              } catch (t) {
                this.reportError(t, "clearTargeting");
              }
            },
          },
          {
            key: "hasAdServerObjectLoaded",
            value: function () {
              try {
                return (
                  Object(r.k)(window, "googletag") &&
                  Object(r.k)(window.googletag, "apiReady") &&
                  !0 === window.googletag.apiReady
                );
              } catch (t) {
                return this.reportError(t, "hasAdServerObjectLoaded"), !1;
              }
            },
          },
          {
            key: "isCommandQueueDefined",
            value: function () {
              try {
                return (
                  Object(r.k)(window, "googletag") &&
                  Object(r.k)(window.googletag, "cmd")
                );
              } catch (t) {
                return this.reportError(t, "isCommandQueueDefined"), !1;
              }
            },
          },
          {
            key: "getSlots",
            value: function () {
              try {
                return window.googletag
                  .pubads()
                  .getSlots()
                  .map(function (t) {
                    return new i.a(t);
                  });
              } catch (t) {
                return this.reportError(t, "getSlots"), [];
              }
            },
          },
        ]) && c(e.prototype, t),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        a
      );
    })(e.a);
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return M;
    });
    var r = n(18),
      o = n(0),
      i = n(1),
      a = ((e = n(19)), n(6));
    function c(t) {
      return (c =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function s(t, e) {
      var n,
        r = Object.keys(t);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(t)),
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
          r.push.apply(r, n)),
        r
      );
    }
    function u(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? s(Object(n), !0).forEach(function (e) {
              g(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : s(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function l(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, m(r.key), r);
      }
    }
    function d() {
      return (d =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get.bind()
          : function (t, e, n) {
              var r = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = y(t));

                );
                return t;
              })(t, e);
              if (r)
                return (r = Object.getOwnPropertyDescriptor(r, e)).get
                  ? r.get.call(arguments.length < 3 ? t : n)
                  : r.value;
            }).apply(this, arguments);
    }
    function f(t, e) {
      return (f = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function b(t) {
      var e = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = y(t);
        (n = e
          ? ((n = y(this).constructor), Reflect.construct(r, arguments, n))
          : r.apply(this, arguments)),
          (r = this);
        if (n && ("object" === c(n) || "function" == typeof n)) return n;
        if (void 0 !== n)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return p(r);
      };
    }
    function p(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function y(t) {
      return (y = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function g(t, e, n) {
      (e = m(e)) in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n);
    }
    function m(t) {
      return (
        (t = (function (t, e) {
          if ("object" !== c(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 === n) return String(t);
          if ("object" !== c((n = n.call(t, e)))) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        })(t, "string")),
        "symbol" === c(t) ? t : String(t)
      );
    }
    var h = (function (t) {
      var e = r;
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && f(e, t);
      var n = b(r);
      function r(t) {
        var e;
        if (this instanceof r)
          return (
            (e = {
              slotID: t.targetId,
              slotName: Object(o.k)(t, "invCode")
                ? t.invCode
                : Object(o.k)(t, "tagId")
                ? t.tagId
                : t.targetId,
            }),
            g(p((e = n.call(this, e))), "rawSlot", void 0),
            (e.rawSlot = t),
            e
          );
        throw new TypeError("Cannot call a class as a function");
      }
      return (
        (e = r),
        (t = [
          {
            key: "mediaType",
            get: function () {
              return a.a.DISPLAY;
            },
          },
          {
            key: "sizes",
            get: function () {
              try {
                return this.rawSlot.sizes;
              } catch (t) {
                return this.reportError(t, "sizes"), [];
              }
            },
          },
          {
            key: "aaxSlot",
            get: function () {
              try {
                var t = u(
                  u({}, d(y(r.prototype), "aaxSlot", this)),
                  {},
                  {
                    sd: this.slotID,
                    s: this.sizes.filter(o.i).map(function (t) {
                      return t.join("x");
                    }),
                  }
                );
                return (
                  this.slotID !== this.slotName && (t.sn = this.slotName), t
                );
              } catch (t) {
                return { sd: "", s: [], kv: {} };
              }
            },
          },
          {
            key: "reportError",
            value: function (t, e, n) {
              Object(i.b)(t, "ApnSlot-".concat(e), n);
            },
          },
          {
            key: "isValid",
            value: function () {
              return !(
                !d(y(r.prototype), "isValid", this).call(this) ||
                (0 === this.sizes.length &&
                  (this.reportIsValidMessages(
                    ["'sizes' must have at least 1 valid item"],
                    !0
                  ),
                  1))
              );
            },
          },
          {
            key: "initKeywords",
            value: function () {
              try {
                Object(o.k)(this.rawSlot, "keywords") ||
                  (this.rawSlot.keywords = {});
              } catch (t) {
                this.reportError(t, "initKeywords");
              }
            },
          },
          {
            key: "setTargeting",
            value: function (t, e) {
              try {
                this.initKeywords(), (this.rawSlot.keywords[t] = e);
              } catch (t) {
                this.reportError(t, "setTargeting");
              }
            },
          },
          {
            key: "getTargeting",
            value: function (t) {
              try {
                return (
                  this.initKeywords(),
                  Object(o.k)(this.rawSlot.keywords, t)
                    ? [this.rawSlot.keywords[t]]
                    : []
                );
              } catch (t) {
                return this.reportError(t, "getTargeting"), [];
              }
            },
          },
          {
            key: "clearTargeting",
            value: function (t) {
              try {
                this.initKeywords(), delete this.rawSlot.keywords[t];
              } catch (t) {
                this.reportError(t, "clearTargeting");
              }
            },
          },
        ]) && l(e.prototype, t),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        r
      );
    })(e.a);
    function O(t) {
      return (O =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function v(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, T(r.key), r);
      }
    }
    function j(t, e) {
      return (j = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function S(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function w(t) {
      return (w = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function T(t) {
      return (
        (t = (function (t, e) {
          if ("object" !== O(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 === n) return String(t);
          if ("object" !== O((n = n.call(t, e)))) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        })(t, "string")),
        "symbol" === O(t) ? t : String(t)
      );
    }
    var _ = (function (t) {
        var e = r;
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && j(e, t);
        var n = (function (t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = w(t);
            (n = e
              ? ((n = w(this).constructor), Reflect.construct(r, arguments, n))
              : r.apply(this, arguments)),
              (r = this);
            if (n && ("object" === O(n) || "function" == typeof n)) return n;
            if (void 0 !== n)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return S(r);
          };
        })(r);
        function r() {
          var t = this,
            e = r;
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
          for (
            var o, i, a = arguments.length, c = new Array(a), s = 0;
            s < a;
            s++
          )
            c[s] = arguments[s];
          return (
            (e = S((t = n.call.apply(n, [this].concat(c))))),
            (i = !0),
            (o = T((o = "isSupported"))) in e
              ? Object.defineProperty(e, o, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[o] = i),
            t
          );
        }
        return (
          (e = r),
          (t = [
            {
              key: "reportError",
              value: function (t, e) {
                Object(i.b)(t, "AppNexusAdServer-".concat(e));
              },
            },
            {
              key: "cmdQueuePush",
              value: function (t) {
                try {
                  window.apntag.anq.push(t);
                } catch (t) {
                  this.reportError(t, "cmdQueuePush");
                }
              },
            },
            {
              key: "setTargeting",
              value: function (t, e) {
                try {
                  Object(o.k)(window, "apntag") &&
                    Object(o.k)(window.apntag, "requests") &&
                    (Object(o.k)(window.apntag.requests, "keywords") ||
                      (window.apntag.requests.keywords = {}),
                    (window.apntag.requests.keywords[t] = e));
                } catch (t) {
                  this.reportError(t, "setTargeting");
                }
              },
            },
            {
              key: "getTargeting",
              value: function (t) {
                try {
                  if (
                    !Object(o.k)(window, "apntag") ||
                    !Object(o.k)(window.apntag, "requests")
                  )
                    return [];
                  Object(o.k)(window.apntag.requests, "keywords") ||
                    (window.apntag.requests.keywords = {});
                  var e = window.apntag.requests.keywords[t];
                  return void 0 === e ? [] : [e];
                } catch (t) {
                  return this.reportError(t, "getTargeting"), [];
                }
              },
            },
            {
              key: "clearTargeting",
              value: function (t) {
                try {
                  Object(o.k)(window, "apntag") &&
                    Object(o.k)(window.apntag, "requests") &&
                    Object(o.k)(window.apntag.requests, "keywords") &&
                    delete window.apntag.requests.keywords[t];
                } catch (t) {
                  this.reportError(t, "clearTargeting");
                }
              },
            },
            {
              key: "hasAdServerObjectLoaded",
              value: function () {
                try {
                  return (
                    Object(o.k)(window, "apntag") &&
                    Object(o.k)(window.apntag, "loaded") &&
                    !0 === window.apntag.loaded
                  );
                } catch (t) {
                  return this.reportError(t, "hasAdServerObjectLoaded"), !1;
                }
              },
            },
            {
              key: "isCommandQueueDefined",
              value: function () {
                try {
                  return (
                    Object(o.k)(window, "apntag") &&
                    Object(o.k)(window.apntag, "anq")
                  );
                } catch (t) {
                  return this.reportError(t, "isCommandQueueDefined"), !1;
                }
              },
            },
            {
              key: "getSlots",
              value: function () {
                try {
                  var t = [];
                  return (
                    Object(o.k)(window, "apntag") &&
                      Object(o.k)(window.apntag, "requests") &&
                      Object(o.k)(window.apntag.requests, "tags") &&
                      Object(o.j)(window.apntag.requests.tags) &&
                      Object.keys(window.apntag.requests.tags).forEach(
                        function (e) {
                          (e = window.apntag.requests.tags[e]),
                            t.push(new h(e));
                        }
                      ),
                    t
                  );
                } catch (t) {
                  return this.reportError(t, "getSlots"), [];
                }
              },
            },
          ]) && v(e.prototype, t),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          r
        );
      })(r.a),
      D = n(29);
    function A(t) {
      return (A =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function I(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, C(r.key), r);
      }
    }
    function E(t, e) {
      return (E = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function k(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function P(t) {
      return (P = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function R(t, e, n) {
      (e = C(e)) in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n);
    }
    function C(t) {
      return (
        (t = (function (t, e) {
          if ("object" !== A(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 === n) return String(t);
          if ("object" !== A((n = n.call(t, e)))) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        })(t, "string")),
        "symbol" === A(t) ? t : String(t)
      );
    }
    var z = (function (t) {
        var e = r;
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && E(e, t);
        var n = (function (t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = P(t);
            (n = e
              ? ((n = P(this).constructor), Reflect.construct(r, arguments, n))
              : r.apply(this, arguments)),
              (r = this);
            if (n && ("object" === A(n) || "function" == typeof n)) return n;
            if (void 0 !== n)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return k(r);
          };
        })(r);
        function r() {
          var t = this,
            e = r;
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
          for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
            i[a] = arguments[a];
          return (
            R(k((t = n.call.apply(n, [this].concat(i)))), "isSupported", !0),
            R(k(t), "needNewBidObject", !0),
            t
          );
        }
        return (
          (e = r),
          (t = [
            {
              key: "reportError",
              value: function (t, e) {
                Object(i.b)(t, "SmartAdServer-".concat(e));
              },
            },
            {
              key: "cmdQueuePush",
              value: function (t) {
                try {
                  window.sas.cmd.push(t);
                } catch (t) {
                  this.reportError(t, "cmdQueuePush");
                }
              },
            },
            {
              key: "hasAdServerObjectLoaded",
              value: function () {
                try {
                  return (
                    Object(o.k)(window, "sas") &&
                    Object(o.k)(window.sas, "__smartLoaded") &&
                    !0 === window.sas.__smartLoaded
                  );
                } catch (t) {
                  return this.reportError(t, "hasAdServerObjectLoaded"), !1;
                }
              },
            },
            {
              key: "isCommandQueueDefined",
              value: function () {
                try {
                  return (
                    Object(o.k)(window, "sas") && Object(o.k)(window.sas, "cmd")
                  );
                } catch (t) {
                  return this.reportError(t, "isCommandQueueDefined"), !1;
                }
              },
            },
          ]) && I(e.prototype, t),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          r
        );
      })(r.a),
      x = n(3);
    function M(t) {
      var e = new r.a();
      try {
        switch (t) {
          case "appnexus":
            Object(x.c)("adServer", t), (e = new _());
            break;
          case "googletag":
            Object(x.c)("adServer", t), (e = new D.a());
            break;
          case "sas":
            Object(x.c)("adServer", t), (e = new z());
            break;
          default:
            "string" == typeof t
              ? Object(x.c)("adServer", "invalid-".concat(t))
              : Object(x.c)("adServer", "none");
        }
      } catch (t) {
        Object(i.b)(t, "getDisplayAdServer");
      }
      return e;
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "b", function () {
      return a;
    }),
      n.d(e, "a", function () {
        return c;
      });
    var r = n(4),
      o = n(0),
      i = n(1);
    function a(t) {
      try {
        return Object(o.k)(t, "debug");
      } catch (t) {
        return Object(i.b)(t, "isApstagLibrary"), !1;
      }
    }
    function c(t) {
      try {
        return !!Object(o.k)(t, r.a) && !0 === t[r.a];
      } catch (t) {
        return Object(i.b)(t, "hasApstagJsLoaded"), !1;
      }
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return y;
    });
    e = n(19);
    var r = n(25);
    function o(t) {
      return (o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function i(t, e) {
      var n,
        r = Object.keys(t);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(t)),
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
          r.push.apply(r, n)),
        r
      );
    }
    function a(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? i(Object(n), !0).forEach(function (e) {
              b(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : i(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function c(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, p(r.key), r);
      }
    }
    function s() {
      return (s =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get.bind()
          : function (t, e, n) {
              var r = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = f(t));

                );
                return t;
              })(t, e);
              if (r)
                return (r = Object.getOwnPropertyDescriptor(r, e)).get
                  ? r.get.call(arguments.length < 3 ? t : n)
                  : r.value;
            }).apply(this, arguments);
    }
    function u(t, e) {
      return (u = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function l(t) {
      var e = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = f(t);
        (n = e
          ? ((n = f(this).constructor), Reflect.construct(r, arguments, n))
          : r.apply(this, arguments)),
          (r = this);
        if (n && ("object" === o(n) || "function" == typeof n)) return n;
        if (void 0 !== n)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return d(r);
      };
    }
    function d(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function f(t) {
      return (f = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function b(t, e, n) {
      (e = p(e)) in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n);
    }
    function p(t) {
      return (
        (t = (function (t, e) {
          if ("object" !== o(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 === n) return String(t);
          if ("object" !== o((n = n.call(t, e)))) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        })(t, "string")),
        "symbol" === o(t) ? t : String(t)
      );
    }
    var y = (function (t) {
      var e = o;
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && u(e, t);
      var n = l(o);
      function o(t) {
        if (this instanceof o)
          return (
            b(d((t = n.call(this, t))), "_sizesDelegate", void 0),
            (t._sizesDelegate = new r.a(t.rawSlot.sizes)),
            t
          );
        throw new TypeError("Cannot call a class as a function");
      }
      return (
        (e = o),
        (t = [
          {
            key: "sizes",
            get: function () {
              return this._sizesDelegate.sizes;
            },
          },
          {
            key: "aaxSizes",
            get: function () {
              return this._sizesDelegate.aaxSizes || [];
            },
          },
          {
            key: "aaxSlot",
            get: function () {
              var t = { sd: this.slotID, s: this.aaxSizes };
              return (
                this.slotID !== this.slotName && (t.sn = this.slotName),
                a(a({}, t), s(f(o.prototype), "aaxSlot", this))
              );
            },
          },
          {
            key: "isValid",
            value: function () {
              return !(
                !s(f(o.prototype), "isValid", this).call(this) ||
                (0 === this.sizes.length &&
                  (this.reportIsValidMessages(
                    ["'sizes' must have at least 1 valid item"],
                    !0
                  ),
                  1))
              );
            },
          },
        ]) && c(e.prototype, t),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        o
      );
    })(e.a);
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return s;
    }),
      n.d(e, "b", function () {
        return c;
      });
    var r = n(2),
      o = n(1),
      i = n(0),
      a = n(10);
    function c(t) {
      try {
        var e = r.a.getState().cfg.COOKIE_MATCH_DELAY;
        setTimeout(function () {
          try {
            if (Object(i.k)(t, "cmp")) {
              var e = t.cmp;
              function n(t) {
                try {
                  var e;
                  r.a.getState().cmpFired ||
                    (r.a.dispatch({ type: "CMP_FIRED" }),
                    ((e = document.createElement("iframe")).style.display =
                      "none"),
                    (e.src = t),
                    document.body.appendChild(e));
                } catch (t) {
                  Object(o.b)(t, "_doCookieMatch-ready");
                }
              }
              try {
                "loading" === document.readyState
                  ? document.addEventListener &&
                    document.addEventListener(
                      "DOMContentLoaded",
                      function () {
                        n(e);
                      },
                      !1
                    )
                  : n(e);
              } catch (e) {
                Object(o.b)(e, "_doCookieMatch");
              }
            } else Object(i.k)(t, "cmpjs") && Object(a.b)(t.cmpjs);
          } catch (e) {
            Object(o.b)(e, "_tryCookieMatch-setTimeout");
          }
        }, e);
      } catch (e) {
        Object(o.b)(e, "_tryCookieMatch");
      }
    }
    function s(t, e) {
      var n = e;
      return function () {
        var e = { method: t, args: arguments };
        try {
          (e.ts = Date.now()), r.a.dispatch({ type: "LOG_EVENT", event: e });
        } catch (e) {
          Object(o.b)(e, "_logEvent");
        }
        return n.apply(void 0, arguments);
      };
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return c;
    });
    var r = n(2),
      o = n(1),
      i = n(7),
      a = n(4);
    function c(t, e, n) {
      try {
        var c,
          s = r.a.getState(),
          u = s.config,
          l = Object(i.c)("host", s.hosts.DEFAULT_CXM_HOST),
          d = s.cfg.LIB_CONFIG_PATH;
        try {
          if (0 <= [":", ":"].indexOf(t.protocol))
            c = t.protocol + "//" + t.hostname;
          else {
            if (!(0 <= [":", ":"].indexOf(e.protocol))) return null;
            c = e.protocol + "//" + e.hostname;
          }
        } catch (t) {
          if (t instanceof window.DOMException) return null;
          throw t;
        }
        var f,
          b =
            (b = null == n ? void 0 : n.sourceID) ||
            (u.isSelfServePub ? a.u : u.pubID),
          p = null == n ? void 0 : n.publisherUUID,
          y =
            (p || (u.isSelfServePub && (p = u.pubID)),
            { src: b, u: encodeURIComponent(c) });
        return (
          p && (y.pubid = p),
          !y.src || isNaN(Number(y.src))
            ? null
            : ((f = Object.keys(y)
                .map(function (t) {
                  return "".concat(t.trim(), "=").concat(String(y[t]).trim());
                })
                .join("&")),
              "".concat(a.x).concat(l).concat(d, "?").concat(f))
        );
      } catch (t) {
        return Object(o.b)(t, "buildLibraryConfigUrl"), null;
      }
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return c;
    });
    var r = n(0),
      o = n(9),
      i = n(11),
      a = n(3);
    function c(t, e) {
      var n, c, s, u, l, d;
      Object(r.j)(e.data)
        ? (Object(r.k)(e.data, "bidInfo") &&
            (Object(r.k)(e.data.bidInfo, "src")
              ? ((n = e.data.bidInfo.src),
                (n = new URL(n).searchParams.get("b")))
              : Object(r.k)(e.data.bidInfo, "jsonp") &&
                ((l = e.data.bidInfo.jsonp),
                (n = JSON.parse(l.substr(17, l.length - 20)).amzniid))),
          Object(r.k)(e.data, "renderData") &&
            ((c = (l = e.data.renderData).id),
            Object(r.k)(l, "renderStart") || Object(r.k)(l, "renderEnd")) &&
            ((d = l.renderStart),
            (l = l.renderEnd),
            d
              ? ((t.renderTimes[c] = { timeStamp: d }),
                n && (t.renderTimes[c].bidId = n))
              : l &&
                Object(r.k)(t.renderTimes, c) &&
                0 !== t.renderTimes[c].timeStamp &&
                ((d = l - t.renderTimes[c].timeStamp),
                (l = { _type: "iframeRender", c: "dtb", pid: i.b, crt: d }),
                (n = t.renderTimes[c].bidId ? t.renderTimes[c].bidId : n)
                  ? Object(a.a)(n, l)
                  : Object(a.b)(l))),
          Object(r.k)(e.data, "blockData") &&
            ((d = e.data.blockData.blockInfo),
            (t = {
              _type: "malwareBlock",
              c: "dtb",
              tpbr: 1,
              pid: i.b,
              info: d,
            }),
            n ? Object(a.a)(n, t) : Object(a.b)(t)),
          Object(r.k)(e.data, "creativeFormatPixel") &&
            ((l = (c = (c = e).data.creativeFormatPixel).vendorId),
            (d = void 0 === (d = c.pixelData) ? {} : d),
            l) &&
            ("creativeFormatBidPixel" === c.type &&
              ((u = {
                _type: "creativeFormatBidPixel",
                cfbp: 1,
                c: "dtb",
                vendorId: l,
              }),
              (s = void 0 === (s = d.bi) ? "" : s) && (u.bi = s),
              Object(a.b)(u)),
            "creativeFormatImpressionPixel" === c.type) &&
            ((s = d.bi),
            (c = void 0 === (u = d.ii) ? "" : u),
            (u = {
              _type: "creativeFormatImpressionPixel",
              cfip: 1,
              c: "dtb",
              vendorId: l,
              bp: void 0 === (u = d.bp) ? 0 : u,
              bpc: void 0 === (l = d.bpc) ? "USD" : l,
            }),
            (d = void 0 === s ? "" : s) && (u.bi = d),
            c && (u.ii = c),
            Object(a.b)(u)))
        : e.data &&
          "adBlocked" === e.data &&
          ((n = {
            _type: "adBlockedPixel",
            c: "dtb",
            pid: i.b,
            abc: 1,
            u: Object(o.g)(window),
          }),
          Object(a.b)(n));
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return i;
    });
    var r = n(3),
      o = n(1);
    function i(t) {
      try {
        !1 !== window.apstag.isGDPRRegion ||
        "function" != typeof document.hasTrustToken
          ? Object(r.c)("trustToken", "notSupported")
          : ((t.trustTokenParameter = {
              type: "send-redemption-record",
              issuers: [""],
              refreshPolicy: "none",
              includeTimestampHeader: !0,
              signRequestData: "headers-only",
              additionalSigningData: "additional_signing_data",
            }),
            Object(r.c)("trustToken", "supported"),
            document
              .hasTrustToken("")
              .then(function (t) {
                t && Object(r.c)("trustToken", "present");
              })
              .catch(function () {
                Object(r.c)("trustToken", "absent");
              }));
      } catch (t) {
        Object(o.b)(t, "trustToken");
      }
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return m;
    });
    e = n(19);
    var r = n(25),
      o = n(6),
      i = n(20);
    function a(t) {
      return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function c(t, e) {
      var n,
        r = Object.keys(t);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(t)),
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
          r.push.apply(r, n)),
        r
      );
    }
    function s(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? c(Object(n), !0).forEach(function (e) {
              y(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : c(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function u(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, g(r.key), r);
      }
    }
    function l() {
      return (l =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get.bind()
          : function (t, e, n) {
              var r = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = p(t));

                );
                return t;
              })(t, e);
              if (r)
                return (r = Object.getOwnPropertyDescriptor(r, e)).get
                  ? r.get.call(arguments.length < 3 ? t : n)
                  : r.value;
            }).apply(this, arguments);
    }
    function d(t, e) {
      return (d = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function f(t) {
      var e = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = p(t);
        (n = e
          ? ((n = p(this).constructor), Reflect.construct(r, arguments, n))
          : r.apply(this, arguments)),
          (r = this);
        if (n && ("object" === a(n) || "function" == typeof n)) return n;
        if (void 0 !== n)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return b(r);
      };
    }
    function b(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function p(t) {
      return (p = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function y(t, e, n) {
      (e = g(e)) in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n);
    }
    function g(t) {
      return (
        (t = (function (t, e) {
          if ("object" !== a(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 === n) return String(t);
          if ("object" !== a((n = n.call(t, e)))) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        })(t, "string")),
        "symbol" === a(t) ? t : String(t)
      );
    }
    var m = (function (t) {
      var e = a;
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && d(e, t);
      var n = f(a);
      function a(t) {
        if (this instanceof a)
          return (
            y(b((t = n.call(this, t))), "_sizesDelegate", void 0),
            (t._sizesDelegate = new r.a(t.rawSlot.sizes)),
            t
          );
        throw new TypeError("Cannot call a class as a function");
      }
      return (
        (e = a),
        (t = [
          {
            key: "mediaType",
            get: function () {
              return o.a.VIDEO;
            },
          },
          {
            key: "aaxMediaType",
            get: function () {
              return i.a.VIDEO;
            },
          },
          {
            key: "sizes",
            get: function () {
              return this._sizesDelegate.sizes;
            },
          },
          {
            key: "aaxSizes",
            get: function () {
              return this._sizesDelegate.aaxSizes || [];
            },
          },
          {
            key: "aaxSlot",
            get: function () {
              var t = s(
                s({}, l(p(a.prototype), "aaxSlot", this)),
                {},
                { id: this.slotID, mt: this.aaxMediaType }
              );
              return 0 < this.sizes.length && (t.s = this.aaxSizes), t;
            },
          },
        ]) && u(e.prototype, t),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        a
      );
    })(e.a);
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return j;
    }),
      ((e = r = r || {}).LOCAL_STORAGE = "LOCAL"),
      (e.CSS_SELECTOR = "CSS"),
      (e.URL = "URL"),
      ((o = o || {}).EMAIL = "email");
    var r,
      o,
      i = n(1),
      a = n(15),
      c = n(5);
    function s(t, e) {
      var n,
        r,
        o,
        i,
        a =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
      if (a)
        return (
          (r = !(n = !0)),
          {
            s: function () {
              a = a.call(t);
            },
            n: function () {
              var t = a.next();
              return (n = t.done), t;
            },
            e: function (t) {
              (r = !0), (o = t);
            },
            f: function () {
              try {
                n || null == a.return || a.return();
              } finally {
                if (r) throw o;
              }
            },
          }
        );
      if (
        Array.isArray(t) ||
        (a = (function (t, e) {
          var n;
          if (t)
            return "string" == typeof t
              ? u(t, e)
              : "Map" ===
                  (n =
                    "Object" ===
                      (n = Object.prototype.toString.call(t).slice(8, -1)) &&
                    t.constructor
                      ? t.constructor.name
                      : n) || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? u(t, e)
              : void 0;
        })(t)) ||
        (e && t && "number" == typeof t.length)
      )
        return (
          a && (t = a),
          (i = 0),
          {
            s: (e = function () {}),
            n: function () {
              return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
            },
            e: function (t) {
              throw t;
            },
            f: e,
          }
        );
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    function u(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    function l(t) {
      return t
        .then(function (t) {
          return Array.from(new Uint8Array(t))
            .map(function (t) {
              return t.toString(16).padStart(2, "0");
            })
            .join("");
        })
        .then(function (t) {
          return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" !==
            t
            ? t
            : "";
        });
    }
    function d(t, e) {
      return t instanceof window.HTMLInputElement ||
        t instanceof window.HTMLTextAreaElement
        ? f(t.value, e)
          ? l(
              window.crypto.subtle.digest(
                "SHA-256",
                new window.TextEncoder().encode(t.value || "")
              )
            )
          : Promise.resolve("")
        : f(t.innerText, e)
        ? l(
            window.crypto.subtle.digest(
              "SHA-256",
              new window.TextEncoder().encode(t.innerText || "")
            )
          )
        : Promise.resolve("");
    }
    var f = function (t, e) {
        return (
          "string" == typeof t &&
          (e === o.EMAIL
            ? /\S+@\S+\.\S+/.test(t) || Object(a.c)(t)
            : 0 < t.trim().length)
        );
      },
      b = function (t, e, n) {
        if (0 === (n = n || window.document.querySelectorAll(t)).length)
          return new Promise(function (t) {
            return t("");
          });
        if (1 === n.length) return d(n[0], e);
        var r,
          o = [],
          i = s(n);
        try {
          for (i.s(); !(r = i.n()).done; ) {
            var a = r.value;
            o.push(d(a, e));
          }
        } catch (t) {
          i.e(t);
        } finally {
          i.f();
        }
        return Promise.all(o).then(function (t) {
          var e,
            n = null,
            r = s(t);
          try {
            for (r.s(); !(e = r.n()).done; ) {
              var o = e.value;
              if ("" !== o) {
                if (null !== n && ("string" != typeof n || n !== o)) return "";
                n = o;
              }
            }
          } catch (t) {
            r.e(t);
          } finally {
            r.f();
          }
          return n || "";
        });
      },
      p = n(23),
      y = n(2);
    function g(t) {
      return (g =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function m(t, e) {
      var n,
        r,
        o,
        i,
        a =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
      if (a)
        return (
          (r = !(n = !0)),
          {
            s: function () {
              a = a.call(t);
            },
            n: function () {
              var t = a.next();
              return (n = t.done), t;
            },
            e: function (t) {
              (r = !0), (o = t);
            },
            f: function () {
              try {
                n || null == a.return || a.return();
              } finally {
                if (r) throw o;
              }
            },
          }
        );
      if (
        Array.isArray(t) ||
        (a = (function (t, e) {
          var n;
          if (t)
            return "string" == typeof t
              ? h(t, e)
              : "Map" ===
                  (n =
                    "Object" ===
                      (n = Object.prototype.toString.call(t).slice(8, -1)) &&
                    t.constructor
                      ? t.constructor.name
                      : n) || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? h(t, e)
              : void 0;
        })(t)) ||
        (e && t && "number" == typeof t.length)
      )
        return (
          a && (t = a),
          (i = 0),
          {
            s: (e = function () {}),
            n: function () {
              return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
            },
            e: function (t) {
              throw t;
            },
            f: e,
          }
        );
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    function h(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    function O(t, e, n) {
      (e = (function (t) {
        return (
          (t = (function (t, e) {
            if ("object" !== g(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 === n) return String(t);
            if ("object" !== g((n = n.call(t, e)))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          })(t, "string")),
          "symbol" === g(t) ? t : String(t)
        );
      })(e)) in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n);
    }
    var v = { called: !1 };
    function j(t) {
      if (Promise && TextEncoder && window.crypto && window.crypto.subtle)
        try {
          var e;
          v.called && !t.overrideLimit
            ? Object(i.b)(
                new Error("rr should only be called once per page load"),
                "retrieveRecords-callLimit"
              )
            : ((v.called = !0),
              (e = 0),
              (function n() {
                !(
                  (window.apstag.isGDPRRegion &&
                    !new p.a({ stateContainer: y.a, globalContext: window })
                      .isListenerActive) ||
                  (c.a.getDefault().allowedToStoreAndAccessInformationOnDevice()
                    ? (function () {
                        var t,
                          e,
                          n,
                          o,
                          s,
                          u,
                          l =
                            0 < arguments.length && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          d = 1 < arguments.length ? arguments[1] : void 0,
                          p =
                            ((t = l.methods || []),
                            O((e = {}), r.LOCAL_STORAGE, 5),
                            O(e, r.URL, 4),
                            O(e, r.CSS_SELECTOR, 3),
                            (n = e),
                            (o = {}),
                            t.forEach(function (t) {
                              (o[t.method] = (o[t.method] || 0) + 1),
                                (t.priority = o[t.method]);
                            }),
                            t.sort(function (t, e) {
                              return t.method === e.method
                                ? (t.priority || 0) > (e.priority || 0)
                                  ? 1
                                  : -1
                                : n[t.method] > n[e.method]
                                ? -1
                                : 1;
                            }),
                            []),
                          y = m(l.methods || []);
                        try {
                          var h = function () {
                            var t = u.value,
                              e = t.method,
                              n = t.target,
                              o = t.type,
                              l = "";
                            switch (e) {
                              case r.LOCAL_STORAGE:
                                l = (function (t, e) {
                                  return (t = c.a
                                    .getDefault()
                                    .localStorage.getItem(t, {
                                      ignoreFailure: !1,
                                    })) && f(t, e)
                                    ? t
                                    : "";
                                })(n, o);
                                break;
                              case r.URL:
                                p.push(
                                  (function (t) {
                                    var e =
                                      1 < arguments.length &&
                                      void 0 !== arguments[1]
                                        ? arguments[1]
                                        : window.location.href;
                                    try {
                                      t = t.replace(/[\[\]]/g, "\\$&");
                                      var n = new RegExp(
                                        "[?&#]" + t + "(=([^&#?]*)|&|#|$)"
                                      ).exec(e);
                                      return Array.isArray(n) &&
                                        "string" == typeof n[2] &&
                                        0 !==
                                          decodeURIComponent(
                                            n[2].replace(/\+/g, " ")
                                          ).trim().length &&
                                        Object(a.c)(
                                          decodeURIComponent(
                                            n[2].replace(/\+/g, " ")
                                          )
                                        )
                                        ? Promise.resolve(
                                            decodeURIComponent(
                                              n[2].replace(/\+/g, " ")
                                            )
                                          )
                                        : new Promise(function (t) {
                                            return t("");
                                          });
                                    } catch (t) {
                                      return (
                                        Object(i.b)(t, "retrieveUrl"),
                                        Promise.resolve("")
                                      );
                                    }
                                  })(n).then(function (t) {
                                    return { type: o, value: t };
                                  })
                                );
                                break;
                              case r.CSS_SELECTOR:
                                s = t;
                            }
                            if (0 < l.length)
                              return d({ value: l, type: o }), { v: void 0 };
                          };
                          for (y.s(); !(u = y.n()).done; ) {
                            var v = h();
                            if ("object" === g(v)) return v.v;
                          }
                        } catch (t) {
                          y.e(t);
                        } finally {
                          y.f();
                        }
                        function j() {
                          var t, e, n, r, o, i;
                          s &&
                          (!0 === s.isGlobalSubmit ||
                            ("string" == typeof s.eventTarget &&
                              "string" == typeof s.event)) &&
                          ((e = (t = s).eventTarget),
                          (n = t.target),
                          (r = t.type),
                          (o = t.isGlobalSubmit),
                          "string" == typeof (i = o ? "submit" : s.event)) &&
                          0 !== i.length
                            ? window.addEventListener(i, function t(a) {
                                var c, s, u, l, f, p, y, g, m;
                                (s = (a = {
                                  e: a,
                                  event: i,
                                  eventTarget: e,
                                  isGlobalSubmit: o,
                                  target: n,
                                  type: r,
                                  onDone: d,
                                  listener: t,
                                }).e),
                                  (u = a.eventTarget),
                                  (l = a.event),
                                  (f = a.isGlobalSubmit),
                                  (p = a.target),
                                  (y = a.type),
                                  (g = a.onDone),
                                  (m = a.listener),
                                  f ||
                                  "window" === u ||
                                  (s.target &&
                                    "function" == typeof s.target.matches &&
                                    "string" == typeof u &&
                                    s.target.matches(u))
                                    ? (f &&
                                        s instanceof window.Event &&
                                        s.target &&
                                        (c = s.target.querySelectorAll(
                                          'input[type="email"]'
                                        )),
                                      b(p, y, c).then(function (t) {
                                        "function" == typeof m &&
                                          window.removeEventListener(l, m),
                                          g(
                                            !(t.length < 1) && {
                                              value: t,
                                              type: y,
                                            }
                                          );
                                      }))
                                    : g(!1);
                              })
                            : d(!1);
                        }
                        0 === p.length
                          ? j()
                          : Promise.all(p).then(function (t) {
                              var e,
                                n = m(t);
                              try {
                                for (n.s(); !(e = n.n()).done; ) {
                                  var r = e.value;
                                  if (0 < r.value.length) return void d(r);
                                }
                              } catch (t) {
                                n.e(t);
                              } finally {
                                n.f();
                              }
                              j();
                            });
                      })(t, function (e) {
                        !1 !== e &&
                          Object(a.e)(
                            {
                              hashedRecords: [
                                { type: e.type, record: e.value },
                              ],
                            },
                            void 0,
                            void 0,
                            "api",
                            t.accountID
                          );
                      })
                    : Object(i.b)(
                        new Error("GDPR consent not present/valid"),
                        "retrieveRecords"
                      ),
                  0)
                ) ||
                  6400 < e ||
                  (setTimeout(n, e), (e = 0 === e ? 200 : 2 * e));
              })());
        } catch (t) {
          Object(i.b)(t, "retrieveRecords-retrieve");
        }
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return I;
    });
    e = n(19);
    var r = n(6),
      o = n(20),
      i = n(0),
      a = n(1),
      c = n(25);
    function s(t) {
      return (s =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function u(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, d(r.key), r);
      }
    }
    function l(t, e, n) {
      (e = d(e)) in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n);
    }
    function d(t) {
      return (
        (t = (function (t, e) {
          if ("object" !== s(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 === n) return String(t);
          if ("object" !== s((n = n.call(t, e)))) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        })(t, "string")),
        "symbol" === s(t) ? t : String(t)
      );
    }
    var f = (function () {
      function t() {
        var e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          n = this,
          r = t;
        if (!(n instanceof r))
          throw new TypeError("Cannot call a class as a function");
        l(this, "_propertyConfig", void 0),
          l(this, "_sizesDelegate", void 0),
          (this._propertyConfig = e),
          (this._sizesDelegate = new c.a(null == e ? void 0 : e.sizes, !1, !0));
      }
      var e, n;
      return (
        (e = t),
        (n = [
          {
            key: "sizes",
            get: function () {
              return this._sizesDelegate.sizes;
            },
          },
          {
            key: "validSizes",
            get: function () {
              return this._sizesDelegate.isValid();
            },
          },
          {
            key: "propertyConfig",
            get: function () {
              return this._propertyConfig;
            },
          },
          {
            key: "aaxPropertyConfig",
            get: function () {
              var t = {};
              return this.aaxSizes && (t.s = this.aaxSizes), t;
            },
          },
          {
            key: "aaxSizes",
            get: function () {
              return this._sizesDelegate.aaxSizes;
            },
          },
          {
            key: "isValid",
            value: function () {
              return !Object(i.j)(this.propertyConfig) ||
                Array.isArray(this.propertyConfig)
                ? (Object(a.b)(
                    {
                      name: "MultiFormatSlot-InvalidMultiFormatSlotProperty",
                      message: "multiFormatProperty must be an object",
                    },
                    "MultiFormatSlotProperty-isValid",
                    { makeVisibleToAllUsers: !0 }
                  ),
                  !1)
                : !!this.validSizes;
            },
          },
        ]) && u(e.prototype, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
    function b(t) {
      return (b =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function p(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, g(r.key), r);
      }
    }
    function y(t, e, n) {
      (e = g(e)) in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n);
    }
    function g(t) {
      return (
        (t = (function (t, e) {
          if ("object" !== b(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 === n) return String(t);
          if ("object" !== b((n = n.call(t, e)))) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        })(t, "string")),
        "symbol" === b(t) ? t : String(t)
      );
    }
    var m = (function () {
      function t(e) {
        var n = this;
        if (!(this instanceof t))
          throw new TypeError("Cannot call a class as a function");
        y(this, "_multiFormatProperties", void 0),
          e &&
            Object(i.j)(e) &&
            !Array.isArray(e) &&
            ((this._multiFormatProperties = {}),
            this.toMultiFormatMediaTypes(e).forEach(function (t) {
              n._multiFormatProperties &&
                (n._multiFormatProperties[t] = new f(e[t]));
            }));
      }
      var e, n;
      return (
        (e = t),
        (n = [
          {
            key: "convertMultiFormatMediaType",
            value: function (t) {
              var e;
              return (
                y((e = {}), r.a.VIDEO, o.a.VIDEO),
                y(e, r.a.DISPLAY, o.a.DISPLAY),
                e[t]
              );
            },
          },
          {
            key: "isMultiFormatMediaType",
            value: function (t) {
              return Boolean(this.convertMultiFormatMediaType(t));
            },
          },
          {
            key: "toMultiFormatMediaTypes",
            value: function (t) {
              var e = this;
              return Object.keys(t).filter(function (t) {
                return e.isMultiFormatMediaType(t);
              });
            },
          },
          {
            key: "multiFormatMediaTypes",
            get: function () {
              return this._multiFormatProperties
                ? this.toMultiFormatMediaTypes(this._multiFormatProperties)
                : [];
            },
          },
          {
            key: "aaxMultiFormatProperties",
            get: function () {
              var t,
                e = this;
              return this._multiFormatProperties
                ? ((t = {}),
                  this.multiFormatMediaTypes.forEach(function (n) {
                    var r = e.convertMultiFormatMediaType(n);
                    r &&
                      (t[r] =
                        null == (r = e._multiFormatProperties[n])
                          ? void 0
                          : r.aaxPropertyConfig);
                  }),
                  t)
                : {};
            },
          },
          {
            key: "isValid",
            value: function () {
              var t = this,
                e = !0;
              return this._multiFormatProperties
                ? (this.multiFormatMediaTypes.forEach(function (n) {
                    t._multiFormatProperties[n].isValid() || (e = !1);
                  }),
                  e)
                : (Object(a.b)(
                    {
                      name: "MultiFormatSlot-InvalidMultiFormatProperties",
                      message: "multiFormatProperties must be an object",
                    },
                    "MultiFormatProperties-isValid",
                    { makeVisibleToAllUsers: !0 }
                  ),
                  !1);
            },
          },
        ]) && p(e.prototype, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
    function h(t) {
      return (h =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function O(t, e) {
      var n,
        r = Object.keys(t);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(t)),
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
          r.push.apply(r, n)),
        r
      );
    }
    function v(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? O(Object(n), !0).forEach(function (e) {
              D(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : O(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function j(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, A(r.key), r);
      }
    }
    function S() {
      return (S =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get.bind()
          : function (t, e, n) {
              var r = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = _(t));

                );
                return t;
              })(t, e);
              if (r)
                return (r = Object.getOwnPropertyDescriptor(r, e)).get
                  ? r.get.call(arguments.length < 3 ? t : n)
                  : r.value;
            }).apply(this, arguments);
    }
    function w(t, e) {
      return (w = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function T(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function _(t) {
      return (_ = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function D(t, e, n) {
      (e = A(e)) in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n);
    }
    function A(t) {
      return (
        (t = (function (t, e) {
          if ("object" !== h(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 === n) return String(t);
          if ("object" !== h((n = n.call(t, e)))) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        })(t, "string")),
        "symbol" === h(t) ? t : String(t)
      );
    }
    var I = (function (t) {
      var e = i;
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && w(e, t);
      var n = (function (t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = _(t);
          (n = e
            ? ((n = _(this).constructor), Reflect.construct(r, arguments, n))
            : r.apply(this, arguments)),
            (r = this);
          if (n && ("object" === h(n) || "function" == typeof n)) return n;
          if (void 0 !== n)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return T(r);
        };
      })(i);
      function i(t) {
        var e;
        if (this instanceof i)
          return (
            D(
              T((e = n.call(this, t))),
              "_multiFormatPropertiesDelegate",
              void 0
            ),
            (e._multiFormatPropertiesDelegate = new m(t.multiFormatProperties)),
            e
          );
        throw new TypeError("Cannot call a class as a function");
      }
      return (
        (e = i),
        (t = [
          {
            key: "mediaType",
            get: function () {
              return r.a.MULTI_FORMAT;
            },
          },
          {
            key: "aaxMediaType",
            get: function () {
              return o.a.MULTI_FORMAT;
            },
          },
          {
            key: "aaxMultiFormatProperties",
            get: function () {
              return this._multiFormatPropertiesDelegate
                .aaxMultiFormatProperties;
            },
          },
          {
            key: "multiFormatPropertiesIsValid",
            get: function () {
              return this._multiFormatPropertiesDelegate.isValid();
            },
          },
          {
            key: "aaxSlot",
            get: function () {
              return v(
                v({}, S(_(i.prototype), "aaxSlot", this)),
                {},
                {
                  id: this.slotID,
                  sd: this.slotID,
                  sn: this.slotName || this.slotID,
                  mt: this.aaxMediaType,
                  mfp: this.aaxMultiFormatProperties,
                }
              );
            },
          },
          {
            key: "isValid",
            value: function () {
              return (
                S(_(i.prototype), "isValid", this).call(this) &&
                this.multiFormatPropertiesIsValid
              );
            },
          },
        ]) && j(e.prototype, t),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        i
      );
    })(e.a);
  },
  function (t, e, n) {
    t.exports = n(16);
  },
]);
