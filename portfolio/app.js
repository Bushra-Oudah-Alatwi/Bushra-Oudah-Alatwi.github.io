(function () {
  var D = window.PORTFOLIO, ID = window.PAGE, isIndex = ID === "index";
  var root = isIndex ? "" : "../";
  var app = document.getElementById("app");
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var ar = function (n) { return String(n).replace(/\d/g, function (d) { return "٠١٢٣٤٥٦٧٨٩"[d]; }); };

  var I = {
    target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>',
    cert: '<rect x="3" y="4" width="18" height="12" rx="2"/><circle cx="12" cy="18" r="3"/><path d="M7 8h10M7 11h6"/>',
    bulb: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/>',
    cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    check: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 12l3 3 5-6"/>',
    grid: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14a5 5 0 0 1 5 6"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    tools: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
    flow: '<rect x="3" y="3" width="7" height="6" rx="1.5"/><rect x="14" y="15" width="7" height="6" rx="1.5"/><path d="M6.5 9v4a2 2 0 0 0 2 2H14"/>',
    code: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
    chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
    bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    clip: '<path d="M9 4h6v3H9z"/><path d="M15 5h3v16H6V5h3"/><path d="M9 12h6M9 16h4"/>',
    wrench: '<path d="M14.5 6.5a4 4 0 0 0-5.3 5.3L3 18l3 3 6.2-6.2a4 4 0 0 0 5.3-5.3l-2.6 2.6-2.4-.6-.6-2.4z"/>',
    chart: '<path d="M4 20V4M4 20h16"/><path d="M8 16v-4M12 16V8M16 16v-6"/>',
    rocket: '<path d="M12 15l-3-3c1.5-4.5 4.5-8 10-9-1 5.5-4.5 8.5-9 10z"/><path d="M9 12l-4 1-2 3 4 1M12 15l-1 4 3 2 1-4"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/>',
    home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/>'
  };
  var ICON = { visits: "users", communities: "chat", goals: "target", "subject-goals": "book", growth: "cert", initiatives: "bulb", curriculum: "cal", quizzes: "check",
    timetable: "grid", "class-activities": "users", "extra-activities": "star", aids: "tools", strategies: "flow", tech: "code",
    skills: "chip", motivation: "bolt", assessment: "clip", remedial: "wrench", results: "chart", enrichment: "rocket",
    feedback: "chat", parents: "home" };
  var svg = function (k) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (I[k] || I.chip) + "</svg>"; };
  var win = function (file, body) { return '<section class="win"><div class="win-bar"><div class="dots"><i></i><i></i><i></i></div><span class="win-title">' + file + '</span></div><div class="win-body">' + body + "</div></section>"; };

  var top = function (path) {
    return '<div class="top"><a href="' + root + '"><img class="logo" src="' + root + 'logo.png" alt="علماء الغد"></a>' +
      '<span class="crumb">~/<b>portfolio</b>' + (path ? "/" + path : "") + "</span></div>";
  };
  var foot = '<footer>ملف إنجاز المعلمة ' + esc(D.teacher) + " · " + esc(D.subject) + " · " + esc(D.school) + " · " + esc(D.year) + "</footer>";

  if (isIndex) {
    document.title = "ملف الإنجاز | " + D.teacher;
    var tiles = D.items.map(function (it) {
      return '<a class="tile" href="' + it.id + '/"><span class="ico">' + svg(ICON[it.id]) + "</span><span>" + esc(it.title) + "</span></a>";
    }).join("");
    tiles += '<a class="tile" href="https://drive.google.com/file/d/1fUg3THjWeWyAhclQU5jRaowJ1Dg6D5hi/view?usp=drivesdk" target="_blank" rel="noopener"><span class="ico">' + svg("book") + "</span><span>ميثاق أخلاقيات مهنة التعليم</span></a>";
    app.innerHTML = top("") +
      '<div class="hero"><span class="tag"><span class="dot"></span>ملف الإنجاز الرقمي</span><h1>ملف إنجاز المعلمة ' + esc(D.teacher) + "</h1>" +
      '<div class="meta"><span>المادة: <b>' + esc(D.subject) + '</b></span><span>المدرسة: <b>' + esc(D.school) + '</b></span><span>العام: <b>' + esc(D.year) + "</b></span></div></div>" +
      win("index.html", '<div class="grid">' + tiles + "</div>") + foot;
    return;
  }

  var idx = D.items.findIndex(function (x) { return x.id === ID; });
  var it = D.items[idx];
  if (!it) { app.innerHTML = top("") + "<p>الصفحة غير موجودة.</p>"; return; }
  document.title = it.title + " | ملف الإنجاز";

  var pts = it.points && it.points.length ? '<ul class="points">' + it.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" : "";
  var links = it.links && it.links.length ? win("links.txt", '<div class="links">' + it.links.map(function (l) {
    return '<a class="btn" href="' + esc(l.url) + '"' + (/^https?:/.test(l.url) ? ' target="_blank" rel="noopener"' : "") + ">" + esc(l.label) + " ←</a>";
  }).join("") + "</div>") : "";
  function reports(list) {
    return '<div class="count">' + 'عدد التقارير المنفذة: ' + ar(list.length) + '</div>' + list.map(function (r, k) {
      var base = "../../shawahid/" + r.folder + "/";
      var ph = (r.photos || []).map(function (f) { return '<figure data-src="' + base + f + '"><img loading="lazy" src="' + base + f + '" alt="شاهد ' + esc(r.strategy) + '"></figure>'; }).join("");
      return win("report-" + ar(list.length - k) + ".txt",
        '<div class="rep"><span class="rep-n">' + ar(list.length - k) + '</span><h2>' + esc(r.strategy) + '</h2></div>' +
        '<dl class="facts"><div><dt>الصف</dt><dd>' + esc(r.grade) + '</dd></div><div><dt>الدرس</dt><dd>' + esc(r.lesson) + '</dd></div><div><dt>تاريخ التنفيذ</dt><dd>' + esc(r.date) + '</dd></div></dl>' +
        (ph ? '<div class="gallery rep-gal">' + ph + '</div>' : '') +
        '<div class="links" style="margin-top:14px"><a class="btn" href="' + base + '">عرض الشواهد كاملة ←</a></div>');
    }).join("");
  }
  var prev = D.items[idx - 1], next = D.items[idx + 1];
  var pager = '<nav class="pager">' +
    (prev ? '<a href="../' + prev.id + '/"><small>→ السابق</small>' + esc(prev.title) + "</a>" : '<a href="../"><small>→ الرئيسية</small>فهرس الملف</a>') +
    (next ? '<a class="next" href="../' + next.id + '/"><small>التالي ←</small>' + esc(next.title) + "</a>" : '<a class="next" href="../"><small>الرئيسية ←</small>فهرس الملف</a>') + "</nav>";

  app.innerHTML = top(it.id) +
    '<div class="hero"><span class="tag"><span class="dot"></span>البند ' + ar(it.n) + '</span><h1>' + esc(it.title) + "</h1>" +
    '<div class="meta"><span>المعلمة: <b>' + esc(D.teacher) + '</b></span><span>المادة: <b>' + esc(D.subject) + "</b></span></div></div>" +
    win("about.txt", "<p>" + esc(it.intro) + "</p>" + (pts ? '<div style="height:12px"></div>' + pts : "")) +
    (it.reports ? reports(it.reports) : win("shawahid/", '<div class="gallery" id="gal"></div><div class="empty" id="empty"><span class="cursor"></span><span>جارٍ تحميل الشواهد…</span></div>')) +
    links + pager + foot + '<div class="lb" id="lb"><button aria-label="إغلاق">✕</button><img alt=""></div>';

  // load evidence photos named 1.jpg, 2.png ... from this folder
  var gal = document.getElementById("gal"), empty = document.getElementById("empty"), lb = document.getElementById("lb");
  var exts = ["jpg", "jpeg", "png", "webp", "JPG", "JPEG", "PNG"], found = 0, MAX = 40, misses = 0;
  function tryOne(n, e, done) {
    if (e >= exts.length) return done(null);
    var img = new Image();
    img.onload = function () { done(img.src); };
    img.onerror = function () { tryOne(n, e + 1, done); };
    img.src = n + "." + exts[e];
  }
  function step(n) {
    if (n > MAX || misses >= 3) return finish();
    tryOne(n, 0, function (src) {
      if (src) {
        misses = 0; found++;
        var cap = (it.captions && it.captions[n]) || "";
        var f = document.createElement("figure");
        f.innerHTML = '<img loading="lazy" src="' + src + '" alt="' + esc(cap || ("شاهد " + n)) + '">' + (cap ? "<figcaption>" + esc(cap) + "</figcaption>" : "");
        f.onclick = function () { lb.querySelector("img").src = src; lb.classList.add("on"); };
        gal.appendChild(f);
      } else misses++;
      step(n + 1);
    });
  }
  function finish() {
    if (found) empty.remove();
    else empty.innerHTML = '<span class="cursor"></span><span>الشواهد قيد الإضافة</span>';
  }
  lb.onclick = function () { lb.classList.remove("on"); };
  document.querySelectorAll("figure[data-src]").forEach(function (f) { f.onclick = function () { lb.querySelector("img").src = f.dataset.src; lb.classList.add("on"); }; });
  if (!it.reports) step(1);
})();
