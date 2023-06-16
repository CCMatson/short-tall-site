import Bio from "./Bio";

const Data = [
  {
    bioName: "Short and Tall Productions",
    bioTitle: "Established In 2023 & built on 10 years of collaboration",
    bioDetails: "We put the short and tall in the San Francisco drag scene",
  },
  {
    bioName: "Roxanne Redmeat",
    bioTitle: "Founder",
    bioDetails:
      "Drag Queen Hairdresser specializing in creative color at Glamarama Salon in San Francisco, CA. She/her",
  },
  {
    bioName: "Lysol Tony-Romeo",
    bioTitle: "Founder",
    bioDetails:
      "Founder, Director, Writer, Actor, Singer, Bassist, Reverent Father at the First Church of the Sacred Silver Sexual",
  },
];

const About = () => {
  return (
    <div id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-customPurple my-2">
        About
      </h1>
      {Data.map((item, idx) => (
        <Bio key={idx} bioName={item.bioName} bioTitle={item.bioTitle} bioDetails={item.bioDetails} />
      ))}
    </div>
  );
};

export default About;
