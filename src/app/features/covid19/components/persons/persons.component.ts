import { Component, OnDestroy, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';

import { Covid19Facade } from '../../covid19-Facade';
import { PersonaViewModel } from '../../models/person.model';
import { PersonaState } from '../../states/person.state';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent  implements OnInit {

  actualizando$: Observable<boolean>;
  coleccionPersonas: PersonaViewModel[] = [];

  constructor(private covid19Facade: Covid19Facade, private ordenState: PersonaState) {

    this.actualizando$ = this.covid19Facade.getActualizando$();

    this.covid19Facade.getPersonas$()
      .subscribe( ( resp ) => {
        this.coleccionPersonas = resp;
      });

  }

  ngOnInit(): void {
  }

}
