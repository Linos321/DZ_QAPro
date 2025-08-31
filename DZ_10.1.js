const arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    },
    {
        userName: "Ivan",
        lastName: "Ivanov",
        email: "<ivan.ivanov@gmail.com>"
    }
];

let str = "user1@gmail.com < user2@yahoo.com > spam@malware.ru > trusted.user@gmail.com < invalid@unknown.com";
str = str.replaceAll("<", "").replaceAll(">", "");
const trustedEmails = str.match(/\b[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)\b/g);
console.log("Доверенные email-адреса:");
console.log(trustedEmails);