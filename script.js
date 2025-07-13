function joinRoom() {
  const room = document.getElementById("roomInput").value.trim();
  if (!room) {
    alert("Please enter a room name.");
    return;
  }
  window.location.href = `player.html?room=${encodeURIComponent(room)}`;
}
