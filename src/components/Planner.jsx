import { useState } from 'react'
import { calculateFit } from '../utils/fitCalculator'
import { storageItems } from '../data/storageItems'

import drawerOrganizerImg from '../assets/products/drawer-organizer1.jpg'
import spiceInsertImg from '../assets/products/spice-insert.jpg'
import acrylicInsertImg from '../assets/products/bamboo-insert.jpg'

import fridgeBoxSmallImg from '../assets/products/fridge-box-small.jpg'
import fridgeStackable2BoxImg from '../assets/products/fridge-stackable-2box.jpg'
import colanderBoxImg from '../assets/products/colander-box.jpg'

import lunaJarImg from '../assets/products/luna-jar.jpg'
import albaJarImg from '../assets/products/alba-jar.jpg'
import woodBoxImg from '../assets/products/wood-box.jpg'

import stackLidBoxImg from '../assets/products/stack-lid-box.jpg'
import juteBasketImg from '../assets/products/jute-basket.jpg'
import lazySusanImg from '../assets/products/lazy-susan.jpg'


const PRODUCT_IMAGES = {
  1: drawerOrganizerImg,
  2: spiceInsertImg,
  3: acrylicInsertImg,

  4: fridgeBoxSmallImg,
  5: fridgeStackable2BoxImg,
  6: colanderBoxImg,

  7: lunaJarImg,
  8: albaJarImg,
  9: woodBoxImg,

  10: stackLidBoxImg,
  11: juteBasketImg,
  12: lazySusanImg,
}

const SPACE_TYPES = [
  { id: 'drawer', label: 'Drawer', icon: '🗂' },
  { id: 'fridge', label: 'Fridge', icon: '❄️' },
  { id: 'pantry', label: 'Pantry', icon: '🏠' },
  { id: 'cabinet', label: 'Cabinet', icon: '📦' },
]

const POPULAR_SPACES = [
  { id: 'drawer', label: 'Drawer', desc: 'Organise your drawers', img: '/src/assets/drawer-spices.jpg' },
  { id: 'fridge', label: 'Fridge', desc: 'Maximise your fridge space', img: '/src/assets/fridge-organised.jpg' },
  { id: 'pantry', label: 'Pantry', desc: 'Organise your pantry', img: '/src/assets/pantry-full.jpg' },
  { id: 'cabinet', label: 'Cabinet', desc: 'Smart cabinet organisation', img: '/src/assets/cabinet-pantry-img1.jpg' },
]

