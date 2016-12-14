import { HomeComponent } from './home/home.component';
import { PartAComponent } from './part-a/part-a.component';
import { PartBComponent } from './part-b/part-b.component';
 
export const AppRoutes: any = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "part-a", component: PartAComponent },
    { path: "part-b", component: PartBComponent }
];
 
export const AppComponents: any = [
    HomeComponent,
    PartAComponent,
    PartBComponent
];