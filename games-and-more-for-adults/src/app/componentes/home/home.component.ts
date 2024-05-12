import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Juguetes',
        // icon: 'pi pi-face-smile',
        items: [
          {
            label: 'Para ella',
            icon: 'pi pi-venus',
            // shortcut: '⌘+S'
          },
          {
            label: 'Para el',
            icon: 'pi pi-mars',
          }
        ]
      },
      {
        label: 'Lencería',
        items: [
          {
            label: 'Para ella',
            icon: 'pi pi-venus',
          },
          {
            label: 'Para el',
            icon: 'pi pi-mars',
          }
        ]
      },
      {
        label: 'Estimulantes',
        items: [
          {
            label: 'Para ella',
            icon: 'pi pi-venus',
          },
          {
            label: 'Para el',
            icon: 'pi pi-mars',
          }
        ]
      },
      {
        label: 'Lubricantes',
        items: [
          {
            label: 'Para ella',
            icon: 'pi pi-venus',
          },
          {
            label: 'Para el',
            icon: 'pi pi-mars',
          }
        ]
      }
    ];
  }

}
