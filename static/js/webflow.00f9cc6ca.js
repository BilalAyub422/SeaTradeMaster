/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var a_ = Object.create;
  var ln = Object.defineProperty;
  var s_ = Object.getOwnPropertyDescriptor;
  var u_ = Object.getOwnPropertyNames;
  var c_ = Object.getPrototypeOf,
      l_ = Object.prototype.hasOwnProperty;
  var me = (e, t) => () => (e && (t = e(e = 0)), t);
  var l = (e, t) => () => (t || e((t = {
          exports: {}
      }).exports, t), t.exports),
      Ge = (e, t) => {
          for (var r in t) ln(e, r, {
              get: t[r],
              enumerable: !0
          })
      },
      Ds = (e, t, r, n) => {
          if (t && typeof t == "object" || typeof t == "function")
              for (let i of u_(t)) !l_.call(e, i) && i !== r && ln(e, i, {
                  get: () => t[i],
                  enumerable: !(n = s_(t, i)) || n.enumerable
              });
          return e
      };
  var de = (e, t, r) => (r = e != null ? a_(c_(e)) : {}, Ds(t || !e || !e.__esModule ? ln(r, "default", {
          value: e,
          enumerable: !0
      }) : r, e)),
      nt = e => Ds(ln({}, "__esModule", {
          value: !0
      }), e);
  var Mi = l(() => {
      "use strict";
      window.tram = function(e) {
          function t(d, w) {
              var S = new v.Bare;
              return S.init(d, w)
          }

          function r(d) {
              return d.replace(/[A-Z]/g, function(w) {
                  return "-" + w.toLowerCase()
              })
          }

          function n(d) {
              var w = parseInt(d.slice(1), 16),
                  S = w >> 16 & 255,
                  q = w >> 8 & 255,
                  O = 255 & w;
              return [S, q, O]
          }

          function i(d, w, S) {
              return "#" + (1 << 24 | d << 16 | w << 8 | S).toString(16).slice(1)
          }

          function o() {}

          function a(d, w) {
              p("Type warning: Expected: [" + d + "] Got: [" + typeof w + "] " + w)
          }

          function s(d, w, S) {
              p("Units do not match [" + d + "]: " + w + ", " + S)
          }

          function u(d, w, S) {
              if (w !== void 0 && (S = w), d === void 0) return S;
              var q = S;
              return Te.test(d) || !Ce.test(d) ? q = parseInt(d, 10) : Ce.test(d) && (q = 1e3 * parseFloat(d)), 0 > q && (q = 0), q === q ? q : S
          }

          function p(d) {
              ie.debug && window && window.console.warn(d)
          }

          function E(d) {
              for (var w = -1, S = d ? d.length : 0, q = []; ++w < S;) {
                  var O = d[w];
                  O && q.push(O)
              }
              return q
          }
          var f = function(d, w, S) {
                  function q(ae) {
                      return typeof ae == "object"
                  }

                  function O(ae) {
                      return typeof ae == "function"
                  }

                  function k() {}

                  function ne(ae, ge) {
                      function Z() {
                          var Pe = new ue;
                          return O(Pe.init) && Pe.init.apply(Pe, arguments), Pe
                      }

                      function ue() {}
                      ge === S && (ge = ae, ae = Object), Z.Bare = ue;
                      var ce, _e = k[d] = ae[d],
                          rt = ue[d] = Z[d] = new k;
                      return rt.constructor = Z, Z.mixin = function(Pe) {
                          return ue[d] = Z[d] = ne(Z, Pe)[d], Z
                      }, Z.open = function(Pe) {
                          if (ce = {}, O(Pe) ? ce = Pe.call(Z, rt, _e, Z, ae) : q(Pe) && (ce = Pe), q(ce))
                              for (var Ir in ce) w.call(ce, Ir) && (rt[Ir] = ce[Ir]);
                          return O(rt.init) || (rt.init = ae), Z
                      }, Z.open(ge)
                  }
                  return ne
              }("prototype", {}.hasOwnProperty),
              I = {
                  ease: ["ease", function(d, w, S, q) {
                      var O = (d /= q) * d,
                          k = O * d;
                      return w + S * (-2.75 * k * O + 11 * O * O + -15.5 * k + 8 * O + .25 * d)
                  }],
                  "ease-in": ["ease-in", function(d, w, S, q) {
                      var O = (d /= q) * d,
                          k = O * d;
                      return w + S * (-1 * k * O + 3 * O * O + -3 * k + 2 * O)
                  }],
                  "ease-out": ["ease-out", function(d, w, S, q) {
                      var O = (d /= q) * d,
                          k = O * d;
                      return w + S * (.3 * k * O + -1.6 * O * O + 2.2 * k + -1.8 * O + 1.9 * d)
                  }],
                  "ease-in-out": ["ease-in-out", function(d, w, S, q) {
                      var O = (d /= q) * d,
                          k = O * d;
                      return w + S * (2 * k * O + -5 * O * O + 2 * k + 2 * O)
                  }],
                  linear: ["linear", function(d, w, S, q) {
                      return S * d / q + w
                  }],
                  "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(d, w, S, q) {
                      return S * (d /= q) * d + w
                  }],
                  "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(d, w, S, q) {
                      return -S * (d /= q) * (d - 2) + w
                  }],
                  "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(d, w, S, q) {
                      return (d /= q / 2) < 1 ? S / 2 * d * d + w : -S / 2 * (--d * (d - 2) - 1) + w
                  }],
                  "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(d, w, S, q) {
                      return S * (d /= q) * d * d + w
                  }],
                  "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(d, w, S, q) {
                      return S * ((d = d / q - 1) * d * d + 1) + w
                  }],
                  "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(d, w, S, q) {
                      return (d /= q / 2) < 1 ? S / 2 * d * d * d + w : S / 2 * ((d -= 2) * d * d + 2) + w
                  }],
                  "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(d, w, S, q) {
                      return S * (d /= q) * d * d * d + w
                  }],
                  "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(d, w, S, q) {
                      return -S * ((d = d / q - 1) * d * d * d - 1) + w
                  }],
                  "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(d, w, S, q) {
                      return (d /= q / 2) < 1 ? S / 2 * d * d * d * d + w : -S / 2 * ((d -= 2) * d * d * d - 2) + w
                  }],
                  "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(d, w, S, q) {
                      return S * (d /= q) * d * d * d * d + w
                  }],
                  "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(d, w, S, q) {
                      return S * ((d = d / q - 1) * d * d * d * d + 1) + w
                  }],
                  "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(d, w, S, q) {
                      return (d /= q / 2) < 1 ? S / 2 * d * d * d * d * d + w : S / 2 * ((d -= 2) * d * d * d * d + 2) + w
                  }],
                  "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(d, w, S, q) {
                      return -S * Math.cos(d / q * (Math.PI / 2)) + S + w
                  }],
                  "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(d, w, S, q) {
                      return S * Math.sin(d / q * (Math.PI / 2)) + w
                  }],
                  "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(d, w, S, q) {
                      return -S / 2 * (Math.cos(Math.PI * d / q) - 1) + w
                  }],
                  "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(d, w, S, q) {
                      return d === 0 ? w : S * Math.pow(2, 10 * (d / q - 1)) + w
                  }],
                  "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(d, w, S, q) {
                      return d === q ? w + S : S * (-Math.pow(2, -10 * d / q) + 1) + w
                  }],
                  "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(d, w, S, q) {
                      return d === 0 ? w : d === q ? w + S : (d /= q / 2) < 1 ? S / 2 * Math.pow(2, 10 * (d - 1)) + w : S / 2 * (-Math.pow(2, -10 * --d) + 2) + w
                  }],
                  "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(d, w, S, q) {
                      return -S * (Math.sqrt(1 - (d /= q) * d) - 1) + w
                  }],
                  "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(d, w, S, q) {
                      return S * Math.sqrt(1 - (d = d / q - 1) * d) + w
                  }],
                  "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(d, w, S, q) {
                      return (d /= q / 2) < 1 ? -S / 2 * (Math.sqrt(1 - d * d) - 1) + w : S / 2 * (Math.sqrt(1 - (d -= 2) * d) + 1) + w
                  }],
                  "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(d, w, S, q, O) {
                      return O === void 0 && (O = 1.70158), S * (d /= q) * d * ((O + 1) * d - O) + w
                  }],
                  "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(d, w, S, q, O) {
                      return O === void 0 && (O = 1.70158), S * ((d = d / q - 1) * d * ((O + 1) * d + O) + 1) + w
                  }],
                  "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(d, w, S, q, O) {
                      return O === void 0 && (O = 1.70158), (d /= q / 2) < 1 ? S / 2 * d * d * (((O *= 1.525) + 1) * d - O) + w : S / 2 * ((d -= 2) * d * (((O *= 1.525) + 1) * d + O) + 2) + w
                  }]
              },
              m = {
                  "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                  "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                  "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
              },
              y = document,
              T = window,
              R = "bkwld-tram",
              A = /[\-\.0-9]/g,
              P = /[A-Z]/,
              N = "number",
              D = /^(rgb|#)/,
              G = /(em|cm|mm|in|pt|pc|px)$/,
              F = /(em|cm|mm|in|pt|pc|px|%)$/,
              K = /(deg|rad|turn)$/,
              z = "unitless",
              Q = /(all|none) 0s ease 0s/,
              te = /^(width|height)$/,
              j = " ",
              C = y.createElement("a"),
              _ = ["Webkit", "Moz", "O", "ms"],
              L = ["-webkit-", "-moz-", "-o-", "-ms-"],
              U = function(d) {
                  if (d in C.style) return {
                      dom: d,
                      css: d
                  };
                  var w, S, q = "",
                      O = d.split("-");
                  for (w = 0; w < O.length; w++) q += O[w].charAt(0).toUpperCase() + O[w].slice(1);
                  for (w = 0; w < _.length; w++)
                      if (S = _[w] + q, S in C.style) return {
                          dom: S,
                          css: L[w] + d
                      }
              },
              H = t.support = {
                  bind: Function.prototype.bind,
                  transform: U("transform"),
                  transition: U("transition"),
                  backface: U("backface-visibility"),
                  timing: U("transition-timing-function")
              };
          if (H.transition) {
              var ee = H.timing.dom;
              if (C.style[ee] = I["ease-in-back"][0], !C.style[ee])
                  for (var re in m) I[re][0] = m[re]
          }
          var W = t.frame = function() {
                  var d = T.requestAnimationFrame || T.webkitRequestAnimationFrame || T.mozRequestAnimationFrame || T.oRequestAnimationFrame || T.msRequestAnimationFrame;
                  return d && H.bind ? d.bind(T) : function(w) {
                      T.setTimeout(w, 16)
                  }
              }(),
              X = t.now = function() {
                  var d = T.performance,
                      w = d && (d.now || d.webkitNow || d.msNow || d.mozNow);
                  return w && H.bind ? w.bind(d) : Date.now || function() {
                      return +new Date
                  }
              }(),
              g = f(function(d) {
                  function w(oe, fe) {
                      var Ee = E(("" + oe).split(j)),
                          pe = Ee[0];
                      fe = fe || {};
                      var Me = Y[pe];
                      if (!Me) return p("Unsupported property: " + pe);
                      if (!fe.weak || !this.props[pe]) {
                          var je = Me[0],
                              ke = this.props[pe];
                          return ke || (ke = this.props[pe] = new je.Bare), ke.init(this.$el, Ee, Me, fe), ke
                      }
                  }

                  function S(oe, fe, Ee) {
                      if (oe) {
                          var pe = typeof oe;
                          if (fe || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), pe == "number" && fe) return this.timer = new $({
                              duration: oe,
                              context: this,
                              complete: k
                          }), void(this.active = !0);
                          if (pe == "string" && fe) {
                              switch (oe) {
                                  case "hide":
                                      Z.call(this);
                                      break;
                                  case "stop":
                                      ne.call(this);
                                      break;
                                  case "redraw":
                                      ue.call(this);
                                      break;
                                  default:
                                      w.call(this, oe, Ee && Ee[1])
                              }
                              return k.call(this)
                          }
                          if (pe == "function") return void oe.call(this, this);
                          if (pe == "object") {
                              var Me = 0;
                              rt.call(this, oe, function(Ie, o_) {
                                  Ie.span > Me && (Me = Ie.span), Ie.stop(), Ie.animate(o_)
                              }, function(Ie) {
                                  "wait" in Ie && (Me = u(Ie.wait, 0))
                              }), _e.call(this), Me > 0 && (this.timer = new $({
                                  duration: Me,
                                  context: this
                              }), this.active = !0, fe && (this.timer.complete = k));
                              var je = this,
                                  ke = !1,
                                  cn = {};
                              W(function() {
                                  rt.call(je, oe, function(Ie) {
                                      Ie.active && (ke = !0, cn[Ie.name] = Ie.nextStyle)
                                  }), ke && je.$el.css(cn)
                              })
                          }
                      }
                  }

                  function q(oe) {
                      oe = u(oe, 0), this.active ? this.queue.push({
                          options: oe
                      }) : (this.timer = new $({
                          duration: oe,
                          context: this,
                          complete: k
                      }), this.active = !0)
                  }

                  function O(oe) {
                      return this.active ? (this.queue.push({
                          options: oe,
                          args: arguments
                      }), void(this.timer.complete = k)) : p("No active transition timer. Use start() or wait() before then().")
                  }

                  function k() {
                      if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                          var oe = this.queue.shift();
                          S.call(this, oe.options, !0, oe.args)
                      }
                  }

                  function ne(oe) {
                      this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                      var fe;
                      typeof oe == "string" ? (fe = {}, fe[oe] = 1) : fe = typeof oe == "object" && oe != null ? oe : this.props, rt.call(this, fe, Pe), _e.call(this)
                  }

                  function ae(oe) {
                      ne.call(this, oe), rt.call(this, oe, Ir, n_)
                  }

                  function ge(oe) {
                      typeof oe != "string" && (oe = "block"), this.el.style.display = oe
                  }

                  function Z() {
                      ne.call(this), this.el.style.display = "none"
                  }

                  function ue() {
                      this.el.offsetHeight
                  }

                  function ce() {
                      ne.call(this), e.removeData(this.el, R), this.$el = this.el = null
                  }

                  function _e() {
                      var oe, fe, Ee = [];
                      this.upstream && Ee.push(this.upstream);
                      for (oe in this.props) fe = this.props[oe], fe.active && Ee.push(fe.string);
                      Ee = Ee.join(","), this.style !== Ee && (this.style = Ee, this.el.style[H.transition.dom] = Ee)
                  }

                  function rt(oe, fe, Ee) {
                      var pe, Me, je, ke, cn = fe !== Pe,
                          Ie = {};
                      for (pe in oe) je = oe[pe], pe in le ? (Ie.transform || (Ie.transform = {}), Ie.transform[pe] = je) : (P.test(pe) && (pe = r(pe)), pe in Y ? Ie[pe] = je : (ke || (ke = {}), ke[pe] = je));
                      for (pe in Ie) {
                          if (je = Ie[pe], Me = this.props[pe], !Me) {
                              if (!cn) continue;
                              Me = w.call(this, pe)
                          }
                          fe.call(this, Me, je)
                      }
                      Ee && ke && Ee.call(this, ke)
                  }

                  function Pe(oe) {
                      oe.stop()
                  }

                  function Ir(oe, fe) {
                      oe.set(fe)
                  }

                  function n_(oe) {
                      this.$el.css(oe)
                  }

                  function Be(oe, fe) {
                      d[oe] = function() {
                          return this.children ? i_.call(this, fe, arguments) : (this.el && fe.apply(this, arguments), this)
                      }
                  }

                  function i_(oe, fe) {
                      var Ee, pe = this.children.length;
                      for (Ee = 0; pe > Ee; Ee++) oe.apply(this.children[Ee], fe);
                      return this
                  }
                  d.init = function(oe) {
                      if (this.$el = e(oe), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, ie.keepInherited && !ie.fallback) {
                          var fe = B(this.el, "transition");
                          fe && !Q.test(fe) && (this.upstream = fe)
                      }
                      H.backface && ie.hideBackface && b(this.el, H.backface.css, "hidden")
                  }, Be("add", w), Be("start", S), Be("wait", q), Be("then", O), Be("next", k), Be("stop", ne), Be("set", ae), Be("show", ge), Be("hide", Z), Be("redraw", ue), Be("destroy", ce)
              }),
              v = f(g, function(d) {
                  function w(S, q) {
                      var O = e.data(S, R) || e.data(S, R, new g.Bare);
                      return O.el || O.init(S), q ? O.start(q) : O
                  }
                  d.init = function(S, q) {
                      var O = e(S);
                      if (!O.length) return this;
                      if (O.length === 1) return w(O[0], q);
                      var k = [];
                      return O.each(function(ne, ae) {
                          k.push(w(ae, q))
                      }), this.children = k, this
                  }
              }),
              h = f(function(d) {
                  function w() {
                      var k = this.get();
                      this.update("auto");
                      var ne = this.get();
                      return this.update(k), ne
                  }

                  function S(k, ne, ae) {
                      return ne !== void 0 && (ae = ne), k in I ? k : ae
                  }

                  function q(k) {
                      var ne = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(k);
                      return (ne ? i(ne[1], ne[2], ne[3]) : k).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                  }
                  var O = {
                      duration: 500,
                      ease: "ease",
                      delay: 0
                  };
                  d.init = function(k, ne, ae, ge) {
                      this.$el = k, this.el = k[0];
                      var Z = ne[0];
                      ae[2] && (Z = ae[2]), J[Z] && (Z = J[Z]), this.name = Z, this.type = ae[1], this.duration = u(ne[1], this.duration, O.duration), this.ease = S(ne[2], this.ease, O.ease), this.delay = u(ne[3], this.delay, O.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = te.test(this.name), this.unit = ge.unit || this.unit || ie.defaultUnit, this.angle = ge.angle || this.angle || ie.defaultAngle, ie.fallback || ge.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + j + this.duration + "ms" + (this.ease != "ease" ? j + I[this.ease][0] : "") + (this.delay ? j + this.delay + "ms" : ""))
                  }, d.set = function(k) {
                      k = this.convert(k, this.type), this.update(k), this.redraw()
                  }, d.transition = function(k) {
                      this.active = !0, k = this.convert(k, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), k == "auto" && (k = w.call(this))), this.nextStyle = k
                  }, d.fallback = function(k) {
                      var ne = this.el.style[this.name] || this.convert(this.get(), this.type);
                      k = this.convert(k, this.type), this.auto && (ne == "auto" && (ne = this.convert(this.get(), this.type)), k == "auto" && (k = w.call(this))), this.tween = new x({
                          from: ne,
                          to: k,
                          duration: this.duration,
                          delay: this.delay,
                          ease: this.ease,
                          update: this.update,
                          context: this
                      })
                  }, d.get = function() {
                      return B(this.el, this.name)
                  }, d.update = function(k) {
                      b(this.el, this.name, k)
                  }, d.stop = function() {
                      (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, b(this.el, this.name, this.get()));
                      var k = this.tween;
                      k && k.context && k.destroy()
                  }, d.convert = function(k, ne) {
                      if (k == "auto" && this.auto) return k;
                      var ae, ge = typeof k == "number",
                          Z = typeof k == "string";
                      switch (ne) {
                          case N:
                              if (ge) return k;
                              if (Z && k.replace(A, "") === "") return +k;
                              ae = "number(unitless)";
                              break;
                          case D:
                              if (Z) {
                                  if (k === "" && this.original) return this.original;
                                  if (ne.test(k)) return k.charAt(0) == "#" && k.length == 7 ? k : q(k)
                              }
                              ae = "hex or rgb string";
                              break;
                          case G:
                              if (ge) return k + this.unit;
                              if (Z && ne.test(k)) return k;
                              ae = "number(px) or string(unit)";
                              break;
                          case F:
                              if (ge) return k + this.unit;
                              if (Z && ne.test(k)) return k;
                              ae = "number(px) or string(unit or %)";
                              break;
                          case K:
                              if (ge) return k + this.angle;
                              if (Z && ne.test(k)) return k;
                              ae = "number(deg) or string(angle)";
                              break;
                          case z:
                              if (ge || Z && F.test(k)) return k;
                              ae = "number(unitless) or string(unit or %)"
                      }
                      return a(ae, k), k
                  }, d.redraw = function() {
                      this.el.offsetHeight
                  }
              }),
              c = f(h, function(d, w) {
                  d.init = function() {
                      w.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), D))
                  }
              }),
              M = f(h, function(d, w) {
                  d.init = function() {
                      w.init.apply(this, arguments), this.animate = this.fallback
                  }, d.get = function() {
                      return this.$el[this.name]()
                  }, d.update = function(S) {
                      this.$el[this.name](S)
                  }
              }),
              V = f(h, function(d, w) {
                  function S(q, O) {
                      var k, ne, ae, ge, Z;
                      for (k in q) ge = le[k], ae = ge[0], ne = ge[1] || k, Z = this.convert(q[k], ae), O.call(this, ne, Z, ae)
                  }
                  d.init = function() {
                      w.init.apply(this, arguments), this.current || (this.current = {}, le.perspective && ie.perspective && (this.current.perspective = ie.perspective, b(this.el, this.name, this.style(this.current)), this.redraw()))
                  }, d.set = function(q) {
                      S.call(this, q, function(O, k) {
                          this.current[O] = k
                      }), b(this.el, this.name, this.style(this.current)), this.redraw()
                  }, d.transition = function(q) {
                      var O = this.values(q);
                      this.tween = new se({
                          current: this.current,
                          values: O,
                          duration: this.duration,
                          delay: this.delay,
                          ease: this.ease
                      });
                      var k, ne = {};
                      for (k in this.current) ne[k] = k in O ? O[k] : this.current[k];
                      this.active = !0, this.nextStyle = this.style(ne)
                  }, d.fallback = function(q) {
                      var O = this.values(q);
                      this.tween = new se({
                          current: this.current,
                          values: O,
                          duration: this.duration,
                          delay: this.delay,
                          ease: this.ease,
                          update: this.update,
                          context: this
                      })
                  }, d.update = function() {
                      b(this.el, this.name, this.style(this.current))
                  }, d.style = function(q) {
                      var O, k = "";
                      for (O in q) k += O + "(" + q[O] + ") ";
                      return k
                  }, d.values = function(q) {
                      var O, k = {};
                      return S.call(this, q, function(ne, ae, ge) {
                          k[ne] = ae, this.current[ne] === void 0 && (O = 0, ~ne.indexOf("scale") && (O = 1), this.current[ne] = this.convert(O, ge))
                      }), k
                  }
              }),
              x = f(function(d) {
                  function w(Z) {
                      ae.push(Z) === 1 && W(S)
                  }

                  function S() {
                      var Z, ue, ce, _e = ae.length;
                      if (_e)
                          for (W(S), ue = X(), Z = _e; Z--;) ce = ae[Z], ce && ce.render(ue)
                  }

                  function q(Z) {
                      var ue, ce = e.inArray(Z, ae);
                      ce >= 0 && (ue = ae.slice(ce + 1), ae.length = ce, ue.length && (ae = ae.concat(ue)))
                  }

                  function O(Z) {
                      return Math.round(Z * ge) / ge
                  }

                  function k(Z, ue, ce) {
                      return i(Z[0] + ce * (ue[0] - Z[0]), Z[1] + ce * (ue[1] - Z[1]), Z[2] + ce * (ue[2] - Z[2]))
                  }
                  var ne = {
                      ease: I.ease[1],
                      from: 0,
                      to: 1
                  };
                  d.init = function(Z) {
                      this.duration = Z.duration || 0, this.delay = Z.delay || 0;
                      var ue = Z.ease || ne.ease;
                      I[ue] && (ue = I[ue][1]), typeof ue != "function" && (ue = ne.ease), this.ease = ue, this.update = Z.update || o, this.complete = Z.complete || o, this.context = Z.context || this, this.name = Z.name;
                      var ce = Z.from,
                          _e = Z.to;
                      ce === void 0 && (ce = ne.from), _e === void 0 && (_e = ne.to), this.unit = Z.unit || "", typeof ce == "number" && typeof _e == "number" ? (this.begin = ce, this.change = _e - ce) : this.format(_e, ce), this.value = this.begin + this.unit, this.start = X(), Z.autoplay !== !1 && this.play()
                  }, d.play = function() {
                      this.active || (this.start || (this.start = X()), this.active = !0, w(this))
                  }, d.stop = function() {
                      this.active && (this.active = !1, q(this))
                  }, d.render = function(Z) {
                      var ue, ce = Z - this.start;
                      if (this.delay) {
                          if (ce <= this.delay) return;
                          ce -= this.delay
                      }
                      if (ce < this.duration) {
                          var _e = this.ease(ce, 0, 1, this.duration);
                          return ue = this.startRGB ? k(this.startRGB, this.endRGB, _e) : O(this.begin + _e * this.change), this.value = ue + this.unit, void this.update.call(this.context, this.value)
                      }
                      ue = this.endHex || this.begin + this.change, this.value = ue + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                  }, d.format = function(Z, ue) {
                      if (ue += "", Z += "", Z.charAt(0) == "#") return this.startRGB = n(ue), this.endRGB = n(Z), this.endHex = Z, this.begin = 0, void(this.change = 1);
                      if (!this.unit) {
                          var ce = ue.replace(A, ""),
                              _e = Z.replace(A, "");
                          ce !== _e && s("tween", ue, Z), this.unit = ce
                      }
                      ue = parseFloat(ue), Z = parseFloat(Z), this.begin = this.value = ue, this.change = Z - ue
                  }, d.destroy = function() {
                      this.stop(), this.context = null, this.ease = this.update = this.complete = o
                  };
                  var ae = [],
                      ge = 1e3
              }),
              $ = f(x, function(d) {
                  d.init = function(w) {
                      this.duration = w.duration || 0, this.complete = w.complete || o, this.context = w.context, this.play()
                  }, d.render = function(w) {
                      var S = w - this.start;
                      S < this.duration || (this.complete.call(this.context), this.destroy())
                  }
              }),
              se = f(x, function(d, w) {
                  d.init = function(S) {
                      this.context = S.context, this.update = S.update, this.tweens = [], this.current = S.current;
                      var q, O;
                      for (q in S.values) O = S.values[q], this.current[q] !== O && this.tweens.push(new x({
                          name: q,
                          from: this.current[q],
                          to: O,
                          duration: S.duration,
                          delay: S.delay,
                          ease: S.ease,
                          autoplay: !1
                      }));
                      this.play()
                  }, d.render = function(S) {
                      var q, O, k = this.tweens.length,
                          ne = !1;
                      for (q = k; q--;) O = this.tweens[q], O.context && (O.render(S), this.current[O.name] = O.value, ne = !0);
                      return ne ? void(this.update && this.update.call(this.context)) : this.destroy()
                  }, d.destroy = function() {
                      if (w.destroy.call(this), this.tweens) {
                          var S, q = this.tweens.length;
                          for (S = q; S--;) this.tweens[S].destroy();
                          this.tweens = null, this.current = null
                      }
                  }
              }),
              ie = t.config = {
                  debug: !1,
                  defaultUnit: "px",
                  defaultAngle: "deg",
                  keepInherited: !1,
                  hideBackface: !1,
                  perspective: "",
                  fallback: !H.transition,
                  agentTests: []
              };
          t.fallback = function(d) {
              if (!H.transition) return ie.fallback = !0;
              ie.agentTests.push("(" + d + ")");
              var w = new RegExp(ie.agentTests.join("|"), "i");
              ie.fallback = w.test(navigator.userAgent)
          }, t.fallback("6.0.[2-5] Safari"), t.tween = function(d) {
              return new x(d)
          }, t.delay = function(d, w, S) {
              return new $({
                  complete: w,
                  duration: d,
                  context: S
              })
          }, e.fn.tram = function(d) {
              return t.call(null, this, d)
          };
          var b = e.style,
              B = e.css,
              J = {
                  transform: H.transform && H.transform.css
              },
              Y = {
                  color: [c, D],
                  background: [c, D, "background-color"],
                  "outline-color": [c, D],
                  "border-color": [c, D],
                  "border-top-color": [c, D],
                  "border-right-color": [c, D],
                  "border-bottom-color": [c, D],
                  "border-left-color": [c, D],
                  "border-width": [h, G],
                  "border-top-width": [h, G],
                  "border-right-width": [h, G],
                  "border-bottom-width": [h, G],
                  "border-left-width": [h, G],
                  "border-spacing": [h, G],
                  "letter-spacing": [h, G],
                  margin: [h, G],
                  "margin-top": [h, G],
                  "margin-right": [h, G],
                  "margin-bottom": [h, G],
                  "margin-left": [h, G],
                  padding: [h, G],
                  "padding-top": [h, G],
                  "padding-right": [h, G],
                  "padding-bottom": [h, G],
                  "padding-left": [h, G],
                  "outline-width": [h, G],
                  opacity: [h, N],
                  top: [h, F],
                  right: [h, F],
                  bottom: [h, F],
                  left: [h, F],
                  "font-size": [h, F],
                  "text-indent": [h, F],
                  "word-spacing": [h, F],
                  width: [h, F],
                  "min-width": [h, F],
                  "max-width": [h, F],
                  height: [h, F],
                  "min-height": [h, F],
                  "max-height": [h, F],
                  "line-height": [h, z],
                  "scroll-top": [M, N, "scrollTop"],
                  "scroll-left": [M, N, "scrollLeft"]
              },
              le = {};
          H.transform && (Y.transform = [V], le = {
              x: [F, "translateX"],
              y: [F, "translateY"],
              rotate: [K],
              rotateX: [K],
              rotateY: [K],
              scale: [N],
              scaleX: [N],
              scaleY: [N],
              skew: [K],
              skewX: [K],
              skewY: [K]
          }), H.transform && H.backface && (le.z = [F, "translateZ"], le.rotateZ = [K], le.scaleZ = [N], le.perspective = [G]);
          var Te = /ms/,
              Ce = /s|\./;
          return e.tram = t
      }(window.jQuery)
  });
  var ks = l((iW, Fs) => {
      "use strict";
      var f_ = window.$,
          d_ = Mi() && f_.tram;
      Fs.exports = function() {
          var e = {};
          e.VERSION = "1.6.0-Webflow";
          var t = {},
              r = Array.prototype,
              n = Object.prototype,
              i = Function.prototype,
              o = r.push,
              a = r.slice,
              s = r.concat,
              u = n.toString,
              p = n.hasOwnProperty,
              E = r.forEach,
              f = r.map,
              I = r.reduce,
              m = r.reduceRight,
              y = r.filter,
              T = r.every,
              R = r.some,
              A = r.indexOf,
              P = r.lastIndexOf,
              N = Array.isArray,
              D = Object.keys,
              G = i.bind,
              F = e.each = e.forEach = function(_, L, U) {
                  if (_ == null) return _;
                  if (E && _.forEach === E) _.forEach(L, U);
                  else if (_.length === +_.length) {
                      for (var H = 0, ee = _.length; H < ee; H++)
                          if (L.call(U, _[H], H, _) === t) return
                  } else
                      for (var re = e.keys(_), H = 0, ee = re.length; H < ee; H++)
                          if (L.call(U, _[re[H]], re[H], _) === t) return;
                  return _
              };
          e.map = e.collect = function(_, L, U) {
              var H = [];
              return _ == null ? H : f && _.map === f ? _.map(L, U) : (F(_, function(ee, re, W) {
                  H.push(L.call(U, ee, re, W))
              }), H)
          }, e.find = e.detect = function(_, L, U) {
              var H;
              return K(_, function(ee, re, W) {
                  if (L.call(U, ee, re, W)) return H = ee, !0
              }), H
          }, e.filter = e.select = function(_, L, U) {
              var H = [];
              return _ == null ? H : y && _.filter === y ? _.filter(L, U) : (F(_, function(ee, re, W) {
                  L.call(U, ee, re, W) && H.push(ee)
              }), H)
          };
          var K = e.some = e.any = function(_, L, U) {
              L || (L = e.identity);
              var H = !1;
              return _ == null ? H : R && _.some === R ? _.some(L, U) : (F(_, function(ee, re, W) {
                  if (H || (H = L.call(U, ee, re, W))) return t
              }), !!H)
          };
          e.contains = e.include = function(_, L) {
              return _ == null ? !1 : A && _.indexOf === A ? _.indexOf(L) != -1 : K(_, function(U) {
                  return U === L
              })
          }, e.delay = function(_, L) {
              var U = a.call(arguments, 2);
              return setTimeout(function() {
                  return _.apply(null, U)
              }, L)
          }, e.defer = function(_) {
              return e.delay.apply(e, [_, 1].concat(a.call(arguments, 1)))
          }, e.throttle = function(_) {
              var L, U, H;
              return function() {
                  L || (L = !0, U = arguments, H = this, d_.frame(function() {
                      L = !1, _.apply(H, U)
                  }))
              }
          }, e.debounce = function(_, L, U) {
              var H, ee, re, W, X, g = function() {
                  var v = e.now() - W;
                  v < L ? H = setTimeout(g, L - v) : (H = null, U || (X = _.apply(re, ee), re = ee = null))
              };
              return function() {
                  re = this, ee = arguments, W = e.now();
                  var v = U && !H;
                  return H || (H = setTimeout(g, L)), v && (X = _.apply(re, ee), re = ee = null), X
              }
          }, e.defaults = function(_) {
              if (!e.isObject(_)) return _;
              for (var L = 1, U = arguments.length; L < U; L++) {
                  var H = arguments[L];
                  for (var ee in H) _[ee] === void 0 && (_[ee] = H[ee])
              }
              return _
          }, e.keys = function(_) {
              if (!e.isObject(_)) return [];
              if (D) return D(_);
              var L = [];
              for (var U in _) e.has(_, U) && L.push(U);
              return L
          }, e.has = function(_, L) {
              return p.call(_, L)
          }, e.isObject = function(_) {
              return _ === Object(_)
          }, e.now = Date.now || function() {
              return new Date().getTime()
          }, e.templateSettings = {
              evaluate: /<%([\s\S]+?)%>/g,
              interpolate: /<%=([\s\S]+?)%>/g,
              escape: /<%-([\s\S]+?)%>/g
          };
          var z = /(.)^/,
              Q = {
                  "'": "'",
                  "\\": "\\",
                  "\r": "r",
                  "\n": "n",
                  "\u2028": "u2028",
                  "\u2029": "u2029"
              },
              te = /\\|'|\r|\n|\u2028|\u2029/g,
              j = function(_) {
                  return "\\" + Q[_]
              },
              C = /^\s*(\w|\$)+\s*$/;
          return e.template = function(_, L, U) {
              !L && U && (L = U), L = e.defaults({}, L, e.templateSettings);
              var H = RegExp([(L.escape || z).source, (L.interpolate || z).source, (L.evaluate || z).source].join("|") + "|$", "g"),
                  ee = 0,
                  re = "__p+='";
              _.replace(H, function(v, h, c, M, V) {
                  return re += _.slice(ee, V).replace(te, j), ee = V + v.length, h ? re += `'+
((__t=(` + h + `))==null?'':_.escape(__t))+
'` : c ? re += `'+
((__t=(` + c + `))==null?'':__t)+
'` : M && (re += `';
` + M + `
__p+='`), v
              }), re += `';
`;
              var W = L.variable;
              if (W) {
                  if (!C.test(W)) throw new Error("variable is not a bare identifier: " + W)
              } else re = `with(obj||{}){
` + re + `}
`, W = "obj";
              re = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + re + `return __p;
`;
              var X;
              try {
                  X = new Function(L.variable || "obj", "_", re)
              } catch (v) {
                  throw v.source = re, v
              }
              var g = function(v) {
                  return X.call(this, v, e)
              };
              return g.source = "function(" + W + `){
` + re + "}", g
          }, e
      }()
  });
  var Le = l((oW, js) => {
      "use strict";
      var ve = {},
          Ht = {},
          Xt = [],
          Di = window.Webflow || [],
          bt = window.jQuery,
          Ke = bt(window),
          p_ = bt(document),
          it = bt.isFunction,
          ze = ve._ = ks(),
          Us = ve.tram = Mi() && bt.tram,
          dn = !1,
          Fi = !1;
      Us.config.hideBackface = !1;
      Us.config.keepInherited = !0;
      ve.define = function(e, t, r) {
          Ht[e] && Ws(Ht[e]);
          var n = Ht[e] = t(bt, ze, r) || {};
          return Vs(n), n
      };
      ve.require = function(e) {
          return Ht[e]
      };

      function Vs(e) {
          ve.env() && (it(e.design) && Ke.on("__wf_design", e.design), it(e.preview) && Ke.on("__wf_preview", e.preview)), it(e.destroy) && Ke.on("__wf_destroy", e.destroy), e.ready && it(e.ready) && v_(e)
      }

      function v_(e) {
          if (dn) {
              e.ready();
              return
          }
          ze.contains(Xt, e.ready) || Xt.push(e.ready)
      }

      function Ws(e) {
          it(e.design) && Ke.off("__wf_design", e.design), it(e.preview) && Ke.off("__wf_preview", e.preview), it(e.destroy) && Ke.off("__wf_destroy", e.destroy), e.ready && it(e.ready) && g_(e)
      }

      function g_(e) {
          Xt = ze.filter(Xt, function(t) {
              return t !== e.ready
          })
      }
      ve.push = function(e) {
          if (dn) {
              it(e) && e();
              return
          }
          Di.push(e)
      };
      ve.env = function(e) {
          var t = window.__wf_design,
              r = typeof t < "u";
          if (!e) return r;
          if (e === "design") return r && t;
          if (e === "preview") return r && !t;
          if (e === "slug") return r && window.__wf_slug;
          if (e === "editor") return window.WebflowEditor;
          if (e === "test") return window.__wf_test;
          if (e === "frame") return window !== window.top
      };
      var fn = navigator.userAgent.toLowerCase(),
          Hs = ve.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
          h_ = ve.env.chrome = /chrome/.test(fn) && /Google/.test(navigator.vendor) && parseInt(fn.match(/chrome\/(\d+)\./)[1], 10),
          m_ = ve.env.ios = /(ipod|iphone|ipad)/.test(fn);
      ve.env.safari = /safari/.test(fn) && !h_ && !m_;
      var qi;
      Hs && p_.on("touchstart mousedown", function(e) {
          qi = e.target
      });
      ve.validClick = Hs ? function(e) {
          return e === qi || bt.contains(e, qi)
      } : function() {
          return !0
      };
      var Xs = "resize.webflow orientationchange.webflow load.webflow",
          y_ = "scroll.webflow " + Xs;
      ve.resize = ki(Ke, Xs);
      ve.scroll = ki(Ke, y_);
      ve.redraw = ki();

      function ki(e, t) {
          var r = [],
              n = {};
          return n.up = ze.throttle(function(i) {
              ze.each(r, function(o) {
                  o(i)
              })
          }), e && t && e.on(t, n.up), n.on = function(i) {
              typeof i == "function" && (ze.contains(r, i) || r.push(i))
          }, n.off = function(i) {
              if (!arguments.length) {
                  r = [];
                  return
              }
              r = ze.filter(r, function(o) {
                  return o !== i
              })
          }, n
      }
      ve.location = function(e) {
          window.location = e
      };
      ve.env() && (ve.location = function() {});
      ve.ready = function() {
          dn = !0, Fi ? E_() : ze.each(Xt, Gs), ze.each(Di, Gs), ve.resize.up()
      };

      function Gs(e) {
          it(e) && e()
      }

      function E_() {
          Fi = !1, ze.each(Ht, Vs)
      }
      var Lt;
      ve.load = function(e) {
          Lt.then(e)
      };

      function Bs() {
          Lt && (Lt.reject(), Ke.off("load", Lt.resolve)), Lt = new bt.Deferred, Ke.on("load", Lt.resolve)
      }
      ve.destroy = function(e) {
          e = e || {}, Fi = !0, Ke.triggerHandler("__wf_destroy"), e.domready != null && (dn = e.domready), ze.each(Ht, Ws), ve.resize.off(), ve.scroll.off(), ve.redraw.off(), Xt = [], Di = [], Lt.state() === "pending" && Bs()
      };
      bt(ve.ready);
      Bs();
      js.exports = window.Webflow = ve
  });
  var Ys = l((aW, Ks) => {
      "use strict";
      var zs = Le();
      zs.define("brand", Ks.exports = function(e) {
          var t = {},
              r = document,
              n = e("html"),
              i = e("body"),
              o = ".w-webflow-badge",
              a = window.location,
              s = /PhantomJS/i.test(navigator.userAgent),
              u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
              p;
          t.ready = function() {
              var m = n.attr("data-wf-status"),
                  y = n.attr("data-wf-domain") || "";
              /\.webflow\.io$/i.test(y) && a.hostname !== y && (m = !0), m && !s && (p = p || f(), I(), setTimeout(I, 500), e(r).off(u, E).on(u, E))
          };

          function E() {
              var m = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
              e(p).attr("style", m ? "display: none !important;" : "")
          }

          // function f() {
          //     var m = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
          //         y = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
          //             marginRight: "4px",
          //             width: "26px"
          //         }),
          //         T = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "");
          //     return m.append(y, T), m[0]
          // }

          function I() {
              var m = i.children(o),
                  y = m.length && m.get(0) === p,
                  T = zs.env("editor");
              if (y) {
                  T && m.remove();
                  return
              }
              m.length && m.remove(), T || i.append(p)
          }
          return t
      })
  });
  var $s = l((sW, Qs) => {
      "use strict";
      var Gi = Le();
      Gi.define("edit", Qs.exports = function(e, t, r) {
          if (r = r || {}, (Gi.env("test") || Gi.env("frame")) && !r.fixture && !b_()) return {
              exit: 1
          };
          var n = {},
              i = e(window),
              o = e(document.documentElement),
              a = document.location,
              s = "hashchange",
              u, p = r.load || I,
              E = !1;
          try {
              E = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
          } catch {}
          E ? p() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && p() : i.on(s, f).triggerHandler(s);

          function f() {
              u || /\?edit/.test(a.hash) && p()
          }

          function I() {
              u = !0, window.WebflowEditor = !0, i.off(s, f), P(function(D) {
                  e.ajax({
                      url: A("https://editor-api.webflow.com/api/editor/view"),
                      data: {
                          siteId: o.attr("data-wf-site")
                      },
                      xhrFields: {
                          withCredentials: !0
                      },
                      dataType: "json",
                      crossDomain: !0,
                      success: m(D)
                  })
              })
          }

          function m(D) {
              return function(G) {
                  if (!G) {
                      console.error("Could not load editor data");
                      return
                  }
                  G.thirdPartyCookiesSupported = D, y(R(G.bugReporterScriptPath), function() {
                      y(R(G.scriptPath), function() {
                          window.WebflowEditor(G)
                      })
                  })
              }
          }

          function y(D, G) {
              e.ajax({
                  type: "GET",
                  url: D,
                  dataType: "script",
                  cache: !0
              }).then(G, T)
          }

          function T(D, G, F) {
              throw console.error("Could not load editor script: " + G), F
          }

          function R(D) {
              return D.indexOf("//") >= 0 ? D : A("https://editor-api.webflow.com" + D)
          }

          function A(D) {
              return D.replace(/([^:])\/\//g, "$1/")
          }

          function P(D) {
              var G = window.document.createElement("iframe");
              G.src = "https://webflow.com/site/third-party-cookie-check.html", G.style.display = "none", G.sandbox = "allow-scripts allow-same-origin";
              var F = function(K) {
                  K.data === "WF_third_party_cookies_unsupported" ? (N(G, F), D(!1)) : K.data === "WF_third_party_cookies_supported" && (N(G, F), D(!0))
              };
              G.onerror = function() {
                  N(G, F), D(!1)
              }, window.addEventListener("message", F, !1), window.document.body.appendChild(G)
          }

          function N(D, G) {
              window.removeEventListener("message", G, !1), D.remove()
          }
          return n
      });

      function b_() {
          try {
              return window.top.__Cypress__
          } catch {
              return !1
          }
      }
  });
  var Js = l((uW, Zs) => {
      "use strict";
      var __ = Le();
      __.define("focus-visible", Zs.exports = function() {
          function e(r) {
              var n = !0,
                  i = !1,
                  o = null,
                  a = {
                      text: !0,
                      search: !0,
                      url: !0,
                      tel: !0,
                      email: !0,
                      password: !0,
                      number: !0,
                      date: !0,
                      month: !0,
                      week: !0,
                      time: !0,
                      datetime: !0,
                      "datetime-local": !0
                  };

              function s(N) {
                  return !!(N && N !== document && N.nodeName !== "HTML" && N.nodeName !== "BODY" && "classList" in N && "contains" in N.classList)
              }

              function u(N) {
                  var D = N.type,
                      G = N.tagName;
                  return !!(G === "INPUT" && a[D] && !N.readOnly || G === "TEXTAREA" && !N.readOnly || N.isContentEditable)
              }

              function p(N) {
                  N.getAttribute("data-wf-focus-visible") || N.setAttribute("data-wf-focus-visible", "true")
              }

              function E(N) {
                  N.getAttribute("data-wf-focus-visible") && N.removeAttribute("data-wf-focus-visible")
              }

              function f(N) {
                  N.metaKey || N.altKey || N.ctrlKey || (s(r.activeElement) && p(r.activeElement), n = !0)
              }

              function I() {
                  n = !1
              }

              function m(N) {
                  s(N.target) && (n || u(N.target)) && p(N.target)
              }

              function y(N) {
                  s(N.target) && N.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
                      i = !1
                  }, 100), E(N.target))
              }

              function T() {
                  document.visibilityState === "hidden" && (i && (n = !0), R())
              }

              function R() {
                  document.addEventListener("mousemove", P), document.addEventListener("mousedown", P), document.addEventListener("mouseup", P), document.addEventListener("pointermove", P), document.addEventListener("pointerdown", P), document.addEventListener("pointerup", P), document.addEventListener("touchmove", P), document.addEventListener("touchstart", P), document.addEventListener("touchend", P)
              }

              function A() {
                  document.removeEventListener("mousemove", P), document.removeEventListener("mousedown", P), document.removeEventListener("mouseup", P), document.removeEventListener("pointermove", P), document.removeEventListener("pointerdown", P), document.removeEventListener("pointerup", P), document.removeEventListener("touchmove", P), document.removeEventListener("touchstart", P), document.removeEventListener("touchend", P)
              }

              function P(N) {
                  N.target.nodeName && N.target.nodeName.toLowerCase() === "html" || (n = !1, A())
              }
              document.addEventListener("keydown", f, !0), document.addEventListener("mousedown", I, !0), document.addEventListener("pointerdown", I, !0), document.addEventListener("touchstart", I, !0), document.addEventListener("visibilitychange", T, !0), R(), r.addEventListener("focus", m, !0), r.addEventListener("blur", y, !0)
          }

          function t() {
              if (typeof document < "u") try {
                  document.querySelector(":focus-visible")
              } catch {
                  e(document)
              }
          }
          return {
              ready: t
          }
      })
  });
  var ru = l((cW, tu) => {
      "use strict";
      var eu = Le();
      eu.define("focus", tu.exports = function() {
          var e = [],
              t = !1;

          function r(a) {
              t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
          }

          function n(a) {
              var s = a.target,
                  u = s.tagName;
              return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
          }

          function i(a) {
              n(a) && (t = !0, setTimeout(() => {
                  for (t = !1, a.target.focus(); e.length > 0;) {
                      var s = e.pop();
                      s.target.dispatchEvent(new MouseEvent(s.type, s))
                  }
              }, 0))
          }

          function o() {
              typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && eu.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
          }
          return {
              ready: o
          }
      })
  });
  var ou = l((lW, iu) => {
      "use strict";
      var Ui = window.jQuery,
          ot = {},
          pn = [],
          nu = ".w-ix",
          vn = {
              reset: function(e, t) {
                  t.__wf_intro = null
              },
              intro: function(e, t) {
                  t.__wf_intro || (t.__wf_intro = !0, Ui(t).triggerHandler(ot.types.INTRO))
              },
              outro: function(e, t) {
                  t.__wf_intro && (t.__wf_intro = null, Ui(t).triggerHandler(ot.types.OUTRO))
              }
          };
      ot.triggers = {};
      ot.types = {
          INTRO: "w-ix-intro" + nu,
          OUTRO: "w-ix-outro" + nu
      };
      ot.init = function() {
          for (var e = pn.length, t = 0; t < e; t++) {
              var r = pn[t];
              r[0](0, r[1])
          }
          pn = [], Ui.extend(ot.triggers, vn)
      };
      ot.async = function() {
          for (var e in vn) {
              var t = vn[e];
              vn.hasOwnProperty(e) && (ot.triggers[e] = function(r, n) {
                  pn.push([t, n])
              })
          }
      };
      ot.async();
      iu.exports = ot
  });
  var Bt = l((fW, uu) => {
      "use strict";
      var Vi = ou();

      function au(e, t) {
          var r = document.createEvent("CustomEvent");
          r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
      }
      var I_ = window.jQuery,
          gn = {},
          su = ".w-ix",
          T_ = {
              reset: function(e, t) {
                  Vi.triggers.reset(e, t)
              },
              intro: function(e, t) {
                  Vi.triggers.intro(e, t), au(t, "COMPONENT_ACTIVE")
              },
              outro: function(e, t) {
                  Vi.triggers.outro(e, t), au(t, "COMPONENT_INACTIVE")
              }
          };
      gn.triggers = {};
      gn.types = {
          INTRO: "w-ix-intro" + su,
          OUTRO: "w-ix-outro" + su
      };
      I_.extend(gn.triggers, T_);
      uu.exports = gn
  });
  var cu = l((dW, pt) => {
      function Wi(e) {
          return pt.exports = Wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
              return typeof t
          } : function(t) {
              return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, pt.exports.__esModule = !0, pt.exports.default = pt.exports, Wi(e)
      }
      pt.exports = Wi, pt.exports.__esModule = !0, pt.exports.default = pt.exports
  });
  var hn = l((pW, Tr) => {
      var w_ = cu().default;

      function lu(e) {
          if (typeof WeakMap != "function") return null;
          var t = new WeakMap,
              r = new WeakMap;
          return (lu = function(i) {
              return i ? r : t
          })(e)
      }

      function x_(e, t) {
          if (!t && e && e.__esModule) return e;
          if (e === null || w_(e) !== "object" && typeof e != "function") return {
              default: e
          };
          var r = lu(t);
          if (r && r.has(e)) return r.get(e);
          var n = {},
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
              if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                  var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                  a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
              } return n.default = e, r && r.set(e, n), n
      }
      Tr.exports = x_, Tr.exports.__esModule = !0, Tr.exports.default = Tr.exports
  });
  var fu = l((vW, wr) => {
      function O_(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      wr.exports = O_, wr.exports.__esModule = !0, wr.exports.default = wr.exports
  });
  var ye = l((gW, du) => {
      var mn = function(e) {
          return e && e.Math == Math && e
      };
      du.exports = mn(typeof globalThis == "object" && globalThis) || mn(typeof window == "object" && window) || mn(typeof self == "object" && self) || mn(typeof global == "object" && global) || function() {
          return this
      }() || Function("return this")()
  });
  var jt = l((hW, pu) => {
      pu.exports = function(e) {
          try {
              return !!e()
          } catch {
              return !0
          }
      }
  });
  var Nt = l((mW, vu) => {
      var A_ = jt();
      vu.exports = !A_(function() {
          return Object.defineProperty({}, 1, {
              get: function() {
                  return 7
              }
          })[1] != 7
      })
  });
  var yn = l((yW, gu) => {
      var xr = Function.prototype.call;
      gu.exports = xr.bind ? xr.bind(xr) : function() {
          return xr.apply(xr, arguments)
      }
  });
  var Eu = l(yu => {
      "use strict";
      var hu = {}.propertyIsEnumerable,
          mu = Object.getOwnPropertyDescriptor,
          S_ = mu && !hu.call({
              1: 2
          }, 1);
      yu.f = S_ ? function(t) {
          var r = mu(this, t);
          return !!r && r.enumerable
      } : hu
  });
  var Hi = l((bW, bu) => {
      bu.exports = function(e, t) {
          return {
              enumerable: !(e & 1),
              configurable: !(e & 2),
              writable: !(e & 4),
              value: t
          }
      }
  });
  var Ye = l((_W, Iu) => {
      var _u = Function.prototype,
          Xi = _u.bind,
          Bi = _u.call,
          R_ = Xi && Xi.bind(Bi);
      Iu.exports = Xi ? function(e) {
          return e && R_(Bi, e)
      } : function(e) {
          return e && function() {
              return Bi.apply(e, arguments)
          }
      }
  });
  var xu = l((IW, wu) => {
      var Tu = Ye(),
          C_ = Tu({}.toString),
          L_ = Tu("".slice);
      wu.exports = function(e) {
          return L_(C_(e), 8, -1)
      }
  });
  var Au = l((TW, Ou) => {
      var N_ = ye(),
          P_ = Ye(),
          M_ = jt(),
          q_ = xu(),
          ji = N_.Object,
          D_ = P_("".split);
      Ou.exports = M_(function() {
          return !ji("z").propertyIsEnumerable(0)
      }) ? function(e) {
          return q_(e) == "String" ? D_(e, "") : ji(e)
      } : ji
  });
  var zi = l((wW, Su) => {
      var F_ = ye(),
          k_ = F_.TypeError;
      Su.exports = function(e) {
          if (e == null) throw k_("Can't call method on " + e);
          return e
      }
  });
  var Or = l((xW, Ru) => {
      var G_ = Au(),
          U_ = zi();
      Ru.exports = function(e) {
          return G_(U_(e))
      }
  });
  var at = l((OW, Cu) => {
      Cu.exports = function(e) {
          return typeof e == "function"
      }
  });
  var zt = l((AW, Lu) => {
      var V_ = at();
      Lu.exports = function(e) {
          return typeof e == "object" ? e !== null : V_(e)
      }
  });
  var Ar = l((SW, Nu) => {
      var Ki = ye(),
          W_ = at(),
          H_ = function(e) {
              return W_(e) ? e : void 0
          };
      Nu.exports = function(e, t) {
          return arguments.length < 2 ? H_(Ki[e]) : Ki[e] && Ki[e][t]
      }
  });
  var Mu = l((RW, Pu) => {
      var X_ = Ye();
      Pu.exports = X_({}.isPrototypeOf)
  });
  var Du = l((CW, qu) => {
      var B_ = Ar();
      qu.exports = B_("navigator", "userAgent") || ""
  });
  var Hu = l((LW, Wu) => {
      var Vu = ye(),
          Yi = Du(),
          Fu = Vu.process,
          ku = Vu.Deno,
          Gu = Fu && Fu.versions || ku && ku.version,
          Uu = Gu && Gu.v8,
          Qe, En;
      Uu && (Qe = Uu.split("."), En = Qe[0] > 0 && Qe[0] < 4 ? 1 : +(Qe[0] + Qe[1]));
      !En && Yi && (Qe = Yi.match(/Edge\/(\d+)/), (!Qe || Qe[1] >= 74) && (Qe = Yi.match(/Chrome\/(\d+)/), Qe && (En = +Qe[1])));
      Wu.exports = En
  });
  var Qi = l((NW, Bu) => {
      var Xu = Hu(),
          j_ = jt();
      Bu.exports = !!Object.getOwnPropertySymbols && !j_(function() {
          var e = Symbol();
          return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Xu && Xu < 41
      })
  });
  var $i = l((PW, ju) => {
      var z_ = Qi();
      ju.exports = z_ && !Symbol.sham && typeof Symbol.iterator == "symbol"
  });
  var Zi = l((MW, zu) => {
      var K_ = ye(),
          Y_ = Ar(),
          Q_ = at(),
          $_ = Mu(),
          Z_ = $i(),
          J_ = K_.Object;
      zu.exports = Z_ ? function(e) {
          return typeof e == "symbol"
      } : function(e) {
          var t = Y_("Symbol");
          return Q_(t) && $_(t.prototype, J_(e))
      }
  });
  var Yu = l((qW, Ku) => {
      var eI = ye(),
          tI = eI.String;
      Ku.exports = function(e) {
          try {
              return tI(e)
          } catch {
              return "Object"
          }
      }
  });
  var $u = l((DW, Qu) => {
      var rI = ye(),
          nI = at(),
          iI = Yu(),
          oI = rI.TypeError;
      Qu.exports = function(e) {
          if (nI(e)) return e;
          throw oI(iI(e) + " is not a function")
      }
  });
  var Ju = l((FW, Zu) => {
      var aI = $u();
      Zu.exports = function(e, t) {
          var r = e[t];
          return r == null ? void 0 : aI(r)
      }
  });
  var tc = l((kW, ec) => {
      var sI = ye(),
          Ji = yn(),
          eo = at(),
          to = zt(),
          uI = sI.TypeError;
      ec.exports = function(e, t) {
          var r, n;
          if (t === "string" && eo(r = e.toString) && !to(n = Ji(r, e)) || eo(r = e.valueOf) && !to(n = Ji(r, e)) || t !== "string" && eo(r = e.toString) && !to(n = Ji(r, e))) return n;
          throw uI("Can't convert object to primitive value")
      }
  });
  var nc = l((GW, rc) => {
      rc.exports = !1
  });
  var bn = l((UW, oc) => {
      var ic = ye(),
          cI = Object.defineProperty;
      oc.exports = function(e, t) {
          try {
              cI(ic, e, {
                  value: t,
                  configurable: !0,
                  writable: !0
              })
          } catch {
              ic[e] = t
          }
          return t
      }
  });
  var _n = l((VW, sc) => {
      var lI = ye(),
          fI = bn(),
          ac = "__core-js_shared__",
          dI = lI[ac] || fI(ac, {});
      sc.exports = dI
  });
  var ro = l((WW, cc) => {
      var pI = nc(),
          uc = _n();
      (cc.exports = function(e, t) {
          return uc[e] || (uc[e] = t !== void 0 ? t : {})
      })("versions", []).push({
          version: "3.19.0",
          mode: pI ? "pure" : "global",
          copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
      })
  });
  var fc = l((HW, lc) => {
      var vI = ye(),
          gI = zi(),
          hI = vI.Object;
      lc.exports = function(e) {
          return hI(gI(e))
      }
  });
  var _t = l((XW, dc) => {
      var mI = Ye(),
          yI = fc(),
          EI = mI({}.hasOwnProperty);
      dc.exports = Object.hasOwn || function(t, r) {
          return EI(yI(t), r)
      }
  });
  var no = l((BW, pc) => {
      var bI = Ye(),
          _I = 0,
          II = Math.random(),
          TI = bI(1 .toString);
      pc.exports = function(e) {
          return "Symbol(" + (e === void 0 ? "" : e) + ")_" + TI(++_I + II, 36)
      }
  });
  var io = l((jW, yc) => {
      var wI = ye(),
          xI = ro(),
          vc = _t(),
          OI = no(),
          gc = Qi(),
          mc = $i(),
          Kt = xI("wks"),
          Pt = wI.Symbol,
          hc = Pt && Pt.for,
          AI = mc ? Pt : Pt && Pt.withoutSetter || OI;
      yc.exports = function(e) {
          if (!vc(Kt, e) || !(gc || typeof Kt[e] == "string")) {
              var t = "Symbol." + e;
              gc && vc(Pt, e) ? Kt[e] = Pt[e] : mc && hc ? Kt[e] = hc(t) : Kt[e] = AI(t)
          }
          return Kt[e]
      }
  });
  var Ic = l((zW, _c) => {
      var SI = ye(),
          RI = yn(),
          Ec = zt(),
          bc = Zi(),
          CI = Ju(),
          LI = tc(),
          NI = io(),
          PI = SI.TypeError,
          MI = NI("toPrimitive");
      _c.exports = function(e, t) {
          if (!Ec(e) || bc(e)) return e;
          var r = CI(e, MI),
              n;
          if (r) {
              if (t === void 0 && (t = "default"), n = RI(r, e, t), !Ec(n) || bc(n)) return n;
              throw PI("Can't convert object to primitive value")
          }
          return t === void 0 && (t = "number"), LI(e, t)
      }
  });
  var oo = l((KW, Tc) => {
      var qI = Ic(),
          DI = Zi();
      Tc.exports = function(e) {
          var t = qI(e, "string");
          return DI(t) ? t : t + ""
      }
  });
  var so = l((YW, xc) => {
      var FI = ye(),
          wc = zt(),
          ao = FI.document,
          kI = wc(ao) && wc(ao.createElement);
      xc.exports = function(e) {
          return kI ? ao.createElement(e) : {}
      }
  });
  var uo = l((QW, Oc) => {
      var GI = Nt(),
          UI = jt(),
          VI = so();
      Oc.exports = !GI && !UI(function() {
          return Object.defineProperty(VI("div"), "a", {
              get: function() {
                  return 7
              }
          }).a != 7
      })
  });
  var co = l(Sc => {
      var WI = Nt(),
          HI = yn(),
          XI = Eu(),
          BI = Hi(),
          jI = Or(),
          zI = oo(),
          KI = _t(),
          YI = uo(),
          Ac = Object.getOwnPropertyDescriptor;
      Sc.f = WI ? Ac : function(t, r) {
          if (t = jI(t), r = zI(r), YI) try {
              return Ac(t, r)
          } catch {}
          if (KI(t, r)) return BI(!HI(XI.f, t, r), t[r])
      }
  });
  var Sr = l((ZW, Cc) => {
      var Rc = ye(),
          QI = zt(),
          $I = Rc.String,
          ZI = Rc.TypeError;
      Cc.exports = function(e) {
          if (QI(e)) return e;
          throw ZI($I(e) + " is not an object")
      }
  });
  var Rr = l(Pc => {
      var JI = ye(),
          eT = Nt(),
          tT = uo(),
          Lc = Sr(),
          rT = oo(),
          nT = JI.TypeError,
          Nc = Object.defineProperty;
      Pc.f = eT ? Nc : function(t, r, n) {
          if (Lc(t), r = rT(r), Lc(n), tT) try {
              return Nc(t, r, n)
          } catch {}
          if ("get" in n || "set" in n) throw nT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t
      }
  });
  var In = l((eH, Mc) => {
      var iT = Nt(),
          oT = Rr(),
          aT = Hi();
      Mc.exports = iT ? function(e, t, r) {
          return oT.f(e, t, aT(1, r))
      } : function(e, t, r) {
          return e[t] = r, e
      }
  });
  var fo = l((tH, qc) => {
      var sT = Ye(),
          uT = at(),
          lo = _n(),
          cT = sT(Function.toString);
      uT(lo.inspectSource) || (lo.inspectSource = function(e) {
          return cT(e)
      });
      qc.exports = lo.inspectSource
  });
  var kc = l((rH, Fc) => {
      var lT = ye(),
          fT = at(),
          dT = fo(),
          Dc = lT.WeakMap;
      Fc.exports = fT(Dc) && /native code/.test(dT(Dc))
  });
  var po = l((nH, Uc) => {
      var pT = ro(),
          vT = no(),
          Gc = pT("keys");
      Uc.exports = function(e) {
          return Gc[e] || (Gc[e] = vT(e))
      }
  });
  var Tn = l((iH, Vc) => {
      Vc.exports = {}
  });
  var zc = l((oH, jc) => {
      var gT = kc(),
          Bc = ye(),
          vo = Ye(),
          hT = zt(),
          mT = In(),
          go = _t(),
          ho = _n(),
          yT = po(),
          ET = Tn(),
          Wc = "Object already initialized",
          yo = Bc.TypeError,
          bT = Bc.WeakMap,
          wn, Cr, xn, _T = function(e) {
              return xn(e) ? Cr(e) : wn(e, {})
          },
          IT = function(e) {
              return function(t) {
                  var r;
                  if (!hT(t) || (r = Cr(t)).type !== e) throw yo("Incompatible receiver, " + e + " required");
                  return r
              }
          };
      gT || ho.state ? (It = ho.state || (ho.state = new bT), Hc = vo(It.get), mo = vo(It.has), Xc = vo(It.set), wn = function(e, t) {
          if (mo(It, e)) throw new yo(Wc);
          return t.facade = e, Xc(It, e, t), t
      }, Cr = function(e) {
          return Hc(It, e) || {}
      }, xn = function(e) {
          return mo(It, e)
      }) : (Mt = yT("state"), ET[Mt] = !0, wn = function(e, t) {
          if (go(e, Mt)) throw new yo(Wc);
          return t.facade = e, mT(e, Mt, t), t
      }, Cr = function(e) {
          return go(e, Mt) ? e[Mt] : {}
      }, xn = function(e) {
          return go(e, Mt)
      });
      var It, Hc, mo, Xc, Mt;
      jc.exports = {
          set: wn,
          get: Cr,
          has: xn,
          enforce: _T,
          getterFor: IT
      }
  });
  var Qc = l((aH, Yc) => {
      var Eo = Nt(),
          TT = _t(),
          Kc = Function.prototype,
          wT = Eo && Object.getOwnPropertyDescriptor,
          bo = TT(Kc, "name"),
          xT = bo && function() {}.name === "something",
          OT = bo && (!Eo || Eo && wT(Kc, "name").configurable);
      Yc.exports = {
          EXISTS: bo,
          PROPER: xT,
          CONFIGURABLE: OT
      }
  });
  var tl = l((sH, el) => {
      var AT = ye(),
          $c = at(),
          ST = _t(),
          Zc = In(),
          RT = bn(),
          CT = fo(),
          Jc = zc(),
          LT = Qc().CONFIGURABLE,
          NT = Jc.get,
          PT = Jc.enforce,
          MT = String(String).split("String");
      (el.exports = function(e, t, r, n) {
          var i = n ? !!n.unsafe : !1,
              o = n ? !!n.enumerable : !1,
              a = n ? !!n.noTargetGet : !1,
              s = n && n.name !== void 0 ? n.name : t,
              u;
          if ($c(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!ST(r, "name") || LT && r.name !== s) && Zc(r, "name", s), u = PT(r), u.source || (u.source = MT.join(typeof s == "string" ? s : ""))), e === AT) {
              o ? e[t] = r : RT(t, r);
              return
          } else i ? !a && e[t] && (o = !0) : delete e[t];
          o ? e[t] = r : Zc(e, t, r)
      })(Function.prototype, "toString", function() {
          return $c(this) && NT(this).source || CT(this)
      })
  });
  var _o = l((uH, rl) => {
      var qT = Math.ceil,
          DT = Math.floor;
      rl.exports = function(e) {
          var t = +e;
          return t !== t || t === 0 ? 0 : (t > 0 ? DT : qT)(t)
      }
  });
  var il = l((cH, nl) => {
      var FT = _o(),
          kT = Math.max,
          GT = Math.min;
      nl.exports = function(e, t) {
          var r = FT(e);
          return r < 0 ? kT(r + t, 0) : GT(r, t)
      }
  });
  var al = l((lH, ol) => {
      var UT = _o(),
          VT = Math.min;
      ol.exports = function(e) {
          return e > 0 ? VT(UT(e), 9007199254740991) : 0
      }
  });
  var ul = l((fH, sl) => {
      var WT = al();
      sl.exports = function(e) {
          return WT(e.length)
      }
  });
  var Io = l((dH, ll) => {
      var HT = Or(),
          XT = il(),
          BT = ul(),
          cl = function(e) {
              return function(t, r, n) {
                  var i = HT(t),
                      o = BT(i),
                      a = XT(n, o),
                      s;
                  if (e && r != r) {
                      for (; o > a;)
                          if (s = i[a++], s != s) return !0
                  } else
                      for (; o > a; a++)
                          if ((e || a in i) && i[a] === r) return e || a || 0;
                  return !e && -1
              }
          };
      ll.exports = {
          includes: cl(!0),
          indexOf: cl(!1)
      }
  });
  var wo = l((pH, dl) => {
      var jT = Ye(),
          To = _t(),
          zT = Or(),
          KT = Io().indexOf,
          YT = Tn(),
          fl = jT([].push);
      dl.exports = function(e, t) {
          var r = zT(e),
              n = 0,
              i = [],
              o;
          for (o in r) !To(YT, o) && To(r, o) && fl(i, o);
          for (; t.length > n;) To(r, o = t[n++]) && (~KT(i, o) || fl(i, o));
          return i
      }
  });
  var On = l((vH, pl) => {
      pl.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
  });
  var gl = l(vl => {
      var QT = wo(),
          $T = On(),
          ZT = $T.concat("length", "prototype");
      vl.f = Object.getOwnPropertyNames || function(t) {
          return QT(t, ZT)
      }
  });
  var ml = l(hl => {
      hl.f = Object.getOwnPropertySymbols
  });
  var El = l((mH, yl) => {
      var JT = Ar(),
          ew = Ye(),
          tw = gl(),
          rw = ml(),
          nw = Sr(),
          iw = ew([].concat);
      yl.exports = JT("Reflect", "ownKeys") || function(t) {
          var r = tw.f(nw(t)),
              n = rw.f;
          return n ? iw(r, n(t)) : r
      }
  });
  var _l = l((yH, bl) => {
      var ow = _t(),
          aw = El(),
          sw = co(),
          uw = Rr();
      bl.exports = function(e, t) {
          for (var r = aw(t), n = uw.f, i = sw.f, o = 0; o < r.length; o++) {
              var a = r[o];
              ow(e, a) || n(e, a, i(t, a))
          }
      }
  });
  var Tl = l((EH, Il) => {
      var cw = jt(),
          lw = at(),
          fw = /#|\.prototype\./,
          Lr = function(e, t) {
              var r = pw[dw(e)];
              return r == gw ? !0 : r == vw ? !1 : lw(t) ? cw(t) : !!t
          },
          dw = Lr.normalize = function(e) {
              return String(e).replace(fw, ".").toLowerCase()
          },
          pw = Lr.data = {},
          vw = Lr.NATIVE = "N",
          gw = Lr.POLYFILL = "P";
      Il.exports = Lr
  });
  var xl = l((bH, wl) => {
      var xo = ye(),
          hw = co().f,
          mw = In(),
          yw = tl(),
          Ew = bn(),
          bw = _l(),
          _w = Tl();
      wl.exports = function(e, t) {
          var r = e.target,
              n = e.global,
              i = e.stat,
              o, a, s, u, p, E;
          if (n ? a = xo : i ? a = xo[r] || Ew(r, {}) : a = (xo[r] || {}).prototype, a)
              for (s in t) {
                  if (p = t[s], e.noTargetGet ? (E = hw(a, s), u = E && E.value) : u = a[s], o = _w(n ? s : r + (i ? "." : "#") + s, e.forced), !o && u !== void 0) {
                      if (typeof p == typeof u) continue;
                      bw(p, u)
                  }(e.sham || u && u.sham) && mw(p, "sham", !0), yw(a, s, p, e)
              }
      }
  });
  var Al = l((_H, Ol) => {
      var Iw = wo(),
          Tw = On();
      Ol.exports = Object.keys || function(t) {
          return Iw(t, Tw)
      }
  });
  var Rl = l((IH, Sl) => {
      var ww = Nt(),
          xw = Rr(),
          Ow = Sr(),
          Aw = Or(),
          Sw = Al();
      Sl.exports = ww ? Object.defineProperties : function(t, r) {
          Ow(t);
          for (var n = Aw(r), i = Sw(r), o = i.length, a = 0, s; o > a;) xw.f(t, s = i[a++], n[s]);
          return t
      }
  });
  var Ll = l((TH, Cl) => {
      var Rw = Ar();
      Cl.exports = Rw("document", "documentElement")
  });
  var Gl = l((wH, kl) => {
      var Cw = Sr(),
          Lw = Rl(),
          Nl = On(),
          Nw = Tn(),
          Pw = Ll(),
          Mw = so(),
          qw = po(),
          Pl = ">",
          Ml = "<",
          Ao = "prototype",
          So = "script",
          Dl = qw("IE_PROTO"),
          Oo = function() {},
          Fl = function(e) {
              return Ml + So + Pl + e + Ml + "/" + So + Pl
          },
          ql = function(e) {
              e.write(Fl("")), e.close();
              var t = e.parentWindow.Object;
              return e = null, t
          },
          Dw = function() {
              var e = Mw("iframe"),
                  t = "java" + So + ":",
                  r;
              return e.style.display = "none", Pw.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(Fl("document.F=Object")), r.close(), r.F
          },
          An, Sn = function() {
              try {
                  An = new ActiveXObject("htmlfile")
              } catch {}
              Sn = typeof document < "u" ? document.domain && An ? ql(An) : Dw() : ql(An);
              for (var e = Nl.length; e--;) delete Sn[Ao][Nl[e]];
              return Sn()
          };
      Nw[Dl] = !0;
      kl.exports = Object.create || function(t, r) {
          var n;
          return t !== null ? (Oo[Ao] = Cw(t), n = new Oo, Oo[Ao] = null, n[Dl] = t) : n = Sn(), r === void 0 ? n : Lw(n, r)
      }
  });
  var Vl = l((xH, Ul) => {
      var Fw = io(),
          kw = Gl(),
          Gw = Rr(),
          Ro = Fw("unscopables"),
          Co = Array.prototype;
      Co[Ro] == null && Gw.f(Co, Ro, {
          configurable: !0,
          value: kw(null)
      });
      Ul.exports = function(e) {
          Co[Ro][e] = !0
      }
  });
  var Wl = l(() => {
      "use strict";
      var Uw = xl(),
          Vw = Io().includes,
          Ww = Vl();
      Uw({
          target: "Array",
          proto: !0
      }, {
          includes: function(t) {
              return Vw(this, t, arguments.length > 1 ? arguments[1] : void 0)
          }
      });
      Ww("includes")
  });
  var Xl = l((SH, Hl) => {
      var Hw = ye(),
          Xw = Ye();
      Hl.exports = function(e, t) {
          return Xw(Hw[e].prototype[t])
      }
  });
  var jl = l((RH, Bl) => {
      Wl();
      var Bw = Xl();
      Bl.exports = Bw("Array", "includes")
  });
  var Kl = l((CH, zl) => {
      var jw = jl();
      zl.exports = jw
  });
  var Ql = l((LH, Yl) => {
      var zw = Kl();
      Yl.exports = zw
  });
  var Lo = l((NH, $l) => {
      var Kw = typeof global == "object" && global && global.Object === Object && global;
      $l.exports = Kw
  });
  var $e = l((PH, Zl) => {
      var Yw = Lo(),
          Qw = typeof self == "object" && self && self.Object === Object && self,
          $w = Yw || Qw || Function("return this")();
      Zl.exports = $w
  });
  var Yt = l((MH, Jl) => {
      var Zw = $e(),
          Jw = Zw.Symbol;
      Jl.exports = Jw
  });
  var nf = l((qH, rf) => {
      var ef = Yt(),
          tf = Object.prototype,
          ex = tf.hasOwnProperty,
          tx = tf.toString,
          Nr = ef ? ef.toStringTag : void 0;

      function rx(e) {
          var t = ex.call(e, Nr),
              r = e[Nr];
          try {
              e[Nr] = void 0;
              var n = !0
          } catch {}
          var i = tx.call(e);
          return n && (t ? e[Nr] = r : delete e[Nr]), i
      }
      rf.exports = rx
  });
  var af = l((DH, of) => {
      var nx = Object.prototype,
          ix = nx.toString;

      function ox(e) {
          return ix.call(e)
      }
      of.exports = ox
  });
  var Tt = l((FH, cf) => {
      var sf = Yt(),
          ax = nf(),
          sx = af(),
          ux = "[object Null]",
          cx = "[object Undefined]",
          uf = sf ? sf.toStringTag : void 0;

      function lx(e) {
          return e == null ? e === void 0 ? cx : ux : uf && uf in Object(e) ? ax(e) : sx(e)
      }
      cf.exports = lx
  });
  var No = l((kH, lf) => {
      function fx(e, t) {
          return function(r) {
              return e(t(r))
          }
      }
      lf.exports = fx
  });
  var Po = l((GH, ff) => {
      var dx = No(),
          px = dx(Object.getPrototypeOf, Object);
      ff.exports = px
  });
  var vt = l((UH, df) => {
      function vx(e) {
          return e != null && typeof e == "object"
      }
      df.exports = vx
  });
  var Mo = l((VH, vf) => {
      var gx = Tt(),
          hx = Po(),
          mx = vt(),
          yx = "[object Object]",
          Ex = Function.prototype,
          bx = Object.prototype,
          pf = Ex.toString,
          _x = bx.hasOwnProperty,
          Ix = pf.call(Object);

      function Tx(e) {
          if (!mx(e) || gx(e) != yx) return !1;
          var t = hx(e);
          if (t === null) return !0;
          var r = _x.call(t, "constructor") && t.constructor;
          return typeof r == "function" && r instanceof r && pf.call(r) == Ix
      }
      vf.exports = Tx
  });
  var gf = l(qo => {
      "use strict";
      Object.defineProperty(qo, "__esModule", {
          value: !0
      });
      qo.default = wx;

      function wx(e) {
          var t, r = e.Symbol;
          return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
      }
  });
  var hf = l((Fo, Do) => {
      "use strict";
      Object.defineProperty(Fo, "__esModule", {
          value: !0
      });
      var xx = gf(),
          Ox = Ax(xx);

      function Ax(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      var Qt;
      typeof self < "u" ? Qt = self : typeof window < "u" ? Qt = window : typeof global < "u" ? Qt = global : typeof Do < "u" ? Qt = Do : Qt = Function("return this")();
      var Sx = (0, Ox.default)(Qt);
      Fo.default = Sx
  });
  var ko = l(Pr => {
      "use strict";
      Pr.__esModule = !0;
      Pr.ActionTypes = void 0;
      Pr.default = bf;
      var Rx = Mo(),
          Cx = Ef(Rx),
          Lx = hf(),
          mf = Ef(Lx);

      function Ef(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      var yf = Pr.ActionTypes = {
          INIT: "@@redux/INIT"
      };

      function bf(e, t, r) {
          var n;
          if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
              if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
              return r(bf)(e, t)
          }
          if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
          var i = e,
              o = t,
              a = [],
              s = a,
              u = !1;

          function p() {
              s === a && (s = a.slice())
          }

          function E() {
              return o
          }

          function f(T) {
              if (typeof T != "function") throw new Error("Expected listener to be a function.");
              var R = !0;
              return p(), s.push(T),
                  function() {
                      if (R) {
                          R = !1, p();
                          var P = s.indexOf(T);
                          s.splice(P, 1)
                      }
                  }
          }

          function I(T) {
              if (!(0, Cx.default)(T)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
              if (typeof T.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
              if (u) throw new Error("Reducers may not dispatch actions.");
              try {
                  u = !0, o = i(o, T)
              } finally {
                  u = !1
              }
              for (var R = a = s, A = 0; A < R.length; A++) R[A]();
              return T
          }

          function m(T) {
              if (typeof T != "function") throw new Error("Expected the nextReducer to be a function.");
              i = T, I({
                  type: yf.INIT
              })
          }

          function y() {
              var T, R = f;
              return T = {
                  subscribe: function(P) {
                      if (typeof P != "object") throw new TypeError("Expected the observer to be an object.");

                      function N() {
                          P.next && P.next(E())
                      }
                      N();
                      var D = R(N);
                      return {
                          unsubscribe: D
                      }
                  }
              }, T[mf.default] = function() {
                  return this
              }, T
          }
          return I({
              type: yf.INIT
          }), n = {
              dispatch: I,
              subscribe: f,
              getState: E,
              replaceReducer: m
          }, n[mf.default] = y, n
      }
  });
  var Uo = l(Go => {
      "use strict";
      Go.__esModule = !0;
      Go.default = Nx;

      function Nx(e) {
          typeof console < "u" && typeof console.error == "function" && console.error(e);
          try {
              throw new Error(e)
          } catch {}
      }
  });
  var Tf = l(Vo => {
      "use strict";
      Vo.__esModule = !0;
      Vo.default = Fx;
      var _f = ko(),
          Px = Mo(),
          BH = If(Px),
          Mx = Uo(),
          jH = If(Mx);

      function If(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }

      function qx(e, t) {
          var r = t && t.type,
              n = r && '"' + r.toString() + '"' || "an action";
          return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      }

      function Dx(e) {
          Object.keys(e).forEach(function(t) {
              var r = e[t],
                  n = r(void 0, {
                      type: _f.ActionTypes.INIT
                  });
              if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
              var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
              if (typeof r(void 0, {
                      type: i
                  }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + _f.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
          })
      }

      function Fx(e) {
          for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
              var i = t[n];
              typeof e[i] == "function" && (r[i] = e[i])
          }
          var o = Object.keys(r);
          if (!1) var a;
          var s;
          try {
              Dx(r)
          } catch (u) {
              s = u
          }
          return function() {
              var p = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                  E = arguments[1];
              if (s) throw s;
              if (!1) var f;
              for (var I = !1, m = {}, y = 0; y < o.length; y++) {
                  var T = o[y],
                      R = r[T],
                      A = p[T],
                      P = R(A, E);
                  if (typeof P > "u") {
                      var N = qx(T, E);
                      throw new Error(N)
                  }
                  m[T] = P, I = I || P !== A
              }
              return I ? m : p
          }
      }
  });
  var xf = l(Wo => {
      "use strict";
      Wo.__esModule = !0;
      Wo.default = kx;

      function wf(e, t) {
          return function() {
              return t(e.apply(void 0, arguments))
          }
      }

      function kx(e, t) {
          if (typeof e == "function") return wf(e, t);
          if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
          for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
              var o = r[i],
                  a = e[o];
              typeof a == "function" && (n[o] = wf(a, t))
          }
          return n
      }
  });
  var Xo = l(Ho => {
      "use strict";
      Ho.__esModule = !0;
      Ho.default = Gx;

      function Gx() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          if (t.length === 0) return function(o) {
              return o
          };
          if (t.length === 1) return t[0];
          var n = t[t.length - 1],
              i = t.slice(0, -1);
          return function() {
              return i.reduceRight(function(o, a) {
                  return a(o)
              }, n.apply(void 0, arguments))
          }
      }
  });
  var Of = l(Bo => {
      "use strict";
      Bo.__esModule = !0;
      var Ux = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
      };
      Bo.default = Xx;
      var Vx = Xo(),
          Wx = Hx(Vx);

      function Hx(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }

      function Xx() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          return function(n) {
              return function(i, o, a) {
                  var s = n(i, o, a),
                      u = s.dispatch,
                      p = [],
                      E = {
                          getState: s.getState,
                          dispatch: function(I) {
                              return u(I)
                          }
                      };
                  return p = t.map(function(f) {
                      return f(E)
                  }), u = Wx.default.apply(void 0, p)(s.dispatch), Ux({}, s, {
                      dispatch: u
                  })
              }
          }
      }
  });
  var jo = l(He => {
      "use strict";
      He.__esModule = !0;
      He.compose = He.applyMiddleware = He.bindActionCreators = He.combineReducers = He.createStore = void 0;
      var Bx = ko(),
          jx = $t(Bx),
          zx = Tf(),
          Kx = $t(zx),
          Yx = xf(),
          Qx = $t(Yx),
          $x = Of(),
          Zx = $t($x),
          Jx = Xo(),
          eO = $t(Jx),
          tO = Uo(),
          $H = $t(tO);

      function $t(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      He.createStore = jx.default;
      He.combineReducers = Kx.default;
      He.bindActionCreators = Qx.default;
      He.applyMiddleware = Zx.default;
      He.compose = eO.default
  });
  var Ze, zo, st, rO, nO, Ko, iO, Af = me(() => {
      "use strict";
      Ze = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL"
      }, zo = {
          ELEMENT: "ELEMENT",
          CLASS: "CLASS",
          PAGE: "PAGE"
      }, st = {
          ELEMENT: "ELEMENT",
          VIEWPORT: "VIEWPORT"
      }, rO = {
          X_AXIS: "X_AXIS",
          Y_AXIS: "Y_AXIS"
      }, nO = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
      }, Ko = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
      }, iO = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
      }
  });
  var Xe, oO, Yo = me(() => {
      "use strict";
      Xe = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
      }, oO = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
      }
  });
  var aO, Sf = me(() => {
      "use strict";
      aO = {
          MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
          MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
          MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
          SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
          SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
          MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
          PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
          PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
          PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
          NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
          DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
          ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
          TAB_INTERACTION: "TAB_INTERACTION",
          SLIDER_INTERACTION: "SLIDER_INTERACTION"
      }
  });
  var sO, uO, cO, lO, fO, dO, pO, Qo, Rf = me(() => {
      "use strict";
      Yo();
      ({
          TRANSFORM_MOVE: sO,
          TRANSFORM_SCALE: uO,
          TRANSFORM_ROTATE: cO,
          TRANSFORM_SKEW: lO,
          STYLE_SIZE: fO,
          STYLE_FILTER: dO,
          STYLE_FONT_VARIATION: pO
      } = Xe), Qo = {
          [sO]: !0,
          [uO]: !0,
          [cO]: !0,
          [lO]: !0,
          [fO]: !0,
          [dO]: !0,
          [pO]: !0
      }
  });
  var we = {};
  Ge(we, {
      IX2_ACTION_LIST_PLAYBACK_CHANGED: () => CO,
      IX2_ANIMATION_FRAME_CHANGED: () => wO,
      IX2_CLEAR_REQUESTED: () => _O,
      IX2_ELEMENT_STATE_CHANGED: () => RO,
      IX2_EVENT_LISTENER_ADDED: () => IO,
      IX2_EVENT_STATE_CHANGED: () => TO,
      IX2_INSTANCE_ADDED: () => OO,
      IX2_INSTANCE_REMOVED: () => SO,
      IX2_INSTANCE_STARTED: () => AO,
      IX2_MEDIA_QUERIES_DEFINED: () => NO,
      IX2_PARAMETER_CHANGED: () => xO,
      IX2_PLAYBACK_REQUESTED: () => EO,
      IX2_PREVIEW_REQUESTED: () => yO,
      IX2_RAW_DATA_IMPORTED: () => vO,
      IX2_SESSION_INITIALIZED: () => gO,
      IX2_SESSION_STARTED: () => hO,
      IX2_SESSION_STOPPED: () => mO,
      IX2_STOP_REQUESTED: () => bO,
      IX2_TEST_FRAME_RENDERED: () => PO,
      IX2_VIEWPORT_WIDTH_CHANGED: () => LO
  });
  var vO, gO, hO, mO, yO, EO, bO, _O, IO, TO, wO, xO, OO, AO, SO, RO, CO, LO, NO, PO, Cf = me(() => {
      "use strict";
      vO = "IX2_RAW_DATA_IMPORTED", gO = "IX2_SESSION_INITIALIZED", hO = "IX2_SESSION_STARTED", mO = "IX2_SESSION_STOPPED", yO = "IX2_PREVIEW_REQUESTED", EO = "IX2_PLAYBACK_REQUESTED", bO = "IX2_STOP_REQUESTED", _O = "IX2_CLEAR_REQUESTED", IO = "IX2_EVENT_LISTENER_ADDED", TO = "IX2_EVENT_STATE_CHANGED", wO = "IX2_ANIMATION_FRAME_CHANGED", xO = "IX2_PARAMETER_CHANGED", OO = "IX2_INSTANCE_ADDED", AO = "IX2_INSTANCE_STARTED", SO = "IX2_INSTANCE_REMOVED", RO = "IX2_ELEMENT_STATE_CHANGED", CO = "IX2_ACTION_LIST_PLAYBACK_CHANGED", LO = "IX2_VIEWPORT_WIDTH_CHANGED", NO = "IX2_MEDIA_QUERIES_DEFINED", PO = "IX2_TEST_FRAME_RENDERED"
  });
  var Ne = {};
  Ge(Ne, {
      ABSTRACT_NODE: () => LA,
      AUTO: () => bA,
      BACKGROUND: () => vA,
      BACKGROUND_COLOR: () => pA,
      BAR_DELIMITER: () => TA,
      BORDER_COLOR: () => gA,
      BOUNDARY_SELECTOR: () => kO,
      CHILDREN: () => wA,
      COLON_DELIMITER: () => IA,
      COLOR: () => hA,
      COMMA_DELIMITER: () => _A,
      CONFIG_UNIT: () => jO,
      CONFIG_VALUE: () => WO,
      CONFIG_X_UNIT: () => HO,
      CONFIG_X_VALUE: () => GO,
      CONFIG_Y_UNIT: () => XO,
      CONFIG_Y_VALUE: () => UO,
      CONFIG_Z_UNIT: () => BO,
      CONFIG_Z_VALUE: () => VO,
      DISPLAY: () => mA,
      FILTER: () => cA,
      FLEX: () => yA,
      FONT_VARIATION_SETTINGS: () => lA,
      HEIGHT: () => dA,
      HTML_ELEMENT: () => RA,
      IMMEDIATE_CHILDREN: () => xA,
      IX2_ID_DELIMITER: () => MO,
      OPACITY: () => uA,
      PARENT: () => AA,
      PLAIN_OBJECT: () => CA,
      PRESERVE_3D: () => SA,
      RENDER_GENERAL: () => PA,
      RENDER_PLUGIN: () => qA,
      RENDER_STYLE: () => MA,
      RENDER_TRANSFORM: () => NA,
      ROTATE_X: () => rA,
      ROTATE_Y: () => nA,
      ROTATE_Z: () => iA,
      SCALE_3D: () => tA,
      SCALE_X: () => ZO,
      SCALE_Y: () => JO,
      SCALE_Z: () => eA,
      SIBLINGS: () => OA,
      SKEW: () => oA,
      SKEW_X: () => aA,
      SKEW_Y: () => sA,
      TRANSFORM: () => zO,
      TRANSLATE_3D: () => $O,
      TRANSLATE_X: () => KO,
      TRANSLATE_Y: () => YO,
      TRANSLATE_Z: () => QO,
      WF_PAGE: () => qO,
      WIDTH: () => fA,
      WILL_CHANGE: () => EA,
      W_MOD_IX: () => FO,
      W_MOD_JS: () => DO
  });
  var MO, qO, DO, FO, kO, GO, UO, VO, WO, HO, XO, BO, jO, zO, KO, YO, QO, $O, ZO, JO, eA, tA, rA, nA, iA, oA, aA, sA, uA, cA, lA, fA, dA, pA, vA, gA, hA, mA, yA, EA, bA, _A, IA, TA, wA, xA, OA, AA, SA, RA, CA, LA, NA, PA, MA, qA, Lf = me(() => {
      "use strict";
      MO = "|", qO = "data-wf-page", DO = "w-mod-js", FO = "w-mod-ix", kO = ".w-dyn-item", GO = "xValue", UO = "yValue", VO = "zValue", WO = "value", HO = "xUnit", XO = "yUnit", BO = "zUnit", jO = "unit", zO = "transform", KO = "translateX", YO = "translateY", QO = "translateZ", $O = "translate3d", ZO = "scaleX", JO = "scaleY", eA = "scaleZ", tA = "scale3d", rA = "rotateX", nA = "rotateY", iA = "rotateZ", oA = "skew", aA = "skewX", sA = "skewY", uA = "opacity", cA = "filter", lA = "font-variation-settings", fA = "width", dA = "height", pA = "backgroundColor", vA = "background", gA = "borderColor", hA = "color", mA = "display", yA = "flex", EA = "willChange", bA = "AUTO", _A = ",", IA = ":", TA = "|", wA = "CHILDREN", xA = "IMMEDIATE_CHILDREN", OA = "SIBLINGS", AA = "PARENT", SA = "preserve-3d", RA = "HTML_ELEMENT", CA = "PLAIN_OBJECT", LA = "ABSTRACT_NODE", NA = "RENDER_TRANSFORM", PA = "RENDER_GENERAL", MA = "RENDER_STYLE", qA = "RENDER_PLUGIN"
  });
  var Nf = {};
  Ge(Nf, {
      ActionAppliesTo: () => oO,
      ActionTypeConsts: () => Xe,
      EventAppliesTo: () => zo,
      EventBasedOn: () => st,
      EventContinuousMouseAxes: () => rO,
      EventLimitAffectedElements: () => nO,
      EventTypeConsts: () => Ze,
      IX2EngineActionTypes: () => we,
      IX2EngineConstants: () => Ne,
      InteractionTypeConsts: () => aO,
      QuickEffectDirectionConsts: () => iO,
      QuickEffectIds: () => Ko,
      ReducedMotionTypes: () => Qo
  });
  var Ue = me(() => {
      "use strict";
      Af();
      Yo();
      Sf();
      Rf();
      Cf();
      Lf()
  });
  var DA, Pf, Mf = me(() => {
      "use strict";
      Ue();
      ({
          IX2_RAW_DATA_IMPORTED: DA
      } = we), Pf = (e = Object.freeze({}), t) => {
          switch (t.type) {
              case DA:
                  return t.payload.ixData || Object.freeze({});
              default:
                  return e
          }
      }
  });
  var Zt = l(be => {
      "use strict";
      Object.defineProperty(be, "__esModule", {
          value: !0
      });
      var FA = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e
      } : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      };
      be.clone = Cn;
      be.addLast = Ff;
      be.addFirst = kf;
      be.removeLast = Gf;
      be.removeFirst = Uf;
      be.insert = Vf;
      be.removeAt = Wf;
      be.replaceAt = Hf;
      be.getIn = Ln;
      be.set = Nn;
      be.setIn = Pn;
      be.update = Bf;
      be.updateIn = jf;
      be.merge = zf;
      be.mergeDeep = Kf;
      be.mergeIn = Yf;
      be.omit = Qf;
      be.addDefaults = $f;
      var qf = "INVALID_ARGS";

      function Df(e) {
          throw new Error(e)
      }

      function $o(e) {
          var t = Object.keys(e);
          return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
      }
      var kA = {}.hasOwnProperty;

      function Cn(e) {
          if (Array.isArray(e)) return e.slice();
          for (var t = $o(e), r = {}, n = 0; n < t.length; n++) {
              var i = t[n];
              r[i] = e[i]
          }
          return r
      }

      function Ve(e, t, r) {
          var n = r;
          n == null && Df(qf);
          for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++) a[s - 3] = arguments[s];
          for (var u = 0; u < a.length; u++) {
              var p = a[u];
              if (p != null) {
                  var E = $o(p);
                  if (E.length)
                      for (var f = 0; f <= E.length; f++) {
                          var I = E[f];
                          if (!(e && n[I] !== void 0)) {
                              var m = p[I];
                              t && Rn(n[I]) && Rn(m) && (m = Ve(e, t, n[I], m)), !(m === void 0 || m === n[I]) && (i || (i = !0, n = Cn(n)), n[I] = m)
                          }
                      }
              }
          }
          return n
      }

      function Rn(e) {
          var t = typeof e > "u" ? "undefined" : FA(e);
          return e != null && (t === "object" || t === "function")
      }

      function Ff(e, t) {
          return Array.isArray(t) ? e.concat(t) : e.concat([t])
      }

      function kf(e, t) {
          return Array.isArray(t) ? t.concat(e) : [t].concat(e)
      }

      function Gf(e) {
          return e.length ? e.slice(0, e.length - 1) : e
      }

      function Uf(e) {
          return e.length ? e.slice(1) : e
      }

      function Vf(e, t, r) {
          return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
      }

      function Wf(e, t) {
          return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
      }

      function Hf(e, t, r) {
          if (e[t] === r) return e;
          for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
          return i[t] = r, i
      }

      function Ln(e, t) {
          if (!Array.isArray(t) && Df(qf), e != null) {
              for (var r = e, n = 0; n < t.length; n++) {
                  var i = t[n];
                  if (r = r?.[i], r === void 0) return r
              }
              return r
          }
      }

      function Nn(e, t, r) {
          var n = typeof t == "number" ? [] : {},
              i = e ?? n;
          if (i[t] === r) return i;
          var o = Cn(i);
          return o[t] = r, o
      }

      function Xf(e, t, r, n) {
          var i = void 0,
              o = t[n];
          if (n === t.length - 1) i = r;
          else {
              var a = Rn(e) && Rn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
              i = Xf(a, t, r, n + 1)
          }
          return Nn(e, o, i)
      }

      function Pn(e, t, r) {
          return t.length ? Xf(e, t, r, 0) : r
      }

      function Bf(e, t, r) {
          var n = e?.[t],
              i = r(n);
          return Nn(e, t, i)
      }

      function jf(e, t, r) {
          var n = Ln(e, t),
              i = r(n);
          return Pn(e, t, i)
      }

      function zf(e, t, r, n, i, o) {
          for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
          return s.length ? Ve.call.apply(Ve, [null, !1, !1, e, t, r, n, i, o].concat(s)) : Ve(!1, !1, e, t, r, n, i, o)
      }

      function Kf(e, t, r, n, i, o) {
          for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
          return s.length ? Ve.call.apply(Ve, [null, !1, !0, e, t, r, n, i, o].concat(s)) : Ve(!1, !0, e, t, r, n, i, o)
      }

      function Yf(e, t, r, n, i, o, a) {
          var s = Ln(e, t);
          s == null && (s = {});
          for (var u = void 0, p = arguments.length, E = Array(p > 7 ? p - 7 : 0), f = 7; f < p; f++) E[f - 7] = arguments[f];
          return E.length ? u = Ve.call.apply(Ve, [null, !1, !1, s, r, n, i, o, a].concat(E)) : u = Ve(!1, !1, s, r, n, i, o, a), Pn(e, t, u)
      }

      function Qf(e, t) {
          for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
              if (kA.call(e, r[i])) {
                  n = !0;
                  break
              } if (!n) return e;
          for (var o = {}, a = $o(e), s = 0; s < a.length; s++) {
              var u = a[s];
              r.indexOf(u) >= 0 || (o[u] = e[u])
          }
          return o
      }

      function $f(e, t, r, n, i, o) {
          for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
          return s.length ? Ve.call.apply(Ve, [null, !0, !1, e, t, r, n, i, o].concat(s)) : Ve(!0, !1, e, t, r, n, i, o)
      }
      var GA = {
          clone: Cn,
          addLast: Ff,
          addFirst: kf,
          removeLast: Gf,
          removeFirst: Uf,
          insert: Vf,
          removeAt: Wf,
          replaceAt: Hf,
          getIn: Ln,
          set: Nn,
          setIn: Pn,
          update: Bf,
          updateIn: jf,
          merge: zf,
          mergeDeep: Kf,
          mergeIn: Yf,
          omit: Qf,
          addDefaults: $f
      };
      be.default = GA
  });
  var Jf, UA, VA, WA, HA, XA, Zf, ed, td = me(() => {
      "use strict";
      Ue();
      Jf = de(Zt()), {
          IX2_PREVIEW_REQUESTED: UA,
          IX2_PLAYBACK_REQUESTED: VA,
          IX2_STOP_REQUESTED: WA,
          IX2_CLEAR_REQUESTED: HA
      } = we, XA = {
          preview: {},
          playback: {},
          stop: {},
          clear: {}
      }, Zf = Object.create(null, {
          [UA]: {
              value: "preview"
          },
          [VA]: {
              value: "playback"
          },
          [WA]: {
              value: "stop"
          },
          [HA]: {
              value: "clear"
          }
      }), ed = (e = XA, t) => {
          if (t.type in Zf) {
              let r = [Zf[t.type]];
              return (0, Jf.setIn)(e, [r], {
                  ...t.payload
              })
          }
          return e
      }
  });
  var qe, BA, jA, zA, KA, YA, QA, $A, ZA, JA, e0, rd, t0, nd, id = me(() => {
      "use strict";
      Ue();
      qe = de(Zt()), {
          IX2_SESSION_INITIALIZED: BA,
          IX2_SESSION_STARTED: jA,
          IX2_TEST_FRAME_RENDERED: zA,
          IX2_SESSION_STOPPED: KA,
          IX2_EVENT_LISTENER_ADDED: YA,
          IX2_EVENT_STATE_CHANGED: QA,
          IX2_ANIMATION_FRAME_CHANGED: $A,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: ZA,
          IX2_VIEWPORT_WIDTH_CHANGED: JA,
          IX2_MEDIA_QUERIES_DEFINED: e0
      } = we, rd = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1
      }, t0 = 20, nd = (e = rd, t) => {
          switch (t.type) {
              case BA: {
                  let {
                      hasBoundaryNodes: r,
                      reducedMotion: n
                  } = t.payload;
                  return (0, qe.merge)(e, {
                      hasBoundaryNodes: r,
                      reducedMotion: n
                  })
              }
              case jA:
                  return (0, qe.set)(e, "active", !0);
              case zA: {
                  let {
                      payload: {
                          step: r = t0
                      }
                  } = t;
                  return (0, qe.set)(e, "tick", e.tick + r)
              }
              case KA:
                  return rd;
              case $A: {
                  let {
                      payload: {
                          now: r
                      }
                  } = t;
                  return (0, qe.set)(e, "tick", r)
              }
              case YA: {
                  let r = (0, qe.addLast)(e.eventListeners, t.payload);
                  return (0, qe.set)(e, "eventListeners", r)
              }
              case QA: {
                  let {
                      stateKey: r,
                      newState: n
                  } = t.payload;
                  return (0, qe.setIn)(e, ["eventState", r], n)
              }
              case ZA: {
                  let {
                      actionListId: r,
                      isPlaying: n
                  } = t.payload;
                  return (0, qe.setIn)(e, ["playbackState", r], n)
              }
              case JA: {
                  let {
                      width: r,
                      mediaQueries: n
                  } = t.payload, i = n.length, o = null;
                  for (let a = 0; a < i; a++) {
                      let {
                          key: s,
                          min: u,
                          max: p
                      } = n[a];
                      if (r >= u && r <= p) {
                          o = s;
                          break
                      }
                  }
                  return (0, qe.merge)(e, {
                      viewportWidth: r,
                      mediaQueryKey: o
                  })
              }
              case e0:
                  return (0, qe.set)(e, "hasDefinedMediaQueries", !0);
              default:
                  return e
          }
      }
  });
  var ad = l((gX, od) => {
      function r0() {
          this.__data__ = [], this.size = 0
      }
      od.exports = r0
  });
  var Mn = l((hX, sd) => {
      function n0(e, t) {
          return e === t || e !== e && t !== t
      }
      sd.exports = n0
  });
  var Mr = l((mX, ud) => {
      var i0 = Mn();

      function o0(e, t) {
          for (var r = e.length; r--;)
              if (i0(e[r][0], t)) return r;
          return -1
      }
      ud.exports = o0
  });
  var ld = l((yX, cd) => {
      var a0 = Mr(),
          s0 = Array.prototype,
          u0 = s0.splice;

      function c0(e) {
          var t = this.__data__,
              r = a0(t, e);
          if (r < 0) return !1;
          var n = t.length - 1;
          return r == n ? t.pop() : u0.call(t, r, 1), --this.size, !0
      }
      cd.exports = c0
  });
  var dd = l((EX, fd) => {
      var l0 = Mr();

      function f0(e) {
          var t = this.__data__,
              r = l0(t, e);
          return r < 0 ? void 0 : t[r][1]
      }
      fd.exports = f0
  });
  var vd = l((bX, pd) => {
      var d0 = Mr();

      function p0(e) {
          return d0(this.__data__, e) > -1
      }
      pd.exports = p0
  });
  var hd = l((_X, gd) => {
      var v0 = Mr();

      function g0(e, t) {
          var r = this.__data__,
              n = v0(r, e);
          return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
      }
      gd.exports = g0
  });
  var qr = l((IX, md) => {
      var h0 = ad(),
          m0 = ld(),
          y0 = dd(),
          E0 = vd(),
          b0 = hd();

      function Jt(e) {
          var t = -1,
              r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r;) {
              var n = e[t];
              this.set(n[0], n[1])
          }
      }
      Jt.prototype.clear = h0;
      Jt.prototype.delete = m0;
      Jt.prototype.get = y0;
      Jt.prototype.has = E0;
      Jt.prototype.set = b0;
      md.exports = Jt
  });
  var Ed = l((TX, yd) => {
      var _0 = qr();

      function I0() {
          this.__data__ = new _0, this.size = 0
      }
      yd.exports = I0
  });
  var _d = l((wX, bd) => {
      function T0(e) {
          var t = this.__data__,
              r = t.delete(e);
          return this.size = t.size, r
      }
      bd.exports = T0
  });
  var Td = l((xX, Id) => {
      function w0(e) {
          return this.__data__.get(e)
      }
      Id.exports = w0
  });
  var xd = l((OX, wd) => {
      function x0(e) {
          return this.__data__.has(e)
      }
      wd.exports = x0
  });
  var ut = l((AX, Od) => {
      function O0(e) {
          var t = typeof e;
          return e != null && (t == "object" || t == "function")
      }
      Od.exports = O0
  });
  var Zo = l((SX, Ad) => {
      var A0 = Tt(),
          S0 = ut(),
          R0 = "[object AsyncFunction]",
          C0 = "[object Function]",
          L0 = "[object GeneratorFunction]",
          N0 = "[object Proxy]";

      function P0(e) {
          if (!S0(e)) return !1;
          var t = A0(e);
          return t == C0 || t == L0 || t == R0 || t == N0
      }
      Ad.exports = P0
  });
  var Rd = l((RX, Sd) => {
      var M0 = $e(),
          q0 = M0["__core-js_shared__"];
      Sd.exports = q0
  });
  var Nd = l((CX, Ld) => {
      var Jo = Rd(),
          Cd = function() {
              var e = /[^.]+$/.exec(Jo && Jo.keys && Jo.keys.IE_PROTO || "");
              return e ? "Symbol(src)_1." + e : ""
          }();

      function D0(e) {
          return !!Cd && Cd in e
      }
      Ld.exports = D0
  });
  var ea = l((LX, Pd) => {
      var F0 = Function.prototype,
          k0 = F0.toString;

      function G0(e) {
          if (e != null) {
              try {
                  return k0.call(e)
              } catch {}
              try {
                  return e + ""
              } catch {}
          }
          return ""
      }
      Pd.exports = G0
  });
  var qd = l((NX, Md) => {
      var U0 = Zo(),
          V0 = Nd(),
          W0 = ut(),
          H0 = ea(),
          X0 = /[\\^$.*+?()[\]{}|]/g,
          B0 = /^\[object .+?Constructor\]$/,
          j0 = Function.prototype,
          z0 = Object.prototype,
          K0 = j0.toString,
          Y0 = z0.hasOwnProperty,
          Q0 = RegExp("^" + K0.call(Y0).replace(X0, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

      function $0(e) {
          if (!W0(e) || V0(e)) return !1;
          var t = U0(e) ? Q0 : B0;
          return t.test(H0(e))
      }
      Md.exports = $0
  });
  var Fd = l((PX, Dd) => {
      function Z0(e, t) {
          return e?.[t]
      }
      Dd.exports = Z0
  });
  var wt = l((MX, kd) => {
      var J0 = qd(),
          eS = Fd();

      function tS(e, t) {
          var r = eS(e, t);
          return J0(r) ? r : void 0
      }
      kd.exports = tS
  });
  var qn = l((qX, Gd) => {
      var rS = wt(),
          nS = $e(),
          iS = rS(nS, "Map");
      Gd.exports = iS
  });
  var Dr = l((DX, Ud) => {
      var oS = wt(),
          aS = oS(Object, "create");
      Ud.exports = aS
  });
  var Hd = l((FX, Wd) => {
      var Vd = Dr();

      function sS() {
          this.__data__ = Vd ? Vd(null) : {}, this.size = 0
      }
      Wd.exports = sS
  });
  var Bd = l((kX, Xd) => {
      function uS(e) {
          var t = this.has(e) && delete this.__data__[e];
          return this.size -= t ? 1 : 0, t
      }
      Xd.exports = uS
  });
  var zd = l((GX, jd) => {
      var cS = Dr(),
          lS = "__lodash_hash_undefined__",
          fS = Object.prototype,
          dS = fS.hasOwnProperty;

      function pS(e) {
          var t = this.__data__;
          if (cS) {
              var r = t[e];
              return r === lS ? void 0 : r
          }
          return dS.call(t, e) ? t[e] : void 0
      }
      jd.exports = pS
  });
  var Yd = l((UX, Kd) => {
      var vS = Dr(),
          gS = Object.prototype,
          hS = gS.hasOwnProperty;

      function mS(e) {
          var t = this.__data__;
          return vS ? t[e] !== void 0 : hS.call(t, e)
      }
      Kd.exports = mS
  });
  var $d = l((VX, Qd) => {
      var yS = Dr(),
          ES = "__lodash_hash_undefined__";

      function bS(e, t) {
          var r = this.__data__;
          return this.size += this.has(e) ? 0 : 1, r[e] = yS && t === void 0 ? ES : t, this
      }
      Qd.exports = bS
  });
  var Jd = l((WX, Zd) => {
      var _S = Hd(),
          IS = Bd(),
          TS = zd(),
          wS = Yd(),
          xS = $d();

      function er(e) {
          var t = -1,
              r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r;) {
              var n = e[t];
              this.set(n[0], n[1])
          }
      }
      er.prototype.clear = _S;
      er.prototype.delete = IS;
      er.prototype.get = TS;
      er.prototype.has = wS;
      er.prototype.set = xS;
      Zd.exports = er
  });
  var rp = l((HX, tp) => {
      var ep = Jd(),
          OS = qr(),
          AS = qn();

      function SS() {
          this.size = 0, this.__data__ = {
              hash: new ep,
              map: new(AS || OS),
              string: new ep
          }
      }
      tp.exports = SS
  });
  var ip = l((XX, np) => {
      function RS(e) {
          var t = typeof e;
          return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
      }
      np.exports = RS
  });
  var Fr = l((BX, op) => {
      var CS = ip();

      function LS(e, t) {
          var r = e.__data__;
          return CS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
      }
      op.exports = LS
  });
  var sp = l((jX, ap) => {
      var NS = Fr();

      function PS(e) {
          var t = NS(this, e).delete(e);
          return this.size -= t ? 1 : 0, t
      }
      ap.exports = PS
  });
  var cp = l((zX, up) => {
      var MS = Fr();

      function qS(e) {
          return MS(this, e).get(e)
      }
      up.exports = qS
  });
  var fp = l((KX, lp) => {
      var DS = Fr();

      function FS(e) {
          return DS(this, e).has(e)
      }
      lp.exports = FS
  });
  var pp = l((YX, dp) => {
      var kS = Fr();

      function GS(e, t) {
          var r = kS(this, e),
              n = r.size;
          return r.set(e, t), this.size += r.size == n ? 0 : 1, this
      }
      dp.exports = GS
  });
  var Dn = l((QX, vp) => {
      var US = rp(),
          VS = sp(),
          WS = cp(),
          HS = fp(),
          XS = pp();

      function tr(e) {
          var t = -1,
              r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r;) {
              var n = e[t];
              this.set(n[0], n[1])
          }
      }
      tr.prototype.clear = US;
      tr.prototype.delete = VS;
      tr.prototype.get = WS;
      tr.prototype.has = HS;
      tr.prototype.set = XS;
      vp.exports = tr
  });
  var hp = l(($X, gp) => {
      var BS = qr(),
          jS = qn(),
          zS = Dn(),
          KS = 200;

      function YS(e, t) {
          var r = this.__data__;
          if (r instanceof BS) {
              var n = r.__data__;
              if (!jS || n.length < KS - 1) return n.push([e, t]), this.size = ++r.size, this;
              r = this.__data__ = new zS(n)
          }
          return r.set(e, t), this.size = r.size, this
      }
      gp.exports = YS
  });
  var ta = l((ZX, mp) => {
      var QS = qr(),
          $S = Ed(),
          ZS = _d(),
          JS = Td(),
          eR = xd(),
          tR = hp();

      function rr(e) {
          var t = this.__data__ = new QS(e);
          this.size = t.size
      }
      rr.prototype.clear = $S;
      rr.prototype.delete = ZS;
      rr.prototype.get = JS;
      rr.prototype.has = eR;
      rr.prototype.set = tR;
      mp.exports = rr
  });
  var Ep = l((JX, yp) => {
      var rR = "__lodash_hash_undefined__";

      function nR(e) {
          return this.__data__.set(e, rR), this
      }
      yp.exports = nR
  });
  var _p = l((e5, bp) => {
      function iR(e) {
          return this.__data__.has(e)
      }
      bp.exports = iR
  });
  var Tp = l((t5, Ip) => {
      var oR = Dn(),
          aR = Ep(),
          sR = _p();

      function Fn(e) {
          var t = -1,
              r = e == null ? 0 : e.length;
          for (this.__data__ = new oR; ++t < r;) this.add(e[t])
      }
      Fn.prototype.add = Fn.prototype.push = aR;
      Fn.prototype.has = sR;
      Ip.exports = Fn
  });
  var xp = l((r5, wp) => {
      function uR(e, t) {
          for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
              if (t(e[r], r, e)) return !0;
          return !1
      }
      wp.exports = uR
  });
  var Ap = l((n5, Op) => {
      function cR(e, t) {
          return e.has(t)
      }
      Op.exports = cR
  });
  var ra = l((i5, Sp) => {
      var lR = Tp(),
          fR = xp(),
          dR = Ap(),
          pR = 1,
          vR = 2;

      function gR(e, t, r, n, i, o) {
          var a = r & pR,
              s = e.length,
              u = t.length;
          if (s != u && !(a && u > s)) return !1;
          var p = o.get(e),
              E = o.get(t);
          if (p && E) return p == t && E == e;
          var f = -1,
              I = !0,
              m = r & vR ? new lR : void 0;
          for (o.set(e, t), o.set(t, e); ++f < s;) {
              var y = e[f],
                  T = t[f];
              if (n) var R = a ? n(T, y, f, t, e, o) : n(y, T, f, e, t, o);
              if (R !== void 0) {
                  if (R) continue;
                  I = !1;
                  break
              }
              if (m) {
                  if (!fR(t, function(A, P) {
                          if (!dR(m, P) && (y === A || i(y, A, r, n, o))) return m.push(P)
                      })) {
                      I = !1;
                      break
                  }
              } else if (!(y === T || i(y, T, r, n, o))) {
                  I = !1;
                  break
              }
          }
          return o.delete(e), o.delete(t), I
      }
      Sp.exports = gR
  });
  var Cp = l((o5, Rp) => {
      var hR = $e(),
          mR = hR.Uint8Array;
      Rp.exports = mR
  });
  var Np = l((a5, Lp) => {
      function yR(e) {
          var t = -1,
              r = Array(e.size);
          return e.forEach(function(n, i) {
              r[++t] = [i, n]
          }), r
      }
      Lp.exports = yR
  });
  var Mp = l((s5, Pp) => {
      function ER(e) {
          var t = -1,
              r = Array(e.size);
          return e.forEach(function(n) {
              r[++t] = n
          }), r
      }
      Pp.exports = ER
  });
  var Gp = l((u5, kp) => {
      var qp = Yt(),
          Dp = Cp(),
          bR = Mn(),
          _R = ra(),
          IR = Np(),
          TR = Mp(),
          wR = 1,
          xR = 2,
          OR = "[object Boolean]",
          AR = "[object Date]",
          SR = "[object Error]",
          RR = "[object Map]",
          CR = "[object Number]",
          LR = "[object RegExp]",
          NR = "[object Set]",
          PR = "[object String]",
          MR = "[object Symbol]",
          qR = "[object ArrayBuffer]",
          DR = "[object DataView]",
          Fp = qp ? qp.prototype : void 0,
          na = Fp ? Fp.valueOf : void 0;

      function FR(e, t, r, n, i, o, a) {
          switch (r) {
              case DR:
                  if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                  e = e.buffer, t = t.buffer;
              case qR:
                  return !(e.byteLength != t.byteLength || !o(new Dp(e), new Dp(t)));
              case OR:
              case AR:
              case CR:
                  return bR(+e, +t);
              case SR:
                  return e.name == t.name && e.message == t.message;
              case LR:
              case PR:
                  return e == t + "";
              case RR:
                  var s = IR;
              case NR:
                  var u = n & wR;
                  if (s || (s = TR), e.size != t.size && !u) return !1;
                  var p = a.get(e);
                  if (p) return p == t;
                  n |= xR, a.set(e, t);
                  var E = _R(s(e), s(t), n, i, o, a);
                  return a.delete(e), E;
              case MR:
                  if (na) return na.call(e) == na.call(t)
          }
          return !1
      }
      kp.exports = FR
  });
  var kn = l((c5, Up) => {
      function kR(e, t) {
          for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
          return e
      }
      Up.exports = kR
  });
  var Oe = l((l5, Vp) => {
      var GR = Array.isArray;
      Vp.exports = GR
  });
  var ia = l((f5, Wp) => {
      var UR = kn(),
          VR = Oe();

      function WR(e, t, r) {
          var n = t(e);
          return VR(e) ? n : UR(n, r(e))
      }
      Wp.exports = WR
  });
  var Xp = l((d5, Hp) => {
      function HR(e, t) {
          for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
              var a = e[r];
              t(a, r, e) && (o[i++] = a)
          }
          return o
      }
      Hp.exports = HR
  });
  var oa = l((p5, Bp) => {
      function XR() {
          return []
      }
      Bp.exports = XR
  });
  var aa = l((v5, zp) => {
      var BR = Xp(),
          jR = oa(),
          zR = Object.prototype,
          KR = zR.propertyIsEnumerable,
          jp = Object.getOwnPropertySymbols,
          YR = jp ? function(e) {
              return e == null ? [] : (e = Object(e), BR(jp(e), function(t) {
                  return KR.call(e, t)
              }))
          } : jR;
      zp.exports = YR
  });
  var Yp = l((g5, Kp) => {
      function QR(e, t) {
          for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
          return n
      }
      Kp.exports = QR
  });
  var $p = l((h5, Qp) => {
      var $R = Tt(),
          ZR = vt(),
          JR = "[object Arguments]";

      function eC(e) {
          return ZR(e) && $R(e) == JR
      }
      Qp.exports = eC
  });
  var kr = l((m5, ev) => {
      var Zp = $p(),
          tC = vt(),
          Jp = Object.prototype,
          rC = Jp.hasOwnProperty,
          nC = Jp.propertyIsEnumerable,
          iC = Zp(function() {
              return arguments
          }()) ? Zp : function(e) {
              return tC(e) && rC.call(e, "callee") && !nC.call(e, "callee")
          };
      ev.exports = iC
  });
  var rv = l((y5, tv) => {
      function oC() {
          return !1
      }
      tv.exports = oC
  });
  var Gn = l((Gr, nr) => {
      var aC = $e(),
          sC = rv(),
          ov = typeof Gr == "object" && Gr && !Gr.nodeType && Gr,
          nv = ov && typeof nr == "object" && nr && !nr.nodeType && nr,
          uC = nv && nv.exports === ov,
          iv = uC ? aC.Buffer : void 0,
          cC = iv ? iv.isBuffer : void 0,
          lC = cC || sC;
      nr.exports = lC
  });
  var Un = l((E5, av) => {
      var fC = 9007199254740991,
          dC = /^(?:0|[1-9]\d*)$/;

      function pC(e, t) {
          var r = typeof e;
          return t = t ?? fC, !!t && (r == "number" || r != "symbol" && dC.test(e)) && e > -1 && e % 1 == 0 && e < t
      }
      av.exports = pC
  });
  var Vn = l((b5, sv) => {
      var vC = 9007199254740991;

      function gC(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= vC
      }
      sv.exports = gC
  });
  var cv = l((_5, uv) => {
      var hC = Tt(),
          mC = Vn(),
          yC = vt(),
          EC = "[object Arguments]",
          bC = "[object Array]",
          _C = "[object Boolean]",
          IC = "[object Date]",
          TC = "[object Error]",
          wC = "[object Function]",
          xC = "[object Map]",
          OC = "[object Number]",
          AC = "[object Object]",
          SC = "[object RegExp]",
          RC = "[object Set]",
          CC = "[object String]",
          LC = "[object WeakMap]",
          NC = "[object ArrayBuffer]",
          PC = "[object DataView]",
          MC = "[object Float32Array]",
          qC = "[object Float64Array]",
          DC = "[object Int8Array]",
          FC = "[object Int16Array]",
          kC = "[object Int32Array]",
          GC = "[object Uint8Array]",
          UC = "[object Uint8ClampedArray]",
          VC = "[object Uint16Array]",
          WC = "[object Uint32Array]",
          he = {};
      he[MC] = he[qC] = he[DC] = he[FC] = he[kC] = he[GC] = he[UC] = he[VC] = he[WC] = !0;
      he[EC] = he[bC] = he[NC] = he[_C] = he[PC] = he[IC] = he[TC] = he[wC] = he[xC] = he[OC] = he[AC] = he[SC] = he[RC] = he[CC] = he[LC] = !1;

      function HC(e) {
          return yC(e) && mC(e.length) && !!he[hC(e)]
      }
      uv.exports = HC
  });
  var fv = l((I5, lv) => {
      function XC(e) {
          return function(t) {
              return e(t)
          }
      }
      lv.exports = XC
  });
  var pv = l((Ur, ir) => {
      var BC = Lo(),
          dv = typeof Ur == "object" && Ur && !Ur.nodeType && Ur,
          Vr = dv && typeof ir == "object" && ir && !ir.nodeType && ir,
          jC = Vr && Vr.exports === dv,
          sa = jC && BC.process,
          zC = function() {
              try {
                  var e = Vr && Vr.require && Vr.require("util").types;
                  return e || sa && sa.binding && sa.binding("util")
              } catch {}
          }();
      ir.exports = zC
  });
  var Wn = l((T5, hv) => {
      var KC = cv(),
          YC = fv(),
          vv = pv(),
          gv = vv && vv.isTypedArray,
          QC = gv ? YC(gv) : KC;
      hv.exports = QC
  });
  var ua = l((w5, mv) => {
      var $C = Yp(),
          ZC = kr(),
          JC = Oe(),
          eL = Gn(),
          tL = Un(),
          rL = Wn(),
          nL = Object.prototype,
          iL = nL.hasOwnProperty;

      function oL(e, t) {
          var r = JC(e),
              n = !r && ZC(e),
              i = !r && !n && eL(e),
              o = !r && !n && !i && rL(e),
              a = r || n || i || o,
              s = a ? $C(e.length, String) : [],
              u = s.length;
          for (var p in e)(t || iL.call(e, p)) && !(a && (p == "length" || i && (p == "offset" || p == "parent") || o && (p == "buffer" || p == "byteLength" || p == "byteOffset") || tL(p, u))) && s.push(p);
          return s
      }
      mv.exports = oL
  });
  var Hn = l((x5, yv) => {
      var aL = Object.prototype;

      function sL(e) {
          var t = e && e.constructor,
              r = typeof t == "function" && t.prototype || aL;
          return e === r
      }
      yv.exports = sL
  });
  var bv = l((O5, Ev) => {
      var uL = No(),
          cL = uL(Object.keys, Object);
      Ev.exports = cL
  });
  var Xn = l((A5, _v) => {
      var lL = Hn(),
          fL = bv(),
          dL = Object.prototype,
          pL = dL.hasOwnProperty;

      function vL(e) {
          if (!lL(e)) return fL(e);
          var t = [];
          for (var r in Object(e)) pL.call(e, r) && r != "constructor" && t.push(r);
          return t
      }
      _v.exports = vL
  });
  var qt = l((S5, Iv) => {
      var gL = Zo(),
          hL = Vn();

      function mL(e) {
          return e != null && hL(e.length) && !gL(e)
      }
      Iv.exports = mL
  });
  var Wr = l((R5, Tv) => {
      var yL = ua(),
          EL = Xn(),
          bL = qt();

      function _L(e) {
          return bL(e) ? yL(e) : EL(e)
      }
      Tv.exports = _L
  });
  var xv = l((C5, wv) => {
      var IL = ia(),
          TL = aa(),
          wL = Wr();

      function xL(e) {
          return IL(e, wL, TL)
      }
      wv.exports = xL
  });
  var Sv = l((L5, Av) => {
      var Ov = xv(),
          OL = 1,
          AL = Object.prototype,
          SL = AL.hasOwnProperty;

      function RL(e, t, r, n, i, o) {
          var a = r & OL,
              s = Ov(e),
              u = s.length,
              p = Ov(t),
              E = p.length;
          if (u != E && !a) return !1;
          for (var f = u; f--;) {
              var I = s[f];
              if (!(a ? I in t : SL.call(t, I))) return !1
          }
          var m = o.get(e),
              y = o.get(t);
          if (m && y) return m == t && y == e;
          var T = !0;
          o.set(e, t), o.set(t, e);
          for (var R = a; ++f < u;) {
              I = s[f];
              var A = e[I],
                  P = t[I];
              if (n) var N = a ? n(P, A, I, t, e, o) : n(A, P, I, e, t, o);
              if (!(N === void 0 ? A === P || i(A, P, r, n, o) : N)) {
                  T = !1;
                  break
              }
              R || (R = I == "constructor")
          }
          if (T && !R) {
              var D = e.constructor,
                  G = t.constructor;
              D != G && "constructor" in e && "constructor" in t && !(typeof D == "function" && D instanceof D && typeof G == "function" && G instanceof G) && (T = !1)
          }
          return o.delete(e), o.delete(t), T
      }
      Av.exports = RL
  });
  var Cv = l((N5, Rv) => {
      var CL = wt(),
          LL = $e(),
          NL = CL(LL, "DataView");
      Rv.exports = NL
  });
  var Nv = l((P5, Lv) => {
      var PL = wt(),
          ML = $e(),
          qL = PL(ML, "Promise");
      Lv.exports = qL
  });
  var Mv = l((M5, Pv) => {
      var DL = wt(),
          FL = $e(),
          kL = DL(FL, "Set");
      Pv.exports = kL
  });
  var ca = l((q5, qv) => {
      var GL = wt(),
          UL = $e(),
          VL = GL(UL, "WeakMap");
      qv.exports = VL
  });
  var Bn = l((D5, Wv) => {
      var la = Cv(),
          fa = qn(),
          da = Nv(),
          pa = Mv(),
          va = ca(),
          Vv = Tt(),
          or = ea(),
          Dv = "[object Map]",
          WL = "[object Object]",
          Fv = "[object Promise]",
          kv = "[object Set]",
          Gv = "[object WeakMap]",
          Uv = "[object DataView]",
          HL = or(la),
          XL = or(fa),
          BL = or(da),
          jL = or(pa),
          zL = or(va),
          Dt = Vv;
      (la && Dt(new la(new ArrayBuffer(1))) != Uv || fa && Dt(new fa) != Dv || da && Dt(da.resolve()) != Fv || pa && Dt(new pa) != kv || va && Dt(new va) != Gv) && (Dt = function(e) {
          var t = Vv(e),
              r = t == WL ? e.constructor : void 0,
              n = r ? or(r) : "";
          if (n) switch (n) {
              case HL:
                  return Uv;
              case XL:
                  return Dv;
              case BL:
                  return Fv;
              case jL:
                  return kv;
              case zL:
                  return Gv
          }
          return t
      });
      Wv.exports = Dt
  });
  var Qv = l((F5, Yv) => {
      var ga = ta(),
          KL = ra(),
          YL = Gp(),
          QL = Sv(),
          Hv = Bn(),
          Xv = Oe(),
          Bv = Gn(),
          $L = Wn(),
          ZL = 1,
          jv = "[object Arguments]",
          zv = "[object Array]",
          jn = "[object Object]",
          JL = Object.prototype,
          Kv = JL.hasOwnProperty;

      function eN(e, t, r, n, i, o) {
          var a = Xv(e),
              s = Xv(t),
              u = a ? zv : Hv(e),
              p = s ? zv : Hv(t);
          u = u == jv ? jn : u, p = p == jv ? jn : p;
          var E = u == jn,
              f = p == jn,
              I = u == p;
          if (I && Bv(e)) {
              if (!Bv(t)) return !1;
              a = !0, E = !1
          }
          if (I && !E) return o || (o = new ga), a || $L(e) ? KL(e, t, r, n, i, o) : YL(e, t, u, r, n, i, o);
          if (!(r & ZL)) {
              var m = E && Kv.call(e, "__wrapped__"),
                  y = f && Kv.call(t, "__wrapped__");
              if (m || y) {
                  var T = m ? e.value() : e,
                      R = y ? t.value() : t;
                  return o || (o = new ga), i(T, R, r, n, o)
              }
          }
          return I ? (o || (o = new ga), QL(e, t, r, n, i, o)) : !1
      }
      Yv.exports = eN
  });
  var ha = l((k5, Jv) => {
      var tN = Qv(),
          $v = vt();

      function Zv(e, t, r, n, i) {
          return e === t ? !0 : e == null || t == null || !$v(e) && !$v(t) ? e !== e && t !== t : tN(e, t, r, n, Zv, i)
      }
      Jv.exports = Zv
  });
  var tg = l((G5, eg) => {
      var rN = ta(),
          nN = ha(),
          iN = 1,
          oN = 2;

      function aN(e, t, r, n) {
          var i = r.length,
              o = i,
              a = !n;
          if (e == null) return !o;
          for (e = Object(e); i--;) {
              var s = r[i];
              if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
          }
          for (; ++i < o;) {
              s = r[i];
              var u = s[0],
                  p = e[u],
                  E = s[1];
              if (a && s[2]) {
                  if (p === void 0 && !(u in e)) return !1
              } else {
                  var f = new rN;
                  if (n) var I = n(p, E, u, e, t, f);
                  if (!(I === void 0 ? nN(E, p, iN | oN, n, f) : I)) return !1
              }
          }
          return !0
      }
      eg.exports = aN
  });
  var ma = l((U5, rg) => {
      var sN = ut();

      function uN(e) {
          return e === e && !sN(e)
      }
      rg.exports = uN
  });
  var ig = l((V5, ng) => {
      var cN = ma(),
          lN = Wr();

      function fN(e) {
          for (var t = lN(e), r = t.length; r--;) {
              var n = t[r],
                  i = e[n];
              t[r] = [n, i, cN(i)]
          }
          return t
      }
      ng.exports = fN
  });
  var ya = l((W5, og) => {
      function dN(e, t) {
          return function(r) {
              return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
          }
      }
      og.exports = dN
  });
  var sg = l((H5, ag) => {
      var pN = tg(),
          vN = ig(),
          gN = ya();

      function hN(e) {
          var t = vN(e);
          return t.length == 1 && t[0][2] ? gN(t[0][0], t[0][1]) : function(r) {
              return r === e || pN(r, e, t)
          }
      }
      ag.exports = hN
  });
  var Hr = l((X5, ug) => {
      var mN = Tt(),
          yN = vt(),
          EN = "[object Symbol]";

      function bN(e) {
          return typeof e == "symbol" || yN(e) && mN(e) == EN
      }
      ug.exports = bN
  });
  var zn = l((B5, cg) => {
      var _N = Oe(),
          IN = Hr(),
          TN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          wN = /^\w*$/;

      function xN(e, t) {
          if (_N(e)) return !1;
          var r = typeof e;
          return r == "number" || r == "symbol" || r == "boolean" || e == null || IN(e) ? !0 : wN.test(e) || !TN.test(e) || t != null && e in Object(t)
      }
      cg.exports = xN
  });
  var dg = l((j5, fg) => {
      var lg = Dn(),
          ON = "Expected a function";

      function Ea(e, t) {
          if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(ON);
          var r = function() {
              var n = arguments,
                  i = t ? t.apply(this, n) : n[0],
                  o = r.cache;
              if (o.has(i)) return o.get(i);
              var a = e.apply(this, n);
              return r.cache = o.set(i, a) || o, a
          };
          return r.cache = new(Ea.Cache || lg), r
      }
      Ea.Cache = lg;
      fg.exports = Ea
  });
  var vg = l((z5, pg) => {
      var AN = dg(),
          SN = 500;

      function RN(e) {
          var t = AN(e, function(n) {
                  return r.size === SN && r.clear(), n
              }),
              r = t.cache;
          return t
      }
      pg.exports = RN
  });
  var hg = l((K5, gg) => {
      var CN = vg(),
          LN = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          NN = /\\(\\)?/g,
          PN = CN(function(e) {
              var t = [];
              return e.charCodeAt(0) === 46 && t.push(""), e.replace(LN, function(r, n, i, o) {
                  t.push(i ? o.replace(NN, "$1") : n || r)
              }), t
          });
      gg.exports = PN
  });
  var ba = l((Y5, mg) => {
      function MN(e, t) {
          for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
          return i
      }
      mg.exports = MN
  });
  var Tg = l((Q5, Ig) => {
      var yg = Yt(),
          qN = ba(),
          DN = Oe(),
          FN = Hr(),
          kN = 1 / 0,
          Eg = yg ? yg.prototype : void 0,
          bg = Eg ? Eg.toString : void 0;

      function _g(e) {
          if (typeof e == "string") return e;
          if (DN(e)) return qN(e, _g) + "";
          if (FN(e)) return bg ? bg.call(e) : "";
          var t = e + "";
          return t == "0" && 1 / e == -kN ? "-0" : t
      }
      Ig.exports = _g
  });
  var xg = l(($5, wg) => {
      var GN = Tg();

      function UN(e) {
          return e == null ? "" : GN(e)
      }
      wg.exports = UN
  });
  var Xr = l((Z5, Og) => {
      var VN = Oe(),
          WN = zn(),
          HN = hg(),
          XN = xg();

      function BN(e, t) {
          return VN(e) ? e : WN(e, t) ? [e] : HN(XN(e))
      }
      Og.exports = BN
  });
  var ar = l((J5, Ag) => {
      var jN = Hr(),
          zN = 1 / 0;

      function KN(e) {
          if (typeof e == "string" || jN(e)) return e;
          var t = e + "";
          return t == "0" && 1 / e == -zN ? "-0" : t
      }
      Ag.exports = KN
  });
  var Kn = l((eB, Sg) => {
      var YN = Xr(),
          QN = ar();

      function $N(e, t) {
          t = YN(t, e);
          for (var r = 0, n = t.length; e != null && r < n;) e = e[QN(t[r++])];
          return r && r == n ? e : void 0
      }
      Sg.exports = $N
  });
  var Yn = l((tB, Rg) => {
      var ZN = Kn();

      function JN(e, t, r) {
          var n = e == null ? void 0 : ZN(e, t);
          return n === void 0 ? r : n
      }
      Rg.exports = JN
  });
  var Lg = l((rB, Cg) => {
      function eP(e, t) {
          return e != null && t in Object(e)
      }
      Cg.exports = eP
  });
  var Pg = l((nB, Ng) => {
      var tP = Xr(),
          rP = kr(),
          nP = Oe(),
          iP = Un(),
          oP = Vn(),
          aP = ar();

      function sP(e, t, r) {
          t = tP(t, e);
          for (var n = -1, i = t.length, o = !1; ++n < i;) {
              var a = aP(t[n]);
              if (!(o = e != null && r(e, a))) break;
              e = e[a]
          }
          return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && oP(i) && iP(a, i) && (nP(e) || rP(e)))
      }
      Ng.exports = sP
  });
  var qg = l((iB, Mg) => {
      var uP = Lg(),
          cP = Pg();

      function lP(e, t) {
          return e != null && cP(e, t, uP)
      }
      Mg.exports = lP
  });
  var Fg = l((oB, Dg) => {
      var fP = ha(),
          dP = Yn(),
          pP = qg(),
          vP = zn(),
          gP = ma(),
          hP = ya(),
          mP = ar(),
          yP = 1,
          EP = 2;

      function bP(e, t) {
          return vP(e) && gP(t) ? hP(mP(e), t) : function(r) {
              var n = dP(r, e);
              return n === void 0 && n === t ? pP(r, e) : fP(t, n, yP | EP)
          }
      }
      Dg.exports = bP
  });
  var Qn = l((aB, kg) => {
      function _P(e) {
          return e
      }
      kg.exports = _P
  });
  var _a = l((sB, Gg) => {
      function IP(e) {
          return function(t) {
              return t?.[e]
          }
      }
      Gg.exports = IP
  });
  var Vg = l((uB, Ug) => {
      var TP = Kn();

      function wP(e) {
          return function(t) {
              return TP(t, e)
          }
      }
      Ug.exports = wP
  });
  var Hg = l((cB, Wg) => {
      var xP = _a(),
          OP = Vg(),
          AP = zn(),
          SP = ar();

      function RP(e) {
          return AP(e) ? xP(SP(e)) : OP(e)
      }
      Wg.exports = RP
  });
  var xt = l((lB, Xg) => {
      var CP = sg(),
          LP = Fg(),
          NP = Qn(),
          PP = Oe(),
          MP = Hg();

      function qP(e) {
          return typeof e == "function" ? e : e == null ? NP : typeof e == "object" ? PP(e) ? LP(e[0], e[1]) : CP(e) : MP(e)
      }
      Xg.exports = qP
  });
  var Ia = l((fB, Bg) => {
      var DP = xt(),
          FP = qt(),
          kP = Wr();

      function GP(e) {
          return function(t, r, n) {
              var i = Object(t);
              if (!FP(t)) {
                  var o = DP(r, 3);
                  t = kP(t), r = function(s) {
                      return o(i[s], s, i)
                  }
              }
              var a = e(t, r, n);
              return a > -1 ? i[o ? t[a] : a] : void 0
          }
      }
      Bg.exports = GP
  });
  var Ta = l((dB, jg) => {
      function UP(e, t, r, n) {
          for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
              if (t(e[o], o, e)) return o;
          return -1
      }
      jg.exports = UP
  });
  var Kg = l((pB, zg) => {
      var VP = /\s/;

      function WP(e) {
          for (var t = e.length; t-- && VP.test(e.charAt(t)););
          return t
      }
      zg.exports = WP
  });
  var Qg = l((vB, Yg) => {
      var HP = Kg(),
          XP = /^\s+/;

      function BP(e) {
          return e && e.slice(0, HP(e) + 1).replace(XP, "")
      }
      Yg.exports = BP
  });
  var $n = l((gB, Jg) => {
      var jP = Qg(),
          $g = ut(),
          zP = Hr(),
          Zg = 0 / 0,
          KP = /^[-+]0x[0-9a-f]+$/i,
          YP = /^0b[01]+$/i,
          QP = /^0o[0-7]+$/i,
          $P = parseInt;

      function ZP(e) {
          if (typeof e == "number") return e;
          if (zP(e)) return Zg;
          if ($g(e)) {
              var t = typeof e.valueOf == "function" ? e.valueOf() : e;
              e = $g(t) ? t + "" : t
          }
          if (typeof e != "string") return e === 0 ? e : +e;
          e = jP(e);
          var r = YP.test(e);
          return r || QP.test(e) ? $P(e.slice(2), r ? 2 : 8) : KP.test(e) ? Zg : +e
      }
      Jg.exports = ZP
  });
  var rh = l((hB, th) => {
      var JP = $n(),
          eh = 1 / 0,
          eM = 17976931348623157e292;

      function tM(e) {
          if (!e) return e === 0 ? e : 0;
          if (e = JP(e), e === eh || e === -eh) {
              var t = e < 0 ? -1 : 1;
              return t * eM
          }
          return e === e ? e : 0
      }
      th.exports = tM
  });
  var wa = l((mB, nh) => {
      var rM = rh();

      function nM(e) {
          var t = rM(e),
              r = t % 1;
          return t === t ? r ? t - r : t : 0
      }
      nh.exports = nM
  });
  var oh = l((yB, ih) => {
      var iM = Ta(),
          oM = xt(),
          aM = wa(),
          sM = Math.max;

      function uM(e, t, r) {
          var n = e == null ? 0 : e.length;
          if (!n) return -1;
          var i = r == null ? 0 : aM(r);
          return i < 0 && (i = sM(n + i, 0)), iM(e, oM(t, 3), i)
      }
      ih.exports = uM
  });
  var xa = l((EB, ah) => {
      var cM = Ia(),
          lM = oh(),
          fM = cM(lM);
      ah.exports = fM
  });
  var ch = {};
  Ge(ch, {
      ELEMENT_MATCHES: () => dM,
      FLEX_PREFIXED: () => Oa,
      IS_BROWSER_ENV: () => Je,
      TRANSFORM_PREFIXED: () => Ot,
      TRANSFORM_STYLE_PREFIXED: () => Jn,
      withBrowser: () => Zn
  });
  var uh, Je, Zn, dM, Oa, Ot, sh, Jn, ei = me(() => {
      "use strict";
      uh = de(xa()), Je = typeof window < "u", Zn = (e, t) => Je ? e() : t, dM = Zn(() => (0, uh.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), Oa = Zn(() => {
          let e = document.createElement("i"),
              t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
              r = "";
          try {
              let {
                  length: n
              } = t;
              for (let i = 0; i < n; i++) {
                  let o = t[i];
                  if (e.style.display = o, e.style.display === o) return o
              }
              return r
          } catch {
              return r
          }
      }, "flex"), Ot = Zn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
              let t = ["Webkit", "Moz", "ms"],
                  r = "Transform",
                  {
                      length: n
                  } = t;
              for (let i = 0; i < n; i++) {
                  let o = t[i] + r;
                  if (e.style[o] !== void 0) return o
              }
          }
          return "transform"
      }, "transform"), sh = Ot.split("transform")[0], Jn = sh ? sh + "TransformStyle" : "transformStyle"
  });
  var Aa = l((bB, vh) => {
      var pM = 4,
          vM = .001,
          gM = 1e-7,
          hM = 10,
          Br = 11,
          ti = 1 / (Br - 1),
          mM = typeof Float32Array == "function";

      function lh(e, t) {
          return 1 - 3 * t + 3 * e
      }

      function fh(e, t) {
          return 3 * t - 6 * e
      }

      function dh(e) {
          return 3 * e
      }

      function ri(e, t, r) {
          return ((lh(t, r) * e + fh(t, r)) * e + dh(t)) * e
      }

      function ph(e, t, r) {
          return 3 * lh(t, r) * e * e + 2 * fh(t, r) * e + dh(t)
      }

      function yM(e, t, r, n, i) {
          var o, a, s = 0;
          do a = t + (r - t) / 2, o = ri(a, n, i) - e, o > 0 ? r = a : t = a; while (Math.abs(o) > gM && ++s < hM);
          return a
      }

      function EM(e, t, r, n) {
          for (var i = 0; i < pM; ++i) {
              var o = ph(t, r, n);
              if (o === 0) return t;
              var a = ri(t, r, n) - e;
              t -= a / o
          }
          return t
      }
      vh.exports = function(t, r, n, i) {
          if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
          var o = mM ? new Float32Array(Br) : new Array(Br);
          if (t !== r || n !== i)
              for (var a = 0; a < Br; ++a) o[a] = ri(a * ti, t, n);

          function s(u) {
              for (var p = 0, E = 1, f = Br - 1; E !== f && o[E] <= u; ++E) p += ti;
              --E;
              var I = (u - o[E]) / (o[E + 1] - o[E]),
                  m = p + I * ti,
                  y = ph(m, t, n);
              return y >= vM ? EM(u, m, t, n) : y === 0 ? m : yM(u, p, p + ti, t, n)
          }
          return function(p) {
              return t === r && n === i ? p : p === 0 ? 0 : p === 1 ? 1 : ri(s(p), r, i)
          }
      }
  });
  var zr = {};
  Ge(zr, {
      bounce: () => tq,
      bouncePast: () => rq,
      ease: () => bM,
      easeIn: () => _M,
      easeInOut: () => TM,
      easeOut: () => IM,
      inBack: () => jM,
      inCirc: () => WM,
      inCubic: () => AM,
      inElastic: () => YM,
      inExpo: () => GM,
      inOutBack: () => KM,
      inOutCirc: () => XM,
      inOutCubic: () => RM,
      inOutElastic: () => $M,
      inOutExpo: () => VM,
      inOutQuad: () => OM,
      inOutQuart: () => NM,
      inOutQuint: () => qM,
      inOutSine: () => kM,
      inQuad: () => wM,
      inQuart: () => CM,
      inQuint: () => PM,
      inSine: () => DM,
      outBack: () => zM,
      outBounce: () => BM,
      outCirc: () => HM,
      outCubic: () => SM,
      outElastic: () => QM,
      outExpo: () => UM,
      outQuad: () => xM,
      outQuart: () => LM,
      outQuint: () => MM,
      outSine: () => FM,
      swingFrom: () => JM,
      swingFromTo: () => ZM,
      swingTo: () => eq
  });

  function wM(e) {
      return Math.pow(e, 2)
  }

  function xM(e) {
      return -(Math.pow(e - 1, 2) - 1)
  }

  function OM(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
  }

  function AM(e) {
      return Math.pow(e, 3)
  }

  function SM(e) {
      return Math.pow(e - 1, 3) + 1
  }

  function RM(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
  }

  function CM(e) {
      return Math.pow(e, 4)
  }

  function LM(e) {
      return -(Math.pow(e - 1, 4) - 1)
  }

  function NM(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
  }

  function PM(e) {
      return Math.pow(e, 5)
  }

  function MM(e) {
      return Math.pow(e - 1, 5) + 1
  }

  function qM(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
  }

  function DM(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1
  }

  function FM(e) {
      return Math.sin(e * (Math.PI / 2))
  }

  function kM(e) {
      return -.5 * (Math.cos(Math.PI * e) - 1)
  }

  function GM(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
  }

  function UM(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
  }

  function VM(e) {
      return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
  }

  function WM(e) {
      return -(Math.sqrt(1 - e * e) - 1)
  }

  function HM(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2))
  }

  function XM(e) {
      return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
  }

  function BM(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
  }

  function jM(e) {
      let t = gt;
      return e * e * ((t + 1) * e - t)
  }

  function zM(e) {
      let t = gt;
      return (e -= 1) * e * ((t + 1) * e + t) + 1
  }

  function KM(e) {
      let t = gt;
      return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
  }

  function YM(e) {
      let t = gt,
          r = 0,
          n = 1;
      return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
  }

  function QM(e) {
      let t = gt,
          r = 0,
          n = 1;
      return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
  }

  function $M(e) {
      let t = gt,
          r = 0,
          n = 1;
      return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
  }

  function ZM(e) {
      let t = gt;
      return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
  }

  function JM(e) {
      let t = gt;
      return e * e * ((t + 1) * e - t)
  }

  function eq(e) {
      let t = gt;
      return (e -= 1) * e * ((t + 1) * e + t) + 1
  }

  function tq(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
  }

  function rq(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
  }
  var jr, gt, bM, _M, IM, TM, Sa = me(() => {
      "use strict";
      jr = de(Aa()), gt = 1.70158, bM = (0, jr.default)(.25, .1, .25, 1), _M = (0, jr.default)(.42, 0, 1, 1), IM = (0, jr.default)(0, 0, .58, 1), TM = (0, jr.default)(.42, 0, .58, 1)
  });
  var hh = {};
  Ge(hh, {
      applyEasing: () => iq,
      createBezierEasing: () => nq,
      optimizeFloat: () => Kr
  });

  function Kr(e, t = 5, r = 10) {
      let n = Math.pow(r, t),
          i = Number(Math.round(e * n) / n);
      return Math.abs(i) > 1e-4 ? i : 0
  }

  function nq(e) {
      return (0, gh.default)(...e)
  }

  function iq(e, t, r) {
      return t === 0 ? 0 : t === 1 ? 1 : Kr(r ? t > 0 ? r(t) : t : t > 0 && e && zr[e] ? zr[e](t) : t)
  }
  var gh, Ra = me(() => {
      "use strict";
      Sa();
      gh = de(Aa())
  });
  var Eh = {};
  Ge(Eh, {
      createElementState: () => yh,
      ixElements: () => yq,
      mergeActionState: () => Ca
  });

  function yh(e, t, r, n, i) {
      let o = r === oq ? (0, sr.getIn)(i, ["config", "target", "objectId"]) : null;
      return (0, sr.mergeIn)(e, [n], {
          id: n,
          ref: t,
          refId: o,
          refType: r
      })
  }

  function Ca(e, t, r, n, i) {
      let o = bq(i);
      return (0, sr.mergeIn)(e, [t, mq, r], n, o)
  }

  function bq(e) {
      let {
          config: t
      } = e;
      return Eq.reduce((r, n) => {
          let i = n[0],
              o = n[1],
              a = t[i],
              s = t[o];
          return a != null && s != null && (r[o] = s), r
      }, {})
  }
  var sr, IB, oq, TB, aq, sq, uq, cq, lq, fq, dq, pq, vq, gq, hq, mh, mq, yq, Eq, bh = me(() => {
      "use strict";
      sr = de(Zt());
      Ue();
      ({
          HTML_ELEMENT: IB,
          PLAIN_OBJECT: oq,
          ABSTRACT_NODE: TB,
          CONFIG_X_VALUE: aq,
          CONFIG_Y_VALUE: sq,
          CONFIG_Z_VALUE: uq,
          CONFIG_VALUE: cq,
          CONFIG_X_UNIT: lq,
          CONFIG_Y_UNIT: fq,
          CONFIG_Z_UNIT: dq,
          CONFIG_UNIT: pq
      } = Ne), {
          IX2_SESSION_STOPPED: vq,
          IX2_INSTANCE_ADDED: gq,
          IX2_ELEMENT_STATE_CHANGED: hq
      } = we, mh = {}, mq = "refState", yq = (e = mh, t = {}) => {
          switch (t.type) {
              case vq:
                  return mh;
              case gq: {
                  let {
                      elementId: r,
                      element: n,
                      origin: i,
                      actionItem: o,
                      refType: a
                  } = t.payload, {
                      actionTypeId: s
                  } = o, u = e;
                  return (0, sr.getIn)(u, [r, n]) !== n && (u = yh(u, n, a, r, o)), Ca(u, r, s, i, o)
              }
              case hq: {
                  let {
                      elementId: r,
                      actionTypeId: n,
                      current: i,
                      actionItem: o
                  } = t.payload;
                  return Ca(e, r, n, i, o)
              }
              default:
                  return e
          }
      };
      Eq = [
          [aq, lq],
          [sq, fq],
          [uq, dq],
          [cq, pq]
      ]
  });
  var _h = l(Ae => {
      "use strict";
      Object.defineProperty(Ae, "__esModule", {
          value: !0
      });
      Ae.renderPlugin = Ae.getPluginOrigin = Ae.getPluginDuration = Ae.getPluginDestination = Ae.getPluginConfig = Ae.createPluginInstance = Ae.clearPlugin = void 0;
      var _q = e => e.value;
      Ae.getPluginConfig = _q;
      var Iq = (e, t) => {
          if (t.config.duration !== "auto") return null;
          let r = parseFloat(e.getAttribute("data-duration"));
          return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
      };
      Ae.getPluginDuration = Iq;
      var Tq = e => e || {
          value: 0
      };
      Ae.getPluginOrigin = Tq;
      var wq = e => ({
          value: e.value
      });
      Ae.getPluginDestination = wq;
      var xq = e => {
          let t = window.Webflow.require("lottie").createInstance(e);
          return t.stop(), t.setSubframe(!0), t
      };
      Ae.createPluginInstance = xq;
      var Oq = (e, t, r) => {
          if (!e) return;
          let n = t[r.actionTypeId].value / 100;
          e.goToFrame(e.frames * n)
      };
      Ae.renderPlugin = Oq;
      var Aq = e => {
          window.Webflow.require("lottie").createInstance(e).stop()
      };
      Ae.clearPlugin = Aq
  });
  var Th = l(Se => {
      "use strict";
      Object.defineProperty(Se, "__esModule", {
          value: !0
      });
      Se.renderPlugin = Se.getPluginOrigin = Se.getPluginDuration = Se.getPluginDestination = Se.getPluginConfig = Se.createPluginInstance = Se.clearPlugin = void 0;
      var Sq = e => document.querySelector(`[data-w-id="${e}"]`),
          Rq = () => window.Webflow.require("spline"),
          Cq = (e, t) => e.filter(r => !t.includes(r)),
          Lq = (e, t) => e.value[t];
      Se.getPluginConfig = Lq;
      var Nq = () => null;
      Se.getPluginDuration = Nq;
      var Ih = Object.freeze({
              positionX: 0,
              positionY: 0,
              positionZ: 0,
              rotationX: 0,
              rotationY: 0,
              rotationZ: 0,
              scaleX: 1,
              scaleY: 1,
              scaleZ: 1
          }),
          Pq = (e, t) => {
              let r = t.config.value,
                  n = Object.keys(r);
              if (e) {
                  let o = Object.keys(e),
                      a = Cq(n, o);
                  return a.length ? a.reduce((u, p) => (u[p] = Ih[p], u), e) : e
              }
              return n.reduce((o, a) => (o[a] = Ih[a], o), {})
          };
      Se.getPluginOrigin = Pq;
      var Mq = e => e.value;
      Se.getPluginDestination = Mq;
      var qq = (e, t) => {
          var r, n;
          let i = t == null || (r = t.config) === null || r === void 0 || (n = r.target) === null || n === void 0 ? void 0 : n.pluginElement;
          return i ? Sq(i) : null
      };
      Se.createPluginInstance = qq;
      var Dq = (e, t, r) => {
          let n = Rq(),
              i = n.getInstance(e),
              o = r.config.target.objectId,
              a = s => {
                  if (!s) throw new Error("Invalid spline app passed to renderSpline");
                  let u = o && s.findObjectById(o);
                  if (!u) return;
                  let {
                      PLUGIN_SPLINE: p
                  } = t;
                  p.positionX != null && (u.position.x = p.positionX), p.positionY != null && (u.position.y = p.positionY), p.positionZ != null && (u.position.z = p.positionZ), p.rotationX != null && (u.rotation.x = p.rotationX), p.rotationY != null && (u.rotation.y = p.rotationY), p.rotationZ != null && (u.rotation.z = p.rotationZ), p.scaleX != null && (u.scale.x = p.scaleX), p.scaleY != null && (u.scale.y = p.scaleY), p.scaleZ != null && (u.scale.z = p.scaleZ)
              };
          i ? a(i.spline) : n.setLoadHandler(e, a)
      };
      Se.renderPlugin = Dq;
      var Fq = () => null;
      Se.clearPlugin = Fq
  });
  var xh = l(xe => {
      "use strict";
      Object.defineProperty(xe, "__esModule", {
          value: !0
      });
      xe.getPluginOrigin = xe.getPluginDuration = xe.getPluginDestination = xe.getPluginConfig = xe.createPluginInstance = xe.clearPlugin = void 0;
      xe.normalizeColor = wh;
      xe.renderPlugin = void 0;

      function wh(e) {
          let t, r, n, i = 1,
              o = e.replace(/\s/g, "").toLowerCase();
          if (o.startsWith("#")) {
              let a = o.substring(1);
              a.length === 3 ? (t = parseInt(a[0] + a[0], 16), r = parseInt(a[1] + a[1], 16), n = parseInt(a[2] + a[2], 16)) : a.length === 6 && (t = parseInt(a.substring(0, 2), 16), r = parseInt(a.substring(2, 4), 16), n = parseInt(a.substring(4, 6), 16))
          } else if (o.startsWith("rgba")) {
              let a = o.match(/rgba\(([^)]+)\)/)[1].split(",");
              t = parseInt(a[0], 10), r = parseInt(a[1], 10), n = parseInt(a[2], 10), i = parseFloat(a[3])
          } else if (o.startsWith("rgb")) {
              let a = o.match(/rgb\(([^)]+)\)/)[1].split(",");
              t = parseInt(a[0], 10), r = parseInt(a[1], 10), n = parseInt(a[2], 10)
          } else if (o.startsWith("hsla")) {
              let a = o.match(/hsla\(([^)]+)\)/)[1].split(","),
                  s = parseFloat(a[0]),
                  u = parseFloat(a[1].replace("%", "")) / 100,
                  p = parseFloat(a[2].replace("%", "")) / 100;
              i = parseFloat(a[3]);
              let E = (1 - Math.abs(2 * p - 1)) * u,
                  f = E * (1 - Math.abs(s / 60 % 2 - 1)),
                  I = p - E / 2,
                  m, y, T;
              s >= 0 && s < 60 ? (m = E, y = f, T = 0) : s >= 60 && s < 120 ? (m = f, y = E, T = 0) : s >= 120 && s < 180 ? (m = 0, y = E, T = f) : s >= 180 && s < 240 ? (m = 0, y = f, T = E) : s >= 240 && s < 300 ? (m = f, y = 0, T = E) : (m = E, y = 0, T = f), t = Math.round((m + I) * 255), r = Math.round((y + I) * 255), n = Math.round((T + I) * 255)
          } else if (o.startsWith("hsl")) {
              let a = o.match(/hsl\(([^)]+)\)/)[1].split(","),
                  s = parseFloat(a[0]),
                  u = parseFloat(a[1].replace("%", "")) / 100,
                  p = parseFloat(a[2].replace("%", "")) / 100,
                  E = (1 - Math.abs(2 * p - 1)) * u,
                  f = E * (1 - Math.abs(s / 60 % 2 - 1)),
                  I = p - E / 2,
                  m, y, T;
              s >= 0 && s < 60 ? (m = E, y = f, T = 0) : s >= 60 && s < 120 ? (m = f, y = E, T = 0) : s >= 120 && s < 180 ? (m = 0, y = E, T = f) : s >= 180 && s < 240 ? (m = 0, y = f, T = E) : s >= 240 && s < 300 ? (m = f, y = 0, T = E) : (m = E, y = 0, T = f), t = Math.round((m + I) * 255), r = Math.round((y + I) * 255), n = Math.round((T + I) * 255)
          }
          return (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`, {
              red: t,
              green: r,
              blue: n,
              alpha: i
          }
      }
      var kq = (e, t) => e.value[t];
      xe.getPluginConfig = kq;
      var Gq = () => null;
      xe.getPluginDuration = Gq;
      var Uq = (e, t) => {
          if (e) return e;
          let r = t.config.value,
              n = t.config.target.objectId,
              i = getComputedStyle(document.documentElement).getPropertyValue(n);
          if (r.size != null) return {
              size: parseInt(i, 10)
          };
          if (r.red != null && r.green != null && r.blue != null) return wh(i)
      };
      xe.getPluginOrigin = Uq;
      var Vq = e => e.value;
      xe.getPluginDestination = Vq;
      var Wq = () => null;
      xe.createPluginInstance = Wq;
      var Hq = (e, t, r) => {
          let n = r.config.target.objectId,
              i = r.config.value.unit,
              {
                  PLUGIN_VARIABLE: o
              } = t,
              {
                  size: a,
                  red: s,
                  green: u,
                  blue: p,
                  alpha: E
              } = o,
              f;
          a != null && (f = a + i), s != null && p != null && u != null && E != null && (f = `rgba(${s}, ${u}, ${p}, ${E})`), f != null && document.documentElement.style.setProperty(n, f)
      };
      xe.renderPlugin = Hq;
      var Xq = (e, t) => {
          let r = t.config.target.objectId;
          document.documentElement.style.removeProperty(r)
      };
      xe.clearPlugin = Xq
  });
  var Oh = l(ni => {
      "use strict";
      var Na = hn().default;
      Object.defineProperty(ni, "__esModule", {
          value: !0
      });
      ni.pluginMethodMap = void 0;
      var La = (Ue(), nt(Nf)),
          Bq = Na(_h()),
          jq = Na(Th()),
          zq = Na(xh()),
          AB = ni.pluginMethodMap = new Map([
              [La.ActionTypeConsts.PLUGIN_LOTTIE, {
                  ...Bq
              }],
              [La.ActionTypeConsts.PLUGIN_SPLINE, {
                  ...jq
              }],
              [La.ActionTypeConsts.PLUGIN_VARIABLE, {
                  ...zq
              }]
          ])
  });
  var Ah = {};
  Ge(Ah, {
      clearPlugin: () => ka,
      createPluginInstance: () => Yq,
      getPluginConfig: () => Ma,
      getPluginDestination: () => Da,
      getPluginDuration: () => Kq,
      getPluginOrigin: () => qa,
      isPluginType: () => Ft,
      renderPlugin: () => Fa
  });

  function Ft(e) {
      return Pa.pluginMethodMap.has(e)
  }
  var Pa, kt, Ma, qa, Kq, Da, Yq, Fa, ka, Ga = me(() => {
      "use strict";
      ei();
      Pa = de(Oh());
      kt = e => t => {
          if (!Je) return () => null;
          let r = Pa.pluginMethodMap.get(t);
          if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
          let n = r[e];
          if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
          return n
      }, Ma = kt("getPluginConfig"), qa = kt("getPluginOrigin"), Kq = kt("getPluginDuration"), Da = kt("getPluginDestination"), Yq = kt("createPluginInstance"), Fa = kt("renderPlugin"), ka = kt("clearPlugin")
  });
  var Rh = l((CB, Sh) => {
      function Qq(e, t) {
          return e == null || e !== e ? t : e
      }
      Sh.exports = Qq
  });
  var Lh = l((LB, Ch) => {
      function $q(e, t, r, n) {
          var i = -1,
              o = e == null ? 0 : e.length;
          for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
          return r
      }
      Ch.exports = $q
  });
  var Ph = l((NB, Nh) => {
      function Zq(e) {
          return function(t, r, n) {
              for (var i = -1, o = Object(t), a = n(t), s = a.length; s--;) {
                  var u = a[e ? s : ++i];
                  if (r(o[u], u, o) === !1) break
              }
              return t
          }
      }
      Nh.exports = Zq
  });
  var qh = l((PB, Mh) => {
      var Jq = Ph(),
          e1 = Jq();
      Mh.exports = e1
  });
  var Ua = l((MB, Dh) => {
      var t1 = qh(),
          r1 = Wr();

      function n1(e, t) {
          return e && t1(e, t, r1)
      }
      Dh.exports = n1
  });
  var kh = l((qB, Fh) => {
      var i1 = qt();

      function o1(e, t) {
          return function(r, n) {
              if (r == null) return r;
              if (!i1(r)) return e(r, n);
              for (var i = r.length, o = t ? i : -1, a = Object(r);
                  (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;);
              return r
          }
      }
      Fh.exports = o1
  });
  var Va = l((DB, Gh) => {
      var a1 = Ua(),
          s1 = kh(),
          u1 = s1(a1);
      Gh.exports = u1
  });
  var Vh = l((FB, Uh) => {
      function c1(e, t, r, n, i) {
          return i(e, function(o, a, s) {
              r = n ? (n = !1, o) : t(r, o, a, s)
          }), r
      }
      Uh.exports = c1
  });
  var Hh = l((kB, Wh) => {
      var l1 = Lh(),
          f1 = Va(),
          d1 = xt(),
          p1 = Vh(),
          v1 = Oe();

      function g1(e, t, r) {
          var n = v1(e) ? l1 : p1,
              i = arguments.length < 3;
          return n(e, d1(t, 4), r, i, f1)
      }
      Wh.exports = g1
  });
  var Bh = l((GB, Xh) => {
      var h1 = Ta(),
          m1 = xt(),
          y1 = wa(),
          E1 = Math.max,
          b1 = Math.min;

      function _1(e, t, r) {
          var n = e == null ? 0 : e.length;
          if (!n) return -1;
          var i = n - 1;
          return r !== void 0 && (i = y1(r), i = r < 0 ? E1(n + i, 0) : b1(i, n - 1)), h1(e, m1(t, 3), i, !0)
      }
      Xh.exports = _1
  });
  var zh = l((UB, jh) => {
      var I1 = Ia(),
          T1 = Bh(),
          w1 = I1(T1);
      jh.exports = w1
  });

  function Kh(e, t) {
      return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
  }

  function O1(e, t) {
      if (Kh(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
      let r = Object.keys(e),
          n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (let i = 0; i < r.length; i++)
          if (!x1.call(t, r[i]) || !Kh(e[r[i]], t[r[i]])) return !1;
      return !0
  }
  var x1, Wa, Yh = me(() => {
      "use strict";
      x1 = Object.prototype.hasOwnProperty;
      Wa = O1
  });
  var dm = {};
  Ge(dm, {
      cleanupHTMLElement: () => TD,
      clearAllStyles: () => ID,
      clearObjectCache: () => H1,
      getActionListProgress: () => xD,
      getAffectedElements: () => za,
      getComputedStyle: () => $1,
      getDestinationValues: () => iD,
      getElementId: () => z1,
      getInstanceId: () => B1,
      getInstanceOrigin: () => eD,
      getItemConfigByKey: () => nD,
      getMaxDurationItemIndex: () => fm,
      getNamespacedParameterId: () => SD,
      getRenderType: () => um,
      getStyleProp: () => oD,
      mediaQueriesEqual: () => CD,
      observeStore: () => Q1,
      reduceListToGroup: () => OD,
      reifyState: () => K1,
      renderHTMLElement: () => aD,
      shallowEqual: () => Wa,
      shouldAllowMediaQuery: () => RD,
      shouldNamespaceEventParameter: () => AD,
      stringifyTarget: () => LD
  });

  function H1() {
      ii.clear()
  }

  function B1() {
      return "i" + X1++
  }

  function z1(e, t) {
      for (let r in e) {
          let n = e[r];
          if (n && n.ref === t) return n.id
      }
      return "e" + j1++
  }

  function K1({
      events: e,
      actionLists: t,
      site: r
  } = {}) {
      let n = (0, ui.default)(e, (a, s) => {
              let {
                  eventTypeId: u
              } = s;
              return a[u] || (a[u] = {}), a[u][s.id] = s, a
          }, {}),
          i = r && r.mediaQueries,
          o = [];
      return i ? o = i.map(a => a.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
          ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: n,
              mediaQueries: i,
              mediaQueryKeys: o
          }
      }
  }

  function Q1({
      store: e,
      select: t,
      onChange: r,
      comparator: n = Y1
  }) {
      let {
          getState: i,
          subscribe: o
      } = e, a = o(u), s = t(i());

      function u() {
          let p = t(i());
          if (p == null) {
              a();
              return
          }
          n(p, s) || (s = p, r(s, e))
      }
      return a
  }

  function Zh(e) {
      let t = typeof e;
      if (t === "string") return {
          id: e
      };
      if (e != null && t === "object") {
          let {
              id: r,
              objectId: n,
              selector: i,
              selectorGuids: o,
              appliesTo: a,
              useEventTarget: s
          } = e;
          return {
              id: r,
              objectId: n,
              selector: i,
              selectorGuids: o,
              appliesTo: a,
              useEventTarget: s
          }
      }
      return {}
  }

  function za({
      config: e,
      event: t,
      eventTarget: r,
      elementRoot: n,
      elementApi: i
  }) {
      if (!i) throw new Error("IX2 missing elementApi");
      let {
          targets: o
      } = e;
      if (Array.isArray(o) && o.length > 0) return o.reduce((C, _) => C.concat(za({
          config: {
              target: _
          },
          event: t,
          eventTarget: r,
          elementRoot: n,
          elementApi: i
      })), []);
      let {
          getValidDocument: a,
          getQuerySelector: s,
          queryDocument: u,
          getChildElements: p,
          getSiblingElements: E,
          matchSelector: f,
          elementContains: I,
          isSiblingNode: m
      } = i, {
          target: y
      } = e;
      if (!y) return [];
      let {
          id: T,
          objectId: R,
          selector: A,
          selectorGuids: P,
          appliesTo: N,
          useEventTarget: D
      } = Zh(y);
      if (R) return [ii.has(R) ? ii.get(R) : ii.set(R, {}).get(R)];
      if (N === zo.PAGE) {
          let C = a(T);
          return C ? [C] : []
      }
      let F = (t?.action?.config?.affectedElements ?? {})[T || A] || {},
          K = !!(F.id || F.selector),
          z, Q, te, j = t && s(Zh(t.target));
      if (K ? (z = F.limitAffectedElements, Q = j, te = s(F)) : Q = te = s({
              id: T,
              selector: A,
              selectorGuids: P
          }), t && D) {
          let C = r && (te || D === !0) ? [r] : u(j);
          if (te) {
              if (D === U1) return u(te).filter(_ => C.some(L => I(_, L)));
              if (D === Qh) return u(te).filter(_ => C.some(L => I(L, _)));
              if (D === $h) return u(te).filter(_ => C.some(L => m(L, _)))
          }
          return C
      }
      return Q == null || te == null ? [] : Je && n ? u(te).filter(C => n.contains(C)) : z === Qh ? u(Q, te) : z === G1 ? p(u(Q)).filter(f(te)) : z === $h ? E(u(Q)).filter(f(te)) : u(te)
  }

  function $1({
      element: e,
      actionItem: t
  }) {
      if (!Je) return {};
      let {
          actionTypeId: r
      } = t;
      switch (r) {
          case dr:
          case pr:
          case vr:
          case gr:
          case li:
              return window.getComputedStyle(e);
          default:
              return {}
      }
  }

  function eD(e, t = {}, r = {}, n, i) {
      let {
          getStyle: o
      } = i, {
          actionTypeId: a
      } = n;
      if (Ft(a)) return qa(a)(t[a], n);
      switch (n.actionTypeId) {
          case cr:
          case lr:
          case fr:
          case Zr:
              return t[n.actionTypeId] || Ka[n.actionTypeId];
          case Jr:
              return Z1(t[n.actionTypeId], n.config.filters);
          case en:
              return J1(t[n.actionTypeId], n.config.fontVariations);
          case om:
              return {
                  value: (0, ht.default)(parseFloat(o(e, ai)), 1)
              };
          case dr: {
              let s = o(e, ct),
                  u = o(e, lt),
                  p, E;
              return n.config.widthUnit === At ? p = Jh.test(s) ? parseFloat(s) : parseFloat(r.width) : p = (0, ht.default)(parseFloat(s), parseFloat(r.width)), n.config.heightUnit === At ? E = Jh.test(u) ? parseFloat(u) : parseFloat(r.height) : E = (0, ht.default)(parseFloat(u), parseFloat(r.height)), {
                  widthValue: p,
                  heightValue: E
              }
          }
          case pr:
          case vr:
          case gr:
              return ED({
                  element: e,
                  actionTypeId: n.actionTypeId,
                  computedStyle: r,
                  getStyle: o
              });
          case li:
              return {
                  value: (0, ht.default)(o(e, si), r.display)
              };
          case W1:
              return t[n.actionTypeId] || {
                  value: 0
              };
          default:
              return
      }
  }

  function iD({
      element: e,
      actionItem: t,
      elementApi: r
  }) {
      if (Ft(t.actionTypeId)) return Da(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
          case cr:
          case lr:
          case fr:
          case Zr: {
              let {
                  xValue: n,
                  yValue: i,
                  zValue: o
              } = t.config;
              return {
                  xValue: n,
                  yValue: i,
                  zValue: o
              }
          }
          case dr: {
              let {
                  getStyle: n,
                  setStyle: i,
                  getProperty: o
              } = r, {
                  widthUnit: a,
                  heightUnit: s
              } = t.config, {
                  widthValue: u,
                  heightValue: p
              } = t.config;
              if (!Je) return {
                  widthValue: u,
                  heightValue: p
              };
              if (a === At) {
                  let E = n(e, ct);
                  i(e, ct, ""), u = o(e, "offsetWidth"), i(e, ct, E)
              }
              if (s === At) {
                  let E = n(e, lt);
                  i(e, lt, ""), p = o(e, "offsetHeight"), i(e, lt, E)
              }
              return {
                  widthValue: u,
                  heightValue: p
              }
          }
          case pr:
          case vr:
          case gr: {
              let {
                  rValue: n,
                  gValue: i,
                  bValue: o,
                  aValue: a
              } = t.config;
              return {
                  rValue: n,
                  gValue: i,
                  bValue: o,
                  aValue: a
              }
          }
          case Jr:
              return t.config.filters.reduce(tD, {});
          case en:
              return t.config.fontVariations.reduce(rD, {});
          default: {
              let {
                  value: n
              } = t.config;
              return {
                  value: n
              }
          }
      }
  }

  function um(e) {
      if (/^TRANSFORM_/.test(e)) return nm;
      if (/^STYLE_/.test(e)) return Ba;
      if (/^GENERAL_/.test(e)) return Xa;
      if (/^PLUGIN_/.test(e)) return im
  }

  function oD(e, t) {
      return e === Ba ? t.replace("STYLE_", "").toLowerCase() : null
  }

  function aD(e, t, r, n, i, o, a, s, u) {
      switch (s) {
          case nm:
              return fD(e, t, r, i, a);
          case Ba:
              return bD(e, t, r, i, o, a);
          case Xa:
              return _D(e, i, a);
          case im: {
              let {
                  actionTypeId: p
              } = i;
              if (Ft(p)) return Fa(p)(u, t, i)
          }
      }
  }

  function fD(e, t, r, n, i) {
      let o = lD.map(s => {
              let u = Ka[s],
                  {
                      xValue: p = u.xValue,
                      yValue: E = u.yValue,
                      zValue: f = u.zValue,
                      xUnit: I = "",
                      yUnit: m = "",
                      zUnit: y = ""
                  } = t[s] || {};
              switch (s) {
                  case cr:
                      return `${R1}(${p}${I}, ${E}${m}, ${f}${y})`;
                  case lr:
                      return `${C1}(${p}${I}, ${E}${m}, ${f}${y})`;
                  case fr:
                      return `${L1}(${p}${I}) ${N1}(${E}${m}) ${P1}(${f}${y})`;
                  case Zr:
                      return `${M1}(${p}${I}, ${E}${m})`;
                  default:
                      return ""
              }
          }).join(" "),
          {
              setStyle: a
          } = i;
      Gt(e, Ot, i), a(e, Ot, o), vD(n, r) && a(e, Jn, q1)
  }

  function dD(e, t, r, n) {
      let i = (0, ui.default)(t, (a, s, u) => `${a} ${u}(${s}${cD(u, r)})`, ""),
          {
              setStyle: o
          } = n;
      Gt(e, Yr, n), o(e, Yr, i)
  }

  function pD(e, t, r, n) {
      let i = (0, ui.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`), a), []).join(", "),
          {
              setStyle: o
          } = n;
      Gt(e, Qr, n), o(e, Qr, i)
  }

  function vD({
      actionTypeId: e
  }, {
      xValue: t,
      yValue: r,
      zValue: n
  }) {
      return e === cr && n !== void 0 || e === lr && n !== void 0 || e === fr && (t !== void 0 || r !== void 0)
  }

  function yD(e, t) {
      let r = e.exec(t);
      return r ? r[1] : ""
  }

  function ED({
      element: e,
      actionTypeId: t,
      computedStyle: r,
      getStyle: n
  }) {
      let i = ja[t],
          o = n(e, i),
          a = hD.test(o) ? o : r[i],
          s = yD(mD, a).split($r);
      return {
          rValue: (0, ht.default)(parseInt(s[0], 10), 255),
          gValue: (0, ht.default)(parseInt(s[1], 10), 255),
          bValue: (0, ht.default)(parseInt(s[2], 10), 255),
          aValue: (0, ht.default)(parseFloat(s[3]), 1)
      }
  }

  function bD(e, t, r, n, i, o) {
      let {
          setStyle: a
      } = o;
      switch (n.actionTypeId) {
          case dr: {
              let {
                  widthUnit: s = "",
                  heightUnit: u = ""
              } = n.config, {
                  widthValue: p,
                  heightValue: E
              } = r;
              p !== void 0 && (s === At && (s = "px"), Gt(e, ct, o), a(e, ct, p + s)), E !== void 0 && (u === At && (u = "px"), Gt(e, lt, o), a(e, lt, E + u));
              break
          }
          case Jr: {
              dD(e, r, n.config, o);
              break
          }
          case en: {
              pD(e, r, n.config, o);
              break
          }
          case pr:
          case vr:
          case gr: {
              let s = ja[n.actionTypeId],
                  u = Math.round(r.rValue),
                  p = Math.round(r.gValue),
                  E = Math.round(r.bValue),
                  f = r.aValue;
              Gt(e, s, o), a(e, s, f >= 1 ? `rgb(${u},${p},${E})` : `rgba(${u},${p},${E},${f})`);
              break
          }
          default: {
              let {
                  unit: s = ""
              } = n.config;
              Gt(e, i, o), a(e, i, r.value + s);
              break
          }
      }
  }

  function _D(e, t, r) {
      let {
          setStyle: n
      } = r;
      switch (t.actionTypeId) {
          case li: {
              let {
                  value: i
              } = t.config;
              i === D1 && Je ? n(e, si, Oa) : n(e, si, i);
              return
          }
      }
  }

  function Gt(e, t, r) {
      if (!Je) return;
      let n = sm[t];
      if (!n) return;
      let {
          getStyle: i,
          setStyle: o
      } = r, a = i(e, ur);
      if (!a) {
          o(e, ur, n);
          return
      }
      let s = a.split($r).map(am);
      s.indexOf(n) === -1 && o(e, ur, s.concat(n).join($r))
  }

  function cm(e, t, r) {
      if (!Je) return;
      let n = sm[t];
      if (!n) return;
      let {
          getStyle: i,
          setStyle: o
      } = r, a = i(e, ur);
      !a || a.indexOf(n) === -1 || o(e, ur, a.split($r).map(am).filter(s => s !== n).join($r))
  }

  function ID({
      store: e,
      elementApi: t
  }) {
      let {
          ixData: r
      } = e.getState(), {
          events: n = {},
          actionLists: i = {}
      } = r;
      Object.keys(n).forEach(o => {
          let a = n[o],
              {
                  config: s
              } = a.action,
              {
                  actionListId: u
              } = s,
              p = i[u];
          p && em({
              actionList: p,
              event: a,
              elementApi: t
          })
      }), Object.keys(i).forEach(o => {
          em({
              actionList: i[o],
              elementApi: t
          })
      })
  }

  function em({
      actionList: e = {},
      event: t,
      elementApi: r
  }) {
      let {
          actionItemGroups: n,
          continuousParameterGroups: i
      } = e;
      n && n.forEach(o => {
          tm({
              actionGroup: o,
              event: t,
              elementApi: r
          })
      }), i && i.forEach(o => {
          let {
              continuousActionGroups: a
          } = o;
          a.forEach(s => {
              tm({
                  actionGroup: s,
                  event: t,
                  elementApi: r
              })
          })
      })
  }

  function tm({
      actionGroup: e,
      event: t,
      elementApi: r
  }) {
      let {
          actionItems: n
      } = e;
      n.forEach(i => {
          let {
              actionTypeId: o,
              config: a
          } = i, s;
          Ft(o) ? s = u => ka(o)(u, i) : s = lm({
              effect: wD,
              actionTypeId: o,
              elementApi: r
          }), za({
              config: a,
              event: t,
              elementApi: r
          }).forEach(s)
      })
  }

  function TD(e, t, r) {
      let {
          setStyle: n,
          getStyle: i
      } = r, {
          actionTypeId: o
      } = t;
      if (o === dr) {
          let {
              config: a
          } = t;
          a.widthUnit === At && n(e, ct, ""), a.heightUnit === At && n(e, lt, "")
      }
      i(e, ur) && lm({
          effect: cm,
          actionTypeId: o,
          elementApi: r
      })(e)
  }

  function wD(e, t, r) {
      let {
          setStyle: n
      } = r;
      cm(e, t, r), n(e, t, ""), t === Ot && n(e, Jn, "")
  }

  function fm(e) {
      let t = 0,
          r = 0;
      return e.forEach((n, i) => {
          let {
              config: o
          } = n, a = o.delay + o.duration;
          a >= t && (t = a, r = i)
      }), r
  }

  function xD(e, t) {
      let {
          actionItemGroups: r,
          useFirstGroupAsInitialState: n
      } = e, {
          actionItem: i,
          verboseTimeElapsed: o = 0
      } = t, a = 0, s = 0;
      return r.forEach((u, p) => {
          if (n && p === 0) return;
          let {
              actionItems: E
          } = u, f = E[fm(E)], {
              config: I,
              actionTypeId: m
          } = f;
          i.id === f.id && (s = a + o);
          let y = um(m) === Xa ? 0 : I.duration;
          a += I.delay + y
      }), a > 0 ? Kr(s / a) : 0
  }

  function OD({
      actionList: e,
      actionItemId: t,
      rawData: r
  }) {
      let {
          actionItemGroups: n,
          continuousParameterGroups: i
      } = e, o = [], a = s => (o.push((0, ci.mergeIn)(s, ["config"], {
          delay: 0,
          duration: 0
      })), s.id === t);
      return n && n.some(({
          actionItems: s
      }) => s.some(a)), i && i.some(s => {
          let {
              continuousActionGroups: u
          } = s;
          return u.some(({
              actionItems: p
          }) => p.some(a))
      }), (0, ci.setIn)(r, ["actionLists"], {
          [e.id]: {
              id: e.id,
              actionItemGroups: [{
                  actionItems: o
              }]
          }
      })
  }

  function AD(e, {
      basedOn: t
  }) {
      return e === Ze.SCROLLING_IN_VIEW && (t === st.ELEMENT || t == null) || e === Ze.MOUSE_MOVE && t === st.ELEMENT
  }

  function SD(e, t) {
      return e + V1 + t
  }

  function RD(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1
  }

  function CD(e, t) {
      return Wa(e && e.sort(), t && t.sort())
  }

  function LD(e) {
      if (typeof e == "string") return e;
      if (e.pluginElement && e.objectId) return e.pluginElement + Ha + e.objectId;
      if (e.objectId) return e.objectId;
      let {
          id: t = "",
          selector: r = "",
          useEventTarget: n = ""
      } = e;
      return t + Ha + r + Ha + n
  }
  var ht, ui, oi, ci, A1, S1, R1, C1, L1, N1, P1, M1, q1, D1, ai, Yr, Qr, ct, lt, rm, F1, k1, Qh, G1, $h, U1, si, ur, At, $r, V1, Ha, nm, Xa, Ba, im, cr, lr, fr, Zr, om, Jr, en, dr, pr, vr, gr, li, W1, am, ja, sm, ii, X1, j1, Y1, Jh, Z1, J1, tD, rD, nD, Ka, sD, uD, cD, lD, gD, hD, mD, lm, pm = me(() => {
      "use strict";
      ht = de(Rh()), ui = de(Hh()), oi = de(zh()), ci = de(Zt());
      Ue();
      Yh();
      Ra();
      Ga();
      ei();
      ({
          BACKGROUND: A1,
          TRANSFORM: S1,
          TRANSLATE_3D: R1,
          SCALE_3D: C1,
          ROTATE_X: L1,
          ROTATE_Y: N1,
          ROTATE_Z: P1,
          SKEW: M1,
          PRESERVE_3D: q1,
          FLEX: D1,
          OPACITY: ai,
          FILTER: Yr,
          FONT_VARIATION_SETTINGS: Qr,
          WIDTH: ct,
          HEIGHT: lt,
          BACKGROUND_COLOR: rm,
          BORDER_COLOR: F1,
          COLOR: k1,
          CHILDREN: Qh,
          IMMEDIATE_CHILDREN: G1,
          SIBLINGS: $h,
          PARENT: U1,
          DISPLAY: si,
          WILL_CHANGE: ur,
          AUTO: At,
          COMMA_DELIMITER: $r,
          COLON_DELIMITER: V1,
          BAR_DELIMITER: Ha,
          RENDER_TRANSFORM: nm,
          RENDER_GENERAL: Xa,
          RENDER_STYLE: Ba,
          RENDER_PLUGIN: im
      } = Ne), {
          TRANSFORM_MOVE: cr,
          TRANSFORM_SCALE: lr,
          TRANSFORM_ROTATE: fr,
          TRANSFORM_SKEW: Zr,
          STYLE_OPACITY: om,
          STYLE_FILTER: Jr,
          STYLE_FONT_VARIATION: en,
          STYLE_SIZE: dr,
          STYLE_BACKGROUND_COLOR: pr,
          STYLE_BORDER: vr,
          STYLE_TEXT_COLOR: gr,
          GENERAL_DISPLAY: li,
          OBJECT_VALUE: W1
      } = Xe, am = e => e.trim(), ja = Object.freeze({
          [pr]: rm,
          [vr]: F1,
          [gr]: k1
      }), sm = Object.freeze({
          [Ot]: S1,
          [rm]: A1,
          [ai]: ai,
          [Yr]: Yr,
          [ct]: ct,
          [lt]: lt,
          [Qr]: Qr
      }), ii = new Map;
      X1 = 1;
      j1 = 1;
      Y1 = (e, t) => e === t;
      Jh = /px/, Z1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = sD[n.type]), r), e || {}), J1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = uD[n.type] || n.defaultValue || 0), r), e || {});
      tD = (e, t) => (t && (e[t.type] = t.value || 0), e), rD = (e, t) => (t && (e[t.type] = t.value || 0), e), nD = (e, t, r) => {
          if (Ft(e)) return Ma(e)(r, t);
          switch (e) {
              case Jr: {
                  let n = (0, oi.default)(r.filters, ({
                      type: i
                  }) => i === t);
                  return n ? n.value : 0
              }
              case en: {
                  let n = (0, oi.default)(r.fontVariations, ({
                      type: i
                  }) => i === t);
                  return n ? n.value : 0
              }
              default:
                  return r[t]
          }
      };
      Ka = {
          [cr]: Object.freeze({
              xValue: 0,
              yValue: 0,
              zValue: 0
          }),
          [lr]: Object.freeze({
              xValue: 1,
              yValue: 1,
              zValue: 1
          }),
          [fr]: Object.freeze({
              xValue: 0,
              yValue: 0,
              zValue: 0
          }),
          [Zr]: Object.freeze({
              xValue: 0,
              yValue: 0
          })
      }, sD = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100
      }), uD = Object.freeze({
          wght: 0,
          opsz: 0,
          wdth: 0,
          slnt: 0
      }), cD = (e, t) => {
          let r = (0, oi.default)(t.filters, ({
              type: n
          }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
              case "blur":
                  return "px";
              case "hue-rotate":
                  return "deg";
              default:
                  return "%"
          }
      }, lD = Object.keys(Ka);
      gD = "\\(([^)]+)\\)", hD = /^rgb/, mD = RegExp(`rgba?${gD}`);
      lm = ({
          effect: e,
          actionTypeId: t,
          elementApi: r
      }) => n => {
          switch (t) {
              case cr:
              case lr:
              case fr:
              case Zr:
                  e(n, Ot, r);
                  break;
              case Jr:
                  e(n, Yr, r);
                  break;
              case en:
                  e(n, Qr, r);
                  break;
              case om:
                  e(n, ai, r);
                  break;
              case dr:
                  e(n, ct, r), e(n, lt, r);
                  break;
              case pr:
              case vr:
              case gr:
                  e(n, ja[t], r);
                  break;
              case li:
                  e(n, si, r);
                  break
          }
      }
  });
  var Ut = l(De => {
      "use strict";
      var hr = hn().default;
      Object.defineProperty(De, "__esModule", {
          value: !0
      });
      De.IX2VanillaUtils = De.IX2VanillaPlugins = De.IX2ElementsReducer = De.IX2Easings = De.IX2EasingUtils = De.IX2BrowserSupport = void 0;
      var ND = hr((ei(), nt(ch)));
      De.IX2BrowserSupport = ND;
      var PD = hr((Sa(), nt(zr)));
      De.IX2Easings = PD;
      var MD = hr((Ra(), nt(hh)));
      De.IX2EasingUtils = MD;
      var qD = hr((bh(), nt(Eh)));
      De.IX2ElementsReducer = qD;
      var DD = hr((Ga(), nt(Ah)));
      De.IX2VanillaPlugins = DD;
      var FD = hr((pm(), nt(dm)));
      De.IX2VanillaUtils = FD
  });
  var di, mt, kD, GD, UD, VD, WD, HD, fi, vm, XD, BD, Ya, jD, zD, KD, YD, gm, hm = me(() => {
      "use strict";
      Ue();
      di = de(Ut()), mt = de(Zt()), {
          IX2_RAW_DATA_IMPORTED: kD,
          IX2_SESSION_STOPPED: GD,
          IX2_INSTANCE_ADDED: UD,
          IX2_INSTANCE_STARTED: VD,
          IX2_INSTANCE_REMOVED: WD,
          IX2_ANIMATION_FRAME_CHANGED: HD
      } = we, {
          optimizeFloat: fi,
          applyEasing: vm,
          createBezierEasing: XD
      } = di.IX2EasingUtils, {
          RENDER_GENERAL: BD
      } = Ne, {
          getItemConfigByKey: Ya,
          getRenderType: jD,
          getStyleProp: zD
      } = di.IX2VanillaUtils, KD = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: p,
              skipMotion: E,
              skipToValue: f
          } = e, {
              parameters: I
          } = t.payload, m = Math.max(1 - a, .01), y = I[n];
          y == null && (m = 1, y = s);
          let T = Math.max(y, 0) || 0,
              R = fi(T - r),
              A = E ? f : fi(r + R * m),
              P = A * 100;
          if (A === r && e.current) return e;
          let N, D, G, F;
          for (let z = 0, {
                  length: Q
              } = i; z < Q; z++) {
              let {
                  keyframe: te,
                  actionItems: j
              } = i[z];
              if (z === 0 && (N = j[0]), P >= te) {
                  N = j[0];
                  let C = i[z + 1],
                      _ = C && P !== te;
                  D = _ ? C.actionItems[0] : null, _ && (G = te / 100, F = (C.keyframe - te) / 100)
              }
          }
          let K = {};
          if (N && !D)
              for (let z = 0, {
                      length: Q
                  } = o; z < Q; z++) {
                  let te = o[z];
                  K[te] = Ya(u, te, N.config)
              } else if (N && D && G !== void 0 && F !== void 0) {
                  let z = (A - G) / F,
                      Q = N.config.easing,
                      te = vm(Q, z, p);
                  for (let j = 0, {
                          length: C
                      } = o; j < C; j++) {
                      let _ = o[j],
                          L = Ya(u, _, N.config),
                          ee = (Ya(u, _, D.config) - L) * te + L;
                      K[_] = ee
                  }
              } return (0, mt.merge)(e, {
              position: A,
              current: K
          })
      }, YD = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: p,
              destinationKeys: E,
              pluginDuration: f,
              instanceDelay: I,
              customEasingFn: m,
              skipMotion: y
          } = e, T = u.config.easing, {
              duration: R,
              delay: A
          } = u.config;
          f != null && (R = f), A = I ?? A, a === BD ? R = 0 : (o || y) && (R = A = 0);
          let {
              now: P
          } = t.payload;
          if (r && n) {
              let N = P - (i + A);
              if (s) {
                  let z = P - i,
                      Q = R + A,
                      te = fi(Math.min(Math.max(0, z / Q), 1));
                  e = (0, mt.set)(e, "verboseTimeElapsed", Q * te)
              }
              if (N < 0) return e;
              let D = fi(Math.min(Math.max(0, N / R), 1)),
                  G = vm(T, D, m),
                  F = {},
                  K = null;
              return E.length && (K = E.reduce((z, Q) => {
                  let te = p[Q],
                      j = parseFloat(n[Q]) || 0,
                      _ = (parseFloat(te) - j) * G + j;
                  return z[Q] = _, z
              }, {})), F.current = K, F.position = D, D === 1 && (F.active = !1, F.complete = !0), (0, mt.merge)(e, F)
          }
          return e
      }, gm = (e = Object.freeze({}), t) => {
          switch (t.type) {
              case kD:
                  return t.payload.ixInstances || Object.freeze({});
              case GD:
                  return Object.freeze({});
              case UD: {
                  let {
                      instanceId: r,
                      elementId: n,
                      actionItem: i,
                      eventId: o,
                      eventTarget: a,
                      eventStateKey: s,
                      actionListId: u,
                      groupIndex: p,
                      isCarrier: E,
                      origin: f,
                      destination: I,
                      immediate: m,
                      verbose: y,
                      continuous: T,
                      parameterId: R,
                      actionGroups: A,
                      smoothing: P,
                      restingValue: N,
                      pluginInstance: D,
                      pluginDuration: G,
                      instanceDelay: F,
                      skipMotion: K,
                      skipToValue: z
                  } = t.payload, {
                      actionTypeId: Q
                  } = i, te = jD(Q), j = zD(te, Q), C = Object.keys(I).filter(L => I[L] != null && typeof I[L] != "string"), {
                      easing: _
                  } = i.config;
                  return (0, mt.set)(e, r, {
                      id: r,
                      elementId: n,
                      active: !1,
                      position: 0,
                      start: 0,
                      origin: f,
                      destination: I,
                      destinationKeys: C,
                      immediate: m,
                      verbose: y,
                      current: null,
                      actionItem: i,
                      actionTypeId: Q,
                      eventId: o,
                      eventTarget: a,
                      eventStateKey: s,
                      actionListId: u,
                      groupIndex: p,
                      renderType: te,
                      isCarrier: E,
                      styleProp: j,
                      continuous: T,
                      parameterId: R,
                      actionGroups: A,
                      smoothing: P,
                      restingValue: N,
                      pluginInstance: D,
                      pluginDuration: G,
                      instanceDelay: F,
                      skipMotion: K,
                      skipToValue: z,
                      customEasingFn: Array.isArray(_) && _.length === 4 ? XD(_) : void 0
                  })
              }
              case VD: {
                  let {
                      instanceId: r,
                      time: n
                  } = t.payload;
                  return (0, mt.mergeIn)(e, [r], {
                      active: !0,
                      complete: !1,
                      start: n
                  })
              }
              case WD: {
                  let {
                      instanceId: r
                  } = t.payload;
                  if (!e[r]) return e;
                  let n = {},
                      i = Object.keys(e),
                      {
                          length: o
                      } = i;
                  for (let a = 0; a < o; a++) {
                      let s = i[a];
                      s !== r && (n[s] = e[s])
                  }
                  return n
              }
              case HD: {
                  let r = e,
                      n = Object.keys(e),
                      {
                          length: i
                      } = n;
                  for (let o = 0; o < i; o++) {
                      let a = n[o],
                          s = e[a],
                          u = s.continuous ? KD : YD;
                      r = (0, mt.set)(r, a, u(s, t))
                  }
                  return r
              }
              default:
                  return e
          }
      }
  });
  var QD, $D, ZD, mm, ym = me(() => {
      "use strict";
      Ue();
      ({
          IX2_RAW_DATA_IMPORTED: QD,
          IX2_SESSION_STOPPED: $D,
          IX2_PARAMETER_CHANGED: ZD
      } = we), mm = (e = {}, t) => {
          switch (t.type) {
              case QD:
                  return t.payload.ixParameters || {};
              case $D:
                  return {};
              case ZD: {
                  let {
                      key: r,
                      value: n
                  } = t.payload;
                  return e[r] = n, e
              }
              default:
                  return e
          }
      }
  });
  var _m = {};
  Ge(_m, {
      default: () => eF
  });
  var Em, bm, JD, eF, Im = me(() => {
      "use strict";
      Em = de(jo());
      Mf();
      td();
      id();
      bm = de(Ut());
      hm();
      ym();
      ({
          ixElements: JD
      } = bm.IX2ElementsReducer), eF = (0, Em.combineReducers)({
          ixData: Pf,
          ixRequest: ed,
          ixSession: nd,
          ixElements: JD,
          ixInstances: gm,
          ixParameters: mm
      })
  });
  var wm = l((nj, Tm) => {
      var tF = Tt(),
          rF = Oe(),
          nF = vt(),
          iF = "[object String]";

      function oF(e) {
          return typeof e == "string" || !rF(e) && nF(e) && tF(e) == iF
      }
      Tm.exports = oF
  });
  var Om = l((ij, xm) => {
      var aF = _a(),
          sF = aF("length");
      xm.exports = sF
  });
  var Sm = l((oj, Am) => {
      var uF = "\\ud800-\\udfff",
          cF = "\\u0300-\\u036f",
          lF = "\\ufe20-\\ufe2f",
          fF = "\\u20d0-\\u20ff",
          dF = cF + lF + fF,
          pF = "\\ufe0e\\ufe0f",
          vF = "\\u200d",
          gF = RegExp("[" + vF + uF + dF + pF + "]");

      function hF(e) {
          return gF.test(e)
      }
      Am.exports = hF
  });
  var Fm = l((aj, Dm) => {
      var Cm = "\\ud800-\\udfff",
          mF = "\\u0300-\\u036f",
          yF = "\\ufe20-\\ufe2f",
          EF = "\\u20d0-\\u20ff",
          bF = mF + yF + EF,
          _F = "\\ufe0e\\ufe0f",
          IF = "[" + Cm + "]",
          Qa = "[" + bF + "]",
          $a = "\\ud83c[\\udffb-\\udfff]",
          TF = "(?:" + Qa + "|" + $a + ")",
          Lm = "[^" + Cm + "]",
          Nm = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          Pm = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          wF = "\\u200d",
          Mm = TF + "?",
          qm = "[" + _F + "]?",
          xF = "(?:" + wF + "(?:" + [Lm, Nm, Pm].join("|") + ")" + qm + Mm + ")*",
          OF = qm + Mm + xF,
          AF = "(?:" + [Lm + Qa + "?", Qa, Nm, Pm, IF].join("|") + ")",
          Rm = RegExp($a + "(?=" + $a + ")|" + AF + OF, "g");

      function SF(e) {
          for (var t = Rm.lastIndex = 0; Rm.test(e);) ++t;
          return t
      }
      Dm.exports = SF
  });
  var Gm = l((sj, km) => {
      var RF = Om(),
          CF = Sm(),
          LF = Fm();

      function NF(e) {
          return CF(e) ? LF(e) : RF(e)
      }
      km.exports = NF
  });
  var Vm = l((uj, Um) => {
      var PF = Xn(),
          MF = Bn(),
          qF = qt(),
          DF = wm(),
          FF = Gm(),
          kF = "[object Map]",
          GF = "[object Set]";

      function UF(e) {
          if (e == null) return 0;
          if (qF(e)) return DF(e) ? FF(e) : e.length;
          var t = MF(e);
          return t == kF || t == GF ? e.size : PF(e).length
      }
      Um.exports = UF
  });
  var Hm = l((cj, Wm) => {
      var VF = "Expected a function";

      function WF(e) {
          if (typeof e != "function") throw new TypeError(VF);
          return function() {
              var t = arguments;
              switch (t.length) {
                  case 0:
                      return !e.call(this);
                  case 1:
                      return !e.call(this, t[0]);
                  case 2:
                      return !e.call(this, t[0], t[1]);
                  case 3:
                      return !e.call(this, t[0], t[1], t[2])
              }
              return !e.apply(this, t)
          }
      }
      Wm.exports = WF
  });
  var Za = l((lj, Xm) => {
      var HF = wt(),
          XF = function() {
              try {
                  var e = HF(Object, "defineProperty");
                  return e({}, "", {}), e
              } catch {}
          }();
      Xm.exports = XF
  });
  var Ja = l((fj, jm) => {
      var Bm = Za();

      function BF(e, t, r) {
          t == "__proto__" && Bm ? Bm(e, t, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0
          }) : e[t] = r
      }
      jm.exports = BF
  });
  var Km = l((dj, zm) => {
      var jF = Ja(),
          zF = Mn(),
          KF = Object.prototype,
          YF = KF.hasOwnProperty;

      function QF(e, t, r) {
          var n = e[t];
          (!(YF.call(e, t) && zF(n, r)) || r === void 0 && !(t in e)) && jF(e, t, r)
      }
      zm.exports = QF
  });
  var $m = l((pj, Qm) => {
      var $F = Km(),
          ZF = Xr(),
          JF = Un(),
          Ym = ut(),
          e2 = ar();

      function t2(e, t, r, n) {
          if (!Ym(e)) return e;
          t = ZF(t, e);
          for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o;) {
              var u = e2(t[i]),
                  p = r;
              if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
              if (i != a) {
                  var E = s[u];
                  p = n ? n(E, u, s) : void 0, p === void 0 && (p = Ym(E) ? E : JF(t[i + 1]) ? [] : {})
              }
              $F(s, u, p), s = s[u]
          }
          return e
      }
      Qm.exports = t2
  });
  var Jm = l((vj, Zm) => {
      var r2 = Kn(),
          n2 = $m(),
          i2 = Xr();

      function o2(e, t, r) {
          for (var n = -1, i = t.length, o = {}; ++n < i;) {
              var a = t[n],
                  s = r2(e, a);
              r(s, a) && n2(o, i2(a, e), s)
          }
          return o
      }
      Zm.exports = o2
  });
  var ty = l((gj, ey) => {
      var a2 = kn(),
          s2 = Po(),
          u2 = aa(),
          c2 = oa(),
          l2 = Object.getOwnPropertySymbols,
          f2 = l2 ? function(e) {
              for (var t = []; e;) a2(t, u2(e)), e = s2(e);
              return t
          } : c2;
      ey.exports = f2
  });
  var ny = l((hj, ry) => {
      function d2(e) {
          var t = [];
          if (e != null)
              for (var r in Object(e)) t.push(r);
          return t
      }
      ry.exports = d2
  });
  var oy = l((mj, iy) => {
      var p2 = ut(),
          v2 = Hn(),
          g2 = ny(),
          h2 = Object.prototype,
          m2 = h2.hasOwnProperty;

      function y2(e) {
          if (!p2(e)) return g2(e);
          var t = v2(e),
              r = [];
          for (var n in e) n == "constructor" && (t || !m2.call(e, n)) || r.push(n);
          return r
      }
      iy.exports = y2
  });
  var sy = l((yj, ay) => {
      var E2 = ua(),
          b2 = oy(),
          _2 = qt();

      function I2(e) {
          return _2(e) ? E2(e, !0) : b2(e)
      }
      ay.exports = I2
  });
  var cy = l((Ej, uy) => {
      var T2 = ia(),
          w2 = ty(),
          x2 = sy();

      function O2(e) {
          return T2(e, x2, w2)
      }
      uy.exports = O2
  });
  var fy = l((bj, ly) => {
      var A2 = ba(),
          S2 = xt(),
          R2 = Jm(),
          C2 = cy();

      function L2(e, t) {
          if (e == null) return {};
          var r = A2(C2(e), function(n) {
              return [n]
          });
          return t = S2(t), R2(e, r, function(n, i) {
              return t(n, i[0])
          })
      }
      ly.exports = L2
  });
  var py = l((_j, dy) => {
      var N2 = xt(),
          P2 = Hm(),
          M2 = fy();

      function q2(e, t) {
          return M2(e, P2(N2(t)))
      }
      dy.exports = q2
  });
  var gy = l((Ij, vy) => {
      var D2 = Xn(),
          F2 = Bn(),
          k2 = kr(),
          G2 = Oe(),
          U2 = qt(),
          V2 = Gn(),
          W2 = Hn(),
          H2 = Wn(),
          X2 = "[object Map]",
          B2 = "[object Set]",
          j2 = Object.prototype,
          z2 = j2.hasOwnProperty;

      function K2(e) {
          if (e == null) return !0;
          if (U2(e) && (G2(e) || typeof e == "string" || typeof e.splice == "function" || V2(e) || H2(e) || k2(e))) return !e.length;
          var t = F2(e);
          if (t == X2 || t == B2) return !e.size;
          if (W2(e)) return !D2(e).length;
          for (var r in e)
              if (z2.call(e, r)) return !1;
          return !0
      }
      vy.exports = K2
  });
  var my = l((Tj, hy) => {
      var Y2 = Ja(),
          Q2 = Ua(),
          $2 = xt();

      function Z2(e, t) {
          var r = {};
          return t = $2(t, 3), Q2(e, function(n, i, o) {
              Y2(r, i, t(n, i, o))
          }), r
      }
      hy.exports = Z2
  });
  var Ey = l((wj, yy) => {
      function J2(e, t) {
          for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
          return e
      }
      yy.exports = J2
  });
  var _y = l((xj, by) => {
      var ek = Qn();

      function tk(e) {
          return typeof e == "function" ? e : ek
      }
      by.exports = tk
  });
  var Ty = l((Oj, Iy) => {
      var rk = Ey(),
          nk = Va(),
          ik = _y(),
          ok = Oe();

      function ak(e, t) {
          var r = ok(e) ? rk : nk;
          return r(e, ik(t))
      }
      Iy.exports = ak
  });
  var xy = l((Aj, wy) => {
      var sk = $e(),
          uk = function() {
              return sk.Date.now()
          };
      wy.exports = uk
  });
  var Sy = l((Sj, Ay) => {
      var ck = ut(),
          es = xy(),
          Oy = $n(),
          lk = "Expected a function",
          fk = Math.max,
          dk = Math.min;

      function pk(e, t, r) {
          var n, i, o, a, s, u, p = 0,
              E = !1,
              f = !1,
              I = !0;
          if (typeof e != "function") throw new TypeError(lk);
          t = Oy(t) || 0, ck(r) && (E = !!r.leading, f = "maxWait" in r, o = f ? fk(Oy(r.maxWait) || 0, t) : o, I = "trailing" in r ? !!r.trailing : I);

          function m(F) {
              var K = n,
                  z = i;
              return n = i = void 0, p = F, a = e.apply(z, K), a
          }

          function y(F) {
              return p = F, s = setTimeout(A, t), E ? m(F) : a
          }

          function T(F) {
              var K = F - u,
                  z = F - p,
                  Q = t - K;
              return f ? dk(Q, o - z) : Q
          }

          function R(F) {
              var K = F - u,
                  z = F - p;
              return u === void 0 || K >= t || K < 0 || f && z >= o
          }

          function A() {
              var F = es();
              if (R(F)) return P(F);
              s = setTimeout(A, T(F))
          }

          function P(F) {
              return s = void 0, I && n ? m(F) : (n = i = void 0, a)
          }

          function N() {
              s !== void 0 && clearTimeout(s), p = 0, n = u = i = s = void 0
          }

          function D() {
              return s === void 0 ? a : P(es())
          }

          function G() {
              var F = es(),
                  K = R(F);
              if (n = arguments, i = this, u = F, K) {
                  if (s === void 0) return y(u);
                  if (f) return clearTimeout(s), s = setTimeout(A, t), m(u)
              }
              return s === void 0 && (s = setTimeout(A, t)), a
          }
          return G.cancel = N, G.flush = D, G
      }
      Ay.exports = pk
  });
  var Cy = l((Rj, Ry) => {
      var vk = Sy(),
          gk = ut(),
          hk = "Expected a function";

      function mk(e, t, r) {
          var n = !0,
              i = !0;
          if (typeof e != "function") throw new TypeError(hk);
          return gk(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), vk(e, t, {
              leading: n,
              maxWait: t,
              trailing: i
          })
      }
      Ry.exports = mk
  });
  var Ny = {};
  Ge(Ny, {
      actionListPlaybackChanged: () => yr,
      animationFrameChanged: () => vi,
      clearRequested: () => Wk,
      elementStateChanged: () => us,
      eventListenerAdded: () => pi,
      eventStateChanged: () => os,
      instanceAdded: () => as,
      instanceRemoved: () => ss,
      instanceStarted: () => gi,
      mediaQueriesDefined: () => ls,
      parameterChanged: () => mr,
      playbackRequested: () => Uk,
      previewRequested: () => Gk,
      rawDataImported: () => ts,
      sessionInitialized: () => rs,
      sessionStarted: () => ns,
      sessionStopped: () => is,
      stopRequested: () => Vk,
      testFrameRendered: () => Hk,
      viewportWidthChanged: () => cs
  });
  var Ly, yk, Ek, bk, _k, Ik, Tk, wk, xk, Ok, Ak, Sk, Rk, Ck, Lk, Nk, Pk, Mk, qk, Dk, Fk, kk, ts, rs, ns, is, Gk, Uk, Vk, Wk, pi, Hk, os, vi, mr, as, gi, ss, us, yr, cs, ls, hi = me(() => {
      "use strict";
      Ue();
      Ly = de(Ut()), {
          IX2_RAW_DATA_IMPORTED: yk,
          IX2_SESSION_INITIALIZED: Ek,
          IX2_SESSION_STARTED: bk,
          IX2_SESSION_STOPPED: _k,
          IX2_PREVIEW_REQUESTED: Ik,
          IX2_PLAYBACK_REQUESTED: Tk,
          IX2_STOP_REQUESTED: wk,
          IX2_CLEAR_REQUESTED: xk,
          IX2_EVENT_LISTENER_ADDED: Ok,
          IX2_TEST_FRAME_RENDERED: Ak,
          IX2_EVENT_STATE_CHANGED: Sk,
          IX2_ANIMATION_FRAME_CHANGED: Rk,
          IX2_PARAMETER_CHANGED: Ck,
          IX2_INSTANCE_ADDED: Lk,
          IX2_INSTANCE_STARTED: Nk,
          IX2_INSTANCE_REMOVED: Pk,
          IX2_ELEMENT_STATE_CHANGED: Mk,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: qk,
          IX2_VIEWPORT_WIDTH_CHANGED: Dk,
          IX2_MEDIA_QUERIES_DEFINED: Fk
      } = we, {
          reifyState: kk
      } = Ly.IX2VanillaUtils, ts = e => ({
          type: yk,
          payload: {
              ...kk(e)
          }
      }), rs = ({
          hasBoundaryNodes: e,
          reducedMotion: t
      }) => ({
          type: Ek,
          payload: {
              hasBoundaryNodes: e,
              reducedMotion: t
          }
      }), ns = () => ({
          type: bk
      }), is = () => ({
          type: _k
      }), Gk = ({
          rawData: e,
          defer: t
      }) => ({
          type: Ik,
          payload: {
              defer: t,
              rawData: e
          }
      }), Uk = ({
          actionTypeId: e = Xe.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u
      }) => ({
          type: Tk,
          payload: {
              actionTypeId: e,
              actionListId: t,
              actionItemId: r,
              testManual: a,
              eventId: n,
              allowEvents: i,
              immediate: o,
              verbose: s,
              rawData: u
          }
      }), Vk = e => ({
          type: wk,
          payload: {
              actionListId: e
          }
      }), Wk = () => ({
          type: xk
      }), pi = (e, t) => ({
          type: Ok,
          payload: {
              target: e,
              listenerParams: t
          }
      }), Hk = (e = 1) => ({
          type: Ak,
          payload: {
              step: e
          }
      }), os = (e, t) => ({
          type: Sk,
          payload: {
              stateKey: e,
              newState: t
          }
      }), vi = (e, t) => ({
          type: Rk,
          payload: {
              now: e,
              parameters: t
          }
      }), mr = (e, t) => ({
          type: Ck,
          payload: {
              key: e,
              value: t
          }
      }), as = e => ({
          type: Lk,
          payload: {
              ...e
          }
      }), gi = (e, t) => ({
          type: Nk,
          payload: {
              instanceId: e,
              time: t
          }
      }), ss = e => ({
          type: Pk,
          payload: {
              instanceId: e
          }
      }), us = (e, t, r, n) => ({
          type: Mk,
          payload: {
              elementId: e,
              actionTypeId: t,
              current: r,
              actionItem: n
          }
      }), yr = ({
          actionListId: e,
          isPlaying: t
      }) => ({
          type: qk,
          payload: {
              actionListId: e,
              isPlaying: t
          }
      }), cs = ({
          width: e,
          mediaQueries: t
      }) => ({
          type: Dk,
          payload: {
              width: e,
              mediaQueries: t
          }
      }), ls = () => ({
          type: Fk
      })
  });
  var Fe = {};
  Ge(Fe, {
      elementContains: () => ps,
      getChildElements: () => Jk,
      getClosestElement: () => tn,
      getProperty: () => Kk,
      getQuerySelector: () => ds,
      getRefType: () => vs,
      getSiblingElements: () => eG,
      getStyle: () => zk,
      getValidDocument: () => Qk,
      isSiblingNode: () => Zk,
      matchSelector: () => Yk,
      queryDocument: () => $k,
      setStyle: () => jk
  });

  function jk(e, t, r) {
      e.style[t] = r
  }

  function zk(e, t) {
      return e.style[t]
  }

  function Kk(e, t) {
      return e[t]
  }

  function Yk(e) {
      return t => t[fs](e)
  }

  function ds({
      id: e,
      selector: t
  }) {
      if (e) {
          let r = e;
          if (e.indexOf(Py) !== -1) {
              let n = e.split(Py),
                  i = n[0];
              if (r = n[1], i !== document.documentElement.getAttribute(qy)) return null
          }
          return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
      }
      return t
  }

  function Qk(e) {
      return e == null || e === document.documentElement.getAttribute(qy) ? document : null
  }

  function $k(e, t) {
      return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
  }

  function ps(e, t) {
      return e.contains(t)
  }

  function Zk(e, t) {
      return e !== t && e.parentNode === t.parentNode
  }

  function Jk(e) {
      let t = [];
      for (let r = 0, {
              length: n
          } = e || []; r < n; r++) {
          let {
              children: i
          } = e[r], {
              length: o
          } = i;
          if (o)
              for (let a = 0; a < o; a++) t.push(i[a])
      }
      return t
  }

  function eG(e = []) {
      let t = [],
          r = [];
      for (let n = 0, {
              length: i
          } = e; n < i; n++) {
          let {
              parentNode: o
          } = e[n];
          if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
          r.push(o);
          let a = o.firstElementChild;
          for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling
      }
      return t
  }

  function vs(e) {
      return e != null && typeof e == "object" ? e instanceof Element ? Xk : Bk : null
  }
  var My, fs, Py, Xk, Bk, qy, tn, Dy = me(() => {
      "use strict";
      My = de(Ut());
      Ue();
      ({
          ELEMENT_MATCHES: fs
      } = My.IX2BrowserSupport), {
          IX2_ID_DELIMITER: Py,
          HTML_ELEMENT: Xk,
          PLAIN_OBJECT: Bk,
          WF_PAGE: qy
      } = Ne;
      tn = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let r = e;
          do {
              if (r[fs] && r[fs](t)) return r;
              r = r.parentNode
          } while (r != null);
          return null
      }
  });
  var gs = l((Nj, ky) => {
      var tG = ut(),
          Fy = Object.create,
          rG = function() {
              function e() {}
              return function(t) {
                  if (!tG(t)) return {};
                  if (Fy) return Fy(t);
                  e.prototype = t;
                  var r = new e;
                  return e.prototype = void 0, r
              }
          }();
      ky.exports = rG
  });
  var mi = l((Pj, Gy) => {
      function nG() {}
      Gy.exports = nG
  });
  var Ei = l((Mj, Uy) => {
      var iG = gs(),
          oG = mi();

      function yi(e, t) {
          this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
      }
      yi.prototype = iG(oG.prototype);
      yi.prototype.constructor = yi;
      Uy.exports = yi
  });
  var Xy = l((qj, Hy) => {
      var Vy = Yt(),
          aG = kr(),
          sG = Oe(),
          Wy = Vy ? Vy.isConcatSpreadable : void 0;

      function uG(e) {
          return sG(e) || aG(e) || !!(Wy && e && e[Wy])
      }
      Hy.exports = uG
  });
  var zy = l((Dj, jy) => {
      var cG = kn(),
          lG = Xy();

      function By(e, t, r, n, i) {
          var o = -1,
              a = e.length;
          for (r || (r = lG), i || (i = []); ++o < a;) {
              var s = e[o];
              t > 0 && r(s) ? t > 1 ? By(s, t - 1, r, n, i) : cG(i, s) : n || (i[i.length] = s)
          }
          return i
      }
      jy.exports = By
  });
  var Yy = l((Fj, Ky) => {
      var fG = zy();

      function dG(e) {
          var t = e == null ? 0 : e.length;
          return t ? fG(e, 1) : []
      }
      Ky.exports = dG
  });
  var $y = l((kj, Qy) => {
      function pG(e, t, r) {
          switch (r.length) {
              case 0:
                  return e.call(t);
              case 1:
                  return e.call(t, r[0]);
              case 2:
                  return e.call(t, r[0], r[1]);
              case 3:
                  return e.call(t, r[0], r[1], r[2])
          }
          return e.apply(t, r)
      }
      Qy.exports = pG
  });
  var eE = l((Gj, Jy) => {
      var vG = $y(),
          Zy = Math.max;

      function gG(e, t, r) {
          return t = Zy(t === void 0 ? e.length - 1 : t, 0),
              function() {
                  for (var n = arguments, i = -1, o = Zy(n.length - t, 0), a = Array(o); ++i < o;) a[i] = n[t + i];
                  i = -1;
                  for (var s = Array(t + 1); ++i < t;) s[i] = n[i];
                  return s[t] = r(a), vG(e, this, s)
              }
      }
      Jy.exports = gG
  });
  var rE = l((Uj, tE) => {
      function hG(e) {
          return function() {
              return e
          }
      }
      tE.exports = hG
  });
  var oE = l((Vj, iE) => {
      var mG = rE(),
          nE = Za(),
          yG = Qn(),
          EG = nE ? function(e, t) {
              return nE(e, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: mG(t),
                  writable: !0
              })
          } : yG;
      iE.exports = EG
  });
  var sE = l((Wj, aE) => {
      var bG = 800,
          _G = 16,
          IG = Date.now;

      function TG(e) {
          var t = 0,
              r = 0;
          return function() {
              var n = IG(),
                  i = _G - (n - r);
              if (r = n, i > 0) {
                  if (++t >= bG) return arguments[0]
              } else t = 0;
              return e.apply(void 0, arguments)
          }
      }
      aE.exports = TG
  });
  var cE = l((Hj, uE) => {
      var wG = oE(),
          xG = sE(),
          OG = xG(wG);
      uE.exports = OG
  });
  var fE = l((Xj, lE) => {
      var AG = Yy(),
          SG = eE(),
          RG = cE();

      function CG(e) {
          return RG(SG(e, void 0, AG), e + "")
      }
      lE.exports = CG
  });
  var vE = l((Bj, pE) => {
      var dE = ca(),
          LG = dE && new dE;
      pE.exports = LG
  });
  var hE = l((jj, gE) => {
      function NG() {}
      gE.exports = NG
  });
  var hs = l((zj, yE) => {
      var mE = vE(),
          PG = hE(),
          MG = mE ? function(e) {
              return mE.get(e)
          } : PG;
      yE.exports = MG
  });
  var bE = l((Kj, EE) => {
      var qG = {};
      EE.exports = qG
  });
  var ms = l((Yj, IE) => {
      var _E = bE(),
          DG = Object.prototype,
          FG = DG.hasOwnProperty;

      function kG(e) {
          for (var t = e.name + "", r = _E[t], n = FG.call(_E, t) ? r.length : 0; n--;) {
              var i = r[n],
                  o = i.func;
              if (o == null || o == e) return i.name
          }
          return t
      }
      IE.exports = kG
  });
  var _i = l((Qj, TE) => {
      var GG = gs(),
          UG = mi(),
          VG = 4294967295;

      function bi(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = VG, this.__views__ = []
      }
      bi.prototype = GG(UG.prototype);
      bi.prototype.constructor = bi;
      TE.exports = bi
  });
  var xE = l(($j, wE) => {
      function WG(e, t) {
          var r = -1,
              n = e.length;
          for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
          return t
      }
      wE.exports = WG
  });
  var AE = l((Zj, OE) => {
      var HG = _i(),
          XG = Ei(),
          BG = xE();

      function jG(e) {
          if (e instanceof HG) return e.clone();
          var t = new XG(e.__wrapped__, e.__chain__);
          return t.__actions__ = BG(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
      }
      OE.exports = jG
  });
  var CE = l((Jj, RE) => {
      var zG = _i(),
          SE = Ei(),
          KG = mi(),
          YG = Oe(),
          QG = vt(),
          $G = AE(),
          ZG = Object.prototype,
          JG = ZG.hasOwnProperty;

      function Ii(e) {
          if (QG(e) && !YG(e) && !(e instanceof zG)) {
              if (e instanceof SE) return e;
              if (JG.call(e, "__wrapped__")) return $G(e)
          }
          return new SE(e)
      }
      Ii.prototype = KG.prototype;
      Ii.prototype.constructor = Ii;
      RE.exports = Ii
  });
  var NE = l((ez, LE) => {
      var eU = _i(),
          tU = hs(),
          rU = ms(),
          nU = CE();

      function iU(e) {
          var t = rU(e),
              r = nU[t];
          if (typeof r != "function" || !(t in eU.prototype)) return !1;
          if (e === r) return !0;
          var n = tU(r);
          return !!n && e === n[0]
      }
      LE.exports = iU
  });
  var DE = l((tz, qE) => {
      var PE = Ei(),
          oU = fE(),
          aU = hs(),
          ys = ms(),
          sU = Oe(),
          ME = NE(),
          uU = "Expected a function",
          cU = 8,
          lU = 32,
          fU = 128,
          dU = 256;

      function pU(e) {
          return oU(function(t) {
              var r = t.length,
                  n = r,
                  i = PE.prototype.thru;
              for (e && t.reverse(); n--;) {
                  var o = t[n];
                  if (typeof o != "function") throw new TypeError(uU);
                  if (i && !a && ys(o) == "wrapper") var a = new PE([], !0)
              }
              for (n = a ? n : r; ++n < r;) {
                  o = t[n];
                  var s = ys(o),
                      u = s == "wrapper" ? aU(o) : void 0;
                  u && ME(u[0]) && u[1] == (fU | cU | lU | dU) && !u[4].length && u[9] == 1 ? a = a[ys(u[0])].apply(a, u[3]) : a = o.length == 1 && ME(o) ? a[s]() : a.thru(o)
              }
              return function() {
                  var p = arguments,
                      E = p[0];
                  if (a && p.length == 1 && sU(E)) return a.plant(E).value();
                  for (var f = 0, I = r ? t[f].apply(this, p) : E; ++f < r;) I = t[f].call(this, I);
                  return I
              }
          })
      }
      qE.exports = pU
  });
  var kE = l((rz, FE) => {
      var vU = DE(),
          gU = vU();
      FE.exports = gU
  });
  var UE = l((nz, GE) => {
      function hU(e, t, r) {
          return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
      }
      GE.exports = hU
  });
  var WE = l((iz, VE) => {
      var mU = UE(),
          Es = $n();

      function yU(e, t, r) {
          return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = Es(r), r = r === r ? r : 0), t !== void 0 && (t = Es(t), t = t === t ? t : 0), mU(Es(e), t, r)
      }
      VE.exports = yU
  });
  var $E, ZE, JE, eb, EU, bU, _U, IU, TU, wU, xU, OU, AU, SU, RU, CU, LU, NU, PU, tb, rb, MU, qU, DU, nb, FU, kU, ib, GU, bs, ob, HE, XE, ab, nn, UU, ft, sb, VU, We, et, on, ub, _s, BE, Is, WU, rn, HU, XU, BU, cb, jE, jU, zE, zU, KU, YU, KE, Ti, wi, YE, QE, lb, fb = me(() => {
      "use strict";
      $E = de(kE()), ZE = de(Yn()), JE = de(WE());
      Ue();
      Ts();
      hi();
      eb = de(Ut()), {
          MOUSE_CLICK: EU,
          MOUSE_SECOND_CLICK: bU,
          MOUSE_DOWN: _U,
          MOUSE_UP: IU,
          MOUSE_OVER: TU,
          MOUSE_OUT: wU,
          DROPDOWN_CLOSE: xU,
          DROPDOWN_OPEN: OU,
          SLIDER_ACTIVE: AU,
          SLIDER_INACTIVE: SU,
          TAB_ACTIVE: RU,
          TAB_INACTIVE: CU,
          NAVBAR_CLOSE: LU,
          NAVBAR_OPEN: NU,
          MOUSE_MOVE: PU,
          PAGE_SCROLL_DOWN: tb,
          SCROLL_INTO_VIEW: rb,
          SCROLL_OUT_OF_VIEW: MU,
          PAGE_SCROLL_UP: qU,
          SCROLLING_IN_VIEW: DU,
          PAGE_FINISH: nb,
          ECOMMERCE_CART_CLOSE: FU,
          ECOMMERCE_CART_OPEN: kU,
          PAGE_START: ib,
          PAGE_SCROLL: GU
      } = Ze, bs = "COMPONENT_ACTIVE", ob = "COMPONENT_INACTIVE", {
          COLON_DELIMITER: HE
      } = Ne, {
          getNamespacedParameterId: XE
      } = eb.IX2VanillaUtils, ab = e => t => typeof t == "object" && e(t) ? !0 : t, nn = ab(({
          element: e,
          nativeEvent: t
      }) => e === t.target), UU = ab(({
          element: e,
          nativeEvent: t
      }) => e.contains(t.target)), ft = (0, $E.default)([nn, UU]), sb = (e, t) => {
          if (t) {
              let {
                  ixData: r
              } = e.getState(), {
                  events: n
              } = r, i = n[t];
              if (i && !WU[i.eventTypeId]) return i
          }
          return null
      }, VU = ({
          store: e,
          event: t
      }) => {
          let {
              action: r
          } = t, {
              autoStopEventId: n
          } = r.config;
          return !!sb(e, n)
      }, We = ({
          store: e,
          event: t,
          element: r,
          eventStateKey: n
      }, i) => {
          let {
              action: o,
              id: a
          } = t, {
              actionListId: s,
              autoStopEventId: u
          } = o.config, p = sb(e, u);
          return p && Er({
              store: e,
              eventId: u,
              eventTarget: r,
              eventStateKey: u + HE + n.split(HE)[1],
              actionListId: (0, ZE.default)(p, "action.config.actionListId")
          }), Er({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s
          }), an({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s
          }), i
      }, et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, on = {
          handler: et(ft, We)
      }, ub = {
          ...on,
          types: [bs, ob].join(" ")
      }, _s = [{
          target: window,
          types: "resize orientationchange",
          throttle: !0
      }, {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0
      }], BE = "mouseover mouseout", Is = {
          types: _s
      }, WU = {
          PAGE_START: ib,
          PAGE_FINISH: nb
      }, rn = (() => {
          let e = window.pageXOffset !== void 0,
              r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
          return () => ({
              scrollLeft: e ? window.pageXOffset : r.scrollLeft,
              scrollTop: e ? window.pageYOffset : r.scrollTop,
              stiffScrollTop: (0, JE.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
              scrollWidth: r.scrollWidth,
              scrollHeight: r.scrollHeight,
              clientWidth: r.clientWidth,
              clientHeight: r.clientHeight,
              innerWidth: window.innerWidth,
              innerHeight: window.innerHeight
          })
      })(), HU = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), XU = ({
          element: e,
          nativeEvent: t
      }) => {
          let {
              type: r,
              target: n,
              relatedTarget: i
          } = t, o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a)
      }, BU = e => {
          let {
              element: t,
              event: {
                  config: r
              }
          } = e, {
              clientWidth: n,
              clientHeight: i
          } = rn(), o = r.scrollOffsetValue, u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
          return HU(t.getBoundingClientRect(), {
              left: 0,
              top: u,
              right: n,
              bottom: i - u
          })
      }, cb = e => (t, r) => {
          let {
              type: n
          } = t.nativeEvent, i = [bs, ob].indexOf(n) !== -1 ? n === bs : r.isActive, o = {
              ...r,
              isActive: i
          };
          return (!r || o.isActive !== r.isActive) && e(t, o) || o
      }, jE = e => (t, r) => {
          let n = {
              elementHovered: XU(t)
          };
          return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
      }, jU = e => (t, r) => {
          let n = {
              ...r,
              elementVisible: BU(t)
          };
          return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
      }, zE = e => (t, r = {}) => {
          let {
              stiffScrollTop: n,
              scrollHeight: i,
              innerHeight: o
          } = rn(), {
              event: {
                  config: a,
                  eventTypeId: s
              }
          } = t, {
              scrollOffsetValue: u,
              scrollOffsetUnit: p
          } = a, E = p === "PX", f = i - o, I = Number((n / f).toFixed(2));
          if (r && r.percentTop === I) return r;
          let m = (E ? u : o * (u || 0) / 100) / f,
              y, T, R = 0;
          r && (y = I > r.percentTop, T = r.scrollingDown !== y, R = T ? I : r.anchorTop);
          let A = s === tb ? I >= R + m : I <= R - m,
              P = {
                  ...r,
                  percentTop: I,
                  inBounds: A,
                  anchorTop: R,
                  scrollingDown: y
              };
          return r && A && (T || P.inBounds !== r.inBounds) && e(t, P) || P
      }, zU = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, KU = e => (t, r) => {
          let n = {
              finished: document.readyState === "complete"
          };
          return n.finished && !(r && r.finshed) && e(t), n
      }, YU = e => (t, r) => {
          let n = {
              started: !0
          };
          return r || e(t), n
      }, KE = e => (t, r = {
          clickCount: 0
      }) => {
          let n = {
              clickCount: r.clickCount % 2 + 1
          };
          return n.clickCount !== r.clickCount && e(t, n) || n
      }, Ti = (e = !0) => ({
          ...ub,
          handler: et(e ? ft : nn, cb((t, r) => r.isActive ? on.handler(t, r) : r))
      }), wi = (e = !0) => ({
          ...ub,
          handler: et(e ? ft : nn, cb((t, r) => r.isActive ? r : on.handler(t, r)))
      }), YE = {
          ...Is,
          handler: jU((e, t) => {
              let {
                  elementVisible: r
              } = t, {
                  event: n,
                  store: i
              } = e, {
                  ixData: o
              } = i.getState(), {
                  events: a
              } = o;
              return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === rb === r ? (We(e), {
                  ...t,
                  triggered: !0
              }) : t
          })
      }, QE = .05, lb = {
          [AU]: Ti(),
          [SU]: wi(),
          [OU]: Ti(),
          [xU]: wi(),
          [NU]: Ti(!1),
          [LU]: wi(!1),
          [RU]: Ti(),
          [CU]: wi(),
          [kU]: {
              types: "ecommerce-cart-open",
              handler: et(ft, We)
          },
          [FU]: {
              types: "ecommerce-cart-close",
              handler: et(ft, We)
          },
          [EU]: {
              types: "click",
              handler: et(ft, KE((e, {
                  clickCount: t
              }) => {
                  VU(e) ? t === 1 && We(e) : We(e)
              }))
          },
          [bU]: {
              types: "click",
              handler: et(ft, KE((e, {
                  clickCount: t
              }) => {
                  t === 2 && We(e)
              }))
          },
          [_U]: {
              ...on,
              types: "mousedown"
          },
          [IU]: {
              ...on,
              types: "mouseup"
          },
          [TU]: {
              types: BE,
              handler: et(ft, jE((e, t) => {
                  t.elementHovered && We(e)
              }))
          },
          [wU]: {
              types: BE,
              handler: et(ft, jE((e, t) => {
                  t.elementHovered || We(e)
              }))
          },
          [PU]: {
              types: "mousemove mouseout scroll",
              handler: ({
                  store: e,
                  element: t,
                  eventConfig: r,
                  nativeEvent: n,
                  eventStateKey: i
              }, o = {
                  clientX: 0,
                  clientY: 0,
                  pageX: 0,
                  pageY: 0
              }) => {
                  let {
                      basedOn: a,
                      selectedAxis: s,
                      continuousParameterGroupId: u,
                      reverse: p,
                      restingState: E = 0
                  } = r, {
                      clientX: f = o.clientX,
                      clientY: I = o.clientY,
                      pageX: m = o.pageX,
                      pageY: y = o.pageY
                  } = n, T = s === "X_AXIS", R = n.type === "mouseout", A = E / 100, P = u, N = !1;
                  switch (a) {
                      case st.VIEWPORT: {
                          A = T ? Math.min(f, window.innerWidth) / window.innerWidth : Math.min(I, window.innerHeight) / window.innerHeight;
                          break
                      }
                      case st.PAGE: {
                          let {
                              scrollLeft: D,
                              scrollTop: G,
                              scrollWidth: F,
                              scrollHeight: K
                          } = rn();
                          A = T ? Math.min(D + m, F) / F : Math.min(G + y, K) / K;
                          break
                      }
                      case st.ELEMENT:
                      default: {
                          P = XE(i, u);
                          let D = n.type.indexOf("mouse") === 0;
                          if (D && ft({
                                  element: t,
                                  nativeEvent: n
                              }) !== !0) break;
                          let G = t.getBoundingClientRect(),
                              {
                                  left: F,
                                  top: K,
                                  width: z,
                                  height: Q
                              } = G;
                          if (!D && !zU({
                                  left: f,
                                  top: I
                              }, G)) break;
                          N = !0, A = T ? (f - F) / z : (I - K) / Q;
                          break
                      }
                  }
                  return R && (A > 1 - QE || A < QE) && (A = Math.round(A)), (a !== st.ELEMENT || N || N !== o.elementHovered) && (A = p ? 1 - A : A, e.dispatch(mr(P, A))), {
                      elementHovered: N,
                      clientX: f,
                      clientY: I,
                      pageX: m,
                      pageY: y
                  }
              }
          },
          [GU]: {
              types: _s,
              handler: ({
                  store: e,
                  eventConfig: t
              }) => {
                  let {
                      continuousParameterGroupId: r,
                      reverse: n
                  } = t, {
                      scrollTop: i,
                      scrollHeight: o,
                      clientHeight: a
                  } = rn(), s = i / (o - a);
                  s = n ? 1 - s : s, e.dispatch(mr(r, s))
              }
          },
          [DU]: {
              types: _s,
              handler: ({
                  element: e,
                  store: t,
                  eventConfig: r,
                  eventStateKey: n
              }, i = {
                  scrollPercent: 0
              }) => {
                  let {
                      scrollLeft: o,
                      scrollTop: a,
                      scrollWidth: s,
                      scrollHeight: u,
                      clientHeight: p
                  } = rn(), {
                      basedOn: E,
                      selectedAxis: f,
                      continuousParameterGroupId: I,
                      startsEntering: m,
                      startsExiting: y,
                      addEndOffset: T,
                      addStartOffset: R,
                      addOffsetValue: A = 0,
                      endOffsetValue: P = 0
                  } = r, N = f === "X_AXIS";
                  if (E === st.VIEWPORT) {
                      let D = N ? o / s : a / u;
                      return D !== i.scrollPercent && t.dispatch(mr(I, D)), {
                          scrollPercent: D
                      }
                  } else {
                      let D = XE(n, I),
                          G = e.getBoundingClientRect(),
                          F = (R ? A : 0) / 100,
                          K = (T ? P : 0) / 100;
                      F = m ? F : 1 - F, K = y ? K : 1 - K;
                      let z = G.top + Math.min(G.height * F, p),
                          te = G.top + G.height * K - z,
                          j = Math.min(p + te, u),
                          _ = Math.min(Math.max(0, p - z), j) / j;
                      return _ !== i.scrollPercent && t.dispatch(mr(D, _)), {
                          scrollPercent: _
                      }
                  }
              }
          },
          [rb]: YE,
          [MU]: YE,
          [tb]: {
              ...Is,
              handler: zE((e, t) => {
                  t.scrollingDown && We(e)
              })
          },
          [qU]: {
              ...Is,
              handler: zE((e, t) => {
                  t.scrollingDown || We(e)
              })
          },
          [nb]: {
              types: "readystatechange IX2_PAGE_UPDATE",
              handler: et(nn, KU(We))
          },
          [ib]: {
              types: "readystatechange IX2_PAGE_UPDATE",
              handler: et(nn, YU(We))
          }
      }
  });
  var Sb = {};
  Ge(Sb, {
      observeRequests: () => gV,
      startActionGroup: () => an,
      startEngine: () => Ci,
      stopActionGroup: () => Er,
      stopAllActionGroups: () => xb,
      stopEngine: () => Li
  });

  function gV(e) {
      Vt({
          store: e,
          select: ({
              ixRequest: t
          }) => t.preview,
          onChange: yV
      }), Vt({
          store: e,
          select: ({
              ixRequest: t
          }) => t.playback,
          onChange: EV
      }), Vt({
          store: e,
          select: ({
              ixRequest: t
          }) => t.stop,
          onChange: bV
      }), Vt({
          store: e,
          select: ({
              ixRequest: t
          }) => t.clear,
          onChange: _V
      })
  }

  function hV(e) {
      Vt({
          store: e,
          select: ({
              ixSession: t
          }) => t.mediaQueryKey,
          onChange: () => {
              Li(e), _b({
                  store: e,
                  elementApi: Fe
              }), Ci({
                  store: e,
                  allowEvents: !0
              }), Ib()
          }
      })
  }

  function mV(e, t) {
      let r = Vt({
          store: e,
          select: ({
              ixSession: n
          }) => n.tick,
          onChange: n => {
              t(n), r()
          }
      })
  }

  function yV({
      rawData: e,
      defer: t
  }, r) {
      let n = () => {
          Ci({
              store: r,
              rawData: e,
              allowEvents: !0
          }), Ib()
      };
      t ? setTimeout(n, 0) : n()
  }

  function Ib() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
  }

  function EV(e, t) {
      let {
          actionTypeId: r,
          actionListId: n,
          actionItemId: i,
          eventId: o,
          allowEvents: a,
          immediate: s,
          testManual: u,
          verbose: p = !0
      } = e, {
          rawData: E
      } = e;
      if (n && i && E && s) {
          let f = E.actionLists[n];
          f && (E = iV({
              actionList: f,
              actionItemId: i,
              rawData: E
          }))
      }
      if (Ci({
              store: t,
              rawData: E,
              allowEvents: a,
              testManual: u
          }), n && r === Xe.GENERAL_START_ACTION || ws(r)) {
          Er({
              store: t,
              actionListId: n
          }), wb({
              store: t,
              actionListId: n,
              eventId: o
          });
          let f = an({
              store: t,
              eventId: o,
              actionListId: n,
              immediate: s,
              verbose: p
          });
          p && f && t.dispatch(yr({
              actionListId: n,
              isPlaying: !s
          }))
      }
  }

  function bV({
      actionListId: e
  }, t) {
      e ? Er({
          store: t,
          actionListId: e
      }) : xb({
          store: t
      }), Li(t)
  }

  function _V(e, t) {
      Li(t), _b({
          store: t,
          elementApi: Fe
      })
  }

  function Ci({
      store: e,
      rawData: t,
      allowEvents: r,
      testManual: n
  }) {
      let {
          ixSession: i
      } = e.getState();
      t && e.dispatch(ts(t)), i.active || (e.dispatch(rs({
          hasBoundaryNodes: !!document.querySelector(Oi),
          reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
      })), r && (AV(e), IV(), e.getState().ixSession.hasDefinedMediaQueries && hV(e)), e.dispatch(ns()), TV(e, n))
  }

  function IV() {
      let {
          documentElement: e
      } = document;
      e.className.indexOf(db) === -1 && (e.className += ` ${db}`)
  }

  function TV(e, t) {
      let r = n => {
          let {
              ixSession: i,
              ixParameters: o
          } = e.getState();
          i.active && (e.dispatch(vi(n, o)), t ? mV(e, r) : requestAnimationFrame(r))
      };
      r(window.performance.now())
  }

  function Li(e) {
      let {
          ixSession: t
      } = e.getState();
      if (t.active) {
          let {
              eventListeners: r
          } = t;
          r.forEach(wV), uV(), e.dispatch(is())
      }
  }

  function wV({
      target: e,
      listenerParams: t
  }) {
      e.removeEventListener.apply(e, t)
  }

  function xV({
      store: e,
      eventStateKey: t,
      eventTarget: r,
      eventId: n,
      eventConfig: i,
      actionListId: o,
      parameterGroup: a,
      smoothing: s,
      restingValue: u
  }) {
      let {
          ixData: p,
          ixSession: E
      } = e.getState(), {
          events: f
      } = p, I = f[n], {
          eventTypeId: m
      } = I, y = {}, T = {}, R = [], {
          continuousActionGroups: A
      } = a, {
          id: P
      } = a;
      oV(m, i) && (P = aV(t, P));
      let N = E.hasBoundaryNodes && r ? tn(r, Oi) : null;
      A.forEach(D => {
          let {
              keyframe: G,
              actionItems: F
          } = D;
          F.forEach(K => {
              let {
                  actionTypeId: z
              } = K, {
                  target: Q
              } = K.config;
              if (!Q) return;
              let te = Q.boundaryMode ? N : null,
                  j = cV(Q) + xs + z;
              if (T[j] = OV(T[j], G, K), !y[j]) {
                  y[j] = !0;
                  let {
                      config: C
                  } = K;
                  Ai({
                      config: C,
                      event: I,
                      eventTarget: r,
                      elementRoot: te,
                      elementApi: Fe
                  }).forEach(_ => {
                      R.push({
                          element: _,
                          key: j
                      })
                  })
              }
          })
      }), R.forEach(({
          element: D,
          key: G
      }) => {
          let F = T[G],
              K = (0, yt.default)(F, "[0].actionItems[0]", {}),
              {
                  actionTypeId: z
              } = K,
              Q = Ri(z) ? As(z)(D, K) : null,
              te = Os({
                  element: D,
                  actionItem: K,
                  elementApi: Fe
              }, Q);
          Ss({
              store: e,
              element: D,
              eventId: n,
              actionListId: o,
              actionItem: K,
              destination: te,
              continuous: !0,
              parameterId: P,
              actionGroups: F,
              smoothing: s,
              restingValue: u,
              pluginInstance: Q
          })
      })
  }

  function OV(e = [], t, r) {
      let n = [...e],
          i;
      return n.some((o, a) => o.keyframe === t ? (i = a, !0) : !1), i == null && (i = n.length, n.push({
          keyframe: t,
          actionItems: []
      })), n[i].actionItems.push(r), n
  }

  function AV(e) {
      let {
          ixData: t
      } = e.getState(), {
          eventTypeMap: r
      } = t;
      Tb(e), (0, br.default)(r, (i, o) => {
          let a = lb[o];
          if (!a) {
              console.warn(`IX2 event type not configured: ${o}`);
              return
          }
          PV({
              logic: a,
              store: e,
              events: i
          })
      });
      let {
          ixSession: n
      } = e.getState();
      n.eventListeners.length && RV(e)
  }

  function RV(e) {
      let t = () => {
          Tb(e)
      };
      SV.forEach(r => {
          window.addEventListener(r, t), e.dispatch(pi(window, [r, t]))
      }), t()
  }

  function Tb(e) {
      let {
          ixSession: t,
          ixData: r
      } = e.getState(), n = window.innerWidth;
      if (n !== t.viewportWidth) {
          let {
              mediaQueries: i
          } = r;
          e.dispatch(cs({
              width: n,
              mediaQueries: i
          }))
      }
  }

  function PV({
      logic: e,
      store: t,
      events: r
  }) {
      MV(r);
      let {
          types: n,
          handler: i
      } = e, {
          ixData: o
      } = t.getState(), {
          actionLists: a
      } = o, s = CV(r, NV);
      if (!(0, gb.default)(s)) return;
      (0, br.default)(s, (f, I) => {
          let m = r[I],
              {
                  action: y,
                  id: T,
                  mediaQueries: R = o.mediaQueryKeys
              } = m,
              {
                  actionListId: A
              } = y.config;
          lV(R, o.mediaQueryKeys) || t.dispatch(ls()), y.actionTypeId === Xe.GENERAL_CONTINUOUS_ACTION && (Array.isArray(m.config) ? m.config : [m.config]).forEach(N => {
              let {
                  continuousParameterGroupId: D
              } = N, G = (0, yt.default)(a, `${A}.continuousParameterGroups`, []), F = (0, vb.default)(G, ({
                  id: Q
              }) => Q === D), K = (N.smoothing || 0) / 100, z = (N.restingState || 0) / 100;
              F && f.forEach((Q, te) => {
                  let j = T + xs + te;
                  xV({
                      store: t,
                      eventStateKey: j,
                      eventTarget: Q,
                      eventId: T,
                      eventConfig: N,
                      actionListId: A,
                      parameterGroup: F,
                      smoothing: K,
                      restingValue: z
                  })
              })
          }), (y.actionTypeId === Xe.GENERAL_START_ACTION || ws(y.actionTypeId)) && wb({
              store: t,
              actionListId: A,
              eventId: T
          })
      });
      let u = f => {
              let {
                  ixSession: I
              } = t.getState();
              LV(s, (m, y, T) => {
                  let R = r[y],
                      A = I.eventState[T],
                      {
                          action: P,
                          mediaQueries: N = o.mediaQueryKeys
                      } = R;
                  if (!Si(N, I.mediaQueryKey)) return;
                  let D = (G = {}) => {
                      let F = i({
                          store: t,
                          element: m,
                          event: R,
                          eventConfig: G,
                          nativeEvent: f,
                          eventStateKey: T
                      }, A);
                      fV(F, A) || t.dispatch(os(T, F))
                  };
                  P.actionTypeId === Xe.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(R.config) ? R.config : [R.config]).forEach(D) : D()
              })
          },
          p = (0, Eb.default)(u, vV),
          E = ({
              target: f = document,
              types: I,
              throttle: m
          }) => {
              I.split(" ").filter(Boolean).forEach(y => {
                  let T = m ? p : u;
                  f.addEventListener(y, T), t.dispatch(pi(f, [y, T]))
              })
          };
      Array.isArray(n) ? n.forEach(E) : typeof n == "string" && E(e)
  }

  function MV(e) {
      if (!pV) return;
      let t = {},
          r = "";
      for (let n in e) {
          let {
              eventTypeId: i,
              target: o
          } = e[n], a = ds(o);
          t[a] || (i === Ze.MOUSE_CLICK || i === Ze.MOUSE_SECOND_CLICK) && (t[a] = !0, r += a + "{cursor: pointer;touch-action: manipulation;}")
      }
      if (r) {
          let n = document.createElement("style");
          n.textContent = r, document.body.appendChild(n)
      }
  }

  function wb({
      store: e,
      actionListId: t,
      eventId: r
  }) {
      let {
          ixData: n,
          ixSession: i
      } = e.getState(), {
          actionLists: o,
          events: a
      } = n, s = a[r], u = o[t];
      if (u && u.useFirstGroupAsInitialState) {
          let p = (0, yt.default)(u, "actionItemGroups[0].actionItems", []),
              E = (0, yt.default)(s, "mediaQueries", n.mediaQueryKeys);
          if (!Si(E, i.mediaQueryKey)) return;
          p.forEach(f => {
              let {
                  config: I,
                  actionTypeId: m
              } = f, y = I?.target?.useEventTarget === !0 && I?.target?.objectId == null ? {
                  target: s.target,
                  targets: s.targets
              } : I, T = Ai({
                  config: y,
                  event: s,
                  elementApi: Fe
              }), R = Ri(m);
              T.forEach(A => {
                  let P = R ? As(m)(A, f) : null;
                  Ss({
                      destination: Os({
                          element: A,
                          actionItem: f,
                          elementApi: Fe
                      }, P),
                      immediate: !0,
                      store: e,
                      element: A,
                      eventId: r,
                      actionItem: f,
                      actionListId: t,
                      pluginInstance: P
                  })
              })
          })
      }
  }

  function xb({
      store: e
  }) {
      let {
          ixInstances: t
      } = e.getState();
      (0, br.default)(t, r => {
          if (!r.continuous) {
              let {
                  actionListId: n,
                  verbose: i
              } = r;
              Rs(r, e), i && e.dispatch(yr({
                  actionListId: n,
                  isPlaying: !1
              }))
          }
      })
  }

  function Er({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: i
  }) {
      let {
          ixInstances: o,
          ixSession: a
      } = e.getState(), s = a.hasBoundaryNodes && r ? tn(r, Oi) : null;
      (0, br.default)(o, u => {
          let p = (0, yt.default)(u, "actionItem.config.target.boundaryMode"),
              E = n ? u.eventStateKey === n : !0;
          if (u.actionListId === i && u.eventId === t && E) {
              if (s && p && !ps(s, u.element)) return;
              Rs(u, e), u.verbose && e.dispatch(yr({
                  actionListId: i,
                  isPlaying: !1
              }))
          }
      })
  }

  function an({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: i,
      groupIndex: o = 0,
      immediate: a,
      verbose: s
  }) {
      let {
          ixData: u,
          ixSession: p
      } = e.getState(), {
          events: E
      } = u, f = E[t] || {}, {
          mediaQueries: I = u.mediaQueryKeys
      } = f, m = (0, yt.default)(u, `actionLists.${i}`, {}), {
          actionItemGroups: y,
          useFirstGroupAsInitialState: T
      } = m;
      if (!y || !y.length) return !1;
      o >= y.length && (0, yt.default)(f, "config.loop") && (o = 0), o === 0 && T && o++;
      let A = (o === 0 || o === 1 && T) && ws(f.action?.actionTypeId) ? f.config.delay : void 0,
          P = (0, yt.default)(y, [o, "actionItems"], []);
      if (!P.length || !Si(I, p.mediaQueryKey)) return !1;
      let N = p.hasBoundaryNodes && r ? tn(r, Oi) : null,
          D = tV(P),
          G = !1;
      return P.forEach((F, K) => {
          let {
              config: z,
              actionTypeId: Q
          } = F, te = Ri(Q), {
              target: j
          } = z;
          if (!j) return;
          let C = j.boundaryMode ? N : null;
          Ai({
              config: z,
              event: f,
              eventTarget: r,
              elementRoot: C,
              elementApi: Fe
          }).forEach((L, U) => {
              let H = te ? As(Q)(L, F) : null,
                  ee = te ? dV(Q)(L, F) : null;
              G = !0;
              let re = D === K && U === 0,
                  W = rV({
                      element: L,
                      actionItem: F
                  }),
                  X = Os({
                      element: L,
                      actionItem: F,
                      elementApi: Fe
                  }, H);
              Ss({
                  store: e,
                  element: L,
                  actionItem: F,
                  eventId: t,
                  eventTarget: r,
                  eventStateKey: n,
                  actionListId: i,
                  groupIndex: o,
                  isCarrier: re,
                  computedStyle: W,
                  destination: X,
                  immediate: a,
                  verbose: s,
                  pluginInstance: H,
                  pluginDuration: ee,
                  instanceDelay: A
              })
          })
      }), G
  }

  function Ss(e) {
      let {
          store: t,
          computedStyle: r,
          ...n
      } = e, {
          element: i,
          actionItem: o,
          immediate: a,
          pluginInstance: s,
          continuous: u,
          restingValue: p,
          eventId: E
      } = n, f = !u, I = JU(), {
          ixElements: m,
          ixSession: y,
          ixData: T
      } = t.getState(), R = ZU(m, i), {
          refState: A
      } = m[R] || {}, P = vs(i), N = y.reducedMotion && Qo[o.actionTypeId], D;
      if (N && u) switch (T.events[E]?.eventTypeId) {
          case Ze.MOUSE_MOVE:
          case Ze.MOUSE_MOVE_IN_VIEWPORT:
              D = p;
              break;
          default:
              D = .5;
              break
      }
      let G = nV(i, A, r, o, Fe, s);
      if (t.dispatch(as({
              instanceId: I,
              elementId: R,
              origin: G,
              refType: P,
              skipMotion: N,
              skipToValue: D,
              ...n
          })), Ob(document.body, "ix2-animation-started", I), a) {
          qV(t, I);
          return
      }
      Vt({
          store: t,
          select: ({
              ixInstances: F
          }) => F[I],
          onChange: Ab
      }), f && t.dispatch(gi(I, y.tick))
  }

  function Rs(e, t) {
      Ob(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState()
      });
      let {
          elementId: r,
          actionItem: n
      } = e, {
          ixElements: i
      } = t.getState(), {
          ref: o,
          refType: a
      } = i[r] || {};
      a === bb && sV(o, n, Fe), t.dispatch(ss(e.id))
  }

  function Ob(e, t, r) {
      let n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
  }

  function qV(e, t) {
      let {
          ixParameters: r
      } = e.getState();
      e.dispatch(gi(t, 0)), e.dispatch(vi(performance.now(), r));
      let {
          ixInstances: n
      } = e.getState();
      Ab(n[t], e)
  }

  function Ab(e, t) {
      let {
          active: r,
          continuous: n,
          complete: i,
          elementId: o,
          actionItem: a,
          actionTypeId: s,
          renderType: u,
          current: p,
          groupIndex: E,
          eventId: f,
          eventTarget: I,
          eventStateKey: m,
          actionListId: y,
          isCarrier: T,
          styleProp: R,
          verbose: A,
          pluginInstance: P
      } = e, {
          ixData: N,
          ixSession: D
      } = t.getState(), {
          events: G
      } = N, F = G[f] || {}, {
          mediaQueries: K = N.mediaQueryKeys
      } = F;
      if (Si(K, D.mediaQueryKey) && (n || r || i)) {
          if (p || u === $U && i) {
              t.dispatch(us(o, s, p, a));
              let {
                  ixElements: z
              } = t.getState(), {
                  ref: Q,
                  refType: te,
                  refState: j
              } = z[o] || {}, C = j && j[s];
              (te === bb || Ri(s)) && eV(Q, j, C, f, a, R, Fe, u, P)
          }
          if (i) {
              if (T) {
                  let z = an({
                      store: t,
                      eventId: f,
                      eventTarget: I,
                      eventStateKey: m,
                      actionListId: y,
                      groupIndex: E + 1,
                      verbose: A
                  });
                  A && !z && t.dispatch(yr({
                      actionListId: y,
                      isPlaying: !1
                  }))
              }
              Rs(e, t)
          }
      }
  }
  var vb, yt, gb, hb, mb, yb, br, Eb, xi, QU, ws, xs, Oi, bb, $U, db, Ai, ZU, Os, Vt, JU, eV, _b, tV, rV, nV, iV, oV, aV, Si, sV, uV, cV, lV, fV, Ri, As, dV, pb, pV, vV, SV, CV, LV, NV, Ts = me(() => {
      "use strict";
      vb = de(xa()), yt = de(Yn()), gb = de(Vm()), hb = de(py()), mb = de(gy()), yb = de(my()), br = de(Ty()), Eb = de(Cy());
      Ue();
      xi = de(Ut());
      hi();
      Dy();
      fb();
      QU = Object.keys(Ko), ws = e => QU.includes(e), {
          COLON_DELIMITER: xs,
          BOUNDARY_SELECTOR: Oi,
          HTML_ELEMENT: bb,
          RENDER_GENERAL: $U,
          W_MOD_IX: db
      } = Ne, {
          getAffectedElements: Ai,
          getElementId: ZU,
          getDestinationValues: Os,
          observeStore: Vt,
          getInstanceId: JU,
          renderHTMLElement: eV,
          clearAllStyles: _b,
          getMaxDurationItemIndex: tV,
          getComputedStyle: rV,
          getInstanceOrigin: nV,
          reduceListToGroup: iV,
          shouldNamespaceEventParameter: oV,
          getNamespacedParameterId: aV,
          shouldAllowMediaQuery: Si,
          cleanupHTMLElement: sV,
          clearObjectCache: uV,
          stringifyTarget: cV,
          mediaQueriesEqual: lV,
          shallowEqual: fV
      } = xi.IX2VanillaUtils, {
          isPluginType: Ri,
          createPluginInstance: As,
          getPluginDuration: dV
      } = xi.IX2VanillaPlugins, pb = navigator.userAgent, pV = pb.match(/iPad/i) || pb.match(/iPhone/), vV = 12;
      SV = ["resize", "orientationchange"];
      CV = (e, t) => (0, hb.default)((0, yb.default)(e, t), mb.default), LV = (e, t) => {
          (0, br.default)(e, (r, n) => {
              r.forEach((i, o) => {
                  let a = n + xs + o;
                  t(i, n, a)
              })
          })
      }, NV = e => {
          let t = {
              target: e.target,
              targets: e.targets
          };
          return Ai({
              config: t,
              elementApi: Fe
          })
      }
  });
  var Cb = l(Et => {
      "use strict";
      var DV = hn().default,
          FV = fu().default;
      Object.defineProperty(Et, "__esModule", {
          value: !0
      });
      Et.actions = void 0;
      Et.destroy = Rb;
      Et.init = WV;
      Et.setEnv = VV;
      Et.store = void 0;
      Ql();
      var kV = jo(),
          GV = FV((Im(), nt(_m))),
          Cs = (Ts(), nt(Sb)),
          UV = DV((hi(), nt(Ny)));
      Et.actions = UV;
      var Ls = Et.store = (0, kV.createStore)(GV.default);

      function VV(e) {
          e() && (0, Cs.observeRequests)(Ls)
      }

      function WV(e) {
          Rb(), (0, Cs.startEngine)({
              store: Ls,
              rawData: e,
              allowEvents: !0
          })
      }

      function Rb() {
          (0, Cs.stopEngine)(Ls)
      }
  });
  var Mb = l((pz, Pb) => {
      "use strict";
      var Lb = Le(),
          Nb = Cb();
      Nb.setEnv(Lb.env);
      Lb.define("ix2", Pb.exports = function() {
          return Nb
      })
  });
  var Db = l((vz, qb) => {
      "use strict";
      var _r = Le();
      _r.define("links", qb.exports = function(e, t) {
          var r = {},
              n = e(window),
              i, o = _r.env(),
              a = window.location,
              s = document.createElement("a"),
              u = "w--current",
              p = /index\.(html|php)$/,
              E = /\/$/,
              f, I;
          r.ready = r.design = r.preview = m;

          function m() {
              i = o && _r.env("design"), I = _r.env("slug") || a.pathname || "", _r.scroll.off(T), f = [];
              for (var A = document.links, P = 0; P < A.length; ++P) y(A[P]);
              f.length && (_r.scroll.on(T), T())
          }

          function y(A) {
              var P = i && A.getAttribute("href-disabled") || A.getAttribute("href");
              if (s.href = P, !(P.indexOf(":") >= 0)) {
                  var N = e(A);
                  if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                      if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                      var D = e(s.hash);
                      D.length && f.push({
                          link: N,
                          sec: D,
                          active: !1
                      });
                      return
                  }
                  if (!(P === "#" || P === "")) {
                      var G = s.href === a.href || P === I || p.test(P) && E.test(I);
                      R(N, u, G)
                  }
              }
          }

          function T() {
              var A = n.scrollTop(),
                  P = n.height();
              t.each(f, function(N) {
                  var D = N.link,
                      G = N.sec,
                      F = G.offset().top,
                      K = G.outerHeight(),
                      z = P * .5,
                      Q = G.is(":visible") && F + K - z >= A && F + z <= A + P;
                  N.active !== Q && (N.active = Q, R(D, u, Q))
              })
          }

          function R(A, P, N) {
              var D = A.hasClass(P);
              N && D || !N && !D || (N ? A.addClass(P) : A.removeClass(P))
          }
          return r
      })
  });
  var kb = l((gz, Fb) => {
      "use strict";
      var Ni = Le();
      Ni.define("scroll", Fb.exports = function(e) {
          var t = {
                  WF_CLICK_EMPTY: "click.wf-empty-link",
                  WF_CLICK_SCROLL: "click.wf-scroll"
              },
              r = window.location,
              n = y() ? null : window.history,
              i = e(window),
              o = e(document),
              a = e(document.body),
              s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(C) {
                  window.setTimeout(C, 15)
              },
              u = Ni.env("editor") ? ".w-editor-body" : "body",
              p = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
              E = 'a[href="#"]',
              f = 'a[href*="#"]:not(.w-tab-link):not(' + E + ")",
              I = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
              m = document.createElement("style");
          m.appendChild(document.createTextNode(I));

          function y() {
              try {
                  return !!window.frameElement
              } catch {
                  return !0
              }
          }
          var T = /^#[a-zA-Z0-9][\w:.-]*$/;

          function R(C) {
              return T.test(C.hash) && C.host + C.pathname === r.host + r.pathname
          }
          let A = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

          function P() {
              return document.body.getAttribute("data-wf-scroll-motion") === "none" || A.matches
          }

          function N(C, _) {
              var L;
              switch (_) {
                  case "add":
                      L = C.attr("tabindex"), L ? C.attr("data-wf-tabindex-swap", L) : C.attr("tabindex", "-1");
                      break;
                  case "remove":
                      L = C.attr("data-wf-tabindex-swap"), L ? (C.attr("tabindex", L), C.removeAttr("data-wf-tabindex-swap")) : C.removeAttr("tabindex");
                      break
              }
              C.toggleClass("wf-force-outline-none", _ === "add")
          }

          function D(C) {
              var _ = C.currentTarget;
              if (!(Ni.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(_.className))) {
                  var L = R(_) ? _.hash : "";
                  if (L !== "") {
                      var U = e(L);
                      U.length && (C && (C.preventDefault(), C.stopPropagation()), G(L, C), window.setTimeout(function() {
                          F(U, function() {
                              N(U, "add"), U.get(0).focus({
                                  preventScroll: !0
                              }), N(U, "remove")
                          })
                      }, C ? 0 : 300))
                  }
              }
          }

          function G(C) {
              if (r.hash !== C && n && n.pushState && !(Ni.env.chrome && r.protocol === "file:")) {
                  var _ = n.state && n.state.hash;
                  _ !== C && n.pushState({
                      hash: C
                  }, "", C)
              }
          }

          function F(C, _) {
              var L = i.scrollTop(),
                  U = K(C);
              if (L !== U) {
                  var H = z(C, L, U),
                      ee = Date.now(),
                      re = function() {
                          var W = Date.now() - ee;
                          window.scroll(0, Q(L, U, W, H)), W <= H ? s(re) : typeof _ == "function" && _()
                      };
                  s(re)
              }
          }

          function K(C) {
              var _ = e(p),
                  L = _.css("position") === "fixed" ? _.outerHeight() : 0,
                  U = C.offset().top - L;
              if (C.data("scroll") === "mid") {
                  var H = i.height() - L,
                      ee = C.outerHeight();
                  ee < H && (U -= Math.round((H - ee) / 2))
              }
              return U
          }

          function z(C, _, L) {
              if (P()) return 0;
              var U = 1;
              return a.add(C).each(function(H, ee) {
                  var re = parseFloat(ee.getAttribute("data-scroll-time"));
                  !isNaN(re) && re >= 0 && (U = re)
              }), (472.143 * Math.log(Math.abs(_ - L) + 125) - 2e3) * U
          }

          function Q(C, _, L, U) {
              return L > U ? _ : C + (_ - C) * te(L / U)
          }

          function te(C) {
              return C < .5 ? 4 * C * C * C : (C - 1) * (2 * C - 2) * (2 * C - 2) + 1
          }

          function j() {
              var {
                  WF_CLICK_EMPTY: C,
                  WF_CLICK_SCROLL: _
              } = t;
              o.on(_, f, D), o.on(C, E, function(L) {
                  L.preventDefault()
              }), document.head.insertBefore(m, document.head.firstChild)
          }
          return {
              ready: j
          }
      })
  });
  var Ub = l((hz, Gb) => {
      "use strict";
      var HV = Le();
      HV.define("touch", Gb.exports = function(e) {
          var t = {},
              r = window.getSelection;
          e.event.special.tap = {
              bindType: "click",
              delegateType: "click"
          }, t.init = function(o) {
              return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
          };

          function n(o) {
              var a = !1,
                  s = !1,
                  u = Math.min(Math.round(window.innerWidth * .04), 40),
                  p, E;
              o.addEventListener("touchstart", f, !1), o.addEventListener("touchmove", I, !1), o.addEventListener("touchend", m, !1), o.addEventListener("touchcancel", y, !1), o.addEventListener("mousedown", f, !1), o.addEventListener("mousemove", I, !1), o.addEventListener("mouseup", m, !1), o.addEventListener("mouseout", y, !1);

              function f(R) {
                  var A = R.touches;
                  A && A.length > 1 || (a = !0, A ? (s = !0, p = A[0].clientX) : p = R.clientX, E = p)
              }

              function I(R) {
                  if (a) {
                      if (s && R.type === "mousemove") {
                          R.preventDefault(), R.stopPropagation();
                          return
                      }
                      var A = R.touches,
                          P = A ? A[0].clientX : R.clientX,
                          N = P - E;
                      E = P, Math.abs(N) > u && r && String(r()) === "" && (i("swipe", R, {
                          direction: N > 0 ? "right" : "left"
                      }), y())
                  }
              }

              function m(R) {
                  if (a && (a = !1, s && R.type === "mouseup")) {
                      R.preventDefault(), R.stopPropagation(), s = !1;
                      return
                  }
              }

              function y() {
                  a = !1
              }

              function T() {
                  o.removeEventListener("touchstart", f, !1), o.removeEventListener("touchmove", I, !1), o.removeEventListener("touchend", m, !1), o.removeEventListener("touchcancel", y, !1), o.removeEventListener("mousedown", f, !1), o.removeEventListener("mousemove", I, !1), o.removeEventListener("mouseup", m, !1), o.removeEventListener("mouseout", y, !1), o = null
              }
              this.destroy = T
          }

          function i(o, a, s) {
              var u = e.Event(o, {
                  originalEvent: a
              });
              e(a.target).trigger(u, s)
          }
          return t.instance = t.init(document), t
      })
  });
  var Hb = l((mz, Wb) => {
      "use strict";
      var Wt = Le(),
          XV = Bt(),
          tt = {
              ARROW_LEFT: 37,
              ARROW_UP: 38,
              ARROW_RIGHT: 39,
              ARROW_DOWN: 40,
              ESCAPE: 27,
              SPACE: 32,
              ENTER: 13,
              HOME: 36,
              END: 35
          },
          Vb = !0,
          BV = /^#[a-zA-Z0-9\-_]+$/;
      Wt.define("dropdown", Wb.exports = function(e, t) {
          var r = t.debounce,
              n = {},
              i = Wt.env(),
              o = !1,
              a, s = Wt.env.touch,
              u = ".w-dropdown",
              p = "w--open",
              E = XV.triggers,
              f = 900,
              I = "focusout" + u,
              m = "keydown" + u,
              y = "mouseenter" + u,
              T = "mousemove" + u,
              R = "mouseleave" + u,
              A = (s ? "click" : "mouseup") + u,
              P = "w-close" + u,
              N = "setting" + u,
              D = e(document),
              G;
          n.ready = F, n.design = function() {
              o && _(), o = !1, F()
          }, n.preview = function() {
              o = !0, F()
          };

          function F() {
              a = i && Wt.env("design"), G = D.find(u), G.each(K)
          }

          function K(c, M) {
              var V = e(M),
                  x = e.data(M, u);
              x || (x = e.data(M, u, {
                  open: !1,
                  el: V,
                  config: {},
                  selectedIdx: -1
              })), x.toggle = x.el.children(".w-dropdown-toggle"), x.list = x.el.children(".w-dropdown-list"), x.links = x.list.find("a:not(.w-dropdown .w-dropdown a)"), x.complete = H(x), x.mouseLeave = re(x), x.mouseUpOutside = U(x), x.mouseMoveOutside = W(x), z(x);
              var $ = x.toggle.attr("id"),
                  se = x.list.attr("id");
              $ || ($ = "w-dropdown-toggle-" + c), se || (se = "w-dropdown-list-" + c), x.toggle.attr("id", $), x.toggle.attr("aria-controls", se), x.toggle.attr("aria-haspopup", "menu"), x.toggle.attr("aria-expanded", "false"), x.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"), x.toggle.prop("tagName") !== "BUTTON" && (x.toggle.attr("role", "button"), x.toggle.attr("tabindex") || x.toggle.attr("tabindex", "0")), x.list.attr("id", se), x.list.attr("aria-labelledby", $), x.links.each(function(b, B) {
                  B.hasAttribute("tabindex") || B.setAttribute("tabindex", "0"), BV.test(B.hash) && B.addEventListener("click", C.bind(null, x))
              }), x.el.off(u), x.toggle.off(u), x.nav && x.nav.off(u);
              var ie = te(x, Vb);
              a && x.el.on(N, Q(x)), a || (i && (x.hovering = !1, C(x)), x.config.hover && x.toggle.on(y, ee(x)), x.el.on(P, ie), x.el.on(m, X(x)), x.el.on(I, h(x)), x.toggle.on(A, ie), x.toggle.on(m, v(x)), x.nav = x.el.closest(".w-nav"), x.nav.on(P, ie))
          }

          function z(c) {
              var M = Number(c.el.css("z-index"));
              c.manageZ = M === f || M === f + 1, c.config = {
                  hover: c.el.attr("data-hover") === "true" && !s,
                  delay: c.el.attr("data-delay")
              }
          }

          function Q(c) {
              return function(M, V) {
                  V = V || {}, z(c), V.open === !0 && j(c, !0), V.open === !1 && C(c, {
                      immediate: !0
                  })
              }
          }

          function te(c, M) {
              return r(function(V) {
                  if (c.open || V && V.type === "w-close") return C(c, {
                      forceClose: M
                  });
                  j(c)
              })
          }

          function j(c) {
              if (!c.open) {
                  L(c), c.open = !0, c.list.addClass(p), c.toggle.addClass(p), c.toggle.attr("aria-expanded", "true"), E.intro(0, c.el[0]), Wt.redraw.up(), c.manageZ && c.el.css("z-index", f + 1);
                  var M = Wt.env("editor");
                  a || D.on(A, c.mouseUpOutside), c.hovering && !M && c.el.on(R, c.mouseLeave), c.hovering && M && D.on(T, c.mouseMoveOutside), window.clearTimeout(c.delayId)
              }
          }

          function C(c, {
              immediate: M,
              forceClose: V
          } = {}) {
              if (c.open && !(c.config.hover && c.hovering && !V)) {
                  c.toggle.attr("aria-expanded", "false"), c.open = !1;
                  var x = c.config;
                  if (E.outro(0, c.el[0]), D.off(A, c.mouseUpOutside), D.off(T, c.mouseMoveOutside), c.el.off(R, c.mouseLeave), window.clearTimeout(c.delayId), !x.delay || M) return c.complete();
                  c.delayId = window.setTimeout(c.complete, x.delay)
              }
          }

          function _() {
              D.find(u).each(function(c, M) {
                  e(M).triggerHandler(P)
              })
          }

          function L(c) {
              var M = c.el[0];
              G.each(function(V, x) {
                  var $ = e(x);
                  $.is(M) || $.has(M).length || $.triggerHandler(P)
              })
          }

          function U(c) {
              return c.mouseUpOutside && D.off(A, c.mouseUpOutside), r(function(M) {
                  if (c.open) {
                      var V = e(M.target);
                      if (!V.closest(".w-dropdown-toggle").length) {
                          var x = e.inArray(c.el[0], V.parents(u)) === -1,
                              $ = Wt.env("editor");
                          if (x) {
                              if ($) {
                                  var se = V.parents().length === 1 && V.parents("svg").length === 1,
                                      ie = V.parents(".w-editor-bem-EditorHoverControls").length;
                                  if (se || ie) return
                              }
                              C(c)
                          }
                      }
                  }
              })
          }

          function H(c) {
              return function() {
                  c.list.removeClass(p), c.toggle.removeClass(p), c.manageZ && c.el.css("z-index", "")
              }
          }

          function ee(c) {
              return function() {
                  c.hovering = !0, j(c)
              }
          }

          function re(c) {
              return function() {
                  c.hovering = !1, c.links.is(":focus") || C(c)
              }
          }

          function W(c) {
              return r(function(M) {
                  if (c.open) {
                      var V = e(M.target),
                          x = e.inArray(c.el[0], V.parents(u)) === -1;
                      if (x) {
                          var $ = V.parents(".w-editor-bem-EditorHoverControls").length,
                              se = V.parents(".w-editor-bem-RTToolbar").length,
                              ie = e(".w-editor-bem-EditorOverlay"),
                              b = ie.find(".w-editor-edit-outline").length || ie.find(".w-editor-bem-RTToolbar").length;
                          if ($ || se || b) return;
                          c.hovering = !1, C(c)
                      }
                  }
              })
          }

          function X(c) {
              return function(M) {
                  if (!(a || !c.open)) switch (c.selectedIdx = c.links.index(document.activeElement), M.keyCode) {
                      case tt.HOME:
                          return c.open ? (c.selectedIdx = 0, g(c), M.preventDefault()) : void 0;
                      case tt.END:
                          return c.open ? (c.selectedIdx = c.links.length - 1, g(c), M.preventDefault()) : void 0;
                      case tt.ESCAPE:
                          return C(c), c.toggle.focus(), M.stopPropagation();
                      case tt.ARROW_RIGHT:
                      case tt.ARROW_DOWN:
                          return c.selectedIdx = Math.min(c.links.length - 1, c.selectedIdx + 1), g(c), M.preventDefault();
                      case tt.ARROW_LEFT:
                      case tt.ARROW_UP:
                          return c.selectedIdx = Math.max(-1, c.selectedIdx - 1), g(c), M.preventDefault()
                  }
              }
          }

          function g(c) {
              c.links[c.selectedIdx] && c.links[c.selectedIdx].focus()
          }

          function v(c) {
              var M = te(c, Vb);
              return function(V) {
                  if (!a) {
                      if (!c.open) switch (V.keyCode) {
                          case tt.ARROW_UP:
                          case tt.ARROW_DOWN:
                              return V.stopPropagation()
                      }
                      switch (V.keyCode) {
                          case tt.SPACE:
                          case tt.ENTER:
                              return M(), V.stopPropagation(), V.preventDefault()
                      }
                  }
              }
          }

          function h(c) {
              return r(function(M) {
                  var {
                      relatedTarget: V,
                      target: x
                  } = M, $ = c.el[0], se = $.contains(V) || $.contains(x);
                  return se || C(c), M.stopPropagation()
              })
          }
          return n
      })
  });
  var Xb = l(Ns => {
      "use strict";
      Object.defineProperty(Ns, "__esModule", {
          value: !0
      });
      Ns.default = jV;

      function jV(e, t, r, n, i, o, a, s, u, p, E, f, I) {
          return function(m) {
              e(m);
              var y = m.form,
                  T = {
                      name: y.attr("data-name") || y.attr("name") || "Untitled Form",
                      pageId: y.attr("data-wf-page-id") || "",
                      elementId: y.attr("data-wf-element-id") || "",
                      source: t.href,
                      test: r.env(),
                      fields: {},
                      fileUploads: {},
                      dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(y.html()),
                      trackingCookies: n()
                  };
              let R = y.attr("data-wf-flow");
              R && (T.wfFlow = R), i(m);
              var A = o(y, T.fields);
              if (A) return a(A);
              if (T.fileUploads = s(y), u(m), !p) {
                  E(m);
                  return
              }
              f.ajax({
                  url: I,
                  type: "POST",
                  data: T,
                  dataType: "json",
                  crossDomain: !0
              }).done(function(P) {
                  P && P.code === 200 && (m.success = !0), E(m)
              }).fail(function() {
                  E(m)
              })
          }
      }
  });
  var jb = l((Ez, Bb) => {
      "use strict";
      var Pi = Le();
      Pi.define("forms", Bb.exports = function(e, t) {
          var r = {},
              n = e(document),
              i, o = window.location,
              a = window.XDomainRequest && !window.atob,
              s = ".w-form",
              u, p = /e(-)?mail/i,
              E = /^\S+@\S+$/,
              f = window.alert,
              I = Pi.env(),
              m, y, T, R = /list-manage[1-9]?.com/i,
              A = t.debounce(function() {
                  f("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
              }, 100);
          r.ready = r.design = r.preview = function() {
              P(), !I && !m && D()
          };

          function P() {
              u = e("html").attr("data-wf-site"), y = "https://webflow.com/api/v1/form/" + u, a && y.indexOf("https://webflow.com") >= 0 && (y = y.replace("https://webflow.com", "https://formdata.webflow.com")), T = `${y}/signFile`, i = e(s + " form"), i.length && i.each(N)
          }

          function N(W, X) {
              var g = e(X),
                  v = e.data(X, s);
              v || (v = e.data(X, s, {
                  form: g
              })), G(v);
              var h = g.closest("div.w-form");
              v.done = h.find("> .w-form-done"), v.fail = h.find("> .w-form-fail"), v.fileUploads = h.find(".w-file-upload"), v.fileUploads.each(function(V) {
                  H(V, v)
              });
              var c = v.form.attr("aria-label") || v.form.attr("data-name") || "Form";
              v.done.attr("aria-label") || v.form.attr("aria-label", c), v.done.attr("tabindex", "-1"), v.done.attr("role", "region"), v.done.attr("aria-label") || v.done.attr("aria-label", c + " success"), v.fail.attr("tabindex", "-1"), v.fail.attr("role", "region"), v.fail.attr("aria-label") || v.fail.attr("aria-label", c + " failure");
              var M = v.action = g.attr("action");
              if (v.handler = null, v.redirect = g.attr("data-redirect"), R.test(M)) {
                  v.handler = _;
                  return
              }
              if (!M) {
                  if (u) {
                      v.handler = (() => {
                          let V = Xb().default;
                          return V(G, o, Pi, te, U, K, f, z, F, u, L, e, y)
                      })();
                      return
                  }
                  A()
              }
          }

          function D() {
              m = !0, n.on("submit", s + " form", function(V) {
                  var x = e.data(this, s);
                  x.handler && (x.evt = V, x.handler(x))
              });
              let W = ".w-checkbox-input",
                  X = ".w-radio-input",
                  g = "w--redirected-checked",
                  v = "w--redirected-focus",
                  h = "w--redirected-focus-visible",
                  c = ":focus-visible, [data-wf-focus-visible]",
                  M = [
                      ["checkbox", W],
                      ["radio", X]
                  ];
              n.on("change", s + ' form input[type="checkbox"]:not(' + W + ")", V => {
                  e(V.target).siblings(W).toggleClass(g)
              }), n.on("change", s + ' form input[type="radio"]', V => {
                  e(`input[name="${V.target.name}"]:not(${W})`).map(($, se) => e(se).siblings(X).removeClass(g));
                  let x = e(V.target);
                  x.hasClass("w-radio-input") || x.siblings(X).addClass(g)
              }), M.forEach(([V, x]) => {
                  n.on("focus", s + ` form input[type="${V}"]:not(` + x + ")", $ => {
                      e($.target).siblings(x).addClass(v), e($.target).filter(c).siblings(x).addClass(h)
                  }), n.on("blur", s + ` form input[type="${V}"]:not(` + x + ")", $ => {
                      e($.target).siblings(x).removeClass(`${v} ${h}`)
                  })
              })
          }

          function G(W) {
              var X = W.btn = W.form.find(':input[type="submit"]');
              W.wait = W.btn.attr("data-wait") || null, W.success = !1, X.prop("disabled", !1), W.label && X.val(W.label)
          }

          function F(W) {
              var X = W.btn,
                  g = W.wait;
              X.prop("disabled", !0), g && (W.label = X.val(), X.val(g))
          }

          function K(W, X) {
              var g = null;
              return X = X || {}, W.find(':input:not([type="submit"]):not([type="file"])').each(function(v, h) {
                  var c = e(h),
                      M = c.attr("type"),
                      V = c.attr("data-name") || c.attr("name") || "Field " + (v + 1),
                      x = c.val();
                  if (M === "checkbox") x = c.is(":checked");
                  else if (M === "radio") {
                      if (X[V] === null || typeof X[V] == "string") return;
                      x = W.find('input[name="' + c.attr("name") + '"]:checked').val() || null
                  }
                  typeof x == "string" && (x = e.trim(x)), X[V] = x, g = g || j(c, M, V, x)
              }), g
          }

          function z(W) {
              var X = {};
              return W.find(':input[type="file"]').each(function(g, v) {
                  var h = e(v),
                      c = h.attr("data-name") || h.attr("name") || "File " + (g + 1),
                      M = h.attr("data-value");
                  typeof M == "string" && (M = e.trim(M)), X[c] = M
              }), X
          }
          let Q = {
              _mkto_trk: "marketo"
          };

          function te() {
              return document.cookie.split("; ").reduce(function(X, g) {
                  let v = g.split("="),
                      h = v[0];
                  if (h in Q) {
                      let c = Q[h],
                          M = v.slice(1).join("=");
                      X[c] = M
                  }
                  return X
              }, {})
          }

          function j(W, X, g, v) {
              var h = null;
              return X === "password" ? h = "Passwords cannot be submitted." : W.attr("required") ? v ? p.test(W.attr("type")) && (E.test(v) || (h = "Please enter a valid email address for: " + g)) : h = "Please fill out the required field: " + g : g === "g-recaptcha-response" && !v && (h = "Please confirm you\u2019re not a robot."), h
          }

          function C(W) {
              U(W), L(W)
          }

          function _(W) {
              G(W);
              var X = W.form,
                  g = {};
              if (/^https/.test(o.href) && !/^https/.test(W.action)) {
                  X.attr("method", "post");
                  return
              }
              U(W);
              var v = K(X, g);
              if (v) return f(v);
              F(W);
              var h;
              t.each(g, function(x, $) {
                  p.test($) && (g.EMAIL = x), /^((full[ _-]?)?name)$/i.test($) && (h = x), /^(first[ _-]?name)$/i.test($) && (g.FNAME = x), /^(last[ _-]?name)$/i.test($) && (g.LNAME = x)
              }), h && !g.FNAME && (h = h.split(" "), g.FNAME = h[0], g.LNAME = g.LNAME || h[1]);
              var c = W.action.replace("/post?", "/post-json?") + "&c=?",
                  M = c.indexOf("u=") + 2;
              M = c.substring(M, c.indexOf("&", M));
              var V = c.indexOf("id=") + 3;
              V = c.substring(V, c.indexOf("&", V)), g["b_" + M + "_" + V] = "", e.ajax({
                  url: c,
                  data: g,
                  dataType: "jsonp"
              }).done(function(x) {
                  W.success = x.result === "success" || /already/.test(x.msg), W.success || console.info("MailChimp error: " + x.msg), L(W)
              }).fail(function() {
                  L(W)
              })
          }

          function L(W) {
              var X = W.form,
                  g = W.redirect,
                  v = W.success;
              if (v && g) {
                  Pi.location(g);
                  return
              }
              W.done.toggle(v), W.fail.toggle(!v), v ? W.done.focus() : W.fail.focus(), X.toggle(!v), G(W)
          }

          function U(W) {
              W.evt && W.evt.preventDefault(), W.evt = null
          }

          function H(W, X) {
              if (!X.fileUploads || !X.fileUploads[W]) return;
              var g, v = e(X.fileUploads[W]),
                  h = v.find("> .w-file-upload-default"),
                  c = v.find("> .w-file-upload-uploading"),
                  M = v.find("> .w-file-upload-success"),
                  V = v.find("> .w-file-upload-error"),
                  x = h.find(".w-file-upload-input"),
                  $ = h.find(".w-file-upload-label"),
                  se = $.children(),
                  ie = V.find(".w-file-upload-error-msg"),
                  b = M.find(".w-file-upload-file"),
                  B = M.find(".w-file-remove-link"),
                  J = b.find(".w-file-upload-file-name"),
                  Y = ie.attr("data-w-size-error"),
                  le = ie.attr("data-w-type-error"),
                  Te = ie.attr("data-w-generic-error");
              if (I || $.on("click keydown", function(O) {
                      O.type === "keydown" && O.which !== 13 && O.which !== 32 || (O.preventDefault(), x.click())
                  }), $.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), B.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), I) x.on("click", function(O) {
                  O.preventDefault()
              }), $.on("click", function(O) {
                  O.preventDefault()
              }), se.on("click", function(O) {
                  O.preventDefault()
              });
              else {
                  B.on("click keydown", function(O) {
                      if (O.type === "keydown") {
                          if (O.which !== 13 && O.which !== 32) return;
                          O.preventDefault()
                      }
                      x.removeAttr("data-value"), x.val(""), J.html(""), h.toggle(!0), M.toggle(!1), $.focus()
                  }), x.on("change", function(O) {
                      g = O.target && O.target.files && O.target.files[0], g && (h.toggle(!1), V.toggle(!1), c.toggle(!0), c.focus(), J.text(g.name), q() || F(X), X.fileUploads[W].uploading = !0, ee(g, w))
                  });
                  var Ce = $.outerHeight();
                  x.height(Ce), x.width(1)
              }

              function d(O) {
                  var k = O.responseJSON && O.responseJSON.msg,
                      ne = Te;
                  typeof k == "string" && k.indexOf("InvalidFileTypeError") === 0 ? ne = le : typeof k == "string" && k.indexOf("MaxFileSizeError") === 0 && (ne = Y), ie.text(ne), x.removeAttr("data-value"), x.val(""), c.toggle(!1), h.toggle(!0), V.toggle(!0), V.focus(), X.fileUploads[W].uploading = !1, q() || G(X)
              }

              function w(O, k) {
                  if (O) return d(O);
                  var ne = k.fileName,
                      ae = k.postData,
                      ge = k.fileId,
                      Z = k.s3Url;
                  x.attr("data-value", ge), re(Z, ae, g, ne, S)
              }

              function S(O) {
                  if (O) return d(O);
                  c.toggle(!1), M.css("display", "inline-block"), M.focus(), X.fileUploads[W].uploading = !1, q() || G(X)
              }

              function q() {
                  var O = X.fileUploads && X.fileUploads.toArray() || [];
                  return O.some(function(k) {
                      return k.uploading
                  })
              }
          }

          function ee(W, X) {
              var g = new URLSearchParams({
                  name: W.name,
                  size: W.size
              });
              e.ajax({
                  type: "GET",
                  url: `${T}?${g}`,
                  crossDomain: !0
              }).done(function(v) {
                  X(null, v)
              }).fail(function(v) {
                  X(v)
              })
          }

          function re(W, X, g, v, h) {
              var c = new FormData;
              for (var M in X) c.append(M, X[M]);
              c.append("file", g, v), e.ajax({
                  type: "POST",
                  url: W,
                  data: c,
                  processData: !1,
                  contentType: !1
              }).done(function() {
                  h(null)
              }).fail(function(V) {
                  h(V)
              })
          }
          return r
      })
  });
  var Yb = l((bz, Kb) => {
      "use strict";
      var Ps = Le(),
          zb = "w-condition-invisible",
          zV = "." + zb;

      function KV(e) {
          return e.filter(function(t) {
              return !un(t)
          })
      }

      function un(e) {
          return !!(e.$el && e.$el.closest(zV).length)
      }

      function Ms(e, t) {
          for (var r = e; r >= 0; r--)
              if (!un(t[r])) return r;
          return -1
      }

      function qs(e, t) {
          for (var r = e; r <= t.length - 1; r++)
              if (!un(t[r])) return r;
          return -1
      }

      function YV(e, t) {
          return Ms(e - 1, t) === -1
      }

      function QV(e, t) {
          return qs(e + 1, t) === -1
      }

      function sn(e, t) {
          e.attr("aria-label") || e.attr("aria-label", t)
      }

      function $V(e, t, r, n) {
          var i = r.tram,
              o = Array.isArray,
              a = "w-lightbox",
              s = a + "-",
              u = /(^|\s+)/g,
              p = [],
              E, f, I, m = [];

          function y(v, h) {
              return p = o(v) ? v : [v], f || y.build(), KV(p).length > 1 && (f.items = f.empty, p.forEach(function(c, M) {
                  var V = X("thumbnail"),
                      x = X("item").prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append(V);
                  sn(x, `show item ${M + 1} of ${p.length}`), un(c) && x.addClass(zb), f.items = f.items.add(x), te(c.thumbnailUrl || c.url, function($) {
                      $.prop("width") > $.prop("height") ? H($, "wide") : H($, "tall"), V.append(H($, "thumbnail-image"))
                  })
              }), f.strip.empty().append(f.items), H(f.content, "group")), i(ee(f.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
                  opacity: 1
              }), H(f.html, "noscroll"), y.show(h || 0)
          }
          y.build = function() {
              return y.destroy(), f = {
                  html: r(t.documentElement),
                  empty: r()
              }, f.arrowLeft = X("control left inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), f.arrowRight = X("control right inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), f.close = X("control close").attr("role", "button"), sn(f.arrowLeft, "previous image"), sn(f.arrowRight, "next image"), sn(f.close, "close lightbox"), f.spinner = X("spinner").attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), f.strip = X("strip").attr("role", "tablist"), I = new _(f.spinner, L("hide")), f.content = X("content").append(f.spinner, f.arrowLeft, f.arrowRight, f.close), f.container = X("container").append(f.content, f.strip), f.lightbox = X("backdrop hide").append(f.container), f.strip.on("click", U("item"), N), f.content.on("swipe", D).on("click", U("left"), R).on("click", U("right"), A).on("click", U("close"), P).on("click", U("image, caption"), A), f.container.on("click", U("view"), P).on("dragstart", U("img"), F), f.lightbox.on("keydown", K).on("focusin", G), r(n).append(f.lightbox), y
          }, y.destroy = function() {
              f && (ee(f.html, "noscroll"), f.lightbox.remove(), f = void 0)
          }, y.show = function(v) {
              if (v !== E) {
                  var h = p[v];
                  if (!h) return y.hide();
                  if (un(h)) {
                      if (v < E) {
                          var c = Ms(v - 1, p);
                          v = c > -1 ? c : v
                      } else {
                          var M = qs(v + 1, p);
                          v = M > -1 ? M : v
                      }
                      h = p[v]
                  }
                  var V = E;
                  E = v, f.spinner.attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), I.show();
                  var x = h.html && g(h.width, h.height) || h.url;
                  return te(x, function($) {
                      if (v !== E) return;
                      var se = X("figure", "figure").append(H($, "image")),
                          ie = X("frame").append(se),
                          b = X("view").prop("tabIndex", 0).attr("id", "w-lightbox-view").append(ie),
                          B, J;
                      h.html && (B = r(h.html), J = B.is("iframe"), J && B.on("load", Y), se.append(H(B, "embed"))), h.caption && se.append(X("caption", "figcaption").text(h.caption)), f.spinner.before(b), J || Y();

                      function Y() {
                          if (f.spinner.attr("aria-hidden", !0).attr("aria-busy", !1).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image"), I.hide(), v !== E) {
                              b.remove();
                              return
                          }
                          let le = YV(v, p);
                          re(f.arrowLeft, "inactive", le), W(f.arrowLeft, le), le && f.arrowLeft.is(":focus") && f.arrowRight.focus();
                          let Te = QV(v, p);
                          if (re(f.arrowRight, "inactive", Te), W(f.arrowRight, Te), Te && f.arrowRight.is(":focus") && f.arrowLeft.focus(), f.view ? (i(f.view).add("opacity .3s").start({
                                  opacity: 0
                              }).then(j(f.view)), i(b).add("opacity .3s").add("transform .3s").set({
                                  x: v > V ? "80px" : "-80px"
                              }).start({
                                  opacity: 1,
                                  x: 0
                              })) : b.css("opacity", 1), f.view = b, f.view.prop("tabIndex", 0), f.items) {
                              ee(f.items, "active"), f.items.removeAttr("aria-selected");
                              var Ce = f.items.eq(v);
                              H(Ce, "active"), Ce.attr("aria-selected", !0), C(Ce)
                          }
                      }
                  }), f.close.prop("tabIndex", 0), r(":focus").addClass("active-lightbox"), m.length === 0 && (r("body").children().each(function() {
                      r(this).hasClass("w-lightbox-backdrop") || r(this).is("script") || (m.push({
                          node: r(this),
                          hidden: r(this).attr("aria-hidden"),
                          tabIndex: r(this).attr("tabIndex")
                      }), r(this).attr("aria-hidden", !0).attr("tabIndex", -1))
                  }), f.close.focus()), y
              }
          }, y.hide = function() {
              return i(f.lightbox).add("opacity .3s").start({
                  opacity: 0
              }).then(Q), y
          }, y.prev = function() {
              var v = Ms(E - 1, p);
              v > -1 && y.show(v)
          }, y.next = function() {
              var v = qs(E + 1, p);
              v > -1 && y.show(v)
          };

          function T(v) {
              return function(h) {
                  this === h.target && (h.stopPropagation(), h.preventDefault(), v())
              }
          }
          var R = T(y.prev),
              A = T(y.next),
              P = T(y.hide),
              N = function(v) {
                  var h = r(this).index();
                  v.preventDefault(), y.show(h)
              },
              D = function(v, h) {
                  v.preventDefault(), h.direction === "left" ? y.next() : h.direction === "right" && y.prev()
              },
              G = function() {
                  this.focus()
              };

          function F(v) {
              v.preventDefault()
          }

          function K(v) {
              var h = v.keyCode;
              h === 27 || z(h, "close") ? y.hide() : h === 37 || z(h, "left") ? y.prev() : h === 39 || z(h, "right") ? y.next() : z(h, "item") && r(":focus").click()
          }

          function z(v, h) {
              if (v !== 13 && v !== 32) return !1;
              var c = r(":focus").attr("class"),
                  M = L(h).trim();
              return c.includes(M)
          }

          function Q() {
              f && (f.strip.scrollLeft(0).empty(), ee(f.html, "noscroll"), H(f.lightbox, "hide"), f.view && f.view.remove(), ee(f.content, "group"), H(f.arrowLeft, "inactive"), H(f.arrowRight, "inactive"), E = f.view = void 0, m.forEach(function(v) {
                  var h = v.node;
                  h && (v.hidden ? h.attr("aria-hidden", v.hidden) : h.removeAttr("aria-hidden"), v.tabIndex ? h.attr("tabIndex", v.tabIndex) : h.removeAttr("tabIndex"))
              }), m = [], r(".active-lightbox").removeClass("active-lightbox").focus())
          }

          function te(v, h) {
              var c = X("img", "img");
              return c.one("load", function() {
                  h(c)
              }), c.attr("src", v), c
          }

          function j(v) {
              return function() {
                  v.remove()
              }
          }

          function C(v) {
              var h = v.get(0),
                  c = f.strip.get(0),
                  M = h.offsetLeft,
                  V = h.clientWidth,
                  x = c.scrollLeft,
                  $ = c.clientWidth,
                  se = c.scrollWidth - $,
                  ie;
              M < x ? ie = Math.max(0, M + V - $) : M + V > $ + x && (ie = Math.min(M, se)), ie != null && i(f.strip).add("scroll-left 500ms").start({
                  "scroll-left": ie
              })
          }

          function _(v, h, c) {
              this.$element = v, this.className = h, this.delay = c || 200, this.hide()
          }
          _.prototype.show = function() {
              var v = this;
              v.timeoutId || (v.timeoutId = setTimeout(function() {
                  v.$element.removeClass(v.className), delete v.timeoutId
              }, v.delay))
          }, _.prototype.hide = function() {
              var v = this;
              if (v.timeoutId) {
                  clearTimeout(v.timeoutId), delete v.timeoutId;
                  return
              }
              v.$element.addClass(v.className)
          };

          function L(v, h) {
              return v.replace(u, (h ? " ." : " ") + s)
          }

          function U(v) {
              return L(v, !0)
          }

          function H(v, h) {
              return v.addClass(L(h))
          }

          function ee(v, h) {
              return v.removeClass(L(h))
          }

          function re(v, h, c) {
              return v.toggleClass(L(h), c)
          }

          function W(v, h) {
              return v.attr("aria-hidden", h).attr("tabIndex", h ? -1 : 0)
          }

          function X(v, h) {
              return H(r(t.createElement(h || "div")), v)
          }

          function g(v, h) {
              var c = '<svg xmlns="http://www.w3.org/2000/svg" width="' + v + '" height="' + h + '"/>';
              return "data:image/svg+xml;charset=utf-8," + encodeURI(c)
          }
          return function() {
              var v = e.navigator.userAgent,
                  h = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
                  c = v.match(h),
                  M = v.indexOf("Android ") > -1 && v.indexOf("Chrome") === -1;
              if (!M && (!c || c[2] > 7)) return;
              var V = t.createElement("style");
              t.head.appendChild(V), e.addEventListener("resize", x, !0);

              function x() {
                  var $ = e.innerHeight,
                      se = e.innerWidth,
                      ie = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + $ + "px}.w-lightbox-view {width:" + se + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * $ + "px}.w-lightbox-image {max-width:" + se + "px;max-height:" + $ + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * $ + "px}.w-lightbox-strip {padding: 0 " + .01 * $ + "px}.w-lightbox-item {width:" + .1 * $ + "px;padding:" + .02 * $ + "px " + .01 * $ + "px}.w-lightbox-thumbnail {height:" + .1 * $ + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * $ + "px}.w-lightbox-content {margin-top:" + .02 * $ + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * $ + "px}.w-lightbox-image {max-width:" + .96 * se + "px;max-height:" + .96 * $ + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * se + "px;max-height:" + .84 * $ + "px}}";
                  V.textContent = ie
              }
              x()
          }(), y
      }
      Ps.define("lightbox", Kb.exports = function(e) {
          var t = {},
              r = Ps.env(),
              n = $V(window, document, e, r ? "#lightbox-mountpoint" : "body"),
              i = e(document),
              o, a, s = ".w-lightbox",
              u;
          t.ready = t.design = t.preview = p;

          function p() {
              a = r && Ps.env("design"), n.destroy(), u = {}, o = i.find(s), o.webflowLightBox(), o.each(function() {
                  sn(e(this), "open lightbox"), e(this).attr("aria-haspopup", "dialog")
              })
          }
          jQuery.fn.extend({
              webflowLightBox: function() {
                  var m = this;
                  e.each(m, function(y, T) {
                      var R = e.data(T, s);
                      R || (R = e.data(T, s, {
                          el: e(T),
                          mode: "images",
                          images: [],
                          embed: ""
                      })), R.el.off(s), E(R), a ? R.el.on("setting" + s, E.bind(null, R)) : R.el.on("click" + s, f(R)).on("click" + s, function(A) {
                          A.preventDefault()
                      })
                  })
              }
          });

          function E(m) {
              var y = m.el.children(".w-json").html(),
                  T, R;
              if (!y) {
                  m.items = [];
                  return
              }
              try {
                  y = JSON.parse(y)
              } catch (A) {
                  console.error("Malformed lightbox JSON configuration.", A)
              }
              I(y), y.items.forEach(function(A) {
                  A.$el = m.el
              }), T = y.group, T ? (R = u[T], R || (R = u[T] = []), m.items = R, y.items.length && (m.index = R.length, R.push.apply(R, y.items))) : (m.items = y.items, m.index = 0)
          }

          function f(m) {
              return function() {
                  m.items.length && n(m.items, m.index || 0)
              }
          }

          function I(m) {
              m.images && (m.images.forEach(function(y) {
                  y.type = "image"
              }), m.items = m.images), m.embed && (m.embed.type = "video", m.items = [m.embed]), m.groupId && (m.group = m.groupId)
          }
          return t
      })
  });
  var $b = l((_z, Qb) => {
      "use strict";
      var St = Le(),
          ZV = Bt(),
          Re = {
              ARROW_LEFT: 37,
              ARROW_UP: 38,
              ARROW_RIGHT: 39,
              ARROW_DOWN: 40,
              ESCAPE: 27,
              SPACE: 32,
              ENTER: 13,
              HOME: 36,
              END: 35
          };
      St.define("navbar", Qb.exports = function(e, t) {
          var r = {},
              n = e.tram,
              i = e(window),
              o = e(document),
              a = t.debounce,
              s, u, p, E, f = St.env(),
              I = '<div class="w-nav-overlay" data-wf-ignore />',
              m = ".w-nav",
              y = "w--open",
              T = "w--nav-dropdown-open",
              R = "w--nav-dropdown-toggle-open",
              A = "w--nav-dropdown-list-open",
              P = "w--nav-link-open",
              N = ZV.triggers,
              D = e();
          r.ready = r.design = r.preview = G, r.destroy = function() {
              D = e(), F(), u && u.length && u.each(te)
          };

          function G() {
              p = f && St.env("design"), E = St.env("editor"), s = e(document.body), u = o.find(m), u.length && (u.each(Q), F(), K())
          }

          function F() {
              St.resize.off(z)
          }

          function K() {
              St.resize.on(z)
          }

          function z() {
              u.each(h)
          }

          function Q(b, B) {
              var J = e(B),
                  Y = e.data(B, m);
              Y || (Y = e.data(B, m, {
                  open: !1,
                  el: J,
                  config: {},
                  selectedIdx: -1
              })), Y.menu = J.find(".w-nav-menu"), Y.links = Y.menu.find(".w-nav-link"), Y.dropdowns = Y.menu.find(".w-dropdown"), Y.dropdownToggle = Y.menu.find(".w-dropdown-toggle"), Y.dropdownList = Y.menu.find(".w-dropdown-list"), Y.button = J.find(".w-nav-button"), Y.container = J.find(".w-container"), Y.overlayContainerId = "w-nav-overlay-" + b, Y.outside = g(Y);
              var le = J.find(".w-nav-brand");
              le && le.attr("href") === "/" && le.attr("aria-label") == null && le.attr("aria-label", "home"), Y.button.attr("style", "-webkit-user-select: text;"), Y.button.attr("aria-label") == null && Y.button.attr("aria-label", "menu"), Y.button.attr("role", "button"), Y.button.attr("tabindex", "0"), Y.button.attr("aria-controls", Y.overlayContainerId), Y.button.attr("aria-haspopup", "menu"), Y.button.attr("aria-expanded", "false"), Y.el.off(m), Y.button.off(m), Y.menu.off(m), _(Y), p ? (j(Y), Y.el.on("setting" + m, L(Y))) : (C(Y), Y.button.on("click" + m, W(Y)), Y.menu.on("click" + m, "a", X(Y)), Y.button.on("keydown" + m, U(Y)), Y.el.on("keydown" + m, H(Y))), h(b, B)
          }

          function te(b, B) {
              var J = e.data(B, m);
              J && (j(J), e.removeData(B, m))
          }

          function j(b) {
              b.overlay && (ie(b, !0), b.overlay.remove(), b.overlay = null)
          }

          function C(b) {
              b.overlay || (b.overlay = e(I).appendTo(b.el), b.overlay.attr("id", b.overlayContainerId), b.parent = b.menu.parent(), ie(b, !0))
          }

          function _(b) {
              var B = {},
                  J = b.config || {},
                  Y = B.animation = b.el.attr("data-animation") || "default";
              B.animOver = /^over/.test(Y), B.animDirect = /left$/.test(Y) ? -1 : 1, J.animation !== Y && b.open && t.defer(re, b), B.easing = b.el.attr("data-easing") || "ease", B.easing2 = b.el.attr("data-easing2") || "ease";
              var le = b.el.attr("data-duration");
              B.duration = le != null ? Number(le) : 400, B.docHeight = b.el.attr("data-doc-height"), b.config = B
          }

          function L(b) {
              return function(B, J) {
                  J = J || {};
                  var Y = i.width();
                  _(b), J.open === !0 && $(b, !0), J.open === !1 && ie(b, !0), b.open && t.defer(function() {
                      Y !== i.width() && re(b)
                  })
              }
          }

          function U(b) {
              return function(B) {
                  switch (B.keyCode) {
                      case Re.SPACE:
                      case Re.ENTER:
                          return W(b)(), B.preventDefault(), B.stopPropagation();
                      case Re.ESCAPE:
                          return ie(b), B.preventDefault(), B.stopPropagation();
                      case Re.ARROW_RIGHT:
                      case Re.ARROW_DOWN:
                      case Re.HOME:
                      case Re.END:
                          return b.open ? (B.keyCode === Re.END ? b.selectedIdx = b.links.length - 1 : b.selectedIdx = 0, ee(b), B.preventDefault(), B.stopPropagation()) : (B.preventDefault(), B.stopPropagation())
                  }
              }
          }

          function H(b) {
              return function(B) {
                  if (b.open) switch (b.selectedIdx = b.links.index(document.activeElement), B.keyCode) {
                      case Re.HOME:
                      case Re.END:
                          return B.keyCode === Re.END ? b.selectedIdx = b.links.length - 1 : b.selectedIdx = 0, ee(b), B.preventDefault(), B.stopPropagation();
                      case Re.ESCAPE:
                          return ie(b), b.button.focus(), B.preventDefault(), B.stopPropagation();
                      case Re.ARROW_LEFT:
                      case Re.ARROW_UP:
                          return b.selectedIdx = Math.max(-1, b.selectedIdx - 1), ee(b), B.preventDefault(), B.stopPropagation();
                      case Re.ARROW_RIGHT:
                      case Re.ARROW_DOWN:
                          return b.selectedIdx = Math.min(b.links.length - 1, b.selectedIdx + 1), ee(b), B.preventDefault(), B.stopPropagation()
                  }
              }
          }

          function ee(b) {
              if (b.links[b.selectedIdx]) {
                  var B = b.links[b.selectedIdx];
                  B.focus(), X(B)
              }
          }

          function re(b) {
              b.open && (ie(b, !0), $(b, !0))
          }

          function W(b) {
              return a(function() {
                  b.open ? ie(b) : $(b)
              })
          }

          function X(b) {
              return function(B) {
                  var J = e(this),
                      Y = J.attr("href");
                  if (!St.validClick(B.currentTarget)) {
                      B.preventDefault();
                      return
                  }
                  Y && Y.indexOf("#") === 0 && b.open && ie(b)
              }
          }

          function g(b) {
              return b.outside && o.off("click" + m, b.outside),
                  function(B) {
                      var J = e(B.target);
                      E && J.closest(".w-editor-bem-EditorOverlay").length || v(b, J)
                  }
          }
          var v = a(function(b, B) {
              if (b.open) {
                  var J = B.closest(".w-nav-menu");
                  b.menu.is(J) || ie(b)
              }
          });

          function h(b, B) {
              var J = e.data(B, m),
                  Y = J.collapsed = J.button.css("display") !== "none";
              if (J.open && !Y && !p && ie(J, !0), J.container.length) {
                  var le = M(J);
                  J.links.each(le), J.dropdowns.each(le)
              }
              J.open && se(J)
          }
          var c = "max-width";

          function M(b) {
              var B = b.container.css(c);
              return B === "none" && (B = ""),
                  function(J, Y) {
                      Y = e(Y), Y.css(c, ""), Y.css(c) === "none" && Y.css(c, B)
                  }
          }

          function V(b, B) {
              B.setAttribute("data-nav-menu-open", "")
          }

          function x(b, B) {
              B.removeAttribute("data-nav-menu-open")
          }

          function $(b, B) {
              if (b.open) return;
              b.open = !0, b.menu.each(V), b.links.addClass(P), b.dropdowns.addClass(T), b.dropdownToggle.addClass(R), b.dropdownList.addClass(A), b.button.addClass(y);
              var J = b.config,
                  Y = J.animation;
              (Y === "none" || !n.support.transform || J.duration <= 0) && (B = !0);
              var le = se(b),
                  Te = b.menu.outerHeight(!0),
                  Ce = b.menu.outerWidth(!0),
                  d = b.el.height(),
                  w = b.el[0];
              if (h(0, w), N.intro(0, w), St.redraw.up(), p || o.on("click" + m, b.outside), B) {
                  O();
                  return
              }
              var S = "transform " + J.duration + "ms " + J.easing;
              if (b.overlay && (D = b.menu.prev(), b.overlay.show().append(b.menu)), J.animOver) {
                  n(b.menu).add(S).set({
                      x: J.animDirect * Ce,
                      height: le
                  }).start({
                      x: 0
                  }).then(O), b.overlay && b.overlay.width(Ce);
                  return
              }
              var q = d + Te;
              n(b.menu).add(S).set({
                  y: -q
              }).start({
                  y: 0
              }).then(O);

              function O() {
                  b.button.attr("aria-expanded", "true")
              }
          }

          function se(b) {
              var B = b.config,
                  J = B.docHeight ? o.height() : s.height();
              return B.animOver ? b.menu.height(J) : b.el.css("position") !== "fixed" && (J -= b.el.outerHeight(!0)), b.overlay && b.overlay.height(J), J
          }

          function ie(b, B) {
              if (!b.open) return;
              b.open = !1, b.button.removeClass(y);
              var J = b.config;
              if ((J.animation === "none" || !n.support.transform || J.duration <= 0) && (B = !0), N.outro(0, b.el[0]), o.off("click" + m, b.outside), B) {
                  n(b.menu).stop(), w();
                  return
              }
              var Y = "transform " + J.duration + "ms " + J.easing2,
                  le = b.menu.outerHeight(!0),
                  Te = b.menu.outerWidth(!0),
                  Ce = b.el.height();
              if (J.animOver) {
                  n(b.menu).add(Y).start({
                      x: Te * J.animDirect
                  }).then(w);
                  return
              }
              var d = Ce + le;
              n(b.menu).add(Y).start({
                  y: -d
              }).then(w);

              function w() {
                  b.menu.height(""), n(b.menu).set({
                      x: 0,
                      y: 0
                  }), b.menu.each(x), b.links.removeClass(P), b.dropdowns.removeClass(T), b.dropdownToggle.removeClass(R), b.dropdownList.removeClass(A), b.overlay && b.overlay.children().length && (D.length ? b.menu.insertAfter(D) : b.menu.prependTo(b.parent), b.overlay.attr("style", "").hide()), b.el.triggerHandler("w-close"), b.button.attr("aria-expanded", "false")
              }
          }
          return r
      })
  });
  var e_ = l((Iz, Jb) => {
      "use strict";
      var Rt = Le(),
          JV = Bt(),
          dt = {
              ARROW_LEFT: 37,
              ARROW_UP: 38,
              ARROW_RIGHT: 39,
              ARROW_DOWN: 40,
              SPACE: 32,
              ENTER: 13,
              HOME: 36,
              END: 35
          },
          Zb = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
      Rt.define("slider", Jb.exports = function(e, t) {
          var r = {},
              n = e.tram,
              i = e(document),
              o, a, s = Rt.env(),
              u = ".w-slider",
              p = '<div class="w-slider-dot" data-wf-ignore />',
              E = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
              f = "w-slider-force-show",
              I = JV.triggers,
              m, y = !1;
          r.ready = function() {
              a = Rt.env("design"), T()
          }, r.design = function() {
              a = !0, setTimeout(T, 1e3)
          }, r.preview = function() {
              a = !1, T()
          }, r.redraw = function() {
              y = !0, T(), y = !1
          }, r.destroy = R;

          function T() {
              o = i.find(u), o.length && (o.each(N), !m && (R(), A()))
          }

          function R() {
              Rt.resize.off(P), Rt.redraw.off(r.redraw)
          }

          function A() {
              Rt.resize.on(P), Rt.redraw.on(r.redraw)
          }

          function P() {
              o.filter(":visible").each(H)
          }

          function N(g, v) {
              var h = e(v),
                  c = e.data(v, u);
              c || (c = e.data(v, u, {
                  index: 0,
                  depth: 1,
                  hasFocus: {
                      keyboard: !1,
                      mouse: !1
                  },
                  el: h,
                  config: {}
              })), c.mask = h.children(".w-slider-mask"), c.left = h.children(".w-slider-arrow-left"), c.right = h.children(".w-slider-arrow-right"), c.nav = h.children(".w-slider-nav"), c.slides = c.mask.children(".w-slide"), c.slides.each(I.reset), y && (c.maskWidth = 0), h.attr("role") === void 0 && h.attr("role", "region"), h.attr("aria-label") === void 0 && h.attr("aria-label", "carousel");
              var M = c.mask.attr("id");
              if (M || (M = "w-slider-mask-" + g, c.mask.attr("id", M)), !a && !c.ariaLiveLabel && (c.ariaLiveLabel = e(E).appendTo(c.mask)), c.left.attr("role", "button"), c.left.attr("tabindex", "0"), c.left.attr("aria-controls", M), c.left.attr("aria-label") === void 0 && c.left.attr("aria-label", "previous slide"), c.right.attr("role", "button"), c.right.attr("tabindex", "0"), c.right.attr("aria-controls", M), c.right.attr("aria-label") === void 0 && c.right.attr("aria-label", "next slide"), !n.support.transform) {
                  c.left.hide(), c.right.hide(), c.nav.hide(), m = !0;
                  return
              }
              c.el.off(u), c.left.off(u), c.right.off(u), c.nav.off(u), D(c), a ? (c.el.on("setting" + u, _(c)), C(c), c.hasTimer = !1) : (c.el.on("swipe" + u, _(c)), c.left.on("click" + u, z(c)), c.right.on("click" + u, Q(c)), c.left.on("keydown" + u, K(c, z)), c.right.on("keydown" + u, K(c, Q)), c.nav.on("keydown" + u, "> div", _(c)), c.config.autoplay && !c.hasTimer && (c.hasTimer = !0, c.timerCount = 1, j(c)), c.el.on("mouseenter" + u, F(c, !0, "mouse")), c.el.on("focusin" + u, F(c, !0, "keyboard")), c.el.on("mouseleave" + u, F(c, !1, "mouse")), c.el.on("focusout" + u, F(c, !1, "keyboard"))), c.nav.on("click" + u, "> div", _(c)), s || c.mask.contents().filter(function() {
                  return this.nodeType === 3
              }).remove();
              var V = h.filter(":hidden");
              V.addClass(f);
              var x = h.parents(":hidden");
              x.addClass(f), y || H(g, v), V.removeClass(f), x.removeClass(f)
          }

          function D(g) {
              var v = {};
              v.crossOver = 0, v.animation = g.el.attr("data-animation") || "slide", v.animation === "outin" && (v.animation = "cross", v.crossOver = .5), v.easing = g.el.attr("data-easing") || "ease";
              var h = g.el.attr("data-duration");
              if (v.duration = h != null ? parseInt(h, 10) : 500, G(g.el.attr("data-infinite")) && (v.infinite = !0), G(g.el.attr("data-disable-swipe")) && (v.disableSwipe = !0), G(g.el.attr("data-hide-arrows")) ? v.hideArrows = !0 : g.config.hideArrows && (g.left.show(), g.right.show()), G(g.el.attr("data-autoplay"))) {
                  v.autoplay = !0, v.delay = parseInt(g.el.attr("data-delay"), 10) || 2e3, v.timerMax = parseInt(g.el.attr("data-autoplay-limit"), 10);
                  var c = "mousedown" + u + " touchstart" + u;
                  a || g.el.off(c).one(c, function() {
                      C(g)
                  })
              }
              var M = g.right.width();
              v.edge = M ? M + 40 : 100, g.config = v
          }

          function G(g) {
              return g === "1" || g === "true"
          }

          function F(g, v, h) {
              return function(c) {
                  if (v) g.hasFocus[h] = v;
                  else if (e.contains(g.el.get(0), c.relatedTarget) || (g.hasFocus[h] = v, g.hasFocus.mouse && h === "keyboard" || g.hasFocus.keyboard && h === "mouse")) return;
                  v ? (g.ariaLiveLabel.attr("aria-live", "polite"), g.hasTimer && C(g)) : (g.ariaLiveLabel.attr("aria-live", "off"), g.hasTimer && j(g))
              }
          }

          function K(g, v) {
              return function(h) {
                  switch (h.keyCode) {
                      case dt.SPACE:
                      case dt.ENTER:
                          return v(g)(), h.preventDefault(), h.stopPropagation()
                  }
              }
          }

          function z(g) {
              return function() {
                  U(g, {
                      index: g.index - 1,
                      vector: -1
                  })
              }
          }

          function Q(g) {
              return function() {
                  U(g, {
                      index: g.index + 1,
                      vector: 1
                  })
              }
          }

          function te(g, v) {
              var h = null;
              v === g.slides.length && (T(), ee(g)), t.each(g.anchors, function(c, M) {
                  e(c.els).each(function(V, x) {
                      e(x).index() === v && (h = M)
                  })
              }), h != null && U(g, {
                  index: h,
                  immediate: !0
              })
          }

          function j(g) {
              C(g);
              var v = g.config,
                  h = v.timerMax;
              h && g.timerCount++ > h || (g.timerId = window.setTimeout(function() {
                  g.timerId == null || a || (Q(g)(), j(g))
              }, v.delay))
          }

          function C(g) {
              window.clearTimeout(g.timerId), g.timerId = null
          }

          function _(g) {
              return function(v, h) {
                  h = h || {};
                  var c = g.config;
                  if (a && v.type === "setting") {
                      if (h.select === "prev") return z(g)();
                      if (h.select === "next") return Q(g)();
                      if (D(g), ee(g), h.select == null) return;
                      te(g, h.select);
                      return
                  }
                  if (v.type === "swipe") return c.disableSwipe || Rt.env("editor") ? void 0 : h.direction === "left" ? Q(g)() : h.direction === "right" ? z(g)() : void 0;
                  if (g.nav.has(v.target).length) {
                      var M = e(v.target).index();
                      if (v.type === "click" && U(g, {
                              index: M
                          }), v.type === "keydown") switch (v.keyCode) {
                          case dt.ENTER:
                          case dt.SPACE: {
                              U(g, {
                                  index: M
                              }), v.preventDefault();
                              break
                          }
                          case dt.ARROW_LEFT:
                          case dt.ARROW_UP: {
                              L(g.nav, Math.max(M - 1, 0)), v.preventDefault();
                              break
                          }
                          case dt.ARROW_RIGHT:
                          case dt.ARROW_DOWN: {
                              L(g.nav, Math.min(M + 1, g.pages)), v.preventDefault();
                              break
                          }
                          case dt.HOME: {
                              L(g.nav, 0), v.preventDefault();
                              break
                          }
                          case dt.END: {
                              L(g.nav, g.pages), v.preventDefault();
                              break
                          }
                          default:
                              return
                      }
                  }
              }
          }

          function L(g, v) {
              var h = g.children().eq(v).focus();
              g.children().not(h)
          }

          function U(g, v) {
              v = v || {};
              var h = g.config,
                  c = g.anchors;
              g.previous = g.index;
              var M = v.index,
                  V = {};
              M < 0 ? (M = c.length - 1, h.infinite && (V.x = -g.endX, V.from = 0, V.to = c[0].width)) : M >= c.length && (M = 0, h.infinite && (V.x = c[c.length - 1].width, V.from = -c[c.length - 1].x, V.to = V.from - V.x)), g.index = M;
              var x = g.nav.children().eq(M).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
              g.nav.children().not(x).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"), h.hideArrows && (g.index === c.length - 1 ? g.right.hide() : g.right.show(), g.index === 0 ? g.left.hide() : g.left.show());
              var $ = g.offsetX || 0,
                  se = g.offsetX = -c[g.index].x,
                  ie = {
                      x: se,
                      opacity: 1,
                      visibility: ""
                  },
                  b = e(c[g.index].els),
                  B = e(c[g.previous] && c[g.previous].els),
                  J = g.slides.not(b),
                  Y = h.animation,
                  le = h.easing,
                  Te = Math.round(h.duration),
                  Ce = v.vector || (g.index > g.previous ? 1 : -1),
                  d = "opacity " + Te + "ms " + le,
                  w = "transform " + Te + "ms " + le;
              if (b.find(Zb).removeAttr("tabindex"), b.removeAttr("aria-hidden"), b.find("*").removeAttr("aria-hidden"), J.find(Zb).attr("tabindex", "-1"), J.attr("aria-hidden", "true"), J.find("*").attr("aria-hidden", "true"), a || (b.each(I.intro), J.each(I.outro)), v.immediate && !y) {
                  n(b).set(ie), O();
                  return
              }
              if (g.index === g.previous) return;
              if (a || g.ariaLiveLabel.text(`Slide ${M + 1} of ${c.length}.`), Y === "cross") {
                  var S = Math.round(Te - Te * h.crossOver),
                      q = Math.round(Te - S);
                  d = "opacity " + S + "ms " + le, n(B).set({
                      visibility: ""
                  }).add(d).start({
                      opacity: 0
                  }), n(b).set({
                      visibility: "",
                      x: se,
                      opacity: 0,
                      zIndex: g.depth++
                  }).add(d).wait(q).then({
                      opacity: 1
                  }).then(O);
                  return
              }
              if (Y === "fade") {
                  n(B).set({
                      visibility: ""
                  }).stop(), n(b).set({
                      visibility: "",
                      x: se,
                      opacity: 0,
                      zIndex: g.depth++
                  }).add(d).start({
                      opacity: 1
                  }).then(O);
                  return
              }
              if (Y === "over") {
                  ie = {
                      x: g.endX
                  }, n(B).set({
                      visibility: ""
                  }).stop(), n(b).set({
                      visibility: "",
                      zIndex: g.depth++,
                      x: se + c[g.index].width * Ce
                  }).add(w).start({
                      x: se
                  }).then(O);
                  return
              }
              h.infinite && V.x ? (n(g.slides.not(B)).set({
                  visibility: "",
                  x: V.x
              }).add(w).start({
                  x: se
              }), n(B).set({
                  visibility: "",
                  x: V.from
              }).add(w).start({
                  x: V.to
              }), g.shifted = B) : (h.infinite && g.shifted && (n(g.shifted).set({
                  visibility: "",
                  x: $
              }), g.shifted = null), n(g.slides).set({
                  visibility: ""
              }).add(w).start({
                  x: se
              }));

              function O() {
                  b = e(c[g.index].els), J = g.slides.not(b), Y !== "slide" && (ie.visibility = "hidden"), n(J).set(ie)
              }
          }

          function H(g, v) {
              var h = e.data(v, u);
              if (h) {
                  if (W(h)) return ee(h);
                  a && X(h) && ee(h)
              }
          }

          function ee(g) {
              var v = 1,
                  h = 0,
                  c = 0,
                  M = 0,
                  V = g.maskWidth,
                  x = V - g.config.edge;
              x < 0 && (x = 0), g.anchors = [{
                  els: [],
                  x: 0,
                  width: 0
              }], g.slides.each(function(se, ie) {
                  c - h > x && (v++, h += V, g.anchors[v - 1] = {
                      els: [],
                      x: c,
                      width: 0
                  }), M = e(ie).outerWidth(!0), c += M, g.anchors[v - 1].width += M, g.anchors[v - 1].els.push(ie);
                  var b = se + 1 + " of " + g.slides.length;
                  e(ie).attr("aria-label", b), e(ie).attr("role", "group")
              }), g.endX = c, a && (g.pages = null), g.nav.length && g.pages !== v && (g.pages = v, re(g));
              var $ = g.index;
              $ >= v && ($ = v - 1), U(g, {
                  immediate: !0,
                  index: $
              })
          }

          function re(g) {
              var v = [],
                  h, c = g.el.attr("data-nav-spacing");
              c && (c = parseFloat(c) + "px");
              for (var M = 0, V = g.pages; M < V; M++) h = e(p), h.attr("aria-label", "Show slide " + (M + 1) + " of " + V).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"), g.nav.hasClass("w-num") && h.text(M + 1), c != null && h.css({
                  "margin-left": c,
                  "margin-right": c
              }), v.push(h);
              g.nav.empty().append(v)
          }

          function W(g) {
              var v = g.mask.width();
              return g.maskWidth !== v ? (g.maskWidth = v, !0) : !1
          }

          function X(g) {
              var v = 0;
              return g.slides.each(function(h, c) {
                  v += e(c).outerWidth(!0)
              }), g.slidesWidth !== v ? (g.slidesWidth = v, !0) : !1
          }
          return r
      })
  });
  var r_ = l((Tz, t_) => {
      "use strict";
      var Ct = Le(),
          eW = Bt();
      Ct.define("tabs", t_.exports = function(e) {
          var t = {},
              r = e.tram,
              n = e(document),
              i, o, a = Ct.env,
              s = a.safari,
              u = a(),
              p = "data-w-tab",
              E = "data-w-pane",
              f = ".w-tabs",
              I = "w--current",
              m = "w--tab-active",
              y = eW.triggers,
              T = !1;
          t.ready = t.design = t.preview = R, t.redraw = function() {
              T = !0, R(), T = !1
          }, t.destroy = function() {
              i = n.find(f), i.length && (i.each(N), A())
          };

          function R() {
              o = u && Ct.env("design"), i = n.find(f), i.length && (i.each(D), Ct.env("preview") && !T && i.each(N), A(), P())
          }

          function A() {
              Ct.redraw.off(t.redraw)
          }

          function P() {
              Ct.redraw.on(t.redraw)
          }

          function N(j, C) {
              var _ = e.data(C, f);
              _ && (_.links && _.links.each(y.reset), _.panes && _.panes.each(y.reset))
          }

          function D(j, C) {
              var _ = f.substr(1) + "-" + j,
                  L = e(C),
                  U = e.data(C, f);
              if (U || (U = e.data(C, f, {
                      el: L,
                      config: {}
                  })), U.current = null, U.tabIdentifier = _ + "-" + p, U.paneIdentifier = _ + "-" + E, U.menu = L.children(".w-tab-menu"), U.links = U.menu.children(".w-tab-link"), U.content = L.children(".w-tab-content"), U.panes = U.content.children(".w-tab-pane"), U.el.off(f), U.links.off(f), U.menu.attr("role", "tablist"), U.links.attr("tabindex", "-1"), G(U), !o) {
                  U.links.on("click" + f, K(U)), U.links.on("keydown" + f, z(U));
                  var H = U.links.filter("." + I),
                      ee = H.attr(p);
                  ee && Q(U, {
                      tab: ee,
                      immediate: !0
                  })
              }
          }

          function G(j) {
              var C = {};
              C.easing = j.el.attr("data-easing") || "ease";
              var _ = parseInt(j.el.attr("data-duration-in"), 10);
              _ = C.intro = _ === _ ? _ : 0;
              var L = parseInt(j.el.attr("data-duration-out"), 10);
              L = C.outro = L === L ? L : 0, C.immediate = !_ && !L, j.config = C
          }

          function F(j) {
              var C = j.current;
              return Array.prototype.findIndex.call(j.links, _ => _.getAttribute(p) === C, null)
          }

          function K(j) {
              return function(C) {
                  C.preventDefault();
                  var _ = C.currentTarget.getAttribute(p);
                  _ && Q(j, {
                      tab: _
                  })
              }
          }

          function z(j) {
              return function(C) {
                  var _ = F(j),
                      L = C.key,
                      U = {
                          ArrowLeft: _ - 1,
                          ArrowUp: _ - 1,
                          ArrowRight: _ + 1,
                          ArrowDown: _ + 1,
                          End: j.links.length - 1,
                          Home: 0
                      };
                  if (L in U) {
                      C.preventDefault();
                      var H = U[L];
                      H === -1 && (H = j.links.length - 1), H === j.links.length && (H = 0);
                      var ee = j.links[H],
                          re = ee.getAttribute(p);
                      re && Q(j, {
                          tab: re
                      })
                  }
              }
          }

          function Q(j, C) {
              C = C || {};
              var _ = j.config,
                  L = _.easing,
                  U = C.tab;
              if (U !== j.current) {
                  j.current = U;
                  var H;
                  j.links.each(function(h, c) {
                      var M = e(c);
                      if (C.immediate || _.immediate) {
                          var V = j.panes[h];
                          c.id || (c.id = j.tabIdentifier + "-" + h), V.id || (V.id = j.paneIdentifier + "-" + h), c.href = "#" + V.id, c.setAttribute("role", "tab"), c.setAttribute("aria-controls", V.id), c.setAttribute("aria-selected", "false"), V.setAttribute("role", "tabpanel"), V.setAttribute("aria-labelledby", c.id)
                      }
                      c.getAttribute(p) === U ? (H = c, M.addClass(I).removeAttr("tabindex").attr({
                          "aria-selected": "true"
                      }).each(y.intro)) : M.hasClass(I) && M.removeClass(I).attr({
                          tabindex: "-1",
                          "aria-selected": "false"
                      }).each(y.outro)
                  });
                  var ee = [],
                      re = [];
                  j.panes.each(function(h, c) {
                      var M = e(c);
                      c.getAttribute(p) === U ? ee.push(c) : M.hasClass(m) && re.push(c)
                  });
                  var W = e(ee),
                      X = e(re);
                  if (C.immediate || _.immediate) {
                      W.addClass(m).each(y.intro), X.removeClass(m), T || Ct.redraw.up();
                      return
                  } else {
                      var g = window.scrollX,
                          v = window.scrollY;
                      H.focus(), window.scrollTo(g, v)
                  }
                  X.length && _.outro ? (X.each(y.outro), r(X).add("opacity " + _.outro + "ms " + L, {
                      fallback: s
                  }).start({
                      opacity: 0
                  }).then(() => te(_, X, W))) : te(_, X, W)
              }
          }

          function te(j, C, _) {
              if (C.removeClass(m).css({
                      opacity: "",
                      transition: "",
                      transform: "",
                      width: "",
                      height: ""
                  }), _.addClass(m).each(y.intro), Ct.redraw.up(), !j.intro) return r(_).set({
                  opacity: 1
              });
              r(_).set({
                  opacity: 0
              }).redraw().add("opacity " + j.intro + "ms " + j.easing, {
                  fallback: s
              }).start({
                  opacity: 1
              })
          }
          return t
      })
  });
  Ys();
  $s();
  Js();
  ru();
  Bt();
  Mb();
  Db();
  kb();
  Ub();
  Hb();
  jb();
  Yb();
  $b();
  e_();
  r_();
})();
/*!
* tram.js v0.8.2-global
* Cross-browser CSS3 transitions in JavaScript
* https://github.com/bkwld/tram
* MIT License
*/
/*!
* Webflow._ (aka) Underscore.js 1.6.0 (custom build)
* _.each
* _.map
* _.find
* _.filter
* _.any
* _.contains
* _.delay
* _.defer
* _.throttle (webflow)
* _.debounce
* _.keys
* _.has
* _.now
* _.template (webflow: upgraded to 1.13.6)
*
* http://underscorejs.org
* (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
* Underscore may be freely distributed under the MIT license.
* @license MIT
*/
/*! Bundled license information:

timm/lib/timm.js:
(*!
 * Timm
 *
 * Immutability helpers with fast reads and acceptable writes.
 *
 * @copyright Guillermo Grau Panea 2016
 * @license MIT
 *)
*/
/**
* ----------------------------------------------------------------------
* Webflow: Interactions 2.0: Init
*/
Webflow.require('ix2').init({
  "events": {
      "e": {
          "id": "e",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-2"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a43a1633ad3e6a5e9a6959|82c9a8a8-54bf-71eb-6067-58aa34d09256",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a43a1633ad3e6a5e9a6959|82c9a8a8-54bf-71eb-6067-58aa34d09256",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1671775646561
      },
      "e-2": {
          "id": "e-2",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-2",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a43a1633ad3e6a5e9a6959|82c9a8a8-54bf-71eb-6067-58aa34d09256",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a43a1633ad3e6a5e9a6959|82c9a8a8-54bf-71eb-6067-58aa34d09256",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1671775646563
      },
      "e-3": {
          "id": "e-3",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-4"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a43a1633ad3e6a5e9a6959|dbc00131-8a1b-1e31-3e45-6d954773caa8",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a43a1633ad3e6a5e9a6959|dbc00131-8a1b-1e31-3e45-6d954773caa8",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1671776955780
      },
      "e-4": {
          "id": "e-4",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-3"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a43a1633ad3e6a5e9a6959|dbc00131-8a1b-1e31-3e45-6d954773caa8",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a43a1633ad3e6a5e9a6959|dbc00131-8a1b-1e31-3e45-6d954773caa8",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1671776955780
      },
      "e-5": {
          "id": "e-5",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-6"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a57e9a6bba275742f829bf|eb561e47-cb03-a646-ba49-a9acddba1c6c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a57e9a6bba275742f829bf|eb561e47-cb03-a646-ba49-a9acddba1c6c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1671791373052
      },
      "e-6": {
          "id": "e-6",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-2",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-5"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a57e9a6bba275742f829bf|eb561e47-cb03-a646-ba49-a9acddba1c6c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a57e9a6bba275742f829bf|eb561e47-cb03-a646-ba49-a9acddba1c6c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1671791373052
      },
      "e-7": {
          "id": "e-7",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-8"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a57e9a6bba275742f829bf|25461b7a-b71a-7f01-d198-7700f6ca7c49",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a57e9a6bba275742f829bf|25461b7a-b71a-7f01-d198-7700f6ca7c49",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1671858457313
      },
      "e-8": {
          "id": "e-8",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-7"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a57e9a6bba275742f829bf|25461b7a-b71a-7f01-d198-7700f6ca7c49",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a57e9a6bba275742f829bf|25461b7a-b71a-7f01-d198-7700f6ca7c49",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1671858457313
      },
      "e-9": {
          "id": "e-9",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-5",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-10"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a57e9a6bba275742f829bf|bb697a6d-5bda-f196-47b5-f5a7c2ed64a8",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a57e9a6bba275742f829bf|bb697a6d-5bda-f196-47b5-f5a7c2ed64a8",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1671859986863
      },
      "e-10": {
          "id": "e-10",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-6",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-9"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a57e9a6bba275742f829bf|bb697a6d-5bda-f196-47b5-f5a7c2ed64a8",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a57e9a6bba275742f829bf|bb697a6d-5bda-f196-47b5-f5a7c2ed64a8",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1671859986863
      },
      "e-11": {
          "id": "e-11",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-7",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-12"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a57e9a6bba275742f829bf|bb697a6d-5bda-f196-47b5-f5a7c2ed64a6",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a57e9a6bba275742f829bf|bb697a6d-5bda-f196-47b5-f5a7c2ed64a6",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1671860692141
      },
      "e-12": {
          "id": "e-12",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-8",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-11"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a57e9a6bba275742f829bf|bb697a6d-5bda-f196-47b5-f5a7c2ed64a6",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a57e9a6bba275742f829bf|bb697a6d-5bda-f196-47b5-f5a7c2ed64a6",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1671860692142
      },
      "e-13": {
          "id": "e-13",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "SLIDER_ACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-14"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a57e9a6bba275742f829bf|bb697a6d-5bda-f196-47b5-f5a7c2ed64a4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a57e9a6bba275742f829bf|bb697a6d-5bda-f196-47b5-f5a7c2ed64a4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1671863715698
      },
      "e-14": {
          "id": "e-14",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "SLIDER_INACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-10",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-13"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a57e9a6bba275742f829bf|bb697a6d-5bda-f196-47b5-f5a7c2ed64a4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a57e9a6bba275742f829bf|bb697a6d-5bda-f196-47b5-f5a7c2ed64a4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1671863715699
      },
      "e-15": {
          "id": "e-15",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_ACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-16"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a57e9a6bba275742f829bf|f4e0521d-f4d3-d0e1-1b42-64187e2f0df7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a57e9a6bba275742f829bf|f4e0521d-f4d3-d0e1-1b42-64187e2f0df7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1671864365442
      },
      "e-16": {
          "id": "e-16",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_INACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-10",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-15"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a57e9a6bba275742f829bf|f4e0521d-f4d3-d0e1-1b42-64187e2f0df7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a57e9a6bba275742f829bf|f4e0521d-f4d3-d0e1-1b42-64187e2f0df7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1671864365442
      },
      "e-23": {
          "id": "e-23",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-24"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a57e9a6bba275742f829bf|9f632a42-95a0-a6e5-1250-90ed404180e7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a57e9a6bba275742f829bf|9f632a42-95a0-a6e5-1250-90ed404180e7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672201312588
      },
      "e-24": {
          "id": "e-24",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-23"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a57e9a6bba275742f829bf|9f632a42-95a0-a6e5-1250-90ed404180e7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a57e9a6bba275742f829bf|9f632a42-95a0-a6e5-1250-90ed404180e7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672201312588
      },
      "e-25": {
          "id": "e-25",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-26"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|7271dd6b-5469-c7a4-dd75-4332060ea60d",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|7271dd6b-5469-c7a4-dd75-4332060ea60d",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672207559298
      },
      "e-26": {
          "id": "e-26",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-25"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|7271dd6b-5469-c7a4-dd75-4332060ea60d",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|7271dd6b-5469-c7a4-dd75-4332060ea60d",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672207559298
      },
      "e-27": {
          "id": "e-27",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-28"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|8605ca34-620f-4623-1a99-163a4a2a1aad",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|8605ca34-620f-4623-1a99-163a4a2a1aad",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672209345142
      },
      "e-28": {
          "id": "e-28",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-27"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|8605ca34-620f-4623-1a99-163a4a2a1aad",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|8605ca34-620f-4623-1a99-163a4a2a1aad",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672209345142
      },
      "e-33": {
          "id": "e-33",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-7",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-34"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|27b243ec-9f15-4442-2023-9618842c5b24",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|27b243ec-9f15-4442-2023-9618842c5b24",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672209439694
      },
      "e-34": {
          "id": "e-34",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-8",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-33"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|27b243ec-9f15-4442-2023-9618842c5b24",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|27b243ec-9f15-4442-2023-9618842c5b24",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672209439694
      },
      "e-35": {
          "id": "e-35",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-5",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-36"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|27b243ec-9f15-4442-2023-9618842c5b27",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|27b243ec-9f15-4442-2023-9618842c5b27",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672209439694
      },
      "e-36": {
          "id": "e-36",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-6",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-35"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|27b243ec-9f15-4442-2023-9618842c5b27",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|27b243ec-9f15-4442-2023-9618842c5b27",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672209439694
      },
      "e-37": {
          "id": "e-37",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "SLIDER_ACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-13",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-38"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|27b243ec-9f15-4442-2023-9618842c5afa",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|27b243ec-9f15-4442-2023-9618842c5afa",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672209574485
      },
      "e-38": {
          "id": "e-38",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "SLIDER_INACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-14",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-37"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|27b243ec-9f15-4442-2023-9618842c5afa",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|27b243ec-9f15-4442-2023-9618842c5afa",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672209574486
      },
      "e-39": {
          "id": "e-39",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "SLIDER_ACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-13",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-40"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|27b243ec-9f15-4442-2023-9618842c5b0f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|27b243ec-9f15-4442-2023-9618842c5b0f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672209756617
      },
      "e-40": {
          "id": "e-40",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "SLIDER_INACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-14",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-39"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|27b243ec-9f15-4442-2023-9618842c5b0f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|27b243ec-9f15-4442-2023-9618842c5b0f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672209756618
      },
      "e-41": {
          "id": "e-41",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-42"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|ddc01bf0-20c5-207c-192a-89fe0951c70e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|ddc01bf0-20c5-207c-192a-89fe0951c70e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672211022731
      },
      "e-42": {
          "id": "e-42",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-41"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|ddc01bf0-20c5-207c-192a-89fe0951c70e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|ddc01bf0-20c5-207c-192a-89fe0951c70e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672211022731
      },
      "e-43": {
          "id": "e-43",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-15",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-44"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|a9b390eb-056b-fc6d-6adb-e76a3f8637e2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|a9b390eb-056b-fc6d-6adb-e76a3f8637e2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672211073868
      },
      "e-44": {
          "id": "e-44",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-16",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-43"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|a9b390eb-056b-fc6d-6adb-e76a3f8637e2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|a9b390eb-056b-fc6d-6adb-e76a3f8637e2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672211073869
      },
      "e-45": {
          "id": "e-45",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-15",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-46"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|f3ff369c-b73c-9ddc-b68c-7aa712def481",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|f3ff369c-b73c-9ddc-b68c-7aa712def481",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672211412670
      },
      "e-46": {
          "id": "e-46",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-16",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-45"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|f3ff369c-b73c-9ddc-b68c-7aa712def481",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|f3ff369c-b73c-9ddc-b68c-7aa712def481",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672211412670
      },
      "e-47": {
          "id": "e-47",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-48"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|f3ff369c-b73c-9ddc-b68c-7aa712def498",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|f3ff369c-b73c-9ddc-b68c-7aa712def498",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672211412670
      },
      "e-48": {
          "id": "e-48",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-47"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|f3ff369c-b73c-9ddc-b68c-7aa712def498",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|f3ff369c-b73c-9ddc-b68c-7aa712def498",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672211412670
      },
      "e-49": {
          "id": "e-49",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-15",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-50"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|24dc20ec-4537-85db-f7ba-74f646c7636f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|24dc20ec-4537-85db-f7ba-74f646c7636f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672211413529
      },
      "e-50": {
          "id": "e-50",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-16",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-49"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|24dc20ec-4537-85db-f7ba-74f646c7636f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|24dc20ec-4537-85db-f7ba-74f646c7636f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672211413529
      },
      "e-51": {
          "id": "e-51",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-52"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|24dc20ec-4537-85db-f7ba-74f646c76386",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|24dc20ec-4537-85db-f7ba-74f646c76386",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672211413529
      },
      "e-52": {
          "id": "e-52",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-51"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|24dc20ec-4537-85db-f7ba-74f646c76386",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|24dc20ec-4537-85db-f7ba-74f646c76386",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672211413529
      },
      "e-53": {
          "id": "e-53",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "DROPDOWN_OPEN",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-17",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-54"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|fa33f1e2-811e-fc4c-e7ac-76ab0696656e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|fa33f1e2-811e-fc4c-e7ac-76ab0696656e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672216162149
      },
      "e-54": {
          "id": "e-54",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "DROPDOWN_CLOSE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-18",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-53"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|fa33f1e2-811e-fc4c-e7ac-76ab0696656e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|fa33f1e2-811e-fc4c-e7ac-76ab0696656e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672216162151
      },
      "e-55": {
          "id": "e-55",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "DROPDOWN_OPEN",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-17",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-56"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|c9f7a0df-44fd-07eb-6f05-bd61e3c92937",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|c9f7a0df-44fd-07eb-6f05-bd61e3c92937",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672216462890
      },
      "e-56": {
          "id": "e-56",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "DROPDOWN_CLOSE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-18",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-55"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|c9f7a0df-44fd-07eb-6f05-bd61e3c92937",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|c9f7a0df-44fd-07eb-6f05-bd61e3c92937",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672216462890
      },
      "e-57": {
          "id": "e-57",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "DROPDOWN_OPEN",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-17",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-58"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|dee8b1e7-5f26-6ce8-85a3-d8b5499c35e9",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|dee8b1e7-5f26-6ce8-85a3-d8b5499c35e9",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672216463867
      },
      "e-58": {
          "id": "e-58",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "DROPDOWN_CLOSE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-18",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-57"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|dee8b1e7-5f26-6ce8-85a3-d8b5499c35e9",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|dee8b1e7-5f26-6ce8-85a3-d8b5499c35e9",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672216463867
      },
      "e-59": {
          "id": "e-59",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "DROPDOWN_OPEN",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-17",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-60"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|befa9bb0-fa5a-27ab-12c5-e3e6b7bd843e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|befa9bb0-fa5a-27ab-12c5-e3e6b7bd843e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672216511649
      },
      "e-60": {
          "id": "e-60",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "DROPDOWN_CLOSE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-18",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-59"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|befa9bb0-fa5a-27ab-12c5-e3e6b7bd843e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|befa9bb0-fa5a-27ab-12c5-e3e6b7bd843e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672216511649
      },
      "e-61": {
          "id": "e-61",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-62"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|bfbbbc10-5615-5ce9-ef25-7f76925e23d1",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|bfbbbc10-5615-5ce9-ef25-7f76925e23d1",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672217122323
      },
      "e-62": {
          "id": "e-62",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-2",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-61"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|bfbbbc10-5615-5ce9-ef25-7f76925e23d1",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|bfbbbc10-5615-5ce9-ef25-7f76925e23d1",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672217122323
      },
      "e-63": {
          "id": "e-63",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-64"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ac0a69acaa431d0248e9b3|fd8a62a1-a09a-a7b7-6061-8c84547b0436",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ac0a69acaa431d0248e9b3|fd8a62a1-a09a-a7b7-6061-8c84547b0436",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672220283858
      },
      "e-64": {
          "id": "e-64",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-63"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ac0a69acaa431d0248e9b3|fd8a62a1-a09a-a7b7-6061-8c84547b0436",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ac0a69acaa431d0248e9b3|fd8a62a1-a09a-a7b7-6061-8c84547b0436",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672220283858
      },
      "e-73": {
          "id": "e-73",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-19",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-74"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ac20ea5f0e5914eff21fc7|c52cff64-0974-e98c-13a7-5295023f5332",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ac20ea5f0e5914eff21fc7|c52cff64-0974-e98c-13a7-5295023f5332",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672227857017
      },
      "e-74": {
          "id": "e-74",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-20",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-73"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ac20ea5f0e5914eff21fc7|c52cff64-0974-e98c-13a7-5295023f5332",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ac20ea5f0e5914eff21fc7|c52cff64-0974-e98c-13a7-5295023f5332",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672227857020
      },
      "e-75": {
          "id": "e-75",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-21",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-76"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ad140255e11ac96151f40f|14fba6d4-6cf2-8f6d-19cc-b6975ea28168",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ad140255e11ac96151f40f|14fba6d4-6cf2-8f6d-19cc-b6975ea28168",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672294041483
      },
      "e-76": {
          "id": "e-76",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-22",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-75"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ad140255e11ac96151f40f|14fba6d4-6cf2-8f6d-19cc-b6975ea28168",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ad140255e11ac96151f40f|14fba6d4-6cf2-8f6d-19cc-b6975ea28168",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672294041485
      },
      "e-77": {
          "id": "e-77",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-21",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-78"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ad1b536c21e6c2fdc408d1|07450fd2-aac4-a9ed-c47b-f963728edf7f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ad1b536c21e6c2fdc408d1|07450fd2-aac4-a9ed-c47b-f963728edf7f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672297036313
      },
      "e-78": {
          "id": "e-78",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-22",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-77"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ad1b536c21e6c2fdc408d1|07450fd2-aac4-a9ed-c47b-f963728edf7f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ad1b536c21e6c2fdc408d1|07450fd2-aac4-a9ed-c47b-f963728edf7f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672297036316
      },
      "e-79": {
          "id": "e-79",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-11",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-80"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ad3cc033698b7432d24d45|492bed4c-4dfc-79c1-d2da-8ee289bb6cce",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ad3cc033698b7432d24d45|492bed4c-4dfc-79c1-d2da-8ee289bb6cce",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672298767150
      },
      "e-80": {
          "id": "e-80",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-79"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ad3cc033698b7432d24d45|492bed4c-4dfc-79c1-d2da-8ee289bb6cce",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ad3cc033698b7432d24d45|492bed4c-4dfc-79c1-d2da-8ee289bb6cce",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672298767150
      },
      "e-93": {
          "id": "e-93",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-15",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-94"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7bb4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7bb4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672467862452
      },
      "e-94": {
          "id": "e-94",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-16",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-93"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7bb4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7bb4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672467862452
      },
      "e-95": {
          "id": "e-95",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-96"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7bcb",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7bcb",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672467862452
      },
      "e-96": {
          "id": "e-96",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-95"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7bcb",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7bcb",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672467862452
      },
      "e-97": {
          "id": "e-97",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-15",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-98"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7bcf",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7bcf",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672467862452
      },
      "e-98": {
          "id": "e-98",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-16",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-97"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7bcf",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7bcf",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672467862452
      },
      "e-99": {
          "id": "e-99",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-100"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7be6",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7be6",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672467862452
      },
      "e-100": {
          "id": "e-100",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-99"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7be6",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7be6",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672467862452
      },
      "e-101": {
          "id": "e-101",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-15",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-102"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7bea",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7bea",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672467862452
      },
      "e-102": {
          "id": "e-102",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-16",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-101"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7bea",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7bea",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672467862452
      },
      "e-103": {
          "id": "e-103",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-104"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7c01",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7c01",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672467862452
      },
      "e-104": {
          "id": "e-104",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-103"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7c01",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7c01",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672467862452
      },
      "e-113": {
          "id": "e-113",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_ACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-114"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a57e9a6bba275742f829bf|c4261588-b525-0901-9526-be156cf0a23b",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a57e9a6bba275742f829bf|c4261588-b525-0901-9526-be156cf0a23b",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672481900903
      },
      "e-114": {
          "id": "e-114",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_INACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-10",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-113"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a57e9a6bba275742f829bf|c4261588-b525-0901-9526-be156cf0a23b",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a57e9a6bba275742f829bf|c4261588-b525-0901-9526-be156cf0a23b",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672481900903
      },
      "e-115": {
          "id": "e-115",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_ACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-13",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-116"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|4d59bb17-2a2c-f627-c627-8343ec5d5f28",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|4d59bb17-2a2c-f627-c627-8343ec5d5f28",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672482803455
      },
      "e-116": {
          "id": "e-116",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_INACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-14",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-115"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|4d59bb17-2a2c-f627-c627-8343ec5d5f28",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|4d59bb17-2a2c-f627-c627-8343ec5d5f28",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672482803455
      },
      "e-121": {
          "id": "e-121",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-11",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-122"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a57e9a6bba275742f829bf|4e9d197a-d99d-e72d-6bf7-bb2aea974294",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a57e9a6bba275742f829bf|4e9d197a-d99d-e72d-6bf7-bb2aea974294",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672651998796
      },
      "e-122": {
          "id": "e-122",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-121"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a57e9a6bba275742f829bf|4e9d197a-d99d-e72d-6bf7-bb2aea974294",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a57e9a6bba275742f829bf|4e9d197a-d99d-e72d-6bf7-bb2aea974294",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1672651998796
      },
      "e-123": {
          "id": "e-123",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-11",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-124"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63cb6d22ea97be44faba2337|7d0af0c2-ad19-e487-117a-bea293534c63",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63cb6d22ea97be44faba2337|7d0af0c2-ad19-e487-117a-bea293534c63",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674276527799
      },
      "e-124": {
          "id": "e-124",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-123"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63cb6d22ea97be44faba2337|7d0af0c2-ad19-e487-117a-bea293534c63",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63cb6d22ea97be44faba2337|7d0af0c2-ad19-e487-117a-bea293534c63",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674276527799
      },
      "e-127": {
          "id": "e-127",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-23",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-128"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".partners-card",
              "originalId": "63a57e9a6bba275742f829bf|5986b915-ed61-138e-97b4-1397719334fd",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".partners-card",
              "originalId": "63a57e9a6bba275742f829bf|5986b915-ed61-138e-97b4-1397719334fd",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674455360867
      },
      "e-128": {
          "id": "e-128",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-24",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-127"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".partners-card",
              "originalId": "63a57e9a6bba275742f829bf|5986b915-ed61-138e-97b4-1397719334fd",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".partners-card",
              "originalId": "63a57e9a6bba275742f829bf|5986b915-ed61-138e-97b4-1397719334fd",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674455360869
      },
      "e-129": {
          "id": "e-129",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_ACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-130"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ac0a69acaa431d0248e9b3|fd2e34f8-ab24-b252-ba72-72c93e03a565",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ac0a69acaa431d0248e9b3|fd2e34f8-ab24-b252-ba72-72c93e03a565",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674470944918
      },
      "e-130": {
          "id": "e-130",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_INACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-10",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-129"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ac0a69acaa431d0248e9b3|fd2e34f8-ab24-b252-ba72-72c93e03a565",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ac0a69acaa431d0248e9b3|fd2e34f8-ab24-b252-ba72-72c93e03a565",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674470944918
      },
      "e-131": {
          "id": "e-131",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_ACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-132"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ac0a69acaa431d0248e9b3|fd2e34f8-ab24-b252-ba72-72c93e03a57a",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ac0a69acaa431d0248e9b3|fd2e34f8-ab24-b252-ba72-72c93e03a57a",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674470944918
      },
      "e-132": {
          "id": "e-132",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_INACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-10",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-131"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ac0a69acaa431d0248e9b3|fd2e34f8-ab24-b252-ba72-72c93e03a57a",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ac0a69acaa431d0248e9b3|fd2e34f8-ab24-b252-ba72-72c93e03a57a",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674470944918
      },
      "e-133": {
          "id": "e-133",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_ACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-134"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ac0a69acaa431d0248e9b3|fd2e34f8-ab24-b252-ba72-72c93e03a58f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ac0a69acaa431d0248e9b3|fd2e34f8-ab24-b252-ba72-72c93e03a58f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674470944918
      },
      "e-134": {
          "id": "e-134",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_INACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-10",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-133"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ac0a69acaa431d0248e9b3|fd2e34f8-ab24-b252-ba72-72c93e03a58f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ac0a69acaa431d0248e9b3|fd2e34f8-ab24-b252-ba72-72c93e03a58f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674470944918
      },
      "e-135": {
          "id": "e-135",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-7",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-136"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ac0a69acaa431d0248e9b3|fd2e34f8-ab24-b252-ba72-72c93e03a5a4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ac0a69acaa431d0248e9b3|fd2e34f8-ab24-b252-ba72-72c93e03a5a4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674470944918
      },
      "e-136": {
          "id": "e-136",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-8",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-135"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ac0a69acaa431d0248e9b3|fd2e34f8-ab24-b252-ba72-72c93e03a5a4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ac0a69acaa431d0248e9b3|fd2e34f8-ab24-b252-ba72-72c93e03a5a4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674470944918
      },
      "e-137": {
          "id": "e-137",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-5",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-138"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ac0a69acaa431d0248e9b3|fd2e34f8-ab24-b252-ba72-72c93e03a5a7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ac0a69acaa431d0248e9b3|fd2e34f8-ab24-b252-ba72-72c93e03a5a7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674470944918
      },
      "e-138": {
          "id": "e-138",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-6",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-137"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ac0a69acaa431d0248e9b3|fd2e34f8-ab24-b252-ba72-72c93e03a5a7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ac0a69acaa431d0248e9b3|fd2e34f8-ab24-b252-ba72-72c93e03a5a7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674470944918
      },
      "e-139": {
          "id": "e-139",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_ACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-13",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-140"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f25f269d-df43-28ca-3af8-6df9708e5155",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f25f269d-df43-28ca-3af8-6df9708e5155",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674474625810
      },
      "e-140": {
          "id": "e-140",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_INACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-14",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-139"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f25f269d-df43-28ca-3af8-6df9708e5155",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f25f269d-df43-28ca-3af8-6df9708e5155",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674474625810
      },
      "e-141": {
          "id": "e-141",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_ACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-13",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-142"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f25f269d-df43-28ca-3af8-6df9708e516a",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f25f269d-df43-28ca-3af8-6df9708e516a",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674474625810
      },
      "e-142": {
          "id": "e-142",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_INACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-14",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-141"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f25f269d-df43-28ca-3af8-6df9708e516a",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f25f269d-df43-28ca-3af8-6df9708e516a",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674474625810
      },
      "e-143": {
          "id": "e-143",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_ACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-13",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-144"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f25f269d-df43-28ca-3af8-6df9708e517f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f25f269d-df43-28ca-3af8-6df9708e517f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674474625810
      },
      "e-144": {
          "id": "e-144",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_INACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-14",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-143"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f25f269d-df43-28ca-3af8-6df9708e517f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f25f269d-df43-28ca-3af8-6df9708e517f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674474625810
      },
      "e-145": {
          "id": "e-145",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-7",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-146"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f25f269d-df43-28ca-3af8-6df9708e5194",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f25f269d-df43-28ca-3af8-6df9708e5194",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674474625810
      },
      "e-146": {
          "id": "e-146",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-8",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-145"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f25f269d-df43-28ca-3af8-6df9708e5194",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f25f269d-df43-28ca-3af8-6df9708e5194",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674474625810
      },
      "e-147": {
          "id": "e-147",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-5",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-148"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f25f269d-df43-28ca-3af8-6df9708e5197",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f25f269d-df43-28ca-3af8-6df9708e5197",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674474625810
      },
      "e-148": {
          "id": "e-148",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-6",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-147"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f25f269d-df43-28ca-3af8-6df9708e5197",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f25f269d-df43-28ca-3af8-6df9708e5197",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674474625810
      },
      "e-149": {
          "id": "e-149",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "DROPDOWN_OPEN",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-17",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-150"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afc6d2917c0c7a1d5254ea|e0e21339-8401-2df2-4a07-a3eb2bbd9951",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afc6d2917c0c7a1d5254ea|e0e21339-8401-2df2-4a07-a3eb2bbd9951",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674556564426
      },
      "e-150": {
          "id": "e-150",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "DROPDOWN_CLOSE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-18",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-149"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afc6d2917c0c7a1d5254ea|e0e21339-8401-2df2-4a07-a3eb2bbd9951",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afc6d2917c0c7a1d5254ea|e0e21339-8401-2df2-4a07-a3eb2bbd9951",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674556564426
      },
      "e-151": {
          "id": "e-151",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "DROPDOWN_OPEN",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-17",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-152"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afc6d2917c0c7a1d5254ea|e0e21339-8401-2df2-4a07-a3eb2bbd995a",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afc6d2917c0c7a1d5254ea|e0e21339-8401-2df2-4a07-a3eb2bbd995a",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674556564426
      },
      "e-152": {
          "id": "e-152",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "DROPDOWN_CLOSE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-18",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-151"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afc6d2917c0c7a1d5254ea|e0e21339-8401-2df2-4a07-a3eb2bbd995a",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afc6d2917c0c7a1d5254ea|e0e21339-8401-2df2-4a07-a3eb2bbd995a",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674556564426
      },
      "e-153": {
          "id": "e-153",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "DROPDOWN_OPEN",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-17",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-154"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afc6d2917c0c7a1d5254ea|e0e21339-8401-2df2-4a07-a3eb2bbd9963",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afc6d2917c0c7a1d5254ea|e0e21339-8401-2df2-4a07-a3eb2bbd9963",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674556564426
      },
      "e-154": {
          "id": "e-154",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "DROPDOWN_CLOSE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-18",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-153"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afc6d2917c0c7a1d5254ea|e0e21339-8401-2df2-4a07-a3eb2bbd9963",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afc6d2917c0c7a1d5254ea|e0e21339-8401-2df2-4a07-a3eb2bbd9963",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674556564426
      },
      "e-155": {
          "id": "e-155",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "DROPDOWN_OPEN",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-17",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-156"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afc6d2917c0c7a1d5254ea|e0e21339-8401-2df2-4a07-a3eb2bbd996c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afc6d2917c0c7a1d5254ea|e0e21339-8401-2df2-4a07-a3eb2bbd996c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674556564426
      },
      "e-156": {
          "id": "e-156",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "DROPDOWN_CLOSE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-18",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-155"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afc6d2917c0c7a1d5254ea|e0e21339-8401-2df2-4a07-a3eb2bbd996c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afc6d2917c0c7a1d5254ea|e0e21339-8401-2df2-4a07-a3eb2bbd996c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674556564426
      },
      "e-157": {
          "id": "e-157",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-158"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afc6d2917c0c7a1d5254ea|e0e21339-8401-2df2-4a07-a3eb2bbd9986",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afc6d2917c0c7a1d5254ea|e0e21339-8401-2df2-4a07-a3eb2bbd9986",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674556564426
      },
      "e-158": {
          "id": "e-158",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-2",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-157"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afc6d2917c0c7a1d5254ea|e0e21339-8401-2df2-4a07-a3eb2bbd9986",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afc6d2917c0c7a1d5254ea|e0e21339-8401-2df2-4a07-a3eb2bbd9986",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1674556564426
      },
      "e-159": {
          "id": "e-159",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "FADE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "fadeIn",
                  "autoStopEventId": "e-160"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".service-card",
              "originalId": "63a57e9a6bba275742f829bf|061c2828-995f-0fab-d200-8f7a4cde8424",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".service-card",
              "originalId": "63a57e9a6bba275742f829bf|061c2828-995f-0fab-d200-8f7a4cde8424",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674727467052
      },
      "e-161": {
          "id": "e-161",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "FADE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "fadeIn",
                  "autoStopEventId": "e-162"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a57e9a6bba275742f829bf|1f1a020d-bc25-9847-fe2e-8058c0c407c2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a57e9a6bba275742f829bf|1f1a020d-bc25-9847-fe2e-8058c0c407c2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674727506441
      },
      "e-163": {
          "id": "e-163",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "FADE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "fadeIn",
                  "autoStopEventId": "e-164"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a57e9a6bba275742f829bf|a1694d50-ac23-3322-e1d9-d10c75532548",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a57e9a6bba275742f829bf|a1694d50-ac23-3322-e1d9-d10c75532548",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 300,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674727515328
      },
      "e-165": {
          "id": "e-165",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-166"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".about-list",
              "originalId": "63a57e9a6bba275742f829bf|fb8c18d4-b4fe-3a0f-2be3-a59fd8b65807",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".about-list",
              "originalId": "63a57e9a6bba275742f829bf|fb8c18d4-b4fe-3a0f-2be3-a59fd8b65807",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1674727528328
      },
      "e-169": {
          "id": "e-169",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "FADE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "fadeIn",
                  "autoStopEventId": "e-170"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".work-card",
              "originalId": "63a57e9a6bba275742f829bf|d9a5ad58-057c-a763-bbe6-c17c9cb18fce",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".work-card",
              "originalId": "63a57e9a6bba275742f829bf|d9a5ad58-057c-a763-bbe6-c17c9cb18fce",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674727562929
      },
      "e-171": {
          "id": "e-171",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInRight",
                  "autoStopEventId": "e-172"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".testimonial-slider",
              "originalId": "63a57e9a6bba275742f829bf|bb697a6d-5bda-f196-47b5-f5a7c2ed64a2",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".testimonial-slider",
              "originalId": "63a57e9a6bba275742f829bf|bb697a6d-5bda-f196-47b5-f5a7c2ed64a2",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": "RIGHT",
              "effectIn": true
          },
          "createdOn": 1674727667297
      },
      "e-173": {
          "id": "e-173",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GROW_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "growIn",
                  "autoStopEventId": "e-174"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a57e9a6bba275742f829bf|4b1c7fff-4080-3c6f-f427-4f2337e36b19",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a57e9a6bba275742f829bf|4b1c7fff-4080-3c6f-f427-4f2337e36b19",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674727685233
      },
      "e-175": {
          "id": "e-175",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GROW_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "growIn",
                  "autoStopEventId": "e-176"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".features-points-wrap",
              "originalId": "63a57e9a6bba275742f829bf|16003282-e667-4114-88fc-64755df23930",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".features-points-wrap",
              "originalId": "63a57e9a6bba275742f829bf|16003282-e667-4114-88fc-64755df23930",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 0,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674727700692
      },
      "e-177": {
          "id": "e-177",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GROW_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "growIn",
                  "autoStopEventId": "e-178"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".team-card",
              "originalId": "63a57e9a6bba275742f829bf|5437c918-4aee-e803-ed09-ea60a5464a22",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".team-card",
              "originalId": "63a57e9a6bba275742f829bf|5437c918-4aee-e803-ed09-ea60a5464a22",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674727735008
      },
      "e-179": {
          "id": "e-179",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "FADE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "fadeIn",
                  "autoStopEventId": "e-180"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".social-media-wrap",
              "originalId": "63a57e9a6bba275742f829bf|5e3ffe26-ca4f-e6ee-6d06-46db6141838f",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".social-media-wrap",
              "originalId": "63a57e9a6bba275742f829bf|5e3ffe26-ca4f-e6ee-6d06-46db6141838f",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 300,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674727747296
      },
      "e-181": {
          "id": "e-181",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "FADE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "fadeIn",
                  "autoStopEventId": "e-182"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a57e9a6bba275742f829bf|7ce10f7b-78a2-c027-bbec-c5925ddcd9cc",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a57e9a6bba275742f829bf|7ce10f7b-78a2-c027-bbec-c5925ddcd9cc",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674727791288
      },
      "e-183": {
          "id": "e-183",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GROW_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "growIn",
                  "autoStopEventId": "e-184"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a57e9a6bba275742f829bf|59283b6b-b8f7-72b7-b2f7-e2515c66b753",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a57e9a6bba275742f829bf|59283b6b-b8f7-72b7-b2f7-e2515c66b753",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674727801384
      },
      "e-185": {
          "id": "e-185",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "FADE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "fadeIn",
                  "autoStopEventId": "e-186"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".partners-card",
              "originalId": "63a57e9a6bba275742f829bf|5986b915-ed61-138e-97b4-1397719334fd",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".partners-card",
              "originalId": "63a57e9a6bba275742f829bf|5986b915-ed61-138e-97b4-1397719334fd",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674727820113
      },
      "e-187": {
          "id": "e-187",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-188"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63a57e9a6bba275742f829bf|4e9d197a-d99d-e72d-6bf7-bb2aea974293",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63a57e9a6bba275742f829bf|4e9d197a-d99d-e72d-6bf7-bb2aea974293",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1674727839121
      },
      "e-189": {
          "id": "e-189",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "FADE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "fadeIn",
                  "autoStopEventId": "e-190"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "1a03c1d7-10ce-f356-ab94-97121185ed72",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "1a03c1d7-10ce-f356-ab94-97121185ed72",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674727866281
      },
      "e-191": {
          "id": "e-191",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "FADE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "fadeIn",
                  "autoStopEventId": "e-192"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".footer-link-wrap",
              "originalId": "1a03c1d7-10ce-f356-ab94-97121185ed89",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".footer-link-wrap",
              "originalId": "1a03c1d7-10ce-f356-ab94-97121185ed89",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 300,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674727894586
      },
      "e-193": {
          "id": "e-193",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "FADE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "fadeIn",
                  "autoStopEventId": "e-194"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "1a03c1d7-10ce-f356-ab94-97121185edad",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "1a03c1d7-10ce-f356-ab94-97121185edad",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 400,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674727909785
      },
      "e-195": {
          "id": "e-195",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GROW_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "growIn",
                  "autoStopEventId": "e-196"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "1a03c1d7-10ce-f356-ab94-97121185edc5",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "1a03c1d7-10ce-f356-ab94-97121185edc5",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674727947986
      },
      "e-197": {
          "id": "e-197",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "FADE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "fadeIn",
                  "autoStopEventId": "e-198"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|f05be6a8-d216-aa3c-1d27-253a23a1af45",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|f05be6a8-d216-aa3c-1d27-253a23a1af45",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674728021674
      },
      "e-199": {
          "id": "e-199",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "FADE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "fadeIn",
                  "autoStopEventId": "e-200"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|91238f5a-6eed-2770-140a-5e1c2e814575",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|91238f5a-6eed-2770-140a-5e1c2e814575",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 300,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674728030641
      },
      "e-201": {
          "id": "e-201",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "FADE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "fadeIn",
                  "autoStopEventId": "e-202"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|1fc23173-7701-9bd2-b0c1-69ce864d8e53",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|1fc23173-7701-9bd2-b0c1-69ce864d8e53",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 100,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674728047329
      },
      "e-203": {
          "id": "e-203",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-204"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".about-service-wrap",
              "originalId": "63abd7b28605626777532b54|ebeb8b7f-77c3-0e03-06d6-b4e438d41fa6",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".about-service-wrap",
              "originalId": "63abd7b28605626777532b54|ebeb8b7f-77c3-0e03-06d6-b4e438d41fa6",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1674728087769
      },
      "e-205": {
          "id": "e-205",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-206"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|0ca0ca99-ff07-72b7-68b3-5c3d1555de0e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|0ca0ca99-ff07-72b7-68b3-5c3d1555de0e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 300,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1674728101905
      },
      "e-207": {
          "id": "e-207",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-208"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|a9b390eb-056b-fc6d-6adb-e76a3f8637e2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|a9b390eb-056b-fc6d-6adb-e76a3f8637e2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1674728119441
      },
      "e-209": {
          "id": "e-209",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-210"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|f3ff369c-b73c-9ddc-b68c-7aa712def481",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|f3ff369c-b73c-9ddc-b68c-7aa712def481",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 300,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1674728140482
      },
      "e-211": {
          "id": "e-211",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-212"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abd7b28605626777532b54|24dc20ec-4537-85db-f7ba-74f646c7636f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abd7b28605626777532b54|24dc20ec-4537-85db-f7ba-74f646c7636f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 400,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1674728149722
      },
      "e-213": {
          "id": "e-213",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-214"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ac0a69acaa431d0248e9b3|fd8a62a1-a09a-a7b7-6061-8c84547b0435",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ac0a69acaa431d0248e9b3|fd8a62a1-a09a-a7b7-6061-8c84547b0435",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 300,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1674728372816
      },
      "e-215": {
          "id": "e-215",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "FADE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "fadeIn",
                  "autoStopEventId": "e-216"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ac0a69acaa431d0248e9b3|4d7767ee-20da-0d99-a634-963015e97d54",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ac0a69acaa431d0248e9b3|4d7767ee-20da-0d99-a634-963015e97d54",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674728410001
      },
      "e-217": {
          "id": "e-217",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "FADE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "fadeIn",
                  "autoStopEventId": "e-218"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ac0a69acaa431d0248e9b3|42fd7971-6395-0c6f-0f96-58a2a8c5de8d",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ac0a69acaa431d0248e9b3|42fd7971-6395-0c6f-0f96-58a2a8c5de8d",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 300,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674728416841
      },
      "e-219": {
          "id": "e-219",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-220"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".service-work-card",
              "originalId": "63ac0a69acaa431d0248e9b3|b8968a17-6e1e-7077-25a3-06ef94d2cf60",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".service-work-card",
              "originalId": "63ac0a69acaa431d0248e9b3|b8968a17-6e1e-7077-25a3-06ef94d2cf60",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1674728423761
      },
      "e-221": {
          "id": "e-221",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "FADE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "fadeIn",
                  "autoStopEventId": "e-222"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".counter-card",
              "originalId": "63ac0a69acaa431d0248e9b3|e6c9c52b-15b0-9074-952b-57376574938e",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".counter-card",
              "originalId": "63ac0a69acaa431d0248e9b3|e6c9c52b-15b0-9074-952b-57376574938e",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 100,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674728522185
      },
      "e-223": {
          "id": "e-223",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "FADE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "fadeIn",
                  "autoStopEventId": "e-224"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ac20ea5f0e5914eff21fc7|8271c3f9-06df-1cd4-306a-3e6c58b73c7b",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ac20ea5f0e5914eff21fc7|8271c3f9-06df-1cd4-306a-3e6c58b73c7b",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674728582313
      },
      "e-225": {
          "id": "e-225",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-226"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ac20ea5f0e5914eff21fc7|70dadfc5-b316-8d64-babe-ea67dfc3e14d",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ac20ea5f0e5914eff21fc7|70dadfc5-b316-8d64-babe-ea67dfc3e14d",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1674728601105
      },
      "e-227": {
          "id": "e-227",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-228"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ac20ea5f0e5914eff21fc7|4c89199f-d8b5-83ca-9e8b-deb49b976888",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ac20ea5f0e5914eff21fc7|4c89199f-d8b5-83ca-9e8b-deb49b976888",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1674728610600
      },
      "e-229": {
          "id": "e-229",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-230"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ac20ea5f0e5914eff21fc7|a358b5ca-05a3-98a8-698f-285ec5093a60",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ac20ea5f0e5914eff21fc7|a358b5ca-05a3-98a8-698f-285ec5093a60",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1674728620667
      },
      "e-231": {
          "id": "e-231",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GROW_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "growIn",
                  "autoStopEventId": "e-232"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".project-card",
              "originalId": "63ad140255e11ac96151f40f|14fba6d4-6cf2-8f6d-19cc-b6975ea28168",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".project-card",
              "originalId": "63ad140255e11ac96151f40f|14fba6d4-6cf2-8f6d-19cc-b6975ea28168",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674728665225
      },
      "e-233": {
          "id": "e-233",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "FADE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "fadeIn",
                  "autoStopEventId": "e-234"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afb6cbb337a6187a086e81|5ff04821-f614-4c3b-fc45-043d0dd24e1c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afb6cbb337a6187a086e81|5ff04821-f614-4c3b-fc45-043d0dd24e1c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674728721441
      },
      "e-235": {
          "id": "e-235",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "FADE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "fadeIn",
                  "autoStopEventId": "e-236"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afb6cbb337a6187a086e81|8f14ee2f-d0f2-d066-65eb-846ecbc1a260",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afb6cbb337a6187a086e81|8f14ee2f-d0f2-d066-65eb-846ecbc1a260",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 300,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674728728697
      },
      "e-237": {
          "id": "e-237",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GROW_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "growIn",
                  "autoStopEventId": "e-238"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afb6cbb337a6187a086e81|ac916ea2-cb6f-0a01-c368-b9dea82d1d78",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afb6cbb337a6187a086e81|ac916ea2-cb6f-0a01-c368-b9dea82d1d78",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674728738297
      },
      "e-239": {
          "id": "e-239",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-240"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7bb4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7bb4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1674728759673
      },
      "e-241": {
          "id": "e-241",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-242"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7bcf",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7bcf",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 300,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1674728772114
      },
      "e-243": {
          "id": "e-243",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-244"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7bea",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afd47583088c332d5a768f|f84a3be0-9f13-8f0b-76c4-9b0e7e3b7bea",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 400,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1674728781065
      },
      "e-245": {
          "id": "e-245",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-246"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63ad3cc033698b7432d24d45|492bed4c-4dfc-79c1-d2da-8ee289bb6ccd",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63ad3cc033698b7432d24d45|492bed4c-4dfc-79c1-d2da-8ee289bb6ccd",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1674728838697
      },
      "e-247": {
          "id": "e-247",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GROW_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "growIn",
                  "autoStopEventId": "e-248"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afc6d2917c0c7a1d5254ea|92d97fd4-4786-128d-fd38-70e4fcb5b832",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afc6d2917c0c7a1d5254ea|92d97fd4-4786-128d-fd38-70e4fcb5b832",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 0,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674728864151
      },
      "e-249": {
          "id": "e-249",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "FADE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "fadeIn",
                  "autoStopEventId": "e-250"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afc6d2917c0c7a1d5254ea|f7b2193c-b81b-ab93-ab76-83f08171e9e1",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afc6d2917c0c7a1d5254ea|f7b2193c-b81b-ab93-ab76-83f08171e9e1",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 300,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674728876113
      },
      "e-251": {
          "id": "e-251",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-252"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".style-guide-grid",
              "originalId": "63a43a1633ad3e6a5e9a6959|aadf8a77-7f63-0aba-3937-93d75f04b3e6",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".style-guide-grid",
              "originalId": "63a43a1633ad3e6a5e9a6959|aadf8a77-7f63-0aba-3937-93d75f04b3e6",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1674728956537
      },
      "e-253": {
          "id": "e-253",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GROW_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "growIn",
                  "autoStopEventId": "e-254"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afe0d21e34a7df73add076|6fdbc13d-42aa-5abf-c039-3698455d99a9",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afe0d21e34a7df73add076|6fdbc13d-42aa-5abf-c039-3698455d99a9",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674728977721
      },
      "e-255": {
          "id": "e-255",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GROW_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "growIn",
                  "autoStopEventId": "e-256"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63b2700e2091f1fb7f70ca91|2cc366f7-3a71-618a-6caf-fda6f44e32b1",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63b2700e2091f1fb7f70ca91|2cc366f7-3a71-618a-6caf-fda6f44e32b1",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674728999857
      },
      "e-257": {
          "id": "e-257",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-258"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63cb6d22ea97be44faba2337|7d0af0c2-ad19-e487-117a-bea293534c62",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63cb6d22ea97be44faba2337|7d0af0c2-ad19-e487-117a-bea293534c62",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1674729022114
      },
      "e-259": {
          "id": "e-259",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-260"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abcee1c73ddf3e950c867d|f1f844ee-82c7-aa56-f28d-e022a088bedd",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abcee1c73ddf3e950c867d|f1f844ee-82c7-aa56-f28d-e022a088bedd",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1674729069625
      },
      "e-261": {
          "id": "e-261",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-262"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63abcee1c73ddf3e950c867d|0ad85f99-248e-4357-0601-d3b02a52490c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63abcee1c73ddf3e950c867d|0ad85f99-248e-4357-0601-d3b02a52490c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 250,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1674729079841
      },
      "e-263": {
          "id": "e-263",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GROW_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "growIn",
                  "autoStopEventId": "e-264"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63afdc8e493ff7e9ad709b41|32b379c4-f97b-d118-b636-4e6db319a152",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63afdc8e493ff7e9ad709b41|32b379c4-f97b-d118-b636-4e6db319a152",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674730398792
      },
      "e-265": {
          "id": "e-265",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GROW_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "growIn",
                  "autoStopEventId": "e-266"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "63b259b63214e85efda328fb|63b259b63214e80b9fa328fc00000000000c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "63b259b63214e85efda328fb|63b259b63214e80b9fa328fc00000000000c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": null,
              "effectIn": true
          },
          "createdOn": 1674730461647
      },
      "e-267": {
          "id": "e-267",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-25",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-268"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "id": "a559faad-8eb9-9570-8757-819bbb0bfac7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "a559faad-8eb9-9570-8757-819bbb0bfac7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1702103321763
      }
  },
  "actionLists": {
      "a": {
          "id": "a",
          "title": "Primary Button In",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-n",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".yellow-button-hover",
                          "selectorGuids": ["7457b349-e98c-5b49-44b2-a10c38bbeb95"]
                      },
                      "xValue": 0,
                      "yValue": 0,
                      "xUnit": "px",
                      "yUnit": "px",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-n-2",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".yellow-button-hover",
                          "selectorGuids": ["7457b349-e98c-5b49-44b2-a10c38bbeb95"]
                      },
                      "xValue": -76,
                      "yValue": -30,
                      "xUnit": "%",
                      "yUnit": "%",
                      "zUnit": "PX"
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1671775650523
      },
      "a-2": {
          "id": "a-2",
          "title": "Primary Button Out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-2-n",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".yellow-button-hover",
                          "selectorGuids": ["7457b349-e98c-5b49-44b2-a10c38bbeb95"]
                      },
                      "xValue": 0,
                      "yValue": 0,
                      "xUnit": "%",
                      "yUnit": "%",
                      "zUnit": "PX"
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1671775650523
      },
      "a-3": {
          "id": "a-3",
          "title": "Secondary Button In",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-3-n",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".dark-button-hover",
                          "selectorGuids": ["7892d62b-363f-2d61-13cb-695f40c5ef35"]
                      },
                      "xValue": 0,
                      "yValue": 0,
                      "xUnit": "px",
                      "yUnit": "px",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-3-n-2",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".dark-button-hover",
                          "selectorGuids": ["7892d62b-363f-2d61-13cb-695f40c5ef35"]
                      },
                      "xValue": -70,
                      "yValue": -40,
                      "xUnit": "%",
                      "yUnit": "%",
                      "zUnit": "PX"
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1671776959533
      },
      "a-4": {
          "id": "a-4",
          "title": "Secondary Button Out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-4-n",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".dark-button-hover",
                          "selectorGuids": ["7892d62b-363f-2d61-13cb-695f40c5ef35"]
                      },
                      "xValue": 0,
                      "yValue": 0,
                      "xUnit": "%",
                      "yUnit": "%",
                      "zUnit": "PX"
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1671776959533
      },
      "a-5": {
          "id": "a-5",
          "title": "Testimonial Right Arrow In",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-5-n",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": true,
                          "id": "63a57e9a6bba275742f829bf|bb697a6d-5bda-f196-47b5-f5a7c2ed64a8"
                      },
                      "globalSwatchId": "56480505",
                      "rValue": 255,
                      "bValue": 52,
                      "gValue": 190,
                      "aValue": 1
                  }
              }, {
                  "id": "a-5-n-2",
                  "actionTypeId": "STYLE_FILTER",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".testimonial-right-arrow",
                          "selectorGuids": ["ebbde1cb-43f3-b043-8bb1-603874ff5462"]
                      },
                      "filters": [{
                          "type": "invert",
                          "filterId": "ea34",
                          "value": 0,
                          "unit": "%"
                      }]
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-5-n-3",
                  "actionTypeId": "STYLE_FILTER",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 200,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".testimonial-right-arrow",
                          "selectorGuids": ["ebbde1cb-43f3-b043-8bb1-603874ff5462"]
                      },
                      "filters": [{
                          "type": "invert",
                          "filterId": "e91e",
                          "value": 100,
                          "unit": "%"
                      }]
                  }
              }, {
                  "id": "a-5-n-4",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 200,
                      "target": {
                          "useEventTarget": true,
                          "id": "63a57e9a6bba275742f829bf|bb697a6d-5bda-f196-47b5-f5a7c2ed64a8"
                      },
                      "globalSwatchId": "cdcf5680",
                      "rValue": 9,
                      "bValue": 66,
                      "gValue": 18,
                      "aValue": 1
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1671859991959
      },
      "a-6": {
          "id": "a-6",
          "title": "Testimonial Right Arrow Out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-6-n",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 200,
                      "target": {
                          "useEventTarget": true,
                          "id": "63a57e9a6bba275742f829bf|bb697a6d-5bda-f196-47b5-f5a7c2ed64a8"
                      },
                      "globalSwatchId": "56480505",
                      "rValue": 255,
                      "bValue": 52,
                      "gValue": 190,
                      "aValue": 1
                  }
              }, {
                  "id": "a-6-n-2",
                  "actionTypeId": "STYLE_FILTER",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 200,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".testimonial-right-arrow",
                          "selectorGuids": ["ebbde1cb-43f3-b043-8bb1-603874ff5462"]
                      },
                      "filters": [{
                          "type": "invert",
                          "filterId": "ea34",
                          "value": 0,
                          "unit": "%"
                      }]
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1671859991959
      },
      "a-7": {
          "id": "a-7",
          "title": "Testimonial Left Arrow In",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-7-n",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": true,
                          "id": "63a57e9a6bba275742f829bf|bb697a6d-5bda-f196-47b5-f5a7c2ed64a6"
                      },
                      "globalSwatchId": "56480505",
                      "rValue": 255,
                      "bValue": 52,
                      "gValue": 190,
                      "aValue": 1
                  }
              }, {
                  "id": "a-7-n-2",
                  "actionTypeId": "STYLE_FILTER",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".testimonial-left-arrow",
                          "selectorGuids": ["a1129292-3173-ccdf-2f63-f9d02388bab6"]
                      },
                      "filters": [{
                          "type": "invert",
                          "filterId": "688e",
                          "value": 0,
                          "unit": "%"
                      }]
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-7-n-3",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 200,
                      "target": {
                          "useEventTarget": true,
                          "id": "63a57e9a6bba275742f829bf|bb697a6d-5bda-f196-47b5-f5a7c2ed64a6"
                      },
                      "globalSwatchId": "cdcf5680",
                      "rValue": 9,
                      "bValue": 66,
                      "gValue": 18,
                      "aValue": 1
                  }
              }, {
                  "id": "a-7-n-4",
                  "actionTypeId": "STYLE_FILTER",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 200,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".testimonial-left-arrow",
                          "selectorGuids": ["a1129292-3173-ccdf-2f63-f9d02388bab6"]
                      },
                      "filters": [{
                          "type": "invert",
                          "filterId": "4672",
                          "value": 100,
                          "unit": "%"
                      }]
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1671860701753
      },
      "a-8": {
          "id": "a-8",
          "title": "Testimonial Left Arrow Out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-8-n",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 200,
                      "target": {
                          "useEventTarget": true,
                          "id": "63a57e9a6bba275742f829bf|bb697a6d-5bda-f196-47b5-f5a7c2ed64a6"
                      },
                      "globalSwatchId": "56480505",
                      "rValue": 255,
                      "bValue": 52,
                      "gValue": 190,
                      "aValue": 1
                  }
              }, {
                  "id": "a-8-n-2",
                  "actionTypeId": "STYLE_FILTER",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 200,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".testimonial-left-arrow",
                          "selectorGuids": ["a1129292-3173-ccdf-2f63-f9d02388bab6"]
                      },
                      "filters": [{
                          "type": "invert",
                          "filterId": "688e",
                          "value": 0,
                          "unit": "%"
                      }]
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1671860701753
      },
      "a-9": {
          "id": "a-9",
          "title": "Testimonial Slide In",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-9-n",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".testimonial-card",
                          "selectorGuids": ["f095b7d4-98dd-bd22-da67-ac8cf5a20595"]
                      },
                      "globalSwatchId": "",
                      "rValue": 244,
                      "bValue": 244,
                      "gValue": 244,
                      "aValue": 1
                  }
              }, {
                  "id": "a-9-n-4",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".testimonial-text",
                          "selectorGuids": ["1614bb84-a157-d9b9-2ebb-c80e843636d2"]
                      },
                      "globalSwatchId": "61e9351b",
                      "rValue": 102,
                      "bValue": 137,
                      "gValue": 108,
                      "aValue": 1
                  }
              }, {
                  "id": "a-9-n-3",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".author-designation",
                          "selectorGuids": ["7a4b7409-1f68-746c-4ad2-d7c7358791ad"]
                      },
                      "globalSwatchId": "cdcf5680",
                      "rValue": 9,
                      "bValue": 66,
                      "gValue": 18,
                      "aValue": 1
                  }
              }, {
                  "id": "a-9-n-2",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".author-name",
                          "selectorGuids": ["ca46f402-dca6-8b41-91af-26fd455a358b"]
                      },
                      "globalSwatchId": "7e703881",
                      "rValue": 28,
                      "bValue": 53,
                      "gValue": 31,
                      "aValue": 1
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-9-n-5",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".testimonial-card",
                          "selectorGuids": ["f095b7d4-98dd-bd22-da67-ac8cf5a20595"]
                      },
                      "globalSwatchId": "6de1f1e1",
                      "rValue": 244,
                      "bValue": 244,
                      "gValue": 244,
                      "aValue": 1
                  }
              }, {
                  "id": "a-9-n-8",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".testimonial-text",
                          "selectorGuids": ["1614bb84-a157-d9b9-2ebb-c80e843636d2"]
                      },
                      "globalSwatchId": "61e9351b",
                      "rValue": 102,
                      "bValue": 137,
                      "gValue": 108,
                      "aValue": 1
                  }
              }, {
                  "id": "a-9-n-7",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".author-designation",
                          "selectorGuids": ["7a4b7409-1f68-746c-4ad2-d7c7358791ad"]
                      },
                      "globalSwatchId": "cdcf5680",
                      "rValue": 9,
                      "bValue": 66,
                      "gValue": 18,
                      "aValue": 1
                  }
              }, {
                  "id": "a-9-n-6",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".author-name",
                          "selectorGuids": ["ca46f402-dca6-8b41-91af-26fd455a358b"]
                      },
                      "globalSwatchId": "7e703881",
                      "rValue": 28,
                      "bValue": 53,
                      "gValue": 31,
                      "aValue": 1
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1671863720208
      },
      "a-10": {
          "id": "a-10",
          "title": "Testimonial Slide Out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-10-n",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".testimonial-card",
                          "selectorGuids": ["f095b7d4-98dd-bd22-da67-ac8cf5a20595"]
                      },
                      "globalSwatchId": "cdcf5680",
                      "rValue": 9,
                      "bValue": 66,
                      "gValue": 18,
                      "aValue": 1
                  }
              }, {
                  "id": "a-10-n-2",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".testimonial-text",
                          "selectorGuids": ["1614bb84-a157-d9b9-2ebb-c80e843636d2"]
                      },
                      "globalSwatchId": "",
                      "rValue": 232,
                      "bValue": 232,
                      "gValue": 232,
                      "aValue": 1
                  }
              }, {
                  "id": "a-10-n-3",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".author-designation",
                          "selectorGuids": ["7a4b7409-1f68-746c-4ad2-d7c7358791ad"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 1
                  }
              }, {
                  "id": "a-10-n-4",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".author-name",
                          "selectorGuids": ["ca46f402-dca6-8b41-91af-26fd455a358b"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 1
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1671863720208
      },
      "a-13": {
          "id": "a-13",
          "title": "About Testimonial In",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-13-n",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".about-testimonial-card",
                          "selectorGuids": ["e2d0d124-0fa4-5168-8cad-1a040ab8f73c"]
                      },
                      "globalSwatchId": "",
                      "rValue": 9,
                      "bValue": 66,
                      "gValue": 18,
                      "aValue": 1
                  }
              }, {
                  "id": "a-13-n-4",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".testimonial-text",
                          "selectorGuids": ["1614bb84-a157-d9b9-2ebb-c80e843636d2"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 1
                  }
              }, {
                  "id": "a-13-n-3",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".author-designation",
                          "selectorGuids": ["7a4b7409-1f68-746c-4ad2-d7c7358791ad"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 1
                  }
              }, {
                  "id": "a-13-n-2",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".author-name",
                          "selectorGuids": ["ca46f402-dca6-8b41-91af-26fd455a358b"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 1
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-13-n-5",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 400,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".about-testimonial-card",
                          "selectorGuids": ["e2d0d124-0fa4-5168-8cad-1a040ab8f73c"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 1
                  }
              }, {
                  "id": "a-13-n-8",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 400,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".testimonial-text",
                          "selectorGuids": ["1614bb84-a157-d9b9-2ebb-c80e843636d2"]
                      },
                      "globalSwatchId": "61e9351b",
                      "rValue": 102,
                      "bValue": 137,
                      "gValue": 108,
                      "aValue": 1
                  }
              }, {
                  "id": "a-13-n-7",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 400,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".author-designation",
                          "selectorGuids": ["7a4b7409-1f68-746c-4ad2-d7c7358791ad"]
                      },
                      "globalSwatchId": "cdcf5680",
                      "rValue": 9,
                      "bValue": 66,
                      "gValue": 18,
                      "aValue": 1
                  }
              }, {
                  "id": "a-13-n-6",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 400,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".author-name",
                          "selectorGuids": ["ca46f402-dca6-8b41-91af-26fd455a358b"]
                      },
                      "globalSwatchId": "7e703881",
                      "rValue": 28,
                      "bValue": 53,
                      "gValue": 31,
                      "aValue": 1
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1672209580196
      },
      "a-14": {
          "id": "a-14",
          "title": "About Testimonial Out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-14-n",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 400,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".about-testimonial-card",
                          "selectorGuids": ["e2d0d124-0fa4-5168-8cad-1a040ab8f73c"]
                      },
                      "globalSwatchId": "cdcf5680",
                      "rValue": 9,
                      "bValue": 66,
                      "gValue": 18,
                      "aValue": 1
                  }
              }, {
                  "id": "a-14-n-2",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 400,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".testimonial-text",
                          "selectorGuids": ["1614bb84-a157-d9b9-2ebb-c80e843636d2"]
                      },
                      "globalSwatchId": "",
                      "rValue": 232,
                      "bValue": 232,
                      "gValue": 232,
                      "aValue": 1
                  }
              }, {
                  "id": "a-14-n-3",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 400,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".author-designation",
                          "selectorGuids": ["7a4b7409-1f68-746c-4ad2-d7c7358791ad"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 1
                  }
              }, {
                  "id": "a-14-n-4",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 400,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".author-name",
                          "selectorGuids": ["ca46f402-dca6-8b41-91af-26fd455a358b"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 1
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1672209580196
      },
      "a-15": {
          "id": "a-15",
          "title": "Pricing Card In",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-15-n",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": true,
                          "id": "63abd7b28605626777532b54|a9b390eb-056b-fc6d-6adb-e76a3f8637e2"
                      },
                      "globalSwatchId": "6de1f1e1",
                      "rValue": 244,
                      "bValue": 244,
                      "gValue": 244,
                      "aValue": 1
                  }
              }, {
                  "id": "a-15-n-17",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".dark-overlay-button",
                          "selectorGuids": ["2be06cc1-9bf2-daa1-32c4-f384aa65ac6f"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 1
                  }
              }, {
                  "id": "a-15-n-8",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".pricing-points-line",
                          "selectorGuids": ["fad63ea7-16ab-9ad5-a0da-0cffeb8b154f"]
                      },
                      "globalSwatchId": "",
                      "rValue": 214,
                      "bValue": 214,
                      "gValue": 214,
                      "aValue": 1
                  }
              }, {
                  "id": "a-15-n-7",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".dark-button-hover",
                          "selectorGuids": ["7892d62b-363f-2d61-13cb-695f40c5ef35"]
                      },
                      "globalSwatchId": "",
                      "rValue": 31,
                      "bValue": 105,
                      "gValue": 42,
                      "aValue": 1
                  }
              }, {
                  "id": "a-15-n-6",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".dark-overlay-button",
                          "selectorGuids": ["2be06cc1-9bf2-daa1-32c4-f384aa65ac6f"]
                      },
                      "globalSwatchId": "",
                      "rValue": 9,
                      "bValue": 66,
                      "gValue": 18,
                      "aValue": 1
                  }
              }, {
                  "id": "a-15-n-5",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".pricing-points",
                          "selectorGuids": ["1b497492-3b23-b76a-f741-e1fe715dffdf"]
                      },
                      "globalSwatchId": "7e703881",
                      "rValue": 28,
                      "bValue": 53,
                      "gValue": 31,
                      "aValue": 1
                  }
              }, {
                  "id": "a-15-n-4",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".pricing-month-text",
                          "selectorGuids": ["13a3469a-4c07-1316-998e-03bcb729df0c"]
                      },
                      "globalSwatchId": "7e703881",
                      "rValue": 28,
                      "bValue": 53,
                      "gValue": 31,
                      "aValue": 1
                  }
              }, {
                  "id": "a-15-n-3",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".pricing-price",
                          "selectorGuids": ["67fe3dc9-ac16-7887-38cc-cae990beb719"]
                      },
                      "globalSwatchId": "7e703881",
                      "rValue": 28,
                      "bValue": 53,
                      "gValue": 31,
                      "aValue": 1
                  }
              }, {
                  "id": "a-15-n-2",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".pricing-standard-text",
                          "selectorGuids": ["67f6fc03-0cd8-a4ff-1a95-2a0b818c94d7"]
                      },
                      "globalSwatchId": "7e703881",
                      "rValue": 28,
                      "bValue": 53,
                      "gValue": 31,
                      "aValue": 1
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-15-n-9",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": true,
                          "id": "63abd7b28605626777532b54|a9b390eb-056b-fc6d-6adb-e76a3f8637e2"
                      },
                      "globalSwatchId": "",
                      "rValue": 9,
                      "bValue": 66,
                      "gValue": 18,
                      "aValue": 1
                  }
              }, {
                  "id": "a-15-n-18",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 200,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".dark-overlay-button",
                          "selectorGuids": ["2be06cc1-9bf2-daa1-32c4-f384aa65ac6f"]
                      },
                      "globalSwatchId": "7e703881",
                      "rValue": 28,
                      "bValue": 53,
                      "gValue": 31,
                      "aValue": 1
                  }
              }, {
                  "id": "a-15-n-16",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".pricing-standard-text",
                          "selectorGuids": ["67f6fc03-0cd8-a4ff-1a95-2a0b818c94d7"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 1
                  }
              }, {
                  "id": "a-15-n-15",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".pricing-price",
                          "selectorGuids": ["67fe3dc9-ac16-7887-38cc-cae990beb719"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 1
                  }
              }, {
                  "id": "a-15-n-14",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".pricing-month-text",
                          "selectorGuids": ["13a3469a-4c07-1316-998e-03bcb729df0c"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 1
                  }
              }, {
                  "id": "a-15-n-13",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".pricing-points",
                          "selectorGuids": ["1b497492-3b23-b76a-f741-e1fe715dffdf"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 1
                  }
              }, {
                  "id": "a-15-n-12",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".dark-overlay-button",
                          "selectorGuids": ["2be06cc1-9bf2-daa1-32c4-f384aa65ac6f"]
                      },
                      "globalSwatchId": "56480505",
                      "rValue": 255,
                      "bValue": 52,
                      "gValue": 190,
                      "aValue": 1
                  }
              }, {
                  "id": "a-15-n-11",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".dark-button-hover",
                          "selectorGuids": ["7892d62b-363f-2d61-13cb-695f40c5ef35"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 1
                  }
              }, {
                  "id": "a-15-n-10",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".pricing-points-line",
                          "selectorGuids": ["fad63ea7-16ab-9ad5-a0da-0cffeb8b154f"]
                      },
                      "globalSwatchId": "",
                      "rValue": 31,
                      "bValue": 105,
                      "gValue": 42,
                      "aValue": 1
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1672211079044
      },
      "a-16": {
          "id": "a-16",
          "title": "Pricing Card Out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-16-n",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": true,
                          "id": "63abd7b28605626777532b54|a9b390eb-056b-fc6d-6adb-e76a3f8637e2"
                      },
                      "globalSwatchId": "6de1f1e1",
                      "rValue": 244,
                      "bValue": 244,
                      "gValue": 244,
                      "aValue": 1
                  }
              }, {
                  "id": "a-16-n-2",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 200,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".dark-overlay-button",
                          "selectorGuids": ["2be06cc1-9bf2-daa1-32c4-f384aa65ac6f"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 1
                  }
              }, {
                  "id": "a-16-n-3",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".pricing-points-line",
                          "selectorGuids": ["fad63ea7-16ab-9ad5-a0da-0cffeb8b154f"]
                      },
                      "globalSwatchId": "",
                      "rValue": 214,
                      "bValue": 214,
                      "gValue": 214,
                      "aValue": 1
                  }
              }, {
                  "id": "a-16-n-4",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".dark-button-hover",
                          "selectorGuids": ["7892d62b-363f-2d61-13cb-695f40c5ef35"]
                      },
                      "globalSwatchId": "",
                      "rValue": 31,
                      "bValue": 105,
                      "gValue": 42,
                      "aValue": 1
                  }
              }, {
                  "id": "a-16-n-5",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".dark-overlay-button",
                          "selectorGuids": ["2be06cc1-9bf2-daa1-32c4-f384aa65ac6f"]
                      },
                      "globalSwatchId": "",
                      "rValue": 9,
                      "bValue": 66,
                      "gValue": 18,
                      "aValue": 1
                  }
              }, {
                  "id": "a-16-n-6",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".pricing-points",
                          "selectorGuids": ["1b497492-3b23-b76a-f741-e1fe715dffdf"]
                      },
                      "globalSwatchId": "7e703881",
                      "rValue": 28,
                      "bValue": 53,
                      "gValue": 31,
                      "aValue": 1
                  }
              }, {
                  "id": "a-16-n-7",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".pricing-month-text",
                          "selectorGuids": ["13a3469a-4c07-1316-998e-03bcb729df0c"]
                      },
                      "globalSwatchId": "7e703881",
                      "rValue": 28,
                      "bValue": 53,
                      "gValue": 31,
                      "aValue": 1
                  }
              }, {
                  "id": "a-16-n-8",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".pricing-price",
                          "selectorGuids": ["67fe3dc9-ac16-7887-38cc-cae990beb719"]
                      },
                      "globalSwatchId": "7e703881",
                      "rValue": 28,
                      "bValue": 53,
                      "gValue": 31,
                      "aValue": 1
                  }
              }, {
                  "id": "a-16-n-9",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".pricing-standard-text",
                          "selectorGuids": ["67f6fc03-0cd8-a4ff-1a95-2a0b818c94d7"]
                      },
                      "globalSwatchId": "7e703881",
                      "rValue": 28,
                      "bValue": 53,
                      "gValue": 31,
                      "aValue": 1
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1672211079044
      },
      "a-17": {
          "id": "a-17",
          "title": "About FAQ In",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-17-n",
                  "actionTypeId": "STYLE_SIZE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".faq-answer-wrap",
                          "selectorGuids": ["0c2f55a3-aa42-42cf-4b4d-c8363dc028a5"]
                      },
                      "heightValue": 0,
                      "widthUnit": "PX",
                      "heightUnit": "px",
                      "locked": false
                  }
              }, {
                  "id": "a-17-n-7",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".faq-icon",
                          "selectorGuids": ["89533e31-83ac-b482-0e9f-dbd121057209"]
                      },
                      "globalSwatchId": "7e703881",
                      "rValue": 28,
                      "bValue": 53,
                      "gValue": 31,
                      "aValue": 1
                  }
              }, {
                  "id": "a-17-n-3",
                  "actionTypeId": "TRANSFORM_ROTATE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".faq-icon",
                          "selectorGuids": ["89533e31-83ac-b482-0e9f-dbd121057209"]
                      },
                      "xValue": null,
                      "yValue": null,
                      "zValue": -90,
                      "xUnit": "deg",
                      "yUnit": "deg",
                      "zUnit": "deg"
                  }
              }, {
                  "id": "a-17-n-2",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".faq-answer-wrap",
                          "selectorGuids": ["0c2f55a3-aa42-42cf-4b4d-c8363dc028a5"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-17-n-4",
                  "actionTypeId": "STYLE_SIZE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 400,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".faq-answer-wrap",
                          "selectorGuids": ["0c2f55a3-aa42-42cf-4b4d-c8363dc028a5"]
                      },
                      "widthUnit": "PX",
                      "heightUnit": "AUTO",
                      "locked": false
                  }
              }, {
                  "id": "a-17-n-8",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 400,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".faq-icon",
                          "selectorGuids": ["89533e31-83ac-b482-0e9f-dbd121057209"]
                      },
                      "globalSwatchId": "56480505",
                      "rValue": 255,
                      "bValue": 52,
                      "gValue": 190,
                      "aValue": 1
                  }
              }, {
                  "id": "a-17-n-6",
                  "actionTypeId": "TRANSFORM_ROTATE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 400,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".faq-icon",
                          "selectorGuids": ["89533e31-83ac-b482-0e9f-dbd121057209"]
                      },
                      "zValue": 0,
                      "xUnit": "DEG",
                      "yUnit": "DEG",
                      "zUnit": "deg"
                  }
              }, {
                  "id": "a-17-n-5",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 400,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".faq-answer-wrap",
                          "selectorGuids": ["0c2f55a3-aa42-42cf-4b4d-c8363dc028a5"]
                      },
                      "value": 1,
                      "unit": ""
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1672216186942
      },
      "a-18": {
          "id": "a-18",
          "title": "About FAQ Out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-18-n",
                  "actionTypeId": "STYLE_SIZE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 400,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".faq-answer-wrap",
                          "selectorGuids": ["0c2f55a3-aa42-42cf-4b4d-c8363dc028a5"]
                      },
                      "heightValue": 0,
                      "widthUnit": "PX",
                      "heightUnit": "px",
                      "locked": false
                  }
              }, {
                  "id": "a-18-n-4",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 400,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".faq-icon",
                          "selectorGuids": ["89533e31-83ac-b482-0e9f-dbd121057209"]
                      },
                      "globalSwatchId": "7e703881",
                      "rValue": 28,
                      "bValue": 53,
                      "gValue": 31,
                      "aValue": 1
                  }
              }, {
                  "id": "a-18-n-2",
                  "actionTypeId": "TRANSFORM_ROTATE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 400,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".faq-icon",
                          "selectorGuids": ["89533e31-83ac-b482-0e9f-dbd121057209"]
                      },
                      "xValue": null,
                      "yValue": null,
                      "zValue": -90,
                      "xUnit": "deg",
                      "yUnit": "deg",
                      "zUnit": "deg"
                  }
              }, {
                  "id": "a-18-n-3",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 400,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".faq-answer-wrap",
                          "selectorGuids": ["0c2f55a3-aa42-42cf-4b4d-c8363dc028a5"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1672216186942
      },
      "a-19": {
          "id": "a-19",
          "title": "Service Video Button In",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-19-n",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": true,
                          "id": "63ac20ea5f0e5914eff21fc7|c52cff64-0974-e98c-13a7-5295023f5332"
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 0.08
                  }
              }, {
                  "id": "a-19-n-5",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".service-button-overlay-small",
                          "selectorGuids": ["1165985a-e619-4f7b-4062-e8713865f664"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 0.95
                  }
              }, {
                  "id": "a-19-n-4",
                  "actionTypeId": "STYLE_BORDER",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".service-button-overlay",
                          "selectorGuids": ["f0eba7f0-cc80-416d-2aaa-849afbf79411"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 0.52
                  }
              }, {
                  "id": "a-19-n-3",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".service-button-overlay",
                          "selectorGuids": ["f0eba7f0-cc80-416d-2aaa-849afbf79411"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 0.17
                  }
              }, {
                  "id": "a-19-n-2",
                  "actionTypeId": "STYLE_BORDER",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": true,
                          "id": "63ac20ea5f0e5914eff21fc7|c52cff64-0974-e98c-13a7-5295023f5332"
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 0.42
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-19-n-6",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": true,
                          "id": "63ac20ea5f0e5914eff21fc7|c52cff64-0974-e98c-13a7-5295023f5332"
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 0.16
                  }
              }, {
                  "id": "a-19-n-10",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".service-button-overlay-small",
                          "selectorGuids": ["1165985a-e619-4f7b-4062-e8713865f664"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 1
                  }
              }, {
                  "id": "a-19-n-9",
                  "actionTypeId": "STYLE_BORDER",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".service-button-overlay",
                          "selectorGuids": ["f0eba7f0-cc80-416d-2aaa-849afbf79411"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 1
                  }
              }, {
                  "id": "a-19-n-8",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".service-button-overlay",
                          "selectorGuids": ["f0eba7f0-cc80-416d-2aaa-849afbf79411"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 0.34
                  }
              }, {
                  "id": "a-19-n-7",
                  "actionTypeId": "STYLE_BORDER",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": true,
                          "id": "63ac20ea5f0e5914eff21fc7|c52cff64-0974-e98c-13a7-5295023f5332"
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 0.65
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1672227918807
      },
      "a-20": {
          "id": "a-20",
          "title": "Service Video Button Out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-20-n",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": true,
                          "id": "63ac20ea5f0e5914eff21fc7|c52cff64-0974-e98c-13a7-5295023f5332"
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 0.08
                  }
              }, {
                  "id": "a-20-n-2",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".service-button-overlay-small",
                          "selectorGuids": ["1165985a-e619-4f7b-4062-e8713865f664"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 0.95
                  }
              }, {
                  "id": "a-20-n-3",
                  "actionTypeId": "STYLE_BORDER",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".service-button-overlay",
                          "selectorGuids": ["f0eba7f0-cc80-416d-2aaa-849afbf79411"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 0.52
                  }
              }, {
                  "id": "a-20-n-4",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".service-button-overlay",
                          "selectorGuids": ["f0eba7f0-cc80-416d-2aaa-849afbf79411"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 0.17
                  }
              }, {
                  "id": "a-20-n-5",
                  "actionTypeId": "STYLE_BORDER",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": true,
                          "id": "63ac20ea5f0e5914eff21fc7|c52cff64-0974-e98c-13a7-5295023f5332"
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 0.42
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1672227918807
      },
      "a-21": {
          "id": "a-21",
          "title": "Project Card In",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-21-n",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".project-card-overlay",
                          "selectorGuids": ["8886846e-2dfe-c46b-cbf4-5a8d92fc0a5a"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }, {
                  "id": "a-21-n-2",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".project-card-overlay",
                          "selectorGuids": ["8886846e-2dfe-c46b-cbf4-5a8d92fc0a5a"]
                      },
                      "value": "none"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-21-n-3",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".project-card-overlay",
                          "selectorGuids": ["8886846e-2dfe-c46b-cbf4-5a8d92fc0a5a"]
                      },
                      "value": "flex"
                  }
              }, {
                  "id": "a-21-n-4",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".project-card-overlay",
                          "selectorGuids": ["8886846e-2dfe-c46b-cbf4-5a8d92fc0a5a"]
                      },
                      "value": 1,
                      "unit": ""
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1672294044872
      },
      "a-22": {
          "id": "a-22",
          "title": "Project Card Out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-22-n",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".project-card-overlay",
                          "selectorGuids": ["8886846e-2dfe-c46b-cbf4-5a8d92fc0a5a"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-22-n-2",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".project-card-overlay",
                          "selectorGuids": ["8886846e-2dfe-c46b-cbf4-5a8d92fc0a5a"]
                      },
                      "value": "none"
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1672294044872
      },
      "a-11": {
          "id": "a-11",
          "title": "Blog Image Hover In",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-11-n",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".blog-image-overlay",
                          "selectorGuids": ["37a1794a-a62d-a50d-7c20-2140b56192ba"]
                      },
                      "value": "none"
                  }
              }, {
                  "id": "a-11-n-3",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".blog-image-overlay",
                          "selectorGuids": ["37a1794a-a62d-a50d-7c20-2140b56192ba"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-11-n-2",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".blog-image-overlay",
                          "selectorGuids": ["37a1794a-a62d-a50d-7c20-2140b56192ba"]
                      },
                      "value": "flex"
                  }
              }, {
                  "id": "a-11-n-4",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".blog-image-overlay",
                          "selectorGuids": ["37a1794a-a62d-a50d-7c20-2140b56192ba"]
                      },
                      "value": 1,
                      "unit": ""
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1672200715275
      },
      "a-12": {
          "id": "a-12",
          "title": "Blog Image Hover Out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-12-n-2",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".blog-image-overlay",
                          "selectorGuids": ["37a1794a-a62d-a50d-7c20-2140b56192ba"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-12-n",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".blog-image-overlay",
                          "selectorGuids": ["37a1794a-a62d-a50d-7c20-2140b56192ba"]
                      },
                      "value": "none"
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1672200715275
      },
      "a-23": {
          "id": "a-23",
          "title": "Partners Hover In",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-23-n",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".partner-background-image",
                          "selectorGuids": ["5119dccc-3455-e872-b0ec-27a946cb8b2d"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }, {
                  "id": "a-23-n-2",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".partners-overlay",
                          "selectorGuids": ["877326b0-d18f-864f-4edd-62f306ae8a5d"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-23-n-3",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 100,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".partner-background-image",
                          "selectorGuids": ["5119dccc-3455-e872-b0ec-27a946cb8b2d"]
                      },
                      "value": 1,
                      "unit": ""
                  }
              }, {
                  "id": "a-23-n-4",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 100,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".partners-overlay",
                          "selectorGuids": ["877326b0-d18f-864f-4edd-62f306ae8a5d"]
                      },
                      "value": 1,
                      "unit": ""
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1674455365257
      },
      "a-24": {
          "id": "a-24",
          "title": "Partners Hover Out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-24-n",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 100,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".partner-background-image",
                          "selectorGuids": ["5119dccc-3455-e872-b0ec-27a946cb8b2d"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }, {
                  "id": "a-24-n-2",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 100,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".partners-overlay",
                          "selectorGuids": ["877326b0-d18f-864f-4edd-62f306ae8a5d"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1674455365257
      },
      "a-25": {
          "id": "a-25",
          "title": "Hireus Badge Close 2",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-25-n",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "useEventTarget": "PARENT",
                          "selector": ".hireus-badge",
                          "selectorGuids": ["c7dbe36b-857f-d9b5-70ca-1a89c83e5244"]
                      },
                      "value": "block"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-25-n-2",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "useEventTarget": "PARENT",
                          "selector": ".hireus-badge",
                          "selectorGuids": ["c7dbe36b-857f-d9b5-70ca-1a89c83e5244"]
                      },
                      "value": "none"
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1701164665883
      },
      "fadeIn": {
          "id": "fadeIn",
          "useFirstGroupAsInitialState": true,
          "actionItemGroups": [{
              "actionItems": [{
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "duration": 0,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "value": 0
                  }
              }]
          }, {
              "actionItems": [{
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "outQuart",
                      "duration": 1000,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "value": 1
                  }
              }]
          }]
      },
      "slideInBottom": {
          "id": "slideInBottom",
          "useFirstGroupAsInitialState": true,
          "actionItemGroups": [{
              "actionItems": [{
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "duration": 0,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "value": 0
                  }
              }]
          }, {
              "actionItems": [{
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "duration": 0,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "xValue": 0,
                      "yValue": 100,
                      "xUnit": "PX",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "outQuart",
                      "duration": 1000,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "xValue": 0,
                      "yValue": 0,
                      "xUnit": "PX",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }, {
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "outQuart",
                      "duration": 1000,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "value": 1
                  }
              }]
          }]
      },
      "slideInRight": {
          "id": "slideInRight",
          "useFirstGroupAsInitialState": true,
          "actionItemGroups": [{
              "actionItems": [{
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "duration": 0,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "value": 0
                  }
              }]
          }, {
              "actionItems": [{
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "duration": 0,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "xValue": 100,
                      "yValue": 0,
                      "xUnit": "PX",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "outQuart",
                      "duration": 1000,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "value": 1
                  }
              }, {
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "outQuart",
                      "duration": 1000,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "xValue": 0,
                      "yValue": 0,
                      "xUnit": "PX",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }]
      },
      "growIn": {
          "id": "growIn",
          "useFirstGroupAsInitialState": true,
          "actionItemGroups": [{
              "actionItems": [{
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "duration": 0,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "value": 0
                  }
              }]
          }, {
              "actionItems": [{
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "duration": 0,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "xValue": 0.7500000000000001,
                      "yValue": 0.7500000000000001
                  }
              }]
          }, {
              "actionItems": [{
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "outQuart",
                      "duration": 1000,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "xValue": 1,
                      "yValue": 1
                  }
              }, {
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "outQuart",
                      "duration": 1000,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "value": 1
                  }
              }]
          }]
      }
  },
  "site": {
      "mediaQueries": [{
          "key": "main",
          "min": 992,
          "max": 10000
      }, {
          "key": "medium",
          "min": 768,
          "max": 991
      }, {
          "key": "small",
          "min": 480,
          "max": 767
      }, {
          "key": "tiny",
          "min": 0,
          "max": 479
      }]
  }
});