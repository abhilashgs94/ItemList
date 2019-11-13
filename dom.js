var form = document.getElementById ('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var progress =  document.getElementById ('progress-bar');

//form submit event 
form.addEventListener('submit',addItem);

//Delete event
itemList.addEventListener('click',removeItem);

//Search event
filter.addEventListener("keyup", filteritems);

// add item
var ta1 = document.getElementById('textarea1');
ta1.style.display = "none";
function addItem(e){
    e.preventDefault();
    
    //get input value 
    var newItem = document.getElementById('item').value;
    ta1.style.display = "none";

    if(newItem == '') {
        // alert('No value entered' );
        // return;
        ta1.style.display = "block";
    }
    else {

    // create li element
    
    var li = document.createElement('li');
    li.className='list-group-item';

    //add text node with input value 
    li.appendChild(document.createTextNode(newItem));

    var deleteBtn = document.createElement('button');
    // add classes to delete button 
    
    deleteBtn.className = 'btn btn-danger btn-sm float-right  delete';

    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deleteBtn);

    itemList.appendChild(li);
    }
}


//Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure you want to delete this item?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filteritems(e){
    //convert to lowercase
    var text = e.target.value.toLowerCase();
    
    var items = itemList.getElementsByTagName('li');
    console.log(items);

    //Convert to array

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        console.log(itemName);
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
        }   else{
            item.style.display = 'none';
        }
    }
)
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }