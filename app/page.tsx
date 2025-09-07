"use client";
import * as React from "react";
const placeholder = "/static/img/placeholder-image.png";
// ---------- icons ----------
function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l1.9-1.9c.3-.3.7-.4 1.1-.3 1.2.4 2.5.7 3.8.7.6 0 1 .4 1 .9v3.2c0 .6-.4 1-1 1C10.6 20.4 3.6 13.4 3.6 4.6c0-.6.4-1 1-1H7.8c.5 0 .9.4.9 1 0 1.3.3 2.6.7 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
      />
    </svg>
  );
}
function IconPdf(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
        opacity=".15"
      />
      <path fill="currentColor" d="M14 2v6h6" />
      <path
        fill="currentColor"
        d="M7 15h2a1 1 0 0 1 0 2H7v2H5v-6h4a1 1 0 0 1 0 2H7zm6-4h-4v8h2v-2h2a3 3 0 0 0 0-6zm0 4h-2v-2h2a1 1 0 0 1 0 2zm6-4h-4v8h2v-2h2a3 3 0 0 0 0-6zm0 4h-2v-2h2a1 1 0 0 1 0 2z"
      />
    </svg>
  );
}
function IconChevronRight(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...props}>
      <path fill="currentColor" d="M9 6l6 6-6 6" />
    </svg>
  );
}
function IconCheck(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M9 16.2l-3.5-3.5L4 14.2 9 19l11-11-1.5-1.5z"
      />
    </svg>
  );
}

function IconHamburger(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...props}>
      <path fill="currentColor" d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
    </svg>
  );
}
function IconClose(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M18.3 5.7L12 12m0 0l-6.3 6.3M12 12l6.3 6.3M12 12L5.7 5.7"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
function IconChevronDown(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...props}>
      <path fill="currentColor" d="M7 10l5 5 5-5" />
    </svg>
  );
}

function navModel(locale, t) {
  return [
    {
      key: "products",
      label: t("nav.products"),
      href: "#featured",
      children: (locale === "th"
        ? [
            { title: "น้ำมันเครื่อง", desc: "เบนซิน/ดีเซล/NGV" },
            {
              title: "น้ำมันเกียร์และเพลา",
              desc: "สำหรับกระปุกเกียร์/ดิฟเฟอเรนเชียล",
            },
            { title: "ไฮดรอลิก", desc: "ประสิทธิภาพ/กันสึก" },
            { title: "จาระบี", desc: "งานทั่วไป/เกรดอาหาร" },
            { title: "เฉพาะทาง", desc: "เทอร์ไบน์/คอมเพรสเซอร์" },
          ]
        : [
            { title: "Engine Oils", desc: "Gasoline/Diesel/NGV" },
            { title: "Gear & Axle", desc: "Transmissions/Differentials" },
            { title: "Hydraulic", desc: "AW/Anti-wear" },
            { title: "Greases", desc: "General/Food-grade" },
            { title: "Specialty", desc: "Turbine/Compressor" },
          ]
      ).map((x) => ({ ...x, href: "#featured" })),
    },
    {
      key: "industries",
      label: t("nav.industries"),
      href: "#industries",
      children: industryData(locale)
        .slice(0, 8)
        .map((x) => ({ ...x, href: "#industries" })),
    },
    { key: "about", label: t("nav.about"), href: "#about" },
    { key: "contact", label: t("nav.contact"), href: "#contact" },
  ];
}

