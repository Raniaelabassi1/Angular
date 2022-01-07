import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  DepartementId:string;
  DepartementName:string;

  ngOnInit(): void {
    this.DepartementId=this.dep.DepartementId;
    this.DepartementName=this.dep.DepartementName;
  }

  addDepartment(){
    var val = {DepartementId:this.DepartementId,
                DepartementName:this.DepartementName};
    this.service.addDepartment(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDepartment(){
    var val = {DepartementId:this.DepartementId,
      DepartementName:this.DepartementName};
    this.service.updateDepartment(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
