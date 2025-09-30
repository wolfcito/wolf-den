'use client';

import React, { useState, useEffect } from 'react';
import { getUniversalLink } from "@selfxyz/core";
import {
  SelfQRcodeWrapper,
  SelfAppBuilder,
  type SelfApp,
} from "@selfxyz/qrcode";
import { ethers } from "ethers";

interface SelfAuthProps {
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

export default function SelfAuth({ onSuccess, onError }: SelfAuthProps) {
  const [selfApp, setSelfApp] = useState<SelfApp | null>(null);
  const [userId] = useState(ethers.ZeroAddress);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const app = new SelfAppBuilder({
      version: 2,
      appName: "Wolf Den",
      scope: "wolf-den",
      endpoint: process.env.NEXT_PUBLIC_SELF_ENDPOINT || "",
      logoBase64: "https://i.postimg.cc/mrmVf9hm/self.png",
      userId: userId,
      endpointType: "staging_https",
      userIdType: "hex",
      userDefinedData: "Wolf Den Authentication",
      disclosures: {
        minimumAge: 18,
        nationality: true,
        gender: true,
      }
    }).build();

    setSelfApp(app);
  }, [userId]);

  const handleSuccess = () => {
    setIsVerified(true);
    if (onSuccess) {
      onSuccess(null);
    }
    console.log("Self verification successful!");
  };

  const handleError = (data: { error_code?: string; reason?: string }) => {
    const error = new Error(data.reason || 'Verification failed');
    if (onError) {
      onError(error);
    }
    console.error("Self verification error:", data);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-black/20 backdrop-blur-sm rounded-lg">
      {isVerified ? (
        <div className="text-center">
          <div className="text-green-400 text-xl mb-2">✓ Verified</div>
          <p className="text-gray-300">Successfully authenticated with Self</p>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Verify with Self</h2>
          <p className="text-gray-300 mb-6">Scan the QR code with the Self app to verify your identity</p>
          {selfApp && (
            <SelfQRcodeWrapper
              selfApp={selfApp}
              onSuccess={handleSuccess}
              onError={handleError}
            />
          )}
        </div>
      )}
    </div>
  );
}