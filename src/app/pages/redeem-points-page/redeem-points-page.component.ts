import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FirebaseService, RedeemStatus } from 'src/app/services/firebase.service';

export interface RedeemForm {
  secertGroupKey: string;
  pointsKey: string;
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-redeem-points-page',
  templateUrl: './redeem-points-page.component.html',
  styleUrls: ['./redeem-points-page.component.css'],
})
export class RedeemPointsPageComponent implements OnInit, OnDestroy {
  form: FormGroup;
  matcher: MyErrorStateMatcher;
  secertGroupKeyControl: AbstractControl;
  pointsKeyControl: AbstractControl;
  keyRedeemStatus: RedeemStatus;

  constructor(
    formBuilder: FormBuilder,
    private firebaseService: FirebaseService
  ) {
    this.form = formBuilder.group({
      secertGroupKey: ['', Validators.required],
      pointsKey: ['', Validators.required],
    });

    this.secertGroupKeyControl = this.form.get('secertGroupKey');
    this.pointsKeyControl = this.form.get('pointsKey');

    this.matcher = new MyErrorStateMatcher();

    this.keyRedeemStatus = {
      wasRedeemSucess: false,
      points: 0,
      pointsKey: '',
      groupName: ''
    };

  }

  ngOnInit() {}

  async redeemKeys() {
    const data: RedeemForm = this.form.value;
    this.firebaseService.redeemPointsWithKey(data.secertGroupKey, data.pointsKey).then();
    this.firebaseService.redeemed.subscribe((redeemed) => {
      this.keyRedeemStatus = redeemed;
    });
  }

  ngOnDestroy() {
    this.firebaseService.redeemed.unsubscribe();
  }
}
