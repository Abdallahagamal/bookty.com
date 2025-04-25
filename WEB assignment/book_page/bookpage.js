document.addEventListener("DOMContentLoaded", () => {
    const title = localStorage.getItem("bookTitle");
    const image = localStorage.getItem("bookImage");
    const cate = localStorage.getItem("bookcate");

    if (title) {
        let titleEl = document.querySelector(".book-title");
        if (titleEl) titleEl.textContent = title;
    }

    if (image) {
        let bookCoverEl = document.querySelector(".book-cover");
        if (bookCoverEl) bookCoverEl.src = '../dadofinal/' + image;

        let topBox = document.querySelector(".top-box");
        if (topBox) topBox.style.backgroundImage = `url('../dadofinal/${image}')`;
    }
    if (cate) {
        let cateEl = document.querySelector(".type-book");
        if (cateEl) cateEl.textContent = cate;
    }
    localStorage.clear();

});
