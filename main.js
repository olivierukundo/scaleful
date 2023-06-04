document.getElementById('enrollForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the form values
  let fullName = document.getElementById('fullNameInput').value;
  let email = document.getElementById('emailInput').value;

  // Create a new card element
  let card = document.createElement('div');
  card.className = 'card';

  // Create card content
  let cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  cardBody.innerHTML = '<h5 class="card-title">' + fullName + '</h5>' +
                       '<p class="card-text">' + email + '</p>';

  // Append card content to the card element
  card.appendChild(cardBody);

  // Append the card to a container or specific element
  let cardContainer = document.getElementById('cardContainer');
  cardContainer.appendChild(card);

  // Reset the form
  document.getElementById('enrollForm').reset();
});
