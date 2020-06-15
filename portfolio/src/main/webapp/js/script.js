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
const RIGHT_CLICK = 2;
let questionLoadCount = 2;
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

    element = document.querySelector('.modal');
    M.Modal.init(element, {
        opacity: 1,
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

function onSendClick() {
    const form = document.getElementById('my-form');
    form.submit();
}
// This function creates a message
function createMessage(id, message, isQuestion, imageUrl) {
    const question = document.createElement('div');
    question.classList.add('card-panel');
    question.id = isQuestion ? id + 'q' : id + 'a';
    question.style.width = '88%';
    question.style.marginLeft = isQuestion ? '10%' : '2%';
    question.style.marginRight = isQuestion ? '2%' : '10%';
    question.style.padding = '5%';
    question.style.backgroundColor = isQuestion ? 'lightblue' : 'lightgreen';
    question.appendChild(createText(message));
    question.addEventListener('mousedown', onMessageClicked);
    question.ondblclick = onMessageDoubleClicked;
    if (imageUrl !== '' && isQuestion) {
        question.appendChild(createImage(imageUrl));
    }
    const questionsSection = document.getElementById('questions-answers');
    questionsSection.appendChild(question);
}
// This function returns a text element with the innerText text
function createText(text) {
    const textElement = document.createElement('p');
    textElement.innerText = text;
    textElement.style.margin = '0';
    return textElement;
}
// This function returns an image node to be added to the DOM
function createImage(imageUrl) {
    const image = document.createElement('img');
    image.style.width = '90%';
    image.src = imageUrl;
    return image;
}
// This function deletes the clicked message 
function onMessageClicked(event) {
    if (event.button == RIGHT_CLICK) {
        event.preventDefault();
        questionId = event.currentTarget.id.substr(0, event.currentTarget.id.length - 1);
        const params = new URLSearchParams();
        params.append('id', questionId);
        fetch('delete-message', {method: 'POST', body: params})
        .then(response => response.json())
        .then(() => {
            questionLoadCount -= 2;
            loadQuestions();
        });
    }
}

function onMessageDoubleClicked (event) {
    const questionId = event.currentTarget.id.substr(0, event.currentTarget.id.length - 1);
    window.location.href = '/add-answer?' + questionId;
}
// This function retrieves the questions from the data store and displays them
function loadQuestions() {
    const questionsSection = document.getElementById('questions-answers');
    const loadMoreButton = document.getElementById('load-more-container');
    questionsSection.innerHTML = '';
    loadMoreButton.innerHTML = '';
    const url = 'list-questions?' + questionLoadCount;
    questionLoadCount += 2;
    fetch(url).then(response => response.json()).then((data) => {
        data.questions.forEach((question) => {
            if (question.message !== '') {
                createMessage(question.id, question.message, true, question.image);
            }
            if (question.answer !== '') {
                createMessage(question.id, question.answer, false);
            }
        });
        if (data.thereIsMore) {
            instanciateLoadMoreButton();
        }
        updateLogInOutButton(data.isLoggedIn);
        fetchBlobstoreUrl();
    });
}
// This function instanciates the load more button
function instanciateLoadMoreButton() {
    const buttonContainer = document.getElementById('load-more-container');
    const button = document.createElement('a');
    button.classList.add('btn');
    button.style.backgroundColor = 'gray';
    button.innerHTML = '<i class="material-icons">expand_more</i>';
    button.onclick = loadQuestions;
    buttonContainer.appendChild(button);
}
// This function triggers the UploadUrl servlet
function fetchBlobstoreUrl() {
    fetch('blobstore-upload-url')
    .then((response) => {
        return response.text();
    })
    .then((fileUrl) => {
        const form = document.getElementById('my-form');
        form.action = fileUrl;
    });
}
// This function gets called when the upload file button in clicked
function onUploadFileClick() {
    const chooseFileInput = document.getElementById('choose-file');
    chooseFileInput.innerHTML = '<input type="file"\
    name="image" accept="image/*">';
}

function updateLogInOutButton(isLoggedIn) {
    const logInOutButton = document.getElementById('log-in-out');
    if (isLoggedIn) {
        logInOutButton.innerText = 'Logout';
    } else {
        logInOutButton.innerText = 'Login';
    }
}
