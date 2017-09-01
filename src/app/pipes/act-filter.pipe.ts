import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'actFilter',
  pure: false
})
export class ActFilterPipe implements PipeTransform {

  transform(data: any, filterString: any, propName1: any, propName2: any, propName3: any): any {
    
    // if(data.length === 0 || filterString === ''){
    //   return data;
    // }
    // const resultArray = [];
    // for(const item of data){
    //   if(  item[propName1] == filterString
    //     || item[propName2] == filterString
    //     || item[propName3] == filterString){
    //     resultArray.push(item);
    //   }
    // }
    // return resultArray;

       if(data.length === 0 || filterString === ''){
      return data;
    }
    
    const resultArray = [];
    var item, lID, lName, lCountry, capsFilter;
    for(let i=0; i < data.length; i++){
      
      item = data[i];
      capsFilter = filterString.toLowerCase();
      lID = item[propName1].toString();
      lName = item[propName2].toLowerCase();
      lCountry = item[propName3].toLowerCase();

      if (lID.includes(capsFilter) || lName.includes(capsFilter) || lCountry.includes(capsFilter)) {
        resultArray.push(item);
      }
    }
    return resultArray;


  }

}