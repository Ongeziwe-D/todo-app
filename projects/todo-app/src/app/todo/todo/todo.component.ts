import { Component, OnInit } from '@angular/core';
import {any} from 'codelyzer/util/function';
import {element} from 'protractor';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {

  public todoText = '';
  public todoList: any = [];
  public index: any;

  constructor() { }

  public ngOnInit() {
  }

  public onAddTodoText() {
    if (this.todoText !== '') {
      console.log('adding the todoText - ', this.todoText);
      const todoObj = {todoId: this.todoList.length, text: this.todoText, isCompleted: false};

      this.todoList.push(todoObj);
      this.todoText = '';
    }
  }

  public onClearTodoText() {
    console.log('clearing the todoList - ', this.todoList);
    this.todoList = [];
    this.todoText = '';
  }

  public onCompletingTask(todoId: number) {
    if (this.todoList[todoId].isCompleted) {
      this.todoList[todoId].isCompleted = false;
      this.todoList[todoId].buttonText = 'X';
    } else {
      this.deleteTask(this.index);
    }
  }

  public deleteTask(item) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
  }

  public calculateItems() {
    const todoList = this.todoList.filter(
      (todo) => {
        return todo.isCompleted === false;
      },
    );
    return todoList.length;
  }
}
