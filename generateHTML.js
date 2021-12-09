function employeeCards(employees){

  let cardStr = '';
  employees.forEach((employee) => {
  let role = employee.getRole();
  console.log(employee.getRole())
  if (role === "Engineer") { cardStr += `
<div class='col mb-5'>
  <div class="card shadow-lg" style="width: 18rem;">
      <div class="card-body bg-info rounded">
          <h5 class="name">${employee.name}</h5>
          <i class="fas fa-laptop-code"></i>
          <h6 class="postition">Engineer</h6>
      </div>
      <ul class="list-group list-group-flush">
          <li class="employee-id list-group-item">ID: ${employee.id}</li>
          <li class="email list-group-item">Email: <a href='mailto:${employee.email}'>${employee.email}</a></li>
          <li class="github list-group-item">GitHub: <a href='${employee.github}'>${gitHubUrl(employee.github)}</a></li>
      </ul>
  </div>
</div>
    `;
}
  if (role === "Manager") { cardStr += `
<div class='col mb-5'>
 <div class="card shadow-lg" style="width: 18rem;">
  <div class="card-body bg-info rounded">
    <h5 class="name">${employee.name}</h5>
    <h6 class="postition">Manager</h6>
    <i class="fas fa-phone-volume"></i>
  </div>
   <ul class="list-group list-group-flush">
    <li class="employee-id list-group-item">ID: ${employee.id}</li>
    <li class="email list-group-item">Email: <a href='mailto:${employee.email}'>${employee.email}</a></li>
    <li class="office list-group-item">Office Number: ${employee.officeNumber}</li>
   </ul>
  </div>
</div>
    `;
  }
  if (role === "Intern") { cardStr += `
  <div class='col mb-5'>
    <div class="card shadow-lg" style="width: 18rem;">
      <div class="card-body bg-info rounded">
        <h5 class="name">${employee.name}</h5>
        <h6 class="postition">Intern</h6>
        <i class="fas fa-user-graduate"></i>
      </div>
      <ul class="list-group list-group-flush">
        <li class="employee-id list-group-item">ID: ${employee.id}</li>
        <li class="email list-group-item">Email: <a href='mailto:${employee.email}'>${employee.email}</a></li>
        <li class="school list-group-item">School: ${employee.school}</li>
      </ul>
    </div>
  </div>
    `;}

  })
  return cardStr;
}


function generateHTML(employees) {
    return (`
    <!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/143a60dc13.js" crossorigin="anonymous"></script>


    <title>TEAM DREAMTEAM</title>
</head>

<body>
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">TEAM DREAMTEAM</span>
        </div>
    </nav>

    <div class='container mt-5'>
        <div class='row'>
            ${employeeCards(employees)}
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
    <script src='index.js'></script>
</body>

</html>`

    )}

    function gitHubUrl(input){
      return input.slice(19);
    }


module.exports = generateHTML;