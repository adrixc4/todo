import Alert from './alert.js'

export default class AddTodo {
    constructor() {
        this.btn = document.getElementById("add");
        this.title = document.getElementById("title");
        this.description = document.getElementById("description");

        this.alert = new Alert('alert')
    }

    onClick(callback) {
        this.btn.onclick = () => {
            if (title.value === "" || description.value === "") {
                this.alert.show('Tienes que introducir un titulo y una descripcion')
            } else {
               callback(this.title.value, this.description.value) 
            }
        }
    }
}