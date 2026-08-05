function renderSchedule(days) {
  const container = document.getElementById("schedule-container");
  container.innerHTML = "";

  if (!days || days.length === 0) {
    const note = document.createElement("p");
    note.className = "placeholder-note";
    note.textContent = "Schedule to be announced.";
    container.appendChild(note);
    return;
  }

  days.forEach((day) => {
    const section = document.createElement("div");
    section.className = "schedule-day";

    const heading = document.createElement("h3");
    heading.textContent = day.label || day.date;
    section.appendChild(heading);

    if (!day.sessions || day.sessions.length === 0) {
      const note = document.createElement("p");
      note.className = "placeholder-note";
      note.textContent = "Sessions to be announced.";
      section.appendChild(note);
    } else {
      const list = document.createElement("ul");
      list.className = "session-list";

      day.sessions.forEach((session) => {
        const item = document.createElement("li");

        const time = document.createElement("span");
        time.className = "session-time";
        time.textContent = session.time || "";
        item.appendChild(time);

        const details = document.createElement("div");

        if (session.items && session.items.length > 0) {
          const itemList = document.createElement("ul");
          itemList.className = "session-items";
          session.items.forEach((itemText) => {
            const itemEl = document.createElement("li");
            itemEl.textContent = itemText;
            itemList.appendChild(itemEl);
          });
          details.appendChild(itemList);
        } else if (session.title) {
          const title = document.createElement("div");
          title.textContent = session.title;
          details.appendChild(title);
        }

        const metaText = [session.speaker, session.location]
          .filter(Boolean)
          .join(" — ");
        if (metaText) {
          const meta = document.createElement("div");
          meta.className = "affiliation";
          meta.textContent = metaText;
          details.appendChild(meta);
        }

        item.appendChild(details);
        list.appendChild(item);
      });

      section.appendChild(list);
    }

    container.appendChild(section);
  });
}

fetch("data/schedule.json")
  .then((response) => response.json())
  .then(renderSchedule)
  .catch((error) => {
    console.error("Failed to load schedule:", error);
    const container = document.getElementById("schedule-container");
    container.innerHTML = "";
    const note = document.createElement("p");
    note.className = "placeholder-note";
    note.textContent = "Unable to load schedule information right now.";
    container.appendChild(note);
  });
