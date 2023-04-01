import { Component, OnInit } from '@angular/core';
import {PrayDates} from "../../vm/pray-dates";
import {PrayTimes} from "../../vm/pray-times";
import {MyHttpService} from "../../services/my-http.service";

@Component({
  selector: 'app-consume-api',
  templateUrl: './consume-api.component.html',
  styleUrls: ['./consume-api.component.css']
})
export class ConsumeAPiComponent implements OnInit {

  prayerDates:PrayDates
  prayerTimes:PrayTimes
  constructor(private myHttp:MyHttpService) { }

  ngOnInit(): void {
    console.log("hhh "+navigator.geolocation.getCurrentPosition);
    navigator.geolocation.getCurrentPosition((position)=>{
         this.myHttp.getTimes(position.coords.latitude,position.coords.longitude)
      .subscribe(response=>{
        this.prayerDates=new PrayDates(response.data[0].date.gregorian.date,response.data[0].date.hijri.date)
        let timings=response.data[0].timings;
        console.log(timings)
        this.prayerTimes=new PrayTimes(
          timings.Fajr,timings.Dhuhr,timings.Asr,timings.Maghrib,timings.Isha
        );
        console.log(this.prayerTimes)
      })
    })




  }

}
