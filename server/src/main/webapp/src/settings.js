import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Users{
  heading = 'Settings';
  settings = [];

  constructor(http){
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://192.168.1.35/server');
    });

    this.http = http;
  }

  activate(){
    return this.http.fetch('settings')
      .then(response => response.json())
      .then(settings => this.settings = settings);
  }
}
