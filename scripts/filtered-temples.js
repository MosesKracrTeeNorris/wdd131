document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    const nameHeader = document.querySelector('.nameHeader'); // Select the h1 element

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
        nameHeader.classList.toggle('hidden'); // Toggle the 'hidden' class
    });
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "San Diego, California",
    location: "United States",
    dedicated: "1993, April, 25-30",
    area: "7200",
    imageUrl: 
    "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg" 
  },
  {
   templeName: "Abijan, Cote d'Ivoire",
   location: "Abijan, Ivory Coast",
   dedicated: "2025, May, 25",
   area: "17362",
   imageUrl:
   "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58993-main.jpg" 
  },
  {
    templeName: "Boston, Massachusetts",
    location: "United States",
    dedicated: "2000, October, 1",
    area: "69600",
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/boston-massachusetts-temple/boston-massachusetts-temple-9913-main.jpg"
  },
  {
    templeName: "Helena, Montana",
    location: "United States",
    dedicated: "2023, June, 18",
    area: "9794",
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/helena-montana-temple/helena-montana-temple-37751-main.jpg"
  },
  {
   templeName: "Dartmouth, Nova Scotia",
   location: "Canada",
   dedicated: "1999, November, 14",
   area: "10700",
   imageUrl:
   "https://churchofjesuschristtemples.org/assets/img/temples/halifax-nova-scotia-temple/halifax-nova-scotia-temple-57120-main.jpg"
  },
  
];
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container.home');
  const navLinks = document.querySelectorAll('.navigation a');
  const titleName = document.querySelector('.title');

  const displayTemples = (filteredTemples) => {
      container.innerHTML = '';
      filteredTemples.forEach(temple => {
          const card = document.createElement('div');
          card.className = 'temple-card';
          card.innerHTML = `
              <img src="${temple.imageUrl}"  loading="lazy"  width="${temple.width}" height="${temple.height}" alt="${temple.templeName} Temple">
              <div class="temple-info">
                  <h2>${temple.templeName}</h2>
                  <p><strong>Location:</strong> ${temple.location}</p>
                  <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                  <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
              </div>
          `;
          container.appendChild(card);
      });
  };

  const filterTemples = (criteria) => {
      let filteredTemples = temples;
      switch (criteria) {
          case 'old':
              filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
              titleName.innerHTML = 'Old Temples';
              break;
          case 'new':
              filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
              titleName.innerHTML = 'New Temples';
              break;
          case 'large':
              filteredTemples = temples.filter(temple => temple.area > 90000);
              titleName.innerHTML = 'Large Temples';
              break;
          case 'small':
              filteredTemples = temples.filter(temple => temple.area < 10000);
              titleName.innerHTML = 'Small Temples';
              break;
          default:
              filteredTemples = temples;
              titleName.innerHTML = 'All Temples';
              break;
      }
      displayTemples(filteredTemples);
  };

  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          navLinks.forEach(nav => nav.classList.remove('active'));
          e.target.classList.add('active');
          filterTemples(e.target.id);
      });
  });

  filterTemples('home-nav');
});

function displayCurrentDateTime() {
    const now = new Date(); // Create a new Date object
    const dateTimeString = now.toLocaleString(); // Get the local date and time string
    document.getElementById("currentDateTime").textContent = dateTimeString; // Update the HTML element
  
    const lastModified = document.lastModified;
    document.getElementById(
      "lastModified"
    ).textContent = `Last Modification: ${lastModified}`;
  }
  
  // Call the function when the page loads
  displayCurrentDateTime();
  
  // Optionally, update the time every second
  setInterval(displayCurrentDateTime, 1000);
  