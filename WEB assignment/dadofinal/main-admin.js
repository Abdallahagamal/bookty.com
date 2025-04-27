document.addEventListener("DOMContentLoaded", function () {
    const deleteButtons = document.querySelectorAll(".btn-danger");

    deleteButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            const row = button.closest("tr");


            const bookId = row.getAttribute("date-id");

            if (row && bookId) {

                row.remove();


                let deletedBooks = JSON.parse(localStorage.getItem("deletedBooks") || "[]");
                if (!deletedBooks.includes(bookId)) {
                    deletedBooks.push(bookId);
                    localStorage.setItem("deletedBooks", JSON.stringify(deletedBooks));
                }


                alert("Book deleted successfully!");
            }
        });
    });
});
function storeId(editButton) {
    // نطلع على الأب (tr) عشان ناخد الـ data-id
    var row = editButton.closest('tr');
    var id = row.getAttribute('date-id');
    
    // نخزنها في localStorage
    localStorage.setItem('selectedRowId', id);
    console.log(id); // للتأكد من الـ id المحفوظ

}
window.addEventListener('DOMContentLoaded', function() {
    updateTableRow();
});

function updateTableRow() {
    var selectedId = localStorage.getItem('selectedRowId');
    if (!selectedId) {
        console.log("No selected ID to update.");
        return;
    }

    var row = document.querySelector('tr[date-id="' + selectedId + '"]');
    if (!row) {
        console.log("Row not found for ID:", selectedId);
        return;
    }

    // نقرأ بيانات الكتاب من localStorage
    let bookDataJSON = localStorage.getItem('book_' + selectedId);
    if (bookDataJSON) {
        let bookData = JSON.parse(bookDataJSON);

        // تحديث خلايا الجدول
        row.children[0].textContent = bookData.title;
        row.children[1].textContent = bookData.author;
        row.children[2].textContent = bookData.category;

        console.log("Row updated successfully with new book data.");
    }
}



//****************add code AE*****************************//

let tbody = document.querySelector("tbody");

function loadBooks(){
    let books = JSON.parse(localStorage.getItem("books")) || [];
    //tbody.innerHTML = ""; // يمسح القديم ويبدأ من جديد

    books.forEach(book => {
        let tr = document.createElement("tr");
        tr.setAttribute("date-id", book.id);

        tr.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td class="actions">
                <a href="#" class="btn edit-btn">Edit</a>
                <a href="#" class="btn btn-danger delete-btn">Delete</a>
            </td>
        `;

        tbody.appendChild(tr);
    });  
    }

    loadBooks();