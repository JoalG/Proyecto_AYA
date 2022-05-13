import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuspensionService } from 'src/app/services/suspension.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-suspensions',
  templateUrl: './list-suspensions.component.html',
  styleUrls: ['./list-suspensions.component.css']
})
export class ListSuspensionsComponent implements OnInit {

  constructor(
    private readonly _suspensionService: SuspensionService,
    private router: Router,
    private toastr: ToastrService
  ) { }
  
    suspensions!: any[]
    idToDelete!:string;
  
    ngOnInit(): void {
      this.getSuspensions();
    }
  
    async getSuspensions(){
      let res = (await this._suspensionService.getSuspensions().toPromise());
      if(res?.success){
        this.suspensions = res?.data;
      }
      else{
        console.log(res?.message);
      }
    }
  
    goToEditSuspension(_id: string){
      this.router.navigate(['/edit-suspension', _id]);
    }
  
    goToCreateSuspension(){
      this.router.navigate(['/create-suspension']);
    }
  
    setIdToDelte(_id: string){
      this.idToDelete=_id;
    }
    
    confirmDeleteBox() {
      this.deleteSuspension(this.idToDelete);
    }
  
    async deleteSuspension(_id: string){
      let res = (await this._suspensionService.deleteSuspension(_id).toPromise());
      if(res?.success){
        this.getSuspensions();
        this.toastr.success("Suspensión eliminada con éxito");
      }
      else{
        this.toastr.error("Suspensión no pudo ser eliminada");
      }
    }

}
