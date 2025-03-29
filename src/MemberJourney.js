import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, FileEdit } from "lucide-react";
import { useState } from "react";

const steps = [
  "Awareness",
  "Interest",
  "Conversion",
  "Onboarding",
  "Engagement",
  "Advocacy"
];

export default function MemberJourney() {
  const [formData, setFormData] = useState({});

  const handleChange = (step, value) => {
    setFormData({ ...formData, [step]: value });
  };

  const handleSubmit = () => {
    console.log("Custom Journey:", formData);
    alert("Your journey has been saved (console only for now)");
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Map Your Customer Journey</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
        Use this framework to map out how someone discovers your brand, becomes a
        customer, and eventually shares it with others.
      </p>

      <div className="flex justify-center gap-4 mb-10">
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download PDF Worksheet
        </Button>
        <Button variant="outline">
          <FileEdit className="mr-2 h-4 w-4" />
          Interactive Builder
        </Button>
        <Button variant="default">
          Watch Explainer Video
        </Button>
      </div>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="rounded-2xl shadow p-4">
              <CardContent>
                <h2 className="text-xl font-semibold mb-2">{`${index + 1}. ${step}`}</h2>
                <textarea
                  className="w-full border border-gray-300 rounded p-2 text-sm"
                  rows={4}
                  placeholder={`Describe how your audience experiences ${step.toLowerCase()}...`}
                  value={formData[step] || ""}
                  onChange={(e) => handleChange(step, e.target.value)}
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button onClick={handleSubmit}>Save My Journey</Button>
      </div>
    </div>
  );
}
