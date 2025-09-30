import SelfAuth from '@/components/SelfAuth';

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">W</span>
            </div>
            <span className="font-bold text-3xl">WOLF DEN</span>
          </div>
          <p className="text-gray-300 text-lg">Secure Authentication with Self</p>
        </div>

        <SelfAuth
          onSuccess={(data) => {
            console.log('Authentication successful:', data);
          }}
          onError={(error) => {
            console.error('Authentication failed:', error);
          }}
        />

        <div className="mt-8 text-center">
          <a href="/" className="text-purple-400 hover:text-purple-300 underline">
            Back to Games
          </a>
        </div>
      </div>
    </div>
  );
}