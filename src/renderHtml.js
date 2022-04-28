// Function to render html for Manager info
function renderManager(res) {
    return `
<div class="flex-none h-64 w-80 bg-white rounded-md drop-shadow-lg">
    <div class="h-1/3 text-white bg-sky-700 border-4 border-sky-600 rounded-t-md">
        <h2 class="text-2xl pt-2 pl-2">${res.getName()}</h2>
        <h3 class="text-xl text-center"><i class="fas fa-beer"></i> ${res.getRole()}</h3>
    </div>
    <div class="py-12 px-2">
        <p class="pb-1"><span class="font-bold">ID: </span> ${res.getID()}</p>
        <p class="pb-1"><span class="font-bold">Email: </span><a class="text-sky-600" id="link" name="email" href="mailto:${res.getEmail()}"> ${res.getEmail()}</a></p>
        <p class="pb-1"><span class="font-bold">Office number: </span> ${res.getOfficeNumber()}</p>
    </div>
</div>
`
}

// Function to render html for Engineer info
function renderEngineer(res) {
    return `
<div class="flex-none h-64 w-80 bg-white rounded-md drop-shadow-lg">
    <div class="h-1/3 text-white bg-sky-700 border-4 border-sky-600 rounded-t-md">
        <h2 class="text-2xl pt-2 pl-2">${res.getName()}</h2>
        <h3 class="text-xl text-center"><i class="fas fa-user-astronaut"></i> ${res.getRole()}</h3>
    </div>
    <div class="py-12 px-2">
        <p class="pb-1"><span class="font-bold">ID: </span>${res.getID()}</p>
        <p class="pb-1"><span class="font-bold">Email: </span><a class="text-sky-700" id="link" name="email" href="mailto:${res.getEmail()}"> ${res.getEmail()}</a></p>
        <p class="pb-1"><span class="font-bold">GitHub: </span><a class="text-sky-700" id="link" name="github" href="https://github.com/${res.getGithub()}" target="-blank">${res.getGithub()}</a></p>
    </div>
</div>
`
}

// Function to render html for Employee info
function renderEmployee(res) {
    return `
<div class="flex-none h-64 w-80 bg-white rounded-md drop-shadow-lg">
    <div class="h-1/3 text-white bg-sky-700 border-4 border-sky-600 rounded-t-md">
        <h2 class="text-2xl pt-2 pl-2">${res.getName()}</h2>
        <h3 class="text-xl text-center"><i class="fas fa-user"></i> ${res.getRole()}</h3>
    </div>
    <div class="py-12 px-2">
        <p class="pb-1"><span class="font-bold">ID: </span>${res.getID()}</p>
        <p class="pb-1"><span class="font-bold">Email: </span><a class="text-sky-700" id="link" name="email" href="mailto:${res.getEmail()}"> ${res.getEmail()}</a></p>
    </div>
</div>
`
}

// Function to render html for Intern info
function renderIntern(res) {
    return `
<div class="flex-none h-64 w-80 bg-white rounded-md drop-shadow-lg">
    <div class="h-1/3 text-white bg-sky-700 border-4 border-sky-600 rounded-t-md">
        <h2 class="text-2xl pt-2 pl-2">${res.getName()}</h2>
        <h3 class="text-xl text-center"><i class="fas fa-user-graduate"></i> ${res.getRole()}</h3>
    </div>
    <div class="py-12 px-2">
        <p class="pb-1"><span class="font-bold">ID: </span>${res.getID()}</p>
        <p class="pb-1"><span class="font-bold">Email: </span><a class="text-sky-700" id="link" name="email" href="mailto:${res.getEmail()}"> ${res.getEmail()}</a></p>
        <p class="pb-1"><span class="font-bold">School: </span>${res.getSchool()}</p>
    </div>
</div>
`
}

// Function adds role html to be displayed in the Team Profile
function renderTeam(data) {
    let team = '';
    data.forEach(obj => {``
        switch (obj.getRole()) {
            case 'Manager':
                team += renderManager(obj);
                break;
            case 'Engineer':
                team += renderEngineer(obj);
                break;
            case 'Employee':
                team += renderEmployee(obj);
                break;
            case 'Intern':
                team += renderIntern(obj);
                break;
        
            default:
                team = '';
                break;
        }
    })
    return team;
}

// Function renders html for the Team Profile
function renderHtml(data) {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&display=swap" rel="stylesheet">
    <style> body {font-family: 'Comfortaa', cursive;}</style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Team Profile</title>
</head>
<body>
    <header>
        <div class="flex justify-center items-center h-40 bg-rose-500 border-4 border-rose-600">
            <h1 class="text-7xl bg-white text-rose-600 font-light border-4 border-rose-600 rounded-md p-2 custom-h1">My Team</h1>
        </div>
    </header>

    <div class="container mx-auto my-20">
        <div class="flex flex-wrap gap-4 justify-center">

        ${renderTeam(data)}

        </div>
    </div>
</body>
</html>
`
}

module.exports = renderHtml;