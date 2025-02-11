// dummyjson.com domendan malumotlarni olib kelish

// const box = document.querySelector(".box");

// const render = (data) => {
//     box.innerHTML = data
//         .map(
//             (item) => `
//         <h1>${item.title}</h1>
//     `
//         )
//         .join("");
// };

// const getAllDAta = async () => {
//     try {
//         controller = new AbortController();
//         setTimeout(() => {
//             controller.abort();
//         }, 1000);
//         const res = await fetch("https://dummyjson.com/products", {
//             signal: controller.signal,
//         });
//         const data = await res.json();
//         render(data.products);
//     } catch (error) {
//         if (error.name == "AbortError") {
//             box.innerHTML = "<h1>Response is aborted.</h1>";
//         }
//         console.log(error);
//     }
// };

// getAllDAta();

//////////////////////////////////////////////////////////////////////////////////////////////////////

// local serverdan  dan malumotlarni olib keishl

// const box = document.querySelector(".box");
// const create_btn = document.querySelector(".create_btn");
// const item = document.querySelector(".item");
// const edit_btn = document.querySelector(".edit_btn");

// const render = (data) => {
//     box.innerHTML = data
//         .map(
//             (item) => `
//     <div class="item">
//         <h1>${item.name}</h1>
//         <button id="${item.id}" class="delete_btn">Delete</button>
//         <button id="${item.id}" class="edit_btn">Edit</button>
//     </div>
//     `
//         )
//         .join("");
// };

// const getData = async () => {
//     try {
//         const res = await fetch("http://localhost:3600/user");
//         const data = await res.json();

//         render(data);
//     } catch (error) {
//         alert(error.message);
//     }
// };

// getData();

// create_btn.addEventListener("click", async () => {
//     try {
//         const create_input = document.querySelector(".create_input");
//         if (create_btn) {
//             await fetch("http://localhost:3600/user", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ name: create_input.value }),
//             });

//             getData();
//         }
//     } catch (error) {
//         alert(error.message);
//     }
// });

// box.addEventListener("click", async (e) => {
//     try {
//         if (e.target.classList == "delete_btn") {
//             await fetch(`http://localhost:3600/user/${e.target.id}`, {
//                 method: "DELETE",
//             });
//             getData();
//         }
//     } catch (error) {
//         console.log(error.message);
//     }
// });

// box.addEventListener("click", async (e) => {
//     try {
//         if (e.target.classList == "edit_btn") {
//             const newName = prompt("Enter new name");
//             await fetch(`http://localhost:3600/user/${e.target.id}`, {
//                 method: "PATCH",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ name: newName }),
//             });
//             getData();
//         }
//     } catch (error) {
//         console.log(error.message);
//     }
// });
