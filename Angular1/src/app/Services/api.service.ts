import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7092/api/Values/deals';
  constructor(private http: HttpClient) { }
  getDeals(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
