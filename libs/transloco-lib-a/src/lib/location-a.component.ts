import { Component, OnInit } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { scopeLoader } from '../../../../scoped-translations';

@Component({
  selector: 'transloco-with-libs-a',
  template: `
    <ng-container *transloco="let t">
      <p>transloco-with-libs-a? {{ t('compA.gpsa') }}</p>
    </ng-container>
  `,
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'compA',
        loader: scopeLoader((lang, root) => {
          console.log('LOADING FROM compA', `./${root}/${lang}.json`);
          return import(`./${root}/${lang}.json`);
        })
      }
    }
  ]
})
export class LocationAComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
