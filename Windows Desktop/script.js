
  function updatetime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var meridiem = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; 
    hours = addZeroPadding(hours);
    minutes = addZeroPadding(minutes);
    document.getElementById('time').innerHTML = hours + ':' + minutes + ' ' + meridiem;
  }


  function addZeroPadding(num) { 
    return (num < 10 ? '0' : '') + num;
  }




  setInterval(updatetime, 1000);


function formatDate(date) {
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');
    var year = date.getFullYear();
    return month + '/' + day + '/' + year;
  }
  
  function updateLiveDate() {
    var currentDate = new Date();
    var formattedDate = formatDate(currentDate);
    document.getElementById("date").textContent = formattedDate;
  }
  
  setInterval(updateLiveDate, 1000);
  

