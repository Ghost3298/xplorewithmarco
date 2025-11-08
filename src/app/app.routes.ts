import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Destinations } from './destinations/destinations';
import { Contact } from './contact/contact';
import { Blog } from './blog/blog';

export const routes: Routes = [
    {
        path: "", component: Home
    },
    {
        path:"destinations", component: Destinations
    },
    {
        path:"contact-us", component: Contact
    },
    {
        path:"blog", component: Blog
    }
];
