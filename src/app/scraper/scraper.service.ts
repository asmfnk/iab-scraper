import { Injectable } from '@angular/core';
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

interface ScraperRecipe {
  init: {
    initUrl: string // 初期表示URL
    interval: number // process.conditionを再確認する頻度
    defaultTimeout: number // defaultProcessに移行するまでの時間
  }
  process: ScraperProcess[]
  defaultProcess: ScraperProcess
}
/*
* ScraperProcessを上から検索し、conditionがtrueだったらそのScraperProcessを実行
* jsを流し込み、dataKeyが非nullであれば、localStorageにdataKeyで登録されたものをresponseにdataKeyをkeyとして登録
* endがtrueだった場合終了
* */
interface ScraperProcess {
  condition: string
  js: string
  dataKey: string | null
  end: string
}

@Injectable({
  providedIn: 'root'
})
export class ScraperService {

  scraperRecipe: ScraperRecipe;
  constructor(
    private iab: InAppBrowser,
  ) { }

  async start () {

  }
}
