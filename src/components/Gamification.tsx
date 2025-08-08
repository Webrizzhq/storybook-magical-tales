import React, { useState, useEffect } from 'react';
import { Trophy, Star, BookOpen, Target, Award, Zap } from 'lucide-react';

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  earned: boolean;
  progress?: number;
  maxProgress?: number;
}

interface UserStats {
  booksRead: number;
  totalReadingTime: number;
  streakDays: number;
  level: number;
  experience: number;
  nextLevelExp: number;
}

const Gamification = () => {
  const [userStats, setUserStats] = useState<UserStats>({
    booksRead: 12,
    totalReadingTime: 480, // minutes
    streakDays: 7,
    level: 3,
    experience: 750,
    nextLevelExp: 1000
  });

  const [badges, setBadges] = useState<Badge[]>([
    {
      id: 'first-book',
      name: 'First Adventure',
      description: 'Read your first book',
      icon: <BookOpen className="text-blue-500" size={24} />,
      earned: true
    },
    {
      id: 'speed-reader',
      name: 'Speed Reader',
      description: 'Read 5 books in a week',
      icon: <Zap className="text-yellow-500" size={24} />,
      earned: true
    },
    {
      id: 'bookworm',
      name: 'Bookworm',
      description: 'Read 10 books',
      icon: <Trophy className="text-gold-500" size={24} />,
      earned: true
    },
    {
      id: 'streak-master',
      name: 'Streak Master',
      description: 'Read for 7 consecutive days',
      icon: <Target className="text-green-500" size={24} />,
      earned: true
    },
    {
      id: 'library-explorer',
      name: 'Library Explorer',
      description: 'Read books from 5 different categories',
      icon: <Award className="text-purple-500" size={24} />,
      earned: false,
      progress: 3,
      maxProgress: 5
    },
    {
      id: 'night-owl',
      name: 'Night Owl',
      description: 'Read 100 hours total',
      icon: <Star className="text-indigo-500" size={24} />,
      earned: false,
      progress: 8,
      maxProgress: 100
    }
  ]);

  const progressPercentage = (userStats.experience / userStats.nextLevelExp) * 100;

  const earnedBadges = badges.filter(badge => badge.earned);
  const unlockedBadges = badges.filter(badge => !badge.earned);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-background">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="text-primary" size={24} />
        <h2 className="text-2xl font-bold text-foreground font-child-friendly">Your Reading Journey</h2>
      </div>

      {/* User Level and Progress */}
      <div className="bg-card p-6 rounded-lg shadow-sm mb-8 border">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-card-foreground">Level {userStats.level} Reader</h3>
            <p className="text-muted-foreground">Keep reading to level up!</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Experience</p>
            <p className="text-lg font-bold text-primary">{userStats.experience} / {userStats.nextLevelExp}</p>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
          <div 
            className="bg-gradient-to-r from-primary to-primary/80 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Reading Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
          <BookOpen className="mx-auto mb-2 text-blue-500" size={32} />
          <h3 className="text-2xl font-bold text-card-foreground">{userStats.booksRead}</h3>
          <p className="text-muted-foreground">Books Read</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
          <Target className="mx-auto mb-2 text-green-500" size={32} />
          <h3 className="text-2xl font-bold text-card-foreground">{userStats.streakDays}</h3>
          <p className="text-muted-foreground">Day Streak</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
          <Star className="mx-auto mb-2 text-yellow-500" size={32} />
          <h3 className="text-2xl font-bold text-card-foreground">{Math.floor(userStats.totalReadingTime / 60)}h {userStats.totalReadingTime % 60}m</h3>
          <p className="text-muted-foreground">Reading Time</p>
        </div>
      </div>

      {/* Earned Badges */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-foreground">Earned Badges</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {earnedBadges.map((badge) => (
            <div key={badge.id} className="bg-card p-4 rounded-lg shadow-sm border text-center hover:shadow-md transition-shadow">
              <div className="mb-2">{badge.icon}</div>
              <h4 className="font-semibold text-card-foreground text-sm">{badge.name}</h4>
              <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Badges */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-foreground">In Progress</h3>
        <div className="space-y-4">
          {unlockedBadges.map((badge) => (
            <div key={badge.id} className="bg-card p-4 rounded-lg shadow-sm border">
              <div className="flex items-center gap-4">
                <div className="opacity-50">{badge.icon}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-card-foreground">{badge.name}</h4>
                  <p className="text-sm text-muted-foreground">{badge.description}</p>
                  {badge.progress !== undefined && badge.maxProgress !== undefined && (
                    <div className="mt-2">
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>Progress</span>
                        <span>{badge.progress} / {badge.maxProgress}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(badge.progress / badge.maxProgress) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gamification;

