import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DetailspageService} from './git/detailspage.service';


import { AppComponent } from './app.component';
import { DetailspageComponent } from './detailspage/detailspage.component';
import { infoComponent } from './info/info.component';
import { ReposComponent } from './repos/repos.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    AppComponent,
    DetailspageComponent,
    infoComponent,
    ReposComponent
  ],
  
  providers: [DetailspageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
