import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { ClusterManagementComponent } from './components/cluster-management/cluster-management.component';


const appRoutes: Routes = [
    { path: '', component: ClusterManagementComponent },
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class ClusterRoutingModule { }
