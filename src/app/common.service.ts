import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  checkValue(value) {
    if (value != "" && value != undefined && value != null) return true;
    else return false;
  }

  formatToday(dateParam) {
    var date = new Date(dateParam);
    var day = (date.getDate() <= 9) ? "0" + date.getDate() : date.getDate();
    var month = ((date.getMonth() + 1) <= 9) ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var year = date.getFullYear();

    return day + '-' + month + '-' + year;
  }

  formatDateOnly(date) {
    date = new Date(date);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return days[date.getDay()] + ', ' + months[month] + ' ' + day + ', ' + year;
  }

  formatDate(dateParams) {
    var date = new Date(dateParams);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes: any = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return days[date.getDay()] + ', ' + months[month] + ' ' + day + ', ' + year + ' ' + strTime;
  }

  calculateAgeByDob(dateString) {
    var now = new Date();
    var today = new Date(now.getFullYear(),now.getMonth(),now.getDate());
  
    var yearNow = now.getFullYear();
    var monthNow = now.getMonth();
    var dateNow = now.getDate();
  
    var dob = new Date(dateString.split('-')[2],dateString.split('-')[0]-1,dateString.split('-')[1]);
  
    var yearDob = dob.getFullYear();
    var monthDob = dob.getMonth();
    var dateDob = dob.getDate();
    var age:any = {};
    var ageString = "";
    var yearString = "";
    var monthString = "";
    var dayString = "";
    var yearAge = yearNow - yearDob;
  
    if (monthNow >= monthDob)
      var monthAge = monthNow - monthDob;
    else {
      yearAge--;
      var monthAge = 12 + monthNow -monthDob;
    }
  
    if (dateNow >= dateDob)
      var dateAge = dateNow - dateDob;
    else {
      monthAge--;
      var dateAge = 31 + dateNow - dateDob;
  
      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }
  
    age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
        };
  
    if ( age.years > 1 ) yearString = " years";
    else yearString = " year";
    if ( age.months> 1 ) monthString = " months";
    else monthString = " month";
    if ( age.days > 1 ) dayString = " days";
    else dayString = " day";
  
  
    if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
        ageString = age.years + yearString;
    else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
        ageString = age.days + dayString;
    else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
        ageString = age.years + yearString;
    else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
        ageString = age.years + yearString;
    else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
        ageString = age.months + monthString + " " + age.days + dayString;
    else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
        ageString = age.years + yearString;
    else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
        ageString = age.months + monthString;
    else ageString = dateString;

    return ageString;
}

  getMonth(dateParams,type) {
    var months = ['', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    var shortMonths = ['', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    var date = new Date(dateParams);
    if(type == "FULL") return months[(date.getMonth() + 1)];
    else return shortMonths[(date.getMonth() + 1)];
  }

  getDay(dateParams){
    var date = new Date(dateParams);
    if(date.getDate() < 10) return `0${date.getDate()}`;
    else return `${date.getDate()}`;
  }

  getDaysInMonth(date) {
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return new Date(year, month, 0).getDate();
  };

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}
