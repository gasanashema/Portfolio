import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../Timeline';

export default function JourneyView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}
    >
      <Timeline />
    </motion.div>
  );
}
