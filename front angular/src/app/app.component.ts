import { Component } from '@angular/core';
import { ApiService } from './api.service';
import{Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front angular';
  // // exibir na mesma tale
  selected_menber = { id: 0, name: '', surname: '' };
  menbers = [
    {
      name: 'Member 01',
      id: 1,
      surname: 'Ciclano',
      photo: 'http://www.minhaapp.com/photo1',
    },
    {
      name: 'Member 02',
      id: 2,
      surname: 'Beltrano',
      photo: 'http://www.minhaapp.com/photo2',
    },
    {
      name: 'Member 03',
      id: 3,
      surname: 'Fulano',
      photo: 'http://www.minhaapp.com/photo3',
    },
  ];
  constructor(private api: ApiService, private router: Router) {
    this.getMembers();
  }
  // buscar dados da api
  getMembers = () => {
    this.api.getAllMembers().subscribe(
      (data) => {
        // mombers nome da tabela no banco
        this.menbers = data;
      },
      (error) => {
        console.log('Aconteceu um erro', error.message);
      }
    );
  };
  // adicionando o click
  menberClicked = (menber:any) => {
  this.router.navigate(['member-detail',menber.id])
  };
}
