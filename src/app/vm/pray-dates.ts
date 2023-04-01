export class PrayDates {

  constructor(private _gregorian:string, private _hijri:string) {
  }


  get hijri(): string {
    return this._hijri;
  }

  get gregorian(): string {
    return this._gregorian;
  }
}
