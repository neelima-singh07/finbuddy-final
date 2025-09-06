import React, { useState, useEffect } from 'react';

const WhatsAppConnect = () => {
  const [connectionStatus, setConnectionStatus] = useState('disconnected'); // 'disconnected', 'connecting', 'connected'
  const [qrCode, setQrCode] = useState('');
  const [showQR, setShowQR] = useState(false);

  // Simulate QR code generation
  const generateQRCode = () => {
    const qrData = `https://wa.me/qr/${Math.random().toString(36).substring(2, 15)}`;
    // In a real app, this would be a proper QR code image
    setQrCode(qrData);
    setShowQR(true);
    setConnectionStatus('connecting');
    
    // Simulate connection after 5 seconds
    setTimeout(() => {
      setConnectionStatus('connected');
      setShowQR(false);
      localStorage.setItem('finbuddy_whatsapp_connected', 'true');
    }, 5000);
  };

  // Check connection status on component mount
  useEffect(() => {
    const isConnected = localStorage.getItem('finbuddy_whatsapp_connected');
    if (isConnected === 'true') {
      setConnectionStatus('connected');
    }
  }, []);

  const disconnectWhatsApp = () => {
    setConnectionStatus('disconnected');
    localStorage.removeItem('finbuddy_whatsapp_connected');
    setShowQR(false);
  };

  const renderConnectionStatus = () => {
    switch (connectionStatus) {
      case 'connected':
        return (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">✓</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-green-800 text-center mb-2">
              WhatsApp Connected Successfully!
            </h3>
            <p className="text-green-700 text-center mb-4">
              You can now send expense messages to FinBuddy on WhatsApp
            </p>
            <div className="text-center space-y-2">
              <p className="text-sm text-green-600">Connected Device: iPhone 12 Pro</p>
              <p className="text-sm text-green-600">Phone: +1 (555) 123-4567</p>
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={disconnectWhatsApp}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Disconnect WhatsApp
              </button>
            </div>
          </div>
        );
      
      case 'connecting':
        return (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="text-center">
              <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                Connecting to WhatsApp...
              </h3>
              <p className="text-blue-700 text-sm">
                Please scan the QR code with your WhatsApp mobile app
              </p>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-600 text-2xl">💬</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Connect Your WhatsApp
              </h3>
              <p className="text-gray-600 mb-4">
                Link your WhatsApp to start tracking expenses via chat
              </p>
              <button
                onClick={generateQRCode}
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 flex items-center space-x-2 mx-auto"
              >
                <span>📱</span>
                <span>Connect WhatsApp</span>
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">WhatsApp Integration</h1>
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
          connectionStatus === 'connected' ? 'bg-green-100 text-green-800' :
          connectionStatus === 'connecting' ? 'bg-blue-100 text-blue-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {connectionStatus === 'connected' ? '🟢 Connected' :
           connectionStatus === 'connecting' ? '🟡 Connecting' :
           '🔴 Disconnected'}
        </div>
      </div>

      {renderConnectionStatus()}

      {showQR && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 text-center mb-4">
            Scan QR Code with WhatsApp
          </h3>
          <div className="flex justify-center mb-4">
            {/* QR Code Placeholder - In real app, use a QR code library */}
            <div className="w-64 h-64 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center relative">
              <div className="absolute inset-4 border-2 border-black"></div>
              <div className="absolute inset-8 bg-black"></div>
              <div className="absolute inset-12 bg-white"></div>
              <div className="absolute inset-16 bg-black"></div>
              <div className="absolute top-4 left-4 w-8 h-8 border-2 border-black"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-2 border-black"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-black"></div>
              <div className="text-xs text-gray-500 absolute bottom-2 left-0 right-0 text-center">
                QR Code
              </div>
            </div>
          </div>
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600">
              1. Open WhatsApp on your phone
            </p>
            <p className="text-sm text-gray-600">
              2. Tap Menu (⋮) → Linked Devices
            </p>
            <p className="text-sm text-gray-600">
              3. Tap "Link a Device" and scan this QR code
            </p>
          </div>
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowQR(false)}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Cancel Connection
            </button>
          </div>
        </div>
      )}

      {/* Usage Instructions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-medium text-gray-800 mb-4">How to Use WhatsApp Expense Tracking</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-800 mb-3">📝 Message Examples</h3>
            <div className="space-y-2">
              <div className="bg-green-100 p-3 rounded-lg text-sm">
                <strong>You:</strong> "Spent $25 on lunch at McDonald's"
              </div>
              <div className="bg-blue-100 p-3 rounded-lg text-sm">
                <strong>FinBuddy:</strong> "✅ Added $25 expense for Food & Dining. Your monthly food budget: $175 remaining."
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 mb-3">🎯 Smart Features</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Automatic expense categorization</li>
              <li>• Real-time budget tracking</li>
              <li>• Receipt photo processing</li>
              <li>• Goal progress updates</li>
              <li>• Smart spending insights</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Chat Simulation */}
      {connectionStatus === 'connected' && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">💬 Recent WhatsApp Messages</h2>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            <div className="flex justify-end">
              <div className="bg-green-500 text-white p-3 rounded-lg max-w-xs">
                <p className="text-sm">Spent $45 on gas</p>
                <p className="text-xs opacity-75">2:34 PM</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-gray-100 p-3 rounded-lg max-w-xs">
                <p className="text-sm">✅ Added $45 expense for Transportation. Monthly transport budget: $155 remaining.</p>
                <p className="text-xs text-gray-500">2:34 PM</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-green-500 text-white p-3 rounded-lg max-w-xs">
                <p className="text-sm">Coffee $4.50</p>
                <p className="text-xs opacity-75">1:15 PM</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-gray-100 p-3 rounded-lg max-w-xs">
                <p className="text-sm">☕ Added $4.50 for Food & Dining. Tip: You've had 12 coffees this month - consider brewing at home to save $30!</p>
                <p className="text-xs text-gray-500">1:15 PM</p>
              </div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              💡 <strong>Pro Tip:</strong> Send photos of receipts and I'll automatically extract the amount and merchant details!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppConnect;