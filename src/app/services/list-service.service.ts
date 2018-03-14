import { Injectable } from '@angular/core';
import { ItodoItem} from '../models/itodo-item'
import { TodoItem} from '../models/todoitem'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ListServiceService {

  constructor(private http:Http){}

  getList():ItodoItem[]
  {
    return[
      {ItemName:"Item1"},
      {ItemName:"Item2"},
    ];
  }

  // getListJson():Observable<TodoItem>{
    
  //     return this.http.get("./file.json")
  //                     .map((res:any) => res.json() as TodoItem)
  //                     .catch((error:any) => Observable.throw(error.json.error));

  // }

  getListJson():Observable<any>{
    
      return this.http.get("/assets/list.json")
                      .map((res:any) => res.json())
                      .catch((error:any) => Observable.throw(error.json.error));

  }

}
