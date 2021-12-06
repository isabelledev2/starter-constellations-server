function Notifications({ notifications }) {
    if (notifications.length > 0) {
      return <p>You have {notifications.length} notifications today!</p>;
    }
    return null;
  }
  
  function App() {
    const notifications = ["You received a package", "The weather is sunny"];
    return <Notifications notifications={notifications} />;
  }