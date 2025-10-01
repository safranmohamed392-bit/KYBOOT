<div align="center">

# Kyboot Shop

Modern, fully client‑side demo storefront for showcasing ergonomic footwear. Built with **vanilla HTML, CSS and JavaScript** (no build tooling) featuring: animated ambient background, glass / normal UI modes, dynamic product grid (search + filter + sorting), accessible cart & mock checkout flow, popover dialogs, inline toasts, and performance‑minded micro‑interactions.

</div>

## ✨ Key Features

| Area | Highlights |
|------|------------|
| Product Catalog | Static `PRODUCTS` array (easy to extend), category filter, text search, price sorting |
| UX / UI | Glass‑mode toggle (persisted), animated gradient + orb + cursor FX, butterfly streaks on rapid pointer movement, tilt / parallax product cards |
| Cart | Add / remove / increment / decrement, inline “Undo” after add, localStorage persistence (`kyboot_cart_v1`) |
| Checkout (Mock) | Multi‑section form (details, shipping, payment, review), dynamic totals, shipping tiers (free threshold), basic validation, fake order placement |
| Feedback | Toast system, accessible dialogs (custom confirm), inline product add feedback, animated counters |
| Popovers | Terms & Conditions summary + full modal; Contact mini form with validation & keyboard trapping |
| Accessibility | ARIA roles, keyboard navigable cart & controls, focus trapping in dialogs/popovers, semantic HTML, reduced‑motion fallbacks |
| Performance | Lazy image loading, debounced resize for orbs, rAF usage for animation loops, lightweight (no dependencies) |
| Theming | Design tokens (CSS variables), dark “glass” aesthetic vs standard light mode |

## 🗂 Project Structure

```
index.html       # Landing page (catalog, cart UI, mode toggle, animated background)
checkout.html    # Mock checkout flow pulling cart + product snapshot
styles.css       # Global styles, design tokens, animations, glass mode overrides
app.js           # All interactivity: product data, cart logic, UI effects, dialogs
README.md        # Project documentation (this file)
```

## 🚀 Getting Started

No build step required.

1. Download or copy the project folder (all files in the root).  
2. Open `index.html` directly in any modern browser.  
3. (Optional) Run from a lightweight static server for best results (caching / relative paths):
	```powershell
	# Python example (if available)
	python -m http.server 8080
	# Visit: http://localhost:8080/
	```
	Or use a “Live Server” style extension.
4. Interact: Add products → open Cart → proceed to Checkout → place the mock order. The cart persists via localStorage.

## 🧩 Product Data Schema
Products live in `app.js`:
```js
{ id: string, title: string, price: number, category: string, description: string, image: string }
```
Add more by pushing objects into the `PRODUCTS` array. Ensure each `id` is unique.

## 🛒 Cart & Checkout Logic
- Cart stored under `localStorage key: kyboot_cart_v1`.
- Subtotal = Σ (price * qty).
- Shipping tiers (in checkout):
	- Standard: 25 QAR (FREE when subtotal ≥ 500 QAR)
	- Express: 60 QAR
	- Pickup: 0 QAR
- Total = Subtotal + Shipping (no tax logic included; adapt if needed).
- “Order Placed” just clears the cart + shows a dialog (no backend). You can replace that block with a real API call later.

## 🎨 Theming & Styling
Global design tokens (colors, radii, shadows, transitions) defined in `:root` (see top of `styles.css`). Glass mode overrides via `body.glass-mode`.

Toggle logic persists preference in `localStorage (kyboot_ui_mode)` with values: `glass` or `normal`.

### Disable Advanced Effects
If you want a simpler build:
1. Remove calls to `initBackgroundOrbs()`, `initBackgroundStreaks()`, `initCursorFX()`, `initTiltEffects()` in `DOMContentLoaded`.
2. Delete related CSS blocks (search for `.orb`, `.butterfly`, `.cursor-core`, `.tilt`).

## ♿ Accessibility Notes
- Dialogs & popovers: managed focus + ESC close.
- Buttons use `aria-label` where iconography implied meaning.
- Mode toggle acts as a switch (`role="switch"` with `aria-checked`).
- Reduced motion respected: media queries disable certain keyframe animations.
- Semantic headings & landmark elements (`header`, `main`, `footer`, `aside`).

## ⚙️ Customization Guide
| Task | Where | What to Edit |
|------|-------|--------------|
| Add product | `app.js` | Append to `PRODUCTS` array |
| Change currency | `app.js` & templates | Replace hardcoded `QAR` strings |
| Adjust free shipping threshold | `checkout.html` script | `if(subtotal >= 500)` condition |
| Replace images | Product objects | Update `image` URLs |
| Disable glass by default | `app.js` | Change logic in `DOMContentLoaded` (force `enableGlassMode(false)`) |
| Tweak animations | `styles.css` | Modify keyframes / transition variables |

## 🔐 Security / Disclaimer
Payment & order submission are purely demonstrative—no real processing, storage, or transmission occurs. Do **not** use this exact setup for production commerce without implementing:
- Server‑side validation & stock checks
- CSRF protection & secure sessions / auth
- Real payment gateway (Stripe, Adyen, etc.)
- Proper privacy & data handling

## 📈 Performance Considerations
- Lightweight (no frameworks) keeps bundle small.
- Lazy image loading via `loading="lazy"` in product cards.
- Debounced resize before regenerating background orbs.
- Intersection Observer defers cosmetic animations until visible.
- Inline minimal JS parsing overhead (one file) — consider code‑splitting if you grow features.

## 🧪 Suggested Enhancements (Roadmap)
- Real backend (Node / Python / Go) for inventory & orders
- User authentication + order history
- Promo / coupon code engine
- Persistent shipping methods & addresses
- Currency & locale internationalization (i18n)
- Progressive Web App (installable + offline catalog)
- Unit tests (e.g., Jest + JSDOM) for cart logic
- Accessibility audit (axe) & Lighthouse budget file

## 🛠 Modifying / Extending
- Copy the folder and edit files directly (no build tooling required).
- Add products by editing the `PRODUCTS` array in `app.js`.
- Adjust styling tokens at the top of `styles.css` for rapid theme changes.
- Replace or remove advanced visual effects by deleting related initializer calls (`initBackgroundOrbs`, `initCursorFX`, etc.).
- To integrate into a larger site, drop these files into a static hosting environment (Netlify, Vercel static export, S3, etc.).

## 🧾 License
No explicit license file is included. Add a `LICENSE` (e.g., MIT) if you plan to redistribute. Until then, treat as “All Rights Reserved” by the original author(s).

## ❓ Troubleshooting
| Issue | Cause | Fix |
|-------|-------|-----|
| Empty product grid | DOM not ready / script blocked | Ensure `<script src="app.js"></script>` is just before `</body>` and no 404 in console |
| Cart doesn’t persist | localStorage blocked (privacy mode) | Test in a normal session; wrap storage in try/catch (already implemented) |
| Animations feel heavy | GPU / older device | Disable advanced FX as described above |
| Glass mode unreadable | High contrast needs | Switch to normal mode toggle |

## 🧭 Attribution
Created & styled by project author(s). Product names / imagery are demonstrative and may belong to respective trademark holders.

---

Happy building! Feel free to adapt this as a seed for a fuller e‑commerce prototype.
