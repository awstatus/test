import { n as C, a as g, t as M } from "./BxmJRzoY.js";
import { t as _, p as x, j as B, a1 as y, a5 as j, l as p, k as v, c as b, s as D, a as L, r as k } from "./w0HvPX0p.js";
import { p as o } from "./C6GSeq7M.js";
import { i as I } from "./iO9_dPNE.js";
import { s as i } from "./BdbQ6g_y.js";
import { B as O } from "./C4AV2CoD.js";
import { T as w } from "./DogAGR7A.js";
import { O as R, S as W } from "./BgkEPAwa.js";
import { u as U } from "./D12OFlGX.js";
var q = C('<svg fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"></path></svg>');
function z(l, e) {
  let a = o(e, "opacity", 3, 0.9), r = o(e, "width", 3, "1.5rem"), s = o(e, "color", 3, "currentColor");
  var t = q();
  i(t, "stroke-width", 2), _(() => {
    i(t, "stroke", s()), i(t, "width", r()), i(t, "opacity", a());
  }), g(l, t);
}
var E = C('<svg fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"></path></svg>');
function F(l, e) {
  let a = o(e, "opacity", 3, 0.9), r = o(e, "width", 3, "1.5rem"), s = o(e, "color", 3, "currentColor");
  var t = E();
  i(t, "stroke-width", 2), _(() => {
    i(t, "stroke", s()), i(t, "width", r()), i(t, "opacity", a());
  }), g(l, t);
}
var G = M('<div class="container svelte-5a6d30"><!> <div class="btn svelte-5a6d30"><!></div></div>');
function H(l, e) {
  x(e, true);
  let a = o(e, "options", 19, () => []), r = U(), s = B(y(a()[0])), t = B(y(e.firstDirReverse ? "down" : "up"));
  j(() => {
    e.onChange(v(s), v(t));
  });
  var d = G(), u = b(d);
  w(u, { get text() {
    return r.search.orderBy;
  }, children: (n, h) => {
    R(n, { get ariaLabel() {
      return r.search.orderBy;
    }, get options() {
      return a();
    }, get borderless() {
      return e.borderless;
    }, get value() {
      return v(s);
    }, set value(m) {
      p(s, m, true);
    } });
  }, $$slots: { default: true } });
  var c = D(u, 2), T = b(c);
  {
    var A = (n) => {
      O(n, { get ariaLabel() {
        return r.search.orderChangeToDesc;
      }, invisible: true, onclick: () => p(t, "down"), children: (h, m) => {
        w(h, { get text() {
          return r.search.orderChangeToDesc;
        }, children: (f, S) => {
          F(f, {});
        }, $$slots: { default: true } });
      }, $$slots: { default: true } });
    }, P = (n) => {
      O(n, { get ariaLabel() {
        return r.search.orderChangeToAsc;
      }, invisible: true, onclick: () => p(t, "up"), children: (h, m) => {
        w(h, { get text() {
          return r.search.orderChangeToAsc;
        }, children: (f, S) => {
          z(f, {});
        }, $$slots: { default: true } });
      }, $$slots: { default: true } });
    };
    I(T, (n) => {
      v(t) === "up" ? n(A) : n(P, false);
    });
  }
  k(c), k(d), g(l, d), L();
}
var J = M('<div class="container svelte-1labfm1"><!> <!></div>');
function te(l, e) {
  x(e, true);
  let a = o(e, "searchOption", 15), r = o(e, "value", 15), s = o(e, "searchWidth", 3, "min(25rem, calc(100dvw - 1rem))");
  var t = J(), d = b(t);
  H(d, { get options() {
    return e.orderOptions;
  }, get onChange() {
    return e.onChangeOrder;
  }, get borderless() {
    return e.borderless;
  }, get firstDirReverse() {
    return e.firstDirReverse;
  } });
  var u = D(d, 2);
  W(u, { get datalist() {
    return e.datalist;
  }, get options() {
    return e.searchOptions;
  }, get pattern() {
    return e.pattern;
  }, get width() {
    return s();
  }, get borderless() {
    return e.borderless;
  }, get onSearch() {
    return e.onSearch;
  }, get value() {
    return r();
  }, set value(c) {
    r(c);
  }, get option() {
    return a();
  }, set option(c) {
    a(c);
  } }), k(t), g(l, t), L();
}
export {
  te as O
};
