// Product data
const products = [
    {
        id: 1,
        name: "Game Account 1",
        price: "$30",
        description: "A high-level gaming account with amazing features.",
        image: "game-image1.jpg"
    },
    {
        id: 2,
        name: "Game Account 2",
        price: "$45",
        description: "An elite gaming account with premium perks.",
        image: "game-image2.jpg"
    },
    {
        id: 3,
        name: "Game Account 3",
        price: "$40",
        description: "A mid-tier gaming account with great value.",
        image: "game-image3.jpg"
    }
];

// Show product details in modal
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);

    if (product) {
        document.getElementById('modal-image').src = product.image;
        document.getElementById('modal-name').textContent = product.name;
        document.getElementById('modal-price').textContent = `Price: ${product.price}`;
        document.getElementById('modal-description').textContent = product.description;

        document.getElementById('product-modal').style.display = 'flex';
    }
}

// Close modal
function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}
