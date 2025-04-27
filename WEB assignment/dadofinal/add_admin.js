// admin_add.js

document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let category = document.getElementById("category").value;
    let description = document.getElementById("description").value;
    let cover = document.getElementById("cover").value;
    let pdf = document.getElementById("pdf").value; // هنعتبره اسم الفايل مش رابط

    let books = JSON.parse(localStorage.getItem("books")) || [];

    // بنولد ID عشوائي بسيط
    let id = "row" + (books.length + 31);
    

    books.push({
        id,
        title,
        author,
        category,
        description,
        cover,
        pdf
    });

    localStorage.setItem("books", JSON.stringify(books));
    

    alert("Book added successfully!");
    window.location.href = "main-admin.html"; // يرجعه للادمن بيج
    
});