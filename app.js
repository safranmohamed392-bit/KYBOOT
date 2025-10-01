/* Kyboot Shop � app.js
   Single-file product data + UI logic
*/

/* ---------- Sample product data ----------
   Edit this array to add/remove products.
   Each product: id,title,price,category,description,image
-----------------------------------------*/
const PRODUCTS = [
  {
    id: 'kb-001',
    title: 'Kyboot CloudRunner Sneaker',
    price: 349,
    category: 'Sneakers',
    description: 'Lightweight everyday sneaker with ergonomic sole and breathable mesh.',
    image: 'https://images.ctfassets.net/hnk2vsx53n6l/4gUWSLm8iWX5eOoDpKVwxo/b6e653f79f6836c7ad8027fc40723e08/bbfd217f59a6fd93f4510e4502ee11530eeb2d7b.png?w=1500&h=1500&fm=jpg&fl=progressive&f=center&fit=fill&q=80'
  },
  {
    id: 'kb-002',
    title: 'Kyboot TrailMaster',
    price: 429,
    category: 'Boots',
    description: 'Rugged trail boot with reinforced toe and weather-resistant membrane.',
    image: 'https://shoewarehousenaples.com/cdn/shop/files/AM189A_Meilen_black_grey_a.png?v=1715849272&width=2048'
  },
  {
    id: 'kb-003',
    title: 'Kyboot Comfort Walk Loafer',
    price: 279,
    category: 'Casual',
    description: 'Smart-casual slip-on with memory-foam footbed for all-day comfort.',
    image: 'https://ch.kybun.swiss/cdn/shop/files/67448accd0c1665faed187531eAM001A_a.png?v=1754918245&width=1946'
  },
  {
    id: 'kb-004',
    title: 'Kyboot Mens Ruty White sneakers',
    price: 189,
    category: 'Kids',
    description: 'Colorful, flexible shoes for kids with easy-fastening straps.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNb9aQ4cH8VZB_AKDdCUqNWcyHM15Q9CbolQ&s'
  },
  {
    id: 'kb-005',
    title: 'Kyboot Sport Runner',
    price: 399,
    category: 'Running',
    description: 'Performance running shoe with cushioned midsole and responsive rebound.',
    image: 'https://us.kybun.swiss/cdn/shop/files/kybun-shoe_9.png?v=1708958472&width=1500'
  },
    {
        id: 'kb-006',
        title: 'Kyboot Mens Rolle Men Navy sneakers',
        price: 319,
        category: 'Casual',
        description: 'Versatile urban shoe with sleek design and all-day comfort.',
        image: 'https://static.wixstatic.com/media/15a1f3_d04a6db1eb0d4e7fb79482250cc233e3~mv2.jpg/v1/fill/w_1173,h_781,al_c,q_85/15a1f3_d04a6db1eb0d4e7fb79482250cc233e3~mv2.jpg'
    },
    {
        id: 'kb-007',
        title: 'Kyboot Meilen Gold sneakers Kybun',
        price: 199,
        category: 'Running',
        description: 'Durable and flexible sneakers for kids with vibrant colors.',
        image: 'https://static.wixstatic.com/media/15a1f3_2dd40ea0464f4f999472f258aec54eda~mv2.jpg/v1/fill/w_1173,h_781,al_c,q_85/15a1f3_2dd40ea0464f4f999472f258aec54eda~mv2.jpg'
    },
    {
        id: 'kb-008',
        title: 'Kyboot Almasa FG Ostrich Beige sandals',
        price: 459,
        category: 'sandals',
        description: 'All-terrain hiking boot with superior grip and ankle support.',
        image: 'https://static.wixstatic.com/media/4d4ede_2b91c798d3494416b50f10aa27e91950~mv2.jpg/v1/fill/w_782,h_782,al_c,q_85/4d4ede_2b91c798d3494416b50f10aa27e91950~mv2.jpg'
    },
    {
        id: 'kb-009',
        title: 'kyboot URI Men Black',
        price: 379,
        category: 'sandals',
        description: 'Lightweight trainer with breathable upper and energy-return sole.',
        image: 'https://static.wixstatic.com/media/15a1f3_064018b81c8f4bf0816f82c6b3633877~mv2.jpg/v1/fill/w_1173,h_781,al_c,q_85/15a1f3_064018b81c8f4bf0816f82c6b3633877~mv2.jpg'
    },
    {
        id: 'kb-010',
        title: 'Kyboot Tropics FG Brown sandals',
        price: 299,
        category: 'sandals',
        description: 'Timeless leather loafer with cushioned insole for everyday wear.',
        image: 'https://static.wixstatic.com/media/15a1f3_79f499159a9c4182bece764604db85d7~mv2.jpg/v1/fill/w_761,h_507,al_c,q_85,usm_0.66_1.00_0.01/15a1f3_79f499159a9c4182bece764604db85d7~mv2.jpg'
    },
    {
        id: 'kb-011',
        title: 'Kyboot Mens Ruty White sneakers',
        price: 189,
        category: 'Kids',
        description: 'Colorful, flexible shoes for kids with easy-fastening straps.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNb9aQ4cH8VZB_AKDdCUqNWcyHM15Q9CbolQ&s'
    
    },
    {
        id: 'kb-012',
        title: 'Kyboot Sport Runner',
        price: 399,
        category: 'Running',
        description: 'Performance running shoe with cushioned midsole and responsive rebound.',
        image: 'https://us.kybun.swiss/cdn/shop/files/kybun-shoe_9.png?v=1708958472&width=1500'
    
    }
  
];

/* ---------- Force Always Start At Top (disable scroll restoration) ---------- */
try { if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; } } catch(_e){}
let __initialLoad = true;

