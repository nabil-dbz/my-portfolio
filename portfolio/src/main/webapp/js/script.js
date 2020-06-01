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
    'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.',
    'Koç University is a non-profit private university in Istanbul, Turkey. It started education in temporary buildings in İstinye in 1993, and moved to its current Rumelifeneri campus near Sarıyer in 2000.\
     Koç University is ranked highest in Turkey according to the 2018 Times Higher Education World University Rankings.',
    'The Polytechnique Montréal is an engineering school affiliated with the Université de Montréal in Montreal, Quebec, Canada. It ranks first in Canada for the scope of its engineering research.\
     It is occasionally referred to as Montreal Polytechnic, although in Quebec English its French name is more commonly used.',
    'Youth Fusion is an award-winning charity that contributes to perseverance, employability and civic engagement of youth by implementing\
     innovative experiential learning projects that create ongoing links between school systems and the community.',
    'The Algiers STEAM Center strengthens the innovation, critical thinking, and communication skills of the Algerian workforce via direct training of youth,\
     targeted teacher training, and community education forums and events.',
];

// Define my responsabilities during my experiences
const responsabilities = [
    [],
    [
        'Conducted a research on Rendering and Animating Large Point Clouds in Unity3D as part of developing the digital twin of Koç University’s Campus',
        'Effectively used the Shaders and Meshes to render and animate a large number of Points with an interesting Frame Rate (depending on the hardware characteristics)',
        'Fastly mastered the fundamentals of VR development, C# coding, and Game development with Unity3D',
    ],
    [
        'Courses: Object Oriented Programming and Procedural Programming',
        'Prepared, tested and corrected assignments in C++ for freshman and sophomore students',
        'Effectively analysed the students’ codes to give critical feedback based on experience',
        'Provided very detailed explanation to both technical and theoretical concepts in coding',
    ],
    [
        'Mentor primary and/or secondary school students in Lego Robotics',
        'Prepare the students to participate in FIRST Lego League',
        'Organise and implement different activities for students to help them link their studies with the project and its impact on the world.',
    ],
    [
        'Managing and implementing the Algiers STEAM Center’s summer activities',
        'Planning, organising and supervising an intensive robotics training for high school student',
        'Selecting, guiding and mentoring the team that participated in the 2018 FIRST Global Challenge',
        'Providing support in implementing new STEM regular workshops (Level Up Village - Energy for me)',
        'Providing guidance and support to the mentors in delivering their workshops',
    ],
]

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

// Intializing the carousel
document.addEventListener('DOMContentLoaded', function() {
    var elem = document.querySelector('.carousel');
    M.Carousel.init(elem, {
        dist: -100,
        padding: 0,
        numVisible: 5,
        fullWidth: false,
        indicators: false,
    });
});

// Update the experience description
function updateExperienceDescription(company) {
    // Get the text and title elements by id
    var description = document.getElementById('experience-description');
    var title = document.getElementById('experience-title');
    switch (company) {
        case 'Google':
            title.innerText = 'Google STEP Intern 2020';
            setExperienceDescription(description, abouts[0], responsabilities[0]);
            break;
        case 'Koc University':
            title.innerText = 'Koc University Undergraduate Reserach Program 2019';
            setExperienceDescription(description, abouts[1], responsabilities[1]);
            break;
        case 'Polytechnique Montreal':
            title.innerText = 'Teaching Assistant 2019-2020';
            setExperienceDescription(description, abouts[2], responsabilities[2]);
            break;
        case 'Fusion Jeunesse':
            title.innerText = 'Robotics Coordinator 2018-2020'; 
            setExperienceDescription(description, abouts[3], responsabilities[3]);
            break;
        case 'World Learning':
            title.innerText = 'STEM Education Intern 2018';
            setExperienceDescription(description, abouts[4], responsabilities[4]);
            break;
    }
}

function setExperienceDescription(description, about, responsabilitiesTable) {
    description.innerHTML = '';
    var company = document.createElement('p');
    company.innerText = about;
    description.appendChild(company);
    var responsibilitiesList = document.createElement('ul');
    for (var i = 0; i < responsabilitiesTable.length; i++) {
        addListItem(responsabilitiesTable[i], responsibilitiesList);
    }
    description.appendChild(responsibilitiesList);
}

function addListItem(text, nodeParent) {
    var item = document.createElement('li');
    item.innerText = text;
    nodeParent.appendChild(item);
}

// This function gets called once the start button is clicked
function onStart() {
    // Change the text inside the button
    var button = document.getElementById('start-button');
    if (button !== undefined) {
        button.innerText = 'Try Again!';
    }
    var newGame = document.getElementById('game-field');
    // Create a new field for the game
    if (newGame === null) {
        newGame = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        newGame.id = 'game-field';
        var gameComponent = document.getElementById('memory-game');
        gameComponent.insertBefore(newGame, button);
    }
    createNewGame(newGame);
}

// Generate the elements of the game field
function createNewGame(parentNode) {
    parentNode.appendChild(createGreenCricle('10', '10'));
}

// Generate a green circle and return it
function createGreenCricle(cx, cy) {
    var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', '10');
    circle.setAttribute('stroke-width', '0');
    circle.setAttribute('fill', 'green');
    return circle;    
}
