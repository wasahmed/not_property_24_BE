console.log('in listings.js');

// how do i import this from another file
// these need to come from a DB
const properties = [
    {
      id: 1,
      desc: '4 bedroom house',
      rooms: '4',
      bathrooms: '2',
      parking: '2',
      area: 'john@gmail.com',
      availabilty: 'available'
    },
    {
      id: 2,
      desc: '2 bedroom apartment',
      rooms: '2',
      bathrooms: '1',
      parking: '1',
      area: 'bob@gmail.com',
      availabilty: 'occupied'
    },
    {
      id: 3,
      desc: '1 bedroom flat',
      rooms: '1',
      bathrooms: '1',
      parking: '1',
      area: 'shannon@gmail.com',
      availabilty: 'available'
    },
    {
      id: 4,
      desc: '2 bedroom house',
      rooms: '2',
      bathrooms: '1',
      parking: '1',
      area: 'shannon@gmail.com',
      availabilty: 'available'
    },
    {
      id: 5,
      desc: '3 bedroom house',
      rooms: '3',
      bathrooms: '2',
      parking: '2',
      area: 'shannon@gmail.com',
      availabilty: 'available'
    },
    {
      id: 5,
      desc: '3 bedroom appartment',
      rooms: '3',
      bathrooms: '2',
      parking: '1',
      area: 'shannon@gmail.com',
      availabilty: 'available'
    },
    {
      id: 6,
      desc: '6 bedroom house',
      rooms: '6',
      bathrooms: '3',
      parking: '2',
      area: 'shannon@gmail.com',
      availabilty: 'available'
    }
  ];

const propertyList = document.querySelector('.collection');
const filter = document.querySelector('#filter');

loadEventListeners();

function loadEventListeners() {
    // DOM Load event
    document.addEventListener('DOMContentLoaded', getListings);
    // Filter tasks event
    filter.addEventListener('keyup', filterListings);
};


  // Get Tasks from file
function getListings() {
    // let tasks;
    // if(localStorage.getItem('tasks') === null){
    //   tasks = [];
    // } else {
    //   tasks = JSON.parse(localStorage.getItem('tasks'));
    // }
  
    properties.forEach((property) => {
      // Create li element
      const li = document.createElement('li');
      // Add class
      li.className = 'collection-item';
      // Create text node and append to li
      li.appendChild(document.createTextNode(property.desc));
      // Create new link element
      const link = document.createElement('a');
      // Add class
      //link.className = 'delete-item';
      // Add icon html
      //link.innerHTML = '<span>X</span>';
      // Append the link to li
      //li.appendChild(link);
      // Append li to ul
      propertyList.appendChild(li);
    });
  }

  function filterListings(e) {
    const text = e.target.value.toLowerCase();
  
    document.querySelectorAll('.collection-item').forEach(function(listing){
      const item = listing.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1){
        listing.style.display = 'block';
      } else {
        listing.style.display = 'none';
      }
    });
  }