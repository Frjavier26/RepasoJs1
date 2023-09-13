// DOM = todo el arbol html que tenemos dentro de una pagina web
//localStorage nos permite guardar elementos en nuestro explorador web 
//JSON.parse permite transformar un elemento en un arreglo 
const todos = JSON.parse(localStorage.getItem('todosAll')) || [];


const render = () => {
    const todoList = document.getElementById('todo-list')
    const todosTemplate = todos.map(t => '<li>' + t + '</li>') 
    todoList.innerHTML = todosTemplate.join('');   // todosTemplate es un arreglo por lo cual no podemos agregarlo directo al html, se utiliza join, toma los elemtnos del arreglo y los junta segun lo que le digamos, en este caso string
    const elementos = document.querySelectorAll('#todo-list li')
    elementos.forEach((elemento, i) => {
        elemento.addEventListener('click', () => {
            elemento.parentNode.removeChild(elemento)
            todos.splice(i, 1)
            actualizaTodos(todos)
            render();
        })

    })
}

// Funcion para agregar items
const actualizaTodos = (todosAll) => {
    const todoStrings = JSON.stringify(todos) // transforma a string 
    localStorage.setItem('todosAll', todoStrings);
}

// window.onload se usa para esperar a que el sitio web se encuentre totalmente cargado, en caso de colocar el script en head.
window.onload = () => {
    render();
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => { // reemplazamos la funcion en onsubmit
        e.preventDefault(); //detiene el comportamiento que tienen por defecto los formularios que es refrescar la pagina 
        const todo = document.getElementById('todo'); // vamos al campo de todo 
        const todoText = todo.value; // sacamos el valor que este tiene
        todo.value = ''; // reemplazamos su valor por string vacio
        todos.push(todoText);
        actualizaTodos(todos)
        render()
    }
}




