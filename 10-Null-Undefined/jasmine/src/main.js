let visitorName = "Kaden";
let visitorAge = 45
letVisitorTicketId = "Tic48";

let visitor = {name: visitorName,
                age: visitorAge,
                ticketId: letVisitorTicketId
}

//Task 2
visitor.tickedId = null;
console.log(visitor);

//Task 3
let tickets= {
    "Ticket48": null,
    "Ticket49": "Kaden",
}
let ticketIdToCheck = "Ticket48";
let ticketStatusResult;
if(!(ticketIdToCheck in tickets)){
    ticketStatusResult = "uknown ticketd id";
}

else if (tickets[ticketIdToCheck] == null){
    ticketStatusResult = "not sold";
}

else{ticketStatusResult = "sold to " + tickets[ticketIdToCheck];
}
console.log(ticketStatusResult);


//Task 4
let simpleTicketStatusResult;
if (ticketIdToCheck in tickets && tickets[ticketIdToCheck]){
    simpleTicketStatusResult = tickets[ticketIdToCheck]
}
else{simpleTicketStatusResult = "invalid ticket"}

console.log(simpleTicketStatusResult);

//Task 5
let visitorWithGtc = {
    name: "Kaden",
    gtc: {version: "v2.0"}
}
let gtcVersion;
if (visitorWithGtc.gtc && visitorWithGtc.gtc.version){
    gtcVersion = visitorWithGtc.gtc.version;
}
console.log(gtcVersion);