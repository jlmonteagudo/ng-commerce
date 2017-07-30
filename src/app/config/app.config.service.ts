import { AppConfig } from './app.config';
import { InjectionToken } from '@angular/core';

//work
/*
export const DATA_APP_CONFIG: AppConfig = {
  apiEndpoint: 'https://localhost/commerce/wp-json/wc/v2/',
  consumerKey: 'ck_a9fc17f50b16b33507773a53616a45a82c0bc875',
  consumerSecret: 'cs_91d0a4df2c339f93512a7684016568f545d3ccee',
  token: 'Y2tfYTlmYzE3ZjUwYjE2YjMzNTA3NzczYTUzNjE2YTQ1YTgyYzBiYzg3NTpjc185MWQwYTRkZjJjMzM5ZjkzNTEyYTc2ODQwMTY1NjhmNTQ1ZDNjY2Vl'
};
*/

//home
export const DATA_APP_CONFIG: AppConfig = {
  apiEndpoint: 'https://localhost/commerce/wp-json/wc/v2/',
  consumerKey: 'ck_68cec210fb32e7d4bdded01324a95d330dcff338',
  consumerSecret: 'cs_3eeaefaf1bf17b7492d182bc8335f36a579434d0',
  token: 'Y2tfNjhjZWMyMTBmYjMyZTdkNGJkZGVkMDEzMjRhOTVkMzMwZGNmZjMzODpjc18zZWVhZWZhZjFiZjE3Yjc0OTJkMTgyYmM4MzM1ZjM2YTU3OTQzNGQw'
};


export let APP_CONFIG_SERVICE = new InjectionToken<AppConfig>('DATA_APP_CONFIG');
