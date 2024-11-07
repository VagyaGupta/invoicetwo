import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LatestService } from '../latest.service';


@Component({
  selector: 'app-tax-invoice',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './tax-invoice.component.html',
  styleUrl: './tax-invoice.component.scss'
})
export class TaxInvoiceComponent  {

companyObj:any={
"companyName":'',
"companyAddress":'',
"iec":'',
"udyamRegNo":'',
"gstin":'',
"email":'',
"contact":'',
"logo":"",
"companyPAN":''
}



invoice:any[]=[];
    
      constructor(private latest: LatestService) { }
    
      ngOnInit(): void {
        
        this.latest.getCompanyDetails().subscribe(data => {
          this.companyObj = data;  
          console.log(this.companyObj);
        }, error => {
          console.error('Error fetching company data:', error);
        });
    
        
        this.latest.getInvoiceDetails().subscribe(data => {
          this.invoice = data;  
          console.log(this.invoice);
        }, error => {
          console.error('Error fetching company data:', error);
        });






      }
    }
    
  