/* ---------- App state ----------
---------------------------------*/
let state = {
  products: PRODUCTS.slice(),
  cart: loadCart(),
  filters: {
    query: '',
    category: 'all',
    sort: 'default'
  },
  activeProduct: null
};

/* ---------- Helper DOM refs ----------
------------------------------------*/
const productsGrid = document.getElementById('productsGrid');
const resultsCount = document.getElementById('resultsCount');
const cartCount = document.getElementById('cartCount');
const cartPanel = document.getElementById('cartPanel');
const cartItemsEl = document.getElementById('cartItems');
const cartSubtotalEl = document.getElementById('cartSubtotal');
// Removed product modal feature
const productModal = null;
let lastModalTrigger = null;

// Utility helpers
const $ = (id) => document.getElementById(id);
function safeEl(id, warn = false) {
  const el = $(id);
  if (!el && warn) console.warn('[KYBOOT] Missing expected element #' + id);
  return el;
}

/* ---------- Init ----------
--------------------------*/
document.addEventListener('DOMContentLoaded', () => {
  populateCategoryFilter();
  attachControls();
  renderProducts();
  renderCart();
  initScrollAnimations();
  document.getElementById('year').textContent = new Date().getFullYear();
  initBackgroundOrbs();
  initModeToggle();
  // Apply persisted mode. Glass is now the default.
  const storedMode = localStorage.getItem('kyboot_ui_mode');
  if(storedMode === 'normal') {
    // user previously opted out of glass
    enableGlassMode(false);
  } else {
    // default or explicit glass
    enableGlassMode(true);
  }
  initBackgroundStreaks();
  initCursorFX();
  
  // Add page load animation
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
    if(__initialLoad){ window.scrollTo({top:0, left:0, behavior:'instant' in window ? 'instant' : 'auto'}); }
  }, 100);

  // Safety: ensure after first render (product delay uses 200ms) we still are at top
  setTimeout(() => { if(__initialLoad){ window.scrollTo(0,0); __initialLoad=false; } }, 450);
});

/* ---------- Ambient Background Orbs ---------- */
function initBackgroundOrbs(){
  const container = document.getElementById('bgFX');
  if(!container) return;
  // Avoid duplicates (hot reload, etc.)
  if(container.dataset.enhanced) return; 
  container.dataset.enhanced = 'true';

  const ORB_COUNT = 9;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  for(let i=0;i<ORB_COUNT;i++){
    const orb = document.createElement('div');
    orb.className = 'orb';
    const size = Math.round( (Math.random()*0.6 + 0.4) * 260 );
    const xStart = Math.round(Math.random() * (vw - size));
    const yStart = Math.round(Math.random() * (vh - size));
    const xDrift = Math.round((Math.random()*2 -1) * 120);
    const yDrift = Math.round((Math.random()*2 -1) * 140);
    const dur = (Math.random()*14 + 18).toFixed(1) + 's';
    const delay = (Math.random()*-20).toFixed(2) + 's';
    const opacity = (Math.random()*0.35 + 0.25).toFixed(2);
    orb.style.setProperty('--size', size+'px');
    orb.style.setProperty('--xStart', xStart+'px');
    orb.style.setProperty('--yStart', yStart+'px');
    orb.style.setProperty('--xDrift', xDrift+'px');
    orb.style.setProperty('--yDrift', yDrift+'px');
    orb.style.setProperty('--dur', dur);
    orb.style.setProperty('--delay', delay);
    orb.style.setProperty('--o', opacity);
    container.appendChild(orb);
  }

  // Recompute on resize (debounced)
  let resizeTO;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTO);
    resizeTO = setTimeout(() => {
      // Remove existing orbs & regenerate (avoid layout thrash by fragment)
      [...container.querySelectorAll('.orb')].forEach(o => o.remove());
      container.dataset.enhanced = '';
      initBackgroundOrbs();
    }, 400);
  });
}

/* ---------- Background Sprinting Streak Effect ---------- */
function initBackgroundStreaks(){
  // Now spawns small "butterflies" that flap & drift when cursor sprints
  const layer = document.getElementById('bgFX');
  if(!layer) return;
  let last = { x: null, y: null, t: 0 };
  const maxButterflies = 34;
  const minDist = 14; // minimum movement to consider
  const minInterval = 26; // ms throttle
  const speedThreshold = 320; // px/sec required to spawn a butterfly

  const palettes = [
    [210,260], // blue / violet
    [190,330], // aqua / pink
    [270,320], // purple / magenta
    [35,210],  // amber / teal
    [150,200]  // green / cyan
  ];

  function spawnButterfly(x, y, dx, dy, speed){
    if(speed < speedThreshold) return; // only on sprint
    // Avoid spawning over interactive card to reduce clutter
    const el = document.elementFromPoint(x, y);
    if(el && el.closest('.card')) return;
    const b = document.createElement('div');
    b.className = 'butterfly';
    const ang = Math.atan2(dy, dx) * 180 / Math.PI;
    const spNorm = Math.min(Math.max(speed, speedThreshold), 2000);
    const scale = (0.65 + (spNorm - speedThreshold)/2000).toFixed(2);
    const life = (650 + Math.random()*420)|0; // ms
    const flap = (340 + Math.random()*160)|0; // ms
    const driftX = (Math.random()*60 - 30).toFixed(1) + 'px';
    const driftY = (-(Math.random()*60 + 40)).toFixed(1) + 'px';
    const [h1,h2] = palettes[Math.floor(Math.random()*palettes.length)];
    b.style.left = x + 'px';
    b.style.top = y + 'px';
    b.style.setProperty('--r', ang + 'deg');
    b.style.setProperty('--s', scale);
    b.style.setProperty('--dx', driftX);
    b.style.setProperty('--dy', driftY);
    b.style.setProperty('--life', life + 'ms');
    b.style.setProperty('--flap', flap + 'ms');
    b.style.setProperty('--h1', h1);
    b.style.setProperty('--h2', h2);
    layer.appendChild(b);
    setTimeout(() => b.remove(), life + 60);
    const all = layer.querySelectorAll('.butterfly');
    if(all.length > maxButterflies){
      for(let i=0;i< all.length - maxButterflies; i++) all[i].remove();
    }
  }

  window.addEventListener('pointermove', (e) => {
    const now = performance.now();
    if(last.x == null){ last = { x: e.clientX, y: e.clientY, t: now }; return; }
    const dx = e.clientX - last.x;
    const dy = e.clientY - last.y;
    const dist = Math.hypot(dx, dy);
    const dt = now - last.t || 1;
    if(dist < minDist || dt < minInterval){ return; }
    const speed = dist / dt * 1000; // px per second
    spawnButterfly(e.clientX, e.clientY, dx, dy, speed);
    last = { x: e.clientX, y: e.clientY, t: now };
  }, { passive: true });
}

