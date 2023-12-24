import { Component } from '@angular/core';
import { Page1Component } from '../../components/page1/page1.component'
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component'
import { FormComponent } from '../../components/form/form.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Page1Component,MenuBarComponent,FormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
