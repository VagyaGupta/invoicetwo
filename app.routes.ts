import { Routes } from '@angular/router';
import { TaxInvoiceComponent } from './tax-invoice/tax-invoice.component';
import { LatestComponent } from './latest/latest.component';


export const routes: Routes = [
    {
        path:'app-tax-invoice',
        component:TaxInvoiceComponent
    },
    {
        path:'',
        component:LatestComponent
    },


];
