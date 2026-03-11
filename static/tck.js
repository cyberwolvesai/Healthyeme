/**
 * The Cinnamon Kitchen - Global JS
 * Sliders, cart, mobile menu, story tabs, filters
 */
(function () {
  'use strict';

  // ---------- Cart (localStorage) ----------
  const CART_KEY = 'tck_cart';
  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    } catch {
      return [];
    }
  }
  function setCart(items) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    updateCartUI();
  }
  function addToCart(productId, qty = 1) {
    const cart = getCart();
    const existing = cart.find(i => i.id === productId);
    if (existing) existing.qty += qty;
    else cart.push({ id: productId, qty });
    setCart(cart);
  }
  function removeFromCart(productId) {
    setCart(getCart().filter(i => i.id !== productId));
  }
  function setQty(productId, qty) {
    if (qty < 1) return removeFromCart(productId);
    const cart = getCart();
    const item = cart.find(i => i.id === productId);
    if (item) item.qty = qty;
    setCart(cart);
  }
  function getCartCount() {
    return getCart().reduce((sum, i) => sum + (i.qty || 1), 0);
  }
  function getCartTotal(productsMap) {
    return getCart().reduce((sum, i) => {
      const p = productsMap && productsMap[i.id];
      return sum + (p ? p.price * (i.qty || 1) : 0);
    }, 0);
  }

  function updateCartUI() {
    const countEl = document.getElementById('header-cart-count');
    if (countEl) countEl.textContent = getCartCount();
    const drawer = document.getElementById('cart-drawer');
    const emptyEl = document.getElementById('cart-empty');
    const listEl = document.getElementById('cart-items-list');
    const footerEl = document.getElementById('cart-footer');
    const subtotalEl = document.getElementById('cart-subtotal');
    if (!drawer || !emptyEl || !listEl) return;
    const cart = getCart();
    if (cart.length === 0) {
      emptyEl.style.display = 'block';
      listEl.innerHTML = '';
      if (footerEl) footerEl.style.display = 'none';
      return;
    }
    emptyEl.style.display = 'none';
    if (footerEl) footerEl.style.display = 'block';
    const productsMap = typeof TCK_PRODUCTS !== 'undefined' ? Object.fromEntries(TCK_PRODUCTS.map(p => [p.id, p])) : {};
    let html = '';
    cart.forEach(item => {
      const p = productsMap[item.id];
      const name = p ? p.name : 'Product';
      const price = p ? p.price : 0;
      const img = p ? p.img : 'https://picsum.photos/100/100';
      html += `
        <div class="cart-drawer-item" data-id="${item.id}">
          <img src="${img}" alt="" style="width:60px;height:60px;object-fit:cover;border-radius:8px;">
          <div style="flex:1;">
            <p style="font-weight:600;">${name}</p>
            <p>₹ ${price} × ${item.qty || 1}</p>
            <button type="button" class="cart-item-remove" data-id="${item.id}" style="background:none;border:none;color:#8b7355;font-size:13px;cursor:pointer;">Remove</button>
          </div>
        </div>`;
    });
    listEl.innerHTML = html;
    if (subtotalEl) subtotalEl.textContent = getCartTotal(productsMap);
    listEl.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        removeFromCart(Number(btn.dataset.id));
      });
    });
  }

  // ---------- Story tabs ----------
  function initStoryTabs() {
    document.querySelectorAll('.story-tab').forEach(tab => {
      tab.addEventListener('click', function () {
        const id = this.dataset.tab;
        document.querySelectorAll('.story-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        document.querySelectorAll('[id^="story-"]').forEach(block => {
          if (block.id === 'story-' + id) block.style.display = '';
          else if (block.classList.contains('story-content-grid')) block.style.display = 'none';
        });
      });
    });
  }

  // ---------- Mobile menu ----------
  function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const overlay = document.getElementById('mobile-nav-overlay');
    const nav = document.getElementById('mobile-nav');
    const closeBtn = document.querySelector('.mobile-nav-close');
    if (!toggle || !nav) return;
    function open() {
      if (overlay) overlay.classList.add('open');
      nav.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      if (overlay) overlay.classList.remove('open');
      nav.classList.remove('open');
      document.body.style.overflow = '';
    }
    toggle.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);
    if (overlay) overlay.addEventListener('click', close);
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  }

  // ---------- Cart drawer ----------
  function initCartDrawer() {
    const overlay = document.getElementById('cart-overlay');
    const drawer = document.getElementById('cart-drawer');
    const closeBtn = document.querySelector('.cart-drawer-close');
    if (!drawer) return;
    function open() {
      if (overlay) overlay.classList.add('open');
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
      updateCartUI();
    }
    function close() {
      if (overlay) overlay.classList.remove('open');
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }
    document.querySelectorAll('.cart-link').forEach(el => el.addEventListener('click', function (e) {
      e.preventDefault();
      open();
    }));
    if (closeBtn) closeBtn.addEventListener('click', close);
    if (overlay) overlay.addEventListener('click', close);
  }

  // ---------- Add to cart buttons ----------
  function initAddToCart() {
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('.add-to-cart-btn');
      if (!btn || !btn.dataset.id) return;
      e.preventDefault();
      addToCart(Number(btn.dataset.id));
      const overlay = document.getElementById('cart-overlay');
      const drawer = document.getElementById('cart-drawer');
      if (overlay) overlay.classList.add('open');
      if (drawer) drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
      updateCartUI();
    });
  }

  // ---------- Hero slider (optional multi-slide) ----------
  function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length <= 1) return;
    let idx = 0;
    document.querySelectorAll('.slider-arrow').forEach(arrow => {
      arrow.addEventListener('click', function () {
        slides[idx].style.display = 'none';
        idx = this.classList.contains('next') ? (idx + 1) % slides.length : (idx - 1 + slides.length) % slides.length;
        slides[idx].style.display = 'flex';
      });
    });
  }

  // ---------- Run on DOM ready ----------
  function init() {
    updateCartUI();
    initStoryTabs();
    initMobileMenu();
    initCartDrawer();
    initAddToCart();
    initHeroSlider();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.TCK = {
    getCart,
    setCart,
    addToCart,
    removeFromCart,
    setQty,
    getCartCount,
    getCartTotal,
    updateCartUI,
  };
})();
