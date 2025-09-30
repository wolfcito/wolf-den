'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedCells, setSelectedCells] = useState<number[]>([]);
  const [mineCount, setMineCount] = useState(1);
  const [betAmount, setBetAmount] = useState(100);
  const [isGameActive, setIsGameActive] = useState(false);

  const gridSize = 25; // 5x5 grid
  const balance = 100924;
  const profit = 394.39;

  const handleCellClick = (index: number) => {
    if (!isGameActive) return;

    if (selectedCells.includes(index)) {
      setSelectedCells(selectedCells.filter(i => i !== index));
    } else {
      setSelectedCells([...selectedCells, index]);
    }
  };

  const startGame = () => {
    setIsGameActive(true);
    setSelectedCells([]);
  };

  const cashout = () => {
    setIsGameActive(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white flex">
      {/* Left Sidebar */}
      <div className="w-64 bg-black/20 backdrop-blur-sm border-r border-white/10 p-4">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-sm">W</span>
          </div>
          <span className="font-bold text-lg">WOLF DEN</span>
        </div>

        <div className="space-y-2">
          <div className="text-xs text-gray-400 uppercase tracking-wider mb-3">MIND GAMES</div>

          <div className="flex items-center gap-3 p-3 bg-purple-600/30 rounded-lg cursor-pointer">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">⚡</span>
            </div>
            <span className="text-sm">Puzzle Rush</span>
          </div>

          <div className="flex items-center gap-3 p-3 bg-purple-600/50 rounded-lg cursor-pointer border border-purple-400">
            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">💎</span>
            </div>
            <span className="text-sm font-medium">Mines</span>
          </div>

          <div className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg cursor-pointer">
            <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">🎯</span>
            </div>
            <span className="text-sm">Memory Game</span>
          </div>

          <div className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg cursor-pointer">
            <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">🧩</span>
            </div>
            <span className="text-sm">Logic Puzzles</span>
          </div>

          <div className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg cursor-pointer">
            <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">🎲</span>
            </div>
            <span className="text-sm">Pattern Match</span>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/10">
          <div className="text-xs text-gray-400 uppercase tracking-wider mb-3">OTHER FEATURES</div>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="cursor-pointer hover:text-white">📊 Stats</div>
            <div className="cursor-pointer hover:text-white">🏆 Leaderboard</div>
            <div className="cursor-pointer hover:text-white">⚙️ Settings</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Game Area */}
        <div className="flex-1 p-6">
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-2">
              <button className="px-4 py-2 bg-white/10 rounded-lg text-sm">← BACK</button>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💎</span>
                <span className="text-xl font-bold">Mines</span>
              </div>
            </div>
            <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs inline-block">
              WOLF DEN ORIGINALS
            </div>
          </div>

          <div className="text-right mb-4">
            <div className="text-2xl font-bold">€ {balance.toLocaleString()}</div>
            <div className="text-sm text-gray-300">your profit</div>
          </div>

          {/* Game Grid */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 mb-6">
            <div className="grid grid-cols-5 gap-3 max-w-md mx-auto">
              {Array.from({ length: gridSize }, (_, index) => {
                const isSelected = selectedCells.includes(index);
                const isBomb = isSelected && Math.random() > 0.9;

                return (
                  <button
                    key={index}
                    onClick={() => handleCellClick(index)}
                    className={`
                      aspect-square rounded-lg border-2 transition-all duration-200 flex items-center justify-center text-2xl
                      ${isSelected
                        ? isBomb
                          ? 'bg-red-500 border-red-400'
                          : 'bg-orange-500 border-orange-400'
                        : 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30'
                      }
                    `}
                  >
                    {isSelected && (isBomb ? '💣' : '💎')}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Game Controls */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6">
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div>
                <label className="text-xs text-gray-300 block mb-2">MINES</label>
                <select
                  value={mineCount}
                  onChange={(e) => setMineCount(Number(e.target.value))}
                  className="w-full bg-black/30 border border-white/20 rounded-lg px-3 py-2 text-white"
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={24}>24</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-300 block mb-2">BET</label>
                <input
                  type="number"
                  value={betAmount}
                  onChange={(e) => setBetAmount(Number(e.target.value))}
                  className="w-full bg-black/30 border border-white/20 rounded-lg px-3 py-2 text-white"
                />
              </div>
              <div>
                <label className="text-xs text-gray-300 block mb-2">MULTIPLIER</label>
                <div className="bg-black/30 border border-white/20 rounded-lg px-3 py-2 text-white">
                  1.32x
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-300 block mb-2">PROFIT</label>
                <div className="bg-black/30 border border-white/20 rounded-lg px-3 py-2 text-green-400">
                  €{profit}
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              {!isGameActive ? (
                <button
                  onClick={startGame}
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg transition-colors"
                >
                  Manual
                </button>
              ) : (
                <button
                  onClick={cashout}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-colors"
                >
                  Cashout €{(betAmount * 1.32).toFixed(2)}
                </button>
              )}
              <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                Auto
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Chat/Stats */}
        <div className="w-80 bg-black/20 backdrop-blur-sm border-l border-white/10 p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs">👤</div>
              <span className="text-sm font-medium">{profit.toFixed(2)}</span>
              <span className="text-xs text-gray-400">your profit</span>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3 p-2 rounded">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-xs">GW</div>
              <div className="flex-1">
                <div className="text-white">GoodWolf95</div>
                <div className="text-gray-400 text-xs">I didn't mine to lose but</div>
              </div>
              <div className="text-xs text-gray-400">24m ago</div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs">CT</div>
              <div className="flex-1">
                <div className="text-white">CryptoTiger</div>
                <div className="text-gray-400 text-xs">Just hit 3 gems in a row!</div>
              </div>
              <div className="text-xs text-gray-400">18 sec ago</div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-xs">MS</div>
              <div className="flex-1">
                <div className="text-white">MindSeeker</div>
                <div className="text-gray-400 text-xs">Strategy is key in this game</div>
              </div>
              <div className="text-xs text-gray-400">2m ago</div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-xs">BH</div>
              <div className="flex-1">
                <div className="text-white">BrainHunter</div>
                <div className="text-gray-400 text-xs">Working my way up the ranks</div>
              </div>
              <div className="text-xs text-gray-400">5m ago</div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10">
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-3">RECENT GAMES</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-1">
                <span className="text-xs">Crazy Time</span>
                <span className="text-green-400 text-xs">+€139.5</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-xs">Gates of Olympus</span>
                <span className="text-red-400 text-xs">-€15</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-xs">Starlight Princess</span>
                <span className="text-green-400 text-xs">+€700.00</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <input
              type="text"
              placeholder="Message"
              className="w-full bg-black/30 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
