function CheckListed( myCountry ) {
    const txtSearch = myCountry.options[myCountry.selectedIndex].text;
    
     var objList = document.getElementById("dataListNetworkCountries");
     var allCountryList =  document.getElementById("dataAllCountries");
     var greenCountries = ['AT', 'BE', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'LV', 'LT', 'MD', 'NL', 'NO', 'ES', 'SE', 'CH', 'GB', 'PL', 'HU', 'PT', 'TR', 'UA', 'RO', 'RU', 'AL', 'BA', 'BG', 'IS', 'RS', 'MT', 'IE', 'ME', 'GL', '??', 'LU', 'LI', 'AD', '??', '??', 'MK', 'SI', 'CY', 'HR', 'US', 'MX', 'EC', 'PE', 'UY', 'CU', 'BO', 'CO', 'BR', 'CR', 'PR', 'CA', 'DO', '??', 'PA', 'BS', 'VE', 'GT', 'NI', 'JM', 'AR', 'CL', 'PY', 'KP', 'TW', 'GE', 'KH', 'ID', 'MY', 'TH', 'PH', 'SG', 'KZ', 'BD', 'LK', 'MN', 'NP', 'VN', 'HK', 'AM', 'LA', 'MV', 'BT', 'PK', 'KG', 'AZ', 'MM', 'JP', 'IN', 'MA', 'TN', 'ZA', 'EG', 'KE', 'ET', 'NG', 'CM', 'MG', 'TZ', 'ZW', 'SC', 'UG', 'MU', 'GH', 'BW', 'SN', 'DZ', 'AE', 'JO', 'SA', 'IL', 'QA', 'LB', 'BH', 'KW', 'OM', 'NZ', 'AU', 'FJ'];
     var selectedCountry = allCountryList.options[allCountryList.selectedIndex].value;
   
   // checking datalist from wp
     for (var i = 0; i < objList.options.length; i++) {
      if ( objList.options[i].value== txtSearch ) {
       var networkUrl = objList.options[i].dataset.url;
   
         $('#learnMore').attr("href", `network/`+ networkUrl+`/`);
          $('.is-covered').show();
          $('.is-not-covered').hide();
          $('.js-networktext').hide();
          $('.is-perhaps-covered').hide();
          return true ;     
       }
      }
    
      // checking rest of the countries: covered please contact
      for (var i = 0; i < allCountryList.options.length; i++) {
       if(greenCountries.indexOf(selectedCountry) !== -1)  {
          $('.is-covered').hide();
          $('.is-not-covered').hide();
          $('.js-networktext').hide();
          $('.is-perhaps-covered').show();
          return true ;    
       }  
     }
   
     // if both are false : not covered
      $('.is-not-covered').show();
      $('.is-covered').hide();
      $('.js-networktext').hide();
      $('.is-perhaps-covered').hide();
   
   // if empty
      if (  txtSearch.length == 0 ) {
        $('.is-covered').hide();
       $('.is-not-covered').hide();
       $('.is-perhaps-covered').hide();
       $('.js-networktext').show();
   
     }
   
        return false ; // text does not matched ;
        
    }