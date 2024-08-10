export const About = () => {
  const about_data = [
    { label: "Name", value: "Muhammad Sameet Ul Hassan" },
    { label: "Birthday", value: "August, 8 2000" },
    { label: "Mail", value: "muhammadsameetulhassan43@gmail.com" },
    { label: "Phone", value: "+92 316 4702146" },
    { label: "Address", value: "Green Town, Lahore" },
    { label: "Nationality", value: "Pakistani" },
  ];
  return (
    <div className={"flex flex-col md:flex-row  gap-4"}>
      <div className="flex flex-col bg-primary text-white rounded-lg p-6 w-[300px] flex-shrink-0 max-w-full">
        <ul>
          {about_data?.map((data, i) => (
            <li
              key={data?.label + i}
              className={`${i == 0 ? "pb-3" : "py-3"} ${
                i != about_data?.length - 1
                  ? "border-b border-solid border-border"
                  : ""
              }`}
            >
              <h3 className="opacity-85 text-xs">{data?.label}</h3>
              <span className="text-wrap text-sm">{data?.value}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <span className="text-primary font-bold text-2xl">About Me</span>
          <h3 className="text-[clamp(32px,4vw,45px)] font-bold ">
            Software Developer
          </h3>
        </div>
        <p className="text-xl font-medium">
          Passionate Developer crafting cutting-edge digital experiences
        </p>
        <p className="text-lg text-secondary">
          Experienced MERN Stack Developer with over 5 years of expertise in
          HTML5, CSS3, JavaScript, React.js, Node.js, Express.js, and Next.js.
          Demonstrated success in responsive design, cross-browser
          compatibility, and performance optimization. Enthusiastic about
          staying current with emerging technologies, including Web 3.0, to
          continuously enhance development practices and deliver cutting-edge
          solutions.
        </p>
      </div>
    </div>
  );
};
