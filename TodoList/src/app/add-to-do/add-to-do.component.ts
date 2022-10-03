import { Component, OnInit, Output } from '@angular/core';
import { TodohttpServService } from '../service/todohttp-serv.service';
import { Todo } from '../model/todo';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {

  constructor(private todoservice: TodohttpServService) { }

  ngOnInit(): void {
  }


  @Output()
  todoAdded:EventEmitter<Todo> = new EventEmitter();

  addToDo(todo:Todo){
    this.todoAdded.emit(todo)
    console.log("hello")
    console.log(todo)
    this.todoservice.addTodo(todo).subscribe();
  }
}
