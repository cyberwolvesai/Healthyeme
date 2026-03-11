/**
 * Collection & Shop All: filter TCK_PRODUCTS and render grid.
 * Set window.TCK_COLLECTION or use ?type=drinks|spreads|bakes on shop-all.html
 */
(function () {
  var CATEGORY_SLUG_TO_productCategories = {
    'drinks': ['drinks'],
    'spreads': ['spreads'],
    'bakes': ['bakes'],
    'fresh-cakes-bakes': ['bakes'],
    'cookies-baked-goods': ['bakes'],
    'nut-butters-spreads': ['spreads'],
    'snacks-bites': ['bakes'],
    'granola-breakfast': ['bakes'],
    'pantry-staples': ['bakes']
  };
  function getCollectionFromPage() {
    if (window.TCK_COLLECTION) return window.TCK_COLLECTION;
    var params = new URLSearchParams(window.location.search);
    var type = params.get('type');
    if (type && CATEGORY_SLUG_TO_productCategories[type])
      return { type: 'category', value: type };
    return { type: 'category', value: 'all' };
  }
  function getFilteredProducts() {
    var list = (typeof TCK_PRODUCTS !== 'undefined' ? TCK_PRODUCTS : []).slice();
    var opts = getCollectionFromPage();
    if (opts.type === 'category' && opts.value && opts.value !== 'all' && CATEGORY_SLUG_TO_productCategories[opts.value]) {
      var cats = CATEGORY_SLUG_TO_productCategories[opts.value];
      list = list.filter(function (p) { return cats.indexOf(p.category) >= 0; });
    } else if (opts.type === 'diet' && opts.value) {
      list = list.filter(function (p) { return (p.diet || []).indexOf(opts.value) >= 0; });
    }
    return list;
  }
  function renderProduct(p) {
    var ship = (p.ship || '').indexOf('Delhi') >= 0 ? 'Delhi/NCR Only' : 'Ships Pan India';
    var priceHtml = p.price2 ? '<p class="card-price">₹ ' + p.price + ' &ndash; ' + p.price2 + '</p>' : '<p class="card-price">₹ ' + p.price + '</p>';
    return '<article class="product-card"><div class="card-image"><span class="ship-badge">' + ship + '</span><img src="' + p.img + '" alt="' + p.name + '"></div><div class="card-body"><p class="card-weight">' + p.weight + '</p><p class="card-tagline">' + p.tagline + '</p><h4 class="card-title">' + p.name + '</h4>' + priceHtml + '<div class="card-rating"><span class="stars">★</span> ' + p.rating + '</div><button type="button" class="add-to-cart-btn" data-id="' + p.id + '">Add to Cart</button></div></article>';
  }
  function render() {
    var grid = document.getElementById('shop-product-grid');
    if (!grid) return;
    grid.innerHTML = getFilteredProducts().map(renderProduct).join('');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
