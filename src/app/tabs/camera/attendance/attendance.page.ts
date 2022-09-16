import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {
  attendance : FormGroup;
  isSubmitted = false;
  modules: any[];

  constructor(private fb: FormBuilder, private toast: ToastService,public loaderservice: LoaderService) { }

  ngOnInit() {
    this.loaderservice.showLoader();
    this.attendance = this.fb.group({
      empname: ['', [Validators.required, Validators.minLength(6)]],
      empcode: ['', [Validators.required, Validators.minLength(6)]],
      emplocation: ['', [Validators.required]]
    });
  }
  submitForm(){
    console.log("Submitform");
    this.isSubmitted = true;
    if (!this.attendance.valid) {
      console.log('Please provide all the required values!')
      this.toast.dangerToast('Please provide all the required values!');
    } else {
       (
        res => {
          if(res == true)
          {
            this.toast.successToast('Successfully');
            this.isSubmitted = false;
            this.attendance.reset();
            (
              () => {
                window.location.reload;
              }
            );
          }
          else{
            this.toast.dangerToast('Failed Please try again');
          }
        }
      );
    }
  }
  resetForm(){
    this.attendance.reset()
  }
}
