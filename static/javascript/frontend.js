function guessCategory(selectedOption) {
  var selectedImage = document.getElementById("random-image").src;
  // Send selected option and image filename to backend
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/guess", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          // Update UI with feedback
          document.getElementById("feedback").innerText = response.feedback;
      }
  };
  xhr.send(JSON.stringify({selected_option: selectedOption, selected_image: selectedImage}));
}
