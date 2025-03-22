import React, { useEffect, useState } from 'react';
import { TowerControl as GameController, Flame, Trophy, Users, ChevronRight, Github } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredGames = [
    {
      title: "Cyber Nexus",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070",
      genre: "Sci-Fi RPG",
      players: "100K+"
    },
    {
      title: "Desert Warriors",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=2070",
      genre: "Action",
      players: "50K+"
    },
    {
      title: "Space Explorer",
      image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=2070",
      genre: "Adventure",
      players: "75K+"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GameController className="w-8 h-8 text-purple-500" />
              <span className="text-xl font-bold">GameVerse</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-purple-500 transition-colors">Games</a>
              <a href="#" className="hover:text-purple-500 transition-colors">Community</a>
              <a href="#" className="hover:text-purple-500 transition-colors">News</a>
              <a href="#" className="hover:text-purple-500 transition-colors">Support</a>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full transition-colors">
              Play Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=2070"
            className="w-full h-full object-cover"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-6 pt-32">
          <div className={`max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl font-bold mb-6">
              Enter the World of
              <span className="block text-purple-500">Infinite Gaming</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Experience the next generation of gaming with stunning graphics, 
              immersive storylines, and a vibrant community.
            </p>
            <div className="flex space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full transition-colors flex items-center">
                Get Started <ChevronRight className="ml-2" />
              </button>
              <button className="border border-white/20 hover:bg-white/10 px-8 py-3 rounded-full transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-800/50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 p-6 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors">
              <Users className="w-12 h-12 text-purple-500" />
              <div>
                <div className="text-2xl font-bold">2M+</div>
                <div className="text-gray-400">Active Players</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors">
              <Trophy className="w-12 h-12 text-purple-500" />
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-gray-400">Tournaments</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors">
              <Flame className="w-12 h-12 text-purple-500" />
              <div>
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-gray-400">Games Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Games */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredGames.map((game, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl transition-transform hover:-translate-y-2"
              >
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">{game.title}</h3>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-300">{game.genre}</span>
                    <span className="text-sm text-purple-400">{game.players}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2070"
            className="w-full h-full object-cover opacity-20"
            alt="CTA background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/80" />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Adventure?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join millions of players worldwide and experience the future of gaming today.
            Start your journey now!
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full transition-colors inline-flex items-center">
            Create Free Account <ChevronRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800/50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <GameController className="w-6 h-6 text-purple-500" />
                <span className="text-lg font-bold">GameVerse</span>
              </div>
              <p className="text-gray-400">
                The next generation gaming platform for everyone.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-purple-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-purple-500 transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-purple-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-purple-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-purple-500 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-500 transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-purple-500 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-purple-500 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-purple-500 transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 GameVerse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;