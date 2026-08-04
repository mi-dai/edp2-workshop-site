function renderSpeakers(speakers) {
  const container = document.getElementById("speakers-container");
  container.innerHTML = "";

  if (!speakers || speakers.length === 0) {
    const note = document.createElement("p");
    note.className = "placeholder-note";
    note.textContent = "Speaker list coming soon.";
    container.appendChild(note);
    return;
  }

  const grid = document.createElement("div");
  grid.className = "card-grid";

  speakers.forEach((speaker) => {
    const card = document.createElement("div");
    card.className = "card";

    const name = document.createElement("h3");
    name.textContent = speaker.name;
    card.appendChild(name);

    if (speaker.role) {
      const role = document.createElement("p");
      role.className = "role";
      role.textContent = speaker.role;
      card.appendChild(role);
    }

    const affiliationText = [speaker.title, speaker.affiliation]
      .filter(Boolean)
      .join(", ");
    if (affiliationText) {
      const affiliation = document.createElement("p");
      affiliation.className = "affiliation";
      affiliation.textContent = affiliationText;
      card.appendChild(affiliation);
    }

    if (speaker.bio) {
      const bio = document.createElement("p");
      bio.textContent = speaker.bio;
      card.appendChild(bio);
    }

    grid.appendChild(card);
  });

  container.appendChild(grid);
}

fetch("data/speakers.json")
  .then((response) => response.json())
  .then(renderSpeakers)
  .catch((error) => {
    console.error("Failed to load speakers:", error);
    const container = document.getElementById("speakers-container");
    container.innerHTML = "";
    const note = document.createElement("p");
    note.className = "placeholder-note";
    note.textContent = "Unable to load speaker information right now.";
    container.appendChild(note);
  });
