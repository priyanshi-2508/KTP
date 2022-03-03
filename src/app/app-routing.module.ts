import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMeetUpComponent, FavoriteComponent, HeaderComponent, LoginComponent, NewMeetUpComponent, ShowAllMeetUpsComponent } from './ui';
import { IndividualComponent } from './ui/individualMeeting/individual.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'showAllMeet/:id',
    component:IndividualComponent
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
