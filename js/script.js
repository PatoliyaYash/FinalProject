"use strict";

const $ = selector => document.querySelector(selector)

const clearValues = () => {
    $("#name").value = "";
    $("#email").value = "";
    $("#phone").value = "";
    $("#date").value = "";
    $("#amount").value = "";
    $("#name").focus();
}

//To Process the entries
const submitEvent = evt => {
    const Name = $("#name").value;
    const Email = $("#email").value;
    const Phone = $("#phone").value;
    const Date = $("#date").value;
    const Park = parseInt($("#park").value);
    const Adult = parseInt($("#adult").value);
    const Children = parseInt($("#children").value);

    var nameAlert = $("#nameAlert");
    var emailAlert = $("#emailAlert");
    var phoneAlert = $("#phoneAlert");
    var dateAlert = $("#dateAlert");

    let count = 0;
    if (Name == "" && Name.trim() === "") {
        nameAlert.style.display = "inline";
        count = 1;
    }
    else {
        nameAlert.style.display = "none";
        evt.preventDefault();
    }
    //To check email type
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(Email)) {
        emailAlert.style.display = "inline";
        count = 1;
    }
    else if (Email == "") {
        emailAlert.style.display = "inline";
        count = 1;
    }
    else {
        emailAlert.style.display = "none";
        evt.preventDefault();
    }
    var phonePattern = /^\d{10}$/;
    if (Phone == "") {
        phoneAlert.style.display = "inline";
        count = 1;
    }
    else if (!phonePattern.test(Phone)) {
        phoneAlert.style.display = "inline";
        count = 1;
    }
    else {
        phoneAlert.style.display = "none";
        evt.preventDefault();
    }
    var datePattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    if (!datePattern.test(Date)) {
        dateAlert.style.display = "inline";
        count = 1;
    }
    else if (Date == "") {
        dateAlert.style.display = "inline";
        count = 1;
    }
    else {
        dateAlert.style.display = "none";
        evt.preventDefault();
    }
    var Total = (Adult + (Children / 2)) * Park;
    if (Total > 0 && count == 0) {
        alert("Your ticket has been booked successfully.\nYour total amount is $" + Total + ".");
        evt.preventDefault();
    }
}
//To calculate total amount
const calculateTotal = evt => {
    const Park = parseInt($("#park").value);
    const Adult = parseInt($("#adult").value);
    const Children = parseInt($("#children").value);

    var Total = (Adult + (Children / 2)) * Park;
    $("#amount").value = "$" + Total;
    evt.preventDefault();
}

document.addEventListener("DOMContentLoaded", () => {
    $("#submitRequest").addEventListener("click", submitEvent);
    $("#park").addEventListener("click", calculateTotal);
    $("#adult").addEventListener("click", calculateTotal);
    $("#children").addEventListener("click", calculateTotal);
    $("#clearForm").addEventListener("click", clearValues);
});