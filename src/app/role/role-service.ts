import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroments/enviroments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class RoleService {
  endPointRole = enviroment.BASE_URL_KALUM_AUTH;

  constructor(private httpclient: HttpClient) {
    
  }

  getListRole() : Observable<any> {
    return this.httpclient.get<any[]>(`${this.endPointRole}/roles`);
  }
  
}

