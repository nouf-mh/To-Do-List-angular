import { Injectable } from '@angular/core';
import { itemModel } from "./Models/item";
import {Subject} from "rxjs";
import { ActivatedRoute , Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public updates:Subject<any> = new Subject<any>();
  private list: any[] = [
    {id: 1, title: 'Read a book' , priority:"High", value: false},
    {id: 2, title: 'Organize office' , priority:"Middle", value: true},
    {id: 3, title: 'Meet My parent' , priority:"High", value: false},
    {id: 4, title: 'Go to gym' , priority:"Low", value: false},
    {id: 5, title: 'Buy Dinner' , priority:"Middle", value: false},
  ]
  private priority_list: any[] = ['High' , 'Middle' , 'Low'];
  constructor(private router: Router) { }
  getAllList(){
    return this.list;
  }
  getAllPriorityList(){
    return this.priority_list;
  }
  addToList(data: itemModel){
    this.list = this.list.concat([data]);
    this.updates.next({});
  }
  updateItem(data :itemModel){
    const indexItem = this.list.findIndex( obj => obj.id === data.id);
    this.list[indexItem] = data;
    this.updates.next({});
    this.router.navigate(['/list']);
  }
  removeFromList(data: itemModel){
    this.list = this.list.filter((item) => item.id !== data.id);
    this.updates.next({});
  }
}
