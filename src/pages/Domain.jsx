import { motion } from 'framer-motion';

const Domain = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const domainData = [
    {
      title: 'Literature Survey',
      content: 'Our comprehensive review of existing transportation systems identified key challenges in data aggregation, real-time processing, and automated hazard response. We evaluated current centralized models and their severe latency limitations in high-density urban environments.'
    },
    {
      title: 'Research Gap',
      content: 'Current systems lack an interconnected edge-computing approach for immediate localized traffic routing. There is a significant gap in predictive analytics capability that operates without high reliance on distant cloud infrastructure, leading to delayed responses during critical incidents.'
    },
    {
      title: 'Research Problem',
      content: 'How can we develop a decentralized, intelligent traffic management infrastructure that minimizes latency in hazard detection and optimally routes vehicles in real-time, adapting instantly to environmental variables in high-density areas?'
    },
    {
      title: 'Research Objectives',
      content: '1. Develop a localized AI model for edge-computing smart roadside units.\n2. Design a dynamic routing algorithm adapting to sudden hazard alerts within milliseconds.\n3. Implement a secure, low-latency vehicular communication protocol (V2X).\n4. Validate the framework through accurate high-density vehicle simulations.'
    },
    {
      title: 'Methodology',
      content: 'The research utilizes an Agile-based iterative prototyping approach. We start with simulating road conditions using SUMO (Simulation of Urban MObility) and apply reinforcement learning algorithms to train the decentralized edge nodes. V2X communications will be evaluated in a controlled local network environments.'
    },
    {
      title: 'Technologies Used',
      content: 'Python, TensorFlow, SUMO Traffic Simulator, C++, React for Dashboard Interfaces, Node.js Microservices, MongoDB, MQTT protocol for V2X interaction.'
    }
  ];

  return (
    <motion.div 
      className="page-transition"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px' }}>Project <span className="gradient-text">Domain</span></h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          Explore the in-depth knowledge and architectural foundation cultivated through our literature survey.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
        {domainData.map((item, index) => (
          <motion.div key={index} variants={itemVariants} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)' }}></div>
              {item.title}
            </h3>
            <p style={{ color: 'var(--text-main)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
              {item.content}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Domain;
