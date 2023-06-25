var Data;
(function (Data) {
    var Personnel;
    (function (Personnel) {
        var Employee = /** @class */ (function () {
            function Employee(name) {
                this.name = name;
            }
            return Employee;
        }());
        Personnel.Employee = Employee;
    })(Personnel = Data.Personnel || (Data.Personnel = {}));
    var Clients;
    (function (Clients) {
        var VipClient = /** @class */ (function () {
            function VipClient(name) {
                this.name = name;
            }
            return VipClient;
        }());
        Clients.VipClient = VipClient;
    })(Clients = Data.Clients || (Data.Clients = {}));
})(Data || (Data = {}));
var tom = new Data.Personnel.Employee("Tom");
console.log(tom.name);
var sam = new Data.Clients.VipClient("Sam");
console.log(sam.name);
