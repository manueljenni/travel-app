function formatDate(dateInput: Date) {
    var monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var date = new Date(dateInput);
    return date.getDate() + " " + monthNames[date.getMonth()];
  }

  function getRemainingDays(dateInput: Date) {
    var date = new Date(dateInput);
    var today = new Date();
    var diff = date.getTime() - today.getTime();
    return "in " + Math.ceil(diff / (1000 * 3600 * 24)) + " days";
  }

  export default { formatDate, getRemainingDays };

 