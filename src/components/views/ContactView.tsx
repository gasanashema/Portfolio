import React from 'react';
import { motion } from 'framer-motion';
import Documentation from '../Documentation';
import NowNode from '../NowNode';
import DigitalNetwork from '../DigitalNetwork';
import Contact from '../Contact';
import type { DocArticle } from '../../data/documentation';

interface ContactViewProps {
  onSelectDoc: (doc: DocArticle) => void;
}

export default function ContactView({ onSelectDoc }: ContactViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}
    >
      <Documentation onSelectDoc={onSelectDoc} />
      <NowNode />
      <DigitalNetwork />
      <Contact />
    </motion.div>
  );
}
