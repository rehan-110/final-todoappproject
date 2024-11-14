const firebaseConfig = {
    apiKey: "AIzaSyCdUC186UVNHWD4u-g1gP1KKxC22zJZyPw",
    authDomain: "todo-app-rehan-e603d.firebaseapp.com",
    databaseURL: "https://todo-app-rehan-e603d-default-rtdb.firebaseio.com",
    projectId: "todo-app-rehan-e603d",
    storageBucket: "todo-app-rehan-e603d.firebasestorage.app",
    messagingSenderId: "294570952812",
    appId: "1:294570952812:web:46e163665df3b029f6b049"
  };

  firebase.initializeApp(firebaseConfig);






var list = document.getElementById("list");
firebase.database().ref('todos').on('child_added',function(data){
     
    var li = document.createElement('li')
    var liText = document.createTextNode(data.val().value)
    li.appendChild(liText)

    
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class", "btn")
    delBtn.setAttribute('id',data.val().key)
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delText)

    
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    editBtn.setAttribute('id',data.val().key)
    editBtn.setAttribute('class','btn')

    editBtn.setAttribute("onclick", "editItem(this)")


    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)

})

function addTodo() {
  var todo_item = document.getElementById("todo-item");
  if(todo_item.value){
    var database = firebase.database().ref('todos');
    var key = database.push().key;
    var todo = {
        value: todo_item.value,
        key: key
    }
    database.child(key).set(todo);


   
    todo_item.value = ""}
    else{
      alert('Please Enter Items')
    }
   
}

function deleteItem(e) {
    firebase.database().ref('todos').child(e.id).remove()
    e.parentNode.remove()
}

function editItem(e) {
  var val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
  var editTodo = {
    value: val,
    key: e.id
  }
  firebase.database().ref('todos').child(e.id).set(editTodo)
  e.parentNode.firstChild.nodeValue = val;
}

function deleteAll() {
    list.innerHTML = ""
}