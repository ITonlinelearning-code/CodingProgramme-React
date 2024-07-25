// StatusBoard.js
import React from 'react';
import TicketInfo from './TicketInfo';
import completedImage from '../images/completed.png';
import inProgressImage from '../images/in-progress.png';
import failedImage from '../images/failed.png';

const StatusBoard = () => {
  return (
    <div className="status-board">
      <TicketInfo result="completed" image={completedImage}>
        <p>Tickets Completed</p>
      </TicketInfo>
      
      <TicketInfo result="in-progress" image={inProgressImage}>
        <p>Tickets In Progress</p>
      </TicketInfo>
      
      <TicketInfo result="failed" image={failedImage}>
        <p>Tickets Failed</p>
      </TicketInfo>
    </div>
  );
};

export default StatusBoard;

// TicketInfo.js
import React from 'react';

const TicketInfo = ({ result, image, children }) => {
  return (
    <div className={`ticket-info ${result}`}>
      {/* Implement the ticket info display here */}
    </div>
  );
};

export default TicketInfo;