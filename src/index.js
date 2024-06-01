import './style.css';

const Desc = document.getElementById("desc");
const Paras = document.createElement("div");
Paras.classList.add("text-format");

const Title = document.createElement("h1");
Title.classList.add("title");
Title.textContent += "Help my students succeed!"
Desc.appendChild(Title);

const Announcement = document.createElement("p");
Announcement.classList.add("home-para");
Announcement.textContent += "Hello friends! As many of you may know, I have worked for the past several months as a long-term substitute teacher in Denver. I am happy to announce that the school where I was stationed has taken me on for ’24/25 as a high school lead teacher in Computer Science and Media Arts! I am now preparing to teach my own curricula and build a program comparable to those which helped me to thrive and find passion in my own high school years not too long ago.";
Paras.appendChild(Announcement);

const Opening = document.createElement("p");
Opening.classList.add("home-para");
Opening.textContent += "I will be starting my first year of actually teaching (as opposed to being a substitute, para, or administrative staff) in a community with vast economic and financial difficulties. Many of the students I will serve come from Hispanic, Indigenous, and other minority communities. English literacy, access to supplies and daily meals, and consistent support are an issue for many of these students, and the school and our district dedicate as many resources as are available to supporting students accessing the same opportunities as their peers in more affluent districts. Schoolwide culture is also a leading issue, and I aim to ensure that my classroom is a safe, comfortable, and fun learning space for all students who walk through the door.";
Paras.appendChild(Opening);

const callToAction = document.createElement("p");
callToAction.classList.add("home-para");
callToAction.textContent += "I humbly ask for your help getting my students the supplies that they need and deserve to succeed, and to love the things they learn and create in my class. In order to donate, you can purchase items from the Amazon registry linked here; these items are sorted by how they will be used in the classroom, so you can choose how you’d like to support! If you’d like to support another way, I am also hoping to raise $200 to print and laminate custom anchor posters (which will be used to contain and display vocab words, syntax examples, and historical information), and to purchase paint for my classroom walls. There is no pressure to donate! If you’d like to share this with your community to help my students, please feel free! Thank you for your time, consideration, and support.";
Paras.appendChild(callToAction);
Desc.appendChild(Paras);

const Home = document.getElementById("home");
Home.addEventListener("click", function() {
    Desc.innerHTML = "";
    Paras.innerHTML = "";

    Paras.appendChild(Title);
    Paras.appendChild(Announcement);
    Paras.appendChild(Opening);
    Paras.appendChild(callToAction);
    Desc.appendChild(Paras);

});

const Classes = document.getElementById("details");
Classes.addEventListener("click", function() {
    Desc.innerHTML = "";
    Paras.innerHTML = "";

    const class1 = document.createElement("div");
    class1.classList.add("course");
    const CompSci = document.createElement("h1");
    CompSci.setAttribute("id", "comp-sci");
    CompSci.textContent += "Computer Science";
    class1.appendChild(CompSci);
    const CompSciDeets = document.createElement("p");
    CompSciDeets.setAttribute("id", "class-desc");
    CompSciDeets.textContent += "In Computer Science, students will follow a collaborative project-based curriculum to learn typing skills which are critical for nearly every field today; logic and problem-solving skills in coding languages such as HTML/CSS, JavaScript, and Python; and design skills commonly used in fields such as UX design, all to understand, greater utilize, and improve the technology they love and use every day.";
    class1.appendChild(CompSciDeets);
    Paras.appendChild(class1);

    const class2 = document.createElement("div");
    class2.classList.add("course");
    const MediaArts = document.createElement("h1");
    MediaArts.setAttribute("id", "media-arts");
    MediaArts.textContent += "Media Arts";
    class2.appendChild(MediaArts);
    const MediaArtsDeets = document.createElement("p");
    MediaArtsDeets.setAttribute("id", "class-desc");
    MediaArtsDeets.textContent += "In Media Arts, students will learn how many of the concepts and techniques learned in their English/Language Arts classes are frequently and masterfully applied and present in the writing behind their favorite films, video games, and music; how creative professionals such as actors, directors, cinematographers, designers for sound, lighting, set/costumes, and more expand upon these writing techniques in their audiovisual decisions and techniques; and how business and marketing professionals expand the impact and profitability of the work by making decisions to protect and rely on all of these creative decisions.";
    class2.appendChild(MediaArtsDeets);
    Paras.appendChild(class2);

    const Conclusion = document.createElement("div");
    Conclusion.classList.add("course");
    const BothDeets = document.createElement("p");
    BothDeets.setAttribute("id", "class-desc");
    BothDeets.textContent += "In both classes, students will have opportunities to see themselves and their communities in what they are learning, and to answer the question of “When/how will I use this after high school?” Computer Science students will even have the opportunity to collaborate with peers and members of their external community who operate local/independent businesses!";
    Conclusion.appendChild(BothDeets);
    const BackButton = document.createElement("button");
    BackButton.classList.add("link");
    BackButton.setAttribute("id", "back-button");
    BackButton.textContent += "Back to Home";
    BackButton.addEventListener("click", function() {
        Desc.innerHTML = "";
        Paras.innerHTML = "";
    
        Paras.appendChild(Title);
        Paras.appendChild(Announcement);
        Paras.appendChild(Opening);
        Paras.appendChild(callToAction);
        Desc.appendChild(Paras);
    
    });
    Conclusion.appendChild(BackButton);
    Paras.appendChild(Conclusion);
    Desc.appendChild(Paras);
})