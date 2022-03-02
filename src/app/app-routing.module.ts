import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMeetUpComponent, FavoriteComponent, HeaderComponent, LoginComponent, NewMeetUpComponent, ShowAllMeetUpsComponent } from './ui';

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
  },
  {
    path : 'favorite',
    component:FavoriteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
