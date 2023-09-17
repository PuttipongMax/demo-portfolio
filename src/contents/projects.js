import { faGithub, faMedium, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import imgResume from "../assets/imgResume.png"

export const data = [
    {
        date: "2022-2023",
        title: "Resume_1",
        link: "https://www.google.com",
        materials: [
            { type: faGithub, link: "https://www.google.com"}, 
            { type: faMedium, link: "https://www.google.com"},
            { type: faLinkedin, link: "https://www.google.com"},
        ],
        descriptions: [
            "The resume was made for looking jobs with use react, javascript and tailwinds",
            "The resume has reference from github and linkedin The resume was made for looking jobs with use react"
        ],
        skills: [
            ["React", "Tailwinds", "Bootstrap"],
            ["Express.js", "MongoDb", "ProgresQL"]
        ],
        picture: imgResume
    },
    {
        date: "2019-2020",
        title: "Resume_2",
        link: "",
        materials: [
            { type: faGithub, link: "https://www.google.com"}, 
            { type: faMedium, link: "https://www.google.com"},
            { type: faLinkedin, link: "https://www.google.com"},
        ],
        descriptions: [
            "The resume was made for looking jobs with use react, javascript and tailwinds",
            "The resume has reference from github and linkedin"
        ],
        skills: [
            ["React", "Tailwinds" ],
            ["Express.js", "MongoDb", "ProgresQL"]
        ],
        picture: imgResume
    },
    {
        date: "2021-2022",
        title: "Resume_3",
        link: "",
        materials: [ { type: faGithub, link: "https://www.google.com"} ],
        descriptions: [
            "The resume was made for looking jobs with use react, javascript and tailwinds",
            "The resume was made for looking jobs with use react, javascript and tailwinds. The resume has reference from github and linkedin"
        ],
        skills: [
            ["React", "Tailwinds" ],
            ["Express.js", "MongoDb", "ProgresQL"]
        ],
        picture: imgResume
    }
]
