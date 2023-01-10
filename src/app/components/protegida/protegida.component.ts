import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styleUrls: ['./protegida.component.css']
})
export class ProtegidaComponent implements OnInit {

  public usuario:any;
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(perfil =>{
      this.usuario=perfil;
    })
  }

}
