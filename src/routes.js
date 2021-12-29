import Home from "./routes/Home.svelte";
import AboutUs from "./routes/AboutUs.svelte";
import ContactUs from "./routes/ContactUS.svelte";
import Services from "./routes/Cards.svelte";
import NotFound from "./routes/NotFound.svelte";

export default {
  "/": Home,
  "/home": Home,
  "/about": AboutUs,
  "/services": Services,
  "/contact": ContactUs,
  // The catch-all route must always be last
  "*": NotFound,
};
