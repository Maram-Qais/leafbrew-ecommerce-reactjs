import { motion, AnimatePresence } from 'framer-motion';
import { HiCheck, HiX, HiExclamation } from 'react-icons/hi';

const Toast = ({ toasts, onRemove }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <HiCheck className="text-green-600" />;
      case 'error':
        return <HiX className="text-red-600" />;
      case 'warning':
        return <HiExclamation className="text-yellow-600" />;
      default:
        return <HiCheck className="text-green-600" />;
    }
  };

  const getBgColor = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'error':
        return 'bg-red-50 border-red-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      default:
        return 'bg-green-50 border-green-200';
    }
  };

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            className={`flex items-center p-4 border rounded-lg shadow-lg max-w-sm ${getBgColor(toast.type)}`}
          >
            <div className="mr-3">
              {getIcon(toast.type)}
            </div>
            <p className="font-work text-sm text-gray-800 flex-1">{toast.message}</p>
            <button
              onClick={() => onRemove(toast.id)}
              className="ml-3 text-gray-400 hover:text-gray-600"
            >
              <HiX size={16} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Toast;