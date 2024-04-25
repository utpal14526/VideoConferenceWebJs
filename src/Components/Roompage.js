import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

export default function Roompage() {
  const { roomID } = useParams();
  const containerRef = useRef(null); // Create a reference to the DOM element

  useEffect(() => {
    const myMeeting = () => {
      const appID = 742022174;
      const serverSecret = "f502f73b1ceda6dcdaff279b8c1a2950";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), 'Utpal');

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: containerRef.current, // Pass the DOM element reference
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
      });
    };

    myMeeting();
  }, [roomID]);

  return (
    <div className='room-page'>
      <div ref={containerRef}></div> {/* Attach the ref to a DOM element */}
    </div>
  );
}
