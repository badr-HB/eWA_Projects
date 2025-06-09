const displayPoPup = document.querySelector('.PoPup');
const successPoPup = document.querySelector('.success_popup');


function move() {
  const addfolder = document.getElementById('AddFolderIcon');


  addfolder.classList.add('bounce');
  setTimeout(() => {
    addfolder.classList.remove('bounce');
  }, 100);

  displayPoPup.classList.add('show-popup');
}

function removePoPup() {
  displayPoPup.classList.remove('show-popup');
  document.getElementById('InputFolderName').value = "";
  document.getElementById('folderForm').submit();
}

function addFolder(event) {
  event.preventDefault();
  const input = document.getElementById('InputFolderName').value.trim();

  if (input == "") {
    alert("Please add a file name to continue");
    document.getElementById('InputFolderName').value = "";
  }
  else {
    displayPoPup.classList.remove('show-popup');
    successPoPup.classList.add('show-popup');
  }

}

function removesuccessPoPup() {
  successPoPup.classList.remove('show-popup');
  document.getElementById('folderForm').submit();
}


const alertall = document.getElementById('alertinput').value;
if (alertall == 1) {
  alert("name already in use");
}