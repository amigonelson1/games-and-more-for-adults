import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

//NGPrime
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-componente',
  standalone: true,
  imports: [CheckboxModule, FormsModule, ButtonModule],
  templateUrl: './index-componente.component.html',
  styleUrl: './index-componente.component.scss'
})

export class IndexComponenteComponent {

  constructor(private router: Router) { }
  acceptAge:boolean = false;

  redirectHome(){
    this.router.navigate(['home']);
  }

}
