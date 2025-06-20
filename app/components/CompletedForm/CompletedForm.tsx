import { CompletedFormProps } from './CompletedForm.type';
import { motion } from 'framer-motion';

const CompletedForm: React.FC<CompletedFormProps> = ({ formCompleted }) => {
  return (
    <motion.div
      initial={{ y: '100%', opacity: 0 }}
      animate={{
        y: formCompleted ? '0%' : '100%',
        opacity: formCompleted ? 1 : 0,
      }}
      transition={{ duration: 1.6 }}
      className={`w-full h-full bg-[#6CA936] absolute top-0 lg:rounded-lg`}
    >
      <div className="flex justify-center items-center h-full">
        <div className="text-white text-center select-none font-sans">
          <strong className="text-[26px]">¡Muchas gracias!</strong>
          <br />
          <p className="text-xl">Uno de nuestros asesores te contactará</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CompletedForm;
