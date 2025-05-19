import { SimpleLayout } from "@/components/SimpleLayout";
import { Waves } from "@/components/Waves";

export default async function Home() {
  return (
    <div className="home">
      <Waves />
      <SimpleLayout
        title="Rory Finnegan"
        intro="Software spelunker, ex-researcher and outdoor enthusiast"
        className="justify-center md:h-screen pb-20 md:pb-0"
      >
        <p className="my-12">
          I'm a software developer and neuroscientist who enjoys working on
          complex interdisciplinary problems. My academic and vocational
          experience covers system administration, database management, software
          development, and research. Previously, I worked at Invenia, developing
          and deploying forecasting models for power flow optimization. I
          currently work at Denvr Dataworks, helping customers architect ML
          applications for Denvr's cloud platform.
        </p>
      </SimpleLayout>
    </div>
  );
}
