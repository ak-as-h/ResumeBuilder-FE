
import React from 'react';
import { Link } from 'react-router-dom';
import assets from '../assets/404.gif'

const PNF = () => {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .pnf-page {
          width: 100%;
          height: 100vh;
          height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #e9edef;
          font-family: Arial, sans-serif;
          position: relative;
        }

        .pnf-gif {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }

        .pnf-home {
          position: absolute;
          bottom: 8%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
          padding: 12px 28px;
          border-radius: 8px;
          background: #100b2d;
          color: #ffffff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          transition: background 0.25s ease,
                      transform 0.25s ease;
        }

        .pnf-home:hover {
          background: #ff685e;
          transform: translateX(-50%) translateY(-3px);
        }

        @media (max-width: 600px) {
          .pnf-gif {
            width: 100%;
            height: 100%;
          }

          .pnf-home {
            bottom: 5%;
          }
        }
      `}</style>

      <div className="pnf-page">
        <img
          src={assets}
          alt="404 - Page Not Found"
          className="pnf-gif"
        />

        <Link to="/" className="pnf-home">
          ← Back to Home
        </Link>
      </div>
    </>
  );
};

export default PNF;
