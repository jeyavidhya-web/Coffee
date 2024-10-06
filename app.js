
function showHotcoffee() {
    
    const apiUrl = 'https://api.sampleapis.com/coffee/hot';
  
    
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); 
      })
      .then(coffees => {
        const table = document.getElementById('hotCoffeeTable'); 
  
        
        coffees.forEach(coffee => {
          
          const row = document.createElement('tr');
  
          
          const titleCell = document.createElement('td');
          const descriptionCell = document.createElement('td');
          const ingredientsCell = document.createElement('td');
          const imageCell = document.createElement('td');
  
          
          titleCell.textContent = coffee.title;
          descriptionCell.textContent = coffee.description;
          ingredientsCell.textContent = coffee.ingredients.join(', '); 
  
          
          const img = document.createElement('img');
          img.src = coffee.image;
          img.alt = coffee.title;
          img.style.width = '100px'; 
          imageCell.appendChild(img); 
  
        
          row.appendChild(titleCell);
          row.appendChild(descriptionCell);
          row.appendChild(ingredientsCell);
          row.appendChild(imageCell);
  
          
          table.appendChild(row);
        });
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
      document.getElementById('Hot coffee options').style.display = 'block';
      document.getElementById('Cold coffee options').style.display = 'none';
  }

  

  
function showColdcoffee() {
    
    const apiUrl = 'https://api.sampleapis.com/coffee/iced';
  
    
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); 
      })
      .then(coffees => {
        const table = document.getElementById('coldCoffeeTable'); 
  
        
        coffees.forEach(coffee => {
          
          const row = document.createElement('tr');
  
          
          const titleCell = document.createElement('td');
          const descriptionCell = document.createElement('td');
          const ingredientsCell = document.createElement('td');
          const imageCell = document.createElement('td');
  
        
          titleCell.textContent = coffee.title;
          descriptionCell.textContent = coffee.description;
          ingredientsCell.textContent = coffee.ingredients.join(', '); 
  
          
          const img = document.createElement('img');
          img.src = coffee.image;
          img.alt = coffee.title;
          img.style.width = '100px'; 
          imageCell.appendChild(img); 
  
          
          row.appendChild(titleCell);
          row.appendChild(descriptionCell);
          row.appendChild(ingredientsCell);
          row.appendChild(imageCell);
  
          
          table.appendChild(row);
        });
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
     
      document.getElementById('Cold coffee options').style.display = 'block';
      document.getElementById('Hot coffee options').style.display = 'none';
  }

  
  
  function showMenu() {
    document.getElementById('menuOptions').style.display = 'block';
}
