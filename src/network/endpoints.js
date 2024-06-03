const baseUrl = "https://bookmybus-jhyi.onrender.com";

// Local URL: "http://localhost:8080";

const Endpoints = {
  login: `${baseUrl}/auth/login`,
  tours: `${baseUrl}/tour/tours`,
  seatLayout: `${baseUrl}/bus/layout`,
  signup: `${baseUrl}/auth/signup`,
  book: `${baseUrl}/ticket/book`,
  cities: `${baseUrl}/cities`,
};

export default Endpoints;
