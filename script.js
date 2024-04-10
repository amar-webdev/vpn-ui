function toggleConnection() {
    var connectBtn = document.getElementById('connect-btn');
    var disconnectBtn = document.getElementById('disconnect-btn');
    var statusElement = document.getElementById('connection-status');
  
    if (connectBtn.style.display !== 'none') {
      // If Connect button is visible, user wants to connect
      statusElement.innerText = 'Connecting...';
      simulateConnection(); // Simulate connection process
      connectBtn.style.display = 'none';
      disconnectBtn.style.display = 'block';
    } else {
      // If Disconnect button is visible, user wants to disconnect
      statusElement.innerText = 'Disconnected';
      connectBtn.style.display = 'block';
      disconnectBtn.style.display = 'none';
    }
  }
  
  function simulateConnection() {
    // Simulate connection process with a timeout
    setTimeout(function() {
      var statusElement = document.getElementById('connection-status');
      statusElement.innerText = 'Connected';
    }, 2000); // Simulate 2 seconds for connection
  }
  