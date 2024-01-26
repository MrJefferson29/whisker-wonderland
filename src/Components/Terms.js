import React from "react";
import "./Terms.css";
import { Container } from "react-bootstrap";

export default function Terms() {
  return (
    <Container>
    <div>
      <body>
        <h1>Terms and Conditions</h1>

        <section>
          <h2>1. Pet Adoption and Sale</h2>
          <p>
            By adopting or purchasing a pet from Whisker Wonderland, you agree
            to the following terms and conditions.
          </p>

          <h2>2. Pet Name</h2>
          <p>
            The buyer has the right to change the adopted or purchased pet's
            name at their discretion.
          </p>

          <h2>3. Financial Obligations</h2>
          <p>
            Some fees may be required to facilitate necessary paperwork for both
            puppies for sale and adoption. These fees cover expenses related to
            vaccinations, health checks, and other administrative processes.
          </p>
        </section>

        <section>
          <h2>4. Health Guarantee</h2>
          <p>
            All pets are provided with a health guarantee as outlined in our
            separate health guarantee policy.
          </p>
          <h2>5. Returns and Refunds</h2>
          <p>
            Returns and refunds are subject to our return policy. Please refer
            to the return policy for more details.
          </p>
        </section>

        <footer>
          <p>&copy; 2024 Whisker Wonderland. All rights reserved.</p>
        </footer>
      </body>
    </div>
    </Container>
  );
}
