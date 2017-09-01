import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-filter',
  templateUrl: './active-filter.component.html',
  styleUrls: ['./active-filter.component.css']
})
export class ActiveFilterComponent implements OnInit {
  
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
  
  values = '';
  toggleId = false;
  toggleName = false;
  toggleCountry = false;

  constructor() { }

  ngOnInit() {

  }

  onKey(event: any) {  
    this.values = event.target.value;
  } 

  toggleSortByID(toggleId) {
    
    if (this.toggleId == false) {
      this.sortByIdDesc();
      this.toggleId = true;
    } else {
      this.sortByID();
      this.toggleId = false;
    }

  }

  toggleSortByName(toggleName) {

    if (this.toggleName == false) {
      this.sortByName();
      this.toggleName = true;
    } else {
      this.sortByNameDesc();
      this.toggleName = false;
    }

  }

  toggleSortByCountry(toggleCtr) {
    
    if (this.toggleCountry == false) {
      this.sortByCountry();
      this.toggleCountry = true;
    } else {
      this.sortByCountryDesc();
      this.toggleCountry = false;
    }

  }


  // Sort Function Definitions Below.

  sortByID(){
        this.mockdata.sort( function(id1, id2) {
	    if ( id1.Id < id2.Id ){
	    	return -1;
	    }else if( id1.Id > id2.Id ){
	        return 1;
	    }else{
	    	return 0;	
	    }
	});
  }
  sortByIdDesc(){
      this.mockdata.sort( function(id1, id2) {
	    if ( id1.Id < id2.Id ){
	    	return 1;
	    }else if( id1.Id > id2.Id ){
	        return -1;
	    }else{
	    	return 0;	
	    }
	});
  }
  sortByName(){
      this.mockdata.sort( function(name1, name2) {
	    if ( name1.Name < name2.Name ){
	    	return -1;
	    }else if( name1.Name > name2.Name ){
	        return 1;
	    }else{
	    	return 0;	
	    }
	});
  }
  sortByNameDesc(){
      this.mockdata.sort( function(name1, name2) {
	    if ( name1.Name < name2.Name ){
	    	return 1;
	    }else if( name1.Name > name2.Name ){
	        return -1;
	    }else{
	    	return 0;	
	    }
	});
  }
  sortByCountry(){
      this.mockdata.sort( function(country1, country2) {
	    if ( country1.Country < country2.Country ){
	    	return -1;
	    }else if( country1.Country > country2.Country ){
	        return 1;
	    }else{
	    	return 0;	
	    }
	});
  }
  sortByCountryDesc(){
      this.mockdata.sort( function(country1, country2) {
	    if ( country1.Country < country2.Country ){
	    	return 1;
	    }else if( country1.Country > country2.Country ){
	        return -1;
	    }else{
	    	return 0;	
	    }
	});
  }


}
