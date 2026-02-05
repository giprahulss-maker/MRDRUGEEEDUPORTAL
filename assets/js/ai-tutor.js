const chatBox = document.getElementById("chat-box");

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.className = `message ${sender}`;
  div.innerText = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const question = input.value.trim();
  if (!question) return;

  addMessage(question, "user");
  input.value = "";

  setTimeout(() => {
    addMessage(getPharmacyResponse(question), "bot");
  }, 500);
}

function getPharmacyResponse(q) {
  q = q.toLowerCase();

  if (q.includes("paracetamol")) {
    return "Paracetamol is a centrally acting analgesic and antipyretic. It inhibits prostaglandin synthesis in the CNS and has minimal anti-inflammatory action.";
  }

  if (q.includes("first pass metabolism")) {
    return "First-pass metabolism refers to hepatic metabolism of a drug before it reaches systemic circulation, reducing bioavailability.";
  }

  if (q.includes("bioavailability")) {
    return "Bioavailability is the fraction of administered drug that reaches systemic circulation in unchanged form.";
  }

  if (q.includes("pharmacology")) {
    return "Pharmacology is the study of drugs, their actions, mechanisms, therapeutic uses, and adverse effects.";
  }

  if (q.includes("gpat")) {
    return "For GPAT preparation, focus on concepts, MCQs, previous year questions, and revision of high-yield topics.";
  }

  return "I am your AI Pharmacy Tutor. Please ask a pharmacy-related concept, definition, mechanism, or exam-oriented question.";
}
