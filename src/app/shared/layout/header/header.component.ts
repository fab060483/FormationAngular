import { Component } from '@angular/core';
import { LoginComponent } from '../../../features/blog/login/login.component';
import { SearchBarComponent } from '../../../features/blog/search-bar/search-bar.component';

@Component({
  selector: 'app-header',
  imports: [LoginComponent, SearchBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
