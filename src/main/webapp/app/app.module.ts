import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JhipsterSampleApplicationMonolithicSharedModule, UserRouteAccessService } from './shared';
import { JhipsterSampleApplicationMonolithicAppRoutingModule} from './app-routing.module';
import { JhipsterSampleApplicationMonolithicHomeModule } from './home/home.module';
import { JhipsterSampleApplicationMonolithicAdminModule } from './admin/admin.module';
import { JhipsterSampleApplicationMonolithicAccountModule } from './account/account.module';
import { JhipsterSampleApplicationMonolithicEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterSampleApplicationMonolithicAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterSampleApplicationMonolithicSharedModule,
        JhipsterSampleApplicationMonolithicHomeModule,
        JhipsterSampleApplicationMonolithicAdminModule,
        JhipsterSampleApplicationMonolithicAccountModule,
        JhipsterSampleApplicationMonolithicEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterSampleApplicationMonolithicAppModule {}
