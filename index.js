const gridContainer = document.querySelector('.speaker_container');

const speakersArr = [
  {
    name: 'Mrs Kate Henshaw',
    imageLink: './img/k.henshaw.jpeg',
    role: 'A professional Actress and Dietician.',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemoalias adipisci veniam.',
  },
  {
    name: 'Mr Chris Asimole',
    imageLink: './img/asimole.jpeg',
    role: 'CEO and Brand-Manager Asims Sports.',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemoalias adipisci veniam.',
  },
  {
    name: 'Dr Mercy Eneh',
    imageLink: './img/mercy.jpeg',
    role: 'A health practitioner,<br> Brand and User Interface designer',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemoalias adipisci veniam.',
  },
  {
    name: 'Miss Anyanwu Chidinma',
    imageLink: './img/dinmafaith.jpeg',
    role: 'CEO Dinmas fitness (fitness coach and junior front-end developer)',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemoalias adipisci veniam.',
  },
  {
    name: 'Mr Chris Asimole',
    imageLink: './img/asimole.jpeg',
    role: 'CEO and Brand-Manager Asims Sports',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemoalias adipisci veniam.',
  },
  {
    name: 'Mrs Kate Henshaw',
    imageLink: './img/k.henshaw.jpeg',
    role: 'A professional Actress and Dietician.',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemoalias adipisci veniam.',
  },
];
function show() {
  gridContainer.innerHTML = '';
  speakersArr.forEach((arr) => {
    gridContainer.innerHTML += `
        <div class="flex-mobile">
        <div class="speaker-details">
              <div class="speaker">
                <div class="speaker-img">
                  <img
                    class="image"
                    src=${arr.imageLink}
                    alt="Kate_Henshaw's photo"
                  />
                </div>
              </div>
            </div>

            <div class="speaker-content">
              <h3>${arr.name}</h3>
              <p class="speaker_description">
                <i>${arr.role}</i>
              </p>
              <hr class="speakers_hr" />
              <p class="speakers_paragraph">
                ${arr.details}
              </p>
              </div>
            </div>`;
  });
}show();