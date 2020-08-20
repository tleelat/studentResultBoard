import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarkSheetComponent } from './mark-sheet/mark-sheet.component';
import { AdmissionsComponent } from './admissions/admissions.component';


const routes: Routes = [
  { path: '', component: MarkSheetComponent },
  { path: 'mark-sheet', component: MarkSheetComponent },
  { path : 'admissions', component: AdmissionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
