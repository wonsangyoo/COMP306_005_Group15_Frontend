import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PatientDetail } from 'src/app/shared/patient-detail.model';
import { PatientDetailService } from 'src/app/shared/patient-detail.service';

@Component({
  selector: 'app-patient-detail-list',
  templateUrl: './patient-detail-list.component.html',
  styles: [
  ]
})
export class PatientDetailListComponent implements OnInit {

  selectedProv: string
  // service not accessible from html if private :(
  constructor(public service: PatientDetailService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getAllPatients();
  }

  populateForm(pd: PatientDetail) {
    // this.service.formData = pd;
    this.service.formData = Object.assign({}, pd);
    // console.log(pd.id);
    // console.log(this.service.formData);
  }

  onDelete(id: number) {
    if(confirm('Delete this test record?')) {
      this.service.deletePatient(id)
      .subscribe(res => {
        this.service.getAllPatients();
        this.toastr.warning('Existing Test Deleted Successfully', 'COVID-19 Test Result');
      },
      err=> console.log(err));
    }
  }

  getInfo(id: number) {
    this.service.getPatient(id)
    .subscribe((data: any[]) => {
      console.log(data);
      if (data["result"] == 'Positive') {
        this.toastr.warning('The test result for ' + data["firstName"] + " " + data["lastName"] + ' was recored at: ' + data["testDate"], 'COVID-19 Test Result');
      } else if (data["result"] == 'Negative' || data["result"] == 'Recovered') {
        this.toastr.success('The test result for ' + data["firstName"] + " " + data["lastName"] + ' was recored at: ' + data["testDate"], 'COVID-19 Test Result');
      } else if (data["result"] == 'Unconfirmed') {
        this.toastr.info('The test result for ' + data["firstName"] + " " + data["lastName"] + ' was recored at: ' + data["testDate"], 'COVID-19 Test Result');
      }   
    },
    err => console.log(err));
  }

  showByProvince() {
    console.log("selected Province is: " + this.selectedProv);
    this.service.getByProvince(this.selectedProv);
  }

  getAllTests() {
    this.service.getAllPatients();
  }
}
