import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Brain, MessageSquare, Shield, Users, Zap, TrendingUp, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Well-being Solutions</h1>
                <p className="text-sm text-slate-600">Magic Quadrant Analysis</p>
              </div>
            </Link>
            <Link to="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Quadrant
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full mb-6">
            <Zap className="h-6 w-6" />
            <span className="font-semibold text-lg">QVTalk</span>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Revolutionizing Well-being Through 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI Conversations</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            QVTalk represents the next generation of personalized well-being support, 
            leveraging advanced conversational AI to provide 24/7 mental health assistance.
          </p>
        </div>

        {/* Key Differentiators */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">AI-Powered Conversations</h3>
            </div>
            <p className="text-slate-600 mb-4">
              Our advanced natural language processing enables meaningful, empathetic conversations 
              that adapt to each user's unique communication style and emotional needs.
            </p>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              Patent Pending
            </Badge>
          </Card>

          <Card className="p-8 bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Personalized Support</h3>
            </div>
            <p className="text-slate-600 mb-4">
              Each interaction is tailored based on user history, preferences, and current emotional state, 
              providing increasingly relevant and effective support over time.
            </p>
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              Machine Learning
            </Badge>
          </Card>

          <Card className="p-8 bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Privacy-First Design</h3>
            </div>
            <p className="text-slate-600 mb-4">
              Built with privacy at its core, QVTalk ensures all conversations remain confidential 
              while providing the therapeutic benefits of AI-guided support.
            </p>
            <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
              HIPAA Compliant
            </Badge>
          </Card>

          <Card className="p-8 bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Community Integration</h3>
            </div>
            <p className="text-slate-600 mb-4">
              Connect with like-minded individuals in moderated support groups while maintaining 
              the privacy and personalization of individual AI conversations.
            </p>
            <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
              Social Features
            </Badge>
          </Card>
        </div>

        {/* Market Position */}
        <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 shadow-lg mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="h-12 w-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Star className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Market Position</h3>
              <p className="text-slate-700">
                QVTalk is uniquely positioned at the intersection of <strong>Visionaries and Niche Players</strong> in the well-being solutions magic quadrant,
                representing breakthrough innovation with focused market execution and rapid growth potential.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Strengths</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-blue-500 rounded-full"></div>
                  Innovative AI conversation technology
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-blue-500 rounded-full"></div>
                  24/7 availability and instant response
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-blue-500 rounded-full"></div>
                  Highly personalized user experience
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-blue-500 rounded-full"></div>
                  Cost-effective solution for organizations
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Path to Leaders Quadrant</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-purple-500 rounded-full"></div>
                  Scale execution capabilities rapidly
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-purple-500 rounded-full"></div>
                  Enterprise-grade platform development
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-purple-500 rounded-full"></div>
                  Strategic partnerships with healthcare leaders
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-purple-500 rounded-full"></div>
                  Proven clinical outcomes and validation
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Experience the Future of Well-being?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already discovered the power of personalized AI conversations 
            for mental health and well-being support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 px-8">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
