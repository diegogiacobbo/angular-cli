import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const APP_ROUTES: Routes = [
  {path: 'github', component: GithubComponent},
  {path: 'formulaire', component: TemplateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
        console.log(error);
        // this.router.navigate(['404']); // or redirect to default route
    }

  }

 }
