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
    // Get the text element by id
    var description = document.getElementById('experience-description');
    switch (company) {
        case 'Google':
            description.innerText = 'Google STEP Intern 2020';
            break;
        case 'Koc University':
            description.innerText = 'Koc University Undergraduate Reserach Program 2019';
            break;
        case 'Polytechnique Montreal':
            description.innerText = 'Teaching Assistant 2019-2020';
            break;
        case 'Fusion Jeunesse':
            description.innerText = 'Robotics Coordinator 2018-2020';
            break;
        case 'World Learning':
            description.innerText = 'STEM Education Intern 2018';
            break;
    }
}


