import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  apiURL:string="http://localhost:8080/api/products";

  constructor(private hhtpObject:HttpClient) { }

  resultados=Array();

  upload(file:any): Promise<any[]>{
    return new Promise<any[]>((resolve,reject)=>{
      var reader = new FileReader();
      reader.onloadend=(e)=>{
        let lineas = reader.result as string;
        let separados = lineas.split("\n");

        for (let lineaactual of separados){
          lineaactual.replace(";",",");
          let columnas = lineaactual.split(",");
          this.hhtpObject.post(this.apiURL,
          {
            "codigoProducto":columnas[0],
            "ivaCompra":columnas[4],
            "nitProveedor":columnas[2],
            "nombreProducto":columnas[1],
            "precioCompra":columnas[3],
            "precioVenta":columnas[5]
          },
          { observe: 'response' }).subscribe(
            (response:any)=>{
              this.resultados.push(response.status);
            }
          );
        }
        resolve(this.resultados);
      }
      reader.readAsText(file);
    });
  }

}
