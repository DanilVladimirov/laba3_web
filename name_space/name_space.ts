namespace Data{
    export namespace Personnel {
        export class Employee {
         
            constructor(public name: string){
            }
        }
    }
    export namespace Clients {
        export class VipClient {
         
            constructor(public name: string){
            }
        }
    }
}
 
let tom = new Data.Personnel.Employee("Tom")
console.log(tom.name);
 
let sam = new Data.Clients.VipClient("Sam");
console.log(sam.name);