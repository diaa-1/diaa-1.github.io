const products = [
    { name: 'jogger jeans' },
    { name: 'regular jeans' },
    { name: 'slim jeans' },
    { name: 'elastic jeans' },
    { name: 'classic jeans' },
    { name: 'regular jeans' },
    { name: 'wide leg jeans' },
    { name: 'skinny jeans' },
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
