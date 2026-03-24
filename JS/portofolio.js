
function goToSection(id) {
  if (id==='contact'){
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }
  else if(id==='projects'){
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  }
}
var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault(); 
  const formElement = event.currentTarget;
  const data = new FormData(formElement);

  try {
    const response = await fetch(formElement.action, {
      method: "POST", // Explicitly set POST
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      formElement.reset();
    } else {
      const errorData = await response.json();
      console.error("Formspree Error:", errorData);
    }
  } catch (error) {
    // This is where "Failed to fetch" is caught
    console.error("Network/CORS Error:", error);
  }
}

document.getElementById("myForm").addEventListener("submit", handleSubmit);
const messageArea = document.querySelector('textarea[name="Message"]');

messageArea.addEventListener("keydown", function(event) {
  // Check if "Enter" was pressed AND "Shift" was NOT held (Shift+Enter usually means new line)
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault(); // Stop a new line from being added
    document.getElementById("myForm").requestSubmit(); // Trigger the submit event
  }
});

