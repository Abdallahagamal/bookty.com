document.getElementById("updateButton").addEventListener("click", function() {
    let newTitle = document.getElementById("title").value;
    let newAuthor = document.getElementById("author").value;
    let newCategory = document.getElementById("category").value;
    let newDescription = document.getElementById("description").value;
    let newCover = document.getElementById("cover").value;

    localStorage.setItem("bookTitle3", newTitle);
    localStorage.setItem("bookAuthor3", newAuthor);
    localStorage.setItem("bookcate3", newCategory);
    localStorage.setItem("bookdecription3", newDescription);
    localStorage.setItem("bookImage3", newCover);

    alert("Book information has been saved to localStorage!");
    console.log("Saved new book data:", {
        title: newTitle,
        author: newAuthor,
        category: newCategory,
        description: newDescription,
        cover: newCover
    });
});