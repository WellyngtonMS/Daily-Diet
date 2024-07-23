import * as S from './styles';
import { SectionList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Percent } from '@components/Percent';
import { Button } from '@components/Button';
import { DietItem } from '@components/DietItem';
import { ListEmpty } from '@components/ListEmpty';

export function Home() {
  const navigation = useNavigation();
  const sections = [
    {
      date: '12.08.22',
      id: '120822',
      data: [
        {
          id: '120822-1',
          title: 'X-tudo',
          time: '20:00',
          status: 'BAD',
        },
        {
          id: '120822-2',
          title: 'Whey protein com leite',
          time: '16:00',
          status: 'GOOD',
        }
      ]
    },
    {
      date: '12.08.22',
      id: '120822',
      data: [
        {
          id: '120822-3',
          title: 'X-tudo',
          time: '20:00',
          status: 'BAD',
        },
        {
          id: '120822-4',
          title: 'Whey protein com leite',
          time: '16:00',
          status: 'GOOD',
        }
      ]
    },
    {
      date: '12.08.22',
      id: '120822',
      data: [
        {
          id: '120822-5',
          title: 'X-tudo',
          time: '20:00',
          status: 'BAD',
        },
        {
          id: '120822-6',
          title: 'Whey protein com leite',
          time: '16:00',
          status: 'GOOD',
        }
      ]
    },
    {
      date: '12.08.22',
      id: '120822',
      data: [
        {
          id: '120822-7',
          title: 'X-tudo',
          time: '20:00',
          status: 'BAD',
        },
        {
          id: '120822-8',
          title: 'Whey protein com leite',
          time: '16:00',
          status: 'GOOD',
        }
      ]
    }
  ];
  return (
    <S.Container>
      <Header />

      <Percent type="GOOD" percentage="90,86%" />

      <S.Title>Refeições</S.Title>
      <Button title="Nova refeição" icon={<S.PlusIcon />} onPress={() => { navigation.navigate('new-meal') }} />
      
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <DietItem
            status={item.status as 'GOOD' | 'BAD'}
            time={item.time}
            title={item.title}
          />
        )}
        renderSectionHeader={({ section: { date } }) => <S.TitleSection>{date}</S.TitleSection>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={sections.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message="Não há refeições cadastradas" />}
      />
    </S.Container>
  );
}