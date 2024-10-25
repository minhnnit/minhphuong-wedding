const { createClient } = supabase;
const _supabase = createClient('https://xgzuqysjjhhcpkozcmrt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnenVxeXNqamhoY3Brb3pjbXJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk1NzIwOTYsImV4cCI6MjA0NTE0ODA5Nn0.RNoMmSbE8MU_CVmAu2tFB4i9Z47S0dwfIJud7sahdXg');

let currentPage = 1;
const itemsPerPage = 5;

// Hàm để thêm dữ liệu vào bảng với cột name và comment
async function insertComment(name, comment) {
  const { data, error } = await _supabase
    .from('comments')
    .insert([{ name: name, comment: comment }]);

  if (error) {
    console.error('Lỗi khi thêm dữ liệu:', error);
  } else {
    console.log('Dữ liệu đã được thêm:', data);
    showComments(); // Hiển thị lại các bình luận sau khi thêm
  }
}

// Hàm để lấy và hiển thị tất cả dữ liệu từ bảng comments
async function showComments() {
  const { data: comments, error } = await _supabase
    .from('comments')
    .select('*');

  if (error) {
    console.error('Lỗi khi lấy dữ liệu:', error);
    return;
  }

  const totalComments = comments.length; // Tổng số bình luận
  const totalPages = Math.ceil(totalComments / itemsPerPage); // Tính số trang
  const startIndex = (currentPage - 1) * itemsPerPage; // Chỉ số bắt đầu
  const endIndex = startIndex + itemsPerPage; // Chỉ số kết thúc

  const commentList = document.getElementById('comment-list');
  commentList.innerHTML = ''; // Xóa nội dung cũ

  // Hiển thị các bình luận cho trang hiện tại
  comments.slice(startIndex, endIndex).forEach((item) => {
    const wishElement = document.createElement('div');
    wishElement.classList.add('message');
    wishElement.innerHTML = `
      <strong>${item.name}</strong>
      <p>${item.comment}</p>
    `;
    commentList.appendChild(wishElement);
  });

  // Hiển thị các nút phân trang
  displayPagination(totalPages);
}

// Hàm để hiển thị các nút phân trang
function displayPagination(totalPages) {
  const paginationContainer = document.getElementById('pagination-container');
  paginationContainer.innerHTML = ''; // Xóa nội dung cũ

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.classList.add('page-btn');
    if (i === currentPage) {
            button.classList.add('active');
        }
    button.addEventListener('click', () => {
      currentPage = i; // Cập nhật trang hiện tại
      showComments(); // Hiển thị bình luận cho trang hiện tại
    });
    paginationContainer.appendChild(button);
  }
}

// Xử lý form gửi bình luận
const form = document.getElementById('wish-form'); // Sửa thành id của form mới
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nameInput = document.getElementById('name-input');
  const commentInput = document.getElementById('comment-input');
  const name = nameInput.value;
  const comment = commentInput.value;

  await insertComment(name, comment);

  nameInput.value = '';
  commentInput.value = '';
});

// Hiển thị danh sách bình luận khi tải trang
window.onload = showComments;
