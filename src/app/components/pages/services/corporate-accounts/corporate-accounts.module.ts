import { NgModule } from '@angular/core';
import { routing } from './corporate-accounts.routing';
import { CorporateAccountsComponent } from './corporate-accounts.component';

@NgModule({
    declarations:[CorporateAccountsComponent],
    imports:[routing]
})

export class CorporateAccountModule {}