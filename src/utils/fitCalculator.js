// src/utils/fitCalculator.js
 
// Calculates how many items fit in a given space.
//
// Parameters:
//   spaceW  — your space width  (cm)
//   spaceD  — your space depth  (cm)
//   spaceH  — your space height (cm)  
//   itemW   — product width  (cm)
//   itemD   — product depth  (cm)
//   itemH   — product height (cm)  
 
export function calculateFit(spaceW, spaceD, spaceH, itemW, itemD, itemH) {
 
  // 1. If the product is taller than the space → doesn't fit at all
  if (itemH > spaceH) {
    return { cols: 0, rows: 0, total: 0, wastedW: spaceW, wastedD: spaceD, fillPct: 0 }
  }
 
  // 2. Calculate how many fit left-right and front-back
  const cols = Math.floor(spaceW / itemW)
  const rows = Math.floor(spaceD / itemD)
  const total = cols * rows
 
  // 3. Leftover space
  const wastedW = Math.round(spaceW - cols * itemW)
  const wastedD = Math.round(spaceD - rows * itemD)
 
  // 4. How much floor area is used (percentage)
  const spaceArea = spaceW * spaceD
  const usedArea  = cols * itemW * rows * itemD
  const fillPct   = spaceArea > 0 ? Math.round((usedArea / spaceArea) * 100) : 0
 
  return { cols, rows, total, wastedW, wastedD, fillPct }
}