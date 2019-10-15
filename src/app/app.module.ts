import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DyanamicGraphComponent } from './Graph/dyanamic-graph/dyanamic-graph.component';
import { HeaderComponent } from './Header/header/header.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CircularButtonComponent } from './Graph/html-elements/circular-button/circular-button.component';
import { AddButtonComponent } from './Graph/html-elements/add-button/add-button.component';
import { MessageNodeComponent } from './Graph/html-elements/message-node/message-node.component';
import { ConditionCircleComponent } from './Graph/html-elements/condition-circle/condition-circle.component';

@NgModule({
  declarations: [
    AppComponent,
    DyanamicGraphComponent,
    HeaderComponent,
    CircularButtonComponent,
    AddButtonComponent,
    MessageNodeComponent,
    ConditionCircleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
