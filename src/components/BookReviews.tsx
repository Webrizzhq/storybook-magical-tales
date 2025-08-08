import React, { useState } from 'react';
import { Star, User, ThumbsUp, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

interface BookReviewsProps {
  bookId: string;
  bookTitle: string;
}

const BookReviews = ({ bookId, bookTitle }: BookReviewsProps) => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: '1',
      userName: 'Sarah M.',
      rating: 5,
      comment: 'My daughter absolutely loves this book! The illustrations are beautiful and the story is engaging.',
      date: '2024-01-15',
      helpful: 12
    },
    {
      id: '2',
      userName: 'James K.',
      rating: 4,
      comment: 'Great story that teaches valuable lessons. Perfect for bedtime reading.',
      date: '2024-01-10',
      helpful: 8
    },
    {
      id: '3',
      userName: 'Maria L.',
      rating: 5,
      comment: 'Wonderful African storytelling! My kids learned so much about the culture.',
      date: '2024-01-05',
      helpful: 15
    }
  ]);

  const [newReview, setNewReview] = useState({
    userName: '',
    rating: 5,
    comment: ''
  });

  const [showReviewForm, setShowReviewForm] = useState(false);

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.userName && newReview.comment) {
      const review: Review = {
        id: Date.now().toString(),
        userName: newReview.userName,
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toISOString().split('T')[0],
        helpful: 0
      };
      setReviews([review, ...reviews]);
      setNewReview({ userName: '', rating: 5, comment: '' });
      setShowReviewForm(false);
    }
  };

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={`${
              star <= rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
            onClick={interactive && onRatingChange ? () => onRatingChange(star) : undefined}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Reviews Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Reviews & Comments</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {renderStars(Math.round(averageRating))}
              <span className="text-lg font-semibold">{averageRating.toFixed(1)}</span>
              <span className="text-muted-foreground">({reviews.length} reviews)</span>
            </div>
          </div>
        </div>
        <Button 
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="bg-gradient-magic hover:shadow-glow"
        >
          <MessageCircle size={16} className="mr-2" />
          Write Review
        </Button>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <Card className="border-2 border-primary/20">
          <CardContent className="p-6">
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  value={newReview.userName}
                  onChange={(e) => setNewReview({ ...newReview, userName: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/50"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
                {renderStars(newReview.rating, true, (rating) => 
                  setNewReview({ ...newReview, rating })
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Your Review</label>
                <textarea
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/50 min-h-[100px]"
                  placeholder="Share your thoughts about this book..."
                  required
                />
              </div>
              
              <div className="flex gap-3">
                <Button type="submit" className="bg-gradient-magic hover:shadow-glow">
                  Submit Review
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setShowReviewForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-magic rounded-full flex items-center justify-center">
                    <User size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{review.userName}</h4>
                    <div className="flex items-center gap-2">
                      {renderStars(review.rating)}
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-foreground mb-4 leading-relaxed">{review.comment}</p>
              
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  <ThumbsUp size={14} className="mr-1" />
                  Helpful ({review.helpful})
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BookReviews;

