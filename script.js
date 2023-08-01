document.addEventListener('DOMContentLoaded', function() {
    const checkboxList = document.getElementById('checkboxList');
    const checkedItems = document.getElementById('checkedItems');
    const filterInput = document.getElementById('filter');
  
    const names = [
        'John Doe',
        'Jane Smith',
        'Michael Johnson',
        'Emily Davis',
        'William Wilson',
        'Olivia Brown',
        'James Taylor',
        'Sophia Evans',
        'Robert Rodriguez',
        'Emma Martinez',
        'David Anderson',
        'Isabella Hernandez',
        'Joseph Wilson',
        'Ava Lee',
        'Thomas Gonzalez',
        'Mia Hall',
        'Charles Robinson',
        'Amelia Scott',
        'Daniel Perez',
        'Ella Cooper',
        'Matthew Carter',
        'Sofia Foster',
        'Matthew Morris',
        'Charlotte Ross',
        'Andrew Hayes',
        'Lucas Rivera',
        'Abigail Long',
        'Christopher Coleman',
        'Harper Powell'
      ];

    const selectedNames = []; // Array to store selected names in order

  
    // Function to update the checked items display
    function updateCheckedItems() {
        const checkedItemsText = selectedNames.map(name => {
        return `<span class="checked-item">${name}<span class="delete-button" onclick="removeSelectedName('${name}')">X</span></span>`;
        }).join('');
        checkedItems.innerHTML = checkedItemsText;
    }
  
    // Function to create the checkboxes dynamically
    function createCheckboxes() {
      names.forEach(name => {``
        const checkboxItem = document.createElement('div');
        checkboxItem.classList.add('checkbox-item');
  
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = name;
        checkbox.id = name;
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                if (!selectedNames.includes(name)) {
                selectedNames.push(name);
                updateCheckedItems();
                }
            } else {
                const index = selectedNames.indexOf(name);
                if (index !== -1) {
                selectedNames.splice(index, 1);
                updateCheckedItems();
                }
            }
        });
      
        const label = document.createElement('label');
        label.textContent = name;
        label.htmlFor = name;
  
        checkboxItem.appendChild(checkbox);
        checkboxItem.appendChild(label);
        checkboxList.appendChild(checkboxItem);
      });
    }
  
    createCheckboxes();
  
    // Function to filter items based on input text
    function filterNames() {
      const filterValue = filterInput.value.toLowerCase();
      const checkboxItems = document.querySelectorAll('.checkbox-item');
  
      checkboxItems.forEach(item => {
        const label = item.querySelector('label');
        const itemText = label.textContent.toLowerCase();
        if (itemText.includes(filterValue)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
  
    // Function to remove a selected name
//     window.removeSelectedName = function(id) {
//       const pillElement = document.getElementById(`pill_${id}`);
//       const rawname = pillElement.textContent.trim();
//       const name = rawname.slice(0, -1);
//       const checkbox = document.querySelector(`input[type="checkbox"][value="${name}"]`);
//       console.log(name)
//       if (checkbox) {
//         checkbox.checked = false;
//         updateCheckedItems();
//       }
//     };
  
//     // Attach the filter function to the input event
//     filterInput.addEventListener('input', filterNames);
//   });

  
  // Function to remove a selected name
  window.removeSelectedName = function(name) {
    const index = selectedNames.indexOf(name);
    if (index !== -1) {
      selectedNames.splice(index, 1);
      updateCheckedItems();
      const checkbox = document.querySelector(`input[type="checkbox"][value="${name}"]`);
      if (checkbox) {
        checkbox.checked = false;
      }
    }
  };

  // Attach the filter function to the input event
  filterInput.addEventListener('input', filterNames);
});
  