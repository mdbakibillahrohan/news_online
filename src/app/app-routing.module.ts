import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { NewsListComponent } from "./Components/news-list/news-list.component";

const appRoutes: Routes = [
  { path: 'category/:category', component: NewsListComponent },
  { path: '', redirectTo: 'category/general', pathMatch: "full" }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
    // other imports here
  ],
})
export class AppRoutingModules { }
