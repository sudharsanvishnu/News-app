import React from 'react'
import SearchBar from './app/components/SearchBar';
import Screen from './app/components/Screen';
import FeaturedNews from './app/components/FeaturedNews';
import SmallCard from './app/components/SmallCard';
import BreakingNews from './app/components/BreakingNews';
import data from './FakeData';
import TechNews from './app/components/TechNews';
import FlatCard from './app/components/FlatCard';
import PoliticalNews from './app/components/PoliticalNews';
import EntertainmentNews from './app/components/EntertainmentNews';

export default function App () {
  const breakingNews = data.filter(item => item.category === 'breaking-news');
  const techNews = data.filter(item => item.category === 'tech');
  const politicalNews = data.filter(item => item.category === 'political')
  const entertainmentNews = data.filter(item => item.category === 'entertainment')

  return(
     <Screen>
        <SearchBar/> 
        <FeaturedNews item={{
      id: '3',
      title: 'This is the title no three.',
      desc:
        'Desc is the short form of description and this format is the actual same as our real database.',
      thumbnail: 'http://lorempixel.com/400/200/',
      category: 'breaking-news',
        }}/>
        <BreakingNews data={breakingNews}/>
        <PoliticalNews data={politicalNews}/>
        <TechNews data={techNews}/>
        <EntertainmentNews data={entertainmentNews}/>
    </Screen>
  );
};

