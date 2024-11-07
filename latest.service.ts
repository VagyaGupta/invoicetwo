import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LatestService {

  private apiUrl = 'http://localhost:3000/invoices'; 
  private companyApiUrl = 'http://localhost:3000/company';

  constructor(private http: HttpClient) {}

  
  addInvoice(invoice: any): Observable<any> {
    return this.http.post(this.apiUrl, invoice);
  }


  getCompanyDetails(): Observable<any> {
    return this.http.get<any>(this.companyApiUrl);
  }

  getInvoiceDetails(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/invoice');
  }

  
}




