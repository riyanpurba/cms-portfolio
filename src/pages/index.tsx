import DefaultLayout from "@/layout/Default";

// section
import { Hero, Services, Client, Testimonial, Join, ChoiceUs } from "@/components/Home";

const Home = () => {
  return (
    <DefaultLayout>
      <Hero />
      <Services />
      <Client />
      <ChoiceUs />
      <Testimonial />
      <Join />
    </DefaultLayout>
  );
}

export default Home;