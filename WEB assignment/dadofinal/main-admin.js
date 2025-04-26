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