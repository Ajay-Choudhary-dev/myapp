import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { haschangesGuard } from './guards/haschanges.guard';
import { PermanentJobsComponent } from './components/permanent-jobs/permanent-jobs.component';
import { ContractJobsComponent } from './components/contract-jobs/contract-jobs.component';
import { userdetailsResolver } from './resolvers/userdetails.resolver';
import { adminGuard } from './guards/admin.guard';
import { ProductDetailsComponent } from './components/product-details/product-details.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent, canDeactivate: [haschangesGuard] },
    {
        path: 'careers',
        component: CareersComponent,
        children: [
            { path: '', redirectTo: 'permanent', pathMatch: 'full' },
            { path: 'permanent', component: PermanentJobsComponent },
            { path: 'contract', component: ContractJobsComponent }
        ]
    },
    { path: 'users', component: UserListComponent },
    {
        path: 'userdetails/:id',
        component: UserDetailsComponent,
        resolve: { userInfo: userdetailsResolver }
    },
    {
        path: 'products',
        canActivate: [adminGuard],
        loadComponent: () =>
            import('./components/product-list/product-list.component').then((x) => x.ProductListComponent)
    },
    { path: 'productdetails', component: ProductDetailsComponent },
    { path: '**', component: NotfoundComponent },
];
