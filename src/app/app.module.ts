import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { translations } from '@spartacus/assets';
import { B2cStorefrontModule, defaultCmsContentConfig } from '@spartacus/storefront';
import { BootcampConfigModule } from './features/config/config.module';
import { BootcampOutletModule } from './features/outlet/outlet.module';
import { BootcampRoutingModule } from './features/routing/routing.module';
import { MultiSiteModule } from './features/multisite/multi-site.module';
import { ComponentModule } from './features/components/component.module';
import { MiniCartModule } from './features/components/mini-cart/mini-cart.module';
import { DataBindingModule } from './features/data-binding/data-binding.module';
import { SeoModule } from './features/seo/seo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://storefront.c39j2-walkersde1-d4-public.model-t.cc.commerce.ondemand.com',
          legacy: false
        }
      },
      site: {
        baseSite: 'electronics-spa'
      },
      i18n: {
        resources: translations,
        fallbackLang: 'en'
      }
    }),
    BootcampConfigModule,
    BootcampOutletModule,
    BootcampRoutingModule,
    MultiSiteModule,
    ComponentModule,
    MiniCartModule,
    SeoModule,
    //DataBindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
