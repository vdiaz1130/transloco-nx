import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopSettingsComponent } from './shop-settings.component';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

export const loader = ['en', 'es'].reduce((acc, lang) => {
  acc[lang] = () => import(`./i18n/${lang}.json`);
  return acc;
  ``;
}, {});

// export const availableLangs = ['en', 'es'];

// export const scopeLoader = (importer, root = 'i18n') => {
//   return availableLangs.reduce((acc, lang) => {
//     acc[lang] = () => importer(lang, root);
//     return acc;
//   }, {});
// };

export const routes: Routes = [
  {
    path: '',
    component: ShopSettingsComponent,
    children: [
      {
        path: 'coupons',
        loadChildren: () =>
          import('./coupons/coupons.module').then(m => m.CouponsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [ShopSettingsComponent],
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
export class ShopSettingsModule {}
