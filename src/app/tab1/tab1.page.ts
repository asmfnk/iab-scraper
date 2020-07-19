import { Component } from '@angular/core';
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
      private iab: InAppBrowser,
  ) {}
  async wkWebView(tmp: string) {
    const url = 'https://www.yahoo.co.jp/'
    const browser = await this.iab.create(url);
    browser.show();
    browser.on('loadstop').subscribe((res) => {
      console.log(res)
      browser.executeScript({code: 'Array.from(document.getElementsByClassName(\'StreamCategory__section--topics\')[0].querySelectorAll(\'h1\')).map(h1 => h1.innerText)'})
          .then(res => console.log(res))
    })
    // if(able) {
    //     this.safariViewController.show({
    //         url: url,
    //         tintColor: '#348fa1'
    //     }).subscribe((result: any) => {
    //             if(result.event === 'opened') console.log('Opened');
    //             else if(result.event === 'loaded') console.log('Loaded');
    //             else if(result.event === 'closed') console.log('Closed');
    //         },
    //         (error: any) => console.error(error)
    //     );
    // }
  }
}
