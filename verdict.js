
// function myFunction() {
//   // Declare variables
//   var input, filter, ul, li, a, i, txtValue;
//   input = document.getElementById('input-category');
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("ul-for-category");
//   li = ul.getElementsByTagName('li');

//   // Loop through all list items, and hide those who don't match the search query
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }

// FILTERING LABELS
function filterLabels() {
  const filterText = document.getElementById('input-category').value.toLowerCase();
  const labels = document.querySelectorAll('#verdict');

  labels.forEach(label => {
      const labelText = label.textContent.toLowerCase();
      if (labelText.includes(filterText)) {
          label.style.display = 'block';
      } else {
          label.style.display = 'none';
      }
  });
}
document.getElementById('input-category').addEventListener('input', filterLabels);


function filterSelection(category) {
    const items = document.querySelectorAll('label');
    
    items.forEach(item => {
        item.style.display = 'none'; // Hide all items by default
    });
    
    if (category === 'all') {
        items.forEach(item => {
            item.style.display = 'block'; // Show all items
        });
    } else {
        const filteredItems = document.querySelectorAll('.' + category);
        filteredItems.forEach(item => {
            item.style.display = 'block'; // Show only items with the selected category
        });
    }
}
function openPopup(num) {
    var popup = document.getElementById("popup");
    var inner = document.getElementById("pdf");
    // inner.src = "/verdic-assets/civil_verdict.pdf";
    switch(num){
        case 1:   { inner.src="./verdic-assets/civil_verdict.pdf";
                break;
        }
        case 2: {
            inner.src="/verdic-assets/civil2.pdf";
            break;
        }
    }
    
    popup.style.display = "block";
  }
  
  function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }