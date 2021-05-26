function formValidate() {
    var fnameVal = document.forms["mailing-list-form"]["fname"].value;
    var lnameVal = document.forms["mailing-list-form"]["lname"].value;
    var emailVal = document.forms["mailing-list-form"]["email"].value;

    if (fnameVal == "" || lnameVal == "" || emailVal == "") {
        alert("All fields must be filled out");
        return false;
    }
}