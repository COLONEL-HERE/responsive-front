import React from 'react';
import MainButton from '../features/MainButton';
import { BsDot } from 'react-icons/bs';

const ContentThree = (): JSX.Element => {
  return (
    <div className="relative flex h-full flex-col items-center space-y-8 bg-customWhite px-8 py-8 text-lg  sm:px-36 xl:space-y-16 xl:px-36 xl:py-16">
      <p className="my-2 text-start text-3xl tracking-wide sm:my-4 xl:text-center xl:text-4xl">
        What You'll Get At Your <span className="text-primary">Free</span>{' '}
        Consultation
      </p>
      <div className="flex flex-wrap justify-around space-y-8 xl:space-y-0">
        <div className="contentThreeContainer popUpAnimation">
          <p className="text-center text-2xl text-secondary xl:text-3xl">
            Body Mass Index
          </p>
          <hr className="border-1 border-secondary" />
          <ul className="space-y-4">
            <li className="flex text-base xl:text-lg">
              <BsDot className="bulletPoint" />
              Complete understanding of your body composition
            </li>
            <li className="flex text-base xl:text-lg">
              <BsDot className="bulletPoint" />A clear view of your weight loss
              goals
            </li>
            <li className="flex text-base xl:text-lg">
              <BsDot className="bulletPoint" />
              Clear data to help you make an informed decision about your health
            </li>
          </ul>
        </div>
        <div className="contentThreeContainer popUpAnimation">
          <p className="text-center text-2xl text-primary xl:text-3xl">
            Vital Signs Check
          </p>
          <hr className="border-1 border-primary" />
          <ul className="space-y-4">
            <li className="flex text-base xl:text-lg">
              <BsDot className="bulletPoint" />
              Body temperature
            </li>
            <li className="flex text-base xl:text-lg">
              <BsDot className="bulletPoint" />
              Pulse rate, heart's rate, rhythm and regularity
            </li>
            <li className="flex text-base xl:text-lg">
              <BsDot className="bulletPoint" />
              Breathing rare
            </li>
            <li className="flex text-base xl:text-lg">
              <BsDot className="bulletPoint" />
              Blood pressure
            </li>
          </ul>
        </div>
      </div>
      <MainButton overwrite="xl:self-center" />
    </div>
  );
};

export default ContentThree;
