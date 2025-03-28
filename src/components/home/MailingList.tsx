import InputField from "../InputField";

const MailingList = () => {
  return (
    <div className="w-full h-80 p-4 flex flex-col justify-center items-center bg-[radial-gradient(circle_200px_at_bottom_center,_#272E8E,_#0B0D28)]">
      <div className="w-1/3 mb-5 h-28 flex items-center justify-center text-white font-darkerGrotesque text-center text-4xl">
        <p className="font-semibold text-lg md:text-2xl lg:text-4xl pb-2">
          Join Our Mailing List To Stay Up-To-Date With All Our Available
          Services
        </p>
      </div>
      <InputField/>
    </div>
  );
};

export default MailingList;
