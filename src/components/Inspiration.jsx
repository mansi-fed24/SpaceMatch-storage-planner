import { useState } from 'react'
import { Link } from 'react-router-dom'

// ── Import your real Sortix photos ───────────────────────────────
import pantryFullImg    from '../assets/pantry-full.jpg'
import pantryJarsImg    from '../assets/pantry-jars.png'
import fridgeOrgImg     from '../assets/fridge-organised.jpg'
import fridgeAfterImg   from '../assets/fridge-transform-afte-first-half.jpg'
import drawerSpicesImg  from '../assets/cabinetpic2.jpg'
import drawerOrgImg     from '../assets/drawer-organizer-img1.jpg'
import cabinetPantryImg from '../assets/cabinet-pantry-img1.jpg'
import cabinetLinenImg  from '../assets/cabinet-linen.jpg'
import inspirationhero from '../assets/inspirationhero1.png'

// ── All inspiration cards ────────────────────────────────────────
const CARDS = [
  {
    id: 1,
    img:   drawerSpicesImg,
    title: 'Neat & Functional Drawers',
    desc:  'Use dividers to keep spices and essentials neatly separated.',
    type:  'Drawer',
  },
  {
    id: 2,
    img:   fridgeAfterImg,
    title: 'Maximise Fridge Space',
    desc:  'Clear boxes help you see everything and reduce food waste.',
    type:  'Fridge',
  },
  {
    id: 3,
    img:   pantryJarsImg,
    title: 'Pantry Perfection',
    desc:  'Uniform jars and labels create a clean and calm pantry.',
    type:  'Pantry',
  },
  {
    id: 4,
    img:   cabinetPantryImg,
    title: 'Organised Cabinets',
    desc:  'Wooden boxes make everything easy to reach and look beautiful.',
    type:  'Cabinet',
  },
  {
    id: 5,
    img:   fridgeOrgImg,
    title: 'Stack, Store, Save Space',
    desc:  'Stackable bins help you utilise every cm of fridge space.',
    type:  'Fridge',
  },
  {
    id: 6,
    img:   drawerOrgImg,
    title: 'Adjustable for Your Needs',
    desc:  'Modular trays adapt to your drawer for a perfect fit.',
    type:  'Drawer',
  },
  {
    id: 7,
    img:   cabinetLinenImg,
    title: 'Baskets for a Clean Look',
    desc:  'Use baskets to group similar items and keep shelves tidy.',
    type:  'Cabinet',
  },
  {
    id: 8,
    img:   pantryFullImg,
    title: 'Full Pantry Organisation',
    desc:  'Layer products by category — jars on top, cans on the bottom.',
    type:  'Pantry',
  },
]

// ── Badge color per type ─────────────────────────────────────────
const BADGE = {
  Drawer:  'bg-[#F5E8E4] text-[#C9614A]',
  Fridge:  'bg-[#E1F0F5] text-[#2A7A9B]',
  Pantry:  'bg-[#E8F5E1] text-[#3A7A2A]',
  Cabinet: 'bg-[#F0E8F5] text-[#7A2A9B]',
}

const FILTERS = ['All', 'Drawer', 'Fridge', 'Pantry', 'Cabinet']

export default function Inspiration() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? CARDS
    : CARDS.filter(c => c.type === active)

  return (
    <section id="inspiration" className="bg-[#F7F3EE] py-0">
     {/* ── Hero banner ──────────────────────────────────────── */}
      <div className="bg-[#EDE8E0] overflow-hidden">
        <div className="px-6 py-8 mx-auto max-w-7xl md:px-6 md:py-2">

          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

            {/* LEFT */}
            <div className="max-w-xl">
              <h2
                className="text-5xl md:text-6xl font-light text-[#3D2F28] leading-none mb-5"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Get{" "}
                <span className="italic text-[#C9614A]">
                  inspired
                </span>
              </h2>

              <p className="text-[#6B4F45] text-lg leading-relaxed max-w-lg">
                Smart storage ideas for every space. Discover how small changes
                can create a more organised, beautiful home.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full max-w-[520px] flex justify-end">
              <img
                src={inspirationhero}
                alt="Organised storage"
                className="object-contain w-full "
              />
            </div>

          </div>

        </div>
      </div>
      {/* ── Cards section ────────────────────────────────────── */}
      <div className="px-6 py-12 mx-auto max-w-7xl md:px-10">

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${active === f
                  ? 'bg-[#3D2F28] text-white'
                  : 'bg-white text-[#6B4F45] border border-[#3D2F28]/10 hover:border-[#3D2F28]/30'
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards grid — 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map(card => (
            <div
              key={card.id}
              className="overflow-hidden transition-shadow duration-200 bg-white shadow-md rounded-xl hover:shadow-md group"
            >
              {/* Photo */}
              <div className="overflow-hidden h-30">
                <img
                  src={card.img}
                  alt={card.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text content */}
              <div className="p-4">
                <h3 className="text-sm font-medium text-[#3D2F28] mb-1 leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs font-light text-[#6B4F45] leading-relaxed mb-3">
                  {card.desc}
                </p>

                {/* Category badge */}
                <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full ${BADGE[card.type]}`}>
                  {card.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom CTA strip ─────────────────────────────────── */}
      <div className="bg-[#EDE8E0] mx-6 md:mx-10 mb-12 rounded-2xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          
          <div>
            <p className="text-sm font-medium text-[#3D2F28]">Plan your perfect space</p>
            <p className="text-xs font-light text-[#6B4F45]">
              Found inspiration you love? Use our planner to see what fits your space.
            </p>
          </div>
        </div>
        <Link to="/planner"
          className="flex-shrink-0 bg-[#C9614A] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#3D2F28] transition-colors whitespace-nowrap"
        >
          Start planning →
        </Link>
      </div>


    </section>
  )
}
