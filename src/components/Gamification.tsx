import React, { useState, useEffect } from 'react';
import { Trophy, Star, BookOpen, Target, Award, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface UserBadge {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  earned: boolean;
  progress?: number;
  maxProgress?: number;
}

interface ReadingStreak {
  current: number;
  longest: number;
  target: number;
}

const Gamification = () => {
  const [userLevel, setUserLevel] = useState(3);
  const [totalPoints, setTotalPoints] = useState(1250);
  const [booksRead, setBooksRead] = useState(12);
  const [readingStreak, setReadingStreak] = useState<ReadingStreak>({
    current: 5,
    longest: 14,
    target: 7
  });

  const badges: UserBadge[] = [
    {
      id: 'first-book',
      name: 'First Adventure',
      description: 'Read your first book',
      icon: <BookOpen className="w-6 h-6" />,
      earned: true
    },
    {
      id: 'bookworm',
      name: 'Bookworm',
      description: 'Read 10 books',
      icon: <Star className="w-6 h-6" />,
      earned: true
    },
    {
      id: 'streak-master',
      name: 'Streak Master',
      description: 'Read for 7 days in a row',
      icon: <Zap className="w-6 h-6" />,
      earned: false,
      progress: readingStreak.current,
      maxProgress: readingStreak.target
    },
    {
      id: 'explorer',
      name: 'Genre Explorer',
      description: 'Read books from 5 different categories',
      icon: <Target className="w-6 h-6" />,
      earned: false,
      progress: 3,
      maxProgress: 5
    },
    {
      id: 'champion',
      name: 'Reading Champion',
      description: 'Read 25 books',
      icon: <Trophy className="w-6 h-6" />,
      earned: false,
      progress: booksRead,
      maxProgress: 25
    },
    {
      id: 'reviewer',
      name: 'Book Reviewer',
      description: 'Write 10 book reviews',
      icon: <Award className="w-6 h-6" />,
      earned: false,
      progress: 4,
      maxProgress: 10
    }
  ];

  const nextLevelPoints = userLevel * 500;
  const currentLevelProgress = totalPoints % 500;
  const progressPercentage = (currentLevelProgress / 500) * 100;

  const earnedBadges = badges.filter(badge => badge.earned);
  const inProgressBadges = badges.filter(badge => !badge.earned);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Your Reading Journey</h2>
        <p className="text-muted-foreground">Track your progress and earn badges as you explore amazing stories!</p>
      </div>

      {/* Level and Progress */}
      <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-primary">Level {userLevel}</h3>
              <p className="text-muted-foreground">Reading Explorer</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-accent">{totalPoints.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Total Points</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress to Level {userLevel + 1}</span>
              <span>{currentLevelProgress}/500 points</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="text-center">
          <CardContent className="p-6">
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-foreground">{booksRead}</h3>
            <p className="text-muted-foreground">Books Read</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <Zap className="w-12 h-12 text-accent mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-foreground">{readingStreak.current}</h3>
            <p className="text-muted-foreground">Day Streak</p>
            <p className="text-xs text-muted-foreground mt-1">Best: {readingStreak.longest} days</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-foreground">{earnedBadges.length}</h3>
            <p className="text-muted-foreground">Badges Earned</p>
          </CardContent>
        </Card>
      </div>

      {/* Earned Badges */}
      <div>
        <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
          <Award className="w-6 h-6" />
          Earned Badges ({earnedBadges.length})
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {earnedBadges.map((badge) => (
            <Card key={badge.id} className="border-2 border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-yellow-600 dark:text-yellow-400">
                    {badge.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{badge.name}</h4>
                    <Badge variant="secondary" className="text-xs">Earned</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* In Progress Badges */}
      <div>
        <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
          <Target className="w-6 h-6" />
          In Progress ({inProgressBadges.length})
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {inProgressBadges.map((badge) => (
            <Card key={badge.id} className="border-2 border-gray-200 hover:border-primary/50 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-muted-foreground">
                    {badge.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{badge.name}</h4>
                    <Badge variant="outline" className="text-xs">In Progress</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{badge.description}</p>
                
                {badge.progress !== undefined && badge.maxProgress && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>Progress</span>
                      <span>{badge.progress}/{badge.maxProgress}</span>
                    </div>
                    <Progress 
                      value={(badge.progress / badge.maxProgress) * 100} 
                      className="h-2" 
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Daily Challenge */}
      <Card className="border-2 border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Today's Challenge</h3>
              <p className="text-muted-foreground">Read for 20 minutes to continue your streak!</p>
            </div>
            <Button className="bg-gradient-magic hover:shadow-glow">
              Start Reading
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Gamification;

