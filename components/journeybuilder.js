import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Plus, Trash2, Settings, MoveLeft, MoveRight } from 'lucide-react';
import JourneyStep from './JourneyStep';
import JourneyIO from './JourneyIO';
import { generateStepId, createDefaultStep, getDefaultJourney } from '../utils/journeyUtils';

export default function JourneyBuilder() {
  const [journeySteps, setJourneySteps] = useState(() => getDefaultJourney());
  
  const [activeStep, setActiveStep] = useState(null);

  const addStep = () => {
    const newId = generateStepId(journeySteps);
    const position = journeySteps.length;
    const newStep = createDefaultStep(newId, position);
    setJourneySteps([...journeySteps, newStep]);
  };

  const removeStep = (id) => {
    setJourneySteps(journeySteps.filter(step => step.id !== id));
    if (activeStep && activeStep.id === id) {
      setActiveStep(null);
    }
  };

  const updateStep = (updatedStep) => {
    setJourneySteps(journeySteps.map(step => 
      step.id === updatedStep.id ? updatedStep : step
    ));
    
    if (activeStep && activeStep.id === updatedStep.id) {
      setActiveStep(updatedStep);
    }
  };
  
  const moveStepLeft = (id) => {
    const stepIndex = journeySteps.findIndex(step => step.id === id);
    if (stepIndex <= 0) return;
    
    const updatedSteps = [...journeySteps];
    const step = updatedSteps[stepIndex];
    const prevStep = updatedSteps[stepIndex - 1];
    
    // Swap positions
    const tempPosition = step.position;
    step.position = prevStep.position;
    prevStep.position = tempPosition;
    
    // Swap array elements
    updatedSteps[stepIndex] = prevStep;
    updatedSteps[stepIndex - 1] = step;
    
    setJourneySteps(updatedSteps);
  };
  
  const moveStepRight = (id) => {
    const stepIndex = journeySteps.findIndex(step => step.id === id);
    if (stepIndex >= journeySteps.length - 1) return;
    
    const updatedSteps = [...journeySteps];
    const step = updatedSteps[stepIndex];
    const nextStep = updatedSteps[stepIndex + 1];
    
    // Swap positions
    const tempPosition = step.position;
    step.position = nextStep.position;
    nextStep.position = tempPosition;
    
    // Swap array elements
    updatedSteps[stepIndex] = nextStep;
    updatedSteps[stepIndex + 1] = step;
    
    setJourneySteps(updatedSteps);
  };

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Journey Builder</h2>
        <button 
          onClick={addStep}
          className="btn btn-primary"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Step
        </button>
      </div>

      {/* Journey Map */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center">
          {journeySteps.map((step, index) => (
            <div key={step.id} className="flex items-center mb-4">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`cursor-pointer ${step.id === activeStep?.id ? 'ring-2 ring-offset-2 ring-glow-primary' : ''}`}
                  onClick={() => setActiveStep(step)}
                >
                  <JourneyStep step={step} />
                </motion.div>
                
                {activeStep && activeStep.id === step.id && (
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        moveStepLeft(step.id);
                      }}
                      className={`p-1 rounded-full bg-white shadow text-gray-500 hover:text-glow-primary ${index === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={index === 0}
                    >
                      <MoveLeft className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        moveStepRight(step.id);
                      }}
                      className={`p-1 rounded-full bg-white shadow text-gray-500 hover:text-glow-primary ${index === journeySteps.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={index === journeySteps.length - 1}
                    >
                      <MoveRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
              
              {index < journeySteps.length - 1 && (
                <div className="mx-2 md:mx-4">
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Editor */}
      {activeStep && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-gray-200 rounded-lg p-4"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Edit Step: {activeStep.title}</h3>
            <div className="flex space-x-2">
              <button 
                onClick={() => removeStep(activeStep.id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-md"
                title="Delete step"
              >
                <Trash2 className="h-5 w-5" />
              </button>
              <button 
                onClick={() => setActiveStep(null)}
                className="p-2 text-gray-500 hover:bg-gray-100 rounded-md"
                title="Close editor"
              >
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="step-title" className="block text-sm font-medium text-gray-700 mb-1">
                Step Title
              </label>
              <input
                id="step-title"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={activeStep.title}
                onChange={(e) => updateStep({ ...activeStep, title: e.target.value })}
              />
            </div>
            
            <div>
              <label htmlFor="step-description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="step-description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows="3"
                value={activeStep.description}
                onChange={(e) => updateStep({ ...activeStep, description: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Step Color
              </label>
              <div className="flex space-x-2">
                {['bg-blue-100 border-blue-500', 'bg-green-100 border-green-500', 'bg-purple-100 border-purple-500', 
                  'bg-yellow-100 border-yellow-500', 'bg-red-100 border-red-500', 'bg-gray-100 border-gray-500'].map((color) => (
                  <div
                    key={color}
                    className={`h-8 w-8 rounded-full cursor-pointer border-2 ${color.split(' ')[0]} ${
                      activeStep.color === color ? 'ring-2 ring-offset-2 ring-glow-primary' : ''
                    }`}
                    onClick={() => updateStep({ ...activeStep, color })}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
      
      {!activeStep && journeySteps.length > 0 && (
        <div className="text-center py-4 text-gray-500">
          Click on a step to edit its details
        </div>
      )}
      
      {journeySteps.length === 0 && (
        <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
          <p className="text-gray-500 mb-4">Your journey is empty. Add your first step to get started.</p>
          <button 
            onClick={addStep}
            className="btn btn-primary"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add First Step
          </button>
        </div>
      )}
      
      <JourneyIO journeySteps={journeySteps} setJourneySteps={setJourneySteps} />
    </div>
  );
}
