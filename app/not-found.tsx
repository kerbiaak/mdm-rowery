import { SpeedLines } from "@/components/shared/speed-lines";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-svh items-center bg-ink pt-20 text-white">
      <div className="container-x py-24 text-center">
        <p className="inline-flex items-center justify-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-zinc-400">
          <SpeedLines className="text-white" />
          Błąd 404
        </p>
        <h1 className="mt-6 font-display text-5xl font-bold tracking-tight sm:text-7xl">
          Zjechałeś <span className="italic text-brand">z trasy</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-zinc-400">
          Ta strona nie istnieje albo zmieniła adres. Wracaj na główną, tam wszystko
          stoi na swoim miejscu.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="light">
            Strona główna
          </Button>
          <Button href="/kontakt" variant="outlineLight">
            Kontakt
          </Button>
        </div>
      </div>
    </section>
  );
}
