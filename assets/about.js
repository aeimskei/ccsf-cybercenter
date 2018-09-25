const about = document.querySelector('#about');

const div = document.createElement('div');

div.innerHTML = `
  <div class="container">
    <h3 class="title-header text-light-grey center-align">About</h3>
    <p class="flow-text text-light-grey center-align about-paragraph">Cyber Center, housed at the Computer Networking and Information Technology department at City College of San Francisco, brings together a range of expertise to educate, understand and address real-world challenges in cybersecurity and to equip the next generation of cybersecurity experts.</p>
  </div>
`;

about.appendChild(div);