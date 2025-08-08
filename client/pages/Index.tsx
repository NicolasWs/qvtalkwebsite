import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Shield, Users, Zap, Info } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Solution {
  name: string;
  category: string;
  x: number; // 0-100 (Vision/Completeness)
  y: number; // 0-100 (Ability to Execute)
  description: string;
  features: string[];
  isQVTalk?: boolean;
}

const solutions: Solution[] = [
  {
    name: "QVTalk",
    category: "Niche Players",
    x: 25,
    y: 35,
    description: "Innovative conversational AI for personalized well-being support",
    features: ["AI Conversations", "Personalized Support", "24/7 Availability", "Mental Health Focus"],
    isQVTalk: true
  },
  {
    name: "Headspace",
    category: "Leaders",
    x: 85,
    y: 88,
    description: "Market-leading meditation and mindfulness platform",
    features: ["Guided Meditation", "Sleep Stories", "Mindfulness Training", "Corporate Programs"]
  },
  {
    name: "Calm",
    category: "Leaders",
    x: 82,
    y: 85,
    description: "Comprehensive wellness app for sleep, meditation, and relaxation",
    features: ["Sleep Programs", "Meditation", "Music & Sounds", "Masterclasses"]
  },
  {
    name: "BetterHelp",
    category: "Challengers",
    x: 75,
    y: 65,
    description: "Online therapy and counseling platform",
    features: ["Licensed Therapists", "Video Sessions", "Messaging Support", "Flexible Scheduling"]
  },
  {
    name: "Wellness360",
    category: "Visionaries",
    x: 45,
    y: 78,
    description: "Holistic workplace wellness solution",
    features: ["Employee Wellness", "Analytics", "Corporate Integration", "Health Tracking"]
  },
  {
    name: "MindGarden",
    category: "Niche Players",
    x: 35,
    y: 45,
    description: "Gamified mental health and habit tracking",
    features: ["Habit Tracking", "Gamification", "Community Support", "Progress Visualization"]
  },
  {
    name: "ThrivePlatform",
    category: "Visionaries",
    x: 55,
    y: 72,
    description: "AI-powered well-being analytics and recommendations",
    features: ["AI Analytics", "Predictive Insights", "Integration APIs", "Custom Dashboards"]
  },
  {
    name: "ZenFlow",
    category: "Challengers",
    x: 68,
    y: 58,
    description: "Enterprise wellness with real-time stress monitoring",
    features: ["Stress Monitoring", "Biometric Integration", "Real-time Alerts", "Team Analytics"]
  }
];

const quadrants = [
  { name: "Leaders", color: "bg-emerald-50 border-emerald-200", textColor: "text-emerald-800" },
  { name: "Challengers", color: "bg-blue-50 border-blue-200", textColor: "text-blue-800" },
  { name: "Visionaries", color: "bg-purple-50 border-purple-200", textColor: "text-purple-800" },
  { name: "Niche Players", color: "bg-amber-50 border-amber-200", textColor: "text-amber-800" }
];

export default function Index() {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [hoveredSolution, setHoveredSolution] = useState<Solution | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Well-being Solutions</h1>
                <p className="text-sm text-slate-600">Magic Quadrant Analysis</p>
              </div>
            </div>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              2024 Edition
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Magic Quadrant for Well-being Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive analysis of well-being and mental health platforms based on
            completeness of vision and ability to execute.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Magic Quadrant Chart */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-lg">
              <div className="relative w-full h-[600px] border-2 border-slate-300 rounded-lg overflow-hidden">
                {/* Quadrant backgrounds */}
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                  <div className="bg-purple-50/80 border-r border-b border-slate-300"></div>
                  <div className="bg-emerald-50/80 border-b border-slate-300"></div>
                  <div className="bg-amber-50/80 border-r border-slate-300"></div>
                  <div className="bg-blue-50/80"></div>
                </div>

                {/* Quadrant labels */}
                <div className="absolute top-4 left-4 text-sm font-semibold text-purple-700 bg-purple-100/80 px-3 py-1 rounded-full">
                  Visionaries
                </div>
                <div className="absolute top-4 right-4 text-sm font-semibold text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full">
                  Leaders
                </div>
                <div className="absolute bottom-4 left-4 text-sm font-semibold text-amber-700 bg-amber-100/80 px-3 py-1 rounded-full">
                  Niche Players
                </div>
                <div className="absolute bottom-4 right-4 text-sm font-semibold text-blue-700 bg-blue-100/80 px-3 py-1 rounded-full">
                  Challengers
                </div>

                {/* Axis labels */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-slate-600">
                  Completeness of Vision →
                </div>
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-medium text-slate-600">
                  Ability to Execute →
                </div>

                {/* Solutions */}
                {solutions.map((solution, index) => (
                  <div
                    key={index}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 ${
                      hoveredSolution === solution ? 'scale-110 z-20' : 'z-10'
                    }`}
                    style={{
                      left: `${solution.x}%`,
                      top: `${100 - solution.y}%`
                    }}
                    onMouseEnter={() => setHoveredSolution(solution)}
                    onMouseLeave={() => setHoveredSolution(null)}
                    onClick={() => setSelectedSolution(solution)}
                  >
                    <div className={`relative ${
                      solution.isQVTalk
                        ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white'
                        : 'bg-white border-2 border-slate-300 text-slate-800'
                    } rounded-lg px-3 py-2 shadow-lg hover:shadow-xl transition-all`}>
                      {solution.isQVTalk && (
                        <Star className="absolute -top-2 -right-2 h-5 w-5 text-yellow-400 fill-current" />
                      )}
                      <div className="text-xs font-semibold">{solution.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Solution Details */}
          <div className="space-y-6">
            {selectedSolution ? (
              <Card className={`p-6 border-2 transition-all ${
                selectedSolution.isQVTalk
                  ? 'border-blue-300 bg-gradient-to-br from-blue-50 to-purple-50'
                  : 'border-slate-200 bg-white/70'
              } backdrop-blur-sm shadow-lg`}>
                <div className="flex items-start gap-3 mb-4">
                  {selectedSolution.isQVTalk && (
                    <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      {selectedSolution.name}
                      {selectedSolution.isQVTalk && (
                        <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                          Our Solution
                        </Badge>
                      )}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">{selectedSolution.category}</p>
                  </div>
                </div>

                <p className="text-slate-700 mb-4">{selectedSolution.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedSolution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="h-1.5 w-1.5 bg-blue-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {selectedSolution.isQVTalk && (
                  <div className="mt-6 pt-4 border-t border-blue-200">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      Learn More About QVTalk
                    </Button>
                  </div>
                )}
              </Card>
            ) : (
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-lg">
                <div className="text-center">
                  <Users className="h-12 w-12 text-slate-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Select a Solution</h3>
                  <p className="text-slate-600 text-sm">
                    Click on any solution in the quadrant to view detailed information
                  </p>
                </div>
              </Card>
            )}

            {/* Legend */}
            <Card className="p-6 bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Quadrant Legend</h3>
              <div className="space-y-3">
                {quadrants.map((quadrant, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded ${quadrant.color} border`}></div>
                    <span className={`text-sm font-medium ${quadrant.textColor}`}>
                      {quadrant.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm">
            Analysis based on market research, feature completeness, and execution capability
          </p>
        </div>
      </div>
    </div>
  );
}
