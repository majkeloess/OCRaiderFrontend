import { motion } from "framer-motion";

export const ProcessingView = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center w-full"
    >
      <p className="relative z-20 font-sans font-bold text-neutral-700 dark:text-neutral-300 text-base mb-4">
        Przetwarzanie pliku...
      </p>
      <div className="mt-4 h-1 w-32 bg-neutral-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-sky-500"
          animate={{
            width: ["0%", "100%"],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        />
      </div>
    </motion.div>
  );
};
