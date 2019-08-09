import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'badges',
        loadChildren: './basic-badge/basic-badge.module#BasicBadgeModule'
      },
      {
        path: 'breadcrumb-paging',
        loadChildren: './breadcrumb-paging/breadcrumb-paging.module#BreadcrumbPagingModule'
      },
      {
        path: 'collapse',
        loadChildren: './basic-collapse/basic-collapse.module#BasicCollapseModule'
      },
      {
        path: 'tabs-pills',
        loadChildren: './basic-tabs-pills/basic-tabs-pills.module#BasicTabsPillsModule'
      }
    ]
  }
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiBasicRoutingModule { }
