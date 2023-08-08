// Function to display the resources for each section
function displayResources(sectionName, resources) {
  // Create a section title for each section
  const sectionTitle = document.createElement("h2");
  sectionTitle.className = "section-title"; // Add section-title class
  sectionTitle.textContent = sectionName;

  // Append the section title to the main container
  const mainContainer = document.querySelector("main .container");
  mainContainer.appendChild(sectionTitle);

  // Create a card container for each section
  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";
  mainContainer.appendChild(cardContainer);

  // Loop through the resources array
  resources.forEach((resource) => {
    // Create a card for each resource
    const card = document.createElement("div");
    card.className = "card";
    cardContainer.appendChild(card);

    // Create a resource name for each resource
    const resourceName = document.createElement("h3");
    resourceName.className = "resource-name";
    resourceName.textContent = resource.name;
    card.appendChild(resourceName);

    // Open the resource link in a new tab when the card is clicked
    card.addEventListener("click", () => {
      window.open(resource.link, "_blank");
    });

    // If the resource has a cost, display it
    if (resource.cost) {
      const resourceCost = document.createElement("p"); // Display resource cost
      resourceCost.innerHTML = `<em class="resource-info">${resource.cost}</em>`;
      card.appendChild(resourceCost);
    }

    // If the resource has a focus, display it
    if (resource.focus) {
      const resourceFocus = document.createElement("p");
      const focusText = resource.focus.join(", ");
      resourceFocus.innerHTML = `<em class="resource-info">${focusText}</em>`;
      card.appendChild(resourceFocus);
    }

    // If the resource has languages, display them
    if (resource.languages && resource.languages.length > 0) {
      const resourceLanguages = document.createElement("p");
      resourceLanguages.className = "resource-languages";
      resourceLanguages.textContent = resource.languages
        .map((lang) => lang.charAt(0).toUpperCase() + lang.slice(1))
        .join(", ");
      card.appendChild(resourceLanguages);
    }
  });
}

// Fetch the data from data.json file
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // Display the websites section
    displayResources("Websites", data.resources.websites);

    // Display the youtube-channels section
    displayResources("YouTube Channels", data.resources["youtube-channels"]);

    // Display the podcasts section
    displayResources("Podcasts", data.resources.podcasts);

    // Display the github-repositories section
    displayResources(
      "GitHub Repositories",
      data.resources["github-repositories"]
    );
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
