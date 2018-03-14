import { Component,OnInit } from '@angular/core';
import { TodoItem } from './models/todoitem';
import {ListServiceService} from './services/list-service.service';
import { ItodoItem} from './models/itodo-item'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My <strong>TODO</strong> Item List';
  todoItemModel = new TodoItem();
  itemList:any[] =[];
  buttonDisabled : boolean = true;
  enableLabel : boolean = false;
  EnableAddLabel:boolean=false;
  list:ItodoItem[];

  constructor(private listService: ListServiceService){}

  ngOnInit(){
   //this.list = this.listService.getList();
   //console.log(this.list);
   this.ReadJson()
  }

  ReadJson()
  {
    this.listService.getListJson().subscribe((data)=>{this.itemList=data;console.log(data)})
  }

  AddItem()
  {
    console.log("add item")
    this.itemList.push(this.todoItemModel);    
    this.buttonDisabled = false; 
    this.todoItemModel = new TodoItem(); 
    this.EnableAddLabel=false;    
  }

  ClearAll()
  {
    this.itemList=[];
    this.buttonDisabled=true;
    this.enableLabel = true;    
  }

  Onkeyup(){
    this.EnableAddLabel=true;
      
  }

  OnFocus(){
    if(this.itemList.length==0){
      this.enableLabel=false;
    };
  }

}
