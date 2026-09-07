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
      day.sessions.forEach((session) => {
        const block = document.createElement("div");
        block.className = "agenda-block";

        if (session.time) {
          const label = document.createElement("p");
          label.className = "agenda-block-label";
          label.textContent = session.time;
          block.appendChild(label);
        }

        const rows = document.createElement("div");
        rows.className = "agenda-rows";

        if (session.items && session.items.length > 0) {
          session.items.forEach((item) => {
            const row = document.createElement("div");
            row.className = item.time ? "agenda-row" : "agenda-row agenda-row--label";

            if (item.time) {
              const timeEl = document.createElement("span");
              timeEl.className = "agenda-row-time";
              timeEl.textContent = item.time;
              row.appendChild(timeEl);
            }

            const textEl = document.createElement("span");
            textEl.className = "agenda-row-text";
            textEl.textContent = item.text;
            row.appendChild(textEl);

            if (item.time) {
              const speakerEl = document.createElement("span");
              speakerEl.className = "agenda-row-speaker";
              speakerEl.textContent = item.speaker || "";
              row.appendChild(speakerEl);
            }

            rows.appendChild(row);
          });
        } else if (session.title) {
          const row = document.createElement("div");
          row.className = "agenda-row agenda-row--label";
          const textEl = document.createElement("span");
          textEl.className = "agenda-row-text";
          textEl.textContent = session.title;
          row.appendChild(textEl);
          rows.appendChild(row);
        }

        block.appendChild(rows);

        const metaText = [session.speaker, session.location]
          .filter(Boolean)
          .join(" — ");
        if (metaText) {
          const meta = document.createElement("p");
          meta.className = "affiliation";
          meta.textContent = metaText;
          block.appendChild(meta);
        }

        section.appendChild(block);
      });
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
