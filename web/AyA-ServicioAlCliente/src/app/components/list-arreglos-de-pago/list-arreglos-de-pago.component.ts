import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TramitesService } from 'src/app/services/tramites.service';


@Component({
  selector: 'app-list-arreglos-de-pago',
  templateUrl: './list-arreglos-de-pago.component.html',
  styleUrls: ['./list-arreglos-de-pago.component.css']
})
export class ListArreglosDePagoComponent implements OnInit {

  constructor(
    private readonly _tramitesService: TramitesService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  tramites!: any[]

  ngOnInit(): void {
    this.getTramites();
  }

  async getTramites(){
    let res = (await this._tramitesService.getTramites().toPromise());
    if(res?.success){
      this.tramites = res?.data;
    }
    else{
      console.log(res?.message);
    }
  }

  goToEditTramite(id: string, type: string){
    switch (type) {
      case "Arreglo de pago":
        //this.router.navigate(['/edit-arreg', id]);
        break;
    
      default:
        break;
    }
  }
}
