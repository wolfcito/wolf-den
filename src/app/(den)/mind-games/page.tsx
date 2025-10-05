"use client";

import { Gem, Skull } from "lucide-react";
import { useMemo, useState } from "react";

export default function MindGamesPage() {
  const [selectedCells, setSelectedCells] = useState<number[]>([]);
  const [mineCount, setMineCount] = useState(1);
  const [betAmount, setBetAmount] = useState(100);
  const [isGameActive, setIsGameActive] = useState(false);

  const gridSize = 25;
  const balance = 100924;
  const profit = 394.39;
  const cells = useMemo(
    () =>
      Array.from({ length: gridSize }, (_, index) => ({
        id: `cell-${index}`,
        index,
      })),
    [],
  );
  const mineSelectId = "mind-games-mine-count";
  const betInputId = "mind-games-bet-amount";

  const handleCellClick = (index: number) => {
    if (!isGameActive) return;

    setSelectedCells((cells) =>
      cells.includes(index)
        ? cells.filter((i) => i !== index)
        : [...cells, index],
    );
  };

  const startGame = () => {
    setIsGameActive(true);
    setSelectedCells([]);
  };

  const cashout = () => {
    setIsGameActive(false);
  };

  return (
    <div className="space-y-6 text-[#0f1621]">
      <div className="rounded-2xl y-6 shadow-[0_35px_90px_-70px_rgba(15,22,33,0.55)]">
        <p className="font-medium text-[#0f1621]">Mines</p>
        <p className="mt-1 text-sm text-[#44506b]">
          Flujos MVP de Mind Games. Mantén la estética original mientras
          agregamos lógica conectada a Self.
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        <section className="flex-1 space-y-6 rounded-2xl border border-[#e2e6f5] bg-white p-6 shadow-[0_40px_100px_-70px_rgba(15,22,33,0.55)]">
          <div className="flex items-center justify-between rounded-2xl border border-[#d1d7eb] bg-[#eef2ff] px-4 py-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#8894b3]">
                Balance
              </p>
              <p className="text-2xl font-semibold text-[#0f1621]">
                € {balance.toLocaleString()}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-[0.3em] text-[#8894b3]">
                Profit
              </p>
              <p className="text-lg font-semibold text-[#0f1621]">
                € {profit.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-3">
            {cells.map(({ id, index }) => {
              const isSelected = selectedCells.includes(index);
              const isBomb = isSelected && Math.random() > 0.9;

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => handleCellClick(index)}
                  className={`flex aspect-square items-center justify-center rounded-lg border-2 text-2xl transition-all duration-200
                    ${
                      isSelected
                        ? isBomb
                          ? "bg-[#ffe4e4] border-[#ffb2b2] text-[#a61b2a]"
                          : "bg-[#447bff] border-[#447bff] text-white"
                        : "border-[#d1d7eb] bg-white hover:border-[#447bff] hover:bg-[#eef2ff]"
                    }
                  `}
                >
                  {isSelected &&
                    (isBomb ? (
                      <Skull className="h-6 w-6" aria-hidden />
                    ) : (
                      <Gem className="h-6 w-6" aria-hidden />
                    ))}
                </button>
              );
            })}
          </div>
        </section>

        <aside className="w-full max-w-sm space-y-4 rounded-2xl border border-[#e2e6f5] bg-white p-6 shadow-[0_35px_90px_-70px_rgba(15,22,33,0.55)]">
          <div className="space-y-2">
            <label
              htmlFor={mineSelectId}
              className="text-xs uppercase tracking-[0.3em] text-[#8894b3]"
            >
              Mines
            </label>
            <select
              id={mineSelectId}
              value={mineCount}
              onChange={(event) => setMineCount(Number(event.target.value))}
              className="w-full rounded-xl border border-[#d1d7eb] bg-white px-3 py-2 text-[#0f1621]"
            >
              {[1, 2, 3, 24].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor={betInputId}
              className="text-xs uppercase tracking-[0.3em] text-[#8894b3]"
            >
              Bet amount
            </label>
            <input
              id={betInputId}
              type="number"
              value={betAmount}
              onChange={(event) => setBetAmount(Number(event.target.value))}
              className="w-full rounded-xl border border-[#d1d7eb] bg-white px-3 py-2 text-[#0f1621]"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={startGame}
              className="flex-1 rounded-xl bg-[#447bff] px-4 py-2 font-medium text-white transition hover:bg-[#5d8cff]"
            >
              Start
            </button>
            <button
              type="button"
              onClick={cashout}
              disabled={!isGameActive}
              className="flex-1 rounded-xl bg-[#0b1320] px-4 py-2 font-medium text-white transition hover:bg-[#131d30] disabled:cursor-not-allowed disabled:bg-[#e3e6f2] disabled:text-[#9aa5c3]"
            >
              Cashout
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
