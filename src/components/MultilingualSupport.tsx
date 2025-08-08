import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  available: boolean;
}

interface MultilingualSupportProps {
  bookId?: string;
  showBookVersions?: boolean;
}

const MultilingualSupport = ({ bookId, showBookVersions = false }: MultilingualSupportProps) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages: Language[] = [
    {
      code: 'en',
      name: 'English',
      nativeName: 'English',
      flag: '🇺🇸',
      available: true
    },
    {
      code: 'sw',
      name: 'Swahili',
      nativeName: 'Kiswahili',
      flag: '🇰🇪',
      available: true
    },
    {
      code: 'fr',
      name: 'French',
      nativeName: 'Français',
      flag: '🇫🇷',
      available: true
    },
    {
      code: 'ar',
      name: 'Arabic',
      nativeName: 'العربية',
      flag: '🇸🇦',
      available: false
    },
    {
      code: 'pt',
      name: 'Portuguese',
      nativeName: 'Português',
      flag: '🇵🇹',
      available: false
    },
    {
      code: 'am',
      name: 'Amharic',
      nativeName: 'አማርኛ',
      flag: '🇪🇹',
      available: false
    }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];
  const availableLanguages = languages.filter(lang => lang.available);
  const comingSoonLanguages = languages.filter(lang => !lang.available);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode);
    setIsDropdownOpen(false);
    // Here you would typically trigger a language change in your app
    console.log(`Language changed to: ${langCode}`);
  };

  if (showBookVersions) {
    return (
      <Card className="border-2 border-primary/20">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <Globe className="w-6 h-6" />
            Available Languages
          </h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Available Now</h4>
              <div className="grid gap-3">
                {availableLanguages.map((language) => (
                  <div 
                    key={language.code}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{language.flag}</span>
                      <div>
                        <p className="font-medium text-foreground">{language.name}</p>
                        <p className="text-sm text-muted-foreground">{language.nativeName}</p>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      variant={language.code === currentLanguage ? "default" : "outline"}
                      onClick={() => handleLanguageChange(language.code)}
                      className={language.code === currentLanguage ? "bg-gradient-magic" : ""}
                    >
                      {language.code === currentLanguage ? 'Current' : 'Select'}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {comingSoonLanguages.length > 0 && (
              <div>
                <h4 className="font-semibold text-foreground mb-3">Coming Soon</h4>
                <div className="grid gap-3">
                  {comingSoonLanguages.map((language) => (
                    <div 
                      key={language.code}
                      className="flex items-center justify-between p-3 border rounded-lg opacity-60"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{language.flag}</span>
                        <div>
                          <p className="font-medium text-foreground">{language.name}</p>
                          <p className="text-sm text-muted-foreground">{language.nativeName}</p>
                        </div>
                      </div>
                      <Badge variant="secondary">Coming Soon</Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-2 min-w-[140px]"
      >
        <Globe className="w-4 h-4" />
        <span className="text-lg">{currentLang.flag}</span>
        <span className="hidden sm:inline">{currentLang.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg z-50">
          <div className="p-2">
            <div className="mb-2">
              <p className="text-sm font-medium text-muted-foreground px-2 py-1">Available Languages</p>
            </div>
            
            {availableLanguages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left hover:bg-muted transition-colors ${
                  language.code === currentLanguage ? 'bg-primary/10 text-primary' : 'text-foreground'
                }`}
              >
                <span className="text-xl">{language.flag}</span>
                <div>
                  <p className="font-medium">{language.name}</p>
                  <p className="text-sm text-muted-foreground">{language.nativeName}</p>
                </div>
                {language.code === currentLanguage && (
                  <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
                )}
              </button>
            ))}

            {comingSoonLanguages.length > 0 && (
              <>
                <div className="border-t border-border my-2" />
                <div className="mb-2">
                  <p className="text-sm font-medium text-muted-foreground px-2 py-1">Coming Soon</p>
                </div>
                
                {comingSoonLanguages.map((language) => (
                  <div
                    key={language.code}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-md opacity-50 cursor-not-allowed"
                  >
                    <span className="text-xl">{language.flag}</span>
                    <div>
                      <p className="font-medium text-foreground">{language.name}</p>
                      <p className="text-sm text-muted-foreground">{language.nativeName}</p>
                    </div>
                    <Badge variant="secondary" className="ml-auto text-xs">Soon</Badge>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      )}

      {/* Overlay to close dropdown */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
};

export default MultilingualSupport;

