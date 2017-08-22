import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-sort',
  templateUrl: './pipe-sort.component.html',
  styleUrls: ['./pipe-sort.component.css']
})
export class PipeSortComponent implements OnInit {

  mockdata = 
            [  
                {  
                    "Id":121,
                    "Name":"Acme",
                    "Country":"US"
                },
                    {  
                    "Id":141,
                    "Name":"Smiths",
                    "Country":"UK"
                },
                    {  
                    "Id":151,
                    "Name":"Jones",
                    "Country":"US"
                },
                    {  
                    "Id":111,
                    "Name":"Renault",
                    "Country":"FRANCE"
                },
                    {  
                    "Id":131,
                    "Name":"Schneider",
                    "Country":"Germany"
                }
            ];
    constructor() { }

  ngOnInit() { 
        //   console.log(this.mockdata[0].Id);
  }

}
