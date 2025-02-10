const form = document.querySelector("form");
const box = document.querySelector(".box");
const inputs = document.querySelectorAll(".inputs");

let users = [];

const render = () => {
    box.innerHTML = users
        .map(
            (item) => `
    <div class="todo__blok">
        <div class="todo__content">
            <span>Title: </span>
            <h3 class="todo__title_style">${item.title}</h3>
        </div>
        <div class="todo__content">
            <span>Description: </span>
            <p class="todo__description_style">${item.description}</p>
        </div>
        <div class="todo__btn_box">
            <button id="${item.id}" class="edit_btn">Edit</button>
            <button id="${item.id}" class="delete_btn">Delete</button>
        </div>
    </div>
    `
        )
        .join("");
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let obj = {};
    for (const i of inputs) {
        obj[i.name] = i.value;
    }
    users.push({ ...obj, id: Date.now() });

    render();
});

box.addEventListener("click", (e) => {
    if (e.target.className == "delete_btn") {
        const yes_or_no = confirm("Do you want to delete?");
        if (yes_or_no) {
            users = users.filter((item) => item.id != e.target.id);
            render();
        }
        return;
    }
    if (e.target.className == "edit_btn") {
        const get_title = prompt("Enter Title");
        const get_description = prompt("Enter Description");
        users.map((item) => {
            if (item.id == e.target.id) {
                item.title = get_title;
                item.description = get_description;
            }
        });
        render();
    }
});

// btn

const body = document.querySelector("body");
const btn = document.querySelector(".btn");

function store(value) {
    localStorage.setItem("darkmode", value);
}

function load() {
    const darkmode = localStorage.getItem("darkmode");

    if (!darkmode) {
        store(false);
    } else if (darkmode == "true") {
        body.classList.add("darkmode");
    }
}

load();

btn.addEventListener("click", () => {
    body.classList.toggle("darkmode");

    store(body.classList.contains("darkmode"));
});
