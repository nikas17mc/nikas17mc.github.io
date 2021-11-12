const name = [
    "Music",
    "Mumien",
    "Mugert",
    "Funny"
    ];
    function displayData(name) {
        element("search-data");
        if (name == "Music") {
           window.location.href = "./next.html"
        }
        if (name == "Funny") {
          window.location.href = "./test.html"
       }
      }