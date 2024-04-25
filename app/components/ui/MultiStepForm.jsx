
"use client"
import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Button } from './Button';

const MultiStepForm = ({ children, initialValues, onSubmit }) => {
   const [stepNumber, setStepNumber] = useState(0);
   const [snapshot, setSnapshot] = useState(initialValues);

   const steps = React.Children.toArray(children);
   const step = steps[stepNumber];
   const totalSteps = steps.length;
   const isLastStep = stepNumber === totalSteps - 1;

   const progressPercentage = ((stepNumber + 1) / totalSteps) * 100;

   const next = values => {
      setSnapshot(values);
      setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
   };

   const previous = values => {
      setSnapshot(values);
      setStepNumber(Math.max(stepNumber - 1, 0));
   };

   const handleSubmit = async (values, actions) => {
      if (step.props.onSubmit) {
         await step.props.onSubmit(values, actions);
      }
      if (isLastStep) {
         return onSubmit(values, actions);
      } else {
         actions.setTouched({});
         next(values);
      }
   };

   return (
      <Formik
         className="relative"
         initialValues={snapshot}
         onSubmit={handleSubmit}
         validationSchema={step.props.validationSchema}
      >
         {formik => (
            <Form>
               <div className="">
                  <div className="flex justify-between">
                     <h4>New Profile Registration</h4>
                     <h4>
                        Step {stepNumber + 1} of {totalSteps} ({Math.round(progressPercentage)}%)
                     </h4>
                  </div>
                  <div className="mb-3 overflow-auto">{step}</div>
                  <div className="bg-white top-2 flex justify-between items-center gap-x-6 py-3 px-6">
                     <div>
                        {stepNumber > 0 && (
                           <Button
                              variant="gray"
                              className="rounded-md"
                              onClick={() => previous(formik.values)}
                              type="button"
                           >
                              Back
                           </Button>
                        )}
                     </div>
                     <div>
                        <Button
                           variant="gray"
                           className="rounded-md"
                           disabled={formik.isSubmitting}
                           type="submit"
                        >
                           {isLastStep ? 'Submit' : 'Next'}
                        </Button>
                     </div>
                  </div>
               </div>
            </Form>
         )}
      </Formik>
   );
};

export default MultiStepForm;

export const FormStep = ({ stepName = '', children }) => children;


