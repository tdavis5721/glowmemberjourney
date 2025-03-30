import { useState } from 'react';
import { Download, Upload, RefreshCw } from 'lucide-react';
import { exportJourney, importJourney, getDefaultJourney } from '../utils/journeyUtils';

export default function JourneyIO({ journeySteps, setJourneySteps }) {
  const [importText, setImportText] = useState('');
  const [showImport, setShowImport] = useState(false);
  
  const handleExport = () => {
    const journeyData = exportJourney(journeySteps);
    
    // Create a blob and download it
    const blob = new Blob([journeyData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'glow-journey.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  const handleImport = () => {
    const importedData = importJourney(importText);
    if (importedData) {
      setJourneySteps(importedData);
      setImportText('');
      setShowImport(false);
    } else {
      alert('Invalid journey data format. Please check your JSON.');
    }
  };
  
  const resetToDefault = () => {
    if (confirm('Are you sure you want to reset to the default journey? This will remove all your current steps.')) {
      setJourneySteps(getDefaultJourney());
    }
  };
  
  return (
    <div className="mt-6">
      <div className="flex space-x-2">
        <button
          onClick={handleExport}
          className="btn btn-secondary text-sm"
          title="Export journey as JSON"
        >
          <Download className="h-4 w-4 mr-1" />
          Export
        </button>
        
        <button
          onClick={() => setShowImport(!showImport)}
          className="btn btn-secondary text-sm"
          title="Import journey from JSON"
        >
          <Upload className="h-4 w-4 mr-1" />
          Import
        </button>
        
        <button
          onClick={resetToDefault}
          className="btn btn-secondary text-sm"
          title="Reset to default journey"
        >
          <RefreshCw className="h-4 w-4 mr-1" />
          Reset
        </button>
      </div>
      
      {showImport && (
        <div className="mt-4 p-4 border border-gray-200 rounded-md">
          <h4 className="text-sm font-semibold mb-2">Import Journey</h4>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3"
            rows="5"
            placeholder="Paste your journey JSON here..."
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setShowImport(false)}
              className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={handleImport}
              className="px-3 py-1 text-sm bg-glow-primary text-white rounded-md hover:bg-glow-secondary"
            >
              Import
            </button>
          </div>
        </div>
      )}
    </div>
  );
}