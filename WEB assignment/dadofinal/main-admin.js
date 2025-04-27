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
        console.log("No selected ID found to update.");
        return;
    }

    var row = document.querySelector('tr[date-id="' + selectedId + '"]');
    if (!row) {
        console.log("Row not found for ID:", selectedId);
        return;
    }

    let newTitle = localStorage.getItem("bookTitle3");
    let newAuthor = localStorage.getItem("bookAuthor3");
    let newCategory = localStorage.getItem("bookcate3");

    if (newTitle && newAuthor && newCategory) {
        // تحديث خلايا الجدول
        row.children[0].textContent = newTitle;
        row.children[1].textContent = newAuthor;
        row.children[2].textContent = newCategory;
        console.log("Row updated successfully.");
    } else {
        console.log("No new data found to update the row.");
    }
    
}