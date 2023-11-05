import { GiMuscleUp } from "react-icons/gi";
import { MdSelfImprovement } from "react-icons/md";

const Info = () => {
  return (
    <div className="mx-5 md:mx-20 shadow-xl mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="text-center px-10 md:px-5 lg:px-10 py-5">
            <img className="mx-auto" src="https://i.ibb.co/2gd8xJJ/muscle.png" alt="" />
          <h3 className="text-lg font-bold py-2 hover:text-[#319be6]">
            BUILD MUSCLE
          </h3>
          <p className="text-gray-600 font-semibold">
            If The Customer Is In The Right,Show Respect In The Language
          </p>
        </div>
        <div>
          <img src="https://i.ibb.co/7JQZzfM/section1.jpg" alt="" />
        </div>
        <div className="text-center px-10 md:px-5 lg:px-10 py-5">
        <img className="mx-auto" src="https://i.ibb.co/0FJY3xr/body-improve.png" alt="" />
          <h3 className="text-lg font-bold py-2 hover:text-[#319be6]">
            BODY IMPROVE
          </h3>
          <p className="text-gray-600 font-semibold">
            Even when you reach your membership goals and you’re constantly
            adding new members from your community.
          </p>
        </div>
        <div>
          <img src="https://i.ibb.co/dJKSqtS/section2.jpg" alt="" />
        </div>
        <div className="text-center px-10 md:px-5 lg:px-10 py-5">
        <img className="mx-auto" src="https://i.ibb.co/RSqqMYC/trainer.png" alt="" />
          <h3 className="text-lg font-bold py-2 hover:text-[#319be6]">
            PERSONAL TRAINER
          </h3>
          <p className="text-gray-600 font-semibold">
            The reality is, loyal gym members are much more valuable to your
            business the longer they stay a member of your gym.
          </p>
        </div>
        <div>
          <img src="https://i.ibb.co/S50Vqtj/section3.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Info;
