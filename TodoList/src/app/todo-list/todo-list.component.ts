import { Component, OnInit ,Output,Input, OnChanges, SimpleChanges } from '@angular/core';
import { Todo } from '../model/todo';
import { TodohttpServService } from '../service/todohttp-serv.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit,OnChanges {

  todos:Todo[]=[];

  @Input()
  todosTodoToAdd:any={}

  checked1:any={};
  constructor(private http:TodohttpServService) {

   }
  ngOnChanges(changes: SimpleChanges): void {

   if(this.todosTodoToAdd != undefined)
    this.todos.push(this.todosTodoToAdd);
  }

  ngOnInit(): void {
    this.http.getAllTodos().subscribe(data =>{
console.log(data)
      this.todos=data
    })
  }

  todocheckbox(checked:Todo){
    this.checked1=checked
  }

  delete(todo1:Todo){
    if(this.checked1.id == todo1.id)
    {
      let objindx = this.todos.findIndex(todo => todo.id === todo1.id )  
      this.todos.splice(objindx,1)
      this.http.delTodo(todo1.id)
      .subscribe(()=> console.log(`this item deleted= ${todo1.id} deleted`))
    }
  }
}
