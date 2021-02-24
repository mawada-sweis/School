var students = [];
function openAdd(event){
	if(event == true){
		document.getElementById("information").style.display="block";
	}
	else{
		document.getElementById("information").style.display="none";
	}
	document.getElementById("studentList").style.display="none";
	document.getElementById("searchUpdate").style.display="none";
	document.getElementById("searchID").style.display="none";
	document.getElementById("searchDelete").style.display="none";
}

document.getElementById('submitAdding').addEventListener('click', (e) => {
	e.preventDefault();
	let nameInputEl = document.getElementById('validationCustom01');
	let idInputEl = document.getElementById('validationCustom02');
	let gdpaInputEl = document.getElementById('validationCustom03');

	// Validation for input
	inputValidation(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

});

function inputValidation(name,id,gdpa) {
	// Check for the value of each element
	if (name == '') {
		alert('Please insert the student name');
	}

	if (id == '') {
		alert('Please insert the student id number');
	}

	if (gdpa == '') {
		alert('Please insert the student gdpa');
	}

	// Insert student
	else{
		// Check if the id already exist
		let event = true;
		for (let i = 0; i < students.length; i++) {
			if (id == students[i].id) {
				alert('Student already exist!');
				event = false;
				break;
			}
		}
		if (event == true) {
			insertStudent(name, id, gdpa);
			
			// Show success message
			alert('Studnet added!');
		}
	}

	document.getElementById('validationCustom01').value= null;
	document.getElementById('validationCustom02').value= null;
	document.getElementById('validationCustom03').value= null;
	openAdd(false);
}

function insertStudent(name, id, gdpa) {
	let student = {
		name: name,
		id: id,
		gdpa: gdpa,
	};
	students.push(student);
    console.log('students array: ', students);
}

function showList(){
	openAdd(false);
	document.getElementById('studentList').style.display="block";
	for (let i = 0; (i < students.length); i++) {
		document.getElementById("nameColumn").innerHTML += students[i].name + '<br>';
		document.getElementById("idColumn").innerHTML += students[i].id + '<br>';
		document.getElementById("gdpaColumn").innerHTML += students[i].gdpa + '<br>';
	}
}

function inputUpdate(name, id, gdpa, oldID){
	// Check for the value of each element
	if (name == '') {
		alert('Please insert the student name');
	}

	if (id == '') {
		alert('Please insert the student id number');
	}

	if (gdpa == '') {
		alert('Please insert the student gdpa');
	}

	else{
		students[oldID].id = id;
		students[oldID].name = name;
		students[oldID].gdpa = gdpa;
	}
}

function searchID(){
	openAdd(false);
	document.getElementById('searchID').style.display="block";
	let searchBtn = document.getElementById('searchBtn');
	let searchInput = document.getElementById('searchIdNum');
	searchBtn.addEventListener('click', () => {
		let inputValue = searchInput.value;
		let i = 0;
		for ( i = 0; i < students.length; i++) {
			if(inputValue == students[i].id) {
				document.getElementById('searchUpdate').style.display="block";
				document.getElementById('submitUpdate').addEventListener('click', (e) => {
					e.preventDefault();
					let nameInputEl = document.getElementById('validationCustom04');
					let idInputEl = document.getElementById('validationCustom05');
					let gdpaInputEl = document.getElementById('validationCustom06');
					inputUpdate(nameInputEl.value, idInputEl.value, gdpaInputEl.value, i);
					alert("Updated");
				});
			}			
		}
	});
}

function deleteStudent(){
	console.log(students);
	openAdd(false);
	document.getElementById('searchDelete').style.display="block";
	let deleteBtn = document.getElementById('deleteBtn');
	let deleteInput = document.getElementById('deleteIdNum');
	deleteBtn.addEventListener('click', () => {
		let inputValue = deleteInput.value;
		let i = 0;
		for (i = 0; i < students.length; i++) {
			if(inputValue == students[i].id) {
				delete students[i];
				alert('Deleted');
				break;
			}			
		}
		if(i == students.length){
			alert("ID not exist!");
		}
		document.getElementById('deleteIdNum').value= null;
	});
}
// This week task:
// Show list of students 
// Update student
// Delete student

// 10 marks
// 1) based on the follwoing:
// a) easy to use  and prettyu look 3
// b) resposnive design 2

// c) clean code 2
// d) show list for the user 1
// e) update 1
// f) delete 1

// Deeadline: 20/2, on github.
