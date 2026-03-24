import { motion } from "motion/react";

type Props = {
  isActive: boolean;
};

export function ActiveItemIndicator({ isActive }: Props) {
  return (
    <motion.div
      className="absolute z-1 inset-0 rounded-md border-2 border-white/60 pointer-events-none"
      layoutId="active-item-indicator"
      initial={false}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    />
  );
}
