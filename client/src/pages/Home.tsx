import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, TrendingUp, Layers, BarChart3, Cpu, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img 
              src="/manus-storage/logo-icon_30db279d.png" 
              alt="Nexa Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-display font-bold text-primary">Nexa</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#workflows" className="text-sm font-medium hover:text-primary transition-colors">Workflows</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/manus-storage/hero-background_2b10dc8c.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15
          }}
        />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                <span className="text-sm font-medium text-accent">Automate Your Affiliate Empire</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight">
                Turn Social Posts Into <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Passive Income</span>
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed max-w-lg">
                Nexa automates your entire affiliate marketing workflow. Create content with AI, publish across 5 platforms, analyze competitors, and track earnings—all from one intelligent platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  See Your Automation Blueprint <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-8 text-sm text-foreground/60">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  <span>5 Platforms Automated</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <span>3-5x Earnings Growth</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
              <img 
                src="/manus-storage/dashboard-mockup_1ca31d99.png" 
                alt="Analytics Dashboard"
                className="relative rounded-2xl shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-display font-bold">Stop Wasting Time on Manual Tasks</h2>
              <p className="text-lg text-foreground/70">
                Most affiliate marketers spend 20+ hours per week on repetitive tasks: creating content, scheduling posts, analyzing competitors, and tracking metrics. That's time you could be earning.
              </p>
              <ul className="space-y-4">
                {[
                  "Manually creating content for 5 platforms daily",
                  "No data-driven strategy for product selection",
                  "Missing competitor insights and trends",
                  "Inconsistent posting schedules killing engagement",
                  "No real-time performance tracking"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-destructive">✕</span>
                    </div>
                    <span className="text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-display font-bold mb-6">Nexa Solves This</h3>
                <ul className="space-y-4">
                  {[
                    "AI-powered content creation for all platforms",
                    "Automated competitor analysis & insights",
                    "Smart product recommendations based on sales data",
                    "Consistent daily posting on optimal schedules",
                    "Real-time earnings tracking & ROI metrics"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-bold text-accent">✓</span>
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflows" className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Your Automation Workflow</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Five intelligent steps that work together to build your affiliate empire automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {[
              { icon: Cpu, title: "AI Content Creation", desc: "Generate posts, images & videos daily" },
              { icon: Rocket, title: "Multi-Platform Publishing", desc: "Auto-post to FB, IG, X, TikTok, Pinterest" },
              { icon: BarChart3, title: "Competitor Analysis", desc: "Track top performers & extract insights" },
              { icon: Layers, title: "Product Intelligence", desc: "Find best-selling products automatically" },
              { icon: TrendingUp, title: "Performance Tracking", desc: "Real-time earnings & engagement metrics" }
            ].map((step, i) => (
              <div key={i} className="relative">
                {i < 4 && (
                  <div className="hidden lg:block absolute top-1/3 -right-2 w-4 h-4 text-accent">
                    <ArrowRight className="w-full h-full" />
                  </div>
                )}
                <Card className="h-full p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-display font-bold text-lg">{step.title}</h3>
                    <p className="text-sm text-foreground/60">{step.desc}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <img 
              src="/manus-storage/workflow-diagram_d2477c25.png" 
              alt="Automation Workflow"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Powerful Features Built for Scale</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Everything you need to build a six-figure affiliate business, all in one platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Content Generation",
                desc: "Create unlimited posts, images, and short videos using advanced AI models. Customize tone, style, and messaging for each platform.",
                icon: Cpu
              },
              {
                title: "Multi-Platform Automation",
                desc: "Publish simultaneously to Facebook, Instagram, X, TikTok, and Pinterest with platform-specific optimizations.",
                icon: Rocket
              },
              {
                title: "Competitor Intelligence",
                desc: "Automatically analyze top competitors, track their content strategy, and identify winning patterns.",
                icon: BarChart3
              },
              {
                title: "Product Recommendations",
                desc: "Get AI-powered suggestions for high-converting products based on sales data and market trends.",
                icon: Layers
              },
              {
                title: "Performance Analytics",
                desc: "Track engagement, clicks, conversions, and earnings in real-time with detailed ROI breakdowns.",
                icon: TrendingUp
              },
              {
                title: "SEO Optimization",
                desc: "Automatic keyword research and content optimization to boost organic visibility across platforms.",
                icon: Zap
              }
            ].map((feature, i) => (
              <Card key={i} className="p-8 hover:shadow-lg transition-all duration-300 border-border">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Proven Results</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Affiliate marketers using Nexa see consistent growth in earnings and engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: "3-5x", label: "Earnings Growth", desc: "Average increase in monthly affiliate revenue" },
              { metric: "87%", label: "Time Saved", desc: "Hours freed up from manual content creation" },
              { metric: "$10K+", label: "Monthly Potential", desc: "Average earnings after 6 months" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-display font-bold mb-2">{stat.metric}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <p className="text-white/70">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">How It Works</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Get started in minutes. No technical skills required.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Connect Your Accounts",
                desc: "Link your social media accounts and affiliate networks. Nexa securely integrates with all major platforms.",
                icon: Layers
              },
              {
                step: "02",
                title: "Set Your Preferences",
                desc: "Choose your niche, target audience, posting frequency, and content style. Customize everything to match your brand.",
                icon: Cpu
              },
              {
                step: "03",
                title: "Let AI Work",
                desc: "Our automation engine creates, analyzes, and publishes content 24/7. Monitor everything from your dashboard.",
                icon: Rocket
              },
              {
                step: "04",
                title: "Track & Optimize",
                desc: "Watch your earnings grow with real-time analytics. Nexa automatically optimizes based on performance data.",
                icon: TrendingUp
              }
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {i % 2 === 0 ? (
                  <>
                    <div>
                      <div className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-4">
                        <span className="text-sm font-display font-bold text-accent">Step {item.step}</span>
                      </div>
                      <h3 className="text-3xl font-display font-bold mb-4">{item.title}</h3>
                      <p className="text-lg text-foreground/70">{item.desc}</p>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 flex items-center justify-center">
                      <item.icon className="w-24 h-24 text-accent/30" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 flex items-center justify-center">
                      <item.icon className="w-24 h-24 text-accent/30" />
                    </div>
                    <div>
                      <div className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-4">
                        <span className="text-sm font-display font-bold text-accent">Step {item.step}</span>
                      </div>
                      <h3 className="text-3xl font-display font-bold mb-4">{item.title}</h3>
                      <p className="text-lg text-foreground/70">{item.desc}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Start free. Scale as you grow. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "Free",
                desc: "Perfect for testing",
                features: ["1 Social Account", "100 Posts/Month", "Basic Analytics", "Email Support"]
              },
              {
                name: "Professional",
                price: "$99",
                period: "/month",
                desc: "Most popular",
                features: ["5 Social Accounts", "Unlimited Posts", "Advanced Analytics", "Competitor Analysis", "Priority Support"],
                highlighted: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                desc: "For agencies",
                features: ["Unlimited Accounts", "Custom Workflows", "API Access", "Dedicated Support", "White Label Option"]
              }
            ].map((plan, i) => (
              <Card 
                key={i} 
                className={`p-8 flex flex-col transition-all duration-300 ${
                  plan.highlighted 
                    ? "border-accent shadow-2xl scale-105 bg-gradient-to-br from-accent/5 to-primary/5" 
                    : "border-border"
                }`}
              >
                <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                <p className="text-foreground/60 mb-6">{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-display font-bold">{plan.price}</span>
                  {plan.period && <span className="text-foreground/60">{plan.period}</span>}
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-foreground/70">
                      <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-xs text-accent">✓</span>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={plan.highlighted ? "bg-accent hover:bg-accent/90 text-white" : ""}
                  variant={plan.highlighted ? "default" : "outline"}
                  size="lg"
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-accent text-white">
        <div className="container text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">Ready to Scale Your Affiliate Business?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of affiliate marketers who are earning $5K-$50K+ per month with Nexa's automation platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Your Free Trial <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="/manus-storage/logo-icon_30db279d.png" 
                  alt="Nexa Logo" 
                  className="w-6 h-6"
                />
                <span className="font-display font-bold text-primary">Nexa</span>
              </div>
              <p className="text-sm text-foreground/60">Automate your affiliate marketing and scale to $10K+/month.</p>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-foreground/60">
              © 2026 Nexa Marketing Global. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
