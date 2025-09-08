// CampaignModal.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string[] | JSX.Element[];
}

const CampaignModal: React.FC<CampaignModalProps> = ({ isOpen, onClose, title, content }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md overflow-auto p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-main dark:bg-gray-900 w-full max-w-5xl max-h-[90vh]  shadow-2xl relative overflow-y-auto p-8"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-2  rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
              onClick={onClose}
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Title */}
            <h2 className="text-4xl font-extrabold mb-6 text-yellow-500 text-center">{title}</h2>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 leading-relaxed">
              {content.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>

            {/* Close Button Bottom */}
            <div className="mt-8 flex justify-center">
              <Button onClick={onClose} className="bg-primary text-white hover:bg-primary/90 px-8 py-3 rounded-xl">
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CampaignModal;
