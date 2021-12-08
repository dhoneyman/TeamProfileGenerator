function generateHTML(employees) {
  employees.forEach((employee) => {
    let role = employee.role;
    if (role === "Engineer") {
      return `
    <div class='container-fluid'>
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="name">${employee.name}</h5>
              <h6 class="postition">Position</h6>
            </div>
            <ul class="list-group list-group-flush">
              <li class="employee-id list-group-item">ID: ${employee.id}</li>
              <li class="email list-group-item">Email: ${employee.email}</li>
              <li class="github list-group-item">Github: ${employee.github}</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
      </div>`;
    }
    if (role === "Manager") {
      return `
    <div class='container-fluid'>
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="name">${employee.name}</h5>
              <h6 class="postition">Position</h6>
            </div>
            <ul class="list-group list-group-flush">
              <li class="employee-id list-group-item">ID: ${employee.id}</li>
              <li class="email list-group-item">Email: ${employee.email}</li>
              <li class="github list-group-item">Github: ${employee.officeNumber}</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
      </div>`;
    }
    if (role === "Intern") {
      return `
    <div class='container-fluid'>
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="name">${employee.name}</h5>
              <h6 class="postition">Position</h6>
            </div>
            <ul class="list-group list-group-flush">
              <li class="employee-id list-group-item">ID: ${employee.id}</li>
              <li class="email list-group-item">Email: ${employee.email}</li>
              <li class="github list-group-item">Github: ${employee.school}</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
      </div>`;
    }
  });
  return `
    `;
}
