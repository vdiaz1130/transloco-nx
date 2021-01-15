import { Component, Input, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'transloco-with-libs-b',
  template: `
    <ng-container *transloco="let t">
      <div
        style="display: flex; flex-direction: column; background-color: rgba(0,255,0,.125); padding: 20px;"
      >
        <h2>
          I'm a child component in an NX lib. I need access to the language json
          loaded in my parent..
        </h2>
        <p>
          Notice it loads only on subsequent initializations 😔
        </p>
        <p style="padding: 10px; background-color: yellow;">
          Language Data: {{ data | json }}
        </p>
      </div>
    </ng-container>
  `
})
export class LocationBComponent implements OnInit {
  @Input() languagePath;
  data: any;
  constructor(private translocoService: TranslocoService) {}

  ngOnInit() {
    this.translocoService
      .selectTranslateObject(this.languagePath)
      .subscribe(translationObject => {
        console.log(translationObject);
        this.data = translationObject;
      });
  }
}
