const btn = document.getElementById("loadBtn");
const container = document.getElementById("dataContainer");

function loadDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve("Дані завантажені успішно!");
      } else {
        reject("Сталася помилка при завантаженні!");
      }
    }, 2000);
  });
}

btn.addEventListener("click", () => {
  container.innerHTML = "Завантаження...";

  loadDataWithPromise()
    .then((result) => {
      container.innerHTML = `<p class="success">${result}</p>`;
    })
    .catch((error) => {
      container.innerHTML = `<p class="error">${error}</p>`;
    })
    .finally(() => {
      console.log("Promise завершено");
    });
});

async function loadDataAsync() {
  try {
    const result = await loadDataWithPromise();
    container.innerHTML = `<p class="success">${result}</p>`;
  } catch (err) {
    container.innerHTML = `<p class="error">${err}</p>`;
  }
}

async function loadUsers() {
  try {
    container.innerHTML = "Завантаження користувачів...";
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("HTTP error");

    const users = await response.json();
    const list = users.slice(0, 10);

    container.innerHTML = `
      <ul>
        ${list.map((user) => `<li>${user.name}</li>`).join("")}
      </ul>
    `;
  } catch (error) {
    container.innerHTML = `<p class="error">Не вдалося завантажити дані!</p>`;
  }
}

btn.addEventListener("click", loadUsers);
