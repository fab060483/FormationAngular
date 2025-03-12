import { Component } from '@angular/core';
import { SearchBarComponent } from '../../../features/blog/components/search-bar/search-bar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, SearchBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
