import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor( ) { }

  ngOnInit(): void {
  }

      //login
    //lista_users=["user1","user2","user3"];

    user_correcto:string="admininicial";
    pass_correcto:string="admin123456";
  
    user:string="";
    pass:string="";
  
    correcto:number=-1;

    comparar() {
      if (this.user === this.user_correcto){
        this.correcto = 1;
        if (this.pass === this.pass_correcto){
          this.correcto = 1;
          let barra=document.getElementById("barra");
          barra?.classList.remove("visually-hidden");
        } else {
          this.correcto = 0;
        }
      } else {
        this.correcto = 0;
      }
    }
}
