import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useMemo, useState } from "react";
import * as m from "motion/react-m";
import Ambient from "../components/Ambient";
import Nav from "../components/Nav";
import DevicePicker from "../components/DevicePicker";
import DeviceStage from "../components/DeviceStage";
import Verdict from "../components/Verdict";
import CompareTable from "../components/CompareTable";
import TipCard from "../components/TipCard";
import Footer from "../components/Footer";
import { CATEGORIES, DEFAULT_PAIR, DEVICES, deviceById } from "../lib/devices";
import { compare } from "../lib/compare";
import { applyOverrides, usePointsOverride } from "../lib/clientApp";

const TITLE = "Apple Guide – Lohnt sich der Wechsel?";
const DESCRIPTION = "Vergleiche iPhone, iPad, Mac, Apple Watch, AirPods, HomePod und Apple TV: Wähle dein Gerät und dein Wunschgerät und sieh sofort, was sich wirklich ändert.";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };
const rise = { hidden: { opacity: 0, y: 18, filter: "blur(6px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 220, damping: 28 } } };

function initialSelection(query) {
  const { c, a, b } = query;
  const da = deviceById(a), db = deviceById(b);
  if (da && db && da.category === db.category) return { category: da.category, aId: da.id, bId: db.id };
  const cat = CATEGORIES.some((x) => x.id === c) ? c : "iphone";
  return { category: cat, aId: DEFAULT_PAIR[cat][0], bId: DEFAULT_PAIR[cat][1] };
}

// Die Auswahl kommt aus der URL (?c=iphone&a=iphone-13&b=iphone-17-pro). Sobald der Router bereit ist,
// wird der Vergleich mit dieser Auswahl neu aufgesetzt, ohne Effekte und ohne Flackern.
export default function Home() {
  const router = useRouter();
  return <Comparer key={router.isReady ? "ready" : "init"} router={router} initial={initialSelection(router.isReady ? router.query : {})} />;
}

function Comparer({ router, initial }) {
  const overrides = usePointsOverride();
  const all = useMemo(() => applyOverrides(DEVICES, overrides), [overrides]);

  const [category, setCategory] = useState(initial.category);
  const [aId, setAId] = useState(initial.aId);
  const [bId, setBId] = useState(initial.bId);

  const syncUrl = useCallback(
    (c, a, b) => {
      router.replace({ pathname: "/", query: { c, a, b } }, undefined, { shallow: true, scroll: false });
    },
    [router]
  );

  const devices = useMemo(() => all.filter((d) => d.category === category), [all, category]);
  const a = devices.find((d) => d.id === aId) || devices[0];
  const b = devices.find((d) => d.id === bId) || devices[1];
  const result = useMemo(() => compare(a, b), [a, b]);
  const noun = CATEGORIES.find((c) => c.id === category)?.noun || "Gerät";

  function changeCategory(c) {
    if (c === category) return;
    const [na, nb] = DEFAULT_PAIR[c];
    setCategory(c);
    setAId(na);
    setBId(nb);
    syncUrl(c, na, nb);
  }
  function pickA(d) {
    setAId(d.id);
    syncUrl(category, d.id, bId);
  }
  function pickB(d) {
    setBId(d.id);
    syncUrl(category, aId, d.id);
  }
  function swap() {
    setAId(bId);
    setBId(aId);
    syncUrl(category, bId, aId);
  }

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <Ambient />
      <Nav category={category} onCategory={changeCategory} />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-[148px] sm:px-6 lg:pt-32">
        <m.section variants={stagger} initial="hidden" animate="show" className="text-center">
          <m.h1 variants={rise} className="headline mx-auto max-w-[14ch] text-[clamp(40px,7.5vw,84px)] text-balance">
            Lohnt sich der Wechsel?
          </m.h1>
          <m.p variants={rise} className="mx-auto mt-5 max-w-[52ch] text-[17px] leading-relaxed text-ink-2 sm:text-[19px] text-balance">
            Wähle dein {noun} und das Modell, das du im Auge hast. Apple Guide zeigt dir sofort, was sich wirklich ändert.
          </m.p>
        </m.section>

        <m.section variants={stagger} initial="hidden" animate="show" className="mt-10 sm:mt-14">
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <m.div variants={rise} className="relative z-30">
              <DevicePicker label="Mein Gerät" value={a} onChange={pickA} devices={devices} />
            </m.div>
            <m.div variants={rise} className="relative z-30">
              <DevicePicker label="Mein Wunschgerät" value={b} onChange={pickB} devices={devices} align="right" />
            </m.div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 lg:grid-cols-[1fr_minmax(340px,420px)_1fr] lg:items-start lg:gap-8">
            <m.div variants={rise} className="col-start-1 row-start-1 lg:col-start-auto lg:row-start-auto">
              <DeviceStage device={a} side="a" priority />
            </m.div>
            <m.div variants={rise} className="col-span-2 row-start-2 lg:col-span-1 lg:row-start-auto lg:mt-6">
              <Verdict result={result} a={a} b={b} onSwap={swap} />
            </m.div>
            <m.div variants={rise} className="col-start-2 row-start-1 lg:col-start-auto lg:row-start-auto">
              <DeviceStage device={b} side="b" priority />
            </m.div>
          </div>
        </m.section>

        <div className="mt-20 sm:mt-28">
          <CompareTable a={a} b={b} />
        </div>

        <div className="mt-16 sm:mt-24">
          <TipCard />
        </div>
      </main>
      <Footer />
    </>
  );
}
