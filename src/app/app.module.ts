import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { Common } from './app.common.service';
import { ToDoModule } from './todo/todo.module';
import { MockModule } from './mock/mock.module';
import { AppRoutingModule, routedComponents } from './app.routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ToDoModule,
        HttpModule,
        MockModule
    ],
    declarations: [
        AppComponent,
        routedComponents
    ],
    providers: [ Common ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }