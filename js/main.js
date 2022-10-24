// function scrollToID(id)
// {
//     document.getElementById(id).scrollIntoView(true);
// }

document.addEventListener('readystatechange', event => {
    if (event.target.readyState == "interactive")
    {
        populateProjects();
    }
})

function redirect(url)
{
    window.open(url, 'mywindow');
}

function populateProjects()
{
    var projectsData = document.getElementById("ProjectsData");
    const allProjects = projects["projects"];
    console.log(projectsData);
    console.log(allProjects);
    console.log(allProjects.length);

    for (var i = 0; i < allProjects.length; i++)
    {
        const project = allProjects[i];
        var topDiv = document.createElement("div");
        topDiv.setAttribute("onclick", `redirect('${allProjects[i]['link']}')`);

        var name = document.createElement("div");
        name.setAttribute("id", "Name");
        name.innerText = allProjects[i]['name'];

        var image = document.createElement("img");
        image.setAttribute("src", `${allProjects[i]['img']}`);

        var desc = document.createElement("div");
        desc.setAttribute("id", "Desc");
        desc.innerText = allProjects[i]['description'];

        topDiv.appendChild(name);
        topDiv.appendChild(image);
        topDiv.appendChild(desc);

        console.log(topDiv);

        projectsData.appendChild(topDiv);
    }

    console.log(projectsData);
}
