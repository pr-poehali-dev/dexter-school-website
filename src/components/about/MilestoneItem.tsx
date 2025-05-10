export interface MilestoneProps {
  year: number;
  title: string;
  description: string;
}

interface MilestoneItemProps {
  milestone: MilestoneProps;
  index: number;
}

const MilestoneItem = ({ milestone, index }: MilestoneItemProps) => {
  return (
    <div
      className={`relative flex items-start ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} md:gap-8`}
    >
      <div
        className={`hidden md:block w-1/2 ${index % 2 === 0 ? "text-right pr-8" : "pl-8"}`}
      >
        <div className="sticky top-24 bg-white p-6 rounded-lg shadow-md">
          <div className="text-primary text-xl font-bold mb-2">
            {milestone.year}
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {milestone.title}
          </h3>
          <p className="text-gray-500">{milestone.description}</p>
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary z-10"></div>

      <div className="md:hidden bg-white p-6 rounded-lg shadow-md w-full ml-8">
        <div className="text-primary text-xl font-bold mb-2">
          {milestone.year}
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          {milestone.title}
        </h3>
        <p className="text-gray-500">{milestone.description}</p>
      </div>
    </div>
  );
};

export default MilestoneItem;
