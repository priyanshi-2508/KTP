import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMeetUpComponent, HeaderComponent, LoginComponent, NewMeetUpComponent, ShowAllMeetUpsComponent } from './ui';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'showAllMeet',
    component:ShowAllMeetUpsComponent
  },
  {
    path:'newMeetUp',
    component : NewMeetUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
