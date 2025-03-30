/**
 * Utility functions for journey management
 */

/**
 * Generate a unique ID for new journey steps
 */
export const generateStepId = (existingSteps) => {
  if (!existingSteps || existingSteps.length === 0) {
    return 1;
  }
  return Math.max(...existingSteps.map(step => step.id)) + 1;
};

/**
 * Create a new journey step with default values
 */
export const createDefaultStep = (id, position = 0) => {
  return {
    id,
    title: 'New Step',
    description: 'Description of this step',
    color: 'bg-gray-100 border-gray-500',
    position
  };
};

/**
 * Get color name from CSS class
 */
export const getColorName = (colorClass) => {
  const colorMap = {
    'bg-blue-100 border-blue-500': 'Blue',
    'bg-green-100 border-green-500': 'Green',
    'bg-purple-100 border-purple-500': 'Purple',
    'bg-yellow-100 border-yellow-500': 'Yellow',
    'bg-red-100 border-red-500': 'Red',
    'bg-gray-100 border-gray-500': 'Gray'
  };
  
  return colorMap[colorClass] || 'Custom';
};

/**
 * Export journey to JSON
 */
export const exportJourney = (journeySteps) => {
  return JSON.stringify(journeySteps, null, 2);
};

/**
 * Import journey from JSON
 */
export const importJourney = (jsonString) => {
  try {
    const parsedData = JSON.parse(jsonString);
    if (!Array.isArray(parsedData)) {
      throw new Error('Invalid journey data format');
    }
    return parsedData;
  } catch (error) {
    console.error('Error importing journey data:', error);
    return null;
  }
};

/**
 * Sort journey steps by position
 */
export const sortStepsByPosition = (steps) => {
  return [...steps].sort((a, b) => a.position - b.position);
};

/**
 * Get default journey template
 */
export const getDefaultJourney = () => {
  return [
    { id: 1, title: 'Awareness', description: 'Customer becomes aware of Glow', color: 'bg-blue-100 border-blue-500', position: 0 },
    { id: 2, title: 'Consideration', description: 'Customer evaluates Glow benefits', color: 'bg-purple-100 border-purple-500', position: 1 },
    { id: 3, title: 'Conversion', description: 'Customer signs up for Glow', color: 'bg-green-100 border-green-500', position: 2 },
  ];
};