/* ---------- Enhanced Cursor FX (Follower + Sparks) ---------- */
function initCursorFX(){
  const layer = document.getElementById('bgFX');
  if(!layer) return;
  // Core follower element
  let core = layer.querySelector('.cursor-core');
  if(!core){
    core = document.createElement('div');
    core.className = 'cursor-core hidden';
    layer.appendChild(core);
  }
  let lastX = window.innerWidth/2, lastY = window.innerHeight/2;
  let targetX = lastX, targetY = lastY;
  let rafId;
  const ease = 0.15; // smoothing factor
  const sparksMax = 60;
  let lastSparkTime = 0;

  function loop(){
    const dx = targetX - lastX;
    const dy = targetY - lastY;
    lastX += dx * ease;
    lastY += dy * ease;
    core.style.transform = `translate(${lastX}px, ${lastY}px) translate(-50%, -50%)`;
    rafId = requestAnimationFrame(loop);
  }
  loop();

  function spawnSpark(speed){
    const now = performance.now();
    // frequency scales with speed
    if(now - lastSparkTime < Math.max(18, 120 - speed*0.08)) return;
    lastSparkTime = now;
    const spark = document.createElement('div');
    spark.className = 'spark';
    const angle = Math.random() * Math.PI * 2;
    const spread = (Math.random()*8 + 4);
    const vx = Math.cos(angle) * spread;
    const vy = Math.sin(angle) * spread;
    spark.style.left = targetX + 'px';
    spark.style.top = targetY + 'px';
    spark.style.setProperty('--x', vx.toFixed(2)+'px');
    spark.style.setProperty('--y', vy.toFixed(2)+'px');
    spark.style.setProperty('--dur', (500 + Math.random()*450)+'ms');
    layer.appendChild(spark);
    setTimeout(() => spark.remove(), 900);
    const all = layer.querySelectorAll('.spark');
    if(all.length > sparksMax){
      for(let i=0;i< all.length - sparksMax; i++) all[i].remove();
    }
  }

  let lastMove = { x: null, y: null, t: 0 };
  window.addEventListener('pointermove', (e) => {
    targetX = e.clientX; targetY = e.clientY;
    core.classList.remove('hidden');
    const now = performance.now();
    if(lastMove.x != null){
      const dx = e.clientX - lastMove.x;
      const dy = e.clientY - lastMove.y;
      const dist = Math.hypot(dx, dy);
      const dt = now - lastMove.t || 1;
      const speed = dist / dt * 1000; // px/s
      spawnSpark(speed);
      // subtle scale with speed
      const scale = Math.min(1.25, 0.85 + speed / 2600);
      core.style.scale = scale.toFixed(3);
      core.style.opacity = Math.min(1, 0.55 + speed/2500).toFixed(2);
    }
    lastMove = { x: e.clientX, y: e.clientY, t: now };
  }, { passive:true });

  window.addEventListener('pointerleave', () => {
    core.classList.add('hidden');
  });

  // Prevent memory leaks if page transitions later
  window.addEventListener('beforeunload', () => cancelAnimationFrame(rafId));
}

