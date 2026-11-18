/* Button „Übersicht“: führt aus jedem Tool zurück zur Startseite der Sammlung.
   Er wird in die vorhandene Buttonleiste des Tools eingefügt (vor den Hell/Dunkel- bzw. Schriftgrößen-Button)
   und übernimmt deren Aussehen. Gibt es keine solche Leiste, erscheint er als kleiner Knopf oben rechts. */
(function () {
  if (document.getElementById("lab-home")) return;
  var ziel = "../";
  var haus = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex:none;vertical-align:-2px;margin-right:5px"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9.5h13V10"/></svg>';

  function anker() {
    var sel = ["#themeBtn", "#theme", "#themeToggle", "#btnTheme", "#darkToggle", "#fsm"];
    for (var i = 0; i < sel.length; i++) { var e = document.querySelector(sel[i]); if (e && e.offsetParent) return e; }
    var bs = document.querySelectorAll("button");
    for (var j = 0; j < bs.length; j++) {
      var t = (bs[j].textContent || "").trim();
      if (/^(☾|☀|🌙)?\s*(Dunkel|Hell|Dunkler Modus|Heller Modus|Dunkelmodus|Hellmodus)/i.test(t) && bs[j].offsetParent) return bs[j];
    }
    return null;
  }

  function einbauen() {
    if (document.getElementById("lab-home")) return;
    var a = anker();
    var b = document.createElement("button");
    b.type = "button";
    b.id = "lab-home";
    b.title = "Zurück zur Übersicht aller Tools";
    b.setAttribute("aria-label", "Zurück zur Übersicht aller Tools");
    b.innerHTML = haus + '<span class="lab-home-text">Übersicht</span>';
    b.addEventListener("click", function () { location.href = ziel; });
    if (a) {
      b.className = a.className;
      b.removeAttribute("aria-pressed");
      b.style.display = "inline-flex";
      b.style.alignItems = "center";
      b.style.whiteSpace = "nowrap";
      a.parentNode.insertBefore(b, a);
      /* Wird die Leiste zu eng (Handy), nur das Haus-Symbol zeigen */
      var row = a.parentNode, txt = b.querySelector(".lab-home-text"), svg = b.querySelector("svg");
      var passt = function () {
        txt.style.display = ""; svg.style.marginRight = "5px";
        var eng = row.scrollWidth > row.clientWidth + 1;
        var kids = row.children;
        for (var k = 0; k < kids.length && !eng; k++) { if (kids[k].getBoundingClientRect().right > window.innerWidth - 2) eng = true; }
        if (eng) { txt.style.display = "none"; svg.style.marginRight = "0"; }
      };
      passt();
      window.addEventListener("resize", passt);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(passt);
    } else {
      b.style.cssText = "position:fixed;top:calc(10px + env(safe-area-inset-top,0px));right:calc(12px + env(safe-area-inset-right,0px));z-index:2147483000;" +
        "display:inline-flex;align-items:center;padding:6px 12px 6px 10px;border-radius:999px;cursor:pointer;" +
        "background:rgba(255,255,255,.94);color:#1e2a3a;border:1px solid rgba(30,42,58,.25);box-shadow:0 2px 8px rgba(0,0,0,.12);" +
        "font:600 14px/1.2 'Source Sans 3',system-ui,sans-serif";
      document.body.appendChild(b);
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", einbauen); else einbauen();
})();
