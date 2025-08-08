import React, { useState, useEffect } from 'react';
import { Star, ThumbsUp, MessageCircle } from 'lucide-react';

interface Comment {
  id: number;
  author: string;
  text: string;
  rating: number;
  likes: number;
  timestamp: string;
}

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);

  useEffect(() => {
    // Mock API call to load comments
    const loadComments = async () => {
      const mockComments: Comment[] = [
        { 
          id: 1, 
          author: 'Alice Johnson', 
          text: 'Amazing collection of stories! My kids love reading these magical tales every night.', 
          rating: 5,
          likes: 12,
          timestamp: '2 days ago'
        },
        { 
          id: 2, 
          author: 'Bob Smith', 
          text: 'Very insightful and beautifully illustrated. The interactive features are fantastic!', 
          rating: 4,
          likes: 8,
          timestamp: '1 week ago'
        },
        { 
          id: 3, 
          author: 'Emma Wilson', 
          text: 'Perfect for bedtime stories. The audio narration is excellent quality.', 
          rating: 5,
          likes: 15,
          timestamp: '3 days ago'
        },
      ];
      setComments(mockComments);
    };
    loadComments();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: 'You',
        text: newComment.trim(),
        rating: newRating,
        likes: 0,
        timestamp: 'Just now'
      };
      setComments([comment, ...comments]);
      setNewComment('');
      setNewRating(5);
    }
  };

  const handleLike = (commentId: number) => {
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    ));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-background">
      <div className="flex items-center gap-2 mb-6">
        <MessageCircle className="text-primary" size={24} />
        <h2 className="text-2xl font-bold text-foreground font-child-friendly">Reviews & Comments</h2>
      </div>

      {/* Add Comment Form */}
      <div className="bg-card p-6 rounded-lg shadow-sm mb-8 border">
        <h3 className="text-lg font-semibold mb-4 text-card-foreground">Share Your Review</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-card-foreground">Rating</label>
            <div className="flex gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setNewRating(i + 1)}
                  className="focus:outline-none"
                >
                  <Star
                    size={20}
                    className={`${i < newRating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} hover:text-yellow-400 transition-colors`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-card-foreground">Your Review</label>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts about this story..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-semibold text-card-foreground">{comment.author}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex">{renderStars(comment.rating)}</div>
                  <span className="text-sm text-muted-foreground">{comment.timestamp}</span>
                </div>
              </div>
            </div>
            <p className="text-card-foreground mb-4 leading-relaxed">{comment.text}</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleLike(comment.id)}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ThumbsUp size={16} />
                <span className="text-sm">{comment.likes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;