/* ---------- Storage ----------
----------------------------*/
function saveCart() {
  localStorage.setItem('kyboot_cart_v1', JSON.stringify(state.cart));
}
function loadCart() {
  try {
    const raw = localStorage.getItem('kyboot_cart_v1');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

/* ---------- UI: filters & controls ----------
-------------------------------------------*/
function attachControls() {
  safeEl('searchInput')?.addEventListener('input', (e) => {
    state.filters.query = e.target.value.trim().toLowerCase();
    renderProducts();
  });
  safeEl('categoryFilter')?.addEventListener('change', (e) => {
    state.filters.category = e.target.value;
    renderProducts();
  });
  safeEl('sortSelect')?.addEventListener('change', (e) => {
    state.filters.sort = e.target.value;
    renderProducts();
  });
  safeEl('viewCatalogBtn')?.addEventListener('click', () => {
    window.scrollTo({top: document.getElementById('productsGrid').offsetTop - 20, behavior:'smooth'});
  });
  safeEl('cartBtn')?.addEventListener('click', () => {
    toggleCartPanel(true);
  });
  safeEl('closeCart')?.addEventListener('click', () => toggleCartPanel(false));
  // Prevent clicks inside cart panel from bubbling to document close handler
  cartPanel?.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  
  // Close cart when clicking outside of it
  document.addEventListener('click', (e) => {
    const panelEl = document.getElementById('cartPanel');
    const btnEl = document.getElementById('cartBtn');
    if (!panelEl || !btnEl) return;
    if (panelEl.getAttribute('aria-hidden') === 'false') {
      // Use composedPath to reliably detect internal clicks even if DOM changed during render
      const path = typeof e.composedPath === 'function' ? e.composedPath() : [];
      if (path.includes(panelEl) || path.includes(btnEl)) return; // internal click
      if (panelEl.contains(e.target) || btnEl.contains(e.target)) return; // fallback
      toggleCartPanel(false);
    }
  });
  
  // Modal removed: no related listeners

  document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (state.cart.length === 0) { showToast('Your cart is empty.', 'error'); return; }
    const total = calcSubtotal();
    showDialog({
      title: 'Proceed to Checkout',
      message: `Subtotal: <strong>${total.toFixed(2)} QAR</strong><br><small class="dialog-subnote">You will review shipping & payment next.</small>`,
      confirmText: 'Continue',
      cancelText: 'Cancel',
      onConfirm: () => { window.location.href = 'checkout.html'; }
    });
  });

  document.getElementById('clearCart').addEventListener('click', () => {
    if(state.cart.length === 0){ showToast('Cart already empty','info'); return; }
    showDialog({
      title: 'Clear Cart',
      message: 'Remove all items from your cart?',
      confirmText: 'Clear',
      confirmType: 'destructive',
      cancelText: 'Cancel',
      onConfirm: () => { state.cart = []; saveCart(); renderCart(); showToast('Cart cleared','success'); }
    });
  });

  // Terms popup
  const termsLink = document.getElementById('terms');
  if(termsLink){
    termsLink.addEventListener('click', (e) => {
      e.preventDefault();
      const year = new Date().getFullYear();
        showTermsPopover(e.currentTarget);
    });
  }
    // Contact popup
    const contactLink = document.getElementById('contact');
    if(contactLink){
      contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        showContactPopover(e.currentTarget);
      });
    }
}

/* ---------- Rendering products ----------
--------------------------------------*/
function populateCategoryFilter(){
  const categories = Array.from(new Set(PRODUCTS.map(p => p.category)));
  const sel = document.getElementById('categoryFilter');
  categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    sel.appendChild(opt);
  });
}

function renderProducts(){
  const { query, category, sort } = state.filters;
  let list = PRODUCTS.slice();

  if (category !== 'all') list = list.filter(p => p.category === category);
  if (query) list = list.filter(p => (p.title + ' ' + p.description + ' ' + p.category).toLowerCase().includes(query));

  if (sort === 'price-asc') list.sort((a,b) => a.price - b.price);
  if (sort === 'price-desc') list.sort((a,b) => b.price - a.price);

  // Add loading animation
  productsGrid.classList.add('loading');
  productsGrid.innerHTML = '';
  
  // Simulate loading delay for smooth animation
  setTimeout(() => {
    productsGrid.classList.remove('loading');
    list.forEach((p, index) => {
      const card = document.createElement('article');
      card.className = 'card tilt';
      card.style.animationDelay = `${index * 0.1}s`;
      card.innerHTML = `
        <div class="tilt-inner">
          <img loading="lazy" src="${p.image}" alt="${escapeHtml(p.title)}" />
          <h3>${escapeHtml(p.title)}</h3>
          <div class="meta">
            <div>${escapeHtml(p.category)}</div>
            <div class="price">${p.price.toFixed(2)} QAR</div>
          </div>
          <p style="color:var(--muted);font-size:13px;margin:8px 0">${escapeHtml(p.description)}</p>
          <div style="display:flex;gap:8px">
            <button class="btn primary" data-action="add" data-id="${p.id}">Add to cart</button>
          </div>
        </div>
      `;
      productsGrid.appendChild(card);
    });

    resultsCount.textContent = list.length;

    // attach card buttons with enhanced animations
    productsGrid.querySelectorAll('button[data-action]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        const action = e.currentTarget.dataset.action;
        
        // Add click animation
        e.currentTarget.style.transform = 'scale(0.95)';
        setTimeout(() => {
          e.currentTarget.style.transform = '';
        }, 150);
        
        if (action === 'add') {
          addToCart(id, 1);
          renderCart();
          const cartEl = document.getElementById('cartBtn');
          if (cartEl) {
            cartEl.style.animation = 'none';
            cartEl.offsetHeight;
            cartEl.style.animation = 'pulse 0.6s ease-in-out';
          }
          // Inline feedback under product card instead of global top-right notification
          showInlineProductFeedback(e.currentTarget, id, 'Added');
        }
      });
    });

    // initialize tilt on newly added cards
    initTiltEffects(productsGrid.querySelectorAll('.card.tilt'));
  }, 200);
}

// Modal feature removed: stripped related functions

/* ---------- Cart logic ----------
--------------------------------*/
function addToCart(productId, qty = 1){
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = state.cart.find(i => i.id === productId);
  if (existing) existing.qty += qty;
  else state.cart.push({ id: productId, qty });
  saveCart();
  renderCart();
}

function updateCartItem(productId, qty){
  if (qty <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
  } else {
    const item = state.cart.find(i => i.id === productId);
    if (item) item.qty = qty;
  }
  saveCart();
  renderCart();
}

function removeCartItem(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCart();
  renderCart();
}

function calcSubtotal(){
  return state.cart.reduce((sum, it) => {
    const p = PRODUCTS.find(x => x.id === it.id);
    return sum + (p ? p.price * it.qty : 0);
  }, 0);
}

