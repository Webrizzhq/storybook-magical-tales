import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

interface MultilingualSupportProps {
  bookId?: string;
  availableLanguages?: Language[];
}

const MultilingualSupport: React.FC<MultilingualSupportProps> = ({ 
  bookId = "default",
  availableLanguages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
  ]
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(availableLanguages[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
    // Here you would typically trigger a language change event
    console.log(`Switching to ${language.name} for book ${bookId}`);
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-2 mb-4">
        <Globe className="text-primary" size={20} />
        <span className="text-sm font-medium text-foreground">Available Languages:</span>
      </div>
      
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-card border rounded-lg hover:bg-accent transition-colors min-w-[150px] justify-between"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">{selectedLanguage.flag}</span>
            <span className="text-sm font-medium text-card-foreground">{selectedLanguage.name}</span>
          </div>
          <ChevronDown 
            size={16} 
            className={`text-muted-foreground transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-card border rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
            {availableLanguages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language)}
                className={`w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-accent transition-colors ${
                  selectedLanguage.code === language.code ? 'bg-accent' : ''
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="text-sm font-medium text-card-foreground">{language.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Language availability notice */}
      <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="text-xs text-blue-700 dark:text-blue-300">
          <span className="font-medium">Note:</span> This story is available in {availableLanguages.length} languages. 
          Select your preferred language from the dropdown above to read in your native language.
        </p>
      </div>

      {/* Quick language switcher for popular languages */}
      <div className="mt-4">
        <p className="text-xs text-muted-foreground mb-2">Quick switch:</p>
        <div className="flex gap-2 flex-wrap">
          {availableLanguages.slice(0, 4).map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language)}
              className={`flex items-center gap-1 px-2 py-1 rounded text-xs border transition-colors ${
                selectedLanguage.code === language.code 
                  ? 'bg-primary text-primary-foreground border-primary' 
                  : 'bg-card text-card-foreground border-border hover:bg-accent'
              }`}
            >
              <span>{language.flag}</span>
              <span>{language.code.toUpperCase()}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultilingualSupport;

