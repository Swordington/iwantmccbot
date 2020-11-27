/**
 * NOTES ON THE TRIGGERS SYSTEM:
 * Any additons must be in all lowercase, as the system converts all text to lowercase
 * As of now (11/27/20), the system checks for a 100% match, and regex is not supported. Yet.
 */

module.exports = (msg) => {
    if(array.includes(msg.toLowerCase())) return true
}

const array = [
    "how do i join mcc?", 
    "how do i get into mcc?",
    "how do i get into mcc",
    "mcc ip?",
    "how do i join mcc",
    "where is the mcc signup",
    "how do i get picked for mcc",
    "how do i get picked for mcc?",
    "where is the mcc ip?",
    "where is the mcc ip"
]