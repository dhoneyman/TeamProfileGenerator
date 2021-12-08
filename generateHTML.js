function employeeCards(employees){

  let cardStr = '';
  employees.forEach((employee) => {
  let role = employee.getRole();
  console.log(employee.getRole())
  if (role === "Engineer") { cardStr += `
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
            <li class="github list-group-item">Github: <a href='${employee.github}'></li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
    </div>`;
}
  if (role === "Manager") { cardStr += `
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
            <li class="office list-group-item">Office Number: ${employee.officeNumber}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
    </div>`;
  }
  if (role === "Intern") { cardStr += `
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
            <li class="school list-group-item">School: ${employee.school}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
    </div>`;}

  })
  return cardStr;
}


function generateHTML(employees) {
    return (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"> -->
        <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>TeamMemberGenerator</title>
    
    </head>
      <body>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <span class="navbar-brand mb-0 h1">TEAM DREAMTEAM</span>
            </div>
          </nav>
          <div class='parent-div'>
      ${employeeCards(employees)}

          </div>
              <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script></html>
              <script src='./index.js'></script>
      </body>
    </html>`

    )}


module.exports = generateHTML;