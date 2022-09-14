import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/tasks.service';
import { itemModel } from "../../Models/item";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tasks: any[] = [] ;
  term : string = '';

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getAllList();
    this.taskService.updates.subscribe(status => {
      this.tasks = this.taskService.getAllList();
    })
  }
  onDeleteTask(task: itemModel){
    this.taskService.removeFromList(task);
  }
  onKeyupSearch(term :any){
    this.term = term;
  }

}
