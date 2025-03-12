import { Component } from '@angular/core';
import { SearchBarComponent } from '../../../features/blog/components/search-bar/search-bar.component';

@Component({
  selector: 'app-header',
  imports: [SearchBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
