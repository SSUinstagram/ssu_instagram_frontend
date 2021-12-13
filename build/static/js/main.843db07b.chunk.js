(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    38: function (n, e, t) {},
    39: function (n, e, t) {},
    62: function (n, e, t) {
      "use strict";
      t.r(e);
      var i,
        a = t(0),
        r = t.n(a),
        o = t(28),
        c = t.n(o),
        d = (t(38), t(12)),
        s = t(2),
        l = (t(39), t(7)),
        p = t(8),
        x = t.p + "static/media/instagram.56e41213.jpeg",
        b = t(1),
        u = p.a.div(
          i ||
            (i = Object(l.a)([
              "\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n  text-align: center;\n  align-items: center;\n",
            ]))
        );
      var m,
        j,
        f,
        h,
        g,
        O = function () {
          return Object(b.jsxs)(u, {
            children: [
              Object(b.jsx)("img", { src: x, alt: "mainImage" }),
              "\uc22d\uc2e4\ub300\ud559\uad50 \uc778\uc2a4\ud0c0\uadf8\ub7a8",
            ],
          });
        },
        w = t(17),
        y = t.n(w),
        v = t(32),
        k = t(9),
        z = t(3),
        C = t(4),
        N = "#FFC46B",
        S = t(33),
        P = t.n(S),
        B = p.a.div(
          m ||
            (m = Object(l.a)([
              "\n  width: 100%;\n  display: flex;\n  padding-top: 100px;\n  padding-bottom: 80px;\n  align-items: center;\n  flex-direction: column;\n  @media screen and (max-width: 1145px) {\n    height: 559px;\n  }\n",
            ]))
        ),
        E = p.a.div(
          j ||
            (j = Object(l.a)([
              '\n  width: 100%;\n  height: 100%;\n  padding: 70px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: "YonnGodic340";\n\n  @media screen and (max-width: 1145px) {\n    width: 100vw;\n  }\n',
            ]))
        ),
        A = p.a.button(
          f ||
            (f = Object(l.a)([
              "\n  margin-top: 10px;\n  padding: 10px;\n  width: 400px;\n  background-color: ",
              ';\n  font-family: "YonnGodic340";\n  color: white;\n  border-radius: 3px;\n  border: 1px solid ',
              ";\n\n  @media screen and (max-width: 1145px) {\n    width: 100%;\n  }\n",
            ])),
          N,
          N
        ),
        F = p.a.button(
          h ||
            (h = Object(l.a)([
              "\n  margin-top: 10px;\n  padding: 10px;\n  width: 400px;\n  background-color: ",
              ';\n  font-family: "YonnGodic340";\n  color: white;\n  border-radius: 3px;\n  border: 1px solid ',
              ";\n\n  @media screen and (max-width: 1145px) {\n    width: 100%;\n  }\n",
            ])),
          N,
          N
        ),
        I = p.a.div(
          g ||
            (g = Object(l.a)([
              "\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  input {\n    outline: none;\n    border: none;\n  }\n  .email {\n    margin-top: 1px;\n    padding-bottom: 10px;\n    padding-left: 10px;\n    font-size: 13px;\n    display: flex;\n    flex-direction: column;\n    border: 1px solid black;\n    border-left: ",
              ";\n    color: gray;\n  }\n  .password {\n    margin-top: 1px;\n    padding-bottom: 10px;\n    padding-left: 10px;\n    font-size: 13px;\n    display: flex;\n    flex-direction: column;\n    border: 1px solid black;\n    border-left: ",
              ";\n    color: gray;\n  }\n\n  @media screen and (max-width: 1145px) {\n    width: 100%;\n  }\n",
            ])),
          function (n) {
            return n.emailState ? "3px solid#2BA8E0" : "1px solid black";
          },
          function (n) {
            return n.passwordState ? "3px solid#2BA8E0" : " 1px solid black";
          }
        );
      var Z,
        W,
        G,
        Y,
        D = function () {
          var n = Object(a.useState)(!1),
            e = Object(C.a)(n, 2),
            t = e[0],
            i = e[1],
            r = Object(a.useState)(!1),
            o = Object(C.a)(r, 2),
            c = o[0],
            d = o[1],
            l = Object(a.useRef)(null),
            p = Object(a.useRef)(null),
            x = Object(s.f)(),
            u = Object(a.useState)({ email: "", password: "" }),
            m = Object(C.a)(u, 2),
            j = m[0],
            f = m[1],
            h = function (n) {
              var e = n.target,
                t = e.value,
                i = e.type;
              f(Object(z.a)(Object(z.a)({}, j), {}, Object(k.a)({}, i, t)));
            },
            g = (function () {
              var n = Object(v.a)(
                y.a.mark(function n(e) {
                  var t;
                  return y.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), P.a.get("/test");
                        case 2:
                          (t = n.sent), t.data;
                        case 4:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              );
              return function (e) {
                return n.apply(this, arguments);
              };
            })(),
            O = function (n) {
              "email" === n
                ? (l.current.focus(), i(!0), d(!1))
                : "password" === n && (p.current.focus(), i(!1), d(!0));
            };
          return Object(b.jsx)(B, {
            children: Object(b.jsxs)(E, {
              children: [
                Object(b.jsxs)(I, {
                  emailState: t,
                  passwordState: c,
                  children: [
                    Object(b.jsxs)("div", {
                      className: "email",
                      onClick: function () {
                        return O("email");
                      },
                      children: [
                        "\uc774\uba54\uc77c\uc8fc\uc18c",
                        Object(b.jsx)("input", {
                          type: "email",
                          name: "email",
                          onChange: h,
                          ref: l,
                        }),
                      ],
                    }),
                    Object(b.jsxs)("div", {
                      className: "password",
                      onClick: function () {
                        return O("password");
                      },
                      children: [
                        "\ube44\ubc00\ubc88\ud638",
                        Object(b.jsx)("input", {
                          type: "password",
                          name: "password",
                          onChange: h,
                          ref: p,
                        }),
                      ],
                    }),
                  ],
                }),
                Object(b.jsx)(F, {
                  onClick: g,
                  children: "\ub85c\uadf8\uc778",
                }),
                Object(b.jsx)(A, {
                  onClick: function (n) {
                    x("/account");
                  },
                  children: "\uc0ac\uc6a9\uc790 \ub4f1\ub85d",
                }),
              ],
            }),
          });
        },
        J = function () {
          return Object(b.jsxs)("div", {
            children: [Object(b.jsx)(O, {}), Object(b.jsx)(D, {})],
          });
        },
        L = p.a.div(
          Z ||
            (Z = Object(l.a)([
              "\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n\n  @media screen and (max-width: 1024px) {\n    width: 100%;\n  }\n",
            ]))
        ),
        R = p.a.div(
          W ||
            (W = Object(l.a)([
              "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 20px;\n  margin-bottom: 50px;\n  h1 {\n    padding-top: 30px;\n    font-size: 30px;\n    line-height: 0;\n  }\n  p {\n    font-size: 15px;\n    line-height: 20px;\n    color: gray;\n  }\n\n  @media screen and (max-width: 1024px) {\n    width: 100%;\n  }\n\n  @media screen and (max-width: 480px) {\n    h1 {\n      padding-top: 30px;\n      font-size: 45px;\n      line-height: 0;\n    }\n    p {\n      font-size: 13px;\n      line-height: 20px;\n      color: gray;\n    }\n  }\n\n  @media screen and (max-width: 400px) {\n    p {\n      font-size: 10px;\n      line-height: 20px;\n      color: gray;\n    }\n  }\n",
            ]))
        ),
        T = p.a.button(
          G ||
            (G = Object(l.a)([
              "\n  margin-top: 30px;\n  padding: 10px;\n  width: 554px;\n  background-color: ",
              ";\n  color: white;\n  border-radius: 3px;\n  border: 1px solid ",
              ";\n\n  @media screen and (max-width: 1024px) {\n    width: 80%;\n  }\n",
            ])),
          N,
          N
        ),
        _ = p.a.div(
          Y ||
            (Y = Object(l.a)([
              "\n  width: 554px;\n  display: flex;\n  background: white;\n  flex-direction: column;\n  input {\n    outline: gray;\n    border: none;\n    background: none;\n  }\n  label {\n    line-height: 300%;\n  }\n  .invalidEmail {\n    color: red;\n    font-size: 8px;\n    line-height: 0;\n  }\n  .validEmail {\n    color: green;\n    font-size: 8px;\n    line-height: 0;\n  }\n  .validEmail {\n    color: green;\n    font-size: 8px;\n    line-height: 0;\n  }\n  .invalidPW {\n    color: red;\n    font-size: 8px;\n    line-height: 0;\n  }\n  .validPW {\n    color: green;\n    font-size: 8px;\n    line-height: 0;\n  }\n  .email {\n    margin-top: 1px;\n    padding-bottom: 18px;\n    padding-left: 10px;\n    font-size: 13px;\n    display: flex;\n    flex-direction: column;\n    border: 1px solid gray;\n    border-left: ",
              ";\n    color: gray;\n  }\n  .password {\n    padding-bottom: 18px;\n    padding-left: 10px;\n    font-size: 13px;\n    display: flex;\n    flex-direction: column;\n    border: 1px solid gray;\n    border-left: ",
              ";\n    color: gray;\n  }\n  .confirmPassword {\n    padding-bottom: 18px;\n    padding-left: 10px;\n    font-size: 13px;\n    display: flex;\n    flex-direction: column;\n    border: 1px solid gray;\n    border-left: ",
              ";\n    color: gray;\n  }\n  .userName {\n    padding-bottom: 18px;\n    padding-left: 10px;\n    font-size: 13px;\n    display: flex;\n    flex-direction: column;\n    border: 1px solid gray;\n    border-left: ",
              ";\n    color: gray;\n  }\n  .id {\n    padding-bottom: 18px;\n    padding-left: 10px;\n    font-size: 13px;\n    display: flex;\n    flex-direction: column;\n    border: 1px solid gray;\n    border-left: ",
              ";\n    color: gray;\n  }\n\n  @media screen and (max-width: 1024px) {\n    width: 80%;\n  }\n",
            ])),
          function (n) {
            return n.inputStates.email ? "3px solid#2BA8E0" : "1px solid gray";
          },
          function (n) {
            return n.inputStates.password
              ? "3px solid#2BA8E0"
              : " 1px solid gray";
          },
          function (n) {
            return n.inputStates.confirmPassword
              ? "3px solid#2BA8E0"
              : "1px solid gray";
          },
          function (n) {
            return n.inputStates.userName
              ? "3px solid#2BA8E0"
              : "1px solid gray";
          },
          function (n) {
            return n.inputStates.id ? "3px solid#2BA8E0" : "1px solid gray";
          }
        );
      var K = function () {
          var n = Object(a.useState)(!1),
            e = Object(C.a)(n, 2),
            t = e[0],
            i = e[1],
            r = Object(a.useState)(!1),
            o = Object(C.a)(r, 2),
            c = o[0],
            d = o[1],
            l = Object(s.f)(),
            p = Object(a.useState)({
              email: "",
              password: "",
              userName: "",
              id: "",
            }),
            x = Object(C.a)(p, 2),
            u = x[0],
            m = x[1];
          Object(a.useEffect)(
            function () {
              /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
                u.email
              )
                ? d(!0)
                : d(!1),
                u.confirmPassword === u.password ? i(!0) : i(!1);
            },
            [u.password, u.confirmPassword, u.email, u.year]
          );
          var j = function (n) {
              var e = n.target,
                t = e.value,
                i = e.name;
              m(Object(z.a)(Object(z.a)({}, u), {}, Object(k.a)({}, i, t)));
            },
            f = Object(a.useState)({
              email: !1,
              password: !1,
              confirmPassword: !1,
              userName: !1,
              id: !1,
            }),
            h = Object(C.a)(f, 2),
            g = h[0],
            O = h[1],
            w = function (n) {
              switch (n) {
                case "email":
                  O({ email: !0 });
                  break;
                case "password":
                  O({ password: !0 });
                  break;
                case "confirmPassword":
                  O({ confirmPassword: !0 });
                  break;
                case "userName":
                  O({ userName: !0 });
                  break;
                case "id":
                  O({ id: !0 });
              }
            };
          return Object(b.jsx)(L, {
            children: Object(b.jsxs)(R, {
              children: [
                Object(b.jsx)("h1", {
                  children: "\uc22d\uc2e4\ub300\ud559\uad50 Instagram",
                }),
                Object(b.jsx)("p", {
                  children:
                    "\ud68c\uc6d0\uac00\uc785 \uc2e0\uccad \ud6c4 \ucd08\uae30\ud654\uba74\uc73c\ub85c \uc774\ub3d9",
                }),
                Object(b.jsxs)(_, {
                  inputStates: g,
                  children: [
                    Object(b.jsxs)("label", {
                      className: "email",
                      onClick: function () {
                        return w("email");
                      },
                      children: [
                        "\uc774\uba54\uc77c\uc8fc\uc18c",
                        Object(b.jsx)("input", {
                          type: "email",
                          name: "email",
                          onChange: j,
                          onBlur: function () {
                            O(
                              Object(z.a)(Object(z.a)({}, g), {}, { email: !1 })
                            );
                          },
                        }),
                        u.email &&
                          Object(b.jsx)("p", {
                            className: c ? "validEmail" : "invalidEmail",
                            children: c
                              ? "\uc774\uba54\uc77c \uc591\uc2dd OK"
                              : "\uc774\uba54\uc77c \uc591\uc2dd\uc5d0 \ub9de\ucdb0\uc8fc\uc138\uc694",
                          }),
                      ],
                    }),
                    Object(b.jsxs)("label", {
                      className: "id",
                      onClick: function () {
                        return w("id");
                      },
                      children: [
                        "ID",
                        Object(b.jsx)("input", {
                          type: "text",
                          name: "id",
                          onChange: j,
                          onBlur: function () {
                            O(Object(z.a)(Object(z.a)({}, g), {}, { id: !1 }));
                          },
                        }),
                      ],
                    }),
                    Object(b.jsxs)("label", {
                      className: "password",
                      onClick: function () {
                        return w("password");
                      },
                      children: [
                        "\ube44\ubc00\ubc88\ud638",
                        Object(b.jsx)("input", {
                          type: "password",
                          name: "password",
                          onChange: j,
                          onBlur: function () {
                            O(
                              Object(z.a)(
                                Object(z.a)({}, g),
                                {},
                                { password: !1 }
                              )
                            );
                          },
                        }),
                      ],
                    }),
                    Object(b.jsxs)("label", {
                      className: "confirmPassword",
                      onClick: function () {
                        return w("confirmPassword");
                      },
                      children: [
                        "\ube44\ubc00\ubc88\ud638 \ud655\uc778",
                        Object(b.jsx)("input", {
                          type: "password",
                          name: "confirmPassword",
                          onChange: j,
                          onBlur: function () {
                            O(
                              Object(z.a)(
                                Object(z.a)({}, g),
                                {},
                                { confirmPassword: !1 }
                              )
                            );
                          },
                        }),
                        u.confirmPassword &&
                          Object(b.jsx)("p", {
                            className: t ? "validPW" : "invalidPW",
                            children: t
                              ? "\u2705\ube44\ubc00\ubc88\ud638 \uc77c\uce58"
                              : "\u274c\ubd88\uc77c\uce58",
                          }),
                      ],
                    }),
                    Object(b.jsxs)("label", {
                      className: "userName",
                      onClick: function () {
                        return w("userName");
                      },
                      children: [
                        "\uc774\ub984",
                        Object(b.jsx)("input", {
                          type: "text",
                          name: "userName",
                          onChange: j,
                          onBlur: function () {
                            O(
                              Object(z.a)(
                                Object(z.a)({}, g),
                                {},
                                { userName: !1 }
                              )
                            );
                          },
                        }),
                      ],
                    }),
                  ],
                }),
                Object(b.jsx)(T, {
                  onClick: function () {
                    l("/");
                  },
                  children: "\ud68c\uc6d0\uac00\uc785",
                }),
              ],
            }),
          });
        },
        M = function () {
          return Object(b.jsx)("div", { children: Object(b.jsx)(K, {}) });
        };
      var $ = function () {
          return Object(b.jsx)("div", {
            children: Object(b.jsx)(d.a, {
              children: Object(b.jsxs)(s.c, {
                children: [
                  Object(b.jsx)(s.a, {
                    path: "/",
                    element: Object(b.jsx)(J, {}),
                  }),
                  Object(b.jsx)(s.a, {
                    path: "/account",
                    element: Object(b.jsx)(M, {}),
                  }),
                ],
              }),
            }),
          });
        },
        q = function (n) {
          n &&
            n instanceof Function &&
            t
              .e(3)
              .then(t.bind(null, 63))
              .then(function (e) {
                var t = e.getCLS,
                  i = e.getFID,
                  a = e.getFCP,
                  r = e.getLCP,
                  o = e.getTTFB;
                t(n), i(n), a(n), r(n), o(n);
              });
        };
      c.a.render(
        Object(b.jsx)(r.a.StrictMode, { children: Object(b.jsx)($, {}) }),
        document.getElementById("root")
      ),
        q();
    },
  },
  [[62, 1, 2]],
]);
//# sourceMappingURL=main.843db07b.chunk.js.map
