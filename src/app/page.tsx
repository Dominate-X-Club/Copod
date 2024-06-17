
import HeroFirst from "@/components/hero-section/hero-first";
import NavBar from "@/components/nav/nav-bar";
import BookingForm from "@/components/booking/BookingForm";

export default function Home() {
  return (
    <main style={{
      // backgroundImage: `url('/background/white-grid.jpg')`,
      backgroundRepeat: 'round',
    }}
      className="h-full bg-black">
      <NavBar></NavBar>
      <div className="container mx-auto h-full flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full h-full align-middle lg:w-1/2 ">
          <HeroFirst></HeroFirst>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          {/* <img src="/path-to-your-image.jpg" alt="Hero Image" className="w-full lg:w-3/4 h-auto" /> */}
          <BookingForm></BookingForm>
        </div>
      </div>

    </main>
  );
}
