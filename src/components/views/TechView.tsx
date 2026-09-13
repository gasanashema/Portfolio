import React from 'react';
import { motion } from 'framer-motion';
import TechMatrix from '../TechMatrix';
import Protocols from '../Protocols';
import type { Project } from '../../data/projects';

interface TechViewProps {
  onSelectProject: (project: Project) => void;
}

export default function TechView({ onSelectProject }: TechViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}
    >
      <TechMatrix />
      <Protocols onSelectProject={onSelectProject} />
    </motion.div>
  );
}
