let updateDocument = function(document, event) {
    const field = event.target.name.split(".")[1];
    if (['addressLine1', 'addressLine2', 'city', 'postalCode'].includes(field)){
        let respondents = document.respondents.slice();
        let index = document.selectedContactIndex;
        let address = respondents[index].address || {};
        address[field] = event.target.value;
        respondents[index].address = address;
        document.respondents = respondents;
    } else if (['useServiceEmail', 'sendNotifications'].includes(field)) {
        document[field] = event.target.checked;
    } else if (['email', 'phone'].includes(field)) {
        document[field] = event.target.value;
    } else if ('name' === field) {
        document.selectedContactIndex = event.target.value;
    } else if ('respondentList' === field) {
        if ('clear' === event.action ) {
            document.respondents.forEach((respondent) => respondent.selected = false)
        } else {
            document.respondents[event.target.value].selected = event.target.selected;
        }
    } else if ('selectedContact' === field) {
        if (event.target.value) {
            document.selectedContactIndex = event.target.value;
        } else {
            document.selectedContactIndex = null;
        }
        
    }

    return document;
};

export { updateDocument };
