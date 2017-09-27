/**
 * Created by liuzheng on 2017/8/31.
 */
import {Component} from '@angular/core';
import {AppService, DataStore} from '../app.service';

@Component({
  selector: 'app-root',

  template: '<h2>Page not found</h2>'
})
export class PageNotFoundComponent {
  DataStore = DataStore;

  ngOnInit() {
    DataStore.PageNotFoundComponent = true
  }
}
