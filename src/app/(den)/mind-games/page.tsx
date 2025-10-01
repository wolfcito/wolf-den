"use client";

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
    <div className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-wolf-panel/40 p-6 text-sm text-wolf-bone/70">
        <p className="font-medium text-wolf-bone">Mines</p>
        <p className="mt-1">
          Flujos MVP de Mind Games. Mantén la estética original mientras
          agregamos lógica conectada a Self.
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        <section className="flex-1 space-y-6 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                Balance
              </p>
              <p className="text-2xl font-semibold">
                € {balance.toLocaleString()}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                Profit
              </p>
              <p className="text-lg font-semibold">€ {profit.toFixed(2)}</p>
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
                  className={`aspect-square rounded-lg border-2 transition-all duration-200 flex items-center justify-center text-2xl
                    ${
                      isSelected
                        ? isBomb
                          ? "bg-red-500 border-red-400"
                          : "bg-orange-500 border-orange-400"
                        : "bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30"
                    }
                  `}
                >
                  {isSelected && (isBomb ? "💣" : "💎")}
                </button>
              );
            })}
          </div>
        </section>

        <aside className="w-full max-w-sm space-y-4 rounded-2xl border border-white/10 bg-wolf-panel/60 p-6 text-sm text-wolf-bone">
          <div className="space-y-2">
            <label
              htmlFor={mineSelectId}
              className="text-xs uppercase tracking-[0.3em] text-wolf-bone/40"
            >
              Mines
            </label>
            <select
              id={mineSelectId}
              value={mineCount}
              onChange={(event) => setMineCount(Number(event.target.value))}
              className="w-full rounded-xl border border-white/10 bg-wolf-panel/80 px-3 py-2 text-wolf-bone"
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
              className="text-xs uppercase tracking-[0.3em] text-wolf-bone/40"
            >
              Bet amount
            </label>
            <input
              id={betInputId}
              type="number"
              value={betAmount}
              onChange={(event) => setBetAmount(Number(event.target.value))}
              className="w-full rounded-xl border border-white/10 bg-wolf-panel/80 px-3 py-2 text-wolf-bone"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={startGame}
              className="flex-1 rounded-xl bg-wolf-cyan/20 px-4 py-2 font-medium text-wolf-cyan transition hover:bg-wolf-cyan/30"
            >
              Start
            </button>
            <button
              type="button"
              onClick={cashout}
              disabled={!isGameActive}
              className="flex-1 rounded-xl bg-wolf-violet/30 px-4 py-2 font-medium text-wolf-bone transition hover:bg-wolf-violet/40 disabled:cursor-not-allowed disabled:bg-white/5 disabled:text-wolf-bone/40"
            >
              Cashout
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
