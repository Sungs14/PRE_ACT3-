import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  // Inputs: values this component receives from its parent.
  fullName = input.required<string>();
  location = input.required<string>();
  email = input.required<string>();
  phone = input.required<string>();
  profile = input.required<string>();

  // Initials for the badge, e.g. "Tanhueco, Jean Kyle S." -> "JK".
  initials = computed(() => {
    const name = this.fullName();
    const given = name.includes(',') ? name.split(',')[1] : name;
    return given
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  });
}
