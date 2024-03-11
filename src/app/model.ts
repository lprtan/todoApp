export class Model{
    user;
    items;

    constructor(){
        this.user='Alperen';
        this.items= [
            new ToDoItem("Spor",true),
            new ToDoItem("Sinema",false),
            new ToDoItem("Kahvaltı",false),
            new ToDoItem("Kitap Okumak",false),
          ];
    }
}

export class ToDoItem{
    description;
    action;

    constructor(description: any, action: any){
        this.description=description;
        this.action=action;
    }
}
