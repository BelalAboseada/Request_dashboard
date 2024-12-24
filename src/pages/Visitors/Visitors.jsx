import DurationOfVisits from "../../components/Charts/DurationOfVisits";
import MostVisitedGender from "../../components/Charts/MostVisitedGender";

const Visitors = () => {
  return (
    <div className="Visitors p-2 lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-2 my-2">
        <div
          className="col-span-1 flex flex-col rounded-2xl  p-2 "
          style={{
            background: "#E0F3FC",
          }}
        >
          <span className="text-gray-dark font-bold text-lg">200</span>
          <p className="text-gray text-base font-medium">Total visitors</p>
          <span
            className="font-medium text-xs"
            style={{
              color: "#4079ED",
            }}
          >
            +8% Last week
          </span>
        </div>
        <div
          className="col-span-1 flex flex-col rounded-2xl bg-blue p-2 "
          style={{
            background: "rgba(143, 234, 165, 0.22)",
          }}
        >
          <span className="text-gray-dark font-bold text-lg">50</span>
          <p className="text-gray text-base font-medium">New visitors</p>
          <span
            className="font-medium text-xs"
            style={{
              color: "#4079ED",
            }}
          >
            +8% Last week
          </span>
        </div>
        <div
          className="col-span-1 flex flex-col rounded-2xl bg-blue p-2 "
          style={{
            background: "rgba(204, 171, 218, 0.23)",
          }}
        >
          <span className="text-gray-dark font-bold text-lg">20</span>
          <p className="text-gray text-base font-medium">returning visitors:</p>
          <span
            className="font-medium text-xs"
            style={{
              color: "#4079ED",
            }}
          >
            +8% Last week
          </span>
        </div>
        <div
          className="col-span-1 flex flex-col rounded-2xl bg-blue p-2 "
          style={{
            background: "rgba(251, 151, 114, 0.35)",
          }}
        >
          <span className="text-gray-dark font-bold text-lg">5%</span>
          <p className="text-gray text-base font-medium">Bounce Rate</p>
          <span
            className="font-medium text-xs"
            style={{
              color: "#4079ED",
            }}
          >
            +8% Last week
          </span>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-2">
        <div className="col-span-6 md:col-span-3 lg:col-span-4">
          <DurationOfVisits />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <MostVisitedGender />
        </div>
      </div>
    </div>
  );
}

export default Visitors