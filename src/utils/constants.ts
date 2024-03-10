type Event = "addChar" | "delete" | "reset" | "calculate";

export type Button = {
    content: string,
    classes: string,
    event: Event,
}

export const buttons: Button[] = [
    { content: "7", classes: "btn", event: "addChar" },
    { content: "8", classes: "btn", event: "addChar" },
    { content: "9", classes: "btn", event: "addChar" },
    { content: "DEL", classes: "btn btn-del", event: "delete" },
    { content: "4", classes: "btn", event: "addChar" },
    { content: "5", classes: "btn", event: "addChar" },
    { content: "6", classes: "btn", event: "addChar" },
    { content: "+", classes: "btn", event: "addChar" },
    { content: "1", classes: "btn", event: "addChar" },
    { content: "2", classes: "btn", event: "addChar" },
    { content: "3", classes: "btn", event: "addChar" },
    { content: "-", classes: "btn", event: "addChar" },
    { content: ".", classes: "btn", event: "addChar" },
    { content: "0", classes: "btn", event: "addChar" },
    { content: "/", classes: "btn", event: "addChar" },
    { content: "x", classes: "btn", event: "addChar" },
    { content: "RESET", classes: "btn btn-del btn-bottom", event: "reset" },
    { content: "=", classes: "btn btn-bottom btn-submit", event: "calculate" },
];

