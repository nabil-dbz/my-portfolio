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
            description.innerText = 'Google STEP Intern 2020';
            break;
        case 'Koc University':
            title.innerText = 'Koc University Undergraduate Reserach Program 2019';
            description.innerText = '-Conducted a research on Rendering and Animating Large Point Clouds in Unity3D as part of developing the digital twin of Koç University’s Campus.\
                -Effectively used the Shaders and Meshes to render and animate a large number of Points with an interesting Frame Rate (depending on the hardware characteristics).\
                -Fastly mastered the fundamentals of VR development, C# coding, and Game development with Unity3D.';
            break;
        case 'Polytechnique Montreal':
            title.innerText = 'Teaching Assistant 2019-2020';
            description.innerText = '- Courses: Object Oriented Programming and Procedural Programming\
                - Prepared, tested and corrected assignments in C++ for freshman and sophomore students\
                - Effectively analysing the students’ codes to give critical feedback based on experience\
                - Provided very detailed explanation to both technical and theoretical concepts in coding';
            break;
        case 'Fusion Jeunesse':
            title.innerText = 'Robotics Coordinator 2018-2020';
            description.innerText = 'Youth Fusion is an award-winning charity that contributes to perseverance, employability and civic engagement of youth by implementing\
                innovative experiential learning projects that create ongoing links between school systems and the community.\
                As a FIRST Lego Leauge Project Coordinator, my reposibilities are to:\
                - Mentor primary and/or secondary school students in Lego Robotics\
                - Prepare the students to participate in FIRST Lego League.\
                - Organise and implement different activities for students to help them link their studies with the project and its impact on the world.';
            break;
        case 'World Learning':
            title.innerText = 'STEM Education Intern 2018';
            description.innerText = 'The Algiers STEAM Center strengthens the innovation, critical thinking, and communication skills of the Algerian workforce via direct training of youth,\
                targeted teacher training, and community education forums and events.\
                As a STEM Education Intern, my responsibilities were:\
                - Managing and implementing the Algiers STEAM Center’s summer activities.\
                - Planning, organising and supervising an intensive robotics training for high school student.\
                - Selecting, guiding and mentoring the team that participated in the 2018 FIRST Global Challenge.\
                - Providing support in implementing new STEM regular workshops (Level Up Village - Energy for me).\
                - Providing guidance and support to the mentors in delivering their workshops.';
            break;
    }
}


