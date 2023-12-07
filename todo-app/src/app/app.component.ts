import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';

interface Todo { id: number; description: string };

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public todo?: string;
  public todos: Todo[] = [];

  constructor(private appService: AppService) {
    
  }

  public ngOnInit(): void {
    this.fetchTodo()
  }

  public async fetchTodo() {
    this.todos = await this.appService.getTodos();
  }

  public async handleClickAdd() {
    if (this.todo) {
      const todo = { id: this.todos.length + 1, description: this.todo }
      this.todos.push(todo);
      await this.appService.createTodo(todo);
      await this.fetchTodo();
    }
  }

  public updateTodo(id: number) {
    //
  }

  public deleteTodo(id: number) {
    const index = this.todos.findIndex((el) => el.id === id);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}