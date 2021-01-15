import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'site-script-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.scss']
})
export class CouponListComponent implements OnInit, OnDestroy {
  data: any;
  constructor(private translocoService: TranslocoService) {
    // Updating lang does not trigger update
    // this.translocoService.setActiveLang('es');
  }

  ngOnInit(): void {
    // Doesn't work
    // this.translocoService.load('en').subscribe(() => {
    //   this.translocoService
    //     .selectTranslateObject(`shopSettings.couponSettings`)
    //     .subscribe(translationObject => {
    //       console.log(translationObject);
    //       this.data = translationObject;
    //     });
    // });

    this.translocoService
      .selectTranslateObject(`shopSettings.couponSettings`)
      .subscribe(translationObject => {
        console.log(translationObject);
        this.data = translationObject;
      });
  }

  ngOnDestroy(): void {}
}
