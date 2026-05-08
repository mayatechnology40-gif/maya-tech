const LoadingSpinner = ({ fullScreen = false }) => {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm ${fullScreen ? '' : 'rounded-3xl shadow-2xl p-12 max-w-2xl mx-4'}`}>
      <div className="flex flex-col items-center space-y-6">
        {/* Large Spinner */}
        <div className="relative">
          <div className="w-24 h-24 border-4 border-primary-200/30 border-t-primary-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-24 h-24 border-4 border-primary-100/50 border-t-primary-500 rounded-full animate-ping"></div>
        </div>
        
        {/* Text */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Loading</h3>
          <p className="text-lg text-gray-300">Please wait while we prepare your content...</p>
        </div>
        
        {/* Progress dots */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-white/50 rounded-full animate-bounce [animation-delay:0.1s]"></div>
          <div className="w-3 h-3 bg-white/50 rounded-full animate-bounce [animation-delay:0.2s]"></div>
          <div className="w-3 h-3 bg-white/50 rounded-full animate-bounce [animation-delay:0.3s]"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;