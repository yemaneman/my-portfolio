
function goToSection(id) {
  if (id==='contact'){
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }
  else if(id==='projects'){
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  }
}
const form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault(); 
  const formElement = event.currentTarget;
  const formData = new FormData(formElement);

  // 1. Manually add the form name to the data
  formData.append("form-name", formElement.getAttribute("name"));

  try {
    const response = await fetch("/", { // 2. Post to the root or current path
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" }, // 3. Correct header
      body: new URLSearchParams(formData).toString() // 4. URL-encode the body
    });

    if (response.ok) {
      console.log("Success!");
      formElement.reset();
    } else {
      console.error("Submission failed");
    }
  } catch (error) {
    console.error("Network error:", error);
  }
}

form.addEventListener("submit", handleSubmit);
const messageArea = document.querySelector('textarea[name="Message"]');

messageArea.addEventListener("keydown", function(event) {
  // Check if "Enter" was pressed AND "Shift" was NOT held (Shift+Enter usually means new line)
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault(); // Stop a new line from being added
    document.getElementById("myForm").requestSubmit(); // Trigger the submit event
  }
});

