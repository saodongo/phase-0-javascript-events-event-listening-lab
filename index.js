function addingEventListener() {
    // Select the button element by its ID
    const input = document.getElementById('button');
    
    // Define the click handler function
    function clickAlert() {
      alert('I was clicked!');
    }
    
    // Add the event listener to the button element
    input.addEventListener('click', clickAlert);
  }
  
  // Call the addingEventListener function to activate the listener
  addingEventListener();
  