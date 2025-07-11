import React from 'react';
//import Modal from '../Modal';
//import RegisterForm from './RegisterForm';
import RegisterModal from './RegisterModal';
import SubscriptionModal from './SubscriptionModal';
import ResultModal from './ResultModal';
import CertificateModal from './CertificateModal';

interface ModalsContainerProps {
  showRegisterModal: boolean;
  showSubscriptionModal: boolean;
  showResultModal: boolean;
  showCertificateModal: boolean;
  setShowRegisterModal: (value: boolean) => void;
  setShowSubscriptionModal: (value: boolean) => void;
  setShowResultModal: (value: boolean) => void;
  setShowCertificateModal: (value: boolean) => void;
  testResult: {
    isEvaluation: boolean;
    approved: boolean;
    score?: number;
    passingScore?: number;
  };
  goToNext: () => void;
  handleReplayVideo: () => void;
  navigate: (path: string) => void;
}

const ModalsContainer: React.FC<ModalsContainerProps> = ({
  showRegisterModal,
  showSubscriptionModal,
  showResultModal,
  showCertificateModal,
  setShowRegisterModal,
  setShowSubscriptionModal,
  setShowResultModal,
  setShowCertificateModal,
  testResult,
  goToNext,
  handleReplayVideo,
  navigate,
}) => {
  return (
    <>
      {showRegisterModal && (
        <RegisterModal onClose={() => setShowRegisterModal(false)} />
      )}

      {showSubscriptionModal && (
        <SubscriptionModal onClose={() => setShowSubscriptionModal(false)} />
      )}

      {showResultModal && (
        <ResultModal
          onClose={() => setShowResultModal(false)}
          testResult={testResult}
          goToNext={goToNext}
          handleReplayVideo={handleReplayVideo}
        />
      )}

      {showCertificateModal && (
        <CertificateModal
          onClose={() => setShowCertificateModal(false)}
          navigate={navigate}
        />
      )}
    </>
  );
};

export default ModalsContainer;
