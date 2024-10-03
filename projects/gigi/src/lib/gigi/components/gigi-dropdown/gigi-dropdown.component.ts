import {Component, Input} from '@angular/core';

@Component({
  selector: 'Gigi-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './gigi-dropdown.component.html',
  styleUrl: './gigi-dropdown.component.css'
})
export class GigiDropdownComponent {
  @Input() title: string = "Select an option"
  dropdownOpen: boolean = false;
  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectOption(): void {
    this.dropdownOpen = false;
  }
}
