import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import HomeHook from './hooks/HomeHook';
import CustomCard from '@src/components/customCard/CustomCard';
import {homeStyles} from './styles/stylesHome';

const Home = () => {
  const {data, handleSuccessBtn} = HomeHook();

  return (
    <SafeAreaView style={homeStyles.container}>
      <View style={homeStyles.content}>
        {data && (
          <FlatList
            data={data.articles}
            renderItem={({item}) => (
              <CustomCard
                title={item.source.name}
                subTitle={item.publishedAt}
                titleLarge={item.title}
                content={item.description}
                image={item.urlToImage}
                style={homeStyles.customCard}
                handleSuccessBtn={() => handleSuccessBtn(item.url)}
                successBtn="Go to news"
              />
            )}
            keyExtractor={item => `${item.source.id}${item.publishedAt}`}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
