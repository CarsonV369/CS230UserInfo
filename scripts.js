function addUser() {
  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();
  const country = document.getElementById('country').value.trim();
  const position = document.getElementById('position').value.trim();
  const wage = document.getElementById('wage').value.trim();

  if (!name || !age || !country || !position || !wage) {
    alert('Please fill in all fields!');
    return;
  }

  const userList = document.getElementById('userList');
  const listItem = document.createElement('li');
  listItem.textContent = `Name: ${name}, Age: ${age}, Country: ${country}, Position: ${position}, Wage: ${wage}`;

  userList.appendChild(listItem);

  // Clear form fields
  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('country').value = '';
  document.getElementById('position').value = '';
  document.getElementById('wage').value = '';
}