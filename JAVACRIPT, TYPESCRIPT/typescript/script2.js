// 7) ІНТЕРФЕЙСИ
// 8) ТИПИ VS. ІНТЕРФЕЙСИ
// const personaluser: IUser = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// }
// ENUM І ЙОГО ТИПИ
var EnumRoles;
(function (EnumRoles) {
    EnumRoles["ADMIN"] = "ADMIN";
    EnumRoles["USER"] = "USER";
    EnumRoles["GUEST"] = "GUEST";
})(EnumRoles || (EnumRoles = {}));
var SuperUser = {
    name: "John",
    age: 30,
    role: EnumRoles.ADMIN,
    isAdmin: true
};
var color = "red" /* Colors.RED */;
