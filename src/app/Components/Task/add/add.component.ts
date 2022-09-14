import { Component, OnInit , Input } from '@angular/core';
import { FormBuilder, FormGroup , FormControl , Validators} from '@angular/forms';
import { TasksService } from 'src/app/tasks.service';
import {customValidationFunction} from "src/app/custom-validation";
import { itemModel } from 'src/app/Models/item';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  @Input() showDialog = false;
  // addedTask = {id: 0 ,title: '' , description: '' , value: false};
  addedTask: itemModel;
  tasks: any[] = [];
  form: FormGroup ;
  name: string;
  priority_list: any[];
  // form = new FormGroup({});
  constructor(private tasksService: TasksService , private fb: FormBuilder) { }

  
  ngOnInit(): void {
    this.priority_list = this.tasksService.getAllPriorityList();
    this.tasks = this.tasksService.getAllList();
    this.initiForm();
  }
  initiForm(){
    this.form = this.fb.group({
      title:[null , [Validators.required]],
      priority: [null, [Validators.required]],
    });
  }
  onAddTask(){
    this.addedTask = this.form.value;
    this.addedTask.id = this.tasksService.getAllList().length+1;
    this.tasksService.addToList(this.addedTask);
  }

}
