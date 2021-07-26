import React from "react";
import { Link, useHistory } from "react-router-dom";

function NotFound() {
  return (
    <section>
      <div>
        <h1>404</h1>
      </div>

      <div>
        <h3>Look like you're lost</h3>

        <p>The page you are looking for not avaible!</p>

        <Link to="/quotes">Go to Home</Link>
      </div>
    </section>
  );
}

export default NotFound;
