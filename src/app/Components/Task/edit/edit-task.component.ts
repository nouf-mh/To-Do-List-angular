import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { itemModel } from 'src/app/Models/item';
import { TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  item:itemModel;
  priority_list: any [];

  constructor(private service:TasksService, private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.item = this.service.getAllList().find(i=> i.id == res['id'])
    })
    this.priority_list = this.service.getAllPriorityList();
  }
  onUpdateTask(){
    this.service.updateItem(this.item);
  }
}