function SubmenuPanel({ items, onClose }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="absolute left-0 right-0 top-full bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <a
            key={i}
            href={it.href}
            onClick={onClose}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-50"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden ring-1 ring-neutral-200 shrink-0">
              <img
                src={placeholder}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-semibold leading-snug">{it.title}</div>
              {it.desc && (
                <div className="text-sm text-neutral-600">{it.desc}</div>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function MobileMenu({ open, onClose, model, locale, setLocale, t }) {
  const [expanded, setExpanded] = React.useState({});
  React.useEffect(() => {
    if (!open) setExpanded({});
  }, [open]);
  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        open ? "" : "pointer-events-none"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <aside
        className={`absolute left-0 right-0 top-0 w-full max-h-[80vh] overflow-auto bg-white shadow-xl rounded-b-2xl transform transition-transform ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-4 py-3 border-b flex items-center justify-between">
          <div className="font-extrabold text-red-600 text-lg">LubeCo</div>
          <button className="p-2" onClick={onClose}>
            <IconClose />
          </button>
        </div>
        <div className="p-4 space-y-1 text-sm">
          {model.map((m) => (
            <div key={m.key}>
              <button
                onClick={() =>
                  m.children
                    ? setExpanded((e) => ({ ...e, [m.key]: !e[m.key] }))
                    : onClose()
                }
                className="w-full flex items-center justify-between py-2 font-medium"
              >
                <span>
                  <a
                    href={m.href}
                    onClick={m.children ? (e) => e.preventDefault() : undefined}
                  >
                    {m.label}
                  </a>
                </span>
                {m.children && (
                  <IconChevronDown
                    className={`transition ${
                      expanded[m.key] ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              {m.children && expanded[m.key] && (
                <div className="pl-3 pb-2 space-y-1">
                  {m.children.map((c, i) => (
                    <a
                      key={i}
                      href={c.href}
                      onClick={onClose}
                      className="block py-2 text-neutral-700"
                    >
                      {c.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-2 border-t mt-2 flex items-center gap-2">
            <button
              onClick={() => setLocale("th")}
              className={`px-3 py-1.5 rounded border ${
                locale === "th" ? "bg-red-600 text-white border-red-600" : ""
              }`}
            >
              TH
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`px-3 py-1.5 rounded border ${
                locale === "en" ? "bg-red-600 text-white border-red-600" : ""
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

function Navbar({ locale, setLocale, t }) {
  const model = navModel(locale, t);
  const [activeKey, setActiveKey] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setActiveKey(null);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);
  React.useEffect(() => {
    const onResize = () => {
      if (typeof window !== "undefined" && window.innerWidth >= 768)
        setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const active = model.find((m) => m.key === activeKey);
  return (
    <header
      className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b"
      ref={ref}
    >
      <style>{`
        .hamburger-btn{display:inline-flex;}
        .desktop-nav{display:none;}
        .desktop-right{display:none;}
        @media (min-width:768px){
          .hamburger-btn{display:none;}
          .desktop-nav{display:flex;}
          .desktop-right{display:flex;}
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        <a
          href="#home"
          className="text-2xl font-extrabold text-red-600 tracking-tight"
        >
          LubeCo
        </a>
        {/* Desktop primary nav */}
        <nav className="desktop-nav items-center gap-4 text-sm font-medium">
          {model.map((m) => (
            <div key={m.key} className="relative">
              <button
                onClick={() =>
                  setActiveKey((k) => (k === m.key ? null : m.key))
                }
                className="relative py-1 px-1 hover:text-red-600 flex items-center gap-1"
              >
                <span>{m.label}</span>
                {m.children && (
                  <IconChevronDown
                    className={`transition ${
                      activeKey === m.key ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
            </div>
          ))}
        </nav>
        {/* Right widgets */}
        <div className="desktop-right ml-auto items-center gap-2">
          <input
            className="border rounded px-3 py-1.5 text-sm"
            placeholder={t("common.search")}
          />
          <div className="flex rounded overflow-hidden border">
            <button
              onClick={() => setLocale("th")}
              className={cx(
                "px-3 py-1.5 text-sm",
                locale === "th" && "bg-red-600 text-white"
              )}
            >
              TH
            </button>
            <button
              onClick={() => setLocale("en")}
              className={cx(
                "px-3 py-1.5 text-sm",
                locale === "en" && "bg-red-600 text-white"
              )}
            >
              EN
            </button>
          </div>
        </div>
        {/* Hamburger */}
        <button
          className="hamburger-btn ml-auto p-2"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <IconHamburger />
        </button>
      </div>
      {/* Second-tier panel */}
      {active && active.children && (
        <div className="relative">
          <SubmenuPanel
            items={active.children}
            onClose={() => setActiveKey(null)}
          />
        </div>
      )}
      {/* Mobile overlay */}
      {mobileOpen && (
        <MobileMenu
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          model={model}
          locale={locale}
          setLocale={setLocale}
          t={t}
        />
      )}
    </header>
  );
}

// ---------- Banner Carousel ----------
function BannerCarousel({ locale }) {
  const items = slides(locale);
  const [idx, setIdx] = React.useState(0);
  const count = items.length;
  React.useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % count), 5000);
    return () => clearInterval(t);
  }, [count]);
  const go = (step) => setIdx((i) => (i + step + count) % count);
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-64 md:h-96">
        <div
          className="absolute inset-0 flex transition-transform duration-500"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {items.map((s, i) => (
            <div key={i} className="min-w-full h-full relative">
              <img
                src={placeholder}
                alt="banner"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
              <div className="relative z-10 h-full max-w-6xl mx-auto px-4 flex items-center">
                <div className="text-white max-w-xl">
                  <div className="text-xs uppercase tracking-wider opacity-90">
                    {s.kicker}
                  </div>
                  <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mt-1">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-white/90">{s.desc}</p>
                  <a
                    href="#featured"
                    className="inline-flex items-center gap-2 mt-4 bg-red-600 text-white px-5 py-3 rounded-lg font-semibold shadow"
                  >
                    {s.cta} <span className="inline-block">›</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Arrows */}
        <button
          aria-label="Prev"
          onClick={() => go(-1)}
          className="z-10 absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center rounded-full bg-white/80 hover:bg-white shadow"
        >
          ‹
        </button>
        <button
          aria-label="Next"
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center rounded-full bg-white/80 hover:bg-white shadow"
        >
          ›
        </button>
        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all ${
                idx === i ? "w-6 bg.white" : "w-2 bg-white/60"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

function slides(locale) {
  if (locale === "th") {
    return [
      {
        kicker: "ยานยนต์",
        title: "การปกป้องที่เชื่อถือได้ในทุกสภาพการขับขี่",
        desc: "สูตรสังเคราะห์เพื่อประสิทธิภาพและความสะอาดของเครื่องยนต์",
        cta: "เลือกน้ำมันที่เหมาะสม",
      },
      {
        kicker: "อุตสาหกรรม",
        title: "ทำงานหนักอย่างมีประสิทธิภาพ",
        desc: "ไฮดรอลิกและจาระบีที่ออกแบบเพื่อเครื่องจักรของคุณ",
        cta: "ดูสินค้าอุตสาหกรรม",
      },
      {
        kicker: "มาตรฐาน/การรับรอง",
        title: "ผ่านการทดสอบและได้รับการรับรองจากสถาบันชั้นนำ",
        desc: "มั่นใจได้ในคุณภาพและความสม่ำเสมอ",
        cta: "ดูเอกสาร TDS/SDS",
      },
    ];
  }
  return [
    {
      kicker: "Automotive",
      title: "Reliable protection in every drive",
      desc: "Synthetic formulations for performance and cleanliness",
      cta: "Find your product",
    },
    {
      kicker: "Industrial",
      title: "Run hard. Run efficient.",
      desc: "Hydraulics & greases designed for your machinery",
      cta: "Browse industrial range",
    },
    {
      kicker: "Standards & Approvals",
      title: "Tested and certified",
      desc: "Confidence backed by leading certifications",
      cta: "View TDS/SDS",
    },
  ];
}

// ---------- Featured Products (Carousel in pages of 4) ----------
function FeaturedProductsCarousel({ locale, onSelect }) {
  const items = seedProducts(locale);
  const visible = 4;
  const slides = React.useMemo(() => {
    const out = [];
    for (let i = 0; i < items.length; i += visible) {
      out.push(items.slice(i, i + visible));
    }
    return out;
  }, [items, locale]);
  const [page, setPage] = React.useState(0);
  const max = Math.max(0, slides.length - 1);
  const go = (step) => setPage((p) => Math.min(max, Math.max(0, p + step)));

  // Drag-to-swipe (only when not starting on clickable areas)
  const wrapRef = React.useRef(null);
  const [drag, setDrag] = React.useState({
    active: false,
    startX: 0,
    delta: 0,
    width: 0,
  });
  const onDown = (e) => {
    // ignore clicks on explicit clickable targets
    if (e.target && e.target.closest && e.target.closest(".clickable")) return;
    const el = wrapRef.current;
    if (!el) return;
    const x = e.clientX ?? (e.touches && e.touches[0]?.clientX);
    if (typeof x !== "number") return;
    setDrag({
      active: true,
      startX: x,
      delta: 0,
      width: el.getBoundingClientRect().width,
    });
  };
  const onMove = (e) => {
    if (!drag.active) return;
    const x = e.clientX ?? (e.touches && e.touches[0]?.clientX);
    if (typeof x !== "number") return;
    const delta = x - drag.startX;
    setDrag((d) => ({ ...d, delta }));
    if (e.cancelable) e.preventDefault();
  };
  const onUp = () => {
    if (!drag.active) return;
    const threshold = drag.width * 0.2; // 20% of viewport width
    if (Math.abs(drag.delta) > threshold) {
      go(drag.delta < 0 ? 1 : -1);
    }
    setDrag((d) => ({ ...d, active: false, delta: 0 }));
  };

  const translatePct =
    -page * 100 +
    (drag.active && drag.width ? (drag.delta / drag.width) * 100 : 0);

  return (
    <section id="featured" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-extrabold text-center mb-10">
          {locale === "th" ? "สินค้าแนะนำ" : "Featured Products"}
        </h2>
        <div className="relative">
          <button
            aria-label="Prev"
            onClick={() => go(-1)}
            disabled={page === 0}
            className={`z-10 absolute left-1 md:left-3 top-1/2 -translate-y-1/2 text-4xl text-neutral-400 hover:text-neutral-700 ${
              page === 0 ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            ‹
          </button>
          <div
            className="overflow-hidden px-2 md:px-4 select-none"
            ref={wrapRef}
            onPointerDown={onDown}
            onPointerMove={onMove}
            onPointerUp={onUp}
            onPointerCancel={onUp}
            onPointerLeave={onUp}
            onTouchStart={onDown}
            onTouchMove={onMove}
            onTouchEnd={onUp}
            style={{
              touchAction: "pan-y",
              cursor: drag.active ? "grabbing" : "grab",
            }}
          >
            <div
              className="flex"
              style={{
                transform: `translateX(${translatePct}%)`,
                transition: drag.active
                  ? "none"
                  : "transform 450ms cubic-bezier(.22,.61,.36,1)",
              }}
            >
              {slides.map((group, gi) => (
                <div key={gi} className="min-w-full">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {group.map((p) => (
                      <div
                        key={p.id}
                        className="flex flex-col items-center text-center gap-3 px-2"
                      >
                        <button
                          onClick={() => onSelect?.(p)}
                          className="clickable cursor-pointer w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-neutral-200 bg.white focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                          <img
                            src={placeholder}
                            alt={p.name}
                            className="w-full h-full object-cover"
                          />
                        </button>
                        <button
                          onClick={() => onSelect?.(p)}
                          className="clickable cursor-pointer font-semibold leading-tight max-w-[220px] hover:text-red-600"
                        >
                          {p.name}
                        </button>
                        {p.specs?.viscosity && (
                          <div className="text-neutral-500 text-sm">
                            {p.specs.viscosity}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            aria-label="Next"
            onClick={() => go(1)}
            disabled={page === max}
            className={`z-10 absolute right-1 md:right-3 top-1/2 -translate-y-1/2 text-4xl text-neutral-400 hover:text-neutral-700 ${
              page === max ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

function IndustriesCarousel({ locale }) {
  const items = industryData(locale);
  const [idx, setIdx] = React.useState(0);
  const visible = 4;
  const max = Math.max(0, items.length - visible);
  const go = (step) => setIdx((i) => Math.min(max, Math.max(0, i + step)));

  // Drag-to-swipe across items
  const wrapRef = React.useRef(null);
  const [drag, setDrag] = React.useState({
    active: false,
    startX: 0,
    delta: 0,
    width: 0,
  });
  const onDown = (e) => {
    if (e.target && e.target.closest && e.target.closest(".clickable")) return; // keep clicks for circles/text
    const el = wrapRef.current;
    if (!el) return;
    const x = e.clientX ?? (e.touches && e.touches[0]?.clientX);
    if (typeof x !== "number") return;
    setDrag({
      active: true,
      startX: x,
      delta: 0,
      width: el.getBoundingClientRect().width,
    });
  };
  const onMove = (e) => {
    if (!drag.active) return;
    const x = e.clientX ?? (e.touches && e.touches[0]?.clientX);
    if (typeof x !== "number") return;
    const delta = x - drag.startX;
    setDrag((d) => ({ ...d, delta }));
    if (e.cancelable) e.preventDefault();
  };
  const onUp = () => {
    if (!drag.active) return;
    const itemW = drag.width / visible;
    const stepsFloat = Math.abs(drag.delta) / itemW;
    const thresholdSteps = 0.3; // must move at least 30% of one item
    if (stepsFloat > thresholdSteps) {
      const steps = Math.max(1, Math.round(stepsFloat));
      const direction = drag.delta < 0 ? 1 : -1;
      setIdx((i) => Math.min(max, Math.max(0, i + direction * steps)));
    }
    setDrag((d) => ({ ...d, active: false, delta: 0 }));
  };

  const translatePct =
    -(idx * (100 / visible)) +
    (drag.active && drag.width ? (drag.delta / drag.width) * 100 : 0);

  return (
    <section id="industries" className="bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-extrabold text-center mb-10">
          {locale === "th" ? "อุตสาหกรรมของฉันคือ…" : "My industry is…"}
        </h2>
        <div className="relative">
          <button
            aria-label="Prev"
            onClick={() => go(-1)}
            disabled={idx === 0}
            className={`z-10 absolute left-1 md:left-3 top-1/2 -translate-y-1/2 text-4xl text-neutral-400 hover:text-neutral-700 ${
              idx === 0 ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            ‹
          </button>
          <div
            className="overflow-hidden px-6 md:px-10 select-none"
            ref={wrapRef}
            onPointerDown={onDown}
            onPointerMove={onMove}
            onPointerUp={onUp}
            onPointerCancel={onUp}
            onPointerLeave={onUp}
            onTouchStart={onDown}
            onTouchMove={onMove}
            onTouchEnd={onUp}
            style={{
              touchAction: "pan-y",
              cursor: drag.active ? "grabbing" : "grab",
            }}
          >
            <div
              className="flex"
              style={{
                transform: `translateX(${translatePct}%)`,
                transition: drag.active
                  ? "none"
                  : "transform 450ms cubic-bezier(.22,.61,.36,1)",
              }}
            >
              {items.map((it, i) => (
                <div
                  key={i}
                  className="shrink-0"
                  style={{ width: `${100 / visible}%` }}
                >
                  <div className="flex flex-col items.center text-center gap-3 px-2">
                    <a
                      href="#industries-all"
                      className="clickable cursor-pointer w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-neutral-200 bg-white"
                    >
                      <img
                        src={placeholder}
                        alt={it.title}
                        className="w-full h-full object-cover"
                      />
                    </a>
                    <a
                      href="#industries-all"
                      className="clickable cursor-pointer font-semibold text-lg leading-tight max-w-[220px] hover:text-red-600"
                    >
                      {it.title}
                    </a>
                    <div className="text-neutral-500 text-sm max-w-[240px]">
                      {it.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            aria-label="Next"
            onClick={() => go(1)}
            disabled={idx === max}
            className={`z-10 absolute right-1 md:right-3 top-1/2 -translate-y-1/2 text-4xl text-neutral-400 hover:text-neutral-700 ${
              idx === max ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            ›
          </button>
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="#industries-all"
            className="px-6 py-3 rounded-full bg-red-600 text-white font-bold shadow"
          >
            {locale === "th" ? "ดูอุตสาหกรรมทั้งหมด" : "View All Industries"}
          </a>
        </div>
      </div>
    </section>
  );
}

function industryData(locale) {
  if (locale === "th") {
    return [
      { title: "เกษตรกรรม", desc: "เพิ่มประสิทธิภาพและผลผลิตของคุณ" },
      { title: "ก่อสร้าง", desc: "ทำงานได้มากขึ้น ดูแลเครื่องจักรน้อยลง" },
      {
        title: "ยานยนต์สำหรับผู้บริโภค",
        desc: "เติบโตธุรกิจด้วยน้ำมันที่ทำได้มากกว่า",
      },
      {
        title: "บรรจุภัณฑ์ลูกฟูก",
        desc: "สารหล่อลื่นเฉพาะทางที่อุตสาหกรรมต้องการ",
      },
      {
        title: "อาหารและเครื่องดื่ม",
        desc: "โซลูชันเกรดอาหารสำหรับสายการผลิต",
      },
      { title: "เหมืองแร่", desc: "พร้อมเสมอในสภาพงานหนัก" },
      { title: "การผลิต", desc: "ลดเวลาหยุดเครื่อง เพิ่ม OEE" },
      { title: "พลังงาน", desc: "ความน่าเชื่อถือสำหรับเทอร์ไบน์และระบบ" },
    ];
  }
  return [
    {
      title: "Agriculture",
      desc: "Keep growing your productivity and your business",
    },
    {
      title: "Construction",
      desc: "Build more, maintain your machinery less, save money",
    },
    {
      title: "Consumer Automotive",
      desc: "Build your business on oils that do more",
    },
    {
      title: "Corrugated Packaging",
      desc: "Get the specialist lubricants your industry needs",
    },
    { title: "Food & Beverage", desc: "Food-grade solutions for your line" },
    { title: "Mining", desc: "Always-on performance in harsh duty" },
    { title: "Manufacturing", desc: "Reduce downtime, improve OEE" },
    { title: "Power", desc: "Reliability for turbines & systems" },
  ];
}

export default function Preview() {
  // Locale state
  const [locale, setLocale] = React.useState("th");
  const t = (path) => {
    const dict = messages[locale];
    return path.split(".").reduce((o, k) => (o ? o[k] : ""), dict) || "";
  };

  const [active, setActive] = React.useState(null);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Top utility bar */}
      <div className="bg-red-600 text-white text-xs">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center gap-3">
          <IconPhone />
          <span className="hidden sm:inline">
            {locale === "th" ? "ฝ่ายขาย: 0-0000-0000" : "Sales: +66-0000-0000"}
          </span>
          <span className="ml-auto opacity-90">
            {locale === "th" ? "ภูมิภาค: ไทย" : "Region: Thailand"}
          </span>
        </div>
      </div>

      {/* Header */}
      <Navbar locale={locale} setLocale={setLocale} t={t} />

      {/* Carousel */}
      <BannerCarousel locale={locale} />

      {/* Industries (Carousel) */}
      <IndustriesCarousel locale={locale} />

      {/* Featured Products */}
      <FeaturedProductsCarousel locale={locale} onSelect={setActive} />

      {/* Footer */}
      <footer id="about" className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="text-2xl font-extrabold text-red-600 mb-2">
              LubeCo
            </div>
            <p className="text-neutral-600">
              {locale === "th"
                ? "โซลูชันน้ำมันหล่อลื่นเพื่อความน่าเชื่อถือ"
                : "Reliable lubricant solutions."}
            </p>
          </div>
          <div>
            <div className="font-semibold mb-2">{t("nav.products")}</div>
            <ul className="space-y-1 text-neutral-700">
              {categoryTiles(locale).map((c) => (
                <li key={c.title}>
                  <a className="hover:text-red-600" href="#featured">
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-2">{t("nav.contact")}</div>
            <ul className="space-y-1 text-neutral-700">
              <li>
                {locale === "th"
                  ? "อีเมล: sales@lubeco.example"
                  : "Email: sales@lubeco.example"}
              </li>
              <li>
                {locale === "th" ? "โทร: 0-0000-0000" : "Phone: +66-0000-0000"}
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t">
          <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-neutral-500 flex items-center justify-between">
            <span>© {new Date().getFullYear()} LubeCo</span>
            <span>
              {locale === "th" ? "นโยบายความเป็นส่วนตัว" : "Privacy policy"}
            </span>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 bg-black/40 flex items.end md:items-center justify-center p-0 md:p-6"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-white w-full md:max-w-3xl rounded-t-2xl md:rounded-2xl shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 border-b flex items-center justify-between">
              <h3 className="text-xl font-bold">{active.name}</h3>
              <button
                onClick={() => setActive(null)}
                className="h-8 w-8 grid place-items-center rounded hover:bg-neutral-100"
              >
                ✕
              </button>
            </div>
            <div className="p-5 grid md:grid-cols-2 gap-6">
              <img src={placeholder} alt="detail" className="rounded-xl" />
              <div>
                <p className="text-neutral-700 mb-3">{active.description}</p>
                <div className="text-sm">
                  <div className="font-semibold mb-1">
                    {t("common.specifications")}
                  </div>
                  <ul className="list-disc pl-5 space-y-1">
                    {active.specs.viscosity && (
                      <li>Viscosity: {active.specs.viscosity}</li>
                    )}
                    {active.specs.baseOil && (
                      <li>Base oil: {active.specs.baseOil}</li>
                    )}
                    {active.specs.approvals?.map((a) => (
                      <li key={a}>Approval: {a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-5 border-t flex justify-end gap-2">
              <button
                onClick={() => setActive(null)}
                className="h-10 px-4 rounded-lg border font-semibold"
              >
                Close
              </button>
              <button className="h-10 px-4 rounded-lg bg-red-600 text-white font-semibold">
                {t("common.download")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

const messages = {
  en: {
    nav: {
      home: "Home",
      products: "Products",
      industries: "Industries",
      resources: "Resources",
      about: "About",
      contact: "Contact",
    },
    home: {
      headline: "Reliability in every drop",
      cta: "Find the right lubricant",
    },
    common: {
      search: "Search",
      download: "Download",
      specifications: "Specifications",
    },
    products: {
      title: "Product Finder",
      category: "Category",
      viscosity: "Viscosity / Grade",
      baseOil: "Base Oil",
    },
  },
  th: {
    nav: {
      home: "หน้าแรก",
      products: "สินค้า",
      industries: "อุตสาหกรรม",
      resources: "ทรัพยากร",
      about: "เกี่ยวกับเรา",
      contact: "ติดต่อเรา",
    },
    home: {
      headline: "ความเชื่อมั่นในทุกหยด",
      cta: "ค้นหาน้ำมันหล่อลื่นที่เหมาะสม",
    },
    common: { search: "ค้นหา", download: "ดาวน์โหลด", specifications: "สเปก" },
    products: {
      title: "ค้นหาสินค้า",
      category: "หมวดหมู่",
      viscosity: "ความหนืด / เกรด",
      baseOil: "เบสน้ำมัน",
    },
  },
};

function seedProducts(locale) {
  const en = [
    {
      id: "p1",
      name: "LubeCo SYN MOTO 5W-30",
      category: "Automotive",
      summary: "Full-synthetic engine oil.",
      description: "Engineered for protection and fuel efficiency.",
      specs: {
        viscosity: "5W-30",
        baseOil: "Synthetic",
        approvals: ["API SP", "ILSAC GF-6A"],
        certifications: ["ISO 9001"],
      },
      resources: [{ type: "TDS" }],
    },
    {
      id: "p2",
      name: "LubeCo HYDRO 46",
      category: "Industrial",
      summary: "Premium anti-wear hydraulic oil.",
      description: "Extends pump life in harsh conditions.",
      specs: {
        viscosity: "ISO 46",
        baseOil: "Mineral",
        approvals: ["DIN 51524-2"],
      },
      resources: [{ type: "TDS" }],
    },
    {
      id: "p3",
      name: "FOOD-SAFE Grease",
      category: "Grease",
      summary: "NSF H1 food-grade grease.",
      description: "Water resistance and wear protection.",
      specs: {
        viscosity: "NLGI 2",
        baseOil: "Synthetic",
        certifications: ["NSF H1"],
      },
      resources: [{ type: "TDS" }],
    },
    {
      id: "p4",
      name: "GEAR EP 80W-90",
      category: "Automotive",
      summary: "Extreme-pressure gear oil.",
      description: "Protects against scoring and pitting.",
      specs: {
        viscosity: "80W-90",
        baseOil: "Mineral",
        approvals: ["API GL-5"],
      },
      resources: [{ type: "TDS" }],
    },
    {
      id: "p5",
      name: "TURBINE 32",
      category: "Specialty",
      summary: "Turbine oil for power gen.",
      description: "Oxidation stability & demulsibility.",
      specs: { viscosity: "ISO 32", baseOil: "Synthetic" },
      resources: [{ type: "TDS" }],
    },
    {
      id: "p6",
      name: "HYDRO 68",
      category: "Industrial",
      summary: "Anti-wear hydraulic oil.",
      description: "Keeps systems clean and efficient.",
      specs: { viscosity: "ISO 68", baseOil: "Mineral" },
    },
    {
      id: "p7",
      name: "COMPRESSOR 68",
      category: "Industrial",
      summary: "Rotary screw compressor oil.",
      description: "Long drain intervals.",
      specs: { viscosity: "ISO 68", baseOil: "Synthetic" },
    },
    {
      id: "p8",
      name: "SYN ATF",
      category: "Automotive",
      summary: "Synthetic automatic transmission fluid.",
      description: "Smooth shifting.",
      specs: { viscosity: "ATF", baseOil: "Synthetic" },
    },
    {
      id: "p9",
      name: "GEAR EP 75W-140",
      category: "Automotive",
      summary: "Severe-duty gear oil.",
      description: "For high-load axles.",
      specs: { viscosity: "75W-140", baseOil: "Synthetic" },
    },
    {
      id: "p10",
      name: "CUTTING OIL",
      category: "Specialty",
      summary: "Neat cutting oil.",
      description: "Surface finish and tool life.",
      specs: { viscosity: "ISO 22", baseOil: "Mineral" },
    },
    {
      id: "p11",
      name: "HEAT TRANSFER 32",
      category: "Specialty",
      summary: "Heat transfer oil.",
      description: "Stable thermal performance.",
      specs: { viscosity: "ISO 32", baseOil: "Mineral" },
    },
    {
      id: "p12",
      name: "WAY OIL 68",
      category: "Industrial",
      summary: "Slideway lubricant.",
      description: "Stick-slip reduction.",
      specs: { viscosity: "ISO 68", baseOil: "Mineral" },
    },
  ];
  const th = [
    {
      id: "p1",
      name: "LubeCo SYN MOTO 5W-30",
      category: "ยานยนต์",
      summary: "น้ำมันเครื่องสังเคราะห์แท้",
      description: "ปกป้องและประหยัดเชื้อเพลิง",
      specs: {
        viscosity: "5W-30",
        baseOil: "Synthetic",
        approvals: ["API SP", "ILSAC GF-6A"],
        certifications: ["ISO 9001"],
      },
      resources: [{ type: "TDS" }],
    },
    {
      id: "p2",
      name: "LubeCo HYDRO 46",
      category: "อุตสาหกรรม",
      summary: "น้ำมันไฮดรอลิกกันสึกหรอ",
      description: "ยืดอายุปั๊มและสะอาดทน",
      specs: {
        viscosity: "ISO 46",
        baseOil: "Mineral",
        approvals: ["DIN 51524-2"],
      },
      resources: [{ type: "TDS" }],
    },
    {
      id: "p3",
      name: "FOOD-SAFE Grease",
      category: "จาระบี",
      summary: "จาระบีเกรดอาหาร NSF H1",
      description: "ทนน้ำและป้องกันการสึกหรอ",
      specs: {
        viscosity: "NLGI 2",
        baseOil: "Synthetic",
        certifications: ["NSF H1"],
      },
      resources: [{ type: "TDS" }],
    },
    {
      id: "p4",
      name: "GEAR EP 80W-90",
      category: "ยานยนต์",
      summary: "น้ำมันเกียร์รับแรงกดสูง",
      description: "ป้องกันการสึกและรอยกัดกร่อน",
      specs: { viscosity: "80W-90", baseOil: "Mineral" },
    },
    {
      id: "p5",
      name: "TURBINE 32",
      category: "เฉพาะทาง",
      summary: "น้ำมันเทอร์ไบน์",
      description: "เสถียรภาพการออกซิเดชันสูง",
      specs: { viscosity: "ISO 32", baseOil: "Synthetic" },
    },
    {
      id: "p6",
      name: "HYDRO 68",
      category: "อุตสาหกรรม",
      summary: "ไฮดรอลิกป้องกันการสึก",
      description: "ระบบสะอาด ประสิทธิภาพดี",
      specs: { viscosity: "ISO 68", baseOil: "Mineral" },
    },
    {
      id: "p7",
      name: "COMPRESSOR 68",
      category: "อุตสาหกรรม",
      summary: "น้ำมันคอมเพรสเซอร์",
      description: "ระยะเปลี่ยนนาน",
      specs: { viscosity: "ISO 68", baseOil: "Synthetic" },
    },
    {
      id: "p8",
      name: "SYN ATF",
      category: "ยานยนต์",
      summary: "น้ำมันเกียร์อัตโนมัติสังเคราะห์",
      description: "เปลี่ยนเกียร์นุ่มนวล",
      specs: { viscosity: "ATF", baseOil: "Synthetic" },
    },
    {
      id: "p9",
      name: "GEAR EP 75W-140",
      category: "ยานยนต์",
      summary: "เกียร์รับงานหนัก",
      description: "เหมาะกับเพลาหนัก",
      specs: { viscosity: "75W-140", baseOil: "Synthetic" },
    },
    {
      id: "p10",
      name: "CUTTING OIL",
      category: "เฉพาะทาง",
      summary: "น้ำมันตัดกลึง",
      description: "ผิวงานดี อายุมีดนาน",
      specs: { viscosity: "ISO 22", baseOil: "Mineral" },
    },
    {
      id: "p11",
      name: "HEAT TRANSFER 32",
      category: "เฉพาะทาง",
      summary: "น้ำมันถ่ายเทความร้อน",
      description: "เสถียรภาพเชิงความร้อน",
      specs: { viscosity: "ISO 32", baseOil: "Mineral" },
    },
    {
      id: "p12",
      name: "WAY OIL 68",
      category: "อุตสาหกรรม",
      summary: "น้ำมันรางเลื่อน",
      description: "ลดอาการสะดุด (stick-slip)",
      specs: { viscosity: "ISO 68", baseOil: "Mineral" },
    },
  ];
  return locale === "th" ? th : en;
}

function categoryTiles(locale) {
  return locale === "th"
    ? [
        { title: "น้ำมันเครื่อง" },
        { title: "น้ำมันเกียร์และเพลา" },
        { title: "ไฮดรอลิก" },
        { title: "จาระบี" },
        { title: "เฉพาะทาง" },
      ]
    : [
        { title: "Engine Oils" },
        { title: "Gear & Axle" },
        { title: "Hydraulic" },
        { title: "Greases" },
        { title: "Specialty" },
      ];
}
