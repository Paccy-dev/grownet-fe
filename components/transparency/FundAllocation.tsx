// Each allocation item has a label and a percentage
type AllocationItem = {
  label: string;
  percentage: number;
};

const allocations: AllocationItem[] = [
  { label: "Tree Planting & Maintenance", percentage: 70 },
  { label: "Community Programs", percentage: 10 },
  { label: "Monitoring & Verification", percentage: 10 },
  { label: "Operations", percentage: 5 },
];

export default function FundAllocation() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-forest font-semibold text-base mb-5">
        Fund Allocation
      </h2>

      <div className="space-y-4">
        {allocations.map((item) => (
          <div key={item.label}>
            {/* Label + percentage on the same row */}
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm text-forest/70">{item.label}</span>
              <span className="text-sm font-medium text-forest">
                {item.percentage}%
              </span>
            </div>

            {/* Progress bar track */}
            <div className="w-full h-2 bg-sage rounded-full">
              {/* Filled portion — width driven by the percentage */}
              <div
                className="h-2 bg-forest rounded-full transition-all duration-500"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
