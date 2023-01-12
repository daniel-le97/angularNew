export class Account {
  name: string
  picture: string
  constructor(data: any){
    this.name = data.name
    this.picture = data.picture
  }

}
