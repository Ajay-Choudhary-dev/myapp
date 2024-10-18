import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UserResolver } from './user-resolver.resolver';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'careers', component: CareersComponent },
    { path: 'users', component: UsersListComponent },
    {
        path: 'userdetails/:id', component: UserDetailsComponent,
        resolve: {
            user: UserResolver
        }
    },
    { path: 'products', component: ProductListComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: NotfoundComponent },

];
