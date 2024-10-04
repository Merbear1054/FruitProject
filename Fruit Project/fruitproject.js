// script.js

// List of fruits to search through
const fruits = [
    'Apple', 'Banana', 'Orange', 'Grape', 'Pineapple', 
    'Mango', 'Blueberry', 'Strawberry', 'Raspberry', 'Peach', 'Lime', 'Lemon', 'Grapefruit', 'Watermelon',
    'Cantelope', 'Honeydew Melon', 'Apricot', 'Blackberry'
  ];
  
  // Get elements from the DOM
  const searchBar = document.getElementById('search-bar');
  const suggestionsList = document.getElementById('suggestions');
  
  // Event listener for user typing in the search bar
  searchBar.addEventListener('input', search);
  
  // Function to search through the fruits list
  function search() {
    const input = searchBar.value.toLowerCase();
    const results = fruits.filter(fruit => fruit.toLowerCase().includes(input));
  
    // Clear the previous suggestions
    suggestionsList.innerHTML = '';
  
    // If there are results, display them
    if (results.length > 0 && input !== '') {
      results.forEach(fruit => {
        const li = document.createElement('li');
        li.textContent = fruit;
        li.addEventListener('click', () => useSuggestion(fruit));
        li.addEventListener('mouseover', () => highlight(li));
        li.addEventListener('mouseout', () => removeHighlight(li));
        suggestionsList.appendChild(li);
      });
    }
  }
  
  // Function to use a suggestion by clicking on it
  function useSuggestion(fruit) {
    searchBar.value = fruit;
    suggestionsList.innerHTML = '';  // Clear the suggestions after selection
  }
  
  // Function to highlight suggestion on hover
  function highlight(element) {
    element.style.backgroundColor = '#ddd';
  }
  
  // Function to remove highlight on hover out
  function removeHighlight(element) {
    element.style.backgroundColor = '';
  }
  