import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSliderModule} from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListInlineComponent } from './user-list-inline/user-list-inline.component';
import {UserModule} from './user/user.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserListInlineComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,MatFormFieldModule,
    UserModule,MatCardModule,
    NgbModule,MatButtonModule,
    BrowserAnimationsModule,MatInputModule,MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
