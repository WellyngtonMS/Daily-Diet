import * as S from './styles';
import { DefaultHeader } from '@components/DefaultHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';

import { Form } from '@components/Form';

export function NewMeal() {
  const insets = useSafeAreaInsets();
  const [meal, setMeal] = useState({
    name: '',
    description: '',
    date: '',
    time: '',
    type: '' as 'GOOD' | 'BAD',
  });

  return (
    <S.Container style={{ paddingTop: insets.top }}>
      <DefaultHeader title="Nova refeição" />
      <S.Content>
        <Form
          name={meal.name}
          description={meal.description}
          date={meal.date}
          time={meal.time}
          type={meal.type}
          titleButton="Cadastrar Refeição"
          onSubmit={(data) => setMeal(data)}
        />
      </S.Content>
    </S.Container>
  );
}