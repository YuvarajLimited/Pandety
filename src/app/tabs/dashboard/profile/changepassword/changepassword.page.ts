import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {
changepassword: FormGroup;
isSubmitted = false;
modules: any[];

  constructor(private fb: FormBuilder,
    private toast: ToastService,
    private router: Router) { }

ngOnInit() {
this.changepassword = this.fb.group({
  login_id: ['', [Validators.required, Validators.minLength(6)]],
  login_id1: ['', [Validators.required, Validators.minLength(6)]],
  login_id2: ['', [Validators.required, Validators.minLength(6)]]
});
}
submitForm(){
console.log("Submitform");
this.isSubmitted = true;
if (!this.changepassword.valid) {
console.log('Please provide all the required values!')
this.toast.dangerToast('Please provide all the required values!');
} else {
(
res => {
if(res == true)
{
  this.toast.successToast('Successfully');
  this.isSubmitted = false;
  this.changepassword.reset();
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
this.changepassword.reset()
}
}