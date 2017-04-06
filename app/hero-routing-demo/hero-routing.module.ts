import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';

import { UsersComponent } from './components/users.component';
import { DashboardComponent } from './components/dashboard.component';
import { UserDetailComponent } from './components/user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'users',     component: UsersComponent }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class HeroRoutingModule{ }