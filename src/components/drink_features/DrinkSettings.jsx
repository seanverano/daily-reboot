import React, { useState } from "react";
import { IoWarningOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const DrinkSettings = ({ show, onClose, onSaveSettings, currentSettings }) => {
  const [dailyGoal, setDailyGoal] = useState(
    currentSettings?.dailyGoal || 2000
  );
  const [resetHour, setResetHour] = useState(
    currentSettings?.resetHour || "00:00"
  );
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleSave = () => {
    onSaveSettings({
      dailyGoal: parseInt(dailyGoal),
      resetHour,
    });
    onClose();
  };

  const handleReset = () => {
    localStorage.removeItem("drinkLogs");
    localStorage.removeItem("totalVolume");
    window.location.reload();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-[#000000] bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-transparent rounded-lg p-2 w-[320px] relative">
        <button onClick={onClose} className="absolute right-9 top-5">
          <IoClose className="text-[#000000] hover:text-[#1CABE3] text-lg" />
        </button>

        <div className="mx-4 bg-[#EEF8FB] rounded-lg font-manrope">
          <div className="flex-none p-4 border-b border-[#CFECF4] w-full">
            <h2 className="text-[#000000] text-center text-base font-bold leading-normal">
              Settings
            </h2>
          </div>

          <div className="p-4 space-y-4">
            <div className="flex flex-col justify-center">
              <h1 className="text-[#4f8296] text-xs font-bold leading-normal">
                Daily Goal (in ml)
              </h1>
              <input
                type="number"
                value={dailyGoal}
                placeholder="Enter daily goal (in ml)"
                onChange={(e) => setDailyGoal(e.target.value)}
                className="w-full font-semibold placeholder:italic bg-[#F9FBFA] text-[#000000] text-xs text-center mt-4 mb-1 p-2 border border-[#CFECF4] rounded-full w-[175px] focus:outline-none focus:ring-1 focus:ring-[#1CABE3]"
                min="500"
                max="10000"
                step="100"
              />
            </div>

            <div className="flex justify-center flex flex-col">
              <h1 className="text-[#4f8296] text-xs font-bold leading-normal">
                Daily Reset Time
              </h1>
              <input
                type="time"
                value={resetHour}
                placeholder="Enter daily goal (in ml)"
                onChange={(e) => setResetHour(e.target.value)}
                className="w-full font-semibold placeholder:italic bg-[#F9FBFA] text-[#000000] text-xs text-center mt-4 mb-1 p-2 border border-[#CFECF4] rounded-full w-[175px] focus:outline-none focus:ring-1 focus:ring-[#1CABE3]"
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleSave}
                className="m-0 w-[120px] rounded-full h-10 px-4 flex items-center justify-center bg-[#1CABE3] cursor-pointer transition-transform duration-200 active:translate-y-1"
              >
                <p className="text-[#E7F0F2] text-xs font-bold leading-normal tracking-[0.015em]">
                  Save Settings
                </p>
              </button>
            </div>

            <div className="mt-6 pt-4 border-t border-[#CFECF4]">
              <h2 className="flex items-center justify-center gap-2 mb-2 text-[#000000] text-center text-sm font-bold leading-normal">
                <IoWarningOutline /> Reset Zone
              </h2>
              <p className="flex items-center gap-2 mb-2 text-[#C53030] text-left text-xs font-bold leading-normal">
                This manually resets your daily progress and logs.
              </p>
              <div className="flex justify-center">
                {!showResetConfirm ? (
                  <button
                    onClick={() => setShowResetConfirm(true)}
                    className="m-0 w-[120px] rounded-full h-10 px-4 flex items-center justify-center bg-[#000000] cursor-pointer transition-transform duration-200 active:translate-y-1"
                  >
                    <p className="text-[#E7F0F2] text-xs font-bold leading-normal tracking-[0.015em]">
                      Start Fresh
                    </p>
                  </button>
                ) : (
                  <div className="flex flex flex-row justify-center items-center">
                    <p className="text-xs text-[#4f8296]">
                      Are you sure? This cannot be undone.
                    </p>
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() => setShowResetConfirm(false)}
                        className="text-lg font-bold text-[#E7F0F2] px-4 py-2 rounded-lg flex items-center justify-center bg-[#000000] cursor-pointer hover:bg-[transparent] hover:text-[#000000]"
                      >
                        <FaTimesCircle />
                      </button>
                      <button
                        onClick={handleReset}
                        className="text-lg font-bold text-[#E7F0F2] px-4 py-2 rounded-lg flex items-center justify-center bg-red-600 cursor-pointer hover:bg-[transparent] hover:text-[#C53030]"
                      >
                        <FaCheckCircle />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkSettings;