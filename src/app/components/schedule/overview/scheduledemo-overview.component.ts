/*
 MIT License

 Copyright (c) 2018 Temainfo Software

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
import { Component, ChangeDetectorRef } from '@angular/core';

import * as json from './scheduledemo-overview-dataproperties.json';
import * as jsonEvts from './scheduledemo-overview.dataevents.json';

@Component( {
  selector : 'app-schedule',
  templateUrl : './scheduledemo-overview.component.html',
  styleUrls : [ './scheduledemo-overview.component.scss' ]
} )
export class ScheduleDemoOverviewComponent {

  public dataTableProperties;

  public dataEvents;

  public dataSource = [];

  public statusConfig = {
    attended : { status : 'attended', color : '#90ED5D', description : 'Attended' },
    missed: { status : 'missed', color : '#FF385C', description : 'Missed' },
    notmet: { status : 'notmet', color : '#1d8bff', description : 'Not Met' }
  };

  public data = [
    {
      value: '1',
      title: 'William Aguera - 1',
      detail: 'Consulta | Particular',
      status: 'missed',
      allday: false,
      date: { start: new Date().getTime() - 3600000 , end: new Date().getTime() - 1800000 }
    },
   {
    value: '2',
    title: 'William Aguera - 2',
    detail: 'Consulta | Particular',
    status: 'attended',
    allday: false,
    date: { start: new Date().getTime() , end: new Date().getTime() + 1800000 }
  },
    {
      value: '3',
      title: 'William Aguera - 3',
      detail: 'Consulta | Particular',
      allday: false,
      status: 'attended',
      date: { start: new Date().getTime() , end: new Date().getTime() + 1800000 }
    },
  {
    value: '4',
    title: 'Jerson Algo - 4',
    detail: 'Consulta | Unimed',
    allday: false,
    status: 'missed',
    date: { start: new Date().getTime() - 1800000 , end: new Date().getTime() + 1800000 }
  },
  {
    value: '5',
    title: 'Jerson Algo - 5',
    detail: 'Consulta | Unimed',
    allday: false,
    status: 'attended',
    date: { start: new Date().getTime() - 1800000 , end: new Date().getTime() + 1800000 }
  },
  {
    value: '6',
    title: 'Maicon Aguera - 6',
    detail: 'Consulta | Unimed',
    allday: false,
    status: 'missed',
    date: { start: new Date().getTime() , end: new Date().getTime() + 1800000 }
  },
    {
      value: '7',
      title: 'Adilson Nascimento - 7',
      detail: 'Consulta | UNIPREV',
      allday: false,
      status: 'notmet',
      date: { start: new Date().getTime() - 1800000 , end: new Date().getTime() }
    },
  {
    value: '7',
    title: 'Adilson Nascimento - 7',
    detail: 'Consulta | UNIPREV',
    allday: false,
    status: 'attended',
    date: { start: new Date().getTime() - 1800000 , end: new Date().getTime() }
  },
  {
    value: '8',
    title: 'Adilson Nascimento - 8',
    detail: 'Consulta | UNIPREV',
    allday: false,
    status: 'notmet',
    date: { start: new Date().getTime() - 1800000 , end: new Date().getTime() }
  },
  {
    value: '9',
    title: 'Edevaldo Nascimento - 9',
    detail: 'Consulta | UNIPREV',
    allday: false,
    status: 'attended',
    date: { start: new Date().getTime() - 1800000 , end: new Date().getTime() }
  },
  {
    value: '10',
    title: 'Adilson Nascimento - 10',
    detail: 'Consulta | UNIPREV',
    allday: false,
    status: 'attended',
    date: { start: new Date().getTime() , end: new Date().getTime() + 1800000}
  },
  {
    value: '11',
    title: 'Jaisson Buccio - 12',
    detail: 'Consulta | Copel',
    allday: false,
    status: 'attended',
    date: { start: new Date().getTime() , end: new Date().getTime() + 1800000 }
  },
  {
    value: '12',
    title: 'Jaisson Buccio - 12',
    detail: 'Consulta | Copel',
    allday: false,
    status: 'notmet',
    date: { start: new Date().getTime() + 1800000 , end: new Date().getTime() + 5400000 }
  },
  {
    value: '13',
    title: 'Jaisson Buccio - 13',
    detail: 'Consulta | Copel',
    allday: false,
    status: 'notmet',
    date: { start: new Date().getTime() + 1800000 , end: new Date().getTime() + 3600000 }
  },
  {
    value: '14',
    title: 'Jaisson Buccio - 14',
    detail: 'Consulta | Copel',
    allday: false,
    status: 'notmet',
    date: { start: new Date().getTime() + 1800000 , end: new Date().getTime() + 3600000 }
  },
  {
    value: '15',
    title: 'Jaisson Buccio - 15',
    detail: 'Consulta | Copel',
    allday: false,
    status: 'attended',
    date: { start: new Date().getTime() + 1800000 , end: new Date().getTime() + 3600000 }
  },
  {
    value: '16',
    title: 'Jaisson Buccio - 16',
    detail: 'Consulta | Copel',
    allday: false,
    status: 'attended',
    date: { start: new Date().getTime() + 1800000 , end: new Date().getTime() + 3600000 }
  },
  {
    value: '14',
    title: 'Jaisson Buccio - 14',
    detail: 'Consulta | Copel',
    allday: false,
    status: 'attended',
    date: { start: new Date().getTime() + 5400000 , end: new Date().getTime() + 10800000 }
  },
  {
    value: '15',
    title: 'Jaisson Buccio - 15',
    detail: 'Consulta | Copel',
    allday: false,
    status: 'notmet',
    date: { start: new Date().getTime() + 5400000 , end: new Date().getTime() + 7200000 }
  }
  ];

  constructor( private change: ChangeDetectorRef ) {
    this.dataTableProperties = json.dataProperties;
    this.dataEvents = jsonEvts.dataEvents;

    setTimeout(() => {
      this.getDataSource()
        .then((data: Array<any>) => {
          this.dataSource = data;
          this.change.detectChanges();
        });
    }, 3000);
  }

  getDataSource() {
    return new Promise((resolve) => {
      resolve(this.data);
    });
  }

  onEventDbClick( event ) {
    console.log('EVENT CLICK: ', event);
  }

  onRowClick( event ) {
    console.log('ROW DBCLICK: ', event );
    console.log('ROW DBCLICK START TIME: ', new Date(event.start));
    console.log('ROW DBCLICK END TIME: ', new Date(event.end));
  }


}

