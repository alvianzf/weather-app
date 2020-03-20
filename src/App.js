import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// CSS
import "react-toastify/dist/ReactToastify.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import homepage from "./pages/homepage";
import Navigation from "./components/global/Navigation";
import { Container, Card, CardBody } from "reactstrap";

function App() {
  return (
    <div>
      <Navigation />
      <Container fluid className="container__box">
        <Card>
          <CardBody>
            <Router>
              <Switch>
                <Route exact path="/" component={homepage} />
              </Switch>
            </Router>
          </CardBody>
        </Card>
      </Container>
      <style jsx="true">{`
        body {
          background: #c4c4c4;
          max-width: 100%;
        }
      `}</style>
    </div>
  );
}

export default App;
