import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatientDetailService } from 'src/app/shared/patient-detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styles: [
  ]
})
export class PatientDetailComponent implements OnInit {

  constructor(public service: PatientDetailService, 
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.clearForm();
  }

  clearForm(form?:NgForm) {
    if(form!=null) {
      form.resetForm();
    }  
    this.service.formData = {
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
      age: 0,
      gender: "",
      address: "",
      city: "",
      province: "",
      result: ""
      }
  }

  onSubmit(form:NgForm) {
    if(this.service.formData.id==0) { // create
      this.insertRecord(form);
    } else { // update
      this.updateRecord(form);
    }
    
  }

  insertRecord(form: NgForm) {
    this.service.postPatient().subscribe(
      res => {
        this.clearForm(form);
        this.toastr.success('New Test Result Submitted', 'COVID-19 Test Result');
        this.service.getAllPatients();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.updatePatient().subscribe(
      res => {
        this.clearForm(form);
        this.toastr.info('Existing Test Result Updated', 'COVID-19 Test Result');
        this.service.getAllPatients();
      },
      err => {
        console.log(err);
      }
    )
  }

}
