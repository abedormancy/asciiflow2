var g, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
  if (c.get || c.set) {
    throw new TypeError("ES3 does not support getters and setters.");
  }
  a != Array.prototype && a != Object.prototype && (a[b] = c.value);
}, h = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
function ba() {
  ba = function() {
  };
  h.Symbol || (h.Symbol = ca);
}
var da = 0;
function ca(a) {
  return "jscomp_symbol_" + (a || "") + da++;
}
function m() {
  ba();
  var a = h.Symbol.iterator;
  a || (a = h.Symbol.iterator = h.Symbol("iterator"));
  "function" != typeof Array.prototype[a] && aa(Array.prototype, a, {configurable:!0, writable:!0, value:function() {
    return ea(this);
  }});
  m = function() {
  };
}
function ea(a) {
  var b = 0;
  return fa(function() {
    return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
  });
}
function fa(a) {
  m();
  a = {next:a};
  a[h.Symbol.iterator] = function() {
    return this;
  };
  return a;
}
function n(a) {
  m();
  var b = a[Symbol.iterator];
  return b ? b.call(a) : ea(a);
}
function p(a, b) {
  this.x = a;
  this.y = b;
}
function r(a, b) {
  var c = a.originalEvent.touches[void 0 === b ? 0 : b];
  return new p(c.pageX, c.pageY);
}
function t(a, b) {
  return !!b && a.x == b.x && a.y == b.y;
}
function u(a, b) {
  return new p(a.x - b.x, a.y - b.y);
}
g = p.prototype;
g.add = function(a) {
  return new p(this.x + a.x, this.y + a.y);
};
g.clone = function() {
  return new p(this.x, this.y);
};
g.length = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};
g.scale = function(a) {
  return new p(this.x * a, this.y * a);
};
function v(a) {
  return new p(a.x, a.y - 1);
}
function w(a) {
  return new p(a.x, a.y + 1);
}
function x(a) {
  return new p(a.x - 1, a.y);
}
g.right = function(a) {
  return new p(this.x + (void 0 === a ? 1 : a), this.y);
};
var y = ["+", "\u2012", "\u2013", "-", "|"], z = [">", "<", "^", "v"], ga = y.concat(z), B = "ontouchstart" in window || "onmsgesturechange" in window, C = new p(-1, 0), D = new p(1, 0), E = new p(0, -1), G = new p(0, 1), ha = [C, D, E, G];
function H(a, b) {
  this.a = Math.min(a.x, b.x);
  this.b = Math.min(a.y, b.y);
  this.c = Math.max(a.x, b.x);
  this.f = Math.max(a.y, b.y);
}
function ia(a) {
  return new p(a.a, a.b);
}
H.prototype.contains = function(a) {
  return a.x >= this.a && a.x <= this.c && a.y >= this.b && a.y <= this.f;
};
function ja() {
  this.a = this.value = null;
}
function I(a) {
  return null != a.a ? a.a : a.value;
}
function J(a) {
  return ga.includes(I(a));
}
function K(a) {
  return null == a.value && null == a.a;
}
function ka(a, b, c, d) {
  this.a = a;
  this.right = b;
  this.c = c;
  this.b = d;
  this.h = this.f = this.l = this.g = !1;
}
function L(a) {
  return a.a + a.right + a.c + a.b;
}
function la(a, b) {
  this.position = a;
  this.value = b;
}
function ma(a, b) {
  this.position = a;
  this.a = b;
}
;var N = document.createElement("span");
N.style.visibility = "hidden";
N.style.whiteSpace = "nowrap";
N.style.fontSize = "12px";
document.body.appendChild(N);
function na(a) {
  if (null === a) {
    return 0;
  }
  N.innerHTML = a;
  return N.offsetWidth;
}
;function O(a) {
  for (var b = 0;b < a.a.length;b++) {
    for (var c = 0;c < a.a[b].length;c++) {
      null != I(a.a[b][c]) && P(a, new p(b, c), "\u2009");
    }
  }
  Q(a);
}
function R(a, b) {
  return a.a[b.x][b.y];
}
function P(a, b, c) {
  var d = R(a, b);
  a.b.push(new ma(b, d));
  d.a = c;
  a.c = !0;
}
function oa(a, b, c) {
  I(R(a, b)) != c && P(a, b, c);
}
function S(a) {
  for (var b = n(a.b), c = b.next();!c.done;c = b.next()) {
    c.value.a.a = null;
  }
  a.b.length = 0;
}
function pa(a, b) {
  var c = R(a, b), d = null != c.a ? c.a : c.value, e = y.includes(d), f = z.includes(d);
  if (!e && !f) {
    return d;
  }
  c = T(a, b);
  if (e && c.a && c.right && !c.c && !c.b) {
    return "-";
  }
  if (e && !c.a && !c.right && c.c && c.b) {
    return "|";
  }
  if (4 == L(c)) {
    return "-";
  }
  if (f && 3 == L(c)) {
    if (!c.a) {
      return "<";
    }
    if (!c.c) {
      return "^";
    }
    if (!c.b) {
      return "v";
    }
    if (!c.right) {
      return ">";
    }
  }
  if ((e || f) && 3 == L(c)) {
    c.g = J(R(a, v(x(b))));
    c.l = J(R(a, v(b.right())));
    c.f = J(R(a, w(x(b))));
    c.h = J(R(a, w(b.right())));
    if (!c.right && c.g && c.f || !c.a && c.l && c.h) {
      return "|";
    }
    if (!c.b && c.g && c.l || !c.c && c.h && c.f) {
      return "-";
    }
    d = K(R(a, v(x(b))));
    e = K(R(a, v(b.right())));
    if (c.c && c.a && c.right && (!d || !e)) {
      return "-";
    }
    d = K(R(a, w(x(b))));
    e = K(R(a, w(b.right())));
    return !(c.b && c.a && c.right) || d && e ? "+" : "-";
  }
  if (f && 1 == L(c)) {
    if (c.a) {
      return ">";
    }
    if (c.c) {
      return "v";
    }
    if (c.b) {
      return "^";
    }
    if (c.right) {
      return "<";
    }
  }
  return d;
}
function T(a, b) {
  var c = J(R(a, x(b))), d = J(R(a, b.right())), e = J(R(a, v(b))), f = J(R(a, w(b)));
  return new ka(c, d, e, f);
}
function Q(a, b) {
  var c = [], d = a.b.map(function(a) {
    return a.position.x.toString() + a.position.y.toString();
  }), e = a.b.filter(function(a, b) {
    return d.indexOf(d[b]) == b;
  });
  a.b.length = 0;
  for (var e = n(e), f = e.next();!f.done;f = e.next()) {
    var k = f.value, f = k.position, k = k.a;
    c.push(new la(f, null != k.value ? k.value : " "));
    var l = I(k);
    if ("\u2009" == l || " " == l) {
      l = null;
    }
    J(k) && (l = pa(a, f));
    k.a = null;
    k.value = l;
  }
  e = b ? a.f : a.g;
  0 < c.length && (50 < e.length && e.shift(), e.push(c));
  a.c = !0;
}
function qa(a) {
  if (a.g.length) {
    for (var b = a.g.pop(), b = n(b), c = b.next();!c.done;c = b.next()) {
      c = c.value, P(a, c.position, c.value);
    }
    Q(a, !0);
  }
}
function ra(a) {
  if (a.f.length) {
    for (var b = a.f.pop(), b = n(b), c = b.next();!c.done;c = b.next()) {
      c = c.value, P(a, c.position, c.value);
    }
    Q(a);
  }
}
function U(a) {
  for (var b = new p(Number.MAX_VALUE, Number.MAX_VALUE), c = new p(-1, -1), d = 0;d < a.a.length;d++) {
    for (var e = 0;e < a.a[d].length;e++) {
      null != I(a.a[d][e]) && (d < b.x && (b.x = d), e < b.y && (b.y = e), d > c.x && (c.x = d), e > c.y && (c.y = e));
    }
  }
  if (0 > c.x) {
    return "";
  }
  for (var f = "", e = b.y;e <= c.y;e++) {
    for (var k = "", d = b.x;d <= c.x;d++) {
      var l = pa(a, new p(d, e)), k = k + (null == l || "\u2009" == l ? " " : l);
      10 < na(l) && d++;
    }
    f += k.replace(/\s+$/, "") + "\n";
  }
  return f;
}
function sa(a, b, c) {
  b = b.split("\n");
  for (var d = new p(0, Math.round(b.length / 2)), e = 0;e < b.length;e++) {
    d.x = Math.max(d.x, Math.round(b[e].length / 2));
  }
  for (e = 0;e < b.length;e++) {
    for (var f = b[e], k = 0;k < f.length;k++) {
      var l = f.charAt(k);
      y.includes(l) && (l = "+");
      P(a, u((new p(k, e)).add(c), d), l);
    }
  }
}
;function V(a, b, c, d, e) {
  e = void 0 === e ? "+" : e;
  var f = new H(b, c), k = f.a, l = f.b, A = f.c, f = f.f, F = d ? c.x : b.x;
  for (d = d ? b.y : c.y;k++ < A;) {
    var q = new p(k, d), M = T(a, new p(k, d));
    " " == e && 2 == M.c + M.b || oa(a, q, e);
  }
  for (;l++ < f;) {
    q = new p(F, l), M = T(a, new p(F, l)), " " == e && 2 == M.a + M.right || oa(a, q, e);
  }
  P(a, b, e);
  P(a, c, e);
  oa(a, new p(F, d), e);
}
;function ta(a) {
  this.a = a;
  this.b = null;
}
g = ta.prototype;
g.start = function(a) {
  this.b = a;
};
g.i = function(a) {
  S(this.a);
  V(this.a, this.b, a, !0);
  V(this.a, this.b, a, !1);
};
g.m = function() {
  Q(this.a);
};
g.o = function() {
  return "crosshair";
};
g.j = function() {
};
function W(a) {
  this.c = a;
  this.a = this.b = null;
}
g = W.prototype;
g.start = function(a) {
  this.b = a;
  this.i(a);
};
g.i = function(a) {
  S(this.c);
  this.a = a;
  a = Math.min(this.b.y, this.a.y);
  for (var b = Math.max(this.b.x, this.a.x), c = Math.max(this.b.y, this.a.y), d = Math.min(this.b.x, this.a.x);d <= b;d++) {
    for (var e = a;e <= c;e++) {
      P(this.c, new p(d, e), "\u2009");
    }
  }
};
g.m = function() {
  Q(this.c);
};
g.o = function() {
  return "crosshair";
};
g.j = function() {
};
function ua(a, b) {
  this.a = a;
  this.value = b;
  B && ($("#freeform-tool-input").val(""), $("#freeform-tool-input").hide(0, function() {
    $("#freeform-tool-input").show(0, function() {
      $("#freeform-tool-input").focus();
    });
  }));
}
g = ua.prototype;
g.start = function(a) {
  P(this.a, a, this.value);
};
g.i = function(a) {
  P(this.a, a, this.value);
};
g.m = function() {
  Q(this.a);
};
g.o = function() {
  return "crosshair";
};
g.j = function(a) {
  B && (this.value = $("#freeform-tool-input").val().substr(0, 1), $("#freeform-tool-input").blur(), $("#freeform-tool-input").hide(0));
  1 == a.length && (this.value = a);
};
function va(a, b) {
  this.a = a;
  this.c = b;
  this.b = null;
}
g = va.prototype;
g.start = function(a) {
  this.b = a;
};
g.i = function(a) {
  S(this.a);
  var b = T(this.a, this.b), c = T(this.a, a);
  V(this.a, this.b, a, b.c && b.b || c.a && c.right);
  this.c && P(this.a, a, "^");
};
g.m = function() {
  Q(this.a);
};
g.o = function() {
  return "crosshair";
};
g.j = function() {
};
function wa(a) {
  this.c = a;
  this.g = this.f = this.b = this.a = null;
  this.h = !0;
  this.l = [];
}
g = wa.prototype;
g.start = function(a) {
  this.a && this.b && (new H(this.a, this.b)).contains(a) ? (this.f = a, xa(this), ya(this, a)) : (this.a = a, this.b = null, this.h = !1, this.i(a));
};
function xa(a) {
  var b = a.c.b.filter(function(a) {
    return null != I(a.a) && "\u2009" != I(a.a);
  }), c = ia(new H(a.a, a.b));
  a.l = b.map(function(a) {
    return new la(u(a.position, c), I(a.a));
  });
}
g.i = function(a) {
  if (this.f) {
    ya(this, a);
  } else {
    if (1 != this.h) {
      this.b = a;
      S(this.c);
      a = new H(this.a, a);
      for (var b = a.a;b <= a.c;b++) {
        for (var c = a.b;c <= a.f;c++) {
          var d = new p(b, c), e = I(R(this.c, d));
          P(this.c, d, null == e ? "\u2009" : e);
        }
      }
    }
  }
};
function ya(a, b) {
  a.g = b;
  S(a.c);
  var c = new W(a.c);
  c.start(a.a);
  c.i(a.b);
  c = u(a.g, a.f).add(ia(new H(a.a, a.b)));
  za(a, c);
}
function za(a, b) {
  for (var c = n(a.l), d = c.next();!d.done;d = c.next()) {
    var d = d.value, e = d.value;
    P(a.c, d.position.add(b), e);
  }
}
g.m = function() {
  this.f && (Q(this.c), this.b = this.a = null);
  this.g = this.f = null;
  this.h = !0;
};
g.o = function(a) {
  return this.a && this.b && (new H(this.a, this.b)).contains(a) ? "pointer" : "default";
};
g.j = function(a) {
  if (this.a && this.b && ("<copy>" != a && "<cut>" != a || xa(this), "<cut>" == a)) {
    var b = new W(this.c);
    b.start(this.a);
    b.i(this.b);
    Q(this.c);
  }
  "<paste>" == a && (za(this, this.a), Q(this.c));
};
function Aa(a) {
  this.b = a;
  this.c = this.a = null;
}
g = Aa.prototype;
g.start = function(a) {
  Q(this.b);
  $("#text-tool-input").val("");
  this.a = a;
  a = I(R(this.b, this.a));
  P(this.b, this.a, null == a ? "\u2009" : a);
};
g.i = function() {
};
g.m = function() {
  null != this.a && (this.c = this.a, this.a = null, $("#text-tool-widget").hide(0, function() {
    $("#text-tool-widget").show(0, function() {
      $("#text-tool-input").focus();
    });
  }));
};
g.o = function() {
  return "pointer";
};
g.j = function() {
  var a = $("#text-tool-input").val();
  S(this.b);
  for (var b = this.b, c = this.c, d = 0, e = 0, a = n(a), f = a.next();!f.done;f = a.next()) {
    f = f.value, "\n" == f ? (e++, d = 0) : (P(b, c.add(new p(d, e)), f), 10 > na(f) ? d++ : d += 2);
  }
};
function Ba(a) {
  this.a = a;
  this.b = null;
  this.c = [];
}
g = Ba.prototype;
g.start = function(a) {
  var b;
  if (B) {
    if (J(R(this.a, a))) {
      b = a;
    } else {
      var c = ha.concat([C.add(E), C.add(G), D.add(E), D.add(G)]);
      b = null;
      for (var d = 0, c = n(c), e = c.next();!e.done;e = c.next()) {
        var e = e.value, f = a.add(e), k = L(T(this.a, f));
        J(R(this.a, f)) && k > d && (b = e, d = k);
      }
      b = null == b ? a : a.add(b);
    }
  } else {
    b = a;
  }
  this.b = b;
  this.c = [];
  if (J(R(this.a, this.b))) {
    T(this.a, this.b);
    b = [];
    d = n(ha);
    for (c = d.next();!c.done;c = d.next()) {
      for (c = c.value, e = Ca(this, this.b, c), e = n(e), f = e.next();!f.done;f = e.next()) {
        var f = f.value, k = 0 != c.x, l = -1 != z.indexOf(I(R(this.a, a))), A = -1 != z.indexOf(I(R(this.a, f)));
        if (1 == L(T(this.a, f))) {
          b.push({position:f, s:k, v:l, u:A});
        } else {
          for (var F = n(ha), q = F.next();!q.done;q = F.next()) {
            q = q.value, 0 != c.add(q).length() && 2 != c.add(q).length() && (q = Ca(this, f, q), q.length && (q = q[0], b.push({position:q, s:k, v:l, w:A, u:-1 != z.indexOf(I(R(this.a, q)))})));
          }
        }
      }
    }
    this.c = b;
    this.i(this.b);
  }
};
g.i = function(a) {
  S(this.a);
  for (var b = n(this.c), c = b.next();!c.done;c = b.next()) {
    var d = c.value;
    V(this.a, this.b, d.position, d.s, " ");
  }
  for (var e in this.c) {
    V(this.a, a, d.position, d.s);
  }
  b = n(this.c);
  for (c = b.next();!c.done;c = b.next()) {
    d = c.value, d.v && P(this.a, a, "^"), d.u && P(this.a, d.position, "^"), d.w && P(this.a, new p(d.s ? d.position.x : a.x, d.s ? a.y : d.position.y), "^");
  }
};
g.m = function() {
  Q(this.a);
};
function Ca(a, b, c) {
  for (var d = b.clone(), e = [];;) {
    var f = d.add(c);
    if (!J(R(a.a, f))) {
      return t(b, d) || e.push(d), e;
    }
    d = f;
    3 == L(T(a.a, d)) && e.push(d);
  }
}
g.o = function(a) {
  return J(R(this.a, a)) ? "pointer" : "default";
};
g.j = function() {
};
function Da(a) {
  a.b.width = document.documentElement.clientWidth;
  a.b.height = document.documentElement.clientHeight;
  a.f = !0;
}
function Ea(a) {
  if (a.f || a.g.c) {
    a.f = !1, a.g.c = !1, Fa(a);
  }
  window.requestAnimationFrame(function() {
    Ea(a);
  });
}
function Fa(a) {
  var b = a.context;
  b.setTransform(1, 0, 0, 1, 0, 0);
  b.clearRect(0, 0, a.b.width, a.b.height);
  b.scale(a.c, a.c);
  b.translate(a.b.width / 2 / a.c, a.b.height / 2 / a.c);
  var c = u(X(a, new p(0, 0)), new p(3, 3)), d = X(a, new p(a.b.width, a.b.height)).add(new p(3, 3));
  c.x = Math.max(0, Math.min(c.x, 2E3));
  d.x = Math.max(0, Math.min(d.x, 2E3));
  c.y = Math.max(0, Math.min(c.y, 600));
  d.y = Math.max(0, Math.min(d.y, 600));
  b.lineWidth = "1";
  b.strokeStyle = "#EEEEEE";
  b.beginPath();
  for (var e = c.x;e < d.x;e++) {
    b.moveTo(9 * e - a.a.x, 0 - a.a.y), b.lineTo(9 * e - a.a.x, 17 * a.g.a.length - a.a.y);
  }
  for (e = c.y;e < d.y;e++) {
    b.moveTo(0 - a.a.x, 17 * e - a.a.y), b.lineTo(9 * a.g.a.length - a.a.x, 17 * e - a.a.y);
  }
  a.context.stroke();
  e = !a.h;
  b.font = "15px Courier New";
  for (var f = c.x;f < d.x;f++) {
    for (var k = c.y;k < d.y;k++) {
      var l = R(a.g, new p(f, k));
      if (J(l) || null != l.a && " " != I(l)) {
        a.context.fillStyle = null != l.a ? "#DEF" : "#F5F5F5", b.fillRect(9 * f - a.a.x, 17 * (k - 1) - a.a.y, 9, 17);
      }
      var A = pa(a.g, new p(f, k));
      null == A || J(l) && !e || (a.context.fillStyle = "#000000", b.fillText(A, 9 * f - a.a.x, 17 * k - a.a.y - 3));
    }
  }
  if (a.h) {
    b.lineWidth = "1";
    b.strokeStyle = "#000000";
    b.beginPath();
    for (e = c.x;e < d.x;e++) {
      for (l = !1, f = c.y;f < d.y;f++) {
        k = R(a.g, new p(e, f)), J(k) && f != d.y - 1 || !l || (b.moveTo(9 * e - a.a.x + 4.5, 17 * l - a.a.y - 8.5), b.lineTo(9 * e - a.a.x + 4.5, 17 * (f - 1) - a.a.y - 8.5), l = !1), J(k) && !l && (l = f);
      }
    }
    for (f = c.y;f < d.y;f++) {
      for (l = !1, e = c.x;e < d.x;e++) {
        k = R(a.g, new p(e, f)), J(k) && e != d.x - 1 || !l || (b.moveTo(9 * l - a.a.x + 4.5, 17 * f - a.a.y - 8.5), b.lineTo(9 * (e - 1) - a.a.x + 4.5, 17 * f - a.a.y - 8.5), l = !1), J(k) && !l && (l = e);
      }
    }
    a.context.stroke();
  }
}
function X(a, b) {
  var c = new p((b.x - a.b.width / 2) / a.c + a.a.x, (b.y - a.b.height / 2) / a.c + a.a.y);
  return new p(Math.min(Math.max(1, Math.round((c.x - 4.5) / 9)), 1998), Math.min(Math.max(1, Math.round((c.y + 8.5) / 17)), 598));
}
;function Ga(a, b) {
  var c = X(a.a, b);
  a.f || (a.f = c);
  t(c, a.f) || (a.a.b.style.cursor = a.c.o(c));
  2 != a.mode || t(c, a.f) || a.c.i(c);
  if (1 == a.mode) {
    var d = a.a, e = a.h.add(u(a.g, b).scale(1 / a.a.c));
    d.a = e;
    d.f = !0;
  }
  a.f = c;
}
function Y(a) {
  2 == a.mode && a.c.m();
  a.mode = 0;
  a.g = null;
  a.h = null;
  a.f = null;
}
function Ha(a) {
  $(window).resize(function() {
    Da(a.a);
  });
  $("#draw-tools > button.tool").click(function(b) {
    $("#text-tool-widget").hide(0);
    b = b.target.id;
    $("#draw-tools > button.tool").removeClass("active");
    $("#" + b).toggleClass("active");
    $(".dialog").removeClass("visible");
    "box-button" == b && (a.c = new ta(a.b));
    "line-button" == b && (a.c = new va(a.b, !1));
    "arrow-button" == b && (a.c = new va(a.b, !0));
    "freeform-button" == b && (a.c = new ua(a.b, "X"));
    "erase-button" == b && (a.c = new W(a.b));
    "move-button" == b && (a.c = new Ba(a.b));
    "text-button" == b && (a.c = new Aa(a.b));
    "select-button" == b && (a.c = new wa(a.b));
    Q(a.b);
    a.a.b.focus();
  });
  $("#file-tools > button.tool").click(function(b) {
    b = b.target.id;
    $(".dialog").removeClass("visible");
    $("#" + b + "-dialog").toggleClass("visible");
    "import-button" == b && ($("#import-area").val(""), $("#import-area").focus());
    "export-button" == b && ($("#export-area").val(U(a.b)), $("#export-area").select());
    "clear-button" == b && O(a.b);
    "undo-button" == b && qa(a.b);
    "redo-button" == b && ra(a.b);
  });
  $("button.close-dialog-button").click(function() {
    $(".dialog").removeClass("visible");
  });
  $("#import-submit-button").click(function() {
    O(a.b);
    sa(a.b, $("#import-area").val(), X(a.a, new p(a.a.b.width / 2, a.a.b.height / 2)));
    Q(a.b);
    $("#import-area").val("");
    $(".dialog").removeClass("visible");
  });
  $("#use-lines-button").click(function() {
    $(".dialog").removeClass("visible");
    var b = a.a;
    b.h = !0;
    b.f = !0;
  });
  $("#use-ascii-button").click(function() {
    $(".dialog").removeClass("visible");
    var b = a.a;
    b.h = !1;
    b.f = !0;
  });
  $(window).keypress(function(b) {
    b.ctrlKey || b.metaKey || 13 == b.keyCode || a.c.j(String.fromCharCode(b.keyCode));
  });
  $(window).keydown(function(b) {
    var c = null;
    if (b.ctrlKey || b.metaKey) {
      67 == b.keyCode && (c = "<copy>"), 86 == b.keyCode && (c = "<paste>"), 90 == b.keyCode && qa(a.b), 89 == b.keyCode && ra(a.b), 88 == b.keyCode && (c = "<cut>");
    }
    8 == b.keyCode && (c = "<backspace>");
    13 == b.keyCode && (c = "<enter>");
    38 == b.keyCode && (c = "<up>");
    40 == b.keyCode && (c = "<down>");
    37 == b.keyCode && (c = "<left>");
    39 == b.keyCode && (c = "<right>");
    null != c && a.c.j(c);
  });
  $("#text-tool-input, #freeform-tool-input").keyup(function() {
    a.c.j("");
  });
  $("#text-tool-input, #freeform-tool-input").change(function() {
    a.c.j("");
  });
  $("#text-tool-close").click(function() {
    $("#text-tool-widget").hide();
    Q(a.b);
  });
}
;function Ia(a, b) {
  window.gapi.auth.authorize({client_id:"125643747010-9s9n1ne2fnnuh5v967licfkt83r4vba5.apps.googleusercontent.com", scope:"https://www.googleapis.com/auth/drive", A:b}, function(b) {
    !b || b.error || a.f || (a.f = !0, $("#drive-button").addClass("active"), window.setTimeout(function() {
      Ja(a);
    }, 500));
  });
}
function Ka(a) {
  window.gapi && window.gapi.auth && window.gapi.auth.authorize ? Ia(a, !0) : window.setTimeout(function() {
    Ka(a);
  }, 500);
}
function La(a) {
  window.setTimeout(function() {
    a.f ? Ma(a) : (Ia(a, !0), La(a));
  }, 1E3);
}
function Na(a, b) {
  a.a = b;
  $("#drive-filename").text(b.title);
  window.location.hash = b.id;
}
function Ma(a) {
  $("#drive-dialog").addClass("visible");
  var b = U(a.b);
  5 < b.length && b != a.c && Z(a);
  Oa();
}
function Oa() {
  Pa(window.gapi.client.request({path:"/drive/v2/files", params:{q:"mimeType = 'text/plain' and trashed = false"}, method:"GET"}), function(a) {
    $("#drive-file-list").children().remove();
    a = a.items;
    for (var b in a) {
      var c = document.createElement("li"), d = document.createElement("a");
      c.appendChild(d);
      d.href = "#" + a[b].id;
      $(d).click(function() {
        $("#drive-dialog").removeClass("visible");
      });
      d.innerHTML = a[b].title;
      $("#drive-file-list").append(c);
    }
  });
}
function Pa(a, b) {
  try {
    a.execute(function(a) {
      a.error || b(a);
    });
  } catch (c) {
  }
}
function Qa(a) {
  U(a.b) != a.c && a.a && a.a.editable && Z(a);
  window.setTimeout(function() {
    Qa(a);
  }, 5E3);
}
function Z(a) {
  var b = U(a.b);
  $("#drive-save-state").text("Saving...");
  Pa(Ra(a, b), function(c) {
    Na(a, c);
    $("#drive-save-state").text("Saved");
    a.c = b;
  });
}
function Ja(a) {
  1 < window.location.hash.length && ($("#drive-save-state").text("Loading..."), Pa(window.gapi.client.request({path:"/drive/v2/files/" + window.location.hash.substr(1, window.location.hash.length - 1), method:"GET"}), function(b) {
    Na(a, b);
    Sa(a);
  }));
}
function Sa(a) {
  Ta(a.a.downloadUrl, function(b) {
    $("#drive-save-state").text("Loaded");
    O(a.b);
    sa(a.b, b, X(a.g, new p(a.g.b.width / 2, a.g.b.height / 2)));
    Q(a.b);
    a.c = U(a.b);
  });
}
function Ra(a, b) {
  var c = "\r\n---------314159265358979323846\r\nContent-Type: application/json\r\n\r\n" + JSON.stringify({title:a.a ? a.a.title : "Untitled ASCII Diagram", mimeType:"text/plain"}) + "\r\n---------314159265358979323846\r\nContent-Type: text/plain\r\n\r\n" + b + "\r\n---------314159265358979323846--";
  return window.gapi.client.request({method:a.a ? "PUT" : "POST", path:"/upload/drive/v2/files" + (a.a ? "/" + a.a.id : ""), params:{uploadType:"multipart"}, headers:{"Content-Type":'multipart/mixed; boundary="-------314159265358979323846"'}, body:c});
}
function Ta(a, b) {
  var c = window.gapi.auth.getToken().access_token, d = new XMLHttpRequest;
  d.open("GET", a);
  d.setRequestHeader("Authorization", "Bearer " + c);
  d.onload = function() {
    b(d.responseText);
  };
  d.onerror = function() {
    b(null);
  };
  d.send();
}
;function Ua(a) {
  var b = $(a.a.a.b);
  b.on("mousewheel", function(b) {
    b = a.a.a.c * (0 < b.originalEvent.wheelDelta ? 1.1 : .9);
    b = Math.max(Math.min(b, 5), .2);
    var c = a.a.a;
    c.c = b;
    c.f = !0;
  });
  b.mousedown(function(b) {
    if (b.ctrlKey || b.metaKey) {
      var c = a.a;
      b = new p(b.clientX, b.clientY);
      c.mode = 1;
      c.g = b;
      c.h = c.a.a;
    } else {
      c = a.a, b = new p(b.clientX, b.clientY), c.mode = 2, c.c.start(X(c.a, b));
    }
  });
  b.mouseup(function() {
    Y(a.a);
  });
  b.mouseleave(function() {
    Y(a.a);
  });
  b.mousemove(function(b) {
    Ga(a.a, new p(b.clientX, b.clientY));
  });
}
function Va(a, b) {
  a.f = b;
  a.h = $.now();
  a.b = !1;
  window.setTimeout(function() {
    if (!a.b && !a.c && a.f) {
      var c = a.a;
      c.mode = 2;
      c.c.start(X(c.a, b));
    }
  }, 150);
}
function Wa(a) {
  var b = $(a.a.a.b);
  b.on("touchstart", function(b) {
    b.preventDefault();
    if (1 == b.originalEvent.touches.length) {
      Va(a, r(b));
    } else {
      if (1 < b.originalEvent.touches.length) {
        var c = r(b, 0);
        b = r(b, 1);
        Y(a.a);
        a.c = !0;
        a.b = !1;
        a.l = u(c, b).length();
        a.g = a.a.a.c;
      }
    }
  });
  b.on("touchmove", function(b) {
    b.preventDefault();
    if (1 == b.originalEvent.touches.length) {
      b = r(b);
      if (!a.b && 150 > $.now() - a.h && 6 < u(b, a.f).length()) {
        a.b = !0;
        var c = a.a;
        c.mode = 1;
        c.g = b;
        c.h = c.a.a;
      }
      Ga(a.a, b);
    } else {
      1 < b.originalEvent.touches.length && a.c && (b = a.g * u(r(b, 0), r(b, 1)).length() / a.l, b = Math.max(Math.min(b, 5), .5), c = a.a.a, c.c = b, c.f = !0);
    }
  });
  b.on("touchend", function(b) {
    b.preventDefault();
    a.b = !1;
    a.c = !1;
    a.f = null;
    Y(a.a);
  });
}
;var Xa = new function() {
  this.a = Array(2E3);
  this.b = [];
  this.c = !0;
  this.g = [];
  this.f = [];
  for (var a = 0;a < this.a.length;a++) {
    this.a[a] = Array(600);
    for (var b = 0;b < this.a[a].length;b++) {
      this.a[a][b] = new ja;
    }
  }
}, Ya = new function(a) {
  this.g = a;
  this.b = document.getElementById("ascii-canvas");
  this.context = this.b.getContext("2d");
  this.c = 1;
  this.a = new p(9E3, 5100);
  this.f = !0;
  this.h = !1;
  Da(this);
}(Xa), Za = new function(a, b) {
  this.a = a;
  this.b = b;
  this.c = new ta(b);
  this.mode = 0;
  this.f = null;
  Ha(this);
}(Ya, Xa);
new function(a) {
  this.a = a;
  this.c = this.b = !1;
  Wa(this);
}(Za);
new function(a) {
  this.a = a;
  Ua(this);
}(Za);
new function(a, b) {
  var c = this;
  this.f = !1;
  this.b = a;
  this.g = b;
  this.a = null;
  this.c = "";
  Ka(this);
  $("#drive-button").click(function() {
    c.f ? Ma(c) : (Ia(c, !1), La(c));
  });
  $("#drive-filename").click(function() {
    var a = "" + $("#drive-filename").text(), a = prompt("Enter new filename:", a);
    c.a.title = a;
    Z(c);
    Oa();
  });
  Qa(this);
  $(window).on("hashchange", function() {
    Ja(c);
  });
  $("#drive-new-file-button").click(function() {
    c.a = null;
    O(c.b);
    window.location.hash = "";
    Z(c);
    $("#drive-dialog").removeClass("visible");
  });
}(Xa, Ya);
Ea(Ya);

