import Image from "next/image";

import SkillCloud from "../components/skillcloud";

export default function Home() {
  const profileStyle = {
    borderRadius: "50%",
    filter: "grayscale(100%)",
  };
  return (
    <main className="flex flex-col items-center justify-center lg:w-1/2 m-auto gap-8">
      {/* TODO convert the Vstack components below into a Section component */}
      <h1>Hello, I'm Rory!</h1>
      <Image
        src="/headshot.jpg"
        height="200"
        width="200"
        alt="profile"
        style={profileStyle}
        priority={true}
      />
      <div>
        I'm a{" "}
        <b>
          <i>Research Software Developer</i>
        </b>{" "}
        who thrives on small interdisciplinary teams. While I'm often considered
        a generalist, I have the most experience building distributed data
        pipelines and machine learning platforms for forecasting and
        classification tasks.
      </div>
      <SkillCloud />
      {/* <VStack w={[300, 400, 500]} spacing={4}>
        {/* TODO: Create a tech stack icon cloud */}
      {/* </VStack> */}
    </main>
  );
}
