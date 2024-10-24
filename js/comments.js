// Số lượng lời chúc trên mỗi trang
const wishesPerPage = 5;
let currentPage = 1;

// Function to save wish to localStorage
function saveWish(name, message) {
    const wishes = JSON.parse(localStorage.getItem('wishes')) || [];
    wishes.push({ name, message });
    localStorage.setItem('wishes', JSON.stringify(wishes));
}

// Function to display wishes with pagination
function displayWishes(page = 1) {
    const wishesContainer = document.getElementById('wishes-container');
    wishesContainer.innerHTML = ''; // Clear the container before adding

    const wishes = JSON.parse(localStorage.getItem('wishes')) || [];

    // Đảo ngược thứ tự của lời chúc để hiển thị từ mới đến cũ
    wishes.reverse();

    // Tính toán số trang
    const totalPages = Math.ceil(wishes.length / wishesPerPage);

    // Lấy lời chúc tương ứng với trang hiện tại
    const startIndex = (page - 1) * wishesPerPage;
    const endIndex = startIndex + wishesPerPage;
    const wishesToShow = wishes.slice(startIndex, endIndex);

    // Hiển thị các lời chúc
    wishesToShow.forEach(wish => {
        const wishElement = document.createElement('div');
        wishElement.classList.add('message');
        wishElement.innerHTML = `
            <strong>${wish.name}</strong>
            <p>${wish.message}</p>
        `;
        wishesContainer.appendChild(wishElement);
    });

    // Hiển thị điều hướng phân trang
    displayPagination(totalPages);
}

// Function to display pagination controls
function displayPagination(totalPages) {
    const paginationContainer = document.getElementById('pagination-container');
    paginationContainer.innerHTML = ''; // Clear the pagination

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = i;
        pageButton.classList.add('page-btn');
        if (i === currentPage) {
            pageButton.classList.add('active');
        }

        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayWishes(currentPage);
        });

        paginationContainer.appendChild(pageButton);
    }
}

// When the form is submitted, save the wish and display it
document.getElementById('wish-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Save the wish
    saveWish(name, message);

    // Clear the form inputs
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';

    // Display updated wishes
    displayWishes(currentPage);
});

// Display existing wishes when the page loads
window.onload = function() {
    displayWishes(currentPage);
};
