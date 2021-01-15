import { ChangeDetectorRef, ElementRef, EmbeddedViewRef, OnChanges, OnDestroy, OnInit, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslocoService } from './transloco.service';
import { HashMap, TranslocoScope } from './types';
export declare class TranslocoDirective implements OnInit, OnDestroy, OnChanges {
    private translocoService;
    private tpl;
    private providerScope;
    private providerLang;
    private providedLoadingTpl;
    private vcr;
    private cdr;
    private host;
    subscription: Subscription | null;
    view: EmbeddedViewRef<any>;
    private translationMemo;
    key: string;
    params: HashMap;
    inlineScope: string | undefined;
    inlineRead: string | undefined;
    inlineLang: string | undefined;
    inlineTpl: TemplateRef<any> | undefined;
    private currentLang;
    private loaderTplHandler;
    private initialized;
    private path;
    private langResolver;
    private scopeResolver;
    constructor(translocoService: TranslocoService, tpl: TemplateRef<{
        $implicit: (key: string, params?: HashMap) => any;
    }>, providerScope: TranslocoScope, providerLang: string | null, providedLoadingTpl: Type<any> | string, vcr: ViewContainerRef, cdr: ChangeDetectorRef, host: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    private simpleStrategy;
    private structuralStrategy;
    private getTranslateFn;
    private getLoadingTpl;
    ngOnDestroy(): void;
    private detachLoader;
}
