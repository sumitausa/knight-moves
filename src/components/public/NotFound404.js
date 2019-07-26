import React from 'react';
import Button from 'react-bootstrap/Button';

const NotFound404 = () => {
  return (
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="container text-center justify-content-center ">
          <h1>
            <i class="fas fa-dice-d20 icon-404" /> 404. The Crit 1 of the
            Internet.
          </h1>
          <h3>We couldn't find that page.</h3>
          <hr class="col-md-4" />

          <Button variant="cta" className="btn-lg" href="/">
            Back to the home page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
