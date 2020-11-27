import { Injectable } from '@angular/core';
import { PatientDetail } from './patient-detail.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PatientDetailService {
  
  formData: PatientDetail;
  // Back-End API on AWS cloud
  readonly rootURL = 'https://akarws-eval-test.apigee.net/labproxy';
  readonly apikey = '?apikey=FvCk7ASivGN5shx8pghAsu51KnzjeDC2';
  patient: PatientDetail
  patientsList: PatientDetail[];

  constructor(private http:HttpClient) { }

  // GET (all)
  getAllPatients() {
    this.http.get(this.rootURL + this.apikey)
    .toPromise()
    .then(res => this.patientsList = res as PatientDetail[]); 
    // convert to array of PatientDetail
  }

  // GET by id
  getPatient(id: number) {
    return this.http.get(this.rootURL + '/' + id + this.apikey);
  }

  // GET by province
  getByProvince(province: string) {
    return this.http.get(this.rootURL + '/province/' + province + this.apikey)
    .toPromise()
    .then(res => this.patientsList = res as PatientDetail[]); 
  }
  
  // POST
  postPatient() {
    return this.http.post(this.rootURL + this.apikey , this.formData);
  }

  // PUT
  updatePatient() {
    return this.http.put(this.rootURL + '/' + this.formData.id + this.apikey, this.formData);
  }

  // DELETE
  deletePatient(id) {
    return this.http.delete(this.rootURL + '/' + id + this.apikey);
  }

}
