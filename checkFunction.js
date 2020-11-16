module.exports = async (message) => {
    const msg = message.content.toLowerCase();

    if (msg.startsWith("How do I get into MCC")) return true
    if (msg.startsWith("How do you get into MCC")) return true
    if (msg.startsWith("How do I join MCC")) return true
    if (msg.startsWith("How do you join MCC")) return true
    if (msg.startsWith("How do I picked")) return true
}