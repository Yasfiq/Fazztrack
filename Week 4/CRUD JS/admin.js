fetcher('GET','Users').then(res => {
        let dataUsers = '';
        res.forEach((data,i) => {
            dataUsers += `<tr>
            <td>${i+1}</td>
            <td data="name">${data.name}</td>
            <td data="username">${data.username}</td>
            <td data="email">${data.email}</td>
            <td><img src="https://picsum.photos/30${i+1}" alt="pp" /></td>
            <td><button class="delete-btn" data-id="${data.id}">Delete</button> | <button class="update-btn" data-id="${data.id}">Update</button></td>
          </tr>`
        });
        const tableHeader = `<tr>
            <th>NO</th>
            <th>NAME</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>PHOTO PROFILE</th>
            <th>ACTION</th>
          </tr>`
        const tableContainer = document.querySelector('.table-container');
        if (dataUsers == []) {
            const tableDefault = `<tr>
            <td>0</td>
            <td>example</td>
            <td>example123</td>
            <td>example@gmail.com</td>
            <td><img src="https://picsum.photos/300" alt="pp" /></td>
            <td><button>Delete</button> | <button>Delete</button></td>
          </tr>`
          tableContainer.innerHTML = tableHeader+tableDefault;
        } else {
            tableContainer.innerHTML = tableHeader+dataUsers;
        }
    })
    .catch(error => console.log(error))

// Event Binding
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        let id = e.target.getAttribute('data-id');
        if (confirm("Anda yakin ingin menghapus?")) {
            fetcher("DELETE", "Users", id);
            setTimeout(() => {
                alert("Berhasil menghapus data user!");
                location.reload()
            },500)
        }
    } else if (e.target.classList.contains('update-btn')) {
        showValue(e.target)
        let id = e.target.getAttribute('data-id');
        updateData(id);
    } else if (e.target.classList.contains('cancel-btn')) {
        const showModal = document.querySelector('.modal-container');
        showModal.style.display = "none";
    }
})

function showModalUpdate (name, username, email) {
    const showModal = document.querySelector('.modal-container');
    showModal.style.display = "flex";
    const nameInput = document.querySelector('.name')
    const usernameInput = document.querySelector('.username')
    const emailInput = document.querySelector('.email');
    nameInput.setAttribute('value', name);
    usernameInput.setAttribute('value', username);
    emailInput.setAttribute('value', email);
}

function updateData (id) {
    const formEl = document.querySelector(".form");

      formEl.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(formEl);
        const data = new URLSearchParams(formData);

        fetcher("PUT", "Users", data, id);
        setTimeout(() => {
          alert("Data berhasil diubah!");
          window.location.href = "admin.html";
        }, 500);
      });
}

function showValue (element) {
    const tr = element.parentElement.parentElement;
    const name = tr.querySelector('[data=name]').textContent;
    const username = tr.querySelector('[data=username]').textContent;
    const email = tr.querySelector('[data=email]').textContent;
    showModalUpdate(name, username, email);
}