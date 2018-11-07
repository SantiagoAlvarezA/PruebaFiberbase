import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PersonsService } from './services/persons.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonsComponent } from './persons/persons.component';


//fiberbase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFireAuthModule } from '@angular/fire/auth';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'persons', component: PersonsComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PersonsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),

        //fiberbase
        AngularFireModule.initializeApp(environment.Firebase),//importado de enviroment.ts
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
    providers: [PersonsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
