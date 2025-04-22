import { t as D, a as R } from "./BxmJRzoY.js";
import { O as j, E as V, aC as X, aD as Z, x as $, F as tt, aE as at, aF as et, G as rt, a6 as E, au as B, av as z, aw as it, aG as st, aH as ot, c as A, s as G, r as O, t as H, p as nt, a4 as I, j as lt, a5 as ct, a as dt, k as q, l as M } from "./w0HvPX0p.js";
import { i as W } from "./iO9_dPNE.js";
import { s as vt } from "./DM69BKKN.js";
import { b as ft, a as S, e as ut, S as _t, C as bt } from "./BdbQ6g_y.js";
import { o as pt, w as gt } from "./BzP2S3Z_.js";
import { b as ht } from "./Dgjj26O5.js";
import { p as h, r as mt } from "./C6GSeq7M.js";
const wt = () => performance.now(), C = { tick: (a) => requestAnimationFrame(a), now: () => wt(), tasks: /* @__PURE__ */ new Set() };
function K() {
  const a = C.now();
  C.tasks.forEach((t) => {
    t.c(a) || (C.tasks.delete(t), t.f());
  }), C.tasks.size !== 0 && C.tick(K);
}
function yt(a) {
  let t;
  return C.tasks.size === 0 && C.tick(K), { promise: new Promise((s) => {
    C.tasks.add(t = { c: a, f: s });
  }), abort() {
    C.tasks.delete(t);
  } };
}
function N(a, t) {
  gt(() => {
    a.dispatchEvent(new CustomEvent(t));
  });
}
function kt(a) {
  if (a === "float") return "cssFloat";
  if (a === "offset") return "cssOffset";
  if (a.startsWith("--")) return a;
  const t = a.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map((s) => s[0].toUpperCase() + s.slice(1)).join("");
}
function P(a) {
  const t = {}, s = a.split(";");
  for (const r of s) {
    const [i, e] = r.split(":");
    if (!i || e === void 0) break;
    const c = kt(i.trim());
    t[c] = e.trim();
  }
  return t;
}
const xt = (a) => a;
function Y(a, t, s, r) {
  var i = (a & st) !== 0, e = (a & ot) !== 0, c = i && e, d = (a & at) !== 0, m = c ? "both" : i ? "in" : "out", n, l = t.inert, w = t.style.overflow, v, b;
  function p() {
    var y = it, T = j;
    B(null), z(null);
    try {
      return n ?? (n = s()(t, (r == null ? void 0 : r()) ?? {}, { direction: m }));
    } finally {
      B(y), z(T);
    }
  }
  var f = { is_global: d, in() {
    var _a;
    if (t.inert = l, !i) {
      b == null ? void 0 : b.abort(), (_a = b == null ? void 0 : b.reset) == null ? void 0 : _a.call(b);
      return;
    }
    e || (v == null ? void 0 : v.abort()), N(t, "introstart"), v = U(t, p(), b, 1, () => {
      N(t, "introend"), v == null ? void 0 : v.abort(), v = n = void 0, t.style.overflow = w;
    });
  }, out(y) {
    if (!e) {
      y == null ? void 0 : y(), n = void 0;
      return;
    }
    t.inert = true, N(t, "outrostart"), b = U(t, p(), v, 0, () => {
      N(t, "outroend"), y == null ? void 0 : y();
    });
  }, stop: () => {
    v == null ? void 0 : v.abort(), b == null ? void 0 : b.abort();
  } }, u = j;
  if ((u.transitions ?? (u.transitions = [])).push(f), i && pt) {
    var o = d;
    if (!o) {
      for (var g = u.parent; g && (g.f & V) !== 0; ) for (; (g = g.parent) && (g.f & X) === 0; ) ;
      o = !g || (g.f & Z) !== 0;
    }
    o && $(() => {
      tt(() => f.in());
    });
  }
}
function U(a, t, s, r, i) {
  var e = r === 1;
  if (et(t)) {
    var c, d = false;
    return rt(() => {
      if (!d) {
        var u = t({ direction: e ? "in" : "out" });
        c = U(a, u, s, r, i);
      }
    }), { abort: () => {
      d = true, c == null ? void 0 : c.abort();
    }, deactivate: () => c.deactivate(), reset: () => c.reset(), t: () => c.t() };
  }
  if (s == null ? void 0 : s.deactivate(), !(t == null ? void 0 : t.duration)) return i(), { abort: E, deactivate: E, reset: E, t: () => r };
  const { delay: m = 0, css: n, tick: l, easing: w = xt } = t;
  var v = [];
  if (e && s === void 0 && (l && l(0, 1), n)) {
    var b = P(n(0, 1));
    v.push(b, b);
  }
  var p = () => 1 - r, f = a.animate(v, { duration: m });
  return f.onfinish = () => {
    var u = (s == null ? void 0 : s.t()) ?? 1 - r;
    s == null ? void 0 : s.abort();
    var o = r - u, g = t.duration * Math.abs(o), y = [];
    if (g > 0) {
      var T = false;
      if (n) for (var _ = Math.ceil(g / 16.666666666666668), k = 0; k <= _; k += 1) {
        var L = u + o * w(k / _), F = P(n(L, 1 - L));
        y.push(F), T || (T = F.overflow === "hidden");
      }
      T && (a.style.overflow = "hidden"), p = () => {
        var x = f.currentTime;
        return u + o * w(x / g);
      }, l && yt(() => {
        if (f.playState !== "running") return false;
        var x = p();
        return l(x, 1 - x), true;
      });
    }
    f = a.animate(y, { duration: g, fill: "forwards" }), f.onfinish = () => {
      p = () => r, l == null ? void 0 : l(r, 1 - r), i();
    };
  }, { abort: () => {
    f && (f.cancel(), f.effect = null, f.onfinish = E);
  }, deactivate: () => {
    i = E;
  }, reset: () => {
    r === 0 && (l == null ? void 0 : l(1, 0));
  }, t: () => p() };
}
const Ct = (a) => a;
function Ft(a) {
  const t = a - 1;
  return t * t * t + 1;
}
function J(a, { delay: t = 0, duration: s = 400, easing: r = Ct } = {}) {
  const i = +getComputedStyle(a).opacity;
  return { delay: t, duration: s, easing: r, css: (e) => `opacity: ${e * i}` };
}
function Bt(a, { delay: t = 0, duration: s = 400, easing: r = Ft, axis: i = "y" } = {}) {
  const e = getComputedStyle(a), c = +e.opacity, d = i === "y" ? "height" : "width", m = parseFloat(e[d]), n = i === "y" ? ["top", "bottom"] : ["left", "right"], l = n.map((o) => `${o[0].toUpperCase()}${o.slice(1)}`), w = parseFloat(e[`padding${l[0]}`]), v = parseFloat(e[`padding${l[1]}`]), b = parseFloat(e[`margin${l[0]}`]), p = parseFloat(e[`margin${l[1]}`]), f = parseFloat(e[`border${l[0]}Width`]), u = parseFloat(e[`border${l[1]}Width`]);
  return { delay: t, duration: s, easing: r, css: (o) => `overflow: hidden;opacity: ${Math.min(o * 20, 1) * c};${d}: ${o * m}px;padding-${n[0]}: ${o * w}px;padding-${n[1]}: ${o * v}px;margin-${n[0]}: ${o * b}px;margin-${n[1]}: ${o * p}px;border-${n[0]}-width: ${o * f}px;border-${n[1]}-width: ${o * u}px;min-${d}: 0` };
}
var Tt = D('<div><div class="loading svelte-1yqkxw6"><div class="loading-1 svelte-1yqkxw6"></div> <div class="loading-2 svelte-1yqkxw6"></div> <div class="loading-3 svelte-1yqkxw6"></div></div></div>');
function Lt(a, t) {
  let s = h(t, "background", 3, false), r = h(t, "color", 3, "hsl(var(--text))"), i = h(t, "global", 3, false), e = h(t, "offset", 3, 0);
  var c = Tt();
  let d;
  var m = A(c), n = A(m);
  let l;
  var w = G(n, 2);
  let v;
  var b = G(w, 2);
  let p;
  O(m), O(c), H((f) => {
    d = ft(c, 1, "container svelte-1yqkxw6", null, d, f), S(m, `margin-top: ${e() ?? ""}px;`), l = S(n, "", l, { background: r() }), v = S(w, "", v, { background: r() }), p = S(b, "", p, { background: r() });
  }, [() => ({ global: i(), local: !i(), background: s() })]), Y(3, c, () => J, () => ({ duration: 100 })), R(a, c);
}
var Et = D('<div class="load svelte-e6jqqr"><!></div>'), qt = D('<div class="font-label svelte-e6jqqr"><!></div>'), At = D("<button><!></button>");
function zt(a, t) {
  nt(t, true);
  let s = h(t, "type", 3, "button"), r = h(t, "role", 3, "button"), i = h(t, "ref", 15), e = h(t, "level", 3, 1), c = h(t, "isDisabled", 3, false), d = h(t, "isLoading", 3, false), m = h(t, "invisible", 3, false), n = h(t, "invisibleOutline", 3, false), l = mt(t, ["$$slots", "$$events", "$$legacy", "type", "role", "ref", "id", "ariaLabel", "ariaControls", "ariaCurrent", "level", "width", "isDisabled", "isLoading", "invisible", "invisibleOutline", "popovertarget", "popovertargetaction", "onclick", "onLeft", "onRight", "onUp", "onDown", "children"]), w = I(() => {
    if (m()) return "invisible";
    switch (e()) {
      case -1:
        return "l1d";
      case -2:
        return "l2d";
      case -3:
        return "l3d";
      case 2:
        return "l2";
      case 3:
        return "l3";
      default:
        return "l1";
    }
  }), v = lt(!d()), b = I(() => c() || d());
  ct(() => {
    d() ? setTimeout(() => {
      M(v, false);
    }, 120) : setTimeout(() => {
      M(v, true);
    }, 120);
  });
  function p() {
    switch (e()) {
      case -1:
        return "var(--btn-text)";
      case -2:
        return "hsl(var(--error))";
      case -3:
        return "hsl(var(--error))";
      case 2:
        return "hsl(var(--action))";
      case 3:
        return "hsl(var(--action))";
      default:
        return "var(--btn-text)";
    }
  }
  function f(_) {
    var _a, _b, _c, _d, _e;
    switch (_.code) {
      case "Enter":
        (_a = t.onclick) == null ? void 0 : _a.call(t, _);
        break;
      case "ArrowLeft":
        (_b = t.onLeft) == null ? void 0 : _b.call(t);
        break;
      case "ArrowRight":
        (_c = t.onRight) == null ? void 0 : _c.call(t);
        break;
      case "ArrowUp":
        (_d = t.onUp) == null ? void 0 : _d.call(t);
        break;
      case "ArrowDown":
        (_e = t.onDown) == null ? void 0 : _e.call(t);
        break;
    }
  }
  var u = At();
  let o;
  var g = A(u);
  {
    var y = (_) => {
      var k = Et(), L = A(k);
      const F = I(p);
      Lt(L, { background: false, get color() {
        return q(F);
      } }), O(k), R(_, k);
    }, T = (_, k) => {
      {
        var L = (F) => {
          var x = qt(), Q = A(x);
          vt(Q, () => t.children), O(x), Y(1, x, () => J), R(F, x);
        };
        W(_, (F) => {
          q(v) && F(L);
        }, k);
      }
    };
    W(g, (_) => {
      d() ? _(y) : _(T, false);
    });
  }
  O(u), ht(u, (_) => i(_), () => i()), H((_) => o = ut(u, o, { name: t.ariaLabel, role: r(), type: s(), id: t.id, "aria-label": t.ariaLabel, "aria-controls": t.ariaControls, "aria-current": t.ariaCurrent, class: q(w), "data-isloading": d(), onclick: t.onclick, onkeydown: f, disabled: q(b), "aria-disabled": q(b), popovertarget: t.popovertarget, popovertargetaction: t.popovertargetaction, ...l, [bt]: _, [_t]: { width: t.width } }, "svelte-e6jqqr"), [() => ({ invisibleOutline: n() })]), R(a, u), dt();
}
export {
  zt as B,
  Lt as L,
  J as f,
  yt as l,
  C as r,
  Bt as s,
  Y as t
};
