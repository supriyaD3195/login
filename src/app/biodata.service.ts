import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import{Profile}from './home/biodata'
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BiodataService {

  constructor(private http:HttpClient) { }
  biodata():Observable<Profile[]>
  {
    return this.http.get<Profile[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
