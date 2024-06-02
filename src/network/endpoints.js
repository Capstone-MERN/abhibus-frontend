const baseUrl = "http://localhost:8080";

const Endpoints = {
  login: "auth/login",
  tours: `${baseUrl}/tour/tours`,
  seatLayout: `${baseUrl}/bus/layout`,
  signup: "auth/signup",
  book: "ticket/book",
  cities: `${baseUrl}/cities`,
};

export default Endpoints;
