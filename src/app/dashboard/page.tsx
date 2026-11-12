import { Activity, ArrowDownRight, ArrowUpRight, Bell, ChefHat, Clock3, IndianRupee, MoreHorizontal, ShoppingBag, Utensils, Users } from "lucide-react";

const orders = [
  { id: "#1048", table: "Table 04", items: "2 items · Paneer Tikka, Chaas", amount: "₹308", status: "New", tone: "bg-blue-50 text-blue-700" },
  { id: "#1047", table: "Table 08", items: "3 items · Veg Biryani, Dal Tadka", amount: "₹418", status: "Preparing", tone: "bg-orange-50 text-orange-700" },
  { id: "#1046", table: "Table 02", items: "1 item · Paneer Butter Masala", amount: "₹289", status: "Ready", tone: "bg-green-50 text-green-700" },
  { id: "#1045", table: "Table 11", items: "2 items · Garden Salad, Chaas", amount: "₹238", status: "Served", tone: "bg-stone-100 text-stone-600" }
];

const stats = [
  { label: "Today's revenue", value: "₹14,280", change: "+12.8%", icon: IndianRupee },
  { label: "Orders today", value: "42", change: "+8.2%", icon: ShoppingBag },
  { label: "Active tables", value: "18 / 24", change: "6 available", icon: Users },
  { label: "Avg. preparation", value: "18 min", change: "-2 min", icon: Clock3 }
];

export const metadata = { title: "Dashboard Preview | DineTap" };

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f5] text-stone-900">
      <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col bg-stone-950 px-5 py-7 text-white lg:flex">
        <a href="/" className="flex items-center gap-3 text-2xl font-black"> <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-500"><Utensils size={20}/></span> Dine<span className="-ml-3 text-orange-400">Tap</span></a>
        <p className="mt-10 px-3 text-[10px] font-bold uppercase tracking-[.2em] text-stone-500">Workspace</p>
        <div className="mt-3 space-y-1">{["Overview", "Orders", "Menu", "Tables", "Kitchen", "Analytics", "Settings"].map((label, i) => <div key={label} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold ${i === 0 ? "bg-orange-500 text-white" : "text-stone-400"}`}><span>{["▦", "▤", "☷", "▦", "♨", "⌁", "⚙"][i]}</span>{label}</div>)}</div>
        <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4"><p className="text-xs font-bold text-orange-300">DEMO WORKSPACE</p><p className="mt-2 text-sm font-bold">The Spice House</p><p className="mt-1 text-xs text-stone-500">Pune, Maharashtra</p></div>
      </aside>
      <div className="lg:pl-64">
        <header className="flex items-center justify-between border-b border-stone-200 bg-white px-5 py-5 sm:px-8"><div><p className="text-xs font-semibold text-stone-400">RESTAURANT WORKSPACE / OVERVIEW</p><h1 className="mt-1 text-2xl font-black">Good afternoon 👋</h1></div><div className="flex items-center gap-3"><button aria-label="Notifications" className="rounded-full border border-stone-200 p-2.5"><Bell size={18}/></button><div className="grid h-10 w-10 place-items-center rounded-full bg-orange-100 font-black text-orange-700">SH</div></div></header>
        <div className="mx-auto max-w-7xl space-y-7 p-5 sm:p-8">
          <section className="flex flex-wrap items-center justify-between gap-4"><div><h2 className="text-xl font-black">Today's overview</h2><p className="mt-1 text-sm text-stone-500">Here's what's happening at your restaurant.</p></div><span className="rounded-full bg-green-50 px-4 py-2 text-xs font-bold text-green-700"><Activity className="mr-1 inline" size={14}/> Demo data · Live integrations planned</span></section>
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{stats.map(({label,value,change,icon:Icon}, i) => <article key={label} className="rounded-2xl border border-stone-200 bg-white p-5"><div className="flex items-center justify-between"><span className="text-sm font-semibold text-stone-500">{label}</span><span className="rounded-xl bg-orange-50 p-2.5 text-orange-600"><Icon size={19}/></span></div><p className="mt-4 text-3xl font-black tracking-tight">{value}</p><p className="mt-2 text-xs font-bold text-green-600">{i === 3 ? <ArrowDownRight className="mr-1 inline" size={14}/> : <ArrowUpRight className="mr-1 inline" size={14}/ >}{change} <span className="font-normal text-stone-400">vs yesterday</span></p></article>)}</section>
          <section className="grid gap-5 xl:grid-cols-[1.5fr_1fr]">
            <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6"><div className="flex items-center justify-between"><div><h3 className="text-lg font-black">Recent orders</h3><p className="mt-1 text-xs text-stone-400">A snapshot of today's activity</p></div><button className="rounded-full border border-stone-200 px-4 py-2 text-xs font-bold">View all</button></div><div className="mt-5 divide-y divide-stone-100">{orders.map((order) => <div key={order.id} className="flex flex-wrap items-center justify-between gap-3 py-4"><div><div className="flex items-center gap-2"><b className="text-sm">{order.id}</b><span className="text-xs text-stone-400">{order.table}</span></div><p className="mt-1 text-xs text-stone-500">{order.items}</p></div><div className="flex items-center gap-3"><b className="text-sm">{order.amount}</b><span className={`rounded-full px-3 py-1.5 text-[11px] font-bold ${order.tone}`}>{order.status}</span></div></div>)}</div></div>
            <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6"><div className="flex items-center justify-between"><div><h3 className="text-lg font-black">Quick actions</h3><p className="mt-1 text-xs text-stone-400">Common restaurant tasks</p></div><MoreHorizontal className="text-stone-400"/></div><div className="mt-5 space-y-3">{[{icon:ShoppingBag,title:"Review new orders",sub:"1 order waiting for confirmation"},{icon:Utensils,title:"Update menu availability",sub:"Mark dishes sold out or available"},{icon:ChefHat,title:"Open kitchen display",sub:"View preparation queue"}].map(({icon:Icon,title,sub}) => <div key={title} className="flex items-center gap-3 rounded-xl bg-stone-50 p-4"><span className="rounded-xl bg-white p-2.5 text-orange-600"><Icon size={18}/></span><div><p className="text-sm font-bold">{title}</p><p className="mt-1 text-xs text-stone-500">{sub}</p></div></div>)}</div><div className="mt-5 rounded-xl bg-orange-50 p-4"><p className="text-sm font-extrabold text-orange-800">Your restaurant, in sync.</p><p className="mt-1 text-xs leading-5 text-orange-700">Connect your menu, tables and kitchen workflow as you build out DineTap.</p></div></div>
          </section>
          <p className="text-center text-xs text-stone-400">DineTap dashboard preview · Sample figures, not real restaurant data</p>
        </div>
      </div>
    </main>
  );
}
