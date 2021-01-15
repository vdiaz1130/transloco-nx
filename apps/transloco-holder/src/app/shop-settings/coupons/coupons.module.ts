import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CouponListComponent } from './coupon-list/coupon-list.component';
import { TranslocoLibBModule } from '@transloco-with-libs/transloco-lib-b';
import { CommonModule } from '@angular/common';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

export const loader = ['en', 'es'].reduce((acc, lang) => {
  acc[lang] = () => import(`../i18n/${lang}.json`);
  return acc;
}, {});

export const availableLangs = ['en', 'es'];

export const scopeLoader = (importer, root = 'i18n') => {
  return availableLangs.reduce((acc, lang) => {
    acc[lang] = () => importer(lang, root);
    return acc;
  }, {});
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CouponListComponent }]),
    TranslocoLibBModule
  ],
  declarations: [CouponListComponent],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useFactory: () => ({
        scope: 'i18n',
        alias: 'shopSettings',
        loader
      })
    }
  ]
})
export class CouponsModule {}
