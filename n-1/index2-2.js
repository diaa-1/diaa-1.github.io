const products = [
    { name: 'Black Basic' },
    { name: 'Dragon Ball T-Shirt' },
    { name: 'Printed T-Shirt' },
    { name: 'Oversized T-Shirt' },
    { name: 'PIKACHU T-Shirt' },
    { name: 'Amoung Us T-Shirt' },
    { name: 'Looney Tunes T-Shirt' },
    { name: 'Smiley T-Shirt' },

];

function searchProducts(query) {
    const results = document.getElementById('results');
    results.innerHTML = '';

    if (!query) {
        results.style.display = 'none';
        return;
    }

    results.style.display = 'block';

    const matches = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));

    for (const match of matches) {
        const li = document.createElement('li');
        const highlightedName = match.name.replace(new RegExp(query, 'i'), '<span class="highlight">$&</span>');
        li.innerHTML = highlightedName;
        results.appendChild(li);
    }
}