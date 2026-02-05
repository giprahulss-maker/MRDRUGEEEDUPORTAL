function toggleChat() {
  const chat = document.getElementById("chatBox");
  chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBody = document.getElementById("chatBody");

  if (input.value.trim() === "") return;

  // User message
  const userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.innerText = input.value;
  chatBody.appendChild(userMsg);

  // AI response
  const botMsg = document.createElement("div");
  botMsg.className = "bot-msg";

  botMsg.innerText = generateAIResponse(input.value);
  chatBody.appendChild(botMsg);

  input.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;
}

// BASIC SMART RESPONSE ENGINE (Upgradeable)
function generateAIResponse(query) {
  query = query.toLowerCase();

  if (query.includes("paracetamol"))
    return "Paracetamol is a non-opioid analgesic and antipyretic that inhibits prostaglandin synthesis in the CNS.";

  if (query.includes("gpat"))
    return "GPAT is a national level entrance exam for M.Pharm. Focus on concepts, MCQs & revision.";

  if (query.includes("pharmacology"))
    return "Pharmacology studies drug actions, mechanisms, therapeutic uses & adverse effects.";

  return "I’m here to help with pharmacy concepts, exams, notes & practicals. Please ask clearly 😊";
}
