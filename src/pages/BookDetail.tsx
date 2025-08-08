import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import BookCard from '@/components/BookCard';
import BookReviews from '@/components/BookReviews';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getBookById, books } from '@/data/books';
import { ArrowLeft, ExternalLink, BookOpen, Users, Clock, Star } from 'lucide-react';

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const book = id ? getBookById(id) : null;

  if (!book) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <BookOpen className="w-20 h-20 text-muted-foreground mx-auto mb-4 opacity-50" />
          <h1 className="text-3xl font-bold text-primary mb-4">Book Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The book you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/books">
            <Button className="bg-gradient-magic">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Books
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedBooks = books
    .filter(b => b.category === book.category && b.id !== book.id)
    .slice(0, 3);

  return (
    <Layout>
      {/* Back Navigation */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link to="/books">
            <Button variant="ghost" className="gap-2 hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4" />
              Back to Books
            </Button>
          </Link>
        </div>
      </div>

      {/* Book Detail Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Book Cover */}
            <div className="relative">
              <div className="sticky top-8">
                <div className="relative group">
                  <img 
                    src={book.coverImage} 
                    alt={book.title}
                    className="w-full max-w-md mx-auto rounded-2xl shadow-magical transition-transform duration-500 group-hover:scale-105"
                  />
                  {book.featured && (
                    <Badge className="absolute top-4 right-4 bg-gradient-sunset text-white animate-bounce-gentle">
                      Featured
                    </Badge>
                  )}
                </div>
                
                {/* Purchase Actions */}
                <div className="mt-8 space-y-4">
                  <Button 
                    className="w-full bg-gradient-magic hover:shadow-glow transition-all duration-300"
                    size="lg"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Where to Buy
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Available at leading bookstores and online retailers
                  </p>
                </div>
              </div>
            </div>

            {/* Book Information */}
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <Badge variant="outline" className="text-sm">
                  {book.category}
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                  {book.title}
                </h1>
                
                <p className="text-xl text-muted-foreground">
                  by <span className="font-semibold text-foreground">{book.author}</span>
                </p>
              </div>

              {/* Book Details */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-0 bg-muted/50">
                  <CardContent className="p-4 text-center">
                    <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium text-muted-foreground">Age Range</p>
                    <p className="font-semibold text-foreground">{book.ageRange}</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 bg-muted/50">
                  <CardContent className="p-4 text-center">
                    <BookOpen className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium text-muted-foreground">Category</p>
                    <p className="font-semibold text-foreground">{book.category}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Synopsis */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <Star className="w-6 h-6 text-accent" />
                  Story Synopsis
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {book.synopsis}
                </p>
              </div>

              {/* Additional Info */}
              <Card className="border-0 bg-gradient-ocean/10">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-3">Why You'll Love This Book</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>Engaging storytelling that captures young imaginations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>Rich African cultural heritage and values</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>Age-appropriate themes and language</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>Perfect for independent reading or bedtime stories</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <BookReviews bookId={book.id} bookTitle={book.title} />
        </div>
      </section>

      {/* Related Books */}
      {relatedBooks.length > 0 && (
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                More from {book.category}
              </h2>
              <p className="text-muted-foreground">
                Discover other amazing stories in this collection
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedBooks.map((relatedBook) => (
                <BookCard key={relatedBook.id} book={relatedBook} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/books">
                <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                  View All Books
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default BookDetail;