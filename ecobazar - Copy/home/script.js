// JavaScript for searching products
const searchInput = document.getElementById('search-bar');
const products = document.querySelectorAll('.product');

searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase();

  products.forEach(product => {
    const productName = product.querySelector('h2').textContent.toLowerCase();

    if (productName.includes(searchTerm)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});
