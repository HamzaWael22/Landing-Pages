export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-sm sticky top-0 z-50 bg-black/70">
        <div className="text-2xl font-bold tracking-wide">
          NovaAI
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:scale-105 transition-transform">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative px-8 lg:px-20 py-24 lg:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/20 blur-[150px] rounded-full" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300 mb-6">
              ✨ AI-Powered Productivity Platform
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Work Smarter.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Create Faster.
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
              NovaAI helps creators, developers, and teams automate workflows, generate content, and manage projects with next-generation AI tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-7 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform shadow-2xl">
                Start Free Trial
              </button>

              <button className="border border-white/20 px-7 py-4 rounded-2xl font-semibold hover:bg-white/10 transition">
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-8 mt-12 text-sm text-gray-400">
              <div>
                <span className="text-white text-2xl font-bold">50K+</span>
                <p>Active Users</p>
              </div>

              <div>
                <span className="text-white text-2xl font-bold">99.9%</span>
                <p>Uptime</p>
              </div>

              <div>
                <span className="text-white text-2xl font-bold">4.9★</span>
                <p>User Rating</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-30 rounded-3xl" />

            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-400 rounded-full" />
                <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                <div className="w-3 h-3 bg-green-400 rounded-full" />
              </div>

              <div className="space-y-5">
                <div className="bg-black/40 rounded-2xl p-5 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">AI Content Generator</h3>
                    <span className="text-green-400 text-sm">Online</span>
                  </div>

                  <div className="space-y-2">
                    <div className="h-3 bg-white/10 rounded-full w-full" />
                    <div className="h-3 bg-white/10 rounded-full w-4/5" />
                    <div className="h-3 bg-white/10 rounded-full w-2/3" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <p className="text-gray-400 text-sm mb-2">Tasks Automated</p>
                    <h4 className="text-3xl font-bold">1.2M</h4>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <p className="text-gray-400 text-sm mb-2">Time Saved</p>
                    <h4 className="text-3xl font-bold">340h</h4>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-5 border border-purple-500/20">
                  <p className="text-sm text-gray-300 mb-2">AI Suggestion</p>
                  <h4 className="font-semibold text-lg leading-relaxed">
                    “Your workflow efficiency increased by 37% this week.”
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-8 lg:px-20 py-24 bg-white/[0.02] border-y border-white/10">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-semibold mb-4">FEATURES</p>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Everything you need in one platform
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Powerful AI tools designed to streamline your workflow and help your team move faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Smart Automation',
              desc: 'Automate repetitive tasks with intelligent AI workflows.',
              icon: '⚡',
            },
            {
              title: 'Real-Time Collaboration',
              desc: 'Collaborate with your team instantly from anywhere.',
              icon: '🌍',
            },
            {
              title: 'Advanced Analytics',
              desc: 'Track performance and gain actionable insights.',
              icon: '📊',
            },
            {
              title: 'AI Content Creation',
              desc: 'Generate high-quality content in seconds.',
              icon: '✍️',
            },
            {
              title: 'Cloud Sync',
              desc: 'Access your projects securely on every device.',
              icon: '☁️',
            },
            {
              title: 'Enterprise Security',
              desc: 'Industry-grade encryption and secure infrastructure.',
              icon: '🔒',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-8 lg:px-20 py-24">
        <div className="text-center mb-16">
          <p className="text-pink-400 font-semibold mb-4">PRICING</p>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Flexible plans for everyone
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: 'Starter',
              price: '$19',
              features: ['5 AI Projects', 'Basic Analytics', 'Email Support'],
            },
            {
              name: 'Pro',
              price: '$49',
              features: ['Unlimited Projects', 'Advanced AI Tools', 'Priority Support'],
              popular: true,
            },
            {
              name: 'Enterprise',
              price: '$99',
              features: ['Custom Integrations', 'Dedicated Manager', 'Enterprise Security'],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 border ${
                plan.popular
                  ? 'bg-gradient-to-b from-purple-500/20 to-pink-500/10 border-purple-500/30 scale-105'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-5xl font-black mb-6">{plan.price}</div>

              <ul className="space-y-4 mb-8 text-gray-300">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-green-400">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:scale-[1.02] transition-transform">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="px-8 lg:px-20 py-24 bg-white/[0.02] border-y border-white/10">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-semibold mb-4">TESTIMONIALS</p>
          <h2 className="text-4xl lg:text-5xl font-black">
            Loved by creators worldwide
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah Johnson',
              role: 'Marketing Director',
              text: 'NovaAI completely transformed our content workflow and saved us countless hours every week.',
            },
            {
              name: 'Michael Lee',
              role: 'Startup Founder',
              text: 'The automation tools are incredibly powerful and surprisingly easy to use.',
            },
            {
              name: 'Emma Davis',
              role: 'Product Designer',
              text: 'Beautiful interface, amazing performance, and outstanding AI features.',
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <div className="text-5xl mb-6">⭐</div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                “{testimonial.text}”
              </p>

              <div>
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-8 lg:px-20 py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-black leading-tight mb-8">
            Ready to build the future with AI?
          </h2>

          <p className="text-gray-400 text-xl mb-10 leading-relaxed">
            Join thousands of teams already using NovaAI to scale faster and work smarter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform">
              Get Started Today
            </button>

            <button className="border border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition">
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 lg:px-20 py-8 border-t border-white/10 text-center text-gray-500 text-sm">
        © 2026 NovaAI. All rights reserved.
      </footer>
    </div>
  );
}
