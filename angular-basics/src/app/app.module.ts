import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ProductComponent } from './products/products.component';
import { HtmlJsBindingComponent } from './html-js-binding/html-js-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ProductListComponent } from './parent-to-child/product-list/product-list.component';
import { ProductChildComponent } from './parent-to-child/product/product.component';
import { KidComponent } from './child-to-parent/kid/kid.component';
import { AdultComponent } from './child-to-parent/adult/adult.component';
import { CRUDComponent } from './crud/crud.component';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ProductComponent,
    ClassBindingComponent,
    HtmlJsBindingComponent,
    StructuralDirectivesComponent,
    ParentComponent,
    ChildComponent,
    ProductListComponent,
    ProductChildComponent,
    KidComponent,
    AdultComponent,
    CRUDComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
