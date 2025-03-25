
import{ projectsInfo } from "./projects.js"

const next = document.getElementById("next")
const back = document.getElementById("back")
const projects = document.getElementById("projects")

const gap = 30
const width = projects.offsetWidth

document.addEventListener("DOMContentLoaded", event => {
    projectsInfo.forEach(project => {
        const container = document.createElement("div")
        container.classList.add("project-card")

        const title = document.createElement("h3")
        title.innerText = project.projectName
        title.classList.add("project-title")

        const image = document.createElement("img")
        image.src = project.projectImage
        image.classList.add("project-image")

        const desc = document.createElement("p")
        desc.innerText = project.projectDesc
        desc.classList.add("project-text")

        const githubLink = document.createElement("a")
        githubLink.href - project.projectLink
        githubLink.innerText = "Link"
        githubLink.classList.add("project-link")

        container.append(image)
        container.append(title)
        container.append(desc)
        container.append(githubLink)

        projects.append(container)





    });
})

next.addEventListener("click", event => {
    width = projects.offsetWidth
    projects.scrollBy(width + gap, 0)
})

next.addEventListener("click", event => {
    width = projects.offsetWidth
    projects.scrollBy(-(width + gap), 0)
})

//---------------------------------------------------------

const drawerItems = document.querySelectorAll(".info-wrapper")
const drawerAnswers = document.querySelectorAll(".answer")

drawerItems.forEach(item => {
    const question = item.querySelector('.question')
    const answer = item.querySelector('.answer')

    question.addEventListener("click", () => {


        let open = answer.classList.contains('open')
        drawerAnswers.forEach(answer => (answer.classList.remove('open')))

        if(!open){
            answer.classList.add('open')
        }
    })

})

