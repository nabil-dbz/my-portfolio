// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Define the companies' descriptions table
const abouts = [
    'Google LLC is an American multinational technology company that\
    specializes in Internet-related services and products, which include\
    online advertising technologies, a search engine, cloud computing,\
    software, and hardware.',
    'Koç University is a non-profit private university in Istanbul, Turkey.\
    It started education in temporary buildings in İstinye in 1993, and\
    moved to its current Rumelifeneri campus near Sarıyer in 2000.\
     Koç University is ranked highest in Turkey according to the 2018 Times\
    Higher Education World University Rankings.',
    'The Polytechnique Montréal is an engineering school affiliated with the\
    Université de Montréal in Montreal, Quebec, Canada. It ranks first in\
    Canada for the scope of its engineering research.\
     It is occasionally referred to as Montreal Polytechnic, although in\
     Quebec English its French name is more commonly used.',
    'Youth Fusion is an award-winning charity that contributes to\
    perseverance, employability and civic engagement of youth by implementing\
     innovative experiential learning projects that create ongoing links\
     between school systems and the community.',
    'The Algiers STEAM Center strengthens the innovation, critical thinking,\
    and communication skills of the Algerian workforce via direct training of\
    youth, targeted teacher training, & community education forums & events.',
];

// Define my responsabilities during my experiences
const responsabilities = [
    [],
    [
        'Conducted a research on Rendering and Animating Large Point Clouds in\
         Unity3D as part of developing the digital twin of Koç University’s \
         Campus',
        'Effectively used the Shaders and Meshes to render and animate a large\
         number of Points with an interesting Frame Rate (depending on the \
         hardware characteristics)',
        'Fastly mastered the fundamentals of VR development, C# coding, and \
        Game development with Unity3D',
    ],
    [
        'Courses: Object Oriented Programming and Procedural Programming',
        'Prepared, tested and corrected assignments in C++ for freshman and \
        sophomore students',
        'Effectively analysed the students’ codes to give critical feedback \
        based on experience',
        'Provided very detailed explanation to both technical and theoretical \
        concepts in coding',
    ],
    [
        'Mentor primary and/or secondary school students in Lego Robotics',
        'Prepare the students to participate in FIRST Lego League',
        'Organise and implement different activities for students to help them\
         link their studies with the project and its impact on the world.',
    ],
    [
        'Managing & implementing the Algiers STEAM Center’s summer activities',
        'Planning, organising and supervising an intensive robotics training \
        for high school student',
        'Selecting, guiding and mentoring the team that participated in the \
        2018 FIRST Global Challenge',
        'Providing support in implementing new STEM regular workshops (Level \
        Up Village - Energy for me)',
        'Guiding & support to the mentors in delivering their workshops',
    ],
]

const ENTER_KEY = 13;

/**
 * Adds a random greeting to the page.
 */
function addRandomHobby() {
  const hobbies =
      ['Coding!', 'Maths!', 'Soccer！', 'Chess!', 'Neuroscience'];

  // Pick a random hobby.
  const hobby = hobbies[Math.floor(Math.random() * hobbies.length)];

  // Add it to the page.
  const hobbyContainer = document.getElementById('hobby-container');
  hobbyContainer.innerText = hobby;
}

// Intializing materialize components
document.addEventListener('DOMContentLoaded', function() {
    let element = document.querySelector('.carousel');
    M.Carousel.init(element, {
        dist: -100,
        padding: 0,
        numVisible: 5,
        fullWidth: false,
        indicators: false,
    });

    element = document.querySelector('.collapsible');
    M.Collapsible.init(element, {
        accordian: false,
    });

    loadQuestions();
});

// Update the experience description
function updateExperienceDescription(company) {
    // Get the text and title elements by id
    const description = document.getElementById('experience-description');
    const title = document.getElementById('experience-title');
    switch (company) {
        case 'Google':
            title.innerText = 'Google STEP Intern 2020';
            setExperienceDescription(description, 
                abouts[0], 
                responsabilities[0]);
            break;
        case 'Koc University':
            title.innerText = 'Koc University Undergraduate Reserach Program';
            setExperienceDescription(description, 
                abouts[1], 
                responsabilities[1]);
            break;
        case 'Polytechnique Montreal':
            title.innerText = 'Teaching Assistant 2019-2020';
            setExperienceDescription(description, 
                abouts[2], 
                responsabilities[2]);
            break;
        case 'Fusion Jeunesse':
            title.innerText = 'Robotics Coordinator 2018-2020'; 
            setExperienceDescription(description, 
                abouts[3], 
                responsabilities[3]);
            break;
        case 'World Learning':
            title.innerText = 'STEM Education Intern 2018';
            setExperienceDescription(description, 
                abouts[4], 
                responsabilities[4]);
            break;
    }
}

function setExperienceDescription(description, about, responsabilitiesTable) {
    description.innerHTML = '';
    const company = document.createElement('p');
    company.innerText = about;
    description.appendChild(company);
    let responsibilitiesList = document.createElement('ul');
    for (let i = 0; i < responsabilitiesTable.length; i++) {
        addListItem(responsabilitiesTable[i], responsibilitiesList);
    }
    description.appendChild(responsibilitiesList);
}

function addListItem(text, nodeParent) {
    const item = document.createElement('li');
    item.classList.add('left-align');
    item.style.fontSize = '18px';
    item.innerText = text;
    nodeParent.appendChild(item);
}

function onKeyDown(event) {
    if (event.keyCode !== ENTER_KEY) {
        return;
    }
    event.preventDefault();
    var text = document.getElementById('askme-input');
    var form = document.getElementById('my-form');
    createMessage(text.value);
    form.submit();
    text.value = '';
}

function createMessage(message) {
    var question = document.createElement('div');
    question.classList.add('card-panel');
    question.style.width = '88%';
    question.style.marginLeft = '10%';
    question.style.marginRight = '2%';
    question.style.padding = '5%';
    question.style.backgroundColor = 'lightblue';
    question.innerText = message;
    var questionsSection = document.getElementById('questions-answers');
    questionsSection.appendChild(question);
}

function loadQuestions() {
    fetch('/list-questions').then(response => response.json()).then((questions) => {
        questions.forEach((question) => {
            createMessage(question.message);
        });
    });
}
