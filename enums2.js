var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Success"] = 200] = "Success";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.NotFound);
