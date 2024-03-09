type Event = "addchar" | "delete" | "reset" | "calculate";

type Button = {
    content: string,
    classes: string,
    event: Event,
}

export const buttons: Button[] = [
    { content: "7", classes: "btn", event: "addchar" },
    { content: "8", classes: "btn", event: "addchar" },
    { content: "9", classes: "btn", event: "addchar" },
    { content: "DEL", classes: "btn btn-del", event: "delete" },
    { content: "4", classes: "btn", event: "addchar" },
    { content: "5", classes: "btn", event: "addchar" },
    { content: "6", classes: "btn", event: "addchar" },
    { content: "+", classes: "btn", event: "addchar" },
    { content: "1", classes: "btn", event: "addchar" },
    { content: "2", classes: "btn", event: "addchar" },
    { content: "3", classes: "btn", event: "addchar" },
    { content: "-", classes: "btn", event: "addchar" },
    { content: ".", classes: "btn", event: "addchar" },
    { content: "0", classes: "btn", event: "addchar" },
    { content: "/", classes: "btn", event: "addchar" },
    { content: "x", classes: "btn", event: "addchar" },
    { content: "RESET", classes: "btn btn-del btn-bottom", event: "reset" },
    { content: "=", classes: "btn btn-bottom btn-submit", event: "calculate" },
];