export default function Planner() {
  const [spaceType, setSpaceType] = useState('')
  const [width,     setWidth]     = useState('')
  const [height,    setHeight]    = useState('')
  const [depth,     setDepth]     = useState('')
  const [results,   setResults]   = useState(null)
  const [errors,    setErrors]    = useState({})

  // ── Validate inputs ──────────────────────────────────────────
  function validate() {
    const e = {}
    if (!spaceType)      e.spaceType = 'Please select a space type'
    if (!width  || width  <= 0) e.width  = 'Enter width'
    if (!height || height <= 0) e.height = 'Enter height'
    if (!depth  || depth  <= 0) e.depth  = 'Enter depth'
    return e
  }

  // ── Calculate ────────────────────────────────────────────────
  function handleCalculate() {
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    setErrors({})

    const items = storageItems[spaceType]

    // For each product: calculate how many fit in the given space
    const withFit = items.map(item => ({
      ...item,
      fit: calculateFit(
        Number(width), 
        Number(depth), 
        Number(height), 
        item.w, item.d, item.h),
    }))

    

    // Sort: most items that fit → shown first
    withFit.sort((a, b) => b.fit.fillPct - a.fit.fillPct)

    setResults(withFit)

    // Scroll to results
    setTimeout(() => {
      document.getElementById('results')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  // ── Quick select from Popular Spaces ─────────────────────────
  function handleQuickSelect(id) {
    setSpaceType(id)
    setResults(null)
    document.getElementById('planner-form')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function handleReset() {
    setSpaceType(''); setWidth(''); setHeight(''); setDepth('')
    setResults(null); setErrors({})
  }

  return (
    <section id="planner" className="bg-[#F7F3EE] pt-20 px-6 md:px-10 ">
      <div className="max-w-6xl mx-auto ">

        {/* Header */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-medium tracking-widest uppercase text-[#C9614A] bg-[#F5E8E4] px-3 py-1 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9614A]" />
            Planner
          </span>
          <h2
            className="text-4xl md:text-5xl font-light tracking-tight text-[#3D2F28] mb-3"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Plan your <em className="italic text-[#C9614A]">perfect</em> space.
          </h2>
          <p className="text-[#6B4F45] font-light text-lg max-w-lg">
            Enter your dimensions — see exactly which Sortix products fit and how many.
          </p>
        </div>

        {/* ── FORM — one horizontal row ──────────────────────── */}
        <div id="planner-form" className="bg-white rounded-2xl p-6 shadow-sm border border-[#3D2F28]/06 mb-10">
          <div className="grid items-end grid-cols-2 gap-4 md:grid-cols-5">

            {/* Space type dropdown */}
            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-medium tracking-widest uppercase text-[#6B4F45] mb-2">
                Space type
              </label>
              <select
                value={spaceType}
                onChange={e => { setSpaceType(e.target.value); setResults(null) }}
                className={`w-full bg-[#F7F3EE] border rounded-xl px-4 py-3 text-sm text-[#3D2F28] outline-none focus:border-[#C9614A] transition-colors cursor-pointer ${errors.spaceType ? 'border-red-400' : 'border-[#3D2F28]/12'}`}
              >
                <option value="">Select type</option>
                {SPACE_TYPES.map(t => (
                  <option key={t.id} value={t.id}>{t.icon} {t.label}</option>
                ))}
              </select>
              {errors.spaceType && <p className="mt-1 text-xs text-red-400">{errors.spaceType}</p>}
            </div>

            {/* Width */}
            <div>
              <label className="block text-xs font-medium tracking-widest uppercase text-[#6B4F45] mb-2">Width (cm)</label>
              <div className="relative">
                <input type="number" min="1" value={width} onChange={e => setWidth(e.target.value)} placeholder="e.g. 60"
                  className={`w-full bg-[#F7F3EE] border rounded-xl px-4 py-3 text-sm text-[#3D2F28] placeholder-[#B8A89A] outline-none focus:border-[#C9614A] transition-colors ${errors.width ? 'border-red-400' : 'border-[#3D2F28]/12'}`}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#B8A89A]">cm</span>
              </div>
              {errors.width && <p className="mt-1 text-xs text-red-400">{errors.width}</p>}
            </div>

            {/* Height */}
            <div>
              <label className="block text-xs font-medium tracking-widest uppercase text-[#6B4F45] mb-2">Height (cm)</label>
              <div className="relative">
                <input type="number" min="1" value={height} onChange={e => setHeight(e.target.value)} placeholder="e.g. 30"
                  className={`w-full bg-[#F7F3EE] border rounded-xl px-4 py-3 text-sm text-[#3D2F28] placeholder-[#B8A89A] outline-none focus:border-[#C9614A] transition-colors ${errors.height ? 'border-red-400' : 'border-[#3D2F28]/12'}`}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#B8A89A]">cm</span>
              </div>
              {errors.height && <p className="mt-1 text-xs text-red-400">{errors.height}</p>}
            </div>

            {/* Depth */}
            <div>
              <label className="block text-xs font-medium tracking-widest uppercase text-[#6B4F45] mb-2">Depth (cm)</label>
              <div className="relative">
                <input type="number" min="1" value={depth} onChange={e => setDepth(e.target.value)} placeholder="e.g. 40"
                  className={`w-full bg-[#F7F3EE] border rounded-xl px-4 py-3 text-sm text-[#3D2F28] placeholder-[#B8A89A] outline-none focus:border-[#C9614A] transition-colors ${errors.depth ? 'border-red-400' : 'border-[#3D2F28]/12'}`}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#B8A89A]">cm</span>
              </div>
              {errors.depth && <p className="mt-1 text-xs text-red-400">{errors.depth}</p>}
            </div>

            {/* Button */}
            <button
              onClick={handleCalculate}
              className="col-span-2 md:col-span-1 bg-[#C9614A] text-white py-3 px-6 rounded-full text-sm font-medium hover:bg-[#3D2F28] transition-colors whitespace-nowrap"
            >
              Calculate →
            </button>
          </div>
        </div>

        {/* ── POPULAR SPACES — shown before calculate ─────────── */}
        {!results && (
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-[#B8A89A] text-center mb-6">
              Popular spaces
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {POPULAR_SPACES.map(space => (
                <div
                  key={space.id}
                  onClick={() => handleQuickSelect(space.id)}
                  className="bg-white rounded-2xl overflow-hidden border border-[#3D2F28]/06 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                >
                  <div className="h-40 overflow-hidden bg-[#F7F3EE]">
                    <img
                      src={space.img}
                      alt={space.label}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium text-[#3D2F28] mb-1">{space.label}</p>
                    <p className="text-xs font-light text-[#B8A89A] mb-3">{space.desc}</p>
                    <span className="text-xs font-medium text-[#C9614A]">Plan now →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── RESULTS ─────────────────────────────────────────── */}
        {/*
          This is the main result — simple cards.
          Each card = one product photo + "X items fit"
          Sorted from most → least items that fit.
        */}
        {results && (
          <div id="results">

            {/* Title */}
            <p className="text-sm font-light text-[#6B4F45] mb-6">
              Here's what fits in your{' '}
              <span className="font-medium text-[#3D2F28]">{width} × {depth} cm</span>{' '}
              {spaceType}:
            </p>

            {/* Product cards grid */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {results.map((product, index) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-2xl overflow-hidden border shadow-sm transition-shadow hover:shadow-md
                    ${index === 0 ? 'border-[#C9614A]/40 ring-2 ring-[#C9614A]/15' : 'border-[#3D2F28]/06'}`}
                >
                  {/* Product photo — top half */}
                  <div className="relative h-48 bg-[#F7F3EE] overflow-hidden">
                    <img
                      src={PRODUCT_IMAGES[product.id]}
                      alt={product.name}
                      className="object-cover w-full h-full"
                    />
                    {/* "Best fit" label on top card */}
                    {index === 0 && (
                      <span className="absolute top-3 left-3 bg-[#C9614A] text-white text-[10px] font-medium px-2.5 py-1 rounded-full">
                        Best fit ✓
                      </span>
                    )}
                  </div>

                  {/* Card content — bottom half */}
                  <div className="p-5">
                    {/* Product name */}
                    <p className="text-sm font-medium text-[#3D2F28] mb-1">{product.name}</p>
                    {/* Product size */}
                    <p className="text-xs text-[#B8A89A] font-light mb-4">
                      {product.w} × {product.d} × {product.h} cm
                    </p>

                    {/* THE KEY INFO — big and clear */}
                    {product.fit.total > 0 ? (
                      <div className="bg-[#F7F3EE] rounded-xl px-4 py-3 mb-4">
                        <p className="text-3xl font-light text-[#C9614A] tracking-tight" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
                          {product.fit.total}
                        </p>
                        <p className="text-xs text-[#6B4F45] font-light mt-0.5">
                          {product.fit.total === 1 ? 'item fits' : 'items fit'} in your space
                          <span className="text-[#B8A89A] ml-1">
                            ({product.fit.cols} × {product.fit.rows} layout)
                          </span>
                        </p>
                      </div>
                    ) : (
                      <div className="px-4 py-3 mb-4 bg-red-50 rounded-xl">
                        <p className="text-sm font-light text-red-400">
                          Doesn't fit — needs at least {product.w}×{product.d} cm
                        </p>
                      </div>
                    )}

                    {/* View on Sortix link */}
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-sm font-medium text-white bg-[#3D2F28] py-2.5 rounded-full hover:bg-[#C9614A] transition-colors"
                    >
                      View on Sortix →
                    </a>
                  </div>
                </div>
              ))}
            </div>


            {/* AI recommendation */}

            <div className="mt-8 bg-white rounded-2xl p-6 border border-[#3D2F28]/06 shadow-sm">

              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">✨</span>

                <p className="text-sm font-medium text-[#3D2F28]">
                  Smart AI Recommendation
                </p>
              </div>

              <p className="text-xs text-[#B8A89A] font-light mb-4">
                AI-inspired storage suggestion based on your dimensions and best-fit products.
              </p>

              {results[0]?.fit.total > 0 ? (
                <div className="bg-[#F7F3EE] rounded-xl p-4">

                  <p className="text-sm text-[#3D2F28] font-light leading-relaxed">

                    To maximise your{' '}
                    <span className="font-medium">
                      {spaceType}
                    </span>
                    {' '}space, we recommend using{' '}

                    <span className="font-medium">
                      {results[0].fit.total} × {results[0].name}
                    </span>.

                    {' '}This setup uses approximately{' '}

                    <span className="font-medium">
                      {results[0].fit.fillPct}%
                    </span>

                    {' '}of the available space and creates a cleaner, more organised layout.

                  </p>

                </div>
              ) : (
                <div className="p-4 bg-red-50 rounded-xl">
                  <p className="text-sm font-light text-red-400">
                    No recommended layout found for these dimensions.
                  </p>
                </div>
              )}
            </div>
            
            {/* End AI recommendation */}


            

            {/* Reset */}
            <div className="mt-8 text-center">
              <button
                onClick={handleReset}
                className="text-sm font-light text-[#B8A89A] hover:text-[#6B4F45] transition-colors underline underline-offset-4"
              >
                Try different dimensions
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
