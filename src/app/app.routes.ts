import { Routes } from '@angular/router';
import { MoviesComponent } from './movies-search/movies-search.component';
import { MovieComponent } from './movie/movie.component';

export const appRoutes: Routes = [
    {path: '', component: MoviesComponent},
    {path: 'movie/:id', component: MovieComponent}   
];