fetch('https://jsonplaceholder.typicode.com/users',)
    .then(response => response.json())
    .then(response => {
        let field = '';
        response.forEach((data, i) => {
            field += `<tr>
            <td>${i+1}</td>
            <td>${data.name}</td>
            <td>${data.username}</td>
            <td>${data.email}</td>
            <td>${data.address.street} ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}</td>
            <td>${data.phone}</td>
            <td>${data.website}</td>
            <td>${data.company.name}</td>
          </tr>`
        });
        const header = `<tr class="row-header">
        <th>ID</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Website</th>
        <th>Company</th>
      </tr>`
        const tableContainer = document.querySelector('.table-datas');
        tableContainer.innerHTML = header+field;
    });