function handleClick(element) {
    // Get the book title and image source
    let newTitle = element.getAttribute("data-title");
    let newImage = element.getAttribute("src");
    let newcate = element.getAttribute("data-cate");

    // Save them in localStorage
    localStorage.setItem("bookTitle", newTitle);
    localStorage.setItem("bookImage", newImage);
    localStorage.setItem("bookcate", newcate);
    // Go to the book page
    window.location.href = '../book_page/bookpage.html';
}
