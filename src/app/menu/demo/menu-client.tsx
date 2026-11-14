"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, Check, ChefHat, Clock3, Minus, Plus, ShoppingBag, X } from "lucide-react";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  emoji: string;
  popular?: boolean;
};

const menu: MenuItem[] = [
  { id: 1, name: "Paneer Tikka", description: "Smoky tandoori paneer with mint chutney", price: 249, category: "Starters", emoji: "🍢", popular: true },
  { id: 2, name: "Crispy Corn", description: "Golden corn tossed with herbs and spices", price: 179, category: "Starters", emoji: "🌽" },
  { id: 3, name: "Paneer Butter Masala", description: "Paneer in a rich tomato and butter gravy", price: 289, category: "Mains", emoji: "🍛", popular: true },
  { id: 4, name: "Veg Biryani", description: "Fragrant basmati rice, vegetables and raita", price: 229, category: "Mains", emoji: "🍚" },
  { id: 5, name: "Dal Tadka", description: "Yellow lentils finished with a cumin tempering", price: 189, category: "Mains", emoji: "🥘" },
  { id: 6, name: "Gulab Jamun", description: "Warm milk dumplings with cardamom syrup", price: 99, category: "Desserts", emoji: "🍮" },
  { id: 7, name: "Masala Chaas", description: "Chilled buttermilk with roasted cumin", price: 59, category: "Drinks", emoji: "🥛" }
];

const categories = ["All", "Starters", "Mains", "Desserts", "Drinks"];

