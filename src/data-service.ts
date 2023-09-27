// data-service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3000/api'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  // Implement your HTTP methods for CRUD operations here
}
