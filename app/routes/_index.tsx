import {
  LandingContainer,
  LandingCTA,
  LandingFAQ,
  LandingFeatures,
  LandingHero,
  LandingHowItWorks,
  LandingPainPoints,
  LandingPricing,
  LandingSocialProof,
  LandingSocialRating,
  LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const features = [
    {
      heading: `Quantum-Powered AI Integration`,
      description: `Seamlessly blend AI capabilities with human consciousness for unprecedented problem-solving power.`,
      icon: <i className="las la-brain"></i>,
    },
    {
      heading: `Home-Based Quantum Computing`,
      description: `Experience the power of quantum computing right in your living room, revolutionizing personal tech.`,
      icon: <i className="las la-home"></i>,
    },
    {
      heading: `Hydra-Electromagnetic Technology`,
      description: `Harness the power of water and electricity to create a stable quantum environment for your computations.`,
      icon: <i className="las la-tint"></i>,
    },
    {
      heading: `Subconscious Data Retention`,
      description: `Store vast amounts of data in your subconscious, freeing up conscious space for AI operations.`,
      icon: <i className="las la-database"></i>,
    },
    {
      heading: `Cutting-Edge Cryptography`,
      description: `Unlock new levels of security with quantum-resistant encryption algorithms.`,
      icon: <i className="las la-lock"></i>,
    },
    {
      heading: `Infinite Computational Power`,
      description: `Solve complex problems in seconds that would take classical computers millennia.`,
      icon: <i className="las la-infinity"></i>,
    },
  ]

  const testimonials = [
    {
      name: `Dr. Samantha Chen`,
      designation: `Quantum Physicist`,
      content: `The Hydra-Electromagnetic System has revolutionized my research. I can now run simulations that were previously impossible, opening up entirely new avenues of scientific discovery.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Alex Rodriguez`,
      designation: `AI Developer`,
      content: `As an AI developer, the seamless integration between quantum computing and AI in this system is a game-changer. It's like having a supercomputer and an AI lab in my living room.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Emma Watson`,
      designation: `Cybersecurity Expert`,
      content: `The quantum-resistant cryptography capabilities of this system are unparalleled. It's reassuring to know that our data will be secure even in the post-quantum era.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: `Dr. Rajesh Koothrappali`,
      designation: `Theoretical Physicist`,
      content: `The Hydra-Electromagnetic System has turned abstract quantum concepts into tangible reality. It's not just a computer; it's a portal to understanding the universe.`,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: `Sarah Johnson`,
      designation: `Data Scientist`,
      content: `The computational power of this system is mind-boggling. I can now process and analyze datasets that were previously too large and complex for traditional systems.`,
      avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    },
    {
      name: `Michael Chang`,
      designation: `Tech Entrepreneur`,
      content: `This system has given my startup a competitive edge we never thought possible. We're solving problems and innovating at a pace that's leaving our competitors in the dust.`,
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Quantum Novice`,
      description: `Perfect for individuals starting their quantum journey`,
      monthly: 999,
      yearly: 10999,
      features: [
        `Basic quantum computing capabilities`,
        `AI integration starter pack`,
        `24/7 quantum support`,
      ],
    },
    {
      title: `Quantum Pro`,
      description: `Ideal for researchers and small businesses`,
      monthly: 2999,
      yearly: 32999,
      features: [
        `Advanced quantum computing power`,
        `Full AI integration suite`,
        `Priority quantum support`,
        `Quantum cryptography module`,
      ],
      highlight: true,
    },
    {
      title: `Quantum Enterprise`,
      description: `For organizations pushing the boundaries of technology`,
      monthly: 9999,
      yearly: 109999,
      features: [
        `Unlimited quantum computing power`,
        `Custom AI integration solutions`,
        `Dedicated quantum support team`,
        `Advanced quantum cryptography suite`,
        `On-site quantum maintenance`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `What exactly is the Hydra-Electromagnetic System?`,
      answer: `The Hydra-Electromagnetic System is a revolutionary home quantum computer prototype that combines water and electric currents to create a stable quantum environment. It allows for unprecedented computing power and seamless AI integration in your home.`,
    },
    {
      question: `Do I need any special knowledge to use this system?`,
      answer: `While a basic understanding of computing is helpful, our system is designed to be user-friendly. We provide comprehensive tutorials and 24/7 support to help you navigate the quantum world.`,
    },
    {
      question: `How does this system ensure data security?`,
      answer: `Our system employs cutting-edge quantum-resistant cryptography, ensuring that your data remains secure even in the face of future quantum threats.`,
    },
    {
      question: `Can this system replace my current computer?`,
      answer: `While the Hydra-Electromagnetic System offers unprecedented computing power for complex tasks, it's designed to complement rather than replace your current computer for day-to-day tasks.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Install the Hydra-Electromagnetic Core`,
      description: `Our team of experts will set up the quantum core in your home, ensuring optimal placement and connection.`,
    },
    {
      heading: `Activate the Quantum-AI Bridge`,
      description: `Initialize the system to create a seamless connection between quantum computing and AI capabilities.`,
    },
    {
      heading: `Calibrate Your Consciousness Interface`,
      description: `Fine-tune the system to your unique brainwave patterns for optimal human-quantum interaction.`,
    },
    {
      heading: `Unleash Infinite Computational Power`,
      description: `Start solving complex problems, running advanced simulations, and exploring the frontiers of technology like never before.`,
    },
  ]

  const painPoints = [
    {
      emoji: `🐌`,
      title: `Frustrated by the limitations of classical computing`,
    },
    {
      emoji: `🔒`,
      title: `Worried about future quantum threats to data security`,
    },
    {
      emoji: `🧠`,
      title: `Struggling to integrate AI with human cognition effectively`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Unlock the Power of Quantum Computing in Your Home`}
        subtitle={`Experience the future today with the world's first home quantum computer. Revolutionize your problem-solving capabilities and push the boundaries of what's possible.`}
        buttonText={`Begin Your Quantum Journey`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/XkMgYp-hydraelectromagneti-mMZZ`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText={`quantum pioneers`}
          />
        }
      />
      <LandingSocialProof
        logos={logos}
        title={`Recognized by Leading Tech Innovators`}
      />
      <LandingPainPoints
        title={`The Quantum Revolution is Here, Don't Get Left Behind`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Embark on Your Quantum Journey in 4 Simple Steps`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Harness the Power of Quantum Computing to Transform Your World`}
        subtitle={`Discover how the Hydra-Electromagnetic System can revolutionize your approach to problem-solving and data processing.`}
        features={features}
      />
      <LandingTestimonials
        title={`Join the Quantum Revolution: Real Stories from Our Pioneers`}
        subtitle={`See how the Hydra-Electromagnetic System is transforming research, business, and innovation across industries.`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Invest in the Future of Computing`}
        subtitle={`Choose the perfect quantum package to propel your projects into a new dimension of possibility.`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Demystifying Quantum Computing`}
        subtitle={`Get answers to your questions about the revolutionary Hydra-Electromagnetic System.`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Quantum Leap Your Capabilities?`}
        subtitle={`Join the quantum revolution today and unlock unprecedented computational power in your home.`}
        buttonText={`Start Your Quantum Journey`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
