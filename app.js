// Function to fetch data and populate the table
function showHotcoffee() {
    // API URL
    const apiUrl = 'https://api.sampleapis.com/coffee/hot';
  
    // Fetch data from the API
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON data
      })
      .then(coffees => {
        const table = document.getElementById('hotCoffeeTable'); // Get the table by its ID
  
        // Loop through each coffee item and create a table row for it
        coffees.forEach(coffee => {
          // Create a new table row
          const row = document.createElement('tr');
  
          // Create table cells for Title, Description, Ingredients, and Image
          const titleCell = document.createElement('td');
          const descriptionCell = document.createElement('td');
          const ingredientsCell = document.createElement('td');
          const imageCell = document.createElement('td');
  
          // Populate the cells with coffee data
          titleCell.textContent = coffee.title;
          descriptionCell.textContent = coffee.description;
          ingredientsCell.textContent = coffee.ingredients.join(', '); // Join the array of ingredients into a string
  
          // Create an image element for the image cell
          const img = document.createElement('img');
          img.src = coffee.image;
          img.alt = coffee.title;
          img.style.width = '100px'; // Set a width for the image
          imageCell.appendChild(img); // Append the image to the cell
  
          // Append all cells to the row
          row.appendChild(titleCell);
          row.appendChild(descriptionCell);
          row.appendChild(ingredientsCell);
          row.appendChild(imageCell);
  
          // Append the row to the table
          table.appendChild(row);
        });
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
      document.getElementById('Hot coffee options').style.display = 'block';
      document.getElementById('Cold coffee options').style.display = 'none';
  }

  

  // Function to fetch data and populate the table
function showColdcoffee() {
    // API URL
    const apiUrl = 'https://api.sampleapis.com/coffee/iced';
  
    // Fetch data from the API
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON data
      })
      .then(coffees => {
        const table = document.getElementById('coldCoffeeTable'); // Get the table by its ID
  
        // Loop through each coffee item and create a table row for it
        coffees.forEach(coffee => {
          // Create a new table row
          const row = document.createElement('tr');
  
          // Create table cells for Title, Description, Ingredients, and Image
          const titleCell = document.createElement('td');
          const descriptionCell = document.createElement('td');
          const ingredientsCell = document.createElement('td');
          const imageCell = document.createElement('td');
  
          // Populate the cells with coffee data
          titleCell.textContent = coffee.title;
          descriptionCell.textContent = coffee.description;
          ingredientsCell.textContent = coffee.ingredients.join(', '); // Join the array of ingredients into a string
  
          // Create an image element for the image cell
          const img = document.createElement('img');
          img.src = coffee.image;
          img.alt = coffee.title;
          img.style.width = '100px'; // Set a width for the image
          imageCell.appendChild(img); // Append the image to the cell
  
          // Append all cells to the row
          row.appendChild(titleCell);
          row.appendChild(descriptionCell);
          row.appendChild(ingredientsCell);
          row.appendChild(imageCell);
  
          // Append the row to the table
          table.appendChild(row);
        });
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
     
      document.getElementById('Cold coffee options').style.display = 'block';
      document.getElementById('Hot coffee options').style.display = 'none';
  }

  
  // Function to show the menu options
  function showMenu() {
    document.getElementById('menuOptions').style.display = 'block';
}
