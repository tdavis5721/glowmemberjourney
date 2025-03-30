export default function JourneyStep({ step }) {
  return (
    <div 
      className={`p-4 rounded-md border-l-4 shadow-sm ${step.color}`}
      style={{ minWidth: '200px' }}
    >
      <h3 className="font-semibold text-gray-800">{step.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{step.description}</p>
    </div>
  );
}
