import Head from "next/head";
import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import db, { firebaseConfigured } from "../../lib/clientApp";
import Ambient from "../../components/Ambient";
import Nav from "../../components/Nav";

const input = "glass-sm h-11 min-w-0 rounded-[14px] px-4 text-[15px] font-medium text-ink placeholder:text-ink-3 focus:outline-none focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-accent)_30%,transparent)]";
const button = "pill h-11 shrink-0 bg-accent px-5 text-[15px] font-medium text-white transition hover:bg-accent-strong active:scale-[0.98]";

export default function DashboardPanel() {
  const [lastUpdate, setLastUpdate] = useState("");
  const [products] = useCollection(db ? db.collection("products").orderBy("name") : null);

  const registerNewDevice = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    await db.collection("products").doc().set({ name: form.name.value, points: form.point.value });
    form.reset();
  };

  const updateDevice = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLastUpdate(form.id.value);
    await db.collection("products").doc(form.id.value).update({ name: form.name.value, points: form.point.value });
  };

  return (
    <>
      <Head>
        <title>Dashboard – Apple Guide</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Ambient />
      <Nav />
      <main className="mx-auto max-w-3xl px-4 pb-16 pt-32 sm:px-6">
        <h1 className="headline text-[40px]">Punkte pflegen.</h1>
        <p className="mt-3 text-[15px] text-ink-2">Einträge in Firestore überschreiben die Katalogpunkte, wenn der Name exakt übereinstimmt.</p>

        {!firebaseConfigured ? (
          <div className="glass-strong glass-specular mt-8 p-6 text-[15px] text-ink-2">
            Firebase ist nicht konfiguriert. Setze <code className="rounded bg-ink/6 px-1.5 py-0.5 text-[13px] dark:bg-white/10">APIKEY</code>,{" "}
            <code className="rounded bg-ink/6 px-1.5 py-0.5 text-[13px] dark:bg-white/10">AUTHDOMAIN</code> und{" "}
            <code className="rounded bg-ink/6 px-1.5 py-0.5 text-[13px] dark:bg-white/10">PROJECTID</code> als Umgebungsvariablen, um Punkte zentral zu pflegen.
          </div>
        ) : (
          <>
            <form className="glass-strong glass-specular mt-8 flex flex-wrap gap-2 p-4" onSubmit={registerNewDevice}>
              <input className={`${input} flex-1`} name="name" placeholder="Name, z. B. iPhone 17" required />
              <input className={`${input} w-28`} name="point" placeholder="Punkte" inputMode="numeric" required />
              <button type="submit" className={button}>
                Anlegen
              </button>
            </form>
            <div className="mt-6 space-y-3">
              {products?.docs.map((product) => (
                <form key={product.id} className="glass glass-specular flex flex-wrap items-center gap-2 p-3" onSubmit={updateDevice}>
                  <input type="hidden" name="id" value={product.id} />
                  <input className={`${input} flex-1`} name="name" defaultValue={String(product.data().name)} />
                  <input className={`${input} w-28`} name="point" defaultValue={String(product.data().points)} inputMode="numeric" />
                  <button type="submit" className={button}>
                    Speichern
                  </button>
                  {lastUpdate === product.id && <span className="w-full px-2 text-[13px] font-medium text-good">Gespeichert.</span>}
                </form>
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}