function renderCart(){
  // update cart count
  const totalItems = state.cart.reduce((s,i) => s + i.qty, 0);
  cartCount.textContent = totalItems;
  cartCount.dataset.count = totalItems;

  // items list
  cartItemsEl.innerHTML = '';
  if (state.cart.length === 0){
    cartItemsEl.innerHTML = '<p style="color:var(--muted);padding:10px">Your cart is empty</p>';
  } else {
    state.cart.forEach(it => {
      const p = PRODUCTS.find(x => x.id === it.id);
      if (!p) return;
      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <img src="${p.image}" alt="${escapeHtml(p.title)}" />
        <div class="info">
          <div style="font-weight:700">${escapeHtml(p.title)}</div>
          <div style="color:var(--muted);font-size:13px">${p.price.toFixed(2)} QAR</div>
          <div class="qty" style="margin-top:6px">
        <button class="qty-btn" data-action="dec" data-id="${p.id}" aria-label="Decrease quantity" style="font-size:14px;padding:2px 6px;">−</button>
        <input class="cart-qty" data-id="${p.id}" type="number" min="1" value="${it.qty}" aria-label="Quantity for ${escapeHtml(p.title)}" />
        <button class="qty-btn" data-action="inc" data-id="${p.id}" aria-label="Increase quantity" style="font-size:14px;padding:2px 6px;">+</button>
        <button class="btn small" style="margin-left:4px;font-size:12px;padding:2px 8px;" data-action="remove" data-id="${p.id}">Remove</button>
          </div>
        </div>
      `;
      cartItemsEl.appendChild(row);
    });

    // attach cart item events
    cartItemsEl.querySelectorAll('button[data-action]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        const action = e.currentTarget.dataset.action;
        const item = state.cart.find(i => i.id === id);
        if (!item) return;
        if (action === 'inc') updateCartItem(id, item.qty + 1);
        if (action === 'dec') updateCartItem(id, Math.max(1, item.qty - 1));
        if (action === 'remove') removeCartItem(id);
      });
    });
    cartItemsEl.querySelectorAll('input.cart-qty').forEach(inp => {
      inp.addEventListener('change', (e) => {
        const id = e.target.dataset.id;
        let q = parseInt(e.target.value || '1', 10);
        if (isNaN(q) || q < 1) q = 1;
        updateCartItem(id, q);
      });
    });
  }

  cartSubtotalEl.textContent = `${calcSubtotal().toFixed(2)} QAR`;
}

/* ---------- Cart panel toggle ----------
-------------------------------------*/
function toggleCartPanel(open = true){
  cartPanel.setAttribute('aria-hidden', open ? 'false' : 'true');
}

/* ---------- Utilities ----------
--------------------------------*/
function escapeHtml(str = ''){
  return String(str).replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

// Enhanced notification system
function showNotification(message, type = 'info', duration = 3000) {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 12px 20px;
    background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#1f6feb'};
    color: white;
    border-radius: 8px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    z-index: 9999;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    font-weight: 500;
  `;
  
  document.body.appendChild(notification);
  
  // Slide in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Slide out and remove
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, duration);
}

/* ---------- Site-wide Dialog & Toast (replaces alert/confirm) ---------- */
function ensureDialogRoots(){
  if(!document.getElementById('uiDialogRoot')){
    const dlgRoot = document.createElement('div'); dlgRoot.id='uiDialogRoot'; dlgRoot.className='ui-dialog-root'; document.body.appendChild(dlgRoot);
    const toast = document.createElement('div'); toast.id='toastStack'; toast.className='toast-stack'; document.body.appendChild(toast);
  }
}

function showDialog({ title='Notice', message='', confirmText='OK', cancelText=null, confirmType='', onConfirm=null, onCancel=null }={}) {
  ensureDialogRoots();
  const root = document.getElementById('uiDialogRoot');
  root.innerHTML = '';
  root.classList.add('visible');
  const overlay = document.createElement('div'); overlay.className='ui-dialog-overlay';
  const dlg = document.createElement('div'); dlg.className='ui-dialog'; dlg.setAttribute('role','dialog'); dlg.setAttribute('aria-modal','true'); dlg.innerHTML = `
    <button class="close-x" aria-label="Close">×</button>
    <h3>${title}</h3>
    <p>${message}</p>
    <div class="actions"></div>`;
  const actions = dlg.querySelector('.actions');
  if(cancelText){
    const cancelBtn = document.createElement('button'); cancelBtn.type='button'; cancelBtn.className='btn'; cancelBtn.textContent = cancelText; cancelBtn.onclick = closeCancel; actions.appendChild(cancelBtn);
  }
  const confirmBtn = document.createElement('button'); confirmBtn.type='button'; confirmBtn.className='btn primary'; if(confirmType==='destructive') confirmBtn.classList.add('destructive'); confirmBtn.textContent = confirmText; confirmBtn.onclick = () => { close(); onConfirm && onConfirm(); };
  actions.appendChild(confirmBtn);
  dlg.querySelector('.close-x').onclick = closeCancel;
  function close(){ root.classList.remove('visible'); root.innerHTML=''; }
  function closeCancel(){ close(); onCancel && onCancel(); }
  document.addEventListener('keydown', escHandler);
  function escHandler(e){ if(e.key==='Escape'){ closeCancel(); document.removeEventListener('keydown', escHandler); } }
  root.appendChild(overlay); root.appendChild(dlg);
  setTimeout(()=> confirmBtn.focus(), 40);
  return { close };
}

function showToast(message, type='info', duration=4000){
  ensureDialogRoots();
  const stack = document.getElementById('toastStack');
  const el = document.createElement('div'); el.className = `toast ${type}`; el.innerHTML = `<span>${message}</span>`;
  const dismiss = document.createElement('button'); dismiss.type='button'; dismiss.textContent='×'; dismiss.setAttribute('aria-label','Dismiss'); dismiss.onclick = () => remove(); el.appendChild(dismiss);
  stack.appendChild(el);
  function remove(){ if(!el.parentNode) return; el.style.opacity='0'; el.style.transform='translateY(-6px)'; setTimeout(()=> el.remove(), 260); }
  setTimeout(remove, duration);
}

// Inline per-product feedback (beside button) with Undo capability
function showInlineProductFeedback(triggerBtn, productId, message='Added', type='success') {
  if(!triggerBtn) return;
  const container = triggerBtn.parentElement; // flex wrapper containing the button
  if(!container) return;
  let slot = container.querySelector('.inline-feedback');
  if(!slot){
    slot = document.createElement('div');
    slot.className = 'inline-feedback';
    container.appendChild(slot);
  }
  slot.innerHTML = `<span class="msg">${escapeHtml(message)} to cart</span><button type="button" class="undo" aria-label="Undo add">Undo</button>`;
  slot.setAttribute('role','status');
  slot.classList.remove('show','error');
  void slot.offsetWidth; // restart animation
  slot.classList.add('show', type);

  const undoBtn = slot.querySelector('.undo');
  if(undoBtn){
    undoBtn.onclick = () => {
      // Prevent multiple undo actions
      if(undoBtn.disabled) return;
      undoBtn.disabled = true;
      const item = state.cart.find(i => i.id === productId);
      if(item){
        if(item.qty <= 1) {
          removeCartItem(productId);
        } else {
          updateCartItem(productId, item.qty - 1);
        }
        renderCart();
        slot.querySelector('.msg').textContent = 'Removed';
        slot.classList.add('removed');
      }
      clearTimeout(slot._hideTO);
      slot._hideTO = setTimeout(()=>{ slot.classList.remove('show'); }, 1400);
    };
  }
  clearTimeout(slot._hideTO);
  slot._hideTO = setTimeout(()=>{ slot.classList.remove('show'); }, 2200);
}

// Enhanced scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements that should animate on scroll
  document.querySelectorAll('.card, .hero, .controls').forEach(el => {
    observer.observe(el);
  });
}

/* ---------- Parallax Tilt Effect ---------- */
function initTiltEffects(nodes){
  nodes.forEach(card => {
    if(card.dataset.tilted) return; card.dataset.tilted = 'true';
    const maxTilt = 12; // degrees
    const perspective = 900;
    let ticking = false;

    function setTransform(x, y){
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width/2;
      const cy = rect.top + rect.height/2;
      const dx = x - cx;
      const dy = y - cy;
      const rx = (dy / (rect.height/2)) * -maxTilt;
      const ry = (dx / (rect.width/2)) * maxTilt;
      card.dataset.tilting = 'true';
      card.style.transform = `perspective(${perspective}px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-4px)`;
    }

    function reset(){
      card.dataset.tilting = 'false';
      card.style.transform = '';
    }

    card.addEventListener('pointermove', (e) => {
      if(!ticking){
        window.requestAnimationFrame(() => { setTransform(e.clientX, e.clientY); ticking=false; });
        ticking = true;
      }
    });
    card.addEventListener('pointerleave', reset);
    card.addEventListener('blur', reset);
  });
}

/* ---------- Mode Toggle (Normal / Glass) ---------- */
function initModeToggle(){
  const btn = document.getElementById('modeToggle');
  if(!btn) return;
  btn.addEventListener('click', () => {
    const enable = !document.body.classList.contains('glass-mode');
    enableGlassMode(enable);
  });
  // Keyboard accessibility for role="switch"
  btn.addEventListener('keydown', (e) => {
    if(e.key === ' ' || e.key === 'Enter') { e.preventDefault(); btn.click(); }
  });
  // sync initial ARIA state with current class
  if(document.body.classList.contains('glass-mode')){
    btn.setAttribute('aria-pressed','true');
    btn.setAttribute('aria-checked','true');
    btn.setAttribute('aria-label','Disable Glass Mode');
    btn.classList.add('on');
  } else {
    btn.setAttribute('aria-pressed','false');
    btn.setAttribute('aria-checked','false');
    btn.setAttribute('aria-label','Enable Glass Mode');
    btn.classList.remove('on');
  }
}

function enableGlassMode(enable){
  const btn = document.getElementById('modeToggle');
  if(enable){
    document.body.classList.add('glass-mode');
    if(btn){
      btn.setAttribute('aria-pressed','true');
      btn.setAttribute('aria-checked','true');
      btn.setAttribute('aria-label','Disable Glass Mode');
      btn.classList.add('on');
    }
    localStorage.setItem('kyboot_ui_mode','glass');
  } else {
    document.body.classList.remove('glass-mode');
    if(btn){
      btn.setAttribute('aria-pressed','false');
      btn.setAttribute('aria-checked','false');
      btn.setAttribute('aria-label','Enable Glass Mode');
      btn.classList.remove('on');
    }
    localStorage.setItem('kyboot_ui_mode','normal');
  }
}

/* ---------- Inline Popover for Terms (anchored near footer link) ---------- */
function showTermsPopover(anchor){
  if(!anchor) return;
  // Remove any existing popover
  document.querySelectorAll('.popover-terms, .popover-contact').forEach(p => p.remove());
  document.body.classList.add('terms-popover-open');
  const year = new Date().getFullYear();
  const pop = document.createElement('div');
  pop.className = 'popover-terms';
  pop.setAttribute('role','dialog');
  pop.setAttribute('aria-label','Terms & Conditions');
  pop.innerHTML = `
    <div class="pop-inner">
      <div class="pop-header">
        <h3>Terms & Conditions</h3>
        <button type="button" class="close-x" aria-label="Close">×</button>
      </div>
      <div class="pop-body">
        <p><strong>Welcome!</strong> This summary highlights key points. For clarifications email <a href="mailto:legal@kyboot.example">legal@kyboot.example</a>.</p>
        <ul class="mini-list">
          <li><strong>Products:</strong> Availability can change; refunds if unavailable.</li>
          <li><strong>Pricing:</strong> QAR currency; obvious errors may void an order.</li>
          <li><strong>Orders:</strong> We may decline suspicious or restricted orders.</li>
          <li><strong>Shipping:</strong> Estimates only; carriers may delay.</li>
          <li><strong>Returns:</strong> 14‑day window for unworn items (some exclusions).</li>
          <li><strong>Warranty:</strong> Manufacturing defects only; normal wear excluded.</li>
          <li><strong>Privacy:</strong> Data handled per policy; no absolute guarantee.</li>
          <li><strong>Liability:</strong> No indirect or consequential damages.</li>
        </ul>
        <p class="fine-print">Version ${year}. Continued use means acceptance. <button class="btn small view-full" type="button">View full details</button></p>
      </div>
    </div>`;
  document.body.appendChild(pop);

  // Positioning
  const rect = anchor.getBoundingClientRect();
  const margin = 8;
  const preferredTop = rect.top + window.scrollY - pop.offsetHeight - margin;
  // Build first hidden to measure then adjust
  pop.style.position = 'absolute';
  pop.style.opacity = '0';
  pop.style.pointerEvents = 'none';
  requestAnimationFrame(() => {
    let top = preferredTop;
    if(top < window.scrollY + 10){ // if above viewport, place below link
      top = rect.bottom + window.scrollY + margin;
      pop.classList.add('below');
    }
    let left = rect.left + window.scrollX - (pop.offsetWidth/2) + rect.width/2;
    const maxLeft = window.scrollX + document.documentElement.clientWidth - pop.offsetWidth - 10;
    if(left < 10) left = 10;
    if(left > maxLeft) left = maxLeft;
    pop.style.top = top + 'px';
    pop.style.left = left + 'px';
    pop.style.opacity = '1';
    pop.style.pointerEvents = 'auto';
  });

  // Close logic
  function remove(){
    pop.remove();
    document.removeEventListener('mousedown', outside);
    document.removeEventListener('keydown', esc);
    // Only remove backdrop class if no other popover is open
    if(!document.querySelector('.popover-contact')){
      document.body.classList.remove('terms-popover-open');
    }
  }
  function outside(ev){ if(!pop.contains(ev.target) && ev.target !== anchor){ remove(); }
  }
  function esc(ev){ if(ev.key === 'Escape'){ remove(); anchor.focus(); } }
  document.addEventListener('mousedown', outside);
  document.addEventListener('keydown', esc);
  pop.querySelector('.close-x').addEventListener('click', remove);

  // Trap focus minimal (cycle between close and view-full button)
  const focusables = pop.querySelectorAll('button, a');
  if(focusables.length){ focusables[0].focus(); }
  pop.addEventListener('keydown', (e) => {
    if(e.key === 'Tab'){
      const list = Array.from(focusables);
      const idx = list.indexOf(document.activeElement);
      if(e.shiftKey && idx === 0){ e.preventDefault(); list[list.length-1].focus(); }
      else if(!e.shiftKey && idx === list.length-1){ e.preventDefault(); list[0].focus(); }
    }
  });

  // View full opens original dialog for full content
  pop.querySelector('.view-full').addEventListener('click', () => {
    remove();
    const year2 = new Date().getFullYear();
    showDialog({
      title: 'Terms & Conditions',
      message: `
        <div class="legal-block" style="max-height:52vh;overflow:auto;padding-right:6px;">
          <p><strong>Welcome to Kyboot Shop.</strong> By accessing or purchasing from this site you agree to the following terms. Please read them carefully. This summary is provided for convenience and does not replace the full legal agreement.</p>
          <h4 style="margin:18px 0 6px;font-size:15px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:var(--accent)">1. Products & Availability</h4>
          <p>We strive to display accurate product information. Inventory may change without notice. In the rare case an ordered item becomes unavailable, we will offer an alternative or full refund.</p>
          <h4 style="margin:18px 0 6px;font-size:15px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:var(--accent)">2. Pricing & Currency</h4>
          <p>All prices are listed in QAR and include applicable VAT unless stated otherwise. We may adjust pricing due to promotions, supplier changes or errors. Confirmed orders will not be retroactively adjusted except in case of obvious pricing mistakes.</p>
          <h4 style="margin:18px 0 6px;font-size:15px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:var(--accent)">3. Orders & Payment</h4>
          <p>Placing an order constitutes an offer to purchase. We reserve the right to refuse or cancel any order (e.g. suspected fraud, payment issue, shipping restriction). You agree to provide current, complete and accurate purchase information.</p>
          <h4 style="margin:18px 0 6px;font-size:15px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:var(--accent)">4. Shipping & Delivery</h4>
          <p>Estimated delivery times are provided for convenience and are not guaranteed. Delays caused by carriers or customs are outside our control, but we will assist where possible.</p>
          <h4 style="margin:18px 0 6px;font-size:15px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:var(--accent)">5. Returns & Exchanges</h4>
          <p>Unworn items in original condition may typically be returned within 14 days of delivery unless marked Final Sale. Custom or hygienic-restricted items may not be returnable. Contact support before returning any item to receive an RMA.</p>
          <h4 style="margin:18px 0 6px;font-size:15px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:var(--accent)">6. Warranty</h4>
          <p>Manufacturing defects are covered under a limited warranty. Wear-and-tear, misuse, or accidental damage are excluded. We may repair, replace or refund at our discretion.</p>
          <h4 style="margin:18px 0 6px;font-size:15px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:var(--accent)">7. Privacy & Data</h4>
          <p>Your personal data is processed in accordance with our Privacy Policy (available on request). We use standard security practices but cannot guarantee absolute protection of transmitted data.</p>
          <h4 style="margin:18px 0 6px;font-size:15px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:var(--accent)">8. Limitation of Liability</h4>
          <p>To the fullest extent permitted by law, Kyboot Shop is not liable for indirect, incidental or consequential damages arising from use of the site or products.</p>
          <h4 style="margin:18px 0 6px;font-size:15px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:var(--accent)">9. Changes</h4>
          <p>We may update these terms at any time. Continued use of the site after updates constitutes acceptance of the revised version.</p>
          <p style="margin-top:20px;font-size:12px;color:var(--muted)">Version: ${year2}. For clarifications contact <a href="mailto:legal@kyboot.example" style="color:var(--accent);text-decoration:none;">legal@kyboot.example</a>.</p>
        </div>
        <small class="dialog-subnote">This summary does not limit any statutory rights you may have.</small>
      `,
      confirmText: 'Close',
      cancelText: null,
      onConfirm: () => {}
    });
  });
}

/* ---------- Contact Popover (mini form) ---------- */
function showContactPopover(anchor){
  if(!anchor) return;
  document.querySelectorAll('.popover-terms, .popover-contact').forEach(p => p.remove());
  document.body.classList.add('contact-popover-open');
  const pop = document.createElement('div');
  pop.className = 'popover-contact';
  pop.setAttribute('role','dialog');
  pop.setAttribute('aria-label','Contact Support');
  pop.innerHTML = `
    <div class="pop-inner">
      <div class="pop-header">
        <h3>Contact Us</h3>
        <button type="button" class="close-x" aria-label="Close">×</button>
      </div>
      <form class="contact-form" novalidate>
        <div class="field">
          <label for="cf_name">Name</label>
          <input id="cf_name" name="name" type="text" autocomplete="name" required />
        </div>
        <div class="field">
          <label for="cf_email">Email</label>
          <input id="cf_email" name="email" type="email" autocomplete="email" placeholder="you@example.com" required />
        </div>
        <div class="field">
          <label for="cf_msg">Message</label>
          <textarea id="cf_msg" name="message" rows="3" required placeholder="How can we help?"></textarea>
        </div>
        <div class="helper-links">
          <a href="mailto:support@kyboot.example" class="quick-mail">Email support directly</a>
          <a href="tel:+974000000" class="quick-call">Call: +974 0000 000</a>
        </div>
        <div class="actions-row">
          <button type="submit" class="btn primary small">Send</button>
          <button type="button" class="btn small cancel-btn">Cancel</button>
        </div>
        <p class="fine-print">We aim to reply within 24h. Your info is handled per our privacy policy.</p>
      </form>
    </div>`;
  document.body.appendChild(pop);

  // Position similar to terms
  const rect = anchor.getBoundingClientRect();
  const margin = 8;
  pop.style.position = 'absolute';
  pop.style.opacity = '0';
  pop.style.pointerEvents = 'none';
  requestAnimationFrame(() => {
    let top = rect.top + window.scrollY - pop.offsetHeight - margin;
    if(top < window.scrollY + 10){ top = rect.bottom + window.scrollY + margin; pop.classList.add('below'); }
    let left = rect.left + window.scrollX - (pop.offsetWidth/2) + rect.width/2;
    const maxLeft = window.scrollX + document.documentElement.clientWidth - pop.offsetWidth - 10;
    if(left < 10) left = 10; if(left > maxLeft) left = maxLeft;
    pop.style.top = top + 'px';
    pop.style.left = left + 'px';
    pop.style.opacity = '1';
    pop.style.pointerEvents = 'auto';
  });

  const form = pop.querySelector('form.contact-form');
  const nameEl = form.querySelector('#cf_name');
  const emailEl = form.querySelector('#cf_email');
  const msgEl = form.querySelector('#cf_msg');

  function validateEmail(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); }
  function setError(el, msg){
    let err = el.parentElement.querySelector('.err');
    if(!err){ err = document.createElement('div'); err.className='err'; el.parentElement.appendChild(err); }
    err.textContent = msg; el.classList.add('invalid');
  }
  function clearError(el){ el.classList.remove('invalid'); const err = el.parentElement.querySelector('.err'); if(err) err.textContent=''; }

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let ok = true;
    [nameEl,emailEl,msgEl].forEach(clearError);
    if(!nameEl.value.trim()){ setError(nameEl,'Name required'); ok=false; }
    if(!validateEmail(emailEl.value)){ setError(emailEl,'Valid email required'); ok=false; }
    if(msgEl.value.trim().length < 5){ setError(msgEl,'Message too short'); ok=false; }
    if(!ok) return;
    // Simulate send
    showToast('Message sent!','success',3000);
    remove();
  });
  form.querySelector('.cancel-btn').addEventListener('click', () => remove());

  // Close & outside
  function remove(){
    pop.remove();
    document.removeEventListener('mousedown', outside);
    document.removeEventListener('keydown', esc);
    if(!document.querySelector('.popover-terms')){
      document.body.classList.remove('contact-popover-open');
    }
  }
  function outside(ev){ if(!pop.contains(ev.target) && ev.target !== anchor){ remove(); } }
  function esc(ev){ if(ev.key === 'Escape'){ remove(); anchor.focus(); } }
  document.addEventListener('mousedown', outside);
  document.addEventListener('keydown', esc);
  pop.querySelector('.close-x').addEventListener('click', remove);

  // Focus management
  const focusables = pop.querySelectorAll('button, input, textarea, a');
  if(focusables.length){ focusables[0].focus(); }
  pop.addEventListener('keydown', (e) => {
    if(e.key === 'Tab'){
      const list = Array.from(focusables);
      const idx = list.indexOf(document.activeElement);
      if(e.shiftKey && idx === 0){ e.preventDefault(); list[list.length-1].focus(); }
      else if(!e.shiftKey && idx === list.length-1){ e.preventDefault(); list[0].focus(); }
    }
  });
}