export default function MenuClient() {
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState<Record<number, number>>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const visibleItems = category === "All" ? menu : menu.filter((item) => item.category === category);
  const cartItems = useMemo(() => menu.filter((item) => cart[item.id]).map((item) => ({ ...item, quantity: cart[item.id] })), [cart]);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function changeQuantity(id: number, amount: number) {
    setCart((current) => {
      const next = { ...current, [id]: Math.max(0, (current[id] || 0) + amount) };
      if (next[id] === 0) delete next[id];
      return next;
    });
    setOrderPlaced(false);
  }

  return (
    <main className="min-h-screen bg-[#fffaf6] pb-28">
      <header className="sticky top-0 z-20 border-b border-orange-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <a href="/" className="flex items-center gap-2 text-sm font-bold text-stone-500"><ArrowLeft size={17}/> DineTap</a>
          <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700">● Restaurant open</span>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-5">
        <section className="py-8">
          <div className="flex items-center gap-4">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-orange-100 text-3xl">🍽️</div>
            <div><p className="text-xs font-bold uppercase tracking-widest text-orange-600">Welcome to</p><h1 className="text-2xl font-black tracking-tight">The Spice House</h1><p className="mt-1 text-sm text-stone-500">Table 08 · Demo menu</p></div>
          </div>
          <div className="mt-6 rounded-2xl bg-stone-900 p-4 text-white">
            <div className="flex items-center gap-2 text-orange-300"><ChefHat size={17}/><span className="text-xs font-bold uppercase tracking-wider">Made fresh for you</span></div>
            <p className="mt-2 text-sm text-stone-300">Explore our kitchen favourites and order right from your table.</p>
          </div>
        </section>
        <div className="sticky top-[73px] z-10 -mx-5 overflow-x-auto bg-[#fffaf6]/95 px-5 py-3 backdrop-blur">
          <div className="flex w-max gap-2">
            {categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${category === item ? "bg-orange-500 text-white shadow-md shadow-orange-200" : "border border-stone-200 bg-white text-stone-600 hover:border-orange-300"}`}>{item}</button>)}
          </div>
        </div>
        <section className="mt-5">
          <div className="mb-4 flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-orange-600">Our menu</p><h2 className="mt-1 text-2xl font-black">{category === "All" ? "Popular choices" : category}</h2></div><span className="text-xs text-stone-400">{visibleItems.length} items</span></div>
          <div className="space-y-3">
            {visibleItems.map((item) => <article key={item.id} className="flex gap-4 rounded-2xl border border-stone-100 bg-white p-3 shadow-sm">
              <div aria-hidden="true" className="grid h-24 w-24 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-orange-100 to-amber-50 text-4xl">{item.emoji}</div>
              <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                <div><div className="flex flex-wrap items-center gap-2"><h3 className="font-extrabold">{item.name}</h3>{item.popular && <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-bold text-orange-600">POPULAR</span>}</div><p className="mt-1 text-xs leading-5 text-stone-500">{item.description}</p></div>
                <div className="mt-2 flex items-center justify-between"><span className="font-black">₹{item.price}</span>{cart[item.id] ? <div className="flex items-center gap-3 rounded-full bg-orange-50 px-2 py-1"><button aria-label={`Remove one ${item.name}`} onClick={() => changeQuantity(item.id, -1)} className="grid h-7 w-7 place-items-center rounded-full bg-white text-orange-600"><Minus size={14}/></button><b className="min-w-3 text-sm">{cart[item.id]}</b><button aria-label={`Add one ${item.name}`} onClick={() => changeQuantity(item.id, 1)} className="grid h-7 w-7 place-items-center rounded-full bg-orange-500 text-white"><Plus size={14}/></button></div> : <button type="button" aria-label={`Add ${item.name} to cart`} onClick={() => changeQuantity(item.id, 1)} className="rounded-full bg-orange-500 px-4 py-2 text-xs font-extrabold text-white transition hover:bg-orange-600">Add +</button>}</div>
              </div>
            </article>)}
          </div>
        </section>
        <p className="mt-8 flex items-center justify-center gap-2 text-xs text-stone-400"><Clock3 size={14}/> Average preparation time: 20–25 minutes</p>
      </div>

      {itemCount > 0 && <div className="fixed inset-x-0 bottom-0 z-30 border-t border-orange-100 bg-white/95 p-4 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <div><p className="text-xs text-stone-500">{itemCount} item{itemCount > 1 ? "s" : ""} in your cart</p><p className="text-lg font-black">₹{total}</p></div>
          <button onClick={() => setCartOpen(true)} className="rounded-full bg-stone-950 px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-orange-600"><ShoppingBag className="mr-2 inline" size={16}/> View cart <span className="ml-2 rounded-full bg-orange-500 px-2 py-1 text-xs">{itemCount}</span></button>
        </div>
      </div>}

      {cartOpen && <div className="fixed inset-0 z-40 flex items-end justify-center bg-stone-950/50 sm:items-center sm:p-5" onClick={() => setCartOpen(false)}>
        <section role="dialog" aria-modal="true" aria-label="Your cart" className="w-full max-w-lg rounded-t-3xl bg-white p-6 sm:rounded-3xl" onClick={(event) => event.stopPropagation()}>
          <div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-orange-600">Table 08</p><h2 className="mt-1 text-2xl font-black">Your cart</h2></div><button onClick={() => setCartOpen(false)} aria-label="Close cart" className="rounded-full bg-stone-100 p-2"><X size={18}/></button></div>
          <div className="mt-5 max-h-64 space-y-3 overflow-auto">{cartItems.map((item) => <div key={item.id} className="flex items-center justify-between gap-3"><div><p className="font-bold">{item.name}</p><p className="text-xs text-stone-500">₹{item.price} × {item.quantity}</p></div><div className="flex items-center gap-2"><button type="button" aria-label={`Remove one ${item.name}`} onClick={() => changeQuantity(item.id, -1)} className="rounded-full bg-stone-100 p-2"><Minus size={13}/></button><b>{item.quantity}</b><button type="button" aria-label={`Add one ${item.name}`} onClick={() => changeQuantity(item.id, 1)} className="rounded-full bg-orange-100 p-2 text-orange-700"><Plus size={13}/></button></div></div>)}</div>
          <div className="mt-5 border-t border-stone-100 pt-4"><div className="flex justify-between text-sm text-stone-500"><span>Subtotal</span><span>₹{total}</span></div><div className="mt-2 flex justify-between text-lg font-black"><span>Total</span><span>₹{total}</span></div></div>
          {orderPlaced ? <div className="mt-5 rounded-2xl bg-green-50 p-4 text-sm font-bold text-green-700"><Check className="mr-2 inline" size={17}/> Demo order placed! Backend checkout will be connected in a later phase.</div> : <button onClick={() => { setOrderPlaced(true); setCart({}); }} className="mt-5 w-full rounded-full bg-orange-500 py-4 font-extrabold text-white hover:bg-orange-600">Place demo order · ₹{total}</button>}
          <p className="mt-3 text-center text-[11px] text-stone-400">Demo only — no payment is collected.</p>
        </section>
      </div>}
    </main>
  );
}
