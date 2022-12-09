exports.getDate = function () {
    let today = new Date();
    let options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    };
    return today.toLocaleDateString("en-US", options);
}
