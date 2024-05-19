import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  items: MenuItem[] | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Estimulantes/lubricantes',
        items: [
          {
            label: 'Para ella',
            icon: 'pi pi-venus',
            command: () => {
              this.router.navigate(['home/estimulantes-ellas']);
            }
          },
          {
            label: 'Para el',
            icon: 'pi pi-mars',
            command: () => {
              this.router.navigate(['home/estimulantes-ellos']);
            }
          },
          {
            label: 'Para los dos',
            icon: 'pi pi-heart',
            command: () => {
              this.router.navigate(['home/estimulantes']);
            }
          }
        ]
      },
      {
        label: 'Juguetes',
        items: [
          {
            label: 'Para ella',
            icon: 'pi pi-venus',
            command: () => {
              this.router.navigate(['home/juguetes-ellas']);
            }
          },
          {
            label: 'Para el',
            icon: 'pi pi-mars',
            command: () => {
              this.router.navigate(['home/juguetes-ellos']);
            }
          },
          {
            label: 'Para los dos',
            icon: 'pi pi-heart',
            command: () => {
              this.router.navigate(['home/juguetes']);
            }
          }
        ]
      },
      {
        label: 'Lencería',
        items: [
          {
            label: 'Para ella',
            icon: 'pi pi-venus',
            command: () => {
              this.router.navigate(['home/lenceria-ellas']);
            }
          },
          {
            label: 'Para el',
            icon: 'pi pi-mars',
            command: () => {
              this.router.navigate(['home/lenceria-ellos']);
            }
          },
          {
            label: 'Para los dos',
            icon: 'pi pi-heart',
            command: () => {
              this.router.navigate(['home/lenceria']);
            }
          }
        ]
      }
    ];
  }

  redirecTo(rute: string) {
    this.router.navigate([rute]);
  }

}
