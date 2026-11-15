import {
  ArrowRight,
  BarChart3,
  ChefHat,
  Clock3,
  CreditCard,
  QrCode,
  Smartphone,
  Utensils,
  Zap
} from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "Scan to explore",
    description: "Every table gets its own QR menu. Guests can start browsing in seconds."
  },
  {
    icon: Smartphone,
    title: "Order from your phone",
    description: "A clean, mobile-first menu with item details, add-ons, and a simple cart."
  },
  {
    icon: ChefHat,
    title: "Keep the kitchen in sync",
    description: "Orders move from the table to the kitchen with clear preparation states."
  },
  {
    icon: BarChart3,
    title: "Understand your business",
    description: "See order volume, sales trends, and your most popular dishes."
  },
  {
    icon: CreditCard,
    title: "Flexible payments",
    description: "A planned payment flow designed for secure checkout and split bills."
  },
  {
    icon: Clock3,
    title: "Less waiting, more dining",
    description: "Guests follow order progress without repeatedly asking for updates."
  }
];

const steps = [
  ["01", "Scan the table QR", "Guests scan the code placed on their table."],
  ["02", "Explore and order", "They browse the menu, customize dishes, and submit an order."],
  ["03", "The team gets to work", "Staff and kitchen teams manage the order through its journey."]
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#" className="flex items-center gap-2.5" aria-label="DineTap home">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-200">
            <Utensils size={21} />
          </span>
          <span className="text-2xl font-black tracking-tight">Dine<span className="text-orange-500">Tap</span></span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-stone-600 md:flex">
          <a className="transition hover:text-orange-600" href="#features">Features</a>
          <a className="transition hover:text-orange-600" href="#how-it-works">How it works</a>
          <a className="transition hover:text-orange-600" href="#about">About</a>
        </nav>
        <a href="#how-it-works" className="rounded-full bg-stone-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600">
          Explore DineTap <ArrowRight className="ml-2 inline" size={16} />
        </a>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-12 lg:grid-cols-[1.02fr_.98fr] lg:px-10 lg:pb-28 lg:pt-20">
        <div className="absolute -left-44 top-10 -z-10 h-96 w-96 rounded-full bg-orange-100/70 blur-3xl" />
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-orange-700">
            <Zap size={14} /> A better way to dine in
          </div>
          <h1 className="max-w-2xl text-5xl font-black leading-[1.06] tracking-[-.055em] text-stone-950 sm:text-6xl lg:text-7xl">
            Good food.
            <span className="block text-orange-500">One quick scan.</span>
            Zero hassle.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">
            Meet DineTap — a smarter restaurant experience where guests scan, explore, and order, while restaurant teams stay in control.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#how-it-works" className="rounded-full bg-orange-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600">
              See how it works <ArrowRight className="ml-2 inline" size={17} />
            </a>
            <a href="#features" className="rounded-full border border-stone-200 bg-white px-7 py-4 text-sm font-extrabold text-stone-800 transition hover:border-orange-300 hover:text-orange-700">
              Explore features
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-stone-500">
            <span className="flex items-center gap-2"><QrCode size={17} className="text-orange-500" /> QR-powered</span>
            <span className="flex items-center gap-2"><Smartphone size={17} className="text-orange-500" /> Mobile-first</span>
            <span className="flex items-center gap-2"><ChefHat size={17} className="text-orange-500" /> Kitchen-ready</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-8 rounded-[3rem] bg-gradient-to-br from-orange-200 to-amber-100 blur-2xl" />
          <div className="relative rounded-[2.5rem] border border-white bg-white p-4 shadow-2xl shadow-orange-900/10 sm:p-6">
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-orange-500 text-white"><Utensils size={18}/></span>
                <div><p className="font-black">The Spice House</p><p className="text-xs text-stone-400">Table 08 · Digital menu</p></div>
              </div>
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">Open now</span>
            </div>
            <div className="mt-5 flex gap-2 overflow-hidden">
              {["Popular", "Starters", "Mains", "Desserts"].map((item, i) => <span key={item} className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold ${i === 0 ? "bg-orange-500 text-white" : "bg-stone-100 text-stone-500"}`}>{item}</span>)}
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-orange-50 p-4">
                <div className="mb-4 grid h-24 place-items-center rounded-xl bg-gradient-to-br from-orange-200 to-amber-100 text-5xl">🍛</div>
                <p className="font-extrabold">Paneer Tikka</p><p className="mt-1 text-xs text-stone-500">Smoky · Chef's special</p>
                <div className="mt-3 flex items-center justify-between"><b>₹249</b><span className="grid h-8 w-8 place-items-center rounded-full bg-orange-500 text-xl text-white">+</span></div>
              </div>
              <div className="rounded-2xl bg-stone-50 p-4">
                <div className="mb-4 grid h-24 place-items-center rounded-xl bg-gradient-to-br from-lime-100 to-amber-100 text-5xl">🥗</div>
                <p className="font-extrabold">Garden Salad</p><p className="mt-1 text-xs text-stone-500">Fresh · Light</p>
                <div className="mt-3 flex items-center justify-between"><b>₹179</b><span className="grid h-8 w-8 place-items-center rounded-full bg-orange-500 text-xl text-white">+</span></div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-2xl bg-stone-950 px-5 py-4 text-white">
              <div><p className="text-xs text-stone-400">Your order</p><p className="font-bold">2 items · ₹428</p></div>
              <span className="rounded-full bg-orange-500 px-4 py-2 text-xs font-extrabold">View cart <ArrowRight className="ml-1 inline" size={14}/></span>
            </div>
          </div>
          <div className="absolute -right-4 -top-5 hidden rounded-2xl border border-orange-100 bg-white px-4 py-3 shadow-xl sm:block">
            <p className="text-xs font-bold text-stone-400">ORDER STATUS</p><p className="mt-1 text-sm font-black text-green-600">● Preparing</p>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-stone-100 bg-white px-4 py-3 shadow-xl sm:block">
            <p className="text-xs font-bold text-stone-400">MADE FOR</p><p className="mt-1 text-sm font-black">Guests & restaurant teams</p>
          </div>
        </div>
      </section>

      <section id="features" className="bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-black uppercase tracking-[.2em] text-orange-500">One connected experience</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Everything at the table, <span className="text-orange-500">working together.</span></h2>
            <p className="mt-4 leading-7 text-stone-500">From the first scan to the final order update, DineTap brings the dining journey into one simple flow.</p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({icon: Icon, title, description}) => (
              <article key={title} className="group rounded-3xl border border-stone-100 bg-[#fffdfa] p-7 transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-900/5">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-100 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white"><Icon size={22}/></span>
                <h3 className="mt-6 text-lg font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-500">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl"><p className="text-xs font-black uppercase tracking-[.2em] text-orange-500">Simple by design</p><h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Three steps. A smoother service.</h2></div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map(([number, title, description]) => <div key={number} className="rounded-3xl border border-stone-200 bg-white p-7"><p className="text-4xl font-black tracking-tighter text-orange-200">{number}</p><h3 className="mt-7 text-xl font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-stone-500">{description}</p></div>)}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 pb-20 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[2rem] bg-stone-950 p-8 text-white sm:p-12 md:flex-row md:items-center">
          <div className="max-w-2xl"><p className="text-xs font-black uppercase tracking-[.2em] text-orange-400">Meet DineTap</p><h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">A little less waiting. A lot more enjoying.</h2><p className="mt-4 leading-7 text-stone-400">We are building a connected ordering experience for modern dine-in restaurants.</p></div>
          <a href="#features" className="shrink-0 rounded-full bg-orange-500 px-7 py-4 text-sm font-extrabold text-white transition hover:bg-orange-400">Discover the experience <ArrowRight className="ml-2 inline" size={16}/></a>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-white px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-stone-500 sm:flex-row">
          <p className="font-bold text-stone-800">Dine<span className="text-orange-500">Tap</span> <span className="font-normal text-stone-400">— Scan. Order. Dine.</span></p>
          <p>Built with care · Project in active development</p>
        </div>
      </footer>
    </main>
  );
}